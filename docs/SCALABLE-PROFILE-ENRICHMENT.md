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
