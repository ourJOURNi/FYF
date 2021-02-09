!function(){function e(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=n(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==i.return||i.return()}finally{if(c)throw a}}}}function t(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Obr4:function(n,i,r){"use strict";r.r(i),r.d(i,"EventsPageModule",function(){return Z});var s=r("ofXK"),c=r("3Pt+"),u=r("tyNb"),l=r("zAgk"),b=r("TEn/"),g=r("mrSG"),h=r("riPR"),d=r("sWYD"),f=r("7xvl"),v=r("Aso2"),p=r("xcW5"),m=r("/Tr7"),y=r("jIYg");function x(e,t){Object(y.a)(2,arguments);var n=Object(m.a)(e),i=Object(m.a)(t);return n.getTime()>i.getTime()}var M,E=r("AytR"),w=r("z6cu"),L=r("fXoL"),k=r("tk/3"),O=((M=function(){function e(t,n,i,r){o(this,e),this.http=t,this.router=n,this.loading=i,this.alert=r,this.allFairs=[],this.FAIRS_BACKEND_URL=E.a.fairsUrl}return a(e,[{key:"getFairs",value:function(){return console.log("Getting Fairs"),this.http.get(this.FAIRS_BACKEND_URL+"/api/fairs")}},{key:"getFair",value:function(e){return console.log(e),console.log("id from fairs service"),this.http.post(this.FAIRS_BACKEND_URL+"/api/fairs/fair",{name:e})}},{key:"registerStudent",value:function(e){return this.http.post(this.FAIRS_BACKEND_URL+"/api/fairs/register-student",e)}},{key:"registerChaperone",value:function(e){return this.http.post(this.FAIRS_BACKEND_URL+"/api/fairs/register-chaperone",e)}},{key:"registerPartner",value:function(e){return this.http.post(this.FAIRS_BACKEND_URL+"/api/fairs/register-partner",e)}},{key:"registerVolunteer",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.http.post(this.FAIRS_BACKEND_URL+"/api/fairs/register-volunteer",e).subscribe(function(t){return Object(g.a)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,console.log("registering volunteer to fair");case 2:return n.next=4,console.log(t);case 4:return n.next=6,this.presentLoadingWithOptions(e.name,e.email);case 6:return n.next=8,this.router.navigate([""]);case 8:return n.next=10,console.log("REGISTERED VOLUNTEER TO FAIR!");case 10:case"end":return n.stop()}},n,this)}))}));case 1:case"end":return t.stop()}},t,this)}))}},{key:"handleError",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return","A Student already has that email address"===e.error?(console.log("A Student already has that email address"),this.emailAlreadyExistAlert()):Object(w.a)(e));case 1:case"end":return t.stop()}},t,this)}))}},{key:"emailAlreadyExistAlert",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({header:"Email already in use.",message:"This email already exists. Please enter another email address",buttons:["Ok"]});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}))}},{key:"presentLoadingWithOptions",value:function(e,t){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var i,o,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loading.create({duration:3e3,message:"Registering you as a Chaperone ".concat(e,". Sending an email to ").concat(t),translucent:!0,cssClass:"loading",backdropDismiss:!0});case 2:return i=n.sent,n.next=5,i.present();case 5:return n.next=7,i.onDidDismiss();case 7:o=n.sent,r=o.role,console.log("Loading dismissed with role:",r);case 10:case"end":return n.stop()}},n,this)}))}},{key:"presentAlert",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({header:"Alert",cssClass:"registered",message:"This is an alert message.",buttons:["OK"]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"getSchools",value:function(){return console.log("Getting schools"),this.http.get(this.FAIRS_BACKEND_URL+"/api/admin/fairs/get-schools")}}]),e}()).\u0275fac=function(e){return new(e||M)(L.Qb(k.b),L.Qb(u.f),L.Qb(b.S),L.Qb(b.a))},M.\u0275prov=L.Db({token:M,factory:M.\u0275fac,providedIn:"root"}),M),C=r("R0Ic"),S=r("U8oy");function R(e,t){if(1&e){var n=L.Nb();L.Mb(0,"ion-button",7),L.Ub("click",function(){L.gc(n);var e=L.Wb();return e.toggleGoingState(e.event)}),L.mc(1," Go "),L.Lb()}}function _(e,t){if(1&e){var n=L.Nb();L.Mb(0,"ion-button",8),L.Ub("click",function(){L.gc(n);var e=L.Wb();return e.toggleGoingState(e.event)}),L.mc(1," Cancel "),L.Lb()}}var I,j=((I=function(){function e(t,n,i,r,a){o(this,e),this.events=t,this.favs=n,this.toast=i,this.router=r,this.profile=a,this.going=!1,this.goingState="not-going",this.iconName="add-circle-outline"}return a(e,[{key:"ngOnInit",value:function(){var e=this;this.profile.getUserDetails().subscribe(function(t){e.userEmail=t.email,t.eventsGoing.includes(e.event._id)?(e.going=!0,e.goingState="going"):(e.going=!1,e.goingState="not-going")})}},{key:"toggleGoingState",value:function(e){var n=this;"not-going"===this.goingState?(this.goingState="going",this.iconName="close-circle-outline",this.going=!0,this.goingToast(),console.log("Going to event, "+e.title),this.events.goingToEvent(e._id,this.userEmail,this.id).subscribe(function(e){var i=[].concat(t(Object.values(e.eventsGoing)),[n.event._id]);n.events.eventsGoing$.next(i),console.log(n.events.eventsGoing$.getValue())})):(this.goingState="not-going",this.iconName="add-circle-outline",this.going=!1,this.notGoingToast(),console.log("No longer going to Event"),this.events.notGoingToEvent(e._id,this.userEmail,this.id).subscribe(function(e){for(var t=n.events.eventsGoing$.getValue(),i=0;i<t.length;i++)t[i]===n.event._id&&t.splice(i,1);console.log(t),n.events.eventsGoing$.next(t)}))}},{key:"goingToast",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toast.create({message:"You are going to this event.",duration:2e3});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)}))}},{key:"notGoingToast",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toast.create({message:"You are no longer going to this event.",duration:2e3});case 2:e.sent.present();case 3:case"end":return e.stop()}},e,this)}))}},{key:"eventPage",value:function(e){this.router.navigate(["/home/events/events-page",e._id,e.title,e.addressOne,e.addressOne,e.city,e.state,e.zip,e.dateCreated,e.date,e.time,e.photo,e.description])}}]),e}()).\u0275fac=function(e){return new(e||I)(L.Hb(h.a),L.Hb(S.a),L.Hb(b.Z),L.Hb(u.f),L.Hb(v.a))},I.\u0275cmp=L.Bb({type:I,selectors:[["app-going-icon"]],inputs:{event:"event",userEmail:"userEmail",id:"id"},decls:8,vars:2,consts:[[2,"margin-bottom","20px"],[1,"ion-justify-content-center"],["size","12"],[1,"ion-text-right"],[1,"grey-button",3,"click"],["class","going",3,"click",4,"ngIf"],["class","not-going",3,"click",4,"ngIf"],[1,"going",3,"click"],[1,"not-going",3,"click"]],template:function(e,t){1&e&&(L.Mb(0,"ion-grid",0),L.Mb(1,"ion-row",1),L.Mb(2,"ion-col",2),L.Mb(3,"div",3),L.Mb(4,"ion-button",4),L.Ub("click",function(){return t.eventPage(t.event)}),L.mc(5," Details "),L.Lb(),L.lc(6,R,2,0,"ion-button",5),L.lc(7,_,2,0,"ion-button",6),L.Lb(),L.Lb(),L.Lb(),L.Lb()),2&e&&(L.xb(6),L.Zb("ngIf",!t.going),L.xb(1),L.Zb("ngIf",t.going))},directives:[b.t,b.G,b.n,b.g,s.j],styles:["p[_ngcontent-%COMP%]{transition:.5s;opacity:1}ion-button[_ngcontent-%COMP%]{font-size:1em;font-weight:800;height:40px;width:100px;margin-left:0;margin-right:10px}.not-going[_ngcontent-%COMP%]{--color:#fff;--background:linear-gradient(#faa71b,#e99b14)}.grey-button[_ngcontent-%COMP%]{margin-right:10px;--background:#edf3f8;color:#005191}.going[_ngcontent-%COMP%]{--background:#24d8a8;--background-hover:#24d8a8}.going[_ngcontent-%COMP%], .going[_ngcontent-%COMP%]:hover{--color:#fff}"],data:{animation:[Object(C.j)("going",[Object(C.g)("going",Object(C.h)({color:"blue",opacity:"0.4",transition:"0.5s",transform:"scale(0.9)"})),Object(C.g)("not-going",Object(C.h)({color:"#21ce99",opacity:"1",transition:"0.5s",transform:"scale(1)"})),Object(C.i)("not-going <=> going",Object(C.e)("100ms ease-out"))])]}}),I);function P(e,t){if(1&e){var n=L.Nb();L.Mb(0,"ion-row",6),L.Mb(1,"ion-col",26),L.Mb(2,"h6",27),L.mc(3,"There were no search results with that name."),L.Lb(),L.Mb(4,"ion-button",28),L.Ub("click",function(e){return L.gc(n),L.Wb().doRefresh(e)}),L.mc(5," Clear Search "),L.Lb(),L.Lb(),L.Lb()}}function A(e,t){1&e&&(L.Mb(0,"div"),L.Mb(1,"p"),L.mc(2,"There are no Events, please come back later."),L.Lb(),L.Lb())}function D(e,t){if(1&e){var n=L.Nb();L.Mb(0,"ion-card"),L.lc(1,A,3,0,"div",32),L.Ib(2,"img",33),L.Mb(3,"ion-card-header",2),L.Ub("click",function(){L.gc(n);var e=t.$implicit;return L.Wb(2).eventPage(e)}),L.Mb(4,"ion-card-title"),L.mc(5),L.Lb(),L.Mb(6,"ion-card-subtitle"),L.mc(7),L.Lb(),L.Mb(8,"ion-card-subtitle"),L.mc(9),L.Lb(),L.Mb(10,"ion-card-subtitle"),L.mc(11),L.Lb(),L.Lb(),L.Mb(12,"ion-card-content"),L.Ib(13,"app-going-icon",34),L.Lb(),L.Lb()}if(2&e){var i=t.$implicit,o=L.Wb(2);L.xb(1),L.Zb("ngIf",0===o.allEvents.length),L.xb(4),L.nc(i.title),L.xb(2),L.nc(i.time),L.xb(2),L.nc(i.date),L.xb(2),L.pc(" ",i.city,", ",i.state,""),L.xb(2),L.Zb("event",i)("userEmail",o.userEmail)("id",o.id)}}function U(e,t){if(1&e&&(L.Mb(0,"ion-row",29),L.Mb(1,"ion-col",30),L.lc(2,D,14,9,"ion-card",31),L.Lb(),L.Lb()),2&e){var n=L.Wb();L.xb(2),L.Zb("ngForOf",n.allEvents)}}function G(e,t){if(1&e){var n=L.Nb();L.Mb(0,"ion-row",6),L.Mb(1,"ion-col",26),L.Mb(2,"h6",35),L.mc(3,"There were no search results with that name."),L.Lb(),L.Mb(4,"ion-button",28),L.Ub("click",function(e){return L.gc(n),L.Wb().doRefresh(e)}),L.mc(5," Clear Search "),L.Lb(),L.Lb(),L.Lb()}}function F(e,t){if(1&e&&(L.Mb(0,"ion-col",36),L.Mb(1,"ion-title",37),L.mc(2),L.Lb(),L.Lb()),2&e){var n=L.Wb();L.xb(2),L.pc("",n.allEventsLength," search result(s) for '",n.searchTerm,"'")}}function T(e,t){if(1&e){var n=L.Nb();L.Mb(0,"ion-col",38),L.Mb(1,"ion-card",39),L.Ib(2,"img",33),L.Mb(3,"ion-card-header",2),L.Ub("click",function(){L.gc(n);var e=t.$implicit;return L.Wb().eventPage(e)}),L.Mb(4,"ion-card-title"),L.mc(5),L.Lb(),L.Mb(6,"ion-card-subtitle"),L.mc(7),L.Lb(),L.Mb(8,"ion-card-subtitle"),L.mc(9),L.Lb(),L.Mb(10,"ion-card-subtitle"),L.mc(11),L.Lb(),L.Lb(),L.Mb(12,"ion-card-content",40),L.Mb(13,"ion-toolbar",41),L.Ib(14,"app-going-icon",34),L.Lb(),L.Lb(),L.Lb(),L.Lb()}if(2&e){var i=t.$implicit,o=L.Wb();L.xb(5),L.nc(i.title),L.xb(2),L.nc(i.time),L.xb(2),L.nc(i.date),L.xb(2),L.pc(" ",i.city,", ",i.state,""),L.xb(3),L.Zb("event",i)("userEmail",o.userEmail)("id",o.id)}}var z,N,B,W=((z=function(){function t(e,n,i,r,a,s,c){o(this,t),this.router=e,this.events=n,this.profile=i,this.fairs=r,this.toast=a,this.loading=s,this.eventEmitterService=c,this.allFairs=[],this.searching=!1,this.noSearchInput=!1}return a(t,[{key:"ngOnDestroy",value:function(){this.eventsGoingSub.unsubscribe()}},{key:"ngAfterViewInit",value:function(){this.searchbar.getInputElement().then(function(e){e.style.boxShadow="none"})}},{key:"ngOnInit",value:function(){var t=this;this.fairs.getFairs().subscribe(function(e){console.log(e),t.allFairs=Object.values(e)}),this.deleteEvent(),null==this.eventEmitterService.subsVar&&(this.eventEmitterService.subsVar=this.eventEmitterService.invokeEventsPageRefresh.subscribe(function(){t.getEvents()})),this.profileSub=this.profile.getUserDetails().subscribe(function(e){t.id=e._id,t.userEmail=e.email,t.events.eventsGoing$.next(e.eventsGoing),t.eventsGoingSub=t.events.eventsGoing$.subscribe(function(e){console.log(e.length),t.eventsGoingLength=e.length}),console.log("User id: "+t.id),console.log("User email: "+t.userEmail)}),this.eventsGoing=this.events.getEvents().subscribe(function(n){t.allEvents=Object.values(n),t.allEventsLength=t.allEvents.length,t.allEvents.reverse(),t.loadedAllEvents=Object.values(n),t.loadedAllEvents.reverse();var i,o=e(t.allEvents);try{for(o.s();!(i=o.n()).done;){var r=i.value;x(new Date(Date.now()),new Date(r.date))&&(t.deleteEventSub=t.events.deleteEvent(r._id).subscribe()),r.date=Object(d.a)(new Date(r.date),"MMMM dd, yyyy"),r.time=Object(d.a)(new Date(r.date),"hh:mm a"),r.dateCreated=Object(f.a)(new Date(r.dateCreated),{includeSeconds:!0,addSuffix:!0})}}catch(a){o.e(a)}finally{o.f()}})}},{key:"deleteEvent",value:function(){var e=x(new Date(1989,6,10),new Date(1987,1,11));console.log(e)}},{key:"eventPage",value:function(e){this.router.navigate(["/home/events/events-page",e._id,e.title,e.addressOne,e.addressOne,e.city,e.state,e.zip,e.dateCreated,e.date,e.time,e.photo,e.description])}},{key:"going",value:function(){this.router.navigate(["/home/events/going"])}},{key:"filter",value:function(e){var t=this;this.initializeItems();var n=e.detail.value;this.presentLoadingWithOptions(),this.allEvents=this.allEvents.filter(function(e){if(console.log(e),e&&n||(console.log("No results from that search"),t.noSearchInput=!0),e.title&&n)return e.title.toLowerCase().indexOf(n.toLowerCase())>-1&&(console.log(e.title),console.log(e),t.searchTerm=n,t.searching=!0,t.noSearchInput=!1,!0);t.noSearchInput=!0}),this.allEventsLength=this.allEvents.length,0===this.allEventsLength&&(console.log("No results from that search"),this.searching=!0,this.searchTerm=n,this.searchbar.getInputElement().then(function(e){e.value=""}),this.noSearchInput=!0),n||(console.log("Search term is empty; showing all events instead"),this.noSearchInput=!1,this.searching=!1,this.getEvents())}},{key:"initializeItems",value:function(){this.allEvents=this.loadedAllEvents}},{key:"presentLoadingWithOptions",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loading.create({duration:1e3,message:"Searching for Events...",translucent:!0,cssClass:"custom-class custom-loading",keyboardClose:!1});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}))}},{key:"doRefresh",value:function(t){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var i=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.allEvents=[],this.eventsSub=this.events.getEvents().subscribe(function(t){i.allEvents=Object.values(t),i.allEventsLength=i.allEvents.length,i.allEvents.reverse(),i.searching=!1;var n,o=e(i.allEvents);try{for(o.s();!(n=o.n()).done;){var r=n.value;x(new Date(Date.now()),new Date(r.date))&&(i.deleteEventSub=i.events.deleteEvent(r._id).subscribe()),r.date=Object(d.a)(new Date(r.date),"MMMM dd, yyyy"),r.dateCreated=Object(f.a)(new Date(r.dateCreated),{includeSeconds:!0,addSuffix:!0}),r.time=Object(d.a)(new Date(r.date),"hh:mm a")}}catch(a){o.e(a)}finally{o.f()}}),setTimeout(function(){t.target.complete(),console.log("Events Refreshed")},2e3),n.next=5,this.searchbar.getInputElement().then(function(e){e.value="",i.noSearchInput=!1});case 5:return n.next=7,console.log("Refreshing Events Page..");case 7:case"end":return n.stop()}},n,this)}))}},{key:"getEvents",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.eventsSub=this.events.getEvents().subscribe(function(t){n.allEvents=Object.values(t),n.allEventsLength=n.allEvents.length,n.allEvents.reverse(),n.searching=!1;var i,o=e(n.allEvents);try{for(o.s();!(i=o.n()).done;){var r=i.value;r.date=Object(d.a)(new Date(r.date),"MMMM dd, yyyy"),r.dateCreated=Object(f.a)(new Date(r.dateCreated),{includeSeconds:!0,addSuffix:!0}),r.time=Object(d.a)(new Date(r.date),"hh:mm a")}}catch(a){o.e(a)}finally{o.f()}});case 1:case"end":return t.stop()}},t,this)}))}}]),t}()).\u0275fac=function(e){return new(e||z)(L.Hb(u.f),L.Hb(h.a),L.Hb(v.a),L.Hb(O),L.Hb(b.Z),L.Hb(b.S),L.Hb(p.a))},z.\u0275cmp=L.Bb({type:z,selectors:[["app-events"]],viewQuery:function(e,t){var n;1&e&&L.tc(b.H,!0),2&e&&L.ec(n=L.Vb())&&(t.searchbar=n.first)},decls:55,vars:11,consts:[["no-border","",1,"ion-hide-lg-up"],["slot","end"],[3,"click"],["slot","start","src","../../assets/icon/my-events-icon.svg"],["slot","fixed",3,"ionRefresh"],[1,"ion-hide-lg-up"],[1,"ion-justify-content-center"],["size","11",1,"fairs-info"],[2,"border-top","#9993 solid 2px","margin-bottom","20px"],["class","ion-justify-content-center",4,"ngIf"],["style","margin-top: 30px;","class","ion-justify-content-center",4,"ngIf"],[1,"ion-hide-md-down"],[2,"margin","50px 0 50px 0"],["size","8.33","push","1"],["no-border","","debounce","800","showCancelButton","focus","placeholder","Search Event Titles",3,"ionChange"],["size","2","push","0.5"],["size","12"],[1,"blue-button","ion-float-right",2,"width","170px","position","fixed","top","60px",3,"click"],["slot","start","src","../../assets/icons/my-events-icon.svg"],["push","1","size","8","size-xl","8"],["size","11","class","ion-text-center",4,"ngIf"],["size-lg","5.5",4,"ngFor","ngForOf"],["id","searchbar-wrapper"],["debounce","2000","animated","true","searchIcon","none","showCancelButton","true","placeholder","Search for Events by Title",1,"searchbar",3,"ionChange"],["id","search-options"],[1,"cancel-button"],["size","6"],[1,"text-header"],["expand","block",1,"orange-button",3,"click"],[1,"ion-justify-content-center",2,"margin-top","30px"],["size-lg","6","size-md","8","size-sm","10","size-xs","11.5 "],[4,"ngFor","ngForOf"],[4,"ngIf"],["src","../assets/Journi_flyer.jpg"],[3,"event","userEmail","id"],[1,"text-header",2,"margin-top","25px"],["size","11",1,"ion-text-center"],[2,"background","rgba(230,230,230,1)","padding","20px","margin-top","35px"],["size-lg","5.5"],[1,"event-card"],[1,"ion-text-center",2,"width","91%"],[2,"--background","none","height","auto"]],template:function(e,t){1&e&&(L.Mb(0,"ion-header",0),L.Mb(1,"ion-toolbar"),L.Mb(2,"ion-title"),L.mc(3,"Events"),L.Lb(),L.Mb(4,"ion-buttons",1),L.Mb(5,"ion-button",2),L.Ub("click",function(){return t.going()}),L.Ib(6,"ion-icon",3),L.Lb(),L.Lb(),L.Lb(),L.Lb(),L.Mb(7,"ion-content"),L.Mb(8,"ion-refresher",4),L.Ub("ionRefresh",function(e){return t.doRefresh(e)}),L.Ib(9,"ion-refresher-content"),L.Lb(),L.Mb(10,"ion-grid",5),L.Mb(11,"ion-row",6),L.Mb(12,"ion-col",7),L.Mb(13,"h1"),L.mc(14,"United Way Fairs"),L.Lb(),L.Mb(15,"p"),L.mc(16,"Upcoming fairs with United Way"),L.Lb(),L.Mb(17,"div"),L.Mb(18,"h2"),L.mc(19),L.Lb(),L.Mb(20,"h2"),L.mc(21),L.Lb(),L.Mb(22,"h2"),L.mc(23),L.Lb(),L.Mb(24,"h2"),L.mc(25),L.Lb(),L.Ib(26,"hr",8),L.Lb(),L.Lb(),L.Lb(),L.lc(27,P,6,0,"ion-row",9),L.lc(28,U,3,1,"ion-row",10),L.Lb(),L.Mb(29,"ion-grid",11),L.Mb(30,"ion-row",12),L.Mb(31,"ion-col",13),L.Mb(32,"ion-searchbar",14),L.Ub("ionChange",function(e){return t.filter(e)}),L.Lb(),L.Lb(),L.Mb(33,"ion-col",15),L.Mb(34,"ion-row"),L.Mb(35,"ion-col",16),L.Mb(36,"ion-button",17),L.Ub("click",function(){return t.going()}),L.Ib(37,"ion-icon",18),L.Lb(),L.Lb(),L.Lb(),L.Lb(),L.Lb(),L.lc(38,G,6,0,"ion-row",9),L.Mb(39,"ion-row"),L.Mb(40,"ion-col",19),L.Mb(41,"ion-row"),L.lc(42,F,3,2,"ion-col",20),L.lc(43,T,15,8,"ion-col",21),L.Lb(),L.Lb(),L.Lb(),L.Lb(),L.Lb(),L.Mb(44,"ion-footer"),L.Mb(45,"div",22),L.Mb(46,"ion-searchbar",23),L.Ub("ionChange",function(e){return t.filter(e)}),L.Lb(),L.Mb(47,"div",24),L.Mb(48,"p"),L.mc(49,'You can choose up to five hashtags. Please seperate each tag with a comma ( , ) . Example: "Computers, Science, Technology"'),L.Lb(),L.Mb(50,"p"),L.mc(51,"Current Search: ----"),L.Lb(),L.Mb(52,"div"),L.Mb(53,"ion-button",25),L.mc(54," Cancel "),L.Lb(),L.Lb(),L.Lb(),L.Lb(),L.Lb()),2&e&&(L.xb(19),L.nc(t.allFairs[0].title),L.xb(2),L.nc(t.allFairs[0].date),L.xb(2),L.nc(t.allFairs[0].time),L.xb(2),L.qc("",t.allFairs[0].address,", ",t.allFairs[0].city,",",t.allFairs[0].state,""),L.xb(2),L.Zb("ngIf",t.noSearchInput),L.xb(1),L.Zb("ngIf",!t.noSearchInput),L.xb(10),L.Zb("ngIf",t.noSearchInput),L.xb(4),L.Zb("ngIf",t.searching&&t.allEventsLength>0),L.xb(1),L.Zb("ngForOf",t.allEvents))},directives:[b.u,b.P,b.O,b.h,b.g,b.v,b.o,b.D,b.E,b.t,b.G,b.n,s.j,b.H,b.Y,s.i,b.s,b.i,b.k,b.m,b.l,b.j,j],styles:["ion-header[_ngcontent-%COMP%]{box-shadow:1px 1px 5px rgba(0,0,0,.1)}#searchbar-wrapper[_ngcontent-%COMP%]{transition:.5s;height:60px;background:#edf3f8}.fairs-info[_ngcontent-%COMP%]{background:#eee}#my-events-button[_ngcontent-%COMP%]{opacity:1;--background:#005191;--color:#fff;--border-style:solid;--border-width:1px;--border-color:#fff;box-shadow:1px 1px 10px rgba(0,0,0,.1);width:120px;height:40px;font-size:.8em;font-weight:600;position:relative;right:15px}@media screen and (max-width:470px){#my-events-button[_ngcontent-%COMP%]{position:relative;right:35px}}ion-card[_ngcontent-%COMP%]{--background:#fff;margin:0 0 50px;position:relative;top:-5px;box-shadow:1px 10px 10px rgba(0,0,0,.1);min-height:300px;max-height:500px;padding-bottom:150px}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{position:absolute;bottom:0;padding:0;width:100%}ion-searchbar[_ngcontent-%COMP%]{--background:#fff;margin-left:10px;border-radius:5px;--height:30px;width:95%;font-size:.8em;--box-shadow:none;--cancel-button-color:#005191;--clear-button-color:#005191;--placeholder-opacity:0.5;--icon-color:#005191;transition:.5s}.orange-button[_ngcontent-%COMP%]{width:unset}.job-section[_ngcontent-%COMP%]{height:230px;color:#777;position:relative;top:20px;width:100%}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:block}h6.text-header[_ngcontent-%COMP%]{padding:unset;text-align:center}--ion-buttons[_ngcontent-%COMP%]{--color:#888}ion-button[_ngcontent-%COMP%]{--background:none}ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2.5em}.header-hr[_ngcontent-%COMP%]{border-top:2px solid #005191;opacity:.5;margin-top:40px;opacity:.2}ion-card-title[_ngcontent-%COMP%]{font-size:1.5em;font-weight:600;color:#0055a5}ion-card-subtitle[_ngcontent-%COMP%]{font-size:1.3em}@media screen and (min-width:1200px){ion-card.event-card[_ngcontent-%COMP%]{height:44vw;max-height:670px}}"]}),z),K=[{path:"",component:W},{path:"events-page/:id/:title/:addressOne/:addressTwo/:city/:state/:zip/:dateCreated/:date/:time/:photo/:description",loadChildren:function(){return r.e(33).then(r.bind(null,"kH/Y")).then(function(e){return e.EventsPagePageModule})}},{path:"going",loadChildren:function(){return r.e(34).then(r.bind(null,"no2t")).then(function(e){return e.GoingPageModule})}}],H=((B=function e(){o(this,e)}).\u0275mod=L.Fb({type:B}),B.\u0275inj=L.Eb({factory:function(e){return new(e||B)},imports:[[u.j.forChild(K)],u.j]}),B),Z=((N=function e(){o(this,e)}).\u0275mod=L.Fb({type:N}),N.\u0275inj=L.Eb({factory:function(e){return new(e||N)},imports:[[l.a,s.b,c.d,b.Q,H,u.j.forChild([{path:"",component:W}])]]}),N)},riPR:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n("AytR"),r=n("2Vo4"),s=n("Aso2"),c=n("fXoL"),u=n("tk/3"),l=function(){var e=function(){function e(t,n){o(this,e),this.http=t,this.profile=n,this.eventsGoing$=new r.a([]),this.BACKEND_URL=i.a.url}return a(e,[{key:"getEvents",value:function(){return console.log("Getting Events"),this.http.get(this.BACKEND_URL+"/api/events")}},{key:"getEventsGoing",value:function(e){return this.http.post(this.BACKEND_URL+"/api/events/events-going",{_id:e})}},{key:"goingToEvent",value:function(e,t,n){return console.log(this.profile),this.http.post(this.BACKEND_URL+"/api/events/go-to-event",{eventID:e,userEmail:t,id:n})}},{key:"notGoingToEvent",value:function(e,t,n){return this.http.post(this.BACKEND_URL+"/api/events/dont-go-to-event",{userEmail:t,eventID:e,id:n})}},{key:"deleteEvent",value:function(e){return this.http.post(this.BACKEND_URL+"/api/events/delete-event",{_id:e})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Qb(u.b),c.Qb(s.a))},e.\u0275prov=c.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},xcW5:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("fXoL"),r=function(){var e=function(){function e(){o(this,e),this.invokeEventsPageRefresh=new i.o}return a(e,[{key:"onBackAction",value:function(){this.invokeEventsPageRefresh.emit()}},{key:"resetEvents",value:function(){this.invokeEventsPageRefresh.emit()}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();