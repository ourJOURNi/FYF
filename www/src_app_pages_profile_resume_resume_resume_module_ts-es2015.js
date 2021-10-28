(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_resume_resume_resume_module_ts"],{

/***/ 44722:
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/resume/resume/resume-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumePageRoutingModule": function() { return /* binding */ ResumePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _resume_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume.page */ 82982);




const routes = [
    {
        path: '',
        component: _resume_page__WEBPACK_IMPORTED_MODULE_0__.ResumePage
    },
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_resume_confirm_confirm_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../confirm/confirm.module */ 87468)).then(m => m.ConfirmPageModule)
    }
];
let ResumePageRoutingModule = class ResumePageRoutingModule {
};
ResumePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResumePageRoutingModule);



/***/ }),

/***/ 38261:
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/resume/resume/resume.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumePageModule": function() { return /* binding */ ResumePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume-routing.module */ 44722);
/* harmony import */ var _resume_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume.page */ 82982);







let ResumePageModule = class ResumePageModule {
};
ResumePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResumePageRoutingModule
        ],
        declarations: [_resume_page__WEBPACK_IMPORTED_MODULE_1__.ResumePage]
    })
], ResumePageModule);



/***/ }),

/***/ 82982:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/resume/resume/resume.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumePage": function() { return /* binding */ ResumePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_resume_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resume.page.html */ 13578);
/* harmony import */ var _resume_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume.page.scss */ 63715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/profile.service */ 39181);






let ResumePage = class ResumePage {
    constructor(router, profile) {
        this.router = router;
        this.profile = profile;
        this.activeResume = this.profile.resume.getValue();
    }
    ngOnInit() {
    }
    viewResume() {
        console.log('Going to View Resume Page');
        this.router.navigate(['/home/profile/view-resume']);
    }
    updateResume() {
        console.log('Going to Update Resume Page');
        this.router.navigate(['/home/profile/update-resume']);
    }
    goBack() {
        this.router.navigate(['/home/profile']);
    }
};
ResumePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService }
];
ResumePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-resume',
        template: _raw_loader_resume_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resume_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router,
        _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService])
], ResumePage);



/***/ }),

/***/ 63715:
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/resume/resume/resume.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.text-header {\n  background: #e4ebf1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFDSjtBQUNJO0VBQ0UsY0FBQTtBQUNOO0FBRUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtBQUNKIiwiZmlsZSI6InJlc3VtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVza3RvcC10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzI2O1xuICBcbiAgICBoMSB7XG4gICAgICBjb2xvcjogIzAwNTVhNTtcbiAgICB9XG4gIH1cbiAgLmJhY2stYnV0dG9uIHtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwNTVhNSwgIzBkMmU0ZCk7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAudGV4dC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjgsIDIzNSwgMjQxKTtcbiAgfSJdfQ== */");

/***/ }),

/***/ 13578:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/resume/resume.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-text-center\">\n  <ion-grid>\n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <h1>Change Resume</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"goBack()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n        <h6 class=\"text-header\" style=\"font-size: 1.3em; width: unset;\">Here, you can view your resume, or upload another one to your profile.</h6>\n        <ion-button (click)=\"updateResume()\" style=\"width: unset; margin-right: 16px;\" class=\"orange-button\">UPDATE RESUME</ion-button>\n        <ion-button (click)=\"viewResume()\" class=\"orange-button\" style=\"width: unset;\">VIEW RESUME</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_resume_resume_resume_module_ts-es2015.js.map