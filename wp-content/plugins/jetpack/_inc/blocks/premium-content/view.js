(()=>{var e={72856:(e,t,o)=>{"use strict";o.d(t,{qR:()=>n});let r="";function n(e){if("https://subscribe.wordpress.com"===e.origin&&e.data){const t=JSON.parse(e.data);if(t&&t.result&&t.result.jwt_token&&(r=t.result.jwt_token,s(r)),t&&"close"===t.action&&r)window.location.reload(!0);else if(t&&"close"===t.action){window.removeEventListener("message",n);document.getElementById("memberships-modal-window").close(),document.body.classList.remove("jetpack-memberships-modal-open")}}}const s=function(e){const t=new Date,o=new Date(t.setMonth(t.getMonth()+1));document.cookie=`wp-jp-premium-content-session=${e}; expires=${o.toGMTString()}; path=/`}},79366:(e,t,o)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(o.p=window.Jetpack_Block_Assets_Base_Url)}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{"use strict";o(79366)})(),(()=>{"use strict";var e=o(72856);document.addEventListener("DOMContentLoaded",(function(){"undefined"!=typeof window&&window.addEventListener("message",e.qR,!1)}))})()})();