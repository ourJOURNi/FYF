!function(){function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function o(n,o){for(var e=0;e<o.length;e++){var t=o[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qdgq:function(e,t,i){"use strict";i.r(t),i.d(t,"LoginPageModule",function(){return I});var a=i("ofXK"),r=i("3Pt+"),s=i("TEn/"),l=i("tyNb"),d=i("mrSG"),c=i("lGQG"),p=i("fXoL"),u=["autoFocusInput"],b=["initialLoadingIcon"],g=["initialLoadingSpinner"];function h(n,o){if(1&n&&(p.Mb(0,"div",21),p.nc(1),p.Lb()),2&n){var e=p.Wb().$implicit;p.xb(1),p.pc(" ",e.message," ")}}function f(n,o){if(1&n&&(p.Kb(0),p.mc(1,h,2,1,"div",20),p.Jb()),2&n){var e=o.$implicit,t=p.Wb();p.xb(1),p.Zb("ngIf",t.loginForm.get("email").hasError(e.type)&&(t.loginForm.get("email").dirty||t.loginForm.get("email").touched))}}function m(n,o){if(1&n&&(p.Mb(0,"div",21),p.nc(1),p.Lb()),2&n){var e=p.Wb().$implicit;p.xb(1),p.pc(" ",e.message," ")}}function w(n,o){if(1&n&&(p.Kb(0),p.mc(1,m,2,1,"div",20),p.Jb()),2&n){var e=o.$implicit,t=p.Wb();p.xb(1),p.Zb("ngIf",t.loginForm.get("password").hasError(e.type)&&(t.loginForm.get("password").dirty||t.loginForm.get("password").touched))}}var y,B,k,L=function(){return["personal-info"]},v=function(){return["enter-email"]},M=[{path:"",component:(y=function(){function e(o,t,i,a,r){n(this,e),this.formBuilder=o,this.auth=t,this.loading=i,this.toast=a,this.router=r,this.initialLoading=!0,this.validationMessasges={email:[{type:"email",message:"Must be a valid email address"}],password:[{type:"pattern",message:"Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number."}]}}var t,i,a;return t=e,(i=[{key:"ngOnInit",value:function(){var n=this;console.log(this.initialLoadingISpinner),this.initialLoading||document.getElementById("download-footer"),!1===window.navigator.onLine&&console.log("We are OFFLINE!"),!0===window.navigator.onLine&&console.log("We are ONLINE!"),this.loginForm=this.formBuilder.group({email:["eddielacrosse2@gmail.com",[r.n.required,r.n.email]],password:["Lacrosse2",r.n.compose([r.n.minLength(6),r.n.required,r.n.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.downloadButton=document.getElementById("download-button"),this.closeIPhoneInstallBannerButton=document.getElementById("close"),this.iPhoneInstallBanner=document.getElementById("iphone-install-banner"),this.openSafariBanner=document.getElementById("open-safari-banner"),this.openSafariClose=document.getElementById("open-safari-close");var o=window.navigator.userAgent;console.log(o),o.search("Version")>-1&&(console.log("Safari"),this.downloadButton.innerHTML="Download App"),o.search("Chrome")>-1&&(this.downloadButton.innerHTML="Download App"),o.search("Firefox")>-1&&(this.downloadButton.innerHTML="Download App"),o.search("Edg")>-1&&(this.downloadButton.innerHTML="Download App"),o.search("OPR")>-1&&(console.log("Opera"),this.downloadButton.innerHTML="Download App"),o.search("Mobile")>-1&&(this.downloadButton.innerHTML="Download App",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",function(){console.log("Clicked Button"),n.iPhoneInstallBanner.style.display="block",n.closeIPhoneInstallBannerButton.addEventListener("click",function(){console.log("Closing iPhone Install banner"),n.iPhoneInstallBanner.style.display="none"})})),o.search("CriOS")>-1&&(this.downloadButton.innerHTML="Download App",this.downloadButton.addEventListener("click",function(){console.log("Clicked Button"),n.openSafariBanner.style.display="block",n.openSafariClose.addEventListener("click",function(){console.log("Closing iPhone Install banner"),n.openSafariBanner.style.display="none"})})),o.search("FxiOS")>-1&&(this.downloadButton.innerHTML="Download App",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",function(){console.log("Clicked Button"),n.openSafariBanner.style.display="block",n.iPhoneInstallBanner.style.display="none",n.openSafariClose.addEventListener("click",function(){console.log("Closing iPhone Install banner"),n.openSafariBanner.style.display="none"})})),o.search("EdgiOS")>-1&&(this.downloadButton.innerHTML="Download App",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",function(){n.openSafariBanner.style.display="block",n.iPhoneInstallBanner.style.display="none",n.openSafariClose.addEventListener("click",function(){console.log("Closing iPhone Install banner"),n.openSafariBanner.style.display="none"})})),o.search("OPT")>-1&&(this.downloadButton.innerHTML="Download App",this.downloadButton.style.display="block",this.downloadButton.addEventListener("click",function(){console.log("Clicked Button"),n.openSafariBanner.style.display="block",n.iPhoneInstallBanner.style.display="none",n.openSafariClose.addEventListener("click",function(){console.log("Closing iPhone Install banner"),n.openSafariBanner.style.display="none"})})),o.search("iPad")>-1&&(this.downloadButton.innerHTML="Download App",this.downloadButton.style.display="block"),o.search("Chrome")>-1&&o.search("Android")>-1&&(this.downloadButton.innerHTML="Download App",this.downloadButton.addEventListener("click",function(){n.iPhoneInstallBanner.style.display="none",n.showInstallBanner()})),o.search("Firefox")>-1&&o.search("Android")>-1&&(this.downloadButton.innerHTML="Download App"),o.search("EdgA")>-1&&(this.downloadButton.innerHTML="Download App"),o.search("SamsungBrowser")>-1&&(this.downloadButton.innerHTML="Download App"),console.log(window.navigator),window.matchMedia("(display-mode: standalone)").matches&&(console.log("display-mode is standalone"),this.iPhoneInstallBanner.style.display="none",this.openSafariBanner.style.display="none",this.downloadButton.style.display="none"),!0===window.navigator.standalone&&(console.log("display-mode is standalone"),this.iPhoneInstallBanner.style.display="none",this.openSafariBanner.style.display="none",this.downloadButton.style.display="none")}},{key:"showInstallBanner",value:function(){var n=this;console.log("Trying to Show Install Banner ..."),console.log(this.deferredPrompt),void 0===this.deferredPrompt&&(console.log("This page was already installed"),this.downloadButton.style.display="none"),null!=this.deferredPrompt&&(this.downloadButton.style.display="none",this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then(function(o){"accepted"===o.outcome?console.log("User accepted the A2HS prompt"):(n.downloadButton.style.display="block",n.downloadButton.style.margin="0 auto 90px auto",console.log("User dismissed the A2HS prompt")),n.deferredPrompt=null}))}},{key:"presentLoading",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loading.create({message:"Logging in...",duration:1e3,cssClass:"success-toast",keyboardClose:!0});case 2:return o=n.sent,n.next=5,o.present();case 5:return n.next=7,o.onDidDismiss();case 7:case"end":return n.stop()}},n,this)}))}},{key:"login",value:function(n){this.presentLoading(),this.auth.login(n)}},{key:"back",value:function(){this.router.navigate(["/landing"])}},{key:"download",value:function(){console.log("Attempting to download app..")}}])&&o(t.prototype,i),a&&o(t,a),e}(),y.\u0275fac=function(n){return new(n||y)(p.Hb(r.a),p.Hb(c.a),p.Hb(s.V),p.Hb(s.eb),p.Hb(l.g))},y.\u0275cmp=p.Bb({type:y,selectors:[["app-login"]],viewQuery:function(n,o){var e;1&n&&(p.tc(u,!0),p.tc(b,!0),p.tc(g,!0)),2&n&&(p.ec(e=p.Vb())&&(o.inputElement=e.first),p.ec(e=p.Vb())&&(o.initialLoadingIcon=e.first),p.ec(e=p.Vb())&&(o.initialLoadingISpinner=e.first))},decls:30,vars:7,consts:[[1,"backgound"],[1,"ion-justify-content-center","ion-align-items-center"],["size-xs","11","size-sm","10","size-md","6","size-lg","4","size-xl","3",1,"ion-text-center","form-wrapper",2,"padding","2em"],["id","logo","src","../../../../assets/icon/White-FYF-LOGO.png",1,"ion-hide-lg-up"],["id","logo","src","../../../../assets/icon/Logo 2.0.png",1,"ion-hide-lg-down"],[3,"formGroup","ngSubmit"],[1,"line-input"],["required","","placeholder","Email","inputmode","email","formControlName","email","type","email",3,"keyup.enter"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["required","","placeholder","Password","inputmode","text","formControlName","password","type","password",3,"keyup.enter"],["size","12"],["type","submit",1,"orange-button"],[1,"blue-button",3,"routerLink"],["id","forgot",3,"routerLink"],[1,"ion-justify-content-center"],["size","12",1,"ion-text-center"],["id","download-footer",2,"display","none"],["id","download-button",2,"border-radius","0"],["id","iphone-install-banner",2,"border-radius","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(n,o){1&n&&(p.Mb(0,"ion-content",0),p.Mb(1,"ion-grid"),p.Mb(2,"ion-row",1),p.Mb(3,"ion-col",2),p.Ib(4,"img",3),p.Ib(5,"img",4),p.Mb(6,"form",5),p.Ub("ngSubmit",function(){return o.login(o.loginForm.value)}),p.Mb(7,"ion-list",6),p.Mb(8,"ion-item"),p.Mb(9,"ion-input",7),p.Ub("keyup.enter",function(){return o.login(o.loginForm.value)}),p.Lb(),p.Lb(),p.Mb(10,"div",8),p.mc(11,f,2,1,"ng-container",9),p.Lb(),p.Mb(12,"ion-item"),p.Mb(13,"ion-input",10),p.Ub("keyup.enter",function(){return o.login(o.loginForm.value)}),p.Lb(),p.Lb(),p.Mb(14,"div",8),p.mc(15,w,2,1,"ng-container",9),p.Lb(),p.Lb(),p.Mb(16,"ion-col",11),p.Mb(17,"ion-button",12),p.nc(18,"Login"),p.Lb(),p.Ib(19,"br"),p.Mb(20,"ion-button",13),p.nc(21,"Sign Up "),p.Lb(),p.Ib(22,"br"),p.Mb(23,"ion-button",14),p.nc(24,"Forgot Password"),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Lb(),p.Mb(25,"ion-row",15),p.Ib(26,"ion-col",16),p.Lb(),p.Lb(),p.Lb(),p.Mb(27,"ion-footer",17),p.Ib(28,"button",18),p.Ib(29,"button",19),p.Lb()),2&n&&(p.xb(6),p.Zb("formGroup",o.loginForm),p.xb(5),p.Zb("ngForOf",o.validationMessasges.email),p.xb(4),p.Zb("ngForOf",o.validationMessasges.password),p.xb(5),p.Zb("routerLink",p.cc(5,L)),p.xb(3),p.Zb("routerLink",p.cc(6,v)))},directives:[s.o,s.t,s.I,s.n,r.o,r.j,r.c,s.C,s.x,s.w,s.db,r.m,r.i,r.b,a.i,s.g,s.bb,l.h,s.s,a.j],styles:[".backgound[_ngcontent-%COMP%]{--background:linear-gradient(180deg,rgba(0,85,165,0.7) 30%,#0055a5),url(schools-small.ed65ffb194cb1d06dbbe.png) no-repeat center center/cover}@media only screen and (max-width:600px){.backgound[_ngcontent-%COMP%]{--background:linear-gradient(180deg,rgba(0,85,165,0.7) 30%,#051422),url(schools-small.ed65ffb194cb1d06dbbe.png) no-repeat center center/cover;-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px)}}#logo[_ngcontent-%COMP%]{height:70px}.form-wrapper[_ngcontent-%COMP%]{border-radius:15px;padding:3em;margin:10% auto 0;background:hsla(0,0%,100%,.8);-webkit-backdrop-filter:blur(50px);box-shadow:1px 10px 26px rgba(0,0,0,.05)}@media only screen and (max-width:600px){.form-wrapper[_ngcontent-%COMP%]{background:none}}ion-footer[_ngcontent-%COMP%]{opacity:1;border:none}ion-button[_ngcontent-%COMP%]{margin:8px auto}#download-button[_ngcontent-%COMP%]{background:linear-gradient(90deg,#1fcc6d 19.625%,#1ecb6c 0,#17bf28 79.625%);-webkit-background:linear-gradient(90deg,#1fcc6d 19.625%,#1ecb6c 0,#17bf28 79.625%);color:#fff;width:100%;height:60px;font-size:1.4em;font-weight:600;margin:0;border-radius:0!important;transition:.5;position:fixed;bottom:0;left:0;display:none;-webkit-animation:slide-up .5s ease 1s forwards;animation:slide-up .5s ease 1s forwards;transform:translateY(100%)}@-webkit-keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0);opacity:1}}#sign-up-button[_ngcontent-%COMP%]{height:50px;--background:linear-gradient(#005191,#000)}#forgot[_ngcontent-%COMP%], #sign-up-button[_ngcontent-%COMP%]{width:200px;font-size:1em;font-weight:700;--color:#fff;opacity:0}#forgot[_ngcontent-%COMP%]{height:40px;--background:#1d1c1c;--background-hover:#474444;--transition:0.5s;-webkit-animation:slide-up .5s ease 1.5s forwards;animation:slide-up .5s ease 1.5s forwards}.grey-button[_ngcontent-%COMP%]{width:200px;height:40px;font-size:1em;font-weight:700;--border-width:1px;--border-style:solid;--border-color:#999;--background:none;--color:#999;--border-radius:5px}"]}),y)}],x=((k=function o(){n(this,o)}).\u0275mod=p.Fb({type:k}),k.\u0275inj=p.Eb({factory:function(n){return new(n||k)},imports:[[l.k.forChild(M)],l.k]}),k),I=((B=function o(){n(this,o)}).\u0275mod=p.Fb({type:B}),B.\u0275inj=p.Eb({factory:function(n){return new(n||B)},imports:[[a.b,r.d,s.T,x,r.l]]}),B)}}])}();