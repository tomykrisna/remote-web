(self.webpackChunkyoutapPosReport=self.webpackChunkyoutapPosReport||[]).push([[9352],{2818:(y,p,s)=>{s.d(p,{I:()=>m,a:()=>b,b:()=>d,c:()=>_,d:()=>e,f:()=>C,g:()=>x,i:()=>r,p:()=>n,r:()=>a,s:()=>E});var g=s(9671),o=s(4298),f=s(2400);const d="ion-content",m=".ion-content-scroll-host",u=`${d}, ${m}`,r=i=>"ION-CONTENT"===i.tagName,x=function(){var i=(0,g.Z)(function*(t){return r(t)?(yield new Promise(l=>(0,o.c)(t,l)),t.getScrollElement()):t});return function(l){return i.apply(this,arguments)}}(),b=i=>i.querySelector(m)||i.querySelector(u),C=i=>i.closest(u),E=(i,t)=>r(i)?i.scrollToTop(t):Promise.resolve(i.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"})),_=(i,t,l,h)=>r(i)?i.scrollByPoint(t,l,h):Promise.resolve(i.scrollBy({top:l,left:t,behavior:h>0?"smooth":"auto"})),n=i=>(0,f.b)(i,d),e=i=>{if(r(i)){const l=i.scrollY;return i.scrollY=!1,l}return i.style.setProperty("overflow","hidden"),!0},a=(i,t)=>{r(i)?i.scrollY=t:i.style.removeProperty("overflow")}},9352:(y,p,s)=>{s.r(p),s.d(p,{ion_infinite_scroll:()=>r,ion_infinite_scroll_content:()=>_});var g=s(9671),o=s(4932),f=s(2818),c=s(6712),d=s(8958);const r=class{constructor(n){(0,o.r)(this,n),this.ionInfinite=(0,o.d)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.onScroll=()=>{const e=this.scrollEl;if(!e||!this.canStart())return 1;const a=this.el.offsetHeight;if(0===a)return 2;const i=e.scrollTop,l=e.offsetHeight,h=0!==this.thrPc?l*this.thrPc:this.thrPx;return("bottom"===this.position?e.scrollHeight-a-i-h-l:i-a-h)<0&&!this.didFire?(this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3):4},this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}thresholdChanged(){const n=this.threshold;n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)}disabledChanged(){const n=this.disabled;n&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)}connectedCallback(){var n=this;return(0,g.Z)(function*(){const e=(0,f.f)(n.el);e?(n.scrollEl=yield(0,f.g)(e),n.thresholdChanged(),n.disabledChanged(),"top"===n.position&&(0,o.w)(()=>{n.scrollEl&&(n.scrollEl.scrollTop=n.scrollEl.scrollHeight-n.scrollEl.clientHeight)})):(0,f.p)(n.el)})()}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}complete(){var n=this;return(0,g.Z)(function*(){const e=n.scrollEl;if(n.isLoading&&e)if(n.isLoading=!1,"top"===n.position){n.isBusy=!0;const a=e.scrollHeight-e.scrollTop;requestAnimationFrame(()=>{(0,o.e)(()=>{const t=e.scrollHeight-a;requestAnimationFrame(()=>{(0,o.w)(()=>{e.scrollTop=t,n.isBusy=!1,n.didFire=!1})})})})}else n.didFire=!1})()}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(n){this.scrollEl&&(n?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const n=(0,c.b)(this);return(0,o.h)(o.f,{key:"1444429a86950c449953cbf578436cc8cabf40ec",class:{[n]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}})}get el(){return(0,o.i)(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};r.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";const _=class{constructor(n){(0,o.r)(this,n),this.customHTMLEnabled=c.c.get("innerHTMLTemplatesEnabled",d.E),this.loadingSpinner=void 0,this.loadingText=void 0}componentDidLoad(){if(void 0===this.loadingSpinner){const n=(0,c.b)(this);this.loadingSpinner=c.c.get("infiniteLoadingSpinner",c.c.get("spinner","ios"===n?"lines":"crescent"))}}renderLoadingText(){const{customHTMLEnabled:n,loadingText:e}=this;return n?(0,o.h)("div",{class:"infinite-loading-text",innerHTML:(0,d.a)(e)}):(0,o.h)("div",{class:"infinite-loading-text"},this.loadingText)}render(){const n=(0,c.b)(this);return(0,o.h)(o.f,{key:"060278bf9cb0321e182352f9613be4ebbb028259",class:{[n]:!0,[`infinite-scroll-content-${n}`]:!0}},(0,o.h)("div",{key:"07d3cada920145f979ad315bd187fb878e0c3da3",class:"infinite-loading"},this.loadingSpinner&&(0,o.h)("div",{key:"6254f175d7543d09f3dd47cd0589a2809182cd8c",class:"infinite-loading-spinner"},(0,o.h)("ion-spinner",{key:"a6a816d1c65b60b786333b209b63492aa716a283",name:this.loadingSpinner})),void 0!==this.loadingText&&this.renderLoadingText()))}};_.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}"}}}]);