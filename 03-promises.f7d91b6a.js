var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){o[e]=r},e.parcelRequired7c6=t);var n=t("iQIUW");const l=document.querySelector(".form");l.addEventListener("submit",(e=>{e.preventDefault();let r=Number(l.elements.delay.value);for(let e=1;e<=l.elements.amount.value;e+=1)setTimeout((()=>{return o=e,t=r,Math.random()>.3?Promise.resolve(`Fulfilled Promose ${o} in ${t}ms`).then((e=>n.Notify.success(e))):Promise.reject(`Rejected Promose ${o} in ${t}ms`).catch((e=>n.Notify.failure(e)));var o,t}),r),console.log(r),r+=Number(l.elements.step.value)}));
//# sourceMappingURL=03-promises.f7d91b6a.js.map
