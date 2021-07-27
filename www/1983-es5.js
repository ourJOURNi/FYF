!function(){function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[1983],{81983:function(t,i,a){"use strict";a.r(i),a.d(i,{StudentChatPageModule:function(){return U}});var o=a(38583),s=a(90665),u=a(19039),c=a(21382),l=a(64762),f=a(50420),g=a(39181),p=a(20445),d=a(88720),m=a(70009);function h(e,t){1&e&&(d.TgZ(0,"div",9),d.TgZ(1,"p"),d._uU(2,"You have "),d.TgZ(3,"b"),d._uU(4,"no messages"),d.qZA(),d._uU(5," in your inbox. Please press the "),d._UZ(6,"ion-icon",10),d._uU(7," button to create a new message. "),d.qZA(),d.qZA())}function v(e,t){if(1&e){var n=d.EpF();d.TgZ(0,"ion-item-sliding",4),d.NdJ("click",function(){var e=d.CHM(n).$implicit;return d.oxw().chatPage(e.chatId)}),d.TgZ(1,"ion-item",11),d.TgZ(2,"ion-avatar",1),d._UZ(3,"img",12),d.qZA(),d.TgZ(4,"ion-label"),d.TgZ(5,"h2"),d._uU(6),d.TgZ(7,"span",13),d._uU(8),d.qZA(),d.qZA(),d.TgZ(9,"p"),d._uU(10),d.qZA(),d.qZA(),d.qZA(),d._UZ(11,"ion-item-options",14),d.qZA()}if(2&e){var r=t.$implicit;d.xp6(3),d.s9C("src",r.isUser?r.respondingUserPhoto:r.requestingUserPhoto,d.LSH),d.xp6(3),d.hij("",r.isUser?r.respondingUserFullname:r.requestingUserFullname," "),d.xp6(2),d.hij("\xb7 ",r.lastMessageTime,""),d.xp6(2),d.Oqu(r.lastMessageText)}}var Z,b,y=[{path:"",component:(Z=function(){function t(e,r,i,a){n(this,t),this.router=e,this.modal=r,this.studentChat=i,this.profile=a}var i,a,o;return i=t,(a=[{key:"ngOnInit",value:function(){var t=this;this.profile.getUserDetails().subscribe(function(n){t.fullName=n.fullName,t.profilePicture=n.profilePicture,t.email=n.email,t.studentChat.conversations$.subscribe(function(n){t.conversations=Object.values(n).reverse();var r,i=e(t.conversations);try{for(i.s();!(r=i.n()).done;){var a,o=r.value,s=e(o.messages);try{for(s.s();!(a=s.n()).done;){var u=a.value;u.date=(0,p.Z)(new Date(u.date))}}catch(c){s.e(c)}finally{s.f()}o.requestingUserEmail===t.email&&(o.isUser=!0),o.lastMessage=o.messages.slice(-1)[0],o.lastMessageText=o.lastMessage.text,o.lastMessageTime=o.lastMessage.date}}catch(c){i.e(c)}finally{i.f()}})})}},{key:"chatPage",value:function(e){this.router.navigate(["home/posts/student-chat/chat-page",e,this.fullName,this.profilePicture,this.email])}},{key:"newMessage",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modal.create({component:f.K,componentProps:{}});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"delete",value:function(e){}}])&&r(i.prototype,a),o&&r(i,o),t}(),Z.\u0275fac=function(e){return new(e||Z)(d.Y36(c.F0),d.Y36(u.IN),d.Y36(m.U),d.Y36(g.H))},Z.\u0275cmp=d.Xpm({type:Z,selectors:[["app-student-chat"]],decls:15,vars:2,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"toolbar-title"],["slot","end"],[3,"click"],["size","large","name","create",1,"new-message"],[1,"searchbar-wrapper","ion-hide-lg-up"],["id","no-messages","class","ion-text-center","style","margin-top: 75px; padding: 15px;",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],["id","no-messages",1,"ion-text-center",2,"margin-top","75px","padding","15px"],["size","small","name","create",1,"new-message"],[1,"unread"],[3,"src"],[1,"date-sent"],["side","end"]],template:function(e,t){1&e&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-buttons",1),d._UZ(3,"ion-back-button"),d.TgZ(4,"p",2),d._uU(5,"Student Chat"),d.qZA(),d.qZA(),d.TgZ(6,"ion-buttons",3),d.TgZ(7,"ion-button",4),d.NdJ("click",function(){return t.newMessage()}),d._UZ(8,"ion-icon",5),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(9,"ion-content"),d.TgZ(10,"ion-toolbar",6),d._UZ(11,"ion-searchbar"),d.qZA(),d.TgZ(12,"ion-list",0),d.YNc(13,h,8,0,"div",7),d.YNc(14,v,12,4,"ion-item-sliding",8),d.qZA(),d.qZA()),2&e&&(d.xp6(13),d.Q6J("ngIf",0==t.conversations),d.xp6(1),d.Q6J("ngForOf",t.conversations))},directives:[u.Gu,u.sr,u.Sm,u.oU,u.cs,u.YG,u.gu,u.W2,u.VI,u.j9,u.q_,o.O5,o.sg,u.td,u.Ie,u.BJ,u.Q$,u.IK],styles:[".new-message[_ngcontent-%COMP%]{color:#faa71b}ion-label[_ngcontent-%COMP%]{font-weight:800;display:block}.searchbar-wrapper[_ngcontent-%COMP%]{margin:20px 0}.unread[_ngcontent-%COMP%]{--background:#cbd7e6}.date-sent[_ngcontent-%COMP%]{font-size:.8em;opacity:.5}"]}),Z)},{path:"chat-page/:chatId/:fullName/:profilePicture/:email",loadChildren:function(){return Promise.all([a.e(8592),a.e(9133)]).then(a.bind(a,39133)).then(function(e){return e.ChatPagePageModule})}}],w=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[c.Bz.forChild(y)],c.Bz]}),e}(),A=a(62403),U=((b=function e(){n(this,e)}).\u0275fac=function(e){return new(e||b)},b.\u0275mod=d.oAB({type:b}),b.\u0275inj=d.cJS({imports:[[o.ez,s.u5,u.Pc,w,A.NewMessageStudentPageModule]]}),b)}}])}();