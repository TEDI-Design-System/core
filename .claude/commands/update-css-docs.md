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
2. **Expand generated selectors before comparing.** `src/bootstrap-utility/_utilities.scss` and
   `_grid.scss` contain no literal selectors — they are loops over a `$utilities` map, so grepping
   for `.flex-md-row` finds nothing and a naive diff will "helpfully" delete correct documentation.
   For each map entry, derive the real class set from its `class` (falling back to `property`), its
   `values`, and whether `responsive: true` is set; a responsive entry also generates a variant per
   breakpoint infix (`sm`, `md`, `lg`, `xl`, `xxl`), e.g. `.flex-row` → `.flex-md-row`. Documenting
   the breakpoint variants with one blanket note per section (as the doc does today) is preferred
   over enumerating every combination.
3. Compare the SCSS source — expanded per step 2 — against the documented classes/mixins
4. Report what was added, modified, or removed
5. Apply the changes to `docs/css-utilities.md`

### What to include
- Public utility CSS classes that consumers can use on any element
- Public SCSS mixins that consumers would use in their own stylesheets
- Legacy aliases (`.text-*`, `.h1`, etc.) **for as long as the source still emits them** — label
  them as legacy and name the preferred replacement (e.g. "`.text-normal` — legacy alias, prefer
  `.tedi-text--default`"). They are shipped, supported CSS: consumers have them in existing markup
  and need to know both that they still work and what to migrate to. Present `.tedi-text--*` as the
  pattern to write in new code.
- Keep the Table of Contents in sync with sections

### What NOT to include
- HTML element selectors (e.g. `h1`, `b`, `strong`, `small`, `i`) — these are base styles, not utility classes
- Internal file paths or `> Source:` references
- Internal/private mixins (`table-cell-selector`, `make-row`, `make-col-*`, `row-cols`, breakpoint functions like `breakpoint-next`/`breakpoint-min`/`breakpoint-max`/`breakpoint-infix`)
- Internal component classes (e.g. `.scroll-disabled`)
- Classes the source no longer emits. Removing a documented class requires **confirming it is gone
  from the SCSS** (grep the source files above, and expand generated selectors per rule 2) — the
  existence of a newer `.tedi-text--*` equivalent is not evidence that the old alias was dropped

### Formatting
- Follow the existing structure and markdown table format in `docs/css-utilities.md`
- Keep descriptions concise
- Update the Table of Contents if sections are added or removed
