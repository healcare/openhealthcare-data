# San Francisco dermatology humanity candidates: Abuabara and Cho — October 17, 2026

## Scope and disposition

This is a bounded addition inside the existing UCSF/ZSFG San Francisco dermatology directory. At app main `caa7acc1e4b79d5fc2e120dce7ba4e015d386eee`, the checked qualifying intersection was 92/100, with 111 provider records, 103 independent local portrait deliveries, and 18 provider records in this directory. Neither candidate name, accepted ID, route, nor source-backed directory path was present. The project's URL helper and reserved-route validator recommend `katrinaabuabara` and `raymondcho`; both are free of current canonical-path, alias, and reserved-route collisions.

Two clean candidate packets are prepared separately:

- [Katrina Abuabara](../profile-ready/humanity-candidate-katrina-abuabara-2026-10-17.json)
- [Raymond Cho](../profile-ready/humanity-candidate-raymond-cho-2026-10-17.json)

They are not yet imported or counted at the time of this research note. Both named UCSF Health pages are currently accessible via ordinary HTTPS GET (HTTP 200) and identify a San Francisco Mount Zion dermatology location, phone, telehealth, and appointment/referral routes. Each page returned two `Set-Cookie` headers; cookie values were not retained. Both exact image GETs returned HTTP 200 JPEGs without `Set-Cookie`.

## Katrina Abuabara

- **Named source:** [Katrina Abuabara, MD, MA — Dermatology](https://www.ucsfhealth.org/providers/katrina-abuabara), UCSF Health, retrieved October 17, 2026.
- **Humanity evidence:** the current page's “Fun facts” line reads “Researcher, mountain lover and tropical fruit aficionado.” The prepared narrative uses the personal interests and does not infer that they shape clinical care or outcomes. The page also contains professional/research material; those generic descriptions were not treated as humanity evidence.
- **Access evidence:** the same page lists Dermatology Mount Zion, 1701 Divisadero Street, San Francisco, CA 94115, 415-353-7800, telehealth visits, and request-appointment/refer-a-patient routes. It links general insurance information but does not establish plan-specific participation, current capacity, new-patient eligibility, fees, referral necessity, or language/interpreter availability.
- **Portrait association:** the page labels the image “Portrait of Katrina Abuabara” and links `https://providers.ucsfhealth.org/sparkle-assets/images/abuabara-katrina-1558689216-b57a0f14ca5423dc24d6f66950e67bf9.jpg`.
- **Exact source bytes:** ordinary HTTPS GET, HTTP 200, `image/jpeg`, 640×640, 260,212 bytes, `Last-Modified: 2025-12-03T23:01:56Z`, SHA-256 `a24df3bd038096b4cb4258404ea03f491087a8ba5f598d31ff84f42bf351f4ec`; zero image-response `Set-Cookie` headers.
- **Visual review:** exact bytes decoded as a clear, single-person, full-face portrait, matching the named-page alt text. The local preview is 360×360 WebP, proportional and uncropped, 13,422 bytes, SHA-256 `4e22051843274cab3fa5be7b8c8bdb29e4c0c5e46c13992a3713a3e3f7cd8bf3`.

## Raymond Cho

- **Named source:** [Raymond Cho, MD, PhD — Dermatology](https://www.ucsfhealth.org/providers/raymond-cho), UCSF Health, retrieved October 17, 2026.
- **Humanity evidence:** the current page's “Fun facts” line reads “Itinerant snowboarder and cryptic-crossword enthusiast.” The prepared narrative reports only these specific interests. It does not turn credentials, research descriptions, or promotional care language into humanity claims.
- **Access evidence:** the same page lists Dermatology Mount Zion, 1701 Divisadero Street, San Francisco, CA 94115, 415-353-7800, telehealth visits, and request-appointment/refer-a-patient routes. It links general insurance information but does not establish plan-specific participation, current capacity, new-patient eligibility, fees, referral necessity, or language/interpreter availability.
- **Portrait association:** the page labels the image “Portrait of Raymond Cho” and links `https://providers.ucsfhealth.org/sparkle-assets/images/cho-raymond-1790999175-2fd796784aaec7d030dcc6231b54726f.jpg`.
- **Exact source bytes:** ordinary HTTPS GET, HTTP 200, `image/jpeg`, 640×640, 247,804 bytes, `Last-Modified: 2025-12-04T00:33:55Z`, SHA-256 `70ccbe90b7c67bbb4e2959021d02d2dba268a75c1cb7f6c9ca6dc6fe8aaac5e1`; zero image-response `Set-Cookie` headers.
- **Visual review:** exact bytes decoded as a clear, single-person, full-face portrait, matching the named-page alt text. The local preview is 360×360 WebP, proportional and uncropped, 10,396 bytes, SHA-256 `36c4a23e3b6a5d8cc490da245f4dea8ba2b86b1f560ec456ab647230c4b42763`.

## Excluded lead and limits

The same search surfaced Jennifer Fu. The current named UCSF Health page is `https://www.ucsfhealth.org/providers/jennifer-fu`; its current page extraction displays the generic `providers-placeholder.jpg`, not an individually associated portrait. A search-result snippet mentioned personal interests, but that snippet was not used as current claim evidence. No portrait candidate was guessed or approved, and Fu is not in this batch. Reopen only if a normally accessible, individually associated portrait source is established.

The UCSF Health pages' two cookie headers are source-site behavior observed on ordinary page GETs; values were not retained. App pages should serve the local preview without any third-party request/cookie before explicit activation of the outward source link. Reuse terms remain unknown. These previews do not establish image ownership, blanket permission, derivative-card approval, structured-data image clearance, license status, or independent clinical verification. The new profiles retain noindex, unclaimed, pending-human-review, and pending-license defaults.

## Applied result — October 17, 2026

Both prepared candidates were imported and passed the fixed-baseline, affected-profile, API, and patient-visible checks. Abuabara and Cho are the two net new qualifying IDs, advancing the checked intersection from 92 to 94 of 100; six remain. Their source-mapped personal-interest sections and access details appear in the provider API and on desktop/touch-mobile pages. The local WebP previews decode and load immediately, source links have accessible names, and the actual source tap opens the intended UCSF page without activating adjacent disclosures. The browser run observed zero third-party requests/cookies before activation.

The app result is `416225a534d6791d676029d95f346620728b8165` (tree `2c6faac16505dfa5b97bcb196781141230af117d`), synced exactly to app `origin/main`. The clean [applied receipt](../profile-ready/humanity-applied-abuabara-cho-92-to-94-2026-10-17.json) records exact sources, image dimensions/hashes, count deltas, checks, and limitations. No clinical/license verification, human review, image-rights/derivative approval, indexing promotion, physical mobile-device or screen-reader audit, large-scale performance test, or deployment is implied.
