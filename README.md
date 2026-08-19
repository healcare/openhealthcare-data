# OpenHealthcare research staging

This package contains source-backed directory records prepared for import into
`healcare/openhealthcare`.

## La Jolla pediatrics pilot

- `data/directories/us/ca/la-jolla/pediatrics.json` — render-ready directory data
- `schemas/directory.schema.json` — compact validation contract
- `docs/DATA-PROVENANCE.md` — verification and image-handling rules

Every publishable claim carries one or more source identifiers. Records distinguish
physicians from other pediatric clinicians and never infer accepting-new-patients,
insurance participation, board status, or accessibility features.

## Replit ingestion

The stable raw feed for the current pilot is:

`https://raw.githubusercontent.com/healcare/openhealthcare-data/main/data/directories/us/ca/la-jolla/pediatrics.json`

For `healcare/openhealthcare`, ingest this bundle into the application's native entity
contract as follows:

1. Create one permanent UUID-backed directory entity with canonical path
   `la-jolla-pediatricians`.
2. Create one permanent UUID-backed provider entity for each item in `providers`.
3. Preserve every source URL and retrieval date. Use `verificationStatus:
   "source-stated"` unless an independent government or professional-board check has
   actually been completed.
4. Set `status: "published"`, `indexable: false`, and `claimStatus: "unclaimed"` until
   human review and license verification are complete.
5. Map `story` to the provider description/highlight fields without adding new claims.
6. Map `portrait.sourceUrl` to `imageUrl` and the official profile domain to
   `imageSource`. The portrait must click through to `portrait.clickThroughUrl`.
7. Run `npm run validate-data`, `npm run test:http`, and `npm run test:contract` in the
   private application repository before merging.

The public feed is an authoring and provenance layer. The private application remains
responsible for assigning permanent entity UUIDs, collision-safe canonical paths, human
review state, and deployment.
