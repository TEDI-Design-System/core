/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";

const FIGMA_VARIABLE_TOKEN = process.env.FIGMA_VARIABLE_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const OUTPUT_DIR = "src/variables";

// Machine-readable twin of the generated SCSS, for tooling that cannot parse
// compiled CSS (AI design docs, Figma tooling, downstream framework repos).
// Written to src/ so `npm run build` (cp -a src/* dist/) ships it alongside the
// stylesheet it describes — the two can never disagree about a released version.
const TOKENS_JSON_PATH = "src/tokens.json";

const WANTED_COLLECTIONS = new Set([
  "TEDI colors base",
  "TEDI colors semantic",
  "TEDI dimensions base",
  "TEDI dimensions semantic",
  "TEDI fonts base",
  "TEDI fonts semantic",
]);

const THEME_MAP: Record<string, { folder: string; fileSuffix: string }> = {
  default: { folder: "default", fileSuffix: "default" },
  light:   { folder: "default", fileSuffix: "default" },
  dark:    { folder: "default", fileSuffix: "dark" },
};

const RESPONSIVE_MEDIA: Record<string, string> = {
  desktop: "",
  tablet: "(width < 62rem)",
  mobile: "(width < 48rem)",
};

function sortCssVars(list: string[]) {
  list.sort((a, b) => {
    const nameA = a.trim().split(":")[0];
    const nameB = b.trim().split(":")[0];
    return nameA.localeCompare(nameB);
  });
}

function pxToRem(value: number, base = 16): string {
  const rem = value / base;
  return rem === Math.floor(rem)
    ? `${rem}rem`
    : `${rem.toFixed(4).replace(/\.?0+$/, "")}rem`;
}

function kebab(str: string): string {
  return str.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase();
}

function getThemeConfigFromMode(modeName: string): { folder: string; fileSuffix: string } | undefined {
  const lower = modeName.toLowerCase();
  for (const [key, config] of Object.entries(THEME_MAP)) {
    if (lower.includes(key)) return config;
  }
  return undefined;
}

function isBrandTheme(modeName: string): boolean {
  const config = getThemeConfigFromMode(modeName);
  if (!config) return false;
  const lower = modeName.toLowerCase();
  return !(lower.includes("default") || lower.includes("light") || lower.includes("dark"));
}

async function fetchFigmaVariables(): Promise<FigmaVariablesResponse> {
  const res = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`, {
    headers: { "X-Figma-Token": FIGMA_VARIABLE_TOKEN ?? "" },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Figma API error: ${res.status} ${res.statusText} — ${body || "<empty body>"}`);
  }

  return (await res.json()) as FigmaVariablesResponse;
}

function getUnit(collectionName: string): "px" | "rem" | null {
  const l = collectionName.toLowerCase();
  if (l.includes("dimension")) return "px";
  if (l.includes("container")) return "px";
  if (l.includes("font")) return "rem";
  return null;
}

function isLineHeight(varName: string): boolean {
  return varName.toLowerCase().includes("line-height");
}

function shouldConvertBaseToRem(varName: string): boolean {
  const lower = varName.toLowerCase();

  if (lower.includes("weight")) return false;
  if (lower.includes("opacity")) return false;
  if (lower.includes("z-index")) return false;
  if (lower.includes("flex")) return false;

  if (isLineHeight(varName)) return true;

  return (
    lower.includes("space") ||
    lower.includes("spacing") ||
    lower.includes("radius") ||
    lower.includes("border") ||
    lower.includes("size") ||
    lower.includes("gap") ||
    lower.includes("dimension") ||
    lower.includes("height") ||
    lower.includes("width")
  );
}

function resolveValue(
  raw: any,
  aliasMap: Record<string, string>,
  unit: "px" | "rem" | null,
  convertToRemForBase = false,
  varName = ""
): string {
  if (!raw) return "0";

  if (raw && typeof raw === "object" && (raw.type === "VARIABLE_ALIAS" || (raw.id && !("value" in raw)))) {
    const cssVar = aliasMap[raw.id];
    return cssVar ? `var(${cssVar})` : "0";
  }

  if (raw && typeof raw === "object" && "r" in raw) {
    const v = "value" in raw ? raw.value : raw;
    const { r, g, b, a = 1 } = v;
    const [rr, gg, bb] = [r, g, b].map((c: number) => Math.round(c * 255));
    const alpha = Number(a.toFixed(4));
    return a === 1 ? `rgb(${rr}, ${gg}, ${bb})` : `rgba(${rr}, ${gg}, ${bb}, ${alpha})`;
  }

  const value = raw && typeof raw === "object" && "value" in raw ? raw.value : raw;
  const lowerName = varName.toLowerCase();

  if (typeof value === "number") {
    if (convertToRemForBase) {
      if (lowerName.includes("weight")) {
        return value.toString();
      }

      if (shouldConvertBaseToRem(varName)) {
        return pxToRem(value);
      }

      return `${Math.round(value * 100) / 100}px`;
    }

    if (lowerName.includes("font") || unit === "rem") {
      if (lowerName.includes("weight")) return value.toString();
      if (isLineHeight(varName)) return pxToRem(value);
      return pxToRem(value);
    }

    if (unit === "px" || lowerName.includes("radius") || lowerName.includes("border")) {
      return `${Math.round(value * 100) / 100}px`;
    }

    return value.toString();
  }

  return value !== undefined ? String(value) : "0";
}

// Same predicate the SCSS path uses to decide "this is a reference, emit var(...)".
function isAliasRaw(raw: any): boolean {
  return !!raw && typeof raw === "object" && (raw.type === "VARIABLE_ALIAS" || (raw.id && !("value" in raw)));
}

// resolveValue() emits legacy comma notation, which stylelint --fix later rewrites
// to modern space notation in the SCSS. Nothing lints JSON, so normalise here —
// tokens.json must describe the colours exactly as the shipped stylesheet states
// them (`rgb(0 90 163)`, `rgb(0 0 0 / 10%)`), not as an intermediate form.
function toModernColorNotation(value: string): string {
  const rgba = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/.exec(value);
  if (!rgba) return value;

  const [, r, g, b, a] = rgba;
  if (a === undefined || Number(a) === 1) return `rgb(${r} ${g} ${b})`;

  const percent = Number((Number(a) * 100).toFixed(4));
  return `rgb(${r} ${g} ${b} / ${percent}%)`;
}

interface TokenEntry {
  /** What the stylesheet declares — `var(--other-token)` for a reference, else a literal. */
  value: string;
  /** The literal that value ultimately resolves to, with references followed. */
  resolved: string;
}

/** tier ("base" | "semantic") -> token name (no leading `--`) -> entry */
type TokenTiers = Record<string, Record<string, TokenEntry>>;

interface FigmaVariable {
  name: string;
  resolvedValuesByMode?: Record<string, any>;
  valuesByMode?: Record<string, any>;
}
interface FigmaCollection {
  name: string;
  remote: boolean;
  modes: { modeId: string; name: string }[];
  variableIds: string[];
  defaultModeId?: string;
}
interface FigmaVariablesResponse {
  meta: {
    variables: Record<string, FigmaVariable>;
    variableCollections: Record<string, FigmaCollection>;
  };
}

async function run() {
  const data = await fetchFigmaVariables();
  const variables = data.meta.variables as Record<string, FigmaVariable>;
  const collections = data.meta.variableCollections as Record<string, FigmaCollection>;

  const aliasMap: Record<string, string> = {};
  for (const id in variables) {
    aliasMap[id] = `--${kebab(variables[id].name)}`;
  }

  const wantedColls = Object.values(collections)
    .filter(c => !c.remote && WANTED_COLLECTIONS.has(c.name.trim()))
    .map(c => ({ ...c, name: c.name.trim() }));

  // Guard: each wanted collection must resolve to exactly one local collection.
  // Figma re-imports subscribed libraries as remote collections that share the
  // same name/key, and a silent overwrite would gut the generated tokens.
  for (const name of WANTED_COLLECTIONS) {
    const matches = wantedColls.filter(c => c.name === name);
    if (matches.length !== 1) {
      throw new Error(
        `Expected exactly 1 local collection named "${name}", found ${matches.length}. ` +
        `Aborting to avoid overwriting tokens.`
      );
    }
  }

  for (const coll of wantedColls) {
    const seen = new Map<string, string>();
    const deduped: string[] = [];
    for (const varId of coll.variableIds) {
      const cssName = aliasMap[varId];
      const keptId = seen.get(cssName);
      if (keptId) {
        console.warn(
          `Duplicate variable name in "${coll.name}": ${cssName} — ` +
          `keeping ${keptId}, ignoring ${varId}.`
        );
        continue;
      }
      seen.set(cssName, varId);
      deduped.push(varId);
    }
    coll.variableIds = deduped;
  }

  const baseLines: string[] = [];
  for (const coll of wantedColls.filter(c => c.name.includes("base"))) {
    const modeId = coll.defaultModeId ?? coll.modes[0]?.modeId;
    if (!modeId) continue;

    for (const varId of coll.variableIds) {
      const v = variables[varId];
      if (!v) continue;
      const raw = v.resolvedValuesByMode?.[modeId] ?? v.valuesByMode?.[modeId];
      if (raw === undefined) continue;

      const resolved = resolveValue(raw, aliasMap, null, true, v.name);
      baseLines.push(`  ${aliasMap[varId]}: ${resolved};`);
    }
  }

  if (baseLines.length > 0) {
    sortCssVars(baseLines);
    const css = `:root {\n${baseLines.join("\n")}\n}\n`;
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    fs.writeFileSync(path.join(OUTPUT_DIR, "_base-variables.scss"), css);
  }

  for (const coll of wantedColls.filter(c => !c.name.includes("base"))) {
    const unit = getUnit(coll.name);
    const isFonts = coll.name === "TEDI fonts semantic";
    const isColors = coll.name === "TEDI colors semantic";
    const isDimensions = coll.name === "TEDI dimensions semantic";

    if (isFonts) {
      const desktopLines: string[] = [];
      const tabletLines: string[] = [];
      const mobileLines: string[] = [];

      for (const mode of coll.modes) {
        const lower = mode.name.toLowerCase();

        if (isBrandTheme(mode.name)) continue;

        const target = lower.includes("mobile") ? mobileLines
                     : lower.includes("tablet") ? tabletLines
                     : desktopLines;

        for (const varId of coll.variableIds) {
          const v = variables[varId];
          if (!v) continue;
          const raw = v.resolvedValuesByMode?.[mode.modeId] ?? v.valuesByMode?.[mode.modeId];
          if (raw === undefined) continue;
          target.push(`  ${aliasMap[varId]}: ${resolveValue(raw, aliasMap, unit, false, v.name)};`);
        }
      }

      const blocks: string[] = [];
      if (desktopLines.length) blocks.push(desktopLines.join("\n"));
      if (tabletLines.length) blocks.push(`@media (width < 62rem) {\n${tabletLines.join("\n")}\n}`);
      if (mobileLines.length) blocks.push(`@media (width < 48rem) {\n${mobileLines.join("\n")}\n}`);

      if (blocks.length > 0) {
        const css = `.tedi-theme--default,\n:root {\n${blocks.join("\n\n")}\n}\n`;
        const dir = path.join(OUTPUT_DIR, "themes", "default");
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "font-variables__default.scss"), css);
      }
    }

    for (const mode of coll.modes) {
      const themeConfig = getThemeConfigFromMode(mode.name);
      if (!themeConfig) continue;

      const lines: string[] = [];
      for (const varId of coll.variableIds) {
        const v = variables[varId];
        if (!v) continue;
        const raw = v.resolvedValuesByMode?.[mode.modeId] ?? v.valuesByMode?.[mode.modeId];
        if (raw === undefined) continue;
        lines.push(`  ${aliasMap[varId]}: ${resolveValue(raw, aliasMap, unit, false, v.name)};`);
      }

      if (lines.length === 0) continue;
      sortCssVars(lines);

      const type = isColors ? "color" : isFonts ? "font" : "dimensional";
      const fileName = `${type}-variables__${themeConfig.fileSuffix}.scss`;
      const dir = path.join(OUTPUT_DIR, "themes", themeConfig.folder);
      const themeClass = `.tedi-theme--${themeConfig.fileSuffix}`;

      const css = `${themeClass} {\n${lines.join("\n")}\n}\n`;
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, fileName), css);
    }

    if (isDimensions) {
      const rootLines: string[] = [];
      const mediaBlocks: string[] = [];

      for (const mode of coll.modes) {
        const modeKebab = kebab(mode.name);
        const media = RESPONSIVE_MEDIA[modeKebab] ?? "";
        const lines: string[] = [];

        for (const varId of coll.variableIds) {
          const v = variables[varId];
          if (!v) continue;
          const raw = v.resolvedValuesByMode?.[mode.modeId] ?? v.valuesByMode?.[mode.modeId];
          if (raw === undefined) continue;
          lines.push(`  ${aliasMap[varId]}: ${resolveValue(raw, aliasMap, unit, false, v.name)};`);
        }

        if (lines.length > 0) {
          sortCssVars(lines);
          const blockContent = lines.join("\n");

          if (media) {
            mediaBlocks.push(`  @media ${media} {\n${blockContent}\n  }`);
          } else {
            rootLines.push(blockContent);
          }
        }
      }

      const finalBlocks: string[] = [];
      if (rootLines.length > 0) {
        finalBlocks.push(rootLines.join("\n\n"));
      }
      if (mediaBlocks.length > 0) {
        finalBlocks.push(...mediaBlocks);
      }

      if (finalBlocks.length > 0) {
        const css = `:root {\n${finalBlocks.join("\n\n")}\n}\n`;
        fs.writeFileSync(path.join(OUTPUT_DIR, "_dimensional-variables.scss"), css);
      }
    }
  }

  // ---------------------------------------------------------------------------
  // tokens.json — the same variables the SCSS above declares, as data.
  //
  // Two tiers, exactly as Figma models them: "base" (the * base collections) and
  // "semantic" (the * semantic collections). Consumers must NOT re-derive tiers
  // from name prefixes — that invents distinctions Figma does not make.
  //
  // Buckets mirror the cascade a page actually sees:
  //   themes.default    — :root on a default-theme desktop viewport
  //   themes.dark       — the .tedi-theme--dark override subset
  //   breakpoints.*     — the @media override subsets (tablet, mobile)
  // ---------------------------------------------------------------------------
  const collOfVar: Record<string, FigmaCollection & { name: string }> = {};
  for (const coll of wantedColls) {
    for (const varId of coll.variableIds) collOfVar[varId] = coll;
  }

  // What a mode MEANS, rather than what it is called: collections label the same
  // axis differently ("Light" vs "Default") and use different axes entirely
  // (colors are themed, dimensions/fonts are per-viewport). Classifying with the
  // same helpers the SCSS writers use keeps resolution correct across a rename.
  const classifyMode = (modeName: string): string | undefined => {
    const kebabName = kebab(modeName);
    if (kebabName in RESPONSIVE_MEDIA) return `viewport:${kebabName}`;
    const theme = getThemeConfigFromMode(modeName);
    return theme ? `theme:${theme.fileSuffix}` : undefined;
  };

  const pickMode = (coll: FigmaCollection, preferredModeName?: string): string | undefined => {
    if (preferredModeName) {
      const match = coll.modes.find(m => kebab(m.name) === kebab(preferredModeName));
      if (match) return match.modeId;

      const wanted = classifyMode(preferredModeName);
      if (wanted) {
        const equivalent = coll.modes.find(m => classifyMode(m.name) === wanted);
        if (equivalent) return equivalent.modeId;
      }
    }
    // No counterpart for this context — e.g. a dark colour referencing a
    // dimension, which has no dark variant. The target's default mode is the
    // right answer, not a guess.
    return coll.defaultModeId ?? coll.modes[0]?.modeId;
  };

  // Follow references to a literal. `preferredModeName` keeps a dark-theme token
  // resolving against dark values wherever the target collection also has that
  // mode, and falls back to the target's default mode when it does not.
  const resolveLiteral = (varId: string, modeId: string, preferredModeName?: string, depth = 0): string => {
    const v = variables[varId];
    const coll = collOfVar[varId];
    if (!v || !coll) return "0";

    const raw = v.resolvedValuesByMode?.[modeId] ?? v.valuesByMode?.[modeId];
    if (raw === undefined) return "0";

    if (isAliasRaw(raw)) {
      if (depth > 10) {
        console.warn(`Reference chain too deep (or cyclic) at ${aliasMap[varId]} — emitting "0".`);
        return "0";
      }
      const targetColl = collOfVar[raw.id];
      if (!targetColl) return "0";
      const targetMode = pickMode(targetColl, preferredModeName);
      return targetMode ? resolveLiteral(raw.id, targetMode, preferredModeName, depth + 1) : "0";
    }

    return resolveValue(raw, aliasMap, getUnit(coll.name), coll.name.includes("base"), v.name);
  };

  const themeTokens: Record<string, TokenTiers> = {};
  const breakpointTokens: Record<string, TokenTiers> = {};

  const addToken = (
    root: Record<string, TokenTiers>,
    bucket: string,
    tier: "base" | "semantic",
    varId: string,
    modeId: string,
    preferredModeName?: string
  ) => {
    const v = variables[varId];
    const coll = collOfVar[varId];
    if (!v || !coll) return;

    const raw = v.resolvedValuesByMode?.[modeId] ?? v.valuesByMode?.[modeId];
    if (raw === undefined) return;

    root[bucket] ??= {};
    root[bucket][tier] ??= {};
    root[bucket][tier][aliasMap[varId].replace(/^--/, "")] = {
      value: toModernColorNotation(
        resolveValue(raw, aliasMap, getUnit(coll.name), coll.name.includes("base"), v.name)
      ),
      resolved: toModernColorNotation(resolveLiteral(varId, modeId, preferredModeName)),
    };
  };

  for (const coll of wantedColls.filter(c => c.name.includes("base"))) {
    const modeId = pickMode(coll);
    if (!modeId) continue;
    for (const varId of coll.variableIds) addToken(themeTokens, "default", "base", varId, modeId, "default");
  }

  for (const coll of wantedColls.filter(c => !c.name.includes("base"))) {
    for (const mode of coll.modes) {
      if (isBrandTheme(mode.name)) continue;

      const modeKebab = kebab(mode.name);
      const themeConfig = getThemeConfigFromMode(mode.name);
      const isResponsive = modeKebab in RESPONSIVE_MEDIA;

      // Desktop is the base viewport (no media query), so it belongs to the theme
      // bucket; tablet/mobile are override subsets.
      let root = themeTokens;
      let bucket: string;
      if (isResponsive) {
        if (RESPONSIVE_MEDIA[modeKebab] === "") {
          bucket = "default";
        } else {
          root = breakpointTokens;
          bucket = modeKebab;
        }
      } else if (themeConfig) {
        bucket = themeConfig.fileSuffix;
      } else {
        continue;
      }

      for (const varId of coll.variableIds) {
        addToken(root, bucket, "semantic", varId, mode.modeId, mode.name);
      }
    }
  }

  // Sort every level so the scheduled job produces reviewable diffs, not churn.
  const sortTiers = (tiers: TokenTiers): TokenTiers =>
    Object.fromEntries(
      Object.keys(tiers).sort().map(tier => [
        tier,
        Object.fromEntries(Object.keys(tiers[tier]).sort().map(name => [name, tiers[tier][name]])),
      ])
    );
  const sortBuckets = (root: Record<string, TokenTiers>): Record<string, TokenTiers> =>
    Object.fromEntries(Object.keys(root).sort().map(b => [b, sortTiers(root[b])]));

  const tokensJson = {
    $comment:
      "Generated from Figma by scripts/variable-exporter.ts — do not edit. " +
      "Tiers are Figma's collections (base, semantic); never re-derive them from name prefixes. " +
      "themes.dark and breakpoints.* are override subsets of themes.default. " +
      "Read the package version from this package's package.json. " +
      "Does not include the hand-maintained z-index scale in variables/_utility-variables.scss.",
    themes: sortBuckets(themeTokens),
    breakpoints: sortBuckets(breakpointTokens),
  };

  fs.writeFileSync(TOKENS_JSON_PATH, JSON.stringify(tokensJson, null, 2) + "\n");

  const counts = Object.entries(tokensJson.themes)
    .map(([name, tiers]) => `${name}: ${Object.entries(tiers).map(([t, v]) => `${t} ${Object.keys(v).length}`).join(", ")}`)
    .concat(Object.entries(tokensJson.breakpoints).map(([name, tiers]) =>
      `${name}: ${Object.entries(tiers).map(([t, v]) => `${t} ${Object.keys(v).length}`).join(", ")}`))
    .join(" | ");
  console.log(`${TOKENS_JSON_PATH} written — ${counts}`);

  console.log("All variables successfully imported!");
}

run().catch(err => {
  console.error("Failed:", err);
  process.exit(1);
});