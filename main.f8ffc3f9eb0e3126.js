var __webpack_modules__={5466:(o,v,u)=>{u.e(814).then(u.bind(u,3814)).catch(f=>console.error(f))}},__webpack_module_cache__={};function __webpack_require__(o){var v=__webpack_module_cache__[o];if(void 0!==v)return v.exports;var u=__webpack_module_cache__[o]={exports:{}};return __webpack_modules__[o](u,u.exports,__webpack_require__),u.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.d=(o,v)=>{for(var u in v)__webpack_require__.o(v,u)&&!__webpack_require__.o(o,u)&&Object.defineProperty(o,u,{enumerable:!0,get:v[u]})},__webpack_require__.f={},__webpack_require__.e=o=>Promise.all(Object.keys(__webpack_require__.f).reduce((v,u)=>(__webpack_require__.f[u](o,v),v),[])),__webpack_require__.u=o=>o+"."+{96:"c6a5355e7b4de1d2",230:"7972de8ad4e1d401",367:"0fde1cf3cbe839bc",440:"5eb8898dea33eca9",530:"316bbdbb297c71d8",704:"e44959caa94c6008",717:"98572502af880fe2",781:"0be5de438362aad9",814:"d9507ecfae4670fe",946:"72180a6c6b0a9412"}[o]+".js",__webpack_require__.miniCssF=o=>{},__webpack_require__.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v),(()=>{var o={},v="remoteApp:";__webpack_require__.l=(u,f,g,h)=>{if(o[u])o[u].push(f);else{var l,S;if(void 0!==g)for(var p=document.getElementsByTagName("script"),w=0;w<p.length;w++){var d=p[w];if(d.getAttribute("src")==u||d.getAttribute("data-webpack")==v+g){l=d;break}}l||(S=!0,(l=document.createElement("script")).type="module",l.charset="utf-8",l.timeout=120,__webpack_require__.nc&&l.setAttribute("nonce",__webpack_require__.nc),l.setAttribute("data-webpack",v+g),l.src=__webpack_require__.tu(u)),o[u]=[f];var b=(E,V)=>{l.onerror=l.onload=null,clearTimeout(m);var y=o[u];if(delete o[u],l.parentNode&&l.parentNode.removeChild(l),y&&y.forEach(c=>c(V)),E)return E(V)},m=setTimeout(b.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=b.bind(null,l.onerror),l.onload=b.bind(null,l.onload),S&&document.head.appendChild(l)}}})(),__webpack_require__.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{__webpack_require__.S={};var o={},v={};__webpack_require__.I=(u,f)=>{f||(f=[]);var g=v[u];if(g||(g=v[u]={}),!(f.indexOf(g)>=0)){if(f.push(g),o[u])return o[u];__webpack_require__.o(__webpack_require__.S,u)||(__webpack_require__.S[u]={});var h=__webpack_require__.S[u],S="remoteApp",p=(b,m,E,V)=>{var y=h[b]=h[b]||{},c=y[m];(!c||!c.loaded&&(!V!=!c.eager?V:S>c.from))&&(y[m]={get:E,from:S,eager:!!V})},d=[];return"default"===u&&(p("@angular/common/http","17.0.6",()=>__webpack_require__.e(367).then(()=>()=>__webpack_require__(9367))),p("@angular/common","17.0.6",()=>__webpack_require__.e(230).then(()=>()=>__webpack_require__(4230))),p("@angular/core/primitives/signals","17.0.6",()=>__webpack_require__.e(717).then(()=>()=>__webpack_require__(4717))),p("@angular/core","17.0.6",()=>__webpack_require__.e(946).then(()=>()=>__webpack_require__(4946))),p("@angular/router","17.0.6",()=>__webpack_require__.e(440).then(()=>()=>__webpack_require__(1440)))),o[u]=d.length?Promise.all(d).then(()=>o[u]=1):1}}})(),(()=>{var o;__webpack_require__.tt=()=>(void 0===o&&(o={createScriptURL:v=>v},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),__webpack_require__.tu=o=>__webpack_require__.tt().createScriptURL(o),(()=>{var o;if("string"==typeof import.meta.url&&(o=import.meta.url),!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=o})(),(()=>{var o=e=>{var t=a=>a.split(".").map(i=>+i==i?+i:i),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},u=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(s=e[a]))[0]?"-":(n>0?".":"")+(n=2,s);return r}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+_()+")":1===s?"("+_()+" || "+_()+")":2===s?i.pop()+" "+i.pop():u(s))}return _();function _(){return i.pop().replace(/^\((.+)\)$/,"$1")}},f=(e,t)=>{if(0 in e){t=o(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var a=0,i=1,s=!0;;i++,a++){var _,O,P=i<e.length?(typeof e[i])[0]:"";if(a>=t.length||"o"==(O=(typeof(_=t[a]))[0]))return!s||("u"==P?i>r&&!n:""==P!=n);if("u"==O){if(!s||"u"!=P)return!1}else if(s)if(P==O)if(i<=r){if(_!=e[i])return!1}else{if(n?_>e[i]:_<e[i])return!1;_!=e[i]&&(s=!1)}else if("s"!=P&&"n"!=P){if(n||i<=r)return!1;s=!1,i--}else{if(i<=r||O<P!=n)return!1;s=!1}else"s"!=P&&"n"!=P&&(s=!1,i--)}}var M=[],j=M.pop.bind(M);for(a=1;a<e.length;a++){var T=e[a];M.push(1==T?j()|j():2==T?j()&j():T?f(T,t):!j())}return!!j()},l=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,a)=>!n||!r[n].loaded&&((e,t)=>{e=o(e),t=o(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],a=(typeof n)[0];if(r>=t.length)return"u"==a;var i=t[r],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;r++}})(n,a)?a:n,0)},w=(e,t,r,n)=>{var a=l(e,r);return f(n,a)||V(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+u(n)+")")(e,r,a,n)),c(e[r][a])},V=e=>{typeof console<"u"&&console.warn&&console.warn(e)},c=e=>(e.loaded=1,e.get()),x=(e=>function(t,r,n,a){var i=__webpack_require__.I(t);return i&&i.then?i.then(e.bind(e,t,__webpack_require__.S[t],r,n,a)):e(t,__webpack_require__.S[t],r,n,a)})((e,t,r,n,a)=>t&&__webpack_require__.o(t,r)?w(t,0,r,n):a()),A={},F={2527:()=>x("default","@angular/core",[4,17,0,6],()=>__webpack_require__.e(946).then(()=>()=>__webpack_require__(4946))),9024:()=>x("default","@angular/common",[4,17,0,6],()=>__webpack_require__.e(781).then(()=>()=>__webpack_require__(4230))),1410:()=>x("default","@angular/core/primitives/signals",[4,17,0,6],()=>__webpack_require__.e(717).then(()=>()=>__webpack_require__(4717))),3972:()=>x("default","@angular/common/http",[4,17,0,6],()=>__webpack_require__.e(96).then(()=>()=>__webpack_require__(9367))),349:()=>x("default","@angular/router",[4,17,0,6],()=>__webpack_require__.e(704).then(()=>()=>__webpack_require__(1440)))},k={230:[2527],367:[2527,9024],440:[2527,3972,9024],704:[3972],814:[349,2527,3972,9024],946:[1410]};__webpack_require__.f.consumes=(e,t)=>{__webpack_require__.o(k,e)&&k[e].forEach(r=>{if(__webpack_require__.o(A,r))return t.push(A[r]);var n=s=>{A[r]=0,__webpack_require__.m[r]=_=>{delete __webpack_require__.c[r],_.exports=s()}},a=s=>{delete A[r],__webpack_require__.m[r]=_=>{throw delete __webpack_require__.c[r],s}};try{var i=F[r]();i.then?t.push(A[r]=i.then(n).catch(a)):n(i)}catch(s){a(s)}})}})(),(()=>{var o={179:0};__webpack_require__.f.j=(f,g)=>{var h=__webpack_require__.o(o,f)?o[f]:void 0;if(0!==h)if(h)g.push(h[2]);else{var l=new Promise((d,b)=>h=o[f]=[d,b]);g.push(h[2]=l);var S=__webpack_require__.p+__webpack_require__.u(f),p=new Error;__webpack_require__.l(S,d=>{if(__webpack_require__.o(o,f)&&(0!==(h=o[f])&&(o[f]=void 0),h)){var b=d&&("load"===d.type?"missing":d.type),m=d&&d.target&&d.target.src;p.message="Loading chunk "+f+" failed.\n("+b+": "+m+")",p.name="ChunkLoadError",p.type=b,p.request=m,h[1](p)}},"chunk-"+f,f)}};var v=(f,g)=>{var p,w,[h,l,S]=g,d=0;if(h.some(m=>0!==o[m])){for(p in l)__webpack_require__.o(l,p)&&(__webpack_require__.m[p]=l[p]);S&&S(__webpack_require__)}for(f&&f(g);d<h.length;d++)__webpack_require__.o(o,w=h[d])&&o[w]&&o[w][0](),o[w]=0},u=self.webpackChunkremoteApp=self.webpackChunkremoteApp||[];u.forEach(v.bind(null,0)),u.push=v.bind(null,u.push.bind(u))})();var __webpack_exports__=__webpack_require__(5466);