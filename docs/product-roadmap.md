# VentureLabs product roadmap

## Product thesis

Founders do not need another generic idea score. They need a disciplined way to decide what evidence would change a consequential venture decision, preserve the evidence trail, and select the next test.

The first potential paid product is a **decision-ready validation report** delivered from a narrow, agreed scope. The workspace supports repeatable work and can become software if repeated use and willingness to pay are demonstrated.

## Stage 0 — Reliable static MVP

Current capabilities:
- Thesis worksheet and heuristic assessment.
- Multi-venture local workspace.
- Evidence ledger and experiment tracker.
- Report generator and Markdown export.
- Full workspace JSON backup and restore.
- Documented limitations and delivery checklist.

Known constraints:
- Data is stored in one browser; there is no server-side persistence or account system.
- No automated market research or independent evidence verification.
- No billing or multi-user collaboration.
- Product demand and willingness to pay remain unproven.

## Stage 1 — Prove the paid deliverable

Do this before adding backend infrastructure.

1. Use one real founder's permitted inputs and a specific live decision.
2. Agree on the scope, deadline, payment, data handling, and deliverable in writing.
3. Produce a report with source-traceable claims, contradictions, decision-critical assumptions, and pre-registered experiments.
4. Ask the founder which recommendation changed their next action and what was missing.
5. Track whether a second buyer pays, whether the report can be delivered consistently, and which work is repeated across engagements.

**Exit criteria:** at least two paid engagements from separate buyers, a repeatable scope, documented delivery time, and direct feedback on decision value. These are validation targets, not claims that have already been achieved.

## Stage 2 — Harden the data model

Only after repeated use exposes real needs:
- Define a versioned data schema and migration strategy.
- Add explicit import validation and recovery tests.
- Add report version history and reproducible report snapshots.
- Add data deletion and export controls.
- Document retention, privacy, and backup behavior.
- Add automated tests around scoring, report generation, and schema compatibility.

## Stage 3 — Multi-device and team product

Implement only after buyers ask for it and agree to pay:
- Authenticated accounts and tenant isolation.
- Server-side storage with authorization on every record.
- Secure deployment secrets and migration process.
- Audit history for changes to evidence and decision rationale.
- Team invitations and roles, if collaborative workflows recur.
- Automated backup, restore drills, monitoring, and incident handling.

Do not expose a public database API or embed a shared secret in frontend JavaScript. Static-site hosting alone cannot securely provide private multi-user storage.

## Stage 4 — Research assistance (optional)

If validated by customers, add source discovery and assisted synthesis with:
- Clear source URLs, timestamps, and quoted excerpts where permitted.
- Separation between retrieved facts, user claims, and model inference.
- Source freshness and contradiction handling.
- Human review before findings are treated as decision-grade.
- Explicit controls against invented citations or unsupported market claims.

## Stage gates

| Gate | Evidence required | If absent |
|---|---|---|
| Problem | A founder has a specific decision and a meaningful cost of being wrong | Narrow the buyer and decision |
| Value | Buyer can explain how the report changes a decision | Improve the deliverable, not the homepage |
| Payment | A buyer pays for a defined scope | Do not build billing or a cloud platform yet |
| Repeatability | A second buyer values substantially the same workflow | Avoid premature productization |
| Software demand | Buyers need persistence, collaboration, or recurring tracking | Keep delivery service-led until this is real |

## Operating principle

No feature is justified merely because it makes the product look more complete. Prioritize proof of value, report reliability, data safety, and repeatable delivery.
