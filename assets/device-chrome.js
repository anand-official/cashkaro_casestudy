// Device chrome for the connector walkthrough: status bar, home screen and system glyphs.
// Purely presentational. No real operating system, app or account is represented.

export const GLYPHS={
 signal:'<svg viewBox="0 0 18 12" aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>',
 wifi:'<svg viewBox="0 0 16 12" aria-hidden="true"><path d="M8 11.2 5.6 8.3a3.7 3.7 0 0 1 4.8 0Z"/><path d="M8 5.6a6.2 6.2 0 0 1 4 1.5l1.4-1.7a8.4 8.4 0 0 0-10.8 0L4 7.1a6.2 6.2 0 0 1 4-1.5Z" opacity=".9"/><path d="M8 1.6a10.3 10.3 0 0 1 6.6 2.4L16 2.3a12.5 12.5 0 0 0-16 0L1.4 4A10.3 10.3 0 0 1 8 1.6Z" opacity=".75"/></svg>',
 battery:'<svg viewBox="0 0 26 12" aria-hidden="true"><rect x="0.5" y="0.5" width="22" height="11" rx="3.2" fill="none" stroke="currentColor" stroke-opacity=".4"/><rect x="2" y="2" width="15" height="8" rx="2" /><path d="M24 4.3v3.4a2 2 0 0 0 0-3.4Z" opacity=".4"/></svg>'
};

// Fictional home screen. Only the assistant is interactive.
export const APPS=[
 {id:'assistant',name:'Assistant',glyph:'✳',tone:'assistant',live:true},
 {id:'shop',name:'Shop',glyph:'⬚',tone:'shop'},
 {id:'cashkaro',name:'CashKaro',glyph:'₹',tone:'cashkaro'},
 {id:'camera',name:'Camera',glyph:'◉',tone:'camera'},
 {id:'messages',name:'Messages',glyph:'✉',tone:'messages'},
 {id:'photos',name:'Photos',glyph:'❃',tone:'photos'},
 {id:'maps',name:'Maps',glyph:'➤',tone:'maps'},
 {id:'notes',name:'Notes',glyph:'▤',tone:'notes'}
];
export const DOCK=[
 {id:'phone',name:'Phone',glyph:'✆',tone:'phone'},
 {id:'mail',name:'Mail',glyph:'✧',tone:'mail'},
 {id:'browser',name:'Browser',glyph:'◍',tone:'browser'},
 {id:'settings',name:'Settings',glyph:'⚙',tone:'settings'}
];

export const clock=()=>{
 const d=new Date();
 let h=d.getHours()%12; if(!h)h=12;
 return h+':'+String(d.getMinutes()).padStart(2,'0');
};

const icon=a=>`<button type="button" class="app-icon tone-${a.tone}${a.live?' is-live':''}" data-app-open="${a.id}" aria-label="${a.name}${a.live?'':', not part of this concept'}"><span class="glyph" aria-hidden="true">${a.glyph}</span><span class="app-name">${a.name}</span></button>`;

export const homeScreen=()=>`
<div class="home-inner">
 <div class="home-widget" aria-hidden="true"><span class="widget-day">Saturday</span><strong class="widget-date">13</strong><p class="widget-note">Compare phones<br><small>Budget ₹40,000</small></p></div>
 <div class="app-grid">${APPS.map(icon).join('')}</div>
 <div class="page-dots" aria-hidden="true"><i class="on"></i><i></i><i></i></div>
 <div class="dock">${DOCK.map(icon).join('')}</div>
</div>`;

export const statusBar=()=>`
<div class="statusbar" aria-hidden="true">
 <span class="sb-time">${clock()}</span>
 <span class="sb-right">${GLYPHS.signal}${GLYPHS.wifi}${GLYPHS.battery}</span>
</div>`;
