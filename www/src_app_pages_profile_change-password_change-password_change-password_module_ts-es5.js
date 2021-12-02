(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_change-password_change-password_change-password_module_ts"], {
    /***/
    8252:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/change-password/change-password-routing.module.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePasswordPageRoutingModule": function ChangePasswordPageRoutingModule() {
          return (
            /* binding */
            _ChangePasswordPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _change_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-password.page */
      14948);

      var routes = [{
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPage
      }, {
        path: 'confirm',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_profile_change-password_confirm_confirm_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../confirm/confirm.module */
          86439)).then(function (m) {
            return m.ConfirmPageModule;
          });
        }
      }];

      var _ChangePasswordPageRoutingModule = function ChangePasswordPageRoutingModule() {
        _classCallCheck(this, ChangePasswordPageRoutingModule);
      };

      _ChangePasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ChangePasswordPageRoutingModule);
      /***/
    },

    /***/
    79363:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/change-password/change-password.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePasswordPageModule": function ChangePasswordPageModule() {
          return (
            /* binding */
            _ChangePasswordPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-password-routing.module */
      8252);
      /* harmony import */


      var _change_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-password.page */
      14948);

      var _ChangePasswordPageModule = function ChangePasswordPageModule() {
        _classCallCheck(this, ChangePasswordPageModule);
      };

      _ChangePasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordPage]
      })], _ChangePasswordPageModule);
      /***/
    },

    /***/
    14948:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/change-password/change-password.page.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePasswordPage": function ChangePasswordPage() {
          return (
            /* binding */
            _ChangePasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./change-password.page.html */
      60366);
      /* harmony import */


      var _change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-password.page.scss */
      3980);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/auth.service */
      37556);
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/profile.service */
      39181);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _ChangePasswordPage = /*#__PURE__*/function () {
        function ChangePasswordPage(formBuilder, router, auth, alertController, profile) {
          _classCallCheck(this, ChangePasswordPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.auth = auth;
          this.alertController = alertController;
          this.profile = profile;
          this.activeEmail = '';
          this.passwordsMatch = false;
          this.validationMessasges = {
            password: [{
              type: 'password',
              message: 'Please enter a valid password.'
            }]
          };
          this.activeEmail = this.auth.user.email;
        }

        _createClass(ChangePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changePassword = this.formBuilder.group({
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, // at least 1 number, 1 uppercase letter, and one lowercase letter
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
              reTypeNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, // at least 1 number, 1 uppercase letter, and one lowercase letter
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
            });
            this.formOnChanges();
          }
        }, {
          key: "formOnChanges",
          value: function formOnChanges() {
            var _this = this;

            console.log(this.changePassword);
            this.changePassword.valueChanges.subscribe(function (data) {
              console.log(data);

              _this.changePassword.statusChanges.subscribe(function (status) {
                console.log(status);

                if (status === 'VALID') {
                  _this.passwordsMatch = true;
                }
              });

              if (_this.changePassword.controls.newPassword.value === _this.changePassword.controls.reTypeNewPassword.value && _this.changePassword.controls.newPassword.touched) {
                console.log('Passwords Match');
              }

              if (_this.changePassword.controls.newPassword.value !== _this.changePassword.controls.reTypeNewPassword.value) {
                console.log('Passwords dont match');
                _this.passwordsMatch = false;
              }
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'danger-alert',
                        header: 'Invalid Password',
                        message: 'New password cannot be the same as the current one.',
                        buttons: [{
                          text: 'OK'
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "confirmChangedPassword",
          value: function confirmChangedPassword(oldPassword, newPassword, reTypeNewPassword) {
            if (oldPassword == newPassword) {
              // Show an alert telling the user that they can't use the same email
              this.presentAlert();
            } else {
              this.profile.changePassword(this.activeEmail, oldPassword, newPassword, reTypeNewPassword);
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ChangePasswordPage;
      }();

      _ChangePasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService
        }];
      };

      _ChangePasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-change-password',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder, _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router, _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController, _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService])], _ChangePasswordPage);
      /***/
    },

    /***/
    60366:
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/change-password/change-password/change-password.page.html ***!
      \********************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-text-center\">\n      \n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <h1>Change Password</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"goBack()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\n        <h6 class=\"text-header\">Change your password below.</h6>\n      </ion-col>\n    </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"4\">\n            <form \n             (ngSubmit)=\"confirmChangedPassword(\n              this.changePassword.controls.password.value,\n              this.changePassword.controls.newPassword.value,\n              this.changePassword.controls.reTypeNewPassword.value)\"\n            [formGroup]=\"changePassword\">\n\n\n            <ion-list class=\"line-input\">\n                <!-- Email -->\n                <ion-item>\n                  <ion-input\n                    required\n                    placeholder=\"Current password\"\n                    formControlName=\"password\"\n                    type=\"password\"\n                    (keyup.enter)=\"passwordsMatch ? confirmChangedPassword(this.changePassword.controls.password.value, this.changePassword.controls.newPassword.value, this.changePassword.controls.reTypeNewPassword.value) : null\">\n                  </ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"New Password\"\n                      formControlName=\"newPassword\"\n                      type=\"password\"\n                      (keyup.enter)=\"passwordsMatch ? confirmChangedPassword(this.changePassword.controls.password.value, this.changePassword.controls.newPassword.value, this.changePassword.controls.reTypeNewPassword.value) : null\">\n                    </ion-input>\n\n                    <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                        <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                    </ion-button>\n\n                     <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                         <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\n                    </ion-button>\n                </ion-item>\n                \n                <!-- Password Validation-->\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                      <div class=\"error-message\"\n                        *ngIf=\"changePassword\n                          .get('newPassword')\n                          .hasError('pattern') && (changePassword.get('newPassword')\n                          .dirty || changePassword.get('newPassword').touched)\">\n                        {{ validation.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n\n  \n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"Re-Type New Password\"\n                      formControlName=\"reTypeNewPassword\"\n                      type=\"password\"\n                      (keyup.enter)=\"passwordsMatch ? confirmChangedPassword(this.changePassword.controls.password.value, this.changePassword.controls.newPassword.value, this.changePassword.controls.reTypeNewPassword.value) : null\">\n                    </ion-input>\n\n                    <ion-button *ngIf=\"!passwordsMatch\" class=\"badPassword\" item-right>\n                        <ion-icon style=\"color: #FF443B;\" name=\"close\"> </ion-icon>\n                    </ion-button>\n\n                     <ion-button *ngIf=\"passwordsMatch\" class=\"goodPassword\" item-right>\n                         <ion-icon style=\"color: #21df82;\" name=\"checkmark\"> </ion-icon>\n                    </ion-button>\n                </ion-item>\n              </ion-list>\n\n              <!-- Password Validation-->\n              <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                    <div class=\"error-message\"\n                      *ngIf=\"changePassword\n                        .get('reTypeNewPassword')\n                        .hasError('pattern') && (changePassword.get('reTypeNewPassword')\n                        .dirty || changePassword.get('reTypeNewPassword').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n                </div>\n\n                <ion-button \n                [disabled]=\"!passwordsMatch\" \n                type=\"submit\" class=\"orange-button\" style=\"width: unset;\">CHANGE PASSWORD</ion-button>\n\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n";
      /***/
    },

    /***/
    3980:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/profile/change-password/change-password/change-password.page.scss ***!
      \*****************************************************************************************/

    /***/
    function _(module) {
      module.exports = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.text-header {\n  background: #e4ebf1;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.badPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n.badPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n.goodPassword {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in 0.5s forwards;\n          animation: password-icons 1s ease-in 0.5s forwards;\n}\n.goodPassword:nth-child(2) {\n  --background: none;\n  opacity: 0;\n  -webkit-animation: password-icons 1s ease-in forwards;\n          animation: password-icons 1s ease-in forwards;\n}\n@-webkit-keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@keyframes password-icons {\n  0% {\n    transform: translateX(50px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBRUE7RUFDRSxtQkFBQTtBQUNGO0FBQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUFHRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7VUFBQSxrREFBQTtBQUdGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FBR0Y7QUFBQTtFQUNFO0lBQ0UsMkJBQUE7RUFHRjtFQUFBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBRUY7QUFDRjtBQVZBO0VBQ0U7SUFDRSwyQkFBQTtFQUdGO0VBQUE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFFRjtBQUNGIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVza3RvcC10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzI2O1xuXG4gIGgxIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgfVxufVxuLnRleHQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiKDIyOCwgMjM1LCAyNDEpO1xufVxuLmJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwNTVhNSwgIzBkMmU0ZCk7XG4gIGhlaWdodDogMjRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYmFkUGFzc3dvcmQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiAwLjVzIGZvcndhcmRzO1xufVxuXG4uYmFkUGFzc3dvcmQ6bnRoLWNoaWxkKDIpIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHBhc3N3b3JkLWljb25zIDFzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbi5nb29kUGFzc3dvcmQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogcGFzc3dvcmQtaWNvbnMgMXMgZWFzZS1pbiAwLjVzIGZvcndhcmRzO1xufVxuXG4uZ29vZFBhc3N3b3JkOm50aC1jaGlsZCgyKSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBwYXNzd29yZC1pY29ucyAxcyBlYXNlLWluIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHBhc3N3b3JkLWljb25zIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MHB4KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_profile_change-password_change-password_change-password_module_ts-es5.js.map