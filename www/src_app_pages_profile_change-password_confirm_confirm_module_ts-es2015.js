(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_change-password_confirm_confirm_module_ts"],{

/***/ 60810:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/confirm/confirm-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPageRoutingModule": function() { return /* binding */ ConfirmPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm.page */ 31498);




const routes = [
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

/***/ 86439:
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/confirm/confirm.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPageModule": function() { return /* binding */ ConfirmPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-routing.module */ 60810);
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm.page */ 31498);







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmPageRoutingModule
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmPage]
    })
], ConfirmPageModule);



/***/ }),

/***/ 31498:
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/change-password/confirm/confirm.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPage": function() { return /* binding */ ConfirmPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confirm.page.html */ 42837);
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm.page.scss */ 60517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ConfirmPage = class ConfirmPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToProfile() {
        console.log('Going back to profile');
        this.router.navigate(['/home/profile']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ConfirmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])
], ConfirmPage);



/***/ }),

/***/ 60517:
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/confirm/confirm.page.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 42837:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-password/confirm/confirm.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p>Your profile's pass been has been changed./p>\n</ion-content>\n<button (click)=\"backToProfile()\" id=\"next-button\">BACK TO PROFILE</button>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_change-password_confirm_confirm_module_ts-es2015.js.map