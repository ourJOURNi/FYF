(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[8483],{48483:function(o,s,n){"use strict";n.r(s),n.d(s,{NewPasswordPageModule:function(){return f}});var t=n(38583),e=n(90665),a=n(19039),r=n(21382),i=n(64762),c=n(37556),d=n(92340),l=n(88720);function w(o,s){1&o&&(l.TgZ(0,"ion-button",24),l._UZ(1,"ion-icon",25),l.qZA())}function u(o,s){1&o&&(l.TgZ(0,"ion-button",26),l._UZ(1,"ion-icon",27),l.qZA())}function g(o,s){1&o&&(l.TgZ(0,"ion-button",24),l._UZ(1,"ion-icon",25),l.qZA())}function p(o,s){1&o&&(l.TgZ(0,"ion-button",26),l._UZ(1,"ion-icon",27),l.qZA())}const h=[{path:"",component:(()=>{class o{constructor(o,s,n,t,e){this.formBuilder=o,this.router=s,this.auth=n,this.activatedRoute=t,this.toast=e,this.BACKEND_URL=d.N.url,this.passwordsMatch=!1,this.validationMessasges={password:[{type:"password",message:"Please enter a valid password."}]}}ngOnInit(){this.newPasswordForm=this.formBuilder.group({newPassword:["",e.kI.required],reTypeNewPassword:["",e.kI.required]}),this.userEmail=this.activatedRoute.snapshot.paramMap.get("email"),console.log("Email: "+this.userEmail),this.formOnChanges()}formOnChanges(){console.log(this.newPasswordForm),this.newPasswordForm.valueChanges.subscribe(o=>{console.log(o),this.newPasswordForm.statusChanges.subscribe(o=>{console.log(o)}),console.log(this.newPasswordForm.controls.newPassword.value),console.log(this.newPasswordForm.controls.reTypeNewPassword.value),this.newPasswordForm.controls.newPassword.value===this.newPasswordForm.controls.reTypeNewPassword.value&&this.newPasswordForm.controls.newPassword.touched&&(this.passwordsMatch=!0,console.log("Passwords Match"),this.passwordMatchToast()),this.newPasswordForm.controls.newPassword.value!==this.newPasswordForm.controls.reTypeNewPassword.value&&(console.log("Passwords DONT Match"),this.passwordsMatch=!1)})}goToConfirmPage(){return(0,i.mG)(this,void 0,void 0,function*(){const o=this.userEmail;let s=this.newPasswordForm.value.newPassword;if(s!==this.newPasswordForm.value.reTypeNewPassword)return this.presentToast(),console.log("passwords do not match");yield this.auth.forgotPassword(o,s),yield console.log("Going to Confirm Password Change Page"),yield this.router.navigate(["/enter-email/enter-code/:email/new-password/:email/confirm"])})}presentToast(){return(0,i.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:"The two passwords you entered do not match. Please try again.",duration:2e3})).present()})}passwordMatchToast(){return(0,i.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:"Passwords Match!",cssClass:"success-toast",duration:2e3})).present()})}cancel(){console.log("Forgotten password cancelled"),this.router.navigate([""])}back(){this.router.navigate(["/enter-email/enter-code"])}}return o.\u0275fac=function(s){return new(s||o)(l.Y36(e.qu),l.Y36(r.F0),l.Y36(c.e),l.Y36(r.gz),l.Y36(a.yF))},o.\u0275cmp=l.Xpm({type:o,selectors:[["app-new-password"]],decls:39,vars:6,consts:[[1,"ion-hide-lg-up"],["mode","md"],["slot","start"],["size","small"],[1,"spacer","ion-hide-lg-down"],[1,"ion-text-center"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../../../assets/icon/Logo 2.0.svg","alt","","srcset",""],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size","12"],[1,"text-header"],["size-xs","11","size-sm","10","size-md","10","size-lg","6","size-xl","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["placeholder","Password","formControlName","newPassword","type","password"],["class","badPassword","item-right","",4,"ngIf"],["class","goodPassword","item-right","",4,"ngIf"],["placeholder","Re-type Password","formControlName","reTypeNewPassword","type","password"],["type","submit",1,"orange-button",3,"disabled"],["slot","end",1,"cancel-button",3,"click"],["item-right","",1,"badPassword"],["name","close",2,"color","#FF443B"],["item-right","",1,"goodPassword"],["name","checkmark",2,"color","#21df82"]],template:function(o,s){1&o&&(l.TgZ(0,"ion-header",0),l.TgZ(1,"ion-toolbar",1),l.TgZ(2,"ion-buttons",2),l._UZ(3,"ion-back-button"),l.qZA(),l.TgZ(4,"ion-title",3),l._uU(5,"Create New Password"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"ion-content"),l._UZ(7,"div",4),l.TgZ(8,"ion-grid",5),l.TgZ(9,"ion-row",6),l.TgZ(10,"ion-col",7),l.TgZ(11,"ion-toolbar",8),l.TgZ(12,"ion-buttons",2),l._UZ(13,"img",9),l.qZA(),l.TgZ(14,"ion-buttons",10),l.TgZ(15,"ion-button",11),l.NdJ("click",function(){return s.back()}),l._uU(16," Back "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(17,"ion-row",12),l.TgZ(18,"ion-col",13),l.TgZ(19,"h6",14),l._uU(20,"Please enter your new password. Your password needs to be "),l.TgZ(21,"span"),l._uU(22,"at least 8 characters long, with at least 1 uppercase letter and one number."),l.qZA(),l.qZA(),l.qZA(),l.TgZ(23,"ion-col",15),l.TgZ(24,"form",16),l.NdJ("ngSubmit",function(){return s.goToConfirmPage()}),l.TgZ(25,"ion-list",17),l.TgZ(26,"ion-item"),l._UZ(27,"ion-input",18),l.YNc(28,w,2,0,"ion-button",19),l.YNc(29,u,2,0,"ion-button",20),l.qZA(),l.TgZ(30,"ion-item"),l._UZ(31,"ion-input",21),l.YNc(32,g,2,0,"ion-button",19),l.YNc(33,p,2,0,"ion-button",20),l.qZA(),l.TgZ(34,"ion-button",22),l._uU(35,"NEXT"),l.qZA(),l._UZ(36,"br"),l.TgZ(37,"ion-button",23),l.NdJ("click",function(){return s.cancel()}),l._uU(38," cancel "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&o&&(l.xp6(24),l.Q6J("formGroup",s.newPasswordForm),l.xp6(4),l.Q6J("ngIf",!s.passwordsMatch),l.xp6(1),l.Q6J("ngIf",s.passwordsMatch),l.xp6(3),l.Q6J("ngIf",!s.passwordsMatch),l.xp6(1),l.Q6J("ngIf",s.passwordsMatch),l.xp6(1),l.Q6J("disabled",!s.passwordsMatch))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,a.W2,a.jY,a.Nd,a.wI,a.YG,e._Y,e.JL,e.sg,a.q_,a.Ie,a.pK,a.j9,e.JJ,e.u,t.O5,a.gu],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0c375f);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}span[_ngcontent-%COMP%]{font-weight:900;color:#e4405f}.cancel-button[_ngcontent-%COMP%]{color:#e4405f;--background:none;--background-hover:linear-gradient(#f15b77,#e4405f);height:40px;width:200px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.badPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in .5s forwards;animation:password-icons 1s ease-in .5s forwards}.badPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in forwards;animation:password-icons 1s ease-in forwards}.goodPassword[_ngcontent-%COMP%]{--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in .5s forwards;animation:password-icons 1s ease-in .5s forwards}.goodPassword[_ngcontent-%COMP%]:nth-child(2){--background:none;opacity:0;-webkit-animation:password-icons 1s ease-in forwards;animation:password-icons 1s ease-in forwards}@-webkit-keyframes password-icons{0%{transform:translateX(50px)}to{transform:translateX(0);opacity:1}}@keyframes password-icons{0%{transform:translateX(50px)}to{transform:translateX(0);opacity:1}}"]}),o})()},{path:"confirm",loadChildren:()=>n.e(3355).then(n.bind(n,43355)).then(o=>o.ConfirmPageModule)}];let m=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[[r.Bz.forChild(h)],r.Bz]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[[t.ez,e.u5,e.UX,a.Pc,m]]}),o})()}}]);