# Jason Emer photo-enrichment investigation — 2026-10-14

## Scope and historical finding

This is a documented enrichment gap, not a recovered erased photo. Fourteen historical `server/storage.ts` versions containing Jason Emer (including the former `jasonecker` path) all had `imageUrl: null`, beginning with `59269a9`. The file-backed record introduced at `9578313` also had null image/source fields; the later `029acea` narrative import did not delete an image. October 1's retained candidate inventory had null mapped/candidate URLs, and October 14's broader recovery pass correctly retained an explained gap. Available repository history does not establish any previously delivered portrait.

The fixed pre-change preservation baseline for this enrichment is app revision `6dd760c58ec60e7abb2e7f85cb42e86842105549`. Its merged WebKit follow-up is unrelated and preserved.

## Named source and visual inspection

The homepage's actual “More About Dr. Emer” link resolves to `https://www.jasonemermd.com/about-us/dr-emer`. Ordinary Chromium navigation returned HTTP 200. Both the source-page screenshot and live DOM were inspected, not only search snippets.

The biography hero uses `https://www.jasonemermd.com/wp-content/uploads/2020/06/1570576313-dr-emer.jpg`: a wide banner with the named clinician on the right. It was not selected because a standalone ordinary portrait offers clearer modest proportional framing.

The biography's portrait beside the text naming Jason Emer uses the exact computed CSS background `https://www.jasonemermd.com/wp-content/uploads/2020/06/1570592176-dr-emer.jpg`. Visual inspection found one full-face, white-coat portrait, a visible “Jason J. Emer, M.D.” name on the coat, and consistency with the pictured clinician in the named biography header. This is source-associated portrait review, not independent medical/licensing identity verification.

Video thumbnails, brand logos, patient/treatment imagery, publication graphics and source promotional statements were not imported. No biography, credential, service, location, phone or availability claims were changed.

## Ordinary source delivery and local preparation

A separate command-line request for the exact image returned HTTP 429 and did not decode. This is retained as a retrieval-specific failure, not evidence that the image was erased or universally unavailable.

An ordinary unmodified Chromium biography load requested that exact CSS image and received HTTP 200, `image/jpeg`, 32,978 bytes and no image-response `Set-Cookie` header. The successful response body decoded to 920 × 830 and was visually inspected. No request interception, synthetic response, changed security flags, authentication workaround, guessed larger filename or source restriction bypass was used. Source-page cookies, where observed, are separate from the local app's initial privacy requirement; absence of a header on this image is not an external-site cookie guarantee.

The byte-identical local file has SHA-256 `dcc2aca4b4b2d5c02e592f134dc3f980205fca3b19f6b7fa1aa962be41bb34af`. No cropping, retouching or derivative-card artwork was created. Existing proportional local-preview components provide the modest framing. Rights-holder permission and explicit reuse terms were not established and remain unknown.

## Deliberate approval and preservation

Added one independently reviewed portrait inventory entry with date, scoped reason, exact source page/asset, dimensions and digest. No baseline regeneration or removal of earlier approved portraits. Original root clinical source IDs/citations and all non-media provider fields remain unchanged; the new biography citation is nested in portrait-only metadata. Structured-data imagery remains withheld. Appended a dated directory photo observation without deleting historical findings.

Clean applied results remain in `docs/profile-ready/jason-emer-photo-enrichment-2026-10-14.md`, separate from this investigation. Required affected checks and observed results are recorded below once executed; unchanged broader-suite evidence is not represented as a new run.

## Executed validation

- TypeScript, entity validation, the 70-entry independent delivery/hash/source guard and import/content preservation against the fixed pre-change revision passed.
- Explicit equality confirmed every non-media provider field and all 69 earlier approved portrait records unchanged.
- Contract suite: 67 passed, zero failures/skips. HTTP/API suite: 107 passed, zero failures/skips.
- New Jason-specific desktop and touch-enabled mobile tests passed for both directory and editorial-profile image delivery, exact 920 × 830 decoding, full proportional framing, alt text, outward source/accessible name, no activation gate, zero initial external requests/cookies and no horizontal overflow. The affected independent API/mobile-directory check passed as well: three cases in that run.
- Existing cross-directory desktop/mobile saved-portrait check passed separately. Its explicit counts changed by precisely one new photo: 66 deliveries and 23 fallbacks in the photo-card grid, with the four existing mental-health previews outside that grid unchanged.
- Initial new-test failures were test assumptions: visible link text was mistaken for the explicit accessible name, and the editorial page was mistakenly targeted with therapist-gallery IDs. Assertions now target the actual editorial renderer and still require visible decoded photos, meaningful names and correct source URLs. No application assertion or privacy behavior was relaxed.
- One CLI selection matched no tests; the correct existing cross-directory test was then selected and passed. This is not counted as test coverage.
- No shared rendering behavior was changed, so the prior full 132-case Chromium run and merged 69-preview WebKit evidence are retained only for their unchanged scope; neither is claimed as a newly rerun full suite or as WebKit coverage of Jason's new image. The two new tests will participate in future full discovery.
- Mobile visual screenshot confirmed the full head/face and proportional portrait in both small header and primary frame. Ordinary source delivery evidence is real; no simulated/intercepted source image is offered as delivery proof.

Production build and whitespace check passed. No deployment performed.
