// Scripted host-assistant research. Fictional data, independent of CashKaro benefits.
import {PRODUCTS} from './router-model.js';
export const PRIORITIES=Object.freeze({camera:'Camera quality',battery:'Battery life',value:'Lower price'});
const orders={camera:['aster','orion','luma'],battery:['orion','aster','luma'],value:['luma','orion','aster']};
export function research({budget=40000,priority='camera'}={}){
 if(![40000,38000,35000].includes(budget)||!orders[priority])return {options:[],recommended:null};
 const options=orders[priority].map(id=>PRODUCTS.find(p=>p.id===id)).filter(p=>p.price<=budget);
 const recommended=options[0];
 const reason=recommended.id==='aster'?'It offers the most versatile cameras in this fictional comparison, with all-day battery life.':recommended.id==='orion'?(priority==='camera'?'It fits your revised budget and offers more camera flexibility than Luma 8, with longer battery life.':'It prioritises battery endurance and retains 256 GB of storage. Its cameras are less versatile than Aster 9’s.'):'It has the lowest upfront price and a lighter build. You give up storage and some camera versatility.';
 return {options,recommended,reason};
}
