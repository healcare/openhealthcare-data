#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const DATA_ROOT = path.join(ROOT, "data", "directories");
const SUPPORTED_VERSIONS = new Set(["1.0.0", "1.1.0"]);
const OUTCOMES = new Set([
  "verified",
  "source-stated",
  "confirmed",
  "conflict",
  "unresolved",
  "partial",
  "stale",
]);
const REVIEW_STATES = new Set(["pending-human-review", "reviewed"]);
const LOOKUP_STATES = new Set(["pending", "completed", "not-applicable"]);
const SOURCE_STATES = new Set(["source-stated", "confirmed", "conflict", "unresolved"]);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const ID_RE = /^[a-z0-9][a-z0-9-]*$/;

let errors = 0;

function fail(file, message) {
  errors += 1;
  console.error(`  ✗ ${path.relative(ROOT, file)}: ${message}`);
}

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validDate(value) {
  return typeof value === "string" && DATE_RE.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}

function validUrl(value) {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function requireString(file, object, field, label) {
  if (typeof object?.[field] !== "string" || !object[field].trim()) {
    fail(file, `${label}.${field} must be a non-empty string`);
  }
}

function requireDate(file, object, field, label) {
  if (!validDate(object?.[field])) {
    fail(file, `${label}.${field} must be an ISO date (YYYY-MM-DD)`);
  }
}

function requireId(file, value, label) {
  if (typeof value !== "string" || !ID_RE.test(value)) {
    fail(file, `${label} must use lowercase letters, digits, and hyphens`);
  }
}

function uniqueIds(file, items, label) {
  const ids = new Set();
  for (const [index, item] of items.entries()) {
    if (!isObject(item)) {
      fail(file, `${label}[${index}] must be an object`);
      continue;
    }
    requireId(file, item.id, `${label}[${index}].id`);
    if (ids.has(item.id)) fail(file, `${label} contains duplicate id "${item.id}"`);
    ids.add(item.id);
  }
  return ids;
}

function checkRefs(file, refs, known, label) {
  if (!Array.isArray(refs)) {
    fail(file, `${label} must be an array`);
    return;
  }
  for (const ref of refs) {
    if (typeof ref !== "string" || !known.has(ref)) {
      fail(file, `${label} contains unresolved reference ${JSON.stringify(ref)}`);
    }
  }
}

function validateSource(file, source, index) {
  const label = `sources[${index}]`;
  requireString(file, source, "type", label);
  requireString(file, source, "publisher", label);
  requireDate(file, source, "retrievedOn", label);
  if (!validUrl(source.url)) fail(file, `${label}.url must be an HTTP(S) URL`);
  if (source.verificationStatus !== undefined && !SOURCE_STATES.has(source.verificationStatus)) {
    fail(file, `${label}.verificationStatus is invalid`);
  }
  if (source.reviewStatus !== undefined && source.reviewStatus !== "reviewed") {
    fail(file, `${label}.reviewStatus must be "reviewed" when present`);
  }
}

function validateMedia(file, media, label, sourceIds) {
  if (!isObject(media)) {
    fail(file, `${label} must be an object`);
    return;
  }
  if (!validUrl(media.sourceUrl)) fail(file, `${label}.sourceUrl must be an HTTP(S) URL`);
  if (!validUrl(media.clickThroughUrl)) fail(file, `${label}.clickThroughUrl must be an HTTP(S) URL`);
  requireString(file, media, "alt", label);
  if (media.usage !== "remote-reference-only") {
    fail(file, `${label}.usage must be "remote-reference-only" unless a separate rights contract is introduced`);
  }
  if (media.sourceId !== undefined && !sourceIds.has(media.sourceId)) {
    fail(file, `${label}.sourceId does not resolve: ${JSON.stringify(media.sourceId)}`);
  }
}

function validateProvider(file, provider, index, context) {
  const label = `providers[${index}]`;
  const { sourceIds, locationIds, directoryReviewStatus, version } = context;
  requireId(file, provider.id, `${label}.id`);

  if (typeof provider.name === "string") {
    if (!provider.name.trim()) fail(file, `${label}.name must not be empty`);
  } else if (isObject(provider.name)) {
    requireString(file, provider.name, "display", `${label}.name`);
  } else {
    fail(file, `${label}.name must be a string or structured name`);
  }

  if (!Array.isArray(provider.credentials)) fail(file, `${label}.credentials must be an array`);
  requireString(file, provider, "clinicianType", label);
  if (!Array.isArray(provider.specialties)) fail(file, `${label}.specialties must be an array`);
  requireString(file, provider, "story", label);
  if (!validUrl(provider.profileUrl)) fail(file, `${label}.profileUrl must be an HTTP(S) URL`);
  checkRefs(file, provider.locationIds, locationIds, `${label}.locationIds`);
  checkRefs(file, provider.sourceIds, sourceIds, `${label}.sourceIds`);
  validateMedia(file, provider.portrait, `${label}.portrait`, sourceIds);

  if (provider.mediaGallery !== undefined) {
    if (!Array.isArray(provider.mediaGallery)) {
      fail(file, `${label}.mediaGallery must be an array`);
    } else {
      const mediaKeys = new Set();
      provider.mediaGallery.forEach((item, mediaIndex) => {
        const mediaLabel = `${label}.mediaGallery[${mediaIndex}]`;
        validateMedia(file, item, mediaLabel, sourceIds);
        if (isObject(item)) {
          requireString(file, item, "kind", mediaLabel);
          const key = `${item.sourceUrl ?? ""}\n${item.clickThroughUrl ?? ""}`;
          if (mediaKeys.has(key)) fail(file, `${label}.mediaGallery contains a duplicated image/click-through pair`);
          mediaKeys.add(key);
        }
      });
    }
  }

  if (provider.discoverySignals !== undefined) {
    if (!Array.isArray(provider.discoverySignals)) {
      fail(file, `${label}.discoverySignals must be an array`);
    } else {
      provider.discoverySignals.forEach((signal, signalIndex) => {
        const signalLabel = `${label}.discoverySignals[${signalIndex}]`;
        if (!isObject(signal)) {
          fail(file, `${signalLabel} must be an object`);
          return;
        }
        requireString(file, signal, "type", signalLabel);
        requireString(file, signal, "platform", signalLabel);
        requireDate(file, signal, "observedOn", signalLabel);
        if (!sourceIds.has(signal.sourceId)) fail(file, `${signalLabel}.sourceId does not resolve`);
        if (!["string", "number", "boolean"].includes(typeof signal.value)) {
          fail(file, `${signalLabel}.value must be a string, number, or boolean`);
        }
      });
    }
  }

  if (provider.claimEvidence !== undefined) {
    if (!Array.isArray(provider.claimEvidence)) {
      fail(file, `${label}.claimEvidence must be an array`);
    } else {
      provider.claimEvidence.forEach((evidence, evidenceIndex) => {
        const evidenceLabel = `${label}.claimEvidence[${evidenceIndex}]`;
        if (!isObject(evidence)) {
          fail(file, `${evidenceLabel} must be an object`);
          return;
        }
        requireString(file, evidence, "claim", evidenceLabel);
        checkRefs(file, evidence.sourceIds, sourceIds, `${evidenceLabel}.sourceIds`);
        if (!SOURCE_STATES.has(evidence.verificationStatus)) {
          fail(file, `${evidenceLabel}.verificationStatus is invalid`);
        }
      });
    }
  }

  if (!isObject(provider.verification)) {
    fail(file, `${label}.verification must be an object`);
    return;
  }
  const verification = provider.verification;
  if (!OUTCOMES.has(verification.status)) fail(file, `${label}.verification.status is invalid`);

  if (version === "1.1.0") {
    if (!REVIEW_STATES.has(verification.reviewStatus)) fail(file, `${label}.verification.reviewStatus is invalid`);
    if (!LOOKUP_STATES.has(verification.licenseLookupStatus)) fail(file, `${label}.verification.licenseLookupStatus is invalid`);
  }
  if (verification.researchedOn !== undefined) requireDate(file, verification, "researchedOn", `${label}.verification`);
  if (verification.reviewedOn !== undefined) requireDate(file, verification, "reviewedOn", `${label}.verification`);

  if (directoryReviewStatus === "reviewed" && verification.reviewStatus !== "reviewed") {
    fail(file, `${label} must be reviewed when the directory is reviewed`);
  }

  if (provider.licenseEvidence !== undefined) {
    if (!isObject(provider.licenseEvidence)) {
      fail(file, `${label}.licenseEvidence must be an object`);
      return;
    }
    const license = provider.licenseEvidence;
    requireString(file, license, "jurisdiction", `${label}.licenseEvidence`);
    requireString(file, license, "type", `${label}.licenseEvidence`);
    requireString(file, license, "number", `${label}.licenseEvidence`);
    if (!sourceIds.has(license.sourceId)) fail(file, `${label}.licenseEvidence.sourceId does not resolve`);
    if (!LOOKUP_STATES.has(license.primarySourceCheck)) fail(file, `${label}.licenseEvidence.primarySourceCheck is invalid`);

    if (license.primarySourceCheck === "completed") {
      if (!new Set(["confirmed", "conflict", "unresolved"]).has(license.outcome)) {
        fail(file, `${label}.licenseEvidence.outcome must be confirmed, conflict, or unresolved after a completed check`);
      }
      if (verification.licenseLookupStatus !== "completed") {
        fail(file, `${label}.verification.licenseLookupStatus must be completed`);
      }
      if (verification.status !== license.outcome) {
        fail(file, `${label} license outcome must match verification.status`);
      }
      requireDate(file, license, "reviewedOn", `${label}.licenseEvidence`);
    }
  }
}

function validateBundle(file) {
  let bundle;
  try {
    bundle = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    fail(file, `invalid JSON: ${error.message}`);
    return;
  }

  if (!isObject(bundle)) {
    fail(file, "bundle root must be an object");
    return;
  }
  if (!SUPPORTED_VERSIONS.has(bundle.schemaVersion)) {
    fail(file, `unsupported schemaVersion ${JSON.stringify(bundle.schemaVersion)}`);
  }
  if (!isObject(bundle.directory)) {
    fail(file, "directory must be an object");
    return;
  }
  const directory = bundle.directory;
  requireId(file, directory.slug, "directory.slug");
  requireString(file, directory, "title", "directory");
  requireString(file, directory, "description", "directory");
  requireDate(file, directory, "lastVerified", "directory");
  if (directory.nextReviewDue !== undefined) requireDate(file, directory, "nextReviewDue", "directory");

  if (bundle.schemaVersion === "1.1.0") {
    if (!REVIEW_STATES.has(directory.reviewStatus)) fail(file, "directory.reviewStatus is invalid");
    if (!["published", "draft", "removed"].includes(directory.status)) fail(file, "directory.status is invalid");
    if (typeof directory.indexable !== "boolean") fail(file, "directory.indexable must be boolean");
    if (!["unclaimed", "claimed", "verified"].includes(directory.claimStatus)) fail(file, "directory.claimStatus is invalid");
  }

  if (directory.reviewStatus === "pending-human-review") {
    if (directory.indexable !== false) fail(file, "pending-human-review directories must be non-indexable");
    if (directory.claimStatus !== "unclaimed") fail(file, "pending-human-review directories must be unclaimed");
  }
  if (directory.indexable === true) {
    const decision = directory.editorialDecision;
    if (!isObject(decision) || !validDate(decision.indexingApprovedOn) || typeof decision.approvedBy !== "string") {
      fail(file, "indexable directories require a dated editorialDecision with approvedBy");
    }
  }

  if (!Array.isArray(bundle.sources)) fail(file, "sources must be an array");
  if (!Array.isArray(bundle.locations)) fail(file, "locations must be an array");
  if (!Array.isArray(bundle.providers)) fail(file, "providers must be an array");
  if (!Array.isArray(bundle.sources) || !Array.isArray(bundle.locations) || !Array.isArray(bundle.providers)) return;

  const sourceIds = uniqueIds(file, bundle.sources, "sources");
  const locationIds = uniqueIds(file, bundle.locations, "locations");
  uniqueIds(file, bundle.providers, "providers");

  bundle.sources.forEach((source, index) => {
    if (isObject(source)) validateSource(file, source, index);
  });

  bundle.locations.forEach((location, index) => {
    if (!isObject(location)) return;
    const label = `locations[${index}]`;
    requireString(file, location, "name", label);
    checkRefs(file, location.sourceIds, sourceIds, `${label}.sourceIds`);
    if (location.website !== undefined && !validUrl(location.website)) {
      fail(file, `${label}.website must be an HTTP(S) URL`);
    }
  });

  bundle.providers.forEach((provider, index) => {
    if (isObject(provider)) {
      validateProvider(file, provider, index, {
        sourceIds,
        locationIds,
        directoryReviewStatus: directory.reviewStatus,
        version: bundle.schemaVersion,
      });
    }
  });

  if (bundle.providers.some((provider) => Array.isArray(provider?.discoverySignals))) {
    requireString(file, directory, "socialSignalPolicy", "directory");
  }

  if (isObject(directory.reviewSummary)) {
    const counts = bundle.providers.reduce((result, provider) => {
      const status = provider?.verification?.status;
      if (typeof status === "string") result[status] = (result[status] ?? 0) + 1;
      return result;
    }, {});
    if (directory.reviewSummary.providersReviewed !== bundle.providers.length) {
      fail(file, "directory.reviewSummary.providersReviewed must equal providers.length");
    }
    for (const status of ["confirmed", "conflict", "unresolved"]) {
      if (directory.reviewSummary[status] !== undefined && directory.reviewSummary[status] !== (counts[status] ?? 0)) {
        fail(file, `directory.reviewSummary.${status} does not match provider outcomes`);
      }
    }
  }
}

function collectJsonFiles(start) {
  const files = [];
  for (const entry of fs.readdirSync(start, { withFileTypes: true })) {
    const fullPath = path.join(start, entry.name);
    if (entry.isDirectory()) files.push(...collectJsonFiles(fullPath));
    else if (entry.isFile() && entry.name.endsWith(".json")) files.push(fullPath);
  }
  return files;
}

const requested = process.argv.slice(2).filter((argument) => argument.endsWith(".json"));
const files = requested.length > 0
  ? requested.map((file) => path.resolve(ROOT, file))
  : collectJsonFiles(DATA_ROOT);

console.log(`OpenHealthcare data validation (${files.length} bundle${files.length === 1 ? "" : "s"})`);
for (const file of files.sort()) {
  if (!fs.existsSync(file)) {
    fail(file, "file does not exist");
    continue;
  }
  validateBundle(file);
}

if (errors > 0) {
  console.error(`\n✗ ${errors} validation error${errors === 1 ? "" : "s"}`);
  process.exit(1);
}

console.log(`✓ ${files.length} bundle${files.length === 1 ? "" : "s"} valid`);
