!function(){function t(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,s=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw s}}}}function o(t,o){(null==o||o>t.length)&&(o=t.length);for(var n=0,e=new Array(o);n<o;n++)e[n]=t[n];return e}function n(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function e(t,o){for(var n=0;n<o.length;n++){var e=o[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[3579],{43579:function(o,i,r){"use strict";r.r(i),r.d(i,{FollowingPageModule:function(){return z}});var s=r(38583),a=r(90665),c=r(64941),l=r(19039),u=r(21382),p=r(64762),g=r(69166),d=r(39181),m=r(79778),f=r(20445),h=r(88720),b=r(50806),x=r(86812),P=r(56264);function Z(t,o){1&t&&(h.TgZ(0,"ion-col",16),h.TgZ(1,"div"),h.TgZ(2,"p",17),h._uU(3,"You currently do not have any posts. Please click the Add Post button to create a Post."),h.qZA(),h.qZA(),h.qZA())}function w(t,o){if(1&t&&(h.TgZ(0,"p",43),h._uU(1),h.qZA()),2&t){var n=o.$implicit;h.xp6(1),h.hij(" #",n," ")}}function v(t,o){1&t&&(h.TgZ(0,"p",44),h._uU(1," No #hashtags for this post "),h.qZA())}function _(t,o){1&t&&(h.TgZ(0,"span",45),h._uU(1,"..."),h.qZA())}function O(t,o){if(1&t){var n=h.EpF();h.TgZ(0,"button",46),h.NdJ("click",function(){return h.CHM(n),h.oxw(2).alterDescriptionText()}),h._uU(1),h.qZA()}if(2&t){var e=h.oxw(2);h.xp6(1),h.hij(" ",e.showShortDesciption?"SHOW ALL":"SHOW LESS"," ")}}function y(t,o){1&t&&(h.TgZ(0,"ion-button",47),h._uU(1,"Post Comment "),h.qZA())}var C=function(t){return{"show-less":t}};function M(t,o){if(1&t){var n=h.EpF();h.TgZ(0,"div",18),h.TgZ(1,"ion-row",19),h.TgZ(2,"ion-col",20),h._UZ(3,"img",21),h.qZA(),h.TgZ(4,"ion-col",22),h.TgZ(5,"p",23),h._uU(6),h.qZA(),h.TgZ(7,"p",24),h._uU(8),h.qZA(),h.qZA(),h.qZA(),h.TgZ(9,"ion-row",19),h.TgZ(10,"ion-col",25),h.TgZ(11,"p",26),h._uU(12),h.qZA(),h.TgZ(13,"div",27),h.YNc(14,w,2,1,"p",28),h.qZA(),h.YNc(15,v,2,0,"p",29),h.TgZ(16,"p",30),h._uU(17),h.qZA(),h.YNc(18,_,2,0,"span",31),h.YNc(19,O,2,1,"button",32),h.qZA(),h.qZA(),h.TgZ(20,"ion-row",19),h.TgZ(21,"ion-col",33),h.TgZ(22,"ion-item",34),h.TgZ(23,"form",35),h.NdJ("ngSubmit",function(){var t=h.CHM(n).$implicit,o=h.oxw();return o.comment(t._id,o.userFullName,o.userEmail,o.userProfilePicture,o.commentForm.value)}),h._UZ(24,"ion-textarea",36,37),h.YNc(26,y,2,0,"ion-button",38),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(27,"ion-row",19),h.TgZ(28,"ion-col",39),h._UZ(29,"app-up-down-vote-buttons",40),h.qZA(),h.TgZ(30,"ion-col",41),h._UZ(31,"app-follow-comment-buttons",42),h.qZA(),h.qZA(),h.qZA()}if(2&t){var e=o.$implicit,i=h.MAs(25),r=h.oxw();h.xp6(3),h.s9C("src",e.creatorProfilePicture,h.LSH),h.xp6(3),h.Oqu(e.creatorName),h.xp6(2),h.Oqu(e.date),h.xp6(4),h.Oqu(e.title),h.xp6(2),h.Q6J("ngForOf",e.hashtags),h.xp6(1),h.Q6J("ngIf",0===e.hashtags.length),h.xp6(1),h.Q6J("ngClass",h.VKq(16,C,r.showShortDesciption)),h.xp6(1),h.Oqu(e.post),h.xp6(1),h.Q6J("ngIf",e.post.length>400&&r.showShortDesciption),h.xp6(1),h.Q6J("ngIf",e.post.length>400),h.xp6(4),h.Q6J("formGroup",r.commentForm),h.xp6(3),h.Q6J("ngIf",i.value.length>=2),h.xp6(3),h.Q6J("postID",e._id)("postEmail",e.creatorEmail),h.xp6(2),h.Q6J("postID",e._id)("commentLength",e.comments.length)}}var k,A,q=[{path:"",component:(k=function(){function o(t,e,i,r,s,a,c,l){n(this,o),this.router=t,this.posts=e,this.profile=i,this.toast=r,this.formBuilder=s,this.eventEmitterService=a,this.modal=c,this.location=l,this.showShortDesciption=!0,this.allFollowedPosts=[]}var i,r,s;return i=o,(r=[{key:"ngOnInit",value:function(){var o=this;this.location.onPopState(function(){o.eventEmitterService.onBackAction()}),this.profile.getUserDetails().subscribe(function(n){console.log("User ID from Following Page OnInit"),o.userID=n._id,o.userFullName=n.fullName,o.userEmail=n.email,o.userProfilePicture=n.profilePicture,o.posts.getFollowedPost(o.userID).subscribe(function(n){o.allFollowedPosts=Object.values(n).reverse(),console.log(n);var e,i=t(o.allFollowedPosts);try{for(i.s();!(e=i.n()).done;){var r=e.value;r.date=(0,m.Z)(new Date(r.date),"MMMM do, yyyy")}}catch(s){i.e(s)}finally{i.f()}return o.allFollowedPosts})}),console.log("Got Followed Posts"),this.commentForm=this.formBuilder.group({comment:[""]})}},{key:"alterDescriptionText",value:function(){this.showShortDesciption=!this.showShortDesciption}},{key:"postPage",value:function(t){this.router.navigate(["/home/posts/post-page",t._id])}},{key:"addPost",value:function(){this.router.navigate(["/home/posts/add-post"])}},{key:"back",value:function(){this.eventEmitterService.onBackAction(),this.router.navigate(["/home/posts"])}},{key:"comment",value:function(o,n,e,i,r){return(0,p.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var e=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.commentForm.reset(),n.next=3,Date.now();case 3:return console.log("Posting comment"),console.log("Post ID: "+o),n.next=7,this.posts.comment(o,this.userFullName,this.userEmail,this.userProfilePicture,r).subscribe(function(){e.posts.getPostInfo(o).subscribe(function(n){e.posts.getPostInfo(o).subscribe(function(o){var n,i=t(o.comments);try{for(i.s();!(n=i.n()).done;){var r=n.value;console.log(r),r.isUser=!1,r.canDeleteComment=!1,r.canReport=!0,r.userEmail===e.userEmail&&(r.isUser=!0,r.canDeleteComment=!0,r.canReport=!1),r.repliesLength=r.replies.length,r.date=(0,f.Z)(new Date(r.date),{includeSeconds:!0,addSuffix:!1})}}catch(s){i.e(s)}finally{i.f()}e.posts.commentsSubject$.next(o.comments.reverse())})})});case 7:return n.next=9,this.posts.getPostInfo(o).subscribe(function(o){var n,i=t(o.comments);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.date=(0,f.Z)(new Date(r.date),{includeSeconds:!0,addSuffix:!0})}}catch(s){i.e(s)}finally{i.f()}e.posts.commentsSubject$.next(o.comments.reverse())});case 9:return this.toast.create({message:"Your comment has been added.",duration:1500}).then(function(t){return t.present()}),n.next=12,this.router.navigate(["/home/posts/post-page",o]);case 12:case"end":return n.stop()}},n,this)}))}},{key:"doRefresh",value:function(o){return(0,p.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var e=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.profile.getUserDetails().subscribe(function(o){console.log("User ID from Following Page OnInit"),e.userID=o._id,e.userFullName=o.fullName,e.userEmail=o.email,e.userProfilePicture=o.profilePicture,e.posts.getFollowedPost(e.userID).subscribe(function(o){e.allFollowedPosts=Object.values(o).reverse(),console.log(o);var n,i=t(e.allFollowedPosts);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.date=(0,m.Z)(new Date(r.date),"MMMM do, yyyy")}}catch(s){i.e(s)}finally{i.f()}return e.allFollowedPosts})}),n.next=3,setTimeout(function(){var t=e.toast.create({message:"Inspiration Page has been refreshed",duration:3e3});o.target.complete(),t.then(function(t){return t.present()})},2e3);case 3:case"end":return n.stop()}},n,this)}))}}])&&e(i.prototype,r),s&&e(i,s),o}(),k.\u0275fac=function(t){return new(t||k)(h.Y36(u.F0),h.Y36(g.P),h.Y36(d.H),h.Y36(l.yF),h.Y36(a.qu),h.Y36(b.p),h.Y36(l.IN),h.Y36(s.lw))},k.\u0275cmp=h.Xpm({type:k,selectors:[["app-following"]],decls:28,vars:2,consts:[[1,"ion-hide-lg-up"],["slot","start"],["vertical","bottom","horizontal","end","slot","fixed",1,"ion-hide-lg-up"],[3,"click"],["name","add","size","large"],["slot","fixed",3,"ionRefresh"],[1,"ion-hide-md-down"],[1,"ion-hide-lg-down","ion-justify-content-center",2,"padding-top","80px","margin-bottom","40px"],["size-xs","11","size-sm","10","size-md","10","size-lg","8","size-xl","6"],[1,"desktop-toolbar"],["slot","end"],[1,"add-button",3,"click"],[1,"blue-button",3,"click"],[1,"ion-justify-content-center",2,"margin-top","1%"],["class","no-posts ion-align-items-center","size-xs","11","size-sm","9","size-md","8","size-lg","7",4,"ngIf"],["class","post","style","margin-top: 1%;",4,"ngFor","ngForOf"],["size-xs","11","size-sm","9","size-md","8","size-lg","7",1,"no-posts","ion-align-items-center"],[2,"font-size","1.2em"],[1,"post",2,"margin-top","1%"],[1,"ion-justify-content-center"],["size","1"],[2,"background","#999","border-radius","100px","height","35xpx","width","35px",3,"src"],["size","10"],[1,"post-name"],[1,"post-date"],["size","11"],[1,"post-title"],[1,"hashtags"],["class","hashtag",4,"ngFor","ngForOf"],["class","no-tags",4,"ngIf"],[1,"post-content",3,"ngClass"],["class","ellipsis",4,"ngIf"],["class","show-more-or-less-button","type","button",3,"click",4,"ngIf"],["size","12"],["lines","none",2,"height","auto"],[3,"formGroup","ngSubmit"],["autogrow","true","autocapitalize","true","rows","5","spellcheck","true","wrap","soft","type","text","placeholder","Add a Comment","formControlName","comment",1,"comment-input-mobile"],["postComment",""],["style","float: right;","class","comment-post-button","name","send","type","submit",4,"ngIf"],["size","8"],[3,"postID","postEmail"],["size","3"],[3,"postID","commentLength"],[1,"hashtag"],[1,"no-tags"],[1,"ellipsis"],["type","button",1,"show-more-or-less-button",3,"click"],["name","send","type","submit",1,"comment-post-button",2,"float","right"]],template:function(t,o){1&t&&(h.TgZ(0,"ion-header",0),h.TgZ(1,"ion-toolbar"),h.TgZ(2,"ion-buttons",1),h._UZ(3,"ion-back-button"),h.qZA(),h.TgZ(4,"ion-title"),h._uU(5,"Following"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(6,"ion-content"),h.TgZ(7,"ion-fab",2),h.TgZ(8,"ion-fab-button",3),h.NdJ("click",function(){return o.addPost()}),h._UZ(9,"ion-icon",4),h.qZA(),h.qZA(),h.TgZ(10,"ion-refresher",5),h.NdJ("ionRefresh",function(t){return o.doRefresh(t)}),h._UZ(11,"ion-refresher-content"),h.qZA(),h.TgZ(12,"ion-grid",6),h.TgZ(13,"ion-row",7),h.TgZ(14,"ion-col",8),h.TgZ(15,"ion-toolbar",9),h.TgZ(16,"ion-buttons",1),h.TgZ(17,"h1"),h._uU(18,"Following"),h.qZA(),h.qZA(),h.TgZ(19,"ion-buttons",10),h.TgZ(20,"ion-button",11),h.NdJ("click",function(){return o.addPost()}),h._uU(21," Add Post "),h.qZA(),h.TgZ(22,"ion-button",12),h.NdJ("click",function(){return o.back()}),h._uU(23," Back "),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(24,"ion-row",13),h.YNc(25,Z,4,0,"ion-col",14),h.TgZ(26,"ion-col",8),h.YNc(27,M,32,18,"div",15),h.qZA(),h.qZA(),h.qZA(),h.qZA()),2&t&&(h.xp6(25),h.Q6J("ngIf",0===o.allFollowedPosts.length),h.xp6(2),h.Q6J("ngForOf",o.allFollowedPosts))},directives:[l.Gu,l.sr,l.Sm,l.oU,l.cs,l.wd,l.W2,l.IJ,l.W4,l.gu,l.nJ,l.Wo,l.jY,l.Nd,l.wI,l.YG,s.O5,s.sg,s.mk,l.Ie,a._Y,a.JL,a.sg,l.g2,l.j9,a.JJ,a.u,x.g,P.H],styles:["ion-title[_ngcontent-%COMP%]{margin:0}.desktop-toolbar[_ngcontent-%COMP%]{--background:none;padding-bottom:16px;border-bottom:1px solid #33333326}.desktop-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#0055a5}.post[_ngcontent-%COMP%]{padding:24px 0;margin-bottom:80px;border-radius:11px;box-shadow:1px 10px 26px rgba(0,0,0,.05);font-size:1.1em;line-height:35px;background:#fff}.post-content[_ngcontent-%COMP%]{font-size:1em}.post-title[_ngcontent-%COMP%]{font-weight:800;color:#0055a5;font-size:.9em;position:relative;top:-20px;line-height:25px;margin:10px 0 0}.post-buttons[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:none}.post-name[_ngcontent-%COMP%]{font-size:.9em;font-weight:700;color:#666}.post-date[_ngcontent-%COMP%], .post-name[_ngcontent-%COMP%]{margin:0;line-height:18px}.post-date[_ngcontent-%COMP%]{opacity:.4;font-size:.65em}.show-less[_ngcontent-%COMP%]{height:auto;overflow:hidden}.show-more-or-less-button[_ngcontent-%COMP%]{float:right;position:relative;right:0;margin-top:35px;padding:.5em;background:#0055a5;color:#fff;border-radius:5px;font-size:.6em;font-weight:600}.ellipsis[_ngcontent-%COMP%]{float:right;position:relative;right:20px;top:-18px}@media screen and (max-width: 567px){.post[_ngcontent-%COMP%]{padding:30px 0}}.no-posts[_ngcontent-%COMP%]{height:70vh}form[_ngcontent-%COMP%]{width:100%}.hashtags[_ngcontent-%COMP%]{position:relative;top:-32px}.hashtag[_ngcontent-%COMP%]{font-size:.55em;color:#ea8400}.hashtag[_ngcontent-%COMP%], .no-tags[_ngcontent-%COMP%]{font-weight:600;display:inline-block;margin-right:5px}.no-tags[_ngcontent-%COMP%]{font-size:.7em;color:#333;opacity:.5;position:relative;top:-32px}.comment[_ngcontent-%COMP%]{border:1px solid #005191;--padding-start:20px}.comment-post-button[_ngcontent-%COMP%]{--background:linear-gradient(#0672c4,#005191);height:30px;margin-top:20px;opacity:0;width:80px;transform:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275);-webkit-animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) forwards;animation:slide-up .5s cubic-bezier(.175,.885,.32,1.275) forwards}.comment-input[_ngcontent-%COMP%]{margin:30px 0 60px}.comment-input[_ngcontent-%COMP%]:hover{margin:50px 0 80px}.comment-input-mobile[_ngcontent-%COMP%]{background:hsla(180,7%,97%,.5);margin:30px 0 60px;border:1px solid rgba(0,81,145,.4);border-radius:5px}ion-item[_ngcontent-%COMP%]{--background:none}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]{height:45px;border-radius:5px;padding:10px;--background:rgb(209,216,224,0.13);--color:#fff;width:140px;font-size:.6em}.toolbar[_ngcontent-%COMP%] > ion-buttons[_ngcontent-%COMP%] > ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;left:-10px}.post-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:140px;font-size:1em;--color:#005191}.blue-button[_ngcontent-%COMP%]{--color:#fff;--background:#0055a5;--background-hover:linear-gradient(#0055a5,#0055a2)}.add-button[_ngcontent-%COMP%], .blue-button[_ngcontent-%COMP%]{height:24px;width:100px;font-size:.5em;font-weight:600;display:block}.add-button[_ngcontent-%COMP%]{--color:#fff;--background:linear-gradient(#5ad8b2,#40c59d);--background-hover:linear-gradient(#bffce9,#7efcd4)}.comment[_ngcontent-%COMP%]{border:1px solid #0055a5;border-radius:5px;margin-top:20px;padding:10px}.comment-button[_ngcontent-%COMP%]{font-size:1em;font-weight:600;position:relative;right:-20px;top:5px}.comment-post-button[_ngcontent-%COMP%]{--border-color:#40c59d;--border-width:2px;--border-style:solid;--background:#40c59d;--color:#fff;height:40px;margin:29px auto;font-weight:600;font-size:.6em;border-radius:5px;width:100px}.comment-input[_ngcontent-%COMP%]{margin:10px 0 0;box-shadow:none;border:1px solid rgba(0,81,145,.4);border-radius:5px}.comment-input[_ngcontent-%COMP%], .comment-input[_ngcontent-%COMP%]:hover{background:hsla(180,7%,97%,.5);height:auto;padding-left:10px;transition:.5s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input[_ngcontent-%COMP%]:hover{margin:12px 0 4px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px}.comment-input-mobile[_ngcontent-%COMP%]{background:rgba(213,232,236,.3);height:auto;margin:20px 0 10px;box-shadow:none;padding-left:10px;border:3px solid #0055a5;border-radius:2px}.comment-input-mobile[_ngcontent-%COMP%], .comment-input-mobile[_ngcontent-%COMP%]:focus{transition:1s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.comment-input-mobile[_ngcontent-%COMP%]:focus{background:hsla(180,7%,97%,.5);height:100px;margin:30px 0 150px;box-shadow:1px 1px 3px #999;border:1px solid #005191;border-radius:5px}.comment-button[_ngcontent-%COMP%]{width:130px;--background:#0055a5;--background-hover:#0055a5;--color:#fff;font-size:.6em;font-size:800;border-radius:5px}ion-fab-button[_ngcontent-%COMP%]{--background:#1baf88;--color-focused:#fff;--color-hover:#fff;--color-activated:#fff;position:relative;bottom:50px;right:10px}@-webkit-keyframes slide-up{0%{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes slide-up{0%{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}"]}),k)}],T=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[u.Bz.forChild(q)],u.Bz]}),t}(),z=((A=function t(){n(this,t)}).\u0275fac=function(t){return new(t||A)},A.\u0275mod=h.oAB({type:A}),A.\u0275inj=h.cJS({imports:[[s.ez,a.u5,c.c,a.UX,l.Pc,T]]}),A)}}])}();