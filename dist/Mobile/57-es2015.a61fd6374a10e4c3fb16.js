(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{Zdun:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var r=u("pMnS"),i=u("SVse"),o=u("oBZk"),s=u("ZZ/e"),b=u("s7LF"),a=u("mrSG"),h=u("lGQG"),c=u("Aso2");class d{constructor(l,n,u,e,t){this.formBuilder=l,this.router=n,this.auth=u,this.alertController=e,this.profile=t,this.activeEmail=this.profile.email.getValue(),this.activePhone=this.profile.phone.getValue(),this.disabled=!0,this.validationMessasges={phone:[{type:"text",message:"Phone number has to be 10 digits long"}]},this.activeEmail=this.auth.user.email}ngOnInit(){this.changePhone=this.formBuilder.group({newNumber:["",b.p.compose([b.p.maxLength(10),b.p.minLength(10),b.p.required])],password:["",b.p.required]}),this.changePhone.valueChanges.subscribe(l=>{setTimeout(()=>{this.formValid=!!this.changePhone.valid},100)})}back(){console.log("change phone number cancelled"),this.router.navigate(["/home/profile/edit-profile-page"])}presentAlert(){return a.b(this,void 0,void 0,(function*(){const l=yield this.alertController.create({cssClass:"danger-alert",header:"Already Using This Number",message:"You are already using this phone number.",buttons:[{text:"OK"}]});yield l.present()}))}confirmChangedPhoneNumber(l,n){l==this.activePhone?this.presentAlert():this.profile.changePhone(this.activeEmail,l,n)}}var g=u("iInd"),p=e.pb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset}"]],data:{}});function m(l){return e.Lb(0,[(l()(),e.rb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Jb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function f(l){return e.Lb(0,[(l()(),e.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,m)),e.qb(2,16384,null,0,i.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.changePhone.get("newNumber").hasError(n.context.$implicit.message)&&(u.changePhone.get("newNumber").dirty||u.changePhone.get("newNumber").touched))}),null)}function q(l){return e.Lb(0,[(l()(),e.rb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,o.cb,o.r)),e.qb(1,49152,null,0,s.B,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,9,"ion-toolbar",[],null,null,null,o.vb,o.K)),e.qb(3,49152,null,0,s.Cb,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.P,o.e)),e.qb(5,49152,null,0,s.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Db(l,8).onClick(u)&&t),t}),o.N,o.c)),e.qb(7,49152,null,0,s.g,[e.h,e.k,e.x],null,null),e.qb(8,16384,null,0,s.h,[[2,s.ib],s.Ib],null,null),(l()(),e.rb(9,0,null,0,2,"ion-title",[],null,null,null,o.ub,o.J)),e.qb(10,49152,null,0,s.Ab,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Change Phone Number"])),(l()(),e.rb(12,0,null,null,60,"ion-content",[],null,null,null,o.W,o.l)),e.qb(13,49152,null,0,s.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(14,0,null,0,58,"ion-grid",[["class","ion-text-center"],["fixed",""]],null,null,null,o.bb,o.q)),e.qb(15,49152,null,0,s.A,[e.h,e.k,e.x],{fixed:[0,"fixed"]},null),(l()(),e.rb(16,0,null,0,10,"ion-row",[["class","ion-hide-md-down"],["style","margin: 5% 0% 3% 0%;"]],null,null,null,o.kb,o.z)),e.qb(17,49152,null,0,s.jb,[e.h,e.k,e.x],null,null),(l()(),e.rb(18,0,null,0,3,"ion-col",[["offset","1.8"],["size","4"]],null,null,null,o.V,o.k)),e.qb(19,49152,null,0,s.t,[e.h,e.k,e.x],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),e.rb(20,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Change Phone Number"])),(l()(),e.rb(22,0,null,0,4,"ion-col",[["push","2.1"],["size","2"]],null,null,null,o.V,o.k)),e.qb(23,49152,null,0,s.t,[e.h,e.k,e.x],{push:[0,"push"],size:[1,"size"]},null),(l()(),e.rb(24,0,null,0,2,"ion-button",[["class","blue-button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.back()&&e),e}),o.O,o.d)),e.qb(25,49152,null,0,s.k,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,[" Back "])),(l()(),e.rb(27,0,null,0,4,"ion-row",[["class","ion-justify-content-center ion-hide-md-down"]],null,null,null,o.kb,o.z)),e.qb(28,49152,null,0,s.jb,[e.h,e.k,e.x],null,null),(l()(),e.rb(29,0,null,0,2,"ion-col",[["size","10"]],null,null,null,o.V,o.k)),e.qb(30,49152,null,0,s.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(31,0,null,0,0,"hr",[["style","background-color: #00000044;"]],null,null,null,null,null)),(l()(),e.rb(32,0,null,0,40,"ion-row",[["class","ion-justify-content-center"]],null,null,null,o.kb,o.z)),e.qb(33,49152,null,0,s.jb,[e.h,e.k,e.x],null,null),(l()(),e.rb(34,0,null,0,38,"ion-col",[["size-lg","6"],["size-md","8"],["size-sm","10"],["size-xs","11"]],null,null,null,o.V,o.k)),e.qb(35,49152,null,0,s.t,[e.h,e.k,e.x],null,null),(l()(),e.rb(36,0,null,0,1,"h6",[["class","text-header"],["style","width: unset;"]],null,null,null,null,null)),(l()(),e.Jb(37,null,["Current Phone Number: ",""])),(l()(),e.rb(38,0,null,0,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,r=l.component;return"submit"===n&&(t=!1!==e.Db(l,40).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Db(l,40).onReset()&&t),"ngSubmit"===n&&(t=!1!==r.confirmChangedPhoneNumber(r.changePhone.controls.newNumber.value,r.changePhone.controls.password.value)&&t),t}),null,null)),e.qb(39,16384,null,0,b.t,[],null,null),e.qb(40,540672,null,0,b.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Gb(2048,null,b.a,null,[b.d]),e.qb(42,16384,null,0,b.l,[[4,b.a]],null,null),(l()(),e.rb(43,0,null,null,26,"ion-list",[["class","line-input"]],null,null,null,o.hb,o.w)),e.qb(44,49152,null,0,s.O,[e.h,e.k,e.x],null,null),(l()(),e.rb(45,0,null,0,10,"ion-item",[],null,null,null,o.fb,o.u)),e.qb(46,49152,null,0,s.H,[e.h,e.k,e.x],null,null),(l()(),e.rb(47,0,null,0,8,"ion-input",[["formControlName","newNumber"],["maxLength","10"],["placeholder","New Number  - xxx - xxx - xxxx"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,r=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,50)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,50)._handleInputEvent(u.target)&&t),"keyup.enter"===n&&(t=!1!==(r.formValid?r.confirmChangedPhoneNumber(r.changePhone.controls.newNumber.value,r.changePhone.controls.password.value):null)&&t),t}),o.eb,o.t)),e.qb(48,16384,null,0,b.o,[],{required:[0,"required"]},null),e.Gb(1024,null,b.h,(function(l){return[l]}),[b.o]),e.qb(50,16384,null,0,s.Ob,[e.k],null,null),e.Gb(1024,null,b.i,(function(l){return[l]}),[s.Ob]),e.qb(52,671744,null,0,b.c,[[3,b.a],[6,b.h],[8,null],[6,b.i],[2,b.s]],{name:[0,"name"]},null),e.Gb(2048,null,b.j,null,[b.c]),e.qb(54,16384,null,0,b.k,[[4,b.j]],null,null),e.qb(55,49152,null,0,s.G,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.rb(56,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,f)),e.qb(58,278528,null,0,i.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.rb(59,0,null,0,10,"ion-item",[],null,null,null,o.fb,o.u)),e.qb(60,49152,null,0,s.H,[e.h,e.k,e.x],null,null),(l()(),e.rb(61,0,null,0,8,"ion-input",[["formControlName","password"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,r=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,64)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,64)._handleInputEvent(u.target)&&t),"keyup.enter"===n&&(t=!1!==(r.formValid?r.confirmChangedPhoneNumber(r.changePhone.controls.newNumber.value,r.changePhone.controls.password.value):null)&&t),t}),o.eb,o.t)),e.qb(62,16384,null,0,b.o,[],{required:[0,"required"]},null),e.Gb(1024,null,b.h,(function(l){return[l]}),[b.o]),e.qb(64,16384,null,0,s.Ob,[e.k],null,null),e.Gb(1024,null,b.i,(function(l){return[l]}),[s.Ob]),e.qb(66,671744,null,0,b.c,[[3,b.a],[6,b.h],[8,null],[6,b.i],[2,b.s]],{name:[0,"name"]},null),e.Gb(2048,null,b.j,null,[b.c]),e.qb(68,16384,null,0,b.k,[[4,b.j]],null,null),e.qb(69,49152,null,0,s.G,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.rb(70,0,null,null,2,"ion-button",[["class","orange-button"],["style","width: unset;"],["type","submit"]],null,null,null,o.O,o.d)),e.qb(71,49152,null,0,s.k,[e.h,e.k,e.x],{disabled:[0,"disabled"],type:[1,"type"]},null),(l()(),e.Jb(-1,0,["CHANGE NUMBER"]))],(function(l,n){var u=n.component;l(n,15,0,""),l(n,19,0,"1.8","4"),l(n,23,0,"2.1","2"),l(n,30,0,"10"),l(n,40,0,u.changePhone),l(n,48,0,""),l(n,52,0,"newNumber"),l(n,55,0,"New Number  - xxx - xxx - xxxx","","text"),l(n,58,0,u.validationMessasges.phone),l(n,62,0,""),l(n,66,0,"password"),l(n,69,0,"Password","","password"),l(n,71,0,!u.formValid,"submit")}),(function(l,n){l(n,37,0,n.component.activePhone),l(n,38,0,e.Db(n,42).ngClassUntouched,e.Db(n,42).ngClassTouched,e.Db(n,42).ngClassPristine,e.Db(n,42).ngClassDirty,e.Db(n,42).ngClassValid,e.Db(n,42).ngClassInvalid,e.Db(n,42).ngClassPending),l(n,47,0,e.Db(n,48).required?"":null,e.Db(n,54).ngClassUntouched,e.Db(n,54).ngClassTouched,e.Db(n,54).ngClassPristine,e.Db(n,54).ngClassDirty,e.Db(n,54).ngClassValid,e.Db(n,54).ngClassInvalid,e.Db(n,54).ngClassPending),l(n,61,0,e.Db(n,62).required?"":null,e.Db(n,68).ngClassUntouched,e.Db(n,68).ngClassTouched,e.Db(n,68).ngClassPristine,e.Db(n,68).ngClassDirty,e.Db(n,68).ngClassValid,e.Db(n,68).ngClassInvalid,e.Db(n,68).ngClassPending)}))}function x(l){return e.Lb(0,[(l()(),e.rb(0,0,null,null,1,"app-change-phone",[],null,null,null,q,p)),e.qb(1,114688,null,0,d,[b.b,g.m,h.a,s.a,c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.nb("app-change-phone",d,x,{},{},[]);const v=()=>u.e(58).then(u.bind(null,"zdp5")).then(l=>l.ConfirmPageModuleNgFactory);class C{}u.d(n,"ChangePhonePageModuleNgFactory",(function(){return P}));var P=e.ob(t,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[r.a,k]],[3,e.j],e.v]),e.Bb(4608,i.l,i.k,[e.s,[2,i.s]]),e.Bb(4608,b.r,b.r,[]),e.Bb(4608,s.b,s.b,[e.x,e.g]),e.Bb(4608,s.Hb,s.Hb,[s.b,e.j,e.p]),e.Bb(4608,s.Lb,s.Lb,[s.b,e.j,e.p]),e.Bb(4608,b.b,b.b,[]),e.Bb(1073742336,i.c,i.c,[]),e.Bb(1073742336,b.q,b.q,[]),e.Bb(1073742336,b.e,b.e,[]),e.Bb(1073742336,s.Eb,s.Eb,[]),e.Bb(1073742336,b.n,b.n,[]),e.Bb(1073742336,g.q,g.q,[[2,g.v],[2,g.m]]),e.Bb(1073742336,C,C,[]),e.Bb(1073742336,t,t,[]),e.Bb(1024,g.k,(function(){return[[{path:"",component:d},{path:"confirm",loadChildren:v}]]}),[])])}))}}]);