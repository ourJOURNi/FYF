!function(){function t(t,i){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,i){if(!t)return;if("string"==typeof t)return n(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,i)}(t))||i&&t&&"number"==typeof t.length){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==e.return||e.return()}finally{if(c)throw a}}}}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[6469],{46469:function(n,o,r){"use strict";r.r(o),r.d(o,{NotificationsPageModule:function(){return N}});var a=r(38583),s=r(90665),c=r(19039),u=r(21382),l=r(64762),f=r(8351),d=r(39181),g=r(20445),p=r(88720);function b(t,n){1&t&&(p.TgZ(0,"ion-row",5),p.TgZ(1,"ion-col",6),p.TgZ(2,"h3",7),p._uU(3,"You have no notifications"),p.qZA(),p._UZ(4,"img",8),p.qZA(),p.qZA())}function m(t,n){if(1&t){var i=p.EpF();p.TgZ(0,"ion-item-sliding",11),p.NdJ("click",function(){return p.CHM(i),p.oxw(2).goTo()}),p.TgZ(1,"ion-item",12),p.TgZ(2,"ion-avatar"),p._UZ(3,"img",13),p.qZA(),p.TgZ(4,"p",14),p._uU(5),p.qZA(),p.TgZ(6,"p",15),p._uU(7),p.qZA(),p.qZA(),p.TgZ(8,"ion-item-options",16),p.NdJ("ionSwipe",function(t){var n=p.CHM(i).$implicit;return p.oxw(2).deleteSwipe(t,n.notiID)}),p.TgZ(9,"ion-item-option",17),p._uU(10,"Slide left to Delete"),p.qZA(),p.qZA(),p.qZA()}if(2&t){var e=n.$implicit;p.xp6(3),p.Q6J("src",e.instigatingUserProfilePicture,p.LSH),p.xp6(2),p.Oqu(e.message),p.xp6(2),p.Oqu(e.date)}}function h(t,n){if(1&t&&(p.TgZ(0,"ion-row",5),p.TgZ(1,"ion-col",9),p.TgZ(2,"ion-list"),p.YNc(3,m,11,3,"ion-item-sliding",10),p.qZA(),p.qZA(),p.qZA()),2&t){var i=p.oxw();p.xp6(3),p.Q6J("ngForOf",i.allNotifications)}}var v,y,Z=[{path:"",component:(v=function(){function n(t,e,o,r){i(this,n),this.notifications=t,this.profile=e,this.toast=o,this.router=r,this.noNotifications=!1}var o,r,a;return o=n,(r=[{key:"ngOnDestroy",value:function(){this.notificationsSub.unsubscribe()}},{key:"ngOnInit",value:function(){var n=this;this.initSub=this.profile.getUserDetails().subscribe(function(i){n.userEmail=i.email,n.notificationsSub=n.notifications.getNotifications(n.userEmail).subscribe(function(i){console.log(i),n.allNotifications=Object.values(i),n.noNotifications=n.allNotifications.length<=0||n.allNotifications===[],n.notifications.notifications$.next(Object.values(i)),n.notifications.notifications$.subscribe(function(e){var o,r=t(n.allNotifications);try{for(r.s();!(o=r.n()).done;){var a=o.value;a.date=(0,g.Z)(new Date(a.date),{includeSeconds:!0,addSuffix:!1}),n.allNotifications=Object.values(i),console.log(n.allNotifications)}}catch(s){r.e(s)}finally{r.f()}})})})}},{key:"clear",value:function(){var n=this;this.notifications.clearNotifications(this.userEmail).subscribe(function(i){n.notificationsSub=n.notifications.getNotifications(n.userEmail).subscribe(function(i){console.log(i),n.notifications.notifications$.next(Object.values(i)),n.notifications.notifications$.subscribe(function(i){n.allNotifications=Object.values(i);var e,o=t(n.allNotifications);try{for(o.s();!(e=o.n()).done;){var r=e.value;r.date=(0,g.Z)(new Date(r.date),{includeSeconds:!0,addSuffix:!1})}}catch(a){o.e(a)}finally{o.f()}n.allNotifications.length<=0||n.allNotifications===[]?n.noNotifications=!0:(n.noNotifications=!1,n.clearedToast())})})})}},{key:"clearedToast",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toast.create({message:"Cleared Notifications.",cssClass:"danger-toast",duration:2e3});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))}},{key:"back",value:function(){this.router.navigateByUrl("home/posts")}},{key:"goTo",value:function(){console.log("Going to page from notification")}},{key:"deleteSwipe",value:function(t,n){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(console.log(t),t){i.next=2;break}throw Error("No Swipe Event returned.");case 2:return console.log("Delete Swipe ... "),i.next=5,this.deleteNotification(n);case 5:return i.next=7,this.deletedToast();case 7:case"end":return i.stop()}},i,this)}))}},{key:"deleteNotification",value:function(n){var i=this;this.notifications.deleteNotification(this.userEmail,n).subscribe(function(n){console.log(n),i.allNotifications=Object.values(n);var e,o=t(i.allNotifications);try{for(o.s();!(e=o.n()).done;){var r=e.value;r.date=(0,g.Z)(new Date(r.date),{includeSeconds:!0,addSuffix:!1}),console.log(i.allNotifications)}}catch(a){o.e(a)}finally{o.f()}i.noNotifications=i.allNotifications.length<=0||i.allNotifications===[]})}},{key:"deletedToast",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toast.create({message:"Deleted.",cssClass:"danger-toast",duration:2e3});case 2:t.sent.present();case 3:case"end":return t.stop()}},t,this)}))}}])&&e(o.prototype,r),a&&e(o,a),n}(),v.\u0275fac=function(t){return new(t||v)(p.Y36(f.T),p.Y36(d.H),p.Y36(c.yF),p.Y36(u.F0))},v.\u0275cmp=p.Xpm({type:v,selectors:[["app-notifications"]],decls:12,vars:2,consts:[[1,"ion-hide-lg-up"],["slot","start"],["slot","end"],["id","clear-button",3,"click"],["class","ion-justify-content-center",4,"ngIf"],[1,"ion-justify-content-center"],["size-xs","12","size-sm","12","size-md","10","size-lg","8","size-xl","6",1,"margin-top","ion-text-center"],["id","no-notifications"],["id","icon","src","../../../../assets/icons/no-notifications-icon.svg","alt",""],["size-xs","12","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["lines","none"],[3,"src"],["id","message"],["id","date"],["side","end",3,"ionSwipe"],["id","delete-noti"]],template:function(t,n){1&t&&(p.TgZ(0,"ion-header",0),p.TgZ(1,"ion-toolbar"),p.TgZ(2,"ion-buttons",1),p._UZ(3,"ion-back-button"),p.TgZ(4,"ion-title"),p._uU(5,"Notifications"),p.qZA(),p.qZA(),p.TgZ(6,"ion-buttons",2),p.TgZ(7,"ion-button",3),p.NdJ("click",function(){return n.clear()}),p._uU(8," Clear "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(9,"ion-content"),p.YNc(10,b,5,0,"ion-row",4),p.YNc(11,h,4,1,"ion-row",4),p.qZA()),2&t&&(p.xp6(10),p.Q6J("ngIf",n.noNotifications),p.xp6(1),p.Q6J("ngIf",!n.noNotifications))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.wd,c.YG,c.W2,a.O5,c.Nd,c.wI,c.q_,a.sg,c.td,c.Ie,c.BJ,c.IK,c.u8],styles:["p[_ngcontent-%COMP%]{font-size:.7em;margin-left:10px}#message[_ngcontent-%COMP%]{box-shadow:1px 10px 26px rgba(0,0,0,.05)}ion-list[_ngcontent-%COMP%]{background:none;padding-top:0;padding-bottom:0}ion-item[_ngcontent-%COMP%]{border-bottom:1px solid #e9e9e9}#clear-button[_ngcontent-%COMP%]{--background:linear-gradient(rgba(6,114,196,0.3),rgba(0,81,145,0.2));--color:#fff;--border-color:#fff;--border-style:solid;--border-width:2px;font-weight:600;margin-right:20px;width:80px}#delete-noti[_ngcontent-%COMP%]{background:#e3405f;font-weight:600}#date[_ngcontent-%COMP%]{opacity:.5;display:inline-block}#icon[_ngcontent-%COMP%]{opacity:.2}#no-notifications[_ngcontent-%COMP%]{opacity:.3}.margin-top[_ngcontent-%COMP%]{margin-top:15%}.blue-button[_ngcontent-%COMP%]{width:100px}"]}),v)}],w=function(){var t=function t(){i(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[u.Bz.forChild(Z)],u.Bz]}),t}(),N=((y=function t(){i(this,t)}).\u0275fac=function(t){return new(t||y)},y.\u0275mod=p.oAB({type:y}),y.\u0275inj=p.cJS({imports:[[a.ez,s.u5,c.Pc,w]]}),y)}}])}();