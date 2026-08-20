# Replit handoff — Norfolk therapists beta

## What & why

Import the source-linked Norfolk therapist beta feed into OpenHealthcare's permanent
entity system and use it to introduce a cleaner, higher-density provider profile. The
new profile should preserve OpenHealthcare's warmth while replacing the current linear
post-it stack with an editorial hero, an optional thumbnail rail, and compact above-the-
fold summary sections.

Research feed:

`https://raw.githubusercontent.com/healcare/openhealthcare-data/main/data/directories/us/va/norfolk/therapists.json`

Provenance rules:

`https://raw.githubusercontent.com/healcare/openhealthcare-data/main/docs/DATA-PROVENANCE.md`

## Done looks like

- A permanent UUID-backed directory is available at `/norfolk-therapists` with the
  feed's title, geography, description, selection method, sources, and prominent beta /
  pending-human-review disclosure.
- Ten permanent UUID-backed provider entities are created under collision-safe paths
  and associated with the Norfolk directory.
- All imported entities are `published`, `indexable: false`, and
  `claimStatus: "unclaimed"`.
- All feed-derived citations are `verificationStatus: "source-stated"`; every license
  number is visibly labeled source-stated with Virginia primary-source lookup pending.
- LPCs, LCSWs, and clinical psychologists are rendered as distinct clinician roles.
  A doctoral degree may be shown as a credential, but no LPC is presented as a physician.
- Every first-party and secondary profile URL, retrieval date, story, quick-summary
  field, location, portrait, gallery item, image attribution, and dated discovery signal
  is retained.
- Stories are rendered faithfully without outcome promises, rankings, review summaries,
  or new claims.
- Social signals are never used as a score or sort key. If displayed, they appear below
  credentials in a section labeled “Public discovery signals,” include the observation
  date, link to the source, and state that they do not measure care quality.
- Dynamic availability, fees, and insurance claims are not promoted in the durable
  profile summary. A future UI may show them only with an observation date and source.
- Nothing is deployed and the directory/providers remain out of sitemap and search
  indexing.

## Provider profile design

Use the attached editorial direction as inspiration, not as a literal copy:

- On desktop, use a split hero. The left side contains one large source image plus a
  vertical or bottom thumbnail rail when `mediaGallery` has more than one usable item.
  The right side contains clinician role/credentials, name, story lead, and a compact
  two-column grid of labeled summary boxes.
- Summary boxes above the fold should be driven by `quickSummary` and labeled:
  “Helps with,” “Approach,” “Works with,” and “Care format.” Prefer concise chips or
  short lists, not paragraphs.
- Beneath the image, show clickable source pills such as “Official profile,” “Public
  directory,” and “Virginia license lookup.” They open in a new tab with accessible
  external-link labels.
- All gallery images remain remote references. Each thumbnail selects the large image;
  clicking the large image opens that item's `clickThroughUrl` in a new tab. Preserve
  alt text, keyboard focus, visible selected state, and a neutral image fallback.
- Do not fabricate or duplicate thumbnails. If only one usable image exists, render a
  strong single-image hero and omit the rail.
- On mobile, stack the image above identity and make the thumbnail rail horizontally
  scrollable. Summary boxes become a compact one-column or two-column grid without
  requiring sideways page scrolling.
- Continue the existing warm cream / ink / pink / gold OpenHealthcare palette, but use
  calmer surfaces, consistent borders, and less random rotation than the current provider
  page. The information hierarchy should read clearly before decorative personality.
- Retain the existing below-fold sections for contact/location, provenance, share tools,
  QR, and structured data when they still apply.

## Contract changes

Extend the native entity contract narrowly and compatibly for:

- clinician roles: `licensed-professional-counselor`,
  `licensed-clinical-social-worker`, and `clinical-psychologist`;
- `quickSummary.helpsWith`, `.approach`, `.worksWith`, and `.careModes`;
- `licenseEvidence` with jurisdiction, type, number, source citation, and
  `primarySourceCheck`;
- `mediaGallery[]` with kind, remote URL, click-through URL, alt text, source citation,
  and usage;
- `discoverySignals[]` with type, value, platform, observation date, and source citation;
- optional `locationNote` for source conflicts or care-format caveats.

Keep all existing entities compatible. Do not force empty arrays into older records.

## Directory and card design

- Add a Norfolk beta card to the home/directory discovery surface without making the
  route indexable.
- Directory cards show the source portrait, correct clinician role, up to three focus
  chips, care format, and Norfolk location/practice. The portrait links to the provider's
  first-party profile where available; otherwise it links to the image's source profile.
- Make the selection disclosure easy to find: this is a curated beta cohort, not a
  “best therapists” ranking or a complete Norfolk roster.
- Replace any globally overbroad claim such as “Every listing verified” with accurate
  status-aware language, for example “Every published claim links to its source;
  verification status is shown on each profile.” Preserve stronger labels only on records
  that have actually completed the corresponding verification.

## Tests and verification

Add focused coverage for:

- one directory and exactly ten new provider entities;
- unique UUIDs, collision-safe canonical paths, and correct directory association;
- non-indexability, sitemap exclusion, unclaimed state, and source-stated status;
- all 25 source records and retrieval dates;
- all clinician-role distinctions and pending primary-source license state;
- quick-summary rendering, source links, and discovery-signal disclosure;
- single-image and multi-image gallery behavior, keyboard access, alt text, fallbacks,
  and new-tab click-throughs;
- responsive desktop/mobile provider layouts;
- no regression to La Jolla provider cards/pages or existing canonical routes.

Run:

```text
npm run validate-data
npm run test:http
npm run test:contract
```

Also run the repository's focused browser/UI tests for provider and directory pages.
Report created UUIDs, canonical paths, changed files, test results, remote-image failures,
and any schema or mapping conflicts. Do not deploy.

## Out of scope

- New provider research or adding clinicians not present in the feed
- Claiming that social signals prove quality or fit
- Claiming independent Virginia license verification before an actual DHP lookup result
- Publishing availability, fee, or insurance claims as undated facts
- Copying, transforming, or permanently caching third-party images
- Making the Norfolk beta indexable or deploying it to production
