import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const root = process.cwd();
const pages = [
  ['index.html', 'case', 'Earn a place in the decision.', 'CashKaro Shortlist', 'A product decision for making CashKaro useful before the retailer is chosen.'],
  ['research.html', 'research', 'Evidence that changed the decision.', 'Research & decisions', 'Primary sources, inherited evidence, explicit assumptions and the path from overlay to Shortlist.'],
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
 return `<footer class="site-footer"><div><a class="brand" href="index.html">CashKaro Shortlist</a><p>Ujjawal Anand · APM product assignment · September 2026</p><p class="note">Independent assignment concept. Not an official CashKaro product. Reference prices are snapshots, not live offers.</p></div><div class="footer-links"><a href="experiment.html">Experiment & feasibility</a><a href="compliance.html">Assignment audit</a><a href="source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md">Assignment text</a><a href="https://github.com/anand-official/cashkaro_casestudy" target="_blank" rel="noopener noreferrer">GitHub ↗</a><button class="text-button print-button">Print this page</button></div></footer><script src="assets/site.js" defer></script>`;
}
const labels = {case:['The problem','What the evidence says','The missing denominator','The first segment','Alternatives','The decision','The experience','MVP scope','Feasibility','Measurement','Launch','Scale or stop']};
for (const [filename,slug,title,kicker,description] of pages) {
 let raw=fs.readFileSync(`content/${slug}.md`,'utf8');
 let html=marked.parse(raw);
 html=html.replace(/<table>/g,'<div class="table-scroll" tabindex="0" role="region" aria-label="Comparison table"><table>').replace(/<\/table>/g,'</table></div>');
 const ids=[...raw.matchAll(/<section[^>]+id="([^"]+)"/g)].map(x=>x[1]);
 const headings=[...raw.matchAll(/^## (.+)$/gm)].map(x=>x[1]);
 const toc=ids.map((id,i)=>`<a href="#${id}"><span>${String(i+1).padStart(2,'0')}</span>${esc(labels[slug]?.[i]||headings[i]||id)}</a>`).join('');
 const hero=slug==='case'?`<section class="hero"><div class="hero-copy"><p class="eyebrow">Product strategy · Existing-user habit</p><h1>Earn a place<br>in the <em>decision.</em></h1><p class="hero-lede">A research shortlist that helps a shopper choose—before a retailer has already won.</p><div class="hero-actions"><a href="prototype.html" class="button primary">Try Shortlist <span aria-hidden="true">↗</span></a><a href="#problem" class="text-link">Read the product decision ↓</a></div><p class="byline">Ujjawal Anand <span>September 2026</span></p></div><aside class="decision-card"><p class="eyebrow">The decision in 30 seconds</p><h2>Move upstream.<br> Start narrow.</h2><dl><div><dt>Reject</dt><dd>Retailer-app interception as the lead</dd></div><div><dt>Build</dt><dd>A persistent research shortlist</dd></div><div><dt>First test</dt><dd>Existing users choosing headphones</dd></div><div><dt>Prove</dt><dd>More tracked orders across the fixed cohort</dd></div></dl><a href="#decision">Why this wins the first experiment <span aria-hidden="true">↘</span></a></aside></section><div class="north-star"><span>The brief's north star</span><strong>Tracked orders / existing user / quarter</strong><span>Fixed cohort</span></div><div class="part-labels"><a href="#problem"><span>01—06</span> Understand the problem</a><a href="#experience"><span>07—12</span> Make the product decision</a></div>`:`<section class="page-hero"><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${description}</p></section>`;
 const scripts=slug==='ai'?'<script src="assets/ai.js" defer></script>':'';
 fs.writeFileSync(filename,head(title,description)+`<body>${nav(filename)}<main id="main" class="page-shell">${hero}<div class="reading-layout"><aside class="contents"><p>On this page</p><nav aria-label="Page contents">${toc}</nav></aside><article class="case-article">${html}</article></div></main>${footer()}${scripts}</body></html>`);
}

const protoTemplate=fs.readFileSync('content/prototype.html','utf8');
fs.writeFileSync('prototype.html',head('CashKaro Shortlist — interactive prototype','Save research, compare sourced headphone choices and explore an honest merchant handoff.','<link rel="stylesheet" href="assets/prototype.css">')+`<body class="prototype-page">${nav('prototype.html')}${protoTemplate}${footer()}<script type="module" src="assets/prototype.js"></script></body></html>`);
fs.mkdirSync('docs',{recursive:true});
fs.writeFileSync('docs/FINAL_SUBMISSION.md','# CashKaro Shortlist — final product decision\n\nAuthor: Ujjawal Anand. September 2026.\n\nCanonical content: `content/case.md`. Rendered at `index.html`.\n\n'+fs.readFileSync('content/case.md','utf8'));
fs.writeFileSync('docs/ASSIGNMENT_COMPLIANCE_AUDIT.md',fs.readFileSync('content/compliance.md','utf8'));
fs.writeFileSync('docs/EXPERIMENT_AND_TECHNICAL_PLAN.md',fs.readFileSync('content/experiment.md','utf8'));
fs.writeFileSync('docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md',fs.readFileSync('content/research.md','utf8'));
const raw=fs.readFileSync('content/case.md','utf8');
const words=type=>[...raw.matchAll(new RegExp(`<section[^>]*data-part="${type}"[^>]*>([\\s\\S]*?)<\\/section>`,'g'))].map(x=>x[1].replace(/<[^>]+>/g,' ').replace(/\([^)]*https?:[^)]*\)/g,'')).join(' ').split(/\s+/).filter(Boolean).length;
const manifest={version:'2.0.0',product:'CashKaro Shortlist',evidence_date:'2026-09-11',problem_words:words('problem'),solution_words:words('solution'),transcript_status:'partial — raw exports required',routes:[...pages.map(x=>x[0]),'prototype.html']};
fs.writeFileSync('build-manifest.json',JSON.stringify(manifest,null,2)+'\n');
fs.rmSync('dist',{recursive:true,force:true});
fs.mkdirSync('dist',{recursive:true});
for(const f of ['assets','docs','transcripts','source-material',...manifest.routes,'build-manifest.json','404.html']) if(fs.existsSync(f)) fs.cpSync(f,path.join('dist',f),{recursive:true,filter:src=>!['cashkaro_assignment.pdf','FINAL_SESSION_RECORD.md'].includes(path.basename(src))});
console.log(JSON.stringify(manifest,null,2));
