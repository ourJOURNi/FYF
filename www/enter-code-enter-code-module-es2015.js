(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enter-code-enter-code-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/enter-code/enter-code.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/enter-code/enter-code.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Enter Code</ion-title>\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\n        cancel\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed class=\"ion-text-center\">\n    <ion-row>\n      <ion-col size=\"10\" offset=\"1\">\n        <h6 class=\"text-header\">Please enter the 6 character code that was sent to {{userEmail}}</h6>\n        <form (ngSubmit)=\"thankYouPage()\" [formGroup]=\"enterCodeForm\">\n          <ion-list class=\"line-input\">\n            <ion-item>\n              <ion-label>Code |</ion-label>\n              <ion-input\n              formControlName=\"code\"\n              type=\"email\"\n              placeholder=\"enter code\"></ion-input>\n            </ion-item>\n            <ion-button class=\"send-new-code\" (click)=\"sendNewCode()\">\n              Send new code\n            </ion-button>\n            <ion-button [disabled]=\"disabled\" class=\"orange-button\" type=\"submit\">\n              ENTER CODE\n            </ion-button>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/enter-code/enter-code-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/enter-code/enter-code-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: EnterCodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterCodePageRoutingModule", function() { return EnterCodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _enter_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter-code.page */ "./src/app/pages/auth/sign-up/enter-code/enter-code.page.ts");




const routes = [
    {
        path: '',
        component: _enter_code_page__WEBPACK_IMPORTED_MODULE_3__["EnterCodePage"]
    },
    {
        path: 'thank-you-page',
        loadChildren: () => __webpack_require__.e(/*! import() | thank-you-thank-you-module */ "thank-you-thank-you-module").then(__webpack_require__.bind(null, /*! ../thank-you/thank-you.module */ "./src/app/pages/auth/sign-up/thank-you/thank-you.module.ts")).then(m => m.ThankYouPageModule)
    }
];
let EnterCodePageRoutingModule = class EnterCodePageRoutingModule {
};
EnterCodePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnterCodePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/enter-code/enter-code.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/enter-code/enter-code.module.ts ***!
  \********************************************************************/
/*! exports provided: EnterCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterCodePageModule", function() { return EnterCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _enter_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enter-code-routing.module */ "./src/app/pages/auth/sign-up/enter-code/enter-code-routing.module.ts");
/* harmony import */ var _enter_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter-code.page */ "./src/app/pages/auth/sign-up/enter-code/enter-code.page.ts");







let EnterCodePageModule = class EnterCodePageModule {
};
EnterCodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _enter_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnterCodePageRoutingModule"]
        ],
        declarations: [_enter_code_page__WEBPACK_IMPORTED_MODULE_6__["EnterCodePage"]]
    })
], EnterCodePageModule);



/***/ }),

/***/ "./src/app/pages/auth/sign-up/enter-code/enter-code.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/enter-code/enter-code.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".send-new-code {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 150px;\n  margin: 50px auto;\n  opacity: 0;\n  -webkit-animation: slide-from-right 1s ease-out 5s forwards;\n          animation: slide-from-right 1s ease-out 5s forwards;\n}\n\n@-webkit-keyframes slide-from-right {\n  0% {\n    -webkit-transform: translateX(300px);\n            transform: translateX(300px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-from-right {\n  0% {\n    -webkit-transform: translateX(300px);\n            transform: translateX(300px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduLXVwL2VudGVyLWNvZGUvZW50ZXItY29kZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC9lbnRlci1jb2RlL2VudGVyLWNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBQ0NGOztBREVBO0VBRUU7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0lBQ0EsVUFBQTtFQ0FGO0VER0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0RGO0FBQ0Y7O0FEVEE7RUFFRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7SUFDQSxVQUFBO0VDQUY7RURHQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbi11cC9lbnRlci1jb2RlL2VudGVyLWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbmQtbmV3LWNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLXdpZHRoIDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlcjogMXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLWZyb20tcmlnaHQgMXMgZWFzZS1vdXQgNXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1yaWdodCB7XG5cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIuc2VuZC1uZXctY29kZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXI6IDFweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1mcm9tLXJpZ2h0IDFzIGVhc2Utb3V0IDVzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tcmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/sign-up/enter-code/enter-code.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/enter-code/enter-code.page.ts ***!
  \******************************************************************/
/*! exports provided: EnterCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterCodePage", function() { return EnterCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let EnterCodePage = class EnterCodePage {
    constructor(router, formBuilder, auth, activatedRoute, toast) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.toast = toast;
        this.disabled = true;
        this.code = '';
        this.userEmail = '';
    }
    ngOnInit() {
        this.enterCodeForm = this.formBuilder.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(6)]]
        });
        this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');
        this.generateCode(6).then(code => {
            console.log(`Sent Email to ${this.userEmail}`);
            this.auth.sendEmailWithCode(code, this.userEmail);
        });
        this.formOnChanges();
    }
    formOnChanges() {
        console.log(this.enterCodeForm);
        this.enterCodeForm.valueChanges.subscribe(data => {
            console.log(data);
            if (data.code === this.code) {
                console.log('codes match');
                this.disabled = false;
            }
            if (data.code !== this.code) {
                this.disabled = true;
            }
        });
    }
    generateCode(length) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            console.log('Generated Code: ' + result);
            return this.code = result;
        });
    }
    sendNewCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.generateCode(6).then(code => {
                console.log('Data: ' + code);
                this.auth.sendEmailWithCode(code, this.userEmail);
            });
            yield this.presentNewCodeToast(this.userEmail);
        });
    }
    thankYouPage() {
        if (this.enterCodeForm.controls.code.value !== this.code) {
            this.presentErrorToast();
            console.log('Codes do not match');
        }
        console.log('Thank you page');
        this.auth.register();
        this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/:email/thank-you-page']);
    }
    ;
    presentErrorToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'The codes do not match. Please try again.',
                duration: 2000,
                cssClass: 'wrong-password-toast',
                keyboardClose: true,
                position: 'top',
            });
            toast.present();
        });
    }
    presentNewCodeToast(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: `New Code sent to ${email}`,
                duration: 2000,
                cssClass: 'success-toast',
                keyboardClose: true,
                position: 'top',
            });
            toast.present();
        });
    }
    cancel() {
        console.log('Sign up cancelled');
        this.router.navigate(['']);
    }
};
EnterCodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
EnterCodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enter-code',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enter-code.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/enter-code/enter-code.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enter-code.page.scss */ "./src/app/pages/auth/sign-up/enter-code/enter-code.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], EnterCodePage);



/***/ })

}]);
//# sourceMappingURL=enter-code-enter-code-module-es2015.js.map