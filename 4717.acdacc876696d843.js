(self.webpackChunkyoutapPosReport=self.webpackChunkyoutapPosReport||[]).push([[4717],{4717:(te,A,P)=>{function N(e,r){return Object.is(e,r)}P.r(A),P.d(A,{REACTIVE_NODE:()=>d,SIGNAL:()=>l,consumerAfterComputation:()=>O,consumerBeforeComputation:()=>y,consumerDestroy:()=>V,consumerPollProducersForChange:()=>T,createComputed:()=>j,createSignal:()=>H,createWatch:()=>X,defaultEquals:()=>N,getActiveConsumer:()=>k,isInNotificationPhase:()=>D,isReactive:()=>q,producerAccessed:()=>p,producerNotifyConsumers:()=>I,producerUpdateValueVersion:()=>C,producerUpdatesAllowed:()=>h,setActiveConsumer:()=>g,setAlternateWeakRefImpl:()=>Z,setPostSignalSetFn:()=>z,setThrowInvalidWriteToSignalError:()=>$,signalMutateFn:()=>K,signalSetFn:()=>b,signalUpdateFn:()=>J});let u=null,c=!1,f=1;const l=Symbol("SIGNAL");function g(e){const r=u;return u=e,r}function k(){return u}function D(){return c}function q(e){return void 0!==e[l]}const d={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function p(e){if(c)throw new Error("");if(null===u)return;u.consumerOnSignalRead(e);const r=u.nextProducerIndex++;i(u),r<u.producerNode.length&&u.producerNode[r]!==e&&a(u)&&m(u.producerNode[r],u.producerIndexOfThis[r]),u.producerNode[r]!==e&&(u.producerNode[r]=e,u.producerIndexOfThis[r]=a(u)?L(e,u,r):0),u.producerLastReadVersion[r]=e.version}function C(e){if((!a(e)||e.dirty)&&(e.dirty||e.lastCleanEpoch!==f)){if(!e.producerMustRecompute(e)&&!T(e))return e.dirty=!1,void(e.lastCleanEpoch=f);e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=f}}function I(e){if(void 0===e.liveConsumerNode)return;const r=c;c=!0;try{for(const t of e.liveConsumerNode)t.dirty||F(t)}finally{c=r}}function h(){return!1!==u?.consumerAllowSignalWrites}function F(e){e.dirty=!0,I(e),e.consumerMarkedDirty?.(e)}function y(e){return e&&(e.nextProducerIndex=0),g(e)}function O(e,r){if(g(r),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(a(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)m(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function T(e){i(e);for(let r=0;r<e.producerNode.length;r++){const t=e.producerNode[r],n=e.producerLastReadVersion[r];if(n!==t.version||(C(t),n!==t.version))return!0}return!1}function V(e){if(i(e),a(e))for(let r=0;r<e.producerNode.length;r++)m(e.producerNode[r],e.producerIndexOfThis[r]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function L(e,r,t){if(M(e),i(e),0===e.liveConsumerNode.length)for(let n=0;n<e.producerNode.length;n++)e.producerIndexOfThis[n]=L(e.producerNode[n],e,n);return e.liveConsumerIndexOfThis.push(t),e.liveConsumerNode.push(r)-1}function m(e,r){if(M(e),i(e),1===e.liveConsumerNode.length)for(let n=0;n<e.producerNode.length;n++)m(e.producerNode[n],e.producerIndexOfThis[n]);const t=e.liveConsumerNode.length-1;if(e.liveConsumerNode[r]=e.liveConsumerNode[t],e.liveConsumerIndexOfThis[r]=e.liveConsumerIndexOfThis[t],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,r<e.liveConsumerNode.length){const n=e.liveConsumerIndexOfThis[r],s=e.liveConsumerNode[r];i(s),s.producerIndexOfThis[n]=r}}function a(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function i(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function M(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function j(e){const r=Object.create(_);r.computation=e;const t=()=>{if(C(r),p(r),r.value===v)throw r.error;return r.value};return t[l]=r,t}const E=Symbol("UNSET"),R=Symbol("COMPUTING"),v=Symbol("ERRORED"),_=(()=>({...d,value:E,dirty:!0,error:null,equal:N,producerMustRecompute:e=>e.value===E||e.value===R,producerRecomputeValue(e){if(e.value===R)throw new Error("Detected cycle in computations.");const r=e.value;e.value=R;const t=y(e);let n;try{n=e.computation()}catch(s){n=v,e.error=s}finally{O(e,t)}r!==E&&r!==v&&n!==v&&e.equal(r,n)?e.value=r:(e.value=n,e.version++)}}))();let W=function B(){throw new Error};function w(){W()}function $(e){W=e}let x=null;function H(e){const r=Object.create(Q);r.value=e;const t=()=>(p(r),r.value);return t[l]=r,t}function z(e){const r=x;return x=e,r}function b(e,r){h()||w();const t=e.value;Object.is(t,r)||e.equal(t,r)||(e.value=r,U(e))}function J(e,r){h()||w(),b(e,r(e.value))}function K(e,r){h()||w(),r(e.value),U(e)}const Q=(()=>({...d,equal:N,value:void 0}))();function U(e){e.version++,function G(){f++}(),I(e),x?.()}function X(e,r,t){const n=Object.create(Y);t&&(n.consumerAllowSignalWrites=!0),n.fn=e,n.schedule=r;const s=o=>{n.cleanupFn=o};return n.ref={notify:()=>F(n),run:()=>{if(null===n.fn)return;if(D())throw new Error("Schedulers cannot synchronously execute watches while scheduling.");if(n.dirty=!1,n.hasRun&&!T(n))return;n.hasRun=!0;const o=y(n);try{n.cleanupFn(),n.cleanupFn=S,n.fn(s)}finally{O(n,o)}},cleanup:()=>n.cleanupFn(),destroy:()=>function re(o){(function ee(o){return null===o.fn&&null===o.schedule})(o)||(V(o),o.cleanupFn(),o.fn=null,o.schedule=null,o.cleanupFn=S)}(n),[l]:n},n.ref}const S=()=>{},Y=(()=>({...d,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:e=>{null!==e.schedule&&e.schedule(e.ref)},hasRun:!1,cleanupFn:S}))();function Z(e){}}}]);