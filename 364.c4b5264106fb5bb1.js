(self.webpackChunkyoutapPosReport=self.webpackChunkyoutapPosReport||[]).push([[364],{2096:(X,O,l)=>{l.d(O,{of:()=>v});var R=l(9940),a=l(9666);function v(...P){const C=(0,R.yG)(P);return(0,a.D)(P,C)}},6328:(X,O,l)=>{l.d(O,{b:()=>v});var R=l(1631),a=l(4674);function v(P,C){return(0,a.m)(C)?(0,R.z)(P,C,1):(0,R.z)(P,1)}},4716:(X,O,l)=>{l.d(O,{x:()=>a});var R=l(9360);function a(v){return(0,R.e)((P,C)=>{try{P.subscribe(C)}finally{C.add(v)}})}},9397:(X,O,l)=>{l.d(O,{b:()=>C});var R=l(4674),a=l(9360),v=l(8251),P=l(2737);function C(I,x,D){const m=(0,R.m)(I)||x||D?{next:I,error:x,complete:D}:I;return m?(0,a.e)((j,b)=>{var S;null===(S=m.subscribe)||void 0===S||S.call(m);let N=!0;j.subscribe((0,v.x)(b,_=>{var f;null===(f=m.next)||void 0===f||f.call(m,_),b.next(_)},()=>{var _;N=!1,null===(_=m.complete)||void 0===_||_.call(m),b.complete()},_=>{var f;N=!1,null===(f=m.error)||void 0===f||f.call(m,_),b.error(_)},()=>{var _,f;N&&(null===(_=m.unsubscribe)||void 0===_||_.call(m)),null===(f=m.finalize)||void 0===f||f.call(m)}))}):P.y}},9671:(X,O,l)=>{function R(v,P,C,I,x,D,m){try{var j=v[D](m),b=j.value}catch(S){return void C(S)}j.done?P(b):Promise.resolve(b).then(I,x)}function a(v){return function(){var P=this,C=arguments;return new Promise(function(I,x){var D=v.apply(P,C);function m(b){R(D,I,x,m,j,"next",b)}function j(b){R(D,I,x,m,j,"throw",b)}m(void 0)})}}l.d(O,{Z:()=>a})},9862:(X,O,l)=>{l.r(O),l.d(O,{FetchBackend:()=>Z,HTTP_INTERCEPTORS:()=>re,HttpBackend:()=>_,HttpClient:()=>_e,HttpClientJsonpModule:()=>Et,HttpClientModule:()=>mt,HttpClientXsrfModule:()=>yt,HttpContext:()=>ye,HttpContextToken:()=>Je,HttpErrorResponse:()=>L,HttpEventType:()=>A,HttpFeatureKind:()=>U,HttpHandler:()=>N,HttpHeaderResponse:()=>z,HttpHeaders:()=>f,HttpParams:()=>k,HttpRequest:()=>W,HttpResponse:()=>H,HttpResponseBase:()=>G,HttpUrlEncodingCodec:()=>fe,HttpXhrBackend:()=>de,HttpXsrfTokenExtractor:()=>q,JsonpClientBackend:()=>ce,JsonpInterceptor:()=>dt,provideHttpClient:()=>Se,withFetch:()=>pt,withInterceptors:()=>ht,withInterceptorsFromDi:()=>xe,withJsonpSupport:()=>Ne,withNoXsrfProtection:()=>je,withRequestsMadeViaParent:()=>ft,withXsrfConfiguration:()=>le,\u0275HTTP_ROOT_INTERCEPTOR_FNS:()=>oe,\u0275HttpInterceptingHandler:()=>Y,\u0275HttpInterceptorHandler:()=>Y,\u0275PRIMARY_HTTP_BACKEND:()=>ie,\u0275withHttpTransferCache:()=>Ct});var R=l(9671),a=l(7460),v=l(2096),P=l(5592),C=l(9666),I=l(6328),x=l(2181),D=l(7398),m=l(4716),j=l(4664),b=l(9397),S=l(4887);class N{}class _{}class f{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?"string"==typeof t?this.lazyInit=()=>{this.headers=new Map,t.split("\n").forEach(e=>{const s=e.indexOf(":");if(s>0){const r=e.slice(0,s),o=r.toLowerCase(),i=e.slice(s+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,s)=>{this.setHeaderEntries(s,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,s])=>{this.setHeaderEntries(e,s)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof f?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new f;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof f?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let s=t.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(t.name,e);const r=("a"===t.op?this.headers.get(e):void 0)||[];r.push(...s),this.headers.set(e,r);break;case"d":const o=t.value;if(o){let i=this.headers.get(e);if(!i)return;i=i.filter(d=>-1===o.indexOf(d)),0===i.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,i)}else this.headers.delete(e),this.normalizedNames.delete(e)}}setHeaderEntries(t,e){const s=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=t.toLowerCase();this.headers.set(r,s),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class fe{encodeKey(t){return pe(t)}encodeValue(t){return pe(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const Xe=/%(\d[a-f0-9])/gi,ze={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function pe(n){return encodeURIComponent(n).replace(Xe,(t,e)=>ze[e]??t)}function $(n){return`${n}`}class k{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new fe,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Ke(n,t){const e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{const o=r.indexOf("="),[i,d]=-1==o?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,o)),t.decodeValue(r.slice(o+1))],c=e.get(i)||[];c.push(d),e.set(i,c)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const s=t.fromObject[e],r=Array.isArray(s)?s.map($):[$(s)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(s=>{const r=t[s];Array.isArray(r)?r.forEach(o=>{e.push({param:s,value:o,op:"a"})}):e.push({param:s,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(s=>e+"="+this.encoder.encodeValue(s)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new k({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push($(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let s=this.map.get(t.param)||[];const r=s.indexOf($(t.value));-1!==r&&s.splice(r,1),s.length>0?this.map.set(t.param,s):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class Je{constructor(t){this.defaultValue=t}}class ye{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function me(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Ee(n){return typeof Blob<"u"&&n instanceof Blob}function ge(n){return typeof FormData<"u"&&n instanceof FormData}class W{constructor(t,e,s,r){let o;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function Ve(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,o=r):o=s,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers||(this.headers=new f),this.context||(this.context=new ye),this.params){const i=this.params.toString();if(0===i.length)this.urlWithParams=e;else{const d=e.indexOf("?");this.urlWithParams=e+(-1===d?"?":d<e.length-1?"&":"")+i}}else this.params=new k,this.urlWithParams=e}serializeBody(){return null===this.body?null:me(this.body)||Ee(this.body)||ge(this.body)||function $e(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof k?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ge(this.body)?null:Ee(this.body)?this.body.type||null:me(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof k?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,s=t.url||this.url,r=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,i=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,d=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let c=t.headers||this.headers,p=t.params||this.params;const y=t.context??this.context;return void 0!==t.setHeaders&&(c=Object.keys(t.setHeaders).reduce((E,g)=>E.set(g,t.setHeaders[g]),c)),t.setParams&&(p=Object.keys(t.setParams).reduce((E,g)=>E.set(g,t.setParams[g]),p)),new W(e,s,o,{params:p,headers:c,context:y,reportProgress:d,responseType:r,withCredentials:i})}}var A=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(A||{});class G{constructor(t,e=200,s="OK"){this.headers=t.headers||new f,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||s,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class z extends G{constructor(t={}){super(t),this.type=A.ResponseHeader}clone(t={}){return new z({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class H extends G{constructor(t={}){super(t),this.type=A.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new H({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class L extends G{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function ne(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}let _e=(()=>{class n{constructor(e){this.handler=e}request(e,s,r={}){let o;if(e instanceof W)o=e;else{let c,p;c=r.headers instanceof f?r.headers:new f(r.headers),r.params&&(p=r.params instanceof k?r.params:new k({fromObject:r.params})),o=new W(e,s,void 0!==r.body?r.body:null,{headers:c,context:r.context,params:p,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}const i=(0,v.of)(o).pipe((0,I.b)(c=>this.handler.handle(c)));if(e instanceof W||"events"===r.observe)return i;const d=i.pipe((0,x.h)(c=>c instanceof H));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return d.pipe((0,D.U)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return d.pipe((0,D.U)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return d.pipe((0,D.U)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return d.pipe((0,D.U)(c=>c.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(e,s={}){return this.request("DELETE",e,s)}get(e,s={}){return this.request("GET",e,s)}head(e,s={}){return this.request("HEAD",e,s)}jsonp(e,s){return this.request("JSONP",e,{params:(new k).append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,s={}){return this.request("OPTIONS",e,s)}patch(e,s,r={}){return this.request("PATCH",e,ne(r,s))}post(e,s,r={}){return this.request("POST",e,ne(r,s))}put(e,s,r={}){return this.request("PUT",e,ne(r,s))}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(N))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const Ge=/^\)\]\}',?\n/;function Te(n){if(n.url)return n.url;const t="X-Request-URL".toLocaleLowerCase();return n.headers.get(t)}let Z=(()=>{class n{constructor(){this.fetchImpl=(0,a.inject)(Ye,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=(0,a.inject)(a.NgZone)}handle(e){return new P.y(s=>{const r=new AbortController;return this.doRequest(e,r.signal,s).then(se,o=>s.error(new L({error:o}))),()=>r.abort()})}doRequest(e,s,r){var o=this;return(0,R.Z)(function*(){const i=o.createRequestInit(e);let d;try{const w=o.fetchImpl(e.urlWithParams,{signal:s,...i});(function Qe(n){n.then(se,se)})(w),r.next({type:A.Sent}),d=yield w}catch(w){return void r.error(new L({error:w,status:w.status??0,statusText:w.statusText,url:e.urlWithParams,headers:w.headers}))}const c=new f(d.headers),p=d.statusText,y=Te(d)??e.urlWithParams;let E=d.status,g=null;if(e.reportProgress&&r.next(new z({headers:c,status:E,statusText:p,url:y})),d.body){const w=d.headers.get("content-length"),u=[],h=d.body.getReader();let te,T,M=0;const K=typeof Zone<"u"&&Zone.current;yield o.ngZone.runOutsideAngular((0,R.Z)(function*(){for(;;){const{done:B,value:he}=yield h.read();if(B)break;if(u.push(he),M+=he.length,e.reportProgress){T="text"===e.responseType?(T??"")+(te??=new TextDecoder).decode(he,{stream:!0}):void 0;const We=()=>r.next({type:A.DownloadProgress,total:w?+w:void 0,loaded:M,partialText:T});K?K.run(We):We()}}}));const ue=o.concatChunks(u,M);try{const B=d.headers.get("Content-Type")??"";g=o.parseBody(e,ue,B)}catch(B){return void r.error(new L({error:B,headers:new f(d.headers),status:d.status,statusText:d.statusText,url:Te(d)??e.urlWithParams}))}}0===E&&(E=g?200:0),E>=200&&E<300?(r.next(new H({body:g,headers:c,status:E,statusText:p,url:y})),r.complete()):r.error(new L({error:g,headers:c,status:E,statusText:p,url:y}))})()}parseBody(e,s,r){switch(e.responseType){case"json":const o=(new TextDecoder).decode(s).replace(Ge,"");return""===o?null:JSON.parse(o);case"text":return(new TextDecoder).decode(s);case"blob":return new Blob([s],{type:r});case"arraybuffer":return s.buffer}}createRequestInit(e){const s={},r=e.withCredentials?"include":void 0;if(e.headers.forEach((o,i)=>s[o]=i.join(",")),s.Accept??="application/json, text/plain, */*",!s["Content-Type"]){const o=e.detectContentTypeHeader();null!==o&&(s["Content-Type"]=o)}return{body:e.serializeBody(),method:e.method,headers:s,credentials:r}}concatChunks(e,s){const r=new Uint8Array(s);let o=0;for(const i of e)r.set(i,o),o+=i.length;return r}static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();class Ye{}function se(){}function Pe(n,t){return t(n)}function qe(n,t){return(e,s)=>t.intercept(e,{handle:r=>n(r,s)})}const re=new a.InjectionToken(""),J=new a.InjectionToken(""),oe=new a.InjectionToken(""),ie=new a.InjectionToken("");function tt(){let n=null;return(t,e)=>{null===n&&(n=((0,a.inject)(re,{optional:!0})??[]).reduceRight(qe,Pe));const s=(0,a.inject)(a.\u0275InitialRenderPendingTasks),r=s.add();return n(t,e).pipe((0,m.x)(()=>s.remove(r)))}}let ae,Y=(()=>{class n extends N{constructor(e,s){super(),this.backend=e,this.injector=s,this.chain=null,this.pendingTasks=(0,a.inject)(a.\u0275InitialRenderPendingTasks);const r=(0,a.inject)(ie,{optional:!0});this.backend=r??e}handle(e){if(null===this.chain){const r=Array.from(new Set([...this.injector.get(J),...this.injector.get(oe,[])]));this.chain=r.reduceRight((o,i)=>function et(n,t,e){return(s,r)=>(0,a.runInInjectionContext)(e,()=>t(s,o=>n(o,r)))}(o,i,this.injector),Pe)}const s=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe((0,m.x)(()=>this.pendingTasks.remove(s)))}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(_),a.\u0275\u0275inject(a.EnvironmentInjector))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),st=0;class ve{}function ct(){return"object"==typeof window?window:{}}let ce=(()=>{class n{constructor(e,s){this.callbackMap=e,this.document=s,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+st++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new P.y(s=>{const r=this.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${r}$1`),i=this.document.createElement("script");i.src=o;let d=null,c=!1;this.callbackMap[r]=g=>{delete this.callbackMap[r],d=g,c=!0};const p=()=>{i.parentNode&&i.parentNode.removeChild(i),delete this.callbackMap[r]};return i.addEventListener("load",g=>{this.resolvedPromise.then(()=>{p(),c?(s.next(new H({body:d,status:200,statusText:"OK",url:o})),s.complete()):s.error(new L({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),i.addEventListener("error",g=>{p(),s.error(new L({error:g,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(i),s.next({type:A.Sent}),()=>{c||this.removeListeners(i),p()}})}removeListeners(e){ae||(ae=this.document.implementation.createHTMLDocument()),ae.adoptNode(e)}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(ve),a.\u0275\u0275inject(S.DOCUMENT))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();function Ce(n,t){return"JSONP"===n.method?(0,a.inject)(ce).handle(n):t(n)}let dt=(()=>{class n{constructor(e){this.injector=e}intercept(e,s){return(0,a.runInInjectionContext)(this.injector,()=>Ce(e,r=>s.handle(r)))}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(a.EnvironmentInjector))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const lt=/^\)\]\}',?\n/;let de=(()=>{class n{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new a.\u0275RuntimeError(-2800,!1);const s=this.xhrFactory;return(s.\u0275loadImpl?(0,C.D)(s.\u0275loadImpl()):(0,v.of)(null)).pipe((0,j.w)(()=>new P.y(o=>{const i=s.build();if(i.open(e.method,e.urlWithParams),e.withCredentials&&(i.withCredentials=!0),e.headers.forEach((u,h)=>i.setRequestHeader(u,h.join(","))),e.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const u=e.detectContentTypeHeader();null!==u&&i.setRequestHeader("Content-Type",u)}if(e.responseType){const u=e.responseType.toLowerCase();i.responseType="json"!==u?u:"text"}const d=e.serializeBody();let c=null;const p=()=>{if(null!==c)return c;const u=i.statusText||"OK",h=new f(i.getAllResponseHeaders()),M=function ut(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(i)||e.url;return c=new z({headers:h,status:i.status,statusText:u,url:M}),c},y=()=>{let{headers:u,status:h,statusText:M,url:te}=p(),T=null;204!==h&&(T=typeof i.response>"u"?i.responseText:i.response),0===h&&(h=T?200:0);let K=h>=200&&h<300;if("json"===e.responseType&&"string"==typeof T){const ue=T;T=T.replace(lt,"");try{T=""!==T?JSON.parse(T):null}catch(B){T=ue,K&&(K=!1,T={error:B,text:T})}}K?(o.next(new H({body:T,headers:u,status:h,statusText:M,url:te||void 0})),o.complete()):o.error(new L({error:T,headers:u,status:h,statusText:M,url:te||void 0}))},E=u=>{const{url:h}=p(),M=new L({error:u,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});o.error(M)};let g=!1;const V=u=>{g||(o.next(p()),g=!0);let h={type:A.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),"text"===e.responseType&&i.responseText&&(h.partialText=i.responseText),o.next(h)},w=u=>{let h={type:A.UploadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),o.next(h)};return i.addEventListener("load",y),i.addEventListener("error",E),i.addEventListener("timeout",E),i.addEventListener("abort",E),e.reportProgress&&(i.addEventListener("progress",V),null!==d&&i.upload&&i.upload.addEventListener("progress",w)),i.send(d),o.next({type:A.Sent}),()=>{i.removeEventListener("error",E),i.removeEventListener("abort",E),i.removeEventListener("load",y),i.removeEventListener("timeout",E),e.reportProgress&&(i.removeEventListener("progress",V),null!==d&&i.upload&&i.upload.removeEventListener("progress",w)),i.readyState!==i.DONE&&i.abort()}})))}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(S.XhrFactory))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const Q=new a.InjectionToken("XSRF_ENABLED"),we="XSRF-TOKEN",Re=new a.InjectionToken("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>we}),be="X-XSRF-TOKEN",Oe=new a.InjectionToken("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>be});class q{}let De=(()=>{class n{constructor(e,s,r){this.doc=e,this.platform=s,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,S.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(S.DOCUMENT),a.\u0275\u0275inject(a.PLATFORM_ID),a.\u0275\u0275inject(Re))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();function Me(n,t){const e=n.url.toLowerCase();if(!(0,a.inject)(Q)||"GET"===n.method||"HEAD"===n.method||e.startsWith("http://")||e.startsWith("https://"))return t(n);const s=(0,a.inject)(q).getToken(),r=(0,a.inject)(Oe);return null!=s&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,s)})),t(n)}let Ie=(()=>{class n{constructor(e){this.injector=e}intercept(e,s){return(0,a.runInInjectionContext)(this.injector,()=>Me(e,r=>s.handle(r)))}static#e=this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(a.EnvironmentInjector))};static#t=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();var U=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(U||{});function F(n,t){return{\u0275kind:n,\u0275providers:t}}function Se(...n){const t=[_e,de,Y,{provide:N,useExisting:Y},{provide:_,useExisting:de},{provide:J,useValue:Me,multi:!0},{provide:Q,useValue:!0},{provide:q,useClass:De}];for(const e of n)t.push(...e.\u0275providers);return(0,a.makeEnvironmentProviders)(t)}function ht(n){return F(U.Interceptors,n.map(t=>({provide:J,useValue:t,multi:!0})))}const Ae=new a.InjectionToken("LEGACY_INTERCEPTOR_FN");function xe(){return F(U.LegacyInterceptors,[{provide:Ae,useFactory:tt},{provide:J,useExisting:Ae,multi:!0}])}function le({cookieName:n,headerName:t}){const e=[];return void 0!==n&&e.push({provide:Re,useValue:n}),void 0!==t&&e.push({provide:Oe,useValue:t}),F(U.CustomXsrfConfiguration,e)}function je(){return F(U.NoXsrfProtection,[{provide:Q,useValue:!1}])}function Ne(){return F(U.JsonpSupport,[ce,{provide:ve,useFactory:ct},{provide:J,useValue:Ce,multi:!0}])}function ft(){return F(U.RequestsMadeViaParent,[{provide:_,useFactory:()=>(0,a.inject)(N,{skipSelf:!0,optional:!0})}])}function pt(){return F(U.Fetch,[Z,{provide:_,useExisting:Z},{provide:ie,useExisting:Z}])}let yt=(()=>{class n{static disable(){return{ngModule:n,providers:[je().\u0275providers]}}static withOptions(e={}){return{ngModule:n,providers:le(e).\u0275providers}}static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Ie,{provide:re,useExisting:Ie,multi:!0},{provide:q,useClass:De},le({cookieName:we,headerName:be}).\u0275providers,{provide:Q,useValue:!0}]})}return n})(),mt=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Se(xe())]})}return n})(),Et=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Ne().\u0275providers]})}return n})();const ke="b",He="h",Le="s",Ue="st",Fe="u",Be="rt",ee=new a.InjectionToken(""),gt=["GET","HEAD"];function _t(n,t){const{isCacheActive:e,...s}=(0,a.inject)(ee),{transferCache:r,method:o}=n;if(!e||"POST"===o&&!s.includePostRequests&&!r||"POST"!==o&&!gt.includes(o)||!1===r||!1===s.filter?.(n))return t(n);const i=(0,a.inject)(a.TransferState),d=function Pt(n){const{params:t,method:e,responseType:s,url:r}=n,o=t.keys().sort().map(c=>`${c}=${t.getAll(c)}`).join("&"),d=function vt(n){let t=0;for(const e of n)t=Math.imul(31,t)+e.charCodeAt(0)<<0;return t+=2147483648,t.toString()}(e+"."+s+"."+r+"?"+o);return(0,a.makeStateKey)(d)}(n),c=i.get(d,null);let p=s.includeHeaders;if("object"==typeof r&&r.includeHeaders&&(p=r.includeHeaders),c){const{[ke]:y,[Be]:E,[He]:g,[Le]:V,[Ue]:w,[Fe]:u}=c;let h=y;switch(E){case"arraybuffer":h=(new TextEncoder).encode(y).buffer;break;case"blob":h=new Blob([y])}let M=new f(g);return(0,v.of)(new H({body:h,headers:M,status:V,statusText:w,url:u}))}return t(n).pipe((0,b.b)(y=>{y instanceof H&&i.set(d,{[ke]:y.body,[He]:Tt(y.headers,p),[Le]:y.status,[Ue]:y.statusText,[Fe]:y.url||"",[Be]:n.responseType})}))}function Tt(n,t){if(!t)return{};const e={};for(const s of t){const r=n.getAll(s);null!==r&&(e[s]=r)}return e}function Ct(n){return[{provide:ee,useFactory:()=>((0,a.\u0275performanceMarkFeature)("NgHttpTransferCache"),{isCacheActive:!0,...n})},{provide:oe,useValue:_t,multi:!0,deps:[a.TransferState,ee]},{provide:a.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const t=(0,a.inject)(a.ApplicationRef),e=(0,a.inject)(ee);return()=>{(0,a.\u0275whenStable)(t).then(()=>{e.isCacheActive=!1})}}}]}}}]);