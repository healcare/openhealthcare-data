# Directory data provenance

## Source priority

1. Government registries and licensing boards
2. Clinician, practice, hospital, or university profiles
3. Professional societies
4. Reputable secondary directories only as conflict leads, never as sole authority

## Verification states

- `verified`: supported by a named authoritative source retrieved on the stated date
- `partial`: some fields are verified but a key field is awaiting confirmation
- `conflict`: authoritative sources disagree; preserve both claims and do not guess
- `stale`: the record has exceeded its review window

## Portraits

`portrait.sourceUrl` is the portrait published on the clinician's official profile.
`portrait.clickThroughUrl` must point to that official profile. The initial data stores
remote references only; image copying, transformation, or permanent caching requires a
separate permission/licensing review. Always render the supplied alt text and a neutral
fallback when the remote image is unavailable.

## Editorial stories

`story` is original OpenHealthcare copy, not a quotation. It may paraphrase only facts
present in the cited official biography. Avoid subjective rankings, promises about care,
or claims about outcomes.

