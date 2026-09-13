// Host profiles for the walkthrough.
//
// These are ORIGINAL, clearly-stylised interpretations used to show that one connector
// behaves consistently across different assistants. The marks below are simple geometric
// shapes drawn for this concept; they are not the platforms' trademarked logos, and no
// affiliation, endorsement or approved integration is claimed or implied. Names are used
// descriptively to identify which surface is being illustrated.

export const HOSTS={
 chatgpt:{
  id:'chatgpt',
  name:'ChatGPT',
  vendor:'OpenAI',
  // Near-monochrome, dense, utilitarian.
  accent:'#0d0d0d',
  onAccent:'#fff',
  appBg:'#ffffff',
  threadBg:'#ffffff',
  userBubble:'#f4f4f4',
  userText:'#0d0d0d',
  botText:'#0d0d0d',
  markBg:'#0d0d0d',
  composerBg:'#ffffff',
  composerBorder:'#d9d9d9',
  composerRadius:'26px',
  sendShape:'50%',
  font:`"Segoe UI",system-ui,-apple-system,sans-serif`,
  placeholder:'Ask anything',
  directoryLabel:'Connectors',
  directoryBlurb:'Apps and services ChatGPT can use while it answers. You approve each one once.',
  greeting:'Connected. Tell me what you are shopping for and I will compare options. If a purchase can earn a benefit, I will check it before you continue.',
  toolVerb:'Using CashKaro',
  mark:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2 4.8 7.4v9.2L12 20.8l7.2-4.2V7.4Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 3.2v17.6M4.8 7.4 19.2 16.6M19.2 7.4 4.8 16.6" stroke="currentColor" stroke-width="1.1" opacity=".55"/></svg>`
 },
 claude:{
  id:'claude',
  name:'Claude',
  vendor:'Anthropic',
  // Warm paper, terracotta accent, roomier type.
  accent:'#c2613f',
  onAccent:'#fff',
  appBg:'#faf9f6',
  threadBg:'#faf9f6',
  userBubble:'#efece4',
  userText:'#2c2a26',
  botText:'#2c2a26',
  markBg:'#c2613f',
  composerBg:'#ffffff',
  composerBorder:'#e2ddd1',
  composerRadius:'16px',
  sendShape:'9px',
  font:`"Georgia",ui-serif,serif`,
  placeholder:'How can I help you today?',
  directoryLabel:'Connectors',
  directoryBlurb:'Tools Claude can call on your behalf. Each one is approved separately and can be revoked.',
  greeting:'Connected. Tell me what you are shopping for and I will lay out the trade-offs. If a purchase can earn a benefit, I will check it before you continue.',
  toolVerb:'Calling CashKaro',
  mark:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.6 6.4 20.4M17.6 3.6 12 20.4" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M9.2 12.6h8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" opacity=".65"/></svg>`
 },
 gemini:{
  id:'gemini',
  name:'Gemini',
  vendor:'Google',
  // Cool, light, gradient-forward.
  accent:'#3064d6',
  onAccent:'#fff',
  appBg:'#ffffff',
  threadBg:'#ffffff',
  userBubble:'#e8f0fe',
  userText:'#17233b',
  botText:'#1d2430',
  markBg:'linear-gradient(135deg,#4a8cf7,#8a5cf0)',
  composerBg:'#f1f3f7',
  composerBorder:'#e1e6ef',
  composerRadius:'26px',
  sendShape:'50%',
  font:`"Segoe UI",system-ui,-apple-system,sans-serif`,
  placeholder:'Ask Gemini',
  directoryLabel:'Extensions',
  directoryBlurb:'Services Gemini can connect to. You stay in control of what each one may see.',
  greeting:'Connected. Tell me what you are shopping for and I will compare the options. If a purchase can earn a benefit, I will check it before you continue.',
  toolVerb:'Using CashKaro',
  mark:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6c.5 4.7 4.1 8.3 8.8 8.8-4.7.5-8.3 4.1-8.8 8.8-.5-4.7-4.1-8.3-8.8-8.8 4.7-.5 8.3-4.1 8.8-8.8Z" fill="currentColor"/></svg>`
 },
 share:{
  id:'share',
  name:'Share to CashKaro',
  vendor:'Fallback surface',
  accent:'#263c94',
  onAccent:'#fff',
  appBg:'#ffffff',
  threadBg:'#f7f8f5',
  userBubble:'#eef1e9',
  userText:'#22302c',
  botText:'#22302c',
  markBg:'#263c94',
  composerBg:'#f3f5f1',
  composerBorder:'#dfe4da',
  composerRadius:'22px',
  sendShape:'50%',
  font:`Inter,system-ui,sans-serif`,
  placeholder:'Paste a product link',
  directoryLabel:'Connected accounts',
  directoryBlurb:'The fallback surface. No host cooperation is required, because the shopper brings the link themselves.',
  greeting:'Share a product link from any retailer and I will check whether it can earn a benefit before you continue.',
  toolVerb:'Checking with CashKaro',
  mark:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.5V4m0 0L8.2 7.8M12 4l3.8 3.8" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 13v5.5a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V13" stroke="currentColor" stroke-width="1.9" fill="none" stroke-linecap="round"/></svg>`
 }
};

export const HOST_ORDER=['chatgpt','claude','gemini','share'];

// Each host frames the same three questions its own way. Wording differs; the answer does not.
export const HOST_QUERIES={
 chatgpt:['I need a phone under ₹40,000. Camera matters most.','Best battery life under ₹40,000?','Cheapest decent phone under ₹40,000.'],
 claude:['I need a phone under ₹40,000. Camera matters most.','Which of these lasts longest on a charge?','What is the best value under ₹40,000?'],
 gemini:['Find me a phone under ₹40,000 with a great camera','Longest battery under ₹40,000','Best value phone under ₹40,000'],
 share:['Shared: Aster 9 · 256 GB from Flipkart','Shared: Orion S · 256 GB from Flipkart','Shared: Luma 8 · 128 GB from Flipkart']
};

export const hostVars=h=>`--h-accent:${h.accent};--h-on-accent:${h.onAccent};--h-app-bg:${h.appBg};--h-thread-bg:${h.threadBg};--h-user-bubble:${h.userBubble};--h-user-text:${h.userText};--h-bot-text:${h.botText};--h-mark-bg:${h.markBg};--h-composer-bg:${h.composerBg};--h-composer-border:${h.composerBorder};--h-composer-radius:${h.composerRadius};--h-send-shape:${h.sendShape};--h-font:${h.font};`;
