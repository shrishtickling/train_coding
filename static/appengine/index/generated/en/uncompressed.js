// // Automatically generated file.  Do not edit!


// window.CLOSURE_NO_DEPS = true;

// (function() {
//   var srcs = [
//       "third-party/base.js",
//       "third-party/soyutils.js",
//       "index/generated/en/soy.js",
//       "third-party/blockly/core/utils/math.js",
//       "js/lib-games.js",
//       "index/js/index.js"
//   ];
//   function loadScript() {
//     var src = srcs.shift();
//     if (src) {
//       var script = document.createElement('script');
//       script.src = src;
//       script.type = 'text/javascript';
//       script.onload = loadScript;
//       document.head.appendChild(script);
//     }
//   }
//   loadScript();
// })();



//  --------------  compressed wala file -------------------------

// Automatically generated file.  Do not edit!

'use strict';
var f={},g={ar:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",be:"\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456","be-tarask":"Tara\u0161kievica",bg:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",bn:"\u09ac\u09be\u0982\u09b2\u09be",br:"Brezhoneg",cs:"\u010cesky",da:"Dansk",de:"Deutsch",el:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",en:"English",eo:"Esperanto",es:"Espa\u00f1ol",eu:"Euskara",fa:"\u0641\u0627\u0631\u0633\u06cc",fi:"Suomi",fo:"F\u00f8royskt",
fr:"Fran\u00e7ais",gl:"Galego",ha:"Hausa",he:"\u05e2\u05d1\u05e8\u05d9\u05ea",hi:"\u0939\u093f\u0928\u094d\u0926\u0940",hu:"Magyar",hy:"\u0570\u0561\u0575\u0565\u0580\u0567\u0576",ia:"Interlingua",id:"Bahasa Indonesia",ig:"As\u1ee5s\u1ee5 Igbo",is:"\u00cdslenska",it:"Italiano",ja:"\u65e5\u672c\u8a9e",kab:"Taqbaylit",ko:"\ud55c\uad6d\uc5b4",lt:"Lietuvi\u0173",lv:"Latvie\u0161u",ms:"Bahasa Melayu",my:"\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",nb:"Norsk Bokm\u00e5l",nl:"Nederlands, Vlaams",pl:"Polski",
pms:"Piemont\u00e8is",pt:"Portugu\u00eas","pt-br":"Portugu\u00eas Brasileiro",ro:"Rom\u00e2n\u0103",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",sc:"Sardu",sk:"Sloven\u010dina",sl:"Sloven\u0161\u010dina",sq:"Shqip",sr:"\u0421\u0440\u043f\u0441\u043a\u0438",sv:"Svenska",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",ti:"\u1275\u130d\u122d\u129b",tr:"T\u00fcrk\u00e7e",uk:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",ur:"\u0627\u064f\u0631\u062f\u064f\u0648\u202c",vi:"Ti\u1ebfng Vi\u1ec7t",
yo:"\u00c8d\u00e8 Yor\u00f9b\u00e1","zh-hans":"\u7b80\u4f53\u4e2d\u6587","zh-hant":"\u6b63\u9ad4\u4e2d\u6587"},k="ace ar fa he mzn ps ur".split(" "),l=window.BlocklyGamesLang,n=window.BlocklyGamesLanguages,p=/\.html$/.test(window.location.pathname),q=window.location.search.match(/[?&]level=([^&]+)/);q&&decodeURIComponent(q[1].replace(/\+/g,"%20"));
function r(){document.title=document.getElementById("title").textContent;document.dir=-1!=k.indexOf(l)?"rtl":"ltr";document.head.parentElement.setAttribute("lang",l);var a=document.getElementById("languageMenu");if(a){for(var b=[],c=0;c<n.length;c++){var d=n[c];b.push([g[d],d])}b.sort(function(h,m){return h[0]>m[0]?1:h[0]<m[0]?-1:0});for(c=a.options.length=0;c<b.length;c++){var e=b[c];d=e[1];e=new Option(e[0],d);d==l&&(e.selected=!0);a.options.add(e)}1>=a.options.length&&(a.style.display="none")}for(c=
1;10>=c;c++)a=document.getElementById("level"+c),b=!!t(f.A,c),a&&b&&(a.className+=" level_done");(c=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&c.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(u,1)}
function v(){var a=document.getElementById("languageMenu");a=encodeURIComponent(a.options[a.selectedIndex].value);var b=window.location.search;b=1>=b.length?"?lang="+a:/[?&]lang=[^&]*/.test(b)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b}function t(a,b){try{var c=window.localStorage[a+b]}catch(d){}return c}
function w(){var a="clearData",b=x;if(!a)throw TypeError("Element not found: "+a);"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",function(c){c.preventDefault();b(c)},!0)}
function u(){if(!p){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(c){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var y=y||{};function z(a,b){function c(){}c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.D=function(d,e,h){return b.prototype[e].apply(d,Array.prototype.slice.call(arguments,2))}}if(!A){var A,B="";"undefined"!==typeof navigator&&navigator&&"string"==typeof navigator.userAgent&&(B=navigator.userAgent);var C=0==B.indexOf("Opera");A={F:{u:"ScriptEngine"in window},B:C,v:!C&&-1!=B.indexOf("MSIE"),C:!C&&-1!=B.indexOf("WebKit")}}if(!D)var D={};if(!E)var E={};
if(!F)var F={};if(!G)var G={};if(!H)var H={};if(!I)var I={};var J=y.s?{G:!0}:{};function K(){throw Error("Do not instantiate directly");}K.prototype.i=null;K.prototype.toString=function(){return this.content};function L(a){if(null!=a)switch(a.i){case 1:return 1;case -1:return-1;case 0:return 0}return null}function M(){K.call(this)}z(M,K);M.prototype.o=J;function N(a){return null!=a&&a.o===J?a:O(String(String(a)).replace(P,Q),L(a))}
var O=function(a){function b(){}b.prototype=a.prototype;return function(c,d){var e=new b;e.content=String(c);void 0!==d&&(e.i=d);return e}}(M),R={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Q(a){return R[a]}var P=/[\x00\x22\x26\x27\x3c\x3e]/g;function S(){var a={lang:l,j:p,m:-1!=k.indexOf(l)};return'<div style="display: none"><span id="title">Technothlon Games</span></div><div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="Technothlon Games"></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-150,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x="150" y="60"><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"'+
(a.m?'transform="translate(100) scale(-1, 1)"':"")+"/></svg>"+
// T({g:"puzzle",x:10,y:15,h:"Puzzle"},a)+
T({g:"maze",x:16,y:45,h:"Maze"},a)+
// T({g:"bird",x:26,y:69,h:"Bird"},a)+
T({g:"turtle",x:41,y:80,h:"Turtle"},a)+
T({g:"movie",x:69,y:43,h:"Movie"},a)+
// T({g:"music",x:69,y:43,h:"Music"},a)+
// T({g:"pond-tutor",x:83,y:55,h:"Pond Tutor"},a)+
// T({g:"pond-duck",x:90,y:85,h:"Pond"},a)+
'</g></svg><p id="clearDataPara" style="visibility: hidden">Want to start over?<button class="secondary" id="clearData">Clear data</span></button></p>'}
function T(a,b){return'<svg height="150" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+(b.m?'x="'+N(100-a.x)+'%"':'x="'+N(a.x)+'%"')+'y="'+N(a.y)+'%"><path d="M 111.11,98.89 A 55 55 0 1 1 188.89,98.89" class="gaugeBack" id="back-'+N(a.g)+'" /><g class="icon" id="icon-'+N(a.g)+'"><circle cx="150" cy="60" r="50" class="iconBack" /><image xlink:href="index/'+N(a.g)+'.png" height="100" width="100" x="100" y="10" />'+(b.j?'<a id="link-'+N(a.g)+
'" xlink:href="'+N(a.g)+".html?lang="+N(b.lang)+'">':'<a xlink:href="'+N(a.g)+"?lang="+N(b.lang)+'">')+'<circle cx="150" cy="60" r="50" class="iconBorder" /><path class="gaugeFront" id="gauge-'+N(a.g)+'" /><text x="150" y="135">'+N(a.h)+"</text></a></g></svg>"};
var U="puzzle maze bird turtle movie music pond-tutor pond-duck".split(" ");
window.addEventListener("load",function(){function a(h,m){return function(){V(h,0,m)}}document.body.innerHTML=S();r();document.getElementById("languageMenu").addEventListener("change",v,!0);for(var b=!1,c=[],d=0;d<U.length;d++){c[d]=0;for(var e=1;10>=e;e++)t(U[d],e)&&(b=!0,c[d]++)}b&&(document.getElementById("clearDataPara").style.visibility="visible",w());for(d=0;d<c.length;d++)b=U[d],(e=c[d]/(0==d?1:10)*270)?setTimeout(a(b,e),1500):(b=document.getElementById("gauge-"+b),b.parentNode.removeChild(b))},
!1);function V(a,b,c){b+=4;W(a,Math.min(b,c));b<c&&setTimeout(function(){V(a,b,c)},10)}function W(a,b){var c=(b-45)*Math.PI/180,d=150-52.75*Math.cos(c),e=60-52.75*Math.sin(c);b=180<b?1:0;c=-45*Math.PI/180;var h=150-52.75*Math.cos(c);c=60-52.75*Math.sin(c);document.getElementById("gauge-"+a).setAttribute("d",["M "+h+","+c+" A",52.75,52.75,0,b,1,d,e].join(" "))}
function x(){var a=confirm,b;(b=document.getElementById("Index_clear"))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;if(a(null===b?"[Unknown message: Index_clear]":b)){for(a=0;a<U.length;a++)for(b=1;10>=b;b++)delete window.localStorage[U[a]+b];location.reload()}};

