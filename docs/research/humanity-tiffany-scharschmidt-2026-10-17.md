# Tiffany C. Scharschmidt — bounded source and media review

**Research date:** 2026-10-17  
**Purpose:** Assess one new candidate for the existing UCSF/ZSFG-affiliated San Francisco dermatology directory.  
**Starting accepted cohort:** 89 unique provider IDs, checked against app main `2d520db35feaa8a8fb750fbec87db30c45ad87b0`; fixed baseline remains `0e71f02b718ddcd1003dd504aa44c1bb103c6894`.  
**Disposition at research handoff:** Source-prepared for import, not yet accepted. The clean claim-mapped packet is [`humanity-candidate-tiffany-scharschmidt-2026-10-17.json`](../profile-ready/humanity-candidate-tiffany-scharschmidt-2026-10-17.json).

## Identity and directory fit

The existing San Francisco dermatology directory is explicitly a sample of UCSF/ZSFG-affiliated dermatologists whose principal practice location is in San Francisco. No Tiffany C. Scharschmidt record or matching identity was present in the 108-provider roster. Her named UCSF Health profile lists Dermatology Mount Zion at 1701 Divisadero Street, San Francisco, and her named laboratory profile identifies her as a UCSF Department of Dermatology physician-scientist. This fits the existing institutional and geographic scope without broadening it.

The app's path suggestion utility returned `tiffanyscharschmidt`; it is unused among current paths, aliases and reserved paths. The middle-initial alternative `tiffanycscharschmidt` is also supported by the named profile but is not needed for collision avoidance. The clean lowercase name-based route is preferred.

## Humanity evidence assessment

Two current, named UCSF sources support an individualized work approach rather than a credential list:

- UCSF Health's [named clinician profile](https://www.ucsfhealth.org/providers/tiffany-scharschmidt) says she cares for adults with dermatological conditions, helps oversee multidisciplinary care for complex skin disease, and describes her research focus on skin bacteria and immune communication.
- Her [named laboratory profile](https://scharschmidtlab.ucsf.edu/people/tiffany-scharschmidt-md) is written in the first person. She describes herself as a dermatologist, microbiologist and immunologist; says she devotes 80% of her time to research and the remainder to care for patients with severe inflammatory skin disease; and describes lab work on bacteria/developing-immune-system interactions using human skin, blood and microbiome samples plus murine models.

The proposed patient-facing narrative connects that distinctive research/clinic balance and the stated methodological focus. It does not turn laboratory models into patient treatment claims, does not infer personal motivation, and makes no outcome or clinical-quality claim. The lab profile describes her as Professor and Vice Chair of Research, while other UCSF presentation has used different academic-title wording. Academic titles are omitted rather than reconciled here; this is not evidence of an identity conflict and does not affect the narrow narrative. `MD` is shown only as source-stated in the named UCSF Health profile. No credential, board, license or clinical fact has been independently verified.

## Patient access evidence

The UCSF Health page provides a request-appointment link and a refer-a-patient link for Dermatology Mount Zion, along with 415-353-7800, the San Francisco address, and a telehealth indicator. Those are source-stated contact routes only. They do not establish an appointment slot, new-patient capacity, referral necessity, a specific insurer/product, fees or language availability. The page links to UCSF's insurance information but does not confirm coverage for this clinician or any plan.

## Exact portrait review

The exact UCSF Health portrait asset is linked from and labelled on Tiffany's named clinician page. A normal direct HTTPS GET returned HTTP 200 and `image/jpeg`, 243,910 bytes, with a `Last-Modified` response of 2025-12-03 23:19:39 UTC; no `Set-Cookie` header was observed. The decoded JPEG is 640×640, SHA-256 `a1f1b288394f88ad1b95191bba35badc1b2c2799e81464422ba26a8fe958171f`. Visual inspection of those bytes showed one person, a full visible face and a head-and-shoulders frame. This confirms the named source association and portrait suitability for an ordinary profile preview; it does not independently verify clinical identity or licensing.

The prepared local derivative is a proportional 360×360 WebP, with no crop, at 10,490 bytes and SHA-256 `c97e95a3e78425fd9baf38cf9f386efc0566f920057afc0407c95cd6348f4583`. The source's reuse terms are unknown. No ownership, blanket license, derivative-card permission, structured-data image approval or clinical verification is claimed. The image is intended only as a modest local source-linked preview; structured-data use remains withheld. The source URL should open only after explicit user activation, not during initial page load.

## Pre-import evidence boundary and acceptance conditions

The packet preserves the directory's non-indexable pilot state. The candidate was to remain unclaimed, pending human review and pending independent license lookup. Acceptance required import, usable source citations in the API and readable page, local image decode on desktop and touch-mobile, and no third-party request or cookie during initial rendering. No screen-reader audit, real-device Safari test, independent clinical/license verification, reuse-rights determination or load/performance test was claimed.

## Applied outcome — October 17, 2026

Scharschmidt was imported as one new provider record and qualified as one net new ID. The app result is synced at `d6f0b5beb69c58ef8ee7920349ce3189a3478913`, based on app main `2d520db35feaa8a8fb750fbec87db30c45ad87b0`; the clean candidate and research were reconciled at public-data main `a97e0df0d6f093ca467069b506a4ee1bf089160c`. The current checked intersection is 90/100, with 109 provider records and 101 independent local portrait deliveries. The separate [applied result receipt](../profile-ready/humanity-applied-scharschmidt-89-to-90-2026-10-17.json) records full provenance, controls, actual test scope, and limitations.

Fresh validation passed: all-record/fixed-baseline and asset checks, affected-provider preservation, TypeScript/build, contract 83/83, HTTP/API 110/110, San Francisco pilot 103/103, and affected desktop/touch-mobile/tap browser cases 3/3. The profile remains non-indexable, unclaimed, pending human review and pending license lookup. No independent clinical or license verification, rights determination, real-device Safari, screen-reader audit, full unrelated browser-suite pass, or thousands-profile performance test is claimed. No deployment occurred.
