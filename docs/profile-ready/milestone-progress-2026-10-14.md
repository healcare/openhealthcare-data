Checked app revision: 772d05caed82116babb178d27dd255f84891dd3f. Commands below refer to healcare/openhealthcare, not this data repository. The 100-profile milestone is not complete.

# 100-profile milestone — 2026-10-14

**Status: not complete. No deployment or review/indexing promotion.**

## Counts and evidence scope

Fixed pre-change app revision: `ec171b709132050ca5e06fcc05097c2160d8d5b9`; public-data starting revision: `eeec080d70c1d891224746146b49744ea240f5f4`.

Starting inventory: **93 stable unique provider IDs / 70 approved local portraits**. Starting conservative documented narrative/portrait/access intersection: **23**. After three additive enrichment batches: **93 providers / 71 approved portraits / 37 documented-intersection profiles**.

**37 is a conservative documented count, not an exhaustive final qualifying total.** Other records have useful sourced stories in separately reviewed packets, highlights or runtime overrides and require further milestone reconciliation rather than being declared contentless. The read-only scan requires a readable narrative, explicit sentence/group narrative citation scopes, an independently approved portrait, useful practical scope/unknowns, and no detected editorial/identity/regulatory hold. It does not independently check external facts, assess all human details, certify source freshness or substitute for qualitative review. The complete 100-profile qualification audit is unfinished; do not report 93, 71 or 37 as human-approved or license-verified.

Among the 37 documented rows, **13 explicitly await human review, 12 are pending pilot human review, and 12 have no recorded human-review status**. None is relabeled human-approved. Clinical facts remain source-stated unless separately verified. Practical coverage/capacity/prices/referrals remain explicitly unknown where the named source does not establish them.

Reproduce detailed per-ID dispositions and evidence URLs/dates with:

```
node scripts/audit-profile-milestone.mjs --base ec171b709132050ca5e06fcc05097c2160d8d5b9
node scripts/audit-profile-milestone.mjs
```

## Applied batches — existing identities only

All 14 were enriched; **zero new provider records**, **one newly approved portrait**, **13 unchanged portrait approvals**. Source-ready packets were committed to public data before claim imports.

| Name | Stable ID | Directory | Applied |
|---|---|---|---|
| Jason Emer | `6ff9b213-3354-4798-bf10-22f3ef988c11` | dermatologists-beverly-hills | Named career narrative and scoped access unknowns; prior new portrait retained |
| Jessica Wu | `f361d60c-0b72-4b4a-80ea-2c281bcda294` | dermatologists-beverly-hills | Named narrative/human detail, access routing/unknowns, new inspected 1100×1375 local portrait |
| Kendall Roberts | `09343a88-1355-430e-bc16-0f0a862e1fd4` | la-jolla-pediatricians | Cited personal perspective, claim map and access limits |
| Genevieve Parsons | `2707b96e-3085-4eb0-9ae7-d53f4a269e53` | la-jolla-pediatricians | Cited personal perspective, claim map and access limits |
| Sheetal Gandhi | `3b2fea38-0173-4aaa-9b16-6069c3d72107` | la-jolla-pediatricians | Cited personal/community perspective, claim map and access limits |
| Christine Johnson | `6ccc7ec7-445d-4979-9252-093fde4b30cd` | la-jolla-pediatricians | Service/community narrative, no new duration arithmetic, access limits |
| Lauren Fulkerson | `7d3ac2fc-1c0e-40c1-985d-c6578302fbd0` | la-jolla-pediatricians | Career/parenting narrative, claim map and access limits |
| Maria Capetanakis | `82d2a63a-16a9-4b49-a549-3e0c680da73e` | la-jolla-pediatricians | Training/language career account; no invented hobby; access limits |
| Vivian Tung | `a08b35d3-c136-40a2-9f5b-13cbe0f8378c` | la-jolla-pediatricians | Career/human narrative, claim map and access limits |
| Asako Komiya | `dfb4bcb0-450c-4f53-b3bd-22ba3bf19c47` | la-jolla-pediatricians | Nursing/family narrative; nurse-practitioner role retained; access limits |
| Kelly Cordoro | `597f9450-2ad6-431b-8e07-af774761455a` | san-francisco-dermatologists | Teaching/childhood skin-disease narrative, four scoped glance facts, access limits |
| Regina-Celeste Ahmad | `70e740e8-6db6-461d-8c4c-ddd5fc8abe05` | san-francisco-dermatologists | Combined-clinic career/hiking detail, four glance facts, access limits |
| Erin Amerson | `75255896-d1b2-4c5d-a512-4cda77a6232c` | san-francisco-dermatologists | Uganda/access-equity career and human detail, four glance facts, access limits |
| Susana Ortiz-Urda | `bcc8ed10-6fb4-45b0-a985-644e13055d80` | san-francisco-dermatologists | Melanoma/research/MBA career narrative, four glance facts, academic-address limits |

## Remaining gaps and holds

- **22 providers still lack an approved suitable local portrait.** These remain explained fallbacks, not quota substitutions. The retained media report records blocked sources, unsuitable graphics and unresolved named candidates; not all are proven impossible to resolve with further normal research.
- Obeng and Dr. J's editorial holds, Norfolk Rawlings/Schlichter/Mason's dated licensing/identity concerns and roster failure, David Kim's mismatched identity, Nancy Hyatt's credential conflict and Kevin Sadati's degree conflict remain distinct from media rights and practical access uncertainty. No held case counts as fully verified.
- Gainor's current named page omits the older training details; historical copy/provenance remains, but current corroboration is unresolved. Twito's current page supports virtual-only scope rather than a new human narrative. Lester's opened Profiles page supplied an automatically derived publication list rather than a biography overview; additional named evidence is needed.
- **At least seven additional records are necessary for 100 unique profiles**, and more if held cases cannot qualify. No new records were created merely to increase a quota. Additional candidates still need identity/source checks, original narrative, suitable inspected media, practical scope, and clean-name URL/collision review.
- Remaining milestone assessments, missing-image research and new-provider research are unfinished work, not a claim that 100 is globally impossible. No final milestone/release readiness is asserted.

## Verified batch scope

Passed: all-record data validation (109 files), 71-entry independent portrait asset/hash/source guard, TypeScript, fixed-baseline import preservation (14 provider changes), five milestone audit unit checks, 67 contract tests, 107 HTTP checks, production build and diff checks.

Native Chromium: two desktop/touch-mobile batch tests each covered all 14 profiles, plus existing Jason desktop/mobile checks and the affected-ID mobile directory guard (**5 passing browser cases**). Verified actual local decoding, visible narratives/access unknowns, accessible source names, outward attribution, proportional full-face framing, no overflow and zero initial third-party requests/cookies. Separately, the cross-directory saved-photo-outcomes case passed (**1 case**) with 67 primary grid photos / 22 fallbacks plus four separate mental-health previews.

All 93 providers' non-enrichment fields and all 70 pre-existing approved portrait entries were explicitly compared unchanged against the fixed baseline. Earlier sources, stories/highlights, correction history, stable routes/aliases/membership and clinical/review/indexing controls remain intact. The independent portrait inventory was extended deliberately, never regenerated.

No shared UI behavior changed. Unchanged wider-suite, Firefox/WebKit, actual touch-disclosure and screen-reader limitations are retained, not newly rerun or claimed for this batch. Full release checks are deferred until a complete milestone candidate exists. Details and rejected candidates are in [separate research notes](../research/milestone-evidence-notes-2026-10-14.md); clean packets are in `docs/profile-ready/`.
