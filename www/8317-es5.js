!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[8317],{88317:function(t,o,r){"use strict";r.r(o),r.d(o,{ChangePhonePageModule:function(){return Z}});var i,a,s=r(38583),u=r(90665),c=r(19039),l=r(21382),h=r(64762),p=r(37556),d=r(39181),g=r(88720),f=[{path:"",component:(i=function(){function t(n,o,r,i,a,s){e(this,t),this.formBuilder=n,this.router=o,this.auth=r,this.toast=i,this.alertController=a,this.profile=s,this.activeEmail="",this.validationMessasges={email:[{type:"email",message:"Must be a valid email address"}],password:[{type:"pattern",message:"Password must be at least 6 characters with at least one lowercase character, one uppercase character, and one number."}]},this.activeEmail=this.profile.email.getValue(),console.log("Active Email: "+this.activeEmail)}var o,r,i;return o=t,(r=[{key:"ngOnInit",value:function(){var e=this;this.phone=this.profile.phone.value,this.changePhone=this.formBuilder.group({phone:["",[u.kI.required]],password:["",u.kI.compose([u.kI.minLength(8),u.kI.required,u.kI.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.changePhone.valueChanges.subscribe(function(n){setTimeout(function(){e.formValid=!!e.changePhone.valid},100)})}},{key:"presentToast",value:function(){return(0,h.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toast.create({message:"There was an error with your password or email. Please try again.",duration:5e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)}))}},{key:"presentAlert",value:function(){return(0,h.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"danger-alert",header:"Invalid Phone",message:"New Phone cannot be the same as the current one.",buttons:[{text:"OK"}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"confirmChangedPhone",value:function(e,n){e==this.phone?this.presentAlert():this.profile.changePhone(e,n)}},{key:"goBack",value:function(){this.router.navigate(["/home/profile"])}}])&&n(o.prototype,r),i&&n(o,i),t}(),i.\u0275fac=function(e){return new(e||i)(g.Y36(u.qu),g.Y36(l.F0),g.Y36(p.e),g.Y36(c.yF),g.Y36(c.Br),g.Y36(d.H))},i.\u0275cmp=g.Xpm({type:i,selectors:[["app-change-phone"]],decls:31,vars:3,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-text-center"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","10","size-md","8","size-lg","6","size-xl","6",1,"ion-text-center"],[1,"text-header",2,"width","unset"],["size-xs","11","size-sm","10","size-md","8","size-lg","6","size-xl","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["required","","maxlength","10","placeholder","New Phone","formControlName","phone","type","phone",3,"keyup.enter"],["required","","placeholder","password","formControlName","password","minlength","8","type","password",3,"keyup.enter"],["type","submit",1,"orange-button",2,"width","unset",3,"disabled"]],template:function(e,n){1&e&&(g.TgZ(0,"ion-header",0),g.TgZ(1,"ion-toolbar"),g.TgZ(2,"ion-buttons",1),g._UZ(3,"ion-back-button"),g.qZA(),g.TgZ(4,"ion-title"),g._uU(5,"Change Phone"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(6,"ion-content"),g.TgZ(7,"ion-grid",2),g.TgZ(8,"ion-row",3),g.TgZ(9,"ion-col",4),g.TgZ(10,"ion-toolbar",5),g.TgZ(11,"ion-buttons",1),g.TgZ(12,"h1"),g._uU(13,"Change Phone"),g.qZA(),g.qZA(),g.TgZ(14,"ion-buttons",6),g.TgZ(15,"ion-button",7),g.NdJ("click",function(){return n.goBack()}),g._uU(16," Back "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(17,"ion-row",8),g.TgZ(18,"ion-col",9),g.TgZ(19,"h6",10),g._uU(20),g.qZA(),g.qZA(),g.qZA(),g.TgZ(21,"ion-row",8),g.TgZ(22,"ion-col",11),g.TgZ(23,"form",12),g.NdJ("ngSubmit",function(){return n.confirmChangedPhone(n.changePhone.controls.phone.value,n.changePhone.controls.password.value)}),g.TgZ(24,"ion-list",13),g.TgZ(25,"ion-item"),g.TgZ(26,"ion-input",14),g.NdJ("keyup.enter",function(){return n.formValid?n.confirmChangedPhone(n.changePhone.controls.phone.value,n.changePhone.controls.password.value):null}),g.qZA(),g.qZA(),g.TgZ(27,"ion-item"),g.TgZ(28,"ion-input",15),g.NdJ("keyup.enter",function(){return n.formValid?n.confirmChangedPhone(n.changePhone.controls.email.value,n.changePhone.controls.password.value):null}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(29,"ion-button",16),g._uU(30,"CHANGE PHONE"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&e&&(g.xp6(20),g.Oqu(n.phone),g.xp6(3),g.Q6J("formGroup",n.changePhone),g.xp6(6),g.Q6J("disabled",!n.formValid))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.wd,c.W2,c.jY,c.Nd,c.wI,c.YG,u._Y,u.JL,u.sg,c.q_,c.Ie,c.pK,c.j9,u.Q7,u.nD,u.JJ,u.u,u.wO],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0d2e4d);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.text-header[_ngcontent-%COMP%]{background:#e4ebf1}"]}),i)},{path:"confirm",loadChildren:function(){return r.e(8517).then(r.bind(r,18517)).then(function(e){return e.ConfirmPageModule})}}],m=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=g.oAB({type:n}),n.\u0275inj=g.cJS({imports:[[l.Bz.forChild(f)],l.Bz]}),n}(),Z=((a=function n(){e(this,n)}).\u0275fac=function(e){return new(e||a)},a.\u0275mod=g.oAB({type:a}),a.\u0275inj=g.cJS({imports:[[s.ez,u.u5,u.UX,c.Pc,m]]}),a)}}])}();