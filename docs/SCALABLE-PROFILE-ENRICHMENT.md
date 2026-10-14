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
