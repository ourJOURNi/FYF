(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[916],{20916:function(t,e,o){"use strict";o.r(e),o.d(e,{ContactMentorPageModule:function(){return h}});var n=o(38583),i=o(90665),s=o(19039),r=o(21382),a=o(64762),c=o(39181),u=o(58600),m=o(88720);const l=[{path:"",component:(()=>{class t{constructor(t,e,o,n,i,s){this.profile=t,this.mentors=e,this.activatedRoute=o,this.formBuilder=n,this.router=i,this.location=s}ngOnInit(){this.contactMenorForm=this.formBuilder.group({message:["",i.kI.required]}),console.log(`Valid: ${this.contactMenorForm.valid}`),this.contactMenorForm.get("message").valueChanges.subscribe(t=>{console.log(`Subscribed message: ${t}`),setTimeout(()=>{this.messageValid=!!this.contactMenorForm.valid,console.log(`Valid: ${this.contactMenorForm.valid}`)},100)}),this.message=this.contactMenorForm.value.message;const t=this.activatedRoute.snapshot.paramMap.get("id"),e=this.activatedRoute.snapshot.paramMap.get("email"),o=this.activatedRoute.snapshot.paramMap.get("name"),n=this.activatedRoute.snapshot.paramMap.get("photo");this.mentorId=t,this.mentorName=o,this.mentorEmail=e,this.mentorPhoto=n,this.userDetails()}confirm(t){return(0,a.mG)(this,void 0,void 0,function*(){yield this.sendMessage(t),yield this.router.navigate(["/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor/:name/:email/:photo/confirm",this.mentorName,this.mentorEmail,this.mentorPhoto])})}userDetails(){this.profile.getUserDetails().subscribe(t=>{this.userEmail=t.email,this.userName=t.fullName,this.userCity=t.city,this.userState=t.state,this.userAge=t.age,this.userGrade=t.grade,this.userSchool=t.school,this.userProfilePicture=t.profilePicture,this.userResume=t.resume})}sendMessage(t){this.mentors.sendMentorAnEmail(t,this.mentorName,this.mentorEmail,this.userEmail,this.userName,this.userCity,this.userState,this.userAge,this.userGrade,this.userSchool,this.userProfilePicture,this.userResume).subscribe()}back(){this.location.back()}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(c.H),m.Y36(u.u),m.Y36(r.gz),m.Y36(i.qu),m.Y36(r.F0),m.Y36(n.Ye))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-contact-mentor"]],decls:21,vars:4,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"margin-top","100px"],["size-xs","11","size-sm","10","size-md","7","size-lg","6","size-xl","5"],["id","mentor-photo"],[1,"blue-button-small","ion-float-right",3,"click"],[1,"ion-justify-content-center"],[1,"ion-text-center"],["id","mentor-photo",1,"ion-hide-lg-up",3,"src"],[3,"formGroup","ngSubmit"],["formControlName","message","rows","10","autogrow","true","required","","spellcheck","true",1,"message-input",3,"placeholder","keydown.control.enter"],["type","submit","expand","block",1,"orange-button",3,"disabled"]],template:function(t,e){1&t&&(m.TgZ(0,"ion-header",0),m.TgZ(1,"ion-toolbar"),m.TgZ(2,"ion-buttons",1),m._UZ(3,"ion-back-button"),m.qZA(),m.TgZ(4,"ion-title"),m._uU(5,"Contact Mentor"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(6,"ion-content"),m.TgZ(7,"ion-grid"),m.TgZ(8,"ion-row",2),m.TgZ(9,"ion-col",3),m._UZ(10,"div",4),m.TgZ(11,"ion-button",5),m.NdJ("click",function(){return e.back()}),m._uU(12,"Back"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(13,"ion-row",6),m.TgZ(14,"ion-col",3),m.TgZ(15,"div",7),m._UZ(16,"img",8),m.qZA(),m.TgZ(17,"form",9),m.NdJ("ngSubmit",function(){return e.confirm(e.contactMenorForm.value)}),m.TgZ(18,"ion-textarea",10),m.NdJ("keydown.control.enter",function(){return e.messageValid?e.confirm(e.contactMenorForm.value):null}),m.qZA(),m.TgZ(19,"ion-button",11),m._uU(20," Send "),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&t&&(m.xp6(16),m.s9C("src",e.mentorPhoto,m.LSH),m.xp6(1),m.Q6J("formGroup",e.contactMenorForm),m.xp6(1),m.MGl("placeholder","Have a question for a ",e.mentorName,"? Send them an email!"),m.xp6(1),m.Q6J("disabled",!e.messageValid))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,s.jY,s.Nd,s.wI,s.YG,i._Y,i.JL,i.sg,s.g2,s.j9,i.JJ,i.u,i.Q7],styles:["ion-content[_ngcontent-%COMP%]{--background:#f4f5f8}.blue-button-small[_ngcontent-%COMP%]{--background:#0055a5;opacity:1;height:24px;width:100px;font-size:.5em;font-weight:600}.name[_ngcontent-%COMP%]{display:block;font-size:1em;color:#999;opacity:0}.name[_ngcontent-%COMP%]:first-child{-webkit-animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1.3s forwards;animation:slide-in-left 1s cubic-bezier(.175,.885,.32,1.275) 1.3s forwards}#mentor-photo[_ngcontent-%COMP%]{height:100px;border-radius:100px;background-repeat:no-repeat;background-size:contain;background-position:50%;display:inline-block;opacity:1;margin:54px auto}@media screen and (min-width: 992px){#mentor-photo[_ngcontent-%COMP%]{border-radius:100px;width:100px;height:100px;position:relative;top:-38px}}.message-input[_ngcontent-%COMP%]{padding:0 8px;border-radius:5px;font-size:1.2em;border:1px solid rgba(0,81,145,.4)}.orange-button[_ngcontent-%COMP%]{margin-top:40px}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;opacity:unset}@-webkit-keyframes slide-in-left{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@keyframes slide-in-left{0%{transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes slide-in-up{0%{transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-in-up{0%{transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}"]}),t})()},{path:"confirm/:name/:email/:phone",loadChildren:()=>o.e(8265).then(o.bind(o,18265)).then(t=>t.ConfirmPageModule)}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[r.Bz.forChild(l)],r.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[n.ez,i.u5,i.UX,s.Pc,d]]}),t})()}}]);