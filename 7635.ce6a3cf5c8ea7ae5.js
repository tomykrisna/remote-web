(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7635],{89749:(O,d,n)=>{n.d(d,{c:()=>k});var e=n(50512);const k=l=>{const s=l;let o;return{hasLegacyControl:()=>{if(void 0===o){const i=void 0!==s.label||h(s),a=s.hasAttribute("aria-label")||s.hasAttribute("aria-labelledby")&&null===s.shadowRoot,t=(0,e.h)(s);o=!0===s.legacy||!i&&!a&&null!==t}return o}}},h=l=>!!(x.includes(l.tagName)&&null!==l.querySelector('[slot="label"]')||b.includes(l.tagName)&&""!==l.textContent),x=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],b=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},87635:(O,d,n)=>{n.r(d),n.d(d,{ion_checkbox:()=>r});var e=n(20771),k=n(89749),h=n(50512),x=n(52400),b=n(4459),l=n(62905);const r=class{constructor(a){(0,e.r)(this,a),this.ionChange=(0,e.d)(this,"ionChange",7),this.ionFocus=(0,e.d)(this,"ionFocus",7),this.ionBlur=(0,e.d)(this,"ionBlur",7),this.ionStyle=(0,e.d)(this,"ionStyle",7),this.inputId="ion-cb-"+i++,this.inheritedAttributes={},this.hasLoggedDeprecationWarning=!1,this.setChecked=t=>{const c=this.checked=t;this.ionChange.emit({checked:c,value:this.value})},this.toggleChecked=t=>{t.preventDefault(),this.setFocus(),this.setChecked(!this.checked),this.indeterminate=!1},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.onClick=t=>{this.disabled||this.toggleChecked(t)},this.color=void 0,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.labelPlacement="start",this.justify="space-between",this.alignment="center",this.legacy=void 0}connectedCallback(){this.legacyFormController=(0,k.c)(this.el)}componentWillLoad(){this.emitStyle(),this.legacyFormController.hasLegacyControl()||(this.inheritedAttributes=Object.assign({},(0,h.i)(this.el)))}styleChanged(){this.emitStyle()}emitStyle(){const a={"interactive-disabled":this.disabled,legacy:!!this.legacy};this.legacyFormController.hasLegacyControl()&&(a["checkbox-checked"]=this.checked),this.ionStyle.emit(a)}setFocus(){this.focusEl&&this.focusEl.focus()}render(){const{legacyFormController:a}=this;return a.hasLegacyControl()?this.renderLegacyCheckbox():this.renderCheckbox()}renderCheckbox(){const{color:a,checked:t,disabled:c,el:p,getSVGPath:w,indeterminate:m,inheritedAttributes:g,inputId:y,justify:v,labelPlacement:u,name:_,value:C,alignment:E}=this,f=(0,l.b)(this),L=w(f,m);return(0,h.d)(!0,p,_,t?C:"",c),(0,e.h)(e.H,{class:(0,b.c)(a,{[f]:!0,"in-item":(0,b.h)("ion-item",p),"checkbox-checked":t,"checkbox-disabled":c,"checkbox-indeterminate":m,interactive:!0,[`checkbox-justify-${v}`]:!0,[`checkbox-alignment-${E}`]:!0,[`checkbox-label-placement-${u}`]:!0}),onClick:this.onClick},(0,e.h)("label",{class:"checkbox-wrapper"},(0,e.h)("input",Object.assign({type:"checkbox",checked:!!t||void 0,disabled:c,id:y,onChange:this.toggleChecked,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:j=>this.focusEl=j},g)),(0,e.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":""===p.textContent},part:"label"},(0,e.h)("slot",null)),(0,e.h)("div",{class:"native-wrapper"},(0,e.h)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24",part:"container"},L))))}renderLegacyCheckbox(){this.hasLoggedDeprecationWarning||((0,x.p)('ion-checkbox now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-checkbox>Label</ion-checkbox>\nExample with aria-label: <ion-checkbox aria-label="Label"></ion-checkbox>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el),this.legacy&&(0,x.p)('ion-checkbox is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new checkbox syntax.',this.el),this.hasLoggedDeprecationWarning=!0);const{color:a,checked:t,disabled:c,el:p,getSVGPath:w,indeterminate:m,inputId:g,name:y,value:v}=this,u=(0,l.b)(this),{label:_,labelId:C,labelText:E}=(0,h.e)(p,g),f=w(u,m);return(0,h.d)(!0,p,y,t?v:"",c),(0,e.h)(e.H,{"aria-labelledby":_?C:null,"aria-checked":`${t}`,"aria-hidden":c?"true":null,role:"checkbox",class:(0,b.c)(a,{[u]:!0,"in-item":(0,b.h)("ion-item",p),"checkbox-checked":t,"checkbox-disabled":c,"checkbox-indeterminate":m,"legacy-checkbox":!0,interactive:!0}),onClick:this.onClick},(0,e.h)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24",part:"container"},f),(0,e.h)("label",{htmlFor:g},E),(0,e.h)("input",{type:"checkbox","aria-checked":`${t}`,disabled:c,id:g,onChange:this.toggleChecked,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:L=>this.focusEl=L}))}getSVGPath(a,t){let c=(0,e.h)("path",t?{d:"M6 12L18 12",part:"mark"}:{d:"M5.9,12.5l3.8,3.8l8.8-8.8",part:"mark"});return"md"===a&&(c=(0,e.h)("path",t?{d:"M2 12H22",part:"mark"}:{d:"M1.73,12.91 8.1,19.28 22.79,4.59",part:"mark"})),c}get el(){return(0,e.f)(this)}static get watchers(){return{checked:["styleChanged"],disabled:["styleChanged"]}}};let i=0;r.style={ios:":host{--checkbox-background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){width:100%;height:100%}:host([slot=start]:not(.legacy-checkbox)),:host([slot=end]:not(.legacy-checkbox)){width:auto}:host(.legacy-checkbox){width:var(--size);height:var(--size)}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}:host(.legacy-checkbox) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-checkbox) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-checkbox) label{left:0}:host-context([dir=rtl]):host(.legacy-checkbox) label,:host-context([dir=rtl]).legacy-checkbox label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-checkbox:dir(rtl)) label{left:unset;right:unset;right:0}}}:host(.legacy-checkbox) label::-moz-focus-inner{border:0}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-checkbox)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.checkbox-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.checkbox-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-checkbox) .checkbox-icon{display:block;width:100%;height:100%}:host(:not(.legacy-checkbox)) .checkbox-icon{width:var(--size);height:var(--size)}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-alignment-start) .checkbox-wrapper{-ms-flex-align:start;align-items:start}:host(.checkbox-alignment-center) .checkbox-wrapper{-ms-flex-align:center;align-items:center}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.checkbox-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-label-placement-stacked) .checkbox-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.checkbox-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:0.0625rem;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--size:min(1.625rem, 65.988px)}:host(.checkbox-disabled){opacity:0.3}:host(.in-item.legacy-checkbox){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}:host(.in-item.legacy-checkbox[slot=start]){-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:8px;margin-bottom:8px}",md:":host{--checkbox-background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){width:100%;height:100%}:host([slot=start]:not(.legacy-checkbox)),:host([slot=end]:not(.legacy-checkbox)){width:auto}:host(.legacy-checkbox){width:var(--size);height:var(--size)}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}:host(.legacy-checkbox) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-checkbox) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-checkbox) label{left:0}:host-context([dir=rtl]):host(.legacy-checkbox) label,:host-context([dir=rtl]).legacy-checkbox label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-checkbox:dir(rtl)) label{left:unset;right:unset;right:0}}}:host(.legacy-checkbox) label::-moz-focus-inner{border:0}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-checkbox)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.checkbox-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.checkbox-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-checkbox) .checkbox-icon{display:block;width:100%;height:100%}:host(:not(.legacy-checkbox)) .checkbox-icon{width:var(--size);height:var(--size)}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-alignment-start) .checkbox-wrapper{-ms-flex-align:start;align-items:start}:host(.checkbox-alignment-center) .checkbox-wrapper{-ms-flex-align:center;align-items:center}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.checkbox-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-label-placement-stacked) .checkbox-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.checkbox-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--checkmark-width:3;--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.legacy-checkbox.checkbox-disabled),:host(.checkbox-disabled) .label-text-wrapper{opacity:0.38}:host(.checkbox-disabled) .native-wrapper{opacity:0.63}:host(.in-item.legacy-checkbox){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item.legacy-checkbox[slot=start]){-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px;margin-top:18px;margin-bottom:18px}"}},4459:(O,d,n)=>{n.d(d,{c:()=>h,g:()=>b,h:()=>k,o:()=>s});var e=n(15861);const k=(o,r)=>null!==r.closest(o),h=(o,r)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},r):r,b=o=>{const r={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(o).forEach(i=>r[i]=!0),r},l=/^[a-z][a-z0-9+\-.]*:/,s=function(){var o=(0,e.Z)(function*(r,i,a,t){if(null!=r&&"#"!==r[0]&&!l.test(r)){const c=document.querySelector("ion-router");if(c)return null!=i&&i.preventDefault(),c.push(r,a,t)}return!1});return function(i,a,t,c){return o.apply(this,arguments)}}()}}]);