# Humanity candidate review: Sungat K. Grewal — 2026-10-17

## Decision and scope

One new candidate is source-ready for the existing **UCSF/ZSFG-affiliated San Francisco dermatology** directory. At the pre-import check, the accepted intersection was 94/100 unique provider IDs, with 113 provider records, 105 local portrait deliveries, and 20 directory members. No matching Grewal record, route, accepted ID, or earlier candidate packet was found. The proposed `sungatgrewal` path was returned as the first available name-based suggestion by the app's path helper and passed its collision validation.

The candidate packet is stored separately at `docs/profile-ready/humanity-candidate-sungat-grewal-2026-10-17.json`. It is prepared, not yet an applied result. A final qualifying count must wait until the app record, API, visible page, local image, citations, and required checks pass.

## Named-source findings

**UCSF Health provider page:** https://www.ucsfhealth.org/providers/sungat-grewal  
Retrieved 2026-10-17. The named page identifies Sungat K. Grewal, MD, Dermatology; lists Dermatologic & Laser Surgery Mission Bay at 520 Illinois St., Third Floor, San Francisco, CA 94158; gives 415-706-3507; and lists telehealth plus request-appointment and refer-a-patient routes. The page's “About me” text says: “Outside of work, Grewal is an international marathoner and avid hiker.”

The specific personal interests meet the humanity criterion without turning credentials, promotional language, or generic service descriptions into a story. The source does not say these interests shape clinical work or patient outcomes. The access note preserves the named pathways while leaving appointment capacity, new-patient eligibility, plan-specific coverage, fees, referral necessity, and interpreter/language support unconfirmed. No license, board, or other clinical claim was independently verified.

The ordinary direct page GET returned HTTP 200 and two `Set-Cookie` headers. Values were not retained.

## Portrait inspection and delivery preparation

The named UCSF Health page links the exact asset:

`https://providers.ucsfhealth.org/sparkle-assets/images/dr-sungat-grewal-md-320x320-2x-814a93d63f533431c7c227605ed5eb0d.jpg`

The ordinary image GET returned HTTP 200, `image/jpeg`, 273,359 bytes, last modified `2026-01-21T02:53:45Z`, with no `Set-Cookie`. The decoded file is JPEG, 640×640, SHA-256 `4b07fb3907ae9454b08a1d048a968ca7b4e7d631f8237f271b0ed79e6a335cd3`. Visual inspection of those exact bytes confirmed one person and a clear, fully visible face; the current named page also labels the image “Portrait of Sungat K. Grewal.”

The prepared local rendition is an uncropped, proportional 360×360 WebP, 9,674 bytes, SHA-256 `28421e2f4d8ae8e723c7b0f448baa94aeaa4a4fd2427d4e55494e655416b48e6`. The local rendition was decoded and visually checked for face framing. It is intended as an immediately served source-linked preview with a direct source-page link, not as a derivative card or structured-data image. Reuse terms remain unknown; no ownership or permission conclusion is made.

## Other current UCSF Health pages checked

- **Jeffrey Cheng:** https://www.ucsfhealth.org/providers/jeffrey-cheng — the current page provides practice details, training, research, and patient reviews, but no provider-authored distinctive humanity narrative was found. Patient reviews were not repurposed as provider biography.
- **Ruby Ghadially:** https://www.ucsfhealth.org/providers/ruby-ghadially — the current page provides training, research, and patient reviews, but no qualifying personal-interest or journey section was found. Reviews were not treated as provider-originated narrative.
- **Laura Pincus:** https://www.ucsfhealth.org/providers/laura-pincus — the current extracted page provides training, expertise, and research, but no distinctive humanity narrative; it does not show a patient location in the extracted content. No profile is prepared.
- Search results also surfaced Amanda Twigg, Allison Dobry, Anna Haemel, and James Meixiong; those were already applied in prior batches and were not researched or counted again here.

These are bounded observations of the named pages on 2026-10-17, not claims that no other source could ever provide new evidence.

## Privacy, review, and limits

The source page's cookie observation is a research-time observation. It does not alter the app's rule: patient pages serve the local portrait, and source-page navigation requires explicit activation. The remote image returned no cookie during the ordinary GET. Reuse terms, independent clinical verification, license status, plan-specific coverage, fees, capacity, and human editorial review remain unresolved or pending. The new profile must remain unclaimed, non-indexable, pending human review, and pending license lookup under the existing defaults.

## Applied-result follow-up

The candidate was applied in app revision `7ecc2d117bee558e99a27f24b8d4279b70feaf3e` (app tree `43e37ee6cc972436fb48d6adfce8de34a3f6901e`), from pre-import app revision `416225a534d6791d676029d95f346620728b8165`. The app changed one provider record and one directory record; the checked count moved from 94 to 95 qualifying unique IDs, with 114 providers, 106 independent local portrait deliveries, and 21 San Francisco dermatology directory members. The clean applied receipt is `docs/profile-ready/humanity-applied-grewal-94-to-95-2026-10-17.json`.

Fresh checks passed: all-record/data, portrait, humanity and fixed-baseline guards; affected profile-import comparison; TypeScript and build; contract 83/83, SF pilot 105/105, HTTP/API 110/110; and affected desktop/touch-mobile/actual-source-tap browser checks 3/3. Full-page desktop and mobile screenshots were inspected. The browser check verified complete patient-visible story and access details, citations, immediate local portrait decoding, no third-party requests/cookies before activation, and source activation without toggling a neighboring disclosure. The exact image response had no Set-Cookie; the source page's ordinary retrieval returned two Set-Cookie headers. Reuse terms remain unknown. The profile remains unclaimed, non-indexable, pending human review and pending license lookup. No independent clinical/license verification, derivative-rights determination, physical-device Safari, independent screen-reader audit, full unrelated browser suite, or scale/performance test is claimed. No deployment or review/index promotion occurred.

This research note is separate from the clean applied receipt. Public-data preparation revision `f717ca908f79787287d80f8bdeed084068e302e8` was reconciled before the result update; the result update is committed separately.
