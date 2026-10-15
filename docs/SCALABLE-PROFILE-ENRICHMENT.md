# Scalable profile enrichment
October 12, 2026. Goal: help patients understand healthcare choices while depicting clinicians accurately. Build on the existing contribution contract and sharded bundles; do not introduce a parallel identity system or large infrastructure before it is needed.

## Three outputs
- Profile-ready records: clean current content with evidence mapping; default input for application imports.
- Selected public evidence/corrections: accessible expandable source detail, with material access conflicts visible beside affected facts.
- Research archive: deeper investigations, rejected claims, failed retrievals and prompts. Never import wholesale into profile bodies.

## One reusable pipeline
Discover → capture dated evidence → resolve identity and claim scope → compose original content → inspect preview media → validate → import eligible changes → editorial review/indexing decision.
Each stage can pause one claim without blocking unrelated eligible claims or profiles. Research judgment and human review are not simulated by technical validation.

## Stable identity and claims
Use existing permanent IDs and import keys. Preserve established canonical paths and aliases. New profile paths prefer readable joined names; collision resolution must preserve distinct people.
Represent evidence at the claim level: claim identity, value, subject/provider/location scope, source IDs, observation date, retrieval method, evidence status and editorial disposition.
Separate source-stated, independent credential observations, unknown, conflict and stale evidence. Workflow review and indexing remain independent.
Corrections link to superseded claim identities; retain historical evidence, but do not re-import obsolete values as current. Imports preserve newer evidence and unresolved contradictions.

## Content architecture
Shared renderer, optional content:
- Short introduction explaining work and scope in plain language.
- Three/four high-value glance facts.
- Optional distinctive detail explicitly documented by a professional source.
- Original narrative about motivation, career path or approach.
- Supporting sections only when they add useful nonrepeated information.
- Practical access with dated source scope.
- Local source-linked preview and external educational media when eligible.
Missing evidence omits optional content; it must not trigger invented filler or quality claims. A statement that a person is not accepting patients belongs in access, not as their entire biography. Public education and coaching remain distinct from clinical care.

## Moving practical evidence below the header

Keep the glance panel to about four high-value facts. Move appointment status, phone numbers and office-specific plan evidence into a visible practical section immediately below it, not only into collapsed research notes. Keep the source/date and office scope adjacent to each detail; clearly mark unverified coverage, capacity limits, unknown booking eligibility and conflicting source statements. Combine separately sourced language observations only if each source remains explicit. Keep location qualifications visible in both the concise fact and the practical section when multiple directory locations are unconfirmed. Before trimming, assert that all removed header details still render in the visible section on desktop and mobile.

## Preview capture provenance

A screenshot without a revision is not evidence of current copy. Capture from a fresh browser context with service workers blocked and no-cache headers; wait for distinctive expected text, record the running preview origin and Git revision, inspect source links and viewport overflow, and confirm no third-party request before interaction. If a built-in capture conflicts with live API/browser evidence, preserve the mismatch and its unknown cause until a revision-tagged fresh capture reproduces it.

## Media
Inspect identity before import. Record source page, asset URL/host, dimensions, inspection date, delivery asset and image-use disposition.
Ordinary modest source-linked previews may be served locally under the user-adopted preview policy; no third-party render-time request. Screenshot crop is fallback. Keep source attribution, accessible alt text, correction/removal support. Do not infer ownership or license from visibility.
Derivative cards/composites have separate eligibility. Do not treat ordinary preview review as derivative approval.
Use stable content-hashed or versioned local assets where existing tooling supports this; avoid repeated downloads when source and reviewed asset are unchanged. No generated clinician likenesses.
External audio/video cards use local artwork and explicit outbound activation; no embedded provider or thumbnail request before activation.

## Efficient refresh and quality gates
Generate cohort manifests/search indexes from shards, not a manual global provider list.
Determine gaps from content quality and evidence, not just field presence: empty/duplicated narrative, unsupported detail, missing preview, unresolved identity, stale access evidence.
Prioritize patient utility: accurate service scope, location, language, cost/intake, then distinctive narrative/media. Popularity is not a clinical ranking.
Assign freshness needs by claim type: intake, fees, insurance and closure need more frequent rechecking than historical education or career anecdotes. Use configurable policies and review queues; do not automatically mark a claim false on expiry.
Use content/evidence revisions to update only affected profiles/assets and prevent unchanged research being repeated. Preserve review-required changes for editorial disposition.
Run changed-record validation and affected route/privacy checks; use full existing required suites before promoting shared renderer/import behavior. Tests must not equate source-stated with confirmed.
Flag public accidental third-party requests, absent material conflict notices, lost corrections, identity collisions, and unjustified indexing changes.

## Immediate worked example
Audit Manhattan cardiology and mental-health profiles against Chiu's editorial baseline. Improve the weakest content with already eligible evidence before new discovery. Ali Mattu and Michael First still need original biography beyond status/access summaries; obtain named evidence rather than fill to word count. Keep Mattu's education/nonacceptance distinction.
Produce gap report with specific next evidence needs, refreshed profile-ready packets and an import summary. Save full investigation separately.
Apply this architecture incrementally through existing data and rendering tools; avoid creating new databases, queues, services or public endpoints solely for hypothetical scale.

## Preservation lessons: providers and directories
October 13, 2026. Implementation and test results below are reported by Replit; this note does not independently certify the deployed site.

The La Jolla portrait incident showed that retaining a source link and usage metadata does not preserve a usable preview when its image URL is cleared. Commit `2e40424` removed the image URLs from all ten La Jolla records; Replit reported restoration as local source-linked previews at `c69a82c`. An unexplained null must not silently replace an active preview. Intentional removal needs a dated, scoped held, failed or unavailable disposition with an explanation. This records the observed change, not an inferred author's motive.

A subsequent audit exposed a second boundary: the preservation guard covered provider records but omitted directory files and directory entries in `data/editorial-refresh.json`. Preservation must cover the complete patient-facing content surface, including shared editorial overlays, rather than only provider entities.

Replit reports that the guard now:
- Shows before/after diffs for removed directory summary or access content: scope notes, selection criteria, sources, locations, research-gap text and editorial observations.
- Requires a dated, scoped review reason for those removals; the contribution guide documents the review-entry format.
- Continues protecting directory IDs, routes, publication/indexing controls and review states.
- Leaves existing directory content and display rules unchanged.

Negative checks temporarily removed a Norfolk scope note and a sentence from a Beverly Hills research-gap note. Both changes were rejected with diffs; the fixtures were restored. Replit reported passing type checks, validation of data, the import-preservation guard and 57 URL-contract tests. No deployment occurred in that reported pass.

For future imports, compare the proposed revision with the actual retained baseline, including provider records, directory records and editorial overlays. An omitted field is not an instruction to delete it. Deliberate removal must identify the affected entity and content, date, reason and evidence where applicable. Keep the full investigation in the research archive and publish only useful current content and selected evidence notes.

Data preservation and rendered preservation are separate checks: content can survive in a record yet disappear through renderer eligibility or display changes. Verify affected desktop/mobile views and API projections, including local-image loading, visible access conflicts and source links. These checks do not verify medical facts, approve derivative images, clear identity/licensing holds or authorize indexing. Recovery must preserve newer evidence and intentional corrections; never restore an old value solely because it existed before.

## Browser preservation checks — October 14, 2026

The app repository reconciled 13 runtime browser failures after syntax repair: nine outdated expectations about remote-reference portraits loading before explicit activation and four locator defects involving duplicated responsive source links or descriptions. The 13 focused cases and the complete 130-test Playwright suite passed. The full test:all run also passed HTTP 107/107, cards 4/4, URL/preservation 63/63 and pilot 64/64.

For remote-reference media, assert no image request before the explicit load control, then activate it and verify the resulting state. A neutral intercepted image can verify the activation UI without contacting a source host; it is not proof of source availability. Keep at least one separate real-browser source check for response status, content type, decoded dimensions and Set-Cookie. Browser cache can suppress a second response event on another viewport, so check decoded pixels after every activation without requiring a new response when the resource is already cached. Local source-linked previews must decode immediately without activation.

A generic disclosure was added when a remote-reference portrait lacks explicit public disclosure metadata; it makes no reuse-permission claim. The remote-only decorative profile-header thumbnail remains a neutral local fallback. Automated accessible-name and touch-operability assertions are not a complete screen-reader audit.

The associated historical profile-loss report compared first-parent provider JSON changes from 2e40424 through c69a82c (107 commits) and separately checked shared profile presentation and standard routes. The browser reconciliation ran on app baseline 357b4e8; it did not extend that historical data audit. No deployment was performed.

## Cross-engine privacy follow-up — October 14, 2026

A separate Playwright privacy configuration ran the focused local-preview, live-source portrait, and touch-disclosure/source-link checks. Firefox passed all three. The live Chiu and Gould test verified no portrait request before activation, then actual HTTP 200 JPEG responses, decoded dimensions, source links, no Set-Cookie, and no observed cookies or tracking requests. La Jolla local previews decoded immediately; touch tests used real Playwright touchscreen taps to open/close disclosures and activate links.

WebKit 26.5 was downloaded and current free Nix packages were installed, but Playwright still could not launch it because Ubuntu-compatible libraries were unavailable: libicu74, libatomic1, libharfbuzz-icu0, libjpeg-turbo8, libgles2, and gstreamer1.0-libav. WebKit coverage is environment-blocked, not passed; Playwright WebKit is not a physical Safari-device test. No real screen reader was available, so the manual audit is unperformed. The app repository now has a concrete manual checklist at docs/research/screen-reader-manual-checklist.md.

The follow-up made no provider-data changes. It restored a neutral activated-portrait disclosure when explicit disclosure metadata was absent, without asserting reuse permission. Earlier provider-content/media recovery findings and the historical scope remain in docs/research/profile-history-loss-audit-2026-10-13.md: first-parent provider JSON history from 2e40424 through c69a82c (107 commits), plus the shared profile presentation and route checks described there. The browser follow-up does not extend that history audit. The prior 130-test Chromium suite remains passing; it was not rerun for this follow-up. No deployment was performed.


## Expanded cross-directory integrity recovery — 2026-10-14

The later patient-readiness pass reconciles 93 provider records with retained candidates, runtime overrides, API projection and all provider layouts. Effective media inventory: 69 reviewed local previews (64 source images, five screenshot crops); 24 gaps remain held/unknown. Thirty-five previews were prepared/restored across this phase and the preceding ten-photo pass, including Ruth Bybee. These are not all proven erasures. See the separate clean delivery inventory above; the detailed app investigation records history-supported causes and revision scope.

The earlier restricted inventory missed Ruth because retained candidates with null primary fields were not fully reconciled. Ten Manhattan cardiology null primary fields already have local runtime overrides; do not report them as losses. Maintain an independent approved media baseline, including source URLs, exact hashes and dimensions; never regenerate it during imports/builds. Intentional downgrade/removal requires a dated scoped reason and a genuine documented failure/hold. Compare data, overrides, API and rendered output independently. Photo-only citations must not become clinical sources or clear an editorial hold.

The first expanded 132-case browser run had 120 passes and twelve failures: nine outdated photo/count/fallback expectations and three locator/interaction defects. The citation defect selected an unrelated website link with the same URL; require the readable matching citation label. Custom mental-health cards use a different region; scroll the primary portrait frame before waiting for lazy-image visibility. Separately repaired application omissions: local-mode API projection bypassed older DC source notes/links; Beverly Hills’ static photo count became stale. Notes are retained as historical source-delivery evidence, not current live-request claims. No test was skipped or privacy/content assertion waived.

Historical coverage remains the earlier 107 first-parent commits from 2e40424 through c69a82c plus related shared-gate/local-preview changes and the current continuation after d8db5ea/5c14c8c. It is not an exhaustive all-history recovery claim. Preserve intentional corrections, newer evidence, canonical identity, publication flags, all holds and repository-only research. No production deployment is performed by this integrity pass. Final executed results follow separately; earlier engine verification paragraphs retain their original scope.


## Final checked candidate verification — 2026-10-14

- TypeScript check, 109 entity/bundle files, referential/editorial validation, independent 69-portrait delivery guard, dated preservation/import checks and whitespace check passed.
- URL/portrait contracts: 67 passed; HTTP/API: 107 passed; image/card checks: 4 passed; pilot checks: 64 passed.
- Complete Chromium discovery: 132 cases in five files. Final full suite: 132 passed, zero failures/skips; production build passed. This includes actual touch interactions, shared/custom layouts, stored/API/rendered copy and directory-access preservation, privacy, immediate local images and source links.
- Firefox: all 69 approved previews decoded with correct source links, zero initial external requests/cookies, real disclosure taps and a real retained gallery response (HTTP 200, 320 × 400, no Set-Cookie/cookies). No image interception was used in this check.
- WebKit launch remains environment-blocked by libicudata.so.74; no physical Safari-device audit. Real screen-reader/manual audit remains unperformed, with the existing concrete checklist and follow-up.
- Intercepted images in existing simulated UI failure tests remain simulations, not proof of an external asset loading. Separate ordinary source-response evidence and Firefox actual decoding establish only the specifically tested responses.
- Historical scope is limited as documented; 24 photo gaps and clinical/access uncertainties remain openly held/unknown. No clinical/indexing/identity hold is cleared by a portrait.
- GitHub synchronization follows these checks; no deployment performed. Production is not certified as this candidate until a separate publish and live verification.

Checked app candidate synchronized to main: 6ec3dbb594f519d53c1486885173b2e216d05c67. App local main and origin/main were equal after normal synchronization; no deployment performed. Learning page: https://github.com/healcare/openhealthcare/blob/6ec3dbb594f519d53c1486885173b2e216d05c67/docs/data-integrity.md


## Jason Emer: newly enriched portrait gap — 2026-10-14

This is new enrichment, not restoration: fourteen historical registry versions and the original file-backed record had no photo; the October 1 candidate inventory had no resolved asset. A named official biography now supplies a visually inspected ordinary 920 × 830 portrait. Its exact computed CSS asset delivered HTTP 200 in an unmodified browser, while a separate command-line request returned 429. Preserve both observations; extracted markdown can omit CSS portraits and a transport failure alone does not establish loss or a universal source block. Do not guess assets or bypass restrictions.

One explicit reviewed inventory addition brings effective approved previews to 70, with 23 explained photo gaps. Existing 69 entries and every non-media provider field were checked against a fixed pre-change revision and remained identical. Portrait-only source metadata does not add clinical claim support; rights terms remain unknown and structured-data imagery stays withheld. Desktop/mobile directory/profile image, framing, source/alt, API and initial privacy checks passed, as did cross-directory photo outcomes, 67 contracts, 107 HTTP/API tests, data/preservation/type checks and build. Prior full-suite and merged 69-preview WebKit evidence retain their original scope; they are not new full-suite runs or WebKit evidence for this new portrait. No deployment.

Keep clean applied results in docs/profile-ready/jason-emer-photo-enrichment-2026-10-14.md and the detailed investigation in docs/research/jason-emer-photo-enrichment-2026-10-14.md.


## Milestone evidence cycle — 2026-10-14

Checked app revision: 772d05caed82116babb178d27dd255f84891dd3f, compared against fixed pre-import ec171b709132050ca5e06fcc05097c2160d8d5b9. Three clean evidence packets were committed here before importing 14 additive existing-profile enrichments. One inspected ordinary portrait was deliberately added; 70 previous approvals remained unchanged. The current 93-provider / 71-portrait inventory does not mean 93 or 71 qualifying biographies. The conservative documented narrative/portrait/access intersection rose from 23 to 37; the exhaustive qualifying audit and 100-profile goal remain unfinished. Holds, pending human review and absence of recorded human approval are reported separately. No deployment or indexing/review promotion occurred.

Recognize recorded sentence-level and explicitly scoped grouped claim mappings without assuming every claim key is a verbatim sentence. Do not label an access-equity career paragraph a scheduling note. Read-only structural counters cannot replace named-source reading, qualitative original narrative checks, visual portrait identity/provenance inspection, or effective-runtime reconciliation. An uncounted record is an assessment gap, not proof of erased content. Preserve historical dated source checks when a current biography lacks an earlier detail; do not relabel it live corroboration.

Jessica Wu’s current named About page supplied a single full-face portrait. The earlier dark two-person treatment image was rejected, not cropped into a guessed identity. Its current exact About.jpeg response decoded as WebP: record inspected dimensions and actual encoding rather than trusting a suffix. Unknown reuse terms remain unknown, not blanket ownership or derivative approval. Local previews must appear immediately with outward source attribution and no external request before activation; source response observations remain separate from local UI proof.

Verified scope: 109-file data checks, 71 approved asset entries, TypeScript, fixed-baseline preservation, 5 audit units, 67 contracts, 107 HTTP checks, build, native desktop and actual touch-mobile checks for 14 profiles, affected-ID directory preservation, and one cross-directory saved-photo case. The dermatology HTTP snapshot required dated additive reconciliation: retain the earlier two sections/two claims and original limitations while explicitly checking the new sections, mapped claims and source date, without relaxing clinical or structured-data suppression. No new full-suite, real screen-reader, physical Safari, Firefox or WebKit pass is claimed. Broader unchanged evidence remains as recorded; final release checks await a complete candidate.

See [clean applied results and remaining gaps](profile-ready/milestone-progress-2026-10-14.md), [current media delivery](profile-ready/patient-ready-media-delivery-2026-10-14.md), and [separate research notes](research/milestone-evidence-notes-2026-10-14.md).


## October 15 humanity batch: checked source/content completeness

App candidate d4f0e503e3142140b6d182a0f8cc82d2a91d3865 is synchronized to app main; no deployment. Fixed pre-import baseline 0e71f02b718ddcd1003dd504aa44c1bb103c6894 remains unchanged. Starting patient-ready intersection was 44, not the earlier 37 structural candidates; current checked intersection is 54 distinct IDs out of 94 records and 72 independently inventoried local portraits. The goal of 100 remains open with 46 more genuinely qualifying profiles needed. Humanity is not manual human review or clinical verification.

Six existing narratives enriched: Jenna Lester, Hannah Braunstein, Yvany Peery, Rachel Bradley Williams, Juris Bunkis and Ali Sepehr. Deborah Kay Ekstrom added from named practice evidence, with inspected original 634 x 686 JPEG, exact source/asset/hash and clean name-based path/collision review. Public source preparation 8aa83158ab0c01bbdac0a0577bb64d1cbd6ef4bd preceded import. Preserve unknown terms accurately: modest source-linked preview only, not ownership, blanket license or derivative approval. Existing 71 inventory expectations were not regenerated; new approval dated separately.

Reconciled already-public API stories for Mary Greene, David Bolon and Jossef Amirian into source-linked body sections rather than only glance facts/cards. Hannah custom page now also delivers its retained inspected preview; decorative artwork remains distinct. Degree-only Michael First candidate is not counted. Holds, clinical facts, stable IDs/routes/aliases, newer evidence and review/indexing flags remain; no publication or state promotion. Unknown access does not itself create a content task or identity hold.

54 current qualifying routes passed actual native Chromium desktop and touch-enabled mobile checks: readable humanity anchors, API/citation presence, immediate local decoding/exact dimensions, contain framing, source links, no overflow, zero initial third-party requests/cookies. No image interception or simulated remote load. Scope to hydrated #main-content: clipped initial HTML must not count as patient-visible copy. Set manual context timeouts and scroll reserved lazy-image frames rather than zero-size or animated image nodes. Failed initial attempts are not passes. New-record contact cautions must not invent prior email-removal history; retain documented cautions for original members.

Passing batch checks: type check, 67 contract tests, 108 HTTP tests, existing card/pilot suites, five added assessment/citation unit cases, all-record validation, 72 independent asset/hash/source checks, fixed-baseline import preservation and build. Unchanged earlier full-browser evidence is retained, not relabeled as a new full-suite pass; final release checks await a complete milestone candidate. No new screen-reader or physical Safari audit claimed.

Distinct dated/scoped source IDs take precedence over shared URLs in preservation comparisons; adding a new same-URL source must retain earlier notes. Legacy URL-only citations may acquire IDs without false loss. Keep source/profile-ready results separate from investigation. See profile-ready/humanity-applied-2026-10-15.json, profile-ready/humanity-milestone-2026-10-15.md and research/humanity-rendering-2026-10-15.md.


## Checked humanity continuation — 2026-10-15

App revision ce90ccebe9cd68e3dc866f12a899c73c134ec462 normally retains the scale-review documentation commit ee980c52bd6e5d3dc11bafaaffc15e16c43e3a46. Current content/photo intersection is **57 unique IDs**, not 100 (43 remain); provider/approved local portrait inventories remain 94/72. Fuster, Ortiz-Urda and Gould gained source-mapped original narratives. Chloe’s unchanged API story gained a complete readable body section; no extra ID or review promotion. Clean preparation preceded import at 0b0871677413ab447b7bd2ed1f7e799fedb83fff.

Use the existing assessment inventory: explicit complete narrative blocks and their usable citations, not an anchor phrase or generic credential summary. Qualitative assessment/block-source association is not blanket claim verification. The immutable 0e71f02b718ddcd1003dd504aa44c1bb103c6894 baseline, historical 44/54 checkpoint counts and evolving accepted cohort are separate. A nonempty committed-history union protects newly accepted IDs as well as the first 54; missing Git ancestry/history fails rather than silently skipping comparisons. Dated scoped reasons use the existing preservation-review mechanism; wildcard reasons cannot waive humanity losses. Do not regenerate independent portrait expectations.

Required validate-data now includes fixed-baseline preservation and humanity checks. Assessment and citation units are in test:contract and therefore test:all. For ordinary batches select explicit accepted HUMANITY_IDS; empty/unknown selections fail. Shared integration defaults to the entire cohort. Require full readable blocks and corresponding usable citations; accessible expansion is valid, but material access conflicts stay beside facts.

Verification: 75 contract/assessment/citation units, 108 API tests, type/all-record/72-asset/fixed-preservation checks and build passed. Native Chromium 57-route sweep completed 56 desktop in 54.579s and 57 touch-mobile in 47.455s; the desktop failure was an image locator selecting an early decorative thumbnail instead of the lazy primary portrait. Primary-image targeting fixed it; Ekstrom plus Chloe and the three enrichments then passed in both viewports (5.9s/4.059s; 16.7s runner). Initial failures remain recorded, not relabeled as whole-suite passes. All accepted IDs have desktop/mobile full-block/citation and real local-image/source-link/zero-initial-external-request-and-cookie coverage. No intercepted portrait evidence. The unrelated complete browser suite was not rerun. Shared-cache functional route timing is not cold-cache, concurrency or thousand-profile performance.

Additional photo attempts remain held: Aileen Chang’s named exact handler returned HTTP 200 with No Image Found text; Michael Bain’s named asset returned HTTP 202 security-challenge HTML. Neither response was visually inspected as a photo, approved or delivered. No guessing/bypass, no new portrait approvals, no blanket unknown-terms prohibition. Focused optional Gemini/Copilot evidence prompts and deeper notes are separate from clean profile-ready results. All identities, routes, clinical/identity holds, access uncertainty and review/indexing states remain. No deployment or promotion.
