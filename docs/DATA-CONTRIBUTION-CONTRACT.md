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

## Narrative refreshes (schema 1.2.0)

Continue the Norfolk profile model: a concise original `story`, the existing
`quickSummary` boxes, source-linked media, and optional `profileSections` with stable
IDs, headings, text, and nonempty `sourceIds`. Omit empty sections. Cite personal
interests only when the clinician voluntarily describes them in a professional source.
Do not turn promotional adjectives, followers, or reviews into care-quality claims.

For an existing directory, set `importContract.mode` to `update-existing-only` and
retain the application's directory/provider `existingEntityId` and provider
`canonicalPath`. Never mint replacement identities. Preserve newer evidence and
existing publication decisions. A research artifact may be draft/non-indexable while
its existing app page has a different historical status; the import must not silently
change that status.

`portrait: null` is permitted in 1.2.0 only with `mediaReview.status: unresolved`, a
specific note, a check date, and cited attempted sources. Never substitute a page URL,
logo, or guessed asset to satisfy validation. Existing portraits with newer valid
provenance should survive a refresh with unresolved media. Continue remote-reference
and no-duplicate-thumbnail rules.

`reviewNotes` travel with the record and must be visible wherever relevant. They may
record source conflicts or historical regulatory documents without implying a completed
current license lookup. A search-index observation must be labeled as such and cannot
establish current closure, availability, or licensing. The legacy `lastVerified` field
means source research date in a narrative-only bundle; state that meaning explicitly
and leave current licensing checks pending until actually completed.

Agents can reuse dated, source-stated narratives within their evidence scope, but must
recheck dynamic details, unresolved conflicts, and credential status when their task
requires current verification. Do not equate reuse with permanent truth. No new license
or permission to redistribute third-party media or source text is granted here.

## Ownership and efficient handoff

Follow [Research and site-building workflow](RESEARCH-AND-BUILD-WORKFLOW.md).
Research, verification evidence, editorial assessment, and resolution of factual exceptions
stay in the ChatGPT research workflow. Replit preserves supplied decisions and runs
technical checks; it does not repeat research or perform a simulated human review.
Actual human-review requirements remain pending until a human completes them. Held
records do not block eligible records or unrelated site-building work.
