!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[2256],{2256:function(o,n,r){"use strict";r.r(n),r.d(n,{ChangeProfilePicturePageModule:function(){return Z}});var i=r(38583),a=r(90665),s=r(19039),u=r(21382),c=r(64762),p=r(39181),d=r(61957),l=r(92340),g=r(64151),h=r(88720),f=r(50806),m=r(20147);function b(e,t){if(1&e&&h._UZ(0,"img",15),2&e){var o=h.oxw();h.s9C("src",o.imageUrl,h.LSH)}}function x(e,t){if(1&e&&h._UZ(0,"img",15),2&e){var o=h.oxw();h.s9C("src",o.uploadedPhotoURL,h.LSH)}}var w,P,k=[{path:"",component:(w=function(){function o(t,n,r,i,a,s,u,c,p){e(this,o),this.photo=t,this.router=n,this.profile=r,this.alert=i,this.modal=a,this.toast=s,this.loading=u,this.postEmitter=c,this.singlePostEmitterService=p,this.imageUrl=this.profile.profilePicture.getValue(),this.uploadedPhoto=!1,this.awsPrefix=this.imageUrl.slice(-51),this.BACKEND_URL=l.N.url}var n,r,i;return n=o,(r=[{key:"ngOnInit",value:function(){var e=this;this.profile.getUserDetails().subscribe(function(t){e.userEmail=t.email,console.log(e.userEmail)})}},{key:"getFormData",value:function(e){return(0,c.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var o,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=document.querySelectorAll("form"),t.next=3,o.forEach(function(e){"changePhotoForm"===e.id&&(console.log("Got Form: "+e),r.formData=new FormData(e),r.uploadedPhoto=!0)});case 3:return console.log(this.formData),n=new FileReader,t.next=7,n.addEventListener("load",function(){return(0,c.mG)(r,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.uploadedPhotoURL=n.result,console.log("Before cropping: "+n.result),e.next=4,this.cropPhoto(this.uploadedPhotoURL);case 4:case"end":return e.stop()}},e,this)}))},!0);case 7:if(!o){t.next=9;break}return t.abrupt("return",n.readAsDataURL(e.target.files[0]));case 9:case"end":return t.stop()}},t,this)}))}},{key:"uploadChangedPhoto",value:function(){var e=this,t=new FormData;t.append("oldPhotoKey",this.awsPrefix),t.append("email",this.userEmail);var o=new File([this.dataURLtoBlob(this.uploadedPhotoURL)],"picture.png");t.append("profile-picture-update",o),!0===this.uploadedPhoto&&this.photo.changeProfilePicture(t).subscribe(function(t){console.log(t);var o=t.objectUrl;e.presentLoading(),e.profile.profilePicture.next(o),e.presentToast(),e.postEmitter.postPageRefresh(),e.singlePostEmitterService.singlePostPageRefresh(),e.router.navigate(["/home/profile"])})}},{key:"presentToast",value:function(){return(0,c.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toast.create({message:"Your Profile Picture has been changed",animated:!0,cssClass:"updated-toast",duration:2e3});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)}))}},{key:"presentLoading",value:function(){return(0,c.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loading.create({cssClass:"my-custom-class",message:"Updating Photo...",duration:1e3});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onDidDismiss();case 7:console.log("Loading dismissed!");case 8:case"end":return e.stop()}},e,this)}))}},{key:"cropPhoto",value:function(e){return(0,c.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var o,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modal.create({component:g.W,cssClass:"image-cropper",componentProps:{uploadedPhotoURL:e}});case 2:return o=t.sent,t.next=5,o.present();case 5:o.onDidDismiss().then(function(e){n.uploadedPhotoURL=e.data});case 6:case"end":return t.stop()}},t,this)}))}},{key:"dataURLtoBlob",value:function(e){for(var t=e.split(","),o=t[0].match(/:(.*?);/)[1],n=atob(t[1]),r=n.length,i=new Uint8Array(r);r--;)i[r]=n.charCodeAt(r);return new Blob([i],{type:o})}},{key:"goBack",value:function(){this.router.navigate(["/home/profile"])}}])&&t(n.prototype,r),i&&t(n,i),o}(),w.\u0275fac=function(e){return new(e||w)(h.Y36(d.T),h.Y36(u.F0),h.Y36(p.H),h.Y36(s.Br),h.Y36(s.IN),h.Y36(s.yF),h.Y36(s.HT),h.Y36(f.p),h.Y36(m.U))},w.\u0275cmp=h.Xpm({type:w,selectors:[["app-change-profile-picture"]],decls:30,vars:3,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"ion-text-center"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","10","size-md","8","size-lg","6","size-xl","4"],[1,"text-header"],["id","profile-picture","alt","Profile Picture",3,"src",4,"ngIf"],["id","changePhotoForm",3,"ngSubmit"],["name","profile-picture-update","placeholder","Upload Image","type","file",3,"change"],["type","submit",1,"orange-button",3,"disabled"],["id","profile-picture","alt","Profile Picture",3,"src"]],template:function(e,t){1&e&&(h.TgZ(0,"ion-header",0),h.TgZ(1,"ion-toolbar"),h.TgZ(2,"ion-buttons",1),h._UZ(3,"ion-back-button"),h.qZA(),h.TgZ(4,"ion-title"),h._uU(5,"Change Profile Picture"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(6,"ion-content",2),h.TgZ(7,"ion-grid"),h.TgZ(8,"ion-row",3),h.TgZ(9,"ion-col",4),h.TgZ(10,"ion-toolbar",5),h.TgZ(11,"ion-buttons",1),h.TgZ(12,"h1"),h._uU(13,"Change Profile Picture"),h.qZA(),h.qZA(),h.TgZ(14,"ion-buttons",6),h.TgZ(15,"ion-button",7),h.NdJ("click",function(){return t.goBack()}),h._uU(16," Back "),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(17,"ion-row",8),h.TgZ(18,"ion-col",9),h.TgZ(19,"h6",10),h._uU(20,"Please select the profile picture you will use to replace your current one. Only pictures with the extentions "),h.TgZ(21,"span"),h._uU(22,"'.png', '.jpg', and '.jpeg'"),h.qZA(),h._uU(23," are allowed. "),h.qZA(),h.YNc(24,b,1,1,"img",11),h.YNc(25,x,1,1,"img",11),h.TgZ(26,"form",12),h.NdJ("ngSubmit",function(){return t.uploadChangedPhoto()}),h.TgZ(27,"input",13),h.NdJ("change",function(e){return t.getFormData(e)}),h.qZA(),h.TgZ(28,"ion-button",14),h._uU(29,"Update "),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA()),2&e&&(h.xp6(24),h.Q6J("ngIf",!t.uploadedPhoto),h.xp6(1),h.Q6J("ngIf",t.uploadedPhoto),h.xp6(3),h.Q6J("disabled",!t.imageUrl))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,s.jY,s.Nd,s.wI,s.YG,i.O5,a._Y,a.JL,a.F],styles:[".desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0d2e4d);height:24px;--border-radius:5px;width:100px;font-size:.5em;font-weight:600;display:block}#profile-picture[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:100px;margin:50px auto;display:block;opacity:0;border:2px solid #005191;-webkit-animation:pic-slide-right .5s cubic-bezier(.175,.885,.32,1.275) .5s forwards;animation:pic-slide-right .5s cubic-bezier(.175,.885,.32,1.275) .5s forwards}.orange-button[_ngcontent-%COMP%]{width:unset;display:block;margin:40px auto;width:200px}.blue-button[_ngcontent-%COMP%]{width:200px}.skip-button[_ngcontent-%COMP%]{display:block;--background:none;color:#888;--border-color:#888;--border-width:3px;--border-style:solid;width:200px;margin:40px auto;opacity:.5}.blue-button[_ngcontent-%COMP%], .skip-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none}.blue-button[_ngcontent-%COMP%]{width:unset;opacity:unset}.wrapper[_ngcontent-%COMP%]{box-shadow:1px 1px 10px rgba(0,0,0,.1);height:auto;padding:50px}#default-picture-wrapper[_ngcontent-%COMP%]{height:100px;width:100px;margin:20px auto 50px;border-radius:50px;background-image:url(default-pro-picture.svg);opacity:0;-webkit-animation:slide-up .5s cubic-bezier(.175,.885,.32,1) .5s forwards;animation:slide-up .5s cubic-bezier(.175,.885,.32,1) .5s forwards}#upload-picture-wrapper[_ngcontent-%COMP%]{height:100px;width:100px;border:4px solid #005191;margin:0 auto 50px;border-radius:50px;-webkit-animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) .5s forwards;animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) .5s forwards}span[_ngcontent-%COMP%]{color:#ffb351;font-weight:600;background:#999;padding:6px;line-height:1.5em;border-radius:5px}#next-button[_ngcontent-%COMP%]{width:100%;height:60px;background:#d3d3d3;position:absolute;bottom:0;font-size:1em}.cancel-button[_ngcontent-%COMP%]{color:#e4405f;--background:none;--background-hover:none;height:50px;width:200px;box-shadow:1px 1px 10px rgba(0,0,0,.1);transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.cancel-button[_ngcontent-%COMP%]:hover{box-shadow:1px 1px 10px rgba(0,0,0,.4)}.camera-button[_ngcontent-%COMP%]{--background:#fff;--color:#005191;--border-style:solid;--border-width:1px;--border-color:#005191;border:1px;margin:30px auto}input[type=file][_ngcontent-%COMP%]{color:#fff;font-size:1.2em;font-weight:600;border:1px solid #005191;background:linear-gradient(#0672c4,#005191);width:400px;height:50px;border-radius:5px;padding:20px 0 0 20px;text-align:center;cursor:pointer}input[type=file][_ngcontent-%COMP%]::-webkit-file-upload-button{visibility:hidden}#img-wrapper[_ngcontent-%COMP%]{height:150px;width:150px;margin:50px auto}@-webkit-keyframes lide-up{0%{transform:translateY(100px)}to{transform:translateY(0);opacity:1}}@keyframes lide-up{0%{transform:translateY(100px)}to{transform:translateY(0);opacity:1}}"]}),w)},{path:"confirm",loadChildren:function(){return r.e(5597).then(r.bind(r,15597)).then(function(e){return e.ConfirmPageModule})}}],v=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[u.Bz.forChild(k)],u.Bz]}),t}(),y=r(63078),Z=((P=function t(){e(this,t)}).\u0275fac=function(e){return new(e||P)},P.\u0275mod=h.oAB({type:P}),P.\u0275inj=h.cJS({imports:[[i.ez,a.u5,s.Pc,v,y.ImageCropperPageModule]]}),P)}}])}();