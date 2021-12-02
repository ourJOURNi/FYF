"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_logout_logout_logout_module_ts"],{

/***/ 87619:
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPageRoutingModule": function() { return /* binding */ LogoutPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout.page */ 45075);




const routes = [
    {
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_0__.LogoutPage
    }
];
let LogoutPageRoutingModule = class LogoutPageRoutingModule {
};
LogoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LogoutPageRoutingModule);



/***/ }),

/***/ 15694:
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPageModule": function() { return /* binding */ LogoutPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout-routing.module */ 87619);
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.page */ 45075);







let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _logout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LogoutPageRoutingModule
        ],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_1__.LogoutPage]
    })
], LogoutPageModule);



/***/ }),

/***/ 45075:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPage": function() { return /* binding */ LogoutPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./logout.page.html */ 70508);
/* harmony import */ var _logout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.page.scss */ 74988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);







let LogoutPage = class LogoutPage {
    constructor(router, auth, toast, loading, alert) {
        this.router = router;
        this.auth = auth;
        this.toast = toast;
        this.loading = loading;
        this.alert = alert;
    }
    ngOnInit() {
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Logging out...',
                duration: 1000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    confirmLogout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = this.toast.create({
                message: 'User has been logged out',
                duration: 3000
            });
            const loading = yield this.loading.create({
                message: 'Logging out...',
                duration: 1000
            });
            const alert = yield this.alert.create({
                message: 'Are you sure you want to logout?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelling logout');
                            this.router.navigate(['/home/profile']);
                        }
                    },
                    {
                        text: 'Logout',
                        handler: () => {
                            console.log('Logging out');
                            this.auth.logout();
                            loading.present();
                            toast.then(t => t.present());
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cancel() {
        console.log('logout cancelled');
        this.router.navigate(['/home/profile']);
    }
};
LogoutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
LogoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-logout',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logout_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_logout_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController])
], LogoutPage);



/***/ }),

/***/ 70508:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/logout/logout/logout.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar>\n    <ion-title>Logout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center full-page\">\n      <ion-col size=\"6\" class=\"white-background padding\">\n        <ion-button (click)=\"confirmLogout()\" class=\"orange-button\" style=\"position: relative; top: 40%\">Logout</ion-button>\n        <br><br>\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">cancel</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ 74988:
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/logout/logout/logout.page.scss ***!
  \**************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_logout_logout_logout_module_ts-es2015.js.map