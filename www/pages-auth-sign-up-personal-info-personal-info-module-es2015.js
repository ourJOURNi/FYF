(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-sign-up-personal-info-personal-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid style=\"margin-top: 10%;\" class=\"ion-text-center\">\r\n    <ion-row>\r\n      <ion-col size-lg=\"4\" size-md=\"6\" size-sm=\"10\" size-xs=\"10\" offset-lg=\"2\" offset-sm=\"1\" offset-xs=\"1\">\r\n          <h6 class=\"text-header\">Please enter your profile information.</h6>\r\n        <form [formGroup]=\"userInfoForm\" (ngSubmit)=\"goToProfilePicturePage(this.userInfoForm.value)\">\r\n\r\n            <ion-list class=\"line-input\">\r\n\r\n            <ion-item>\r\n              <ion-input\r\n              #ioninput\r\n              autocapitalize=\"on\"\r\n              required\r\n              inputmode=\"text\"\r\n              formControlName=\"fullName\"\r\n              placeholder=\"First & Last name\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-input\r\n                required \r\n                formControlName=\"addressOne\"  placeholder=\"address 1\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-input formControlName=\"addressTwo\"  placeholder=\"apt/unit #\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-input\r\n              required\r\n              inputmode=\"text\"\r\n              formControlName=\"phone\"\r\n              maxlength=\"10\"\r\n              placeholder=\"phone # e.i (xxx) xxx - xxxx\"></ion-input>\r\n            </ion-item>\r\n            <!-- Password Validation-->\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validationMessasges.phone\">\r\n                <div class=\"error-message\"\r\n                *ngIf=\"userInfoForm\r\n                  .get('phone')\r\n                  .hasError(validation.type) && (userInfoForm.get('phone')\r\n                  .dirty || userInfoForm.get('phone').touched)\">\r\n                  {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n\r\n            <ion-item>\r\n              <ion-input \r\n              required\r\n              formControlName=\"city\"  placeholder=\"city\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                <ion-select\r\n                required\r\n                formControlName=\"state\" \r\n                interface=\"action-sheet\"\r\n                placeholder=\"State\"\r\n                value=\"\">\r\n                    <ion-select-option value=\"Alabama\">Alabama</ion-select-option>\r\n                    <ion-select-option value=\"Alaska\">Alaska</ion-select-option>\r\n                    <ion-select-option value=\"Arizona\">Arizona</ion-select-option>\r\n                    <ion-select-option value=\"Arkansas\">Arkansas</ion-select-option>\r\n                    <ion-select-option value=\"California\">California</ion-select-option>\r\n                    <ion-select-option value=\"Colorado\">Colorado</ion-select-option>\r\n                    <ion-select-option value=\"Connecticut\">Connecticut</ion-select-option>\r\n                    <ion-select-option value=\"Delaware\">Delaware</ion-select-option>\r\n                    <ion-select-option value=\"Florida\">Florida</ion-select-option>\r\n                    <ion-select-option value=\"Georgia\">Georgia</ion-select-option>\r\n                    <ion-select-option value=\"Hawaii\">Hawaii</ion-select-option>\r\n                    <ion-select-option value=\"Idaho\">Idaho</ion-select-option>\r\n                    <ion-select-option value=\"Illinois\">Illinois</ion-select-option>\r\n                    <ion-select-option value=\"Indiana\">Indiana</ion-select-option>\r\n                    <ion-select-option value=\"Iowa\">Iowa</ion-select-option>\r\n                    <ion-select-option value=\"Kansas\">Kansas</ion-select-option>\r\n                    <ion-select-option value=\"Kentucky\">Kentucky</ion-select-option>\r\n                    <ion-select-option value=\"Louisiana\">Louisiana</ion-select-option>\r\n                    <ion-select-option value=\"Maine\">Maine</ion-select-option>\r\n                    <ion-select-option value=\"Maryland\">Maryland</ion-select-option>\r\n                    <ion-select-option value=\"Massachusetts\">Massachusetts</ion-select-option>\r\n                    <ion-select-option value=\"Michigan\">Michigan</ion-select-option>\r\n                    <ion-select-option value=\"Minnesota\">Minnesota</ion-select-option>\r\n                    <ion-select-option value=\"Mississippi\">Mississippi</ion-select-option>\r\n                    <ion-select-option value=\"Montana\">Montana</ion-select-option>\r\n                    <ion-select-option value=\"Nebraska\">Nebraska</ion-select-option>\r\n                    <ion-select-option value=\"Nevada\">Nevada</ion-select-option>\r\n                    <ion-select-option value=\"New Hampshire\">New Hampshire</ion-select-option>\r\n                    <ion-select-option value=\"New Mexico\">New Mexico</ion-select-option>\r\n                    <ion-select-option value=\"Michigan\">Michigan</ion-select-option>\r\n                    <ion-select-option value=\"Minnesota\">Minnesota</ion-select-option>\r\n                    <ion-select-option value=\"Mississippi\">Mississippi</ion-select-option>\r\n                    <ion-select-option value=\"Montana\">Montana</ion-select-option>\r\n                    <ion-select-option value=\"Nebraska\">Nebraska</ion-select-option>\r\n                    <ion-select-option value=\"Nevada\">Nevada</ion-select-option>\r\n                    <ion-select-option value=\"New Hampshire\">New Hampshire</ion-select-option>\r\n                    <ion-select-option value=\"New Jersey\">New Mexico</ion-select-option>\r\n                    <ion-select-option value=\"New York\">New York</ion-select-option>\r\n                    <ion-select-option value=\"North Caroloina\">North Caroloina</ion-select-option>\r\n                    <ion-select-option value=\"North Dakota\">North Dakota</ion-select-option>\r\n                    <ion-select-option value=\"Ohio\">Ohio</ion-select-option>\r\n                    <ion-select-option value=\"Oklahoma\">Oklahoma</ion-select-option>\r\n                    <ion-select-option value=\"Oregon\">Oregon</ion-select-option>\r\n                    <ion-select-option value=\"Pennsylvania\">Pennsylvania</ion-select-option>\r\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\r\n                    <ion-select-option value=\"New York\">New York</ion-select-option>\r\n                    <ion-select-option value=\"North Caroloina\">North Caroloina</ion-select-option>\r\n                    <ion-select-option value=\"North Dakota\">North Dakota</ion-select-option>\r\n                    <ion-select-option value=\"Ohio\">Ohio</ion-select-option>\r\n                    <ion-select-option value=\"Oklahoma\">Oklahoma</ion-select-option>\r\n                    <ion-select-option value=\"Oregon\">Oregon</ion-select-option>\r\n                    <ion-select-option value=\"Pennsylvania\">Pennsylvania</ion-select-option>\r\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\r\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\r\n                    <ion-select-option value=\"New York\">New York</ion-select-option>\r\n                    <ion-select-option value=\"North Caroloina\">North Caroloina</ion-select-option>\r\n                    <ion-select-option value=\"North Dakota\">North Dakota</ion-select-option>\r\n                    <ion-select-option value=\"Ohio\">Ohio</ion-select-option>\r\n                    <ion-select-option value=\"Oklahoma\">Oklahoma</ion-select-option>\r\n                    <ion-select-option value=\"Oregon\">Oregon</ion-select-option>\r\n                    <ion-select-option value=\"Pennsylvania\">Pennsylvania</ion-select-option>\r\n                    <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\r\n                    <ion-select-option value=\"South Carolina\">South Carolina</ion-select-option>\r\n                    <ion-select-option value=\"South Dakota\">South Dakota</ion-select-option>\r\n                    <ion-select-option value=\"Tennessee\">Tennessee</ion-select-option>\r\n                    <ion-select-option value=\"Texas\">Texas</ion-select-option>\r\n                    <ion-select-option value=\"Utah\">Utah</ion-select-option>\r\n                    <ion-select-option value=\"Vermont\">Vermont</ion-select-option>\r\n                    <ion-select-option value=\"Virginia\">Virginia</ion-select-option>\r\n                    <ion-select-option value=\"Washington\">Washington</ion-select-option>\r\n                    <ion-select-option value=\"West Virginia\">West Virginia</ion-select-option>\r\n                    <ion-select-option value=\"Wisconsin\">Wisconsin</ion-select-option>\r\n                    <ion-select-option value=\"Wyoming\">Wyoming</ion-select-option>\r\n                  </ion-select>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-input\r\n                required \r\n                maxLength=\"6\"\r\n                formControlName=\"zip\"   placeholder=\"zip\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                <ion-select\r\n                  required \r\n                  formControlName=\"gender\"  placeholder=\"Gender\">\r\n                    <ion-select-option value=\"female\">Female</ion-select-option>\r\n                    <ion-select-option value=\"male\">Male</ion-select-option>\r\n                  </ion-select>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                  <ion-label>Date of Birth</ion-label>\r\n                  <ion-datetime\r\n                    required\r\n                    min=\"2000\"\r\n                    displayFormat=\"DDD. MMM DD, YY\"\r\n                    placeholder=\"Select Date\"\r\n                    formControlName=\"dob\"\r\n                    monthShortNames=\"jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des\"></ion-datetime>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-input\r\n                required\r\n                formControlName=\"school\"    placeholder=\"school\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                <ion-select\r\n                  required  \r\n                  formControlName=\"grade\"   placeholder=\"Grade\">\r\n                  <ion-select-option value=\"7th Grade\">Middle School - 7th Grade</ion-select-option>\r\n                  <ion-select-option value=\"8th Grade\">Middle School - 8th Grade</ion-select-option>\r\n                  <ion-select-option value=\"High School - Freshmen\">High School - Freshmen</ion-select-option>\r\n                  <ion-select-option value=\"High School - Sophmore\">High School - Sophmore</ion-select-option>\r\n                  <ion-select-option value=\"High School - Junior\">High School - Junior</ion-select-option>\r\n                  <ion-select-option value=\"High School - Senior\">High School - Senior</ion-select-option>\r\n                  <ion-select-option value=\"Collge - Freshmen\">College - Freshmen</ion-select-option>\r\n                  <ion-select-option value=\"Collge - Sophmore\">College - Sophmore</ion-select-option>\r\n\r\n                  </ion-select>\r\n\r\n            </ion-item>\r\n            </ion-list>\r\n            <ion-button class=\"orange-button\" type=\"submit\">NEXT</ion-button><br>\r\n            <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\r\n                cancel\r\n              </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/personal-info/personal-info-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/personal-info/personal-info-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PersonalInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPageRoutingModule", function() { return PersonalInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _personal_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-info.page */ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts");




const routes = [
    {
        path: '',
        component: _personal_info_page__WEBPACK_IMPORTED_MODULE_3__["PersonalInfoPage"]
    },
    {
        path: 'profile-picture',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-picture-profile-picture-module */ "profile-picture-profile-picture-module").then(__webpack_require__.bind(null, /*! ../profile-picture/profile-picture.module */ "./src/app/pages/auth/sign-up/profile-picture/profile-picture.module.ts")).then(m => m.ProfilePicturePageModule)
    }
];
let PersonalInfoPageRoutingModule = class PersonalInfoPageRoutingModule {
};
PersonalInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonalInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/personal-info/personal-info.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.module.ts ***!
  \**************************************************************************/
/*! exports provided: PersonalInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPageModule", function() { return PersonalInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-info-routing.module */ "./src/app/pages/auth/sign-up/personal-info/personal-info-routing.module.ts");
/* harmony import */ var _personal_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-info.page */ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts");







let PersonalInfoPageModule = class PersonalInfoPageModule {
};
PersonalInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalInfoPageRoutingModule"]
        ],
        declarations: [_personal_info_page__WEBPACK_IMPORTED_MODULE_6__["PersonalInfoPage"]]
    })
], PersonalInfoPageModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts ***!
  \************************************************************************/
/*! exports provided: PersonalInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoPage", function() { return PersonalInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");






let PersonalInfoPage = class PersonalInfoPage {
    constructor(
    // private auth: AuthService,
    formBuilder, router, auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.validationMessasges = {
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.' }
            ],
            phone: [
                // tslint:disable-next-line: max-line-length
                { type: 'text', message: 'Phone Number has to be 10 digits (xxx) xxx - xxxx' }
            ]
        };
        this.fullNamePattern = '/^([^0-9]*)$/';
        this.phonePattern = '';
    }
    ngOnInit() {
        this.userInfoForm = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            addressOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressTwo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ])],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // Date of Birth
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            school: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.inputElement.setFocus();
        }, 1000);
    }
    goToProfilePicturePage(data) {
        console.log(data);
        this.auth.getPersonalInfo(data);
        this.router.navigate(['/personal-info/profile-picture']);
    }
    cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
    }
};
PersonalInfoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ioninput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], PersonalInfoPage.prototype, "inputElement", void 0);
PersonalInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-info.page.scss */ "./src/app/pages/auth/sign-up/personal-info/personal-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], PersonalInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-sign-up-personal-info-personal-info-module-es2015.js.map