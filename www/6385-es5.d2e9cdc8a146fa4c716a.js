!function(){function o(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function e(o,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[6385],{66385:function(n,t,i){"use strict";i.r(t),i.d(t,{ChangeSchoolPageModule:function(){return f}});var r,l,c=i(38583),a=i(90665),u=i(19039),s=i(21382),h=i(39181),g=i(37556),d=i(88720),p=[{path:"",component:(r=function(){function n(e,t,i,r,l){o(this,n),this.activatedRoute=e,this.formBuilder=t,this.profile=i,this.auth=r,this.router=l,this.activeEmail=this.profile.email.getValue(),this.school=this.profile.school.getValue(),this.grade=this.profile.grade.getValue(),this.activeEmail=this.auth.user.email}var t,i,r;return t=n,(i=[{key:"ngOnInit",value:function(){this.changeSchool=this.formBuilder.group({newSchool:["".concat(this.school),a.kI.required],newGrade:["",a.kI.required],password:["",a.kI.required]})}},{key:"confirmChangedSchool",value:function(o,e,n,t){this.profile.changeSchool(o,e,n,t)}},{key:"goBack",value:function(){this.router.navigate(["/home/profile"])}}])&&e(t.prototype,i),r&&e(t,r),n}(),r.\u0275fac=function(o){return new(o||r)(d.Y36(s.gz),d.Y36(a.qu),d.Y36(h.H),d.Y36(g.e),d.Y36(s.F0))},r.\u0275cmp=d.Xpm({type:r,selectors:[["app-change-school"]],decls:51,vars:3,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-text-center"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","10","size-md","8","size-lg","6","size-xl","6",1,"ion-text-center"],[1,"text-header"],["size-xs","11","size-sm","10","size-md","8","size-lg","4"],[3,"formGroup","ngSubmit"],[1,"line-input"],["required","","placeholder","Name of new school","formControlName","newSchool","type",""],["required","","formControlName","newGrade","placeholder","Grade"],["value","7th Grade"],["value","8th Grade"],["value","High School - Freshmen"],["value","High School - Sophmore"],["value","High School - Junior"],["value","High School - Senior"],["value","Collge - Freshmen"],["value","Collge - Sophmore"],["required","","placeholder","Password","formControlName","password","type","password"],["type","submit",1,"orange-button",2,"width","unset"]],template:function(o,e){1&o&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-buttons",1),d._UZ(3,"ion-back-button"),d.qZA(),d.TgZ(4,"ion-title"),d._uU(5,"Change School/Grade"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(6,"ion-content"),d.TgZ(7,"ion-grid",2),d.TgZ(8,"ion-row",3),d.TgZ(9,"ion-col",4),d.TgZ(10,"ion-toolbar",5),d.TgZ(11,"ion-buttons",1),d.TgZ(12,"h1"),d._uU(13,"Change Grade & School"),d.qZA(),d.qZA(),d.TgZ(14,"ion-buttons",6),d.TgZ(15,"ion-button",7),d.NdJ("click",function(){return e.goBack()}),d._uU(16," Back "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(17,"ion-row",8),d.TgZ(18,"ion-col",9),d.TgZ(19,"h6",10),d._uU(20),d._UZ(21,"br"),d._uU(22),d.qZA(),d.qZA(),d.qZA(),d.TgZ(23,"ion-row",8),d.TgZ(24,"ion-col",11),d.TgZ(25,"form",12),d.NdJ("ngSubmit",function(){return e.confirmChangedSchool(e.activeEmail,e.changeSchool.controls.newSchool.value,e.changeSchool.controls.newGrade.value,e.changeSchool.controls.password.value)}),d.TgZ(26,"ion-list",13),d.TgZ(27,"ion-item"),d._UZ(28,"ion-input",14),d.qZA(),d.TgZ(29,"ion-item"),d.TgZ(30,"ion-select",15),d.TgZ(31,"ion-select-option",16),d._uU(32,"Middle School - 7th Grade"),d.qZA(),d.TgZ(33,"ion-select-option",17),d._uU(34,"Middle School - 8th Grade"),d.qZA(),d.TgZ(35,"ion-select-option",18),d._uU(36,"High School - Freshmen"),d.qZA(),d.TgZ(37,"ion-select-option",19),d._uU(38,"High School - Sophmore"),d.qZA(),d.TgZ(39,"ion-select-option",20),d._uU(40,"High School - Junior"),d.qZA(),d.TgZ(41,"ion-select-option",21),d._uU(42,"High School - Senior"),d.qZA(),d.TgZ(43,"ion-select-option",22),d._uU(44,"College - Freshmen"),d.qZA(),d.TgZ(45,"ion-select-option",23),d._uU(46,"College - Sophmore"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(47,"ion-item"),d._UZ(48,"ion-input",24),d.qZA(),d.qZA(),d.TgZ(49,"ion-button",25),d._uU(50,"CHANGE SCHOOL"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&o&&(d.xp6(20),d.Oqu(e.grade),d.xp6(2),d.Oqu(e.school),d.xp6(3),d.Q6J("formGroup",e.changeSchool))},directives:[u.Gu,u.sr,u.Sm,u.oU,u.cs,u.wd,u.W2,u.jY,u.Nd,u.wI,u.YG,a._Y,a.JL,a.sg,u.q_,u.Ie,u.pK,u.j9,a.Q7,a.JJ,a.u,u.t9,u.QI,u.n0],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0d2e4d);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.text-header[_ngcontent-%COMP%]{background:#e4ebf1}"]}),r)},{path:"confirm",loadChildren:function(){return i.e(2767).then(i.bind(i,2767)).then(function(o){return o.ConfirmPageModule})}}],Z=function(){var e=function e(){o(this,e)};return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[s.Bz.forChild(p)],s.Bz]}),e}(),f=((l=function e(){o(this,e)}).\u0275fac=function(o){return new(o||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[[c.ez,a.u5,u.Pc,a.UX,Z]]}),l)}}])}();