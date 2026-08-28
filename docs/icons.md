# Icons (Material Symbols)

TEDI ships the [Material Symbols](https://fonts.google.com/icons) icon font in three
styles — **Outlined**, **Rounded**, and **Sharp** — at roughly 350–460 KB each
(~1 MB combined). Most applications use a single, consistent style, so loading all
three is usually wasted bytes. This guide shows how to load only what you use.

> Background: [TEDI-Design-System/react#41](https://github.com/TEDI-Design-System/react/issues/41).

---

## TL;DR

- The main stylesheet (`@tedi-design-system/core`) still declares **all three** styles —
  no change for existing consumers.
- To ship only one style, import a **single-style entry** and precache only that woff2.
- All three woff2 files are always present in the package's `fonts/` directory; which
  ones your app actually downloads/precaches is up to you.

---

## Loading a single style (recommended)

Import the granular stylesheet for the style you use instead of the full bundle:

```ts
// Only the outlined font is referenced → only one woff2 is needed.
// Import the bare specifier (no extension) — it resolves to the compiled CSS
// via the package's `exports` map.
import '@tedi-design-system/core/icons/outlined';
```

Available entries:

| Import | Declares | References |
|---|---|---|
| `@tedi-design-system/core/icons/outlined` | `.material-symbols`, `.material-symbols--outlined` | `material-symbols-outlined.woff2` |
| `@tedi-design-system/core/icons/rounded` | `.material-symbols`, `.material-symbols--rounded` | `material-symbols-rounded.woff2` |
| `@tedi-design-system/core/icons/sharp` | `.material-symbols`, `.material-symbols--sharp` | `material-symbols-sharp.woff2` |
| `@tedi-design-system/core/icons/all` | all three modifiers | all three woff2 |

Each entry contains the shared `.material-symbols` base class plus one `@font-face`, so a
single-style import pulls in exactly one icon font. The same specifier serves both worlds:
bundlers get the compiled CSS, and Sass (`pkg:` scheme, below) gets the SCSS source.

### SCSS

If you compile SCSS, `@use` the matching entry via the Sass [Node package
importer](https://sass-lang.com/documentation/js-api/classes/nodepackageimporter/)
(`pkg:` scheme):

```scss
@use 'pkg:@tedi-design-system/core/icons/outlined';
// or '…/icons/rounded', '…/icons/sharp', '…/icons/all'
```

The `pkg:` scheme requires the Node package importer to be enabled — it's built into
Dart Sass (`--pkg-importer=node` on the CLI, or `importers: [new NodePackageImporter()]`
in the JS API) and is what resolves these entries through the package's `exports` map.

#### Font path

Each `@font-face` references `/fonts/<file>.woff2` by default — the location the **compiled**
stylesheet ships with. When you compile the SCSS yourself, that absolute URL points at your
site root, so you must either:

- **serve the packaged fonts at `/fonts/`** (copy `@tedi-design-system/core/fonts/*.woff2`
  into your public root), or
- **override the path** to wherever your bundler serves them, via the `$font-path` variable
  (include the trailing slash):

  ```scss
  @use 'pkg:@tedi-design-system/core/icons/outlined' with (
    $font-path: '~/assets/fonts/'
  );
  ```

`icons/all` is not path-configurable (it aggregates the three styles); to customise the path
with every style, `@use` the per-style entries individually.

---

## Important: scope your service-worker precache

Modularising the CSS only tells the browser *which* font to download lazily. In a PWA,
Workbox precaches every build asset that matches its `globPatterns`. If your patterns
include woff2 files (directly, or via a broad pattern), all three can be precached even
when your CSS references only one. To get the full saving, keep your existing patterns and
`globIgnores` the unused fonts.

**Workbox (`vite-plugin-pwa`) example** — keep your app's patterns, exclude the two unused
fonts:

```ts
VitePWA({
  workbox: {
    // Keep whatever your app already precaches; just add the ignores.
    globPatterns: ['**/*.{js,css,html,woff2}'],
    globIgnores: ['**/material-symbols-{rounded,sharp}.woff2'],
  },
})
```

This replaces the older workaround of deleting font files via custom Vite config — the
files still ship in the package, you simply choose which to precache.

---

## Using the full bundle (default / backward-compatible)

Importing the main stylesheet keeps all three styles available, exactly as before:

```ts
import '@tedi-design-system/core';
```

`@font-face` is lazy, so an unused style is not downloaded on page load — but note the
service-worker caveat above still applies to precaching.
