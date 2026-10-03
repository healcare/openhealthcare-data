# OpenHealthcare research staging

This package contains source-backed directory records prepared for import into
`healcare/openhealthcare`.

## Workflow ownership

Follow [Research and site-building workflow](docs/RESEARCH-AND-BUILD-WORKFLOW.md):
ChatGPT owns evidence, verification research, narratives, and editorial handoffs;
Replit owns implementation and technical testing. Return unresolved facts here rather
than repeating research or simulating human review in Replit.

## Directory pilots

- `data/directories/us/ca/orange-county/plastic-surgeons.json` — eight existing OC profiles with Newport Beach/Corona del Mar evidence
- `docs/ORANGE-COUNTY-NARRATIVES-2026-09-30.md` — original narrative drafts
- `docs/ORANGE-COUNTY-CORRECTIONS-2026-09-30.md` — previous/proposed credential and contact values
- `docs/REPLIT-ORANGE-COUNTY-REFRESH.md` — prepared implementation handoff; no new Replit research task

- `data/directories/us/ca/beverly-hills/plastic-surgeons.json` — eight existing profiles, narrative research draft
- `docs/BEVERLY-HILLS-NARRATIVES-2026-09-30.md` — readable narrative review copy
- `docs/REPLIT-BEVERLY-HILLS-REFRESH.md` — update-existing handoff preserving the Norfolk baseline


- `data/directories/us/ca/la-jolla/pediatrics.json` — La Jolla pediatrics data
- `data/directories/us/va/norfolk/therapists.json` — Norfolk therapist beta data
- `schemas/directory.schema.json` — compact validation contract
- `templates/directory-bundle.template.json` — copy-ready source-linked directory template
- `scripts/validate-bundles.mjs` — zero-dependency full or changed-file validator
- `docs/DATA-CONTRIBUTION-CONTRACT.md` — durable IDs, evidence, review states, media,
  refresh, scaling, and import rules
- `docs/DATA-PROVENANCE.md` — verification, social-signal, and image-handling rules
- `docs/REPLIT-NORFOLK-HANDOFF.md` — scoped app ingestion and profile-design brief
- `docs/reviews/NORFOLK-THERAPISTS-HUMAN-REVIEW-2026-08-20.md` — completed
  provider-level license review, discrepancies, editorial decision, and regression contract

Every publishable claim carries one or more source identifiers. Records distinguish
clinician roles and never infer accepting-new-patients, insurance participation, board
status, accessibility features, or care quality.

## Add and validate data

Copy `templates/directory-bundle.template.json` into the geography/topic path described
in `docs/DATA-CONTRIBUTION-CONTRACT.md`, replace every example, and run:

```text
npm run validate-data -- data/directories/{country}/{region}/{city}/{topic}.json
```

The validator has no third-party runtime dependencies. Without a path it checks every
bundle; CI checks changed bundles and performs a full scan when the schema, validator, or
template changes. This keeps ordinary contributions inexpensive as the repository grows.

## Replit ingestion

Stable raw feeds:

- `https://raw.githubusercontent.com/healcare/openhealthcare-data/main/data/directories/us/ca/la-jolla/pediatrics.json`
- `https://raw.githubusercontent.com/healcare/openhealthcare-data/main/data/directories/us/va/norfolk/therapists.json`

For `healcare/openhealthcare`, ingest a bundle into the application's native entity
contract as follows:

1. Create one permanent UUID-backed directory entity using the feed's `directory.slug`.
2. Create one permanent UUID-backed provider entity for each item in `providers`.
3. Preserve every source URL and retrieval date. Use `verificationStatus:
   "source-stated"` unless an independent government or professional-board check has
   actually been completed. When it has, preserve the provider-specific result as
   `confirmed`, `conflict`, or `unresolved`; never collapse mixed results into a directory-wide
   “verified” badge.
4. Set `status: "published"`, `indexable: false`, and `claimStatus: "unclaimed"` for
   research cohorts. Human review does not automatically authorize indexing; that requires
   a separate dated editorial decision.
5. Map `story` to provider description/highlight fields without adding new claims.
6. Map `portrait` and `mediaGallery` as remote references only. Each image must retain
   its source-linked click-through URL and alt text, and the UI must tolerate missing or
   blocked remote images.
7. Render `quickSummary` in compact, labeled sections such as “Helps with,” “Approach,”
   “Works with,” and “Care format.” Keep `discoverySignals` visibly separate from
   credentials and explain that they are dated discovery signals, not quality scores.
8. Run `npm run validate-data`, `npm run check`, `npm run test:http`,
   `npm run test:contract`, and the focused browser/regression suites in the private
   application repository before merging.

The public feed is an authoring and provenance layer. The private application remains
responsible for assigning permanent entity UUIDs and collision-safe canonical paths,
preserving externally supplied review state, and implementing separately authorized deployment.

## Refresh an existing directory

For bundles with `importContract.mode: "update-existing-only"`, match the supplied
`existingEntityId` and preserve `canonicalPath`; do not create replacement UUIDs.
The research bundle’s draft/review/indexing settings do not override existing application
publication decisions. See `docs/REPLIT-BEVERLY-HILLS-REFRESH.md`.

Schema 1.2.0 allows an explicitly unresolved portrait to be `null` with a sourced
`mediaReview`; older versions retain their previous validation requirements.
Run `npm run test:refresh` when changing refresh validation.

## Irvine Medi-Cal access pilot — October 2, 2026

- [Three source-stated Irvine practice records](data/directories/us/ca/irvine/dentists.json), source research dated October 2. Practice participation, panel status, language, accommodations and treatment coverage are separate fields; unknowns are explicit.
- [Replit handoff](docs/REPLIT-IRVINE-MEDI-CAL-HANDOFF.md): new owner-authorized directory, accessible Medi-Cal* link badge, organization identities, pending review, no indexing or deployment.

This new Irvine scope does not reopen the existing Orange County plastic-surgeon factual hold. It supports lower-income patients and reusable criterion-level evidence for future search agents.

## Open search signals

[Lightweight research logs](research/search-signals/README.md) preserve attributable positive/negative insurance statements, snippet leads, failed retrievals, historical records and corrections. They supplement structured evidence without automatically changing profile claims or badges. The [Irvine insurance log](research/search-signals/2026-10-02-irvine-dental-insurance.txt) includes explicit practice-stated Medi-Cal/HMO nonparticipation and future badge guidance.
