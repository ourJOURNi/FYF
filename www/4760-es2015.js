(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[4760],{14760:function(e,t,o){"use strict";o.r(t),o.d(t,{UpdateResumePageModule:function(){return m}});var i=o(38583),n=o(90665),s=o(19039),r=o(21382),a=o(64762),u=o(39181),d=o(14153),l=o(88720);const c=[{path:"",component:(()=>{class e{constructor(e,t,o,i,n,s){this.resume=e,this.router=t,this.profile=o,this.alert=i,this.toast=n,this.loading=s,this.userProPicUrl=this.profile.resume.getValue(),this.awsPrefix=this.userProPicUrl.slice(-51)}ngOnInit(){this.profile.getUserDetails().subscribe(e=>{this.userEmail=e.email,console.log(this.userEmail)})}goBack(){this.router.navigate(["/home/profile/view-resume"])}getFormData(e){const t=document.querySelectorAll("form");t.forEach(e=>{"changeResumeForm"===e.id&&(console.log("Got Form: "+e),this.formData=new FormData(e),this.uploadedResume=!0)}),console.log(this.formData);let o=new FileReader;o.addEventListener("load",()=>{this.uploadedPhotoURL=o.result},!1),t&&o.readAsDataURL(e.target.files[0])}uploadResume(){document.querySelectorAll("form").forEach(e=>{"changeResumeForm"===e.id&&(console.log("Got Form: "+e),this.formData=new FormData(e),this.formData.append("oldResumeKey",this.awsPrefix),this.formData.append("email",this.userEmail))}),this.resume.changeResume(this.formData).subscribe(e=>(0,a.mG)(this,void 0,void 0,function*(){console.log(e);let t=e.objectUrl;console.log(t),yield this.presentLoading(),yield this.profile.resume.next(t),yield this.presentToast(),yield this.router.navigate(["/home/profile/view-resume"])}))}presentToast(){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:"Your Resume has been changed",animated:!0,cssClass:"updated-toast",duration:2e3})).present()})}presentLoading(){return(0,a.mG)(this,void 0,void 0,function*(){const e=yield this.loading.create({cssClass:"my-custom-class",message:"Updating Resume...",duration:1e3});yield e.present(),yield e.onDidDismiss(),console.log("Loading dismissed!")})}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(d.B),l.Y36(r.F0),l.Y36(u.H),l.Y36(s.Br),l.Y36(s.yF),l.Y36(s.HT))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-update-resume"]],decls:27,vars:1,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","10","size-md","8","size-lg","6","size-xl","6",1,"ion-text-center"],[1,"text-header"],["size-xs","11","size-sm","10","size-md","8","size-lg","4",1,"ion-text-center"],["id","changeResumeForm",3,"ngSubmit"],["name","resume-update","placeholder","Upload Resume","type","file",3,"change"],["type","submit",1,"orange-button",3,"disabled"]],template:function(e,t){1&e&&(l.TgZ(0,"ion-header",0),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",1),l._UZ(3,"ion-back-button"),l.qZA(),l.TgZ(4,"ion-title"),l._uU(5,"Update Resume"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"ion-content"),l.TgZ(7,"ion-grid"),l.TgZ(8,"ion-row",2),l.TgZ(9,"ion-col",3),l.TgZ(10,"ion-toolbar",4),l.TgZ(11,"ion-buttons",1),l.TgZ(12,"h1"),l._uU(13,"Update Resume "),l.qZA(),l.qZA(),l.TgZ(14,"ion-buttons",5),l.TgZ(15,"ion-button",6),l.NdJ("click",function(){return t.goBack()}),l._uU(16," Back "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(17,"ion-row",7),l.TgZ(18,"ion-col",8),l.TgZ(19,"h6",9),l._uU(20,"Please upload a resume from your phone"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(21,"ion-row",7),l.TgZ(22,"ion-col",10),l.TgZ(23,"form",11),l.NdJ("ngSubmit",function(){return t.uploadResume()}),l.TgZ(24,"input",12),l.NdJ("change",function(e){return t.getFormData(e)}),l.qZA(),l.TgZ(25,"ion-button",13),l._uU(26,"Update "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(25),l.Q6J("disabled",!t.uploadedPhotoURL))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,s.jY,s.Nd,s.wI,s.YG,n._Y,n.JL,n.F],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0d2e4d);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}.text-header[_ngcontent-%COMP%]{background:#e4ebf1}input[type=file][_ngcontent-%COMP%]{color:#fff;font-size:1.2em;font-weight:600;border:1px solid #005191;background:linear-gradient(#0672c4,#005191);width:400px;height:50px;border-radius:5px;padding:20px 0 0 20px;text-align:center;cursor:pointer}input[type=file][_ngcontent-%COMP%]::-webkit-file-upload-button{visibility:hidden}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[r.Bz.forChild(c)],r.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.ez,n.u5,s.Pc,g]]}),e})()}}]);