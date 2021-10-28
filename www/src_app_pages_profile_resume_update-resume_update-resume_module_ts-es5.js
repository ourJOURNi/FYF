(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_resume_update-resume_update-resume_module_ts"], {
    /***/
    33089: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UpdateResumePageRoutingModule": function UpdateResumePageRoutingModule() {
          return (
            /* binding */
            _UpdateResumePageRoutingModule
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


      var _update_resume_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./update-resume.page */
      70350);

      var routes = [{
        path: '',
        component: _update_resume_page__WEBPACK_IMPORTED_MODULE_0__.UpdateResumePage
      }];

      var _UpdateResumePageRoutingModule = function UpdateResumePageRoutingModule() {
        _classCallCheck(this, UpdateResumePageRoutingModule);
      };

      _UpdateResumePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UpdateResumePageRoutingModule);
      /***/
    },

    /***/
    58939: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UpdateResumePageModule": function UpdateResumePageModule() {
          return (
            /* binding */
            _UpdateResumePageModule
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


      var _update_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./update-resume-routing.module */
      33089);
      /* harmony import */


      var _update_resume_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./update-resume.page */
      70350);

      var _UpdateResumePageModule = function UpdateResumePageModule() {
        _classCallCheck(this, UpdateResumePageModule);
      };

      _UpdateResumePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _update_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateResumePageRoutingModule],
        declarations: [_update_resume_page__WEBPACK_IMPORTED_MODULE_1__.UpdateResumePage]
      })], _UpdateResumePageModule);
      /***/
    },

    /***/
    70350: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UpdateResumePage": function UpdateResumePage() {
          return (
            /* binding */
            _UpdateResumePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_update_resume_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./update-resume.page.html */
      5380);
      /* harmony import */


      var _update_resume_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./update-resume.page.scss */
      78842);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/profile.service */
      39181);
      /* harmony import */


      var _services_resume_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/resume.service */
      14153);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _UpdateResumePage = /*#__PURE__*/function () {
        function UpdateResumePage(resume, router, profile, alert, toast, loading) {
          _classCallCheck(this, UpdateResumePage);

          this.resume = resume;
          this.router = router;
          this.profile = profile;
          this.alert = alert;
          this.toast = toast;
          this.loading = loading;
          this.userProPicUrl = this.profile.resume.getValue();
          this.awsPrefix = this.userProPicUrl.slice(-51);
        }

        _createClass(UpdateResumePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.profile.getUserDetails().subscribe(function (data) {
              _this.userEmail = data['email'];
              console.log(_this.userEmail);
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
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
                        _context.next = 11;
                        return this.router.navigate(['/home/profile/view-resume']);

                      case 11:
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

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return UpdateResumePage;
      }();

      _UpdateResumePage.ctorParameters = function () {
        return [{
          type: _services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }];
      };

      _UpdateResumePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-resume',
        template: _raw_loader_update_resume_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_update_resume_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService, _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController])], _UpdateResumePage);
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
    78842: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.text-header {\n  background: #e4ebf1;\n}\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1yZXN1bWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUo7QUFFRTtFQUNFLGtCQUFBO0FBQ0oiLCJmaWxlIjoidXBkYXRlLXJlc3VtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVza3RvcC10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzI2O1xuXG4gIGgxIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgfVxufVxuLmJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwNTVhNSwgIzBkMmU0ZCk7XG4gIGhlaWdodDogMjRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGV4dC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAyMzUsIDI0MSk7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIH1cblxuICBpbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4iXX0= */";
      /***/
    },

    /***/
    5380: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Update Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n     <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n       <ion-toolbar class=\"desktop-toolbar\">\n             <ion-buttons slot=\"start\">\n                 <h1>Update Resume </h1>\n             </ion-buttons>\n             <ion-buttons slot=\"end\">\n               <ion-button class=\"back-button\" (click)=\"goBack()\">\n                 Back\n               </ion-button>\n             </ion-buttons>\n       </ion-toolbar>\n           <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n           <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n     </ion-col>\n   </ion-row>\n\n   <ion-row class=\"ion-justify-content-center\">\n    <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\n      <h6 class=\"text-header\">Please upload a resume from your phone</h6>\n    </ion-col>\n  </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"4\">\n        <!-- Need to express to User formats that are acceptable -->\n        <!-- pdf, ect -->\n        <form\n        (ngSubmit)=\"uploadResume()\" id=\"changeResumeForm\">\n          <input\n            name=\"resume-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Resume\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!uploadedPhotoURL\">Update\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_profile_resume_update-resume_update-resume_module_ts-es5.js.map