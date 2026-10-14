# Cross-directory portrait loss and delivery audit — October 13, 2026

## Scope update — 2026-10-14

Earlier counts in this report are dated intermediate inventories, not the current release inventory. The expanded reconciliation covers all 93 provider records, retained candidate evidence, runtime overrides, all 12 provider directories and the separate organization-directory access checks. Effective delivery is now 69 reviewed local previews (64 source images, five screenshot crops); 24 photo gaps remain. The raw primary-field count alone understates delivery because ten Manhattan cardiology portraits are runtime overrides.

Thirty-five previews were restored or prepared across this phase and its preceding ten-photo pass; only established removals are called erasures. Twenty-five further deliveries include Ruth, nineteen retained remote references and five empty-primary-field candidates. The clean per-profile table records source pages, original source URLs where retained, dimensions, byte hashes and held outcomes separately.

History-supported causes remain `2e40424`'s fourteen URL removals and `bebbdb9`'s shared remote activation gate. The recorded cookie/privacy rationale is distinct from permission or licensing. `dd3972f` introduced the shared early local-preview return that bypassed older DC photo-disclosure notes/links; this pass repairs that API/presentation omission without promoting private research. These code effects do not establish any author's motive.

Historical coverage remains the earlier 107 first-parent commits from `2e40424` through `c69a82c`, plus the related shared-gate/local-preview changes and this continuation after `d8db5ea`/`5c14c8c`. It is not an exhaustive review of every historical source claim or branch. Existing story/access restorations and intentional corrections remain; no new unsupported clinical claims were restored.

### Expanded-suite failure classifications

The first expanded 132-case browser run passed 120 and failed twelve. Nine failures were outdated portrait/count/fallback expectations after eligible local preparation (DC source-control duplication; Beverly Hills count, fallback, header thumbnail, held-card photo, and eight-profile list; two Orange County illustration cases; the all-directory saved-photo count/default gallery-source expectation). Three were locator/interaction defects: Susana's lazy image was checked before scrolling; Nancy's citation check selected an unrelated “Practice website” link with the same URL; the new all-directory check used the wrong mental-health region and waited for visibility before scrolling its lazy frame. No test was skipped.

The later shared directory-summary check also exposed assumptions about standard pilot source-link IDs and a closed outer research disclosure. Custom mental-health source links are now located by visible, matching label and URL after real native-summary opening. Longer cross-directory scope has an explicit timeout rather than a single-page budget. These are operability/locator fixes, not permission to accept absent citations.

Relevant application regressions were separately fixed: local-mode disclosure projection discarded earlier source-specific notes/links, and a hardcoded Beverly Hills status misreported actual available photos. Clinical holds, source/privacy assertions and named-source requirements remain. Follow-on targeted failures exposed further assertions within those same outdated cases; corrected tests require the local image's real dimensions, full-face containment, visible source attribution and no activation gate rather than accepting a heart.

## Findings

Two separate changes explain the missing-photo reports:

1. **Data removal in `2e40424`.** Fourteen previously populated `imageUrl` values were set to `null`: all ten La Jolla pediatricians and four Norfolk therapists. The dated portrait checkpoint records that CPCMG image requests set Cloudflare `__cf_bm` cookies; it does not cite licensing or permission as the reason. This was a stored-data loss, not an identity or license finding. Ten La Jolla portraits and Norfolk portraits for Nathaniel Mason and Bret Rawlings have since been restored as local previews. Rachel Jones and Rachel Micheletti still have their Psychology Today image references; their official-practice candidates remain withheld after a cookie finding and a blocked-image response, respectively. Their remote references remain activation-gated.
2. **Presentation change in `bebbdb9` (October 13).** `ProviderPortrait` began withholding every `remote-reference-only` image until the visitor activates “Load portrait from source.” The record still contains its image URL and source link; the first render shows the heart illustration. The commit’s no-request-before-activation browser assertion documents the privacy purpose. This is a shared behavior across directories, not evidence that the images were deleted or failed at their sources.

The October 13 Beverly Hills screenshot is consistent with the second change. Chiu and Obeng still had named image URLs and source links in the app data. Their currently deployed fallbacks therefore reflected the activation gate, not erased portrait records. Live deployment metadata does not expose its source commit, so an exact production SHA cannot be established.

## Locally restored previews

The following retained image candidates were fetched from their recorded source URLs, visually inspected together against their named provider records, and returned HTTP image responses without a `Set-Cookie` header. Exact original pixels are retained as same-origin assets (not cropped or represented as ownership or derivative approval). Existing source-page links and review/hold states remain in place.

| Profile | Directory | Original dimensions | Original source image URL | Result |
|---|---|---:|---|---|
| Gabriel Chiu | Beverly Hills plastic surgeons | 900×1100 | `https://www.beverlyhillsplasticsurgeryinc.com/wp-content/uploads/2025/07/DrChiu.jpg` | Local preview |
| Michael K. Obeng | Beverly Hills plastic surgeons | 1920×1920 | `https://irp.cdn-website.com/05e612ac/dms3rep/multi/opt/Dr.%2BMichael%2BK.%2BOBENG_Headshot-1920w.JPG` | Local preview; editorial hold unchanged |
| Rady Rahban | Beverly Hills plastic surgeons | 976×860 | `https://www.datocms-assets.com/132744/1719001315-about-dr-rahban.jpg?auto=format,compress&w=976` | Local preview |
| Daniel Barrett | Beverly Hills plastic surgeons | 1024×842 | `https://cdn.prod.website-files.com/64dfd4ef9f4f37b49f941ac1/683e2cdf2bea634d051e6b85_Dr%20daniel%20barrett%20board%20certfied%20plastic%20surgeon%20top%20beverly%20hills%20doctor.webp` | Local preview |
| Garth Fisher | Beverly Hills plastic surgeons | 443×638 | `https://www.datocms-assets.com/163938/1753905916-hero-2.jpg?auto=format,compress&w=443` | Local preview |
| Daniel Gould | Beverly Hills plastic surgeons | 1000×1200 | `https://drgouldplasticsurgery.com/assets/img/feature/dr-gould-11.jpg` | Local preview |
| Joseph Cruise | Orange County plastic surgeons | 1200×1450 | `https://orangecountycosmeticsurgery.com/_static_/feature/about-01.jpg` | Local preview |
| Juris Bunkis | Orange County plastic surgeons | 634×686 | `https://17184ca6.delivery.rocketcdn.me/wp-content/uploads/2025/12/bunkis-min.jpg` | Local preview |
| Ali Sajjadian | Orange County plastic surgeons | 665×680 | `https://www.drsajjadian.com/wp-content/uploads/2026/06/Sajjadian-Bio-Pic-OC.jpg` | Local preview |
| Rodney Raanan | Beverly Hills cosmetic dentists | 847×1024 | `https://rifkinraanan.com/wp-content/uploads/2026/07/rodney-raanan-847x1024.jpg` | Local preview |
| Ruth Bybee | Norfolk therapists | 320×400 | `https://photos.psychologytoday.com/d0b8048b-ec21-4e2a-b792-65997f06813c/1/320x400.jpeg` | Local preview; visually matched on named Psychology Today page October 14 |

Provider records retain the source-page URLs and source IDs; this table preserves the original direct asset URLs and observed dimensions. The source terms do not establish reuse permission; the local files are ordinary, modest, source-linked previews under the user's explicit direction. No ownership, blanket license, or derivative-card approval is claimed. Existing misnamed `gabrielchiu.jpg` and `michaelobeng.jpg` files were not used: visual inspection showed that they depict different people.

## Current directory-level status

The current workspace has 93 provider records. Thirty profile records now have same-origin `local-source-preview` URLs and five have `local-source-screenshot` URLs; those are expected to appear immediately. Nineteen records still have a remote-reference URL and remain behind explicit activation; this is privacy-safe pending media review, not evidence that the immediate-preview recovery is complete. Ten records are marked remote-reference-only but have no image URL; twenty-nine more have no image URL and no explicit usage classification. The earlier first-parent history audit did not establish these 39 null-URL records as losses in the audited range. They remain fallbacks rather than guessed portraits.

| Directory | Local previews | Local screenshots | Remote URL (activation-gated) | Remote reference, no URL | Other no-URL |
|---|---:|---:|---:|---:|---:|
| Manhattan mental health | 4 | 0 | 0 | 0 | 0 |
| Norfolk therapists | 4 | 0 | 6 | 0 | 0 |
| La Jolla pediatricians | 10 | 0 | 0 | 0 | 0 |
| Beverly Hills plastic surgeons | 6 | 1 | 0 | 1 | 0 |
| Cupertino dentists | 0 | 1 | 2 | 1 | 3 |
| San Francisco dermatologists | 0 | 0 | 4 | 3 | 0 |
| Beverly Hills cosmetic dentists | 2 | 0 | 1 | 0 | 5 |
| Washington, DC psychotherapists | 0 | 2 | 5 | 0 | 1 |
| Manhattan cardiology | 0 | 0 | 0 | 0 | 10 |
| Beverly Hills dermatologists | 1 | 1 | 0 | 0 | 4 |
| Riverside orthopedics | 0 | 0 | 1 | 1 | 5 |
| Orange County plastic surgeons | 3 | 0 | 0 | 4 | 1 |

These counts describe stored media disposition, not whether every remote image loads in every browser. The two Norfolk Psychology Today responses were previously observed as 320×400 JPEGs with no `Set-Cookie`; the notes still say identity was not independently verified. They were not promoted to local previews. No use of an image or its source-page presence clears a license, identity, or editorial hold.

## Prevention and verification

- Existing import-preservation checks require a dated, scoped reason and a reviewable change before suppressing source-backed content; portrait removal additionally needs a dated media hold and explanation.
- The all-directory browser test now requires every local preview to use the app origin, render without a remote-portrait activation button, avoid remote requests, and decode to a nonzero natural width. Remote-reference portraits must still make no request before activation. The suite's intercepted remote-image bodies are simulated UI evidence; they do not prove that an external source image loads.
- Preserve the existing shared directory and profile routes, content, source links, human review/indexing states, unresolved evidence, the Norfolk license outcomes, and Obeng's hold. No third-party media is requested to display a local preview.

No deployment was performed. The local preview can differ from production until a separately authorized deployment occurs.


## Final checked candidate verification — 2026-10-14

- TypeScript check, 109 entity/bundle files, referential/editorial validation, independent 69-portrait delivery guard, dated preservation/import checks and whitespace check passed.
- URL/portrait contracts: 67 passed; HTTP/API: 107 passed; image/card checks: 4 passed; pilot checks: 64 passed.
- Complete Chromium discovery: 132 cases in five files. Final full suite: 132 passed, zero failures/skips; production build passed. This includes actual touch interactions, shared/custom layouts, stored/API/rendered copy and directory-access preservation, privacy, immediate local images and source links.
- Firefox: all 69 approved previews decoded with correct source links, zero initial external requests/cookies, real disclosure taps and a real retained gallery response (HTTP 200, 320 × 400, no Set-Cookie/cookies). No image interception was used in this check.
- WebKit launch remains environment-blocked by libicudata.so.74; no physical Safari-device audit. Real screen-reader/manual audit remains unperformed, with the existing concrete checklist and follow-up.
- Intercepted images in existing simulated UI failure tests remain simulations, not proof of an external asset loading. Separate ordinary source-response evidence and Firefox actual decoding establish only the specifically tested responses.
- Historical scope is limited as documented; 24 photo gaps and clinical/access uncertainties remain openly held/unknown. No clinical/indexing/identity hold is cleared by a portrait.
- GitHub synchronization follows these checks; no deployment performed. Production is not certified as this candidate until a separate publish and live verification.
