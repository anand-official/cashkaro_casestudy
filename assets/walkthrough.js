// Interactive concept only. Reuses the same fictional host and routing rules as the full prototype.
// The conversation is append-only: nothing is ever re-rendered from scratch, so the journey reads
// as one continuous thread rather than a sequence of replaced screens.
import {PRODUCTS, SCENARIOS, money, checkRoute, createRoute} from './router-model.js';
import {research, PRIORITIES} from './host-model.js';
import {homeScreen, statusBar, clock, CONNECTORS} from './device-chrome.js';
import {HOSTS, HOST_ORDER, HOST_QUERIES, hostVars} from './hosts.js';
import {deviceCss} from './device-css.js';
import {appCss} from './walkthrough-css.js';

const CHAPTERS=[
 ['home','Open the assistant','The journey does not start with CashKaro.','A shopper opens an assistant to decide what to buy. Nothing about this moment belongs to us, and the product has to accept that.'],
 ['directory','Connect the connector','CashKaro takes an ordinary connector slot.','The same slot Mail, Drive and Calendar already occupy. Authorise the account once and any supported assistant can call it. That is a far smaller ask of a platform than a bespoke integration.'],
 ['consent','Approve the scope','Connect only the context needed.','The selected product, merchant and variant, plus account identity. Not the conversation. Not payment details.'],
 ['ask','Ask the question','The shopper sets the brief, not us.','A real purchase starts as a constraint: a budget and a priority. CashKaro is not in this message.'],
 ['compare','Compare the options','The assistant owns the recommendation.','Change the priority and the suggestion changes. Cashback never decides which phone appears first, because a recommender funded by its own commission is not defensible.'],
 ['choose','Choose the product','The decision is made before we appear.','Product, merchant and variant are settled. Only now is there something concrete for CashKaro to check.'],
 ['benefit','Check the benefit','Verify before showing a number.','The host calls the connector like any other tool. Merchant, exact product and current policy must all qualify, otherwise it refuses.'],
 ['route','Approve the route','A route is not an earned reward.','Consent precedes route creation, and tracking only begins once the retailer reports the order.'],
 ['handoff','Hand off to the retailer','Checkout stays with the retailer.','Payment, stock, delivery and returns never move. No order is placed here.']
];
const INDEX=Object.fromEntries(CHAPTERS.map(([k],i)=>[k,i]));

const QUERY_PRIORITY={0:'camera',1:'battery',2:'value'};

class CashKaroWalkthrough extends HTMLElement{
 constructor(){
  super();
  this.attachShadow({mode:'open'});
  this.reduce=matchMedia('(prefers-reduced-motion: reduce)');
  this.hostId='chatgpt';
  this.reset(false);
 }

 reset(rerender=true){
  this.step='home';
  this.priority='camera';
  this.chosen='aster';
  this.scenario=this.scenario||'cash';
  this.connected=false;
  this.consent=false;
  this.route=null;
  this.seq=(this.seq||0)+1;
  clearTimeout(this.timer);
  if(rerender){
   const t=this.shadowRoot.querySelector('.thread');
   if(t)t.replaceChildren();
   this.paint();
  }
 }

 connectedCallback(){
  this.shell();
  this.applyHost();
  this.paint();
  this.clockTimer=setInterval(()=>{const t=this.shadowRoot.querySelector('.sb-time');if(t)t.textContent=clock();},20000);
  this.onVisibility=()=>{if(document.hidden)this.stopTour();};
  document.addEventListener('visibilitychange',this.onVisibility);
  this.onMotion=()=>{if(this.reduce.matches)this.stopTour();};
  this.reduce.addEventListener('change',this.onMotion);
  this.observer=new IntersectionObserver(e=>{if(!e[0].isIntersecting)this.stopTour();});
  this.observer.observe(this);
 }

 disconnectedCallback(){
  clearTimeout(this.timer);clearTimeout(this.toastTimer);clearTimeout(this.notifTimer);clearInterval(this.clockTimer);
  this.seq++;
  this.observer?.disconnect();
  document.removeEventListener('visibilitychange',this.onVisibility);
  this.reduce.removeEventListener('change',this.onMotion);
 }

 get q(){return this.shadowRoot;}
 get host(){return HOSTS[this.hostId];}
 get queries(){return HOST_QUERIES[this.hostId];}
 get product(){return PRODUCTS.find(p=>p.id===this.chosen);}
 get merchant(){return SCENARIOS[this.scenario].merchant;}

 // ---------- shell ----------
 shell(){
  const groups={};
  for(const [key,s] of Object.entries(SCENARIOS))(groups[s.group]??=[]).push([key,s]);
  const options=Object.entries(groups).map(([g,items])=>`<optgroup label="${g}">${items.map(([k,s])=>`<option value="${k}">${s.label}</option>`).join('')}</optgroup>`).join('');

  this.shadowRoot.innerHTML=`<style>${deviceCss}${appCss}</style>
<div class="stagewrap">
 <div class="device">
  <div class="frame">
   <span class="side-power" aria-hidden="true"></span>
   <div class="screen" data-surface="home" data-app="assistant">
    <div class="island" aria-hidden="true"></div>
    ${statusBar()}
    <div class="notif" hidden><img src="assets/cashkaro-logo.svg" alt=""><div class="notif-body"><strong>CashKaro</strong><span class="notif-text"></span></div></div>
    <div class="surfaces">
     <div class="layer layer-home">${homeScreen()}</div>
     <div class="layer layer-app" hidden>
      <header class="appbar">
       <button type="button" data-action="back" aria-label="Back">‹</button>
       <span class="app-mark" aria-hidden="true">✳</span>
       <div class="app-title"><span class="app-name-text">Assistant</span><small class="app-sub">Shopping</small></div>
       <span class="connected-pill" hidden>CashKaro</span>
       <button type="button" class="bar-action" data-action="connectors">Connectors</button>
      </header>
      <div class="directory" hidden></div>
      <div class="thread" role="log" aria-live="polite" aria-label="Conversation"></div>
      <div class="composer" hidden>
       <div class="prompt-chips" role="group" aria-label="Suggested prompts"></div>
       <div class="composer-row"><div class="composer-text empty">Message the assistant</div><button class="send" data-action="send" aria-label="Send" disabled>↑</button></div>
      </div>
     </div>
    </div>
    <button class="scrim" hidden data-action="dismiss" aria-label="Dismiss"></button>
    <div class="sheet" hidden role="dialog" aria-label="Connect CashKaro"><div class="sheet-grab" aria-hidden="true"></div><div class="sheet-body"></div></div>
    <p class="toast" hidden role="status"></p>
    <div class="homebar" aria-hidden="true"></div>
   </div>
  </div>
 </div>
 <aside class="narrate">
  <p class="kicker">What is happening</p>
  <h3 class="narrate-title"></h3>
  <p class="why"></p>
  <ol class="chapters">${CHAPTERS.map(([k,t],i)=>`<li data-c="${k}"><b>${String(i+1).padStart(2,'0')}</b>${t}</li>`).join('')}</ol>
  <div class="host-switch" role="group" aria-label="Assistant surface">${HOST_ORDER.map(id=>`<button type="button" data-host="${id}" aria-pressed="${id===this.hostId}"><span class="hm" style="background:${HOSTS[id].markBg}">${HOSTS[id].mark}</span>${HOSTS[id].name}</button>`).join('')}</div>
  <p class="switch-note">One connector, four surfaces. The interface changes; the eligibility rules, the refusals and the shopper's control do not.</p>
  <div class="playbar">
   <button type="button" class="tour-button" data-action="tour">▷ Play the journey</button>
   <button type="button" data-action="restart">Start over</button>
  </div>
  <div class="scenario-pick">
   <label for="outcome">Test a different outcome</label>
   <select id="outcome">${options}</select>
   <p class="hint">Sixteen scenarios, eleven of which refuse. The chosen benefit never changes which phone the assistant recommends.</p>
   <a href="prototype.html#interactive">Open the full scenario controls ↗</a>
  </div>
 </aside>
</div>
<p class="sr" role="status" aria-live="polite"></p>`;

  this.q.addEventListener('click',e=>{
   const open=e.target.closest('[data-app-open]');
   if(open){
    if(open.dataset.appOpen==='assistant'){this.stopTour();this.openApp();}
    else this.toast('Not part of this concept.');
    return;
   }
   const hs=e.target.closest('[data-host]');
   if(hs){this.stopTour();this.setHost(hs.dataset.host);return;}
   const ask=e.target.closest('[data-ask]');
   if(ask){this.stopTour();this.askQuery(Number(ask.dataset.ask));return;}
   const conn=e.target.closest('[data-connect]');
   if(conn){this.stopTour();this.openConsent();return;}
   const prio=e.target.closest('[data-priority]');
   if(prio){this.stopTour();this.setPriority(prio.dataset.priority);return;}
   const prod=e.target.closest('[data-product]');
   if(prod){this.stopTour();this.pick(prod.dataset.product);return;}
   const b=e.target.closest('[data-action]');
   if(b)this.act(b.dataset.action);
  });

  this.q.addEventListener('change',e=>{
   if(e.target.id==='outcome'){
    this.stopTour();
    this.scenario=e.target.value;
    this.toast(SCENARIOS[this.scenario].label);
    this.reset();
   }
   if(e.target.name==='consent'){
    this.consent=e.target.checked;
    const a=this.q.querySelector('[data-action="activate"]');
    if(a)a.disabled=!this.consent;
   }
  });
 }

 // ---------- host identity ----------
 applyHost(){
  const h=this.host;
  this.q.querySelector('.screen').setAttribute('style',hostVars(h));
  this.q.querySelector('.app-mark').innerHTML=h.mark;
  this.q.querySelector('.prompt-chips').innerHTML=this.queries.map((t,i)=>`<button type="button" data-ask="${i}">${t}</button>`).join('');
  const box=this.q.querySelector('.composer-text');
  if(box.classList.contains('empty'))box.textContent=h.placeholder;
  this.q.querySelector('.bar-action').textContent=h.directoryLabel;
  [...this.q.querySelectorAll('[data-host]')].forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.host===this.hostId)));
 }

 setHost(id){
  if(!HOSTS[id]||id===this.hostId)return;
  this.hostId=id;
  this.reset();
  this.applyHost();
  this.toast(`${this.host.name} · same connector`);
 }

 // ---------- primitives ----------
 wait(ms){return new Promise(r=>setTimeout(r,this.reduce.matches?0:ms));}

 append(html,cls='msg'){
  const el=document.createElement('div');
  el.className=cls;
  el.innerHTML=html;
  this.q.querySelector('.thread').append(el);
  this.scrollDown();
  return el;
 }

 scrollDown(){
  const t=this.q.querySelector('.thread');
  requestAnimationFrame(()=>{t.scrollTop=t.scrollHeight;});
 }

 // A typing indicator, then the text streams in word by word.
 async say(text,{pause=520}={}){
  const seq=this.seq;
  const dots=this.append('<div class="typing" aria-hidden="true"><i></i><i></i><i></i></div>','msg msg-bot');
  await this.wait(pause);
  if(seq!==this.seq)return null;
  dots.innerHTML='';
  if(this.reduce.matches){dots.innerHTML=text;this.scrollDown();return dots;}
  const words=text.split(' ');
  for(let i=0;i<words.length;i++){
   dots.innerHTML=words.slice(0,i+1).join(' ')+'<span class="cursor"></span>';
   this.scrollDown();
   await this.wait(26);
   if(seq!==this.seq)return null;
  }
  dots.innerHTML=text;
  this.scrollDown();
  return dots;
 }

 toast(text){
  const el=this.q.querySelector('.toast');
  el.textContent=text;el.hidden=false;
  clearTimeout(this.toastTimer);
  this.toastTimer=setTimeout(()=>{el.hidden=true;},2300);
 }

 notify(text){
  const el=this.q.querySelector('.notif');
  el.querySelector('.notif-text').textContent=text;
  el.hidden=false;
  clearTimeout(this.notifTimer);
  this.notifTimer=setTimeout(()=>{el.hidden=true;},4200);
 }

 surface({home=false,directory=false,thread=true,composer=false,retailer=false}={}){
  const s=this.q.querySelector('.screen');
  s.dataset.surface=home?'home':'app';
  s.dataset.app=retailer?'retailer':'assistant';
  this.q.querySelector('.layer-home').hidden=!home;
  this.q.querySelector('.layer-app').hidden=home;
  this.q.querySelector('.directory').hidden=!directory;
  this.q.querySelector('.thread').hidden=!thread;
  this.q.querySelector('.composer').hidden=!composer;
  this.q.querySelector('.app-name-text').textContent=retailer?this.merchant:this.host.name;
  this.q.querySelector('.app-sub').textContent=retailer?'Simulated retailer app':(directory?this.host.directoryLabel:this.host.vendor);
  this.q.querySelector('.connected-pill').hidden=!this.connected||directory;
  this.q.querySelector('.bar-action').hidden=retailer;
 }

 sheet(html){
  const sheet=this.q.querySelector('.sheet'),scrim=this.q.querySelector('.scrim');
  if(!html){sheet.hidden=true;scrim.hidden=true;return;}
  sheet.querySelector('.sheet-body').innerHTML=html;
  sheet.hidden=false;scrim.hidden=false;
 }

 identity(){return `<div class="ck-identity"><img src="assets/cashkaro-logo.svg" alt="CashKaro"><span>${this.connected?'Connected · concept':'Shopping connector'}</span></div>`;}
 button(a,t,secondary=false){return `<button type="button" class="${secondary?'secondary':'primary'}" data-action="${a}">${t}</button>`;}

 // ---------- narration ----------
 paint(){
  const i=INDEX[this.step]??0;
  const [,,title,why]=CHAPTERS[i];
  this.q.querySelector('.narrate-title').textContent=title;
  this.q.querySelector('.why').textContent=why;
  [...this.q.querySelectorAll('.chapters li')].forEach((li,j)=>{
   li.classList.toggle('now',j===i);
   li.classList.toggle('done',j<i);
  });
  const t=this.q.querySelector('.tour-button');
  t.textContent=this.watching?'Ⅱ Take control':'▷ Play the journey';
  t.classList.toggle('on',!!this.watching);
  if(this.step==='home')this.surface({home:true});
 }

 go(step){this.step=step;this.paint();this.q.querySelector('.sr').textContent=CHAPTERS[INDEX[step]][2];}

 // ---------- journey ----------
 openApp(){
  this.go('directory');
  this.surface({directory:true,thread:false});
  this.q.querySelector('.directory').innerHTML=`<h3>${this.host.directoryLabel}</h3><p>${this.host.directoryBlurb}</p>${CONNECTORS.map(c=>`<button type="button" class="conn-row ${c.target?'target available':''}" ${c.target?'data-connect="1"':'disabled'}><span class="conn-logo tone-${c.tone}" aria-hidden="true">${c.target?'<img src="assets/cashkaro-logo.svg" alt="">':c.glyph}</span><span class="conn-meta"><strong>${c.name}</strong><span>${c.desc}</span></span><span class="conn-state">${c.state}</span></button>`).join('')}`;
 }

 openConsent(){
  this.go('consent');
  this.sheet(`<div class="commerce sheet-card">${this.identity()}<h3 tabindex="-1" data-heading>Connect CashKaro once.</h3><p>Any supported assistant can then call it for a purchase you have already chosen.</p><div class="privacy"><span aria-hidden="true">↗</span>Shares the selected product, merchant and variant, plus your CashKaro account identity. Not your conversation. Not payment details.</div>${this.button('authorise','Connect demo account →')}${this.button('dismiss','Not now',true)}<p class="fineprint">Simulated connection. No credentials are collected and no account is created.</p></div>`);
  this.q.querySelector('[data-heading]')?.focus({preventScroll:true});
 }

 async authorise(){
  this.connected=true;
  this.sheet(null);
  this.toast('CashKaro connected');
  this.go('ask');
  this.surface({composer:true});
  const t=this.q.querySelector('.thread');
  if(!t.childElementCount){
   this.append('<div class="toolcall done"><img src="assets/cashkaro-logo.svg" alt=""><span class="spin"></span><span>CashKaro connected. It will be called only when a purchase is chosen.</span></div>','msg');
   await this.say(this.host.greeting,{pause:420});
  }
  this.focusComposer();
 }

 focusComposer(){this.q.querySelector('.prompt-chips button')?.focus({preventScroll:true});}

 // Types the query into the composer, then sends it.
 async askQuery(i){
  const seq=this.seq;
  const box=this.q.querySelector('.composer-text'),send=this.q.querySelector('.send');
  const text=this.queries[i];
  this.priority=QUERY_PRIORITY[i];
  box.classList.remove('empty');
  if(this.reduce.matches)box.textContent=text;
  else{
   for(let n=1;n<=text.length;n++){
    box.innerHTML=text.slice(0,n)+'<span class="cursor"></span>';
    await this.wait(16);
    if(seq!==this.seq)return;
   }
   box.textContent=text;
  }
  send.disabled=false;
  await this.wait(280);
  if(seq!==this.seq)return;
  this.sendQuery();
 }

 async sendQuery(){
  const box=this.q.querySelector('.composer-text');
  const text=box.textContent.trim();
  if(!text)return;
  box.textContent=this.host.placeholder;box.classList.add('empty');
  this.q.querySelector('.send').disabled=true;
  this.append(`<div>${text}</div>`,'msg msg-user');
  this.go('compare');
  await this.showOptions(true);
 }

 async showOptions(intro){
  const seq=this.seq;
  const r=research({priority:this.priority});
  if(intro){
   const said=await this.say(`I compared three that fit. I would take the <strong>${r.recommended.name}</strong>. ${r.reason}`);
   if(!said||seq!==this.seq)return;
  }
  this.append(this.optionsHtml(r),'msg msg-bot');
  this.go('choose');
 }

 optionsHtml(r){
  return `<div class="preference-row" role="group" aria-label="Shopping priority"><span>What matters most?</span>${Object.entries(PRIORITIES).map(([k,v])=>`<button class="chip" data-priority="${k}" aria-pressed="${k===this.priority}">${v}</button>`).join('')}</div><div class="products">${r.options.map(x=>`<article class="product ${x.id===r.recommended.id?'best':''}"><div class="product-image">${x.id===r.recommended.id?'<span class="suggestion">Suggested</span>':''}<img src="assets/phones/${x.id}.svg" alt="Fictional ${x.name}"></div><div class="product-info"><h3>${x.name}</h3><p>${x.trait}<br>${x.variant}</p><strong class="product-price">${money(x.price)}</strong><button class="primary" data-product="${x.id}" aria-label="Choose ${x.name}">This is the one <span aria-hidden="true">→</span></button></div></article>`).join('')}</div>`;
 }

 // Re-ranking happens in place: the same card updates, nothing jumps.
 async setPriority(p){
  this.priority=p;
  const r=research({priority:p});
  const last=[...this.q.querySelectorAll('.msg-bot')].pop();
  if(last&&last.querySelector('.products')){
   last.innerHTML=this.optionsHtml(r);
   this.scrollDown();
  }
  this.toast(`Re-ranked for ${PRIORITIES[p].toLowerCase()}`);
 }

 async pick(id){
  const seq=this.seq;
  this.chosen=id;this.consent=false;this.route=null;
  this.append(`<div>This is the one. I’ll get the ${this.product.name} from ${this.merchant}.</div>`,'msg msg-user');
  this.go('benefit');
  await this.checkBenefit();
  if(seq!==this.seq)return;
 }

 async checkBenefit(){
  const seq=this.seq;
  const chip=this.append(`<div class="toolcall"><img src="assets/cashkaro-logo.svg" alt=""><span class="spin"></span><span>${this.host.toolVerb} · checking merchant, exact product and current policy…</span></div>`,'msg');
  await this.wait(1100);
  if(seq!==this.seq)return;
  const checked=checkRoute({productId:this.chosen,scenario:this.scenario});
  chip.querySelector('.toolcall').classList.add('done');
  chip.querySelector('.toolcall span:last-child').textContent=checked.ok?'CashKaro returned an eligible benefit.':'CashKaro refused this purchase.';
  this.append(this.benefitHtml(checked),'msg msg-bot');
 }

 benefitHtml(checked){
  if(!checked.ok)return `<section class="commerce" aria-label="CashKaro refusal">${this.identity()}<span class="refusal-icon" aria-hidden="true">!</span><h3 tabindex="-1" data-heading>${checked.reason}</h3><p>${checked.detail}</p>${this.button('direct','Continue without CashKaro →')}${this.button('restart','Try another purchase',true)}</section>`;
  const p=this.product;
  return `<section class="commerce" aria-label="CashKaro benefit">${this.identity()}<div class="benefit-label">Eligible illustrative offer</div><h3 tabindex="-1" data-heading><strong class="amount">${money(checked.amount)}</strong><span class="amount-caption">estimated ${checked.kind}</span></h3><p class="benefit-subtitle">On your ${this.merchant} purchase. ${checked.kind==='Rewards'?'Restricted gift-card redemption, not bank cash.':'Conditional benefit paid later, not an instant discount.'}</p><dl class="breakdown"><div><dt>Pay today</dt><dd>${money(p.price)}</dd></div><div><dt>Potential ${checked.kind} later</dt><dd>${money(checked.amount)}</dd></div></dl><details class="terms"><summary>Eligibility &amp; timing</summary><p>Exact product and variant must qualify. Start before adding to cart or wishlist. Merchant channel, coupon and return conditions apply. Illustrative tracking: within 72 hours; confirmation may take up to 90 days. Real timing must come from approved policy.</p></details><label class="cart-consent"><input type="checkbox" name="consent"> <span>I have not added this item to my retailer cart or wishlist.</span></label><button class="primary" data-action="activate" disabled>Continue with ${checked.kind} →</button>${this.button('direct','Continue without CashKaro',true)}<p class="fineprint">By continuing, you activate this simulated affiliate route. CashKaro may receive a commission. No payout is guaranteed.</p></section>`;
 }

 async activate(){
  const seq=this.seq;
  this.go('route');
  const chip=this.append(`<div class="toolcall"><img src="assets/cashkaro-logo.svg" alt=""><span class="spin"></span><span>Revalidating and creating your route…</span></div>`,'msg');
  await this.wait(1000);
  if(seq!==this.seq)return;
  this.route=createRoute({productId:this.chosen,scenario:this.scenario,connected:this.connected,consent:true,carted:false});
  chip.querySelector('.toolcall').classList.add('done');
  chip.querySelector('.toolcall span:last-child').textContent=this.route.ok?'Route created.':'No route was created.';
  const r=this.route;
  const html=r.ok
   ?`<section class="commerce" aria-label="Route ready">${this.identity()}<span class="success-icon" aria-hidden="true">✓</span><h3 tabindex="-1" data-heading>Your CashKaro route is ready.</h3><div class="route-line"><span><i>✓</i>Your choice</span>→<span><i>✓</i>CashKaro</span>→<span><i>↗</i>${this.merchant}</span></div><p>${r.kind} is not earned yet. Tracking begins after the retailer reports the order.</p>${this.button('retailer',`Continue to ${this.merchant} →`)}</section>`
   :`<section class="commerce" aria-label="Route failed">${this.identity()}<span class="refusal-icon" aria-hidden="true">!</span><h3 tabindex="-1" data-heading>${r.reason}</h3><p>${r.detail||'No route was activated.'}</p>${r.recoverable?this.button('retry',r.code==='reauth'?'Reconnect and try again →':'Re-check this purchase →'):''}${this.button('direct','Continue without CashKaro'+(r.recoverable?'':' →'),!!r.recoverable)}</section>`;
  this.append(html,'msg msg-bot');
  if(r.ok)this.notify(`Route ready. Tracking starts when ${this.merchant} reports the order.`);
 }

 handoff(direct){
  this.go('handoff');
  this.surface({retailer:true,composer:false});
  const p=this.product;
  this.append(`<section class="destination" aria-label="Retailer handoff"><div class="destination-top"><strong>${this.merchant}</strong><span>Simulated destination</span></div><h3 tabindex="-1" data-heading>Your choice made it here.</h3><p>${p.name} · ${p.variant}<br>${money(p.price)} payable to the retailer.</p><p>Checkout, payment, delivery and returns stay with ${this.merchant}.</p><div class="status-note">${direct?'No CashKaro route activated. No benefit claimed.':'Route ready ≠ order tracked ≠ benefit confirmed.'}<br>No order has been placed.</div>${this.button('restart','Try another purchase →')}</section>`,'msg msg-bot');
  this.q.querySelector('[data-heading]')?.focus({preventScroll:true});
 }

 // ---------- actions ----------
 async act(action){
  if(action==='tour'){
   if(this.watching){this.stopTour();return;}
   this.watching=true;this.reset();this.paint();this.runTour();
   return;
  }
  if(action!=='dismiss')this.stopTour();
  if(action==='restart'){this.reset();return;}
  if(action==='back'){this.reset();return;}
  if(action==='connectors'){this.openApp();return;}
  if(action==='dismiss'){this.sheet(null);if(this.step==='consent'){this.stopTour();this.openApp();}return;}
  if(action==='authorise'){await this.authorise();return;}
  if(action==='send'){this.sendQuery();return;}
  if(action==='activate'){await this.activate();return;}
  if(action==='retry'){this.route=null;this.consent=false;this.go('benefit');await this.checkBenefit();return;}
  if(action==='retailer'){this.handoff(false);return;}
  if(action==='direct'){this.handoff(true);return;}
 }

 stopTour(){clearTimeout(this.timer);this.timer=null;if(this.watching){this.watching=false;this.paint();}}

 // Autoplay walks the same public path a person would take.
 async runTour(){
  const seq=this.seq;
  const step=async fn=>{await this.wait(1000);if(seq!==this.seq||!this.watching)throw 0;await fn();};
  try{
   await step(()=>this.openApp());
   await step(()=>this.openConsent());
   await step(()=>this.authorise());
   await step(()=>this.askQuery(0));
   await step(()=>this.pick('aster'));
   await step(async()=>{
    const cb=this.q.querySelector('[name="consent"]');
    if(cb){cb.checked=true;this.consent=true;const a=this.q.querySelector('[data-action="activate"]');if(a)a.disabled=false;}
    await this.activate();
   });
   await step(()=>this.handoff(false));
   this.watching=false;this.paint();
  }catch{/* interrupted by the viewer taking control */}
 }
}
customElements.define('ck-walkthrough',CashKaroWalkthrough);
