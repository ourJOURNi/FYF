"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_forgot-password_enter-email_enter-email_module_ts"],{

/***/ 3646:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/enter-email/enter-email-routing.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterEmailPageRoutingModule": function() { return /* binding */ EnterEmailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _enter_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter-email.page */ 54980);




const routes = [
    // 1st of 3 forgot password pages
    {
        path: '',
        component: _enter_email_page__WEBPACK_IMPORTED_MODULE_0__.EnterEmailPage
    },
    //  to new password page
    {
        path: 'enter-code/:email',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_forgot-password_enter-code_enter-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../forgot-password/enter-code/enter-code.module */ 17463)).then(m => m.EnterCodePageModule)
    }
];
let EnterEmailPageRoutingModule = class EnterEmailPageRoutingModule {
};
EnterEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnterEmailPageRoutingModule);



/***/ }),

/***/ 84055:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/enter-email/enter-email.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterEmailPageModule": function() { return /* binding */ EnterEmailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _enter_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter-email-routing.module */ 3646);
/* harmony import */ var _enter_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter-email.page */ 54980);







let EnterEmailPageModule = class EnterEmailPageModule {
};
EnterEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _enter_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnterEmailPageRoutingModule
        ],
        declarations: [_enter_email_page__WEBPACK_IMPORTED_MODULE_1__.EnterEmailPage]
    })
], EnterEmailPageModule);



/***/ }),

/***/ 54980:
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/enter-email/enter-email.page.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterEmailPage": function() { return /* binding */ EnterEmailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_enter_email_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./enter-email.page.html */ 90576);
/* harmony import */ var _enter_email_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter-email.page.scss */ 74039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);







let EnterEmailPage = class EnterEmailPage {
    constructor(formBuilder, router, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Please enter a valid email address' }
            ]
        };
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    goToEnterCodePage(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Going to Enter Code Page');
            // check if user exists, then navigate
            yield this.auth.checkIfUserExits(email)
                .subscribe(data => {
                console.log(data);
                this.router.navigate(['/enter-email/enter-code/', email]);
            });
        });
    }
    cancel() {
        console.log('Forgotten password cancelled');
        this.router.navigate(['']);
    }
    back() {
        this.router.navigate(['']);
    }
};
EnterEmailPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
EnterEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-enter-email',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_enter_email_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_enter_email_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService])
], EnterEmailPage);



/***/ }),

/***/ 90576:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/auth/forgot-password/enter-email/enter-email.page.html ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"small\">Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"spacer ion-hide-lg-down\"></div>\n    <ion-grid class=\"ion-text-center\">\n\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../../../assets/icon/Logo 2.0.svg\" alt=\"\" srcset=\"\">\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"back()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <h6 class=\"text-header\">Please enter your email address. An email will be sent to you with a <span style=\"font-weight: 700;\">6 character code</span>. </h6>\n        </ion-col>\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"4\">\n          <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"goToEnterCodePage(this.forgotPasswordForm.value.email)\">\n            <ion-list class=\"line-input\">\n            <ion-item>\n              <ion-input\n                placeholder=\"Enter Email Address\"\n                required\n                formControlName=\"email\"\n                inputmode=\"email\"\n                type=\"email\">\n              </ion-input>\n            </ion-item>\n\n\n              <!-- Password Validation-->\n              <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                  <div class=\"error-message\"\n                    *ngIf=\"forgotPasswordForm\n                      .get('email')\n                      .hasError(validation.type) && (forgotPasswordForm.get('email')\n                      .dirty || forgotPasswordForm.get('email').touched)\">\n                    {{ validation.message }}\n                  </div>\n                </ng-container>\n              </div>\n\n          </ion-list>\n\n          <ion-button type=\"submit\" class=\"orange-button\">GET CODE</ion-button><br>\n\n          <ion-button (click)=\"cancel()\" class=\"cancel-button\">CANCEL</ion-button>\n\n          </form>\n          \n        </ion-col>\n    </ion-row>\n    </ion-grid>\n  </ion-content>\n");

/***/ }),

/***/ 74039:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/enter-email/enter-email.page.scss ***!
  \******************************************************************************/
/***/ (function(module) {

module.exports = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0c375f);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 40px;\n  width: 200px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGVyLWVtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBRUYiLCJmaWxlIjoiZW50ZXItZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzMyNjtcblxuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbi5iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwMDU1YTUsICMwYzM3NWYpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhbmNlbC1idXR0b24ge1xuICBjb2xvcjogI2U0NDA1ZjtcbiAgLS1iYWNrZ3JvdW5kOiAgbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2YxNWI3NywgI2U0NDA1Zik7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_forgot-password_enter-email_enter-email_module_ts-es2015.js.map