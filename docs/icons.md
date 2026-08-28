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
import '@tedi-design-system/core/icons/outlined.css';
```

Available entries:

| Import | Declares | References |
|---|---|---|
| `@tedi-design-system/core/icons/outlined.css` | `.material-symbols`, `.material-symbols--outlined` | `material-symbols-outlined.woff2` |
| `@tedi-design-system/core/icons/rounded.css` | `.material-symbols`, `.material-symbols--rounded` | `material-symbols-rounded.woff2` |
| `@tedi-design-system/core/icons/sharp.css` | `.material-symbols`, `.material-symbols--sharp` | `material-symbols-sharp.woff2` |
| `@tedi-design-system/core/icons/all.css` | all three modifiers | all three woff2 |

Each entry contains the shared `.material-symbols` base class plus one `@font-face`, so a
single-style import pulls in exactly one icon font.

### SCSS

If you compile SCSS, `@use` the matching partial instead:

```scss
@use '@tedi-design-system/core/icons/outlined';
// or 'icons/rounded', 'icons/sharp', 'icons/all'
```

---

## Important: scope your service-worker precache

Modularising the CSS only tells the browser *which* font to download lazily. In a PWA the
**service worker precaches every asset in the build**, so all three woff2 can still be
cached even if your CSS references only one. To get the full saving, exclude the unused
fonts from your precache manifest.

**Workbox (`vite-plugin-pwa`) example** — precache only the outlined font:

```ts
VitePWA({
  workbox: {
    globPatterns: ['**/*.{js,css,html}', '**/material-symbols-outlined.woff2'],
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
