!function(){function n(n,i){var o;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(o=function(n,i){if(!n)return;if("string"==typeof n)return t(n,i);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(n,i)}(n))||i&&n&&"number"==typeof n.length){o&&(n=o);var e=0,c=function(){};return{s:c,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return r=n.done,n},e:function(n){s=!0,a=n},f:function(){try{r||null==o.return||o.return()}finally{if(s)throw a}}}}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=n[i];return o}function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{kVc8:function(t,e,c){"use strict";c.r(e),c.d(e,"NotificationsPageModule",function(){return k});var a=c("ofXK"),r=c("3Pt+"),s=c("TEn/"),l=c("tyNb"),f=c("KWWs"),u=c("Aso2"),b=c("7xvl"),d=c("fXoL");function g(n,t){1&n&&(d.Mb(0,"ion-row",6),d.Mb(1,"ion-col",7),d.Mb(2,"h3",8),d.lc(3,"You have no notifications"),d.Lb(),d.Lb(),d.Lb())}function p(n,t){1&n&&(d.Mb(0,"ion-row",6),d.Mb(1,"ion-col",9),d.Ib(2,"img",10),d.Lb(),d.Lb())}function m(n,t){if(1&n){var i=d.Nb();d.Mb(0,"ion-item-sliding",11),d.Ub("click",function(){return d.fc(i),d.Wb().goTo()}),d.Mb(1,"ion-item"),d.Mb(2,"ion-avatar"),d.Ib(3,"img",12),d.Lb(),d.Mb(4,"p",13),d.lc(5),d.Lb(),d.Mb(6,"p",14),d.lc(7),d.Lb(),d.Lb(),d.Mb(8,"ion-item-options",15),d.Mb(9,"ion-item-option",11),d.Ub("click",function(){d.fc(i);var n=t.$implicit;return d.Wb().delete(n)}),d.lc(10,"Delete"),d.Lb(),d.Lb(),d.Lb()}if(2&n){var o=t.$implicit;d.xb(3),d.Zb("src",o.instigatingUserProfilePicture,d.hc),d.xb(2),d.mc(o.message),d.xb(2),d.mc(o.date)}}var y,v,h,M=[{path:"",component:(y=function(){function t(n,o){i(this,t),this.notifications=n,this.profile=o}var e,c,a;return e=t,(c=[{key:"ngAfterContentChecked",value:function(){console.log("Notification Added on backend")}},{key:"ngOnDestroy",value:function(){this.notificationsSub.unsubscribe()}},{key:"ngOnInit",value:function(){var t=this;this.initSub=this.profile.getUserDetails().subscribe(function(i){t.userEmail=i.email,console.log(t.userEmail),t.notificationsSub=t.notifications.getNotifications(t.userEmail).subscribe(function(i){console.log(i),t.notifications.notifications$.next(Object.values(i)),t.notifications.notifications$.subscribe(function(i){t.allNotifications=Object.values(i);var o,e=n(t.allNotifications);try{for(e.s();!(o=e.n()).done;){var c=o.value;c.date=Object(b.a)(new Date(c.date),{includeSeconds:!0,addSuffix:!1})}}catch(a){e.e(a)}finally{e.f()}})})})}},{key:"clear",value:function(){var t=this;this.notifications.clearNotifications(this.userEmail).subscribe(function(i){t.notificationsSub=t.notifications.getNotifications(t.userEmail).subscribe(function(i){console.log(i),t.notifications.notifications$.next(Object.values(i)),t.notifications.notifications$.subscribe(function(i){t.allNotifications=Object.values(i);var o,e=n(t.allNotifications);try{for(e.s();!(o=e.n()).done;){var c=o.value;c.date=Object(b.a)(new Date(c.date),{includeSeconds:!0,addSuffix:!1})}}catch(a){e.e(a)}finally{e.f()}})})})}},{key:"goTo",value:function(){console.log("Going to page from notification")}},{key:"delete",value:function(n){console.log("Deleting notification")}}])&&o(e.prototype,c),a&&o(e,a),t}(),y.\u0275fac=function(n){return new(n||y)(d.Hb(f.a),d.Hb(u.a))},y.\u0275cmp=d.Bb({type:y,selectors:[["app-notifications"]],decls:14,vars:3,consts:[[1,"ion-hide-lg-up"],["slot","start"],["slot","end"],[2,"--background","linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2))","--color","#005191","margin-right","20px","width","80px",3,"click"],["class","ion-justify-content-center",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[1,"ion-justify-content-center"],["size-xs","10",1,"margin-top","ion-text-center"],["id","no-notifications"],["size","4"],["id","icon","src","../../../../assets/icons/no-notifications-icon.svg","alt",""],[3,"click"],[3,"src"],["id","message"],["id","date"],["side","end"]],template:function(n,t){1&n&&(d.Mb(0,"ion-header",0),d.Mb(1,"ion-toolbar"),d.Mb(2,"ion-buttons",1),d.Ib(3,"ion-back-button"),d.Mb(4,"ion-title"),d.lc(5,"Notifications"),d.Lb(),d.Lb(),d.Mb(6,"ion-buttons",2),d.Mb(7,"ion-button",3),d.Ub("click",function(){return t.clear()}),d.lc(8," Clear "),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(9,"ion-content"),d.kc(10,g,4,0,"ion-row",4),d.kc(11,p,3,0,"ion-row",4),d.Mb(12,"ion-list"),d.kc(13,m,11,3,"ion-item-sliding",5),d.Lb(),d.Lb()),2&n&&(d.xb(10),d.Zb("ngIf",0==t.allNotifications),d.xb(1),d.Zb("ngIf",0==t.allNotifications),d.xb(2),d.Zb("ngForOf",t.allNotifications))},directives:[s.u,s.P,s.h,s.e,s.f,s.O,s.g,s.o,a.i,s.C,a.h,s.G,s.n,s.A,s.x,s.d,s.z,s.y],styles:["p[_ngcontent-%COMP%]{font-size:.7em;margin-left:10px}#date[_ngcontent-%COMP%]{opacity:.5;display:inline-block}#icon[_ngcontent-%COMP%]{opacity:.2}#no-notifications[_ngcontent-%COMP%]{opacity:.3}.margin-top[_ngcontent-%COMP%]{margin-top:15%}.blue-button[_ngcontent-%COMP%]{width:100px}"]}),y)}],w=((h=function n(){i(this,n)}).\u0275mod=d.Fb({type:h}),h.\u0275inj=d.Eb({factory:function(n){return new(n||h)},imports:[[l.j.forChild(M)],l.j]}),h),k=((v=function n(){i(this,n)}).\u0275mod=d.Fb({type:v}),v.\u0275inj=d.Eb({factory:function(n){return new(n||v)},imports:[[a.b,r.d,s.Q,w]]}),v)}}])}();