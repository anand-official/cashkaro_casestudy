// Device shell styling for the connector walkthrough shadow root.
export const deviceCss=`
.stagewrap{display:grid;grid-template-columns:minmax(0,390px) minmax(0,1fr);gap:clamp(28px,5cqi,68px);align-items:start;justify-content:center;max-width:1000px;margin:auto}

/* ---- Device ---- */
.device{position:sticky;top:24px;width:390px;justify-self:center}
.frame{position:relative;border-radius:56px;padding:11px;background:linear-gradient(148deg,#d8dbdd 0%,#8d9396 18%,#5d6366 32%,#9ca2a4 54%,#6e7477 76%,#c8ccce 100%);box-shadow:0 2px 2px #ffffff70 inset,0 32px 60px -18px #1d2a2a5c,0 10px 24px -12px #1d2a2a40}
.frame:before,.frame:after{content:'';position:absolute;left:-2px;width:3px;border-radius:3px 0 0 3px;background:linear-gradient(90deg,#6b7174,#aeb3b5)}
.frame:before{top:132px;height:30px}
.frame:after{top:180px;height:56px}
.side-power{position:absolute;right:-2px;top:196px;width:3px;height:76px;border-radius:0 3px 3px 0;background:linear-gradient(270deg,#6b7174,#aeb3b5)}
.screen{position:relative;border-radius:46px;overflow:hidden;background:#fff;height:clamp(548px,74vh,812px);display:flex;flex-direction:column;container-type:inline-size;isolation:isolate}

.island{position:absolute;top:11px;left:50%;transform:translateX(-50%);width:118px;height:33px;border-radius:20px;background:#0b0f0e;z-index:9}
.island:after{content:'';position:absolute;right:11px;top:11px;width:9px;height:9px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#2b3a44,#080c0f 70%);box-shadow:0 0 0 1px #ffffff14}
.homebar{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);width:136px;height:5px;border-radius:3px;background:#0e1412;opacity:.32;z-index:9;pointer-events:none}
.screen[data-surface="home"] .homebar{background:#fff;opacity:.85}

.statusbar{position:absolute;top:0;left:0;right:0;z-index:8;display:flex;align-items:center;justify-content:space-between;padding:15px 30px 0;height:54px;font-size:14px;font-weight:650;letter-spacing:-.01em;color:#0d1513;pointer-events:none}
.screen[data-surface="home"] .statusbar{color:#fff}
.sb-time{font-variant-numeric:tabular-nums;padding-left:4px}
.sb-right{display:flex;align-items:center;gap:6px}
.sb-right svg{height:11px;width:auto;fill:currentColor;display:block}
.sb-right svg:last-child{height:12px}

/* ---- Surfaces ---- */
.surfaces{position:absolute;inset:0;display:flex;flex-direction:column;min-height:0}
.layer{position:absolute;inset:0;display:flex;flex-direction:column;min-height:0}
.layer[hidden]{display:none!important}
.layer-app{background:#fff;animation:appLaunch .42s cubic-bezier(.2,.8,.25,1)}
.layer-app.switching{animation:appSwitch .4s cubic-bezier(.3,.7,.2,1)}
@keyframes appLaunch{from{opacity:0;transform:scale(.62);border-radius:34px}to{opacity:1;transform:none;border-radius:0}}
@keyframes appSwitch{from{opacity:0;transform:translateX(38%)}to{opacity:1;transform:none}}

/* ---- Home screen ---- */
.layer-home{background:radial-gradient(120% 85% at 22% 6%,#3f6f77 0%,#274b5c 38%,#1b2f45 70%,#151f33 100%)}
.home-inner{flex:1;display:flex;flex-direction:column;padding:58px 22px 0;min-height:0}
.home-widget{background:#ffffff1f;border:1px solid #ffffff26;border-radius:22px;padding:16px 18px;color:#fff;margin:6px 0 22px;display:grid;grid-template-columns:auto 1fr;gap:2px 16px;align-items:center;backdrop-filter:blur(9px)}
.widget-day{font-size:11px;letter-spacing:.1em;text-transform:uppercase;opacity:.72;grid-column:1}
.widget-date{grid-column:1;grid-row:2;font-size:34px;line-height:1;letter-spacing:-.04em;font-weight:600}
.home-widget .widget-note{grid-column:2;grid-row:1/3;font-size:13px;line-height:1.45;opacity:.92;margin:0}
.home-widget small{opacity:.7;font-size:11px}
.app-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px 14px}
.app-icon{display:grid;justify-items:center;gap:7px;background:none;padding:0;border:0;color:#fff}
.app-icon .glyph{display:grid;place-items:center;width:59px;height:59px;border-radius:16px;font-size:26px;color:#fff;box-shadow:0 5px 12px #0b17231f,0 1px 0 #ffffff30 inset}
.app-icon .app-name{font-size:11px;letter-spacing:-.01em;text-shadow:0 1px 3px #0f1c2a80}
.app-icon:not(.is-live){opacity:.82}
.app-icon.is-live .glyph{position:relative}
.app-icon.is-live .glyph:after{content:'';position:absolute;inset:-5px;border-radius:21px;border:2px solid #ffffffcc;animation:hintPulse 2.4s ease-in-out infinite}
@keyframes hintPulse{0%,100%{opacity:0;transform:scale(.94)}45%{opacity:.85;transform:scale(1)}}
.tone-assistant .glyph{background:linear-gradient(160deg,#7d64d8,#4436a3)}
.tone-shop .glyph{background:linear-gradient(160deg,#f2a65a,#d97534)}
.tone-cashkaro .glyph{background:linear-gradient(160deg,#3d55bb,#22307e);font-weight:700}
.tone-camera .glyph{background:linear-gradient(160deg,#8a9299,#4d5459)}
.tone-messages .glyph{background:linear-gradient(160deg,#5fcf6f,#2f9c48)}
.tone-photos .glyph{background:linear-gradient(160deg,#f5d06a,#e88a5a)}
.tone-maps .glyph{background:linear-gradient(160deg,#62b8e8,#2f74c4)}
.tone-notes .glyph{background:linear-gradient(160deg,#f4e29a,#d8b95f);color:#5b4a17}
.tone-phone .glyph{background:linear-gradient(160deg,#55cc63,#2a8f3d)}
.tone-mail .glyph{background:linear-gradient(160deg,#63aef0,#2c6fc6)}
.tone-browser .glyph{background:linear-gradient(160deg,#79c7d8,#3d7f96)}
.tone-settings .glyph{background:linear-gradient(160deg,#9aa2a7,#5c6367)}
.page-dots{display:flex;gap:7px;justify-content:center;margin:auto 0 14px}
.page-dots i{width:6px;height:6px;border-radius:50%;background:#ffffff4d}
.page-dots i.on{background:#fff}
.dock{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;background:#ffffff1c;border:1px solid #ffffff1f;border-radius:27px;padding:12px 10px;margin-bottom:22px;backdrop-filter:blur(9px)}
.dock .app-name{display:none}

/* ---- App bar ---- */
.appbar{display:flex;align-items:center;gap:11px;padding:58px 18px 12px;border-bottom:1px solid var(--line);flex:none}
.appbar .back{background:none;color:var(--muted);font-size:19px;padding:6px 4px;min-height:36px;line-height:1}
.app-mark{display:grid;place-items:center;width:31px;height:31px;border-radius:10px;font-size:17px;color:#fff;background:linear-gradient(160deg,#7d64d8,#4436a3);flex:none}
.screen[data-app="retailer"] .app-mark{background:linear-gradient(160deg,#f2a65a,#d97534)}
.app-title{font-size:14px;font-weight:650;letter-spacing:-.02em;min-width:0}
.app-title small{display:block;font-size:10.5px;font-weight:400;color:var(--muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.appbar .restart{margin-left:auto;background:none;color:var(--muted);font-size:11px;padding:8px 2px;min-height:36px;white-space:nowrap}

.phase{overflow-x:auto;scrollbar-width:none}
.phase::-webkit-scrollbar{display:none}
.scrollport{flex:1;overflow-y:auto;overflow-x:hidden;min-height:0;scrollbar-width:thin;scrollbar-color:#cbd3c9 transparent;overscroll-behavior:contain}
.scrollport::-webkit-scrollbar{width:5px}
.scrollport::-webkit-scrollbar-thumb{background:#cbd3c9;border-radius:3px}

/* ---- Notification banner ---- */
.notif{position:absolute;top:60px;left:11px;right:11px;z-index:10;display:flex;gap:11px;align-items:center;padding:12px 14px;border-radius:19px;background:#ffffffe8;backdrop-filter:blur(16px);box-shadow:0 10px 26px #14201d2e;animation:notifIn .42s cubic-bezier(.2,.9,.3,1)}
.notif[hidden]{display:none}
.notif img{width:22px;height:22px;object-fit:contain;flex:none}
.notif-body{min-width:0}
.notif-body strong{display:block;font-size:12px;letter-spacing:-.01em}
.notif-body span{display:block;font-size:11px;color:var(--muted);margin-top:2px;line-height:1.4}
@keyframes notifIn{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:none}}

/* ---- Bottom sheet ---- */
.scrim{position:absolute;inset:0;z-index:11;background:#0c1512;opacity:.34;animation:fade .28s ease}
.scrim[hidden]{display:none}
.sheet{position:absolute;left:0;right:0;bottom:0;z-index:12;background:#fff;border-radius:26px 26px 0 0;padding:10px 20px 26px;box-shadow:0 -12px 34px #12201c26;animation:sheetUp .4s cubic-bezier(.2,.85,.3,1);max-height:88%;overflow-y:auto}
.sheet[hidden]{display:none}
.sheet-grab{width:38px;height:4px;border-radius:3px;background:#d5dbd3;margin:0 auto 14px}
.refusal-icon{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:#f4e6d6;color:#9a5527;font-size:23px;font-weight:700;margin-bottom:20px}
.commerce .refusal-icon+h3{color:#7d4a24}
.sheet-card{border:0!important;box-shadow:none!important;padding:0!important;background:none!important;animation:none!important}
@keyframes sheetUp{from{transform:translateY(100%)}to{transform:none}}
@keyframes fade{from{opacity:0}to{opacity:.34}}

/* ---- Toast ---- */
.toast{position:absolute;left:50%;bottom:34px;transform:translateX(-50%);z-index:13;background:#16211ef0;color:#fff;font-size:11.5px;padding:9px 15px;border-radius:19px;animation:fadeUp .3s ease;white-space:nowrap}
.toast[hidden]{display:none}
@keyframes fadeUp{from{opacity:0;transform:translate(-50%,9px)}to{opacity:1;transform:translate(-50%,0)}}

/* ---- Narration panel ---- */
.narrate{padding-top:8px;min-width:0}
.narrate .kicker{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8a7052;font-weight:650;margin-bottom:13px}
.narrate h3{font-size:27px;letter-spacing:-.035em;line-height:1.16;margin-bottom:14px;font-weight:600}
.narrate .why{font-size:14px;line-height:1.68;color:#5a6862;margin-bottom:22px}
.chapters{display:grid;gap:2px;margin-bottom:24px;counter-reset:chapter}
.chapters li{display:flex;gap:12px;align-items:baseline;font-size:12.5px;color:#8b968f;padding:7px 0;border-bottom:1px solid #eceee9;list-style:none}
.chapters li:last-child{border-bottom:0}
.chapters li b{font-size:10.5px;color:#b3bdb6;font-variant-numeric:tabular-nums;min-width:17px}
.chapters li.done{color:#6d7a73}
.chapters li.done b:after{content:' ✓';color:#6f8a5e}
.chapters li.now{color:#22336f;font-weight:600}
.chapters li.now b{color:#22336f}
.narrate ol{padding:0;margin:0}
.playbar{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin-bottom:20px}
.playbar button{border:1px solid #d7ded3;background:#fff;border-radius:24px;padding:9px 15px;font-size:12px;min-height:40px;color:#3f5139}
.playbar button.on{background:#2b3f2b;border-color:#2b3f2b;color:#fff}
.scenario-pick{border-top:1px solid #e7eae5;padding-top:19px}
.scenario-pick label{display:block;font-size:11px;color:var(--muted);margin-bottom:8px}
.scenario-pick select{width:100%;min-height:44px;border:1px solid #cfd7c9;border-radius:9px;padding:10px;font-size:12.5px;color:#3d4f39;background:#fff}
.scenario-pick .hint{font-size:11px;line-height:1.6;color:var(--muted);margin-top:10px}
.scenario-pick a{display:inline-block;margin-top:12px;font-size:12px}

@container(max-width:420px){
 .appbar{padding:56px 14px 11px}
 .home-inner{padding:54px 18px 0}
 .app-grid{gap:17px 10px}
 .app-icon .glyph{width:55px;height:55px;font-size:24px}
}
@container(max-width:900px){
 .device{position:relative;top:0}
 .stagewrap{grid-template-columns:minmax(0,390px);justify-content:center}
 .narrate{max-width:390px;margin:0 auto;border-top:1px solid #e7eae5;padding-top:24px}
 .narrate h3{font-size:23px}
}
@container(max-width:440px){
 .device{width:100%;max-width:390px}
 .frame{padding:8px;border-radius:44px}
 .frame:before,.frame:after,.side-power{display:none}
 .screen{border-radius:37px;height:clamp(520px,78vh,742px)}
 .narrate{max-width:none}
}
@media(prefers-reduced-motion:reduce){
 .layer-app,.layer-app.switching,.notif,.sheet,.scrim,.toast,.app-icon.is-live .glyph:after{animation:none!important}
}
@media print{
 .device{box-shadow:none}
 .frame{background:#e6e9e6;box-shadow:none}
 .screen{height:auto;min-height:560px}
 .playbar,.scenario-pick{display:none}
}
`;
