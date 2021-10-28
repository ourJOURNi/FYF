(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["default-src_app_modals_upload-resume-modal_upload-resume-modal_module_ts"], {
    /***/
    2831: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UploadResumeModalPageRoutingModule": function UploadResumeModalPageRoutingModule() {
          return (
            /* binding */
            _UploadResumeModalPageRoutingModule
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


      var _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./upload-resume-modal.page */
      84455);

      var routes = [{
        path: '',
        component: _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_0__.UploadResumeModalPage
      }];

      var _UploadResumeModalPageRoutingModule = function UploadResumeModalPageRoutingModule() {
        _classCallCheck(this, UploadResumeModalPageRoutingModule);
      };

      _UploadResumeModalPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UploadResumeModalPageRoutingModule);
      /***/
    },

    /***/
    49969: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UploadResumeModalPageModule": function UploadResumeModalPageModule() {
          return (
            /* binding */
            _UploadResumeModalPageModule
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


      var _upload_resume_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./upload-resume-modal-routing.module */
      2831);
      /* harmony import */


      var _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./upload-resume-modal.page */
      84455);

      var _UploadResumeModalPageModule = function UploadResumeModalPageModule() {
        _classCallCheck(this, UploadResumeModalPageModule);
      };

      _UploadResumeModalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _upload_resume_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadResumeModalPageRoutingModule],
        declarations: [_upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_1__.UploadResumeModalPage]
      })], _UploadResumeModalPageModule);
      /***/
    },

    /***/
    84455: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UploadResumeModalPage": function UploadResumeModalPage() {
          return (
            /* binding */
            _UploadResumeModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_upload_resume_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./upload-resume-modal.page.html */
      12443);
      /* harmony import */


      var _upload_resume_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./upload-resume-modal.page.scss */
      93306);
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


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/resume.service */
      14153);

      var _UploadResumeModalPage = /*#__PURE__*/function () {
        function UploadResumeModalPage(resume, router, profile, alert, modal, toast, loading) {
          _classCallCheck(this, UploadResumeModalPage);

          this.resume = resume;
          this.router = router;
          this.profile = profile;
          this.alert = alert;
          this.modal = modal;
          this.toast = toast;
          this.loading = loading;
          this.userProPicUrl = this.profile.resume.getValue();
          this.awsPrefix = this.userProPicUrl.slice(-51);
        }

        _createClass(UploadResumeModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.profile.getUserDetails().subscribe(function (data) {
              _this.userEmail = data['email'];
              console.log(_this.userEmail);
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/profile/view-resume']);
          }
        }, {
          key: "getFormData",
          value: function getFormData(event) {
            var _this2 = this;

            var formElement = document.querySelectorAll('form');
            formElement.forEach(function (form) {
              if (form.id === 'changeResumeForm') {
                console.log('Got Form: ' + form);
                _this2.formData = new FormData(form);
                _this2.uploadedResume = true;
              }
            });
            console.log(this.formData);
            var reader = new FileReader();
            reader.addEventListener('load', function () {
              // convert image file to base64 string
              _this2.uploadedPhotoURL = reader.result;
            }, false);

            if (formElement) {
              reader.readAsDataURL(event.target.files[0]);
            }
          }
        }, {
          key: "uploadResume",
          value: function uploadResume() {
            var _this3 = this;

            var formElement = document.querySelectorAll('form');
            formElement.forEach(function (form) {
              if (form.id === 'changeResumeForm') {
                console.log('Got Form: ' + form);
                _this3.formData = new FormData(form);

                _this3.formData.append('oldResumeKey', _this3.awsPrefix);

                _this3.formData.append('email', _this3.userEmail);
              }
            });
            this.resume.changeResume(this.formData).subscribe(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var newResume;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(data);
                        newResume = data['objectUrl'];
                        console.log(newResume);
                        _context.next = 5;
                        return this.presentLoading();

                      case 5:
                        _context.next = 7;
                        return this.profile.resume.next(newResume);

                      case 7:
                        _context.next = 9;
                        return this.presentToast();

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toast.create({
                        message: 'Your Resume has been changed',
                        animated: true,
                        cssClass: 'updated-toast',
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
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.create({
                        cssClass: 'my-custom-class',
                        message: 'Updating Resume...',
                        duration: 1000
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      _context3.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context3.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');
                      this.modal.dismiss();

                    case 12:
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
            this.modal.dismiss();
          }
        }]);

        return UploadResumeModalPage;
      }();

      _UploadResumeModalPage.ctorParameters = function () {
        return [{
          type: src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }];
      };

      _UploadResumeModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-upload-resume-modal',
        template: _raw_loader_upload_resume_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_upload_resume_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService, _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController])], _UploadResumeModalPage);
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
            var _this4 = this;

            console.log('resume uploading');
            return this.http.post("".concat(this.BACKEND_URL, "/api/resume/upload-resume"), resumeForm).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (e) {
              console.log(e.error.msg);

              if (e.error.msg === 'File needs to be a .pdf file') {
                _this4.wrongFileTypeToast('Resume needs to be a .pdf file.');

                return e;
              }
            })).subscribe(function (data) {
              console.log(data['objectUrl']);
              return _this4.goToCredentialsPage(data['objectUrl']);
            });
          }
        }, {
          key: "wrongFileTypeToast",
          value: function wrongFileTypeToast(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toast.create({
                        message: msg,
                        duration: 2000,
                        cssClass: 'danger-toast'
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
    93306: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1yZXN1bWUtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUlBO0VBQ0Usa0JBQUE7QUFERiIsImZpbGUiOiJ1cGxvYWQtcmVzdW1lLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogIzAwNTE5MSAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cblxuaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */";
      /***/
    },

    /***/
    12443: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Update Resume</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.8\" size=\"2.5\">\n        <h1>Update Resume</h1>\n      </ion-col>\n      <ion-col push=\"2.5\" size=\"2\">\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"6\">\n        <hr style=\"background: #666;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n        <!-- Need to express to User formats that are acceptable -->\n        <!-- pdf, ect -->\n        <p class=\"text-header\">Please upload a resume from your phone</p>\n        <form\n        (ngSubmit)=\"uploadResume()\" id=\"changeResumeForm\">\n          <input\n            name=\"resume-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Resume\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!uploadedPhotoURL\">Submit\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_modals_upload-resume-modal_upload-resume-modal_module_ts-es5.js.map