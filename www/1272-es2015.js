(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[1272],{61272:function(o,t,e){"use strict";e.r(t),e.d(t,{FavoritesPageModule:function(){return x}});var n=e(38583),i=e(90665),s=e(19039),a=e(21382),r=e(85097),c=e(39181),l=e(20445),g=e(88720),p=e(81615),f=e(87811);function b(o,t){1&o&&(g.TgZ(0,"ion-col",3),g.TgZ(1,"h1"),g._uU(2,"You have no favorites."),g.qZA(),g.qZA())}function d(o,t){if(1&o&&g._UZ(0,"app-heart-icon",24),2&o){const o=g.oxw().$implicit,t=g.oxw();g.Q6J("job",o)("favoriteJobs",t.favoriteJobsObj)}}function u(o,t){if(1&o){const o=g.EpF();g.TgZ(0,"ion-row",11),g.TgZ(1,"ion-col",12),g._UZ(2,"img",13),g.qZA(),g.TgZ(3,"ion-col",14),g.TgZ(4,"h5",15),g._uU(5),g.qZA(),g.TgZ(6,"p",16),g._uU(7),g.qZA(),g.TgZ(8,"h5",17),g._uU(9),g.qZA(),g.TgZ(10,"h5",18),g._uU(11),g.qZA(),g.qZA(),g.TgZ(12,"ion-col",19),g.TgZ(13,"p",20),g._uU(14),g.qZA(),g.qZA(),g.TgZ(15,"ion-col",21),g.TgZ(16,"ion-button",22),g.NdJ("click",function(){const t=g.CHM(o).$implicit;return g.oxw().jobPage(t)}),g._uU(17," Details "),g.qZA(),g.YNc(18,d,1,2,"app-heart-icon",23),g.qZA(),g.qZA()}if(2&o){const o=t.$implicit,e=g.oxw();g.xp6(2),g.s9C("src",o.companyLogo,g.LSH),g.xp6(3),g.Oqu(o.title),g.xp6(2),g.Oqu(o.companyName),g.xp6(2),g.hij("Posted: ",o.dateCreated,""),g.xp6(2),g.hij("$",o.rateOfPay,"/hr"),g.xp6(3),g.Oqu(o.summary),g.xp6(4),g.Q6J("ngIf",e.favoriteJobsObj)}}const m=[{path:"",component:(()=>{class o{constructor(o,t,e,n,i){this.router=o,this.favorites=t,this.profile=e,this.eventEmitterService=n,this.location=i}ngOnDestroy(){this.profileSub.unsubscribe()}ngOnInit(){this.location.onPopState(()=>{this.eventEmitterService.onBackAction()}),this.getFavoriteJobs()}back(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/jobs"])}getFavoriteJobs(){this.profileSub=this.profile.getUserDetails().subscribe(o=>{this.userEmail=o.email,this.favorites.favoriteJobs$.subscribe(o=>{console.log(`Favorite Jobs in Service: ${o}`),this.favoriteSubs=this.favorites.getFavorites(this.userEmail).subscribe(o=>{this.favoriteJobsObj=o,console.log("Favorite jobs:"),console.log(o),0==this.favoriteJobsObj.length?(console.log("wassup"),this.noFavorites=!0):this.noFavorites=!1;for(const t of this.favoriteJobsObj)t.dateCreated=(0,l.Z)(new Date(t.dateCreated),{addSuffix:!0})})})})}jobPage(o){console.log(o),console.log("Going to specific Job Page"),this.router.navigate(["/home/jobs/job-page",o._id,o.title,o.companyName,o.companyEmail,o.summary,o.fullJobDescription,o.rateOfPay]),console.log(o.name)}favoriteJobPage(){console.log("Going to favorite bad")}}return o.\u0275fac=function(t){return new(t||o)(g.Y36(a.F0),g.Y36(r.G),g.Y36(c.H),g.Y36(p.Z),g.Y36(n.lw))},o.\u0275cmp=g.Xpm({type:o,selectors:[["app-favorites"]],decls:22,vars:2,consts:[["no-border","",1,"ion-hide-lg-up"],["slot","start"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../../assets/icon/my-favorite-jobs-blue.svg","alt","","srcset",""],["slot","end"],[1,"back-button",3,"click"],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6",4,"ngIf"],["class","job-section ion-justify-content-center",4,"ngFor","ngForOf"],[1,"job-section","ion-justify-content-center"],["push","0.5","size","1"],[1,"company-logo",3,"src"],["push","0.5",2,"height","80px"],["id","job-title"],["id","company-name"],["id","job-posted-date"],["id","job-rate"],["size","11"],["id","job-summary"],["pull","0","size","11"],[1,"job-details","ion-float-right",3,"click"],[3,"job","favoriteJobs",4,"ngIf"],[3,"job","favoriteJobs"]],template:function(o,t){1&o&&(g.TgZ(0,"ion-header",0),g.TgZ(1,"ion-toolbar"),g.TgZ(2,"ion-buttons",1),g._UZ(3,"ion-back-button"),g.qZA(),g.TgZ(4,"ion-title"),g._uU(5,"Favorites"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(6,"ion-content"),g.TgZ(7,"ion-grid"),g.TgZ(8,"ion-row",2),g.TgZ(9,"ion-col",3),g.TgZ(10,"ion-toolbar",4),g.TgZ(11,"ion-buttons",1),g._UZ(12,"img",5),g.TgZ(13,"h1"),g._uU(14,"Favorites"),g.qZA(),g.qZA(),g.TgZ(15,"ion-buttons",6),g.TgZ(16,"ion-button",7),g.NdJ("click",function(){return t.back()}),g._uU(17," Back "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(18,"ion-row",8),g.YNc(19,b,3,0,"ion-col",9),g.TgZ(20,"ion-col",3),g.YNc(21,u,19,7,"ion-row",10),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&o&&(g.xp6(19),g.Q6J("ngIf",t.noFavorites),g.xp6(2),g.Q6J("ngForOf",t.favoriteJobsObj))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,s.jY,s.Nd,s.wI,s.YG,n.O5,n.sg,f.v],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:1px 1px 5px rgba(0,0,0,.1);background:#edf3f8;border-bottom:1px solid #005191}ion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2.5em}#searchbar-wrapper[_ngcontent-%COMP%]{transition:.5s;height:60px;background:#edf3f8}#logo[_ngcontent-%COMP%]{width:100px;position:relative;top:10px;left:10px}.company-logo[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:contain;background-position:50%;border-radius:50px}.filter-message[_ngcontent-%COMP%]{color:#888;opacity:0;-webkit-animation:filter-message-slide .5s ease 1s forwards;animation:filter-message-slide .5s ease 1s forwards;float:right}.filter-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}@-webkit-keyframes filter-message-slide{0%{transform:translateX(10px)}to{opacity:1;transform:translateX(0)}}@keyframes filter-message-slide{0%{transform:translateX(10px)}to{opacity:1;transform:translateX(0)}}.job-details[_ngcontent-%COMP%]{--background:#0055a5;--color:#fff;--background-hover:#182836;height:24px;--width:100px;font-size:.5em;font-weight:600;display:block;position:relative;top:10px}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.back-button[_ngcontent-%COMP%]{--color:#fff;--background:#e3405f;--background-hover:linear-gradient(#e3405f,#5f4045);height:24px;width:100px;font-size:.5em;font-weight:600;display:block}.job-section[_ngcontent-%COMP%]{background:#fff;border-radius:10px;height:auto;color:#777;width:100%;opacity:0;padding:2em 0;margin-bottom:50px;box-shadow:1px 10px 26px rgba(0,0,0,.05);-webkit-animation:job-section-slide .5s ease .5 forwards;animation:job-section-slide .5s ease .5 forwards}@-webkit-keyframes job-section-slide{0%{transform:translateX(-20px);opacity:1}to{opacity:1;transform:translateX(0)}}@keyframes job-section-slide{0%{transform:translateX(-20px);opacity:1}to{opacity:1;transform:translateX(0)}}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:block}--ion-buttons[_ngcontent-%COMP%]{--color:#888}#job-summary[_ngcontent-%COMP%]{font-size:1em;line-height:1.3em;color:#222}#company-name[_ngcontent-%COMP%]{font-size:.9em;opacity:.8;position:relative;top:-29px}#job-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:500;position:relative;top:-15px;color:#111}#job-rate[_ngcontent-%COMP%]{font-size:.95em;font-weight:900;opacity:.7;position:relative;top:-53px;color:#116e56}@media only screen and (min-width: 992px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}@media only screen and (min-width: 576px){#job-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500}}#job-posted-date[_ngcontent-%COMP%]{font-size:10px;opacity:.7;position:relative;top:-43px}"]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),o})();var Z=e(64941);let x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[n.ez,i.u5,s.Pc,h,Z.c]]}),o})()}}]);