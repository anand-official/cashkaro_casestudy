import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {products, offerCost, reviewLink} from '../assets/catalog.js';

const manifest = JSON.parse(fs.readFileSync('build-manifest.json','utf8'));
const errors = [];
for (const route of manifest.routes) {
  const html = fs.readFileSync(route,'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  if (ids.length !== new Set(ids).size) errors.push(`${route}: duplicate IDs`);
  if ((html.match(/<h1[ >]/g)||[]).length !== 1) errors.push(`${route}: expected one h1`);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const link = match[1].replaceAll('&amp;','&');
    if (/^(https?:|mailto:|data:)/.test(link)) continue;
    const [file, hash] = link.split('#');
    const target = file ? path.normalize(path.join(path.dirname(route),file)) : route;
    if (!fs.existsSync(target)) errors.push(`${route}: missing ${target}`);
    else if (hash && target.endsWith('.html') && !fs.readFileSync(target,'utf8').includes(`id="${hash}"`)) errors.push(`${route}: missing anchor ${link}`);
  }
}
for (const file of fs.readdirSync('assets').filter(f=>f.endsWith('.js'))) execFileSync(process.execPath,['--check',`assets/${file}`]);
// Check the distinction that materially affects the customer's comparison.
const amazon = products.jbl.offers.find(o=>o.merchant==='Amazon');
assert.equal(offerCost(amazon,'cash'),5999,'Restricted Rewards must not be deducted as cash');
assert.equal(offerCost(amazon,'rewards'),5939,'Rewards may be included only under the explicit value preference');
assert.equal(reviewLink('javascript:alert(1)').url,undefined,'Active-content URLs must be rejected');
assert.equal(reviewLink('https://name:password@example.com/a').url,undefined,'Credential-bearing links must be rejected');
assert.equal(reviewLink('https://www.sony.co.in/headphones/products/wh-ch720n').model,'sony');
assert.equal(reviewLink('https://www.youtube.com/watch?v=example').model,null,'An arbitrary review must require manual model choice');
for (const file of ['docs/DECISION_LOG.md', 'source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md']) assert.ok(fs.statSync(file).size>0);
const share=manifest.problem_words/(manifest.problem_words+manifest.solution_words);
assert.ok(share>=0.4 && share<=0.6,`Problem/solution balance out of bounds: ${share}`);
if (errors.length) throw new Error(errors.join('\n'));
console.log(`PASS: ${manifest.routes.length} routes; local links and anchors; unique landmarks; JavaScript syntax; reward distinction; safe link capture; public brief transcription; narrative balance ${Math.round(share*100)}/${Math.round((1-share)*100)}.`);

assert.ok(!fs.existsSync('dist/source-material/cashkaro_assignment.pdf'),'Attached PDF must not be republished');
assert.ok(!fs.existsSync('dist/transcripts/FINAL_SESSION_RECORD.md'),'Private execution record must not be republished');
