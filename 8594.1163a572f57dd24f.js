(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8594],{70962:(wt,yt,ot)=>{ot.d(yt,{c:()=>r});const p=typeof window<"u"?window:void 0;typeof document<"u"&&document;var et=ot(93630);let st;const pt=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),it=s=>(void 0===st&&(st=void 0===s.style.animationName&&void 0!==s.style.webkitAnimationName?"-webkit-":""),st),S=(s,n,a)=>{const c=n.startsWith("animation")?it(s):"";s.style.setProperty(c+n,a)},Y=(s,n)=>{const a=n.startsWith("animation")?it(s):"";s.style.removeProperty(a+n)},ft=[],u=(s=[],n)=>{if(void 0!==n){const a=Array.isArray(n)?n:[n];return[...s,...a]}return s},r=s=>{let n,a,c,f,h,b,E,N,$,y,A,v,i,l=[],R=[],I=[],w=!1,L={},P=[],J=[],Q={},W=0,m=!1,F=!1,O=!0,X=!1,q=!0,G=!1;const k=s,D=[],M=[],H=[],d=[],B=[],j=[],St=[],Ct=[],_t=[],bt=[],tt=[],qt="function"==typeof AnimationEffect||void 0!==p&&"function"==typeof p.AnimationEffect,V="function"==typeof Element&&"function"==typeof Element.prototype.animate&&qt,Rt=()=>tt,vt=(t,e)=>{const o=e.findIndex(_=>_.c===t);o>-1&&e.splice(o,1)},At=(t,e)=>((null!=e&&e.oneTimeCallback?M:D).push({c:t,o:e}),i),$t=()=>{if(V)tt.forEach(t=>{t.cancel()}),tt.length=0;else{const t=d.slice();(0,et.r)(()=>{t.forEach(e=>{Y(e,"animation-name"),Y(e,"animation-duration"),Y(e,"animation-timing-function"),Y(e,"animation-iteration-count"),Y(e,"animation-delay"),Y(e,"animation-play-state"),Y(e,"animation-fill-mode"),Y(e,"animation-direction")})})}},Ft=()=>{j.forEach(t=>{null!=t&&t.parentNode&&t.parentNode.removeChild(t)}),j.length=0},dt=()=>void 0!==h?h:E?E.getFill():"both",at=()=>void 0!==$?$:void 0!==b?b:E?E.getDirection():"normal",ut=()=>m?"linear":void 0!==c?c:E?E.getEasing():"linear",Z=()=>F?0:void 0!==y?y:void 0!==a?a:E?E.getDuration():0,nt=()=>void 0!==f?f:E?E.getIterations():1,ct=()=>void 0!==A?A:void 0!==n?n:E?E.getDelay():0,lt=()=>{0!==W&&(W--,0===W&&((()=>{Tt(),_t.forEach(x=>x()),bt.forEach(x=>x());const t=O?1:0,e=P,o=J,_=Q;d.forEach(x=>{const U=x.classList;e.forEach(rt=>U.add(rt)),o.forEach(rt=>U.remove(rt));for(const rt in _)_.hasOwnProperty(rt)&&S(x,rt,_[rt])}),y=void 0,$=void 0,A=void 0,D.forEach(x=>x.c(t,i)),M.forEach(x=>x.c(t,i)),M.length=0,q=!0,O&&(X=!0),O=!0})(),E&&E.animationFinish()))},Lt=(t=!0)=>{Ft();const e=(s=>(s.forEach(n=>{for(const a in n)if(n.hasOwnProperty(a)){const c=n[a];if("easing"===a)n["animation-timing-function"]=c,delete n[a];else{const f=pt(a);f!==a&&(n[f]=c,delete n[a])}}}),s))(l);d.forEach(o=>{if(e.length>0){const _=((s=[])=>s.map(n=>{const a=n.offset,c=[];for(const f in n)n.hasOwnProperty(f)&&"offset"!==f&&c.push(`${f}: ${n[f]};`);return`${100*a}% { ${c.join(" ")} }`}).join(" "))(e);v=void 0!==s?s:(s=>{let n=ft.indexOf(s);return n<0&&(n=ft.push(s)-1),`ion-animation-${n}`})(_);const x=((s,n,a)=>{var c;const f=(s=>{const n=void 0!==s.getRootNode?s.getRootNode():s;return n.head||n})(a),h=it(a),b=f.querySelector("#"+s);if(b)return b;const l=(null!==(c=a.ownerDocument)&&void 0!==c?c:document).createElement("style");return l.id=s,l.textContent=`@${h}keyframes ${s} { ${n} } @${h}keyframes ${s}-alt { ${n} }`,f.appendChild(l),l})(v,_,o);j.push(x),S(o,"animation-duration",`${Z()}ms`),S(o,"animation-timing-function",ut()),S(o,"animation-delay",`${ct()}ms`),S(o,"animation-fill-mode",dt()),S(o,"animation-direction",at());const U=nt()===1/0?"infinite":nt().toString();S(o,"animation-iteration-count",U),S(o,"animation-play-state","paused"),t&&S(o,"animation-name",`${x.id}-alt`),(0,et.r)(()=>{S(o,"animation-name",x.id||null)})}})},It=(t=!0)=>{(()=>{St.forEach(_=>_()),Ct.forEach(_=>_());const t=R,e=I,o=L;d.forEach(_=>{const x=_.classList;t.forEach(U=>x.add(U)),e.forEach(U=>x.remove(U));for(const U in o)o.hasOwnProperty(U)&&S(_,U,o[U])})})(),l.length>0&&(V?(d.forEach(t=>{const e=t.animate(l,{id:k,delay:ct(),duration:Z(),easing:ut(),iterations:nt(),fill:dt(),direction:at()});e.pause(),tt.push(e)}),tt.length>0&&(tt[0].onfinish=()=>{lt()})):Lt(t)),w=!0},mt=t=>{if(t=Math.min(Math.max(t,0),.9999),V)tt.forEach(e=>{e.currentTime=e.effect.getComputedTiming().delay+Z()*t,e.pause()});else{const e=`-${Z()*t}ms`;d.forEach(o=>{l.length>0&&(S(o,"animation-delay",e),S(o,"animation-play-state","paused"))})}},Nt=t=>{tt.forEach(e=>{e.effect.updateTiming({delay:ct(),duration:Z(),easing:ut(),iterations:nt(),fill:dt(),direction:at()})}),void 0!==t&&mt(t)},Ot=(t=!0,e)=>{(0,et.r)(()=>{d.forEach(o=>{S(o,"animation-name",v||null),S(o,"animation-duration",`${Z()}ms`),S(o,"animation-timing-function",ut()),S(o,"animation-delay",void 0!==e?`-${e*Z()}ms`:`${ct()}ms`),S(o,"animation-fill-mode",dt()||null),S(o,"animation-direction",at()||null);const _=nt()===1/0?"infinite":nt().toString();S(o,"animation-iteration-count",_),t&&S(o,"animation-name",`${v}-alt`),(0,et.r)(()=>{S(o,"animation-name",v||null)})})})},z=(t=!1,e=!0,o)=>(t&&B.forEach(_=>{_.update(t,e,o)}),V?Nt(o):Ot(e,o),i),Xt=()=>{w&&(V?tt.forEach(t=>{t.pause()}):d.forEach(t=>{S(t,"animation-play-state","paused")}),G=!0)},Ce=()=>{N=void 0,lt()},Tt=()=>{N&&clearTimeout(N)},xt=t=>new Promise(e=>{null!=t&&t.sync&&(F=!0,At(()=>F=!1,{oneTimeCallback:!0})),w||It(),X&&(V?(mt(0),Nt()):Ot(),X=!1),q&&(W=B.length+1,q=!1);const o=()=>{vt(_,M),e()},_=()=>{vt(o,H),e()};At(_,{oneTimeCallback:!0}),((t,e)=>{H.push({c:t,o:{oneTimeCallback:!0}})})(o),B.forEach(x=>{x.play()}),V?(tt.forEach(t=>{t.play()}),(0===l.length||0===d.length)&&lt()):(()=>{if(Tt(),(0,et.r)(()=>{d.forEach(t=>{l.length>0&&S(t,"animation-play-state","running")})}),0===l.length||0===d.length)lt();else{const t=ct()||0,e=Z()||0,o=nt()||1;isFinite(o)&&(N=setTimeout(Ce,t+e*o+100)),((s,n)=>{let a;const c={passive:!0},h=b=>{s===b.target&&(a&&a(),Tt(),(0,et.r)(()=>{d.forEach(t=>{Y(t,"animation-duration"),Y(t,"animation-delay"),Y(t,"animation-play-state")}),(0,et.r)(lt)}))};s&&(s.addEventListener("webkitAnimationEnd",h,c),s.addEventListener("animationend",h,c),a=()=>{s.removeEventListener("webkitAnimationEnd",h,c),s.removeEventListener("animationend",h,c)})})(d[0])}})(),G=!1}),Bt=(t,e)=>{const o=l[0];return void 0===o||void 0!==o.offset&&0!==o.offset?l=[{offset:0,[t]:e},...l]:o[t]=e,i};return i={parentAnimation:E,elements:d,childAnimations:B,id:k,animationFinish:lt,from:Bt,to:(t,e)=>{const o=l[l.length-1];return void 0===o||void 0!==o.offset&&1!==o.offset?l=[...l,{offset:1,[t]:e}]:o[t]=e,i},fromTo:(t,e,o)=>Bt(t,e).to(t,o),parent:t=>(E=t,i),play:xt,pause:()=>(B.forEach(t=>{t.pause()}),Xt(),i),stop:()=>{B.forEach(t=>{t.stop()}),w&&($t(),w=!1),m=!1,F=!1,q=!0,$=void 0,y=void 0,A=void 0,W=0,X=!1,O=!0,G=!1,H.forEach(t=>t.c(0,i)),H.length=0},destroy:t=>(B.forEach(e=>{e.destroy(t)}),(t=>{$t(),t&&Ft()})(t),d.length=0,B.length=0,l.length=0,D.length=0,M.length=0,w=!1,q=!0,i),keyframes:t=>{const e=l!==t;return l=t,e&&(t=>{V?Rt().forEach(e=>{const o=e.effect;if(o.setKeyframes)o.setKeyframes(t);else{const _=new KeyframeEffect(o.target,t,o.getTiming());e.effect=_}}):Lt()})(l),i},addAnimation:t=>{if(null!=t)if(Array.isArray(t))for(const e of t)e.parent(i),B.push(e);else t.parent(i),B.push(t);return i},addElement:t=>{if(null!=t)if(1===t.nodeType)d.push(t);else if(t.length>=0)for(let e=0;e<t.length;e++)d.push(t[e]);else console.error("Invalid addElement value");return i},update:z,fill:t=>(h=t,z(!0),i),direction:t=>(b=t,z(!0),i),iterations:t=>(f=t,z(!0),i),duration:t=>(!V&&0===t&&(t=1),a=t,z(!0),i),easing:t=>(c=t,z(!0),i),delay:t=>(n=t,z(!0),i),getWebAnimations:Rt,getKeyframes:()=>l,getFill:dt,getDirection:at,getDelay:ct,getIterations:nt,getEasing:ut,getDuration:Z,afterAddRead:t=>(_t.push(t),i),afterAddWrite:t=>(bt.push(t),i),afterClearStyles:(t=[])=>{for(const e of t)Q[e]="";return i},afterStyles:(t={})=>(Q=t,i),afterRemoveClass:t=>(J=u(J,t),i),afterAddClass:t=>(P=u(P,t),i),beforeAddRead:t=>(St.push(t),i),beforeAddWrite:t=>(Ct.push(t),i),beforeClearStyles:(t=[])=>{for(const e of t)L[e]="";return i},beforeStyles:(t={})=>(L=t,i),beforeRemoveClass:t=>(I=u(I,t),i),beforeAddClass:t=>(R=u(R,t),i),onFinish:At,isRunning:()=>0!==W&&!G,progressStart:(t=!1,e)=>(B.forEach(o=>{o.progressStart(t,e)}),Xt(),m=t,w||It(),z(!1,!0,e),i),progressStep:t=>(B.forEach(e=>{e.progressStep(t)}),mt(t),i),progressEnd:(t,e,o)=>(m=!1,B.forEach(_=>{_.progressEnd(t,e,o)}),void 0!==o&&(y=o),X=!1,O=!0,0===t?($="reverse"===at()?"normal":"reverse","reverse"===$&&(O=!1),V?(z(),mt(1-e)):(A=(1-e)*Z()*-1,z(!1,!1))):1===t&&(V?(z(),mt(e)):(A=e*Z()*-1,z(!1,!1))),void 0!==t&&!E&&xt(),i)}}},38594:(wt,yt,ot)=>{ot.r(yt),ot.d(yt,{iosTransitionAnimation:()=>Et,shadow:()=>K});var p=ot(70962),ht=ot(80191);const st=g=>document.querySelector(`${g}.ion-cloned-element`),K=g=>g.shadowRoot||g,pt=g=>{const T="ION-TABS"===g.tagName?g:g.querySelector("ion-tabs"),C="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=T){const u=T.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=u?u.querySelector(C):null}return g.querySelector(C)},it=(g,T)=>{const C="ION-TABS"===g.tagName?g:g.querySelector("ion-tabs");let u=[];if(null!=C){const r=C.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=r&&(u=r.querySelectorAll("ion-buttons"))}else u=g.querySelectorAll("ion-buttons");for(const r of u){const s=r.closest("ion-header"),n=s&&!s.classList.contains("header-collapse-condense-inactive"),a=r.querySelector("ion-back-button"),c=r.classList.contains("buttons-collapse");if(null!==a&&("start"===r.slot||""===r.slot)&&(c&&n&&T||!c))return a}return null},Y=(g,T,C,u,r,s,n,a,c)=>{var f,h;const b=T?`calc(100% - ${r.right+4}px)`:r.left-4+"px",l=T?"right":"left",R=T?"left":"right",I=T?"right":"left",w=(null===(f=s.textContent)||void 0===f?void 0:f.trim())===(null===(h=a.textContent)||void 0===h?void 0:h.trim()),L=(c.height-ft)/n.height,P=w?`scale(${c.width/n.width}, ${L})`:`scale(${L})`,J="scale(1)",W=K(u).querySelector("ion-icon").getBoundingClientRect(),m=T?W.width/2-(W.right-r.right)+"px":r.left-W.width/2+"px",F=T?`-${window.innerWidth-r.right}px`:`${r.left}px`,N=`${c.top}px`,$=`${r.top}px`,O=C?[{offset:0,transform:`translate3d(${F}, ${$}, 0)`},{offset:1,transform:`translate3d(${m}, ${N}, 0)`}]:[{offset:0,transform:`translate3d(${m}, ${N}, 0)`},{offset:1,transform:`translate3d(${F}, ${$}, 0)`}],v=C?[{offset:0,opacity:1,transform:J},{offset:1,opacity:0,transform:P}]:[{offset:0,opacity:0,transform:P},{offset:1,opacity:1,transform:J}],k=C?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],D=(0,p.c)(),M=(0,p.c)(),H=(0,p.c)(),d=st("ion-back-button"),B=K(d).querySelector(".button-text"),j=K(d).querySelector("ion-icon");d.text=u.text,d.mode=u.mode,d.icon=u.icon,d.color=u.color,d.disabled=u.disabled,d.style.setProperty("display","block"),d.style.setProperty("position","fixed"),M.addElement(j),D.addElement(B),H.addElement(d),H.beforeStyles({position:"absolute",top:"0px",[I]:"0px"}).keyframes(O),D.beforeStyles({"transform-origin":`${l} top`}).beforeAddWrite(()=>{u.style.setProperty("display","none"),d.style.setProperty(l,b)}).afterAddWrite(()=>{u.style.setProperty("display",""),d.style.setProperty("display","none"),d.style.removeProperty(l)}).keyframes(v),M.beforeStyles({"transform-origin":`${R} center`}).keyframes(k),g.addAnimation([D,M,H])},gt=(g,T,C,u,r,s,n,a)=>{var c,f;const h=T?"right":"left",b=T?`calc(100% - ${r.right}px)`:`${r.left}px`,R=`${r.top}px`,w=T?`-${window.innerWidth-a.right-8}px`:a.x-8+"px",L=a.y-2+"px",P=(null===(c=n.textContent)||void 0===c?void 0:c.trim())===(null===(f=u.textContent)||void 0===f?void 0:f.trim()),Q=a.height/(s.height-ft),W="scale(1)",m=P?`scale(${a.width/s.width}, ${Q})`:`scale(${Q})`,$=C?[{offset:0,opacity:0,transform:`translate3d(${w}, ${L}, 0) ${m}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0px, ${R}, 0) ${W}`}]:[{offset:0,opacity:.99,transform:`translate3d(0px, ${R}, 0) ${W}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${w}, ${L}, 0) ${m}`}],y=st("ion-title"),A=(0,p.c)();y.innerText=u.innerText,y.size=u.size,y.color=u.color,A.addElement(y),A.beforeStyles({"transform-origin":`${h} top`,height:`${r.height}px`,display:"",position:"relative",[h]:b}).beforeAddWrite(()=>{u.style.setProperty("opacity","0")}).afterAddWrite(()=>{u.style.setProperty("opacity",""),y.style.setProperty("display","none")}).keyframes($),g.addAnimation(A)},Et=(g,T)=>{var C;try{const u="cubic-bezier(0.32,0.72,0,1)",r="opacity",s="transform",n="0%",c="rtl"===g.ownerDocument.dir,f=c?"-99.5%":"99.5%",h=c?"33%":"-33%",b=T.enteringEl,l=T.leavingEl,R="back"===T.direction,I=b.querySelector(":scope > ion-content"),w=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),E=b.querySelectorAll(":scope > ion-header > ion-toolbar"),L=(0,p.c)(),P=(0,p.c)();if(L.addElement(b).duration((null!==(C=T.duration)&&void 0!==C?C:0)||540).easing(T.easing||u).fill("both").beforeRemoveClass("ion-page-invisible"),l&&null!=g){const m=(0,p.c)();m.addElement(g),L.addAnimation(m)}if(I||0!==E.length||0!==w.length?(P.addElement(I),P.addElement(w)):P.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),L.addAnimation(P),R?P.beforeClearStyles([r]).fromTo("transform",`translateX(${h})`,`translateX(${n})`).fromTo(r,.8,1):P.beforeClearStyles([r]).fromTo("transform",`translateX(${f})`,`translateX(${n})`),I){const m=K(I).querySelector(".transition-effect");if(m){const F=m.querySelector(".transition-cover"),N=m.querySelector(".transition-shadow"),$=(0,p.c)(),y=(0,p.c)(),A=(0,p.c)();$.addElement(m).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),y.addElement(F).beforeClearStyles([r]).fromTo(r,0,.1),A.addElement(N).beforeClearStyles([r]).fromTo(r,.03,.7),$.addAnimation([y,A]),P.addAnimation([$])}}const J=b.querySelector("ion-header.header-collapse-condense"),{forward:Q,backward:W}=((g,T,C,u,r)=>{const s=it(u,C),n=pt(r),a=pt(u),c=it(r,C),f=null!==s&&null!==n&&!C,h=null!==a&&null!==c&&C;if(f){const b=n.getBoundingClientRect(),l=s.getBoundingClientRect(),R=K(s).querySelector(".button-text"),I=R.getBoundingClientRect(),E=K(n).querySelector(".toolbar-title").getBoundingClientRect();gt(g,T,C,n,b,E,R,I),Y(g,T,C,s,l,R,I,n,E)}else if(h){const b=a.getBoundingClientRect(),l=c.getBoundingClientRect(),R=K(c).querySelector(".button-text"),I=R.getBoundingClientRect(),E=K(a).querySelector(".toolbar-title").getBoundingClientRect();gt(g,T,C,a,b,E,R,I),Y(g,T,C,c,l,R,I,a,E)}return{forward:f,backward:h}})(L,c,R,b,l);if(E.forEach(m=>{const F=(0,p.c)();F.addElement(m),L.addAnimation(F);const N=(0,p.c)();N.addElement(m.querySelector("ion-title"));const $=(0,p.c)(),y=Array.from(m.querySelectorAll("ion-buttons,[menuToggle]")),A=m.closest("ion-header"),O=null==A?void 0:A.classList.contains("header-collapse-condense-inactive");let X;X=y.filter(R?k=>{const D=k.classList.contains("buttons-collapse");return D&&!O||!D}:k=>!k.classList.contains("buttons-collapse")),$.addElement(X);const q=(0,p.c)();q.addElement(m.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const v=(0,p.c)();v.addElement(K(m).querySelector(".toolbar-background"));const i=(0,p.c)(),G=m.querySelector("ion-back-button");if(G&&i.addElement(G),F.addAnimation([N,$,q,v,i]),$.fromTo(r,.01,1),q.fromTo(r,.01,1),R)O||N.fromTo("transform",`translateX(${h})`,`translateX(${n})`).fromTo(r,.01,1),q.fromTo("transform",`translateX(${h})`,`translateX(${n})`),i.fromTo(r,.01,1);else if(J||N.fromTo("transform",`translateX(${f})`,`translateX(${n})`).fromTo(r,.01,1),q.fromTo("transform",`translateX(${f})`,`translateX(${n})`),v.beforeClearStyles([r,"transform"]),(null==A?void 0:A.translucent)?v.fromTo("transform",c?"translateX(-100%)":"translateX(100%)","translateX(0px)"):v.fromTo(r,.01,"var(--opacity)"),Q||i.fromTo(r,.01,1),G&&!Q){const D=(0,p.c)();D.addElement(K(G).querySelector(".button-text")).fromTo("transform",c?"translateX(-100px)":"translateX(100px)","translateX(0px)"),F.addAnimation(D)}}),l){const m=(0,p.c)(),F=l.querySelector(":scope > ion-content"),N=l.querySelectorAll(":scope > ion-header > ion-toolbar"),$=l.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(F||0!==N.length||0!==$.length?(m.addElement(F),m.addElement($)):m.addElement(l.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),L.addAnimation(m),R){m.beforeClearStyles([r]).fromTo("transform",`translateX(${n})`,c?"translateX(-100%)":"translateX(100%)");const y=(0,ht.g)(l);L.afterAddWrite(()=>{"normal"===L.getDirection()&&y.style.setProperty("display","none")})}else m.fromTo("transform",`translateX(${n})`,`translateX(${h})`).fromTo(r,1,.8);if(F){const y=K(F).querySelector(".transition-effect");if(y){const A=y.querySelector(".transition-cover"),O=y.querySelector(".transition-shadow"),X=(0,p.c)(),q=(0,p.c)(),v=(0,p.c)();X.addElement(y).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),q.addElement(A).beforeClearStyles([r]).fromTo(r,.1,0),v.addElement(O).beforeClearStyles([r]).fromTo(r,.7,.03),X.addAnimation([q,v]),m.addAnimation([X])}}N.forEach(y=>{const A=(0,p.c)();A.addElement(y);const O=(0,p.c)();O.addElement(y.querySelector("ion-title"));const X=(0,p.c)(),q=y.querySelectorAll("ion-buttons,[menuToggle]"),v=y.closest("ion-header"),i=null==v?void 0:v.classList.contains("header-collapse-condense-inactive"),G=Array.from(q).filter(B=>{const j=B.classList.contains("buttons-collapse");return j&&!i||!j});X.addElement(G);const k=(0,p.c)(),D=y.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");D.length>0&&k.addElement(D);const M=(0,p.c)();M.addElement(K(y).querySelector(".toolbar-background"));const H=(0,p.c)(),d=y.querySelector("ion-back-button");if(d&&H.addElement(d),A.addAnimation([O,X,k,H,M]),L.addAnimation(A),H.fromTo(r,.99,0),X.fromTo(r,.99,0),k.fromTo(r,.99,0),R){if(i||O.fromTo("transform",`translateX(${n})`,c?"translateX(-100%)":"translateX(100%)").fromTo(r,.99,0),k.fromTo("transform",`translateX(${n})`,c?"translateX(-100%)":"translateX(100%)"),M.beforeClearStyles([r,"transform"]),(null==v?void 0:v.translucent)?M.fromTo("transform","translateX(0px)",c?"translateX(-100%)":"translateX(100%)"):M.fromTo(r,"var(--opacity)",0),d&&!W){const j=(0,p.c)();j.addElement(K(d).querySelector(".button-text")).fromTo("transform",`translateX(${n})`,`translateX(${(c?-124:124)+"px"})`),A.addAnimation(j)}}else i||O.fromTo("transform",`translateX(${n})`,`translateX(${h})`).fromTo(r,.99,0).afterClearStyles([s,r]),k.fromTo("transform",`translateX(${n})`,`translateX(${h})`).afterClearStyles([s,r]),H.afterClearStyles([r]),O.afterClearStyles([r]),X.afterClearStyles([r])})}return L}catch(u){throw u}},ft=10}}]);