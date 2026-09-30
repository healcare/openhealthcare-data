import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const fixture = JSON.parse(fs.readFileSync('data/directories/us/ca/beverly-hills/plastic-surgeons.json', 'utf8'));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'oh-refresh-'));
function check(label, mutate, valid) {
  const copy = structuredClone(fixture);
  mutate(copy);
  const file = path.join(tmp, 'bundle.json');
  fs.writeFileSync(file, JSON.stringify(copy));
  const result = spawnSync(process.execPath, ['scripts/validate-bundles.mjs', file], { encoding: 'utf8' });
  assert.equal(result.status === 0, valid, `${label}: ${result.stdout} ${result.stderr}`);
}
try {
  check('valid refresh with documented missing images', () => {}, true);
  check('reject unexplained missing image', b => { delete b.providers.find(p => p.portrait === null).mediaReview; }, false);
  check('reject legacy missing image', b => { b.schemaVersion = '1.1.0'; }, false);
  check('reject duplicate permanent identity', b => { b.providers[1].existingEntityId = b.providers[0].existingEntityId; }, false);
  check('reject duplicate permanent path', b => { b.providers[1].canonicalPath = b.providers[0].canonicalPath; }, false);
  check('reject uncited narrative section', b => { b.providers[0].profileSections[0].sourceIds = []; }, false);
  check('reject unresolved evidence reference', b => { b.providers[0].profileSections[0].sourceIds = ['missing-source']; }, false);
  check('reject premature indexing', b => { b.directory.indexable = true; }, false);
  const norfolk = JSON.parse(fs.readFileSync('data/directories/us/va/norfolk/therapists.json', 'utf8'));
  assert.equal(norfolk.providers.length, 10);
  assert.equal(norfolk.sources.length, 25);
  assert.equal(norfolk.directory.indexable, false);
  assert.equal(norfolk.directory.reviewStatus, 'reviewed');
  const counts = norfolk.providers.reduce((a, p) => { a[p.verification.status] = (a[p.verification.status] || 0) + 1; return a; }, {});
  assert.deepEqual(counts, { conflict: 2, confirmed: 7, unresolved: 1 });
  console.log('Profile refresh validation: 8 cases passed; Norfolk 7/2/1 baseline preserved.');
} finally { fs.rmSync(tmp, { recursive: true, force: true }); }
