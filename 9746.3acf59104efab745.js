(self.webpackChunkyoutapPosReport=self.webpackChunkyoutapPosReport||[]).push([[9746],{9746:(ae,g,i)=>{i.r(g),i.d(g,{AddProductModule:()=>te});var d=i(4887),u=i(4398),m=i(6e3),f=i(5695),p=i(6293),C=i(6698),y=i(5347),e=i(7460);const D=()=>({"padding-left":"20px"});let I=(()=>{class n extends y.u{constructor(){super(...arguments),this.showButton=!1}onInjectInputs(t){this.title=t.title,this.showButton=t.closeButton}static#e=this.\u0275fac=(()=>{let t;return function(a){return(t||(t=e.\u0275\u0275getInheritedFactory(n)))(a||n)}})();static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["snk-modal"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:12,vars:2,consts:[[1,"p-4"],[1,"mb-4"],[1,"list-disc",3,"ngStyle"],[1,"mb-2"]],template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"div",0)(1,"p",1),e.\u0275\u0275text(2," Untuk menghindari gagal upload produk massal, mohon ikuti syarat & ketentuan berikut: "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"ul",2)(4,"li",3),e.\u0275\u0275text(5,"Masukkan nama produk dengan maksimum 50 karakter"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li",3),e.\u0275\u0275text(7,"Pastikan nama produk, dan kode SKU berbeda"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"li",3),e.\u0275\u0275text(9,"Harga modal harus lebih kecil dari harga jual"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"li",3),e.\u0275\u0275text(11,"Maksimum produk yang dimasukkan adalah 1000 data"),e.\u0275\u0275elementEnd()()()),2&o&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction0(1,D)))},dependencies:[d.NgStyle]})}return n})();var _=i(7398);let w=(()=>{class n{constructor(t){this.http=t}uploadFile(t){const o=new FormData;return o.append("file",t),this.http.post(f.environment.POS_API_URL+"/product-imports/upload",o,{reportProgress:!0,observe:"events"}).pipe((0,_.U)(a=>{switch(a.type){case m.HttpEventType.UploadProgress:return Math.round(100*a.loaded/a.total);case m.HttpEventType.Response:return 100;default:return 0}}))}static#e=this.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275inject(m.HttpClient))};static#t=this.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),E=(()=>{class n{constructor(t){this.httpClient=t}downloadFile(t){return this.httpClient.get(f.environment.POS_API_URL+"/product-imports/template",{responseType:"blob"})}static#e=this.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275inject(m.HttpClient))};static#t=this.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var P=i(6890),h=i(9275),x=i(8084),v=i(4260),b=i(9523);function F(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"div",19)(1,"p",20),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",t.toastMessage," ")}}function T(n,l){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275element(1,"lib-basic-empty-state",21),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("image","./assets/images/png/page-not-found.png")("label","Belum ada produk terupload")("description","Download template dan isi sesuai dengan syarat dan ketentuan yang berlaku, kemudian upload template untuk mengunggah produk-produkmu")("showButton",!1))}const A=()=>({color:"#D0021B"});function M(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"span",22),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction0(2,A)),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.fileErrorMessage," ")}}const j=()=>({height:"6px"});function B(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"div",23)(1,"p",24),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p",25),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"p-progressBar",26),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",t.nameOfFile," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",t.uploadDate," "),e.\u0275\u0275advance(1),e.\u0275\u0275styleMap(e.\u0275\u0275pureFunction0(4,j))}}function U(n,l){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275element(1,"img",32),e.\u0275\u0275elementEnd())}function O(n,l){1&n&&(e.\u0275\u0275elementStart(0,"div",33),e.\u0275\u0275element(1,"img",34)(2,"img",35),e.\u0275\u0275elementEnd())}function R(n,l){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",27)(1,"div",28),e.\u0275\u0275listener("click",function(){const r=e.\u0275\u0275restoreView(t).$implicit,s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.gotoDetail(r.id))}),e.\u0275\u0275elementStart(2,"div",29)(3,"p",24),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p",25),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"formatDate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"div"),e.\u0275\u0275template(9,U,2,0,"div",30)(10,O,3,0,"ng-template",null,31,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()()()}if(2&n){const t=l.$implicit,o=e.\u0275\u0275reference(11);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.fileName),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind2(7,4,t.createdAt,"DD MMM YYYY, HH:mm")," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf","SUCCESS"===t.status)("ngIfElse",o)}}function N(n,l){1&n&&(e.\u0275\u0275elementStart(0,"div",36),e.\u0275\u0275element(1,"p-skeleton",37)(2,"p-skeleton",37)(3,"p-skeleton",37)(4,"p-skeleton",37)(5,"p-skeleton",37),e.\u0275\u0275elementEnd())}function H(n,l){1&n&&e.\u0275\u0275element(0,"img",18)}function G(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.dataDokumen.successCount||null,"")}}function V(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.dataDokumen.failedCount||null,"")}}const Y=()=>({color:"#828282"});function z(n,l){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",19)(1,"p"),e.\u0275\u0275text(2," Download dokumen produk gagal untuk memperbaiki data dan upload kembali "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"lib-basic-button",20),e.\u0275\u0275listener("handleEmit",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.handleDownload(a.dataDokumen.failedFileUrl))}),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction0(9,Y)),e.\u0275\u0275advance(3),e.\u0275\u0275property("width","w-full")("title","Download Produk Gagal")("bColor","!bg-primary-yt-dark-blue")("borderColor","blue")("border","!border-1")("textColor","text-white")("disabled",t.isDownloadFile)("outlined",!1)}}function K(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" Baris ",t.row," ")}}function $(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"div",21),e.\u0275\u0275template(1,K,2,1,"p",15),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()()),2&n){const t=l.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.row),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",t.reason," ")}}const k=()=>({"border-bottom-width":"8px","border-bottom-color":"#F2F2F2"}),S=n=>({color:n});function J(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"div",7)(1,"div",8)(2,"div",9)(3,"p"),e.\u0275\u0275text(4,"Tanggal & Waktu"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p"),e.\u0275\u0275text(6,"Status"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",10)(8,"p"),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"formatDate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"p",11),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(13,"p",12),e.\u0275\u0275text(14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"p",13),e.\u0275\u0275template(16,H,1,0,"img",14)(17,G,2,1,"span",15)(18,V,2,1,"span",15),e.\u0275\u0275text(19),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(20,z,4,10,"div",16)(21,$,4,2,"div",17),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction0(15,k)),e.\u0275\u0275advance(8),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(10,12,t.dataDokumen.createdAt,"DD MMM YYYY, HH:mm")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction1(16,S,"SUCCESS"===t.dataDokumen.status?"#26AB5E":"PROCESSING"===t.dataDokumen.status?"#828282":"#D0021B")),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ","SUCCESS"===t.dataDokumen.status?"Berhasil Upload":"PROCESSING"===t.dataDokumen.status?"Memproses Produk":"Gagal Upload"," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",0===t.dataDokumen.failedCount?"Daftar Produk Success Upload":t.dataDokumen.failedCount>0?"Daftar Produk Gagal Upload":"Daftar Produk"," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction1(18,S,"PROCESSING"===t.dataDokumen.status&&0===t.dataDokumen.failedCount&&0===t.dataDokumen.successCount?"#828282":"FAILED"===t.dataDokumen.status&&0===t.dataDokumen.failedCount&&0===t.dataDokumen.successCount?"#D0021B":0===t.dataDokumen.failedCount?"#26AB5E":t.dataDokumen.failedCount>0?"#D0021B":"#828282")),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.dataDokumen.failedCount>0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",0===t.dataDokumen.failedCount),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.dataDokumen.failedCount>0),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ","PROCESSING"===t.dataDokumen.status&&0===t.dataDokumen.failedCount&&0===t.dataDokumen.successCount?"Muat ulang halaman untuk mengubah status":"FAILED"===t.dataDokumen.status&&0===t.dataDokumen.failedCount&&0===t.dataDokumen.successCount||t.dataDokumen.failedCount>0?"Produk gagal diupload":0===t.dataDokumen.failedCount?"Produk berhasil diupload":""," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.dataDokumen.failedCount>0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.errorMessagesArray)}}const Q=[{path:"",component:(()=>{class n{constructor(t,o,a,r,s,c,ne,oe){this.httpClient=t,this.posReportService=o,this.router=a,this.location=r,this.modalService=s,this.uploadService=c,this.downloadService=ne,this.libsDownloadFileService=oe,this.showToast=!1,this.IsloadingDownload=!1,this.IsUploadDownload=!1,this.toastMessage="",this.nameOfFile="",this.isLoading=!1,this.url=f.environment.POS_API_URL,this.selectedFile=null,this.uploadProgress=0,this.isUploading=!1,this.fileErrorMessage=""}ngOnInit(){this.listFiles()}listFiles(){this.isLoading=!0,this.posReportService.getProductImport().subscribe({next:({data:t})=>{this.isLoading=!1,this.files=t.listProductImport.productImports},error:()=>{}})}downloadTemplate(){this.IsloadingDownload=!0,this.downloadService.downloadFile("template.xlsx").subscribe(t=>{const o=new Blob([t],{type:t.type});this.libsDownloadFileService.saveToFile("template.xlsx",o),this.IsloadingDownload=!1,this.showToasts("Template berhasil di download.")},t=>{console.error("Error downloading the file",t),this.IsloadingDownload=!1})}onFileSelected(t){const o=t.target.files[0];if(o){const a=o.name,r=a?.split(".")?.pop()?.toLowerCase();if("xlsx"!==r&&"csv"!==r)return void(this.fileErrorMessage="Invalid file type. Please upload a .xlsx or .csv file.");this.fileErrorMessage="";const s=new Date;this.nameOfFile=a,this.uploadDate=s,this.isUploading=!0,this.uploadService.uploadFile(o).subscribe(c=>{this.uploadProgress=c,100===c&&(this.isUploading=!1,this.listFiles(),this.files.push({fileName:a,createdAt:s,status:"SUCCESS"}))},c=>{this.isUploading=!1,console.error(c)})}}gotoDetail(t){this.router.navigate(["report/add-product/detail"],{queryParams:{id:t}})}showToasts(t){this.toastMessage=t,this.showToast=!0,setTimeout(()=>{this.showToast=!1},2e3)}goBack(){window.history.length<3?this.router.navigate(["/"]):this.location.back()}openSnK(){this.modalService.open(I,{title:"Syarat & Ketentuan",closeButton:!0,infoIcon:!0})}static#e=this.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(m.HttpClient),e.\u0275\u0275directiveInject(p.Q4n),e.\u0275\u0275directiveInject(u.Router),e.\u0275\u0275directiveInject(d.Location),e.\u0275\u0275directiveInject(C.Z),e.\u0275\u0275directiveInject(w),e.\u0275\u0275directiveInject(E),e.\u0275\u0275directiveInject(p.Sbs))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["add-product"]],decls:22,vars:22,consts:[[1,"flex","flex-col","overflow-auto"],["id","header",1,"h-[60px]","z-10","sticky","top-0","shadow-lg"],[1,"flex","flex-row","bg-white","p-[16px]","w-full","h-full","items-center","justify-between"],[1,"flex"],[1,"mr-3","cursor-pointer",3,"click"],["src","./assets/images/svg/left-arrow-stick-grey.svg","alt","back",1,"h-[20px]","w-[20px]"],[1,"text-[18px]"],["src","./assets/images/svg/info-black.svg","alt","back",1,"h-[20px]","w-[20px]","cursor-pointer",3,"click"],["class","flex flex-row items-center w-full mx-auto rounded-[8px] bg-[#2E3137] transition ease-in z-50 absolute top-4 left-0",4,"ngIf"],["id","add-product-dashboard",1,"p-4","mt-4","flex","flex-col","gap-4"],[4,"ngIf"],[3,"width","title","bColor","borderColor","border","textColor","disabled","outlined","handleEmit"],[3,"ngStyle",4,"ngIf"],["type","file","accept",".xlsx, .csv",2,"display","none",3,"change"],["fileInput",""],[1,"border-t-2","pt-6","mt-2"],["class","px-4 py-2 border-2 rounded-lg items-center cursor-pointer mb-4",4,"ngIf"],["class","mb-4",4,"ngFor","ngForOf"],["class","flex flex-col mx-[20px] gap-[15px]",4,"ngIf"],[1,"flex","flex-row","items-center","w-full","mx-auto","rounded-[8px]","bg-[#2E3137]","transition","ease-in","z-50","absolute","top-4","left-0"],[1,"text-left","px-3","text-[12px]","mt-1","text-white","font-semibold","py-2"],[3,"image","label","description","showButton"],[3,"ngStyle"],[1,"px-4","py-2","border-2","rounded-lg","items-center","cursor-pointer","mb-4"],[1,"font-semibold"],[1,"text-[#828282]","text-xs"],["mode","indeterminate"],[1,"mb-4"],[1,"px-4","py-2","flex","justify-between","border-2","rounded-lg","items-center","cursor-pointer",3,"click"],[1,"flex","flex-col"],[4,"ngIf","ngIfElse"],["failureTemplate",""],["src","./assets/images/png/success-green.png","alt","Success",1,"w-5","h-4"],[1,"flex","gap-4","items-center"],["src","./assets/images/png/failed-red.png","alt","Failed",1,"w-6","h-6"],["src","./assets/images/png/next-gray.png","alt","Failed",1,"w-3","h-3"],[1,"flex","flex-col","mx-[20px]","gap-[15px]"],["width","100%","height","100px"]],template:function(o,a){if(1&o){const r=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.\u0275\u0275listener("click",function(){return a.goBack()}),e.\u0275\u0275element(5,"img",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"span",6),e.\u0275\u0275text(7,"Tambah Produk Massal"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"div")(9,"img",7),e.\u0275\u0275listener("click",function(){return a.openSnK()}),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275template(10,F,3,1,"div",8),e.\u0275\u0275elementStart(11,"div",9),e.\u0275\u0275template(12,T,2,4,"div",10),e.\u0275\u0275elementStart(13,"lib-basic-button",11),e.\u0275\u0275listener("handleEmit",function(){return a.downloadTemplate()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"lib-basic-button",11),e.\u0275\u0275listener("handleEmit",function(){e.\u0275\u0275restoreView(r);const c=e.\u0275\u0275reference(17);return e.\u0275\u0275resetView(c.click())}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(15,M,2,3,"span",12),e.\u0275\u0275elementStart(16,"input",13,14),e.\u0275\u0275listener("change",function(c){return a.onFileSelected(c)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"div",15),e.\u0275\u0275template(19,B,6,5,"div",16)(20,R,12,7,"div",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(21,N,6,0,"div",18),e.\u0275\u0275elementEnd()()}2&o&&(e.\u0275\u0275advance(10),e.\u0275\u0275property("ngIf",a.showToast),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",0===(null==a.files?null:a.files.length)),e.\u0275\u0275advance(1),e.\u0275\u0275property("width","w-full")("title","Download Template")("bColor","!bg-[#1CAED4]")("borderColor","blue")("border","!border-1")("textColor","text-white")("disabled",a.IsloadingDownload)("outlined",!1),e.\u0275\u0275advance(1),e.\u0275\u0275property("width","w-full")("title","Upload Template")("bColor","!bg-primary-yt-dark-blue")("borderColor","blue")("border","!border-1")("textColor","text-white")("disabled",a.IsUploadDownload)("outlined",!1),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",a.fileErrorMessage),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",a.isUploading),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",a.files),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",a.isLoading))},dependencies:[d.NgForOf,d.NgIf,d.NgStyle,P.S,h.n,x.k,v.O,b.i]})}return n})(),title:"Add-Product",data:{canGoBack:!0,pageTitle:"Tambah Produk Massal"}},{path:"detail",component:(()=>{class n{constructor(t,o,a,r){this.route=t,this.posReportService=o,this.router=a,this.location=r,this.id="",this.errorMessagesArray=[],this.isDownloadFile=!1}ngOnInit(){this.id=this.route.snapshot?.queryParamMap.get("id")??"",this.getDetailDokumen()}getDetailDokumen(){this.posReportService.detailProductImport({detailProductImportInput:{id:this.id}}).subscribe({next:({data:o})=>{this.dataDokumen=o.detailProductImport.productImport;const a=JSON.parse(this.dataDokumen.errorMessages);this.errorMessagesArray=a}})}handleDownload(t){this.isDownloadFile=!0,t&&(window.open(t,"_blank"),this.isDownloadFile=!1)}goBack(){window.history.length<3?this.router.navigate(["/"]):this.location.back()}static#e=this.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(u.ActivatedRoute),e.\u0275\u0275directiveInject(p.Q4n),e.\u0275\u0275directiveInject(u.Router),e.\u0275\u0275directiveInject(d.Location))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["detail-product"]],decls:8,vars:3,consts:[[1,"flex","flex-col","overflow-auto"],["id","header",1,"h-[60px]","z-10","sticky","top-0",3,"ngStyle"],[1,"flex","flex-row","bg-white","p-[16px]","w-full","h-full","items-center"],[1,"mr-3","cursor-pointer",3,"click"],["src","./assets/images/svg/left-arrow-stick-grey.svg","alt","back",1,"h-[20px]","w-[20px]"],[1,"text-[18px]"],["class","py-4 flex flex-col gap-2",4,"ngIf"],[1,"py-4","flex","flex-col","gap-2"],[1,"flex","justify-between","items-center","mb-4","py-2","px-4",3,"ngStyle"],[1,"flex","flex-col","text-[#828282]","text-sm"],[1,"flex","flex-col","text-right"],[3,"ngStyle"],[1,"text-xl","px-4"],[1,"px-4","flex","gap-1",3,"ngStyle"],["class","h-[20px] w-[20px]","src","./assets/images/svg/warning-red.svg","alt","back",4,"ngIf"],[4,"ngIf"],["class","px-4 mb-2",3,"ngStyle",4,"ngIf"],["class","flex gap-4 p-4 border-2 rounded-xl mx-4",4,"ngFor","ngForOf"],["src","./assets/images/svg/warning-red.svg","alt","back",1,"h-[20px]","w-[20px]"],[1,"px-4","mb-2",3,"ngStyle"],[3,"width","title","bColor","borderColor","border","textColor","disabled","outlined","handleEmit"],[1,"flex","gap-4","p-4","border-2","rounded-xl","mx-4"]],template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.\u0275\u0275listener("click",function(){return a.goBack()}),e.\u0275\u0275element(4,"img",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"span",5),e.\u0275\u0275text(6,"Detail Dokumen"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275template(7,J,22,20,"div",6),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction0(2,k)),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",a.dataDokumen))},dependencies:[d.NgForOf,d.NgIf,d.NgStyle,h.n,b.i]})}return n})(),title:"Detail-Dokumen",data:{canGoBack:!0,pageTitle:"Detail Dokumen"}}];let W=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=e.\u0275\u0275defineInjector({imports:[u.RouterModule.forChild(Q),u.RouterModule]})}return n})();var X=i(2168),Z=i(1685),q=i(4089),ee=i(3985);let te=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=e.\u0275\u0275defineInjector({providers:[p.Q4n,Z._M,m.HttpClient,{provide:"BASE_URL_BOS_API",useClass:X.G,useValue:f.environment.BOS_API_URL}],imports:[d.CommonModule,W,p.PPX,p.hJ1,q.hJ,ee.p,p.drE,x.q,v.m]})}return n})()}}]);