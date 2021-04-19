!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{yucT:function(o,t,i){"use strict";i.r(t),i.d(t,"EnterEmailPageModule",function(){return w});var r=i("ofXK"),a=i("3Pt+"),s=i("TEn/"),c=i("tyNb"),b=i("mrSG"),l=i("lGQG"),u=i("fXoL");function d(e,n){if(1&e&&(u.Mb(0,"div",25),u.nc(1),u.Lb()),2&e){var o=u.Wb().$implicit;u.xb(1),u.pc(" ",o.message," ")}}function g(e,n){if(1&e&&(u.Kb(0),u.mc(1,d,2,1,"div",24),u.Jb()),2&e){var o=n.$implicit,t=u.Wb();u.xb(1),u.Zb("ngIf",t.forgotPasswordForm.get("email").hasError(o.type)&&(t.forgotPasswordForm.get("email").dirty||t.forgotPasswordForm.get("email").touched))}}var m,f,p,h=[{path:"",component:(m=function(){function o(n,t,i){e(this,o),this.formBuilder=n,this.router=t,this.auth=i,this.validationMessasges={email:[{type:"email",message:"Please enter a valid email address"}]}}var t,i,r;return t=o,(i=[{key:"ngOnInit",value:function(){this.forgotPasswordForm=this.formBuilder.group({email:["",[a.n.email,a.n.required]]})}},{key:"goToEnterCodePage",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var o=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Going to Enter Code Page"),n.next=3,this.auth.checkIfUserExits(e).subscribe(function(n){console.log(n),o.router.navigate(["/enter-email/enter-code/",e])});case 3:case"end":return n.stop()}},n,this)}))}},{key:"cancel",value:function(){console.log("Forgotten password cancelled"),this.router.navigate([""])}},{key:"back",value:function(){this.router.navigate([""])}}])&&n(t.prototype,i),r&&n(t,r),o}(),m.\u0275fac=function(e){return new(e||m)(u.Hb(a.a),u.Hb(c.g),u.Hb(l.a))},m.\u0275cmp=u.Bb({type:m,selectors:[["app-enter-email"]],decls:36,vars:2,consts:[[1,"ion-hide-lg-up"],["mode","md"],["slot","start"],["size","small"],[1,"spacer","ion-hide-lg-down"],[1,"ion-text-center"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../../../assets/icon/Logo 2.0.svg","alt","","srcset",""],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size","12"],[1,"text-header"],[2,"font-weight","700"],["size-xs","11","size-sm","10","size-md","10","size-lg","6","size-xl","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["placeholder","Enter Email Address","required","","formControlName","email","inputmode","email","type","email"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","submit",1,"orange-button"],[1,"cancel-button",3,"click"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,n){1&e&&(u.Mb(0,"ion-header",0),u.Mb(1,"ion-toolbar",1),u.Mb(2,"ion-buttons",2),u.Ib(3,"ion-back-button"),u.Lb(),u.Mb(4,"ion-title",3),u.nc(5,"Forgot Password"),u.Lb(),u.Lb(),u.Lb(),u.Mb(6,"ion-content"),u.Ib(7,"div",4),u.Mb(8,"ion-grid",5),u.Mb(9,"ion-row",6),u.Mb(10,"ion-col",7),u.Mb(11,"ion-toolbar",8),u.Mb(12,"ion-buttons",2),u.Ib(13,"img",9),u.Lb(),u.Mb(14,"ion-buttons",10),u.Mb(15,"ion-button",11),u.Ub("click",function(){return n.back()}),u.nc(16," Back "),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(17,"ion-row",12),u.Mb(18,"ion-col",13),u.Mb(19,"h6",14),u.nc(20,"Please enter your email address. An email will be sent to you with a "),u.Mb(21,"span",15),u.nc(22,"6 character code"),u.Lb(),u.nc(23,". "),u.Lb(),u.Lb(),u.Mb(24,"ion-col",16),u.Mb(25,"form",17),u.Ub("ngSubmit",function(){return n.goToEnterCodePage(n.forgotPasswordForm.value.email)}),u.Mb(26,"ion-list",18),u.Mb(27,"ion-item"),u.Ib(28,"ion-input",19),u.Lb(),u.Mb(29,"div",20),u.mc(30,g,2,1,"ng-container",21),u.Lb(),u.Lb(),u.Mb(31,"ion-button",22),u.nc(32,"GET CODE"),u.Lb(),u.Ib(33,"br"),u.Mb(34,"ion-button",23),u.Ub("click",function(){return n.cancel()}),u.nc(35,"CANCEL"),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb()),2&e&&(u.xb(25),u.Zb("formGroup",n.forgotPasswordForm),u.xb(5),u.Zb("ngForOf",n.validationMessasges.email))},directives:[s.u,s.S,s.h,s.e,s.f,s.R,s.o,s.t,s.I,s.n,s.g,a.o,a.j,a.c,s.C,s.x,s.w,s.db,a.m,a.i,a.b,r.i,r.j],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid rgba(51,51,51,.14901960784313725)}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0c375f);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.cancel-button[_ngcontent-%COMP%]{color:#e4405f;--background:none;--background-hover:linear-gradient(#f15b77,#e4405f);height:40px;width:200px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}"]}),m)},{path:"enter-code/:email",loadChildren:function(){return i.e(7).then(i.bind(null,"veoP")).then(function(e){return e.EnterCodePageModule})}}],v=((p=function n(){e(this,n)}).\u0275mod=u.Fb({type:p}),p.\u0275inj=u.Eb({factory:function(e){return new(e||p)},imports:[[c.k.forChild(h)],c.k]}),p),w=((f=function n(){e(this,n)}).\u0275mod=u.Fb({type:f}),f.\u0275inj=u.Eb({factory:function(e){return new(e||f)},imports:[[r.b,a.d,s.T,a.l,v]]}),f)}}])}();