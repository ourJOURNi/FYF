"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_posts_student-chat_chat-page_chat-page_module_ts"],{

/***/ 87676:
/*!********************************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/chat-page/chat-page-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPagePageRoutingModule": function() { return /* binding */ ChatPagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _chat_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-page.page */ 89842);




const routes = [
    {
        path: '',
        component: _chat_page_page__WEBPACK_IMPORTED_MODULE_0__.ChatPagePage
    }
];
let ChatPagePageRoutingModule = class ChatPagePageRoutingModule {
};
ChatPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPagePageRoutingModule);



/***/ }),

/***/ 71674:
/*!************************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/chat-page/chat-page.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPagePageModule": function() { return /* binding */ ChatPagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ion-bottom-drawer */ 11);
/* harmony import */ var _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-page-routing.module */ 87676);
/* harmony import */ var _chat_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-page.page */ 89842);
/* harmony import */ var src_app_modals_report_convo_report_convo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/report-convo/report-convo.module */ 83281);









let ChatPagePageModule = class ChatPagePageModule {
};
ChatPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_8__.IonBottomDrawerModule,
            _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPagePageRoutingModule,
            src_app_modals_report_convo_report_convo_module__WEBPACK_IMPORTED_MODULE_2__.ReportConvoPageModule,
        ],
        declarations: [_chat_page_page__WEBPACK_IMPORTED_MODULE_1__.ChatPagePage]
    })
], ChatPagePageModule);



/***/ }),

/***/ 89842:
/*!**********************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/chat-page/chat-page.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPagePage": function() { return /* binding */ ChatPagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chat-page.page.html */ 98196);
/* harmony import */ var _chat_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-page.page.scss */ 10290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ion-bottom-drawer */ 11);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_modals_report_convo_report_convo_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/report-convo/report-convo.page */ 10980);
/* harmony import */ var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/student-chat.service */ 70009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);










let ChatPagePage = class ChatPagePage {
    constructor(alert, modal, studentChatService, activatedRoute, toast) {
        this.alert = alert;
        this.modal = modal;
        this.studentChatService = studentChatService;
        this.activatedRoute = activatedRoute;
        this.toast = toast;
        // Bottom Drawer Settings
        this.shouldBounce = true;
        this.dockedHeight = 400;
        this.distanceTop = 56;
        this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__.DrawerState.Bottom;
        this.states = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__.DrawerState;
        this.minimumHeight = 0;
    }
    ngOnInit() {
        const chatId = this.activatedRoute.snapshot.paramMap.get('chatId');
        this.chatId = chatId;
        const email = this.activatedRoute.snapshot.paramMap.get('email');
        this.email = email;
        const fullName = this.activatedRoute.snapshot.paramMap.get('fullName');
        this.fullName = fullName;
        const profilePicture = this.activatedRoute.snapshot.paramMap.get('profilePicture');
        this.profilePicture = profilePicture;
        const messageList = document.getElementById('message-list');
        // this.studentChatService.getChat(this.chatId, this.email);
        // this._chatroomSub = this.studentChatService.currentChatRoom
        // .subscribe(
        //   data => {
        //     // console.log(data);
        //     this.chatroom = data['messages'];
        //     this.requestingUserFullname = data['requestingUserFullname'];
        //     this.requestingUserEmail = data['requestingUserEmail'];
        //     this.requestingUserPhoto = data['requestingUserPhoto'];
        //     this.respondingUserFullname = data['respondingUserFullname'];
        //     this.respondingUserEmail = data['respondingUserEmail'];
        //     this.respondingUserPhoto = data['respondingUserPhoto'];
        //     // if (this.chatroom.length >= 5) {
        //     //   console.log('more than 3 messages sent');
        //     //   this.studentChatService.deleteMessages(this.chatId, this.fullName , this.email);
        //     // }
        //     for (let message of this.chatroom) {
        //       message.date = formatDistanceToNow(new Date(message.date));
        //     }
        //     // console.log(this.chatroom);
        //   });
    }
    ngOnDestroy() {
        this._chatroomSub.unsubscribe();
        // leave room
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngAfterViewInit() {
        setTimeout(() => {
            this.input.getInputElement()
                .then(input => {
                this.message = input;
            });
        }, 400);
    }
    sendMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // if user tries to send a message with no text
            if (this.message.value === '') {
                console.log('This message has no text');
                const toast = yield this.toast.create({
                    message: 'This message has no text.',
                    cssClass: 'danger-toast',
                    duration: 2000
                });
                toast.present();
                return false;
            }
            // tslint:disable-next-line: max-line-length
            // await this.studentChatService.sendMessage(this.chatId, this.message.value, this.fullName, this.profilePicture, this.requestingUserFullname, this.requestingUserEmail, this.requestingUserPhoto, this.respondingUserFullname, this.respondingUserEmail, this.respondingUserPhoto);
            // this.studentChatService.conversations$.next(this.chatroom);
            // When user submits message, clear the input value
            this.message.value = '';
            this.message.focus();
            // this.studentChatService.getChat(this.chatId, this.email);
            // this.message = '';
        });
    }
    menu() {
        if (this.drawerState === ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__.DrawerState.Bottom) {
            this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__.DrawerState.Docked;
        }
        else {
            this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__.DrawerState.Bottom;
        }
    }
    delertAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: '',
                header: 'Are you sure you want to delete this conversation?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            console.log('Deleting');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    reportAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: '',
                header: 'Are you sure you want to report this conversation?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            console.log('Reporting');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    reportConvo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const reportModalConfig = yield this.modal.create({
                component: src_app_modals_report_convo_report_convo_page__WEBPACK_IMPORTED_MODULE_2__.ReportConvoPage,
                componentProps: {}
            });
            this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__.DrawerState.Bottom;
            yield reportModalConfig.present();
        });
    }
};
ChatPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_3__.StudentChatService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ChatPagePage.propDecorators = {
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['message', { static: false },] }]
};
ChatPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-chat-page',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_page_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_3__.StudentChatService,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController])
], ChatPagePage);



/***/ }),

/***/ 98196:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/posts/student-chat/chat-page/chat-page.page.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Conversation</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"menu()\">\n          <img class=\"ellipsis\" src=\"../../../../../assets/icons/ellipsis.svg\" alt=\"\">\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\" id=\"message-list\">\n    <!-- <div class=\"ion-text-center no-messages\" *ngIf=\"chatroom.length == 0\">\n      <p>Please send a message to start this conversation.</p>\n    </div> -->\n    <ion-item *ngFor=\"let message of chatroom\">\n      <ion-avatar>\n        <img src=\"{{message.profilePicture}}\" />\n      </ion-avatar>\n      <ion-label>\n        <h4 style=\"opacity: 0.8;\">{{message.userFullName}} <span class=\"date-sent\">&middot; {{message.date}}</span></h4>\n        <p style=\"font-size: 1.1em; color: #111;\">{{message.text}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-toolbar class=\"chat-messages-create-container\">\n    <ion-input #message (keyup.enter)=\"sendMessage()\"\n     type=\"text\" placeholder=\"Type message here\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button  class=\"chat-messages-create-button\" (click)=\"sendMessage()\"> Send </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-content>\n\n<ion-bottom-drawer [(state)]=\"drawerState\" [minimumHeight]=\"minimumHeight\" [dockedHeight]=\"dockedHeight\"\n[shouldBounce]=\"shouldBounce\" [distanceTop]=\"distanceTop\">\n<div class=\"drawer-content\">\n    <ion-list>\n      <ion-item lines=\"none\">\n        <ion-button class=\"blue-button\" (click)=\"delertAlert()\">\n          Delete\n        </ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button class=\"blue-button\" (click)=\"reportConvo()\">\n          Report\n        </ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button class=\"grey-button\" (click)=\"menu()\">\n          Cancel\n        </ion-button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-bottom-drawer>\n");

/***/ }),

/***/ 10290:
/*!************************************************************************!*\
  !*** ./src/app/pages/posts/student-chat/chat-page/chat-page.page.scss ***!
  \************************************************************************/
/***/ (function(module) {

module.exports = "ion-avatar {\n  margin-right: 20px;\n}\n\n.new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\nion-label p {\n  font-size: 1.8em;\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.8;\n}\n\n.no-messages {\n  font-size: 1.4em;\n  line-height: 1.4em;\n  padding: 20px;\n}\n\n.ellipsis {\n  height: 2.1em;\n}\n\n.chat-messages-create-container {\n  background: #005191;\n  height: 60px;\n  position: fixed;\n  bottom: 0;\n  padding: 10px;\n}\n\n.chat-messages-create-container ion-input {\n  border: 1px solid #fff;\n  --color: white;\n  height: 40px;\n  width: 90%;\n}\n\n.chat-messages-create-container ion-button {\n  --background: white;\n  --background-hover: white;\n  --color: #005191;\n  height: 40px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBREY7O0FBR0U7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRkoiLCJmaWxlIjoiY2hhdC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xuICAvLyBoZWlnaHQ6IDEuMWVtOyB3aWR0aDogMS4xZW07XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm5ldy1tZXNzYWdle1xuICBjb2xvcjogI2ZhYTcxYjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgfVxufVxuXG4uZGF0ZS1zZW50IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ubm8tbWVzc2FnZXMge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5lbGxpcHNpcyB7XG4gIGhlaWdodDogMi4xZW07XG59XG5cbi5jaGF0LW1lc3NhZ2VzLWNyZWF0ZS1jb250YWluZXJ7XG4gIGJhY2tncm91bmQ6ICMwMDUxOTE7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgaW9uLWlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHdoaXRlO1xuICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_posts_student-chat_chat-page_chat-page_module_ts-es2015.js.map