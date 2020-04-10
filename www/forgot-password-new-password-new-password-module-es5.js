(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-new-password-new-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/new-password/new-password.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/new-password/new-password.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthForgotPasswordNewPasswordNewPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Password</ion-title>\n    <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\n        cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid fixed class=\"ion-text-center\">\n      <ion-row>\n        <ion-col size=\"10\" offset=\"1\">\n          <h6 style=\"background: rgba(245,245,245,0.7); padding: 20px; margin: 30px 0 30px 0;\">Please enter your new password.</h6>\n          <form [formGroup]=\"newPasswordForm\" (ngSubmit)=\"goToConfirmPage()\" >\n            <ion-list class=\"line-input\">\n\n            <ion-item>\n              <ion-input placeholder=\"Password\" formControlName=\"newPassword\" type=\"password\"></ion-input>\n\n                  <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                     <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                  </ion-button>\n\n                  <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                      <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\n                   </ion-button>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-input placeholder=\"Re-type Password\" formControlName=\"reTypeNewPassword\" type=\"password\"></ion-input>\n\n                  <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                     <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                  </ion-button>\n\n                  <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                      <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\n                   </ion-button>\n            </ion-item>\n\n\n            <ion-button type=\"submit\" class=\"orange-button\" >SET NEW PASSWORD</ion-button>\n          </ion-list>\n          </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/auth/forgot-password/new-password/new-password-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/auth/forgot-password/new-password/new-password-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: NewPasswordPageRoutingModule */

  /***/
  function srcAppPagesAuthForgotPasswordNewPasswordNewPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPasswordPageRoutingModule", function () {
      return NewPasswordPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _new_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-password.page */
    "./src/app/pages/auth/forgot-password/new-password/new-password.page.ts");

    const routes = [// 2nd of 3 forgot password pages
    {
      path: '',
      component: _new_password_page__WEBPACK_IMPORTED_MODULE_3__["NewPasswordPage"]
    }, // to the last page of forgot password route, "confirm"
    {
      path: 'confirm',
      loadChildren: () => __webpack_require__.e(
      /*! import() | confirm-confirm-module */
      "confirm-confirm-module").then(__webpack_require__.bind(null,
      /*! ../confirm/confirm.module */
      "./src/app/pages/auth/forgot-password/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
    }];
    let NewPasswordPageRoutingModule = class NewPasswordPageRoutingModule {};
    NewPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewPasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/forgot-password/new-password/new-password.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/auth/forgot-password/new-password/new-password.module.ts ***!
    \********************************************************************************/

  /*! exports provided: NewPasswordPageModule */

  /***/
  function srcAppPagesAuthForgotPasswordNewPasswordNewPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPasswordPageModule", function () {
      return NewPasswordPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _new_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-password-routing.module */
    "./src/app/pages/auth/forgot-password/new-password/new-password-routing.module.ts");
    /* harmony import */


    var _new_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-password.page */
    "./src/app/pages/auth/forgot-password/new-password/new-password.page.ts");

    let NewPasswordPageModule = class NewPasswordPageModule {};
    NewPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPasswordPageRoutingModule"]],
      declarations: [_new_password_page__WEBPACK_IMPORTED_MODULE_6__["NewPasswordPage"]]
    })], NewPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/forgot-password/new-password/new-password.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/auth/forgot-password/new-password/new-password.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthForgotPasswordNewPasswordNewPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "span {\n  font-weight: 900;\n  font-size: 1.2em;\n  color: #005191;\n}\n\n.badPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.badPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n.goodPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n\n.goodPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n\n@-webkit-keyframes password-icons {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes password-icons {\n  0% {\n    -webkit-transform: translateX(50px);\n            transform: translateX(50px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvbmV3LXBhc3N3b3JkL25ldy1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290LXBhc3N3b3JkL25ldy1wYXNzd29yZC9uZXctcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO1VBQUEsa0RBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO1VBQUEsa0RBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtFQ0NGO0VERUE7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ0FGO0FBQ0Y7O0FEUkE7RUFDRTtJQUNFLG1DQUFBO1lBQUEsMkJBQUE7RUNDRjtFREVBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvbmV3LXBhc3N3b3JkL25ldy1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG5cbi5iYWRQYXNzd29yZCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIDAuNXMgZm9yd2FyZHM7XG59XG5cbi5iYWRQYXNzd29yZDpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuLmdvb2RQYXNzd29yZCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIDAuNXMgZm9yd2FyZHM7XG59XG5cbi5nb29kUGFzc3dvcmQ6bnRoLWNoaWxkKDIpIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgcGFzc3dvcmQtaWNvbnMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsInNwYW4ge1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxuLmJhZFBhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcbn1cblxuLmJhZFBhc3N3b3JkOm50aC1jaGlsZCgyKSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIGZvcndhcmRzO1xufVxuXG4uZ29vZFBhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcbn1cblxuLmdvb2RQYXNzd29yZDpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwYXNzd29yZC1pY29ucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/auth/forgot-password/new-password/new-password.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/auth/forgot-password/new-password/new-password.page.ts ***!
    \******************************************************************************/

  /*! exports provided: NewPasswordPage */

  /***/
  function srcAppPagesAuthForgotPasswordNewPasswordNewPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPasswordPage", function () {
      return NewPasswordPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../environments/environment */
    "./src/environments/environment.ts");

    let NewPasswordPage = class NewPasswordPage {
      constructor(formBuilder, router, auth, activatedRoute, toast) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.toast = toast;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
        this.passwordsMatch = false;
        this.validationMessasges = {
          password: [{
            type: 'password',
            message: 'Please enter a valid password.'
          }]
        };
      }

      ngOnInit() {
        this.newPasswordForm = this.formBuilder.group({
          newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          reTypeNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');
        console.log('Email: ' + this.userEmail);
        this.formOnChanges();
      }

      formOnChanges() {
        console.log(this.newPasswordForm);
        this.newPasswordForm.valueChanges.subscribe(data => {
          console.log(data);
          this.newPasswordForm.statusChanges.subscribe(status => {
            console.log(status);

            if (status === 'VALID') {
              console.log('you did it bruh');
              this.passwordsMatch = true;
            }
          });

          if (this.newPasswordForm.controls.newPassword.value === this.newPasswordForm.controls.reTypePassword.value && this.newPasswordForm.controls.newPassword.touched) {
            console.log('Passwords Match');
          }

          if (this.newPasswordForm.controls.newPassword.value !== this.newPasswordForm.controls.reTypePassword.value) {
            console.log('Passwords Match');
            this.passwordsMatch = false;
          }
        });
      }

      goToConfirmPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const email = this.userEmail;
          let newPassword = this.newPasswordForm.value.newPassword;
          let reTypeNewPassword = this.newPasswordForm.value.reTypeNewPassword;

          if (newPassword !== reTypeNewPassword) {
            this.presentToast();
            return console.log('passwords do not match');
          }

          yield this.auth.forgotPassword(email, newPassword);
          yield console.log('Going to Confirm Password Change Page');
          yield this.router.navigate(['/enter-email/enter-code/:email/new-password/:email/confirm']);
        });
      }

      presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toast.create({
            message: 'The two passwords you entered do not match. Please try again.',
            duration: 2000
          });
          toast.present();
        });
      }

      cancel() {
        console.log('Forgotten password cancelled');
        this.router.navigate(['']);
      }

    };

    NewPasswordPage.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
    }];

    NewPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/new-password/new-password.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-password.page.scss */
      "./src/app/pages/auth/forgot-password/new-password/new-password.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], NewPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=forgot-password-new-password-new-password-module-es5.js.map