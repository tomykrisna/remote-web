(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2975],{81836:(S,w,i)=>{i.d(w,{g:()=>l});var v=i(81848);const l=()=>{if(void 0!==v.w)return v.w.Capacitor}},89951:(S,w,i)=>{i.d(w,{I:()=>l,a:()=>E,b:()=>p,c:()=>_,d:()=>b,h:()=>k});var v=i(81836),l=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(l||{});const u={getEngine(){const o=window.TapticEngine;if(o)return o;const c=(0,v.g)();return null!=c&&c.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,v.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,v.g)(),impact(o){const c=this.getEngine();if(!c)return;const x=this.isCapacitor()?o.style:o.style.toLowerCase();c.impact({style:x})},notification(o){const c=this.getEngine();if(!c)return;const x=this.isCapacitor()?o.type:o.type.toLowerCase();c.notification({type:x})},selection(){const o=this.isCapacitor()?l.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},h=()=>u.available(),_=()=>{h()&&u.selection()},E=()=>{h()&&u.selectionStart()},p=()=>{h()&&u.selectionChanged()},k=()=>{h()&&u.selectionEnd()},b=o=>{h()&&u.impact(o)}},17946:(S,w,i)=>{i.d(w,{I:()=>_,a:()=>b,b:()=>h,c:()=>x,d:()=>I,f:()=>o,g:()=>k,i:()=>p,p:()=>T,r:()=>O,s:()=>c});var v=i(15861),l=i(50512),C=i(52400);const h="ion-content",_=".ion-content-scroll-host",E=`${h}, ${_}`,p=n=>"ION-CONTENT"===n.tagName,k=function(){var n=(0,v.Z)(function*(r){return p(r)?(yield new Promise(m=>(0,l.c)(r,m)),r.getScrollElement()):r});return function(m){return n.apply(this,arguments)}}(),b=n=>n.querySelector(_)||n.querySelector(E),o=n=>n.closest(E),c=(n,r)=>p(n)?n.scrollToTop(r):Promise.resolve(n.scrollTo({top:0,left:0,behavior:r>0?"smooth":"auto"})),x=(n,r,m,B)=>p(n)?n.scrollByPoint(r,m,B):Promise.resolve(n.scrollBy({top:m,left:r,behavior:B>0?"smooth":"auto"})),T=n=>(0,C.b)(n,h),I=n=>{if(p(n)){const m=n.scrollY;return n.scrollY=!1,m}return n.style.setProperty("overflow","hidden"),!0},O=(n,r)=>{p(n)?n.scrollY=r:n.style.removeProperty("overflow")}},25307:(S,w,i)=>{i.d(w,{a:()=>v,b:()=>x,c:()=>E,d:()=>T,e:()=>s,f:()=>_,g:()=>I,h:()=>C,i:()=>l,j:()=>B,k:()=>t,l:()=>p,m:()=>o,n:()=>O,o:()=>b,p:()=>h,q:()=>u,r:()=>m,s:()=>e,t:()=>c,u:()=>n,v:()=>r,w:()=>k});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",k="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",I="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",B="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},92975:(S,w,i)=>{i.r(w),i.d(w,{ion_reorder:()=>c,ion_reorder_group:()=>T});var v=i(15861),l=i(20771),C=i(25307),u=i(62905),h=i(17946),_=i(50512),E=i(89951);i(81836),i(81848);const c=class{constructor(t){(0,l.r)(this,t)}onClick(t){const e=this.el.closest("ion-reorder-group");t.preventDefault(),(!e||!e.disabled)&&t.stopImmediatePropagation()}render(){const t=(0,u.b)(this);return(0,l.h)(l.H,{class:t},(0,l.h)("slot",null,(0,l.h)("ion-icon",{icon:"ios"===t?C.j:C.k,lazy:!1,class:"reorder-icon",part:"icon","aria-hidden":"true"})))}get el(){return(0,l.f)(this)}};c.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:2.125rem;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:1.9375rem;opacity:0.3}"};const T=class{constructor(t){(0,l.r)(this,t),this.ionItemReorder=(0,l.d)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}connectedCallback(){var t=this;return(0,v.Z)(function*(){const e=(0,h.f)(t.el);e&&(t.scrollEl=yield(0,h.g)(e)),t.gesture=(yield Promise.resolve().then(i.bind(i,96535))).createGesture({el:t.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:s=>t.canStart(s),onStart:s=>t.onStart(s),onMove:s=>t.onMove(s),onEnd:()=>t.onEnd()}),t.disabledChanged()})()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeReorder(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const s=t.event.target.closest("ion-reorder");if(!s)return!1;const d=O(s,this.el);return!!d&&(t.data=d,!0)}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,s=this.cachedHeights;s.length=0;const d=this.el,a=d.children;if(!a||0===a.length)return;let f=0;for(let M=0;M<a.length;M++){const y=a[M];f+=y.offsetHeight,s.push(f),y.$ionIndex=M}const g=d.getBoundingClientRect();if(this.containerTop=g.top,this.containerBottom=g.bottom,this.scrollEl){const M=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=M.top+n,this.scrollElBottom=M.bottom-n}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=I(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(m),(0,E.a)()}onMove(t){const e=this.selectedItemEl;if(!e)return;const s=this.autoscroll(t.currentY),d=this.containerTop-s,f=Math.max(d,Math.min(t.currentY,this.containerBottom-s)),g=s+f-t.startY,y=this.itemIndexForTop(f-d);if(y!==this.lastToIndex){const L=I(e);this.lastToIndex=y,(0,E.b)(),this.reorderMove(L,y)}e.style.transform=`translateY(${g}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const e=this.lastToIndex,s=I(t);e===s?this.completeReorder():this.ionItemReorder.emit({from:s,to:e,complete:this.completeReorder.bind(this)}),(0,E.h)()}completeReorder(t){const e=this.selectedItemEl;if(e&&2===this.state){const s=this.el.children,d=s.length,a=this.lastToIndex,f=I(e);(0,_.r)(()=>{a===f||void 0!==t&&!0!==t||this.el.insertBefore(e,f<a?s[a+1]:s[a]);for(let g=0;g<d;g++)s[g].style.transform=""}),Array.isArray(t)&&(t=B(t,f,a)),e.style.transition="",e.classList.remove(m),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;for(let s=0;s<e.length;s++)if(e[s]>t)return s;return e.length-1}reorderMove(t,e){const s=this.selectedItemHeight,d=this.el.children;for(let a=0;a<d.length;a++){let g="";a>t&&a<=e?g=`translateY(${-s}px)`:a<t&&a>=e&&(g=`translateY(${s}px)`),d[a].style.transform=g}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-r:t>this.scrollElBottom&&(e=r),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=(0,u.b)(this);return(0,l.h)(l.H,{class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return(0,l.f)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},I=t=>t.$ionIndex,O=(t,e)=>{let s;for(;t;){if(s=t.parentElement,s===e)return t;t=s}},n=60,r=10,m="reorder-selected",B=(t,e,s)=>{const d=t[e];return t.splice(e,1),t.splice(s,0,d),t.slice()};T.style=".reorder-list-active>*{display:block;-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);