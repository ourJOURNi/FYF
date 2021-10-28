(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_forgot-password_enter-code_enter-code_module_ts"], {
    /***/
    70151: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnterCodePageRoutingModule": function EnterCodePageRoutingModule() {
          return (
            /* binding */
            _EnterCodePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _enter_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enter-code.page */
      67029);

      var routes = [{
        path: '',
        component: _enter_code_page__WEBPACK_IMPORTED_MODULE_0__.EnterCodePage
      }, //  to new password page
      {
        path: 'new-password/:email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_auth_forgot-password_new-password_new-password_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../../forgot-password/new-password/new-password.module */
          59238)).then(function (m) {
            return m.NewPasswordPageModule;
          });
        }
      }];

      var _EnterCodePageRoutingModule = function EnterCodePageRoutingModule() {
        _classCallCheck(this, EnterCodePageRoutingModule);
      };

      _EnterCodePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EnterCodePageRoutingModule);
      /***/
    },

    /***/
    17463: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnterCodePageModule": function EnterCodePageModule() {
          return (
            /* binding */
            _EnterCodePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _enter_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enter-code-routing.module */
      70151);
      /* harmony import */


      var _enter_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./enter-code.page */
      67029);

      var _EnterCodePageModule = function EnterCodePageModule() {
        _classCallCheck(this, EnterCodePageModule);
      };

      _EnterCodePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _enter_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnterCodePageRoutingModule],
        declarations: [_enter_code_page__WEBPACK_IMPORTED_MODULE_1__.EnterCodePage]
      })], _EnterCodePageModule);
      /***/
    },

    /***/
    67029: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnterCodePage": function EnterCodePage() {
          return (
            /* binding */
            _EnterCodePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_enter_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./enter-code.page.html */
      37042);
      /* harmony import */


      var _enter_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./enter-code.page.scss */
      22283);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _EnterCodePage = /*#__PURE__*/function () {
        function EnterCodePage(router, formBuilder, auth, activatedRoute, toast) {
          _classCallCheck(this, EnterCodePage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.auth = auth;
          this.activatedRoute = activatedRoute;
          this.toast = toast;
          this.code = '';
          this.userEmail = '';
          this.validationMessasges = {
            code: [{
              type: 'text',
              message: 'The codes do not match'
            }]
          };
        }

        _createClass(EnterCodePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.enterCodeForm = this.formBuilder.group({
              code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
            this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');
            this.generateCode(6).then(function (code) {
              _this.auth.sendEmailWithCodeForgotPassword(code, _this.userEmail);
            });
            this.formOnChanges();
          }
        }, {
          key: "formOnChanges",
          value: function formOnChanges() {
            var _this2 = this;

            console.log(this.enterCodeForm);
            this.enterCodeForm.valueChanges.subscribe(function (data) {
              console.log(data);

              if (data.code === _this2.code) {
                _this2.codesMatched = true;
                return _this2.codesMatchedToast();
              } else {
                return _this2.codesMatched = false;
              }
            });
          }
        }, {
          key: "generateCode",
          value: function generateCode(length) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var result, characters, charactersLength, i;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      result = '';
                      characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                      charactersLength = characters.length;

                      for (i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                      }

                      console.log('Generated Code: ' + result);
                      return _context.abrupt("return", this.code = result);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "newPasswordPage",
          value: function newPasswordPage(newPassword) {
            console.log('New Password: ');
            console.log(newPassword);

            if (this.enterCodeForm.controls.code.value !== this.code) {
              // this.presentToast();
              console.log('Codes do not match');
            } else {
              console.log('Codes matched');
              this.router.navigate(['/enter-email/enter-code/:email/new-password', this.userEmail]);
            }
          }
        }, {
          key: "sendNewCode",
          value: function sendNewCode() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.generateCode(6).then(function (code) {
                        console.log('Data: ' + code);

                        _this3.auth.sendEmailWithCode(code, _this3.userEmail);
                      });

                    case 2:
                      _context2.next = 4;
                      return this.presentNewCodeToast(this.userEmail);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "codesMatchedToast",
          value: function codesMatchedToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('Codes Matched!');
                      _context3.next = 3;
                      return this.toast.create({
                        message: 'Codes Matched!',
                        cssClass: 'success-toast',
                        duration: 2000
                      });

                    case 3:
                      toast = _context3.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentNewCodeToast",
          value: function presentNewCodeToast(email) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toast.create({
                        message: "New Code sent to ".concat(email),
                        duration: 2000,
                        cssClass: 'success-toast',
                        keyboardClose: true,
                        position: 'top'
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('Forgot password cancelled');
            this.router.navigate(['']);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/enter-email']);
          }
        }]);

        return EnterCodePage;
      }();

      _EnterCodePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }];
      };

      _EnterCodePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-enter-code',
        template: _raw_loader_enter_code_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_enter_code_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder, src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController])], _EnterCodePage);
      /***/
    },

    /***/
    22283: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0c375f);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 40px;\n  width: 200px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.send-new-code {\n  display: block;\n  --background: #005191;\n  color: white;\n  font-weight: 600;\n  height: 40px;\n  width: 200px;\n  margin: 8px auto;\n  opacity: 0;\n  -webkit-animation: slide-from-right 1s ease-out 5s forwards;\n          animation: slide-from-right 1s ease-out 5s forwards;\n}\nspan {\n  color: #e3405f;\n}\n@-webkit-keyframes slide-from-right {\n  0% {\n    transform: translateX(300px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@keyframes slide-from-right {\n  0% {\n    transform: translateX(300px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGVyLWNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFFRjtBQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FBR0Y7QUFEQTtFQUNFLGNBQUE7QUFJRjtBQUZBO0VBRUU7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFJRjtFQURBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBR0Y7QUFDRjtBQWJBO0VBRUU7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFJRjtFQURBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJlbnRlci1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNrdG9wLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzMjY7XG5cbiAgaDEge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICB9XG59XG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDA1NWE1LCAjMGMzNzVmKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYW5jZWwtYnV0dG9uIHtcbiAgY29sb3I6ICNlNDQwNWY7XG4gIC0tYmFja2dyb3VuZDogIG5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNmMTViNzcsICNlNDQwNWYpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cbi5zZW5kLW5ldy1jb2RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiA4cHggYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1mcm9tLXJpZ2h0IDFzIGVhc2Utb3V0IDVzIGZvcndhcmRzO1xufVxuc3BhbiB7XG4gIGNvbG9yOiAjZTM0MDVmO1xufVxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLXJpZ2h0IHtcblxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    37042: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"small\">Enter Code</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"spacer ion-hide-lg-down\"></div>\n    <ion-grid class=\"ion-text-center\">\n      <!-- Desktop Header -->\n      <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n          <ion-toolbar class=\"desktop-toolbar\">\n                <ion-buttons slot=\"start\">\n                    <img height=\"50\" src=\"../../../../../assets/icon/Logo 2.0.svg\" alt=\"\" srcset=\"\">\n                </ion-buttons>\n                <ion-buttons slot=\"end\">\n                  <ion-button class=\"back-button\" (click)=\"back()\">\n                    Back\n                  </ion-button>\n                </ion-buttons>\n          </ion-toolbar>\n              <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n              <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <h6 class=\"text-header\">Please enter 6 character code that was sent to <span>{{userEmail}}</span></h6>\n        </ion-col>\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"4\">\n            <form [formGroup]=\"enterCodeForm\" (ngSubmit)=\"newPasswordPage(this.enterCodeForm.value)\">\n              <ion-list class=\"line-input\">\n              <ion-item>\n                <ion-input\n                placeholder=\"Enter Code\"\n                required\n                formControlName=\"code\"\n                type=\"text\"\n                placeholder=\"Enter Code\"></ion-input>\n              </ion-item>\n\n              <!-- Password Validation-->\n              <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.code\">\n                    <div class=\"error-message\"\n                      *ngIf=\"enterCodeForm\n                        .get('code')\n                        .hasError(validation.type) && (enterCodeForm.get('code')\n                        .dirty || enterCodeForm.get('code').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n\n              <ion-button [disabled]=\"!this.codesMatched\" type=\"submit\"  class=\"orange-button\">ENTER CODE</ion-button><br>\n              <ion-button class=\"send-new-code\" (click)=\"sendNewCode()\">\n                Send new code\n              </ion-button>\n              <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\n                  cancel\n              </ion-button>\n            </ion-list>\n\n            </form>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_forgot-password_enter-code_enter-code_module_ts-es5.js.map