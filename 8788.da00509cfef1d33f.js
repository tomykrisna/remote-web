(self.webpackChunkyoutapPosReport=self.webpackChunkyoutapPosReport||[]).push([[8788],{8788:(F,m,l)=>{l.r(m),l.d(m,{DetailTransactionModule:()=>B});var c=l(4887),p=l(4398),o=l(8017),e=l(7460);let f=(()=>{class n{calculateTransaction(t,a){let r="",s=0,d="green";return s=0===a?100:Math.ceil((t-a)/a*100),s>0?(d="green",r="+"):d="red",{price:`${r}${s.toString()}%`,colour:d}}convertStatus(t){switch(t){case o._1Q.AWAITING_PAYMENT:return{label:"Menunggu Pembayaran",color:"orange"};case o._1Q.PENDING:return{label:"Menunggu Konfirmasi",color:"blue"};case o._1Q.PROCESSED:return{label:"Pesanan Diproses",color:"blue"};case o._1Q.ON_DELIVERY:return{label:"Sedang Dikirim",color:"orange"};case o._1Q.PACKAGE_RECEIVED:return{label:"Pesanan Diterima",color:"blue"};case o._1Q.SUCCESS:return{label:"Selesai",color:"green"};case o._1Q.FAILED:return{label:"Pembayaran Gagal",color:"red"};case o._1Q.CANCELED:return{label:"Dibatalkan",color:"red"};default:return{label:t,color:"yellow"}}}static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();class x{constructor(i,t){this._document=t;const a=this._textarea=this._document.createElement("textarea"),r=a.style;r.position="fixed",r.top=r.opacity="0",r.left="-999em",a.setAttribute("aria-hidden","true"),a.value=i,a.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(a)}copy(){const i=this._textarea;let t=!1;try{if(i){const a=this._document.activeElement;i.select(),i.setSelectionRange(0,i.value.length),t=this._document.execCommand("copy"),a&&a.focus()}}catch{}return t}destroy(){const i=this._textarea;i&&(i.remove(),this._textarea=void 0)}}let v=(()=>{class n{constructor(t){this._document=t}copy(t){const a=this.beginCopy(t),r=a.copy();return a.destroy(),r}beginCopy(t){return new x(t,this._document)}static#e=this.\u0275fac=function(a){return new(a||n)(e.\u0275\u0275inject(c.DOCUMENT))};static#t=this.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var g=l(5521),y=l(3769),b=l(9523),C=l(1112);function h(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",5)(1,"div",6)(2,"div",7)(3,"span",8),e.\u0275\u0275text(4,"ID Transaksi"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"img",9),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.copyToClipboard(r.transaction.ytTrxId))}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"span",10),e.\u0275\u0275text(7),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"div",6)(9,"div",11)(10,"span",8),e.\u0275\u0275text(11,"Tanggal & Waktu"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"span",12),e.\u0275\u0275text(13),e.\u0275\u0275pipe(14,"formatDate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(15,"div",6)(16,"div",11)(17,"span",8),e.\u0275\u0275text(18,"ID Terminal"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(19,"span",12),e.\u0275\u0275text(20),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(21,"div",6)(22,"div",11)(23,"span",8),e.\u0275\u0275text(24,"Status"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(25,"lib-surface-badge",13),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate1("#",t.transaction.ytTrxId,""),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(14,7,t.transaction.createdAt.toString(),"DD MMM YYYY, HH:mm:ss")),e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate(t.transaction.trxId),e.\u0275\u0275advance(5),e.\u0275\u0275property("label",t.transactionStatus.label)("color",t.transactionStatus.color)("useBackground",!1)("fontSize",12)}}function T(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",21),e.\u0275\u0275element(1,"lib-product-list-card",22),e.\u0275\u0275elementEnd()),2&n){const t=i.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("name",t.productName||t.image||t.product?t.productName:"Input Manual")("image",t.image)("price",t.subtotal)("qty",t.quantity)("unitType","Pcs")("addOnItems",t.transactionDetailAddOnItems)}}function _(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",14)(1,"h1",15),e.\u0275\u0275text(2,"Detail Produk"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",16)(4,"div",17),e.\u0275\u0275template(5,T,2,6,"div",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",6)(7,"span",19),e.\u0275\u0275text(8,"Total Penjualan"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"h4",20),e.\u0275\u0275text(10),e.\u0275\u0275pipe(11,"libCurrency"),e.\u0275\u0275elementEnd()()()()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("ngForOf",t.transaction.transactionItems),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind2(11,2,t.transaction.subtotal,!1)," ")}}function I(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",36)(1,"div",37)(2,"div",38),e.\u0275\u0275element(3,"img",39),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div")(5,"h3",40),e.\u0275\u0275text(6," Transaksi Dibatalkan "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"h3",41),e.\u0275\u0275text(8," Pelanggan minta refund produk "),e.\u0275\u0275elementEnd()()()())}function E(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",42)(1,"span",46),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"span",46),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"libCurrency"),e.\u0275\u0275elementEnd()()),2&n){const t=i.$implicit,a=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.addOnItemName),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.addOnItemPrice?e.\u0275\u0275pipeBind2(5,2,t.addOnItemPrice*a.quantity,!1):"-")}}function S(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",26)(1,"div",42)(2,"div",26)(3,"span",43),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"span",44),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"libCurrency"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"span",43),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"libCurrency"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(11,E,6,5,"div",45),e.\u0275\u0275elementEnd()),2&n){const t=i.$implicit;e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.productName||t.image||t.product?t.productName:"Input Manual"),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2("",t.quantity," x ",e.\u0275\u0275pipeBind2(7,5,t.price,!1),""),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(10,8,t.price*t.quantity,!1)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t.transactionDetailAddOnItems)}}function D(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",6)(1,"div",11)(2,"span",19),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"span",30),e.\u0275\u0275text(5),e.\u0275\u0275pipe(6,"libCurrency"),e.\u0275\u0275pipe(7,"libCurrency"),e.\u0275\u0275elementEnd()()),2&n){const t=i.$implicit,a=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate2(" ",t.priceAdjustmentName," ","PERCENTAGE"===t.priceAdjustmentPriceType?t.priceAdjustmentAmount+"%":""," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ","FIXED"===t.priceAdjustmentPriceType?("REDUCTION"===t.priceAdjustmentType?"-":"")+e.\u0275\u0275pipeBind2(6,4,t.priceAdjustmentAmount,!1):""," ","PERCENTAGE"===t.priceAdjustmentPriceType?("REDUCTION"===t.priceAdjustmentType?"-":"")+e.\u0275\u0275pipeBind2(7,7,a.transaction.subtotal*(t.priceAdjustmentAmount/100),!1):""," ")}}function j(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",34)(1,"div",11)(2,"span",30),e.\u0275\u0275text(3,"Pembulatan Nilai"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"span",12),e.\u0275\u0275text(5),e.\u0275\u0275pipe(6,"libCurrency"),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind2(6,1,t.transaction.roundingDifference,!1)," ")}}function A(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",23),e.\u0275\u0275template(1,I,9,0,"div",24),e.\u0275\u0275elementStart(2,"h1",15),e.\u0275\u0275text(3,"Rincian Pembayaran"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",6)(5,"div",7)(6,"span",25),e.\u0275\u0275text(7,"Metode Pembayaran"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"div",26)(9,"span",10),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"span"),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275template(13,S,12,11,"div",27),e.\u0275\u0275element(14,"div",28),e.\u0275\u0275elementStart(15,"div",29)(16,"div",11)(17,"span",30),e.\u0275\u0275text(18,"Total Harga Produk"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(19,"span",12),e.\u0275\u0275text(20),e.\u0275\u0275pipe(21,"libCurrency"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(22,D,8,10,"div",31),e.\u0275\u0275element(23,"div",28),e.\u0275\u0275elementStart(24,"div",32)(25,"div",33)(26,"div",11)(27,"span",30),e.\u0275\u0275text(28,"Total Sebelum Pajak"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(29,"span",12),e.\u0275\u0275text(30),e.\u0275\u0275pipe(31,"libCurrency"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(32,"div",34)(33,"div",11)(34,"span",30),e.\u0275\u0275text(35),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(36,"span",12),e.\u0275\u0275text(37),e.\u0275\u0275pipe(38,"libCurrency"),e.\u0275\u0275pipe(39,"libCurrency"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(40,j,7,4,"div",35),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(41,"div",28),e.\u0275\u0275elementStart(42,"div",33)(43,"div",11)(44,"span",30),e.\u0275\u0275text(45,"TOTAL PEMBAYARAN"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(46,"span",30),e.\u0275\u0275text(47),e.\u0275\u0275pipe(48,"libCurrency"),e.\u0275\u0275elementEnd()()()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","CANCELED"===t.transaction.status),e.\u0275\u0275advance(9),e.\u0275\u0275textInterpolate(t.transaction.issuerName.replace("_"," ")),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",t.transaction.issTrxId," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.transaction.transactionItems),e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(21,11,t.transaction.subtotal,!1)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t.transaction.transactionPriceAdjustments),e.\u0275\u0275advance(8),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(31,14,t.transaction.totalBeforeTax,!1)),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("Pajak ","PERCENTAGE"===t.transaction.taxType?t.transaction.tax+"%":"",""),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ","FIXED"===t.transaction.taxType?e.\u0275\u0275pipeBind2(38,17,t.transaction.tax,!1):e.\u0275\u0275pipeBind2(39,20,t.transaction.taxAmount,!1)," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",t.transaction.roundingDifference),e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(48,23,t.transaction.total,!1))}}const O=[{path:"",data:{canGoBack:!0},children:[{path:"",component:(()=>{class n{constructor(t,a,r,s){this.transactionService=t,this.route=a,this.clipboard=r,this.transactionHelperService=s,this.loading=!1,this.id="",this.transactionStatus={label:"",color:""}}ngOnInit(){this.id=this.route.snapshot?.queryParamMap.get("id")??"",this.getDetailTransaction()}getDetailTransaction(){this.loading=!0,this.transactionService.transactionDetail(this.id).subscribe({next:({data:t})=>{this.transaction=t.transactionDetail,this.transactionStatus=this.transactionHelperService.convertStatus(this.transaction.status),this.loading=!1},error:()=>{this.loading=!1}})}copyToClipboard(t){this.clipboard.copy(t),alert("Berhasil disalin!")}static#e=this.\u0275fac=function(a){return new(a||n)(e.\u0275\u0275directiveInject(o.pXi),e.\u0275\u0275directiveInject(p.ActivatedRoute),e.\u0275\u0275directiveInject(v),e.\u0275\u0275directiveInject(f))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["detail-transaction"]],decls:5,vars:3,consts:[[1,"mt-[25px]","h-[99%]","overflow-auto"],[1,"pt-0","bg-grey-6","pb-20"],["class","bg-white p-4 rounded-b-3xl mb-3 mt-1",4,"ngIf"],["class","bg-white p-4 rounded-3xl mb-3",4,"ngIf"],["class","bg-white p-4 rounded-4xl mb-3 flex flex-col gap-y-2",4,"ngIf"],[1,"bg-white","p-4","rounded-b-3xl","mb-3","mt-1"],[1,"flex","flex-row","justify-between","items-center"],[1,"flex","flex-row","gap-x-2"],[1,"text-[10px]","text-grey-3"],["src","./assets/images/svg/paste-icon-orange.svg","alt","paste-icon",1,"cursor-pointer",3,"click"],[1,"text-[14px]","text-grey-1"],[1,"flex","flex-row"],[1,"text-[12px]","text-grey-1"],["padding","px-[6px] py-[2px]",3,"label","color","useBackground","fontSize"],[1,"bg-white","p-4","rounded-3xl","mb-3"],[1,"text-[18px]","text-grey-1","mb-3"],[1,"shadow-default-shadow","p-3","rounded-lg"],[1,"mt-4","border-b-[1px]","border-grey-5","pb-1","mb-1"],["class","mb-3",4,"ngFor","ngForOf"],[1,"text-[12px]","text-grey-3"],[1,"text-primary-yt-blue","font-bold"],[1,"mb-3"],[3,"name","image","price","qty","unitType","addOnItems"],[1,"bg-white","p-4","rounded-4xl","mb-3","flex","flex-col","gap-y-2"],["class","bg-secondary-red-light flex justify-between items-center p-[10px] rounded-md my-3",4,"ngIf"],[1,"text-[12px]","font-light"],[1,"flex","flex-col"],["class","flex flex-col",4,"ngFor","ngForOf"],[1,"border-t-[1px]","border-black","mt-1","mb-1"],[1,"flex","flex-row","justify-between","items-center","!divide-black","font-bold"],[1,"text-[12px]"],["class","flex flex-row justify-between items-center",4,"ngFor","ngForOf"],[1,"flex","flex-col","!divide-black","gap-y-2"],[1,"flex","flex-row","justify-between","items-center","divide-black","font-bold"],[1,"flex","flex-row","justify-between","items-center","divide-black"],["class","flex flex-row justify-between items-center divide-black",4,"ngIf"],[1,"bg-secondary-red-light","flex","justify-between","items-center","p-[10px]","rounded-md","my-3"],[1,"flex","items-center"],[1,"m-2"],["src","assets/images/svg/danger-red.svg","alt","danger-image",1,"h-[2rem]","w-[2rem]","object-contain","content-center"],[1,"font-effrabold","text-secondary-red-2"],[1,"text-[14px]","text-grey-3"],[1,"flex","flex-row","justify-between"],[1,"text-[12px]","font-effra"],[1,"text-[10px]","font-effra","text-grey-3"],["class","flex flex-row justify-between",4,"ngFor","ngForOf"],[1,"text-[10px]"]],template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1),e.\u0275\u0275template(2,h,26,10,"div",2)(3,_,12,5,"div",3)(4,A,49,26,"div",4),e.\u0275\u0275elementEnd()()),2&a&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",r.transaction),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.transaction),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.transaction))},dependencies:[c.NgForOf,c.NgIf,g.a,y.t,b.i,C.X],encapsulation:2})}return n})(),title:"Detail Transaksi"}]}];let P=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.RouterModule.forChild(O),p.RouterModule]})}return n})();var u=l(6e3),M=l(3985),w=l(1685),k=l(5695),N=l(2168);let B=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=e.\u0275\u0275defineInjector({providers:[w._M,u.HttpClient,o.pXi,{provide:"BASE_URL_BOS_API",useClass:N.G,useValue:k.environment.BOS_API_URL}],imports:[c.CommonModule,P,o.dTQ,o.hJ1,o.drE,o.TXv,o.Pl,u.HttpClientModule,M.p,o.Z6o]})}return n})()}}]);