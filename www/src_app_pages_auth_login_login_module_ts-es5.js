(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_login_login_module_ts"], {
    /***/
    65221: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
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


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      47412);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    79456: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      65221);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      47412);

      var _LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    47412: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      32898);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      66934);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/auth.service */
      37556);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage( // private auth: AuthService,
        formBuilder, auth, loading, toast, router) {
          _classCallCheck(this, LoginPage);

          this.formBuilder = formBuilder;
          this.auth = auth;
          this.loading = loading;
          this.toast = toast;
          this.router = router;
          this.initialLoading = true;
          this.validationMessasges = {
            email: [{
              type: 'email',
              message: 'Must be a valid email address'
            }],
            password: [// tslint:disable-next-line: max-line-length
            {
              type: 'pattern',
              message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'
            }]
          };
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loginForm = this.formBuilder.group({
              email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
              password: ['Lacrosse2', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, // this is for the letters (both uppercase and lowercase) and numbers validation
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
            }); // Check if app is online

            if (window.navigator.onLine === false) {
              console.log('We are OFFLINE!');
            }

            if (window.navigator.onLine === true) {
              console.log('We are ONLINE!'); // Chrome, Edge,
            }

            ;
            var downloadFooter = document.getElementById('download-footer');
            var footerText = document.getElementById('footer-text');

            if ("onbeforeinstallprompt" in window) {
              window.addEventListener("beforeinstallprompt", function (e) {
                setTimeout(function () {
                  console.log('lol');
                }, 2000);
                e.preventDefault();
                console.log(e);
                downloadFooter.style.background = "#00c90c";
                console.log(e);
                downloadFooter.style.display = "block";
                downloadFooter.addEventListener('mouseover', function (e) {
                  downloadFooter.style.background = "#52975e";
                });
                downloadFooter.addEventListener('mouseout', function (e) {
                  downloadFooter.style.background = "#00c90c";
                });
                downloadFooter.addEventListener('click', function () {
                  _this.downloadPageLoading();
                });
                footerText.innerHTML = "<ion-icon style='font-size: 1em; animation: up-and-down 1s ease infinite forwards;' name='download-outline'></ion-icon><p style='font-size: 0.7em; margin-left: 8px; display: inline;'>Download App</p>";
                return _this.auth.downloadPrompt = e;
              });
            }
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loading.create({
                        message: 'Logging in...',
                        duration: 1000,
                        cssClass: 'success-toast',
                        keyboardClose: true
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "downloadPageLoading",
          value: function downloadPageLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.create({
                        message: '',
                        duration: 1000,
                        keyboardClose: true
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      _context2.next = 7;
                      return loading.onDidDismiss().then(function (e) {
                        _this2.router.navigateByUrl('download');
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "login",
          value: function login(data) {
            this.presentLoading();
            this.auth.login(data);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/landing']);
          }
        }, {
          key: "download",
          value: function download() {
            // this.deferredPrompt.prompt();
            this.downloadPageLoading();
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _LoginPage.propDecorators = {
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
          args: ['autoFocusInput', {
            "static": false
          }]
        }],
        initialLoadingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
          args: ['initialLoadingIcon', {
            "static": false
          }]
        }],
        initialLoadingISpinner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
          args: ['initialLoadingSpinner', {
            "static": false
          }]
        }]
      };
      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder, _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController, _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router])], _LoginPage);
      /***/
    },

    /***/
    66934: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backgound {\n  --background: linear-gradient(180deg,rgba(0,85,165, 0.7) 30%, rgba(0,85,165, 1) 100%), url('schools-small.png') no-repeat center center / cover;\n}\n\n@media only screen and (max-width: 602px) {\n  .backgound {\n    --background: linear-gradient(180deg, rgba(0,85,165, 0.7) 30%, rgb(5, 20, 34) 100%), url('schools-small.png') no-repeat center center / cover;\n    -webkit-backdrop-filter: blur(50px);\n    backdrop-filter: blur(50px);\n  }\n}\n\n#logo {\n  height: 70px;\n}\n\n.form-wrapper {\n  border-radius: 15px;\n  padding: 3em;\n  margin: 10% auto 0 auto;\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(50px);\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n}\n\n@media only screen and (max-width: 600px) {\n  .form-wrapper {\n    background: none;\n  }\n}\n\nion-footer:hover {\n  background: linear-gradient(#02850b, #02850b);\n}\n\nion-footer {\n  opacity: 1;\n  border: none;\n  border-radius: 40px 40px 0px 0px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  z-index: 9998;\n  padding-top: 10px;\n  background: #faa71b;\n  opacity: 0;\n  display: none;\n  -webkit-animation: slide-up 0.2s ease forwards;\n          animation: slide-up 0.2s ease forwards;\n}\n\nion-footer * {\n  font-size: 1.15em;\n  color: white;\n  width: 100%;\n}\n\nion-footer p {\n  font-size: 0.9em;\n  width: 100%;\n}\n\nion-footer ion-icon {\n  display: inline-block;\n  font-weight: 600;\n  margin-right: 8px;\n  -webkit-animation: up-and-down 2s ease infinite forwards;\n          animation: up-and-down 2s ease infinite forwards;\n}\n\nion-footer #dot-one {\n  -webkit-animation: flash 2s ease 0.5s infinite forwards;\n          animation: flash 2s ease 0.5s infinite forwards;\n}\n\nion-footer #dot-two {\n  -webkit-animation: flash 2s ease 1s infinite forwards;\n          animation: flash 2s ease 1s infinite forwards;\n}\n\nion-footer #dot-three {\n  -webkit-animation: flash 2s ease 1.5s infinite forwards;\n          animation: flash 2s ease 1.5s infinite forwards;\n}\n\n@-webkit-keyframes flash {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes flash {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes up-and-down {\n  0% {\n    transform: translateY(5px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(5px);\n  }\n}\n\n@keyframes up-and-down {\n  0% {\n    transform: translateY(5px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(5px);\n  }\n}\n\nion-footer p {\n  display: inline;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\nion-button {\n  margin: 8px auto;\n}\n\n#login-loading {\n  background: #0055a5;\n  height: 100vh;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation: loading-exit 500ms ease 2s forwards;\n          animation: loading-exit 500ms ease 2s forwards;\n}\n\n@-webkit-keyframes loading-exit {\n  0% {\n    height: 100vh;\n  }\n  100% {\n    height: 0vh;\n    opacity: 0;\n  }\n}\n\n@keyframes loading-exit {\n  0% {\n    height: 100vh;\n  }\n  100% {\n    height: 0vh;\n    opacity: 0;\n  }\n}\n\n#sign-up-button {\n  width: 200px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  --color: white;\n  --background: linear-gradient(#005191, #000000);\n  opacity: 0;\n}\n\n#forgot {\n  width: 200px;\n  height: 40px;\n  font-size: 1em;\n  font-weight: 700;\n  opacity: 0;\n  --background: rgb(29, 28, 28);\n  --background-hover: #474444;\n  --color: white;\n  --transition: 0.5s;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n\n.grey-button {\n  width: 200px;\n  height: 40px;\n  font-size: 1em;\n  font-weight: 700;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: #999;\n  --background:none;\n  --color: #999;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtJQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUVFLDZJQUFBO0lBQ0gsbUNBQUE7SUFDQSwyQkFBQTtFQUNDO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0QsbUNBQUE7RUFDQyw2Q0FBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxnQkFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSw2Q0FBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FBRUY7O0FBREU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFERTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7QUFHSjs7QUFERTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUFHSjs7QUFERTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUFHSjs7QUFERTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUFHSjs7QUFERTtFQUNFO0lBQ0UsVUFBQTtFQUdKO0VBREU7SUFDRSxZQUFBO0VBR0o7RUFERTtJQUNFLFVBQUE7RUFHSjtBQUNGOztBQVpFO0VBQ0U7SUFDRSxVQUFBO0VBR0o7RUFERTtJQUNFLFlBQUE7RUFHSjtFQURFO0lBQ0UsVUFBQTtFQUdKO0FBQ0Y7O0FBREU7RUFDRTtJQUNFLDBCQUFBO0VBR0o7RUFERTtJQUNFLDBCQUFBO0VBR0o7RUFERTtJQUNFLDBCQUFBO0VBR0o7QUFDRjs7QUFaRTtFQUNFO0lBQ0UsMEJBQUE7RUFHSjtFQURFO0lBQ0UsMEJBQUE7RUFHSjtFQURFO0lBQ0UsMEJBQUE7RUFHSjtBQUNGOztBQURFO0VBQ0UsZUFBQTtBQUdKOztBQUFBO0VBQ0U7SUFDRSwyQkFBQTtFQUdGO0VBQUE7SUFDRSx5QkFBQTtJQUNBLFVBQUE7RUFFRjtBQUNGOztBQVZBO0VBQ0U7SUFDRSwyQkFBQTtFQUdGO0VBQUE7SUFDRSx5QkFBQTtJQUNBLFVBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUFHRjs7QUFEQTtFQUNFO0lBQ0UsYUFBQTtFQUlGO0VBRkE7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQUlGO0FBQ0Y7O0FBWEE7RUFDRTtJQUNFLGFBQUE7RUFJRjtFQUZBO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUFJRjtBQUNGOztBQURBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUdGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ291bmQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgwLDg1LDE2NSwgMC43KSAzMCUsIHJnYmEoMCw4NSwxNjUsIDEpIDEwMCUpLCB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY2hvb2xzLXNtYWxsLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMnB4KSB7XG4gIC5iYWNrZ291bmQge1xuICAgIC8vIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9meWYtbG9naW4taW1hZ2Utc21hbGwucG5nJykgbGluZWFyLWdyYWRpZW50KCNlYjAxYTUsICNkMTM1MzEpXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsODUsMTY1LCAwLjcpIDMwJSwgcmdiKDUsIDIwLCAzNCkgMTAwJSksIHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3NjaG9vbHMtc21hbGwucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcblx0LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCk7XG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcbiAgfVxufVxuI2xvZ28ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIC8vIG1hcmdpbjogNTRweCAwIDMwcHggMDtcbn1cbi5mb3JtLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAzZW07XG4gIG1hcmdpbjogMTAlIGF1dG8gMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcblx0LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNTBweCk7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDI2cHggcmdiYSgwLDAsMCwwLjA1KTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZvcm0td3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufVxuaW9uLWZvb3Rlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDI4NTBiLCAjMDI4NTBiKTtcbn1cbmlvbi1mb290ZXIge1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHggNDBweCAwcHggMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiA5OTk4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMGM5MGMsICMwMjg1MGIpO1xuICBiYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuMnMgZWFzZSBmb3J3YXJkcztcbiAgKiB7XG4gICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGFuaW1hdGlvbjogdXAtYW5kLWRvd24gMnMgZWFzZSBpbmZpbml0ZSBmb3J3YXJkcztcbiAgfVxuICAjZG90LW9uZSB7XG4gICAgYW5pbWF0aW9uOiBmbGFzaCAycyBlYXNlIDAuNXMgaW5maW5pdGUgZm9yd2FyZHM7XG4gIH1cbiAgI2RvdC10d28ge1xuICAgIGFuaW1hdGlvbjogZmxhc2ggMnMgZWFzZSAxcyBpbmZpbml0ZSBmb3J3YXJkcztcbiAgfVxuICAjZG90LXRocmVlIHtcbiAgICBhbmltYXRpb246IGZsYXNoIDJzIGVhc2UgMS41cyBpbmZpbml0ZSBmb3J3YXJkcztcbiAgfVxuICBAa2V5ZnJhbWVzIGZsYXNoIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdXAtYW5kLWRvd24ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgfVxuICB9XG4gIHAge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmlvbi1idXR0b24ge1xuICBtYXJnaW46IDhweCBhdXRvO1xufVxuI2xvZ2luLWxvYWRpbmcge1xuICBiYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWV4aXQgNTAwbXMgZWFzZSAycyBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgbG9hZGluZy1leGl0IHtcbiAgMCUge1xuICAgIGhlaWdodDogMTAwdmhcbiAgfVxuICAxMDAlIHtcbiAgICBoZWlnaHQ6IDB2aDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbiNzaWduLXVwLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDUxOTEsICMwMDAwMDApO1xuICBvcGFjaXR5OiAwO1xufVxuXG4jZm9yZ290IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBvcGFjaXR5OiAwO1xuICAtLWJhY2tncm91bmQ6IHJnYigyOSwgMjgsIDI4KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNDc0NDQ0O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS10cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxLjVzIGZvcndhcmRzO1xufVxuXG4uZ3JleS1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItY29sb3I6ICM5OTk7XG4gIC0tYmFja2dyb3VuZDpub25lO1xuICAtLWNvbG9yOiAjOTk5O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    32898: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!-- Loading -->\n<!-- <ion-content>\n  <ion-grid>\n    <ion-row style=\"margin-top: 17%;\" class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col class=\"ion-text-center\" size=\"6\">\n        <img #initialLoadingIcon src=\"../../../../assets/icons/icon-72x72.png\" alt=\"\" srcset=\"\"><br>\n        <ion-spinner #initialLoadingSpinner style=\"--color: #0055a5;\" name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content> -->\n\n\n<!-- When done loading -->\n<ion-content class=\"backgound\">\n  <div *ngIf=\"initialLoading\" id=\"login-loading\">\n    <div>\n      <img height=\"90\" src=\"../../../../assets/icon/icon-192x192-white.png\" alt=\"\" srcset=\"\"><br>\n      <ion-spinner style=\"color: white; margin-top: 20px; position: relative; left: 30px;\" name=\"bubbles\"></ion-spinner>\n    </div>\n  </div>\n  <ion-grid>\n    <!-- Form -->\n    <!-- <div class=\"spacer ion-hide-lg-down\"></div> -->\n    <!-- <div class=\"spacer\"></div> -->\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col style=\"padding: 2em\" class=\"ion-text-center form-wrapper\" size-xs=\"11\" size-sm=\"10\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\">\n        <img class=\"ion-hide-sm-up\" id=\"logo\" src=\"../../../../assets/icon/White-FYF-LOGO.png\"/>\n        <img class=\"ion-hide-sm-down\" id=\"logo\" src=\"../../../../assets/icon/Logo 2.0.png\"/>\n          <form  [formGroup]=\"loginForm\"\n                 (ngSubmit)=\"login(this.loginForm.value)\">\n            <ion-list class=\"line-input\">\n            <ion-item>\n              <!-- Email -->\n                <ion-input\n                  required\n                  placeholder=\"Email\"\n                  inputmode=\"email\"\n                  formControlName=\"email\"\n                  type=\"email\"\n                  (keyup.enter)=\"login(this.loginForm.value)\">\n                </ion-input>\n            </ion-item>\n            <!-- Email Validation-->\n            <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"loginForm\n                      .get('email')\n                      .hasError(validation.type) && (loginForm.get('email')\n                      .dirty || loginForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n            </div>\n\n          <!-- Password -->\n          <ion-item>\n              <ion-input\n                required\n                placeholder=\"Password\"\n                inputmode=\"text\"\n                formControlName=\"password\"\n                type=\"password\"\n                (keyup.enter)=\"login(this.loginForm.value)\">\n              </ion-input>\n          </ion-item>\n\n          <!-- Password Validation-->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessasges.password\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n            </ion-list>\n\n              <!-- Login Button -->\n              <ion-col size=\"12\">\n                <ion-button class=\"orange-button\" type=\"submit\">Login</ion-button><br>\n                <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\n                </ion-button><br>\n                <ion-button [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password</ion-button>\n              </ion-col>\n\n              <!-- UW Logo -->\n              <ion-col size=\"12\">\n                <br>\n                <img height=\"80\" style=\"margin-top: 50px;\" src=\"../../../../assets/logos/UWSEM-Color.png\" alt=\"United Way Southeastern Michigan\" srcset=\"\">\n              </ion-col>\n            </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-- (click)=\"download()\" -->\n<ion-footer id=\"download-footer\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <div id=\"footer-text\">\n              <p style=\"font-size: 0.9em;\">Preparing Download </p>\n              <span id=\"dot-one\">.</span>\n              <span id=\"dot-two\">.</span>\n              <span id=\"dot-three\">.</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts-es5.js.map