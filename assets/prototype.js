import {products, snapshotDate, money, offerCost, reviewLink} from './catalog.js';

const $ = selector => document.querySelector(selector);
const all = selector => [...document.querySelectorAll(selector)];
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const key = 'cashkaro-shortlist-v2';
let model = 'sony', priority = 'weight', scenario = 'reference', sort = 'upfront';
let saved = {}, draftNotes = {}, capture = null, handoff = null, lastTrigger = null, toastTimer;
let persistent = true;
try {
  const data = JSON.parse(localStorage.getItem(key) || '{}');
  for (const id of Object.keys(products)) {
    if (data && data[id] && typeof data[id] === 'object') {
      let source = null;
      try { source = reviewLink(String(data[id].source || '')).url || null; } catch { /* Ignore damaged local state. */ }
      saved[id] = {note: String(data[id].note || '').slice(0,500), source};
    }
  }
} catch { persistent = false; }

function toast(message) {
  $('#toast').textContent = message;
  $('#toast').classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 3500);
}
function persist() {
  try { localStorage.setItem(key, JSON.stringify(saved)); persistent = true; }
  catch { persistent = false; }
  $('#storage-status').textContent = persistent ? 'Saved only in this browser. Remove an item to delete its note and source.' : 'Browser storage is unavailable. Changes last only while this page stays open.';
}
function renderSaved() {
  const ids = Object.keys(saved);
  $('#saved-count').textContent = `${ids.length} saved`;
  $('#clear-saved').hidden = !ids.length;
  $('#saved-list').innerHTML = ids.length ? ids.map(id => `<div class="saved-item"><button type="button" data-open="${id}" aria-label="Open saved ${products[id].name}"><img src="${products[id].image}" alt=""><span><strong>${products[id].name}</strong><small>${saved[id].source ? 'Research link saved' : 'Example saved'}${saved[id].note ? ' · Note added' : ''}</small></span></button><button type="button" class="remove-item" data-remove="${id}" aria-label="Remove ${products[id].name}">×</button></div>`).join('') : '<div class="empty-saved"><span aria-hidden="true">＋</span><strong>Your next decision starts here.</strong><p>Save a model with a source or a note. Come back when you’re ready to compare.</p></div>';
}
function renderProduct() {
  const p = products[model], entry = saved[model];
  all('[data-model]').forEach(button => { const active = button.dataset.model === model; button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1; });
  $('#product-view').setAttribute('aria-labelledby', `tab-${model}`);
  $('#product-view').innerHTML = `<div class="product-overview"><div class="product-image"><img src="${p.image}" alt="${p.name} in black" width="450" height="450"></div><div class="product-copy"><span class="pill-label">${entry ? 'In your shortlist' : 'Curated example'}</span><h2>${p.name}</h2><p>${p.subtitle}</p><div class="product-actions"><button id="save-model" class="button ${entry ? 'secondary' : 'primary'}" type="button">${entry ? 'Saved to Shortlist ✓' : 'Save to Shortlist ＋'}</button><a class="text-link" href="${p.source}" target="_blank" rel="noopener noreferrer">Manufacturer ↗</a></div></div></div><div class="decision-note"><label for="product-note">What do you want to remember?</label><textarea id="product-note" rows="2" maxlength="500" placeholder="For example: compare comfort before deciding">${escape(entry?.note ?? draftNotes[model] ?? '')}</textarea><small id="note-message" class="note-message">${entry ? 'Your note saves automatically in this browser.' : 'Add a note, then save this model to keep it.'}</small></div>${entry?.source ? `<div class="source-link-row"><span>Research source</span><a href="${escape(entry.source)}" target="_blank" rel="noopener noreferrer">${escape(new URL(entry.source).hostname)} ↗</a></div>` : ''}`;
}
function renderPriority() {
  const messages = {
    weight: '<strong>Sony is 40 g lighter.</strong> The WH-CH720N is approximately 192 g; JBL lists 232 g. Fit and comfort still need a personal check.',
    battery: '<strong>JBL lists 9 more hours with ANC on.</strong> Up to 44 hours versus Sony’s 35. These are manufacturer claims under different test conditions.',
    price: `<strong>JBL has the lower listed starting price.</strong> ${money(5999)} versus Sony’s ${money(8979)} in the reference snapshot. Delivery and card offers are excluded.`
  };
  $('#priority-result').innerHTML = messages[priority];
  all('[data-priority]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.priority === priority)));
  $('#spec-table').innerHTML = `<table><caption class="visually-hidden">Manufacturer specifications for both headphone models</caption><thead><tr><th scope="col">Specification</th><th scope="col">Sony WH-CH720N</th><th scope="col">JBL Tune 770NC</th></tr></thead><tbody><tr><th scope="row">Weight</th><td>Approx. 192 g</td><td>232 g</td></tr><tr><th scope="row">Battery, ANC on</th><td>Up to 35 h</td><td>Up to 44 h</td></tr><tr><th scope="row">Two-device connection</th><td>Yes</td><td>Yes</td></tr><tr><th scope="row">Portability</th><td>Swivel earcups</td><td>Foldable</td></tr><tr><th scope="row">Source</th><td><a href="${products.sony.specs}" target="_blank" rel="noopener noreferrer">Sony ↗</a></td><td><a href="${products.jbl.specs}" target="_blank" rel="noopener noreferrer">JBL ↗</a></td></tr></tbody></table>`;
}
function renderOffers() {
  const p = products[model];
  const offers = p.offers.map((offer,index)=>({...offer,index})).sort((a,b) => offerCost(a,sort)-offerCost(b,sort));
  $('#ranking-note').textContent = sort === 'upfront' ? 'Ordered by listed price, before conditional benefits and delivery.' : sort === 'cash' ? 'Cash cashback only. Amazon Rewards do not reduce this comparison price.' : 'You chose to include restricted Amazon Rewards value. It is not a cash discount or money off at checkout.';
  $('#offers-list').innerHTML = offers.map((offer,rank) => {
    const stale = scenario === 'stale', unavailable = scenario === 'unavailable' && offer.merchant === 'Amazon';
    const blocked = stale || unavailable;
    const benefit = offer.type === 'rewards' ? 'Amazon Rewards' : offer.type === 'cash' ? 'Cash cashback' : 'No cashback available';
    const deduct = (sort === 'cash' && offer.type === 'cash') || (sort === 'rewards' && offer.type !== 'none');
    const afterLabel = deduct ? (offer.type === 'rewards' ? 'After Rewards value*' : 'After cashback*') : 'Comparison price';
    return `<article class="offer-row ${rank===0 && !blocked ? 'leading' : ''}"><div class="offer-top"><h3 class="merchant-name">${offer.merchant}</h3><span class="offer-badge">${stale ? 'Stale · simulated' : unavailable ? 'Unavailable · simulated' : offer.type === 'none' ? 'Compare without cashback' : 'Reference snapshot'}</span></div><div class="offer-numbers"><div><span>Listed price</span><strong>${money(offer.price)}</strong><small>Pay seller · excludes delivery</small></div><div class="benefit"><span>${benefit}</span><strong>${offer.type==='none' ? '—' : money(offer.benefit)}</strong><small>${offer.type==='rewards' ? 'Conditional · Amazon Pay value' : offer.type==='cash' ? 'Conditional · subject to cap' : 'Current reward must be checked'}</small></div><div><span>${afterLabel}</span><strong>${blocked ? 'Check again' : money(offerCost(offer,sort))}</strong><small>${blocked ? 'Previous estimate is not actionable' : deduct ? '*If eligible and confirmed' : 'No conditional benefit deducted'}</small></div></div>${blocked ? `<p class="offer-warning">${stale ? 'This saved offer needs a fresh eligibility and price check. The affiliate action is blocked.' : 'This scenario blocks the Amazon handoff. Other listed options remain available to review.'}</p>` : ''}<div class="offer-bottom"><p>${offer.type==='rewards' ? 'Rewards are separate from withdrawable cashback.' : offer.type==='cash' ? 'Estimate shown on the source page; actual eligible value may differ.' : 'A useful choice can still have no cashback.'}</p><button class="button ${rank===0&&!blocked ? 'primary' : 'secondary'}" type="button" data-offer="${offer.index}" ${blocked?'disabled':''}>${blocked ? 'Handoff blocked' : offer.type==='none' ? 'Review no-reward option' : 'Review & continue'} <span aria-hidden="true">↗</span></button></div></article>`;
  }).join('') + (scenario === 'stale' ? '<button type="button" class="button secondary" id="refresh-reference">Restore reference snapshot</button><p class="note">This resets the demo. It does not fetch a current merchant offer.</p>' : '');
}
function selectModel(id, focus = false) {
  model = id; renderProduct(); renderOffers();
  if (focus) $(`#tab-${id}`).focus();
}
function saveModel(id, source = null) {
  saved[id] = {note: saved[id]?.note ?? draftNotes[id] ?? '', source: source || saved[id]?.source || null};
  persist(); renderSaved(); selectModel(id); toast(`${products[id].name} saved in this browser.`);
}
function removeModel(id) {
  delete saved[id]; delete draftNotes[id]; persist(); renderSaved(); renderProduct();
  toast(`${products[id].name} removed, including its note and source.`);
}

$('#capture-form').addEventListener('submit', event => {
  event.preventDefault();
  try { capture = reviewLink($('#research-url').value); } catch { capture = {error:'This link could not be read. Check its spelling and try again.'}; }
  const status = $('#capture-status');
  status.classList.toggle('error', Boolean(capture.error));
  status.textContent = capture.error || (capture.model ? 'Possible match from the link text. Please confirm the model; the page has not been fetched.' : 'This demo cannot identify that link. Choose a model only if it matches your research.');
  $('#match-confirm').hidden = Boolean(capture.error);
  $('#match-confirm').innerHTML = capture.error ? '' : `<p><strong>Save ${escape(capture.host)} with:</strong></p>${(capture.model ? [capture.model] : Object.keys(products)).map(id=>`<button class="button secondary" type="button" data-confirm="${id}">Confirm ${products[id].name}</button>`).join('')}<p class="note">Only these two models are supported in the demo.</p>`;
});
$('#load-example').addEventListener('click', () => {
  $('#research-url').value = products.sony.source;
  $('#capture-form').requestSubmit();
  $('#match-confirm button')?.focus();
});
$('#match-confirm').addEventListener('click', event => {
  const button = event.target.closest('[data-confirm]');
  if (!button || !capture?.url) return;
  saveModel(button.dataset.confirm, capture.url);
  $('#match-confirm').hidden = true;
  $('#capture-status').textContent = 'Source saved with your confirmed model. No page content was imported.';
  $('#research-url').value = '';
  $('#product-note').focus();
});
$('#saved-list').addEventListener('click', event => {
  const open = event.target.closest('[data-open]'), remove = event.target.closest('[data-remove]');
  if (open) selectModel(open.dataset.open);
  if (remove) { removeModel(remove.dataset.remove); $('#save-model').focus(); }
});
$('#product-view').addEventListener('click', event => {
  if (event.target.closest('#save-model')) {
    if (saved[model]) toast('Already saved. Your note updates automatically.');
    else { saveModel(model); $('#save-model').focus(); }
  }
});
$('#product-view').addEventListener('input', event => {
  if (event.target.id !== 'product-note') return;
  draftNotes[model] = event.target.value;
  if (saved[model]) {
    saved[model].note = event.target.value; persist(); renderSaved();
    $('#note-message').textContent = persistent ? 'Note saved in this browser.' : 'Note kept for this visit; browser storage is unavailable.';
  }
});
all('[data-model]').forEach(button => {
  button.addEventListener('click', () => selectModel(button.dataset.model));
  button.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    selectModel(event.key === 'Home' ? 'sony' : event.key === 'End' ? 'jbl' : model === 'sony' ? 'jbl' : 'sony', true);
  });
});
all('[data-priority]').forEach(button => button.addEventListener('click', () => { priority = button.dataset.priority; renderPriority(); }));
$('#offer-sort').addEventListener('change', event => { sort = event.target.value; renderOffers(); });
$('#scenario').addEventListener('change', event => { scenario = event.target.value; renderOffers(); });
$('#clear-saved').addEventListener('click', () => {
  saved = {}; draftNotes = {}; persist(); renderSaved(); renderProduct();
  toast('Saved items, notes and research sources cleared.'); $('#research-url').focus();
});
$('#reset-demo').addEventListener('click', () => {
  saved = {}; draftNotes = {}; capture = null; handoff = null; scenario = 'reference'; sort = 'upfront'; priority = 'weight';
  $('#scenario').value = scenario; $('#offer-sort').value = sort; $('#research-url').value = '';
  $('#capture-status').textContent = ''; $('#match-confirm').hidden = true;
  persist(); renderSaved(); selectModel('sony'); renderPriority(); toast('Demo reset. Only Shortlist’s own saved data was cleared.');
});

const dialog = $('#handoff-dialog');
function renderHandoff() {
  const {offer, id, state} = handoff, p = products[id];
  if (state === 'review') {
    const hasBenefit = offer.type !== 'none';
    $('#dialog-content').innerHTML = `<p class="dialog-eyebrow">Review the route · ${offer.merchant}</p><h2 id="dialog-title">A clear choice before you continue.</h2><p>${p.name} · Black</p><div class="dialog-amount"><div><span>Reference listed price</span><strong>${money(offer.price)}</strong></div><div><span>${offer.type==='rewards' ? 'Conditional Amazon Rewards' : offer.type==='cash' ? 'Conditional cashback' : 'Cashback'}</span><strong>${hasBenefit ? money(offer.benefit) : 'Not available'}</strong></div></div><ul class="dialog-terms"><li>Confirm the exact model, seller, stock, delivery charge and latest price.</li>${hasBenefit ? `<li>CashKaro’s public ${offer.merchant} terms restrict pre-existing cart, wishlist or saved-for-later items. Start a fresh eligible journey; check the full current exclusions.</li><li>${offer.type==='rewards' ? 'Amazon Rewards are conditional value redeemable through Amazon Pay, not withdrawable cash.' : 'The source snapshot shows ₹130 cashback. Category caps, eligible amount, returns and current exclusions can change the final value.'}</li><li>Use only an approved merchant route in a real launch. This prototype has no affiliate contract or tracking integration.</li>` : '<li>No cashback is offered in this reference row. You can still compare the retailer on price and service.</li>'}<li>This demo uses the ${snapshotDate} snapshot. It does not run a live eligibility check.</li></ul><p><a href="${offer.terms}" target="_blank" rel="noopener noreferrer">Read current CashKaro ${offer.merchant} terms ↗</a></p><div class="eligibility-check"><label><input id="acknowledge" type="checkbox"><span>I understand the conditions and that this is a simulated handoff.</span></label></div><div class="dialog-actions"><button type="button" class="button primary" id="simulate-handoff" disabled>Simulate handoff ↗</button><button type="button" class="button secondary" id="cancel-handoff">Keep researching</button></div><p class="note">No retailer cart, purchase, referral cookie or cashback is created.</p>`;
  } else {
    const states = {
      awaiting: ['Click-out recorded in demo.', 'No retailer order has been reported. A click-out is not a tracked order.'],
      pending: ['Simulated tracked order · pending.', 'The retailer has reported an order in this scenario. Cashback has not been confirmed or paid.'],
      confirmed: ['Simulated benefit confirmed.', 'This scenario represents retailer confirmation after eligibility checks. No real order or payment exists.'],
      rejected: ['Simulated order rejected.', 'This scenario represents a rejected benefit. The shopper should see the reason and a support route; the prototype does not invent a retailer reason.']
    };
    const [title, description] = offer.type === 'none' ? ['No-reward route reviewed.', 'This comparison has no approved affiliate tracking path in the demo. No cashback or tracked order is implied.'] : states[state];
    $('#dialog-content').innerHTML = `<p class="dialog-eyebrow">Demo status · ${offer.merchant}</p><h2 id="dialog-title">${title}</h2><p>${p.name} · Black</p><div class="timeline-status"><p><strong>1. Research preserved</strong>Your product choice stays in this browser if you saved it.</p><p><strong>2. Shopper chose a merchant</strong>Only a simulated click-out has occurred here.</p><p><strong>3. ${state==='awaiting' ? 'Await retailer evidence' : 'Demonstration update'}</strong>${description}</p></div>${offer.type==='none' ? '<div class="warning-box">This is a no-reward route. No cashback is promised; do not count it as a CashKaro tracked order without an actual approved tracking path.</div>' : ''}${offer.type === 'none' ? '' : `<div class="status-controls"><label for="demo-order-status">Explore a retailer-report scenario</label><select id="demo-order-status"><option value="awaiting">No order reported</option><option value="pending">Tracked · pending validation</option><option value="confirmed">Benefit confirmed</option><option value="rejected">Benefit rejected</option></select><button type="button" class="button secondary" id="apply-status">Apply simulated update</button></div>`}<div class="dialog-actions"><button type="button" class="button primary" id="finish-handoff">Back to Shortlist</button><a class="text-link" href="${p.comparison}" target="_blank" rel="noopener noreferrer">View current CashKaro comparison ↗</a></div><p class="note">These controls illustrate states. They do not send events to CashKaro, pay rewards, or represent a working claims service.</p>`;
    if ($('#demo-order-status')) $('#demo-order-status').value = state;
  }
}
$('#offers-list').addEventListener('click', event => {
  if (event.target.closest('#refresh-reference')) {
    scenario = 'reference'; $('#scenario').value = scenario; renderOffers();
    toast('Reference snapshot restored; no live offer was fetched.'); return;
  }
  const button = event.target.closest('[data-offer]');
  if (!button || button.disabled || scenario === 'stale') return;
  const offer = products[model].offers[Number(button.dataset.offer)];
  if (scenario === 'unavailable' && offer.merchant === 'Amazon') return;
  handoff = {id:model, offer, state:'review'}; lastTrigger = button; renderHandoff(); dialog.showModal();
});
dialog.addEventListener('change', event => {
  if (event.target.id === 'acknowledge') $('#simulate-handoff').disabled = !event.target.checked;
});
dialog.addEventListener('click', event => {
  if (event.target.closest('.dialog-close, #cancel-handoff, #finish-handoff')) dialog.close();
  if (event.target.closest('#simulate-handoff') && $('#acknowledge')?.checked) {
    handoff.state = 'awaiting'; renderHandoff(); $('#dialog-title').tabIndex = -1; $('#dialog-title').focus();
  }
  if (event.target.closest('#apply-status')) {
    handoff.state = $('#demo-order-status').value; renderHandoff(); $('#dialog-title').tabIndex = -1; $('#dialog-title').focus();
  }
});
dialog.addEventListener('close', () => { if (lastTrigger?.isConnected) lastTrigger.focus(); });
renderSaved(); renderProduct(); renderPriority(); renderOffers();
if (!persistent) $('#storage-status').textContent = 'Browser storage is unavailable. Changes last only while this page stays open.';
