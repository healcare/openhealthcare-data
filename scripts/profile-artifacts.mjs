import { parseJsonNoDuplicateKeys } from "./strict-json.mjs";

const DIMENSIONS = [
  "qualifyingUniqueProviderIds",
  "providerRecords",
  "approvedLocalPortraitDeliveries",
];
const DISPOSITIONS = new Set(["accepted", "deferred", "rejected"]);

const nonEmpty = value => typeof value === "string" && value.trim().length > 0;
const integer = value => Number.isSafeInteger(value);

function itemErrors(item, index, { applied = false } = {}) {
  const errors = [];
  const label = `items[${index}]`;
  if (!item || typeof item !== "object" || Array.isArray(item)) return [`${label} must be an object`];
  if (!nonEmpty(item.id)) errors.push(`${label}.id is required`);
  if (!DISPOSITIONS.has(item.disposition)) errors.push(`${label}.disposition must be accepted, deferred, or rejected`);
  if (!nonEmpty(item.reason) || item.reason.trim().length < 12) {
    errors.push(`${label}.reason must explain why the item was accepted, deferred, or rejected`);
  }
  const actionField = applied ? "appliedChanges" : "proposedChanges";
  if (item.disposition === "accepted" &&
      (!Array.isArray(item[actionField]) || item[actionField].length === 0)) {
    errors.push(`${label}.${actionField} must describe an accepted change`);
  }
  if (item.disposition !== "accepted" && Array.isArray(item[actionField]) && item[actionField].length) {
    errors.push(`${label}: deferred/rejected items cannot contain ${actionField}`);
  }
  if (applied) {
    if (!item.deltas || typeof item.deltas !== "object" || Array.isArray(item.deltas)) {
      errors.push(`${label}.deltas must state all three count dimensions`);
    } else {
      for (const dimension of DIMENSIONS) {
        if (!integer(item.deltas[dimension])) errors.push(`${label}.deltas.${dimension} must be an integer`);
        if (item.disposition !== "accepted" && item.deltas[dimension] !== 0) {
          errors.push(`${label}: deferred/rejected items must have zero ${dimension} delta`);
        }
      }
    }
  }
  return errors;
}

export function validateProfileArtifact(artifact, source = "artifact") {
  const errors = [];
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) {
    return { stage: "invalid", importable: false, errors: [`${source}: top-level JSON must be an object`] };
  }

  if (artifact.kind === "source-prepared-research-candidate") {
    if (!artifact.provider?.id || !artifact.provider?.name) errors.push("research candidate needs a provider ID and name");
    return { stage: "research-candidate", importable: false, errors };
  }
  if (artifact.kind === "validated-profile-contribution") {
    if (artifact.schemaVersion !== 1) errors.push("validated contribution requires schemaVersion 1");
    if (!nonEmpty(artifact.baseAppRevision)) errors.push("validated contribution needs baseAppRevision");
    if (!Array.isArray(artifact.items) || artifact.items.length === 0) errors.push("validated contribution needs at least one item");
    const ids = new Set();
    for (const [index, item] of (artifact.items ?? []).entries()) {
      errors.push(...itemErrors(item, index));
      if (item?.id && ids.has(item.id)) errors.push(`duplicate contribution ID ${item.id}`);
      if (item?.id) ids.add(item.id);
      for (const [changeIndex, change] of (item?.proposedChanges ?? []).entries()) {
        if (!nonEmpty(change?.path) || !nonEmpty(change?.reason)) {
          errors.push(`items[${index}].proposedChanges[${changeIndex}] needs a path and scoped reason`);
        }
      }
    }
    return { stage: "validated-contribution", importable: errors.length === 0, errors };
  }
  if (artifact.kind === "applied-profile-result") {
    if (artifact.schemaVersion !== 1) errors.push("applied result requires schemaVersion 1");
    for (const field of ["baseAppRevision", "resultingAppRevision"]) {
      if (!nonEmpty(artifact[field])) errors.push(`applied result needs ${field}`);
    }
    if (!Array.isArray(artifact.items) || artifact.items.length === 0) errors.push("applied result needs at least one item");
    const ids = new Set();
    const totals = Object.fromEntries(DIMENSIONS.map(dimension => [dimension, 0]));
    for (const [index, item] of (artifact.items ?? []).entries()) {
      errors.push(...itemErrors(item, index, { applied: true }));
      if (item?.id && ids.has(item.id)) errors.push(`duplicate applied-result ID ${item.id}`);
      if (item?.id) ids.add(item.id);
      for (const dimension of DIMENSIONS) totals[dimension] += item?.deltas?.[dimension] ?? 0;
    }
    if (!artifact.counts || typeof artifact.counts !== "object") {
      errors.push("applied result needs distinct counts for qualifying IDs, provider records, and portrait deliveries");
    } else {
      for (const dimension of DIMENSIONS) {
        const pair = artifact.counts[dimension];
        if (!pair || !integer(pair.before) || !integer(pair.after) || pair.before < 0 || pair.after < 0) {
          errors.push(`counts.${dimension} must have non-negative integer before/after values`);
        } else if (pair.after - pair.before !== totals[dimension]) {
          errors.push(`counts.${dimension} delta ${pair.after - pair.before} does not match item delta ${totals[dimension]}`);
        }
      }
      const q = artifact.counts.qualifyingUniqueProviderIds;
      const p = artifact.counts.providerRecords;
      const m = artifact.counts.approvedLocalPortraitDeliveries;
      if (q && p && (q.before > p.before || q.after > p.after)) errors.push("qualifying unique IDs cannot exceed provider-record counts");
      if (q && m && (q.before > m.before || q.after > m.after)) errors.push("qualifying unique IDs cannot exceed approved portrait deliveries");
    }
    if (!Array.isArray(artifact.checks) || artifact.checks.length === 0) errors.push("applied result needs actual named checks and scopes");
    else artifact.checks.forEach((check, index) => {
      if (!nonEmpty(check?.name) || !nonEmpty(check?.scope) || !["passed", "failed", "blocked", "not-run"].includes(check?.result)) {
        errors.push(`checks[${index}] needs name, result, and scope`);
      }
      if (check?.result !== "passed" && !nonEmpty(check?.reason)) errors.push(`checks[${index}] needs a reason when not passed`);
    });
    return { stage: "applied-result", importable: false, errors };
  }
  return { stage: "untyped", importable: false, errors };
}

export function parseProfileArtifact(text, source = "artifact") {
  const artifact = parseJsonNoDuplicateKeys(text, source);
  return { artifact, ...validateProfileArtifact(artifact, source) };
}

export const PROFILE_ARTIFACT_COUNT_DIMENSIONS = DIMENSIONS;
