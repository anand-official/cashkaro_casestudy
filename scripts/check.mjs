import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {research} from '../assets/host-model.js';
import {PRODUCTS, checkRoute, createRoute} from '../assets/router-model.js';

const manifest=JSON.parse(fs.readFileSync('build-manifest.json','utf8'));
const errors=[];
for(const route of manifest.routes){
 const html=fs.readFileSync(path.join('dist',route),'utf8');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(ids.length!==new Set(ids).size)errors.push(`${route}: duplicate IDs`);
 if((html.match(/<h1[ >]/g)||[]).length!==1)errors.push(`${route}: expected one h1`);
 for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const link=match[1].replaceAll('&amp;','&');
  if(/^(https?:|mailto:|data:)/.test(link))continue;
  const [file,hash]=link.split('#');
  const target=file?path.normalize(path.join(path.dirname(route),file)):route;
  const full=path.join('dist',target);
  if(!fs.existsSync(full))errors.push(`${route}: missing public target ${target}`);
  else if(hash&&target.endsWith('.html')&&!fs.readFileSync(full,'utf8').includes(`id="${hash}"`))errors.push(`${route}: missing anchor ${link}`);
 }
}
for(const file of fs.readdirSync('assets').filter(f=>f.endsWith('.js')))execFileSync(process.execPath,['--check',`assets/${file}`]);
for(const match of fs.readFileSync('assets/ai.js','utf8').matchAll(/'((?:docs|transcripts|source-material)\/[^']+\.md)'/g))assert.ok(fs.existsSync(path.join('dist',match[1])),`Reader artifact absent from public build: ${match[1]}`);

// Fail closed where a wrong decision would mislead the shopper or misattribute a route.
for(const p of PRODUCTS){
 const base={productId:p.id,scenario:'cash',connected:true,consent:true};
 assert.equal(checkRoute(base).conditionalValue,p.price-1200);
 assert.equal(createRoute(base).activated,true);
 assert.equal(checkRoute({...base,scenario:'rewards'}).conditionalValue,null,'Rewards must never become a cash net price');
 assert.equal(checkRoute({...base,scenario:'small'}).amount,65);
 for(const scenario of ['unsupported','uncertain','stale','standdown','zero']){
  assert.equal(checkRoute({...base,scenario}).ok,false);
  assert.equal(createRoute({...base,scenario}).ok,false,'Route creation must revalidate');
 }
 for(const override of [{connected:false},{consent:false},{carted:true},{productId:'missing'},{scenario:'failure'}])assert.equal(createRoute({...base,...override}).ok,false);
}

// The host responds to shopper constraints; benefit configuration cannot buy a recommendation.
assert.equal(research({priority:'camera'}).recommended.id,'aster');
assert.equal(research({priority:'battery'}).recommended.id,'orion');
assert.equal(research({priority:'value'}).recommended.id,'luma');
assert.equal(research({budget:38000,priority:'camera'}).recommended.id,'orion');
assert.deepEqual(research({budget:35000,priority:'camera'}).options.map(p=>p.id),['luma']);
assert.equal(research({budget:0}).recommended,null);
for(const scenario of ['cash','small','rewards','zero','failure'])assert.equal(research({priority:'battery',scenario}).recommended.id,'orion');
assert.ok(fs.existsSync('dist/assets/host-model.js'),'Host module must be published');

assert.equal((fs.readFileSync('content/case.md','utf8').match(/<section class="case-section/g)||[]).length,15,'Core brief must have 15 sections');
assert.ok(fs.existsSync('dist/assets/walkthrough.js'),'Guided walkthrough must be published');
const share=manifest.problem_words/(manifest.problem_words+manifest.solution_words);
assert.ok(share>=.4&&share<=.6,`Unbalanced narrative: ${share}`);
assert.equal(manifest.product,'CashKaro Universal Shopping Skill');
const prohibited=['transcripts/FINAL_SESSION_RECORD.md','source-material/INSIDER_PM_WHATSAPP_RAW.txt','docs/INSIDER_PM_FEEDBACK_AND_STRATEGY_REVIEW.md','__qa.html','assets/catalog.js','assets/order-model.js'];
for(const file of prohibited)assert.ok(!fs.existsSync(path.join('dist',file)),`Not a public release input: ${file}`);
for(const file of fs.readdirSync('dist',{recursive:true}).filter(f=>/\.(md|html|txt|js|json)$/.test(f))){
 const text=fs.readFileSync(path.join('dist',file),'utf8');
 assert.ok(!/Anmol|Enactus/.test(text),`Personal stakeholder attribution remains in ${file}`);
}
if(errors.length)throw Error(errors.join('\n'));
console.log(`PASS: ${manifest.routes.length} public routes and anchors; reader artifacts; JS syntax; router consent, identity and eligibility boundaries; typed benefits; shopper constraints and recommendation independence; explicit publishing exclusions; narrative balance ${Math.round(share*100)}/${Math.round((1-share)*100)}.`);
