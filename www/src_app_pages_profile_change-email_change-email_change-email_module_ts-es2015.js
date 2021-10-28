(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_change-email_change-email_change-email_module_ts"],{

/***/ 94157:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/profile/change-email/change-email/change-email-routing.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailPageRoutingModule": function() { return /* binding */ ChangeEmailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _change_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-email.page */ 23844);




const routes = [
    {
        path: '',
        component: _change_email_page__WEBPACK_IMPORTED_MODULE_0__.ChangeEmailPage
    },
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-email_confirm_confirm_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../confirm/confirm.module */ 12947)).then(m => m.ConfirmPageModule)
    }
];
let ChangeEmailPageRoutingModule = class ChangeEmailPageRoutingModule {
};
ChangeEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangeEmailPageRoutingModule);



/***/ }),

/***/ 55349:
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile/change-email/change-email/change-email.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailPageModule": function() { return /* binding */ ChangeEmailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _change_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-email-routing.module */ 94157);
/* harmony import */ var _change_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-email.page */ 23844);







let ChangeEmailPageModule = class ChangeEmailPageModule {
};
ChangeEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _change_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeEmailPageRoutingModule
        ],
        declarations: [_change_email_page__WEBPACK_IMPORTED_MODULE_1__.ChangeEmailPage]
    })
], ChangeEmailPageModule);



/***/ }),

/***/ 23844:
/*!******************************************************************************!*\
  !*** ./src/app/pages/profile/change-email/change-email/change-email.page.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailPage": function() { return /* binding */ ChangeEmailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_change_email_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./change-email.page.html */ 47734);
/* harmony import */ var _change_email_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-email.page.scss */ 3083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ 37556);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/profile.service */ 39181);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);









let ChangeEmailPage = class ChangeEmailPage {
    constructor(formBuilder, router, auth, toast, alertController, profile) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.toast = toast;
        this.alertController = alertController;
        this.profile = profile;
        this.activeEmail = '';
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Must be a valid email address' }
            ],
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppercase character, and one number.' }
            ]
        };
        this.activeEmail = this.profile.email.getValue();
        console.log('Active Email: ' + this.activeEmail);
    }
    ngOnInit() {
        this.changeEmail = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    // this is for the letters (both uppercase and lowercase) and numbers validation
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])]
        });
        this.changeEmail.valueChanges.subscribe(_ => {
            setTimeout(() => {
                if (this.changeEmail.valid) {
                    this.formValid = true;
                }
                else {
                    this.formValid = false;
                }
            }, 100);
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'There was an error with your password or email. Please try again.',
                duration: 5000,
                cssClass: 'wrong-password-toast',
                keyboardClose: true,
                position: 'top',
            });
            toast.present();
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'danger-alert',
                header: 'Invalid Email',
                message: 'New Email cannot be the same as the current one.',
                buttons: [{
                        text: 'OK'
                    }]
            });
            yield alert.present();
        });
    }
    confirmChangedEmail(newEmail, password) {
        if (newEmail == this.activeEmail) {
            // Show an alert telling the user that they can't use the same email
            this.presentAlert();
        }
        else {
            this.profile.changeEmail(newEmail, password);
        }
    }
    goBack() {
        this.router.navigate(['/home/profile']);
    }
};
ChangeEmailPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService }
];
ChangeEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-change-email',
        template: _raw_loader_change_email_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_change_email_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController,
        _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService])
], ChangeEmailPage);



/***/ }),

/***/ 3083:
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile/change-email/change-email/change-email.page.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.text-header {\n  background: #e4ebf1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFDSjtBQUNJO0VBQ0UsY0FBQTtBQUNOO0FBRUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0U7RUFDRSxtQkFBQTtBQUVKIiwiZmlsZSI6ImNoYW5nZS1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVza3RvcC10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzI2O1xuICBcbiAgICBoMSB7XG4gICAgICBjb2xvcjogIzAwNTVhNTtcbiAgICB9XG4gIH1cbiAgLmJhY2stYnV0dG9uIHtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwNTVhNSwgIzBkMmU0ZCk7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnRleHQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAyMzUsIDI0MSk7XG4gIH0iXX0= */");

/***/ }),

/***/ 47734:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-email/change-email/change-email.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Email</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid  class=\"ion-text-center\">\n\n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <h1>Change Email</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"goBack()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\n        <h6 class=\"text-header\" style=\"width: unset;\">{{activeEmail}}</h6>\n      </ion-col>\n    </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"4\">\n            <form (ngSubmit)=\"confirmChangedEmail(this.changeEmail.controls.email.value, this.changeEmail.controls.password.value)\" [formGroup]=\"changeEmail\">\n\n\n            <ion-list class=\"line-input\">\n\n                <!-- Email -->\n                <ion-item>\n                  <ion-input\n                    required\n                    placeholder=\"new email\"\n                    formControlName=\"email\"\n                    type=\"email\"\n                    (keyup.enter)=\"formValid ? confirmChangedEmail(this.changeEmail.controls.email.value, this.changeEmail.controls.password.value) : null\">\n                  </ion-input>\n                </ion-item>\n\n                <!-- Email Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"changeEmail\n                      .get('email')\n                      .hasError(validation.type) && (changeEmail.get('email')\n                      .dirty || changeEmail.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"password\"\n                      formControlName=\"password\"\n                      minlength=\"8\"\n                      type=\"password\"\n                      (keyup.enter)=\"formValid ? confirmChangedEmail(this.changeEmail.controls.email.value, this.changeEmail.controls.password.value) : null\">\n                    </ion-input>\n                </ion-item>\n          </ion-list>\n                <ion-button type=\"submit\" [disabled]=\"!formValid\" class=\"orange-button\" style=\"width: unset;\">CHANGE EMAIL</ion-button>\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_change-email_change-email_change-email_module_ts-es2015.js.map