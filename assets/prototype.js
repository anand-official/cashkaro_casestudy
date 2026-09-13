import {PRODUCTS,SCENARIOS,money,checkRoute,createRoute} from './router-model.js';
const el=id=>document.getElementById(id),box=el('conversation');
let chosen='aster',step='research',connected=false,accepted=false,carted=false,busy=false,revision=0,route=null,checked=null;
const surface=()=>el('surface').value,scenario=()=>el('scenario').value;
const product=()=>PRODUCTS.find(p=>p.id===chosen);
const say=(role,html)=>`<div class="message ${role}"><span class="speaker">${role==='user'?'You':'Assistant'}</span><div>${html}</div></div>`;
const btn=(action,label,cls='primary')=>`<button class="button ${cls}" data-action="${action}">${label}</button>`;
const art=p=>`<div class="phone-art ${p.color}" aria-hidden="true"><div class="camera-dot"></div><div class="phone-screen"><span>${p.name.split(' ')[0]}</span></div></div>`;
function focusStage(){box.querySelector('[data-stage-heading]')?.focus();el('demo-status').textContent=box.querySelector('[data-stage-heading]')?.textContent||'Journey reset';}
function render(){
 const p=product(),s=SCENARIOS[scenario()],share=surface()==='Share-to-CashKaro';
 el('host-label').textContent=share?'Neutral interface · Share-to-CashKaro concept':`Neutral interface · ${surface()} adapter concept`;
 el('platform-note').textContent=share?'An explicit share is the lower-control-risk second surface. It still requires the shopper to remember CashKaro.':el('invocation').value==='contextual'?'Contextual placement is controlled by the host. This is the intended experience, not an approved integration.':'Explicit invocation is easier to demonstrate, but preserves recall friction. It is not equivalent to contextual surfacing.';
 el('invocation').disabled=share;el('disconnect').hidden=!connected;
 let html=say('user','<p>I need a phone around ₹40k. Camera matters most, battery second.</p>');
 if(step==='research'){
 html+=say('assistant','<p>Here are three illustrative options within your budget. I would choose <strong>Aster 9</strong> for your camera-first priorities.</p>');
 html+='<p class="fixture-label">FICTIONAL HOST RESEARCH · NO CASHKARO RANKING</p><div class="product-grid">'+PRODUCTS.map(x=>`<article class="product-option">${art(x)}<p class="product-trait">${x.trait}</p><h2>${x.name}</h2><p class="variant">${x.variant}</p><p class="product-price">${money(x.price)}</p><p class="product-detail">${x.detail}</p><button class="button ${x.id==='aster'?'primary':'secondary'}" data-product="${x.id}" aria-label="Choose ${x.name}">This is the one</button></article>`).join('')+'</div><p class="fixture-label">Prices and specifications are invented for this interaction. Not shopping advice.</p>';
 }else{
 html+=say('assistant',`<p>You selected <strong>${p.name}</strong>. ${p.detail}</p>`)+say('user',`<p>I'll get the ${p.name}, ${p.variant}, from ${s.merchant}.</p>`);
 html+=`<div class="selected-product">${art(p)}<div><b>${p.name}</b><span>${p.variant}</span><small>Selected merchant: ${s.merchant}</small></div><strong>${money(p.price)}</strong></div>`;
 if(step==='offer'){
 const automatic=!share&&el('invocation').value==='contextual';
 html+=`<section class="skill-card"><p class="fixture-label">${automatic?'INTENDED HOST-SURFACED OFFER':'USER-INITIATED SECOND SURFACE'}</p><h2 tabindex="-1" data-stage-heading>${share?'Share this product with CashKaro':automatic?'Check this purchase with CashKaro?':'Ask CashKaro to check this purchase'}</h2><p>Keep your product choice. CashKaro checks whether this purchase can earn Cashback or Rewards.</p><p class="privacy-note">Share only this product, merchant and variant. Your full conversation is not needed.</p>${btn('check',share?'Share to CashKaro':automatic?'Check eligible benefit':'Use CashKaro')}${btn('direct','Continue without CashKaro','secondary')}</section>`;
 }else if(step==='connect'){
 html+=`<section class="skill-card"><div class="skill-heading"><b>CK</b><span>CashKaro<small>Universal Shopping Skill</small></span></div><h2 tabindex="-1" data-stage-heading>Connect CashKaro for this surface</h2><p>Your eligible purchase needs to be linked to your CashKaro account so the benefit can reach you.</p><ul><li>Allow benefit checks and routes for purchases you approve.</li><li>No payments, card details or unrelated chat history.</li><li>Disconnect at any time.</li></ul><p class="fixture-label">SIMULATED CONNECTION · NO CREDENTIALS COLLECTED</p>${btn('connect','Connect demo account')}${btn('direct','Continue without CashKaro','secondary')}</section>`;
 }else if(step==='checking'){
 html+=`<section class="skill-card"><p class="fixture-label">SIMULATED CHECK</p><h2 tabindex="-1" data-stage-heading>Checking this exact purchase…</h2><div class="progress-line"></div><p>Merchant route · benefit type · product conditions</p></section>`;
 }else if(step==='benefit'){
 checked=checkRoute({productId:chosen,scenario:scenario()});
 if(!checked.ok)html+=failure(checked);
 else{
 const reward=checked.kind==='Rewards';
 html+=`<section class="skill-card"><div class="skill-heading"><b>CK</b><span>CashKaro<small>Connected demo account</small></span><span class="benefit-type">${checked.kind}</span></div><p class="fixture-label">ILLUSTRATIVE OFFER · NOT CURRENT RETAILER TERMS</p><h2 tabindex="-1" data-stage-heading>${money(checked.amount)} estimated ${checked.kind}</h2><dl class="benefit-breakdown"><div><dt>Pay at ${checked.merchant}</dt><dd>${money(checked.payToday)}</dd></div><div><dt>Potential ${checked.kind} later</dt><dd>${money(checked.amount)}</dd></div>${!reward?`<div><dt>Value if Cashback confirms</dt><dd>${money(checked.conditionalValue)}</dd></div>`:''}</dl><p class="benefit-note">${reward?'Rewards are restricted to eligible gift-card redemption. They are not bank cash or an instant discount.':'Cashback is conditional and paid later. You still pay the retailer the full amount shown above.'}</p>${scenario()==='small'?'<p class="small-benefit">This example is capped at ₹65. You may decide the extra step is not worthwhile.</p>':''}<details><summary>View eligibility and timing</summary><ul><li>Exact product and variant must match the reviewed policy.</li><li>Start before adding to cart or wishlist; follow merchant coupon and channel rules.</li><li>Exchanges, returns or exclusions can invalidate the benefit.</li><li>Illustrative tracking: within 72 hours; confirmation may take up to 90 days. Actual clocks must come from approved merchant policy.</li><li>Approval and these amounts are simulated. No payout is guaranteed.</li></ul></details><fieldset class="cart-check"><legend>Is this item already in your retailer cart or wishlist?</legend><label><input type="radio" name="cart" value="no" ${accepted&&!carted?'checked':''}> No, I have not added it yet</label><label><input type="radio" name="cart" value="yes" ${carted?'checked':''}> Yes, it is already there</label></fieldset>${carted?'<p class="inline-warning" role="alert">A fresh eligible journey is required. This demo cannot verify or repair your existing cart.</p>':''}<p class="privacy-note">Activating this route may credit the sale to CashKaro under the merchant's affiliate rules. CashKaro may receive a commission.</p><button class="button primary" data-action="activate" ${!accepted||carted?'disabled':''}>Continue with estimated ${money(checked.amount)} ${checked.kind}</button>${btn('direct','Continue without CashKaro','secondary')}</section>`;
 }
 }else if(step==='activating'){
 html+=`<section class="skill-card"><p class="fixture-label">SIMULATED ROUTE CREATION</p><h2 tabindex="-1" data-stage-heading>Rechecking before the handoff…</h2><div class="progress-line"></div><p>Binding your consent to this exact product and retailer.</p></section>`;
 }else if(step==='error'){html+=failure(route);
 }else if(step==='ready'){
 html+=`<section class="skill-card success"><span class="success-icon" aria-hidden="true">✓</span><h2 tabindex="-1" data-stage-heading>Your CashKaro route is ready</h2><p>Continuing to ${s.merchant} is the next step. Cashback has not been earned or confirmed.</p><div class="handoff-line"><span>Assistant</span><b>→</b><span>CashKaro</span><b>→</b><span>${s.merchant}</span></div><p class="fixture-label">DEMO ONLY · NO LIVE AFFILIATE LINK</p>${btn('retailer',`Continue to ${s.merchant} demo`)}${btn('restart','Start another purchase','secondary')}</section>`;
 }else if(step==='retailer'||step==='direct'){
 html+=`<section class="retailer-card"><p class="fixture-label">SIMULATED RETAILER DESTINATION</p><h2 tabindex="-1" data-stage-heading>${s.merchant} · ${p.name}</h2><p>${p.variant}</p><strong class="retailer-price">${money(p.price)}</strong><p>${step==='direct'?'You continued without activating a CashKaro route.':'The chosen product and variant arrived through the simulated CashKaro route.'}</p><p>Checkout, current stock, delivery and returns belong to the retailer. No order has been placed.</p><div class="destination-status">${step==='direct'?'No CashKaro benefit claimed':'Route ready ≠ order tracked ≠ benefit confirmed'}</div>${btn('restart','Try another purchase','secondary')}</section>`;
 }
 }
 box.innerHTML=html;
 const stage=['research','offer','connect','checking'].includes(step)?0:step==='benefit'||step==='error'?1:step==='activating'||step==='ready'?2:3;
 [...el('route-trace').children].forEach((li,i)=>{li.classList.toggle('current',i===stage);li.classList.toggle('done',i<stage)});
}
function failure(result){return `<section class="skill-card failure"><p class="fixture-label">NO CASHKARO ROUTE CREATED</p><h2 tabindex="-1" data-stage-heading>${result.reason}</h2><p>${result.detail||'Keep your product choice and continue without an unverified benefit.'}</p>${btn('direct','Continue without CashKaro','secondary')}${btn('restart','Start again','secondary')}</section>`;}
async function check(){step='checking';busy=true;render();focusStage();const rev=revision;await new Promise(r=>setTimeout(r,650));if(rev!==revision)return;busy=false;step='benefit';render();focusStage();}
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
 if(!accepted||carted)return;busy=true;step='activating';render();focusStage();const rev=revision;await new Promise(r=>setTimeout(r,700));if(rev!==revision)return;
 route=createRoute({productId:chosen,scenario:scenario(),connected,consent:accepted,carted});step=route.ok?'ready':'error';busy=false;render();focusStage();
 }
 if(action==='retailer'){step='retailer';render();focusStage();}
});
['surface','invocation','scenario'].forEach(id=>el(id).addEventListener('change',()=>{if(id==='surface')connected=false;reset();}));
el('restart').addEventListener('click',reset);el('disconnect').addEventListener('click',()=>{connected=false;reset();el('demo-status').textContent='Demo account disconnected.'});render();
