(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7666],{74162:(D,x,o)=>{o.d(x,{i:()=>w});const w=r=>r&&""!==r.dir?"rtl"===r.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},89749:(D,x,o)=>{o.d(x,{c:()=>r});var w=o(50512);const r=b=>{const u=b;let i;return{hasLegacyControl:()=>{if(void 0===i){const p=void 0!==u.label||y(u),C=u.hasAttribute("aria-label")||u.hasAttribute("aria-labelledby")&&null===u.shadowRoot,E=(0,w.h)(u);i=!0===u.legacy||!p&&!C&&null!==E}return i}}},y=b=>!!(B.includes(b.tagName)&&null!==b.querySelector('[slot="label"]')||d.includes(b.tagName)&&""!==b.textContent),B=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],d=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},17946:(D,x,o)=>{o.d(x,{I:()=>b,a:()=>p,b:()=>d,c:()=>I,d:()=>K,f:()=>C,g:()=>h,i:()=>i,p:()=>R,r:()=>T,s:()=>E});var w=o(15861),r=o(50512),y=o(52400);const d="ion-content",b=".ion-content-scroll-host",u=`${d}, ${b}`,i=a=>"ION-CONTENT"===a.tagName,h=function(){var a=(0,w.Z)(function*(l){return i(l)?(yield new Promise(e=>(0,r.c)(l,e)),l.getScrollElement()):l});return function(e){return a.apply(this,arguments)}}(),p=a=>a.querySelector(b)||a.querySelector(u),C=a=>a.closest(u),E=(a,l)=>i(a)?a.scrollToTop(l):Promise.resolve(a.scrollTo({top:0,left:0,behavior:l>0?"smooth":"auto"})),I=(a,l,e,t)=>i(a)?a.scrollByPoint(l,e,t):Promise.resolve(a.scrollBy({top:e,left:l,behavior:t>0?"smooth":"auto"})),R=a=>(0,y.b)(a,d),K=a=>{if(i(a)){const e=a.scrollY;return a.scrollY=!1,e}return a.style.setProperty("overflow","hidden"),!0},T=(a,l)=>{i(a)?a.scrollY=l:a.style.removeProperty("overflow")}},57666:(D,x,o)=>{o.r(x),o.d(x,{ion_range:()=>R});var w=o(15861),r=o(20771),y=o(17946),B=o(89749),d=o(50512),b=o(52400),u=o(74162),i=o(4459),h=o(62905);const R=class{constructor(e){var t=this;(0,r.r)(this,e),this.ionChange=(0,r.d)(this,"ionChange",7),this.ionInput=(0,r.d)(this,"ionInput",7),this.ionStyle=(0,r.d)(this,"ionStyle",7),this.ionFocus=(0,r.d)(this,"ionFocus",7),this.ionBlur=(0,r.d)(this,"ionBlur",7),this.ionKnobMoveStart=(0,r.d)(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=(0,r.d)(this,"ionKnobMoveEnd",7),this.rangeId="ion-r-"+l++,this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.hasLoggedDeprecationWarning=!1,this.clampBounds=n=>(0,d.l)(this.min,n,this.max),this.ensureValueInBounds=n=>this.dualKnobs?{lower:this.clampBounds(n.lower),upper:this.clampBounds(n.upper)}:this.clampBounds(n),this.setupGesture=(0,w.Z)(function*(){const n=t.rangeSlider;n&&(t.gesture=(yield Promise.resolve().then(o.bind(o,96535))).createGesture({el:n,gestureName:"range",gesturePriority:100,threshold:0,onStart:s=>t.onStart(s),onMove:s=>t.onMove(s),onEnd:s=>t.onEnd(s)}),t.gesture.enable(!t.disabled))}),this.handleKeyboard=(n,s)=>{const{ensureValueInBounds:g}=this;let c=this.step;c=c>0?c:1,c/=this.max-this.min,s||(c*=-1),"A"===n?this.ratioA=(0,d.l)(0,this.ratioA+c,1):this.ratioB=(0,d.l)(0,this.ratioB+c,1),this.ionKnobMoveStart.emit({value:g(this.value)}),this.updateValue(),this.emitValueChange(),this.ionKnobMoveEnd.emit({value:g(this.value)})},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},this.ratioA=0,this.ratioB=0,this.pressedKnob=void 0,this.color=void 0,this.debounce=void 0,this.name=this.rangeId,this.label=void 0,this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=n=>Math.round(n),this.snaps=!1,this.step=1,this.ticks=!0,this.activeBarStart=void 0,this.disabled=!1,this.value=0,this.labelPlacement="start",this.legacy=void 0}debounceChanged(){const{ionInput:e,debounce:t,originalIonInput:n}=this;this.ionInput=void 0===t?null!=n?n:e:(0,d.j)(e,t)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}activeBarStartChanged(){const{activeBarStart:e}=this;void 0!==e&&(e>this.max?((0,b.p)(`Range: The value of activeBarStart (${e}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.max):e<this.min&&((0,b.p)(`Range: The value of activeBarStart (${e}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.min))}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}valueChanged(){this.noUpdate||this.updateRatio()}componentWillLoad(){this.el.hasAttribute("id")&&(this.rangeId=this.el.getAttribute("id")),this.inheritedAttributes=(0,d.i)(this.el)}componentDidLoad(){this.originalIonInput=this.ionInput,this.setupGesture(),this.updateRatio(),this.didLoad=!0}connectedCallback(){const{el:e}=this;this.legacyFormController=(0,B.c)(e),this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.activeBarStartChanged(),this.didLoad&&this.setupGesture(),this.contentEl=(0,y.f)(this.el)}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){var e;const t=null!==(e=this.value)&&void 0!==e?e:0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}emitStyle(){this.legacyFormController.hasLegacyControl()&&this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled,legacy:!!this.legacy})}emitValueChange(){this.value=this.ensureValueInBounds(this.value),this.ionChange.emit({value:this.value})}onStart(e){const{contentEl:t}=this;t&&(this.initialContentScrollY=(0,y.d)(t));const n=this.rect=this.rangeSlider.getBoundingClientRect(),s=e.currentX;let g=(0,d.l)(0,(s-n.left)/n.width,1);(0,u.i)(this.el)&&(g=1-g),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-g)<Math.abs(this.ratioB-g)?"A":"B",this.setFocus(this.pressedKnob),this.update(s),this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})}onMove(e){this.update(e.currentX)}onEnd(e){const{contentEl:t,initialContentScrollY:n}=this;t&&(0,y.r)(t,n),this.update(e.currentX),this.pressedKnob=void 0,this.emitValueChange(),this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})}update(e){const t=this.rect;let n=(0,d.l)(0,(e-t.left)/t.width,1);(0,u.i)(this.el)&&(n=1-n),this.snaps&&(n=a(T(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()}get valA(){return T(this.ratioA,this.min,this.max,this.step)}get valB(){return T(this.ratioB,this.min,this.max,this.step)}get ratioLower(){if(this.dualKnobs)return Math.min(this.ratioA,this.ratioB);const{activeBarStart:e}=this;return null==e?0:a(e,this.min,this.max)}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const e=this.getValue(),{min:t,max:n}=this;this.dualKnobs?(this.ratioA=a(e.lower,t,n),this.ratioB=a(e.upper,t,n)):this.ratioA=a(e,t,n)}updateValue(){this.noUpdate=!0;const{valA:e,valB:t}=this;this.value=this.dualKnobs?{lower:Math.min(e,t),upper:Math.max(e,t)}:e,this.ionInput.emit({value:this.value}),this.noUpdate=!1}setFocus(e){if(this.el.shadowRoot){const t=this.el.shadowRoot.querySelector("A"===e?".range-knob-a":".range-knob-b");t&&t.focus()}}renderLegacyRange(){this.hasLoggedDeprecationWarning||((0,b.p)('ion-range now requires providing a label with either the label slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-range><div slot="label">Volume</div></ion-range>\nExample with aria-label: <ion-range aria-label="Volume"></ion-range>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el),this.legacy&&(0,b.p)('ion-range is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new range syntax.',this.el),this.hasLoggedDeprecationWarning=!0);const{el:e,pressedKnob:t,disabled:n,pin:s,rangeId:g}=this,c=(0,h.b)(this);return(0,d.d)(!0,e,this.name,JSON.stringify(this.getValue()),n),(0,r.h)(r.H,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:g,class:(0,i.c)(this.color,{[c]:!0,"in-item":(0,i.h)("ion-item",e),"range-disabled":n,"range-pressed":void 0!==t,"range-has-pin":s,"legacy-range":!0})},(0,r.h)("slot",{name:"start"}),this.renderRangeSlider(),(0,r.h)("slot",{name:"end"}))}get hasStartSlotContent(){return null!==this.el.querySelector('[slot="start"]')}get hasEndSlotContent(){return null!==this.el.querySelector('[slot="end"]')}renderRange(){const{disabled:e,el:t,hasLabel:n,rangeId:s,pin:g,pressedKnob:c,labelPlacement:k,label:M}=this,S=(0,i.h)("ion-item",t),_=S&&!(n&&("start"===k||"fixed"===k)||this.hasStartSlotContent),P=S&&!(n&&"end"===k||this.hasEndSlotContent),L=(0,h.b)(this);return(0,d.d)(!0,t,this.name,JSON.stringify(this.getValue()),e),(0,r.h)(r.H,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:s,class:(0,i.c)(this.color,{[L]:!0,"in-item":S,"range-disabled":e,"range-pressed":void 0!==c,"range-has-pin":g,[`range-label-placement-${k}`]:!0,"range-item-start-adjustment":_,"range-item-end-adjustment":P})},(0,r.h)("label",{class:"range-wrapper",id:"range-label"},(0,r.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!n},part:"label"},void 0!==M?(0,r.h)("div",{class:"label-text"},M):(0,r.h)("slot",{name:"label"})),(0,r.h)("div",{class:"native-wrapper"},(0,r.h)("slot",{name:"start"}),this.renderRangeSlider(),(0,r.h)("slot",{name:"end"}))))}get hasLabel(){return void 0!==this.label||null!==this.el.querySelector('[slot="label"]')}renderRangeSlider(){var e;const{min:t,max:n,step:s,el:g,handleKeyboard:c,pressedKnob:k,disabled:M,pin:S,ratioLower:v,ratioUpper:_,inheritedAttributes:O,rangeId:P,pinFormatter:L}=this;let{labelText:z}=(0,d.e)(g,P);null==z&&(z=O["aria-label"]);let m=100*v+"%",A=100-100*_+"%";const N=(0,u.i)(this.el),j=N?"right":"left",G=f=>({[j]:f[j]});!1===this.dualKnobs&&(this.valA<(null!==(e=this.activeBarStart)&&void 0!==e?e:this.min)?(m=100*_+"%",A=100-100*v+"%"):(m=100*v+"%",A=100-100*_+"%"));const Y={[j]:m,[N?"left":"right"]:A},F=[];if(this.snaps&&this.ticks)for(let f=t;f<=n;f+=s){const U=a(f,t,n),X=Math.min(v,_),H=Math.max(v,_),W={ratio:U,active:U>=X&&U<=H};W[j]=100*U+"%",F.push(W)}let V;return!this.legacyFormController.hasLegacyControl()&&this.hasLabel&&(V="range-label"),(0,r.h)("div",{class:"range-slider",ref:f=>this.rangeSlider=f},F.map(f=>(0,r.h)("div",{style:G(f),role:"presentation",class:{"range-tick":!0,"range-tick-active":f.active},part:f.active?"tick-active":"tick"})),(0,r.h)("div",{class:"range-bar-container"},(0,r.h)("div",{class:"range-bar",role:"presentation",part:"bar"}),(0,r.h)("div",{class:{"range-bar":!0,"range-bar-active":!0,"has-ticks":F.length>0},role:"presentation",style:Y,part:"bar-active"})),K(N,{knob:"A",pressed:"A"===k,value:this.valA,ratio:this.ratioA,pin:S,pinFormatter:L,disabled:M,handleKeyboard:c,min:t,max:n,labelText:z,labelledBy:V}),this.dualKnobs&&K(N,{knob:"B",pressed:"B"===k,value:this.valB,ratio:this.ratioB,pin:S,pinFormatter:L,disabled:M,handleKeyboard:c,min:t,max:n,labelText:z,labelledBy:V}))}render(){const{legacyFormController:e}=this;return e.hasLegacyControl()?this.renderLegacyRange():this.renderRange()}get el(){return(0,r.f)(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},K=(e,{knob:t,value:n,ratio:s,min:g,max:c,disabled:k,pressed:M,pin:S,handleKeyboard:v,labelText:_,labelledBy:O,pinFormatter:P})=>{const L=e?"right":"left";return(0,r.h)("div",{onKeyDown:m=>{const A=m.key;"ArrowLeft"===A||"ArrowDown"===A?(v(t,!1),m.preventDefault(),m.stopPropagation()):("ArrowRight"===A||"ArrowUp"===A)&&(v(t,!0),m.preventDefault(),m.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===t,"range-knob-b":"B"===t,"range-knob-pressed":M,"range-knob-min":n===g,"range-knob-max":n===c,"ion-activatable":!0,"ion-focusable":!0},style:(()=>{const m={};return m[L]=100*s+"%",m})(),role:"slider",tabindex:k?-1:0,"aria-label":void 0===O?_:null,"aria-labelledby":void 0!==O?O:null,"aria-valuemin":g,"aria-valuemax":c,"aria-disabled":k?"true":null,"aria-valuenow":n},S&&(0,r.h)("div",{class:"range-pin",role:"presentation",part:"pin"},P(n)),(0,r.h)("div",{class:"range-knob",role:"presentation",part:"knob"}))},T=(e,t,n,s)=>{let g=(n-t)*e;return s>0&&(g=Math.round(g/s)*s+t),function C(e,...t){const n=Math.max(...t.map(s=>function p(e){return e%1==0?0:e.toString().split(".")[1].length}(s)));return Number(e.toFixed(n))}((0,d.l)(t,g,n),t,n,s)},a=(e,t,n)=>(0,d.l)(0,(e-t)/(n-t),1);let l=0;R.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}@supports (inset-inline-start: 0){.range-knob-handle{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-knob-handle{left:0}:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}[dir=rtl] .range-knob-handle{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}@supports (inset-inline-start: 0){.range-bar-container{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-bar-container{left:0}:host-context([dir=rtl]) .range-bar-container{left:unset;right:unset;right:0}[dir=rtl] .range-bar-container{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}@supports (inset-inline-start: 0){.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}}@supports not (inset-inline-start: 0){.range-knob{left:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}}}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, #e6e6e6);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:2px;--height:42px}:host(.legacy-range){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host(.range-item-start-adjustment){-webkit-padding-start:24px;padding-inline-start:24px}:host(.range-item-end-adjustment){-webkit-padding-end:24px;padding-inline-end:24px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:calc(8px + 0.75rem)}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:calc(8px + 0.75rem)}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, #e6e6e6);pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  100%,  0) scale(0.01);transform:translate3d(0,  100%,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:0.75rem;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 11px), 0) scale(1);transform:translate3d(0, calc(-100% + 11px), 0) scale(1)}:host(.range-disabled){opacity:0.3}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}@supports (inset-inline-start: 0){.range-knob-handle{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-knob-handle{left:0}:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}[dir=rtl] .range-knob-handle{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}@supports (inset-inline-start: 0){.range-bar-container{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-bar-container{left:0}:host-context([dir=rtl]) .range-bar-container{left:unset;right:unset;right:0}[dir=rtl] .range-bar-container{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}@supports (inset-inline-start: 0){.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}}@supports not (inset-inline-start: 0){.range-knob{left:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}}}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff)}:host(.legacy-range) ::slotted([slot=label]){font-size:initial}:host(:not(.legacy-range)) ::slotted(:not(ion-icon)[slot=start]),:host(:not(.legacy-range)) ::slotted(:not(ion-icon)[slot=end]),:host(:not(.legacy-range)) .native-wrapper{font-size:0.75rem}:host(.legacy-range){-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px;padding-top:8px;padding-bottom:8px;font-size:0.75rem}:host(.range-item-start-adjustment){-webkit-padding-start:18px;padding-inline-start:18px}:host(.range-item-end-adjustment){-webkit-padding-end:18px;padding-inline-end:18px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:1.75rem}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:1.75rem}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}@supports (inset-inline-start: 0){.range-knob::before{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-knob::before{left:0}:host-context([dir=rtl]) .range-knob::before{left:unset;right:unset;right:0}[dir=rtl] .range-knob::before{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-knob::before:dir(rtl){left:unset;right:unset;right:0}}}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.75rem;height:1.75rem;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color)}.range-pin::before{bottom:-1px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}@supports (inset-inline-start: 0){.range-pin::before{inset-inline-start:50%}}@supports not (inset-inline-start: 0){.range-pin::before{left:50%}:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}[dir=rtl] .range-pin::before{left:unset;right:unset;right:50%}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset;right:unset;right:50%}}}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 4px), 0) scale(1);transform:translate3d(0, calc(-100% + 4px), 0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}'}},4459:(D,x,o)=>{o.d(x,{c:()=>y,g:()=>d,h:()=>r,o:()=>u});var w=o(15861);const r=(i,h)=>null!==h.closest(i),y=(i,h)=>"string"==typeof i&&i.length>0?Object.assign({"ion-color":!0,[`ion-color-${i}`]:!0},h):h,d=i=>{const h={};return(i=>void 0!==i?(Array.isArray(i)?i:i.split(" ")).filter(p=>null!=p).map(p=>p.trim()).filter(p=>""!==p):[])(i).forEach(p=>h[p]=!0),h},b=/^[a-z][a-z0-9+\-.]*:/,u=function(){var i=(0,w.Z)(function*(h,p,C,E){if(null!=h&&"#"!==h[0]&&!b.test(h)){const I=document.querySelector("ion-router");if(I)return null!=p&&p.preventDefault(),I.push(h,C,E)}return!1});return function(p,C,E,I){return i.apply(this,arguments)}}()}}]);