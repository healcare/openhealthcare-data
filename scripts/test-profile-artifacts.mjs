import assert from "node:assert/strict";
import { parseProfileArtifact, validateProfileArtifact } from "./profile-artifacts.mjs";

assert.throws(() => parseProfileArtifact('{"qualifying":83,"qualifying":95}', "bad-result"), /duplicate object key "qualifying"/);
assert.throws(() => parseProfileArtifact('{"counts":{"after":83,"\\u0061fter":95}}'), /duplicate object key "after"/);

const candidate = validateProfileArtifact({
  kind: "source-prepared-research-candidate",
  provider: { id: "provider-1", name: "Example Clinician" },
});
assert.deepEqual(candidate, { stage: "research-candidate", importable: false, errors: [] });

const contribution = {
  kind: "validated-profile-contribution",
  schemaVersion: 1,
  baseAppRevision: "app-base",
  items: [
    { id: "provider-1", disposition: "accepted", reason: "Existing identity and named source map are reconciled.", proposedChanges: [{ path: "profileSections", reason: "Add a concise source-mapped teaching connection." }] },
    { id: "provider-2", disposition: "deferred", reason: "Named portrait is clear, but no distinctive humanity source was found." },
  ],
};
assert.equal(validateProfileArtifact(contribution).importable, true);
assert.match(validateProfileArtifact({ ...contribution, items: [{ ...contribution.items[1], reason: "" }] }).errors.join(" "), /reason/);

const result = {
  kind: "applied-profile-result",
  schemaVersion: 1,
  baseAppRevision: "app-base",
  resultingAppRevision: "app-result",
  items: [{
    id: "provider-1", disposition: "accepted", reason: "Existing identity qualified after the patient-visible story was checked.",
    appliedChanges: ["profileSections", "sources", "claimEvidence"],
    deltas: { qualifyingUniqueProviderIds: 1, providerRecords: 0, approvedLocalPortraitDeliveries: 0 },
  }],
  counts: {
    qualifyingUniqueProviderIds: { before: 83, after: 84 },
    providerRecords: { before: 108, after: 108 },
    approvedLocalPortraitDeliveries: { before: 95, after: 95 },
  },
  checks: [{ name: "humanity audit", result: "passed", scope: "all provider records" }],
};
assert.equal(validateProfileArtifact(result).errors.length, 0);
const overwrittenDimension = structuredClone(result);
overwrittenDimension.counts.qualifyingUniqueProviderIds.after = 95;
assert.match(validateProfileArtifact(overwrittenDimension).errors.join(" "), /delta.*does not match/);
const incompleteResult = structuredClone(result);
incompleteResult.items[0].deltas = { qualifyingUniqueProviderIds: 1, providerRecords: 0 };
assert.match(validateProfileArtifact(incompleteResult).errors.join(" "), /approvedLocalPortraitDeliveries must be an integer/);

console.log("Profile artifact validation: duplicate-key, stage, reason, and count-dimension cases passed.");
