!function(){function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,s=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw s}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[4490],{40532:function(e,t,n){"use strict";n.r(t),n.d(t,{RepliesPagePageModule:function(){return f}});var r,i=n(38583),s=n(90665),a=n(19039),l=n(21382),c=n(28684),u=n(88720),p=[{path:"",component:c.o}],m=function(){var e=function e(){o(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[l.Bz.forChild(p)],l.Bz]}),e}(),f=((r=function e(){o(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[[i.ez,s.u5,s.UX,a.Pc,m]]}),r)},28684:function(t,n,i){"use strict";i.d(n,{o:function(){return x}});var s=i(64762),a=i(19039),l=i(39181),c=i(69166),u=i(20445),p=i(26215),m=i(8351),f=i(88720),g=function(){var e=function(){function e(t,n,r){o(this,e),this.popoverController=t,this.alertController=n,this.loadingController=r}return r(e,[{key:"ngOnInit",value:function(){}},{key:"selectOption",value:function(e){switch(this.selection=e.detail.value,console.log(this.selection),this.selection){case"edit":console.log("Editting!");break;case"delete":console.log("Deleting!"),this.presentAlertConfirm();break;case"report":console.log("Reporting!")}}},{key:"dismiss",value:function(){this.popoverController.dismiss({data:this.selection})}},{key:"presentAlertConfirm",value:function(){return(0,s.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"my-custom-class",header:"Delete?",message:"Are you sure?",buttons:[{text:"No",role:"cancel",cssClass:"secondary",handler:function(e){console.log("Confirm Cancel: blah")}},{text:"Yes",handler:function(){return(0,s.mG)(n,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Deleting"),e.next=3,this.deleteLoading();case 3:return e.next=5,t.dismiss();case 5:case"end":return e.stop()}},e,this)}))}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"deleteLoading",value:function(){return(0,s.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({cssClass:"my-custom-class",message:"Deleting Reply ...",duration:1e3});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onDidDismiss();case 7:console.log("Loading dismissed!");case 8:case"end":return e.stop()}},e,this)}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(f.Y36(a.Dh),f.Y36(a.Br),f.Y36(a.HT))},e.\u0275cmp=f.Xpm({type:e,selectors:[["app-reply-options-popover"]],decls:16,vars:0,consts:[["name","reply-option-menu",3,"ionChange"],["lines","none"],["value","delete"],["value","edit"],["value","report"],["button","","lines","none",1,"ion-text-center",3,"click"],[2,"color","#e3405f"]],template:function(e,t){1&e&&(f.TgZ(0,"ion-radio-group",0),f.NdJ("ionChange",function(e){return t.selectOption(e)}),f.TgZ(1,"ion-item",1),f.TgZ(2,"ion-label"),f._uU(3,"Delete"),f.qZA(),f._UZ(4,"ion-radio",2),f.qZA(),f.TgZ(5,"ion-item",1),f.TgZ(6,"ion-label"),f._uU(7,"Edit"),f.qZA(),f._UZ(8,"ion-radio",3),f.qZA(),f.TgZ(9,"ion-item",1),f.TgZ(10,"ion-label"),f._uU(11,"Report"),f.qZA(),f._UZ(12,"ion-radio",4),f.qZA(),f.TgZ(13,"ion-item",5),f.NdJ("click",function(){return t.dismiss()}),f.TgZ(14,"ion-label",6),f._uU(15,"Close"),f.qZA(),f.qZA(),f.qZA())},directives:[a.se,a.QI,a.Ie,a.Q$,a.B7,a.U5],styles:[""]}),e}(),d=i(90665),h=i(50806),v=i(38583),Z=["replyTextArea"];function y(e,t){if(1&e){var n=f.EpF();f.TgZ(0,"ion-row",22),f.TgZ(1,"ion-col",9),f.TgZ(2,"ion-col",9),f.TgZ(3,"ion-item",10),f.TgZ(4,"ion-avatar",11),f._UZ(5,"img",12),f.qZA(),f.TgZ(6,"ion-label"),f.TgZ(7,"h6"),f.TgZ(8,"span",23),f._uU(9),f.qZA(),f._UZ(10,"br"),f._uU(11),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(12,"ion-col",9),f.TgZ(13,"p",24),f._uU(14),f.qZA(),f.qZA(),f.TgZ(15,"ion-col",25),f.TgZ(16,"ion-button",26),f.NdJ("click",function(){return f.CHM(n),f.oxw().optionsPopover()}),f._UZ(17,"ion-icon",27),f.qZA(),f.qZA(),f.qZA(),f.qZA()}if(2&e){var r=t.$implicit;f.xp6(5),f.s9C("src",r.userProfilePicture,f.LSH),f.xp6(4),f.Oqu(r.userFullName),f.xp6(2),f.hij("",r.date," ago"),f.xp6(3),f.Oqu(r.reply)}}var x=function(){var t=function(){function t(e,n,r,i,s,a,l,c,u,m){o(this,t),this.formBuilder=e,this.modal=n,this.popover=r,this.navParams=i,this.loading=s,this.profile=a,this.posts=l,this.alert=c,this.postEmitterService=u,this.notificationsService=m,this.replies$=new p.X([]),this.tabBar=document.getElementById("myTabBar"),this.votes=document.getElementById("votes")}return r(t,[{key:"ngOnInit",value:function(){var t=this;this.profile.getUserDetails().subscribe(function(e){t.commentUserProfilePicture=e.profilePicture}),this.repliesForm=this.formBuilder.group({reply:[""]}),this.replies$.next(this.navParams.get("replies").reverse()),this.replies$.subscribe(function(n){t.replies=n;var r,o=e(t.replies);try{for(o.s();!(r=o.n()).done;){var i=r.value;i.isEditable=!1,i.userEmail==t.userEmail&&(i.isEditable=!0)}}catch(s){o.e(s)}finally{o.f()}}),this.postID=this.navParams.get("postID"),this.commentContents=this.navParams.get("comment"),this.commentID=this.navParams.get("commentID"),this.commentUserFullName=this.navParams.get("commentUserFullName"),this.commentUserEmail=this.navParams.get("commentUserEmail"),this.commentDate=this.navParams.get("commentDate"),this.userFullName=this.navParams.get("userFullName"),this.userEmail=this.navParams.get("userEmail"),this.commentUserProfilePicture=this.navParams.get("userProfilePicture")}},{key:"cancel",value:function(){console.log("cancelling comment..."),this.modal.dismiss()}},{key:"refreshRepliesAmount",value:function(){this.postEmitterService.postPageRefresh()}},{key:"reply",value:function(t){return(0,s.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var r=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.repliesForm.reset();case 2:return n.next=4,console.log("replying to comment...");case 4:return n.next=6,this.posts.replyComment(this.commentID,this.postID,t,this.userFullName,this.userEmail,this.commentUserProfilePicture,this.commentUserFullName,this.commentUserEmail).subscribe(function(t){var n,o,i=[],s=e(t.comments);try{for(s.s();!(o=s.n()).done;){var a=o.value;if(a._id==t.comment){n=a;for(var l=0;l<a.replies.length;l++)i.push(a.replies[l])}}}catch(v){s.e(v)}finally{s.f()}var c,p=t.comments,m=t.userEmail,f=t.replies,g=e(p);try{for(g.s();!(c=g.n()).done;){var d=c.value;d.repliesLength=d.replies.length,d.isUser=!1,d.canDeleteComment=!1,d.canReport=!0,d.date=(0,u.Z)(new Date(d.date),{includeSeconds:!1,addSuffix:!1}),d.userEmail===m&&(d.isUser=!0,d.canDeleteComment=!0,d.canReport=!1);for(var h=0;d.replies.length>h;h++)d.replies[h].date=(0,u.Z)(new Date(d.replies[h].date),{addSuffix:!1}),f.push(d.replies[h])}}catch(v){g.e(v)}finally{g.f()}r.replies=i,i.reverse(),r.posts.commentsSubject$.next(p.reverse()),r.replies$.next(r.replies.reverse()),console.log("From replyComment"),console.log(t),r.notificationsService.replyNotification(r.userEmail,r.commentUserEmail,r.postID,n,t.newReply).subscribe(),console.log(r.replyTextArea.value),r.replyTextArea.value=void 0});case 6:return n.next=8,this.repliesLoading();case 8:case"end":return n.stop()}},n,this)}))}},{key:"deleteReply",value:function(t){return(0,s.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var r=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Deleting reply with id ",t),n.next=3,this.posts.deleteReply(t,this.commentID,this.postID).subscribe(function(t){console.log(t);var n,o=[],i=t.comments,s=t.userEmail,a=t.replies,l=e(i);try{for(l.s();!(n=l.n()).done;){var c=n.value;if(c._id==t.comment){c;for(var p=0;p<c.replies.length;p++)o.push(c.replies[p])}}}catch(h){l.e(h)}finally{l.f()}var m,f=e(i);try{for(f.s();!(m=f.n()).done;){var g=m.value;g.repliesLength=g.replies.length,g.isUser=!1,g.canDeleteComment=!1,g.canReport=!0,g.date=(0,u.Z)(new Date(g.date),{includeSeconds:!1,addSuffix:!1}),g.userEmail==s&&(g.isUser=!0,g.canDeleteComment=!0,g.canReport=!1);for(var d=0;g.replies.length>d;d++)g.replies[d].date=(0,u.Z)(new Date(g.replies[d].date),{addSuffix:!1}),a.push(g.replies[d])}}catch(h){f.e(h)}finally{f.f()}r.replies=o,r.posts.commentsSubject$.next(i.reverse()),r.replies$.next(r.replies.reverse())});case 3:case"end":return n.stop()}},n,this)}))}},{key:"repliesLoading",value:function(){return(0,s.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loading.create({message:"Replying to Comment...",duration:2e3});case 2:return t=e.sent,e.next=5,this.refreshRepliesAmount();case 5:return e.next=7,t.present();case 7:return e.next=9,t.onDidDismiss();case 9:console.log("Loading dismissed!");case 10:case"end":return e.stop()}},e,this)}))}},{key:"confirmAlert",value:function(){return(0,s.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({cssClass:"success-alert",message:"Your comment has been edited.",buttons:["OK"]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"ScrollToReply",value:function(){var e=this;document,console.log(this.content.getScrollElement().then(function(t){return e.content.scrollToPoint(0,t.scrollHeight,100)}))}},{key:"replyContent",value:function(e){console.log(e),this.replyValue=e.detail.value}},{key:"optionsPopover",value:function(){return(0,s.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popover.create({component:g,cssClass:"my-custom-class",translucent:!0});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onDidDismiss();case 7:n=e.sent,r=n.role,console.log("onDidDismiss resolved with role",r);case 10:case"end":return e.stop()}},e,this)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(f.Y36(d.qu),f.Y36(a.IN),f.Y36(a.Dh),f.Y36(a.X1),f.Y36(a.HT),f.Y36(l.H),f.Y36(c.P),f.Y36(a.Br),f.Y36(h.p),f.Y36(m.T))},t.\u0275cmp=f.Xpm({type:t,selectors:[["app-replies-page"]],viewQuery:function(e,t){var n;(1&e&&(f.Gf(a.W2,7),f.Gf(Z,7)),2&e)&&(f.iGM(n=f.CRH())&&(t.content=n.first),f.iGM(n=f.CRH())&&(t.replyTextArea=n.first))},decls:38,vars:6,consts:[[1,"ion-hide-md-down"],["slot","start"],["slot","end"],[3,"click"],[1,"ion-hide-lg-up"],["id","back-arrow-icons","name","arrow-back",3,"click"],[3,"scrollEvents"],[2,"background-color","white","padding","2em 0 2em 0em"],[1,"ion-justify-content-center"],["size","11"],["lines","none"],["slot","start",1,"comment-avatar"],[3,"src"],[2,"color","#0055a5","font-weight","600"],["class","ion-justify-content-center ion-align-items-start reply-wrapper",4,"ngFor","ngForOf"],[1,"ion-hide-lg-up","add-comment-footer"],["size","10",2,"display","inline-block","height","40px"],["autocapitalize","true","rows","1","spellcheck","true","wrap","soft","type","text","placeholder","Add a Reply",2,"display","inline",3,"ionChange"],["replyTextArea",""],["size","1",2,"display","inline-block","height","50px",3,"click"],[2,"--background","none"],["slot","start","name","send",2,"font-size","1.8em","color","#0055a5"],[1,"ion-justify-content-center","ion-align-items-start","reply-wrapper"],[2,"color","#000"],[1,"reply-text"],["size","2",1,"ion-float-right"],[2,"--background","none","position","relative","left","32px",3,"click"],["name","ellipsis-vertical-outline",1,"more-icon"]],template:function(e,t){1&e&&(f.TgZ(0,"ion-header",0),f.TgZ(1,"ion-toolbar"),f.TgZ(2,"ion-title",1),f._uU(3,"Replies"),f.qZA(),f.TgZ(4,"ion-buttons",2),f.TgZ(5,"ion-button",3),f.NdJ("click",function(){return t.cancel()}),f._uU(6," cancel "),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(7,"ion-header",4),f.TgZ(8,"ion-toolbar"),f.TgZ(9,"ion-icon",5),f.NdJ("click",function(){return t.cancel()}),f.qZA(),f.TgZ(10,"ion-title",2),f._uU(11,"Replies"),f.qZA(),f.qZA(),f.qZA(),f.TgZ(12,"ion-content",6),f.TgZ(13,"div",7),f.TgZ(14,"ion-row",8),f.TgZ(15,"ion-col",9),f.TgZ(16,"ion-item",10),f.TgZ(17,"ion-avatar",11),f._UZ(18,"img",12),f.qZA(),f.TgZ(19,"ion-label"),f.TgZ(20,"h6"),f.TgZ(21,"span",13),f._uU(22),f.qZA(),f._UZ(23,"br"),f._uU(24),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(25,"ion-row",8),f.TgZ(26,"ion-col",9),f.TgZ(27,"p"),f._uU(28),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.YNc(29,y,18,4,"ion-row",14),f.qZA(),f.TgZ(30,"ion-footer",15),f.TgZ(31,"ion-row",8),f.TgZ(32,"ion-col",16),f.TgZ(33,"ion-textarea",17,18),f.NdJ("ionChange",function(e){return t.replyContent(e)}),f.qZA(),f.qZA(),f.TgZ(35,"ion-col",19),f.NdJ("click",function(){return t.reply(t.replyValue)&&t.ScrollToReply()}),f.TgZ(36,"ion-button",20),f._UZ(37,"ion-icon",21),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&e&&(f.xp6(12),f.Q6J("scrollEvents",!0),f.xp6(6),f.s9C("src",t.commentUserProfilePicture,f.LSH),f.xp6(4),f.Oqu(t.commentUserFullName),f.xp6(2),f.hij("",t.commentDate," "),f.xp6(4),f.Oqu(t.commentContents),f.xp6(1),f.Q6J("ngForOf",t.replies))},directives:[a.Gu,a.sr,a.wd,a.Sm,a.YG,a.gu,a.W2,a.Nd,a.wI,a.Ie,a.BJ,a.Q$,v.sg,a.fr,a.g2,a.j9],styles:["ion-item[_ngcontent-%COMP%]{--background:none;position:relative;right:16px}.add-comment-footer[_ngcontent-%COMP%]{background:rgba(213,232,236,.3);height:80px;font-size:1.3em;border-top:6px solid #0055a5;padding-top:4px}.more-icon[_ngcontent-%COMP%]{color:#0055a5;font-size:1.3em}.reply-wrapper[_ngcontent-%COMP%]{padding:10px;margin:16px;box-shadow:1px 10px 10px rgba(0,0,0,.05);background:#fff}#reply-avatar[_ngcontent-%COMP%]{height:30px;width:30px;border-radius:50px;position:relative;top:7px}.reply-name[_ngcontent-%COMP%]{font-weight:700;margin:.5em 0}#reply-date[_ngcontent-%COMP%]{font-size:.7em;color:#999}#back-arrow-icons[_ngcontent-%COMP%]{font-size:1.5em;position:relative;left:24px;top:8px}"]}),t}()}}])}();