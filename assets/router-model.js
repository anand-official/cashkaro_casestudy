// Deterministic prototype fixtures. Not CashKaro rates, APIs or partner approvals.
export const PRODUCTS=Object.freeze([
 {id:'aster',name:'Aster 9',variant:'256 GB · Graphite',price:39999,trait:'Camera first',detail:'Balanced daylight and low-light cameras; all-day battery. The closest fit to your stated priorities.',color:'sage'},
 {id:'orion',name:'Orion S',variant:'256 GB · Midnight',price:37999,trait:'Battery first',detail:'Longer battery life; a less versatile camera. Choose it if endurance matters more than low-light photos.',color:'blue'},
 {id:'luma',name:'Luma 8',variant:'128 GB · Sand',price:34999,trait:'Lower upfront price',detail:'Good everyday photos and a lighter build; less storage and fewer camera options.',color:'sand'}
]);

// Every scenario is a test case for the connector. `stage` records where it is expected to stop.
export const SCENARIOS=Object.freeze({
 cash:{label:'Estimated Cashback · ₹1,200',kind:'Cashback',amount:1200,merchant:'Flipkart',stage:'pass',group:'Benefit outcomes'},
 small:{label:'Small capped benefit · ₹65',kind:'Cashback',amount:65,merchant:'Flipkart',stage:'pass',group:'Benefit outcomes'},
 rewards:{label:'Restricted Rewards · ₹300',kind:'Rewards',amount:300,merchant:'Amazon',stage:'pass',group:'Benefit outcomes'},
 zero:{label:'No eligible benefit',kind:'Cashback',amount:0,merchant:'Flipkart',stage:'check',group:'Benefit outcomes'},
 unsupported:{label:'Unsupported merchant',merchant:'Example retailer',stage:'check',group:'Eligibility refusals'},
 uncertain:{label:'Product context missing',merchant:'Flipkart',stage:'check',group:'Eligibility refusals'},
 stale:{label:'Policy expired',merchant:'Flipkart',stage:'check',group:'Eligibility refusals'},
 coupon:{label:'Third-party coupon applied',merchant:'Flipkart',stage:'check',group:'Eligibility refusals'},
 cod:{label:'Cash on delivery excluded',merchant:'Flipkart',stage:'check',group:'Eligibility refusals'},
 newcustomer:{label:'New-customer-only benefit',merchant:'Amazon',stage:'check',group:'Eligibility refusals'},
 standdown:{label:'Earlier affiliate referral',merchant:'Flipkart',stage:'check',group:'Attribution limits'},
 offline:{label:'Connector unreachable',merchant:'Flipkart',stage:'check',group:'Service failures'},
 reauth:{label:'Connector authorisation expired',kind:'Cashback',amount:1200,merchant:'Flipkart',stage:'route',group:'Service failures'},
 ratecut:{label:'Benefit reduced at revalidation',kind:'Cashback',amount:1200,revalidatedTo:400,merchant:'Flipkart',stage:'route',group:'Revalidation'},
 pricechange:{label:'Retailer price changed',kind:'Cashback',amount:1200,newPrice:42499,merchant:'Flipkart',stage:'route',group:'Revalidation'},
 failure:{label:'Route service fails',kind:'Cashback',amount:1200,merchant:'Flipkart',stage:'route',group:'Service failures'}
});

export const money=n=>'₹'+Number(n).toLocaleString('en-IN');

const CHECK_ERRORS={
 unsupported:['This merchant route is not supported','Keep your product choice and continue directly.'],
 uncertain:['Cashback eligibility could not be verified','The exact product or variant is missing. A general merchant rate is not enough.'],
 stale:['The benefit policy needs a fresh check','We will not activate a route against an expired policy.'],
 standdown:['CashKaro will not replace this referral','This scenario contains an earlier affiliate referral without permission to reattribute. Continue using the original route.'],
 coupon:['A third-party coupon is already applied','Retailer policies commonly void affiliate commission when an outside coupon is used. Showing a benefit we would not be paid is worse than showing none.'],
 cod:['Cash on delivery is excluded here','This fictional policy pays only on prepaid orders. Change the payment method at the retailer, or continue without CashKaro.'],
 newcustomer:['This benefit is for new retailer customers','This account has bought from the retailer before, so the advertised rate does not apply to it.'],
 offline:['CashKaro could not be reached','The connector did not respond. Your product choice is untouched. Continue to the retailer, or try again.']
};

export function checkRoute({productId,scenario,carted=false}){
 const p=PRODUCTS.find(x=>x.id===productId),s=SCENARIOS[scenario];
 if(!p||!s)return {ok:false,reason:'Purchase context could not be verified',code:'invalid'};
 if(carted)return {ok:false,reason:'This purchase needs a fresh eligible journey',detail:'You said the item was already in your cart or wishlist. This demo cannot establish eligibility or clear that state.',code:'carted'};
 const e=CHECK_ERRORS[scenario];
 if(e)return {ok:false,reason:e[0],detail:e[1],code:scenario};
 if(s.amount===0)return {ok:false,reason:'No Cashback is available for this purchase',detail:'A supported retailer does not make every product eligible. Keep your choice and continue without CashKaro.',code:'zero'};
 return {ok:true,product:p,merchant:s.merchant,kind:s.kind,amount:s.amount,payToday:p.price,conditionalValue:s.kind==='Cashback'?p.price-s.amount:null,policyVersion:'SIMULATED-POLICY-01',source:'fictional fixture'};
}

export function createRoute(input){
 const checked=checkRoute(input);
 if(!checked.ok)return checked;
 if(!input.connected)return {ok:false,reason:'Connect CashKaro before creating a route',code:'identity'};
 if(!input.consent)return {ok:false,reason:'Explicit activation is required',code:'consent'};
 const s=SCENARIOS[input.scenario];
 if(input.scenario==='reauth')return {ok:false,reason:'Your CashKaro connection needs renewing',detail:'The stored authorisation expired. Reconnect the account to create a route. Nothing about this purchase was shared in the meantime.',code:'reauth',recoverable:true};
 if(input.scenario==='ratecut')return {ok:false,reason:'This benefit is now '+money(s.revalidatedTo)+', not '+money(s.amount),detail:'The rate changed between the check and the route. The lower amount needs your confirmation before anything is activated.',code:'revalidated',recoverable:true,revisedAmount:s.revalidatedTo};
 if(input.scenario==='pricechange')return {ok:false,reason:'The retailer price changed to '+money(s.newPrice),detail:'The route was not created against a stale price. Re-check the purchase, or continue to the retailer and decide there.',code:'pricechange',recoverable:true};
 if(input.scenario==='failure')return {ok:false,reason:'We could not create your CashKaro route',detail:'No route was activated. Your product choice is safe; continue without CashKaro or try again.',code:'service'};
 return {...checked,routeId:'demo-'+input.productId+'-'+input.scenario,destination:'simulated-retailer',activated:true};
}
