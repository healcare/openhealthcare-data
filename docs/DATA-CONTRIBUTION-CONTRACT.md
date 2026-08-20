# OpenHealthcare data contribution contract

This repository is the source-linked authoring layer for OpenHealthcare.org. It should
let a human or agent add a local directory without searching the application codebase or
inventing a new schema.

## Start a directory

1. Copy `templates/directory-bundle.template.json` to:

   `data/directories/{country}/{region}/{city}/{topic}.json`

2. Replace every example value. Use lowercase ASCII slugs with hyphens.
3. Add sources first, then locations and providers that cite those source IDs.
4. Keep new research cohorts `published`, `unclaimed`, and `indexable: false` while
   `reviewStatus` is `pending-human-review`.
5. Validate only the files you changed:

   ```text
   npm run validate-data -- data/directories/us/va/norfolk/therapists.json
   ```

   Running the command without paths validates every bundle in the repository.

## Stable identifiers and scale

- A directory `slug` is a durable public candidate path. Never silently reuse or rename
  it for a different directory.
- Provider, location, and source `id` values are durable within their bundle. Keep them
  when correcting or refreshing the record.
- The private application assigns permanent UUIDs and collision-safe canonical paths.
  The public bundle IDs remain the import keys and provenance anchors.
- Do not maintain a hand-edited global provider index. At large scale it becomes a merge
  conflict hotspot. Generate search indexes and manifests from the sharded bundle files.
- Directory files are sharded by country, region, locality, and topic so agents can add
  data concurrently without rewriting unrelated records.
- CI validates changed bundles. Periodic full scans can separately detect cross-bundle
  path or identity collisions.

## Evidence model

Every durable claim should be traceable:

- `sourceIds` lists the complete evidence set for a provider or location.
- `claimEvidence` optionally maps a specific claim group, such as identity, role,
  location, language, or license, to its sources and verification status.
- First-party profiles support what a provider or practice says about itself.
- Government registries support dated primary-source identity and status observations.
- Secondary directories are corroboration or discovery leads, not substitutes for a
  primary-source license check.
- Keep retrieval and observation dates. Do not rewrite an old observation as if it were
  current.

## Review and verification are separate axes

`reviewStatus` records workflow:

- `pending-human-review`
- `reviewed`

`verification.status` records the evidence outcome:

- `source-stated`
- `verified` for compatible legacy records
- `confirmed`
- `conflict`
- `unresolved`
- `partial`
- `stale`

`licenseLookupStatus` and `primarySourceCheck` record whether the named lookup occurred.
A completed review may legitimately end in `conflict` or `unresolved`. Never convert a
mixed directory to a blanket “verified” label.

Human review does not automatically authorize indexing. `status`, `claimStatus`, and
`indexable` remain independent editorial controls. Enabling indexing requires a separate,
dated editorial decision.

## License evidence

When a number is checked against a government source, match number, returned identity,
profession, jurisdiction, and dated record status. Store the provider-specific result:

- `confirmed`: exact identity and record match
- `conflict`: the returned record contradicts the represented provider
- `unresolved`: no reliable match was established

Point completed `licenseEvidence.sourceId` to the government lookup source, not merely to
the secondary page that supplied the original number. Retain a short neutral review note
for conflicts and unresolved results.

## Media

Images remain remote references unless a separate rights review authorizes copying.
Every portrait and gallery item needs an image URL, accessible alt text, a click-through
to the publishing page, and `usage: "remote-reference-only"`. Do not fabricate, cache,
or duplicate thumbnails. A single usable image should produce a single-image profile.

## Public discovery signals

Discovery signals must be dated, sourced, and visibly separate from credentials. They
must never become ranking, recommendation, or clinical-quality inputs. Avoid star ratings
and review sentiment entirely.

## Refreshes and corrections

- Preserve the existing record and source trail; do not silently replace an inconvenient
  conflict or failed lookup.
- Mark broken sources `unresolved` and explain the observed failure.
- Add a new review date and updated evidence instead of pretending the earlier lookup
  never happened.
- Keep dynamic availability, fees, insurance participation, and new-patient status out
  of permanent summaries unless clearly dated and sourced.

## Application import contract

The private application should preserve every source, date, review state, provider role,
location, summary, story, media attribution, and discovery-signal limitation. Its
validator, HTTP tests, canonical URL tests, and browser tests should assert the same
editorial promise. Research cohorts stay out of sitemaps and search indexing until a
separate decision changes that state.

The Norfolk human-review report is the worked example:
`docs/reviews/NORFOLK-THERAPISTS-HUMAN-REVIEW-2026-08-20.md`.
