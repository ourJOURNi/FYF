(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[2370],{2370:function(o,e,t){"use strict";t.r(e),t.d(e,{PersonalInfoPageModule:function(){return p}});var n=t(38583),i=t(90665),r=t(19039),l=t(21382),a=t(37556),u=t(88720);const c=["ioninput"],s=[{path:"",component:(()=>{class o{constructor(o,e,t){this.formBuilder=o,this.router=e,this.auth=t,this.validationMessasges={phone:[{type:"text",message:"Phone Number has to be 10 digits (xxx) xxx - xxxx"}]},this.fullNamePattern="/^([^0-9]*)$/",this.phonePattern=""}ngOnInit(){this.userInfoForm=this.formBuilder.group({fullName:["",i.kI.compose([i.kI.required])],gender:"",dob:"",school:["",i.kI.required],phone:["",i.kI.required],grade:["",i.kI.required],about:["",i.kI.required]}),this.formOnChanges()}goToProfilePicturePage(o){console.log(o),this.auth.getPersonalInfo(o),this.router.navigate(["/personal-info/profile-picture"])}cancel(){console.log("Sign up cancelled"),this.router.navigate([""])}formOnChanges(){console.log(this.userInfoForm)}}return o.\u0275fac=function(e){return new(e||o)(u.Y36(i.qu),u.Y36(l.F0),u.Y36(a.e))},o.\u0275cmp=u.Xpm({type:o,selectors:[["app-personal-info"]],viewQuery:function(o,e){if(1&o&&u.Gf(c,5),2&o){let o;u.iGM(o=u.CRH())&&(e.inputElement=o.first)}},decls:68,vars:1,consts:[[1,"ion-hide-md-up"],["slot","start"],["slot","end"],["height","32","src","../../../../../assets/icon/fyf-white-icon.svg",2,"margin-right","16px"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../../../assets/icon/Logo 2.0.svg","alt","","srcset",""],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size","12",1,"ion-text-center"],[1,"text-header"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["autocapitalize","on","required","","inputmode","text","formControlName","fullName","placeholder","First & Last Name"],["ioninput",""],["autocapitalize","on","required","","maxlength","10","inputmode","text","formControlName","phone","placeholder","Phone: (xxx) xxx - xxxx"],["required","","formControlName","gender","placeholder","Gender"],["value","female"],["value","male"],["required","","min","2000","displayFormat","DDD. MMM DD, YY","placeholder","Select Date","formControlName","dob","monthShortNames","Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec"],["required","","formControlName","school","placeholder","School"],["required","","formControlName","grade","placeholder","Grade"],["value","7th Grade"],["value","8th Grade"],["value","High School - Freshmen"],["value","High School - Sophmore"],["value","High School - Junior"],["value","High School - Senior"],["value","Collge - Freshmen"],["value","Collge - Sophmore"],["autogrow","true","autocapitalize","true","rows","10","spellcheck","true","wrap","soft","type","text","maxlength","300","placeholder","About Me - 300 Character Limit","formControlName","about"],[1,"ion-text-center"],["type","submit",1,"orange-button"],[1,"cancel-button",3,"click"]],template:function(o,e){1&o&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-buttons",1),u._UZ(3,"ion-back-button"),u.qZA(),u.TgZ(4,"ion-buttons",2),u._UZ(5,"img",3),u.qZA(),u.TgZ(6,"ion-title"),u._uU(7,"Sign Up"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(8,"ion-content"),u.TgZ(9,"ion-grid"),u.TgZ(10,"ion-row",4),u.TgZ(11,"ion-col",5),u.TgZ(12,"ion-toolbar",6),u.TgZ(13,"ion-buttons",1),u._UZ(14,"img",7),u.qZA(),u.TgZ(15,"ion-buttons",2),u.TgZ(16,"ion-button",8),u.NdJ("click",function(){return e.cancel()}),u._uU(17," Back "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(18,"ion-row",9),u.TgZ(19,"ion-col",10),u.TgZ(20,"h6",11),u._uU(21,"Please enter your profile information."),u.qZA(),u.qZA(),u.qZA(),u.TgZ(22,"ion-row",9),u.TgZ(23,"ion-col",12),u.TgZ(24,"form",13),u.NdJ("ngSubmit",function(){return e.goToProfilePicturePage(e.userInfoForm.value)}),u.TgZ(25,"ion-list",14),u.TgZ(26,"ion-item"),u._UZ(27,"ion-input",15,16),u.qZA(),u.TgZ(29,"ion-item"),u._UZ(30,"ion-input",17),u.qZA(),u.TgZ(31,"ion-item"),u.TgZ(32,"ion-select",18),u.TgZ(33,"ion-select-option",19),u._uU(34,"Female"),u.qZA(),u.TgZ(35,"ion-select-option",20),u._uU(36,"Male"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(37,"ion-item"),u.TgZ(38,"ion-label"),u._uU(39,"Date of Birth"),u.qZA(),u._UZ(40,"ion-datetime",21),u.qZA(),u.TgZ(41,"ion-item"),u._UZ(42,"ion-input",22),u.qZA(),u.TgZ(43,"ion-item"),u.TgZ(44,"ion-select",23),u.TgZ(45,"ion-select-option",24),u._uU(46,"Middle School - 7th Grade"),u.qZA(),u.TgZ(47,"ion-select-option",25),u._uU(48,"Middle School - 8th Grade"),u.qZA(),u.TgZ(49,"ion-select-option",26),u._uU(50,"High School - Freshmen"),u.qZA(),u.TgZ(51,"ion-select-option",27),u._uU(52,"High School - Sophmore"),u.qZA(),u.TgZ(53,"ion-select-option",28),u._uU(54,"High School - Junior"),u.qZA(),u.TgZ(55,"ion-select-option",29),u._uU(56,"High School - Senior"),u.qZA(),u.TgZ(57,"ion-select-option",30),u._uU(58,"College - Freshmen"),u.qZA(),u.TgZ(59,"ion-select-option",31),u._uU(60,"College - Sophmore"),u.qZA(),u.qZA(),u.qZA(),u._UZ(61,"ion-textarea",32),u.qZA(),u.TgZ(62,"div",33),u.TgZ(63,"ion-button",34),u._uU(64,"NEXT"),u.qZA(),u._UZ(65,"br"),u.TgZ(66,"ion-button",35),u.NdJ("click",function(){return e.auth.cancelSignUp()}),u._uU(67," cancel "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&o&&(u.xp6(24),u.Q6J("formGroup",e.userInfoForm))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,r.jY,r.Nd,r.wI,r.YG,i._Y,i.JL,i.sg,r.q_,r.Ie,r.pK,r.j9,i.Q7,i.JJ,i.u,i.nD,r.t9,r.QI,r.n0,r.Q$,r.x4,r.g2],styles:[".blue-button[_ngcontent-%COMP%]{margin:0 0 100px}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0c375f);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.cancel-button[_ngcontent-%COMP%]{color:#e4405f;--background:none;--background-hover:linear-gradient(#f15b77,#e4405f);height:40px;width:200px;margin-bottom:100px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}ion-textarea[_ngcontent-%COMP%]{background:#fff;transition:.2s;border-radius:4px;padding:8px;box-shadow:1px 10px 26px rgba(0,0,0,.05);border:2px solid #0055a5}.char-limit[_ngcontent-%COMP%]{float:right;position:relative;top:20px;margin-bottom:80px;color:#e4405f}"]}),o})()},{path:"profile-picture",loadChildren:()=>Promise.all([t.e(3078),t.e(8592),t.e(7540)]).then(t.bind(t,67540)).then(o=>o.ProfilePicturePageModule)}];let g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[l.Bz.forChild(s)],l.Bz]}),o})(),p=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[n.ez,i.u5,r.Pc,i.UX,g]]}),o})()}}]);