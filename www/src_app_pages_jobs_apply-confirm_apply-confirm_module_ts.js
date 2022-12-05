"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_jobs_apply-confirm_apply-confirm_module_ts"],{

/***/ 58188:
/*!**************************************************************************!*\
  !*** ./src/app/pages/jobs/apply-confirm/apply-confirm-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyConfirmPageRoutingModule": () => (/* binding */ ApplyConfirmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _apply_confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-confirm.page */ 51387);




const routes = [
    {
        path: '',
        component: _apply_confirm_page__WEBPACK_IMPORTED_MODULE_0__.ApplyConfirmPage
    }
];
let ApplyConfirmPageRoutingModule = class ApplyConfirmPageRoutingModule {
};
ApplyConfirmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApplyConfirmPageRoutingModule);



/***/ }),

/***/ 32173:
/*!******************************************************************!*\
  !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyConfirmPageModule": () => (/* binding */ ApplyConfirmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _apply_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-confirm-routing.module */ 58188);
/* harmony import */ var _apply_confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-confirm.page */ 51387);







let ApplyConfirmPageModule = class ApplyConfirmPageModule {
};
ApplyConfirmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _apply_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplyConfirmPageRoutingModule
        ],
        declarations: [_apply_confirm_page__WEBPACK_IMPORTED_MODULE_1__.ApplyConfirmPage]
    })
], ApplyConfirmPageModule);



/***/ }),

/***/ 51387:
/*!****************************************************************!*\
  !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyConfirmPage": () => (/* binding */ ApplyConfirmPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _apply_confirm_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-confirm.page.html?ngResource */ 22508);
/* harmony import */ var _apply_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-confirm.page.scss?ngResource */ 8404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
var _a, _b;





let ApplyConfirmPage = class ApplyConfirmPage {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        // tslint:disable-next-line: radix
        const companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
        const companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
        this.jobTitle = title;
        this.jobCompanyName = companyName;
        this.jobCompanyEmail = companyEmail;
    }
    backHome() {
        this.router.navigate(['/home/jobs']);
    }
};
ApplyConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
ApplyConfirmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-apply-confirm',
        template: _apply_confirm_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_apply_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute) === "function" ? _b : Object])
], ApplyConfirmPage);



/***/ }),

/***/ 8404:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "#background {\n  opacity: 0;\n  height: 90vh;\n  --background: #999;\n  --transition: 0.5s;\n  animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: white;\n  font-size: 1.3em;\n  font-weight: 800;\n  opacity: 0;\n  animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 2s forwards;\n}\n\n#confirm-icon {\n  opacity: 0;\n  animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 1.3s forwards;\n}\n\nion-button {\n  opacity: 0;\n  animation: slide-in-up-2 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 3s forwards;\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: #797;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5LWNvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsK0VBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSw2RUFBQTtBQUNGOztBQUdBO0VBQ0U7SUFDRSw0QkFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSwwQkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLDBCQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQURGO0FBQ0YiLCJmaWxlIjoiYXBwbHktY29uZmlybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogOTB2aDtcbiAgLS1iYWNrZ3JvdW5kOiAjOTk5O1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIC4zcyBmb3J3YXJkcztcbn1cbiAgXG4jY29uZmlybS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogODAwO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDJzIGZvcndhcmRzO1xufVxuXG4jY29uZmlybS1pY29uIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cC0yIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAxLjNzIGZvcndhcmRzO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cC0yIDAuOHMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAzcyBmb3J3YXJkcztcbn1cblxuLy8gS2V5ZnJhbWVzXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtLWJhY2tncm91bmQ6ICM3OTc7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi11cC0yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 22508:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/jobs/apply-confirm/apply-confirm.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header style=\"display: none;\">\n  <ion-toolbar>\n    <ion-title>Application Sent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 10% 0% 3%;\">\n      <ion-col class=\"ion-align-self-center ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"6\" size-xl=\"5\">\n        <img id=\"confirm-icon\" src=\"../../../../assets/icon/white-check.svg\">\n        <p id=\"confirm-text\">Thanks for applying to {{jobCompanyName}} for the role of {{jobTitle}}. {{jobCompanyName}} has been notified at the email address of {{jobCompanyEmail}} and you will hear from them shortly.</p>\n        <ion-button (click)=\"backHome()\" color=\"light\" fill=\"solid\">Done</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_jobs_apply-confirm_apply-confirm_module_ts.js.map