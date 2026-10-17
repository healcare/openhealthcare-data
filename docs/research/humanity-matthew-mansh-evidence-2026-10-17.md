# Matthew Mansh — source and media review

**Prepared:** 2026-10-17
**State:** Candidate prepared for the 96→97 pass; not yet imported or counted.
**Directory scope:** Existing San Francisco dermatology directory.
**Fixed baseline:** `0e71f02b718ddcd1003dd504aa44c1bb103c6894`
**App pre-import main:** `d67118ebb9cefa25231416ab810bc3ebb392bf6d`
**Public-data pre-import main:** `3fefe31bc7692c58d869d49471be04b8126763fb`

## Why this is now actionable

The prior October 17 review correctly deferred Mansh because the page's role/service descriptions alone did not supply a distinct humanity narrative and the portrait bytes had not been inspected. New, materially different evidence changes those two gaps:

1. A named first-person interview published by *Dermatology Times* on June 20, 2023 supplies a dated work-approach account from Mansh's then-current University of Minnesota role.
2. The exact portrait linked by his named UCSF Health page returned image bytes normally, decoded and visually inspected as a clear individual portrait.
3. UCSF Health's current named page and the Mission Bay location/referral pages establish a San Francisco clinic and practical appointment/referral routes.

The project URL helper recommends `matthewmansh`. No current provider, directory, reserved-path, or accepted-ID collision was found. Proposed permanent ID is `77436d02-73c6-4e02-b306-6ed9ae121744`; it is not present in the current records.

## Narrative evidence and limits

**First-person source:** Emma Andrus, “Increasing Awareness of Gender-Diverse Patient Concerns in Dermatology,” *Dermatology Times*, June 20, 2023:
https://www.dermatologytimes.com/view/increasing-awareness-of-gender-diverse-patient-concerns-in-dermatology

The article identifies Mansh at that time as an assistant professor of dermatology at the University of Minnesota and director of its Dermatology Gender Care Clinic. In his answers, he describes welcoming interactions as beginning at registration, says staff beyond physicians need preparation because patients also interact with nurses, medical assistants, and office staff, discusses some patients' negative prior experiences and the need to rebuild trust, and says this work is rewarding. The proposed patient copy is a concise paraphrase of those claims.

The dated context stays explicit: this is his 2023 Minnesota-era account, not a statement of current UCSF procedures, policy, insurance, clinical effect, or guaranteed outcomes. The interview is not used to infer Mansh's own sexual orientation or gender identity. The current UCSF Health biography separately says he was an assistant professor at the University of Minnesota before joining the UCSF faculty; that supports the employment continuity without assigning an unverified date.

**Brief interest:** The named UCSF Health page's raw HTML `Fun facts` field reads “LGBTQ+ health expert, epidemiologist and avid hiker.” The ordinary web-text extraction omitted this field; the raw provider page response and embedded profile content were checked. Only “avid hiker” is used as a short attributed personal interest. No personality, clinical manner, or care outcome is inferred.

## Patient access and directory fit

The named UCSF Health profile lists Dermatology Berkeley, 3100 San Pablo Avenue, Berkeley, CA 94702, phone 510-985-5200, plus another location; its location section identifies Dermatology Mission Bay, 520 Illinois St., Third Floor, San Francisco, CA 94158, phone 415-353-7800. It lists telehealth visits and appointment/referral routes.

The current UCSF Mission Bay location page names Matthew Mansh among providers at that location, gives Monday-Friday hours of 8 a.m.-5 p.m. (weekends closed), and links request-appointment and refer-a-patient routes:
https://www.ucsfhealth.org/locations/dermatology-mission-bay

Its referral page provides online, fax, and MD Link options and says a patient may schedule before referral processing is complete:
https://www.ucsfhealth.org/locations/dermatology-mission-bay/refer

This establishes a named San Francisco patient-clinic listing and usable appointment/referral routes for directory fit. It does not establish current openings or provider capacity, new-patient eligibility, plan-specific insurance participation, fees, whether a referral is required for a particular patient or service, or language/interpreter availability. The Berkeley location is preserved as an additional source-listed location; its hours were not researched in this pass.

## Exact portrait and delivery record

- **Named source page:** https://www.ucsfhealth.org/providers/matthew-mansh
- **Exact linked asset:** https://providers.ucsfhealth.org/sparkle-assets/images/mansh-matthew-1760879654-f322fcb0da1ad81776fb7d53a367e067.jpg
- **Retrieval:** ordinary direct HTTPS GET; HTTP 200, `image/jpeg`, 267,699 bytes, `Last-Modified: Thu, 04 Dec 2025 01:07:56 GMT`; no `Set-Cookie`.
- **Exact source SHA-256:** `9e731ccd1a7b015b95bf07dd4263d663cda04641ca78a5762be6dd7a6ded4805`
- **Decoded frame:** 640×640 JPEG, orientation 1. Sharp and ImageMagick `identify` independently decode the frame at these dimensions. A generic file/EXIF summary reports embedded dimensions of 2880×1568; those metadata values do not match the decoded frame, so the decoder dimensions are authoritative for this record.
- **Visual review:** exact bytes show one person, clear full face and head-and-shoulders framing. The named UCSF page links the exact file and labels it “Portrait of Matthew Mansh.”
- **Prepared local delivery:** 360×360 WebP, proportional resize with no crop/enlargement, 13,672 bytes, SHA-256 `57fae9e041b8c70cf642aae78dd68a043612ce44746716096695eaf239f29fb5`; target `client/public/images/providers/matthew-mansh-source-preview.webp`.
- **Reuse terms:** unknown. The preview is source-linked local delivery only, not ownership, blanket license, derivative-card approval, or structured-data image clearance.

The UCSF provider page's ordinary direct GET returned two `Set-Cookie` headers; values were not retained. The interview page and exact image GET returned zero `Set-Cookie` headers. These are observations about those requests only. The app must make no third-party request or set source-site cookies before deliberate source-link activation.

## Proposed import controls

Add one new provider record only at `matthewmansh` under `san-francisco-dermatologists`. Keep `status` published but `indexable: false`, `claimStatus: unclaimed`, source-stated claims, pending human review, and pending license lookup. Do not promote clinical, board, or license claims. Keep all access unknowns visible. Do not add any derivative or structured-data image use.

The clean source-mapped packet is [`humanity-candidate-matthew-mansh-2026-10-17.json`](../profile-ready/humanity-candidate-matthew-mansh-2026-10-17.json). At the time this preparation note was written, it was not yet imported; the application result is recorded separately below.

## Application result — October 17, 2026

The candidate was applied as one new provider in the existing San Francisco dermatology directory and the checked unique-ID intersection advanced from 96 to 97/100. App content commit `c8002511203ae9abfcabfc44ff171d9000db9498` contains the record, immediate local portrait preview, narrative assessment and manually maintained portrait inventory entry. The app experiment report contains the full check and limitation record; the clean [applied-result receipt](../profile-ready/humanity-applied-matthew-mansh-96-to-97-2026-10-17.json) captures actual count deltas, app revisions and source/local media provenance.

The overview summary was editorially shortened to fit the existing profile-card line limit; the full attributed interview narrative and all mapped claims remain present on the profile page and API. The first rendered card check caught a 500 response, which was fixed by shortening only that summary and adding required real-route checks for both card images. The profile remains source-stated, unclaimed, non-indexable, pending human review and pending license lookup. No clinical/license verification, media-rights determination, derivative approval, deployment or review/indexing promotion is implied.
