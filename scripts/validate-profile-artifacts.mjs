#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseProfileArtifact } from "./profile-artifacts.mjs";

const ROOT = process.cwd();
const INPUT = process.argv[2] ? path.resolve(process.argv[2]) : path.join(ROOT, "docs", "profile-ready");
const errors = [];
let checked = 0;

function visit(target) {
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(target).sort()) visit(path.join(target, entry));
    return;
  }
  if (!target.endsWith(".json")) return;
  checked += 1;
  try {
    const result = parseProfileArtifact(fs.readFileSync(target, "utf8"), path.relative(ROOT, target));
    for (const issue of result.errors) errors.push(`${path.relative(ROOT, target)}: ${issue}`);
    if (result.stage === "untyped") {
      // Existing clean profile-ready documents predate the staged artifact
      // envelope. They still receive strict duplicate-key JSON parsing.
    }
  } catch (error) {
    errors.push(String(error));
  }
}

try {
  visit(INPUT);
} catch (error) {
  errors.push(`Unable to scan ${path.relative(ROOT, INPUT)}: ${error}`);
}

if (errors.length) {
  console.error(errors.map(message => `✗ ${message}`).join("\n"));
  process.exit(1);
}
console.log(`✓ Profile-ready artifacts: ${checked} JSON file(s) parsed strictly; staged contributions/results validated.`);
