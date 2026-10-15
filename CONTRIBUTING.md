# Contributing to TEDI Core

Thanks for helping improve `@tedi-design-system/core`, the design tokens, fonts, icons and shared styles used by TEDI React and Angular. This page covers what is specific to this repository. The full process is in the [TEDI wiki](https://github.com/TEDI-Design-System/general/wiki).

Everyone taking part is expected to follow the [Code of Conduct](https://github.com/TEDI-Design-System/.github/blob/main/CODE_OF_CONDUCT.md).

## Reporting issues

- **Bugs:** open an issue in this repository.
- **New components and feature ideas:** propose them in [Discussions](https://github.com/TEDI-Design-System/general/discussions).
- **Design or UX problems:** report them in the [design](https://github.com/TEDI-Design-System/design/issues) repository.
- **Security vulnerabilities:** do not open a public issue. Report privately via [Security → Report a vulnerability](https://github.com/TEDI-Design-System/core/security/advisories/new) or email info@tedi.ee. See the [security policy](https://github.com/TEDI-Design-System/.github/blob/main/SECURITY.md).
- **Questions:** ask in the [TEDI Slack](https://join.slack.com/t/tedisystem/shared_invite/zt-3hd8tnjf7-Z1smXI~ns0p8E2cxoFUKbQ). See [Getting help](https://github.com/TEDI-Design-System/.github/blob/main/SUPPORT.md) for other channels.

## Making a change

1. Open an issue first and describe what you plan to do.
2. Branch off `rc` (fork the repository if you don't have push access). Name the branch `<type>/<issue number>-<short-description>`, for example `fix/123-heading-line-height`.
3. Write commits in the [commit convention](https://github.com/TEDI-Design-System/general/wiki/Commit-convention) format with the issue number in the header. A `commit-msg` hook checks the format.
4. Open a pull request against `rc`. Add `Closes #<issue number>` to the description so the issue closes on merge.

Core releases directly from `rc`: every merge with a `feat`, `fix` or `perf` commit (or a breaking change) publishes a new version of the package, and React and Angular both depend on it. Check that a change doesn't break either library before merging.

## Local setup

Requires Node.js 24 (see `.nvmrc`).

```bash
npm install
npm run lint    # stylelint, with --fix
npm run build   # package build into dist/
```

To try a change in React or Angular before releasing, build core and point the library at the local `dist/` (for example with `npm link`).

## Design tokens from Figma

Tokens come from the TEDI Figma variables. Don't edit these generated files by hand, your changes would be overwritten on the next sync:

- `src/tokens.json`
- `src/variables/_base-variables.scss`
- `src/variables/_dimensional-variables.scss`
- `src/variables/themes/`

The **Sync Figma Variables** workflow runs on weekdays (and on demand from the Actions tab). When Figma has changed, it opens a pull request against `rc` for review. To fix a token, change the variable in Figma; if you think the token itself is wrong, report it in the [design](https://github.com/TEDI-Design-System/design/issues) repository.

To run the export locally, create a `.env` file with `FIGMA_VARIABLE_TOKEN` and `FIGMA_FILE_KEY`, then run `npm run import-variables`.

The other files in `src/variables/` (for example the z-index scale in `_utility-variables.scss`) are maintained by hand.
