(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_mentors_mentor-chat_mentor-chat_module_ts"],{

/***/ 12023:
/*!*************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/mentor-chat-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorChatPageRoutingModule": function() { return /* binding */ MentorChatPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mentor_chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mentor-chat.page */ 74394);




const routes = [
    {
        path: '',
        component: _mentor_chat_page__WEBPACK_IMPORTED_MODULE_0__.MentorChatPage
    },
    {
        path: 'chat-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_mentors_mentor-chat_chat-page_chat-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./chat-page/chat-page.module */ 91246)).then(m => m.ChatPagePageModule)
    }
];
let MentorChatPageRoutingModule = class MentorChatPageRoutingModule {
};
MentorChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MentorChatPageRoutingModule);



/***/ }),

/***/ 36358:
/*!*****************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorChatPageModule": function() { return /* binding */ MentorChatPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mentor_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mentor-chat-routing.module */ 12023);
/* harmony import */ var _mentor_chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentor-chat.page */ 74394);
/* harmony import */ var src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/new-message-mentor/new-message-mentor.module */ 33692);








let MentorChatPageModule = class MentorChatPageModule {
};
MentorChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _mentor_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.MentorChatPageRoutingModule,
            src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_2__.NewMessageMentorPageModule
        ],
        declarations: [_mentor_chat_page__WEBPACK_IMPORTED_MODULE_1__.MentorChatPage]
    })
], MentorChatPageModule);



/***/ }),

/***/ 74394:
/*!***************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorChatPage": function() { return /* binding */ MentorChatPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mentor_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mentor-chat.page.html */ 88232);
/* harmony import */ var _mentor_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentor-chat.page.scss */ 72681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/new-message-mentor/new-message-mentor.page */ 8960);
/* harmony import */ var src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mentor-chat.service */ 54607);








let MentorChatPage = class MentorChatPage {
    constructor(router, modal, mentorChat) {
        this.router = router;
        this.modal = modal;
        this.mentorChat = mentorChat;
    }
    ngOnInit() {
        // this.mentorChat.createChatRoom();
    }
    chatPage() {
        this.router.navigate(['home/mentors/mentor-chat/chat-page']);
    }
    newMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const newMessageModalConfig = yield this.modal.create({
                component: src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_2__.NewMessageMentorPage,
                componentProps: {}
            });
            yield newMessageModalConfig.present();
        });
    }
};
MentorChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_3__.MentorChatService }
];
MentorChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mentor-chat',
        template: _raw_loader_mentor_chat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mentor_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_3__.MentorChatService])
], MentorChatPage);



/***/ }),

/***/ 54607:
/*!*************************************************!*\
  !*** ./src/app/services/mentor-chat.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorChatService": function() { return /* binding */ MentorChatService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


// import { Socket, SocketIoConfig } from 'ngx-socket-io';
// export class SocketNameSpace extends Socket{
//   constructor(socketConfig: SocketIoConfig){
//     super(socketConfig);
//   }
// }
let MentorChatService = class MentorChatService {
    // mentorsChat: SocketNameSpace;
    constructor() {
        // this.mentorsChat  = new SocketNameSpace({url: 'http://127.0.0.1:3000/mentor-chat', options: {} });
    }
    // newChatroom(): void {
    //   this.mentorsChat
    //     .emit('addChatroom', { chatId: this.chatId() });
    // }
    chatId() {
        let text = 'chat-';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        text += Date.now();
        return text;
    }
};
MentorChatService.ctorParameters = () => [];
MentorChatService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [])
], MentorChatService);



/***/ }),

/***/ 72681:
/*!*****************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\n.searchbar-wrapper {\n  margin: 20px 0 20px 0px;\n}\n\n.unread {\n  --background: rgb(203, 215, 230);\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvci1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJtZW50b3ItY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LW1lc3NhZ2V7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaGJhci13cmFwcGVye1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDBweDtcbn1cblxuLnVucmVhZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwMywgMjE1LCAyMzApO1xufVxuXG4uZGF0ZS1zZW50IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */");

/***/ }),

/***/ 88232:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mentors/mentor-chat/mentor-chat.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Mentor Chat</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"newMessage()\">\n          <ion-icon class=\"new-message\" size=\"large\" name=\"create\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- Mobile -->\n  <!-- Searchbar -->\n  <ion-toolbar class=\"searchbar-wrapper ion-hide-lg-up\">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n      <!-- List of Text Items -->\n      <ion-list class=\"ion-hide-lg-up\">\n  <ion-item-sliding (click)=\"chatPage()\">\n  <ion-item class=\"unread\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../../../assets/batman-pro-pic.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n      <p>This is the message...</p>\n    </ion-label>\n  </ion-item>\n    <ion-item-options side=\"end\">\n      <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n    </ion-item-options>\n  </ion-item-sliding>\n  <ion-item-sliding>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n      <ion-item-options side=\"end\">\n        <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n      </ion-item-options>\n  </ion-item-sliding>\n      </ion-list>\n      </ion-col>\n      <ion-col size=\"6\"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mentors_mentor-chat_mentor-chat_module_ts-es2015.js.map