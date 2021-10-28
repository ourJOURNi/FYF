(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_sign-up_upload-resume_upload-resume_module_ts"], {
    /***/
    7015: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UploadResumePageRoutingModule": function UploadResumePageRoutingModule() {
          return (
            /* binding */
            _UploadResumePageRoutingModule
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


      var _upload_resume_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./upload-resume.page */
      179);

      var routes = [{
        path: '',
        component: _upload_resume_page__WEBPACK_IMPORTED_MODULE_0__.UploadResumePage
      }, {
        path: 'login-credentials',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_auth_sign-up_login-credentials_login-credentials_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../login-credentials/login-credentials.module */
          75095)).then(function (m) {
            return m.LoginCredentialsPageModule;
          });
        }
      }];

      var _UploadResumePageRoutingModule = function UploadResumePageRoutingModule() {
        _classCallCheck(this, UploadResumePageRoutingModule);
      };

      _UploadResumePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UploadResumePageRoutingModule);
      /***/
    },

    /***/
    4607: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UploadResumePageModule": function UploadResumePageModule() {
          return (
            /* binding */
            _UploadResumePageModule
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


      var _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./upload-resume-routing.module */
      7015);
      /* harmony import */


      var _upload_resume_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./upload-resume.page */
      179);

      var _UploadResumePageModule = function UploadResumePageModule() {
        _classCallCheck(this, UploadResumePageModule);
      };

      _UploadResumePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadResumePageRoutingModule],
        declarations: [_upload_resume_page__WEBPACK_IMPORTED_MODULE_1__.UploadResumePage]
      })], _UploadResumePageModule);
      /***/
    },

    /***/
    179: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UploadResumePage": function UploadResumePage() {
          return (
            /* binding */
            _UploadResumePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_upload_resume_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./upload-resume.page.html */
      32397);
      /* harmony import */


      var _upload_resume_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./upload-resume.page.scss */
      37053);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/auth.service */
      37556);
      /* harmony import */


      var _services_resume_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/resume.service */
      14153);

      var _UploadResumePage = /*#__PURE__*/function () {
        function UploadResumePage(router, alertController, auth, resume, toastController) {
          _classCallCheck(this, UploadResumePage);

          this.router = router;
          this.alertController = alertController;
          this.auth = auth;
          this.resume = resume;
          this.toastController = toastController;
        }

        _createClass(UploadResumePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getFormData",
          value: function getFormData(event) {
            var _this = this;

            var formElement = document.querySelectorAll('form');
            formElement.forEach(function (form) {
              if (form.id === 'resume-form') {
                console.log('Got Form: ');
                _this.formData = new FormData(form);
                console.log(event);
              }
            });
          }
        }, {
          key: "uploadResume",
          value: function uploadResume() {
            if (this.formData == undefined) {
              return this.noResumeToast();
            } else {
              this.resume.resumeUpload(this.formData);
            }
          }
        }, {
          key: "noResumeToast",
          value: function noResumeToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Please upload a Resume, or Skip',
                        cssClass: 'danger-toast',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getFileFromPhone",
          value: function getFileFromPhone() {
            console.error("TODO: getFileFromPhone() not implemented yet");
          }
        }, {
          key: "back",
          value: function back() {
            console.log('Sign up cancelled');
            this.router.navigate(['/personal-info/profile-picture']);
          }
        }, {
          key: "skip",
          value: function skip() {
            console.log('Skipping to Upload Resume >>');
            this.presentAlert();
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Skip',
                        message: 'Are you sure you want to skip? You can always upload a Resume in the future by going to your Profile.',
                        buttons: [{
                          text: 'Skip',
                          handler: function handler() {
                            // Get Default Picture Logo
                            _this2.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelling Resume Upload Skip...');
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return UploadResumePage;
      }();

      _UploadResumePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }];
      };

      _UploadResumePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-upload-resume',
        template: _raw_loader_upload_resume_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_upload_resume_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController, _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController])], _UploadResumePage);
      /***/
    },

    /***/
    14153: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResumeService": function ResumeService() {
          return (
            /* binding */
            _ResumeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      37556);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ResumeService = /*#__PURE__*/function () {
        function ResumeService(http, toast, auth, router) {
          _classCallCheck(this, ResumeService);

          this.http = http;
          this.toast = toast;
          this.auth = auth;
          this.router = router;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        }

        _createClass(ResumeService, [{
          key: "resumeUpload",
          value: function resumeUpload(resumeForm) {
            var _this3 = this;

            console.log('resume uploading');
            return this.http.post("".concat(this.BACKEND_URL, "/api/resume/upload-resume"), resumeForm).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (e) {
              console.log(e.error.msg);

              if (e.error.msg === 'File needs to be a .pdf file') {
                _this3.wrongFileTypeToast('Resume needs to be a .pdf file.');

                return e;
              }
            })).subscribe(function (data) {
              console.log(data['objectUrl']);
              return _this3.goToCredentialsPage(data['objectUrl']);
            });
          }
        }, {
          key: "wrongFileTypeToast",
          value: function wrongFileTypeToast(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toast.create({
                        message: msg,
                        duration: 2000,
                        cssClass: 'danger-toast'
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
          key: "goToCredentialsPage",
          value: function goToCredentialsPage(resume) {
            this.auth.getResume(resume);
            console.log('Going to Credentials Page');
            this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
          }
        }, {
          key: "changeResume",
          value: function changeResume(imageForm) {
            console.log(imageForm);
            return this.http.post("".concat(this.BACKEND_URL, "/api/resume/change-resume"), imageForm);
          }
        }]);

        return ResumeService;
      }();

      _ResumeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _ResumeService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController, _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router])], _ResumeService);
      /***/
    },

    /***/
    37053: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0c375f);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.get-resume-button {\n  --background: #1FCC6D;\n  --color: white;\n  height: 50px;\n  font-weight: 600;\n  margin: 32px auto;\n}\n.cancel-button {\n  color: #e4405f;\n  --background: linear-gradient(#fdfbfb, #fff7f8);\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 50px;\n  width: 200px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.cancel-button:hover {\n  color: white;\n}\n.no-resume {\n  background: rgba(13, 70, 123, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 1.5s forwards;\n          animation: slide-up 0.5s ease 1.5s forwards;\n}\n.uploaded-resume {\n  background: rgba(33, 223, 130, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  transition: 0.5s;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s ease 0.5s forwards;\n          animation: slide-up 0.5s ease 0.5s forwards;\n}\n.get-file {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 130px;\n  margin: 30px auto;\n}\nspan {\n  font-weight: 900;\n  font-size: 1em;\n  color: #e3405f;\n}\n.skip-button {\n  display: block;\n  border: none;\n  --background: rgb(230, 230, 230);\n  color: #888;\n  width: 200px;\n  margin: 8px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\ninput[type=file] {\n  background: #1FCC6D;\n  color: white;\n  height: 39px;\n  font-weight: 600;\n  margin: 32px auto;\n  padding-top: 13px;\n  border-radius: 5px;\n}\ninput[type=file]:hover {\n  background: linear-gradient(#1FCC6D, #46fa94);\n  color: white;\n}\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1yZXN1bWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7QUFDRjtBQUNBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtBQUVGO0FBQ0E7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQUVBO0FBQ0E7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQUVGO0FBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUdGO0FBREE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBSUY7QUFGQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsWUFBQTtBQUtGO0FBRkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLRjtBQUZBO0VBQ0UsNkNBQUE7RUFDQSxZQUFBO0FBS0Y7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7QUFEQTtFQUNFO0lBQ0UsNEJBQUE7RUFJRjtFQURBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBR0Y7QUFDRjtBQVhBO0VBQ0U7SUFDRSw0QkFBQTtFQUlGO0VBREE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFHRjtBQUNGIiwiZmlsZSI6InVwbG9hZC1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzMyNjtcblxuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbi5iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwMDU1YTUsICMwYzM3NWYpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdldC1yZXN1bWUtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMUZDQzZEO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAvLyBib3JkZXI6IDJweCBkb3R0ZWQgIzFGQ0M2RDtcbiAgbWFyZ2luOiAzMnB4IGF1dG87XG59XG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQoI2ZkZmJmYiwgI2ZmZjdmOCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNmMTViNzcsICNlNDQwNWYpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNhbmNlbC1idXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uby1yZXN1bWUge1xuYmFja2dyb3VuZDogcmdiYSgxMyw3MCwxMjMsMC4xKTtcbmZvbnQtc2l6ZTogMC44ZW07XG5wYWRkaW5nOiAyMHB4O1xubWFyZ2luOiA2MHB4IDAgNjBweCAwO1xudHJhbnNpdGlvbjogMC41cztcbm9wYWNpdHk6IDA7XG5hbmltYXRpb246IHNsaWRlLXVwIDAuNXMgZWFzZSAxLjVzIGZvcndhcmRzO1xufVxuXG4udXBsb2FkZWQtcmVzdW1lIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzMywyMjMsMTMwLDAuMSk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogNjBweCAwIDYwcHggMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMC41cyBmb3J3YXJkcztcbn1cbi5nZXQtZmlsZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci13aWR0aCA6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXI6IDFweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cbnNwYW4ge1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNlMzQwNWY7XG59XG4uc2tpcC1idXR0b257XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzMCwgMjMwLCAyMzApO1xuICBjb2xvcjogIzg4ODtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDhweCBhdXRvO1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGJhY2tncm91bmQ6ICMxRkNDNkQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzOXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDMycHggYXV0bztcbiAgcGFkZGluZy10b3A6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW5wdXRbdHlwZT1maWxlXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMUZDQzZELCAjNDZmYTk0KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    32397: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <img style=\"margin-right: 16px;\" height=\"32\" src=\"../../../../../assets/icon/fyf-white-icon.svg\">\n    </ion-buttons>\n    <ion-title size=\"small\">Upload Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <div class=\"spacer ion-hide-lg-down\"></div>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../../../assets/icon/Logo 2.0.svg\" alt=\"\" srcset=\"\">\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"back()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n\n    <!-- Header -->\n    <ion-row class=\"ion-justify-content-center header\">\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <h6 class=\"text-header\">Please upload your Resume. <br><span>Must be a .pdf file.</span></h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n        <form id=\"resume-form\" (ngSubmit)=\"uploadResume()\">\n\n          <input class=\"get-resume-button\" name=\"resume\" (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n          type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            style=\"display: block;\">\n          NEXT</ion-button>\n        </form>\n\n        <!-- <ion-button class=\"blue-button skip-button\"  (click)=\"skip()\">\n          Skip\n        </ion-button> -->\n        <ion-button (click)=\"this.auth.cancelSignUp()\" class=\"cancel-button\">\n            Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_sign-up_upload-resume_upload-resume_module_ts-es5.js.map