(self.webpackChunkyoutapPosReport=self.webpackChunkyoutapPosReport||[]).push([[8788],{8788:(L,m,r)=>{r.r(m),r.d(m,{DetailTransactionModule:()=>G});var d=r(4887),p=r(4398),l=r(6293),t=r(7460);let f=(()=>{class n{calculateTransaction(e,a){let o="",s=0,c="green";return s=0===a?100:Math.ceil((e-a)/a*100),s>0?(c="green",o="+"):c="red",{price:`${o}${s.toString()}%`,colour:c}}convertStatus(e){switch(e){case l._1Q.AWAITING_PAYMENT:return{label:"Menunggu Pembayaran",color:"orange"};case l._1Q.PENDING:return{label:"Menunggu Konfirmasi",color:"blue"};case l._1Q.PROCESSED:return{label:"Pesanan Diproses",color:"blue"};case l._1Q.ON_DELIVERY:return{label:"Sedang Dikirim",color:"orange"};case l._1Q.PACKAGE_RECEIVED:return{label:"Pesanan Diterima",color:"blue"};case l._1Q.SUCCESS:return{label:"Selesai",color:"green"};case l._1Q.FAILED:return{label:"Pembayaran Gagal",color:"red"};case l._1Q.CANCELED:return{label:"Dibatalkan",color:"red"};default:return{label:e,color:"yellow"}}}static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();class x{constructor(i,e){this._document=e;const a=this._textarea=this._document.createElement("textarea"),o=a.style;o.position="fixed",o.top=o.opacity="0",o.left="-999em",a.setAttribute("aria-hidden","true"),a.value=i,a.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(a)}copy(){const i=this._textarea;let e=!1;try{if(i){const a=this._document.activeElement;i.select(),i.setSelectionRange(0,i.value.length),e=this._document.execCommand("copy"),a&&a.focus()}}catch{}return e}destroy(){const i=this._textarea;i&&(i.remove(),this._textarea=void 0)}}let v=(()=>{class n{constructor(e){this._document=e}copy(e){const a=this.beginCopy(e),o=a.copy();return a.destroy(),o}beginCopy(e){return new x(e,this._document)}static#t=this.\u0275fac=function(a){return new(a||n)(t.\u0275\u0275inject(d.DOCUMENT))};static#e=this.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var g=r(5521),y=r(3769),b=r(8092),C=r(9523),h=r(1112);function _(n,i){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",6)(1,"div",7)(2,"div",8)(3,"span",9),t.\u0275\u0275text(4,"ID Transaksi"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"img",10),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const o=t.\u0275\u0275nextContext(2);return t.\u0275\u0275resetView(o.copyToClipboard(o.transaction.ytTrxId))}),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(6,"span",11),t.\u0275\u0275text(7),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(8,"div",7)(9,"div",12)(10,"span",9),t.\u0275\u0275text(11,"Tanggal & Waktu"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(12,"span",13),t.\u0275\u0275text(13),t.\u0275\u0275pipe(14,"formatDate"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(15,"div",7)(16,"div",12)(17,"span",9),t.\u0275\u0275text(18,"ID Terminal"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(19,"span",13),t.\u0275\u0275text(20),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(21,"div",7)(22,"div",12)(23,"span",9),t.\u0275\u0275text(24,"Status"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275element(25,"lib-surface-badge",14),t.\u0275\u0275elementEnd()()}if(2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(7),t.\u0275\u0275textInterpolate1("#",e.transaction.ytTrxId,""),t.\u0275\u0275advance(6),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind2(14,7,e.transaction.createdAt.toString(),"DD MMM YYYY, HH:mm:ss")),t.\u0275\u0275advance(7),t.\u0275\u0275textInterpolate(e.transaction.trxId),t.\u0275\u0275advance(5),t.\u0275\u0275property("label",e.transactionStatus.label)("color",e.transactionStatus.color)("useBackground",!1)("fontSize",12)}}function T(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",22),t.\u0275\u0275element(1,"lib-product-list-card",23),t.\u0275\u0275elementEnd()),2&n){const e=i.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("name",e.productName||e.image||e.product?e.productName:"Input Manual")("image",e.image)("price",e.subtotal)("qty",e.quantity)("unitType","Pcs")("addOnItems",e.transactionDetailAddOnItems)}}function I(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",15)(1,"h1",16),t.\u0275\u0275text(2,"Detail Produk"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",17)(4,"div",18),t.\u0275\u0275template(5,T,2,6,"div",19),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"div",7)(7,"span",20),t.\u0275\u0275text(8,"Total Penjualan"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"h4",21),t.\u0275\u0275text(10),t.\u0275\u0275pipe(11,"libCurrency"),t.\u0275\u0275elementEnd()()()()),2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(5),t.\u0275\u0275property("ngForOf",e.transaction.transactionItems),t.\u0275\u0275advance(5),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind2(11,2,e.transaction.subtotal,!1)," ")}}function E(n,i){1&n&&(t.\u0275\u0275elementStart(0,"div",37)(1,"div",38)(2,"div",39),t.\u0275\u0275element(3,"img",40),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div")(5,"h3",41),t.\u0275\u0275text(6," Transaksi Dibatalkan "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"h3",42),t.\u0275\u0275text(8," Pelanggan minta refund produk "),t.\u0275\u0275elementEnd()()()())}function S(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",43)(1,"span",47),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"span",47),t.\u0275\u0275text(4),t.\u0275\u0275pipe(5,"libCurrency"),t.\u0275\u0275elementEnd()()),2&n){const e=i.$implicit,a=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(e.addOnItemName),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(e.addOnItemPrice?t.\u0275\u0275pipeBind2(5,2,e.addOnItemPrice*a.quantity,!1):"-")}}function D(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",27)(1,"div",43)(2,"div",27)(3,"span",44),t.\u0275\u0275text(4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"span",45),t.\u0275\u0275text(6),t.\u0275\u0275pipe(7,"libCurrency"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(8,"span",44),t.\u0275\u0275text(9),t.\u0275\u0275pipe(10,"libCurrency"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(11,S,6,5,"div",46),t.\u0275\u0275elementEnd()),2&n){const e=i.$implicit;t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(e.productName||e.image||e.product?e.productName:"Input Manual"),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate2("",e.quantity," x ",t.\u0275\u0275pipeBind2(7,5,e.price,!1),""),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind2(10,8,e.price*e.quantity,!1)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",e.transactionDetailAddOnItems)}}function j(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",7)(1,"div",12)(2,"span",20),t.\u0275\u0275text(3),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(4,"span",31),t.\u0275\u0275text(5),t.\u0275\u0275pipe(6,"libCurrency"),t.\u0275\u0275pipe(7,"libCurrency"),t.\u0275\u0275elementEnd()()),2&n){const e=i.$implicit,a=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate2(" ",e.priceAdjustmentName," ","PERCENTAGE"===e.priceAdjustmentPriceType?e.priceAdjustmentAmount+"%":""," "),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate2(" ","FIXED"===e.priceAdjustmentPriceType?("REDUCTION"===e.priceAdjustmentType?"-":"")+t.\u0275\u0275pipeBind2(6,4,e.priceAdjustmentAmount,!1):""," ","PERCENTAGE"===e.priceAdjustmentPriceType?("REDUCTION"===e.priceAdjustmentType?"-":"")+t.\u0275\u0275pipeBind2(7,7,a.transaction.subtotal*(e.priceAdjustmentAmount/100),!1):""," ")}}function A(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",35)(1,"div",12)(2,"span",31),t.\u0275\u0275text(3,"Pembulatan Nilai"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(4,"span",13),t.\u0275\u0275text(5),t.\u0275\u0275pipe(6,"libCurrency"),t.\u0275\u0275elementEnd()()),2&n){const e=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(5),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind2(6,1,e.transaction.roundingDifference,!1)," ")}}function O(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",24),t.\u0275\u0275template(1,E,9,0,"div",25),t.\u0275\u0275elementStart(2,"h1",16),t.\u0275\u0275text(3,"Rincian Pembayaran"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div",7)(5,"div",8)(6,"span",26),t.\u0275\u0275text(7,"Metode Pembayaran"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(8,"div",27)(9,"span",11),t.\u0275\u0275text(10),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"span"),t.\u0275\u0275text(12),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275template(13,D,12,11,"div",28),t.\u0275\u0275element(14,"div",29),t.\u0275\u0275elementStart(15,"div",30)(16,"div",12)(17,"span",31),t.\u0275\u0275text(18,"Total Harga Produk"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(19,"span",13),t.\u0275\u0275text(20),t.\u0275\u0275pipe(21,"libCurrency"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(22,j,8,10,"div",32),t.\u0275\u0275element(23,"div",29),t.\u0275\u0275elementStart(24,"div",33)(25,"div",34)(26,"div",12)(27,"span",31),t.\u0275\u0275text(28,"Total Sebelum Pajak"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(29,"span",13),t.\u0275\u0275text(30),t.\u0275\u0275pipe(31,"libCurrency"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(32,"div",35)(33,"div",12)(34,"span",31),t.\u0275\u0275text(35),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(36,"span",13),t.\u0275\u0275text(37),t.\u0275\u0275pipe(38,"libCurrency"),t.\u0275\u0275pipe(39,"libCurrency"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(40,A,7,4,"div",36),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(41,"div",29),t.\u0275\u0275elementStart(42,"div",34)(43,"div",12)(44,"span",31),t.\u0275\u0275text(45,"TOTAL PEMBAYARAN"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(46,"span",31),t.\u0275\u0275text(47),t.\u0275\u0275pipe(48,"libCurrency"),t.\u0275\u0275elementEnd()()()),2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf","CANCELED"===e.transaction.status),t.\u0275\u0275advance(9),t.\u0275\u0275textInterpolate(e.transaction.issuerName.replace("_"," ")),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ",e.transaction.issTrxId," "),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",e.transaction.transactionItems),t.\u0275\u0275advance(7),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind2(21,11,e.transaction.subtotal,!1)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",e.transaction.transactionPriceAdjustments),t.\u0275\u0275advance(8),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind2(31,14,e.transaction.totalBeforeTax,!1)),t.\u0275\u0275advance(5),t.\u0275\u0275textInterpolate1("Pajak ","PERCENTAGE"===e.transaction.taxType?e.transaction.tax+"%":"",""),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ","FIXED"===e.transaction.taxType?t.\u0275\u0275pipeBind2(38,17,e.transaction.tax,!1):t.\u0275\u0275pipeBind2(39,20,e.transaction.taxAmount,!1)," "),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",e.transaction.roundingDifference),t.\u0275\u0275advance(7),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind2(48,23,e.transaction.total,!1))}}function P(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",2),t.\u0275\u0275template(1,_,26,10,"div",3)(2,I,12,5,"div",4)(3,O,49,26,"div",5),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.transaction),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.transaction),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.transaction)}}const M=()=>({isLoading:!1,width:"100%",height:"100vh"}),k=[{path:"",data:{canGoBack:!0},children:[{path:"",component:(()=>{class n{constructor(e,a,o,s){this.transactionService=e,this.route=a,this.clipboard=o,this.transactionHelperService=s,this.loading=!1,this.id="",this.transactionStatus={label:"",color:""}}ngOnInit(){this.id=this.route.snapshot?.queryParamMap.get("id")??"",this.getDetailTransaction()}getDetailTransaction(){this.loading=!0,this.transactionService.transactionDetail(this.id).subscribe({next:({data:e})=>{this.transaction=e.transactionDetail,this.transactionStatus=this.transactionHelperService.convertStatus(this.transaction.status),this.loading=!1},error:()=>{this.loading=!1}})}copyToClipboard(e){this.clipboard.copy(e),alert("Berhasil disalin!")}static#t=this.\u0275fac=function(a){return new(a||n)(t.\u0275\u0275directiveInject(l.pXi),t.\u0275\u0275directiveInject(p.ActivatedRoute),t.\u0275\u0275directiveInject(v),t.\u0275\u0275directiveInject(f))};static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["detail-transaction"]],decls:2,vars:2,consts:[[1,"mt-[25px]","h-[99%]","overflow-auto"],["class","pt-0 bg-grey-6 pb-20",4,"lib-skeleton"],[1,"pt-0","bg-grey-6","pb-20"],["class","bg-white p-4 rounded-b-3xl mb-3 mt-1",4,"ngIf"],["class","bg-white p-4 rounded-3xl mb-3",4,"ngIf"],["class","bg-white p-4 rounded-4xl mb-3 flex flex-col gap-y-2",4,"ngIf"],[1,"bg-white","p-4","rounded-b-3xl","mb-3","mt-1"],[1,"flex","flex-row","justify-between","items-center"],[1,"flex","flex-row","gap-x-2"],[1,"text-[10px]","text-grey-3"],["src","./assets/images/svg/paste-icon-orange.svg","alt","paste-icon",1,"cursor-pointer",3,"click"],[1,"text-[14px]","text-grey-1"],[1,"flex","flex-row"],[1,"text-[12px]","text-grey-1"],["padding","px-[6px] py-[2px]",3,"label","color","useBackground","fontSize"],[1,"bg-white","p-4","rounded-3xl","mb-3"],[1,"text-[18px]","text-grey-1","mb-3"],[1,"shadow-default-shadow","p-3","rounded-lg"],[1,"mt-4","border-b-[1px]","border-grey-5","pb-1","mb-1"],["class","mb-3",4,"ngFor","ngForOf"],[1,"text-[12px]","text-grey-3"],[1,"text-primary-yt-blue","font-bold"],[1,"mb-3"],[3,"name","image","price","qty","unitType","addOnItems"],[1,"bg-white","p-4","rounded-4xl","mb-3","flex","flex-col","gap-y-2"],["class","bg-secondary-red-light flex justify-between items-center p-[10px] rounded-md my-3",4,"ngIf"],[1,"text-[12px]","font-light"],[1,"flex","flex-col"],["class","flex flex-col",4,"ngFor","ngForOf"],[1,"border-t-[1px]","border-black","mt-1","mb-1"],[1,"flex","flex-row","justify-between","items-center","!divide-black","font-bold"],[1,"text-[12px]"],["class","flex flex-row justify-between items-center",4,"ngFor","ngForOf"],[1,"flex","flex-col","!divide-black","gap-y-2"],[1,"flex","flex-row","justify-between","items-center","divide-black","font-bold"],[1,"flex","flex-row","justify-between","items-center","divide-black"],["class","flex flex-row justify-between items-center divide-black",4,"ngIf"],[1,"bg-secondary-red-light","flex","justify-between","items-center","p-[10px]","rounded-md","my-3"],[1,"flex","items-center"],[1,"m-2"],["src","assets/images/svg/danger-red.svg","alt","danger-image",1,"h-[2rem]","w-[2rem]","object-contain","content-center"],[1,"font-effrabold","text-secondary-red-2"],[1,"text-[14px]","text-grey-3"],[1,"flex","flex-row","justify-between"],[1,"text-[12px]","font-effra"],[1,"text-[10px]","font-effra","text-grey-3"],["class","flex flex-row justify-between",4,"ngFor","ngForOf"],[1,"text-[10px]"]],template:function(a,o){1&a&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275template(1,P,4,3,"div",1),t.\u0275\u0275elementEnd()),2&a&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("lib-skeleton",t.\u0275\u0275pureFunction0(1,M)))},dependencies:[d.NgForOf,d.NgIf,g.a,y.t,b.d,C.i,h.X],encapsulation:2})}return n})(),title:"Detail Transaksi"}]}];let w=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275mod=t.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=t.\u0275\u0275defineInjector({imports:[p.RouterModule.forChild(k),p.RouterModule]})}return n})();var u=r(6e3),N=r(3985),B=r(1685),F=r(5695),R=r(2168);let G=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275mod=t.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=t.\u0275\u0275defineInjector({providers:[B._M,u.HttpClient,l.pXi,{provide:"BASE_URL_BOS_API",useClass:R.G,useValue:F.environment.BOS_API_URL}],imports:[d.CommonModule,w,l.dTQ,l.hJ1,l.drE,l.TXv,l.Pl,u.HttpClientModule,N.p,l.Z6o]})}return n})()}}]);