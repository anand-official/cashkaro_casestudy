// Device shell for the connector walkthrough shadow root.
// Proportions follow a real handset (9:19.5) so height is always derived from width.
export const deviceCss=`
:host{--pw:390px;--blue:#263c94;--muted:#65716b;--line:#e6e9e3}
.stagewrap{display:grid;grid-template-columns:minmax(0,390px) minmax(0,1fr);gap:clamp(26px,4cqi,64px);align-items:start;justify-content:center;max-width:1020px;margin:auto}

/* ---- Device ---- */
.device{position:sticky;top:24px;width:100%;max-width:390px;justify-self:center}
.frame{position:relative;border-radius:14.2%/6.9%;padding:2.9%;background:linear-gradient(146deg,#dfe2e4 0%,#8f9599 17%,#5c6266 31%,#a0a6a8 53%,#6d7376 75%,#cbcfd1 100%);box-shadow:0 2px 2px #ffffff66 inset,0 30px 58px -20px #16232359,0 8px 20px -10px #16232340}
.frame:before,.frame:after{content:'';position:absolute;left:-2px;width:3px;border-radius:3px 0 0 3px;background:linear-gradient(90deg,#6b7174,#b0b5b7)}
.frame:before{top:15.6%;height:3.6%}
.frame:after{top:21.4%;height:6.7%}
.side-power{position:absolute;right:-2px;top:23.2%;width:3px;height:9%;border-radius:0 3px 3px 0;background:linear-gradient(270deg,#6b7174,#b0b5b7)}
.screen{position:relative;border-radius:11.6%/5.7%;overflow:hidden;background:#fff;aspect-ratio:9/19.5;display:flex;flex-direction:column;container-type:inline-size;isolation:isolate}

.island{position:absolute;top:2.6%;left:50%;transform:translateX(-50%);width:30%;height:3.9%;border-radius:20px;background:#0a0e0d;z-index:9}
.island:after{content:'';position:absolute;right:11%;top:50%;transform:translateY(-50%);width:9px;height:9px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#2c3b45,#070b0e 70%);box-shadow:0 0 0 1px #ffffff12}
.homebar{position:absolute;bottom:1%;left:50%;transform:translateX(-50%);width:35%;height:4px;border-radius:3px;background:#0e1412;opacity:.3;z-index:9;pointer-events:none}
.screen[data-surface="home"] .homebar{background:#fff;opacity:.85}

.statusbar{position:absolute;top:0;left:0;right:0;z-index:8;display:flex;align-items:center;justify-content:space-between;padding:0 7.5%;height:14.3cqw;font-size:13.5px;font-weight:650;letter-spacing:-.01em;color:#0d1513;pointer-events:none}
.screen[data-surface="home"] .statusbar{color:#fff}
.sb-time{font-variant-numeric:tabular-nums;padding-left:4px}
.sb-right{display:flex;align-items:center;gap:5px}
.sb-right svg{height:11px;width:auto;fill:currentColor;display:block}
.sb-right svg:last-child{height:12px}

/* ---- Surfaces ---- */
.surfaces{position:absolute;inset:0;display:flex;flex-direction:column}
.layer{position:absolute;inset:0;display:flex;flex-direction:column;min-height:0}
.layer[hidden]{display:none!important}
.layer-app{background:var(--h-app-bg,#fff);animation:appLaunch .44s cubic-bezier(.2,.8,.25,1)}
@keyframes appLaunch{from{opacity:0;transform:scale(.64);border-radius:34px}to{opacity:1;transform:none;border-radius:0}}

/* ---- Home screen ---- */
.layer-home{background:radial-gradient(120% 85% at 22% 6%,#3f6f77 0%,#274b5c 38%,#1b2f45 70%,#151f33 100%)}
.home-inner{flex:1;display:flex;flex-direction:column;padding:16cqw 6% 0;min-height:0}
.home-widget{background:#ffffff1f;border:1px solid #ffffff26;border-radius:22px;padding:14px 16px;color:#fff;margin:0 0 6%;display:grid;grid-template-columns:auto 1fr;gap:2px 15px;align-items:center;backdrop-filter:blur(9px)}
.widget-day{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;opacity:.72}
.widget-date{grid-row:2;font-size:32px;line-height:1;letter-spacing:-.04em;font-weight:600}
.home-widget .widget-note{grid-column:2;grid-row:1/3;font-size:12.5px;line-height:1.45;opacity:.92;margin:0}
.home-widget small{opacity:.7;font-size:10.5px}
.app-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5.5% 4%}
.app-icon{display:grid;justify-items:center;gap:6px;background:none;padding:0;border:0;color:#fff}
.app-icon .glyph{display:grid;place-items:center;width:56px;height:56px;border-radius:15px;font-size:25px;color:#fff;box-shadow:0 5px 12px #0b17231f,0 1px 0 #ffffff30 inset}
.app-icon .app-name{font-size:10.5px;letter-spacing:-.01em;text-shadow:0 1px 3px #0f1c2a80}
.app-icon:not(.is-live){opacity:.8}
.app-icon.is-live .glyph{position:relative}
.app-icon.is-live .glyph:after{content:'';position:absolute;inset:-5px;border-radius:20px;border:2px solid #ffffffcc;animation:hintPulse 2.4s ease-in-out infinite}
@keyframes hintPulse{0%,100%{opacity:0;transform:scale(.94)}45%{opacity:.85;transform:scale(1)}}
.tone-assistant .glyph,.conn-logo.tone-assistant{background:linear-gradient(160deg,#7d64d8,#4436a3)}
.tone-shop .glyph,.conn-logo.tone-shop{background:linear-gradient(160deg,#f2a65a,#d97534)}
.tone-cashkaro .glyph,.conn-logo.tone-cashkaro{background:linear-gradient(160deg,#3d55bb,#22307e);font-weight:700}
.tone-camera .glyph,.conn-logo.tone-camera{background:linear-gradient(160deg,#8a9299,#4d5459)}
.tone-messages .glyph,.conn-logo.tone-messages{background:linear-gradient(160deg,#5fcf6f,#2f9c48)}
.tone-photos .glyph,.conn-logo.tone-photos{background:linear-gradient(160deg,#f5d06a,#e88a5a)}
.tone-maps .glyph,.conn-logo.tone-maps{background:linear-gradient(160deg,#62b8e8,#2f74c4)}
.tone-notes .glyph,.conn-logo.tone-notes{background:linear-gradient(160deg,#f4e29a,#d8b95f);color:#5b4a17}
.tone-phone .glyph,.conn-logo.tone-phone{background:linear-gradient(160deg,#55cc63,#2a8f3d)}
.tone-mail .glyph,.conn-logo.tone-mail{background:linear-gradient(160deg,#63aef0,#2c6fc6)}
.tone-browser .glyph,.conn-logo.tone-browser{background:linear-gradient(160deg,#79c7d8,#3d7f96)}
.tone-settings .glyph,.conn-logo.tone-settings{background:linear-gradient(160deg,#9aa2a7,#5c6367)}
.page-dots{display:flex;gap:7px;justify-content:center;margin:auto 0 12px}
.page-dots i{width:6px;height:6px;border-radius:50%;background:#ffffff4d}
.page-dots i.on{background:#fff}
.dock{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;background:#ffffff1c;border:1px solid #ffffff1f;border-radius:26px;padding:11px 9px;margin-bottom:5%;backdrop-filter:blur(9px)}
.dock .app-name{display:none}

/* ---- App bar ---- */
.appbar{display:flex;align-items:center;gap:10px;padding:15cqw 4.6% 10px;border-bottom:1px solid var(--line);flex:none;background:var(--h-app-bg,#fff);position:relative;z-index:3}
.appbar button{background:none;border:0;color:var(--muted);padding:6px 3px;min-height:34px;line-height:1;font-size:18px}
.app-mark{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--h-mark-bg,#0d0d0d);flex:none}
.app-mark svg{width:17px;height:17px;display:block}
.screen[data-app="retailer"] .app-mark{background:linear-gradient(160deg,#f2a65a,#d97534)}
.app-title{font-size:13.5px;font-weight:650;letter-spacing:-.02em;min-width:0;flex:1}
.app-title small{display:block;font-size:10px;font-weight:400;color:var(--muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.appbar .bar-action{font-size:11px;white-space:nowrap;padding:8px 2px}
.connected-pill{display:inline-flex;align-items:center;gap:5px;font-size:9.5px;font-weight:600;color:#3f6134;background:#eaf2e2;border-radius:20px;padding:4px 8px;white-space:nowrap}
.connected-pill:before{content:'';width:5px;height:5px;border-radius:50%;background:#6f9159}

/* ---- Connector directory ---- */
.directory{flex:1;overflow-y:auto;padding:16px 18px 22px;min-height:0;background:var(--h-app-bg,#fff)}
.directory h3{font-size:19px;letter-spacing:-.03em;margin:0 0 4px}
.directory>p{font-size:12px;color:var(--muted);line-height:1.55;margin:0 0 16px}
.conn-row{display:flex;align-items:center;gap:12px;padding:12px 2px;border-bottom:1px solid #f0f2ee;width:100%;background:none;border-left:0;border-right:0;border-top:0;text-align:left}
.conn-row:last-child{border-bottom:0}
.conn-row[disabled]{opacity:1;cursor:default}
.conn-row[disabled] .conn-meta strong{color:#5d6a64;font-weight:600}
.conn-logo{display:grid;place-items:center;width:36px;height:36px;border-radius:10px;font-size:16px;color:#fff;flex:none;font-weight:600}
.conn-logo img{width:30px;height:auto}
.conn-logo.tone-cashkaro{background:#fff;border:1px solid #dfe3ea;box-shadow:0 1px 2px #1523300f}
.conn-meta{flex:1;min-width:0}
.conn-meta strong{display:block;font-size:13.5px;letter-spacing:-.01em}
.conn-meta span{display:block;font-size:11px;color:var(--muted);margin-top:2px;line-height:1.45}
.conn-state{font-size:11px;font-weight:600;color:#6d7a73;white-space:nowrap}
.conn-row.available .conn-state{color:var(--h-accent,var(--blue))}
.conn-row.target{background:#f4f7fb;border-radius:12px;padding:12px;border-bottom-color:transparent;outline:2px solid #cfd9ef}

/* ---- Conversation ---- */
.thread{flex:1;overflow-y:auto;overflow-x:hidden;min-height:0;padding:14px 14px 6px;background:var(--h-thread-bg,#fff);scroll-behavior:smooth;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:#d3dacf transparent}
.thread::-webkit-scrollbar{width:5px}
.thread::-webkit-scrollbar-thumb{background:#d3dacf;border-radius:3px}
.msg{margin-bottom:14px;animation:msgIn .4s cubic-bezier(.2,.85,.3,1) both}
@keyframes msgIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.msg-user{display:flex;justify-content:flex-end}
.msg-user div{max-width:84%;background:var(--h-user-bubble,#eef1e9);color:var(--h-user-text,#22302c);border-radius:18px 18px 5px 18px;padding:11px 14px;font-size:13.5px;line-height:1.5}
.msg-bot{font-size:13.5px;line-height:1.62;color:var(--h-bot-text,#22302c);padding-right:6%;font-family:var(--h-font,inherit)}
.msg-bot strong{font-weight:650}
.msg-bot .cursor{display:inline-block;width:2px;height:1em;background:var(--h-accent,var(--blue));vertical-align:-2px;animation:blink .9s steps(2) infinite}
@keyframes blink{50%{opacity:0}}

.typing{display:inline-flex;gap:4px;align-items:center;padding:10px 0}
.typing i{width:6px;height:6px;border-radius:50%;background:#b6c0b6;animation:bounce 1.1s infinite}
.typing i:nth-child(2){animation-delay:.15s}
.typing i:nth-child(3){animation-delay:.3s}
@keyframes bounce{0%,60%,100%{transform:none;opacity:.5}30%{transform:translateY(-4px);opacity:1}}

.thinking{display:flex;align-items:center;gap:9px;font-size:12px;color:#6b7770;padding:2px 0}
.think-dot{width:9px;height:9px;border-radius:50%;background:var(--h-accent,#263c94);flex:none;animation:thinkPulse 1.1s ease-in-out infinite}
.think-line{transition:opacity .16s ease;line-height:1.5}
@keyframes thinkPulse{0%,100%{transform:scale(.65);opacity:.45}50%{transform:scale(1);opacity:1}}
.provenance{display:flex;gap:7px;align-items:flex-start;font-size:10px;line-height:1.5;color:#8a948d;margin:11px 0 0}
.provenance span{width:6px;height:6px;border-radius:50%;background:#c3cbc4;flex:none;margin-top:4px}
.provenance.is-live span{background:#5f9150;box-shadow:0 0 0 3px #5f915022}

/* Tool-call chip: how a host shows it is calling a connector */
.toolcall{display:flex;align-items:center;gap:9px;background:#f3f5f8;border:1px solid #e3e8ef;border-radius:11px;padding:9px 12px;font-size:11.5px;color:#4a5568}
.toolcall img{width:46px;height:auto;flex:none}
.toolcall .spin{width:11px;height:11px;border:2px solid #ccd5e2;border-top-color:var(--blue);border-radius:50%;animation:spin .7s linear infinite;flex:none}
.toolcall.done .spin{border:0;width:auto;height:auto;animation:none}
.toolcall.done .spin:after{content:'✓';color:#4c7a3a;font-weight:700}
@keyframes spin{to{transform:rotate(360deg)}}

/* ---- Composer ---- */
.composer{flex:none;border-top:1px solid var(--line);padding:9px 12px 4%;background:var(--h-app-bg,#fff)}
.prompt-chips{display:flex;gap:6px;overflow-x:auto;padding-bottom:9px;scrollbar-width:none}
.prompt-chips::-webkit-scrollbar{display:none}
.prompt-chips button{flex:none;border:1px solid var(--h-composer-border,#dde3d9);background:var(--h-app-bg,#fff);border-radius:20px;padding:8px 12px;font-size:11.5px;color:var(--h-bot-text,#41533c);white-space:nowrap;min-height:36px}
.composer-row{display:flex;align-items:center;gap:8px;background:var(--h-composer-bg,#f3f5f1);border:1px solid var(--h-composer-border,transparent);border-radius:var(--h-composer-radius,22px);padding:6px 6px 6px 15px}
.composer-text{flex:1;font-size:13px;color:#2a3733;min-height:22px;line-height:1.55;overflow:hidden}
.composer-text.empty{color:#95a096}
.composer-text .cursor{display:inline-block;width:1.5px;height:1em;background:var(--h-accent,var(--blue));vertical-align:-2px;animation:blink .9s steps(2) infinite}
.send{width:34px;height:34px;border-radius:var(--h-send-shape,50%);border:0;background:var(--h-accent,var(--blue));color:var(--h-on-accent,#fff);font-size:15px;display:grid;place-items:center;flex:none}
.send:disabled{background:#c3cbd9}

/* ---- Notification, sheet, toast ---- */
.notif{position:absolute;top:7.5%;left:3%;right:3%;z-index:10;display:flex;gap:10px;align-items:center;padding:11px 13px;border-radius:18px;background:#ffffffed;backdrop-filter:blur(16px);box-shadow:0 10px 26px #14201d2e;animation:notifIn .42s cubic-bezier(.2,.9,.3,1)}
.notif[hidden]{display:none}
.notif img{width:54px;height:auto;object-fit:contain;flex:none}
.notif-body strong{display:block;font-size:11.5px}
.notif-body span{display:block;font-size:10.5px;color:var(--muted);margin-top:2px;line-height:1.4}
@keyframes notifIn{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:none}}

.scrim{position:absolute;inset:0;z-index:11;background:#0c1512;opacity:.34;animation:fade .28s ease;border:0}
.scrim[hidden]{display:none}
.sheet{position:absolute;left:0;right:0;bottom:0;z-index:12;background:#fff;border-radius:24px 24px 0 0;padding:9px 18px 5%;box-shadow:0 -12px 34px #12201c26;animation:sheetUp .42s cubic-bezier(.2,.85,.3,1);max-height:90%;overflow-y:auto}
.sheet[hidden]{display:none}
.sheet-grab{width:36px;height:4px;border-radius:3px;background:#d5dbd3;margin:0 auto 13px}
@keyframes sheetUp{from{transform:translateY(100%)}to{transform:none}}
@keyframes fade{from{opacity:0}to{opacity:.34}}

.toast{position:absolute;left:50%;bottom:6%;transform:translateX(-50%);z-index:13;background:#16211ef0;color:#fff;font-size:11px;padding:9px 15px;border-radius:19px;animation:fadeUp .3s ease;white-space:nowrap;max-width:88%;overflow:hidden;text-overflow:ellipsis}
.toast[hidden]{display:none}
@keyframes fadeUp{from{opacity:0;transform:translate(-50%,9px)}to{opacity:1;transform:translate(-50%,0)}}

/* ---- Narration ---- */
.narrate{padding-top:6px;min-width:0}
.narrate .kicker{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#8a7052;font-weight:650;margin-bottom:12px}
.narrate h3{font-size:26px;letter-spacing:-.035em;line-height:1.16;margin-bottom:13px;font-weight:600}
.narrate .why{font-size:13.5px;line-height:1.68;color:#5a6862;margin-bottom:20px}
.chapters{display:grid;gap:0;margin:0 0 20px;padding:0;list-style:none}
.chapters li{display:flex;gap:11px;align-items:baseline;font-size:12px;color:#98a29b;padding:6px 0;border-bottom:1px solid #eff1ec}
.chapters li:last-child{border-bottom:0}
.chapters li b{font-size:10px;color:#bcc5be;font-variant-numeric:tabular-nums;min-width:16px;font-weight:600}
.chapters li.done{color:#6d7a73}
.chapters li.done b:after{content:' ✓';color:#6f8a5e}
.chapters li.now{color:#22336f;font-weight:600}
.chapters li.now b{color:#22336f}
.host-switch{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:0 0 18px}
.host-switch button{display:grid;justify-items:center;gap:6px;border:1px solid #dfe4da;background:#fff;border-radius:11px;padding:10px 4px;font-size:10.5px;color:#5b6a62;line-height:1.25;min-height:62px}
.host-switch button span.hm{display:grid;place-items:center;width:24px;height:24px;border-radius:7px;color:#fff}
.host-switch button span.hm svg{width:14px;height:14px}
.host-switch button[aria-pressed=true]{border-color:#2b3f2b;background:#f2f5ef;color:#25332a;font-weight:650;box-shadow:0 0 0 1px #2b3f2b inset}
.switch-note{font-size:11px;line-height:1.6;color:var(--muted);margin:-8px 0 18px}
.playbar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:18px}
.playbar button{border:1px solid #d7ded3;background:#fff;border-radius:24px;padding:9px 15px;font-size:12px;min-height:40px;color:#3f5139}
.playbar button.on{background:#2b3f2b;border-color:#2b3f2b;color:#fff}
.scenario-pick{border-top:1px solid #e7eae5;padding-top:17px}
.scenario-pick label{display:block;font-size:11px;color:var(--muted);margin-bottom:7px}
.scenario-pick select{width:100%;min-height:44px;border:1px solid #cfd7c9;border-radius:9px;padding:10px;font-size:12.5px;color:#3d4f39;background:#fff}
.scenario-pick .hint{font-size:11px;line-height:1.6;color:var(--muted);margin-top:9px}
.scenario-pick a{display:inline-block;margin-top:11px;font-size:12px}

@container(max-width:360px){
 .app-icon .glyph{width:50px;height:50px;font-size:22px}
 .thread{padding:12px 11px 6px}
}
@container(max-width:900px){
 .device{position:relative;top:0}
 .stagewrap{grid-template-columns:minmax(0,390px);justify-content:center}
 .narrate{max-width:390px;margin:0 auto;border-top:1px solid #e7eae5;padding-top:22px}
 .narrate h3{font-size:22px}
}
@container(max-width:430px){
 .frame{padding:2.2%}
 .frame:before,.frame:after,.side-power{display:none}
}
@media(prefers-reduced-motion:reduce){
 .layer-app,.notif,.sheet,.scrim,.toast,.msg,.app-icon.is-live .glyph:after,.typing i,.cursor{animation:none!important}
 .thread{scroll-behavior:auto}
}
@media print{
 .device{box-shadow:none}
 .frame{background:#e6e9e6;box-shadow:none}
 .playbar,.scenario-pick,.composer{display:none}
}
`;
