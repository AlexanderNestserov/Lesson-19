(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),r=()=>{let e,c=(()=>{let e=(new Date("10 november 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/3600);t<10&&(t="0"+Math.floor(e/3600));let n=Math.floor((e-3600*t)/60);n<10&&(n="0"+Math.floor((e-3600*t)/60));let o=Math.round(e-(60*n+3600*t));return o<10&&(o="0"+Math.round(e-(60*n+3600*t))),{timeRemaining:e,hours:t,minutes:n,seconds:o}})();t.textContent=c.hours,n.textContent=c.minutes,o.textContent=c.seconds,c.timeRemaining>0?e=setInterval(r,1e3):c.timeRemaining<=0&&(clearInterval(e),t.textContent="00",n.textContent="00",o.textContent="00")};r()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),n.addEventListener("click",r),o.forEach((e=>e.addEventListener("click",r)))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close"),o=document.querySelector(".popup-content");let r,c=0;console.dir(document);const l=()=>{c++,r=requestAnimationFrame(l),c<100&&screen.availWidth>=768?o.style.top=c+"px":cancelAnimationFrame(r)};e.forEach((e=>e.addEventListener("click",(()=>{r=requestAnimationFrame(l),t.style.display="block",c=0})))),n.addEventListener("click",(()=>{t.style.display="none"}))})()})();