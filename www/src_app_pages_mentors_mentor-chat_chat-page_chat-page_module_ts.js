"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mentors_mentor-chat_chat-page_chat-page_module_ts"],{

/***/ 31839:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPagePageRoutingModule": () => (/* binding */ ChatPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _chat_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-page.page */ 28399);




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
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPagePageRoutingModule);



/***/ }),

/***/ 91246:
/*!*************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPagePageModule": () => (/* binding */ ChatPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ion-bottom-drawer */ 74272);
/* harmony import */ var _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-page-routing.module */ 31839);
/* harmony import */ var _chat_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-page.page */ 28399);
/* harmony import */ var src_app_modals_report_convo_report_convo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/report-convo/report-convo.module */ 83281);









let ChatPagePageModule = class ChatPagePageModule {
};
ChatPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPagePageRoutingModule,
            src_app_modals_report_convo_report_convo_module__WEBPACK_IMPORTED_MODULE_2__.ReportConvoPageModule,
            ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_8__.IonBottomDrawerModule
        ],
        declarations: [_chat_page_page__WEBPACK_IMPORTED_MODULE_1__.ChatPagePage]
    })
], ChatPagePageModule);



/***/ }),

/***/ 28399:
/*!***********************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPagePage": () => (/* binding */ ChatPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _chat_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-page.page.html?ngResource */ 8345);
/* harmony import */ var _chat_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-page.page.scss?ngResource */ 10854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ion-bottom-drawer */ 74272);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_modals_report_convo_report_convo_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/report-convo/report-convo.page */ 10980);
var _a, _b;







let ChatPagePage = class ChatPagePage {
    constructor(alert, modal) {
        this.alert = alert;
        this.modal = modal;
        this.shouldBounce = true;
        this.dockedHeight = 400;
        this.distanceTop = 56;
        this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState.Bottom;
        this.states = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState;
        this.minimumHeight = 0;
    }
    ngOnInit() {
    }
    menu() {
        if (this.drawerState === ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState.Bottom) {
            this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState.Docked;
        }
        else {
            this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState.Bottom;
        }
    }
    delertAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const reportModalConfig = yield this.modal.create({
                component: src_app_modals_report_convo_report_convo_page__WEBPACK_IMPORTED_MODULE_2__.ReportConvoPage,
                componentProps: {}
            });
            this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState.Bottom;
            yield reportModalConfig.present();
        });
    }
};
ChatPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ChatPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-chat-page',
        template: _chat_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController) === "function" ? _b : Object])
], ChatPagePage);



/***/ }),

/***/ 10854:
/*!************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "ion-avatar {\n  height: 1.3em;\n  width: 1.3em;\n}\n\n.new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n\n.ellipsis {\n  height: 2.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQWUsWUFBQTtBQUVqQjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUYiLCJmaWxlIjoiY2hhdC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDEuM2VtOyB3aWR0aDogMS4zZW07XG59XG5cbi5uZXctbWVzc2FnZXtcbiAgY29sb3I6ICNmYWE3MWI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGF0ZS1zZW50IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZWxsaXBzaXMge1xuICBoZWlnaHQ6IDIuMWVtO1xufSJdfQ== */";

/***/ }),

/***/ 8345:
/*!************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Conversation</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"menu()\">\n          <img class=\"ellipsis\" src=\"../../../../../assets/icons/ellipsis.svg\" alt=\"\">\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-bottom-drawer [(state)]=\"drawerState\" [minimumHeight]=\"minimumHeight\" [dockedHeight]=\"dockedHeight\"\n[shouldBounce]=\"shouldBounce\" [distanceTop]=\"distanceTop\">\n<div class=\"drawer-content\">\n    <ion-list>\n      <ion-item lines=\"none\">\n        <ion-button class=\"blue-button\" (click)=\"delertAlert()\">\n          Delete\n        </ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button class=\"blue-button\" (click)=\"reportConvo()\">\n          Report\n        </ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button class=\"grey-button\" (click)=\"menu()\">\n          Cancel\n        </ion-button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-bottom-drawer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mentors_mentor-chat_chat-page_chat-page_module_ts.js.map