"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_forgot-password_confirm_confirm_module_ts"],{

/***/ 56762:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/confirm/confirm-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPageRoutingModule": function() { return /* binding */ ConfirmPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm.page */ 70209);




const routes = [
    // Last page of forgot password route
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmPage
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ 58230:
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/confirm/confirm.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPageModule": function() { return /* binding */ ConfirmPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-routing.module */ 56762);
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm.page */ 70209);







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmPageRoutingModule
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmPage]
    })
], ConfirmPageModule);



/***/ }),

/***/ 70209:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/confirm/confirm.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPage": function() { return /* binding */ ConfirmPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./confirm.page.html */ 92902);
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm.page.scss */ 94720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);





let ConfirmPage = class ConfirmPage {
    constructor(router) {
        this.router = router;
    }
    goToLogin() {
        this.router.navigate(['']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ConfirmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-confirm',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])
], ConfirmPage);



/***/ }),

/***/ 92902:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/auth/forgot-password/confirm/confirm.page.html ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content style=\"--background: #46c9a3;\">\n    <ion-grid class=\"ion-text-center\" style=\"margin-top: 10%;\">\n      <ion-row>\n        <ion-col size-lg=\"6\" offset-lg=\"3\">\n          <ion-icon class=\"check-icon\" src=\"../../../assets/icon/white-check.svg\" ></ion-icon>\n          <h6 class=\"text-header\">Your password has been changed. Please log in with your new password</h6>\n          <ion-button (click)=\"goToLogin()\" class=\"orange-button\" >LOGIN</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ 94720:
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/confirm/confirm.page.scss ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = ".check-icon {\n  width: 80px;\n  height: 80px;\n  margin-top: 30px;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 0.5s forwards;\n          animation: slide-up 0.5s ease 0.5s forwards;\n}\n\n.text-header {\n  margin: 24px 0 24px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUYiLCJmaWxlIjoiY29uZmlybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2staWNvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDAuNXMgZm9yd2FyZHM7XG59XG4udGV4dC1oZWFkZXIge1xuICBtYXJnaW46IDI0cHggMCAyNHB4IDA7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_forgot-password_confirm_confirm_module_ts-es2015.js.map