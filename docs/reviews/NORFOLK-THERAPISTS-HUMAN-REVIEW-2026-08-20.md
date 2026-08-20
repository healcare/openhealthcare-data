# Norfolk Therapist Directory: Independent Human Review Report

**Review date:** August 20, 2026  
**Directory:** `norfolk-therapists`  
**Directory entity:** `039158ba-d40c-429a-a244-ffec4edd3307`  
**Review state:** Complete  
**Editorial decision:** Direct access remains enabled, but the cohort remains unclaimed and non-indexable.

## Executive summary

The Norfolk therapist directory began as a deliberately limited research cohort. Its
records were source-stated, unclaimed, excluded from the sitemap, and held out of search
indexing while a qualified human reviewer checked the underlying evidence. This review
completed that work without turning public visibility or directory presence into a
quality claim.

The reviewer checked all 10 provider profiles, all 25 retained directory source records,
eight practice or service locations, Virginia Department of Health Professions
primary-source license results for every provider with a cited Virginia license number,
and current first-party practice and location evidence, including the Relationship Center
roster discrepancy.

The result is not a blanket “verified” label. It is a structured set of provider-specific
outcomes:

- **7 exact active Virginia record matches**
- **2 identity conflicts**
- **1 unresolved no-record lookup**

The directory is technically `published` so that it can be reached by a direct link, but
it remains `unclaimed` and `indexable: false`. The site can expose the research artifact
for review without presenting it as an endorsed, complete, searchable directory.

## Why this review mattered

### A source is not the same as a verified claim

A first-party profile can support what a practice or provider says about itself, but it
does not automatically establish current licensure, current availability, insurance
participation, outcomes, or clinical quality. Secondary directory pages can corroborate
discovery and profile context, but they are not substitutes for a government licensing
record. Provenance therefore remains attached to each claim instead of being flattened
into a single “verified” badge.

### License-number matching requires identity matching

A number returned by a government lookup is not sufficient by itself. The returned
license holder must match the provider represented by the profile. This was decisive for
two records:

- Nathaniel Mason’s cited LPC number was active, but the record belonged to **Wesley N Mason**.
- Jeff Schlichter’s cited psychologist number was present, but the record belonged to **K J Schlichter**.

Both results were recorded as conflicts rather than promoted as confirmations.

### A failed source lookup is evidence about the source, not proof about the provider

The Relationship Center clinician roster returned a 404 during review. The roster was
retained for provenance and marked `unresolved`. The individual provider pages for
Nathaniel Mason, Rachel Jones, and Bret Rawlings remained separately available and were
reviewed as individual sources. A broken roster is neither current evidence nor proof
that the individual provider or practice does not exist.

### Public discovery signals must not become quality signals

Public profile presence, peer-endorsement counts, and public gallery counts are retained
only as dated discovery signals. They do not measure clinical quality, outcomes, safety,
suitability, or endorsement by OpenHealthcare.org.

## Review method

1. **Preserve the research cohort.** The ten providers and 25 source records were not
   silently replaced or narrowed during review.
2. **Check first-party practice and location evidence.** Provider profiles, practice
   pages, rosters, and location records remained linked to their original sources.
3. **Run individual Virginia primary-source lookups.** Each cited license number was
   checked against the Virginia Department of Health Professions lookup for both record
   status and identity.
4. **Assign a provider-specific outcome.** Outcomes were limited to `confirmed`,
   `conflict`, or `unresolved`. Review metadata separately records `reviewed`,
   `licenseLookupStatus: completed`, and `primarySourceCheck: completed`.
5. **Document discrepancies where they appear.** The roster 404 is recorded in the
   directory source set and on the affected provider citations, and the UI exposes the
   note.
6. **Make an explicit editorial decision.** Human review did not trigger automatic
   indexing. The directory remains directly accessible, unclaimed, and non-indexable.

## Provider-level results

| Provider | Virginia license cited | Outcome | Reasoning |
| --- | --- | --- | --- |
| Amy Echstenkamper | LCSW `0904013764` | **Confirmed** | Exact active Virginia primary-source record match. |
| Bret Rawlings | LPC `0704016018` | **Unresolved** | No matching Virginia record was returned for the cited number. |
| Gregory C. Lemich | LPC `0701010480` | **Confirmed** | Exact active Virginia primary-source record match. |
| Jeff Schlichter | Clinical Psychologist `0810000997` | **Conflict** | The number belongs to K J Schlichter, so identity was not established. |
| Morgan McDonald | LCSW `0904019389` | **Confirmed** | Exact active Virginia primary-source record match. |
| Nathaniel Mason | LPC `0701015787` | **Conflict** | The number belongs to Wesley N Mason, so it was not confirmed for Nathaniel Mason. |
| Rachel Jones | LPC `0701010442` | **Confirmed** | Exact active Virginia primary-source record match. |
| Rachel Micheletti | LPC `0701013290` | **Confirmed** | Exact active Virginia primary-source record match. |
| Ruth Bybee | LPC `0701010345` | **Confirmed** | Exact active Virginia primary-source record match. |
| Shannon Schaubach | LPC `0701010429` | **Confirmed** | Exact active Virginia primary-source record match. |

“Confirmed” means that the cited number produced an exact active-record identity match
during the dated lookup. It is not a promise that the license will remain active, that
the provider is accepting patients, or that the provider is appropriate for a
particular person.

## Source and data decisions

### Directory record

The directory records:

- `reviewStatus: "reviewed"`
- `status: "published"` for direct access
- `claimStatus: "unclaimed"`
- `indexable: false`
- 10 providers, eight locations, and 25 retained source records
- a dated review note explaining the 7/2/1 license-outcome split
- an unresolved note for the Relationship Center roster 404

The government lookup is the directory-level source for the completed license-review
activity, while the specific outcome is stored on each provider. This prevents one mixed
source record from erasing provider-level differences.

### Provider records

All ten providers record:

- `verification.reviewStatus: "reviewed"`
- `verification.licenseLookupStatus: "completed"`
- `licenseEvidence.primarySourceCheck: "completed"`
- `licenseEvidence.sourceId: "virginia-dhp-license-lookup"`
- an outcome-specific `verification.status`

The Relationship Center roster citation is marked `unresolved` for Nathaniel Mason,
Rachel Jones, and Bret Rawlings, with a note that each individual profile was reviewed
separately.

### User-facing disclosure

The directory and provider pages explain that human review is complete, the cohort
remains unclaimed and non-indexable, license outcomes are provider-specific, profile
claims remain linked to their sources, and public discovery signals are not quality
claims. A Virginia primary-source result is a dated record observation, not a guarantee
of current licensure, availability, insurance participation, or new-patient status. The
roster 404 remains visible in the provenance panel.

## Validation contract

The implementation was checked with:

```text
npm run validate-data
npm run check
npm run test:http
npm run test:contract
npm run test:pilot
npm run test:browser
npm run test:all
git diff --check
```

The application workflow was restarted after changes. The final browser run passed 52
tests. The combined run passed the HTTP, contract, San Francisco pilot, and browser
suites.

### Private application locations

- `data/directories/039158ba-d40c-429a-a244-ffec4edd3307.json` stores the directory
  status, eight locations, 25 source records, editorial decision, and review summary.
- `data/providers/` stores the ten Norfolk provider records with dated review metadata,
  DHP citations, provider outcomes, and discrepancy notes.
- `scripts/validate-data.ts` enforces reviewed-provider, completed-lookup,
  primary-source, DHP-citation, non-indexability, and outcome invariants.
- `client/src/components/pilot-disclosure.tsx` presents review state, limitations,
  source outcomes, and source notes.
- `client/src/components/therapist-profile.tsx` presents provider-specific confirmed,
  conflict, and unresolved license language.
- `client/src/pages/directory.tsx` passes directory review state into the disclosure.
- `tests/http.test.ts` covers direct access, noindex, sitemap exclusion, and all ten
  provider outcomes.
- `tests/url-contract.test.ts` covers reviewed records, 25 sources, roles, source
  statuses, and canonical URLs.
- `tests/browser.spec.ts` covers visible review language, discrepancies,
  accessibility, and mobile layout.
- `tests/sf-pilot.test.ts` protects the pre-existing San Francisco pilot from regression.

The private application validator and regression tests must continue to enforce:

- all ten reviewed Norfolk providers and their exact 7/2/1 outcomes;
- completed license lookups and completed primary-source checks;
- retained DHP citations and the unresolved roster citation;
- direct accessibility with `noindex`, sitemap exclusion, and unclaimed status;
- visible match, conflict, no-record, and 404 explanations;
- accessibility and mobile layout; and
- no regression to the San Francisco or La Jolla pilots.

No schema change was required in the private application because its data model already
supported `reviewed`, `confirmed`, `conflict`, and `unresolved` states.

## Reusable operating model

1. Do not make a research cohort searchable merely because its pages render.
2. Require a dated human decision before changing review state.
3. Keep evidence granular; provider-level identity results belong on providers.
4. Treat government lookups as identity evidence, not automatic approval.
5. Propagate broken or conflicting source status wherever the source is cited.
6. Never use public discovery metrics as ranking inputs.
7. Test the visible UI promise as well as the data record.

## Future review

Before anyone considers search visibility, perform a fresh Norfolk recheck covering all
ten profiles, the retained source set, Virginia licensing results, current locations,
and the former Relationship Center roster discrepancy. The directory must remain
unclaimed and non-indexable until that recheck produces a new explicit editorial
decision.

## Agent-training lessons

- Read the source records before changing the status model.
- Separate “the source says this” from “the reviewer confirmed this.”
- Match license identity, not only license number.
- Preserve conflicts and no-record results.
- Never infer clinical quality from public discovery signals.
- Surface discrepancies in the UI as well as in JSON.
- Keep direct access and search indexing as independent editorial controls.
- Update validators and regression tests whenever a review-state contract changes.
- Run the complete combined suite before declaring a research directory ready.
