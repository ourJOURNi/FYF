(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{wQpE:function(l,n,s){"use strict";s.r(n);var o=s("8Y7J");class u{}var e=s("pMnS"),a=s("oBZk"),t=s("ZZ/e"),r=s("s7LF"),i=s("SVse"),b=s("mrSG"),d=s("lGQG"),c=s("AytR");class g{constructor(l,n,s,o,u){this.formBuilder=l,this.router=n,this.auth=s,this.activatedRoute=o,this.toast=u,this.BACKEND_URL=c.a.url,this.passwordsMatch=!1,this.validationMessasges={password:[{type:"password",message:"Please enter a valid password."}]}}ngOnInit(){this.newPasswordForm=this.formBuilder.group({newPassword:["",r.o.required],reTypeNewPassword:["",r.o.required]}),this.userEmail=this.activatedRoute.snapshot.paramMap.get("email"),console.log("Email: "+this.userEmail),this.formOnChanges()}formOnChanges(){console.log(this.newPasswordForm),this.newPasswordForm.valueChanges.subscribe(l=>{console.log(l),this.newPasswordForm.statusChanges.subscribe(l=>{console.log(l),"VALID"===l&&(console.log("you did it bruh"),this.passwordsMatch=!0)}),this.newPasswordForm.controls.newPassword.value===this.newPasswordForm.controls.reTypePassword.value&&this.newPasswordForm.controls.newPassword.touched&&console.log("Passwords Match"),this.newPasswordForm.controls.newPassword.value!==this.newPasswordForm.controls.reTypePassword.value&&(console.log("Passwords Match"),this.passwordsMatch=!1)})}goToConfirmPage(){return b.b(this,void 0,void 0,(function*(){const l=this.userEmail;let n=this.newPasswordForm.value.newPassword;if(n!==this.newPasswordForm.value.reTypeNewPassword)return this.presentToast(),console.log("passwords do not match");yield this.auth.forgotPassword(l,n),yield console.log("Going to Confirm Password Change Page"),yield this.router.navigate(["/enter-email/enter-code/:email/new-password/:email/confirm"])}))}presentToast(){return b.b(this,void 0,void 0,(function*(){(yield this.toast.create({message:"The two passwords you entered do not match. Please try again.",duration:2e3})).present()}))}cancel(){console.log("Forgotten password cancelled"),this.router.navigate([""])}}var w=s("iInd"),p=o.zb({encapsulation:0,styles:[["span[_ngcontent-%COMP%]{font-weight:900;font-size:1.2em;color:#005191}.badPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:1s ease-in .5s forwards password-icons;animation:1s ease-in .5s forwards password-icons}.badPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:1s ease-in forwards password-icons;animation:1s ease-in forwards password-icons}.goodPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:1s ease-in .5s forwards password-icons;animation:1s ease-in .5s forwards password-icons}.goodPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:1s ease-in forwards password-icons;animation:1s ease-in forwards password-icons}@-webkit-keyframes password-icons{0%{-webkit-transform:translateX(50px);transform:translateX(50px)}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes password-icons{0%{-webkit-transform:translateX(50px);transform:translateX(50px)}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}"]],data:{}});function m(l){return o.Tb(0,[(l()(),o.Bb(0,0,null,null,3,"ion-button",[["class","badPassword"],["item-right",""]],null,null,null,a.R,a.d)),o.Ab(1,49152,null,0,t.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,1,"ion-icon",[["name","close"],["style","color: #FF443B;"]],null,null,null,a.gb,a.s)),o.Ab(3,49152,null,0,t.D,[o.j,o.p,o.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"close")}),null)}function h(l){return o.Tb(0,[(l()(),o.Bb(0,0,null,null,3,"ion-button",[["class","goodPassword"],["item-right",""]],null,null,null,a.R,a.d)),o.Ab(1,49152,null,0,t.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,1,"ion-icon",[["name","checkmark"],["style","color: #21df82;"]],null,null,null,a.gb,a.s)),o.Ab(3,49152,null,0,t.D,[o.j,o.p,o.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"checkmark")}),null)}function f(l){return o.Tb(0,[(l()(),o.Bb(0,0,null,null,3,"ion-button",[["class","badPassword"],["item-right",""]],null,null,null,a.R,a.d)),o.Ab(1,49152,null,0,t.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,1,"ion-icon",[["name","close"],["style","color: #FF443B;"]],null,null,null,a.gb,a.s)),o.Ab(3,49152,null,0,t.D,[o.j,o.p,o.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"close")}),null)}function P(l){return o.Tb(0,[(l()(),o.Bb(0,0,null,null,3,"ion-button",[["class","goodPassword"],["item-right",""]],null,null,null,a.R,a.d)),o.Ab(1,49152,null,0,t.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,1,"ion-icon",[["name","checkmark"],["style","color: #21df82;"]],null,null,null,a.gb,a.s)),o.Ab(3,49152,null,0,t.D,[o.j,o.p,o.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"checkmark")}),null)}function y(l){return o.Tb(0,[(l()(),o.Bb(0,0,null,null,9,"ion-header",[],null,null,null,a.fb,a.r)),o.Ab(1,49152,null,0,t.C,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,7,"ion-toolbar",[],null,null,null,a.Bb,a.N)),o.Ab(3,49152,null,0,t.Db,[o.j,o.p,o.F],null,null),(l()(),o.Bb(4,0,null,0,2,"ion-title",[],null,null,null,a.Ab,a.M)),o.Ab(5,49152,null,0,t.Bb,[o.j,o.p,o.F],null,null),(l()(),o.Sb(-1,0,["New Password"])),(l()(),o.Bb(7,0,null,0,2,"ion-button",[["class","cancel-button"],["slot","end"]],null,[[null,"click"]],(function(l,n,s){var o=!0;return"click"===n&&(o=!1!==l.component.cancel()&&o),o}),a.R,a.d)),o.Ab(8,49152,null,0,t.l,[o.j,o.p,o.F],null,null),(l()(),o.Sb(-1,0,[" cancel "])),(l()(),o.Bb(10,0,null,null,45,"ion-content",[],null,null,null,a.Z,a.l)),o.Ab(11,49152,null,0,t.v,[o.j,o.p,o.F],null,null),(l()(),o.Bb(12,0,null,0,43,"ion-grid",[["class","ion-text-center"],["fixed",""]],null,null,null,a.eb,a.q)),o.Ab(13,49152,null,0,t.B,[o.j,o.p,o.F],{fixed:[0,"fixed"]},null),(l()(),o.Bb(14,0,null,0,41,"ion-row",[],null,null,null,a.qb,a.C)),o.Ab(15,49152,null,0,t.kb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(16,0,null,0,39,"ion-col",[["offset","1"],["size","10"]],null,null,null,a.Y,a.k)),o.Ab(17,49152,null,0,t.u,[o.j,o.p,o.F],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),o.Bb(18,0,null,0,1,"h6",[["style","background: rgba(245,245,245,0.7); padding: 20px; margin: 30px 0 30px 0;"]],null,null,null,null,null)),(l()(),o.Sb(-1,null,["Please enter your new password."])),(l()(),o.Bb(20,0,null,0,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,s){var u=!0,e=l.component;return"submit"===n&&(u=!1!==o.Nb(l,22).onSubmit(s)&&u),"reset"===n&&(u=!1!==o.Nb(l,22).onReset()&&u),"ngSubmit"===n&&(u=!1!==e.goToConfirmPage()&&u),u}),null,null)),o.Ab(21,16384,null,0,r.s,[],null,null),o.Ab(22,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Pb(2048,null,r.a,null,[r.d]),o.Ab(24,16384,null,0,r.l,[[4,r.a]],null,null),(l()(),o.Bb(25,0,null,null,30,"ion-list",[["class","line-input"]],null,null,null,a.lb,a.w)),o.Ab(26,49152,null,0,t.P,[o.j,o.p,o.F],null,null),(l()(),o.Bb(27,0,null,0,12,"ion-item",[],null,null,null,a.ib,a.u)),o.Ab(28,49152,null,0,t.I,[o.j,o.p,o.F],null,null),(l()(),o.Bb(29,0,null,0,6,"ion-input",[["formControlName","newPassword"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,s){var u=!0;return"ionBlur"===n&&(u=!1!==o.Nb(l,30)._handleBlurEvent(s.target)&&u),"ionChange"===n&&(u=!1!==o.Nb(l,30)._handleInputEvent(s.target)&&u),u}),a.hb,a.t)),o.Ab(30,16384,null,0,t.Pb,[o.p],null,null),o.Pb(1024,null,r.i,(function(l){return[l]}),[t.Pb]),o.Ab(32,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.r]],{name:[0,"name"]},null),o.Pb(2048,null,r.j,null,[r.c]),o.Ab(34,16384,null,0,r.k,[[4,r.j]],null,null),o.Ab(35,49152,null,0,t.H,[o.j,o.p,o.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.qb(16777216,null,0,1,null,m)),o.Ab(37,16384,null,0,i.i,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(16777216,null,0,1,null,h)),o.Ab(39,16384,null,0,i.i,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.Bb(40,0,null,0,12,"ion-item",[],null,null,null,a.ib,a.u)),o.Ab(41,49152,null,0,t.I,[o.j,o.p,o.F],null,null),(l()(),o.Bb(42,0,null,0,6,"ion-input",[["formControlName","reTypeNewPassword"],["placeholder","Re-type Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,s){var u=!0;return"ionBlur"===n&&(u=!1!==o.Nb(l,43)._handleBlurEvent(s.target)&&u),"ionChange"===n&&(u=!1!==o.Nb(l,43)._handleInputEvent(s.target)&&u),u}),a.hb,a.t)),o.Ab(43,16384,null,0,t.Pb,[o.p],null,null),o.Pb(1024,null,r.i,(function(l){return[l]}),[t.Pb]),o.Ab(45,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.r]],{name:[0,"name"]},null),o.Pb(2048,null,r.j,null,[r.c]),o.Ab(47,16384,null,0,r.k,[[4,r.j]],null,null),o.Ab(48,49152,null,0,t.H,[o.j,o.p,o.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.qb(16777216,null,0,1,null,f)),o.Ab(50,16384,null,0,i.i,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(16777216,null,0,1,null,P)),o.Ab(52,16384,null,0,i.i,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(l()(),o.Bb(53,0,null,0,2,"ion-button",[["class","orange-button"],["type","submit"]],null,null,null,a.R,a.d)),o.Ab(54,49152,null,0,t.l,[o.j,o.p,o.F],{type:[0,"type"]},null),(l()(),o.Sb(-1,0,["SET NEW PASSWORD"]))],(function(l,n){var s=n.component;l(n,13,0,""),l(n,17,0,"1","10"),l(n,22,0,s.newPasswordForm),l(n,32,0,"newPassword"),l(n,35,0,"Password","password"),l(n,37,0,!s.passwordsMatch),l(n,39,0,s.passwordsMatch),l(n,45,0,"reTypeNewPassword"),l(n,48,0,"Re-type Password","password"),l(n,50,0,!s.passwordsMatch),l(n,52,0,s.passwordsMatch),l(n,54,0,"submit")}),(function(l,n){l(n,20,0,o.Nb(n,24).ngClassUntouched,o.Nb(n,24).ngClassTouched,o.Nb(n,24).ngClassPristine,o.Nb(n,24).ngClassDirty,o.Nb(n,24).ngClassValid,o.Nb(n,24).ngClassInvalid,o.Nb(n,24).ngClassPending),l(n,29,0,o.Nb(n,34).ngClassUntouched,o.Nb(n,34).ngClassTouched,o.Nb(n,34).ngClassPristine,o.Nb(n,34).ngClassDirty,o.Nb(n,34).ngClassValid,o.Nb(n,34).ngClassInvalid,o.Nb(n,34).ngClassPending),l(n,42,0,o.Nb(n,47).ngClassUntouched,o.Nb(n,47).ngClassTouched,o.Nb(n,47).ngClassPristine,o.Nb(n,47).ngClassDirty,o.Nb(n,47).ngClassValid,o.Nb(n,47).ngClassInvalid,o.Nb(n,47).ngClassPending)}))}function F(l){return o.Tb(0,[(l()(),o.Bb(0,0,null,null,1,"app-new-password",[],null,null,null,y,p)),o.Ab(1,114688,null,0,g,[r.b,w.m,d.a,w.a,t.Qb],null,null)],(function(l,n){l(n,1,0)}),null)}var C=o.xb("app-new-password",g,F,{},{},[]);const v=()=>s.e(26).then(s.bind(null,"F170")).then(l=>l.ConfirmPageModuleNgFactory);class A{}s.d(n,"NewPasswordPageModuleNgFactory",(function(){return B}));var B=o.yb(u,[],(function(l){return o.Kb([o.Lb(512,o.m,o.jb,[[8,[e.a,C]],[3,o.m],o.D]),o.Lb(4608,i.k,i.j,[o.z,[2,i.q]]),o.Lb(4608,r.q,r.q,[]),o.Lb(4608,r.b,r.b,[]),o.Lb(4608,t.c,t.c,[o.F,o.g]),o.Lb(4608,t.Ib,t.Ib,[t.c,o.m,o.w]),o.Lb(4608,t.Lb,t.Lb,[t.c,o.m,o.w]),o.Lb(1073742336,i.b,i.b,[]),o.Lb(1073742336,r.p,r.p,[]),o.Lb(1073742336,r.e,r.e,[]),o.Lb(1073742336,r.m,r.m,[]),o.Lb(1073742336,t.Fb,t.Fb,[]),o.Lb(1073742336,w.o,w.o,[[2,w.t],[2,w.m]]),o.Lb(1073742336,A,A,[]),o.Lb(1073742336,u,u,[]),o.Lb(1024,w.k,(function(){return[[{path:"",component:g},{path:"confirm",loadChildren:v}]]}),[])])}))}}]);