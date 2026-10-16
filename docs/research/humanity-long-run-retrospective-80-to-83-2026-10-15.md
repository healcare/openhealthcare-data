# Long-run experiment retrospective: reaching 83 — October 15, 2026

## Verdict
The run produced useful patient-facing content and strengthened integrity checks, but it also shows the next efficiency bottleneck: repeated low-yield research and integration bookkeeping. The evidence supports **bounded, checkpointed batch runs**. It does not yet support an unattended search-until-100 process or a prediction of economical throughput at thousands.

This review reads the owner's long execution log, the app experiment report, the checked public-data results and the current research queue. Test outcomes remain Replit-reported; no app tests were independently rerun here. The interface reports **2 hours 27 minutes** and “Free · No credits used.” That is a reported session duration and UI label, not instrumented phase timing, paid-service billing evidence, compute cost or a per-profile labor rate.

## Count reconciliation
The clear late-run segment is **80 → 83**:
| Outcome | Qualifying IDs | Provider records | Local portrait inventory |
| --- | --- | --- | --- |
| Start of visible reconciled segment | 80 | 107 | 94 |
| Kevin Sands: existing story enrichment | 81 | 107 | 94 |
| Timothy G. Berger: new record and portrait | 82 | 108 | 95 |
| Maria Capetanakis: access-only improvement | 82 | 108 | 95 |
| Gretchen Gainor: no qualifying new source | 82 | 108 | 95 |
| Nick Infantino: existing story enrichment | 83 | 108 | 95 |

The earlier four prepared additions—Andersen, Dobry, Twigg and François—advanced 76→80 and are already recorded separately. Do not count their preparation/import twice. The log repeats Nick's preparation/cohort-repair paragraph; repetition alone does not establish a second execution or a second qualifying gain. The reported 147-minute session boundary is not precise enough to allocate time among those earlier additions, later research, tests and synchronization. Do not derive a per-profile hourly rate or extrapolate the remaining 17 from it.

Checked app endpoint: `2b5661ab21bd7b365292a344d72d8355777aa55d`; data endpoint reviewed: `2abb48ad88ce5146c0be61cea4b652ecd2d17de4`. Replit reports local app main/origin agreement. No deployment.

## What kept the run going
1. **A persistent outcome and permission to continue.** The 100-ID goal, explicit humanity standard and no-deployment boundary supported progress without asking after every reversible import.
2. **Durable checkpoints.** Accepted IDs, portrait inventory, prepared/applied packets and the research queue let work resume across incoming commits and corrections instead of relying on chat memory.
3. **Concrete prepared evidence.** The four ready additions had named-source narrative drafts and exact inspected portraits, reducing the work from open-ended discovery to admission and delivery checks.
4. **Independent work remained available.** A story gap did not prevent work on a different candidate or a useful access-only correction. It also did not justify lowering the narrative standard.
5. **Guards turned drift into explicit repairs.** Missing cohort membership, invalid source-date handling, directory sentence loss and a portrait outside the served directory produced actionable failures.
6. **Failures were classified rather than all treated as app regressions.** Server-down connection refusals, responsive/duplicate locators and wrong raw-field expectations were separated from actual serving/projection defects.
7. **Normal sync and read-back preserved momentum.** Incoming research commits were reconciled, unrelated sandbox edits excluded, and a result-document duplicate-key error was caught after saving.

Persistence was useful when it closed a supported candidate or corrected a real defect. It was less useful when it repeatedly rephrased searches for the same already-inspected thin biographies without a new source family or identity lead.

## Costs and friction exposed
| Pattern | Evidence from this run | Useful next control |
| --- | --- | --- |
| Research repeated within one session | Multiple searches revisited Capetanakis, Gainor and Schaubach after bounded negative findings | Record exact sources, attempted query families, result and the specific new evidence needed. Revisit only with a different plausible primary source or new source state |
| Integration details fragmented | Berger's portrait placement/inventory/note needed separate repair; Nick's accepted ID lacked cohort selection | Use a small existing-system preflight listing provider, sources, assessment, served asset, portrait inventory and directory additions before browser execution |
| App readiness assumed | Contract/API attempts hit connection refused while workflow was stopped | Check the configured origin and readiness once before network-dependent suites; do not call a stopped-server result a content failure |
| Data-only changes caused brittle totals | Citation/section counts and all-old-date expectations became stale | Preserve old IDs/dates plus explicit added sections/sources; prefer semantic membership assertions over magic totals where appropriate |
| Serving, API and browser representations differed | Nick image absent from an ad hoc raw-HTML probe but present in API and decoded browser; narrative-only records omit raw clinical fields | Specify the representation each assertion protects. Retain separate actual-delivery checks; do not assume raw HTML proves or disproves image delivery |
| Metadata absent became invalid | Shared registry mapped absent dataVerifiedAt into Invalid Date | Keep absent dates absent; source retrieval does not create independent verification or datePublished |
| Output reports can lose meaning silently | Duplicate after key overwrote qualifying count with portrait count in result JSON | Reject duplicate JSON keys and validate distinct count dimensions in result documents before upload; verify saved parsed values |
| Directory history was replaced accidentally | Berger note initially replaced an older dated sentence | Append scoped observations; preserve prior statements unless a dated deliberate correction explains replacement |
| Citation appears more than once legitimately | Nick narrative and access each cite the same source | Check every intended link/name/destination in its section instead of requiring a unique global match |
| Full testing is expensive but sometimes justified | Full suite completed after shared date projection repair; later batches used focused checks | Broaden on shared behavior changes; reuse unchanged successful results honestly rather than repeatedly rerunning the whole suite |

These are process lessons, not proof the code lacks all corresponding checks today. Inspect the existing implementation and improve it narrowly; do not add a parallel registry or weaken protective assertions.

## Useful outcomes beyond the number
- Sands and Infantino gained documented humanity without another portrait download or an identity change.
- Berger added a teaching-focused profile with referral/Executive Health limits intact; a polished biography did not become an unrestricted booking claim.
- Capetanakis gained a dated access observation despite remaining unqualified for humanity. Patient utility and milestone qualification are different measures.
- Gainor and Hsu were not filled with generic credentials or other people's stories.
- The original date baseline, prior source dates, holds and review/indexing controls remained separate from newly retrieved material.
- No new portrait rights, clinical verification or human review was inferred from successful local delivery.

## Verification record and limits
The shared 76→80 change reports a successful full test:all invocation after the absent-date fix; the exact combined count was not retained. Replit explicitly said it would not rerun that completed suite.

For the final 82→83 batch, reported fresh checks are 108 providers, 95 inventoried portraits, 83 qualifying IDs, fixed-baseline/data/type/build checks, 81/81 contract and 110/110 API tests. Focused story/citation/access browser checks passed; a local-image/privacy test covered 13 profiles at desktop/mobile widths, and a citation regression covered six profiles. Those overlapping checks are not 19 unique newly enriched profiles. Screenshots were inspected. No external requests/cookies were observed before activation in the checked contexts.

The unrelated full browser suite was not rerun for the final data-only addition. A source-link tap establishes its URL/request, not successful remote page-body loading. Simulated off-site images in a citation-only check do not prove external image availability; the local portraits were checked separately. No physical-device Safari, real screen-reader audit, license/clinical verification, rights clearance, concurrent-user/load test or production refresh is established.

## Do these runs scale?
**The integrity approach is becoming reusable; the research loop is not yet efficient enough to call this a scale result.**

Cheap all-record validation and explicit accepted IDs can protect a growing catalog. Targeted browser work can be limited to affected IDs and relevant shared/custom renderers, with partitioned full integration checks at suitable boundaries. Prepared source packets and inspected media reduce import uncertainty.

Repeated broad searches, manual multi-file admission and per-batch snapshot repairs still consume disproportionate effort as easy candidates run out. More autonomy does not itself solve that. A larger catalog also requires measured index/build behavior, asset-delivery budgets, provenance refresh operations and review/backlog capacity. None is measured by this run's 83-ID count.

## Bounded next-run protocol
1. Reconcile the latest checked ID ledger and incoming commits; preserve local unrelated edits.
2. Select a small evidence-ready batch from existing records or clearly in-scope new identities. State each candidate's missing condition before research.
3. Reuse retained sources first. After a direct primary-source pass and a targeted alternate-source attempt produce no new evidence, record a specific blocker and move on. Reopen only with a new URL, changed source, identity lead or explicit owner contribution.
4. Prepare supported copy and provenance before import; keep access-only gains separate from humanity gains.
5. Before heavier tests, check expected source/section/assessment membership, local asset served path, explicit media inventory addition, historical-note preservation and app readiness.
6. Run cheap all-record guards plus affected-ID desktop/touch-mobile story/citation/local-media/privacy checks. Broaden appropriately for shared runtime or rendering changes; do not rerun unchanged passing suites merely because the session is long.
7. Save a checked batch normally, parse/read back result counts and files, then choose the next ready batch. Do not leave a long sequence of uncommitted changes.
8. Record preparation, import/repair, test and synchronization elapsed times separately; add retry counts and new-source yield. Log unknowns when instrumentation is absent. The UI's action count is not a measured API-call or cost counter.

This is a recommendation to tighten the existing workflow, not authorization to deploy or a requirement to build large infrastructure before finishing 100.

## New bounded Hsu lead
A newly opened RUHS-hosted Kaiser Riverside sports-medicine residency curriculum explicitly names Dr. Lawrence Hsu in its supervising-faculty list on page 1. The [separate candidate packet](../profile-ready/humanity-hsu-teaching-candidate-2026-10-15.json), initial commit `7f13cf20b700ac6061ea7158fe29a3e77aa1f237`, contains conservative teaching-connection wording and claim limits.

The PDF publication date is unestablished; no current faculty role, personal motivation, outcome or procedure proficiency is inferred. Generic resident goals cannot be attributed to Hsu as his philosophy. The name/professional context is compatible but lacks a unique identifier; contradictory identity evidence would need resolution. Web retrieval opened six pages; a separate direct download returned 403, so no local-file hash or universal accessibility claim is made. This is new evidence to assess, not a counted profile or clearance of existing status controls.
