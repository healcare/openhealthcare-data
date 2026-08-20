# Directory data provenance

## Source priority

1. Government registries and licensing boards
2. Clinician, practice, hospital, or university profiles
3. Professional societies
4. Reputable secondary directories as corroboration or discovery leads

## Verification states

- `verified`: supported by a named authoritative source retrieved on the stated date
- `source-stated`: accurately transcribed or paraphrased from the cited source, without
  claiming an independent primary-source check
- `partial`: some fields are verified but a key field is awaiting confirmation
- `conflict`: authoritative sources disagree; preserve both claims and do not guess
- `stale`: the record has exceeded its review window

Review workflow metadata is separate from claim outcome:

- `pending-human-review`: the research record has not received a completed human review
- `reviewed`: a dated reviewer completed the stated checks
- `pending` / `completed`: whether a named primary-source lookup was actually performed

Completing review does not require a positive outcome. A reviewed provider may be
`confirmed`, `conflict`, or `unresolved`. It also does not automatically change
`indexable`, `claimStatus`, or publication state.

## Primary-source license review

Treat a licensing lookup as an identity-matching exercise, not a number-presence check.
A `confirmed` result requires the cited license number, returned identity, jurisdiction,
profession, and dated record status to align with the provider. A record belonging to a
different person is `conflict`; a no-record result is `unresolved`. Preserve both outcomes
without guessing.

Government results are dated observations. They do not guarantee future license status,
availability, insurance participation, outcomes, or suitability. Directory-level sources
may document the review method, but the result must remain provider-specific.

## Broken and changed sources

A failed source lookup is evidence about the source, not proof that a provider or practice
is invalid. Retain the source, mark it `unresolved`, record the observed failure and date,
and propagate the note wherever that source is cited. Review other first-party provider
pages independently rather than silently promoting or deleting the affected claim.

## Social and public discovery signals

Public profile presence, peer-endorsement counts, gallery counts, and similar signals
may be retained only as dated observations in `discoverySignals`. They are useful for
discovering providers and understanding public visibility; they are not clinical-quality
scores, patient-review summaries, recommendations, or evidence that a provider is a good
fit for a particular person. Never sort or label a directory as “best” on these signals.

## Portraits and media galleries

`portrait.sourceUrl` and every `mediaGallery[].sourceUrl` remain remote references.
`clickThroughUrl` must open the page that published the image. Image copying,
transformation, or permanent caching requires a separate permission/licensing review.
Always render supplied alt text and a neutral fallback when a remote image is unavailable.
Do not create empty or duplicated thumbnail slots when a provider has only one usable
source image.

## Editorial stories

`story` is original OpenHealthcare copy, not a quotation. It may paraphrase only facts
present in cited sources. Avoid subjective rankings, promises about care, claims about
outcomes, or time-sensitive availability unless the observation date is shown.

## Required validation behavior

Whenever review state changes, update the data validator and HTTP, URL-contract, and
browser regression suites together. They should agree on provider counts and outcomes,
source retention and status, direct accessibility, `noindex`, sitemap exclusion, visible
limitations, accessibility, and mobile behavior. A JSON-only assertion is insufficient if
the rendered page hides or contradicts a conflict.

The Norfolk review is the reference implementation:
`docs/reviews/NORFOLK-THERAPISTS-HUMAN-REVIEW-2026-08-20.md`.
