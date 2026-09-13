import {PRODUCTS,SCENARIOS,money,checkRoute,createRoute} from './router-model.js';
const el=id=>document.getElementById(id),box=el('conversation');
let chosen='aster',step='research',connected=false,accepted=false,carted=false,busy=false,revision=0,route=null,checked=null;
const surface=()=>el('surface').value,scenario=()=>el('scenario').value;
const product=()=>PRODUCTS.find(p=>p.id===chosen);
const say=(role,html)=>`<div class="message ${role}"><span class="speaker">${role==='user'?'You':'Assistant'}</span><div>${html}</div></div>`;
const btn=(action,label,cls='primary')=>`<button class="button ${cls}" data-action="${action}">${label}</button>`;
const art=p=>`<img class="phone-art ${p.color}" src="assets/phones/${p.id}.svg" alt="" width="320" height="250">`;
const identity=label=>`<div class="skill-heading"><b aria-hidden="true">C<span>K</span></b><div>CashKaro<small>${label}</small></div></div>`;
const pathView=(ready=false)=>`<div class="handoff-line ${ready?'complete':'working'}" aria-label="Route from your choice through CashKaro to retailer"><span><i aria-hidden="true">✓</i>Your choice</span><b aria-hidden="true">→</b><span><i aria-hidden="true">${ready?'✓':'·'}</i>CashKaro</span><b aria-hidden="true">→</b><span><i aria-hidden="true">${ready?'✓':'·'}</i>Retailer</span></div>`;
function focusStage(){if(!el('review-sheet').open)box.querySelector('[data-stage-heading]')?.focus();el('demo-status').textContent=box.querySelector('[data-stage-heading]')?.textContent||'Journey reset';}
function render(){
 const p=product(),s=SCENARIOS[scenario()],share=surface()==='Share-to-CashKaro';
 el('host-label').textContent=share?'Neutral interface · Share-to-CashKaro concept':`Neutral interface · ${surface()} adapter concept`;
 el('platform-note').textContent=share?'An explicit share is the lower-control-risk second surface. It still requires the shopper to remember CashKaro.':el('invocation').value==='contextual'?'Contextual placement is controlled by the host. This is the intended experience, not an approved integration.':'Explicit invocation is easier to demonstrate, but preserves recall friction. It is not equivalent to contextual surfacing.';
 el('invocation').disabled=share;el('disconnect').hidden=!connected;
 let html=step==='research'?say('user','<p>I need a phone around ₹40k.<br>Camera matters most, battery second.</p>'):'';
 if(step==='research'){
 html+=say('assistant','<p>I’d choose <strong>Aster 9</strong> for the cameras. Here’s how it compares with two alternatives within your budget.</p>');
 html+='<p class="fixture-label">Three fictional options · chosen for your priorities</p><div class="product-grid">'+PRODUCTS.map(x=>`<article class="product-option">${art(x)}<p class="product-trait">${x.trait}</p><h2>${x.name}</h2><p class="variant">${x.variant}</p><p class="product-price">${money(x.price)}</p><p class="product-detail">${x.id==='aster'?'Versatile cameras · All-day battery':x.id==='orion'?'Longer battery · Simpler cameras':'Everyday photos · Lighter build'}</p><button class="button ${x.id==='aster'?'primary':'secondary'}" data-product="${x.id}" aria-label="This is the one: ${x.name}">This is the one</button></article>`).join('')+'</div><p class="fixture-label">Prices and specifications are invented for this interaction. Not shopping advice.</p>';
 }else{
 html+=say('user',`<p>This is the one. I'll get the ${p.name} from ${s.merchant}.</p>`)+say('assistant',`<p>Your choice is set. Here’s the exact purchase.</p>`);
 html+=`<div class="selected-product">${art(p)}<div><b>${p.name}</b><span>${p.variant}</span><small>${s.merchant}</small></div><strong>${money(p.price)}</strong></div>`;
 if(step==='offer'){
 const automatic=!share&&el('invocation').value==='contextual';
 html+=`<section class="skill-card">${identity('Shopping skill')}<p class="fixture-label">${automatic?'INTENDED HOST-SURFACED OFFER':'USER-INITIATED SECOND SURFACE'}</p><h2 tabindex="-1" data-stage-heading>${share?'Share this product with CashKaro':automatic?'Check this purchase with CashKaro?':'Ask CashKaro to check this purchase'}</h2><p>Keep your product choice. CashKaro checks whether this purchase can earn Cashback or Rewards.</p><p class="privacy-note">Share only this product, merchant and variant. Your full conversation is not needed.</p>${btn('check',share?'Share to CashKaro':automatic?'Check eligible benefit':'Use CashKaro')}${btn('direct','Continue without CashKaro','secondary')}</section>`;
 }else if(step==='connect'){
 html+=`<section class="skill-card">${identity('Shopping skill')}<h2 tabindex="-1" data-stage-heading>Connect CashKaro for this surface</h2><p>Your eligible purchase needs to be linked to your CashKaro account so the benefit can reach you.</p><ul><li>Allow benefit checks and routes for purchases you approve.</li><li>No payments, card details or unrelated chat history.</li><li>Disconnect at any time.</li></ul><p class="fixture-label">SIMULATED CONNECTION · NO CREDENTIALS COLLECTED</p>${btn('connect','Connect demo account')}${btn('direct','Continue without CashKaro','secondary')}</section>`;
 }else if(step==='checking'){
 html+=`<section class="skill-card checking">${identity('Checking your purchase')}<h2 tabindex="-1" data-stage-heading>Checking this exact purchase…</h2><div class="progress-line"></div><p class="check-progress">Merchant route <span>·</span> Product eligibility <span>·</span> Current benefit</p><p class="fixture-label">Simulated check</p></section>`;
 }else if(step==='benefit'){
 checked=checkRoute({productId:chosen,scenario:scenario()});
 if(!checked.ok)html+=failure(checked);
 else{
 const reward=checked.kind==='Rewards';
 html+=`<section class="skill-card">${identity('Connected · demo account')}<p class="fixture-label">ILLUSTRATIVE OFFER · NOT CURRENT RETAILER TERMS</p><h2 class="benefit-amount" tabindex="-1" data-stage-heading aria-label="${money(checked.amount)} estimated ${checked.kind}"><strong>${money(checked.amount)}</strong><span>estimated ${checked.kind}</span></h2><p class="benefit-context">on your ${money(p.price)} ${checked.merchant} purchase</p><div class="eligibility-marks"><span>✓ Exact product matched</span><span>✓ Eligible demo route</span></div><dl class="benefit-breakdown"><div><dt>Pay today at ${checked.merchant}</dt><dd>${money(checked.payToday)}</dd></div><div><dt>Potential ${checked.kind} later</dt><dd>${money(checked.amount)}</dd></div>${!reward?`<div><dt>Value if Cashback confirms</dt><dd>${money(checked.conditionalValue)}</dd></div>`:''}</dl><p class="benefit-note">${reward?'Rewards are restricted to eligible gift-card redemption. They are not bank cash or an instant discount.':'Cashback is conditional and paid later. You still pay the retailer the full amount shown above.'}</p>${scenario()==='small'?'<p class="small-benefit">This example is capped at ₹65. You may decide the extra step is not worthwhile.</p>':''}<details><summary>View eligibility and timing</summary><ul><li>Exact product and variant must match the reviewed policy.</li><li>Start before adding to cart or wishlist; follow merchant coupon and channel rules.</li><li>Exchanges, returns or exclusions can invalidate the benefit.</li><li>Illustrative tracking: within 72 hours; confirmation may take up to 90 days. Actual clocks must come from approved merchant policy.</li><li>Approval and these amounts are simulated. No payout is guaranteed.</li></ul></details><fieldset class="cart-check"><legend>Is this item already in your retailer cart or wishlist?</legend><label><input type="radio" name="cart" value="no" ${accepted&&!carted?'checked':''}> No, I have not added it yet</label><label><input type="radio" name="cart" value="yes" ${carted?'checked':''}> Yes, it is already there</label></fieldset>${carted?'<p class="inline-warning" role="alert">A fresh eligible journey is required. This demo cannot verify or repair your existing cart.</p>':''}<p class="privacy-note">Activating this route may credit the sale to CashKaro under the merchant's affiliate rules. CashKaro may receive a commission.</p><button class="button primary" data-action="activate" ${!accepted||carted?'disabled':''} aria-label="Continue with ${checked.kind}: estimated ${money(checked.amount)}">Continue with ${checked.kind} <span aria-hidden="true">→</span></button>${btn('direct','Continue without CashKaro','secondary')}</section>`;
 }
 }else if(step==='activating'){
 html+=`<section class="skill-card checking">${identity('Creating your route')}<h2 tabindex="-1" data-stage-heading>Getting your route ready…</h2>${pathView()}<p>Your product, your retailer, your consent.</p><p class="fixture-label">Simulated route creation</p></section>`;
 }else if(step==='error'){html+=failure(route);
 }else if(step==='ready'){
 html+=`<section class="skill-card success"><span class="success-icon" aria-hidden="true">✓</span><h2 tabindex="-1" data-stage-heading>Your CashKaro route is ready</h2><p>${SCENARIOS[scenario()].kind} is not earned yet. Tracking happens after the retailer reports the order.</p>${pathView(true)}<p class="fixture-label">DEMO ONLY · NO LIVE AFFILIATE LINK</p>${btn('retailer',`Continue to ${s.merchant} demo`)}${btn('restart','Start another purchase','secondary')}</section>`;
 }else if(step==='retailer'||step==='direct'){
 html+=`<section class="retailer-card"><div class="retailer-topline"><b>${s.merchant}</b><span>Retailer destination · demo</span></div><div class="retailer-product">${art(p)}<div><p class="fixture-label">YOUR SELECTED PRODUCT</p><h2 tabindex="-1" data-stage-heading>${s.merchant} · ${p.name}</h2><p>${p.variant}</p><strong class="retailer-price">${money(p.price)}</strong></div></div><p>${step==='direct'?'You continued without activating a CashKaro route.':'The chosen product and variant arrived through the simulated CashKaro route.'}</p><p>Checkout, current stock, delivery and returns belong to the retailer. No order has been placed.</p><div class="destination-status">${step==='direct'?'No CashKaro benefit claimed':'Route ready ≠ order tracked ≠ benefit confirmed'}</div>${btn('restart','Try another purchase','secondary')}</section>`;
 }
 }
 box.innerHTML=html;box.dataset.stage=step;el('end-architecture').hidden=!['retailer','direct'].includes(step);
 const stage=['research','offer','connect','checking'].includes(step)?0:step==='benefit'||step==='error'?1:step==='activating'||step==='ready'?2:3;
 [...el('route-trace').children].forEach((li,i)=>{li.classList.toggle('current',i===stage);li.classList.toggle('done',i<stage)});
}
function failure(result){return `<section class="skill-card failure">${identity('Purchase check')}<span class="failure-symbol" aria-hidden="true">↗</span><p class="fixture-label">NO CASHKARO ROUTE CREATED</p><h2 tabindex="-1" data-stage-heading>${result.reason}</h2><p>${result.detail||'Keep your product choice and continue without an unverified benefit.'}</p>${btn('direct','Continue without CashKaro','secondary')}${btn('restart','Start again','secondary')}</section>`;}
async function check(){step='checking';busy=true;render();focusStage();const rev=revision;await new Promise(r=>setTimeout(r,360));if(rev!==revision)return;busy=false;step='benefit';render();focusStage();}
function reset(){revision++;busy=false;chosen='aster';step='research';accepted=false;carted=false;route=null;checked=null;render();el('demo-status').textContent='Journey reset. Choose a product.';}
box.addEventListener('change',e=>{if(e.target.name==='cart'){accepted=true;carted=e.target.value==='yes';const value=e.target.value;render();box.querySelector(`input[name="cart"][value="${value}"]`).focus({preventScroll:true});}});
box.addEventListener('click',async e=>{
 const button=e.target.closest('button');if(!button||busy)return;
 if(button.dataset.product){chosen=button.dataset.product;step='offer';render();focusStage();return;}
 const action=button.dataset.action;
 if(action==='check'){if(!connected){step='connect';render();focusStage();}else await check();}
 if(action==='connect'){connected=true;await check();}
 if(action==='direct'){step='direct';render();focusStage();}
 if(action==='restart'){reset();box.querySelector('[data-product]')?.focus({preventScroll:true});}
 if(action==='activate'){
 if(!accepted||carted)return;busy=true;step='activating';render();focusStage();const rev=revision;await new Promise(r=>setTimeout(r,400));if(rev!==revision)return;
 route=createRoute({productId:chosen,scenario:scenario(),connected,consent:accepted,carted});step=route.ok?'ready':'error';busy=false;render();focusStage();
 }
 if(action==='retailer'){step='retailer';render();focusStage();}
});
['surface','invocation','scenario'].forEach(id=>el(id).addEventListener('change',()=>{if(id==='surface')connected=false;reset();}));
el('restart').addEventListener('click',reset);el('disconnect').addEventListener('click',()=>{connected=false;reset();el('demo-status').textContent='Demo account disconnected.'});render();

const sheet=el('review-sheet'),openReview=el('review-open');
openReview.addEventListener('click',()=>{sheet.showModal();document.body.classList.add('reviewing');});
el('review-close').addEventListener('click',()=>sheet.close());
el('review-apply').addEventListener('click',()=>{sheet.close();(box.querySelector('[data-stage-heading]')||box.querySelector('[data-product]'))?.focus();});
sheet.addEventListener('close',()=>document.body.classList.remove('reviewing'));
