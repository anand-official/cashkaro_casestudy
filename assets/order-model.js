// Deterministic prototype logic. No CashKaro service or approved policy is connected.
export const TODAY = '2026-09-11';
const DAY = 86400000;
export function dateValue(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return NaN;
  const parsed = Date.parse(value + 'T00:00:00Z');
  return Number.isFinite(parsed) && new Date(parsed).toISOString().slice(0,10) === value ? parsed : NaN;
}
export function addDays(date, days) { return new Date(dateValue(date) + days * DAY).toISOString().slice(0,10); }
export function purchaseError(date, visitDate, today=TODAY) {
  if (!Number.isFinite(dateValue(date))) return 'Enter a valid purchase date.';
  if (dateValue(date) > dateValue(today)) return 'The purchase date cannot be in the future.';
  if (dateValue(date) < dateValue(visitDate)) return 'This purchase predates the saved visit. Use the matching earlier visit or contact support.';
  return '';
}
export function claimWindow({purchaseDate, visitDate, bought, state, policy, today=TODAY}) {
  if (state === 'no-order' || !bought) return {kind:'unknown'};
  if (['tracked','confirmed','cancelled'].includes(state)) return {kind:'observed'};
  if (purchaseError(purchaseDate,visitDate,today)) return {kind:'invalid'};
  if (policy !== 'approved') return {kind:'conflict'};
  const opens = addDays(purchaseDate,3), closes = addDays(purchaseDate,30);
  const remaining = Math.round((dateValue(closes)-dateValue(today))/DAY);
  return {kind:today<opens?'early':today>closes?'expired':'open',opens,closes,remaining};
}
export function reminderDecision(input) {
  const w=claimWindow(input);
  if (!input.optedIn) return {eligible:false,reason:'Service reminder is off.'};
  if (input.alreadyNotified) return {eligible:false,reason:'One reminder has already been shown for this visit.'};
  if (!input.bought || input.state === 'no-order') return {eligible:false,reason:'A retailer visit does not establish that you ordered.'};
  if (['tracked','confirmed','cancelled'].includes(input.state)) return {eligible:false,reason:'A status is already recorded; use the existing status message.'};
  if (input.draft) return {eligible:false,reason:'A support draft is already prepared; no duplicate missing-order reminder.'};
  if (w.kind !== 'open' || w.remaining>3) return {eligible:false,reason:w.kind==='conflict'?'A verified claim policy is required.':w.kind==='expired'?'The example window has passed; use support guidance.':'No approaching, verified action window.'};
  return {eligible:true,date:w.closes};
}
export function walletView(cash, rewards, pending=0) {
  return {cash,rewards,pending,bankAvailable:cash>=250,giftAvailable:cash+rewards>=250,bankGap:Math.max(0,250-cash),giftGap:Math.max(0,250-cash-rewards)};
}
