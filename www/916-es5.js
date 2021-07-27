!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[916],{20916:function(n,o,i){"use strict";i.r(o),i.d(o,{ContactMentorPageModule:function(){return b}});var r,a,s=i(38583),c=i(90665),u=i(19039),m=i(21382),l=i(64762),p=i(39181),d=i(58600),h=i(88720),f=[{path:"",component:(r=function(){function n(e,o,i,r,a,s){t(this,n),this.profile=e,this.mentors=o,this.activatedRoute=i,this.formBuilder=r,this.router=a,this.location=s}var o,i,r;return o=n,(i=[{key:"ngOnInit",value:function(){var t=this;this.contactMenorForm=this.formBuilder.group({message:["",c.kI.required]}),console.log("Valid: ".concat(this.contactMenorForm.valid)),this.contactMenorForm.get("message").valueChanges.subscribe(function(e){console.log("Subscribed message: ".concat(e)),setTimeout(function(){t.messageValid=!!t.contactMenorForm.valid,console.log("Valid: ".concat(t.contactMenorForm.valid))},100)}),this.message=this.contactMenorForm.value.message;var e=this.activatedRoute.snapshot.paramMap.get("id"),n=this.activatedRoute.snapshot.paramMap.get("email"),o=this.activatedRoute.snapshot.paramMap.get("name"),i=this.activatedRoute.snapshot.paramMap.get("photo");this.mentorId=e,this.mentorName=o,this.mentorEmail=n,this.mentorPhoto=i,this.userDetails()}},{key:"confirm",value:function(t){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sendMessage(t);case 2:return e.next=4,this.router.navigate(["/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor/:name/:email/:photo/confirm",this.mentorName,this.mentorEmail,this.mentorPhoto]);case 4:case"end":return e.stop()}},e,this)}))}},{key:"userDetails",value:function(){var t=this;this.profile.getUserDetails().subscribe(function(e){t.userEmail=e.email,t.userName=e.fullName,t.userCity=e.city,t.userState=e.state,t.userAge=e.age,t.userGrade=e.grade,t.userSchool=e.school,t.userProfilePicture=e.profilePicture,t.userResume=e.resume})}},{key:"sendMessage",value:function(t){this.mentors.sendMentorAnEmail(t,this.mentorName,this.mentorEmail,this.userEmail,this.userName,this.userCity,this.userState,this.userAge,this.userGrade,this.userSchool,this.userProfilePicture,this.userResume).subscribe()}},{key:"back",value:function(){this.location.back()}}])&&e(o.prototype,i),r&&e(o,r),n}(),r.\u0275fac=function(t){return new(t||r)(h.Y36(p.H),h.Y36(d.u),h.Y36(m.gz),h.Y36(c.qu),h.Y36(m.F0),h.Y36(s.Ye))},r.\u0275cmp=h.Xpm({type:r,selectors:[["app-contact-mentor"]],decls:21,vars:4,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"margin-top","100px"],["size-xs","11","size-sm","10","size-md","7","size-lg","6","size-xl","5"],["id","mentor-photo"],[1,"blue-button-small","ion-float-right",3,"click"],[1,"ion-justify-content-center"],[1,"ion-text-center"],["id","mentor-photo",1,"ion-hide-lg-up",3,"src"],[3,"formGroup","ngSubmit"],["formControlName","message","rows","10","autogrow","true","required","","spellcheck","true",1,"message-input",3,"placeholder","keydown.control.enter"],["type","submit","expand","block",1,"orange-button",3,"disabled"]],template:function(t,e){1&t&&(h.TgZ(0,"ion-header",0),h.TgZ(1,"ion-toolbar"),h.TgZ(2,"ion-buttons",1),h._UZ(3,"ion-back-button"),h.qZA(),h.TgZ(4,"ion-title"),h._uU(5,"Contact Mentor"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(6,"ion-content"),h.TgZ(7,"ion-grid"),h.TgZ(8,"ion-row",2),h.TgZ(9,"ion-col",3),h._UZ(10,"div",4),h.TgZ(11,"ion-button",5),h.NdJ("click",function(){return e.back()}),h._uU(12,"Back"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(13,"ion-row",6),h.TgZ(14,"ion-col",3),h.TgZ(15,"div",7),h._UZ(16,"img",8),h.qZA(),h.TgZ(17,"form",9),h.NdJ("ngSubmit",function(){return e.confirm(e.contactMenorForm.value)}),h.TgZ(18,"ion-textarea",10),h.NdJ("keydown.control.enter",function(){return e.messageValid?e.confirm(e.contactMenorForm.value):null}),h.qZA(),h.TgZ(19,"ion-button",11),h._uU(20," Send "),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA()),2&t&&(h.xp6(16),h.s9C("src",e.mentorPhoto,h.LSH),h.xp6(1),h.Q6J("formGroup",e.contactMenorForm),h.xp6(1),h.MGl("placeholder","Have a question for a ",e.mentorName,"? Send them an email!"),h.xp6(1),h.Q6J("disabled",!e.messageValid))},directives:[u.Gu,u.sr,u.Sm,u.oU,u.cs,u.wd,u.W2,u.jY,u.Nd,u.wI,u.YG,c._Y,c.JL,c.sg,u.g2,u.j9,c.JJ,c.u,c.Q7],styles:["ion-content[_ngcontent-%COMP%]{--background:#f4f5f8}.blue-button-small[_ngcontent-%COMP%]{--background:#0055a5;opacity:1;height:24px;width:100px;font-size:.5em;font-weight:600}.name[_ngcontent-%COMP%]{display:block;font-size:1em;color:#999;opacity:0}.name[_ngcontent-%COMP%]:first-child{-webkit-animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1.3s forwards;animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1.3s forwards}#mentor-photo[_ngcontent-%COMP%]{height:100px;border-radius:100px;background-repeat:no-repeat;background-size:contain;background-position:50%;display:inline-block;opacity:1;margin:54px auto}@media screen and (min-width: 992px){#mentor-photo[_ngcontent-%COMP%]{border-radius:100px;width:100px;height:100px;position:relative;top:-38px}}.message-input[_ngcontent-%COMP%]{padding:0 8px;border-radius:5px;font-size:1.2em;border:1px solid rgba(0,81,145,.4)}.orange-button[_ngcontent-%COMP%]{margin-top:40px}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset}@-webkit-keyframes slide-in-left{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-left{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-in-up{0%{transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-up{0%{transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}"]}),r)},{path:"confirm/:name/:email/:phone",loadChildren:function(){return i.e(8265).then(i.bind(i,18265)).then(function(t){return t.ConfirmPageModule})}}],g=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[m.Bz.forChild(f)],m.Bz]}),e}(),b=((a=function e(){t(this,e)}).\u0275fac=function(t){return new(t||a)},a.\u0275mod=h.oAB({type:a}),a.\u0275inj=h.cJS({imports:[[s.ez,c.u5,c.UX,u.Pc,g]]}),a)}}])}();