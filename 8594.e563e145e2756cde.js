(self.webpackChunkyoutapPosReport=self.webpackChunkyoutapPosReport||[]).push([[8594],{962:(be,ie,te)=>{te.d(ie,{c:()=>ce});const m=typeof window<"u"?window:void 0;let se;typeof document<"u"&&document;const O=(D,B,M)=>{const Q=B.startsWith("animation")?(D=>(void 0===se&&(se=void 0===D.style.animationName&&void 0!==D.style.webkitAnimationName?"-webkit-":""),se))(D):"";D.style.setProperty(Q+B,M)},J=(D=[],B)=>{if(void 0!==B){const M=Array.isArray(B)?B:[B];return[...D,...M]}return D},ce=D=>{let B,M,Q,ne,f,p,o,C,q,T,r,s=[],c=[],n=[],E=!1,w={},d=[],b=[],_={},S=0,A=!1,y=!1,g=!0,I=!1,Y=!0,z=!1;const u=D,v=[],$=[],X=[],a=[],l=[],W=[],x=[],k=[],L=[],H=[],N=[],P="function"==typeof AnimationEffect||void 0!==m&&"function"==typeof m.AnimationEffect,h="function"==typeof Element&&"function"==typeof Element.prototype.animate&&P,G=()=>N,Ee=(e,t)=>{const i=t.findIndex(R=>R.c===e);i>-1&&t.splice(i,1)},ue=(e,t)=>((t?.oneTimeCallback?$:v).push({c:e,o:t}),r),Te=()=>{h&&(N.forEach(e=>{e.cancel()}),N.length=0)},Fe=()=>{W.forEach(e=>{e?.parentNode&&e.parentNode.removeChild(e)}),W.length=0},me=()=>void 0!==f?f:o?o.getFill():"both",fe=()=>void 0!==C?C:void 0!==p?p:o?o.getDirection():"normal",pe=()=>A?"linear":void 0!==Q?Q:o?o.getEasing():"linear",re=()=>y?0:void 0!==q?q:void 0!==M?M:o?o.getDuration():0,ye=()=>void 0!==ne?ne:o?o.getIterations():1,ge=()=>void 0!==T?T:void 0!==B?B:o?o.getDelay():0,de=()=>{0!==S&&(S--,0===S&&((()=>{L.forEach(K=>K()),H.forEach(K=>K());const e=g?1:0,t=d,i=b,R=_;a.forEach(K=>{const V=K.classList;t.forEach(ee=>V.add(ee)),i.forEach(ee=>V.remove(ee));for(const ee in R)R.hasOwnProperty(ee)&&O(K,ee,R[ee])}),q=void 0,C=void 0,T=void 0,v.forEach(K=>K.c(e,r)),$.forEach(K=>K.c(e,r)),$.length=0,Y=!0,g&&(I=!0),g=!0})(),o&&o.animationFinish()))},he=()=>{(()=>{x.forEach(R=>R()),k.forEach(R=>R());const e=c,t=n,i=w;a.forEach(R=>{const K=R.classList;e.forEach(V=>K.add(V)),t.forEach(V=>K.remove(V));for(const V in i)i.hasOwnProperty(V)&&O(R,V,i[V])})})(),s.length>0&&h&&(a.forEach(e=>{const t=e.animate(s,{id:u,delay:ge(),duration:re(),easing:pe(),iterations:ye(),fill:me(),direction:fe()});t.pause(),N.push(t)}),N.length>0&&(N[0].onfinish=()=>{de()})),E=!0},ae=e=>{e=Math.min(Math.max(e,0),.9999),h&&N.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+re()*e,t.pause()})},Se=e=>{N.forEach(t=>{t.effect.updateTiming({delay:ge(),duration:re(),easing:pe(),iterations:ye(),fill:me(),direction:fe()})}),void 0!==e&&ae(e)},U=(e=!1,t=!0,i)=>(e&&l.forEach(R=>{R.update(e,t,i)}),h&&Se(i),r),Ce=()=>{E&&(h?N.forEach(e=>{e.pause()}):a.forEach(e=>{O(e,"animation-play-state","paused")}),z=!0)},_e=e=>new Promise(t=>{e?.sync&&(y=!0,ue(()=>y=!1,{oneTimeCallback:!0})),E||he(),I&&(h&&(ae(0),Se()),I=!1),Y&&(S=l.length+1,Y=!1);const i=()=>{Ee(R,$),t()},R=()=>{Ee(i,X),t()};ue(R,{oneTimeCallback:!0}),((e,t)=>{X.push({c:e,o:{oneTimeCallback:!0}})})(i),l.forEach(K=>{K.play()}),h?(N.forEach(e=>{e.play()}),(0===s.length||0===a.length)&&de()):de(),z=!1}),Re=(e,t)=>{const i=s[0];return void 0===i||void 0!==i.offset&&0!==i.offset?s=[{offset:0,[e]:t},...s]:i[e]=t,r};return r={parentAnimation:o,elements:a,childAnimations:l,id:u,animationFinish:de,from:Re,to:(e,t)=>{const i=s[s.length-1];return void 0===i||void 0!==i.offset&&1!==i.offset?s=[...s,{offset:1,[e]:t}]:i[e]=t,r},fromTo:(e,t,i)=>Re(e,t).to(e,i),parent:e=>(o=e,r),play:_e,pause:()=>(l.forEach(e=>{e.pause()}),Ce(),r),stop:()=>{l.forEach(e=>{e.stop()}),E&&(Te(),E=!1),A=!1,y=!1,Y=!0,C=void 0,q=void 0,T=void 0,S=0,I=!1,g=!0,z=!1,X.forEach(e=>e.c(0,r)),X.length=0},destroy:e=>(l.forEach(t=>{t.destroy(e)}),(e=>{Te(),e&&Fe()})(e),a.length=0,l.length=0,s.length=0,v.length=0,$.length=0,E=!1,Y=!0,r),keyframes:e=>{const t=s!==e;return s=e,t&&(e=>{h&&G().forEach(t=>{const i=t.effect;if(i.setKeyframes)i.setKeyframes(e);else{const R=new KeyframeEffect(i.target,e,i.getTiming());t.effect=R}})})(s),r},addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(r),l.push(t);else e.parent(r),l.push(e);return r},addElement:e=>{if(null!=e)if(1===e.nodeType)a.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)a.push(e[t]);else console.error("Invalid addElement value");return r},update:U,fill:e=>(f=e,U(!0),r),direction:e=>(p=e,U(!0),r),iterations:e=>(ne=e,U(!0),r),duration:e=>(!h&&0===e&&(e=1),M=e,U(!0),r),easing:e=>(Q=e,U(!0),r),delay:e=>(B=e,U(!0),r),getWebAnimations:G,getKeyframes:()=>s,getFill:me,getDirection:fe,getDelay:ge,getIterations:ye,getEasing:pe,getDuration:re,afterAddRead:e=>(L.push(e),r),afterAddWrite:e=>(H.push(e),r),afterClearStyles:(e=[])=>{for(const t of e)_[t]="";return r},afterStyles:(e={})=>(_=e,r),afterRemoveClass:e=>(b=J(b,e),r),afterAddClass:e=>(d=J(d,e),r),beforeAddRead:e=>(x.push(e),r),beforeAddWrite:e=>(k.push(e),r),beforeClearStyles:(e=[])=>{for(const t of e)w[t]="";return r},beforeStyles:(e={})=>(w=e,r),beforeRemoveClass:e=>(n=J(n,e),r),beforeAddClass:e=>(c=J(c,e),r),onFinish:ue,isRunning:()=>0!==S&&!z,progressStart:(e=!1,t)=>(l.forEach(i=>{i.progressStart(e,t)}),Ce(),A=e,E||he(),U(!1,!0,t),r),progressStep:e=>(l.forEach(t=>{t.progressStep(e)}),ae(e),r),progressEnd:(e,t,i)=>(A=!1,l.forEach(R=>{R.progressEnd(e,t,i)}),void 0!==i&&(q=i),I=!1,g=!0,0===e?(C="reverse"===fe()?"normal":"reverse","reverse"===C&&(g=!1),h?(U(),ae(1-t)):(T=(1-t)*re()*-1,U(!1,!1))):1===e&&(h?(U(),ae(t)):(T=t*re()*-1,U(!1,!1))),void 0!==e&&!o&&_e(),r)}}},8594:(be,ie,te)=>{te.r(ie),te.d(ie,{iosTransitionAnimation:()=>Q,shadow:()=>O});var m=te(962),Ae=te(2762);const le=f=>document.querySelector(`${f}.ion-cloned-element`),O=f=>f.shadowRoot||f,J=f=>{const p="ION-TABS"===f.tagName?f:f.querySelector("ion-tabs"),s="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=p){const c=p.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=c?c.querySelector(s):null}return f.querySelector(s)},ce=(f,p)=>{const s="ION-TABS"===f.tagName?f:f.querySelector("ion-tabs");let c=[];if(null!=s){const n=s.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=n&&(c=n.querySelectorAll("ion-buttons"))}else c=f.querySelectorAll("ion-buttons");for(const n of c){const E=n.closest("ion-header"),o=E&&!E.classList.contains("header-collapse-condense-inactive"),w=n.querySelector("ion-back-button"),d=n.classList.contains("buttons-collapse");if(null!==w&&("start"===n.slot||""===n.slot)&&(d&&o&&p||!d))return w}return null},B=(f,p,s,c,n,E,o,w,d)=>{var b,_;const S=p?`calc(100% - ${n.right+4}px)`:n.left-4+"px",A=p?"right":"left",y=p?"left":"right",C=p?"right":"left";let q=1,T=1,g=`scale(${T})`;const I="scale(1)";if(E&&o){const j=(null===(b=E.textContent)||void 0===b?void 0:b.trim())===(null===(_=w.textContent)||void 0===_?void 0:_.trim());q=d.width/o.width,T=(d.height-ne)/o.height,g=j?`scale(${q}, ${T})`:`scale(${T})`}const r=O(c).querySelector("ion-icon").getBoundingClientRect(),z=p?r.width/2-(r.right-n.right)+"px":n.left-r.width/2+"px",u=p?`-${window.innerWidth-n.right}px`:`${n.left}px`,v=`${d.top}px`,$=`${n.top}px`,l=s?[{offset:0,transform:`translate3d(${u}, ${$}, 0)`},{offset:1,transform:`translate3d(${z}, ${v}, 0)`}]:[{offset:0,transform:`translate3d(${z}, ${v}, 0)`},{offset:1,transform:`translate3d(${u}, ${$}, 0)`}],k=s?[{offset:0,opacity:1,transform:I},{offset:1,opacity:0,transform:g}]:[{offset:0,opacity:0,transform:g},{offset:1,opacity:1,transform:I}],N=s?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],P=(0,m.c)(),h=(0,m.c)(),G=(0,m.c)(),F=le("ion-back-button"),Z=O(F).querySelector(".button-text"),oe=O(F).querySelector("ion-icon");F.text=c.text,F.mode=c.mode,F.icon=c.icon,F.color=c.color,F.disabled=c.disabled,F.style.setProperty("display","block"),F.style.setProperty("position","fixed"),h.addElement(oe),P.addElement(Z),G.addElement(F),G.beforeStyles({position:"absolute",top:"0px",[C]:"0px"}).beforeAddWrite(()=>{c.style.setProperty("display","none"),F.style.setProperty(A,S)}).afterAddWrite(()=>{c.style.setProperty("display",""),F.style.setProperty("display","none"),F.style.removeProperty(A)}).keyframes(l),P.beforeStyles({"transform-origin":`${A} top`}).keyframes(k),h.beforeStyles({"transform-origin":`${y} center`}).keyframes(N),f.addAnimation([P,h,G])},M=(f,p,s,c,n,E,o,w,d)=>{var b,_;const S=p?"right":"left",A=p?`calc(100% - ${n.right}px)`:`${n.left}px`,C=`${n.top}px`;let T=p?`-${window.innerWidth-o.right-8}px`:`${o.x+8}px`,g=.5;const I="scale(1)";let Y=`scale(${g})`;if(w&&d){T=p?`-${window.innerWidth-d.right-8}px`:d.x-8+"px";const W=(null===(b=w.textContent)||void 0===b?void 0:b.trim())===(null===(_=c.textContent)||void 0===_?void 0:_.trim());g=d.height/(E.height-ne),Y=W?`scale(${d.width/E.width}, ${g})`:`scale(${g})`}const u=o.top+o.height/2-n.height*g/2+"px",X=s?[{offset:0,opacity:0,transform:`translate3d(${T}, ${u}, 0) ${Y}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0px, ${C}, 0) ${I}`}]:[{offset:0,opacity:.99,transform:`translate3d(0px, ${C}, 0) ${I}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${T}, ${u}, 0) ${Y}`}],a=le("ion-title"),l=(0,m.c)();a.innerText=c.innerText,a.size=c.size,a.color=c.color,l.addElement(a),l.beforeStyles({"transform-origin":`${S} top`,height:`${n.height}px`,display:"",position:"relative",[S]:A}).beforeAddWrite(()=>{c.style.setProperty("opacity","0")}).afterAddWrite(()=>{c.style.setProperty("opacity",""),a.style.setProperty("display","none")}).keyframes(X),f.addAnimation(l)},Q=(f,p)=>{var s;try{const c="cubic-bezier(0.32,0.72,0,1)",n="opacity",E="transform",o="0%",d="rtl"===f.ownerDocument.dir,b=d?"-99.5%":"99.5%",_=d?"33%":"-33%",S=p.enteringEl,A=p.leavingEl,y="back"===p.direction,C=S.querySelector(":scope > ion-content"),q=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),T=S.querySelectorAll(":scope > ion-header > ion-toolbar"),g=(0,m.c)(),I=(0,m.c)();if(g.addElement(S).duration((null!==(s=p.duration)&&void 0!==s?s:0)||540).easing(p.easing||c).fill("both").beforeRemoveClass("ion-page-invisible"),A&&null!=f){const u=(0,m.c)();u.addElement(f),g.addAnimation(u)}if(C||0!==T.length||0!==q.length?(I.addElement(C),I.addElement(q)):I.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),g.addAnimation(I),y?I.beforeClearStyles([n]).fromTo("transform",`translateX(${_})`,`translateX(${o})`).fromTo(n,.8,1):I.beforeClearStyles([n]).fromTo("transform",`translateX(${b})`,`translateX(${o})`),C){const u=O(C).querySelector(".transition-effect");if(u){const v=u.querySelector(".transition-cover"),$=u.querySelector(".transition-shadow"),X=(0,m.c)(),a=(0,m.c)(),l=(0,m.c)();X.addElement(u).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(v).beforeClearStyles([n]).fromTo(n,0,.1),l.addElement($).beforeClearStyles([n]).fromTo(n,.03,.7),X.addAnimation([a,l]),I.addAnimation([X])}}const Y=S.querySelector("ion-header.header-collapse-condense"),{forward:r,backward:z}=((f,p,s,c,n)=>{const E=ce(c,s),o=J(n),w=J(c),d=ce(n,s),b=null!==E&&null!==o&&!s,_=null!==w&&null!==d&&s;if(b){const S=o.getBoundingClientRect(),A=E.getBoundingClientRect(),y=O(E).querySelector(".button-text"),C=y?.getBoundingClientRect(),T=O(o).querySelector(".toolbar-title").getBoundingClientRect();M(f,p,s,o,S,T,A,y,C),B(f,p,s,E,A,y,C,o,T)}else if(_){const S=w.getBoundingClientRect(),A=d.getBoundingClientRect(),y=O(d).querySelector(".button-text"),C=y?.getBoundingClientRect(),T=O(w).querySelector(".toolbar-title").getBoundingClientRect();M(f,p,s,w,S,T,A,y,C),B(f,p,s,d,A,y,C,w,T)}return{forward:b,backward:_}})(g,d,y,S,A);if(T.forEach(u=>{const v=(0,m.c)();v.addElement(u),g.addAnimation(v);const $=(0,m.c)();$.addElement(u.querySelector("ion-title"));const X=(0,m.c)(),a=Array.from(u.querySelectorAll("ion-buttons,[menuToggle]")),l=u.closest("ion-header"),W=l?.classList.contains("header-collapse-condense-inactive");let x;x=a.filter(y?P=>{const h=P.classList.contains("buttons-collapse");return h&&!W||!h}:P=>!P.classList.contains("buttons-collapse")),X.addElement(x);const k=(0,m.c)();k.addElement(u.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const L=(0,m.c)();L.addElement(O(u).querySelector(".toolbar-background"));const H=(0,m.c)(),N=u.querySelector("ion-back-button");if(N&&H.addElement(N),v.addAnimation([$,X,k,L,H]),X.fromTo(n,.01,1),k.fromTo(n,.01,1),y)W||$.fromTo("transform",`translateX(${_})`,`translateX(${o})`).fromTo(n,.01,1),k.fromTo("transform",`translateX(${_})`,`translateX(${o})`),H.fromTo(n,.01,1);else if(Y||$.fromTo("transform",`translateX(${b})`,`translateX(${o})`).fromTo(n,.01,1),k.fromTo("transform",`translateX(${b})`,`translateX(${o})`),L.beforeClearStyles([n,"transform"]),l?.translucent?L.fromTo("transform",d?"translateX(-100%)":"translateX(100%)","translateX(0px)"):L.fromTo(n,.01,"var(--opacity)"),r||H.fromTo(n,.01,1),N&&!r){const h=(0,m.c)();h.addElement(O(N).querySelector(".button-text")).fromTo("transform",d?"translateX(-100px)":"translateX(100px)","translateX(0px)"),v.addAnimation(h)}}),A){const u=(0,m.c)(),v=A.querySelector(":scope > ion-content"),$=A.querySelectorAll(":scope > ion-header > ion-toolbar"),X=A.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(v||0!==$.length||0!==X.length?(u.addElement(v),u.addElement(X)):u.addElement(A.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),g.addAnimation(u),y){u.beforeClearStyles([n]).fromTo("transform",`translateX(${o})`,d?"translateX(-100%)":"translateX(100%)");const a=(0,Ae.g)(A);g.afterAddWrite(()=>{"normal"===g.getDirection()&&a.style.setProperty("display","none")})}else u.fromTo("transform",`translateX(${o})`,`translateX(${_})`).fromTo(n,1,.8);if(v){const a=O(v).querySelector(".transition-effect");if(a){const l=a.querySelector(".transition-cover"),W=a.querySelector(".transition-shadow"),x=(0,m.c)(),k=(0,m.c)(),L=(0,m.c)();x.addElement(a).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),k.addElement(l).beforeClearStyles([n]).fromTo(n,.1,0),L.addElement(W).beforeClearStyles([n]).fromTo(n,.7,.03),x.addAnimation([k,L]),u.addAnimation([x])}}$.forEach(a=>{const l=(0,m.c)();l.addElement(a);const W=(0,m.c)();W.addElement(a.querySelector("ion-title"));const x=(0,m.c)(),k=a.querySelectorAll("ion-buttons,[menuToggle]"),L=a.closest("ion-header"),H=L?.classList.contains("header-collapse-condense-inactive"),N=Array.from(k).filter(oe=>{const j=oe.classList.contains("buttons-collapse");return j&&!H||!j});x.addElement(N);const P=(0,m.c)(),h=a.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");h.length>0&&P.addElement(h);const G=(0,m.c)();G.addElement(O(a).querySelector(".toolbar-background"));const F=(0,m.c)(),Z=a.querySelector("ion-back-button");if(Z&&F.addElement(Z),l.addAnimation([W,x,P,F,G]),g.addAnimation(l),F.fromTo(n,.99,0),x.fromTo(n,.99,0),P.fromTo(n,.99,0),y){if(H||W.fromTo("transform",`translateX(${o})`,d?"translateX(-100%)":"translateX(100%)").fromTo(n,.99,0),P.fromTo("transform",`translateX(${o})`,d?"translateX(-100%)":"translateX(100%)"),G.beforeClearStyles([n,"transform"]),L?.translucent?G.fromTo("transform","translateX(0px)",d?"translateX(-100%)":"translateX(100%)"):G.fromTo(n,"var(--opacity)",0),Z&&!z){const j=(0,m.c)();j.addElement(O(Z).querySelector(".button-text")).fromTo("transform",`translateX(${o})`,`translateX(${(d?-124:124)+"px"})`),l.addAnimation(j)}}else H||W.fromTo("transform",`translateX(${o})`,`translateX(${_})`).fromTo(n,.99,0).afterClearStyles([E,n]),P.fromTo("transform",`translateX(${o})`,`translateX(${_})`).afterClearStyles([E,n]),F.afterClearStyles([n]),W.afterClearStyles([n]),x.afterClearStyles([n])})}return g}catch(c){throw c}},ne=10}}]);