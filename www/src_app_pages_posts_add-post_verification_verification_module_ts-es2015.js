"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_posts_add-post_verification_verification_module_ts"],{

/***/ 40474:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/posts/add-post/verification/verification-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageRoutingModule": function() { return /* binding */ VerificationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.page */ 246);




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_0__.VerificationPage
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ 22944:
/*!**************************************************************************!*\
  !*** ./src/app/pages/posts/add-post/verification/verification.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageModule": function() { return /* binding */ VerificationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-routing.module */ 40474);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page */ 246);







let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerificationPageRoutingModule
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_1__.VerificationPage]
    })
], VerificationPageModule);



/***/ }),

/***/ 246:
/*!************************************************************************!*\
  !*** ./src/app/pages/posts/add-post/verification/verification.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPage": function() { return /* binding */ VerificationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./verification.page.html */ 43422);
/* harmony import */ var _verification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page.scss */ 48304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);





let VerificationPage = class VerificationPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToPosts() {
        this.router.navigate(['/home/posts']);
    }
};
VerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
VerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-verification',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])
], VerificationPage);



/***/ }),

/***/ 43422:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/posts/add-post/verification/verification.page.html ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content id=\"background\"> \n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 15% 0% 3% 0%;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\" class=\"ion-text-center\">\n        <img src=\"../../../../../../assets/icon/Green-Checked.svg\">\n        <p>Thank you for adding a post! Please allow for up to 1 day for your post to be verified. You will recieve a notifcation soon letting you know if your post was verified.</p>\n        <ion-button (click)=\"backToPosts()\">\n          Done\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ 48304:
/*!**************************************************************************!*\
  !*** ./src/app/pages/posts/add-post/verification/verification.page.scss ***!
  \**************************************************************************/
/***/ (function(module) {

module.exports = "#background {\n  opacity: 0;\n  height: 90vh;\n  --background: rgb(239, 255, 239);\n  --transition: 0.5s;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: #111;\n  font-size: 1.3em;\n  -webkit-animation: slide-in-up-2 0.2s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up-2 0.2s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\nion-button {\n  opacity: 1;\n  font-weight: 600;\n  --background: #4DC066;\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: rgb(220, 255, 220);\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: rgb(220, 255, 220);\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RkFBQTtVQUFBLCtFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0U7SUFDSSw0QkFBQTtFQUVKO0VBQUE7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7SUFDQSwwQkFBQTtFQUVKO0FBQ0Y7O0FBVkE7RUFDRTtJQUNJLDRCQUFBO0VBRUo7RUFBQTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLDBCQUFBO0VBRUo7QUFDRjs7QUFDRTtFQUNFO0lBQ0ksMEJBQUE7RUFDTjtFQUNFO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBQ047QUFDRjs7QUFSRTtFQUNFO0lBQ0ksMEJBQUE7RUFDTjtFQUNFO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJ2ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQge1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDkwdmg7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzOSwgMjU1LCAyMzkpO1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIC4zcyBmb3J3YXJkcztcbn1cblxuI2NvbmZpcm0tdGV4dCB7XG4gIGNvbG9yOiAjMTExO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC4ycyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDAuM3MgZm9yd2FyZHM7XG59XG5pb24tYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjNERDMDY2O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwIHtcbiAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtLWJhY2tncm91bmQ6IHJnYigyMjAsIDI1NSwgMjIwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNsaWRlLWluLXVwLTIge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgICB9XG4gIH1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_posts_add-post_verification_verification_module_ts-es2015.js.map