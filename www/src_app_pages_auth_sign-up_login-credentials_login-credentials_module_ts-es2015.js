"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_sign-up_login-credentials_login-credentials_module_ts"],{

/***/ 18603:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials-routing.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginCredentialsPageRoutingModule": function() { return /* binding */ LoginCredentialsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _login_credentials_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-credentials.page */ 24698);




const routes = [
    {
        path: '',
        component: _login_credentials_page__WEBPACK_IMPORTED_MODULE_0__.LoginCredentialsPage
    },
    {
        path: 'enter-code/:email',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_sign-up_enter-code_enter-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../enter-code/enter-code.module */ 71848)).then(m => m.EnterCodePageModule)
    }
];
let LoginCredentialsPageRoutingModule = class LoginCredentialsPageRoutingModule {
};
LoginCredentialsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginCredentialsPageRoutingModule);



/***/ }),

/***/ 75095:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginCredentialsPageModule": function() { return /* binding */ LoginCredentialsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _login_credentials_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-credentials-routing.module */ 18603);
/* harmony import */ var _login_credentials_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-credentials.page */ 24698);







let LoginCredentialsPageModule = class LoginCredentialsPageModule {
};
LoginCredentialsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _login_credentials_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginCredentialsPageRoutingModule
        ],
        declarations: [_login_credentials_page__WEBPACK_IMPORTED_MODULE_1__.LoginCredentialsPage]
    })
], LoginCredentialsPageModule);



/***/ }),

/***/ 24698:
/*!********************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginCredentialsPage": function() { return /* binding */ LoginCredentialsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_credentials_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login-credentials.page.html */ 58366);
/* harmony import */ var _login_credentials_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-credentials.page.scss */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ 37556);








let LoginCredentialsPage = class LoginCredentialsPage {
    constructor(router, formBuilder, auth, alert) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.alert = alert;
        this.passwordsMatch = false;
        this.code = '';
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Please enter a valid email address' }
            ],
            password: [
                { type: 'password', message: 'Please enter a valid password.' }
            ]
        };
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    // at least 1 number, 1 uppercase letter, and one lowercase letter
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])],
            reTypePassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    // at least 1 number, 1 uppercase letter, and one lowercase letter
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])]
        });
        this.formOnChanges();
    }
    ngOnDestroy() {
        console.log('Being Destroyed');
    }
    formOnChanges() {
        console.log(this.credentialsForm);
        this.credentialsForm.valueChanges
            .subscribe(data => {
            console.log(data);
            this.credentialsForm.statusChanges.subscribe(status => {
                console.log(status);
                if (status === 'VALID') {
                    console.log('you did it bruh');
                    this.passwordsMatch = true;
                }
            });
            if (this.credentialsForm.controls.password.value === this.credentialsForm.controls.reTypePassword.value &&
                this.credentialsForm.controls.password.touched &&
                this.credentialsForm.controls.email.valid) {
                console.log('Passwords Match');
            }
            if (this.credentialsForm.controls.password.value !== this.credentialsForm.controls.reTypePassword.value) {
                console.log('Passwords dont match');
                this.passwordsMatch = false;
            }
        });
    }
    enterCodePage(email, password) {
        this.email = this.credentialsForm.controls.email.value;
        this.auth.getLoginCredentials(email, password);
        console.log('Going to Enter Code Page');
        this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/', this.email]);
    }
    userAlreadyExistAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'danger-alert',
                message: 'This user already exists.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
    }
};
LoginCredentialsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
LoginCredentialsPage.propDecorators = {
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['autoFucousInput', { static: false },] }]
};
LoginCredentialsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login-credentials',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_credentials_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_credentials_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController])
], LoginCredentialsPage);



/***/ }),

/***/ 58366:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <img style=\"margin-right: 16px;\" height=\"32\" src=\"../../../../../assets/icon/fyf-white-icon.svg\">\n    </ion-buttons>\n    <ion-title size=\"small\">Sign Up - Login Credentials</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <div class=\"spacer ion-hide-lg-down\"></div>\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../../../assets/icon/Logo 2.0.svg\" alt=\"\" srcset=\"\">\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"cancel()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n\n    <!-- Header -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <h6 class=\"text-header\">Please create your login credentials. Your password needs to be <span>at least 8 characters long, with at least 1 uppercase letter and one number.</span></h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"4\">\n        <form (ngSubmit)=\"enterCodePage(this.credentialsForm.value.email, this.credentialsForm.value.password)\" [formGroup]=\"credentialsForm\">\n\n              <ion-list class=\"line-input\">\n\n                <ion-item>\n                  <ion-input\n                  #autoFucousInput\n                  formControlName=\"email\"\n                  type=\"email\"\n                  placeholder=\"email\"></ion-input>\n                </ion-item>\n\n                <!-- Email Validation-->\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                      <div class=\"error-message\"\n                        *ngIf=\"credentialsForm\n                          .get('email')\n                          .hasError(validation.type) && (credentialsForm.get('email')\n                          .dirty || credentialsForm.get('email').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                </div>\n                <br>\n                <ion-item>\n                  <ion-input\n                  required\n                  inputmode=\"text\"\n                  formControlName=\"password\"\n                  type=\"password\"\n                  placeholder=\"enter password\"></ion-input>\n\n                  <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                     <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                  </ion-button>\n\n                  <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                      <ion-icon style=\"color: #21df82;\" size=\"large\"  name=\"checkmark\"> </ion-icon>\n                   </ion-button>\n\n                </ion-item>\n\n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                 <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                   <div class=\"error-message\"\n                     *ngIf=\"credentialsForm\n                       .get('password')\n                       .hasError('pattern') && (credentialsForm.get('password')\n                       .dirty || credentialsForm.get('password').touched)\">\n                     {{ validation.message }}\n                   </div>\n                 </ng-container>\n                </div>\n\n                <br>\n                <ion-item>\n                  <ion-input\n                  formControlName=\"reTypePassword\"\n                  type=\"password\"\n                  placeholder=\"re-type password\"></ion-input>\n\n                    <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                        <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                    </ion-button>\n\n                     <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                         <ion-icon style=\"color: #21df82;\" size=\"large\" name=\"checkmark\"> </ion-icon>\n                    </ion-button>\n\n                </ion-item>\n\n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                      <div class=\"error-message\"\n                        *ngIf=\"credentialsForm\n                          .get('reTypePassword')\n                          .hasError('pattern') && (credentialsForm.get('reTypePassword')\n                          .dirty || credentialsForm.get('reTypePassword').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n                <ion-button type=\"submit\" class=\"orange-button\" [disabled]=\"!passwordsMatch\">NEXT</ion-button>\n              </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ 6515:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/login-credentials/login-credentials.page.scss ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0c375f);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.cancel-button {\n  margin: 0 10px;\n}\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 48px auto 48px auto;\n  width: 200px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n}\nspan {\n  font-weight: 900;\n  font-size: 1em;\n  color: #e3405f;\n}\n.badPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n.badPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n.goodPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n.goodPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n@-webkit-keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWNyZWRlbnRpYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDQTtFQUNFLGNBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxVQUFBO0FBRUY7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFHRjtBQURBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7VUFBQSxrREFBQTtBQUlGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FBS0Y7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO1VBQUEsa0RBQUE7QUFNRjtBQUpBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtBQU9GO0FBTEE7RUFDRTtJQUNFLDJCQUFBO0VBUUY7RUFMQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQU9GO0FBQ0Y7QUFmQTtFQUNFO0lBQ0UsMkJBQUE7RUFRRjtFQUxBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBT0Y7QUFDRiIsImZpbGUiOiJsb2dpbi1jcmVkZW50aWFscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVza3RvcC10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzI2O1xuXG4gIGgxIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgfVxufVxuLmJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwNTVhNSwgIzBjMzc1Zik7XG4gIGhlaWdodDogMjRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2FuY2VsLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiB1bnNldDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNDhweCBhdXRvIDQ4cHggYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG59XG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjZTM0MDVmO1xufVxuLmJhZFBhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcbn1cbi5iYWRQYXNzd29yZDpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cbi5nb29kUGFzc3dvcmQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiAwLjVzIGZvcndhcmRzO1xufVxuLmdvb2RQYXNzd29yZDpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgcGFzc3dvcmQtaWNvbnMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_sign-up_login-credentials_login-credentials_module_ts-es2015.js.map