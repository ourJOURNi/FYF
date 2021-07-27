(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[2702],{72702:function(e,t,o){"use strict";o.r(t),o.d(t,{EnterCodePageModule:function(){return h}});var n=o(38583),i=o(90665),s=o(19039),r=o(21382),a=o(64762),c=o(37556),d=o(88720);const l=[{path:"",component:(()=>{class e{constructor(e,t,o,n,i){this.router=e,this.formBuilder=t,this.auth=o,this.activatedRoute=n,this.toast=i,this.disabled=!0,this.code="",this.userEmail=""}ngOnInit(){this.enterCodeForm=this.formBuilder.group({code:["",[i.kI.required,i.kI.maxLength(6)]]}),this.userEmail=this.activatedRoute.snapshot.paramMap.get("email"),this.generateCode(6).then(e=>{console.log(`Sent Email to ${this.userEmail}`),this.auth.sendEmailWithCode(e,this.userEmail)}),this.formOnChanges()}formOnChanges(){console.log(this.enterCodeForm),this.enterCodeForm.valueChanges.subscribe(e=>{console.log(e),e.code===this.code&&(console.log("codes match"),this.presentCodesMatchedToast(),this.disabled=!1),e.code!==this.code&&(this.disabled=!0)})}generateCode(e){return(0,a.mG)(this,void 0,void 0,function*(){let t="";const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=o.length;for(let i=0;i<e;i++)t+=o.charAt(Math.floor(Math.random()*n));return console.log("Generated Code: "+t),this.code=t})}sendNewCode(){return(0,a.mG)(this,void 0,void 0,function*(){yield this.generateCode(6).then(e=>{console.log("Data: "+e),this.auth.sendEmailWithCode(e,this.userEmail)}),yield this.presentNewCodeToast(this.userEmail)})}thankYouPage(){this.enterCodeForm.controls.code.value!==this.code&&(this.presentErrorToast(),console.log("Codes do not match")),console.log("Thank you page"),this.auth.register(),this.router.navigate(["/personal-info/profile-picture/upload-resume/login-credentials/enter-code/:email/thank-you-page"])}presentCodesMatchedToast(){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:"Codes Matched!",duration:2e3,cssClass:"success-toast"})).present()})}presentErrorToast(){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:"The codes do not match. Please try again.",duration:2e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"})).present()})}presentNewCodeToast(e){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:`New Code sent to ${e}`,duration:2e3,cssClass:"success-toast",keyboardClose:!0,position:"top"})).present()})}back(){console.log("Sign up cancelled"),this.router.navigate(["/personal-info/profile-picture/upload-resume/"])}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(r.F0),d.Y36(i.qu),d.Y36(c.e),d.Y36(r.gz),d.Y36(s.yF))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-enter-code"]],decls:37,vars:3,consts:[[1,"ion-hide-lg-up"],["mode","md"],["slot","start"],["slot","end"],["height","32","src","../../../../../assets/icon/fyf-white-icon.svg",2,"margin-right","16px"],["size","small"],[1,"spacer","ion-hide-lg-down"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../../../assets/icon/Logo 2.0.svg","alt","","srcset",""],[1,"back-button",3,"click"],[1,"ion-justify-content-center","header"],["size","12",1,"ion-text-center"],[1,"text-header"],[1,"ion-justify-content-center","ion-align-items-center"],["size-xs","11","size-sm","10","size-md","10","size-lg","6","size-xl","4",1,"ion-text-center"],[3,"formGroup","ngSubmit"],[1,"line-input"],["formControlName","code","type","email","placeholder","enter code"],["type","submit",1,"orange-button",3,"disabled"],[1,"send-new-code",3,"click"],[1,"cancel-button",3,"click"]],template:function(e,t){1&e&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar",1),d.TgZ(2,"ion-buttons",2),d._UZ(3,"ion-back-button"),d.qZA(),d.TgZ(4,"ion-buttons",3),d._UZ(5,"img",4),d.qZA(),d.TgZ(6,"ion-title",5),d._uU(7,"Enter Code"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(8,"ion-content"),d._UZ(9,"div",6),d.TgZ(10,"ion-grid"),d.TgZ(11,"ion-row",7),d.TgZ(12,"ion-col",8),d.TgZ(13,"ion-toolbar",9),d.TgZ(14,"ion-buttons",2),d._UZ(15,"img",10),d.qZA(),d.TgZ(16,"ion-buttons",3),d.TgZ(17,"ion-button",11),d.NdJ("click",function(){return t.back()}),d._uU(18," Back "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(19,"ion-row",12),d.TgZ(20,"ion-col",13),d.TgZ(21,"h6",14),d._uU(22,"Please enter the 6 character code that was sent to "),d.TgZ(23,"span"),d._uU(24),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(25,"ion-row",15),d.TgZ(26,"ion-col",16),d.TgZ(27,"form",17),d.NdJ("ngSubmit",function(){return t.thankYouPage()}),d.TgZ(28,"ion-list",18),d.TgZ(29,"ion-item"),d._UZ(30,"ion-input",19),d.qZA(),d.TgZ(31,"ion-button",20),d._uU(32," ENTER CODE "),d.qZA(),d.TgZ(33,"ion-button",21),d.NdJ("click",function(){return t.sendNewCode()}),d._uU(34," Send new code "),d.qZA(),d.TgZ(35,"ion-button",22),d.NdJ("click",function(){return t.auth.cancelSignUp()}),d._uU(36," Cancel "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(24),d.Oqu(t.userEmail),d.xp6(3),d.Q6J("formGroup",t.enterCodeForm),d.xp6(4),d.Q6J("disabled",t.disabled))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,s.jY,s.Nd,s.wI,s.YG,i._Y,i.JL,i.sg,s.q_,s.Ie,s.pK,s.j9,i.JJ,i.u],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0c375f);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.cancel-button[_ngcontent-%COMP%]{color:#e4405f;--background:none;--background-hover:linear-gradient(#f15b77,#e4405f);height:40px;width:200px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.orange-button[_ngcontent-%COMP%]{display:block;margin:48px auto 16px;width:200px;-webkit-animation:none;animation:none;opacity:1}span[_ngcontent-%COMP%]{font-size:1.2em;color:#005191}.send-new-code[_ngcontent-%COMP%]{display:block;--background:#005191;color:#fff;font-weight:600;height:40px;width:200px;margin:8px auto;opacity:0;-webkit-animation:slide-from-right 1s ease-out 5s forwards;animation:slide-from-right 1s ease-out 5s forwards}span[_ngcontent-%COMP%]{font-weight:900;font-size:1em;color:#e3405f}@-webkit-keyframes slide-from-right{0%{transform:translateX(300px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes slide-from-right{0%{transform:translateX(300px);opacity:0}to{transform:translateX(0);opacity:1}}"]}),e})()},{path:"thank-you-page",loadChildren:()=>o.e(1020).then(o.bind(o,21020)).then(e=>e.ThankYouPageModule)}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[r.Bz.forChild(l)],r.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[n.ez,i.u5,s.Pc,i.UX,u]]}),e})()}}]);