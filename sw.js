if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,t)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let o={};const n=e=>i(e,f),r={module:{uri:f},exports:o,require:n};s[f]=Promise.all(a.map((e=>r[e]||n(e)))).then((e=>(t(...e),o)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/fonts/Quicksand/Quicksand-Bold.ttf",revision:"05fcffc56e72bc6889ecea672078dc4f"},{url:"assets/fonts/Quicksand/Quicksand-Medium.ttf",revision:"890d9ed927bb7f0c6b9eed04f9c329e5"},{url:"assets/images/cursor/hover.png",revision:"ebd8008eabd09cb838ca2c238a39fce8"},{url:"assets/images/cursor/normal.png",revision:"0ca16a1505700989a53117d3346a1f12"},{url:"assets/images/html/favicon_512.png",revision:"b250855e2506b2cc149cf87fc1a1cf4f"},{url:"assets/images/html/favicon.ico",revision:"f7af7e366a1e22ede921e9069e386edc"},{url:"assets/images/html/favicon.png",revision:"756c149b5ced3fbe56a55d5b71cf6749"},{url:"assets/images/html/opengraph.png",revision:"bf4153aa7baacc77b707e83e028b2378"},{url:"assets/images/html/qrcode.png",revision:"dcfabd62dd76feb43f8791a68ff6f9d9"},{url:"assets/libs/fontawesome/webfonts/fa-brands-400.ttf",revision:"94227daa6303fd42918ce3af431ef7e8"},{url:"assets/libs/fontawesome/webfonts/fa-regular-400.ttf",revision:"47fa5e12e9fc4e8325a6e1a0735b38f6"},{url:"assets/libs/fontawesome/webfonts/fa-solid-900.ttf",revision:"e8132d053030afa547e23b5163ef8301"},{url:"assets/libs/fontawesome/webfonts/fa-v4compatibility.ttf",revision:"91fc9b0078b939bddcde338550684848"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
