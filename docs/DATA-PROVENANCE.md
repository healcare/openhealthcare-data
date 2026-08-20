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
