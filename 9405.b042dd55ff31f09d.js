(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9405],{59405:(B,m,a)=>{a.r(m),a.d(m,{InboxModule:()=>V});var c=a(20482),p=a(1919),s=a(90368),e=a(22874),b=a(30658),g=a(62934),d=a(11929),h=a(6593);function u(t,r){if(1&t&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.shortDescription)}}function _(t,r){if(1&t&&e.\u0275\u0275element(0,"span",14),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("innerHtml",n.content,e.\u0275\u0275sanitizeHtml)}}function f(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",15),e.\u0275\u0275listener("click",function(o){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.setToggleReadMore(o))}),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",n.seeMore?"See Less":"Read More"," ")}}function I(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"img",16),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.setRedirect())}),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("src",n.image,e.\u0275\u0275sanitizeUrl)}}let v=(()=>{var t;class r{constructor(i,o){this.router=i,this.sanitizer=o,this.isRead=!0,this.seeMore=!1,this.readInboxId=new e.EventEmitter}ngOnInit(){switch(this.content=this.sanitizer.bypassSecurityTrustHtml(this.description),this.category){case s.T47.ALL:this.categoryName="Semua";break;case s.T47.CAMPAIGN:this.categoryName="Campaign";break;case s.T47.REMINDER:this.categoryName="Reminder";break;case s.T47.PROMO:this.categoryName="Promo";break;case s.T47.INFO:this.categoryName="Info"}}setToggleReadMore(i){i.stopPropagation(),this.seeMore=!this.seeMore,this.setReadInbox()}setReadInbox(){this.isRead||(this.isRead=!0,this.readInboxId.emit(this.id))}setRedirect(){if(this.setReadInbox(),this.link){let i;switch(this.type){case s.Ppq.INTERNAL:i=this.link.split(window.location.protocol+"//"+window.location.host),2===i.length?this.router.navigate([i[1]]).then():window.open(this.link,"_blank");break;case s.Ppq.EXTERNAL:window.open(this.link,"_blank")}}}}return(t=r).\u0275fac=function(i){return new(i||t)(e.\u0275\u0275directiveInject(p.Router),e.\u0275\u0275directiveInject(h.H7))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-inbox-card"]],inputs:{category:"category",title:"title",description:"description",date:"date",image:"image",isRead:"isRead",shortDescription:"shortDescription",id:"id",type:"type",link:"link",broadcastName:"broadcastName"},outputs:{readInboxId:"readInboxId"},decls:18,vars:14,consts:[[3,"click"],[1,"flex","flex-row","mt-4","border-b-[1px]","border-grey-5","pb-3"],[1,"mr-[10px]"],["src","/assets/images/svg/info-blue.svg","width","24px","height","24px","alt","info-icon",1,""],[1,"flex-row","w-full"],[1,"flex","flex-row","justify-between"],[1,"text-grey-3","text-[16px]"],[1,"text-grey-3","text-[12px]"],[1,"text-[14px]","text-xl"],[1,"text-[14px]"],[4,"ngIf"],[3,"innerHtml",4,"ngIf"],["class","text-primary-yt-blue text-[14px] cursor-pointer underline",3,"click",4,"ngIf"],["class","!w-full !h-auto","alt","","alt","inbox-image",3,"src","click",4,"ngIf"],[3,"innerHtml"],[1,"text-primary-yt-blue","text-[14px]","cursor-pointer","underline",3,"click"],["alt","","alt","inbox-image",1,"!w-full","!h-auto",3,"src","click"]],template:function(i,o){1&i&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275listener("click",function(){return o.setReadInbox()}),e.\u0275\u0275elementStart(1,"div",1)(2,"div",2),e.\u0275\u0275element(3,"img",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",4)(5,"div",5)(6,"span",6),e.\u0275\u0275text(7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"span",7),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"date"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(11,"div",8),e.\u0275\u0275text(12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"div",9),e.\u0275\u0275template(14,u,2,1,"span",10)(15,_,1,1,"span",11)(16,f,2,1,"span",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(17,I,1,1,"img",13),e.\u0275\u0275elementEnd()()()),2&i&&(e.\u0275\u0275classMapInterpolate1("px-[16px] pt-1 ",o.isRead?"":"bg-blue-100"," cursor-pointer"),e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate(o.categoryName),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind3(10,10,o.date,"dd MMMM yyyy | HH:mm","UTC")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(o.title),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!o.seeMore),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.seeMore),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.seeMore),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.image))},dependencies:[c.NgIf,c.DatePipe],styles:["ol,ul,menu{all:revert;margin:3px 0}a{color:#1caed4;text-decoration:underline}h1,h2,h3,h4,h5,h6{font-size:14px!important}\n"],encapsulation:2}),r})();function y(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"app-inbox-card",18),e.\u0275\u0275listener("readInboxId",function(o){const x=e.\u0275\u0275restoreView(n).$implicit,N=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(N.setReadInbox(o,x.inbox.broadcastName))}),e.\u0275\u0275elementEnd()()}if(2&t){const n=r.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("id",n.id)("shortDescription",n.inbox.shortDescription)("description",n.inbox.description)("isRead",n.isRead)("date",n.inbox.createdAt.toString())("title",n.inbox.title)("image",n.inbox.imageUrl)("category",n.inbox.category)("type",n.inbox.eventType)("link",n.inbox.link)("broadcastName",n.inbox.broadcastName)}}function C(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",19)(1,"div",20)(2,"lib-basic-button",21),e.\u0275\u0275listener("handleEmit",function(){e.\u0275\u0275restoreView(n);const o=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(o.loadInBox())}),e.\u0275\u0275elementEnd()()()}2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("bColor","!bg-white")("borderColor","blue")("width","!w-full")("border","!border-2")("disabled",!1)("height","!h-[24px]")("textColor","text-primary-yt-blue")("textSize","text-[14px]")("outlined",!0)("paddingX","!px-[6px]")("paddingY","!py-[18px]")("rounded","8px")("title","Lihat Lebih Banyak"))}function w(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"div",6)(2,"div",7)(3,"div",8),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const o=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(o.markAllRead())}),e.\u0275\u0275text(4," Tandai semua dibaca "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",9)(6,"div",10),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const o=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(o.overviewFilter())}),e.\u0275\u0275elementStart(7,"p",11),e.\u0275\u0275text(8,"Filter"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"img",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"div",13),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const o=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(o.refreshInbox())}),e.\u0275\u0275element(11,"img",14),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(12,"div")(13,"div",15),e.\u0275\u0275template(14,y,2,11,"div",16),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(15,C,3,13,"div",17),e.\u0275\u0275elementEnd()()}if(2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(14),e.\u0275\u0275property("ngForOf",n.listInbox),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.listInbox.length&&n.canLoad)}}function k(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",22)(1,"lib-basic-empty-state",23),e.\u0275\u0275listener("clickButton",function(){e.\u0275\u0275restoreView(n);const o=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(o.refreshInbox())})("clickButtonSecondary",function(){e.\u0275\u0275restoreView(n);const o=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(o.toBack())}),e.\u0275\u0275elementEnd()()}2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("image","./assets/images/svg/inbox-empty-state.svg")("label","Belum ada inbox")("description","Nantikan program menarik dari Youtap!")("showButton",!0)("buttonWidth","!w-auto")("buttonLabel","Refresh Inbox")("showButtonSecondary",!0)("buttonLabelSecondary","Kembali ke Halaman Utama"))}function L(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275template(1,w,16,2,"div",3)(2,k,2,8,"div",4),e.\u0275\u0275elementStart(3,"ion-infinite-scroll",5),e.\u0275\u0275listener("ionInfinite",function(o){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.onIonInfinite(o))}),e.\u0275\u0275element(4,"ion-infinite-scroll-content"),e.\u0275\u0275elementEnd()()}if(2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.listInbox.length>0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",0===n.listInbox.length)}}function S(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",24),e.\u0275\u0275element(1,"img",25),e.\u0275\u0275elementStart(2,"h6",26),e.\u0275\u0275text(3," Tunggu sebentar yah.. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"span",27),e.\u0275\u0275text(5,"kita lagi refresh inboxnya.."),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(6,"img",28),e.\u0275\u0275elementEnd())}let R=(()=>{var t;class r{constructor(i,o,l,x){this.inboxService=i,this.location=o,this.modalService=l,this.trackerService=x,this.listInbox=[],this.typeFilter="all",this.totalPage=10,this.page=1,this.limit=10,this.total=0,this.loadMore=!0,this.selectedRange=s.xPx.ALL,this.isLoading=!0,this.canLoad=!1}ngOnInit(){this.getListInbox()}refreshInbox(){this.listInbox=[],this.getListInbox()}fetchData(){this.page=1,this.listInbox=[],this.isLoading=!0,this.getListInbox()}overviewFilter(){this.modalService.showFilterInbox(this.typeFilter).then(i=>{i&&(this.setRange(i),this.typeFilter=i)})}setRange(i){this.page=1,this.selectedRange!==i&&(this.selectedRange=i,this.fetchData())}getListInbox(){this.isLoading=!0,this.canLoad=!0;const i={page:this.page,limit:this.limit,filter:{}};this.selectedRange!==s.xPx.ALL&&(i.filter={interval:this.selectedRange}),this.inboxService.listUserInbox({listUserInboxInput:i}).subscribe({next:({data:o})=>{this.totalPage=o.listUserInbox.totalPage||0,this.listInbox=[...this.listInbox,...o.listUserInbox.userInboxes],this.isLoading=!1,this.total=o.listUserInbox.total,this.page===o.listUserInbox.totalPage&&(this.canLoad=!1)},error:o=>(this.isLoading=!1,o)})}setReadInbox(i,o){this.inboxService.readUnreadUserInbox({readUnreadUserInboxInput:{isRead:!0,ids:[i]}}).subscribe({next:()=>{this.trackerService.logEvent("Inbox Message",o)}})}markAllRead(){this.inboxService.readUnreadAllInbox({readUnreadAllUserInboxInput:{isRead:!0}}).subscribe({next:i=>{i&&this.fetchData()}})}loadInBox(){this.page=this.page+1,this.canLoad&&this.getListInbox()}toBack(){this.location.back()}onIonInfinite(i){this.page+=1,this.totalPage>=this.page&&this.getListInbox(),setTimeout(()=>{i.target.complete()},500)}}return(t=r).\u0275fac=function(i){return new(i||t)(e.\u0275\u0275directiveInject(s.mzz),e.\u0275\u0275directiveInject(c.Location),e.\u0275\u0275directiveInject(b.Z),e.\u0275\u0275directiveInject(g.O))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-list-inbox"]],decls:3,vars:2,consts:[["class","mt-[3%] max-h-screen h-[100%] pb-[30%] overflow-y-scroll scrollbar-hide bg-grey-6 pt-safe",4,"ngIf"],["class","flex flex-col items-center mt-[65px]",4,"ngIf"],[1,"mt-[3%]","max-h-screen","h-[100%]","pb-[30%]","overflow-y-scroll","scrollbar-hide","bg-grey-6","pt-safe"],[4,"ngIf"],["class","bg-white text-center py-5 mt-[65px]",4,"ngIf"],[3,"ionInfinite"],[1,"flex","flex-col","p-[16px]","gap-2","sticky","top-0","bg-white","mt-[15%]"],[1,"flex","flex-row","justify-between","gap-x-2"],[1,"my-auto","text-[14px]","text-primary-yt-blue","cursor-pointer",3,"click"],[1,"flex","flex-row","gap-x-2","w-[120px]","justify-between","items-center"],[1,"rounded-lg","border-2","px-2","py-1","flex","items-center","border-blue",3,"click"],[1,"mr-2","text-sm","text-blue"],["src","./assets/images/svg/arrow-down.svg"],[1,"mt-1",3,"click"],["src","./assets/images/svg/reload.svg","alt",""],[1,"pb-[16px]","bg-white"],[4,"ngFor","ngForOf"],["class","py-[3%] bg-grey-6",4,"ngIf"],[3,"id","shortDescription","description","isRead","date","title","image","category","type","link","broadcastName","readInboxId"],[1,"py-[3%]","bg-grey-6"],[1,"bg-white","p-[16px]"],[3,"bColor","borderColor","width","border","disabled","height","textColor","textSize","outlined","paddingX","paddingY","rounded","title","handleEmit"],[1,"bg-white","text-center","py-5","mt-[65px]"],[3,"image","label","description","showButton","buttonWidth","buttonLabel","showButtonSecondary","buttonLabelSecondary","clickButton","clickButtonSecondary"],[1,"flex","flex-col","items-center","mt-[65px]"],["src","./assets/images/svg/kasir-digital.svg","width","200px","alt","kasir-digital"],[1,"text-[16px]","text-grey-1","font-medium","mt-2","text-center"],[1,"text-[10px]","text-grey-3","text-center","mb-5"],["src","./assets/images/svg/loading.svg",1,"pb-5"]],template:function(i,o){1&i&&(e.\u0275\u0275elementStart(0,"ion-content"),e.\u0275\u0275template(1,L,5,2,"div",0)(2,S,7,0,"div",1),e.\u0275\u0275elementEnd()),2&i&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.isLoading),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.isLoading))},dependencies:[c.NgForOf,c.NgIf,s.SWN,s.nM0,d.W2,d.ju,d.MB,v]}),r})();const E=[{path:"",component:a(38259).o,children:[{title:"Inbox",path:"",component:R,data:{pageTitle:"Inbox"}}]}];let M=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.RouterModule.forChild(E),p.RouterModule]}),r})(),V=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.CommonModule,M,s.PPX,s.hJ1,d.Pc]}),r})()}}]);