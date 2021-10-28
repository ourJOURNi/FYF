(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_change-profile-picture_confirm-photo_confirm-photo_module_ts"], {
    /***/
    73056: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmPhotoPageRoutingModule": function ConfirmPhotoPageRoutingModule() {
          return (
            /* binding */
            _ConfirmPhotoPageRoutingModule
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


      var _confirm_photo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./confirm-photo.page */
      97430);

      var routes = [{
        path: '',
        component: _confirm_photo_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmPhotoPage
      }];

      var _ConfirmPhotoPageRoutingModule = function ConfirmPhotoPageRoutingModule() {
        _classCallCheck(this, ConfirmPhotoPageRoutingModule);
      };

      _ConfirmPhotoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ConfirmPhotoPageRoutingModule);
      /***/
    },

    /***/
    50561: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmPhotoPageModule": function ConfirmPhotoPageModule() {
          return (
            /* binding */
            _ConfirmPhotoPageModule
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


      var _confirm_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./confirm-photo-routing.module */
      73056);
      /* harmony import */


      var _confirm_photo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./confirm-photo.page */
      97430);

      var _ConfirmPhotoPageModule = function ConfirmPhotoPageModule() {
        _classCallCheck(this, ConfirmPhotoPageModule);
      };

      _ConfirmPhotoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _confirm_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmPhotoPageRoutingModule],
        declarations: [_confirm_photo_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmPhotoPage]
      })], _ConfirmPhotoPageModule);
      /***/
    },

    /***/
    97430: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmPhotoPage": function ConfirmPhotoPage() {
          return (
            /* binding */
            _ConfirmPhotoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_confirm_photo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./confirm-photo.page.html */
      40274);
      /* harmony import */


      var _confirm_photo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./confirm-photo.page.scss */
      23750);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ConfirmPhotoPage = /*#__PURE__*/function () {
        function ConfirmPhotoPage(router) {
          _classCallCheck(this, ConfirmPhotoPage);

          this.router = router;
        }

        _createClass(ConfirmPhotoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "uploadPhoto",
          value: function uploadPhoto() {
            console.log('User has successfully uploaded photo from their phones camera');
            this.router.navigate(['/home/profile/change-profile-picture/confirm']);
          }
        }, {
          key: "takeAnotherPhoto",
          value: function takeAnotherPhoto() {
            //  Access Gallery
            //  Replace last photo taken with another photo
            console.error("TODO: takeAnotherPhoto() not implemented yet");
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('change photo cancelled');
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ConfirmPhotoPage;
      }();

      _ConfirmPhotoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _ConfirmPhotoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-confirm-photo',
        template: _raw_loader_confirm_photo_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_confirm_photo_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])], _ConfirmPhotoPage);
      /***/
    },

    /***/
    23750: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  margin: 0;\n}\n\nh6.text-header {\n  font-size: 1.3em;\n  margin: 30px auto;\n  padding: unset;\n}\n\n.orange-button {\n  width: unset;\n}\n\n@media screen and (max-width: 384px) {\n  #main-content-col ion-button:last-child {\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tcGhvdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksZ0JBQUE7RUFDTjtBQUNGIiwiZmlsZSI6ImNvbmZpcm0tcGhvdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbmg2LnRleHQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIHBhZGRpbmc6IHVuc2V0O1xufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IHVuc2V0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xuICAgICNtYWluLWNvbnRlbnQtY29sIGlvbi1idXR0b246bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    40274: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>Confirm Photo</ion-title>\n    <ion-button (click)=\"cancel()\" id=\"cancel-button\" slot=\"end\">\n        Cancel\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.5\" size=\"2.5\">\n        <h1>Confirm Photo</h1>\n      </ion-col>\n      <ion-col push=\"2.8\" size=\"2\">\n        <ion-button class=\"back-button\" (click)=\"cancel()\">\n           Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"10\">\n        <hr style=\"background-color: #00000044;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" id=\"main-content-col\">\n        <div style=\"width: 100px; height: 100px; border-radius: 100px;background: lightgrey; margin: 30px auto 0px;\">\n          New picture goes here\n        </div>\n        <h6 class=\"text-header\">Are you sure you want to use this photo?</h6>\n        <ion-button (click)=\"uploadPhoto()\" class=\"orange-button\" id=\"next-button\" style=\"margin-right:16px;\">YES</ion-button>\n        <ion-button (click)=\"takeAnotherPhoto()\" class=\"orange-button\" id=\"next-button\">TAKE ANOTHER PHOTO</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_profile_change-profile-picture_confirm-photo_confirm-photo_module_ts-es5.js.map