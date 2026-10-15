# Official portrait alternatives: Aileen Chang and Michael A. Bain
Observed: 2026-10-15. Research support for the humanity milestone; not an applied import or count increase.

## Aileen Chang
- Existing provider ID: 2648ca1f-a0da-4c4a-befc-6b46dc525e87.
- Named official source page opened: https://dermatology.ucsf.edu/about-us/our-team/aileen-chang-md
- Exact image URL extracted from that page's img element and fetched normally:
  https://dermatology.ucsf.edu/sites/dermatology.ucsf.edu/files/styles/max_fp_650x650/public/2024-09/Aileen%20Chang_Headshot.jpg.webp?h=6c0ecf46&itok=PupvRp60
- Page-stated alt: Aileen Chang, MD.
- Decoded asset: WebP, 650 × 650.
- Visual inspection: clear, full-face headshot outdoors; dark hair and blue clothing. Identity association comes from the named official page and its image markup, not face recognition alone.
- Retrieval: search discovery, official page text opened, ordinary HTML retrieval, exact asset downloaded and decoded with Pillow, actual image visually inspected.
- This is a different departmental asset from the earlier researcherprofiles PhotoHandler endpoint that returned No Image Found. Preserve that older failed observation; do not relabel its outcome.
- Source-supported narrative opportunity, if not already present: the departmental biography describes research on social and structural factors affecting skin conditions and interdisciplinary work improving wound care, lymphedema care and dermatology capacity in low-resource settings. Reconcile against existing accepted assessment rather than count an already accepted profile again. No patient-outcome improvement is independently established here.

## Michael A. Bain
- Existing provider ID: d7808e05-d356-4b6e-9adb-774854c56ba2.
- Named official institutional source page opened: https://www.hoag.org/physician/michael-a-bain-md/
- Page has heading Michael A. Bain, MD and an image link labeled Michael A. Bain, MD.
- Exact linked image: https://public.hoag.org/hoagmdimages/2401.jpg
- Decoded asset: JPEG, 400 × 477.
- Visual inspection: clear, full-face posed portrait; glasses, gray suit, blue shirt and multicolor tie. Identity association comes from the named Hoag page.
- Retrieval: search discovery, official source opened, its image link followed, exact asset downloaded normally and decoded with Pillow, actual image visually inspected.
- This is an institutional alternative, not evidence that the earlier drbain.com security-challenge endpoint now works. No challenge bypass or guessed image URL was used.
- This finding supplies media evidence only, not a new qualifying humanity narrative.

## Disposition and limits
Both are suitable candidates for modest, proportionately resized, locally served source-linked previews under the project's established preview policy. Record actual local rendition dimensions and provenance during import, preserve original framing and visible source links, and verify immediate decode with no initial external requests or cookies.

Image reuse terms were not established in this research. No ownership, blanket license, derivative/trading-card approval, credential verification, appointment capacity, review/indexing promotion or deployment is implied. Do not replace unrelated content or remove earlier source observations. This research does not itself add either ID to the accepted milestone cohort.

## Scaling lesson
Search-credit limits in the app are not a factual media gap. Named official departmental and institutional pages may expose ordinary image assets even when another endpoint fails. A successful image response alone is insufficient: require named source association, actual decode and visual inspection. Preserve failed endpoint evidence alongside a newly usable alternative.

## App-workspace source retrieval and visual inspection — October 15, 2026

Michael A. Bain: the named Hoag profile at https://www.hoag.org/physician/michael-a-bain-md/ was retrieved normally and identifies the linked image with alt text ‘Michael A. Bain, MD’. A normal direct GET of https://public.hoag.org/hoagmdimages/2401.jpg returned HTTP 200 image/jpeg, 28,676 bytes, 400 × 477, SHA-256 f646fc459cce5f9a0a0f2c405556e7b90a22404cfed75d8d8eef426b176fa87c. The response had no Set-Cookie header. The bytes were decoded and visually inspected: a clear full-face individual portrait. The exact modest image is ready for a source-linked local preview; this is media evidence only, not a qualifying humanity story or rights approval.

Aileen Chang: a new ordinary direct GET to the exact owner-researched UCSF asset returned HTTP 403 text/html, 4,543 bytes, rather than image bytes. Retain the previously inspected owner-supplied 650 × 650 WebP observation, but keep the current 150 × 150 local source-page screenshot and existing inventory entry in this workspace. No guessed URL, authentication, security bypass or error-page image was used.

The old drbain.com security-challenge observation and the Hoag image response are distinct. Nothing in this retrieval establishes that the earlier challenge now works. The portrait-only Bain packet is separate at docs/profile-ready/humanity-bain-media-preimport-2026-10-15.json; it does not alter the humanity count.
