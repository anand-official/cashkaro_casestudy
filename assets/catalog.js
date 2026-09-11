// Deliberate reference snapshots, not a live inventory or eligibility API.
export const snapshotDate = '11 Sep 2026';
export const products = {
  sony: {
    name: 'Sony WH-CH720N', image: 'assets/sony-wh-ch720n-black.jpg',
    subtitle: 'Wireless over-ear headphones · Black · Active noise cancellation',
    weight: 192, battery: 35, foldable: 'Swivel earcups',
    source: 'https://www.sony.co.in/headphones/products/wh-ch720n',
    specs: 'https://www.sony.co.in/headphones/products/wh-ch720n/spec',
    comparison: 'https://cashkaro.com/sony-wh-ch720n-wireless-over-ear-active-noise-cancellation-headphones-with-mic/CKS-Headphones-000435?ppsfacet%5BColour%5D=Black',
    offers: [
      { merchant: 'Amazon', price: 8979, benefit: 90, type: 'rewards', terms: 'https://cashkaro.com/stores/amazon' },
      { merchant: 'Flipkart', price: 14990, benefit: 130, type: 'cash', terms: 'https://cashkaro.com/stores/flipkart' }
    ]
  },
  jbl: {
    name: 'JBL Tune 770NC', image: 'assets/jbl-tune-770nc-black.jpg',
    subtitle: 'Wireless over-ear headphones · Black · Adaptive noise cancellation',
    weight: 232, battery: 44, foldable: 'Foldable',
    source: 'https://www.jbl.com/TUNE770NC.html', specs: 'https://www.jbl.com/TUNE770NC.html',
    comparison: 'https://cashkaro.com/jbl-tune-770nc-wireless-over-ear-anc-headphones-with-mic/CKS-Headphones-000544?ppsfacet%5BColour%5D=Black',
    offers: [
      { merchant: 'Amazon', price: 5999, benefit: 60, type: 'rewards', terms: 'https://cashkaro.com/stores/amazon' },
      { merchant: 'Croma', price: 5999, benefit: 0, type: 'none', terms: 'https://cashkaro.com/stores/croma' },
      { merchant: 'Flipkart', price: 9999, benefit: 130, type: 'cash', terms: 'https://cashkaro.com/stores/flipkart' }
    ]
  }
};
export const money = value => new Intl.NumberFormat('en-IN', {style:'currency', currency:'INR', maximumFractionDigits:0}).format(value);
export function offerCost(offer, sort) {
  return offer.price - ((sort === 'cash' && offer.type === 'cash') || sort === 'rewards' ? offer.benefit : 0);
}
export function reviewLink(value) {
  let url;
  try { url = new URL(value.trim()); } catch { return {error:'Enter a complete https:// product or review link.'}; }
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || !url.hostname.includes('.')) {
    return {error:'Use a public http or https link without sign-in details.'};
  }
  // The demo never fetches this URL. Text matching suggests a model; the user must confirm.
  const text = decodeURIComponent(url.pathname.replace(/%(?![\da-f]{2})/gi, '%25')).toLowerCase();
  const model = /wh[-_]?ch720n|cks-headphones-000435/.test(text) ? 'sony' : /tune[-_]?770nc|cks-headphones-000544/.test(text) ? 'jbl' : null;
  return {url: url.href, model, host: url.hostname};
}
