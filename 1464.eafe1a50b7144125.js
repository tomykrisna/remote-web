(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1464],{71464:(w,x,s)=>{s.r(x),s.d(x,{SupplierModule:()=>ee});var c=s(20482),g=s(1919),v=s(43304),e=(s(26650),s(22874)),l=s(90368),u=s(11929),m=s(34615);function _(i,o){if(1&i&&(e.\u0275\u0275elementStart(0,"div",7)(1,"div",8)(2,"div",9),e.\u0275\u0275element(3,"lib-image-circle",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",11)(5,"div",12),e.\u0275\u0275element(6,"img",13),e.\u0275\u0275elementStart(7,"h2",14),e.\u0275\u0275text(8),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"div",15)(10,"p",16),e.\u0275\u0275text(11,"Buka : "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(12,"lib-surface-badge",17),e.\u0275\u0275pipe(13,"appTimeOperationalPipe"),e.\u0275\u0275elementEnd()()()()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275propertyInterpolate("src",t.detailWarehouse.detailWarehouse.supplier.image),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1(" ",t.detailWarehouse.detailWarehouse.supplier.name," "),e.\u0275\u0275advance(4),e.\u0275\u0275propertyInterpolate("label",e.\u0275\u0275pipeBind1(13,5,t.detailWarehouse.detailWarehouse.operationalHours[t.today])),e.\u0275\u0275property("color",t.detailWarehouse.detailWarehouse.operationalHours[t.today]&&t.detailWarehouse.detailWarehouse.operationalHours[t.today].isOpen?"green":"red")("fontSize",14)}}function b(i,o){if(1&i&&(e.\u0275\u0275elementStart(0,"div")(1,"div",19)(2,"div",20)(3,"p",21),e.\u0275\u0275text(4,"Kota"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p",22),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",23),e.\u0275\u0275element(8,"hr"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div",24)(10,"div",25)(11,"p",26),e.\u0275\u0275text(12,"Kecamatan"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(13,"lib-surface-badge",27),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"div",28)(15,"p",26),e.\u0275\u0275text(16,"Kelurahan"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(17,"lib-surface-badge",27),e.\u0275\u0275elementEnd()()()()),2&i){const t=o.$implicit;e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate2(" ",null==t.village.district||null==t.village.district.regency||null==t.village.district.regency.province?null:t.village.district.regency.province.name,", ",null==t.village.district||null==t.village.district.regency?null:t.village.district.regency.name," "),e.\u0275\u0275advance(7),e.\u0275\u0275propertyInterpolate("label",null==t.village.district?null:t.village.district.name),e.\u0275\u0275property("fontSize",12),e.\u0275\u0275advance(4),e.\u0275\u0275propertyInterpolate("label",t.village.name),e.\u0275\u0275property("fontSize",12)}}function S(i,o){if(1&i&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,b,18,6,"div",18),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.coverages)}}v.locale("id");let E=(()=>{var i;class o{constructor(a,n,r,d){this.supplierService=a,this.warehoiseService=n,this.route=r,this.coverageAreaService=d,this.loading=!1,this.today=Number(v().locale("id").format("d")),this.coverages=[],this.loadMore=!0,this.page=0,this.total=0}ngOnInit(){const a=this.route.snapshot.paramMap.get("id");this.warehouseId=a,a&&(this.getCoverageBySupplierId(a),this.getDetailWarehouse(a))}getDetailWarehouse(a){this.warehoiseService.detailWarehouse({detailWarehouseInput:{id:a}}).subscribe({next:({data:r})=>{this.detailWarehouse=r}})}getCoverageBySupplierId(a){this.loading=!0,this.loadMore=!0,this.coverageAreaService.listCoverageArea({listCoverageAreaInput:{limit:25,page:this.page,warehouseId:a}}).subscribe({next:({data:r})=>{this.loading=!1,this.listCoverageArea=r.listCoverageArea,this.total=r.listCoverageArea.total,r.listCoverageArea.coverageAreas.forEach(d=>{this.coverages.push(d)}),this.page===r.listCoverageArea.totalPage&&(this.loadMore=!1)},error:r=>{this.loading=!1}})}onScroll(){this.page+=1,this.loadMore&&this.page<=this.listCoverageArea.totalPage&&this.getCoverageBySupplierId(this.warehouseId)}onIonInfinite(a){this.page+=1,this.total>=this.page&&this.getCoverageBySupplierId(this.warehouseId),setTimeout(()=>{a.target.complete()},500)}}return(i=o).\u0275fac=function(a){return new(a||i)(e.\u0275\u0275directiveInject(l.pl9),e.\u0275\u0275directiveInject(l.lQr),e.\u0275\u0275directiveInject(g.ActivatedRoute),e.\u0275\u0275directiveInject(l.oYx))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["app-coverage-area"]],decls:8,vars:3,consts:[[1,"font-effra"],["id","supplier-detail",1,"bg-gray-100","scrollbar-hide","scroll","overflow-y-scroll","pt-[68px]"],[1,"container","pt-5","pb-5","px-4","rounded-b-xl","bg-white"],["class","flex gap-3 items-center w-full justify-between",4,"ngIf"],[4,"ngIf"],[3,"isActive"],[3,"ionInfinite"],[1,"flex","gap-3","items-center","w-full","justify-between"],["id","supplier-name-detail",1,"flex","items-center","gap-3"],[1,"w-[45px]","h-[45px]"],["width","45","height","45",3,"src"],["id","supplier-name-and-date",1,"flex","flex-col","gap-[4px]"],[1,"flex","items-center","gap-1"],["src","/assets/images/png/partner/supplier-level.png","alt","supplier-level-image",1,"h-[18px]"],[1,"mr-2","font-semibold","text-[16px]"],[1,"flex","items-center","gap-2","ml-1"],[1,"text-[14px]","text-[#828282]"],["padding","px-[5px]",3,"color","label","fontSize"],[4,"ngFor","ngForOf"],[1,"shadow-md","w-full","my-3","bg-white","rounded-lg"],["id","city",1,"p-3","flex","flex-col","gap-[3px]"],[1,"text-start","text-[#333333]","text-[14px]","mb-0","font-semibold"],[1,"text-start","text-[#1CAED4]","text-[16px]","mb-0","font-bold"],[1,"mx-3"],[1,"flex","flex-col","p-3","gap-y-2"],["id","district",1,"flex","flex-row","justify-between"],[1,"text-[#828282]","text-[14px]"],["color","green",3,"label","fontSize"],["id","village",1,"flex","flex-row","justify-between"]],template:function(a,n){1&a&&(e.\u0275\u0275elementStart(0,"ion-content",0)(1,"div",1)(2,"div",2),e.\u0275\u0275template(3,_,14,7,"div",3)(4,S,2,1,"div",4),e.\u0275\u0275element(5,"lib-line-loading",5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"ion-infinite-scroll",6),e.\u0275\u0275listener("ionInfinite",function(d){return n.onIonInfinite(d)}),e.\u0275\u0275element(7,"ion-infinite-scroll-content"),e.\u0275\u0275elementEnd()()),2&a&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",n.detailWarehouse),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.coverages.length>0),e.\u0275\u0275advance(1),e.\u0275\u0275property("isActive",n.loading))},dependencies:[c.NgForOf,c.NgIf,l.h_$,l.jro,u.W2,u.ju,u.MB,l.tOi,m.b]}),o})();var P=s(18630),D=s(30658),T=s(88183),M=s(62934);function O(i,o){if(1&i&&e.\u0275\u0275element(0,"lib-image-circle",25),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("src",t.warehouseDetail.detailWarehouse.supplier.image)}}function j(i,o){if(1&i&&e.\u0275\u0275element(0,"img",26),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("src",t.warehouseDetail.detailWarehouse.supplier.tier.image,e.\u0275\u0275sanitizeUrl)}}function A(i,o){if(1&i&&(e.\u0275\u0275elementStart(0,"div",27)(1,"p",28),e.\u0275\u0275text(2,"Buka :"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(3,"lib-surface-badge",29),e.\u0275\u0275pipe(4,"appTimeOperationalPipe"),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(3),e.\u0275\u0275propertyInterpolate("label",e.\u0275\u0275pipeBind1(4,3,t.warehouseDetail.detailWarehouse.operationalHours[t.today])),e.\u0275\u0275property("color",t.warehouseDetail.detailWarehouse.operationalHours[t.today]&&t.warehouseDetail.detailWarehouse.operationalHours[t.today].isOpen?"green":"red")("fontSize",14)}}function L(i,o){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",30),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const n=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(n.supplierInfo())}),e.\u0275\u0275elementStart(1,"p",31),e.\u0275\u0275text(2,"Info Supplier"),e.\u0275\u0275elementEnd()()}}function W(i,o){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",32)(1,"lib-basic-button",33),e.\u0275\u0275listener("handleEmit",function(){e.\u0275\u0275restoreView(t);const n=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(n.categoryFilter())}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"lib-basic-button",34),e.\u0275\u0275listener("handleEmit",function(){e.\u0275\u0275restoreView(t);const n=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(n.priceSort())}),e.\u0275\u0275elementEnd()()}if(2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("outlined",!0)("title",t.nameLabel)("width","w-full")("borderColor","blue")("padding","!p-1")("icon","arrow-down")("iconPosition","right")("textColor","text-primary-yt-blue")("iconSize","w-5")("bColor","bg-white"),e.\u0275\u0275advance(1),e.\u0275\u0275property("outlined",!0)("title","lowerPrice"===t.filterPriceSort?"Termurah":"Termahal")("borderColor","blue")("padding","!p-1")("icon","arrow-down")("textColor","text-primary-yt-blue")("iconPosition","right")("width","w-full")("iconSize","w-5")("bColor","bg-white")}}function B(i,o){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"lib-basic-product-card",40),e.\u0275\u0275listener("clickProduct",function(){const r=e.\u0275\u0275restoreView(t).$implicit,d=e.\u0275\u0275nextContext(4);return e.\u0275\u0275resetView(d.goToDetail(r.slug))}),e.\u0275\u0275elementEnd()}if(2&i){const t=o.$implicit;e.\u0275\u0275property("image",t.image)("productName",t.name)("productVariantName",t.productVariants[0].name)("price",t.productVariants[0].price)("priceBeforeDiscount",t.productVariants[0].price+t.productVariants[0].discountAmount)("unit",t.productVariants[0].unitType)("discountValue",t.productVariants[0].discountAmount)("stock",t.productVariants[0].stock)("maxLength",30)("isPOD",t.isPODAvailable)}}function V(i,o){if(1&i&&(e.\u0275\u0275elementStart(0,"div",38),e.\u0275\u0275template(1,B,1,10,"lib-basic-product-card",39),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.products)}}function F(i,o){if(1&i&&(e.\u0275\u0275elementStart(0,"div",35)(1,"div",36),e.\u0275\u0275template(2,V,2,1,"div",37),e.\u0275\u0275elementEnd()()),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.products.length>0)}}function R(i,o){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",41)(1,"lib-basic-empty-state",42),e.\u0275\u0275listener("clickButton",function(){e.\u0275\u0275restoreView(t);const n=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(n.goToAddressList())}),e.\u0275\u0275elementEnd()()}2&i&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("label","Sabar yah! Supplier ini segera hadir di daerah kamu..")("description","")("image","./assets/images/png/address/confirm-delete-address.png")("showButton",!0)("buttonLabel","Kembali"))}function N(i,o){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",43),e.\u0275\u0275element(1,"div",44)(2,"div",45),e.\u0275\u0275elementStart(3,"p",46),e.\u0275\u0275text(4," Belanja Online Kebutuhan Usaha Terlengkap, Termurah, dan Tercepat di Youtap Official Store (YOS) "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p",47),e.\u0275\u0275text(6," Youtap Official Store (YOS), merupakan salah satu supplier resmi yang ada di Youtap BOS yang menawarkan solusi belanja grosir online untuk beragam produk untuk memenuhi stok kebutuhan usaha Anda. Youtap Official Store (YOS) dengan tagline TERLENGKAP, TERMURAH, dan TERCEPAT sebagai jawaban atas pertanyaan sekaligus kebutuhan user dalam melengkapi kebutuhan jualan hingga difersifikasi produk yang dijual oleh setiap pemilik usaha. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div",48)(8,"p",46),e.\u0275\u0275text(9," Belanja Grosir Online Murah dari Brand Ternama dengan Promo Menarik "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"p",47),e.\u0275\u0275text(11," YOS hadir menyediakan beragam produk-produk berkualitas dari merek-merek ternama. Mulai dari makanan instan dan snack favorit masyarakat Indonesia, beragam mie instan dari beragam rasa dan harga murah. YOS juga menyediakan air mineral, beras, bumbu dapur, sambal, mentega, sirup, susu uht, perawatan kecantikan sabun dan antiseptic, kebutuhan khusus wanita hingga peralatan rumah tangga. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"p",47),e.\u0275\u0275text(13," Merek-merek produk terbaik supplier terpercaya, seperti Indomie, SUN, sambal Indofood, Freiss, Milkuat, Chitato, Club, Supermi, Promina, Sarimi, PopMie, susu Indomilk, minyak goreng, margarin Simas, dan banyak brand ternama lainnya semua bisa dibeli para pemilik usaha di Youtap Official Store. Dapatkan promo menarik selama persediaan masih ada! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"p",46),e.\u0275\u0275text(15," Minyak Goreng Bimoli 2 Lt Pouch, isi 6 Pcs/Carton "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"p",47),e.\u0275\u0275text(17," Minyak Goreng Bimoli 2 Lt, minyak goreng yang dibuat Indofood dari biji kelapa sawit pilihan dan diproses secara sempurna melalui tahap Pemurnian Multi Proses (PMP). Diproses di bawah pengawasan tenaga ahli pengalaman membuat Minyak Goreng Bimoli sudah tersertifikasi Halal ini hadir dalam kemasan pouch 2 Liter lebih bersih, dan menambah cita rasa dan aroma masakan menjadi lebih sedap. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",47),e.\u0275\u0275text(19," Beli minyak goreng harga murah dari beragam merek di Youtap Official Partner (YOS)! Yuk belanja grosir online untuk kebutuhan usaha di Youtap BOS dan dapatkan promo terbaik. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"p",46),e.\u0275\u0275text(21," Disclaimer "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"p",47),e.\u0275\u0275text(23," Penyediaan produk dan pengiriman pesanan akan dilakukan oleh Indomarco Adi Prima. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"p",46),e.\u0275\u0275text(25," Mi Instan Indomie New Kari, isi 40 Pcs/Carton "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"p",47),e.\u0275\u0275text(27," Mi Instan Indomie New Kari, mie instan kuah dari Indofood dengan cita rasa dari kari ayam yang terinspirasi dari keragaman bumbu Indonesia. Indomie mie instan, rasa New Kari Soto dengan kemasan 75 gr/pcs dengan tekstur mie yang kenyal ditambah dengan aroma dan rasa gurih karinya terasa hingga bikin nagih. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"p",46),e.\u0275\u0275text(29," Komposisi: "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"p",47)(31,"b"),e.\u0275\u0275text(32,"Mie:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(33," Tepung terigu, minyak sayur, tepung tapioka, garam, pemantap, pengatur keasaman, mineral (zat besi) , pewarna (tartrazine Cl19140), antioksidan (TBHQ). "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"p",47)(35,"b"),e.\u0275\u0275text(36,"Bumbu:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(37," Garam, gula, penguat rasa mononatrium glutamat (MSG), bubuk bawang putih, bubuk lada, perisa ayam, vitamin (A, B1, B6, B12, Niasin, Asam folat, Pantotenat), dan bubuk cabe. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"p",47)(39,"b"),e.\u0275\u0275text(40,"Minyak:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(41," Minyak sayur dan bawang merah "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"p",47),e.\u0275\u0275text(43," Beli mie rebus instan harga murah dari beragam merek di Youtap Official Partner (YOS)! Yuk belanja grosir online untuk kebutuhan usaha di Youtap BOS dan dapatkan promo terbaik. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(44,"p",46),e.\u0275\u0275text(45," Disclaimer "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(46,"p",47),e.\u0275\u0275text(47," Penyediaan produk dan pengiriman pesanan akan dilakukan oleh Indomarco Adi Prima. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(48,"div",49)(49,"lib-basic-button",50),e.\u0275\u0275listener("handleEmit",function(){e.\u0275\u0275restoreView(t);const n=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(n.toggleShowFullText())}),e.\u0275\u0275elementEnd()()()}if(2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(7),e.\u0275\u0275property("hidden",t.isHidden),e.\u0275\u0275advance(42),e.\u0275\u0275property("title",t.isHidden?"Baca Selengkapnya":"Tutup")("width","w-full")("outlined",!0)("borderColor","blue")("padding","!p-[8px]")("textColor","text-[#21AFD4]")("bColor","white")}}const k=i=>({isLoading:i,width:"100px",height:"20px"});function $(i,o){if(1&i&&(e.\u0275\u0275elementStart(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10)(4,"div",11)(5,"div",12),e.\u0275\u0275template(6,O,1,1,"lib-image-circle",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div",14)(8,"div",15),e.\u0275\u0275template(9,j,1,1,"img",16),e.\u0275\u0275elementStart(10,"h2",17),e.\u0275\u0275text(11),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(12,A,5,5,"div",18),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(13,"div",19),e.\u0275\u0275template(14,L,3,0,"div",20),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(15,W,3,20,"div",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(16,F,3,1,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(17,R,2,5,"div",23)(18,N,50,8,"div",24),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",t.warehouseDetail),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",t.warehouseDetail.detailWarehouse.supplier.tier.image),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",t.warehouseDetail.detailWarehouse.supplier.name," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("lib-skeleton",e.\u0275\u0275pureFunction1(9,k,!t.warehouseDetail)),e.\u0275\u0275advance(2),e.\u0275\u0275property("lib-skeleton",e.\u0275\u0275pureFunction1(11,k,!t.warehouseDetail)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.isLoading&&t.isCovered&&t.token||!t.token),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.isLoading&&t.isCovered),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.isLoading&&!t.isCovered&&t.token),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","official_supplier"===t.warehouseDetail.detailWarehouse.supplier.tier.name)}}function Y(i,o){1&i&&(e.\u0275\u0275elementStart(0,"div",51),e.\u0275\u0275element(1,"ion-skeleton-text",52)(2,"ion-skeleton-text",53)(3,"ion-skeleton-text",52)(4,"ion-skeleton-text",54),e.\u0275\u0275elementEnd()),2&i&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("animated",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("animated",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("animated",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("animated",!0))}function H(i,o){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"div",55),e.\u0275\u0275element(2,"img",56),e.\u0275\u0275elementStart(3,"span",57),e.\u0275\u0275text(4,"Supplier Tidak ditemukan..."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"span",58),e.\u0275\u0275text(6,"Link yang kamu tuju mungkin salah atau sudah dihapus."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"lib-basic-button",59),e.\u0275\u0275listener("handleEmit",function(){e.\u0275\u0275restoreView(t);const n=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(n.goToHomePage())}),e.\u0275\u0275elementEnd()()()}2&i&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("title","Lanjut ke Homepage Youtap")("disabled",!1)("paddingX","!px-[40px]"))}v.locale("id");let K=(()=>{var i;class o{constructor(a,n,r,d,p,f,h,y,te,ie,ae,ne){this.warehouseService=a,this.productService=n,this.categoryService=r,this.route=d,this.router=p,this.authData=f,this.modalService=h,this.supplierService=y,this.location=te,this.locationSignal=ie,this.injector=ae,this.trackerService=ne,this.filterPriceSort="lowerPrice",this.nameLabel="Semua",this.isActive=!0,this.loading=!1,this.products=[],this.listCategorys=[],this.page=1,this.isLoading=!0,this.token="",this.today=Number(v().locale("id").format("d")),this.canLoad=!0,this.isHidden=!0,this.statePage=0}ngOnInit(){this.checkLocation(),this.display=!1,this.category=!1,this.iSupplier=!1,this.token=this.authData.token}checkLocation(){let a;(0,e.effect)(()=>{var n;const r=this.locationSignal.address();r&&(null===(n=a)||void 0===n?void 0:n.latitude)!==(null==r?void 0:r.latitude)&&(a=r,this.checkParams())},{injector:this.injector})}checkParams(){var a,n,r,d;const p=null===(a=this.route.snapshot)||void 0===a?void 0:a.queryParamMap.get("s"),f=null===(n=this.route.snapshot)||void 0===n?void 0:n.queryParamMap.get("ss"),h=(null===(r=this.route.snapshot)||void 0===r?void 0:r.queryParamMap.get("category"))||"";this.search=(null===(d=this.route.snapshot)||void 0===d?void 0:d.queryParamMap.get("search"))||"",p?(this.slug=p,this.getDetailWarehouse(h),h&&(this.categoryId=h)):f&&(this.supplierSlug=f,this.getDetailWarehouse(h))}searchChange(a){var n;this.page=1,this.products=[];const r=(null===(n=this.route.snapshot)||void 0===n?void 0:n.queryParamMap.get("category"))||void 0;this.search=a,this.getListProduct(this.warehouseDetail.detailWarehouse.id,r)}getDetailWarehouse(a){this.loading=!0;const n={detailWarehouseInput:{...this.slug&&{slug:this.slug},...this.supplierSlug&&{supplierSlug:this.supplierSlug}}};this.warehouseService.detailWarehouse(n).subscribe({next:({data:r})=>{r.detailWarehouse&&(this.warehouseDetail=r,this.getListProduct(r.detailWarehouse.id,a),this.getListCategory(r.detailWarehouse.supplier.id,a),this.isSupplierCovered(r.detailWarehouse.supplier.id)),this.loading=!1},error:()=>{this.loading=!1}})}isSupplierCovered(a){this.isLoading=!0,this.supplierService.isSupplierCovered({supplierId:a}).subscribe({next:({data:r})=>{this.isLoading=!1,this.isCovered=null==r?void 0:r.isSupplierCovered},error:r=>(this.isLoading=!1,r)})}getListProduct(a,n){this.loading=!0,this.productService.listProduct({listProductInput:{page:this.page,limit:25,filter:{warehouseId:a,categoryId:n},order:{orderBy:l.Wmb.PRICE,sortBy:"lowerPrice"===this.filterPriceSort?l.rp5.ASC:l.rp5.DESC},mutator:{imageResolution:l.Boi.M},search:{keyword:this.search}}}).subscribe({next:({data:d})=>{this.loading=!1,this.listProduct=d,d.listProduct.products.forEach(p=>{const f=p.productVariants.filter(y=>y.stock>0);this.products.push({actualPriceMax:p.actualPriceMax,actualPriceMin:p.actualPriceMin,description:p.description,id:p.id,image:p.image,isActive:p.isActive,isPODAvailable:p.isPODAvailable,name:p.name,productVariants:f.length?f:p.productVariants,slug:p.slug,supplier:p.supplier,warehouse:p.warehouse,categoryProducts:p.categoryProducts,isAvailable:p.isAvailable})}),d.listProduct.products.length||(this.canLoad=!1)},error:()=>{this.loading=!1}})}getListCategory(a,n){this.loading=!0,this.categoryService.listCategory({listCategoryInput:{limit:20,page:1,filter:{supplierId:a}}}).subscribe({next:({data:d})=>{this.loading=!1,this.listCategorys=d.listCategory.categories,n&&(this.nameLabel=this.listCategorys.filter(p=>p.id===n)[0].name)},error:()=>{this.loading=!1}})}categoryFilter(){this.modalService.showCategoryModal(this.warehouseDetail.detailWarehouse.supplier.id,[],this.nameLabel).then(a=>{a&&(this.products=[],this.page=1,this.nameLabel=a.name,this.categoryId=a.id,this.location.replaceState(`/supplier/detail?ss=${this.supplierSlug}&category=${this.categoryId}`),this.trackerService.logEvent("Supplier_product_category",a.id),this.getListProduct(this.warehouseDetail.detailWarehouse.id,a.id))})}priceSort(){this.modalService.showPriceSortModal(this.filterPriceSort).then(a=>{a&&(this.products=[],this.page=1,this.filterPriceSort=a,this.categoryId?this.getListProduct(this.warehouseDetail.detailWarehouse.id,this.categoryId):this.getListProduct(this.warehouseDetail.detailWarehouse.id))})}supplierInfo(){this.trackerService.logEvent("Supplier_info",this.slug?this.slug:this.supplierSlug),this.slug?this.modalService.showInfoSupplier(this.slug,""):this.supplierSlug&&this.modalService.showInfoSupplier("",this.supplierSlug)}goToDetail(a){this.router.navigate([`product/detail/${a}`])}onIonInfinite(a){this.page!==this.listProduct.listProduct.totalPage?(this.page+=1,this.checkParams(),setTimeout(()=>{a.target.complete()},500)):setTimeout(()=>{a.target.complete()},500)}handleRefresh(a){setTimeout(()=>{this.products=[],this.page=1,this.getListProduct(this.warehouseDetail.detailWarehouse.id,this.categoryId),a&&a.target.complete()},2e3)}goToHomePage(){this.router.navigate(["/"],{replaceUrl:!0})}goToAddressList(){this.router.navigate(["/address/list"])}toggleShowFullText(){this.isHidden=!this.isHidden}}return(i=o).\u0275fac=function(a){return new(a||i)(e.\u0275\u0275directiveInject(l.lQr),e.\u0275\u0275directiveInject(l.M52),e.\u0275\u0275directiveInject(l.HEz),e.\u0275\u0275directiveInject(g.ActivatedRoute),e.\u0275\u0275directiveInject(g.Router),e.\u0275\u0275directiveInject(P.x),e.\u0275\u0275directiveInject(D.Z),e.\u0275\u0275directiveInject(l.pl9),e.\u0275\u0275directiveInject(c.Location),e.\u0275\u0275directiveInject(T.q),e.\u0275\u0275directiveInject(e.Injector),e.\u0275\u0275directiveInject(M.O))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["app-supplier-detail"]],decls:10,vars:3,consts:[["slot","fixed",3,"ionRefresh"],[1,"supplier-container"],["id","home-body",1,"set-height-scroll","overflow-y-scroll","scrollbar-hide"],["class","mb-5",4,"ngIf"],["class","loading-skeleton",4,"ngIf"],[4,"ngIf"],[3,"ionInfinite"],[1,"mb-5"],["id","supplier-detail",1,"bg-gray-100"],[1,"pt-5","pb-5","px-4","rounded-b-xl","bg-white"],[1,"flex","gap-3","items-center","w-full","justify-between"],["id","supplier-name-detail",1,"flex","items-center","gap-3"],[1,"w-[45px]","h-[45px]"],["src","test","width","45","height","45",3,"src",4,"ngIf"],["id","supplier-name-and-date",1,""],[1,"flex","items-center","gap-1"],["class","h-[18px]","alt","tier-icon",3,"src",4,"ngIf"],[1,"mr-2","font-semibold","text-[18px]"],["class","flex items-center gap-2 ml-1",4,"lib-skeleton"],["id","supplier-info-detail"],["class","info-supplier cursor-pointer",3,"click",4,"lib-skeleton"],["class","flex items-center justify-start pt-5 gap-3 mx-2",4,"ngIf"],["class","pt-5 pb-5 px-4 mt-4 rounded-b-xl bg-white",4,"ngIf"],["class","mx-[40px]",4,"ngIf"],["class","mx-4 py-4 my-5 note-content scrollbar-hide",4,"ngIf"],["src","test","width","45","height","45",3,"src"],["alt","tier-icon",1,"h-[18px]",3,"src"],[1,"flex","items-center","gap-2","ml-1"],[1,"text-[14px]","text-[#828282]"],["padding","px-[5px]",3,"color","label","fontSize"],[1,"info-supplier","cursor-pointer",3,"click"],[1,"text-[#1CAED4]","text-[14px]"],[1,"flex","items-center","justify-start","pt-5","gap-3","mx-2"],["justifyContent","!justify-between",3,"outlined","title","width","borderColor","padding","icon","iconPosition","textColor","iconSize","bColor","handleEmit"],[3,"outlined","title","borderColor","padding","icon","textColor","iconPosition","width","iconSize","bColor","handleEmit"],[1,"pt-5","pb-5","px-4","mt-4","rounded-b-xl","bg-white"],[1,"w-full","flex","justify-center"],["class","grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center w-full",4,"ngIf"],[1,"grid","grid-cols-2","gap-x-4","gap-y-6","justify-items-center","w-full"],[3,"image","productName","productVariantName","price","priceBeforeDiscount","unit","discountValue","stock","maxLength","isPOD","clickProduct",4,"ngFor","ngForOf"],[3,"image","productName","productVariantName","price","priceBeforeDiscount","unit","discountValue","stock","maxLength","isPOD","clickProduct"],[1,"mx-[40px]"],[3,"label","description","image","showButton","buttonLabel","clickButton"],[1,"mx-4","py-4","my-5","note-content","scrollbar-hide"],[1,"border-t-2","border-dashed","border-grey-4","w-full"],[1,"my-5"],[1,"text-[14px]","leading-[16px]","font-bold","py-2"],[1,"text-[10px]","py-1"],[3,"hidden"],[1,"mt-3","mb-5"],[3,"title","width","outlined","borderColor","padding","textColor","bColor","handleEmit"],[1,"loading-skeleton"],[2,"width","100%","height","5rem",3,"animated"],[2,"width","100%","height","10rem",3,"animated"],[2,"width","100%","height","15rem",3,"animated"],[1,"flex","flex-col","items-center","p-[16px]"],["src","./assets/images/png/inbox-empty-state.png","alt","page-not-found",1,"w-[50%]","h-auto","mt-[20%]","mx-auto"],[1,"text-[17px]","text-grey-1","font-medium"],[1,"text-[10px]","text-grey-3","mt-[5px]","mb-[18px]","font-normal"],[3,"title","disabled","paddingX","handleEmit"]],template:function(a,n){1&a&&(e.\u0275\u0275elementStart(0,"ion-content")(1,"ion-refresher",0),e.\u0275\u0275listener("ionRefresh",function(d){return n.handleRefresh(d)}),e.\u0275\u0275element(2,"ion-refresher-content"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",1)(4,"div",2),e.\u0275\u0275template(5,$,19,13,"div",3)(6,Y,5,4,"div",4)(7,H,8,3,"div",5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"ion-infinite-scroll",6),e.\u0275\u0275listener("ionInfinite",function(d){return n.onIonInfinite(d)}),e.\u0275\u0275element(9,"ion-infinite-scroll-content"),e.\u0275\u0275elementEnd()()),2&a&&(e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",n.warehouseDetail),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.loading),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!n.warehouseDetail&&!n.loading))},dependencies:[c.NgForOf,c.NgIf,l.h_$,l.ieO,l.nM0,l.SWN,l.dpQ,u.W2,u.ju,u.MB,u.nJ,u.Wo,u.CK,l.tOi,m.b]}),o})();var z=s(38259);function U(i,o){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"lib-official-partner-all",7),e.\u0275\u0275listener("click",function(){const r=e.\u0275\u0275restoreView(t).$implicit,d=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(d.goToDetailSupplier(r.slug))}),e.\u0275\u0275elementEnd()()}if(2&i){const t=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275propertyInterpolate("src",t.supplier.image),e.\u0275\u0275propertyInterpolate("label",t.supplier.name)}}let G=(()=>{var i;class o{constructor(a,n){this.partnerService=a,this.router=n}ngOnInit(){this.getListAllPartner()}getListAllPartner(){this.partnerService.listOfficialPartner({listOfficialPartnerInput:{limit:20,page:1}}).subscribe({next:({data:n})=>{this.officialPartners=n.listOfficialPartner.officialPartners}})}goToDetailSupplier(a,n){this.router.navigate(["supplier/detail"],{queryParams:{s:a,category:n}})}}return(i=o).\u0275fac=function(a){return new(a||i)(e.\u0275\u0275directiveInject(l.brv),e.\u0275\u0275directiveInject(g.Router))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["app-supplier-list"]],decls:8,vars:1,consts:[[1,"overflow-y-scroll","scrollbar-hide","h-[99%]","bg-white"],[1,"flex","mx-3","my-3","w-full"],["id","label-and-level",1,"flex","items-center","mt-[2%]","w-full"],[1,"mr-2","font-semibold","text-[17px]"],["src","/assets/images/png/partner/supplier-level.png","alt","supplier-level",1,"h-[18px]"],[1,"grid","grid-cols-2"],[4,"ngFor","ngForOf"],["fontSize","14",3,"src","label","click"]],template:function(a,n){1&a&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e.\u0275\u0275text(4,"Official Partner"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"img",4),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"div",5),e.\u0275\u0275template(7,U,2,2,"div",6),e.\u0275\u0275elementEnd()()),2&a&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",n.officialPartners))},dependencies:[c.NgForOf,l.iK7]}),o})();var I=s(29252);const Q=[{path:"",component:I.q,data:{canGoBack:!0},children:[{path:"list",component:G,title:"Official-Partner/List"}]},{path:"",component:z.o,data:{canGoBack:!0},children:[{path:"cangkupan-area/:id",component:E,title:"Cakupan-Area",data:{pageTitle:"Cakupan Area"}}]},{path:"",component:I.q,data:{canGoBack:!0},children:[{path:"detail",title:"Supplier Detail",component:K}]}];let X=(()=>{var i;class o{}return(i=o).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[g.RouterModule.forChild(Q),g.RouterModule]}),o})();var J=s(50139),Z=s(95709),q=s(13883);let ee=(()=>{var i;class o{}return(i=o).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.CommonModule,X,J.O,Z._,l.Md3,l.$QN,l.dTQ,l.hJ1,l.PPX,l.Pl,l.drE,l.Z6o,u.Pc,l.TXv,q.D]}),o})()},95709:(w,x,s)=>{s.d(x,{_:()=>u});var c=s(20482),v=s(11929),C=s(90368),e=s(22874);let u=(()=>{var m;class _{}return(m=_).\u0275fac=function(S){return new(S||m)},m.\u0275mod=e.\u0275\u0275defineNgModule({type:m}),m.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.CommonModule,v.Pc,C.hJ1]}),_})()}}]);