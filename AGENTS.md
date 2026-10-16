# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Overview

`@tedi-design-system/core`: design tokens, SCSS variables, base styles, utility classes, fonts and icons shared by TEDI React and TEDI Angular. Plain SCSS, no framework code.

## Commands

```bash
npm run build             # Compile CSS and assemble the package in dist/
npm run lint              # Stylelint on src/**/*.scss with --fix
npm run import-variables  # Regenerate variables from Figma (needs FIGMA_VARIABLE_TOKEN and FIGMA_FILE_KEY in .env)
```

Node 24 (`.nvmrc`), npm 11.

## Structure

- `src/index.scss`: full stylesheet entry. `src/index-without-icons.scss` mirrors it without `@use 'icons'`; keep the two `@use` lists in sync.
- `src/variables/`: CSS custom properties (tokens). Primitives use the `--tedi-` prefix (`--tedi-blue-500`); semantic tokens don't (`--general-icon-brand`, `--button-*`).
- `src/variables/themes/default/`: theme tokens, scoped to `.tedi-theme--default` and `.tedi-theme--dark`.
- `src/bootstrap-utility/`: breakpoints, grid and the generated utility classes (loops over a `$utilities` map, so classes like `.flex-md-row` never appear literally).
- `src/_typography.scss`, `_helpers.scss`, `_base.scss`, `_print.scss`, `_mixins.scss`: global styles, utility classes and public mixins.
- `src/icons/`: Material Symbols icon styles (`outlined`, `rounded`, `sharp`, `all`), each also built as its own CSS file.
- `public/fonts/`: font files, copied to `dist/fonts/`.
- `docs/`: consumer docs (`css-utilities.md`, `icons.md`, `component-types.md`), shipped in the package.

## Generated Files

Do not edit these by hand. `scripts/variable-exporter.ts` writes them from Figma, and the `Sync Figma Variables` workflow opens a PR with the changes twice a day:

- `src/variables/_base-variables.scss`
- `src/variables/_dimensional-variables.scss`
- `src/variables/themes/default/*.scss`
- `src/tokens.json` (machine-readable copy of the tokens)

To change a generated token, change it in Figma or fix the exporter.

## Build Output

`dist/` contains a copy of `src/`, compiled `index.css`, `index-without-icons.css`, `icons/*.css`, `fonts/`, `docs/`, `README.md` and `package.json`. The build rewrites font URLs to `./fonts/` (root CSS) and `../fonts/` (`icons/*.css`). If you add an entry or move fonts, update the `build` script.

## Styling Rules

- Stylelint: `stylelint-config-standard-scss` + recess property order, max nesting depth 3, BEM class names.
- Color properties must use variables, not hardcoded values (`declaration-strict-value`).
- Utility classes and mixins listed in `docs/css-utilities.md` are public API. When you add, rename or remove one, update that doc (`/update-css-docs` command in `.claude/commands/`).

## Consumers

React and Angular both depend on this package, so treat renaming or removing a token, class, mixin or file path as a breaking change. Check usages in `../react/` and `../angular/` (local only, not available in CI) and call out consumer impact in the PR.

## Commits and Releases

- Conventional commits enforced by commitlint; must reference an issue (e.g. `fix(icons): correct font path #146`), subject at least 10 characters.
- Pre-commit hook runs Stylelint on staged SCSS.
- `rc` is the only branch. Every merge to `rc` is released by semantic-release as `core-<version>` and published to npm from `dist/`. `CHANGELOG.md` and the version are updated by the release; do not edit them by hand.
