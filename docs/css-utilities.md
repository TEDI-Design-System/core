# CSS Utility Classes & SCSS Mixins

A comprehensive reference of all available utility/helper CSS classes and SCSS mixins in `@tedi-design-system/core`.

---

## Table of Contents

- [Display & Visibility](#display--visibility)
- [Flexbox](#flexbox)
- [Grid System](#grid-system)
- [Typography](#typography)
  - [Headings](#headings)
  - [Body Text Sizes](#body-text-sizes)
  - [Text Colors](#text-colors)
  - [Text Transform](#text-transform)
  - [Text Wrapping & Whitespace](#text-wrapping--whitespace)
  - [Text Weight & Style](#text-weight--style)
  - [Text Alignment](#text-alignment)
  - [Text Line Height](#text-line-height)
- [Icons](#icons)
- [Links](#links)
- [Print Utilities](#print-utilities)
- [SCSS Mixins](#scss-mixins)
  - [General Mixins](#general-mixins)
  - [Breakpoint Mixins](#breakpoint-mixins)
  - [Typography Mixins](#typography-mixins)
- [Breakpoints Reference](#breakpoints-reference)
- [Spacing Scale Reference](#spacing-scale-reference)

---

## Display & Visibility

| Class | Effect |
|-------|--------|
| `.hidden`, `[hidden]` | `display: none !important` |
| `.block` | `display: block !important` |
| `.inline-block` | `display: inline-block !important` |
| `.flex` | `display: flex !important` |
| `.sr-only` | Visually hidden but accessible to screen readers |
| `.sr-only.focusable` | Becomes visible on `:focus` / `:active` (keyboard navigation) |

---

## Flexbox

> All flexbox utilities are **responsive** — append `-sm`, `-md`, `-lg`, `-xl`, or `-xxl` for breakpoint-specific behavior (e.g. `.flex-md-row`, `.justify-lg-center`).

### Flex Direction

| Class | Value |
|-------|-------|
| `.flex-row` | `flex-direction: row` |
| `.flex-column` | `flex-direction: column` |
| `.flex-row-reverse` | `flex-direction: row-reverse` |
| `.flex-column-reverse` | `flex-direction: column-reverse` |

### Flex Fill, Grow & Shrink

| Class | Value |
|-------|-------|
| `.flex-fill` | `flex: 1 1 auto` |
| `.flex-grow-0` | `flex-grow: 0` |
| `.flex-grow-1` | `flex-grow: 1` |
| `.flex-shrink-0` | `flex-shrink: 0` |
| `.flex-shrink-1` | `flex-shrink: 1` |

### Flex Wrap

| Class | Value |
|-------|-------|
| `.flex-wrap` | `flex-wrap: wrap` |
| `.flex-nowrap` | `flex-wrap: nowrap` |
| `.flex-wrap-reverse` | `flex-wrap: wrap-reverse` |

### Justify Content

| Class | Value |
|-------|-------|
| `.justify-start` | `justify-content: flex-start` |
| `.justify-end` | `justify-content: flex-end` |
| `.justify-center` | `justify-content: center` |
| `.justify-between` | `justify-content: space-between` |
| `.justify-around` | `justify-content: space-around` |
| `.justify-evenly` | `justify-content: space-evenly` |

### Align Items

| Class | Value |
|-------|-------|
| `.align-start` | `align-items: flex-start` |
| `.align-end` | `align-items: flex-end` |
| `.align-center` | `align-items: center` |
| `.align-baseline` | `align-items: baseline` |
| `.align-stretch` | `align-items: stretch` |

### Align Self

| Class | Value |
|-------|-------|
| `.align-self-auto` | `align-self: auto` |
| `.align-self-start` | `align-self: flex-start` |
| `.align-self-end` | `align-self: flex-end` |
| `.align-self-center` | `align-self: center` |
| `.align-self-baseline` | `align-self: baseline` |
| `.align-self-stretch` | `align-self: stretch` |

### Order

| Class | Value |
|-------|-------|
| `.order-first` | `order: -1` |
| `.order-0` … `.order-5` | `order: 0` … `order: 5` |
| `.order-last` | `order: 6` |

### Gap

| Class | Value |
|-------|-------|
| `.gap-0` | `gap: 0` |
| `.gap-1` | `gap: 0.25rem` |
| `.gap-2` | `gap: 0.5rem` |
| `.gap-3` | `gap: 1rem` |
| `.gap-4` | `gap: 1.5rem` |
| `.gap-5` | `gap: 3rem` |

---

## Grid System

> 12-column grid with a default gutter of `1.5rem`. All classes are responsive with breakpoint infixes: `sm`, `md`, `lg`, `xl`, `xxl`.

### Columns

| Class | Purpose |
|-------|---------|
| `.col`, `.col-{bp}` | Equal-width flex column |
| `.col-{bp}-auto` | Auto-width column |
| `.col-{bp}-{1-12}` | Sized column (out of 12) |
| `.offset-{bp}-{0-11}` | Left margin offset |
| `.row-cols-{bp}-auto` | Auto-width children |
| `.row-cols-{bp}-{1-12}` | Force N equal-width columns per row |

### Gutters

| Class | Purpose |
|-------|---------|
| `.g-{bp}-{0-5}` | Gap (both axes) |
| `.gx-{bp}-{0-5}` | Horizontal gap |
| `.gy-{bp}-{0-5}` | Vertical gap |

### CSS Grid

| Class | Purpose |
|-------|---------|
| `.g-col-{bp}-{1-12}` | CSS Grid column span |
| `.g-start-{bp}-{1-11}` | CSS Grid column start position |

---

## Typography

### Headings

| Class | Description |
|-------|-------------|
| `.tedi-text--h1` | H1 typography |
| `.tedi-text--h2` | H2 typography |
| `.tedi-text--h3` | H3 typography |
| `.tedi-text--h4` | H4 typography |
| `.tedi-text--h5` | H5 typography |
| `.tedi-text--h6` | H6 typography |

### Body Text Sizes

| Class | Description |
|-------|-------------|
| `.tedi-text--default` | Body regular (includes font-family, color) |
| `.tedi-text--small` | Body small |
| `.text-subtitle` | Subtitle (uppercase) |
| `.text-subtitle.text-small` | Small subtitle |
| `.text-extra-small` | Extra small text |

### Text Colors

| Class | CSS Variable |
|-------|-------------|
| `.tedi-text--default`, `.tedi-text--primary` | `--general-text-primary` |
| `.tedi-text--secondary` | `--general-text-secondary` |
| `.tedi-text--tertiary` | `--general-text-tertiary` |
| `.tedi-text--white` | `--general-text-white` |
| `.tedi-text--disabled` | `--general-text-disabled` |
| `.tedi-text--brand` | `--general-text-brand` |
| `.tedi-text--success` | `--general-status-success-text` |
| `.tedi-text--warning` | `--general-status-warning-text` |
| `.tedi-text--danger` | `--general-status-danger-text` |
| `.tedi-text--info` | `--general-status-info-text` |
| `.tedi-text--neutral` | `--general-status-neutral-text` |

### Text Transform

| Class | Effect |
|-------|--------|
| `.text-uppercase` | `text-transform: uppercase` |
| `.text-lowercase` | `text-transform: lowercase` |
| `.text-capitalize` | `text-transform: capitalize` |
| `.text-capitalize-first` | Capitalizes first letter only (via `::first-letter`) |

### Text Wrapping & Whitespace

| Class | Effect |
|-------|--------|
| `.text-nowrap` | `white-space: nowrap` |
| `.text-break-all` | `word-break: break-all` |
| `.text-break-word` | `overflow-wrap: break-word` |
| `.text-break-spaces` | `white-space: break-spaces` |

### Text Weight & Style

| Class | Effect |
|-------|--------|
| `.text-bold` | `font-weight: 700` |
| `.text-thin` | `font-weight: 300` |
| `.text-italic` | `font-style: italic` |

### Text Alignment

| Class | Effect |
|-------|--------|
| `.text-center` | `text-align: center` |
| `.text-left` | `text-align: left` |
| `.text-right` | `text-align: right` |

### Text Line Height

| Class | Effect |
|-------|--------|
| `.text-line-normal` | `line-height: normal` |
| `.text-line-condensed` | `line-height: 1` |

---

## Icons

| Class | Description |
|-------|-------------|
| `.material-symbols` | Base class for Material Symbols icons |
| `.material-symbols--outlined` | Outlined icon variant |
| `.material-symbols--rounded` | Rounded icon variant |
| `.material-symbols--sharp` | Sharp icon variant |

**Usage:**

```html
<span class="material-symbols material-symbols--outlined">home</span>
```

---

## Links

| Class | Effect |
|-------|--------|
| `a.link-white` | White link color (`--link-white-default`) |
| `a.no-underline` | Removes text-decoration underline |

---

## Print Utilities

> These classes only take effect inside `@media print`.

| Class | Effect |
|-------|--------|
| `.no-print` | Hidden when printing |
| `.no-print.show-print` | Override to show in print |

### Page Break Control

Available for `break-before`, `break-after`, and `break-inside`:

| Class Pattern | Values |
|--------------|--------|
| `.break-before-{value}` | `auto`, `avoid`, `avoid-column`, `avoid-page`, `avoid-region` |
| `.break-after-{value}` | `auto`, `avoid`, `avoid-column`, `avoid-page`, `avoid-region` |
| `.break-inside-{value}` | `auto`, `avoid`, `avoid-column`, `avoid-page`, `avoid-region` |

---

## SCSS Mixins

### General Mixins

#### `print-grayscale`

Applies grayscale filter in print media.

```scss
@use 'mixins';

.my-colored-element {
  color: var(--color-primary);
  @include mixins.print-grayscale;
}
```

#### `visually-hidden`

Hides an element visually while keeping it accessible to screen readers.

```scss
@use 'mixins';

.my-label {
  @include mixins.visually-hidden;
}
```

#### `focus-element`

Applies the standard accessible focus outline. Customizable via `--global-outline-color` and `--global-outline-offset` CSS variables.

```scss
@use 'mixins';

.my-interactive-element:focus {
  @include mixins.focus-element;
}
```

#### `button-reset`

Resets all default button styling (padding, font, color, cursor, border, background). Includes disabled cursor handling.

```scss
@use 'mixins';

.my-custom-button {
  @include mixins.button-reset;
}
```

### Breakpoint Mixins

#### `media-breakpoint-up($name)`

Applies styles from the given breakpoint and up (min-width).

```scss
@use 'bootstrap-utility/breakpoints';

.sidebar {
  display: none;

  @include breakpoints.media-breakpoint-up(md) {
    display: block; // visible from 768px and up
  }
}
```

#### `media-breakpoint-down($name)`

Applies styles below the given breakpoint (max-width).

```scss
@use 'bootstrap-utility/breakpoints';

.mobile-menu {
  @include breakpoints.media-breakpoint-down(lg) {
    display: block; // visible below 992px
  }
}
```

#### `media-breakpoint-between($lower, $upper)`

Applies styles between two breakpoints.

```scss
@use 'bootstrap-utility/breakpoints';

.tablet-only {
  @include breakpoints.media-breakpoint-between(md, lg) {
    font-size: 1.1rem; // 768px to 991.98px
  }
}
```

#### `media-breakpoint-only($name)`

Applies styles only at the given breakpoint range.

```scss
@use 'bootstrap-utility/breakpoints';

.sm-special {
  @include breakpoints.media-breakpoint-only(sm) {
    padding: 1rem; // 576px to 767.98px only
  }
}
```

### Typography Mixins

#### `heading-styles($level)`

Applies heading typography (font-size, font-weight, line-height) from CSS variables.

```scss
@use 'typography';

.my-title {
  @include typography.heading-styles(h2);
}
```

---

## Breakpoints Reference

| Name | Min-width | Typical Usage |
|------|-----------|---------------|
| `xs` | 0 | Mobile (default) |
| `sm` | 576px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 992px | Desktops |
| `xl` | 1200px | Large desktops |
| `xxl` | 1400px | Extra large screens |

---

## Spacing Scale Reference

Used by gap, gutter, and spacer utilities:

| Key | Value |
|-----|-------|
| `0` | `0` |
| `1` | `0.25rem` (4px) |
| `2` | `0.5rem` (8px) |
| `3` | `1rem` (16px) |
| `4` | `1.5rem` (24px) |
| `5` | `3rem` (48px) |
