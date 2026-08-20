# OpenHealthcare research staging

This package contains source-backed directory records prepared for import into
`healcare/openhealthcare`.

## Directory pilots

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
responsible for assigning permanent entity UUIDs, collision-safe canonical paths, human
review state, and deployment.
