(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[4375],{34375:function(e,o,t){"use strict";t.r(o),t.d(o,{EnterCodePageModule:function(){return m}});var n=t(38583),s=t(90665),i=t(19039),r=t(21382),a=t(64762),c=t(37556),d=t(88720);function l(e,o){if(1&e&&(d.TgZ(0,"div",25),d._uU(1),d.qZA()),2&e){const e=d.oxw().$implicit;d.xp6(1),d.hij(" ",e.message," ")}}function u(e,o){if(1&e&&(d.ynx(0),d.YNc(1,l,2,1,"div",24),d.BQk()),2&e){const e=o.$implicit,t=d.oxw();d.xp6(1),d.Q6J("ngIf",t.enterCodeForm.get("code").hasError(e.type)&&(t.enterCodeForm.get("code").dirty||t.enterCodeForm.get("code").touched))}}const g=[{path:"",component:(()=>{class e{constructor(e,o,t,n,s){this.router=e,this.formBuilder=o,this.auth=t,this.activatedRoute=n,this.toast=s,this.code="",this.userEmail="",this.validationMessasges={code:[{type:"text",message:"The codes do not match"}]}}ngOnInit(){this.enterCodeForm=this.formBuilder.group({code:["",s.kI.required]}),this.userEmail=this.activatedRoute.snapshot.paramMap.get("email"),this.generateCode(6).then(e=>{this.auth.sendEmailWithCodeForgotPassword(e,this.userEmail)}),this.formOnChanges()}formOnChanges(){console.log(this.enterCodeForm),this.enterCodeForm.valueChanges.subscribe(e=>(console.log(e),e.code===this.code?(this.codesMatched=!0,this.codesMatchedToast()):this.codesMatched=!1))}generateCode(e){return(0,a.mG)(this,void 0,void 0,function*(){let o="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length;for(let s=0;s<e;s++)o+=t.charAt(Math.floor(Math.random()*n));return console.log("Generated Code: "+o),this.code=o})}newPasswordPage(e){console.log("New Password: "),console.log(e),this.enterCodeForm.controls.code.value!==this.code?console.log("Codes do not match"):(console.log("Codes matched"),this.router.navigate(["/enter-email/enter-code/:email/new-password",this.userEmail]))}sendNewCode(){return(0,a.mG)(this,void 0,void 0,function*(){yield this.generateCode(6).then(e=>{console.log("Data: "+e),this.auth.sendEmailWithCode(e,this.userEmail)}),yield this.presentNewCodeToast(this.userEmail)})}codesMatchedToast(){return(0,a.mG)(this,void 0,void 0,function*(){console.log("Codes Matched!"),(yield this.toast.create({message:"Codes Matched!",cssClass:"success-toast",duration:2e3})).present()})}presentNewCodeToast(e){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:`New Code sent to ${e}`,duration:2e3,cssClass:"success-toast",keyboardClose:!0,position:"top"})).present()})}cancel(){console.log("Forgot password cancelled"),this.router.navigate([""])}back(){this.router.navigate(["/enter-email"])}}return e.\u0275fac=function(o){return new(o||e)(d.Y36(r.F0),d.Y36(s.qu),d.Y36(c.e),d.Y36(r.gz),d.Y36(i.yF))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-enter-code"]],decls:37,vars:4,consts:[[1,"ion-hide-lg-up"],["mode","md"],["slot","start"],["size","small"],[1,"spacer","ion-hide-lg-down"],[1,"ion-text-center"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../../../assets/icon/Logo 2.0.svg","alt","","srcset",""],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size","12"],[1,"text-header"],["size-xs","11","size-sm","10","size-md","10","size-lg","6","size-xl","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["placeholder","Enter Code","required","","formControlName","code","type","text","placeholder","Enter Code"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","submit",1,"orange-button",3,"disabled"],[1,"send-new-code",3,"click"],["slot","end",1,"cancel-button",3,"click"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,o){1&e&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar",1),d.TgZ(2,"ion-buttons",2),d._UZ(3,"ion-back-button"),d.qZA(),d.TgZ(4,"ion-title",3),d._uU(5,"Enter Code"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(6,"ion-content"),d._UZ(7,"div",4),d.TgZ(8,"ion-grid",5),d.TgZ(9,"ion-row",6),d.TgZ(10,"ion-col",7),d.TgZ(11,"ion-toolbar",8),d.TgZ(12,"ion-buttons",2),d._UZ(13,"img",9),d.qZA(),d.TgZ(14,"ion-buttons",10),d.TgZ(15,"ion-button",11),d.NdJ("click",function(){return o.back()}),d._uU(16," Back "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(17,"ion-row",12),d.TgZ(18,"ion-col",13),d.TgZ(19,"h6",14),d._uU(20,"Please enter 6 character code that was sent to "),d.TgZ(21,"span"),d._uU(22),d.qZA(),d.qZA(),d.qZA(),d.TgZ(23,"ion-col",15),d.TgZ(24,"form",16),d.NdJ("ngSubmit",function(){return o.newPasswordPage(o.enterCodeForm.value)}),d.TgZ(25,"ion-list",17),d.TgZ(26,"ion-item"),d._UZ(27,"ion-input",18),d.qZA(),d.TgZ(28,"div",19),d.YNc(29,u,2,1,"ng-container",20),d.qZA(),d.TgZ(30,"ion-button",21),d._uU(31,"ENTER CODE"),d.qZA(),d._UZ(32,"br"),d.TgZ(33,"ion-button",22),d.NdJ("click",function(){return o.sendNewCode()}),d._uU(34," Send new code "),d.qZA(),d.TgZ(35,"ion-button",23),d.NdJ("click",function(){return o.cancel()}),d._uU(36," cancel "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(22),d.Oqu(o.userEmail),d.xp6(2),d.Q6J("formGroup",o.enterCodeForm),d.xp6(5),d.Q6J("ngForOf",o.validationMessasges.code),d.xp6(1),d.Q6J("disabled",!o.codesMatched))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.W2,i.jY,i.Nd,i.wI,i.YG,s._Y,s.JL,s.sg,i.q_,i.Ie,i.pK,i.j9,s.Q7,s.JJ,s.u,n.sg,n.O5],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0c375f);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.cancel-button[_ngcontent-%COMP%]{color:#e4405f;--background:none;--background-hover:linear-gradient(#f15b77,#e4405f);height:40px;width:200px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.send-new-code[_ngcontent-%COMP%]{display:block;--background:#005191;color:#fff;font-weight:600;height:40px;width:200px;margin:8px auto;opacity:0;-webkit-animation:slide-from-right 1s ease-out 5s forwards;animation:slide-from-right 1s ease-out 5s forwards}span[_ngcontent-%COMP%]{color:#e3405f}@-webkit-keyframes slide-from-right{0%{transform:translateX(300px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes slide-from-right{0%{transform:translateX(300px);opacity:0}to{transform:translateX(0);opacity:1}}"]}),e})()},{path:"new-password/:email",loadChildren:()=>t.e(8483).then(t.bind(t,48483)).then(e=>e.NewPasswordPageModule)}];let h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[r.Bz.forChild(g)],r.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[n.ez,s.u5,s.UX,i.Pc,h]]}),e})()}}]);