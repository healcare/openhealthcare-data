# Existing-directory enrichment batch 2 — research notes

Date: 2026-10-13. This records the evidence handoff and delivery decisions separately from the concise profile-ready packet.

## Story import reconciliation

Komiya and Johnson already had sourced narrative copy in their authoring `highlight` and description fields, but not in the provider `story` field used by the profile audit. The runtime audit therefore incorrectly reported no story candidate. This was an import-field mismatch, not a human-review or identity override. The existing copy was retained, source IDs were attached to the highlights, and the matching copy was mapped into `story`; existing source retrieval dates remain 2026-08-18. No new biography claims or elapsed-time calculations were added.

Komiya remains a pediatric nurse practitioner (PNP), not a physician. Neither profile's human-review, claim, or indexing state changed.

## Portrait inspection and local delivery

All four previews are small crops from ordinary visual captures of the named official biography pages; original remote image files were not downloaded, proxied, or rehosted. Photo dates are unstated, and these are source associations rather than independent identity or rights determinations.

| Profile | Official page used | Local crop dimensions | Decision |
|---|---|---:|---|
| David A. Heilman | `https://www.davidheilman.com/about/` | 150×150 px | Local screenshot crop; keep the source link. The biography names him. |
| Jacqueline Lo | `https://cupertinofamilydental.com/doctor/dr-jacqueline-lo/` | 306×536 px | Cropped the static portrait adjacent to her named biography, not the separate video still. |
| Asako Komiya | `https://www.cpcmg.net/cpcmg_doctor/asako-komiya-pnp/` | 320×372 px | Local screenshot crop of the named PNP biography portrait. |
| Christine Johnson | `https://www.cpcmg.net/cpcmg_doctor/christine-l-johnson-md-faap/` | 320×372 px | Local screenshot crop of the named biography portrait. |

The CPCMG pages showed a cookie-consent panel. Prior direct CPCMG image-host checks found third-party cookies. The screenshot capture tool does not expose its browser cookie store or response headers, so the capture is not described as cookie-free. The application serves only the local crops and its desktop/mobile browser checks observed no external requests or CPCMG cookies before source-link activation. CPCMG preview images remain omitted from JSON-LD.

Patel's ordinary named practice biography showed no clinician portrait; the visible quote and patient imagery were not used. The retained candidate remains blocked (`ERR_BLOCKED_BY_CLIENT`) and identity-unconfirmed. The fallback remains in place; no control was bypassed.

## Preserved unresolved items

- Heilman: the waitlist/capacity wording versus the separate “accepting new clients” statement remains unresolved.
- Lo: the availability conflict remains visible; insurance wording remains practice-level and does not establish a plan/member/service match.
- Patel: phone conflict, held credential/language/travel claims, and blocked image candidate remain unresolved.
- Komiya/Johnson: dated, source-stated records remain non-indexable and pending human review; portrait inspection did not change that status.
- Chloe Carmichael: no routine rewrite. Pending review/unknown access is classified as review-only, not content work.
- Norfolk license outcomes, identity conflicts, lookup failures and roster failure were not changed.
- Manhattan header signals were not changed; stored counts alone were not treated as rendered facts or overrides.
- No IDs, canonical paths, aliases, directory membership, newer evidence, Obeng hold, review flags or indexing flags were changed.

## Queue semantics and verification

The generated audit now separates actionable content/media, research exceptions and review-only records. A cited `highlight.text` is recognized as an existing story candidate. Licensing/identity concerns remain a separate signal from practical access uncertainty; portrait review resolves neither.

Checks completed: preservation guard, entity-data validation, URL contract tests, all 107 HTTP tests, TypeScript check, and all five La Jolla browser tests. The browser coverage included desktop/mobile local-image delivery, official source links, and no external requests or CPCMG cookies before interaction. No deployment was performed.

## La Jolla pediatric portrait regression — October 13, 2026

**Cause:** commit 2e40424 cleared imageUrl for every member of the ten-person La Jolla roster, retaining imageClickThroughUrl and remote-reference-only usage. The component consequently rendered heart fallbacks; a named-page link alone is not a delivered image. Commit 1041fd8 is the last portrait-bearing data version. The public source bundle still maps all ten biographies to exact named portrait assets. No license or permission reason is documented. The locally served previews below use the bundle assets, retain outward biography links, omit portrait JSON-LD, and do not claim ownership. Reuse terms were not stated.

| Provider | Original dimensions | Local preview |
|---|---:|---:|
| Kendall Roberts | 4480×6720 | 280×420 |
| Genevieve Parsons | 1829×2560 | 300×420 |
| Sheetal Gandhi | 427×640 | 280×420 |
| Tory Twito | 426×640 | 280×420 |
| Christine Johnson | 800×1152 | 292×420 |
| Lauren Fulkerson | 814×1280 | 267×420 |
| Maria Capetanakis | 688×960 | 301×420 |
| Vivian Tung | 1621×1459 | 320×288 |
| Gretchen Gainor | 144×192 | 144×192 |
| Asako Komiya, PNP | 1786×2560 | 293×420 |

All ten named CPCMG image responses were retrieved without cookies and the contact sheet was inspected. Previews were resized proportionally without cropping. The earlier Johnson/Komiya screenshot crops are superseded by the original bundle assets.

**Applied:** local source-linked preview for each of ten; no unresolved portrait holds. **Preserved:** identity, canonical path, clinical role, sourced story/evidence, review/indexing holds. App API returns the local paths; browser checks verified image loads and source links at desktop/mobile with no external requests/cookies before interaction. Production API still returns null for these photos. Deployment metadata reports a successful build but no revision SHA; no deployment occurred.

**Regression control:** the existing-profile import validator now rejects silent removal/downgrade of an active local preview. A dated, explained media status of held, failed, or unavailable is the explicit exception.
