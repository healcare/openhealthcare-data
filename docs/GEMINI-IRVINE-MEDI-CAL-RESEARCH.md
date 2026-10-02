# Gemini: Irvine Medi-Cal Dental access cohort

OpenHealthcare.org helps people find meaningful connections to healthcare, especially lower-income patients and people with disabilities, language barriers or other accessibility needs. The internet should serve everyone equally.

Build on our first two source-stated Irvine practices: QH Dental (6805 Quail Hill Parkway) and Irvine Smile Dentistry (4902 Irvine Center Dr, Suite 101). We already opened their practice pages stating Denti-Cal/Medi-Cal Dental acceptance. Reuse those observations; enrich unresolved access fields and research up to eight additional practices with actual Irvine service sites. Fewer supported options are better than an arbitrary quota.

Baseline:
https://github.com/healcare/openhealthcare-data/blob/442ee4ecbb748d662ad23b43a2c47486ff338e93/data/directories/us/ca/irvine/dentists.json

Use the official state directory and practice-owned pages:
https://dental.dhcs.ca.gov/Members/medi_Cal_Dental/Find_A_Dentist/DentalProviderDirectorySearch

For each option establish exact identity, physical Irvine location, official site and source-published contact; explicit location-scoped Medi-Cal Dental participation; separately stated new-Medi-Cal-patient status; age/service/referral scope; clinician language versus office staff language; interpreter arrangements; ASL/relay, accessible formats, mobility/sensory accommodations and teledentistry. Never turn a policy into a tested accommodation, a service into covered treatment, or directory enrollment into available appointments. Unknown values remain null. Write a short original patient-oriented snippet.

Keep clinician, organization and location records separate. Do not invent UUIDs or license results. Nearby cities remain separate. Do not reuse the earlier uncited 17-provider list as evidence. Elan's office is in La Habra, not Irvine. Dean F Ariaee's Cal-Optima/Denti-Cal wording needs precise dental-program clarification. OC Smile retrieval failed; do not inherit search snippets as supported acceptance.

For named portraits use only physician/practice-owned assets on their own domain, with biography/image URLs, identity context, ownership/control and use evidence. Exclude third-party hosts/CDNs. Preserve exact source-exposed URLs; no rehosting or guessed derivatives. Distinguish metadata discovery, visual inspection and app privacy/delivery tests; do not claim tests you did not perform. Unresolved rights/ownership remain held.

Return one valid JSON object: schema_version "openhealthcare.external-source-research.v1", researched_at with timezone, research_status "source-stated", sources, practices, clinicians, claims, photos, conflicts, failed_attempts, unresolved_questions. Use unique local IDs and resolved references. Claims need value, scope, source_ids, evidence_locator, evidence_status, retrieved_at, source_as_of, effective_date and limitations. Sources need exact requested/final URLs, publisher and source date/date meaning. Keep excerpts to 25 words total per source.

Current DHCS FAQ delays the former July 2026 dental-benefit change to July 1, 2027; January 2026 enrollment restrictions are separate. No individual eligibility determinations or immigration information collection.

Open primary sources, validate the JSON and preserve conflicts so supported findings can be reused without repeating the whole search. No ratings/rankings, outreach, access-control bypass, patient-data collection or deployment.

## Evidence-format correction after the second return

The supplied Western Dental/Irvine Children's Dentistry additions are held, not approved. Do not repeat their submitted identities, contacts, accessibility, languages or photos as facts. Use source-stated, never an unsupported source_verified label.

For a dataset claim supply exact export/API resource, version/as-of basis, source record/object ID, actual NPI used and the observed name/service address. A row number plus catalog URL is insufficient. For a practice claim provide exact retrieved page/section and a short observed passage; if the page failed, return unresolved. Date fields require an explicit source basis, not a guessed recent date. Keep retrieval dates distinct.

Resolve same-name practice identity against official location pages before attributing acceptance. The opened same-named Children's Dentistry site publishes an address differing from the return; no silent correction/merge. Western's city page is internally inconsistent in reader output; do not infer closure or a current branch from its generic prose.

Named clinicians require actually retrieved biographies and role/location evidence. Own-domain image hosts do not prove ownership or permitted use. If no image loaded or ownership/use evidence was found, retain unresolved; no positive boolean or claimed caption inspection. Replace anonymous Sample Practice failed attempts with actual requested URLs and observed outcomes, or omit them.
