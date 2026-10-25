# Healing Images
The growing OpenHealthcare.org campaign art collection. Updated October 24, 2026.

## Canonical import source
Replit should read this catalog:
https://raw.githubusercontent.com/healcare/openhealthcare-data/main/assets/healing-images/manifest.json

Human-readable collection:
https://github.com/healcare/openhealthcare-data/tree/main/assets/healing-images

Resolve each sourcePath from the repository root at the SAME COMMIT used to read the catalog. Pin that commit for an import, verify SHA-256 hashes, and bring approved enabled entries into the app's local optimized asset collection. This is an authoring/import source, not a visitor-time GitHub dependency. The ChatGPT Library originals are the creative archive, not an app API.

The catalog currently contains seven approved illustrations: modern profile, abstract light, blue skies, cellular field, inkblot, turquoise waters and You’re a trillionaire. The earlier photorealistic campaign image is outside this set. Existing dated campaign paths remain available for compatibility; this catalog is now the canonical growing set.

## Requested site behavior
On selected existing pages, show one randomly selected enabled artwork per art placement. Prefer existing approved campaign placements. Keep the selection fixed during a page visit, across ordinary rerenders and hydration, with no flash from a fallback artwork to another. Do not add timed rotation or a carousel. Where multiple placements are warranted on one page, avoid duplicates.

Randomization must not require cookies, tracking or persistent visitor identifiers. Load only the selected image, not the entire collection. If the collection or asset fails, keep the page usable with a local valid fallback or gracefully omit the art. Preserve search, navigation and provider information as the main tasks. This is an uplifting collection name, not a therapeutic efficacy claim; cells and inkblots are artistic imagery.

## Performance and accessibility
Use the site's existing local image optimization and cache conventions; generate responsive sizes and further compress the supplied source exports after inspecting text/art quality. Each source is 1536 × 1024; the original six WebP exports use quality 92 and You’re a trillionaire uses quality 90. Preserve full 3:2 compositions and all lettering; do not crop away the message or smiling cell.

Reserve dimensions to prevent layout shifts, lazy-load below-the-fold artwork, and avoid preloading all options. No visitor-time Library/GitHub requests or new third-party calls.

Use each entry's alt description when its message is conveyed only in the image. If accessible nearby text duplicates the message and the image is purely decorative, use empty alt text instead. Do not add redundant aria-labels or unnecessary focus targets. Check screen-reader output, mobile text readability, zoom and contrast.

Run relevant existing checks and focused browser checks: catalog integrity, selection remains stable within a visit, selection can vary across visits, disabled entries excluded, only selected resources fetched, no duplicate placement choices, responsive image sizes, load failure, no layout shift, and accessible naming. Compare before/after affected-page performance under equivalent conditions and report actual transferred bytes and limitations.

## Growing the set
Add a new image and one catalog entry with a unique stable id, dimensions, bytes, checksum, accessible description and enabled state. Version revised image bytes under a new filename. Never overwrite existing artwork silently. Replit refreshes its imported catalog during the normal update/build workflow; a GitHub addition alone does not update an already-deployed site. No polling service or scheduled automation is required.

Report the source commit consumed, chosen pages, app commit, optimized sizes and technical check results. Preserve unrelated work and provider data. Implementation is authorized; publishing is a separate action. Do not deploy.
