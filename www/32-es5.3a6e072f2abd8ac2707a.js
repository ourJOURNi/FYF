(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{OLDa:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),s=u("pMnS"),o=u("Ip0R"),r=u("oBZk"),a=u("ZZ/e"),i=u("gIcY"),b=u("mrSG"),c=u("lGQG"),d=u("9Z1F"),g=function(){function l(l,n,u,e){this.router=l,this.formBuilder=n,this.auth=u,this.alert=e,this.passwordsMatch=!1,this.code="",this.validationMessasges={email:[{type:"email",message:"Please enter a valid email address"}],password:[{type:"password",message:"Please enter a valid password."}]}}return l.prototype.ngOnInit=function(){this.credentialsForm=this.formBuilder.group({email:["",[i.p.required,i.p.email]],password:["",i.p.compose([i.p.minLength(8),i.p.required,i.p.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])],reTypePassword:["Lacrosse2",i.p.compose([i.p.minLength(8),i.p.required,i.p.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.formOnChanges()},l.prototype.ngAfterViewInit=function(){var l=this;setTimeout((function(){l.inputElement.setFocus()}),1e3)},l.prototype.ngOnDestroy=function(){console.log("Being Destroyed")},l.prototype.formOnChanges=function(){var l=this;console.log(this.credentialsForm),this.credentialsForm.valueChanges.subscribe((function(n){console.log(n),l.credentialsForm.statusChanges.subscribe((function(n){console.log(n),"VALID"===n&&(console.log("you did it bruh"),l.passwordsMatch=!0)})),l.credentialsForm.controls.password.value===l.credentialsForm.controls.reTypePassword.value&&l.credentialsForm.controls.password.touched&&l.credentialsForm.controls.email.valid&&console.log("Passwords Match"),l.credentialsForm.controls.password.value!==l.credentialsForm.controls.reTypePassword.value&&(console.log("Passwords dont match"),l.passwordsMatch=!1)}))},l.prototype.enterCodePage=function(l,n){var u=this;this.email=this.credentialsForm.controls.email.value,this.auth.doesUserExists(l,n).pipe(Object(d.a)((function(l){if(console.error(l),"User already registered with that email address."===l.error.msg)return u.userAlreadyExistAlert()}))).subscribe((function(e){console.log(e),!1===e.exists&&(u.auth.getLoginCredentials(l,n),console.log("Going to Enter Code Page"),u.router.navigate(["/personal-info/profile-picture/upload-resume/login-credentials/enter-code/",u.email]))}))},l.prototype.userAlreadyExistAlert=function(){return b.b(this,void 0,void 0,(function(){return b.e(this,(function(l){switch(l.label){case 0:return[4,this.alert.create({cssClass:"danger-alert",message:"This user already exists.",buttons:["OK"]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},l.prototype.cancel=function(){console.log("Sign up cancelled"),this.router.navigate([""])},l}(),p=u("ZYCi"),m=e.rb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.header[_ngcontent-%COMP%]{background:#edf3f8;height:auto}.text-header[_ngcontent-%COMP%]{font-size:1em;line-height:1.9em;color:#666;z-index:999;text-align:justify}.cancel-button[_ngcontent-%COMP%]{margin:0 10px}.orange-button[_ngcontent-%COMP%]{display:block;margin:100px auto;width:200px;-webkit-animation:none;animation:none;opacity:1}span[_ngcontent-%COMP%]{font-weight:900;font-size:1em;color:#005191}.badPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:1s ease-in .5s forwards password-icons;animation:1s ease-in .5s forwards password-icons}.badPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:1s ease-in forwards password-icons;animation:1s ease-in forwards password-icons}.goodPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:1s ease-in .5s forwards password-icons;animation:1s ease-in .5s forwards password-icons}.goodPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:1s ease-in forwards password-icons;animation:1s ease-in forwards password-icons}@-webkit-keyframes password-icons{0%{-webkit-transform:translateX(50px);transform:translateX(50px)}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes password-icons{0%{-webkit-transform:translateX(50px);transform:translateX(50px)}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}"]],data:{}});function h(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Lb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function f(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,h)),e.sb(2,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.credentialsForm.get("email").hasError(n.context.$implicit.type)&&(u.credentialsForm.get("email").dirty||u.credentialsForm.get("email").touched))}),null)}function w(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,3,"ion-button",[["class","badPassword"],["item-right",""]],null,null,null,r.O,r.d)),e.sb(1,49152,null,0,a.k,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,1,"ion-icon",[["name","close"],["style","color: #FF443B;"]],null,null,null,r.db,r.s)),e.sb(3,49152,null,0,a.C,[e.h,e.k,e.z],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"close")}),null)}function F(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,3,"ion-button",[["class","goodPassword"],["item-right",""]],null,null,null,r.O,r.d)),e.sb(1,49152,null,0,a.k,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,1,"ion-icon",[["name","checkmark"],["size","large"],["style","color: #21df82;"]],null,null,null,r.db,r.s)),e.sb(3,49152,null,0,a.C,[e.h,e.k,e.z],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,3,0,"checkmark","large")}),null)}function y(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Lb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function k(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,y)),e.sb(2,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.credentialsForm.get("password").hasError("pattern")&&(u.credentialsForm.get("password").dirty||u.credentialsForm.get("password").touched))}),null)}function C(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,3,"ion-button",[["class","badPassword"],["item-right",""]],null,null,null,r.O,r.d)),e.sb(1,49152,null,0,a.k,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,1,"ion-icon",[["name","close"],["style","color: #FF443B;"]],null,null,null,r.db,r.s)),e.sb(3,49152,null,0,a.C,[e.h,e.k,e.z],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"close")}),null)}function v(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,3,"ion-button",[["class","goodPassword"],["item-right",""]],null,null,null,r.O,r.d)),e.sb(1,49152,null,0,a.k,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,1,"ion-icon",[["name","checkmark"],["size","large"],["style","color: #21df82;"]],null,null,null,r.db,r.s)),e.sb(3,49152,null,0,a.C,[e.h,e.k,e.z],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,3,0,"checkmark","large")}),null)}function z(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Lb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function O(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,z)),e.sb(2,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.credentialsForm.get("reTypePassword").hasError("pattern")&&(u.credentialsForm.get("reTypePassword").dirty||u.credentialsForm.get("reTypePassword").touched))}),null)}function P(l){return e.Nb(0,[e.Jb(671088640,1,{inputElement:0}),(l()(),e.tb(1,0,null,null,1,"ion-header",[["style","display: none;"]],null,null,null,r.cb,r.r)),e.sb(2,49152,null,0,a.B,[e.h,e.k,e.z],null,null),(l()(),e.tb(3,0,null,null,79,"ion-content",[],null,null,null,r.W,r.l)),e.sb(4,49152,null,0,a.u,[e.h,e.k,e.z],null,null),(l()(),e.tb(5,0,null,0,77,"ion-grid",[],null,null,null,r.bb,r.q)),e.sb(6,49152,null,0,a.A,[e.h,e.k,e.z],null,null),(l()(),e.tb(7,0,null,0,13,"ion-row",[["class","ion-justify-content-center header"]],null,null,null,r.kb,r.z)),e.sb(8,49152,null,0,a.jb,[e.h,e.k,e.z],null,null),(l()(),e.tb(9,0,null,0,11,"ion-col",[["size-lg","6"],["size-md","7"],["size-xs","11"]],null,null,null,r.V,r.k)),e.sb(10,49152,null,0,a.t,[e.h,e.k,e.z],null,null),(l()(),e.tb(11,0,null,0,9,"h6",[["class","text-header"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Please create your login credentials. This is the information you will use to login with - an "])),(l()(),e.tb(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["email"])),(l()(),e.Lb(-1,null,[" and a "])),(l()(),e.tb(16,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["password"])),(l()(),e.Lb(-1,null,[". Your password needs to be "])),(l()(),e.tb(19,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["at least 8 characters long, with at least 1 uppercase letter and one number."])),(l()(),e.tb(21,0,null,0,61,"ion-row",[["class","ion-justify-content-center"]],null,null,null,r.kb,r.z)),e.sb(22,49152,null,0,a.jb,[e.h,e.k,e.z],null,null),(l()(),e.tb(23,0,null,0,59,"ion-col",[["size-lg","5"],["size-md","7"],["size-xs","11"]],null,null,null,r.V,r.k)),e.sb(24,49152,null,0,a.t,[e.h,e.k,e.z],null,null),(l()(),e.tb(25,0,null,0,57,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,s=l.component;return"submit"===n&&(t=!1!==e.Fb(l,27).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Fb(l,27).onReset()&&t),"ngSubmit"===n&&(t=!1!==s.enterCodePage(s.credentialsForm.value.email,s.credentialsForm.value.password)&&t),t}),null,null)),e.sb(26,16384,null,0,i.t,[],null,null),e.sb(27,540672,null,0,i.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Ib(2048,null,i.a,null,[i.d]),e.sb(29,16384,null,0,i.l,[[4,i.a]],null,null),(l()(),e.tb(30,0,null,null,52,"ion-list",[["class","line-input"]],null,null,null,r.hb,r.w)),e.sb(31,49152,null,0,a.O,[e.h,e.k,e.z],null,null),(l()(),e.tb(32,0,null,0,8,"ion-item",[],null,null,null,r.fb,r.u)),e.sb(33,49152,null,0,a.H,[e.h,e.k,e.z],null,null),(l()(),e.tb(34,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,35)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,35)._handleInputEvent(u.target)&&t),t}),r.eb,r.t)),e.sb(35,16384,null,0,a.Ob,[e.k],null,null),e.Ib(1024,null,i.i,(function(l){return[l]}),[a.Ob]),e.sb(37,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),e.Ib(2048,null,i.j,null,[i.c]),e.sb(39,16384,null,0,i.k,[[4,i.j]],null,null),e.sb(40,49152,[[1,4],["autoFucousInput",4]],0,a.G,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.tb(41,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,f)),e.sb(43,278528,null,0,o.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(44,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.tb(45,0,null,0,14,"ion-item",[],null,null,null,r.fb,r.u)),e.sb(46,49152,null,0,a.H,[e.h,e.k,e.z],null,null),(l()(),e.tb(47,0,null,0,8,"ion-input",[["formControlName","password"],["inputmode","text"],["placeholder","enter password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,50)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,50)._handleInputEvent(u.target)&&t),t}),r.eb,r.t)),e.sb(48,16384,null,0,i.o,[],{required:[0,"required"]},null),e.Ib(1024,null,i.h,(function(l){return[l]}),[i.o]),e.sb(50,16384,null,0,a.Ob,[e.k],null,null),e.Ib(1024,null,i.i,(function(l){return[l]}),[a.Ob]),e.sb(52,671744,null,0,i.c,[[3,i.a],[6,i.h],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),e.Ib(2048,null,i.j,null,[i.c]),e.sb(54,16384,null,0,i.k,[[4,i.j]],null,null),e.sb(55,49152,null,0,a.G,[e.h,e.k,e.z],{inputmode:[0,"inputmode"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.ib(16777216,null,0,1,null,w)),e.sb(57,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,F)),e.sb(59,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.tb(60,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,k)),e.sb(62,278528,null,0,o.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(63,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.tb(64,0,null,0,12,"ion-item",[],null,null,null,r.fb,r.u)),e.sb(65,49152,null,0,a.H,[e.h,e.k,e.z],null,null),(l()(),e.tb(66,0,null,0,6,"ion-input",[["formControlName","reTypePassword"],["placeholder","re-type password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,67)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,67)._handleInputEvent(u.target)&&t),t}),r.eb,r.t)),e.sb(67,16384,null,0,a.Ob,[e.k],null,null),e.Ib(1024,null,i.i,(function(l){return[l]}),[a.Ob]),e.sb(69,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),e.Ib(2048,null,i.j,null,[i.c]),e.sb(71,16384,null,0,i.k,[[4,i.j]],null,null),e.sb(72,49152,null,0,a.G,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.ib(16777216,null,0,1,null,C)),e.sb(74,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,v)),e.sb(76,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.tb(77,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,O)),e.sb(79,278528,null,0,o.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(80,0,null,0,2,"ion-button",[["class","orange-button"],["type","submit"]],null,null,null,r.O,r.d)),e.sb(81,49152,null,0,a.k,[e.h,e.k,e.z],{disabled:[0,"disabled"],type:[1,"type"]},null),(l()(),e.Lb(-1,0,["NEXT"]))],(function(l,n){var u=n.component;l(n,27,0,u.credentialsForm),l(n,37,0,"email"),l(n,40,0,"email","email"),l(n,43,0,u.validationMessasges.email),l(n,48,0,""),l(n,52,0,"password"),l(n,55,0,"text","enter password","","password"),l(n,57,0,!u.passwordsMatch),l(n,59,0,u.passwordsMatch),l(n,62,0,u.validationMessasges.password),l(n,69,0,"reTypePassword"),l(n,72,0,"re-type password","password"),l(n,74,0,!u.passwordsMatch),l(n,76,0,u.passwordsMatch),l(n,79,0,u.validationMessasges.password),l(n,81,0,!u.passwordsMatch,"submit")}),(function(l,n){l(n,25,0,e.Fb(n,29).ngClassUntouched,e.Fb(n,29).ngClassTouched,e.Fb(n,29).ngClassPristine,e.Fb(n,29).ngClassDirty,e.Fb(n,29).ngClassValid,e.Fb(n,29).ngClassInvalid,e.Fb(n,29).ngClassPending),l(n,34,0,e.Fb(n,39).ngClassUntouched,e.Fb(n,39).ngClassTouched,e.Fb(n,39).ngClassPristine,e.Fb(n,39).ngClassDirty,e.Fb(n,39).ngClassValid,e.Fb(n,39).ngClassInvalid,e.Fb(n,39).ngClassPending),l(n,47,0,e.Fb(n,48).required?"":null,e.Fb(n,54).ngClassUntouched,e.Fb(n,54).ngClassTouched,e.Fb(n,54).ngClassPristine,e.Fb(n,54).ngClassDirty,e.Fb(n,54).ngClassValid,e.Fb(n,54).ngClassInvalid,e.Fb(n,54).ngClassPending),l(n,66,0,e.Fb(n,71).ngClassUntouched,e.Fb(n,71).ngClassTouched,e.Fb(n,71).ngClassPristine,e.Fb(n,71).ngClassDirty,e.Fb(n,71).ngClassValid,e.Fb(n,71).ngClassInvalid,e.Fb(n,71).ngClassPending)}))}function I(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"app-login-credentials",[],null,null,null,P,m)),e.sb(1,4440064,null,0,g,[p.m,i.b,c.a,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var L=e.pb("app-login-credentials",g,I,{},{},[]),M=function(){return u.e(31).then(u.bind(null,"7CaW")).then((function(l){return l.EnterCodePageModuleNgFactory}))},x=function(){return function(){}}();u.d(n,"LoginCredentialsPageModuleNgFactory",(function(){return D}));var D=e.qb(t,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[s.a,L]],[3,e.j],e.x]),e.Db(4608,o.l,o.k,[e.u,[2,o.s]]),e.Db(4608,i.r,i.r,[]),e.Db(4608,a.b,a.b,[e.z,e.g]),e.Db(4608,a.Hb,a.Hb,[a.b,e.j,e.q]),e.Db(4608,a.Lb,a.Lb,[a.b,e.j,e.q]),e.Db(4608,i.b,i.b,[]),e.Db(1073742336,o.c,o.c,[]),e.Db(1073742336,i.q,i.q,[]),e.Db(1073742336,i.e,i.e,[]),e.Db(1073742336,a.Eb,a.Eb,[]),e.Db(1073742336,i.n,i.n,[]),e.Db(1073742336,p.q,p.q,[[2,p.v],[2,p.m]]),e.Db(1073742336,x,x,[]),e.Db(1073742336,t,t,[]),e.Db(1024,p.k,(function(){return[[{path:"",component:g},{path:"enter-code/:email",loadChildren:M}]]}),[])])}))}}]);