!function(){"use strict";var t={91:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},213:function(t,e,n){t.exports=n.p+"assets/favicon.svg"},787:function(t,e,n){t.exports=n.p+"assets/product001.jpg"},114:function(t,e,n){t.exports=n.p+"assets/product002.jpg"},972:function(t,e,n){t.exports=n.p+"assets/product004.jpg"},708:function(t,e,n){t.exports=n.p+"assets/product006.jpg"},463:function(t,e,n){t.exports=n.p+"assets/product007.jpg"},510:function(t,e,n){t.exports=n.p+"assets/product011.jpg"},957:function(t,e,n){t.exports=n.p+"assets/product012.jpg"},672:function(t,e,n){t.exports=n.p+"assets/product013.jpg"},78:function(t,e,n){t.exports=n.p+"assets/product014.jpg"},297:function(t,e,n){t.exports=n.p+"assets/product015.jpg"},840:function(t,e,n){t.exports=n.p+"assets/main-logo.svg"},796:function(t,e,n){t.exports=n.p+"fonts/inter-v12-latin_cyrillic-400.woff2"},17:function(t,e,n){t.exports=n.p+"fonts/inter-v12-latin_cyrillic-600.woff2"},421:function(t,e,n){t.exports=n.p+"fonts/inter-v12-latin_cyrillic-700.woff2"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var c=e[o]={exports:{}};return t[o](c,c.exports,n),c.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),n.b=document.baseURI||self.location.href,function(){var t=n(91),e=n.n(t),o=new URL(n(796),n.b),r=new URL(n(17),n.b),c=new URL(n(421),n.b),s=new URL(n(213),n.b),i=new URL(n(840),n.b),a=new URL(n(672),n.b),u=new URL(n(510),n.b),p=new URL(n(972),n.b),l=new URL(n(957),n.b),f=new URL(n(78),n.b),d=new URL(n(114),n.b),g=new URL(n(708),n.b),v=new URL(n(463),n.b),_=new URL(n(787),n.b),L=new URL(n(297),n.b);e()(o),e()(r),e()(c),e()(s),e()(i),e()(a),e()(u),e()(p);e()(l),e()(f),e()(d),e()(g),e()(v),e()(_),e()(L),document.addEventListener("DOMContentLoaded",(function(t){var e=document.querySelectorAll(".product__btn-favorite"),n=document.querySelector(".goods"),o=document.querySelectorAll(".gender__link"),r=document.querySelectorAll(".category__link"),c=document.querySelector(".hero"),s=c.querySelector(".hero__title"),i=["women","men"],a={women:"Новая коллекция зимней женской одежды",men:"Новая коллекция зимней одежды для мужчин"};o.forEach((function(t){t.addEventListener("click",(function(t){o.forEach((function(e,n){if(e===t.target){e.classList.add("gender__link_active");var o=i[n];c.classList.add("hero_"+o),s.textContent=a[o]}else e.classList.remove("gender__link_active"),c.classList.remove("hero_"+i[n])}))}))})),r.forEach((function(t){t.addEventListener("click",(function(t){var e=t.target;r.forEach((function(t){t===e?t.classList.add("category__link_active"):t.classList.remove("category__link_active")}))}))})),n.addEventListener("click",(function(t){t.target.classList.contains("color")&&(console.log("color"),t.target.classList.toggle("color_check"))})),e.forEach((function(t){t.addEventListener("click",(function(e){console.log(e.target),t.classList.toggle("product__btn-favorite_active")}))}))}))}()}();