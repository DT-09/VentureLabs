# VentureLabs release and acceptance checklist

Use this checklist after changes to `index.html`. Record the browser, date, and result when testing. Do not mark a check passed from code inspection alone.

## Core thesis flow

- [ ] Required thesis fields block an empty assessment.
- [ ] A complete thesis produces a result and component signals.
- [ ] Reassessment updates the visible result.
- [ ] Reset clears the form and restores the initial result state.
- [ ] The illustrative example is clearly labeled as illustrative, not customer evidence.
- [ ] Copy and Markdown export contain the current thesis and do not imply external verification.

## Workspace and persistence

- [ ] Save a new venture and confirm it appears in Saved ventures.
- [ ] Reload the page and confirm the venture remains in the same browser.
- [ ] Open a second venture and confirm the first venture's fields are not overwritten.
- [ ] Edit an existing venture, save, reload, and confirm the latest fields persist.
- [ ] Delete a venture and confirm its associated evidence and experiments are removed.
- [ ] Confirm the interface describes storage as local to the current browser.

## Evidence ledger

- [ ] Evidence cannot be added without an observation/claim.
- [ ] Type, status, date, source, and implication are shown accurately.
- [ ] Evidence is associated with the active venture only.
- [ ] Removing evidence removes it from the visible ledger and subsequent report.
- [ ] User-entered text containing HTML-like characters renders as text, not executable markup.

## Experiments

- [ ] An experiment cannot be added without a title and success threshold.
- [ ] Hypothesis, sample/scope, deadline, pass/fail thresholds, status, and outcome render accurately.
- [ ] Experiments are associated with the active venture only.
- [ ] Removed experiments do not appear in the report.

## Report integrity

- [ ] The report uses the active venture and current evidence/experiments.
- [ ] Empty evidence and experiment sections explicitly say they are missing.
- [ ] Heuristic scores are described as heuristic, not proof of demand or probability of success.
- [ ] The report distinguishes user-entered status from independent verification.
- [ ] Markdown download and copy actions work in the target browser.
- [ ] Report output includes limitations and next steps.

## Backup and restore

- [ ] Export a JSON backup containing at least two ventures, evidence, and experiments.
- [ ] Inspect the JSON to confirm it contains the expected records.
- [ ] Delete or change a test record, then restore the backup and confirm it returns.
- [ ] Importing a backup requires confirmation before replacing current browser data.
- [ ] A malformed, unsupported, or oversized file is rejected without replacing current data.
- [ ] Export the current workspace before testing destructive restore behavior.

## Responsive and accessibility

- [ ] Test desktop and mobile-width layouts.
- [ ] All controls are reachable with a keyboard.
- [ ] Form labels remain associated with their controls.
- [ ] Reduced-motion preference is respected.
- [ ] No critical action is represented by a decorative or non-functional control.
- [ ] No console errors occur during the core workflow.

## Release integrity

- [ ] Check the deployed URL after the hosting provider finishes deployment.
- [ ] Test the deployed site, not just a local file.
- [ ] Confirm the current commit matches the deployed version where the host exposes deployment metadata.
- [ ] Update the README when capabilities or data handling change.
- [ ] Do not advertise accounts, cloud sync, team collaboration, automated research, billing, or independent verification until implemented and tested.
