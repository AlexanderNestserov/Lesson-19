(()=>{"use strict";(t=>{const e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),m=()=>{let t,r=(()=>{let t=(new Date("10 november 2021").getTime()-(new Date).getTime())/1e3,e=Math.floor(t/3600);e<10&&(e="0"+Math.floor(t/3600));let n=Math.floor((t-3600*e)/60);n<10&&(n="0"+Math.floor((t-3600*e)/60));let o=Math.round(t-(60*n+3600*e));return o<10&&(o="0"+Math.round(t-(60*n+3600*e))),{timeRemaining:t,hours:e,minutes:n,seconds:o}})();e.textContent=r.hours,n.textContent=r.minutes,o.textContent=r.seconds,r.timeRemaining>0?t=setInterval((()=>{m()}),1e3):r.timeRemaining<=0&&(clearInterval(t),e.textContent="00",n.textContent="00",o.textContent="00")};m()})()})();