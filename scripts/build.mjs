import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const root = process.cwd();
const pages = [
  ['index.html', 'case', 'Make the next purchase easier to trust.', 'CashKaro Order Check', 'A product decision about order clarity, recovery and existing-user repeat behaviour.'],
  ['research.html', 'research', 'Evidence that changed the decision.', 'Research & decisions', 'Primary sources, conflicting rules and the path from overlay to Shortlist to Order Check.'],
  ['experiment.html', 'experiment', 'Prove the order. Then prove the value.', 'Experiment & feasibility', 'A fixed-cohort causal protocol, data ownership and realistic implementation gates.'],
  ['ai-transcript.html', 'ai', 'A visible trail of decisions.', 'AI work record', 'Available source artifacts and an honest statement of missing raw transcripts.'],
  ['compliance.html', 'compliance', 'The brief, checked line by line.', 'Assignment audit', 'Coverage of the original CashKaro PDF and remaining candidate requirements.'],
];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function head(title, description, extra = '') {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#263a91"><title>${esc(title)} · Ujjawal Anand / CashKaro APM</title><meta name="description" content="${esc(description)}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><link rel="icon" type="image/svg+xml" href="assets/favicon.svg"><link rel="stylesheet" href="assets/styles.css">${extra}</head>`;
}
export function nav(active) {
  return `<a href="#main" class="skip-link">Skip to content</a><header class="site-header"><div class="header-inner"><a class="brand" href="index.html" aria-label="CashKaro case study home"><span class="brand-mark" aria-hidden="true">C<span>K</span></span><span>CashKaro <small>APM / Ujjawal Anand</small></span></a><button class="menu-button" aria-expanded="false" aria-controls="main-nav">Menu</button><nav id="main-nav" aria-label="Main navigation">${[['index.html','The case'],['prototype.html','Prototype'],['research.html','Evidence'],['ai-transcript.html','AI trail']].map(([u,l])=>`<a href="${u}"${active===u?' aria-current="page"':''}>${l}</a>`).join('')}<a class="nav-audit" href="compliance.html"${active==='compliance.html'?' aria-current="page"':''}>Brief audit <span aria-hidden="true">↗</span></a></nav></div></header>`;
}
export function footer() {
 return `<footer class="site-footer"><div><a class="brand" href="index.html">CashKaro Order Check</a><p>Ujjawal Anand · APM product assignment · September 2026</p><p class="note">Independent assignment concept. Not an official CashKaro product. The interactive prototype uses fictional account data and simulated events.</p></div><div class="footer-links"><a href="experiment.html">Experiment & feasibility</a><a href="compliance.html">Assignment audit</a><a href="source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md">Assignment text</a><a href="https://github.com/anand-official/cashkaro_casestudy" target="_blank" rel="noopener noreferrer">GitHub ↗</a><button class="text-button print-button">Print this page</button></div></footer><script src="assets/site.js" defer></script>`;
}
const labels = {case:['The problem','What the evidence says','The missing denominator','The first segment','Alternatives','The decision','The experience','MVP scope','Feasibility','Measurement','Launch','Scale or stop']};
for (const [filename,slug,title,kicker,description] of pages) {
 let raw=fs.readFileSync(`content/${slug}.md`,'utf8');
 let html=marked.parse(raw);
 html=html.replace(/<table>/g,'<div class="table-scroll" tabindex="0" role="region" aria-label="Comparison table"><table>').replace(/<\/table>/g,'</table></div>');
 const ids=[...raw.matchAll(/<section[^>]+id="([^"]+)"/g)].map(x=>x[1]);
 const headings=[...raw.matchAll(/^## (.+)$/gm)].map(x=>x[1]);
 const toc=ids.map((id,i)=>`<a href="#${id}"><span>${String(i+1).padStart(2,'0')}</span>${esc(labels[slug]?.[i]||headings[i]||id)}</a>`).join('');
 const hero=slug==='case'?`<section class="hero"><div class="hero-copy"><p class="eyebrow">CashKaro Order Check · Existing-user retention</p><h1>Make the next<br>purchase easier<br>to <em>trust.</em></h1><p class="hero-lede">Connect a retailer visit, its reward status and the next useful action—then test whether people return.</p><div class="hero-actions"><a href="prototype.html" class="button primary">Explore Order Check <span aria-hidden="true">↗</span></a><a href="#problem" class="text-link">Read the decision ↓</a></div><p class="byline">Ujjawal Anand <span>September 2026</span></p></div><aside class="decision-card"><p class="eyebrow">The decision in 30 seconds</p><h2>Clarity now.<br> Earn the next visit.</h2><dl><div><dt>Change</dt><dd>Improve the existing earnings and recovery journey</dd></div><div><dt>First test</dt><dd>Current clickers; two retailer paths after policy audit</dd></div><div><dt>Trade-off</dt><dd>Reach is limited; repeat behaviour is unproven</dd></div><div><dt>Prove</dt><dd>More valid tracked orders across the fixed cohort</dd></div></dl><a href="docs/REVIEW_RESPONSE.md">What changed after independent review <span aria-hidden="true">↘</span></a></aside></section><div class="north-star"><span>The brief's north star</span><strong>Tracked orders / existing user / quarter</strong><span>Fixed cohort</span></div><p class="submission-status"><strong>Submission status:</strong> case and prototype revised; complete raw AI interactions still required. <a href="compliance.html">Read the audit ↗</a></p><div class="part-labels"><a href="#problem"><span>01—06</span> Understand the problem</a><a href="#experience"><span>07—12</span> Make the product decision</a></div>`:`<section class="page-hero"><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${description}</p></section>`;
 const scripts=slug==='ai'?'<script src="assets/ai.js" defer></script>':'';
 fs.writeFileSync(filename,head(title,description)+`<body>${nav(filename)}<main id="main" class="page-shell">${hero}<div class="reading-layout"><aside class="contents"><p>On this page</p><nav aria-label="Page contents">${toc}</nav></aside><article class="case-article">${html}</article></div></main>${footer()}${scripts}</body></html>`);
}

const protoTemplate=fs.readFileSync('content/prototype.html','utf8');
fs.writeFileSync('prototype.html',head('CashKaro Order Check — interactive prototype','A visit receipt, an explicit purchase check and a clear next step for cashback or Rewards.','<link rel="stylesheet" href="assets/prototype.css">')+`<body class="prototype-page">${nav('prototype.html')}${protoTemplate}${footer()}<script type="module" src="assets/prototype.js"></script></body></html>`);
fs.mkdirSync('docs',{recursive:true});
const mirror = raw => raw.replace(/\]\((?!https?:|#|mailto:)([^)]+)\)/g, (_,url) => `](../${url})`).replace(/href="(?!https?:|#)([^"]+)"/g, (_,url) => `href="../${url}"`);

fs.writeFileSync('docs/FINAL_SUBMISSION.md','# CashKaro Order Check — reviewed product decision\n\nAuthor: Ujjawal Anand. September 2026.\n\nCanonical content: `content/case.md`. Rendered at `index.html`.\n\n'+mirror(fs.readFileSync('content/case.md','utf8')));
fs.writeFileSync('docs/ASSIGNMENT_COMPLIANCE_AUDIT.md',mirror(fs.readFileSync('content/compliance.md','utf8')));
fs.writeFileSync('docs/EXPERIMENT_AND_TECHNICAL_PLAN.md',mirror(fs.readFileSync('content/experiment.md','utf8')));
fs.writeFileSync('docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md',mirror(fs.readFileSync('content/research.md','utf8')));
const raw=fs.readFileSync('content/case.md','utf8');
const words=type=>[...raw.matchAll(new RegExp(`<section[^>]*data-part="${type}"[^>]*>([\\s\\S]*?)<\\/section>`,'g'))].map(x=>x[1].replace(/<[^>]+>/g,' ').replace(/\([^)]*https?:[^)]*\)/g,'')).join(' ').split(/\s+/).filter(Boolean).length;
const manifest={version:'3.0.0',product:'CashKaro Order Check',evidence_date:'2026-09-11',problem_words:words('problem'),solution_words:words('solution'),transcript_status:'partial — raw exports required',routes:[...pages.map(x=>x[0]),'prototype.html']};
fs.writeFileSync('build-manifest.json',JSON.stringify(manifest,null,2)+'\n');
fs.rmSync('dist',{recursive:true,force:true});
fs.mkdirSync('dist',{recursive:true});
const publicFiles = [
 'assets/styles.css','assets/site.js','assets/ai.js','assets/prototype.css','assets/prototype.js','assets/order-model.js','assets/favicon.svg',
 'docs/FINAL_SUBMISSION.md','docs/ASSIGNMENT_COMPLIANCE_AUDIT.md','docs/EXPERIMENT_AND_TECHNICAL_PLAN.md','docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md','docs/DECISION_LOG.md','docs/REVIEW_RESPONSE.md','docs/RESEARCH_WORKSHEET.md','docs/QA_REPORT.md','docs/RELEASE.md',
 'transcripts/README.md','transcripts/CHATGPT_PRIMARY_CONTEXT.md',
 'source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md','source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md','source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md','source-material/EXTERNAL_PRODUCT_FEEDBACK.md',
 ...manifest.routes,'build-manifest.json','404.html'
];
for(const f of publicFiles) { if(!fs.existsSync(f)) throw new Error(`Missing public release input: ${f}`); fs.mkdirSync(path.dirname(path.join('dist',f)),{recursive:true}); fs.copyFileSync(f,path.join('dist',f)); }
fs.writeFileSync('dist/release-files.json',JSON.stringify(publicFiles,null,2)+'\n');
console.log(JSON.stringify(manifest,null,2));
