(self.webpackChunkfind_you_future_app=self.webpackChunkfind_you_future_app||[]).push([[9133],{39133:function(t,e,n){"use strict";n.r(e),n.d(e,{ChatPagePageModule:function(){return Z}});var o=n(38583),i=n(90665),s=n(19039),a=n(21224),r=n(21382),c=n(64762),u=n(10980),l=n(88720),g=n(70009);const h=["message"];function d(t,e){if(1&t&&(l.TgZ(0,"ion-item"),l.TgZ(1,"ion-avatar"),l._UZ(2,"img",17),l.qZA(),l.TgZ(3,"ion-label"),l.TgZ(4,"h4",18),l._uU(5),l.TgZ(6,"span",19),l._uU(7),l.qZA(),l.qZA(),l.TgZ(8,"p",20),l._uU(9),l.qZA(),l.qZA(),l.qZA()),2&t){const t=e.$implicit;l.xp6(2),l.s9C("src",t.profilePicture,l.LSH),l.xp6(3),l.hij("",t.userFullName," "),l.xp6(2),l.hij("\xb7 ",t.date,""),l.xp6(2),l.Oqu(t.text)}}const p=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i){this.alert=t,this.modal=e,this.studentChatService=n,this.activatedRoute=o,this.toast=i,this.shouldBounce=!0,this.dockedHeight=400,this.distanceTop=56,this.drawerState=a.Wk.Bottom,this.states=a.Wk,this.minimumHeight=0}ngOnInit(){const t=this.activatedRoute.snapshot.paramMap.get("chatId");this.chatId=t;const e=this.activatedRoute.snapshot.paramMap.get("email");this.email=e;const n=this.activatedRoute.snapshot.paramMap.get("fullName");this.fullName=n;const o=this.activatedRoute.snapshot.paramMap.get("profilePicture");this.profilePicture=o,document.getElementById("message-list")}ngOnDestroy(){this._chatroomSub.unsubscribe()}ngAfterViewInit(){setTimeout(()=>{this.input.getInputElement().then(t=>{this.message=t})},400)}sendMessage(){return(0,c.mG)(this,void 0,void 0,function*(){if(""===this.message.value)return console.log("This message has no text"),(yield this.toast.create({message:"This message has no text.",cssClass:"danger-toast",duration:2e3})).present(),!1;this.message.value="",this.message.focus()})}menu(){this.drawerState=this.drawerState===a.Wk.Bottom?a.Wk.Docked:a.Wk.Bottom}delertAlert(){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.alert.create({cssClass:"",header:"Are you sure you want to delete this conversation?",buttons:[{text:"Yes",handler:()=>{console.log("Deleting")}},{text:"Cancel",role:"cancel"}]});yield t.present()})}reportAlert(){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.alert.create({cssClass:"",header:"Are you sure you want to report this conversation?",buttons:[{text:"Yes",handler:()=>{console.log("Reporting")}},{text:"Cancel",role:"cancel"}]});yield t.present()})}reportConvo(){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.modal.create({component:u.S,componentProps:{}});this.drawerState=a.Wk.Bottom,yield t.present()})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(s.Br),l.Y36(s.IN),l.Y36(g.U),l.Y36(r.gz),l.Y36(s.yF))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-chat-page"]],viewQuery:function(t,e){if(1&t&&l.Gf(h,5),2&t){let t;l.iGM(t=l.CRH())&&(e.input=t.first)}},decls:30,vars:6,consts:[[1,"ion-hide-lg-up"],["slot","start"],[1,"toolbar-title"],["slot","end"],[3,"click"],["src","../../../../../assets/icons/ellipsis.svg","alt","",1,"ellipsis"],["lines","none","id","message-list"],[4,"ngFor","ngForOf"],[1,"chat-messages-create-container"],["type","text","placeholder","Type message here",3,"keyup.enter"],["message",""],[1,"chat-messages-create-button",3,"click"],[3,"state","minimumHeight","dockedHeight","shouldBounce","distanceTop","stateChange"],[1,"drawer-content"],["lines","none"],[1,"blue-button",3,"click"],[1,"grey-button",3,"click"],[3,"src"],[2,"opacity","0.8"],[1,"date-sent"],[2,"font-size","1.1em","color","#111"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-header",0),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",1),l._UZ(3,"ion-back-button"),l.TgZ(4,"p",2),l._uU(5,"Conversation"),l.qZA(),l.qZA(),l.TgZ(6,"ion-buttons",3),l.TgZ(7,"ion-button",4),l.NdJ("click",function(){return e.menu()}),l._UZ(8,"img",5),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(9,"ion-content"),l.TgZ(10,"ion-list",6),l.YNc(11,d,10,4,"ion-item",7),l.qZA(),l.TgZ(12,"ion-toolbar",8),l.TgZ(13,"ion-input",9,10),l.NdJ("keyup.enter",function(){return e.sendMessage()}),l.qZA(),l.TgZ(15,"ion-buttons",3),l.TgZ(16,"ion-button",11),l.NdJ("click",function(){return e.sendMessage()}),l._uU(17," Send "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(18,"ion-bottom-drawer",12),l.NdJ("stateChange",function(t){return e.drawerState=t}),l.TgZ(19,"div",13),l.TgZ(20,"ion-list"),l.TgZ(21,"ion-item",14),l.TgZ(22,"ion-button",15),l.NdJ("click",function(){return e.delertAlert()}),l._uU(23," Delete "),l.qZA(),l.qZA(),l.TgZ(24,"ion-item",14),l.TgZ(25,"ion-button",15),l.NdJ("click",function(){return e.reportConvo()}),l._uU(26," Report "),l.qZA(),l.qZA(),l.TgZ(27,"ion-item",14),l.TgZ(28,"ion-button",16),l.NdJ("click",function(){return e.menu()}),l._uU(29," Cancel "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(11),l.Q6J("ngForOf",e.chatroom),l.xp6(7),l.Q6J("state",e.drawerState)("minimumHeight",e.minimumHeight)("dockedHeight",e.dockedHeight)("shouldBounce",e.shouldBounce)("distanceTop",e.distanceTop))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.YG,s.W2,s.q_,o.sg,s.pK,s.j9,a.w5,s.Ie,s.BJ,s.Q$],styles:["ion-avatar[_ngcontent-%COMP%]{margin-right:20px}.new-message[_ngcontent-%COMP%]{color:#faa71b}ion-label[_ngcontent-%COMP%]{font-weight:800;display:block}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.8em}.date-sent[_ngcontent-%COMP%]{font-size:.8em;opacity:.8}.no-messages[_ngcontent-%COMP%]{font-size:1.4em;line-height:1.4em;padding:20px}.ellipsis[_ngcontent-%COMP%]{height:2.1em}.chat-messages-create-container[_ngcontent-%COMP%]{background:#005191;height:60px;position:fixed;bottom:0;padding:10px}.chat-messages-create-container[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border:1px solid #fff;--color:#fff;height:40px;width:90%}.chat-messages-create-container[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:#fff;--background-hover:#fff;--color:#005191;height:40px;margin-right:15px}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[r.Bz.forChild(p)],r.Bz]}),t})();var f=n(81369);let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.ez,i.u5,s.Pc,a.Tn,m,f.ReportConvoPageModule]]}),t})()}}]);