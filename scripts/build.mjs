import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const root = process.cwd();
const pages = [
  ['index.html', 'case', 'Be there when the decision becomes a purchase.', 'CashKaro Connector', 'A connectable commerce capability that any assistant can call at an external purchase decision.'],
  ['research.html', 'research', 'Evidence that changed the decision.', 'Research & decisions', 'Primary sources, explicit unknowns and the reasoning behind a distributed commerce capability.'],
  ['experiment.html', 'experiment', 'Earn the right to scale.', 'Experiment & feasibility', 'A fixed-cohort causal protocol, data ownership and realistic implementation gates.'],
  ['ai-transcript.html', 'ai', 'The answer changed seven times.', 'AI work record', 'What each model was asked, what was overruled, and an accurate statement of what the record still lacks.'],
  ['compliance.html', 'compliance', 'The brief, checked line by line.', 'Assignment audit', 'Coverage of the original CashKaro PDF and remaining candidate requirements.'],
];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function head(title, description, extra = '') {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#263a91"><title>${esc(title)} · Ujjawal Anand / CashKaro APM</title><meta name="description" content="${esc(description)}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><link rel="icon" type="image/svg+xml" href="assets/favicon.svg"><link rel="stylesheet" href="assets/styles.css">${extra}</head>`;
}
export function nav(active) {
  return `<a href="#main" class="skip-link">Skip to content</a><header class="site-header"><div class="header-inner"><a class="brand" href="index.html" aria-label="CashKaro case study home"><img class="brand-logo" src="assets/cashkaro-logo.svg" alt="CashKaro" width="100" height="25"><span class="brand-text">Connector <small>APM case · Ujjawal Anand</small></span></a><button class="menu-button" aria-expanded="false" aria-controls="main-nav">Menu</button><nav id="main-nav" aria-label="Main navigation">${[['index.html','The case'],['prototype.html','Prototype'],['research.html','Evidence'],['ai-transcript.html','AI trail']].map(([u,l])=>`<a href="${u}"${active===u?' aria-current="page"':''}>${l}</a>`).join('')}<a class="nav-audit" href="compliance.html"${active==='compliance.html'?' aria-current="page"':''}>Brief audit <span aria-hidden="true">↗</span></a></nav></div></header>`;
}
export function footer() {
 return `<footer class="site-footer"><div><a class="brand" href="index.html"><img class="brand-logo" src="assets/cashkaro-logo.svg" alt="CashKaro" width="100" height="25"><span class="brand-text">Connector</span></a><p>Ujjawal Anand · APM product assignment · September 2026</p><p class="note">Independent assignment concept. Not an official CashKaro product. The interactive prototype uses fictional products, benefits and simulated platform integrations.</p></div><div class="footer-links"><a href="output/pdf/CashKaro_Visual_Brief.pdf">Download visual brief (PDF)</a><a href="experiment.html">Experiment & feasibility</a><a href="compliance.html">Assignment audit</a><a href="source-material/cashkaro_assignment.pdf">Original assignment (PDF)</a><a href="https://github.com/anand-official/cashkaro_casestudy" target="_blank" rel="noopener noreferrer">GitHub ↗</a><button class="text-button print-button">Print this page</button></div></footer><script src="assets/site.js" defer></script>`;
}
const labels = {ai:['How to read this','The roster','Seven pivots','What I rejected','Honest attribution','Completeness ledger','Outstanding'],case:['The mandate','Problem selection','Purchase journey','Evidence quality','Why now','Why CashKaro','Segment and reach','Direction selection','Customer experience','Product ownership','Scope and trust','Commercial assessment','Causal experiment','Validation and rollout','Decision criteria']};
for (const [filename,slug,title,kicker,description] of pages) {
 let raw=fs.readFileSync(`content/${slug}.md`,'utf8');
 let html=marked.parse(raw);
 html=html.replace(/<table>/g,'<div class="table-scroll" tabindex="0" role="region" aria-label="Comparison table"><table>').replace(/<\/table>/g,'</table></div>');
 const ids=[...raw.matchAll(/<section[^>]+id="([^"]+)"/g)].map(x=>x[1]);
 const headings=[...raw.matchAll(/^## (.+)$/gm)].map(x=>x[1]);
 const toc=ids.map((id,i)=>`<a href="#${id}"><span>${String(i+1).padStart(2,'0')}</span>${esc(labels[slug]?.[i]||headings[i]||id)}</a>`).join('');
 const hero=`<section class="page-hero"><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${description}</p></section>`;
 const scripts=slug==='ai'?'<script src="assets/ai.js" defer></script>':'';
 const extraCss=slug==='ai'?'<link rel="stylesheet" href="assets/ai.css">':'';
 if(slug==='case')fs.writeFileSync(filename,head(title,description,'<link rel="stylesheet" href="assets/brief.css">')+`<body class="brief-page">${nav(filename)}<main id="main" class="brief-shell"><div class="brief-intro"><strong>15-page visual brief</strong><span>01–07 Problem · 08 Decision · 09–15 Solution</span><a href="output/pdf/CashKaro_Visual_Brief.pdf">Download 15-page PDF ↓</a><a href="source-material/cashkaro_assignment.pdf">Original brief ↗</a></div><div class="brief-layout"><aside class="contents"><p>The core case</p><nav aria-label="Page contents">${toc}</nav></aside><article class="case-article">${html}</article></div></main>${footer()}<script type="module" src="assets/walkthrough.js"></script></body></html>`);
 else fs.writeFileSync(filename,head(title,description,extraCss)+`<body>${nav(filename)}<main id="main" class="page-shell">${hero}<div class="reading-layout"><aside class="contents"><p>On this page</p><nav aria-label="Page contents">${toc}</nav></aside><article class="case-article">${html}</article></div></main>${footer()}${scripts}</body></html>`);
}

const protoTemplate=fs.readFileSync('content/prototype.html','utf8');
fs.writeFileSync('prototype.html',head('CashKaro Connector — interactive prototype','An illustrative AI purchase decision, benefit check and approved-route simulation.','<link rel="stylesheet" href="assets/prototype.css">')+`<body class="prototype-page">${protoTemplate}<script src="assets/site.js" defer></script><script type="module" src="assets/prototype.js"></script><script type="module" src="assets/walkthrough.js"></script></body></html>`);
fs.mkdirSync('docs',{recursive:true});
const mirror = raw => raw.replace(/\]\((?!https?:|#|mailto:)([^)]+)\)/g, (_,url) => `](../${url})`).replace(/href="(?!https?:|#)([^"]+)"/g, (_,url) => `href="../${url}"`);

fs.writeFileSync('docs/FINAL_SUBMISSION.md','# CashKaro Connector — final strategic proposal\n\nAuthor: Ujjawal Anand. September 2026.\n\nCanonical content: `content/case.md`. Rendered at `index.html`.\n\n'+mirror(fs.readFileSync('content/case.md','utf8')));
fs.writeFileSync('docs/ASSIGNMENT_COMPLIANCE_AUDIT.md',mirror(fs.readFileSync('content/compliance.md','utf8')));
fs.writeFileSync('docs/EXPERIMENT_AND_TECHNICAL_PLAN.md',mirror(fs.readFileSync('content/experiment.md','utf8')));
fs.writeFileSync('docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md',mirror(fs.readFileSync('content/research.md','utf8')));
const raw=fs.readFileSync('content/case.md','utf8');
const words=type=>[...raw.matchAll(new RegExp(`<section[^>]*data-part="${type}"[^>]*>([\\s\\S]*?)<\\/section>`,'g'))].map(x=>x[1].replace(/<[^>]+>/g,' ').replace(/\([^)]*https?:[^)]*\)/g,'')).join(' ').split(/\s+/).filter(Boolean).length;
const manifest={version:'4.4.0',product:'CashKaro Connector',evidence_date:'2026-09-13',core_sections:15,pdf_pages:15,pdf:'output/pdf/CashKaro_Visual_Brief.pdf',problem_words:words('problem')+Math.ceil(words('bridge')/2),solution_words:words('solution')+Math.floor(words('bridge')/2),decision_bridge_words:words('bridge'),balance_method:'Seven problem sections, seven solution sections; decision bridge allocated equally',transcript_status:'partial: four contributing sessions require raw export',routes:[...pages.map(x=>x[0]),'prototype.html']};
fs.writeFileSync('build-manifest.json',JSON.stringify(manifest,null,2)+'\n');
fs.rmSync('dist',{recursive:true,force:true});
fs.mkdirSync('dist',{recursive:true});
const publicFiles = [
 'assets/styles.css','assets/brief.css','assets/ai.css','assets/walkthrough.js','assets/walkthrough-css.js','assets/device-chrome.js','assets/device-css.js','assets/hosts.js','assets/assistant-client.js','assets/site.js','assets/ai.js','assets/prototype.css','assets/prototype.js','assets/router-model.js','assets/host-model.js','assets/cashkaro-logo.svg','assets/favicon.svg','assets/phones/aster.svg','assets/phones/orion.svg','assets/phones/luma.svg',
 'docs/FINAL_SUBMISSION.md','docs/ASSIGNMENT_COMPLIANCE_AUDIT.md','docs/EXPERIMENT_AND_TECHNICAL_PLAN.md','docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md','docs/DECISION_LOG.md','docs/REVIEW_RESPONSE.md','docs/RESEARCH_WORKSHEET.md','docs/QA_REPORT.md','docs/RELEASE.md','docs/SKEPTICAL_REVIEW.md','docs/INTERVIEW_DEFENSE.md',
 'transcripts/README.md','transcripts/CHATGPT_PRIMARY_CONTEXT.md','transcripts/CLAUDE_CODE_BUILD_SESSIONS.md','transcripts/raw/README.md',
 'output/pdf/CashKaro_Visual_Brief.pdf','source-material/cashkaro_assignment.pdf','source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md','source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md','source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md','source-material/EXTERNAL_PRODUCT_FEEDBACK.md',
 ...manifest.routes,'build-manifest.json','404.html'
];
for(const f of publicFiles) { if(!fs.existsSync(f)) throw new Error(`Missing public release input: ${f}`); fs.mkdirSync(path.dirname(path.join('dist',f)),{recursive:true}); fs.copyFileSync(f,path.join('dist',f)); }
fs.writeFileSync('dist/release-files.json',JSON.stringify(publicFiles,null,2)+'\n');
console.log(JSON.stringify(manifest,null,2));
