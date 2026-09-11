function qs(s){return document.querySelector(s)}
function qsa(s){return [...document.querySelectorAll(s)]}
qsa('[data-year]').forEach(el=>el.textContent=new Date().getFullYear())
