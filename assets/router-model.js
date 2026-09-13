// Deterministic prototype fixtures. Not CashKaro rates, APIs or partner approvals.
export const PRODUCTS=Object.freeze([
 {id:'aster',name:'Aster 9',variant:'256 GB · Graphite',price:39999,trait:'Camera first',detail:'Balanced daylight and low-light cameras; all-day battery. The closest fit to your stated priorities.',color:'sage'},
 {id:'orion',name:'Orion S',variant:'256 GB · Midnight',price:37999,trait:'Battery first',detail:'Longer battery life; a less versatile camera. Choose it if endurance matters more than low-light photos.',color:'blue'},
 {id:'luma',name:'Luma 8',variant:'128 GB · Sand',price:34999,trait:'Lower upfront price',detail:'Good everyday photos and a lighter build; less storage and fewer camera options.',color:'sand'}
]);
export const SCENARIOS=Object.freeze({cash:{label:'Estimated Cashback',kind:'Cashback',amount:1200,merchant:'Flipkart'},small:{label:'Small capped benefit',kind:'Cashback',amount:65,merchant:'Flipkart'},rewards:{label:'Restricted Rewards',kind:'Rewards',amount:300,merchant:'Amazon'},zero:{label:'No eligible benefit',kind:'Cashback',amount:0,merchant:'Flipkart'},unsupported:{label:'Unsupported merchant',merchant:'Example retailer'},uncertain:{label:'Product context missing',merchant:'Flipkart'},stale:{label:'Policy expired',merchant:'Flipkart'},failure:{label:'Route service fails',kind:'Cashback',amount:1200,merchant:'Flipkart'},standdown:{label:'Earlier affiliate referral',merchant:'Flipkart'}});
export const money=n=>'₹'+Number(n).toLocaleString('en-IN');
export function checkRoute({productId,scenario,carted=false}){
 const p=PRODUCTS.find(x=>x.id===productId),s=SCENARIOS[scenario];
 if(!p||!s)return {ok:false,reason:'Purchase context could not be verified',code:'invalid'};
 if(carted)return {ok:false,reason:'This purchase needs a fresh eligible journey',detail:'You said the item was already in your cart or wishlist. This demo cannot establish eligibility or clear that state.',code:'carted'};
 const errors={unsupported:['This merchant route is not supported','Keep your product choice and continue directly.'],uncertain:['Cashback eligibility could not be verified','The exact product or variant is missing. A general merchant rate is not enough.'],stale:['The benefit policy needs a fresh check','We will not activate a route against an expired policy.'],standdown:['CashKaro will not replace this referral','This scenario contains an earlier affiliate referral without permission to reattribute. Continue using the original route.']};
 if(errors[scenario])return {ok:false,reason:errors[scenario][0],detail:errors[scenario][1],code:scenario};
 if(s.amount===0)return {ok:false,reason:'No Cashback is available for this purchase',detail:'A supported retailer does not make every product eligible. Keep your choice and continue without CashKaro.',code:'zero'};
 return {ok:true,product:p,merchant:s.merchant,kind:s.kind,amount:s.amount,payToday:p.price,conditionalValue:s.kind==='Cashback'?p.price-s.amount:null,policyVersion:'SIMULATED-POLICY-01',source:'fictional fixture'};
}
export function createRoute(input){
 const checked=checkRoute(input);
 if(!checked.ok)return checked;
 if(!input.connected)return {ok:false,reason:'Connect CashKaro before creating a route',code:'identity'};
 if(!input.consent)return {ok:false,reason:'Explicit activation is required',code:'consent'};
 if(input.scenario==='failure')return {ok:false,reason:'We could not create your CashKaro route',detail:'No route was activated. Your product choice is safe; continue without CashKaro or try again.',code:'service'};
 return {...checked,routeId:`demo-${input.productId}-${input.scenario}`,destination:'simulated-retailer',activated:true};
}
