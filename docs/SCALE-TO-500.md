# Scale to 500: lessons and next experiment

Prepared 2026-10-17. This is a research/operations recommendation, not an implemented importer, performance result, new admission policy, or approval to deploy. Baselines inspected: app `d67118ebb9cefa25231416ab810bc3ebb392bf6d`; data `3fefe31bc7692c58d869d49471be04b8126763fb`. The last checked receipt is 96 qualifying IDs, 115 provider records and 107 local portrait deliveries. Replit has ongoing work; those figures are a baseline, not a claim about its uncommitted state.

## Start here

- [New research handoff and inspected portraits](research/scale-500-handoff-2026-10-17.md).
- [Existing contribution contract](DATA-CONTRIBUTION-CONTRACT.md), [research/build ownership](RESEARCH-AND-BUILD-WORKFLOW.md), and [earlier scaling findings](SCALABLE-PROFILE-ENRICHMENT.md) remain authoritative. This short, dated document adds operational lessons without rewriting their history.
- Research prepares reusable evidence; Replit reconciles identity, imports eligible changes, runs technical checks and writes applied receipts. Do not have both tools independently repeat discovery for the same reserved candidate.

## Observed patterns → practical response

| Observation from the trial | Next action | Evidence to retain |
| --- | --- | --- |
| Queue/ledger drift and already-applied handoffs caused repeated discovery | At batch start capture both heads, current accepted-ID set and candidate reservations. Skip completed IDs and bounded-negative cases without a named new-evidence trigger. | Base revisions, candidate key, disposition, blocker, next trigger, owner |
| Stopped app workflows repeatedly caused connection-refused contract runs | Add a bounded server-health preflight for the configured test origin before server-backed suites. Separate environment failures from failed product assertions. | Origin, ready response, revision; restart reason if necessary |
| New records were missed in directory/editorial manifests or browser cohorts; SF API location projection was omitted | Use one import checklist across provider, directory, editorial overlay, API, route, humanity assessment, independent portrait inventory and test selection. Derive test selection from the accepted affected IDs, without deriving the immutable expected baseline from mutable output. | Before/after scoped diff and exact affected ID set |
| Duplicate dated citations shared URLs; canonical trailing slashes differed | Match the expected accessible citation name within its section, not URL alone. Record observed canonical URL; retain actual tap, visible name and neighboring-disclosure assertions. | Exact source label, URL and date; no weakened assertion |
| Below-fold lazy cards and oversized full-page screenshots produced misleading failures | Scroll each affected card into view, assert decoded pixels/source link, and capture viewport evidence. Do not equate a screenshot tool limit with application failure. | Profile and card checks at desktop/touch-mobile |
| GitHub upload of two large files was truncated before a corrective commit | Keep dated small documents rather than expanding giant receipts. Check every uploaded Git blob against full local bytes before moving main; use expected-parent, non-force update and changed-path/tree comparison. | Local blob hashes, remote hashes, parent and resulting commit |
| Credential/role lists sometimes got mistaken for distinctive stories; extraction missed a Fun facts module | Review ordinary HTML and relevant named-page modules once. Accept a short specific interest or sourced approach without inventing motivation or clinical benefit. Roles alone are not a story. | Claim-level source map and exact exclusion reasons |
| A named official page can still contain a conflicting portrait association | Check named context, exact exposed asset, decoded bytes and visual framing separately. Sarah Coates's patient page currently points to a filename naming Erin Flatley; hold that asset and use the independently named department source. Do not identify a person by facial resemblance. | Conflict, alternate source association, dimensions, MIME versus decoded format, SHA-256 |
| Single-profile runs repeat setup and source-family work | Prepare 3–5 evidence-ready candidates together; isolate held items rather than blocking the batch. Test this size before trying 10. Reuse unchanged inspected bytes by hash and source provenance. | Per-stage time and acceptance yield, not action counts |

The integration incidents above come from the user-provided 87→96 handoffs and retained project reports. This note does not independently rerun their historical tests. See [app trial report](https://github.com/healcare/openhealthcare/blob/d67118ebb9cefa25231416ab810bc3ebb392bf6d/docs/reviews/humanity-scale-trial-results-2026-10-14.md) and [current research queue](research/humanity-next-candidates-review-2026-10-17.md).

## Proposed batch contract: reduce repetition, keep judgment

1. **Reserve and deduplicate.** One candidate key based on a named source/identity, one active owner. Reconcile against the app before assigning a new permanent UUID or path. An absent search hit is not proof of no collision.
2. **Research once.** Supply original proposed copy, claim/source/date mapping, patient-access scope and unknowns, exact portrait provenance, exclusions and a specific next action. Research candidates are non-importable until normalized and validated under the existing contract.
3. **Review a diff before import.** Preserve existing IDs/routes/aliases, dated directory content, newer observations, all holds, pending license/human review, noindex and unclaimed states. Missing fields never mean delete. Story/photo approval does not clear a clinical or identity conflict.
4. **Validate in dependency order.** Strict parse/schema/source references → identity/membership/preservation → local media decode → type/build and required server-backed suites → affected desktop/touch-mobile profile, card and source-activation tests. Run full required suites for shared importer/renderer changes; repeat failed scopes after fixes. Do not skip existing gates merely because this document proposes batching.
5. **Record distinct results.** Research prepared, technical import, actual browser delivery and qualification are separate events. Count the unique intersection of qualifying stable IDs; separately report provider records, retained/new/recovered portraits, access-only improvements and deferrals. One candidate packet is not one count gain.
6. **Sync and notify once.** Record the checked app result and separate data receipt, exact revisions and changed hashes. Alert the active implementer to a completed evidence packet rather than sending another open-ended search prompt. If the agent is busy, disclose non-delivery and keep the durable handoff discoverable.

## Small measurement experiment before scaling batches

For the next two 3–5 candidate batches, record discovery, source review, image inspection, packet preparation, implementation, testing and sync durations separately. Record proposed/ready/imported/qualified IDs, source fetches, repeat queries, duplicate hits, held reason, failed-gate category, retries and image bytes. Missing measurements stay null, not zero. Report yield as qualified unique IDs divided by assessed candidates, alongside useful nonqualifying changes; do not optimize away harder but useful access information.

No throughput or monetary savings are measured here. Action counters, test durations, free-tier labels and anecdotal elapsed time cannot establish cost per profile. Compare the two batches with an instrumented baseline before recommending larger batches.

At 100, 250 and 500, propose separate functional and capacity checkpoints: build/index time, cold/warm API latency, representative directory transfer/image budget, browser memory/interaction, stale-source backlog and correction/removal handling. Set budgets with the owner before treating any as pass/fail. A functional 96-profile result is not a load test at 500.

## Do not optimize away these boundaries

- Local preview permission, derivative/composite approval and structured-data image eligibility remain separate. Public visibility, HTTP 200 or no Set-Cookie does not establish rights. No generated clinician likenesses.
- Record asset response headers separately from source-page cookies; local delivery still needs a browser zero-third-party-before-activation check. A direct GET cannot prove browser privacy.
- Keep source-stated phone/location distinct from tested access, available appointments, fees, exact-plan coverage, referral necessity and language support. Field-specific output contracts beat blanket rules about structured-data omission.
- Current discovery is concentrated in UCSF/San Francisco dermatology because its sources are accessible. Track source, specialty and geography concentration; do not present 500 easy-to-source profiles as representative healthcare coverage. Expanding directory scope requires an explicit choice, not quota pressure.
- Keep useful basic listings even when they do not meet the humanity experiment. Never weaken identity/regulatory holds or silently reinterpret count eligibility to hit a number.
- Human/clinical/license review, rights clearance, screen-reader/physical-Safari audits and deployment remain separate decisions.

## Priority order for Replit

First consume the completed evidence handoff without restarting active research. Next assess the narrow health-preflight/import-checklist gaps against current code (some cohort-selection improvements already exist). Then instrument two batches. Defer broad schema migration, new databases, paid services, scheduled scraping and automatic publication; none is requested or implemented by this update.
