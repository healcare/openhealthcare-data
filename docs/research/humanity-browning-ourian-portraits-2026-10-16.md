# Browning and Ourian portrait follow-up — October 16, 2026

Research and media review only until the app import is checked. The current accepted intersection before this batch is 87 of 100 unique provider IDs. The prepared contribution expects two existing-profile enrichments, no new provider records, two new local portrait deliveries, and a 87→89 qualifying intersection. No license, clinical, rights, human-review, or indexing decision is included.

## Damaris Browning — individual portrait gap resolved

The existing Cupertino profile already has a source-mapped narrative from her named practice biography, retrieved October 15. It describes her interest in science, biology study at UCLA, three years of hematology/oncology research, her decision to enter dentistry, travel, and three Spartan races with her husband. The narrative and its earlier provenance are retained unchanged; the race timing remains undated.

A new exact named association was found on the ASIRD directory page: https://directory.asird.org/doctors/damaris-browning. The page heading identifies “Damaris Browning, DDS,” links to Valley Dental, and lists its Cupertino practice. Its first image links to the exact asset:

- Asset URL: `https://api.asird.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ3crIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3a0d6b219dc0378ecf77949c897b49c2f40f050f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDdkFKcEFyd0MiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--fa8788604ab27a6fbfdb6333d83079803bc4779f/Damaris_Browning-1a.jpg`
- Retrieved by an ordinary HTTP request on October 16, 2026; response 200, `image/jpeg`, no `Set-Cookie`.
- Decoded dimensions: 477×700; 51,290 bytes; SHA-256 `550b5e5c6860fe9fb875efd110d30c755b61e2108d4a53afa31df3d93191bd64`.
- Visual inspection: one clearly identifiable, full-face person in a proportional portrait, wearing a coat bearing the ASIRD mark. The ASIRD page names Browning and the asset filename includes her name. This is an individual portrait, unlike the previously inspected couple image. No crop, enlargement, or other alteration was made.

The source page says “ASIRD CANDIDATE”; that designation is not being imported as a credential or certification. The local preview links to the named ASIRD page. Reuse terms remain unknown; no ownership, blanket license, derivative-card approval, or clinical approval is claimed.

## Simon Ourian — new first-person art source and individual portrait

The existing Beverly Hills profile already includes Epione's source-stated sculpture-interest narrative. A new named first-person source was found at Simon Ourian's art site:

- Home page: https://simonourian.com/ — retrieved October 16, 2026. The page displays the first-person statement: “I am using what I learned in anatomy, medicine, and mathematics of beauty to make my ART”.
- About page: https://simonourian.com/about — retrieved October 16, 2026. Titled “About Simon Ourian™, MD,” it describes an interest in form and shape and an artistic focus on symmetry, balance, and proportion.

Together these pages support an additive source-stated creative interest and work-approach narrative. They do not verify clinical outcomes, specialty or board status, license, or credentials. The quote is attributed to the art-site homepage; the profile text does not present it as an independently checked clinical claim.

The About page contains `https://simonourian.com/wp-content/uploads/doctor.jpg` with generic alt text “doctor.” The page names Simon Ourian, MD, and the exact inspected image visibly bears the “Simon Ourian, M.D.” signature:

- Retrieved by an ordinary HTTP request on October 16, 2026; response 200; the response included a `Set-Cookie` header. No cookie value is retained here.
- Decoded dimensions: 357×517 JPEG; 33,986 bytes; SHA-256 `e1a74b874612b6af57fd72de631877c85a3f90bab6935fbff6f264128ef189b2`.
- Visual inspection: clear full face and proportional portrait framing, one person, no crop or enlargement.

The planned app uses the unchanged bytes as a local source-linked preview. This avoids a third-party request before a patient chooses to open the cited source page. A source-host cookie observed during research is not evidence that the app or its local preview sets or sends a cookie. Reuse terms remain unknown; no ownership, blanket license, derivative-card approval, or clinical approval is claimed.

## Candidate scan and deferrals

The 2026-10-16 exact-name text searches prioritized existing La Jolla records with inspected local portraits:

- **Maria Capetanakis:** no new exact named humanity narrative was found. The CPCMG and Scripps pages and search results remain credentials/access material, not a personal or career story. `mariacapetanakis.dr-leonardo.com` is a generated profile template with generic copy, not a reliable provider-authored narrative. A newly surfaced `drcapetanakis.com/media-coverage` page names an Encinitas OB/GYN and discusses gentle cesareans; it does not establish the La Jolla pediatrician's identity and is excluded. No content or count change.
- **Gretchen Gainor:** the new results were professional directories and credential/access profiles. No distinctive named personal or career narrative was found. Scripps/CPCMG remain the prior source observations; no repeat import or count change.
- **Shannon Schaubach:** the new search surfaced a Headway profile with general method descriptions and differing experience-duration statements, plus an unverified Facebook result that does not establish identity. Neither supports a new distinctive narrative. Preserve the existing Norfolk identity/license concerns and do not import either result.
- **Joseph Goodman:** the practice pages remain promotional and do not resolve the individual-portrait gap or training/chronology conflicts. No new portrait was visually approved; the previously rejected studio/group image remains rejected.

No outside assistant or paid image search was used. These are bounded findings, not claims that no other source exists. Reopen a deferred item only if exact named evidence materially changes.

## Prepared app changes and limits

The clean contribution packet is [`humanity-validated-contribution-browning-ourian-87-to-89-2026-10-16.json`](../profile-ready/humanity-validated-contribution-browning-ourian-87-to-89-2026-10-16.json), prepared against app main `f4c6ef5a6c7ba7ae2fb3f888121d91dbb59ac7fb` and public-data main `104401b06c22b420810c495e8dda3b112267e021`.

For Browning, the existing cited narrative remains intact and becomes eligible only after the inspected individual portrait is locally delivered. For Ourian, the first-person art account is additive to the existing Epione narrative and the profile is already scoped in `sourceStatedNarrativeOnlyPaths`. Both proposed portraits remain ordinary local previews with unresolved media-reuse terms and structured-data image output withheld. Existing access information and unknowns, clinical facts, routes, aliases, directory membership, claim/review/index states, holds, and prior source dates are protected.
