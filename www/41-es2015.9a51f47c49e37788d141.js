(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{K5GS:function(l,n,t){"use strict";t.r(n);var o=t("8Y7J");class e{}var i=t("pMnS"),a=t("wWec"),u=t("b7Ok"),s=t("U8oy"),r=t("Aso2"),b=t("oBZk"),c=t("ZZ/e"),p=t("SVse"),h=t("mrSG"),m=t("sgUz"),d=t("lFXj");class g{constructor(l,n,t,o,e,i,a,u){this.activatedRoute=l,this.router=n,this.toastController=t,this.profile=o,this.favorites=e,this.jobs=i,this.eventEmitterService=a,this.location=u}ngOnInit(){this.location.onPopState(()=>{this.triggerJobPageRefresh()});const l=this.activatedRoute.snapshot.paramMap.get("id"),n=this.activatedRoute.snapshot.paramMap.get("title"),t=this.activatedRoute.snapshot.paramMap.get("companyName"),o=this.activatedRoute.snapshot.paramMap.get("companyEmail"),e=this.activatedRoute.snapshot.paramMap.get("summary"),i=this.activatedRoute.snapshot.paramMap.get("fullJobDescription"),a=this.activatedRoute.snapshot.paramMap.get("rateOfPay");this.jobId=l,this.jobTitle=n,this.jobCompanyName=t,this.jobCompanyEmail=o,this.jobSummary=e,this.jobFullJobDescription=i,this.jobRateOfPay=a,this.getFavoriteJobs()}getFavoriteJobs(){this.profile.getUserDetails().subscribe(l=>{this.favorites.favoriteJobs$.next(l.favoriteJobs),this.favorites.favoriteJobs$.subscribe(n=>{console.log("Favorite Jobs in Service: "+n),this.jobs.getJobs().subscribe(l=>{for(const n of Object.values(l))this.jobId==n._id&&(this.jobObj=n)}),this.favorites.getFavorites(l.email).subscribe(l=>{this.favoriteJobsObj=l})})})}applyForJob(){this.router.navigate(["/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply",this.jobTitle,this.jobCompanyName,this.jobCompanyEmail])}favoriteThisJob(){console.log("Favoriting this Job"),this.presentToast()}goBack(){this.triggerJobPageRefresh(),this.router.navigate(["/home/jobs"])}triggerJobPageRefresh(){this.eventEmitterService.onBackAction()}presentToast(){return h.b(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"This job has been favorited.",duration:2e3})).present()}))}}var f=t("iInd"),k=o.pb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{margin:0}.company-logo[_ngcontent-%COMP%]{border-radius:50px;background-image:url(journi-logo.394c593afb46f04d7760.png);background-repeat:no-repeat;background-size:contain;background-position:center;-webkit-animation:.5s cubic-bezier(.175,.885,.32,1.275) .5s forwards logo-slide-in;animation:.5s cubic-bezier(.175,.885,.32,1.275) .5s forwards logo-slide-in}span[_ngcontent-%COMP%]{font-weight:700}.blue-button[_ngcontent-%COMP%]{display:block;margin:0 auto 200px}.description[_ngcontent-%COMP%]{padding:10px 0;margin:20px 0}@media only screen and (max-width:992px){.description[_ngcontent-%COMP%]{margin:40px 0}}@media only screen and (min-width:992px){.orange-button[_ngcontent-%COMP%]{width:160px}}#job-summary[_ngcontent-%COMP%]{font-size:1.1em;line-height:29px;position:relative;color:#666;opacity:.7;top:-60px}#company-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:15px;opacity:0;-webkit-animation:.5s cubic-bezier(.175,.885,.32,1.275) .8s forwards header-slide-up;animation:.5s cubic-bezier(.175,.885,.32,1.275) .8s forwards header-slide-up}#job-title[_ngcontent-%COMP%]{font-size:2em;font-weight:900;margin-top:15px;margin-bottom:5px;opacity:0;color:#005191;-webkit-animation:.5s cubic-bezier(.175,.885,.32,1.275) .8s forwards header-slide-up;animation:.5s cubic-bezier(.175,.885,.32,1.275) .8s forwards header-slide-up}#job-posted-date[_ngcontent-%COMP%]{font-size:10px;opacity:.7;position:relative;top:-43px}#job-full-description[_ngcontent-%COMP%]{font-size:1.3em;line-height:29px;color:#666;opacity:0;margin:50px 0;-webkit-animation:.5s cubic-bezier(.175,.885,.32,1.275) 1.2s forwards header-slide-up;animation:.5s cubic-bezier(.175,.885,.32,1.275) 1.2s forwards header-slide-up}#heart-icon[_ngcontent-%COMP%]{position:relative;top:-20px}@-webkit-keyframes header-slide-up{0%{-webkit-transform:translateY(8px);transform:translateY(8px)}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes header-slide-up{0%{-webkit-transform:translateY(8px);transform:translateY(8px)}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes logo-slide-in{0%{-webkit-transform:translateX(-20px);transform:translateX(-20px)}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes logo-slide-in{0%{-webkit-transform:translateX(-20px);transform:translateX(-20px)}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}"]],data:{}});function x(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,1,"app-heart-icon",[["class","ion-float-right"],["id","heart-icon"]],null,null,null,a.b,a.a)),o.qb(1,114688,null,0,u.a,[s.a,r.a],{job:[0,"job"],favoriteJobs:[1,"favoriteJobs"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.jobObj,t.favoriteJobsObj)}),null)}function y(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,11,"ion-header",[["class","ion-hide-lg-up"]],null,null,null,b.cb,b.r)),o.qb(1,49152,null,0,c.B,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.vb,b.K)),o.qb(3,49152,null,0,c.Cb,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.P,b.e)),o.qb(5,49152,null,0,c.l,[o.h,o.k,o.x],null,null),(l()(),o.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0,i=l.component;return"click"===n&&(e=!1!==o.Db(l,8).onClick(t)&&e),"click"===n&&(e=!1!==i.triggerJobPageRefresh()&&e),e}),b.N,b.c)),o.qb(7,49152,null,0,c.g,[o.h,o.k,o.x],null,null),o.qb(8,16384,null,0,c.h,[[2,c.ib],c.Ib],null,null),(l()(),o.rb(9,0,null,0,2,"ion-title",[["style","color: white;"]],null,null,null,b.ub,b.J)),o.qb(10,49152,null,0,c.Ab,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,["Job Page"])),(l()(),o.rb(12,0,null,null,44,"ion-content",[],null,null,null,b.W,b.l)),o.qb(13,49152,null,0,c.u,[o.h,o.k,o.x],null,null),(l()(),o.rb(14,0,null,0,42,"ion-grid",[],null,null,null,b.bb,b.q)),o.qb(15,49152,null,0,c.A,[o.h,o.k,o.x],null,null),(l()(),o.rb(16,0,null,0,30,"ion-row",[["class","ion-justify-content-center"]],null,null,null,b.kb,b.z)),o.qb(17,49152,null,0,c.jb,[o.h,o.k,o.x],null,null),(l()(),o.rb(18,0,null,0,28,"ion-col",[["class","description"],["size-lg","8"],["size-md","8"],["size-sm","10"],["size-xs","11"]],null,null,null,b.V,b.k)),o.qb(19,49152,null,0,c.t,[o.h,o.k,o.x],null,null),(l()(),o.rb(20,0,null,0,12,"ion-col",[["size","12"]],null,null,null,b.V,b.k)),o.qb(21,49152,null,0,c.t,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(22,0,null,0,10,"ion-row",[["class","ion-align-items-end"]],null,null,null,b.kb,b.z)),o.qb(23,49152,null,0,c.jb,[o.h,o.k,o.x],null,null),(l()(),o.rb(24,0,null,0,2,"ion-col",[["push","1"]],null,null,null,b.V,b.k)),o.qb(25,49152,null,0,c.t,[o.h,o.k,o.x],{push:[0,"push"]},null),(l()(),o.rb(26,0,null,0,0,"div",[["class","company-logo"],["style","height: 100px; width: 100px;"]],null,null,null,null,null)),(l()(),o.rb(27,0,null,0,3,"ion-col",[["class","ion-float-right"],["push-md","2"],["push-sm","2"],["push-xs","2"],["size","2"]],null,null,null,b.V,b.k)),o.qb(28,49152,null,0,c.t,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.gb(16777216,null,0,1,null,x)),o.qb(30,16384,null,0,p.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(31,0,null,0,1,"ion-col",[["size","2"]],null,null,null,b.V,b.k)),o.qb(32,49152,null,0,c.t,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(33,0,null,0,13,"ion-col",[["size","12"]],null,null,null,b.V,b.k)),o.qb(34,49152,null,0,c.t,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(35,0,null,0,11,"ion-row",[],null,null,null,b.kb,b.z)),o.qb(36,49152,null,0,c.jb,[o.h,o.k,o.x],null,null),(l()(),o.rb(37,0,null,0,9,"ion-col",[["push","1"],["size","10"],["style","margin-top: 20px;"]],null,null,null,b.V,b.k)),o.qb(38,49152,null,0,c.t,[o.h,o.k,o.x],{push:[0,"push"],size:[1,"size"]},null),(l()(),o.rb(39,0,null,0,1,"h1",[["id","job-title"]],null,null,null,null,null)),(l()(),o.Jb(40,null,["",""])),(l()(),o.rb(41,0,null,0,1,"h2",[["id","company-name"]],null,null,null,null,null)),(l()(),o.Jb(42,null,["",""])),(l()(),o.rb(43,0,null,0,1,"p",[["id","company-name"]],null,null,null,null,null)),(l()(),o.Jb(44,null,["",""])),(l()(),o.rb(45,0,null,0,1,"p",[["id","job-full-description"]],null,null,null,null,null)),(l()(),o.Jb(46,null,["",""])),(l()(),o.rb(47,0,null,0,9,"ion-row",[["class","ion-justify-content-center"]],null,null,null,b.kb,b.z)),o.qb(48,49152,null,0,c.jb,[o.h,o.k,o.x],null,null),(l()(),o.rb(49,0,null,0,7,"ion-col",[["class","ion-text-center"],["size","6"]],null,null,null,b.V,b.k)),o.qb(50,49152,null,0,c.t,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(51,0,null,0,2,"ion-button",[["class","orange-button"],["style","width: 150px; margin-bottom: 20px;"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.applyForJob()&&o),o}),b.O,b.d)),o.qb(52,49152,null,0,c.k,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,["Apply"])),(l()(),o.rb(54,0,null,0,2,"ion-button",[["class","ion-hide-md-down blue-button"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.goBack()&&o),o}),b.O,b.d)),o.qb(55,49152,null,0,c.k,[o.h,o.k,o.x],null,null),(l()(),o.Jb(-1,0,[" Go Back"]))],(function(l,n){var t=n.component;l(n,21,0,"12"),l(n,25,0,"1"),l(n,28,0,"2"),l(n,30,0,t.favoriteJobsObj),l(n,32,0,"2"),l(n,34,0,"12"),l(n,38,0,"1","10"),l(n,50,0,"6")}),(function(l,n){var t=n.component;l(n,40,0,t.jobTitle),l(n,42,0,t.jobCompanyName),l(n,44,0,t.jobCompanyEmail),l(n,46,0,t.jobFullJobDescription)}))}function v(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,1,"app-job-page",[],null,null,null,y,k)),o.qb(1,114688,null,0,g,[f.a,f.m,c.Pb,r.a,s.a,m.a,d.a,p.n],null,null)],(function(l,n){l(n,1,0)}),null)}var j=o.nb("app-job-page",g,v,{},{},[]),w=t("s7LF"),z=t("zAgk");const J=()=>t.e(25).then(t.bind(null,"8BpF")).then(l=>l.ApplyPageModuleNgFactory);class q{}t.d(n,"JobPagePageModuleNgFactory",(function(){return P}));var P=o.ob(e,[],(function(l){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[i.a,j]],[3,o.j],o.v]),o.Bb(4608,p.l,p.k,[o.s,[2,p.s]]),o.Bb(4608,c.b,c.b,[o.x,o.g]),o.Bb(4608,c.Hb,c.Hb,[c.b,o.j,o.p]),o.Bb(4608,c.Lb,c.Lb,[c.b,o.j,o.p]),o.Bb(5120,o.d,(function(l,n,t){return[c.Rb(l,n,t)]}),[c.Qb,p.d,o.x]),o.Bb(4608,w.r,w.r,[]),o.Bb(4608,w.b,w.b,[]),o.Bb(1073742336,p.c,p.c,[]),o.Bb(1073742336,c.Eb,c.Eb,[]),o.Bb(1073742336,z.a,z.a,[]),o.Bb(1073742336,w.q,w.q,[]),o.Bb(1073742336,w.e,w.e,[]),o.Bb(1073742336,w.n,w.n,[]),o.Bb(1073742336,f.q,f.q,[[2,f.v],[2,f.m]]),o.Bb(1073742336,q,q,[]),o.Bb(1073742336,e,e,[]),o.Bb(256,c.Qb,void 0,[]),o.Bb(1024,f.k,(function(){return[[{path:"",component:g},{path:"apply/:title/:companyName/:companyEmail",loadChildren:J}]]}),[])])}))}}]);