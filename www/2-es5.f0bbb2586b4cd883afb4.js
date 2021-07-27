!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[2],{70002:function(n,o,r){"use strict";r.r(o),r.d(o,{MentorsPageModule:function(){return x}});var i=r(38583),s=r(90665),a=r(64941),c=r(19039),u=r(21382),l=r(64762),g=r(45435),h=r(58600),d=r(8960),p=r(88720);function m(t,n){if(1&t){var e=p.EpF();p.TgZ(0,"ion-item",15),p.TgZ(1,"ion-avatar",2),p._UZ(2,"img",16),p.qZA(),p.TgZ(3,"ion-label"),p.TgZ(4,"h2"),p._uU(5),p.qZA(),p.TgZ(6,"p"),p._uU(7),p.qZA(),p.qZA(),p.TgZ(8,"ion-buttons",17),p.TgZ(9,"ion-button",18),p.NdJ("click",function(){var t=p.CHM(e).$implicit;return p.oxw().mentorPage(t)}),p._uU(10," Info "),p.qZA(),p.qZA(),p.qZA()}if(2&t){var o=n.$implicit;p.xp6(2),p.s9C("src",o.photo,p.LSH),p.xp6(3),p.Oqu(o.name),p.xp6(2),p.Oqu(o.title)}}var f,b,v=[{path:"",component:(f=function(){function n(e,o,r,i){t(this,n),this.router=e,this.mentors=o,this.loading=r,this.modal=i,this.searching=!1,this.noSearchInput=!1}return e(n,[{key:"ngOnInit",value:function(){this.getMentors(),this.trackRoute()}},{key:"trackRoute",value:function(){this.routerSub=this.router.events.pipe((0,g.h)(function(t){return t instanceof u.m2})).subscribe(function(t){if(console.log(t.url),t.url.includes("/home/mentors/mentor-page/")){console.log("Hide Tab Bar!");var n=document.getElementById("tabBar");n.style.height="0px",n.style.transition="1s"}else{var e=document.getElementById("tabBar");console.log(e),e.style.height="50px",e.style.transition="1s"}})}},{key:"getMentors",value:function(){var t=this;this.mentors.getMentors().subscribe(function(n){t.allMentors=Object.values(n),console.log(t.allMentors),t.allMentorsLength=t.allMentors.length,t.allMentors.reverse(),t.loadedAllMentors=Object.values(n),t.loadedAllMentors.reverse(),t.searching=!1})}},{key:"chat",value:function(){this.router.navigate(["/home/mentors/mentor-chat"])}},{key:"newMessage",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modal.create({component:d.i,componentProps:{}});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}},t,this)}))}},{key:"mentorPage",value:function(t){this.router.navigate(["/home/mentors/mentor-page",t.name,t.title,t.email,t.description,t.photo,t.city,t.state])}},{key:"filter",value:function(t){var n=this;this.initializeItems();var e=t.detail.value;this.presentLoadingWithOptions(),console.log(this.allMentors),this.allMentors=this.allMentors.filter(function(t){if(console.log(t),t&&e||(console.log("No results from that search"),n.noSearchInput=!0),t.name&&e)return t.name.toLowerCase().indexOf(e.toLowerCase())>-1&&(console.log(t.name),console.log(t),n.searchTerm=e,n.searching=!0,n.noSearchInput=!1,!0)}),this.allMentorsLength=this.allMentors.length,0===this.allMentorsLength&&(console.log("No results from that search"),this.searching=!0,this.searchTerm=e,this.searchbar.getInputElement().then(function(t){t.value=""}),this.noSearchInput=!0),e||(console.log("Search term is empty; showing all events instead"),this.noSearchInput=!1,this.searching=!1,this.getMentors())}},{key:"initializeItems",value:function(){this.allMentors=this.loadedAllMentors}},{key:"presentLoadingWithOptions",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loading.create({duration:1e3,message:"Searching for Mentors...",translucent:!0,cssClass:"custom-class custom-loading"});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}))}}]),n}(),f.\u0275fac=function(t){return new(t||f)(p.Y36(u.F0),p.Y36(h.u),p.Y36(c.HT),p.Y36(c.IN))},f.\u0275cmp=p.Xpm({type:f,selectors:[["app-mentors"]],viewQuery:function(t,n){var e;1&t&&p.Gf(c.VI,5),2&t&&p.iGM(e=p.CRH())&&(n.searchbar=e.first)},decls:26,vars:1,consts:[["no-border","",1,"ion-hide-lg-up"],[2,"--background","#0055a5"],["slot","start"],["height","80","src","../../../assets/icon/mentor-icon.svg"],[2,"font-size","1.2em","color","white"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["height","50","src","../../../assets/icon/mentor-icon-blue.svg","alt","","srcset",""],[1,"ion-justify-content-center"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","4"],[1,"ion-hide-md-up",2,"font-size","1em"],[1,"ion-hide-md-down",2,"font-size","1.1em","margin-top","24px"],[1,"ion-justify-content-center",2,"margin-top","20px"],["class","mentor","lines","none",4,"ngFor","ngForOf"],["lines","none",1,"mentor"],[3,"src"],["slot","end"],[1,"info-button",3,"click"]],template:function(t,n){1&t&&(p.TgZ(0,"ion-header",0),p.TgZ(1,"ion-toolbar"),p.TgZ(2,"ion-item",1),p.TgZ(3,"ion-avatar",2),p._UZ(4,"img",3),p.qZA(),p.TgZ(5,"ion-label",4),p._uU(6,"Mentors"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(7,"ion-content"),p.TgZ(8,"ion-grid"),p.TgZ(9,"ion-row",5),p.TgZ(10,"ion-col",6),p.TgZ(11,"ion-toolbar",7),p.TgZ(12,"ion-buttons",2),p._UZ(13,"img",8),p.TgZ(14,"h1"),p._uU(15,"Mentors"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(16,"ion-row",9),p.TgZ(17,"ion-col",10),p.TgZ(18,"p",11),p._uU(19,"Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!"),p.qZA(),p.TgZ(20,"p",12),p._uU(21,"Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(22,"ion-row",13),p.TgZ(23,"ion-col",10),p.TgZ(24,"ion-list"),p.YNc(25,m,11,3,"ion-item",14),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(25),p.Q6J("ngForOf",n.allMentors))},directives:[c.Gu,c.sr,c.Ie,c.BJ,c.Q$,c.W2,c.jY,c.Nd,c.wI,c.Sm,c.q_,i.sg,c.YG],styles:["ion-toolbar[_ngcontent-%COMP%]{padding:0}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}ion-list[_ngcontent-%COMP%]{background:none}.mentor[_ngcontent-%COMP%]{border-radius:5px;margin-bottom:16px;box-shadow:1px 10px 26px rgba(0,0,0,.05)}.new-message[_ngcontent-%COMP%]{color:#faa71b}h2[_ngcontent-%COMP%]{font-size:1em;font-weight:400}.blue-button[_ngcontent-%COMP%]{-webkit-animation:none;animation:none}.info-button[_ngcontent-%COMP%]{--background:#0055a5;--color:#fff;font-weight:600;margin-right:20px;width:80px}.mentor-thumbnail[_ngcontent-%COMP%]{position:absolute;top:25px;right:15px;height:50px;width:50px;background-repeat:no-repeat;background-size:contain;background-position:50%;border-radius:50px}.mentors[_ngcontent-%COMP%]{margin:20px 0;box-shadow:none;box-shadow:1px 10px 10px rgba(0,0,0,.05);border-radius:5px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275);transition-delay:.1s}.mentors[_ngcontent-%COMP%], .mentors[_ngcontent-%COMP%]:hover{background:#fff;height:auto;padding:40px}.mentors[_ngcontent-%COMP%]:hover{margin:30px 0;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px;transition:.1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}#mentor-name[_ngcontent-%COMP%]{font-size:1.3em;font-weight:800}#mentor-title[_ngcontent-%COMP%]{font-size:1.1em;font-weight:800;color:#777;position:relative;top:-10px}#searchbar-wrapper[_ngcontent-%COMP%]{transition:.5s;height:60px;background:#edf3f8}"]}),f)},{path:"mentor-page/:name/:title/:email/:description/:photo/:city/:state",loadChildren:function(){return r.e(161).then(r.bind(r,90161)).then(function(t){return t.MentorPagePageModule})}},{path:"mentor-chat",loadChildren:function(){return r.e(9503).then(r.bind(r,49503)).then(function(t){return t.MentorChatPageModule})}}],M=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=p.oAB({type:n}),n.\u0275inj=p.cJS({imports:[[u.Bz.forChild(v)],u.Bz]}),n}(),Z=r(84030),x=((b=function n(){t(this,n)}).\u0275fac=function(t){return new(t||b)},b.\u0275mod=p.oAB({type:b}),b.\u0275inj=p.cJS({imports:[[a.c,i.ez,s.u5,c.Pc,M,Z.NewMessageMentorPageModule]]}),b)},58600:function(n,o,r){"use strict";r.d(o,{u:function(){return c}});var i=r(92340),s=r(88720),a=r(91841),c=function(){var n=function(){function n(e){t(this,n),this.http=e,this.BACKEND_URL=i.N.url}return e(n,[{key:"getMentors",value:function(){return console.log("Getting Mentors"),this.http.get("".concat(this.BACKEND_URL,"/api/mentors"))}},{key:"sendMentorAnEmail",value:function(t,n,e,o,r,i,s,a,c,u,l,g){return console.log("Sending email to ".concat(e)),this.http.post("".concat(this.BACKEND_URL,"/api/mentors/mentor-message"),{message:t,mentorName:n,mentorEmail:e,studentEmail:o,studentName:r,studentCity:i,studentState:s,studentAge:a,studentGrade:c,studentSchool:u,studentProfilePic:l,studentResume:g})}}]),n}();return n.\u0275fac=function(t){return new(t||n)(s.LFG(a.eN))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()}}])}();