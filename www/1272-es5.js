!function(){function o(o,e){var n="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!n){if(Array.isArray(o)||(n=function(o,e){if(!o)return;if("string"==typeof o)return t(o,e);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(o,e)}(o))||e&&o&&"number"==typeof o.length){n&&(o=n);var i=0,r=function(){};return{s:r,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(o){throw o},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=n.call(o)},n:function(){var o=n.next();return s=o.done,o},e:function(o){c=!0,a=o},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function t(o,t){(null==t||t>o.length)&&(t=o.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=o[e];return n}function e(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function n(o,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[1272],{61272:function(t,i,r){"use strict";r.r(i),r.d(i,{FavoritesPageModule:function(){return k}});var a=r(38583),s=r(90665),c=r(19039),l=r(21382),f=r(85097),u=r(39181),p=r(20445),g=r(88720),b=r(81615),d=r(87811);function m(o,t){1&o&&(g.TgZ(0,"ion-col",3),g.TgZ(1,"h1"),g._uU(2,"You have no favorites."),g.qZA(),g.qZA())}function h(o,t){if(1&o&&g._UZ(0,"app-heart-icon",24),2&o){var e=g.oxw().$implicit,n=g.oxw();g.Q6J("job",e)("favoriteJobs",n.favoriteJobsObj)}}function v(o,t){if(1&o){var e=g.EpF();g.TgZ(0,"ion-row",11),g.TgZ(1,"ion-col",12),g._UZ(2,"img",13),g.qZA(),g.TgZ(3,"ion-col",14),g.TgZ(4,"h5",15),g._uU(5),g.qZA(),g.TgZ(6,"p",16),g._uU(7),g.qZA(),g.TgZ(8,"h5",17),g._uU(9),g.qZA(),g.TgZ(10,"h5",18),g._uU(11),g.qZA(),g.qZA(),g.TgZ(12,"ion-col",19),g.TgZ(13,"p",20),g._uU(14),g.qZA(),g.qZA(),g.TgZ(15,"ion-col",21),g.TgZ(16,"ion-button",22),g.NdJ("click",function(){var o=g.CHM(e).$implicit;return g.oxw().jobPage(o)}),g._uU(17," Details "),g.qZA(),g.YNc(18,h,1,2,"app-heart-icon",23),g.qZA(),g.qZA()}if(2&o){var n=t.$implicit,i=g.oxw();g.xp6(2),g.s9C("src",n.companyLogo,g.LSH),g.xp6(3),g.Oqu(n.title),g.xp6(2),g.Oqu(n.companyName),g.xp6(2),g.hij("Posted: ",n.dateCreated,""),g.xp6(2),g.hij("$",n.rateOfPay,"/hr"),g.xp6(3),g.Oqu(n.summary),g.xp6(4),g.Q6J("ngIf",i.favoriteJobsObj)}}var y,Z,x=[{path:"",component:(y=function(){function t(o,n,i,r,a){e(this,t),this.router=o,this.favorites=n,this.profile=i,this.eventEmitterService=r,this.location=a}var i,r,a;return i=t,(r=[{key:"ngOnDestroy",value:function(){this.profileSub.unsubscribe()}},{key:"ngOnInit",value:function(){var o=this;this.location.onPopState(function(){o.eventEmitterService.onBackAction()}),this.getFavoriteJobs()}},{key:"back",value:function(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/jobs"])}},{key:"getFavoriteJobs",value:function(){var t=this;this.profileSub=this.profile.getUserDetails().subscribe(function(e){t.userEmail=e.email,t.favorites.favoriteJobs$.subscribe(function(e){console.log("Favorite Jobs in Service: ".concat(e)),t.favoriteSubs=t.favorites.getFavorites(t.userEmail).subscribe(function(e){t.favoriteJobsObj=e,console.log("Favorite jobs:"),console.log(e),0==t.favoriteJobsObj.length?(console.log("wassup"),t.noFavorites=!0):t.noFavorites=!1;var n,i=o(t.favoriteJobsObj);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.dateCreated=(0,p.Z)(new Date(r.dateCreated),{addSuffix:!0})}}catch(a){i.e(a)}finally{i.f()}})})})}},{key:"jobPage",value:function(o){console.log(o),console.log("Going to specific Job Page"),this.router.navigate(["/home/jobs/job-page",o._id,o.title,o.companyName,o.companyEmail,o.summary,o.fullJobDescription,o.rateOfPay]),console.log(o.name)}},{key:"favoriteJobPage",value:function(){console.log("Going to favorite bad")}}])&&n(i.prototype,r),a&&n(i,a),t}(),y.\u0275fac=function(o){return new(o||y)(g.Y36(l.F0),g.Y36(f.G),g.Y36(u.H),g.Y36(b.Z),g.Y36(a.lw))},y.\u0275cmp=g.Xpm({type:y,selectors:[["app-favorites"]],decls:22,vars:2,consts:[["no-border","",1,"ion-hide-lg-up"],["slot","start"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../../assets/icon/my-favorite-jobs-blue.svg","alt","","srcset",""],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6",4,"ngIf"],["class","job-section ion-justify-content-center",4,"ngFor","ngForOf"],[1,"job-section","ion-justify-content-center"],["push","0.5","size","1"],[1,"company-logo",3,"src"],["push","0.5",2,"height","80px"],["id","job-title"],["id","company-name"],["id","job-posted-date"],["id","job-rate"],["size","11"],["id","job-summary"],["pull","0","size","11"],[1,"job-details","ion-float-right",3,"click"],[3,"job","favoriteJobs",4,"ngIf"],[3,"job","favoriteJobs"]],template:function(o,t){1&o&&(g.TgZ(0,"ion-header",0),g.TgZ(1,"ion-toolbar"),g.TgZ(2,"ion-buttons",1),g._UZ(3,"ion-back-button"),g.qZA(),g.TgZ(4,"ion-title"),g._uU(5,"Favorites"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(6,"ion-content"),g.TgZ(7,"ion-grid"),g.TgZ(8,"ion-row",2),g.TgZ(9,"ion-col",3),g.TgZ(10,"ion-toolbar",4),g.TgZ(11,"ion-buttons",1),g._UZ(12,"img",5),g.TgZ(13,"h1"),g._uU(14,"Favorites"),g.qZA(),g.qZA(),g.TgZ(15,"ion-buttons",6),g.TgZ(16,"ion-button",7),g.NdJ("click",function(){return t.back()}),g._uU(17," Back "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(18,"ion-row",8),g.YNc(19,m,3,0,"ion-col",9),g.TgZ(20,"ion-col",3),g.YNc(21,v,19,7,"ion-row",10),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&o&&(g.xp6(19),g.Q6J("ngIf",t.noFavorites),g.xp6(2),g.Q6J("ngForOf",t.favoriteJobsObj))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.wd,c.W2,c.jY,c.Nd,c.wI,c.YG,a.O5,a.sg,d.v],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:1px 1px 5px rgba(0,0,0,.1);background:#edf3f8;border-bottom:1px solid #005191}ion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2.5em}#searchbar-wrapper[_ngcontent-%COMP%]{transition:.5s;height:60px;background:#edf3f8}#logo[_ngcontent-%COMP%]{width:100px;position:relative;top:10px;left:10px}.company-logo[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:contain;background-position:50%;border-radius:50px}.filter-message[_ngcontent-%COMP%]{color:#888;opacity:0;-webkit-animation:filter-message-slide .5s ease 1s forwards;animation:filter-message-slide .5s ease 1s forwards;float:right}.filter-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}@-webkit-keyframes filter-message-slide{0%{transform:translateX(10px)}to{opacity:1;transform:translateX(0)}}@keyframes filter-message-slide{0%{transform:translateX(10px)}to{opacity:1;transform:translateX(0)}}.job-details[_ngcontent-%COMP%]{--background:#0055a5;--color:#fff;--background-hover:#182836;height:24px;--width:100px;font-size:.5em;font-weight:600;display:block;position:relative;top:10px}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#e3405f;--background-hover:linear-gradient(#e3405f,#5f4045);height:24px;width:100px;font-size:.5em;font-weight:600;display:block}.job-section[_ngcontent-%COMP%]{background:#fff;border-radius:10px;height:auto;color:#777;width:100%;opacity:0;padding:2em 0;margin-bottom:50px;box-shadow:1px 10px 26px rgba(0,0,0,.05);-webkit-animation:job-section-slide .5s ease .5 forwards;animation:job-section-slide .5s ease .5 forwards}@-webkit-keyframes job-section-slide{0%{transform:translateX(-20px);opacity:1}to{opacity:1;transform:translateX(0)}}@keyframes job-section-slide{0%{transform:translateX(-20px);opacity:1}to{opacity:1;transform:translateX(0)}}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:block}--ion-buttons[_ngcontent-%COMP%]{--color:#888}#job-summary[_ngcontent-%COMP%]{font-size:1em;line-height:1.3em;color:#222}#company-name[_ngcontent-%COMP%]{font-size:.9em;opacity:.8;position:relative;top:-29px}#job-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:500;position:relative;top:-15px;color:#111}#job-rate[_ngcontent-%COMP%]{font-size:.95em;font-weight:900;opacity:.7;position:relative;top:-53px;color:#116e56}@media only screen and (min-width: 992px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}@media only screen and (min-width: 576px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}#job-posted-date[_ngcontent-%COMP%]{font-size:10px;opacity:.7;position:relative;top:-43px}"]}),y)}],w=function(){var o=function o(){e(this,o)};return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[l.Bz.forChild(x)],l.Bz]}),o}(),j=r(64941),k=((Z=function o(){e(this,o)}).\u0275fac=function(o){return new(o||Z)},Z.\u0275mod=g.oAB({type:Z}),Z.\u0275inj=g.cJS({imports:[[a.ez,s.u5,c.Pc,w,j.c]]}),Z)}}])}();