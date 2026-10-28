# VentureLabs

**VentureLabs is an evidence-led venture validation workspace.** It helps a founder turn an early business idea into a falsifiable commercial thesis, keep a record of what has actually been observed, define experiments before running them, and produce a decision report that makes uncertainty visible.

Live product: https://venturelabs.pages.dev/  
Source: https://github.com/DT-09/VentureLabs

## Product workflow

1. **Define the thesis.** Specify the customer, problem, current workaround, frequency, consequence, buyer, urgency, access, and current evidence.
2. **Review the signals.** The assessment is a heuristic prompt for discussion, not a market-validation score or probability of success.
3. **Maintain a venture workspace.** Save multiple ventures and record the current stage, decision deadline, and decision question.
4. **Record evidence.** Capture evidence type, status, observation, source, date, and implication. Distinguish assumptions from observed or corroborated evidence.
5. **Pre-register experiments.** Record a hypothesis, sample/scope, deadline, and pass/fail thresholds before interpreting the outcome.
6. **Generate a decision report.** The report includes the current recommendation, thesis, heuristic signals, evidence ledger, experiments, gaps, next steps, and limitations.
7. **Export and protect the work.** Export the report as Markdown or export/restore the entire workspace as a JSON backup.

## Commercial offer

VentureLabs can be engaged for a human-reviewed, evidence-led report around one live commercial decision. The deliverable is a decision brief, evidence/risk review, ranked critical assumptions, experiment plan with pass/fail thresholds, and written recommendation with limitations. Scope, timeline, fee, and payment terms are negotiated and confirmed in writing before custom work begins. The site’s request form opens a prefilled email to be reviewed and sent by the visitor; it is not a backend form, payment system, or booking confirmation. No customer engagement or revenue is claimed until it has actually happened.

## Run and deploy

This is a static, browser-based application. Open `index.html` directly or serve the repository root using any static web server. There is no build step.

For Cloudflare Pages, use the repository root as the project root, leave the build command empty, and use `/` as the output directory. Deployments from the connected Git repository are controlled by the Cloudflare Pages project configuration.

## Data handling and recovery

- Venture records are stored in the current browser's `localStorage`; they are not uploaded to a VentureLabs backend.
- Data is not automatically shared across devices or team members.
- Use **Export full backup** to download a JSON file containing saved ventures, evidence, and experiments. Store that file somewhere safe.
- **Restore backup** replaces the workspace in the current browser after confirmation. Export the current workspace first if it needs to be preserved.
- Markdown reports and the JSON backup are generated in the browser.
- Do not enter confidential customer information, personal data, trade secrets, or regulated information into a local prototype unless you understand and accept the device/browser risks.

## Trust boundaries

VentureLabs does **not** independently interview customers, verify sources, contact prospects, confirm competitor claims, estimate market size, validate willingness to pay, or establish product-market fit. It organizes user-entered information and makes gaps more visible. A claim marked “observed” is a status selected by the user, not an independent verification by VentureLabs.

Scores are heuristic and input-dependent. Missing evidence means unknown, not positive evidence. A polished report is not proof of demand.

## Current status

The static MVP includes a thesis worksheet, heuristic assessment, local multi-venture workspace, evidence ledger, experiment tracker, decision report, Markdown export, full JSON backup/restore, responsive layout, and reduced-motion support.

It does not yet include accounts, cloud persistence, multi-user collaboration, server-side backups, billing, automated market research, or independent source verification. Commercial willingness to pay for VentureLabs itself has not yet been demonstrated. The site now presents a scoped paid validation-review offer and an engagement-request flow. The next milestone is still a real paid engagement: agree the decision, inputs, deliverable, timeline, fee, payment method, and data boundaries in writing before starting custom work. The request form opens a prefilled email; it does not submit data to a server or create an automatic booking.

## Repository map

- `index.html` — complete static application
- `docs/validation-report-delivery.md` — repeatable human-led delivery process for the report
- `docs/paid-pilot-offer.md` — scoped offer and engagement boundaries
- `docs/sample-validation-report.md` — explicitly fictional example of the deliverable
- `docs/release-checklist.md` — functional and trust-boundary acceptance checks
- `docs/product-roadmap.md` — stage gates that prioritize paid validation before backend build

## License

No open-source license is currently specified. Unless a license is added, do not assume the code is licensed for reuse or redistribution.
