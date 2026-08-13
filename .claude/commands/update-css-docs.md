Update the CSS utilities documentation at `docs/css-utilities.md` by reading the current SCSS source files and comparing against the existing documentation.

## Source files to read

- `src/_helpers.scss` — Display & Visibility utilities
- `src/bootstrap-utility/_utilities.scss` — Flexbox utilities (with `src/variables/_bootstrap-variables.scss` for spacer values)
- `src/bootstrap-utility/_grid.scss` — Grid system classes
- `src/_typography.scss` — Typography classes (headings, body sizes, colors, transform, wrapping, weight, alignment, line-height)
- `src/_icons.scss` — Icon classes
- `src/_base.scss` — Link utilities
- `src/_print.scss` — Print utilities
- `src/_mixins.scss` — General SCSS mixins (only public ones: `print-grayscale`, `visually-hidden`, `focus-element`, `button-reset`)
- `src/bootstrap-utility/_breakpoints.scss` — Breakpoint mixins (only: `media-breakpoint-up`, `media-breakpoint-down`, `media-breakpoint-between`, `media-breakpoint-only`)

## Rules

1. Read each source file above and the existing `docs/css-utilities.md`
2. Compare the SCSS source against the documented classes/mixins
3. Report what was added, modified, or removed
4. Apply the changes to `docs/css-utilities.md`

### What to include
- Public utility CSS classes that consumers can use on any element
- Public SCSS mixins that consumers would use in their own stylesheets
- Prefer `.tedi-text--*` pattern classes over legacy aliases (`.text-*`, `.h1`, etc.)
- Keep the Table of Contents in sync with sections

### What NOT to include
- HTML element selectors (e.g. `h1`, `b`, `strong`, `small`, `i`) — these are base styles, not utility classes
- Internal file paths or `> Source:` references
- Internal/private mixins (`table-cell-selector`, `make-row`, `make-col-*`, `row-cols`, breakpoint functions like `breakpoint-next`/`breakpoint-min`/`breakpoint-max`/`breakpoint-infix`)
- Internal component classes (e.g. `.scroll-disabled`)
- Legacy/duplicate classes when a preferred `.tedi-text--*` equivalent exists (e.g. don't document `.text-normal` when `.tedi-text--default` exists)

### Formatting
- Follow the existing structure and markdown table format in `docs/css-utilities.md`
- Keep descriptions concise
- Update the Table of Contents if sections are added or removed
