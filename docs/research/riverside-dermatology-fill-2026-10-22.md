# Riverside dermatology directory fill — October 22, 2026

## Result

The Riverside-city dermatology pilot grew from one provider to five by adding
four source-mapped records: Natalie Yvonne Nasser, Selim Mahmut Inel, John Hyun
Sik Ahn, and Edward Jong Bae. The four additions have concise original
first-person-biography narratives, distinct professional or personal details,
named Kaiser Permanente Southern California profiles, and local source-linked
portrait previews. They are not independently credential-verified or human
reviewed. Their license lookups remain pending; all four records remain
noindex.

## Primary source findings

- Nasser’s profile describes growing up in Fall River in an Egyptian-American
  family, studying languages and linguistics in Washington, D.C., and finding
  Quebec a cultural and social eye-opener during dermatology residency in
  Montreal. She also writes about balancing Riverside practice with family
  life. The narrative does not imply patient outcomes.
- Inel’s profile recounts growing up between the United States and Turkey,
  studying and working as a physician in Turkey, completing social and military
  service, and returning to the U.S. for residency. It names Southern
  California as home and sailing, cycling, music and travel as interests.
- Ahn’s profile describes childhood near Atlanta, regular holiday visits with
  extended family in California, choosing Southern California, and volunteering
  in free medical clinics and mission trips. His stated practice approach
  emphasizes listening and developing plans together; no outcome is inferred.
- Bae’s biography connects seeing family members live with medical conditions
  with his motivation to help when people felt helpless. He describes why he
  chose Mohs surgery and his interest in getting to know patients; puzzles and
  strategy board games are among his outside-work interests. Historical training
  details were not imported as independent credential verification.

Each named Kaiser page lists the Riverside Medical Center, 10800 Magnolia
Avenue, Riverside, California 92505, and an appointment link. The site links
to location and plan information and lists a central appointment number,
1-833-574-2273. These are source-stated pathways only: open appointment
capacity, outside eligibility, fees, referral requirements, languages available
at a specific visit, and whether a clinician is accepting new patients were
not independently established.

The four exact linked files are:

| Clinician | Named biography | Portrait asset |
| --- | --- | --- |
| Nasser | https://healthy.kaiserpermanente.org/southern-california/physicians/natalie-nasser-9101758 | https://healthy.kaiserpermanente.org/static/provider-images/9101758.jpg |
| Inel | https://healthy.kaiserpermanente.org/southern-california/physicians/selim-inel-4157078 | https://healthy.kaiserpermanente.org/static/provider-images/4157078.jpg |
| Ahn | https://healthy.kaiserpermanente.org/southern-california/physicians/john-ahn-6455679 | https://healthy.kaiserpermanente.org/static/provider-images/6455679.jpg |
| Bae | https://healthy.kaiserpermanente.org/southern-california/physicians/edward-bae-9537518 | https://healthy.kaiserpermanente.org/static/provider-images/9537518.jpg |

All four image URLs returned HTTP 200 with JPEG bytes, each 210 × 199 pixels.
Exact-byte and local delivery hashes are in
`docs/profile-ready/riverside-four-provider-contribution-2026-10-22.json`.
The names/portrait association are supported by the named page alt text and
direct page links, then visually inspected. The full faces are small; no
upscaling or crop was applied. Local previews are modest source-linked
references. Reuse terms remain unknown; no ownership or derivative-image
approval is claimed. The four image responses did not set cookies. Patient
pages use local files and request no source host before activation.

## Checks and decisions

The directory API returned five identities. Desktop and touch-mobile affected
profile checks passed for all four: complete story and access sections, usable
citations, locally decoded portrait delivery, and zero initial third-party
requests/cookies. A real touch activation of each source link passed; neighboring
disclosures did not toggle. The directory and profile response paths were
confirmed noindex. Fixed-baseline preservation and all-record data/asset/
humanity validation passed. The contract suite initially caught a bad test
field reference (`canonicalPath` rather than API provider `slug`) and the
directory record-date/API projection issue from the previous batch is retained
with an explicit observation-date note. Corrected contract, HTTP, type and
production-build results are recorded in the applied receipt.

Directory scope remains Riverside city; this does not expand to all of
Riverside County or nearby Moreno Valley. The records are a small pilot, not
a ranked or exhaustive provider list. No deployment occurred.
