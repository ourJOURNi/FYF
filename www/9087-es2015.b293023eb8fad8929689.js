(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[9087],{19087:function(t,e,o){"use strict";o.r(e),o.d(e,{LogoutPageModule:function(){return d}});var n=o(38583),i=o(90665),r=o(19039),s=o(21382),u=o(64762),c=o(37556),l=o(88720);const a=[{path:"",component:(()=>{class t{constructor(t,e,o,n,i){this.router=t,this.auth=e,this.toast=o,this.loading=n,this.alert=i}ngOnInit(){}presentLoading(){return(0,u.mG)(this,void 0,void 0,function*(){const t=yield this.loading.create({message:"Logging out...",duration:1e3});yield t.present(),yield t.onDidDismiss(),console.log("Loading dismissed!")})}confirmLogout(){return(0,u.mG)(this,void 0,void 0,function*(){const t=this.toast.create({message:"User has been logged out",duration:3e3}),e=yield this.loading.create({message:"Logging out...",duration:1e3}),o=yield this.alert.create({message:"Are you sure you want to logout?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{console.log("Cancelling logout"),this.router.navigate(["/home/profile"])}},{text:"Logout",handler:()=>{console.log("Logging out"),this.auth.logout(),e.present(),t.then(t=>t.present())}}]});yield o.present()})}cancel(){console.log("logout cancelled"),this.router.navigate(["/home/profile"])}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(s.F0),l.Y36(c.e),l.Y36(r.yF),l.Y36(r.HT),l.Y36(r.Br))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-logout"]],decls:14,vars:0,consts:[[1,"ion-hide-md-up"],[1,"ion-text-center"],[1,"ion-justify-content-center","ion-align-items-center","full-page"],["size","6",1,"white-background","padding"],[1,"orange-button",2,"position","relative","top","40%",3,"click"],[1,"cancel-button",3,"click"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-header",0),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-title"),l._uU(3,"Logout"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(4,"ion-content",1),l.TgZ(5,"ion-grid"),l.TgZ(6,"ion-row",2),l.TgZ(7,"ion-col",3),l.TgZ(8,"ion-button",4),l.NdJ("click",function(){return e.confirmLogout()}),l._uU(9,"Logout"),l.qZA(),l._UZ(10,"br"),l._UZ(11,"br"),l.TgZ(12,"ion-button",5),l.NdJ("click",function(){return e.cancel()}),l._uU(13,"cancel"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA())},directives:[r.Gu,r.sr,r.wd,r.W2,r.jY,r.Nd,r.wI,r.YG],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[s.Bz.forChild(a)],s.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[n.ez,i.u5,r.Pc,g]]}),t})()}}]);