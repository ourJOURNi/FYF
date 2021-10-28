(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_change-profile-picture_change-profile-picture_change-profile-picture_mo-0385bc"], {
    /***/
    60717: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeProfilePicturePageRoutingModule": function ChangeProfilePicturePageRoutingModule() {
          return (
            /* binding */
            _ChangeProfilePicturePageRoutingModule
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


      var _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-profile-picture.page */
      4070);

      var routes = [{
        path: '',
        component: _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_0__.ChangeProfilePicturePage
      }, {
        path: 'confirm',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_profile_change-profile-picture_confirm_confirm_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../confirm/confirm.module */
          73804)).then(function (m) {
            return m.ConfirmPageModule;
          });
        }
      }];

      var _ChangeProfilePicturePageRoutingModule = function ChangeProfilePicturePageRoutingModule() {
        _classCallCheck(this, ChangeProfilePicturePageRoutingModule);
      };

      _ChangeProfilePicturePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ChangeProfilePicturePageRoutingModule);
      /***/
    },

    /***/
    90416: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeProfilePicturePageModule": function ChangeProfilePicturePageModule() {
          return (
            /* binding */
            _ChangeProfilePicturePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _change_profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-profile-picture-routing.module */
      60717);
      /* harmony import */


      var _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-profile-picture.page */
      4070);
      /* harmony import */


      var src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modals/image-cropper/image-cropper.module */
      72228);

      var _ChangeProfilePicturePageModule = function ChangeProfilePicturePageModule() {
        _classCallCheck(this, ChangeProfilePicturePageModule);
      };

      _ChangeProfilePicturePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _change_profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeProfilePicturePageRoutingModule, src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_2__.ImageCropperPageModule],
        declarations: [_change_profile_picture_page__WEBPACK_IMPORTED_MODULE_1__.ChangeProfilePicturePage]
      })], _ChangeProfilePicturePageModule);
      /***/
    },

    /***/
    4070: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeProfilePicturePage": function ChangeProfilePicturePage() {
          return (
            /* binding */
            _ChangeProfilePicturePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_change_profile_picture_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./change-profile-picture.page.html */
      41774);
      /* harmony import */


      var _change_profile_picture_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-profile-picture.page.scss */
      85038);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/profile.service */
      39181);
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/photo.service */
      61957);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      92340);
      /* harmony import */


      var src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modals/image-cropper/image-cropper.page */
      64151);
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      50806);
      /* harmony import */


      var src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/emitters/single-post-page-emitter.service */
      20147);

      var _ChangeProfilePicturePage = /*#__PURE__*/function () {
        function ChangeProfilePicturePage(photo, router, profile, alert, modal, toast, loading, postEmitter, singlePostEmitterService) {
          _classCallCheck(this, ChangeProfilePicturePage);

          this.photo = photo;
          this.router = router;
          this.profile = profile;
          this.alert = alert;
          this.modal = modal;
          this.toast = toast;
          this.loading = loading;
          this.postEmitter = postEmitter;
          this.singlePostEmitterService = singlePostEmitterService;
          this.imageUrl = this.profile.profilePicture.getValue();
          this.uploadedPhoto = false;
          this.awsPrefix = this.imageUrl.slice(-51);
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.url;
        }

        _createClass(ChangeProfilePicturePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.profile.getUserDetails().subscribe(function (data) {
              _this.userEmail = data['email'];
              console.log(_this.userEmail);
            });
          }
        }, {
          key: "getFormData",
          value: function getFormData(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var formElement, reader;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      formElement = document.querySelectorAll('form');
                      _context2.next = 3;
                      return formElement.forEach(function (form) {
                        if (form.id === 'changePhotoForm') {
                          console.log('Got Form: ' + form);
                          _this2.formData = new FormData(form);
                          _this2.uploadedPhoto = true;
                        }
                      });

                    case 3:
                      console.log(this.formData);
                      reader = new FileReader();
                      _context2.next = 7;
                      return reader.addEventListener('load', function () {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  // convert image file to base64 string
                                  this.uploadedPhotoURL = reader.result;
                                  console.log('Before cropping: ' + reader.result);
                                  _context.next = 4;
                                  return this.cropPhoto(this.uploadedPhotoURL);

                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }, true);

                    case 7:
                      if (!formElement) {
                        _context2.next = 9;
                        break;
                      }

                      return _context2.abrupt("return", reader.readAsDataURL(event.target.files[0]));

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "uploadChangedPhoto",
          value: function uploadChangedPhoto() {
            var _this3 = this;

            var formData = new FormData();
            formData.append('oldPhotoKey', this.awsPrefix);
            formData.append('email', this.userEmail);
            var photoFile = new File([this.dataURLtoBlob(this.uploadedPhotoURL)], 'picture.png');
            formData.append('profile-picture-update', photoFile);

            if (this.uploadedPhoto === true) {
              this.photo.changeProfilePicture(formData).subscribe(function (data) {
                console.log(data);
                var newPhoto = data['objectUrl']; // Update all the creatorProfilePicture properties with newPhoto
                // this.photo.updatePostPhotos(newPhoto, this.userEmail);

                _this3.presentLoading();

                _this3.profile.profilePicture.next(newPhoto);

                _this3.presentToast(); // Get profile pages to refresh with updated profile pics


                _this3.postEmitter.postPageRefresh();

                _this3.singlePostEmitterService.singlePostPageRefresh();

                _this3.router.navigate(['/home/profile']);
              });
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toast.create({
                        message: 'Your Profile Picture has been changed',
                        animated: true,
                        cssClass: 'updated-toast',
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
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loading.create({
                        cssClass: 'my-custom-class',
                        message: 'Updating Photo...',
                        duration: 1000
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      _context4.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context4.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "cropPhoto",
          value: function cropPhoto(uploadedPhotoURL) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modal.create({
                        component: src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_5__.ImageCropperPage,
                        cssClass: 'image-cropper',
                        componentProps: {
                          uploadedPhotoURL: uploadedPhotoURL
                        }
                      });

                    case 2:
                      modal = _context5.sent;
                      _context5.next = 5;
                      return modal.present();

                    case 5:
                      modal.onDidDismiss().then(function (data) {
                        _this4.uploadedPhotoURL = data.data;
                      });

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "dataURLtoBlob",
          value: function dataURLtoBlob(dataurl) {
            var arr = dataurl.split(',');
            var mime = arr[0].match(/:(.*?);/)[1];
            var bstr = atob(arr[1]);
            var n = bstr.length;
            var u8arr = new Uint8Array(n);

            while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
            }

            return new Blob([u8arr], {
              type: mime
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ChangeProfilePicturePage;
      }();

      _ChangeProfilePicturePage.ctorParameters = function () {
        return [{
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__.PostPageEmitterService
        }, {
          type: src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__.SinglePostPageEmitterService
        }];
      };

      _ChangeProfilePicturePage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-change-profile-picture',
        template: _raw_loader_change_profile_picture_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_change_profile_picture_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController, src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__.PostPageEmitterService, src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__.SinglePostPageEmitterService])], _ChangeProfilePicturePage);
      /***/
    },

    /***/
    85038: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n#profile-picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  margin: 50px auto;\n  display: block;\n  opacity: 0;\n  border: 2px solid #005191;\n  -webkit-animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n.blue-button {\n  width: 200px;\n}\n.skip-button {\n  display: block;\n  --background: none;\n  color: #888;\n  --border-color: #888;\n  --border-width: 3px;\n  --border-style: solid;\n  width: 200px;\n  margin: 40px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n.blue-button {\n  width: unset;\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 20px auto 50px auto;\n  border-radius: 50px;\n  background-image: url('default-pro-picture.svg');\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n}\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  border: 4px solid #005191;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  border-radius: 50px;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\nspan {\n  color: #FFB351;\n  font-weight: 600;\n  background: #999;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: none;\n  height: 50px;\n  width: 200px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.cancel-button:hover {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);\n}\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n@-webkit-keyframes lide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes lide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLDZGQUFBO1VBQUEscUZBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtBQUVKO0FBRUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUU7RUFDRSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtFQUNBLGtGQUFBO1VBQUEsMEVBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtFQUFlLFlBQUE7RUFDZix5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0ZBQUE7VUFBQSw4RUFBQTtBQUdKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBR0o7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBR0o7QUFERTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFJSjtBQURFO0VBQ0UsMkNBQUE7QUFJSjtBQURFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUlKO0FBREU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJSjtBQUFFO0VBQ0Usa0JBQUE7QUFHSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUU7RUFDRTtJQUNFLDRCQUFBO0VBQ0o7RUFFRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQUFKO0FBQ0Y7QUFSRTtFQUNFO0lBQ0UsNEJBQUE7RUFDSjtFQUVFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBQUo7QUFDRiIsImZpbGUiOiJjaGFuZ2UtcHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNrdG9wLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzMjY7XG5cbiAgaDEge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICB9XG59XG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDA1NWE1LCAjMGQyZTRkKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNwcm9maWxlLXBpY3R1cmUge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNTE5MTtcbiAgICBhbmltYXRpb246IHBpYy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xuICB9XG5cbiAgLm9yYW5nZS1idXR0b24ge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cblxuICAuYmx1ZS1idXR0b24ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG5cbiAgLnNraXAtYnV0dG9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICAtLWJvcmRlci1jb2xvcjogIzg4ODtcbiAgICAtLWJvcmRlci13aWR0aCA6IDNweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAuYmx1ZS1idXR0b24ge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgb3BhY2l0eTogdW5zZXQ7XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuXG4gICNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDUwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vZGVmYXVsdC1wcm8tcGljdHVyZS5zdmcnKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjVzIGZvcndhcmRzO1xuICB9XG5cbiAgI3VwbG9hZC1waWN0dXJlLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMDA1MTkxO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG4gIH1cblxuICBzcGFue1xuICAgIGNvbG9yOiAjRkZCMzUxO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogIzk5OTtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gICNuZXh0LWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiAgLmNhbmNlbC1idXR0b24ge1xuICAgIGNvbG9yOiAjZTQ0MDVmO1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgfVxuXG4gIC5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjQpO1xuICB9XG5cbiAgLmNhbWVyYS1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWNvbG9yOiAjMDA1MTkxO1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiMwMDUxOTE7XG4gICAgYm9yZGVyOiAxcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIH1cblxuICBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogIzAwNTE5MSAxcHggc29saWQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICB9XG5cbiAgaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG5cblxuICAjaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICB9XG5cbiAgQGtleWZyYW1lcyBsaWRlLXVwIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuIl19 */";
      /***/
    },

    /***/
    41774: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Profile Picture</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    \n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <h1>Change Profile Picture</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"goBack()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"4\">\n        <h6 class=\"text-header\">Please select the profile picture you will use to replace your current one. Only pictures with the extentions <span>'.png', '.jpg', and '.jpeg'</span> are allowed. </h6>\n\n        <!-- <p>{{awsPrefix}}</p> -->\n        <img *ngIf=\"!uploadedPhoto\" id=\"profile-picture\" src=\"{{imageUrl}}\" alt=\"Profile Picture\">\n\n\n        <img *ngIf=\"uploadedPhoto\" id=\"profile-picture\" src=\"{{uploadedPhotoURL}}\" alt=\"Profile Picture\">\n\n        <form\n        (ngSubmit)=\"uploadChangedPhoto()\" id=\"changePhotoForm\">\n          <input\n            name=\"profile-picture-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!imageUrl\">Update\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_profile_change-profile-picture_change-profile-picture_change-profile-picture_mo-0385bc-es5.js.map