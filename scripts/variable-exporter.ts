/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";

const FIGMA_VARIABLE_TOKEN = process.env.FIGMA_VARIABLE_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const OUTPUT_DIR = "src/variables";

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
  tablet: "(max-width: 62rem)",
  mobile: "(max-width: 48rem)",
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

  if (!res.ok) throw new Error(`Figma API error: ${res.status}`);

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
    return a === 1 ? `rgb(${rr}, ${gg}, ${bb})` : `rgba(${rr}, ${gg}, ${bb}, ${a})`;
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

interface FigmaVariable {
  name: string;
  resolvedValuesByMode?: Record<string, any>;
  valuesByMode?: Record<string, any>;
}
interface FigmaCollection {
  name: string;
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

  const wantedColls = Object.values(collections).filter(c =>
    WANTED_COLLECTIONS.has(c.name.trim())
  );

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
      if (tabletLines.length) blocks.push(`@media (max-width: 62rem) {\n${tabletLines.join("\n")}\n}`);
      if (mobileLines.length) blocks.push(`@media (max-width: 48rem) {\n${mobileLines.join("\n")}\n}`);

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

  console.log("All variables successfully imported!");
}

run().catch(err => {
  console.error("Failed:", err);
  process.exit(1);
});