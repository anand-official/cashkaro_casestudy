const records=[
['Manifest','Session completeness ledger','Tier A/B/C status for every contributing session','transcripts/README.md'],
['ChatGPT','Earlier reasoning','Tier C · reconstruction with labelled redactions; not verbatim','transcripts/CHATGPT_PRIMARY_CONTEXT.md'],
['Build sessions','Execution record','Tier C · authored from mandates and commit history; not a verbatim export','transcripts/CLAUDE_CODE_BUILD_SESSIONS.md'],
['Qwen','Behavioural analysis','Public extract; fuller private copy received, completeness unverified','source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md'],
['DeepSeek','Product review','Public review; private prompt/response pair received, completeness unverified','source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md'],
['External feedback','Commercial critique','Human stakeholder input, not an AI session; role unverified','source-material/EXTERNAL_PRODUCT_FEEDBACK.md'],
['Decision log','Product decisions','Tier C · AI-assisted authored log','docs/DECISION_LOG.md'],
['Review response','Response to critique','Tier C · authored implementation response','docs/REVIEW_RESPONSE.md'],
['Export guide','Outstanding raw exports','How each missing session is to be exported','transcripts/raw/README.md']
];
const tabs=document.querySelector('#transcript-tabs'),body=document.querySelector('#record-body'),search=document.querySelector('#record-search'),status=document.querySelector('#record-result');let raw='',request=0;
for(const[i,r]of records.entries()){const b=document.createElement('button');b.type='button';b.textContent=r[0];b.setAttribute('aria-pressed',String(i===0));b.addEventListener('click',()=>select(i));tabs.append(b);}
function render(){const query=search.value.trim();body.replaceChildren();if(!query){body.textContent=raw;status.textContent='Showing the complete available artifact.';return;}let pos=0,count=0,index;const low=raw.toLowerCase(),q=query.toLowerCase();while((index=low.indexOf(q,pos))!==-1){body.append(document.createTextNode(raw.slice(pos,index)));const mark=document.createElement('mark');mark.textContent=raw.slice(index,index+query.length);body.append(mark);pos=index+query.length;count++;}body.append(document.createTextNode(raw.slice(pos)));status.textContent=`${count} ${count===1?'match':'matches'} in this record.`;body.querySelector('mark')?.scrollIntoView({block:'nearest'});}
async function select(i){const seq=++request,r=records[i];[...tabs.children].forEach((b,j)=>b.setAttribute('aria-pressed',String(i===j)));document.querySelector('#record-title').textContent=r[1];document.querySelector('#record-kind').textContent=r[2];document.querySelector('#record-download').href=r[3];body.textContent='Loading source record…';status.textContent='';try{const res=await fetch(r[3]);if(!res.ok)throw Error('Unavailable');const text=await res.text();if(seq!==request)return;raw=text;render();}catch{if(seq!==request)return;raw='This record could not be loaded. Use “Open source file” above, or reload this page.';body.textContent=raw;status.textContent='Source load failed.';}}
search.addEventListener('input',render);select(0);
