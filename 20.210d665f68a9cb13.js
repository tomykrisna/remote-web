(self.webpackChunkapp=self.webpackChunkapp||[]).push([[20],{50020:(y,u,l)=>{l.r(u),l.d(u,{PromoModule:()=>I});var d=l(20482),m=l(1919),t=l(22874),s=l(90368),p=l(88183),c=l(11929);function h(o,r){if(1&o){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div")(1,"lib-promo-product-card",7),t.\u0275\u0275listener("clickProduct",function(){t.\u0275\u0275restoreView(n);const e=t.\u0275\u0275nextContext().$implicit,a=t.\u0275\u0275nextContext(3);return t.\u0275\u0275resetView(a.goToDetail(e.productVariantWarehouse.productVariant.product.slug))}),t.\u0275\u0275elementEnd()()}if(2&o){const n=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("maxLength",35)("promoData",n.productVariantWarehouse)("isPOD",n.productVariantWarehouse.productVariant.product.isPODAvailable)}}function g(o,r){if(1&o&&(t.\u0275\u0275elementStart(0,"div",6),t.\u0275\u0275template(1,h,2,3,"div",0),t.\u0275\u0275elementEnd()),2&o){const n=r.$implicit;t.\u0275\u0275property("ngClass",n.productVariantWarehouse?"":"hidden"),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",n.productVariantWarehouse)}}function v(o,r){if(1&o&&(t.\u0275\u0275elementStart(0,"div",4),t.\u0275\u0275template(1,g,2,2,"div",5),t.\u0275\u0275elementEnd()),2&o){const n=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",n.listPromo)}}function P(o,r){1&o&&t.\u0275\u0275element(0,"lib-basic-empty-state",8)}function f(o,r){if(1&o&&(t.\u0275\u0275elementStart(0,"div")(1,"div",1),t.\u0275\u0275template(2,v,2,1,"div",2)(3,P,1,0,"lib-basic-empty-state",3),t.\u0275\u0275elementEnd()()),2&o){const n=t.\u0275\u0275nextContext();t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",null!==n.dataPromo.listHighlightProductVariantWarehouse.highlightProductVariantWarehouses[0].productVariantWarehouse),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null===n.dataPromo.listHighlightProductVariantWarehouse.highlightProductVariantWarehouses[0].productVariantWarehouse)}}function _(o,r){if(1&o){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div")(1,"ion-infinite-scroll",9),t.\u0275\u0275listener("ionInfinite",function(e){t.\u0275\u0275restoreView(n);const a=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(a.onIonInfinite(e))}),t.\u0275\u0275element(2,"ion-infinite-scroll-content"),t.\u0275\u0275elementEnd()()}}const V=[{path:"",component:(()=>{var o;class r{constructor(i,e,a,W){this.router=i,this.sectionService=e,this.locationSignal=a,this.injector=W,this.loadingPromo=!1,this.listPromo=[],this.loadMore=!0,this.page=1,this.total=0}ngOnInit(){this.checkLocation()}checkLocation(){let i;(0,t.effect)(()=>{var e;const a=this.locationSignal.address();a&&(null===(e=i)||void 0===e?void 0:e.latitude)!==(null==a?void 0:a.latitude)&&(i=a,this.getDataPromoHighlight())},{injector:this.injector})}getDataPromoHighlight(){this.loadingPromo=!0,this.sectionService.listHighlightProductVariantWarehouse({listHighlightProductVariantInput:{page:this.page,limit:20}}).subscribe({next:({data:e})=>{this.loadingPromo=!1,this.dataPromo=e,this.total=e.listHighlightProductVariantWarehouse.totalPage,e.listHighlightProductVariantWarehouse.highlightProductVariantWarehouses.forEach(a=>{this.listPromo.push(a)})},error:e=>(this.loadingPromo=!1,e)})}onIonInfinite(i){var e;(null===(e=this.dataPromo)||void 0===e||null===(e=e.listHighlightProductVariantWarehouse)||void 0===e||null===(e=e.highlightProductVariantWarehouses)||void 0===e?void 0:e.length)>1&&(this.page+=1,this.total>=this.page?(this.getDataPromoHighlight(),setTimeout(()=>{i.target.complete()},500)):setTimeout(()=>{i.target.complete()},500))}goToDetail(i){this.router.navigate([`product/detail/${i}`])}}return(o=r).\u0275fac=function(i){return new(i||o)(t.\u0275\u0275directiveInject(m.Router),t.\u0275\u0275directiveInject(s.lac),t.\u0275\u0275directiveInject(p.q),t.\u0275\u0275directiveInject(t.Injector))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["app-promo"]],decls:3,vars:2,consts:[[4,"ngIf"],[1,"p-4","mt-3"],["class","grid grid-cols-2 gap-x-5 gap-y-5 justify-items-center",4,"ngIf"],["image","./assets/images/svg/product-empt-promo.svg","label","Belum ada promo terbaru","description","Nantikan promo menarik dari Youtap BOS!",4,"ngIf"],[1,"grid","grid-cols-2","gap-x-5","gap-y-5","justify-items-center"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"maxLength","promoData","isPOD","clickProduct"],["image","./assets/images/svg/product-empt-promo.svg","label","Belum ada promo terbaru","description","Nantikan promo menarik dari Youtap BOS!"],[3,"ionInfinite"]],template:function(i,e){1&i&&(t.\u0275\u0275elementStart(0,"ion-content"),t.\u0275\u0275template(1,f,4,2,"div",0)(2,_,3,0,"div",0),t.\u0275\u0275elementEnd()),2&i&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.dataPromo),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",0!==(null==e.dataPromo||null==e.dataPromo.listHighlightProductVariantWarehouse||null==e.dataPromo.listHighlightProductVariantWarehouse.highlightProductVariantWarehouses?null:e.dataPromo.listHighlightProductVariantWarehouse.highlightProductVariantWarehouses.length)))},dependencies:[d.NgClass,d.NgForOf,d.NgIf,c.W2,c.ju,c.MB,s.a3I,s.SWN]}),r})()}];let C=(()=>{var o;class r{}return(o=r).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=t.\u0275\u0275defineInjector({imports:[m.RouterModule.forChild(V),m.RouterModule]}),r})(),I=(()=>{var o;class r{}return(o=r).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=t.\u0275\u0275defineInjector({imports:[d.CommonModule,C,c.Pc,s.dTQ,s.PPX]}),r})()}}]);