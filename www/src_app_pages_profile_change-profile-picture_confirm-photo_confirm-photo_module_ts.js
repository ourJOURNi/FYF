"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_change-profile-picture_confirm-photo_confirm-photo_module_ts"],{

/***/ 73056:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPhotoPageRoutingModule": () => (/* binding */ ConfirmPhotoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _confirm_photo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-photo.page */ 97430);




const routes = [
    {
        path: '',
        component: _confirm_photo_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmPhotoPage
    }
];
let ConfirmPhotoPageRoutingModule = class ConfirmPhotoPageRoutingModule {
};
ConfirmPhotoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmPhotoPageRoutingModule);



/***/ }),

/***/ 50561:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPhotoPageModule": () => (/* binding */ ConfirmPhotoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _confirm_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-photo-routing.module */ 73056);
/* harmony import */ var _confirm_photo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-photo.page */ 97430);







let ConfirmPhotoPageModule = class ConfirmPhotoPageModule {
};
ConfirmPhotoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirm_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmPhotoPageRoutingModule
        ],
        declarations: [_confirm_photo_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmPhotoPage]
    })
], ConfirmPhotoPageModule);



/***/ }),

/***/ 97430:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPhotoPage": () => (/* binding */ ConfirmPhotoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _confirm_photo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-photo.page.html?ngResource */ 5273);
/* harmony import */ var _confirm_photo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-photo.page.scss?ngResource */ 47435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
var _a;





let ConfirmPhotoPage = class ConfirmPhotoPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    uploadPhoto() {
        console.log('User has successfully uploaded photo from their phones camera');
        this.router.navigate(['/home/profile/change-profile-picture/confirm']);
    }
    takeAnotherPhoto() {
        //  Access Gallery
        //  Replace last photo taken with another photo
        console.error("TODO: takeAnotherPhoto() not implemented yet");
    }
    cancel() {
        console.log('change photo cancelled');
        this.router.navigate(['/home/profile']);
    }
};
ConfirmPhotoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ConfirmPhotoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-confirm-photo',
        template: _confirm_photo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirm_photo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router) === "function" ? _a : Object])
], ConfirmPhotoPage);



/***/ }),

/***/ 47435:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  margin: 0;\n}\n\nh6.text-header {\n  font-size: 1.3em;\n  margin: 30px auto;\n  padding: 0;\n  padding: initial;\n}\n\n.orange-button {\n  width: auto;\n  width: initial;\n}\n\n@media screen and (max-width: 384px) {\n  #main-content-col ion-button:last-child {\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tcGhvdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFBQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUFBLGNBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksZ0JBQUE7RUFDTjtBQUNGIiwiZmlsZSI6ImNvbmZpcm0tcGhvdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbmg2LnRleHQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIHBhZGRpbmc6IHVuc2V0O1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IHVuc2V0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xuICAgICNtYWluLWNvbnRlbnQtY29sIGlvbi1idXR0b246bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 5273:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/confirm-photo/confirm-photo.page.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>Confirm Photo</ion-title>\n    <ion-button (click)=\"cancel()\" id=\"cancel-button\" slot=\"end\">\n        Cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.5\" size=\"2.5\">\n        <h1>Confirm Photo</h1>\n      </ion-col>\n      <ion-col push=\"2.8\" size=\"2\">\n        <ion-button class=\"back-button\" (click)=\"cancel()\">\n           Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"10\">\n        <hr style=\"background-color: #00000044;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" id=\"main-content-col\">\n        <div style=\"width: 100px; height: 100px; border-radius: 100px;background: lightgrey; margin: 30px auto 0px;\">\n          New picture goes here\n        </div>\n        <h6 class=\"text-header\">Are you sure you want to use this photo?</h6>\n        <ion-button (click)=\"uploadPhoto()\" class=\"orange-button\" id=\"next-button\" style=\"margin-right:16px;\">YES</ion-button>\n        <ion-button (click)=\"takeAnotherPhoto()\" class=\"orange-button\" id=\"next-button\">TAKE ANOTHER PHOTO</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_change-profile-picture_confirm-photo_confirm-photo_module_ts.js.map