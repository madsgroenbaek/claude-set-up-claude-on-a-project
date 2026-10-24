## Commands
- `npm run dev` — start the dev server (runs on http://localhost:3000)
- `npm test` — run the tests
- `npm run lint` — check code style
- `npm run typecheck` — check TypeScript types
- `npm run build` — compile to JavaScript (output goes to dist/)
## CLAUDE.md choices
I included the core commands (dev, test, lint) since those are daily drivers. I added typecheck and build because this is a TypeScript project now.
For conventions, I captured what makes this project specific: TypeScript + ES modules, the one-route-per-file pattern, and the underscore prefix rule for intentional unused vars.
I left out anything obvious from the code itself (like what Express does) and avoided one-off notes — those would just clutter things.
## Permission rules
- **Allow**: test and typecheck are safe, frequently-run commands that can't break anything
- **Deny**: reading .env would expose secrets; force-push could destroy work
- **Ask**: regular git push is safe but worth confirming before running


Without the deny rules, someone could accidentally read .env or do a force-push that wipes commits.
