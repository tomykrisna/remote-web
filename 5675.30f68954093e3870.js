(self.webpackChunkyoutapPosReport=self.webpackChunkyoutapPosReport||[]).push([[5675],{4510:(V,A,w)=>{w.d(A,{g:()=>p});const p=(u,r,l,h,d)=>M(u[1],r[1],l[1],h[1],d).map(v=>E(u[0],r[0],l[0],h[0],v)),E=(u,r,l,h,d)=>d*(3*r*Math.pow(d-1,2)+d*(-3*l*d+3*l+h*d))-u*Math.pow(d-1,3),M=(u,r,l,h,d)=>_((h-=d)-3*(l-=d)+3*(r-=d)-(u-=d),3*l-6*r+3*u,3*r-3*u,u).filter(T=>T>=0&&T<=1),_=(u,r,l,h)=>{if(0===u)return((u,r,l)=>{const h=r*r-4*u*l;return h<0?[]:[(-r+Math.sqrt(h))/(2*u),(-r-Math.sqrt(h))/(2*u)]})(r,l,h);const d=(3*(l/=u)-(r/=u)*r)/3,v=(2*r*r*r-9*r*l+27*(h/=u))/27;if(0===d)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-d),-Math.sqrt(-d)];const T=Math.pow(v/2,2)+Math.pow(d/3,3);if(0===T)return[Math.pow(v/2,.5)-r/3];if(T>0)return[Math.pow(-v/2+Math.sqrt(T),1/3)-Math.pow(v/2+Math.sqrt(T),1/3)-r/3];const I=Math.sqrt(Math.pow(-d/3,3)),P=Math.acos(-v/(2*Math.sqrt(Math.pow(-d/3,3)))),k=2*Math.pow(I,1/3);return[k*Math.cos(P/3)-r/3,k*Math.cos((P+2*Math.PI)/3)-r/3,k*Math.cos((P+4*Math.PI)/3)-r/3]}},5675:(V,A,w)=>{w.r(A),w.d(A,{ion_nav:()=>B,ion_nav_link:()=>D});var p=w(9671),E=w(4932),M=w(4510),f=w(4298),_=w(8266),u=w(6712),r=w(4813);class v{constructor(t,n){this.component=t,this.params=n,this.state=1}init(t){var n=this;return(0,p.Z)(function*(){if(n.state=2,!n.element){const s=n.component;n.element=yield(0,r.a)(n.delegate,t,s,["ion-page","ion-page-invisible"],n.params)}})()}_destroy(){(0,f.m)(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const T=(e,t,n)=>!(!e||e.component!==t)&&(0,f.s)(e.params,n),I=(e,t)=>e?e instanceof v?e:new v(e,t):null,B=class{constructor(e){(0,E.r)(this,e),this.ionNavWillLoad=(0,E.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,E.d)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,E.d)(this,"ionNavDidChange",3),this.transInstr=[],this.gestureOrAnimationInProgress=!1,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.didLoad=!1,this.delegate=void 0,this.swipeGesture=void 0,this.animated=!0,this.animation=void 0,this.rootParams=void 0,this.root=void 0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&!1!==this.didLoad&&(this.useRouter||void 0!==this.root&&this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=(0,u.b)(this);this.swipeGesture=u.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}componentDidLoad(){var e=this;return(0,p.Z)(function*(){e.didLoad=!0,e.rootChanged(),e.gesture=(yield w.e(7372).then(w.bind(w,7372))).createSwipeBackGesture(e.el,e.canStart.bind(e),e.onStart.bind(e),e.onMove.bind(e),e.onEnd.bind(e)),e.swipeGestureChanged()})()}connectedCallback(){this.destroyed=!1}disconnectedCallback(){for(const e of this.views)(0,_.l)(e.element,_.d),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(e,t,n,s){return this.insert(-1,e,t,n,s)}insert(e,t,n,s,i){return this.insertPages(e,[{component:t,componentProps:n}],s,i)}insertPages(e,t,n,s){return this.queueTrns({insertStart:e,insertViews:t,opts:n},s)}pop(e,t){return this.removeIndex(-1,1,e,t)}popTo(e,t,n){const s={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(s.removeView=e,s.removeStart=1):"number"==typeof e&&(s.removeStart=e+1),this.queueTrns(s,n)}popToRoot(e,t){return this.removeIndex(1,-1,e,t)}removeIndex(e,t=1,n,s){return this.queueTrns({removeStart:e,removeCount:t,opts:n},s)}setRoot(e,t,n,s){return this.setPages([{component:e,componentProps:t}],n,s)}setPages(e,t,n){return t??(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}setRouteId(e,t,n,s){const i=this.getActiveSync();if(T(i,e,t))return Promise.resolve({changed:!1,element:i.element});let o;const c=new Promise(g=>o=g);let a;const y={updateURL:!1,viewIsReady:g=>{let b;const S=new Promise(m=>b=m);return o({changed:!0,element:g,markVisible:(m=(0,p.Z)(function*(){b(),yield a}),function(){return m.apply(this,arguments)})}),S;var m}};if("root"===n)a=this.setRoot(e,t,y);else{const g=this.views.find(b=>T(b,e,t));g?a=this.popTo(g,Object.assign(Object.assign({},y),{direction:"back",animationBuilder:s})):"forward"===n?a=this.push(e,t,Object.assign(Object.assign({},y),{animationBuilder:s})):"back"===n&&(a=this.setRoot(e,t,Object.assign(Object.assign({},y),{direction:"back",animated:!0,animationBuilder:s})))}return c}getRouteId(){var e=this;return(0,p.Z)(function*(){const t=e.getActiveSync();if(t)return{id:t.element.tagName,params:t.params,element:t.element}})()}getActive(){var e=this;return(0,p.Z)(function*(){return e.getActiveSync()})()}getByIndex(e){var t=this;return(0,p.Z)(function*(){return t.views[e]})()}canGoBack(e){var t=this;return(0,p.Z)(function*(){return t.canGoBackSync(e)})()}getPrevious(e){var t=this;return(0,p.Z)(function*(){return t.getPreviousSync(e)})()}getLength(){var e=this;return(0,p.Z)(function*(){return Promise.resolve(e.views.length)})()}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}queueTrns(e,t){var n=this;return(0,p.Z)(function*(){var s,i;if(n.isTransitioning&&null!==(s=e.opts)&&void 0!==s&&s.skipIfBusy)return!1;const o=new Promise((c,a)=>{e.resolve=c,e.reject=a});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&n.useRouter){const c=document.querySelector("ion-router");if(c){const a=yield c.canTransition();if(!1===a)return!1;if("string"==typeof a)return c.push(a,e.opts.direction||"back"),!1}}return 0===(null===(i=e.insertViews)||void 0===i?void 0:i.length)&&(e.insertViews=void 0),n.transInstr.push(e),n.nextTrns(),o})()}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}runTransition(e){var t=this;return(0,p.Z)(function*(){try{t.ionNavWillChange.emit(),t.isTransitioning=!0,t.prepareTI(e);const n=t.getActiveSync(),s=t.getEnteringView(e,n);if(!n&&!s)throw new Error("no views in the stack to be removed");s&&1===s.state&&(yield s.init(t.el)),t.postViewInit(s,n,e);const i=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&s!==n;let o;i&&e.opts&&n&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||s?.animationBuilder),n.animationBuilder=e.opts.animationBuilder),o=i?yield t.transition(s,n,e):{hasCompleted:!0,requiresTransition:!1},t.success(o,e),t.ionNavDidChange.emit()}catch(n){t.failed(n,e)}t.isTransitioning=!1,t.nextTrns()})()}prepareTI(e){var t,n,s;const i=this.views.length;if(null!==(t=e.opts)&&void 0!==t||(e.opts={}),null!==(n=(s=e.opts).delegate)&&void 0!==n||(s.delegate=this.delegate),void 0!==e.removeView){(0,f.m)(void 0!==e.removeStart,"removeView needs removeStart"),(0,f.m)(void 0!==e.removeCount,"removeView needs removeCount");const a=this.views.indexOf(e.removeView);if(a<0)throw new Error("removeView was not found");e.removeStart+=a}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=i-1),e.removeCount<0&&(e.removeCount=i-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===i),e.insertViews&&((e.insertStart<0||e.insertStart>i)&&(e.insertStart=i),e.enteringRequiresTransition=e.insertStart===i);const o=e.insertViews;if(!o)return;(0,f.m)(o.length>0,"length can not be zero");const c=(e=>e.map(t=>t instanceof v?t:"component"in t?I(t.component,null===t.componentProps?void 0:t.componentProps):I(t,void 0)).filter(t=>null!==t))(o);if(0===c.length)throw new Error("invalid views to insert");for(const a of c){a.delegate=e.opts.delegate;const y=a.nav;if(y&&y!==this)throw new Error("inserted view was already inserted");if(3===a.state)throw new Error("inserted view was already destroyed")}e.insertViews=c}getEnteringView(e,t){const n=e.insertViews;if(void 0!==n)return n[n.length-1];const s=e.removeStart;if(void 0!==s){const i=this.views,o=s+e.removeCount;for(let c=i.length-1;c>=0;c--){const a=i[c];if((c<s||c>=o)&&a!==t)return a}}}postViewInit(e,t,n){var s,i,o;(0,f.m)(t||e,"Both leavingView and enteringView are null"),(0,f.m)(n.resolve,"resolve must be valid"),(0,f.m)(n.reject,"reject must be valid");const c=n.opts,{insertViews:a,removeStart:y,removeCount:g}=n;let b;if(void 0!==y&&void 0!==g){(0,f.m)(y>=0,"removeStart can not be negative"),(0,f.m)(g>=0,"removeCount can not be negative"),b=[];for(let m=y;m<y+g;m++){const C=this.views[m];void 0!==C&&C!==e&&C!==t&&b.push(C)}null!==(s=c.direction)&&void 0!==s||(c.direction="back")}const S=this.views.length+(null!==(i=a?.length)&&void 0!==i?i:0)-(g??0);if((0,f.m)(S>=0,"final balance can not be negative"),0===S)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(a){let m=n.insertStart;for(const C of a)this.insertViewAt(C,m),m++;n.enteringRequiresTransition&&(null!==(o=c.direction)&&void 0!==o||(c.direction="forward"))}if(b&&b.length>0){for(const m of b)(0,_.l)(m.element,_.b),(0,_.l)(m.element,_.c),(0,_.l)(m.element,_.d);for(const m of b)this.destroyView(m)}}transition(e,t,n){var s=this;return(0,p.Z)(function*(){const i=n.opts,o=i.progressAnimation?S=>{void 0===S||s.gestureOrAnimationInProgress?s.sbAni=S:(s.gestureOrAnimationInProgress=!0,S.onFinish(()=>{s.gestureOrAnimationInProgress=!1},{oneTimeCallback:!0}),S.progressEnd(0,0,0))}:void 0,c=(0,u.b)(s),a=e.element,y=t&&t.element,g=Object.assign(Object.assign({mode:c,showGoBack:s.canGoBackSync(e),baseEl:s.el,progressCallback:o,animated:s.animated&&u.c.getBoolean("animated",!0),enteringEl:a,leavingEl:y},i),{animationBuilder:i.animationBuilder||s.animation||u.c.get("navAnimation")}),{hasCompleted:b}=yield(0,_.t)(g);return s.transitionFinish(b,e,t,i)})()}transitionFinish(e,t,n,s){const i=e?t:n;return i&&this.unmountInactiveViews(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:s.direction}}insertViewAt(e,t){const n=this.views,s=n.indexOf(e);s>-1?((0,f.m)(e.nav===this,"view is not part of the nav"),n.splice(s,1),n.splice(t,0,e)):((0,f.m)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}removeView(e){(0,f.m)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,n=t.indexOf(e);(0,f.m)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}destroyView(e){e._destroy(),this.removeView(e)}unmountInactiveViews(e){if(this.destroyed)return;const t=this.views,n=t.indexOf(e);for(let s=t.length-1;s>=0;s--){const i=t[s],o=i.element;o&&(s>n?((0,_.l)(o,_.d),this.destroyView(i)):s<n&&(0,_.s)(o,!0))}}canStart(){return!this.gestureOrAnimationInProgress&&!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()}onStart(){this.gestureOrAnimationInProgress=!0,this.pop({direction:"back",progressAnimation:!0})}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,n){if(this.sbAni){this.sbAni.onFinish(()=>{this.gestureOrAnimationInProgress=!1},{oneTimeCallback:!0});let s=e?-.001:.001;e?s+=(0,M.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=(0,M.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,s,n)}else this.gestureOrAnimationInProgress=!1}render(){return(0,E.h)("slot",{key:"e9d99a8a0b84f02f9964d8143cd5e647e43334f9"})}get el(){return(0,E.i)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};B.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";const D=class{constructor(e){(0,E.r)(this,e),this.onClick=()=>((e,t,n,s,i)=>{const o=this.el.closest("ion-nav");if(o)if("forward"===t){if(void 0!==n)return o.push(n,s,{skipIfBusy:!0,animationBuilder:i})}else if("root"===t){if(void 0!==n)return o.setRoot(n,s,{skipIfBusy:!0,animationBuilder:i})}else if("back"===t)return o.pop({skipIfBusy:!0,animationBuilder:i});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation),this.component=void 0,this.componentProps=void 0,this.routerDirection="forward",this.routerAnimation=void 0}render(){return(0,E.h)(E.f,{key:"42c23dcdec5fdb25defebaf6e8a9fa75754ff8eb",onClick:this.onClick})}get el(){return(0,E.i)(this)}}}}]);