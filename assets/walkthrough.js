// Interactive concept only. Reuses the same fictional host and routing rules as the full prototype.
import {PRODUCTS, SCENARIOS, money, checkRoute, createRoute} from './router-model.js';
import {research, PRIORITIES} from './host-model.js';
import {homeScreen, statusBar, clock} from './device-chrome.js';
import {deviceCss} from './device-css.js';
import {appCss} from './walkthrough-css.js';

const explanations={
 home:['The journey does not start with CashKaro.','The shopper opens an assistant to decide what to buy. CashKaro is not in the room yet, and nothing about this step belongs to us.'],
 research:['The assistant owns the recommendation.','Changing the priority changes the suggestion. Cashback never determines which phone appears first.'],
 offer:['The purchase is chosen before CashKaro enters.','This intended contextual placement depends on the host. The selected product, merchant and variant are preserved.'],
 connect:['Connect only the context needed.','This simulated connection shares the chosen purchase and account identity, not the full conversation or payment credentials.'],
 checking:['Verify before showing an amount.','Merchant, exact product and benefit policy must qualify. These checks use fictional local fixtures.'],
 benefit:['Make the value and conditions visible.','The full retailer price is payable today. Cashback is conditional and received later; Rewards have restricted redemption.'],
 activating:['Consent precedes route creation.','CashKaro may receive an affiliate commission. User consent does not override partner rules or another affiliate’s rights.'],
 ready:['A route is not an earned reward.','Tracking begins after the retailer reports an order. Confirmation depends on the applicable policy.'],
 retailer:['Checkout remains with the retailer.','The selected product is preserved. Payment, stock, delivery and returns belong to the retailer. No order is placed here.'],
 direct:['Keep the purchase, even without a benefit.','An unsupported benefit must never prevent the shopper from continuing. No CashKaro route has been activated.']
};

const CHAPTERS=[
 ['home','Open the assistant'],
 ['research','Choose a product'],
 ['offer','Meet the connector'],
 ['connect','Connect the account'],
 ['benefit','See the benefit'],
 ['ready','Approve the route'],
 ['retailer','Hand off to the retailer']
];
const chapterIndex=step=>{
 const map={checking:'benefit',activating:'ready',direct:'retailer'};
 const key=map[step]||step;
 const i=CHAPTERS.findIndex(c=>c[0]===key);
 return i<0?0:i;
};
const TOUR=['home','research','offer','connect','benefit','ready','retailer'];

class CashKaroWalkthrough extends HTMLElement{
 constructor(){
  super();
  this.attachShadow({mode:'open'});
  this.step='home';
  this.priority='camera';
  this.chosen='aster';
  this.scenario='cash';
  this.connected=false;
  this.consent=false;
  this.watching=false;
  this.timer=null;
  this.toastTimer=null;
  this.notifTimer=null;
  this.revision=0;
  this.reduce=matchMedia('(prefers-reduced-motion: reduce)');
 }

 connectedCallback(){
  this.shell();
  this.render();
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
  this.revision++;
  this.observer?.disconnect();
  document.removeEventListener('visibilitychange',this.onVisibility);
  this.reduce.removeEventListener('change',this.onMotion);
 }

 get product(){return PRODUCTS.find(p=>p.id===this.chosen);}
 get merchant(){return SCENARIOS[this.scenario].merchant;}
 get onHome(){return this.step==='home';}
 get atRetailer(){return ['retailer','direct'].includes(this.step);}

 identity(){return `<div class="ck-identity"><img src="assets/cashkaro-logo.svg" alt="CashKaro"><span>${this.connected?'Connected · concept':'Shopping connector'}</span></div>`;}
 button(action,text,secondary=false){return `<button type="button" class="${secondary?'secondary':'primary'}" data-action="${action}">${text}</button>`;}

 object(){
  const p=this.product;
  return `<aside class="purchase-object" aria-label="Your selected purchase"><span class="object-label">Your choice</span><img src="assets/phones/${p.id}.svg" alt="Fictional ${p.name}"><h3>${p.name}</h3><p class="variant">${p.variant}</p><p class="object-price">${money(p.price)}</p><span class="merchant">${this.merchant}</span><button type="button" class="change" data-action="restart">Change product</button></aside>`;
 }

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
       <button type="button" class="back" data-action="home" aria-label="Back to home screen">‹</button>
       <span class="app-mark" aria-hidden="true">✳</span>
       <div class="app-title"><span class="app-name-text">Assistant</span><small>Your priorities. Your decision.</small></div>
       <button type="button" class="restart" data-action="restart">Start over</button>
      </header>
      <div class="phase" aria-label="Purchase progress"></div>
      <div class="scrollport"><div class="stage"></div></div>
     </div>
    </div>
    <div class="scrim" hidden data-action="dismiss-sheet"></div>
    <div class="sheet" hidden role="dialog" aria-label="CashKaro"><div class="sheet-grab" aria-hidden="true"></div><div class="sheet-body"></div></div>
    <p class="toast" hidden role="status"></p>
    <div class="homebar" aria-hidden="true"></div>
   </div>
  </div>
 </div>
 <aside class="narrate">
  <p class="kicker">What is happening</p>
  <h3 class="narrate-title"></h3>
  <p class="why"></p>
  <ol class="chapters">${CHAPTERS.map(([k,t],i)=>`<li data-chapter="${k}"><b>${String(i+1).padStart(2,'0')}</b>${t}</li>`).join('')}</ol>
  <div class="playbar">
   <button type="button" class="tour-button" data-action="tour">▷ Play the journey</button>
   <button type="button" data-action="restart">Start over</button>
  </div>
  <div class="scenario-pick">
   <label for="outcome">Test a different outcome</label>
   <select id="outcome">${options}</select>
   <p class="hint">Sixteen scenarios, including refusals. The chosen benefit never changes which phone the assistant recommends.</p>
   <a href="prototype.html#interactive">Open the full scenario controls ↗</a>
  </div>
 </aside>
</div>
<p class="sr" role="status" aria-live="polite"></p>`;

  this.shadowRoot.addEventListener('click',e=>{
   const opener=e.target.closest('[data-app-open]');
   if(opener){
    if(opener.dataset.appOpen==='assistant'){this.stopTour();this.launchApp();}
    else this.toast('Not part of this concept.');
    return;
   }
   const b=e.target.closest('button,[data-action]');
   if(!b)return;
   if(b.dataset.priority){
    this.stopTour();this.priority=b.dataset.priority;this.render();
    this.shadowRoot.querySelector(`[data-priority="${this.priority}"]`)?.focus({preventScroll:true});
    return;
   }
   if(b.dataset.product){this.stopTour();this.chosen=b.dataset.product;this.consent=false;this.go('offer');return;}
   if(b.dataset.action)this.act(b.dataset.action);
  });

  this.shadowRoot.addEventListener('change',e=>{
   if(e.target.id==='outcome'){
    this.stopTour();this.revision++;
    this.scenario=e.target.value;this.consent=false;this.connected=false;this.route=null;
    this.go(this.onHome?'home':'offer',false);
    this.toast(SCENARIOS[this.scenario].label);
   }
   if(e.target.name==='consent'){
    this.stopTour();
    this.consent=e.target.checked;
    const activate=this.shadowRoot.querySelector('[data-action="activate"]');
    if(activate)activate.disabled=!this.consent;
   }
  });
 }

 toast(text){
  const el=this.shadowRoot.querySelector('.toast');
  el.textContent=text;el.hidden=false;
  clearTimeout(this.toastTimer);
  this.toastTimer=setTimeout(()=>{el.hidden=true;},2200);
 }

 notify(text){
  const el=this.shadowRoot.querySelector('.notif');
  el.querySelector('.notif-text').textContent=text;
  el.hidden=false;
  clearTimeout(this.notifTimer);
  this.notifTimer=setTimeout(()=>{el.hidden=true;},4200);
 }

 launchApp(){
  this.go('research');
  this.shadowRoot.querySelector('[data-product]')?.focus({preventScroll:true});
 }

 // ---- Rendering ----
 render(){
  const q=this.shadowRoot,p=this.product;
  const screen=q.querySelector('.screen');
  screen.dataset.surface=this.onHome?'home':'app';
  screen.dataset.app=this.atRetailer?'retailer':'assistant';
  q.querySelector('.layer-home').hidden=!this.onHome;
  const app=q.querySelector('.layer-app');
  app.hidden=this.onHome;

  q.querySelector('.app-mark').textContent=this.atRetailer?'⬚':'✳';
  q.querySelector('.app-name-text').textContent=this.atRetailer?this.merchant:'Assistant';
  q.querySelector('.app-title small').textContent=this.atRetailer?'Simulated retailer app':'Your priorities. Your decision.';

  if(!this.onHome)this.stage(p);
  this.sheet();
  this.narrate();
  this.controls();
 }

 stage(p){
  const q=this.shadowRoot;
  const checked=checkRoute({productId:p.id,scenario:this.scenario});
  let html='';

  if(this.step==='research'){
   const result=research({priority:this.priority});
   html=`<div class="user-row"><div class="bubble">A phone under ₹40k. ${this.priority==='camera'?'Camera first, battery second.':this.priority==='battery'?'Battery life matters most.':'Keep the upfront price down.'}</div></div><div class="preference-row" role="group" aria-label="Shopping priority"><span>What matters most?</span>${Object.entries(PRIORITIES).map(([k,v])=>`<button class="chip" data-priority="${k}" aria-pressed="${k===this.priority}">${v}</button>`).join('')}</div><p class="assistant-copy">I’d suggest <strong>${result.recommended.name}</strong>. ${result.reason}</p><div class="products">${result.options.map(x=>`<article class="product ${x.id===result.recommended.id?'best':''}"><div class="product-image">${x.id===result.recommended.id?'<span class="suggestion">Suggested for you</span>':''}<img src="assets/phones/${x.id}.svg" alt="Fictional ${x.name}"></div><div class="product-info"><h3>${x.name}</h3><p>${x.trait}<br>${x.variant}</p><strong class="product-price">${money(x.price)}</strong><button class="primary" data-product="${x.id}" aria-label="Choose ${x.name}">This is the one <span aria-hidden="true">→</span></button></div></article>`).join('')}</div>`;
  }else{
   let card='';
   if(this.step==='offer')card=`${this.identity()}<h3 tabindex="-1" data-heading>Your choice. A little more rewarding.</h3><p>Check whether this exact purchase can earn Cashback or Rewards with CashKaro.</p><div class="privacy"><span aria-hidden="true">↗</span>Only this product, merchant and variant are shared. Your conversation stays here.</div>${this.button('check','Check eligible benefit →')}${this.button('direct','Continue without CashKaro',true)}`;

   if(['checking','activating'].includes(this.step))card=`${this.identity()}<h3 tabindex="-1" data-heading>${this.step==='checking'?'Checking this purchase…':'Preparing your route…'}</h3><div class="check-list">${(this.step==='checking'?['Merchant route','Exact product eligibility','Current benefit']:['Your chosen product','Your CashKaro route','Retailer destination']).map(t=>`<div><span aria-hidden="true"></span>${t}</div>`).join('')}</div><p class="fineprint">Simulated checks. No live service is called.</p>`;

   if(this.step==='benefit'){
    if(!checked.ok)card=`${this.identity()}<span class="refusal-icon" aria-hidden="true">!</span><h3 tabindex="-1" data-heading>${checked.reason}</h3><p>${checked.detail}</p>${this.button('direct','Continue without CashKaro →')}${this.button('restart','Try another purchase',true)}`;
    else card=`${this.identity()}<div class="benefit-label">Eligible illustrative offer</div><h3 tabindex="-1" data-heading><strong class="amount">${money(checked.amount)}</strong><span class="amount-caption">estimated ${checked.kind}</span></h3><p class="benefit-subtitle">On your ${this.merchant} purchase. ${checked.kind==='Rewards'?'Restricted gift-card redemption, not bank cash.':'Conditional benefit paid later, not an instant discount.'}</p><dl class="breakdown"><div><dt>Pay today</dt><dd>${money(this.product.price)}</dd></div><div><dt>Potential ${checked.kind} later</dt><dd>${money(checked.amount)}</dd></div></dl><details class="terms"><summary>Eligibility &amp; timing</summary><p>Exact product and variant must qualify. Start before adding to cart or wishlist. Merchant channel, coupon and return conditions apply. Illustrative tracking: within 72 hours; confirmation may take up to 90 days. Real timing must come from approved policy. ${checked.kind==='Rewards'?'Rewards have restricted redemption.':''}</p></details><label class="cart-consent"><input type="checkbox" name="consent" ${this.consent?'checked':''}> <span>I have not added this item to my retailer cart or wishlist.</span></label><button class="primary" data-action="activate" ${!this.consent?'disabled':''}>Continue with ${checked.kind} →</button>${this.button('direct','Continue without CashKaro',true)}<p class="fineprint">By continuing, you activate this simulated affiliate route. CashKaro may receive a commission. No payout is guaranteed.</p>`;
   }

   if(this.step==='ready'){
    const route=this.route;
    if(route?.ok)card=`${this.identity()}<span class="success-icon" aria-hidden="true">✓</span><h3 tabindex="-1" data-heading>Your CashKaro route is ready.</h3><div class="route-line"><span><i>✓</i>Your choice</span>→<span><i>✓</i>CashKaro</span>→<span><i>↗</i>${this.merchant}</span></div><p>${route.kind} is not earned yet. Tracking begins after the retailer reports the order.</p>${this.button('retailer',`Continue to ${this.merchant} →`)}`;
    else card=`${this.identity()}<span class="refusal-icon" aria-hidden="true">!</span><h3 tabindex="-1" data-heading>${route?.reason||'Route unavailable'}</h3><p>${route?.detail||'No route was activated.'}</p>${route?.recoverable?this.button('retry',route.code==='reauth'?'Reconnect and try again →':'Re-check this purchase →'):''}${this.button('direct','Continue without CashKaro'+(route?.recoverable?'':' →'),!!route?.recoverable)}`;
   }

   if(this.atRetailer)card=`<div class="destination-top"><strong>${this.merchant}</strong><span>Simulated destination</span></div><h3 tabindex="-1" data-heading>Your choice made it here.</h3><p>${this.product.name} · ${this.product.variant}<br>${money(this.product.price)} payable to the retailer.</p><p>Checkout, payment, delivery and returns stay with ${this.merchant}.</p><div class="status-note">${this.step==='direct'?'No CashKaro route activated. No benefit claimed.':'Route ready ≠ order tracked ≠ benefit confirmed.'}<br>No order has been placed.</div>${this.button('restart','Try another purchase →')}`;

   html=`<div class="user-row"><div class="bubble">This is the one. I’ll get ${this.product.name} from ${this.merchant}.</div></div><div class="purchase-layout">${this.object()}<section class="${this.atRetailer?'destination':'commerce'}" aria-label="${this.atRetailer?'Retailer handoff':'CashKaro purchase check'}">${card}</section></div>`;
  }

  q.querySelector('.stage').innerHTML=html;
  const phase=this.step==='research'?0:['offer','connect','checking','benefit'].includes(this.step)?1:2;
  q.querySelector('.phase').innerHTML=['Choose a product','Check the benefit','Continue to retailer'].map((t,i)=>`${i?'<i aria-hidden="true"></i>':''}<span class="${phase===i?'current':''}" ${phase===i?'aria-current="step"':''}><b>${i<phase?'✓':i+1}</b>${t}</span>`).join('');
  q.querySelector('.scrollport').scrollTop=0;
 }

 // The connect step is presented as a system-style sheet over the app.
 sheet(){
  const q=this.shadowRoot,sheet=q.querySelector('.sheet'),scrim=q.querySelector('.scrim');
  const open=this.step==='connect';
  sheet.hidden=!open;scrim.hidden=!open;
  if(!open)return;
  sheet.querySelector('.sheet-body').innerHTML=`<div class="commerce sheet-card">${this.identity()}<h3 tabindex="-1" data-heading>Connect CashKaro once.</h3><p>Like any other connector, you approve it once and any supported assistant can call it for a purchase you have already chosen.</p><div class="privacy">Shares the selected product, merchant and variant, plus your CashKaro account identity. Not your conversation. Not payment details.</div>${this.button('connect','Connect demo account →')}${this.button('direct','Continue without CashKaro',true)}<p class="fineprint">Simulated connection. No credentials are collected and no account is created.</p></div>`;
 }

 narrate(){
  const q=this.shadowRoot;
  const [title,copy]=explanations[this.step];
  q.querySelector('.narrate-title').textContent=title;
  q.querySelector('.why').textContent=copy;
  const now=chapterIndex(this.step);
  [...q.querySelectorAll('.chapters li')].forEach((li,i)=>{
   li.classList.toggle('now',i===now);
   li.classList.toggle('done',i<now);
  });
 }

 controls(){
  const t=this.shadowRoot.querySelector('.tour-button');
  t.textContent=this.watching?'Ⅱ Take control':'▷ Play the journey';
  t.classList.toggle('on',this.watching);
 }

 go(step,focus=true){
  const wasRetail=this.atRetailer;
  this.step=step;
  this.render();
  if(this.atRetailer&&!wasRetail){
   const app=this.shadowRoot.querySelector('.layer-app');
   app.classList.remove('switching');void app.offsetWidth;app.classList.add('switching');
  }
  if(focus&&!this.watching){
   this.shadowRoot.querySelector('[data-heading]')?.focus({preventScroll:true});
   this.shadowRoot.querySelector('.sr').textContent=explanations[step][0];
  }
 }

 stopTour(){
  clearTimeout(this.timer);this.timer=null;
  const was=this.watching;
  this.watching=false;
  if(was){
   this.consent=false;this.controls();
   const checkbox=this.shadowRoot.querySelector('[name="consent"]');
   if(checkbox)checkbox.checked=false;
   const activate=this.shadowRoot.querySelector('[data-action="activate"]');
   if(activate)activate.disabled=true;
  }
 }

 async waitThen(step,next){
  this.revision++;
  const revision=this.revision;
  this.go(step);
  await new Promise(r=>setTimeout(r,this.reduce.matches?0:700));
  if(revision!==this.revision||!this.isConnected)return;
  this.go(next);
 }

 async act(action){
  if(action==='dismiss-sheet'){if(this.step==='connect'){this.stopTour();this.go('offer');}return;}

  if(action==='tour'){
   if(this.watching){
    this.stopTour();this.revision++;this.consent=false;
    if(['activating','ready','retailer'].includes(this.step))this.go('benefit');
    return;
   }
   this.revision++;
   this.step='home';this.priority='camera';this.chosen='aster';this.scenario='cash';
   this.shadowRoot.querySelector('#outcome').value='cash';
   this.connected=false;this.consent=false;this.route=null;this.watching=true;
   this.render();this.scheduleTour();
   return;
  }

  const takingControl=this.watching;
  this.stopTour();
  if(takingControl&&['activating','ready','retailer'].includes(this.step)&&!['restart','direct','home'].includes(action)){
   this.revision++;this.consent=false;this.route=null;this.go('benefit');return;
  }

  if(action==='home'){this.revision++;this.consent=false;this.route=null;this.go('home');return;}
  if(action==='restart'){this.revision++;this.consent=false;this.route=null;this.go('research');this.shadowRoot.querySelector('[data-product]')?.focus({preventScroll:true});return;}
  if(action==='direct'){this.revision++;this.go('direct');return;}
  if(action==='retry'){this.revision++;this.consent=false;this.route=null;this.go('offer');return;}
  if(action==='check'){if(this.connected)await this.waitThen('checking','benefit');else this.go('connect');return;}
  if(action==='connect'){this.connected=true;this.toast('CashKaro connected');await this.waitThen('checking','benefit');return;}
  if(action==='activate'&&this.consent){
   this.previewRoute=false;
   this.route=createRoute({productId:this.chosen,scenario:this.scenario,connected:this.connected,consent:this.consent,carted:false});
   await this.waitThen('activating','ready');
   if(this.route?.ok)this.notify('Route ready. Tracking starts when '+this.merchant+' reports the order.');
   return;
  }
  if(action==='retailer'&&this.route?.ok){
   if(this.previewRoute){this.consent=false;this.go('benefit');}
   else this.go('retailer');
  }
 }

 scheduleTour(){
  clearTimeout(this.timer);
  if(!this.watching||document.hidden)return;
  this.timer=setTimeout(()=>{
   const next=TOUR[TOUR.indexOf(this.step)+1];
   if(!next){this.stopTour();return;}
   if(next==='benefit')this.connected=true;
   if(next==='ready'){
    this.previewRoute=true;this.consent=true;
    this.route=createRoute({productId:this.chosen,scenario:'cash',connected:true,consent:true,carted:false});
   }
   this.go(next,false);
   this.scheduleTour();
  },this.step==='home'?2600:4200);
 }
}
customElements.define('ck-walkthrough',CashKaroWalkthrough);
