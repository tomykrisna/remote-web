(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9552],{93049:(A,l,s)=>{s.r(l),s.d(l,{createSwipeBackGesture:()=>g});var D=s(50512),d=s(74162),M=s(96535);s(2019);const g=(n,P,m,p,v)=>{const a=n.ownerDocument.defaultView;let o=(0,d.i)(n);const u=t=>o?-t.deltaX:t.deltaX;return(0,M.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(o=(0,d.i)(n),(t=>{const{startX:e}=t;return o?e>=a.innerWidth-50:e<=50})(t)&&P()),onStart:m,onMove:t=>{const e=u(t)/a.innerWidth;p(e)},onEnd:t=>{const r=u(t),e=a.innerWidth,c=r/e,i=(t=>o?-t.velocityX:t.velocityX)(t),h=i>=0&&(i>.2||r>e/2),_=(h?1-c:c)*e;let E=0;if(_>5){const y=_/Math.abs(i);E=Math.min(y,540)}v(h,c<=0?.01:(0,D.l)(0,c,.9999),E)}})}}}]);