!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[7451],{87451:function(o,n,r){"use strict";r.r(n),r.d(n,{ChangeAboutPageModule:function(){return A}});var i=r(38583),a=r(90665),s=r(19039),u=r(21382),c=r(64762),l=r(37556),g=r(39181),h=r(88720);function p(e,t){if(1&e&&(h.TgZ(0,"div",19),h._uU(1),h.qZA()),2&e){var o=h.oxw().$implicit;h.xp6(1),h.hij(" ",o.message," ")}}function d(e,t){if(1&e&&(h.ynx(0),h.YNc(1,p,2,1,"div",18),h.BQk()),2&e){var o=t.$implicit,n=h.oxw();h.xp6(1),h.Q6J("ngIf",n.changeAbout.get("about").hasError(o.type)&&(n.changeAbout.get("email").dirty||n.changeAbout.get("email").touched))}}var f,b,m=[{path:"",component:(f=function(){function o(t,n,r,i,a,s){e(this,o),this.formBuilder=t,this.router=n,this.auth=r,this.toast=i,this.alertController=a,this.profile=s,this.activeEmail="",this.currentAbout="",this.validationMessasges={about:[{type:"about",message:"Must be a 500 characters or less."}],password:[{type:"pattern",message:"Password must be at least 6 characters with at least one lowercase character, one uppercase character, and one number."}]}}var n,r,i;return n=o,(r=[{key:"ngOnInit",value:function(){var e=this;this.activeEmail=this.profile.email.getValue(),console.log("Active Email: "+this.activeEmail),this.currentAbout=this.profile.about.getValue(),console.log("Current About: "+this.currentAbout),this.changeAbout=this.formBuilder.group({about:["",[a.kI.required]],password:["",a.kI.compose([a.kI.minLength(8),a.kI.required,a.kI.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])]}),this.changeAbout.valueChanges.subscribe(function(t){console.log(t),e.formValid=t.about.length>0})}},{key:"back",value:function(){this.router.navigate(["/home/profile/edit-profile-page"])}},{key:"presentToast",value:function(){return(0,c.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toast.create({message:"There was an error with your password or email. Please try again.",duration:5e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)}))}},{key:"presentAlert",value:function(){return(0,c.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"danger-alert",header:"Invalid Email",message:"New Email cannot be the same as the current one.",buttons:[{text:"OK"}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"confirmChangedAbout",value:function(e,t,o){this.profile.changeAbout(e,t,o)}},{key:"goBack",value:function(){this.router.navigate(["/home/profile"])}}])&&t(n.prototype,r),i&&t(n,i),o}(),f.\u0275fac=function(e){return new(e||f)(h.Y36(a.qu),h.Y36(u.F0),h.Y36(l.e),h.Y36(s.yF),h.Y36(s.Br),h.Y36(g.H))},f.\u0275cmp=h.Xpm({type:f,selectors:[["app-change-about"]],decls:33,vars:4,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","10","size-md","8","size-lg","6","size-xl","6",1,"ion-text-center"],[1,"text-header"],["size-xs","11","size-sm","10","size-md","8","size-lg","6","size-xl","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["required","","autogrow","true","autocapitalize","true","rows","5","spellcheck","true","wrap","soft","type","text","maxlength","500","placeholder","Tell us about yourself","formControlName","about"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["required","","placeholder","password","formControlName","password","minlength","8","type","password"],["type","submit",1,"orange-button",2,"width","unset",3,"disabled"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(h.TgZ(0,"ion-header",0),h.TgZ(1,"ion-toolbar"),h.TgZ(2,"ion-buttons",1),h._UZ(3,"ion-back-button"),h.qZA(),h.TgZ(4,"ion-title"),h._uU(5,"Change About"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(6,"ion-content"),h.TgZ(7,"ion-grid"),h.TgZ(8,"ion-row",2),h.TgZ(9,"ion-col",3),h.TgZ(10,"ion-toolbar",4),h.TgZ(11,"ion-buttons",1),h.TgZ(12,"h1"),h._uU(13,"Change About Me "),h.qZA(),h.qZA(),h.TgZ(14,"ion-buttons",5),h.TgZ(15,"ion-button",6),h.NdJ("click",function(){return t.goBack()}),h._uU(16," Back "),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(17,"ion-row",7),h.TgZ(18,"ion-col",8),h.TgZ(19,"h6",9),h._uU(20),h.qZA(),h.qZA(),h.qZA(),h.TgZ(21,"ion-row",7),h.TgZ(22,"ion-col",10),h.TgZ(23,"form",11),h.NdJ("ngSubmit",function(){return t.confirmChangedAbout(t.activeEmail,t.changeAbout.controls.about.value,t.changeAbout.controls.password.value)}),h.TgZ(24,"ion-list",12),h.TgZ(25,"ion-item"),h._UZ(26,"ion-textarea",13),h.qZA(),h.TgZ(27,"div",14),h.YNc(28,d,2,1,"ng-container",15),h.qZA(),h.TgZ(29,"ion-item"),h._UZ(30,"ion-input",16),h.qZA(),h.qZA(),h.TgZ(31,"ion-button",17),h._uU(32,"CHANGE ABOUT"),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA()),2&e&&(h.xp6(20),h.Oqu(t.currentAbout),h.xp6(3),h.Q6J("formGroup",t.changeAbout),h.xp6(5),h.Q6J("ngForOf",t.validationMessasges.about),h.xp6(3),h.Q6J("disabled",!t.formValid))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,s.jY,s.Nd,s.wI,s.YG,a._Y,a.JL,a.sg,s.q_,s.Ie,s.g2,s.j9,a.Q7,a.nD,a.JJ,a.u,i.sg,s.pK,a.wO,i.O5],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0d2e4d);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.text-header[_ngcontent-%COMP%]{background:#e4ebf1}"]}),f)},{path:"confirm",loadChildren:function(){return r.e(9550).then(r.bind(r,49550)).then(function(e){return e.ConfirmPageModule})}}],Z=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[u.Bz.forChild(m)],u.Bz]}),t}(),A=((b=function t(){e(this,t)}).\u0275fac=function(e){return new(e||b)},b.\u0275mod=h.oAB({type:b}),b.\u0275inj=h.cJS({imports:[[i.ez,a.u5,a.UX,s.Pc,Z]]}),b)}}])}();