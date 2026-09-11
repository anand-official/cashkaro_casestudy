import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {TODAY, dateValue, purchaseError, claimWindow, reminderDecision, walletView} from '../assets/order-model.js';

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

// These boundaries affect the customer's next action; test them independently of the UI.
const base={visitDate:'2026-08-14',purchaseDate:'2026-08-14',bought:true,state:'visit',policy:'approved',today:TODAY,optedIn:true,alreadyNotified:false,draft:false};
assert.ok(Number.isNaN(dateValue('2026-02-30')),'Reject normalized invalid calendar dates');
assert.ok(purchaseError('2026-09-12','2026-09-04'),'Future purchase dates must be rejected');
assert.ok(purchaseError('2026-09-03','2026-09-04'),'An order before this visit cannot be silently attributed to it');
assert.equal(purchaseError('2026-09-04','2026-09-04'),'');
assert.equal(claimWindow({...base,bought:false}).kind,'unknown','No purchase may be inferred from a click');
assert.equal(claimWindow({...base,policy:'conflict'}).closes,undefined,'A policy conflict must not generate a deadline');
assert.equal(claimWindow({...base,policy:'stale'}).kind,'conflict','Unverified policy must fail closed');
assert.equal(claimWindow({...base,purchaseDate:'2026-09-11',visitDate:'2026-09-11'}).kind,'early');
assert.equal(claimWindow({...base,today:'2026-09-13'}).kind,'open','Illustrative policy includes the deadline date');
assert.equal(claimWindow({...base,today:'2026-09-14'}).kind,'expired');
assert.equal(claimWindow({...base,purchaseDate:'2026-02-30'}).kind,'invalid');
assert.equal(reminderDecision(base).eligible,true,'A reported order inside a reviewed near-deadline window can qualify');
for(const override of [{bought:false},{state:'no-order'},{state:'tracked'},{state:'confirmed'},{state:'cancelled'},{optedIn:false},{alreadyNotified:true},{draft:true},{policy:'conflict'},{today:'2026-08-16'},{today:'2026-09-14'}])assert.equal(reminderDecision({...base,...override}).eligible,false,`Suppression failed: ${JSON.stringify(override)}`);
const wallet=walletView(180,80,90);
assert.equal(wallet.bankAvailable,false,'Gift-card Rewards and pending money cannot unlock bank redemption');
assert.equal(wallet.bankGap,70);
assert.equal(wallet.giftAvailable,true,'Confirmed cash and Rewards may combine for gift-card redemption');
assert.equal(walletView(250,0).bankAvailable,true);
assert.equal(walletView(249,0,500).giftAvailable,false,'Pending value cannot cross either confirmed-balance threshold');

const share=manifest.problem_words/(manifest.problem_words+manifest.solution_words);
assert.ok(share>=.4&&share<=.6,`Unbalanced narrative: ${share}`);
assert.equal(manifest.product,'CashKaro Order Check');
const prohibited=['source-material/cashkaro_assignment.pdf','transcripts/FINAL_SESSION_RECORD.md','source-material/INSIDER_PM_WHATSAPP_RAW.txt','docs/INSIDER_PM_FEEDBACK_AND_STRATEGY_REVIEW.md','__qa.html','assets/catalog.js'];
for(const file of prohibited)assert.ok(!fs.existsSync(path.join('dist',file)),`Not a public release input: ${file}`);
for(const file of fs.readdirSync('dist',{recursive:true}).filter(f=>/\.(md|html|txt|js|json)$/.test(f))){
 const text=fs.readFileSync(path.join('dist',file),'utf8');
 assert.ok(!/Anmol|Enactus/.test(text),`Personal stakeholder attribution remains in ${file}`);
}
if(errors.length)throw Error(errors.join('\n'));
console.log(`PASS: ${manifest.routes.length} public routes and anchors; reader artifacts; JS syntax; date/claim/reminder suppression boundaries; redemption distinction; explicit publishing exclusions; narrative balance ${Math.round(share*100)}/${Math.round((1-share)*100)}.`);
