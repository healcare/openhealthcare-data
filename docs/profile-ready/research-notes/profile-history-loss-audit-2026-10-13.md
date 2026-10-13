# Existing-profile history loss audit — October 13, 2026

## Scope and method

Compared first-parent provider-record changes from `2e40424` through `c69a82c` (107 commits; 79 existing provider records at the starting point, 93 current), keyed citations by URL and profile sections by stable IDs. Also checked shared profile rendering across all 93 current provider routes. This note distinguishes stored facts, media disposition, and display eligibility. It does not infer author motive.

## Material findings

### Portrait URLs cleared by `2e40424`

Fourteen existing records had populated portrait URLs cleared: the ten La Jolla pediatricians plus Nathaniel Mason, Bret Rawlings, Rachel Jones, and Rachel Micheletti. The dated project checkpoint specifically records Cloudflare `__cf_bm` cookies on CPCMG image requests. It gives a privacy reason, not a licensing rationale. No clinical identity or license conclusion follows.

The ten La Jolla photos were recovered from the retained named CPCMG biographies and assets, visually identity-checked, and locally served with source links and full-face framing. Original and preview pixel dimensions are in `docs/profile-ready/history-recovery-summary-2026-10-13.md`. The image sources do not state reuse terms; no ownership or derivative-card claim is made. Mason and Rawlings now have local source-linked previews from their named Relationship Center biographies. Jones and Micheletti remain remote-reference-only and require explicit activation before the app fetches the remote image.

### Sourced biography section omitted by route presentation

The stored “About his work” section for Guy Winch was not visible on `/guy-winch`; no dated reason for that omission was found. The renderer now displays the section and its source link. This was a presentation loss, not a deleted data claim.

### Changes supported as intentional evidence cleanup

`44c109a` and `89fed3a` added source mapping and review notes for unsupported Beverly Hills marketing claims, rankings, awards, specialties, and credentials. `c645847` documented source and verification limits behind Washington, DC contact/title/credential reductions. These claims and old contact fields were not restored. Current evidence establishes that the old statements were not supported by the retained sources, not why an individual author originally entered them.

`8611a17` removed Garth Fisher’s “A personal contribution” section, but its fact is retained in a cited `atAGlance.humanDetail`, now visibly rendered. This is a sourced reorganization, not an established factual loss.

### Locations and corrections

The JSON comparison identified three old location rows removed in `44c109a` / `8611a17`: Anjali Rajpal, Kevin Frawley, and Michael K. Obeng. Rajpal and Frawley currently have the practice addresses tied to retained contact sources. Obeng’s old location is not presented as current; the identity/license hold remains. No public correction-history entry was removed.

A JSON scan found no provider source URLs removed from the history window. David Bolon’s apparent location change and several apparent source removals were serialization/source-ID differences; URL-keyed comparison confirms the evidence remains.

## Prevention added

The app’s existing-profile import guard now prints before/after diffs for removals in narrative, evidence, source, contact, location, media, and correction fields. It blocks a removal unless `data/preservation-reviews.json` records a valid date, scoped path, disposition, and reason. Source URL/string/object changes normalize by URL. Separate portrait-delivery protections continue to require a documented media hold for a local-preview downgrade.

The all-route browser audit checks source-backed descriptions, profile sections, and human details against rendered content while respecting held/research-gap profiles. It also rejects any pre-interaction third-party request on all standard profile routes. Remote portrait/gallery loading now requires an explicit action; local previews remain same-origin.

## Unchanged holds and scope

No IDs, canonical paths, aliases, directory memberships, clinical roles, newer evidence, review/indexing flags, or Obeng hold were changed. The Norfolk license outcomes and roster failure remain. No production deployment was performed in this research update.