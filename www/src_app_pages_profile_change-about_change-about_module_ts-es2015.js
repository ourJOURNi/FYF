(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_change-about_change-about_module_ts"],{

/***/ 95122:
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/change-about/change-about-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeAboutPageRoutingModule": function() { return /* binding */ ChangeAboutPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _change_about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-about.page */ 31441);




const routes = [
    {
        path: '',
        component: _change_about_page__WEBPACK_IMPORTED_MODULE_0__.ChangeAboutPage
    },
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-about_confirm_confirm_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./confirm/confirm.module */ 64172)).then(m => m.ConfirmPageModule)
    }
];
let ChangeAboutPageRoutingModule = class ChangeAboutPageRoutingModule {
};
ChangeAboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangeAboutPageRoutingModule);



/***/ }),

/***/ 38575:
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/change-about/change-about.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeAboutPageModule": function() { return /* binding */ ChangeAboutPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _change_about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-about-routing.module */ 95122);
/* harmony import */ var _change_about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-about.page */ 31441);







let ChangeAboutPageModule = class ChangeAboutPageModule {
};
ChangeAboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _change_about_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeAboutPageRoutingModule
        ],
        declarations: [_change_about_page__WEBPACK_IMPORTED_MODULE_1__.ChangeAboutPage]
    })
], ChangeAboutPageModule);



/***/ }),

/***/ 31441:
/*!*****************************************************************!*\
  !*** ./src/app/pages/profile/change-about/change-about.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeAboutPage": function() { return /* binding */ ChangeAboutPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_change_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./change-about.page.html */ 53702);
/* harmony import */ var _change_about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-about.page.scss */ 40398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ 37556);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profile.service */ 39181);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);









let ChangeAboutPage = class ChangeAboutPage {
    constructor(formBuilder, router, auth, toast, alertController, profile) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.toast = toast;
        this.alertController = alertController;
        this.profile = profile;
        this.activeEmail = '';
        this.currentAbout = '';
        this.validationMessasges = {
            about: [
                { type: 'about', message: 'Must be a 500 characters or less.' }
            ],
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppercase character, and one number.' }
            ]
        };
    }
    ngOnInit() {
        this.activeEmail = this.profile.email.getValue();
        console.log('Active Email: ' + this.activeEmail);
        this.currentAbout = this.profile.about.getValue();
        console.log('Current About: ' + this.currentAbout);
        this.changeAbout = this.formBuilder.group({
            about: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    // this is for the letters (both uppercase and lowercase) and numbers validation
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])]
        });
        this.changeAbout.valueChanges.subscribe(value => {
            console.log(value);
            if (value.about.length > 0) {
                this.formValid = true;
            }
            else {
                this.formValid = false;
            }
        });
    }
    back() {
        this.router.navigate(['/home/profile/edit-profile-page']);
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
    confirmChangedAbout(email, newAbout, password) {
        this.profile.changeAbout(email, newAbout, password);
    }
    goBack() {
        this.router.navigate(['/home/profile']);
    }
};
ChangeAboutPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService }
];
ChangeAboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-change-about',
        template: _raw_loader_change_about_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_change_about_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController,
        _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService])
], ChangeAboutPage);



/***/ }),

/***/ 40398:
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/change-about/change-about.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.text-header {\n  background: #e4ebf1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0E7RUFDRSxtQkFBQTtBQUVGIiwiZmlsZSI6ImNoYW5nZS1hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVza3RvcC10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzI2O1xuXG4gIGgxIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgfVxufVxuLmJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwNTVhNSwgIzBkMmU0ZCk7XG4gIGhlaWdodDogMjRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGV4dC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAyMzUsIDI0MSk7XG59Il19 */");

/***/ }),

/***/ 53702:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/change-about/change-about.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <h1>Change About Me </h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"goBack()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\n        <h6 class=\"text-header\">{{currentAbout}}</h6>\n      </ion-col>\n    </ion-row>\n\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"4\">\n            <form (ngSubmit)=\"confirmChangedAbout(this.activeEmail, this.changeAbout.controls.about.value, this.changeAbout.controls.password.value)\" [formGroup]=\"changeAbout\">\n\n\n            <ion-list class=\"line-input\">\n\n                <!-- About -->\n                <ion-item>\n                  <ion-textarea\n                    required\n                    autogrow=\"true\"\n                    autocapitalize=\"true\"\n                    rows=\"5\"\n                    spellcheck=\"true\"\n                    wrap=\"soft\"\n                    type=\"text\"\n                    maxlength=\"500\"\n                    placeholder=\"Tell us about yourself\"\n                    formControlName=\"about\">\n                  </ion-textarea>\n                </ion-item>\n\n                <!-- About Validation-->\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.about\">\n                    <div class=\"error-message\"\n                    *ngIf=\"changeAbout\n                      .get('about')\n                      .hasError(validation.type) && (changeAbout.get('email')\n                      .dirty || changeAbout.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"password\"\n                      formControlName=\"password\"\n                      minlength=\"8\"\n                      type=\"password\">\n                    </ion-input>\n                </ion-item>\n          </ion-list>\n                <ion-button type=\"submit\" [disabled]=\"!formValid\" class=\"orange-button\" style=\"width: unset;\">CHANGE ABOUT</ion-button>\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_change-about_change-about_module_ts-es2015.js.map