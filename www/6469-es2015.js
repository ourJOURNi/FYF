(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[6469],{46469:function(i,t,o){"use strict";o.r(t),o.d(t,{NotificationsPageModule:function(){return m}});var n=o(38583),e=o(90665),s=o(19039),c=o(21382),a=o(64762),l=o(1473),r=o(39181),f=o(20445),d=o(88720);function u(i,t){1&i&&(d.TgZ(0,"ion-row",5),d.TgZ(1,"ion-col",6),d.TgZ(2,"h3",7),d._uU(3,"You have no notifications"),d.qZA(),d._UZ(4,"img",8),d.qZA(),d.qZA())}function g(i,t){if(1&i){const i=d.EpF();d.TgZ(0,"ion-item-sliding",11),d.NdJ("click",function(){return d.CHM(i),d.oxw(2).goTo()}),d.TgZ(1,"ion-item",12),d.TgZ(2,"ion-avatar"),d._UZ(3,"img",13),d.qZA(),d.TgZ(4,"p",14),d._uU(5),d.qZA(),d.TgZ(6,"p",15),d._uU(7),d.qZA(),d.qZA(),d.TgZ(8,"ion-item-options",16),d.NdJ("ionSwipe",function(t){const o=d.CHM(i).$implicit;return d.oxw(2).deleteSwipe(t,o.notiID)}),d.TgZ(9,"ion-item-option",17),d._uU(10,"Slide left to Delete"),d.qZA(),d.qZA(),d.qZA()}if(2&i){const i=t.$implicit;d.xp6(3),d.Q6J("src",i.instigatingUserProfilePicture,d.LSH),d.xp6(2),d.Oqu(i.message),d.xp6(2),d.Oqu(i.date)}}function h(i,t){if(1&i&&(d.TgZ(0,"ion-row",5),d.TgZ(1,"ion-col",9),d.TgZ(2,"ion-list"),d.YNc(3,g,11,3,"ion-item-sliding",10),d.qZA(),d.qZA(),d.qZA()),2&i){const i=d.oxw();d.xp6(3),d.Q6J("ngForOf",i.allNotifications)}}const p=[{path:"",component:(()=>{class i{constructor(i,t,o,n){this.notifications=i,this.profile=t,this.toast=o,this.router=n,this.noNotifications=!1}ngOnDestroy(){this.notificationsSub.unsubscribe()}ngOnInit(){this.initSub=this.profile.getUserDetails().subscribe(i=>{this.userEmail=i.email,this.notificationsSub=this.notifications.getNotifications(this.userEmail).subscribe(i=>{console.log(i),this.allNotifications=Object.values(i),this.noNotifications=this.allNotifications.length<=0||this.allNotifications===[],this.notifications.notifications$.next(Object.values(i)),this.notifications.notifications$.subscribe(t=>{for(let o of this.allNotifications)o.date=(0,f.Z)(new Date(o.date),{includeSeconds:!0,addSuffix:!1}),this.allNotifications=Object.values(i),console.log(this.allNotifications)})})})}clear(){this.notifications.clearNotifications(this.userEmail).subscribe(i=>{this.notificationsSub=this.notifications.getNotifications(this.userEmail).subscribe(i=>{console.log(i),this.notifications.notifications$.next(Object.values(i)),this.notifications.notifications$.subscribe(i=>{this.allNotifications=Object.values(i);for(let t of this.allNotifications)t.date=(0,f.Z)(new Date(t.date),{includeSeconds:!0,addSuffix:!1});this.allNotifications.length<=0||this.allNotifications===[]?this.noNotifications=!0:(this.noNotifications=!1,this.clearedToast())})})})}clearedToast(){return(0,a.mG)(this,void 0,void 0,function*(){const i=yield this.toast.create({message:"Cleared Notifications.",cssClass:"danger-toast",duration:2e3});yield i.present()})}back(){this.router.navigateByUrl("home/posts")}goTo(){console.log("Going to page from notification")}deleteSwipe(i,t){return(0,a.mG)(this,void 0,void 0,function*(){if(console.log(i),!i)throw Error("No Swipe Event returned.");console.log("Delete Swipe ... "),yield this.deleteNotification(t),yield this.deletedToast()})}deleteNotification(i){this.notifications.deleteNotification(this.userEmail,i).subscribe(i=>{console.log(i),this.allNotifications=Object.values(i);for(let t of this.allNotifications)t.date=(0,f.Z)(new Date(t.date),{includeSeconds:!0,addSuffix:!1}),console.log(this.allNotifications);this.noNotifications=this.allNotifications.length<=0||this.allNotifications===[]})}deletedToast(){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:"Deleted.",cssClass:"danger-toast",duration:2e3})).present()})}}return i.\u0275fac=function(t){return new(t||i)(d.Y36(l.T),d.Y36(r.H),d.Y36(s.yF),d.Y36(c.F0))},i.\u0275cmp=d.Xpm({type:i,selectors:[["app-notifications"]],decls:12,vars:2,consts:[[1,"ion-hide-lg-up"],["slot","start"],["slot","end"],["id","clear-button",3,"click"],["class","ion-justify-content-center",4,"ngIf"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","12","size-md","10","size-lg","8","size-xl","6",1,"margin-top","ion-text-center"],["id","no-notifications"],["id","icon","src","../../../../assets/icons/no-notifications-icon.svg","alt",""],["size-xs","12","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["lines","none"],[3,"src"],["id","message"],["id","date"],["side","end",3,"ionSwipe"],["id","delete-noti"]],template:function(i,t){1&i&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-buttons",1),d._UZ(3,"ion-back-button"),d.TgZ(4,"ion-title"),d._uU(5,"Notifications"),d.qZA(),d.qZA(),d.TgZ(6,"ion-buttons",2),d.TgZ(7,"ion-button",3),d.NdJ("click",function(){return t.clear()}),d._uU(8," Clear "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(9,"ion-content"),d.YNc(10,u,5,0,"ion-row",4),d.YNc(11,h,4,1,"ion-row",4),d.qZA()),2&i&&(d.xp6(10),d.Q6J("ngIf",t.noNotifications),d.xp6(1),d.Q6J("ngIf",!t.noNotifications))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.YG,s.W2,n.O5,s.Nd,s.wI,s.q_,n.sg,s.td,s.Ie,s.BJ,s.IK,s.u8],styles:["p[_ngcontent-%COMP%]{font-size:.7em;margin-left:10px}#message[_ngcontent-%COMP%]{box-shadow:1px 10px 26px rgba(0,0,0,.05)}ion-list[_ngcontent-%COMP%]{background:none;padding-top:0;padding-bottom:0}ion-item[_ngcontent-%COMP%]{border-bottom:1px solid #e9e9e9}#clear-button[_ngcontent-%COMP%]{--background:linear-gradient(rgba(6,114,196,0.3),rgba(0,81,145,0.2));--color:#fff;--border-color:#fff;--border-style:solid;--border-width:2px;font-weight:600;margin-right:20px;width:80px}#delete-noti[_ngcontent-%COMP%]{background:#e3405f;font-weight:600}#date[_ngcontent-%COMP%]{opacity:.5;display:inline-block}#icon[_ngcontent-%COMP%]{opacity:.2}#no-notifications[_ngcontent-%COMP%]{opacity:.3}.margin-top[_ngcontent-%COMP%]{margin-top:15%}.blue-button[_ngcontent-%COMP%]{width:100px}"]}),i})()}];let b=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=d.oAB({type:i}),i.\u0275inj=d.cJS({imports:[[c.Bz.forChild(p)],c.Bz]}),i})(),m=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=d.oAB({type:i}),i.\u0275inj=d.cJS({imports:[[n.ez,e.u5,s.Pc,b]]}),i})()}}]);