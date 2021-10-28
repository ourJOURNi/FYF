(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_forgot-password_new-password_new-password_module_ts"], {
    /***/
    75751: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewPasswordPageRoutingModule": function NewPasswordPageRoutingModule() {
          return (
            /* binding */
            _NewPasswordPageRoutingModule
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


      var _new_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-password.page */
      68687);

      var routes = [// 2nd of 3 forgot password pages
      {
        path: '',
        component: _new_password_page__WEBPACK_IMPORTED_MODULE_0__.NewPasswordPage
      }, // to the last page of forgot password route, "confirm"
      {
        path: 'confirm',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_auth_forgot-password_confirm_confirm_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../confirm/confirm.module */
          58230)).then(function (m) {
            return m.ConfirmPageModule;
          });
        }
      }];

      var _NewPasswordPageRoutingModule = function NewPasswordPageRoutingModule() {
        _classCallCheck(this, NewPasswordPageRoutingModule);
      };

      _NewPasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewPasswordPageRoutingModule);
      /***/
    },

    /***/
    59238: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewPasswordPageModule": function NewPasswordPageModule() {
          return (
            /* binding */
            _NewPasswordPageModule
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


      var _new_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-password-routing.module */
      75751);
      /* harmony import */


      var _new_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-password.page */
      68687);

      var _NewPasswordPageModule = function NewPasswordPageModule() {
        _classCallCheck(this, NewPasswordPageModule);
      };

      _NewPasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _new_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewPasswordPageRoutingModule],
        declarations: [_new_password_page__WEBPACK_IMPORTED_MODULE_1__.NewPasswordPage]
      })], _NewPasswordPageModule);
      /***/
    },

    /***/
    68687: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewPasswordPage": function NewPasswordPage() {
          return (
            /* binding */
            _NewPasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_new_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./new-password.page.html */
      71187);
      /* harmony import */


      var _new_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-password.page.scss */
      27083);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      92340);

      var _NewPasswordPage = /*#__PURE__*/function () {
        function NewPasswordPage(formBuilder, router, auth, activatedRoute, toast) {
          _classCallCheck(this, NewPasswordPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.auth = auth;
          this.activatedRoute = activatedRoute;
          this.toast = toast;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.url;
          this.passwordsMatch = false;
          this.validationMessasges = {
            password: [{
              type: 'password',
              message: 'Please enter a valid password.'
            }]
          };
        }

        _createClass(NewPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.newPasswordForm = this.formBuilder.group({
              newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              reTypeNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
            this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');
            console.log('Email: ' + this.userEmail);
            this.formOnChanges();
          }
        }, {
          key: "formOnChanges",
          value: function formOnChanges() {
            var _this = this;

            console.log(this.newPasswordForm);
            this.newPasswordForm.valueChanges.subscribe(function (data) {
              console.log(data);

              _this.newPasswordForm.statusChanges.subscribe(function (status) {
                console.log(status);

                if (status === 'VALID') {// console.log('you did it bruh');
                }
              });

              console.log(_this.newPasswordForm.controls.newPassword.value);
              console.log(_this.newPasswordForm.controls.reTypeNewPassword.value);

              if (_this.newPasswordForm.controls.newPassword.value === _this.newPasswordForm.controls.reTypeNewPassword.value && _this.newPasswordForm.controls.newPassword.touched) {
                _this.passwordsMatch = true;
                console.log('Passwords Match');

                _this.passwordMatchToast();
              }

              if (_this.newPasswordForm.controls.newPassword.value !== _this.newPasswordForm.controls.reTypeNewPassword.value) {
                console.log('Passwords DONT Match');
                _this.passwordsMatch = false;
              }
            });
          }
        }, {
          key: "goToConfirmPage",
          value: function goToConfirmPage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var email, newPassword, reTypeNewPassword;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      email = this.userEmail;
                      newPassword = this.newPasswordForm.value.newPassword;
                      reTypeNewPassword = this.newPasswordForm.value.reTypeNewPassword;

                      if (!(newPassword !== reTypeNewPassword)) {
                        _context.next = 6;
                        break;
                      }

                      this.presentToast();
                      return _context.abrupt("return", console.log('passwords do not match'));

                    case 6:
                      _context.next = 8;
                      return this.auth.forgotPassword(email, newPassword);

                    case 8:
                      _context.next = 10;
                      return console.log('Going to Confirm Password Change Page');

                    case 10:
                      _context.next = 12;
                      return this.router.navigate(['/enter-email/enter-code/:email/new-password/:email/confirm']);

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toast.create({
                        message: 'The two passwords you entered do not match. Please try again.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "passwordMatchToast",
          value: function passwordMatchToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toast.create({
                        message: 'Passwords Match!',
                        cssClass: 'success-toast',
                        duration: 2000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('Forgotten password cancelled');
            this.router.navigate(['']);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/enter-email/enter-code']);
          }
        }]);

        return NewPasswordPage;
      }();

      _NewPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }];
      };

      _NewPasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-new-password',
        template: _raw_loader_new_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_password_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder, _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router, src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController])], _NewPasswordPage);
      /***/
    },

    /***/
    27083: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0c375f);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\nspan {\n  font-weight: 900;\n  color: #e4405f;\n}\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 40px;\n  width: 200px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.badPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n.badPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n.goodPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n.goodPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n@-webkit-keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFFRjtBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFHRjtBQURBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7VUFBQSxrREFBQTtBQUlGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FBS0Y7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO1VBQUEsa0RBQUE7QUFNRjtBQUpBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtBQU9GO0FBSkE7RUFDRTtJQUNFLDJCQUFBO0VBT0Y7RUFKQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQU1GO0FBQ0Y7QUFkQTtFQUNFO0lBQ0UsMkJBQUE7RUFPRjtFQUpBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBTUY7QUFDRiIsImZpbGUiOiJuZXctcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzMyNjtcblxuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbi5iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwMDU1YTUsICMwYzM3NWYpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZTQ0MDVmO1xufVxuLmNhbmNlbC1idXR0b24ge1xuICBjb2xvcjogI2U0NDA1ZjtcbiAgLS1iYWNrZ3JvdW5kOiAgbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2YxNWI3NywgI2U0NDA1Zik7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmJhZFBhc3N3b3JkIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gMC41cyBmb3J3YXJkcztcbn1cbi5iYWRQYXNzd29yZDpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cbi5nb29kUGFzc3dvcmQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiAwLjVzIGZvcndhcmRzO1xufVxuLmdvb2RQYXNzd29yZDpudGgtY2hpbGQoMikge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwYXNzd29yZC1pY29ucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    71187: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"small\">Create New Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"spacer ion-hide-lg-down\"></div>\n  <ion-grid class=\"ion-text-center\">\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../../../assets/icon/Logo 2.0.svg\" alt=\"\" srcset=\"\">\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"back()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n        <h6 class=\"text-header\">Please enter your new password. Your password needs to be <span>at least 8 characters long, with at least 1 uppercase letter and one number.</span></h6>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"4\">\n        <form [formGroup]=\"newPasswordForm\"(ngSubmit)=\"goToConfirmPage()\" >\n            <ion-list class=\"line-input\">\n\n            <ion-item>\n              <ion-input placeholder=\"Password\" formControlName=\"newPassword\" type=\"password\"></ion-input>\n\n                  <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                     <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                  </ion-button>\n\n                  <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                      <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\n                   </ion-button>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-input placeholder=\"Re-type Password\" formControlName=\"reTypeNewPassword\" type=\"password\"></ion-input>\n\n                  <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                     <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                  </ion-button>\n\n                  <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                      <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\n                   </ion-button>\n            </ion-item>\n\n\n            <ion-button [disabled]=\"!this.passwordsMatch\" type=\"submit\" class=\"orange-button\" >NEXT</ion-button><br>\n            <ion-button (click)=\"cancel()\" class=\"cancel-button\" slot=\"end\">\n                cancel\n            </ion-button>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_forgot-password_new-password_new-password_module_ts-es5.js.map