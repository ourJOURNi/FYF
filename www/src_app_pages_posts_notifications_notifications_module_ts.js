"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_posts_notifications_notifications_module_ts"],{

/***/ 15226:
/*!***************************************************************************!*\
  !*** ./src/app/pages/posts/notifications/notifications-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 3518);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 1841:
/*!*******************************************************************!*\
  !*** ./src/app/pages/posts/notifications/notifications.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 15226);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 3518);







let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage]
    })
], NotificationsPageModule);



/***/ }),

/***/ 3518:
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/notifications/notifications.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page.html?ngResource */ 87333);
/* harmony import */ var _notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss?ngResource */ 50406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notifications.service */ 79744);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 53250);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
var _a, _b, _c, _d;









let NotificationsPage = class NotificationsPage {
    constructor(notifications, profile, toast, router) {
        this.notifications = notifications;
        this.profile = profile;
        this.toast = toast;
        this.router = router;
        this.noNotifications = false;
    }
    ngOnDestroy() {
        this.notificationsSub.unsubscribe();
    }
    ngOnInit() {
        this.initSub = this.profile.getUserDetails()
            .subscribe(userDetails => {
            this.userEmail = userDetails['email'];
        });
    }
    clear() {
        this.notifications.clearNotifications(this.userEmail)
            .subscribe(data => {
        });
    }
    clearedToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Cleared Notifications.',
                cssClass: 'danger-toast',
                duration: 2000
            });
            yield toast.present();
        });
    }
    back() {
        this.router.navigateByUrl('home/posts');
    }
    goTo() {
        console.log('Going to page from notification');
    }
    deleteSwipe(e, notiID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(e);
            if (!e) {
                throw Error('No Swipe Event returned.');
            }
            else {
                console.log('Delete Swipe ... ');
                yield this.deleteNotification(notiID);
                yield this.deletedToast();
            }
        });
    }
    deleteNotification(notiID) {
        this.notifications.deleteNotification(this.userEmail, notiID).subscribe(data => {
            console.log(data);
            this.allNotifications = Object.values(data);
            ;
            for (let n of this.allNotifications) {
                n.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(n.date), {
                    includeSeconds: true,
                    addSuffix: false
                });
                console.log(this.allNotifications);
            }
            // Track if No Notifications
            if (this.allNotifications.length <= 0 || this.allNotifications === []) {
                this.noNotifications = true;
            }
            else {
                this.noNotifications = false;
            }
        });
    }
    deletedToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Deleted.',
                cssClass: 'danger-toast',
                duration: 2000
            });
            toast.present();
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-notifications',
        template: _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService !== "undefined" && src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService) === "function" ? _a : Object, typeof (_b = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController) === "function" ? _c : Object, typeof (_d = typeof _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router) === "function" ? _d : Object])
], NotificationsPage);



/***/ }),

/***/ 50406:
/*!******************************************************************************!*\
  !*** ./src/app/pages/posts/notifications/notifications.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "p {\n  font-size: 0.7em;\n  margin-left: 10px;\n}\n\n#message {\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n}\n\nion-list {\n  background: none;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nion-item {\n  border-bottom: 1px solid rgb(233, 233, 233);\n}\n\n#clear-button {\n  --background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2));\n  --color: white;\n  --border-color: white;\n  --border-style: solid;\n  --border-width: 2px;\n  font-weight: 600;\n  margin-right: 20px;\n  width: 80px;\n}\n\n#delete-noti {\n  background: #e3405f;\n  font-weight: 600;\n}\n\n#date {\n  opacity: 0.5;\n  display: inline-block;\n}\n\n#icon {\n  opacity: 0.2;\n}\n\n#no-notifications {\n  opacity: 0.3;\n}\n\n.margin-top {\n  margin-top: 15%;\n}\n\n.blue-button {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkNBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsMkNBQUE7QUFHRjs7QUFEQTtFQUNFLDRFQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7QUFNRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7QUFNRiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuI21lc3NhZ2Uge1xuICBib3gtc2hhZG93OiAxcHggMTBweCAyNnB4IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5pb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyk7XG59XG4jY2xlYXItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2LCAxMTQsIDE5NiwgMC4zKSwgcmdiYSgwLCA4MSwgMTQ1LCAwLjIpKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuI2RlbGV0ZS1ub3RpIHtcbiAgYmFja2dyb3VuZDogI2UzNDA1ZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNkYXRlIHtcbiAgb3BhY2l0eTogMC41O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNpY29uIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4jbm8tbm90aWZpY2F0aW9ucyB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLm1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbn0iXX0= */";

/***/ }),

/***/ 87333:
/*!******************************************************************************!*\
  !*** ./src/app/pages/posts/notifications/notifications.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-title>Notifications</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button id=\"clear-button\" (click)=\"clear()\">\n        Clear\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!-- No Messages -->\n  <ion-row *ngIf=\"noNotifications\" class=\"ion-justify-content-center\">\n    <ion-col class=\"margin-top ion-text-center\" size-xs=\"12\" size-sm=\"12\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <h3 id=\"no-notifications\">You have no notifications</h3>\n      <img id=\"icon\" src=\"../../../../assets/icons/no-notifications-icon.svg\" alt=\"\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"!noNotifications\" class=\"ion-justify-content-center\">\n    <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <!-- List of Sliding Items -->\n      <ion-list>\n        <ion-item-sliding (click)=\"goTo()\" *ngFor=\"let n of allNotifications\">\n          <ion-item lines=\"none\">\n            <ion-avatar>\n              <img [src]=\"n.instigatingUserProfilePicture\" />\n            </ion-avatar>\n            <p id=\"message\">{{n.message}}</p>\n            <p id=\"date\">{{n.date}}</p>\n          </ion-item>\n          <ion-item-options (ionSwipe)=\"deleteSwipe($event, n.notiID)\" side=\"end\">\n            <ion-item-option  id=\"delete-noti\">Slide left to Delete</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_posts_notifications_notifications_module_ts.js.map