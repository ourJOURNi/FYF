(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_sign-up_thank-you_thank-you_module_ts"], {
    /***/
    57450: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ThankYouPageRoutingModule": function ThankYouPageRoutingModule() {
          return (
            /* binding */
            _ThankYouPageRoutingModule
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


      var _thank_you_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./thank-you.page */
      81723);

      var routes = [{
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_0__.ThankYouPage
      }];

      var _ThankYouPageRoutingModule = function ThankYouPageRoutingModule() {
        _classCallCheck(this, ThankYouPageRoutingModule);
      };

      _ThankYouPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ThankYouPageRoutingModule);
      /***/
    },

    /***/
    24952: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ThankYouPageModule": function ThankYouPageModule() {
          return (
            /* binding */
            _ThankYouPageModule
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


      var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./thank-you-routing.module */
      57450);
      /* harmony import */


      var _thank_you_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./thank-you.page */
      81723);

      var _ThankYouPageModule = function ThankYouPageModule() {
        _classCallCheck(this, ThankYouPageModule);
      };

      _ThankYouPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThankYouPageRoutingModule],
        declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_1__.ThankYouPage]
      })], _ThankYouPageModule);
      /***/
    },

    /***/
    81723: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ThankYouPage": function ThankYouPage() {
          return (
            /* binding */
            _ThankYouPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./thank-you.page.html */
      13624);
      /* harmony import */


      var _thank_you_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./thank-you.page.scss */
      97090);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ThankYouPage = /*#__PURE__*/function () {
        function ThankYouPage(router) {
          _classCallCheck(this, ThankYouPage);

          this.router = router;
        }

        _createClass(ThankYouPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.router.navigate(['']);
          }
        }]);

        return ThankYouPage;
      }();

      _ThankYouPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _ThankYouPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-thank-you',
        template: _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_thank_you_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])], _ThankYouPage);
      /***/
    },

    /***/
    97090: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#background {\n  opacity: 0;\n  height: 90vh;\n  --background: rgb(239, 255, 239);\n  --transition: 0.5s;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: #111;\n  font-size: 1.3em;\n  -webkit-animation: slide-in-up-2 0.2s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up-2 0.2s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\nion-button {\n  opacity: 1;\n  font-weight: 600;\n  --background: #4DC066;\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: rgb(220, 255, 220);\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: rgb(220, 255, 220);\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxRkFBQTtVQUFBLDZFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RkFBQTtVQUFBLCtFQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0U7SUFDSSw0QkFBQTtFQUVKO0VBQUE7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7SUFDQSwwQkFBQTtFQUVKO0FBQ0Y7O0FBVkE7RUFDRTtJQUNJLDRCQUFBO0VBRUo7RUFBQTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLDBCQUFBO0VBRUo7QUFDRjs7QUFDRTtFQUNFO0lBQ0ksMEJBQUE7RUFDTjtFQUNFO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBQ047QUFDRjs7QUFSRTtFQUNFO0lBQ0ksMEJBQUE7RUFDTjtFQUNFO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJ0aGFuay15b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQge1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDkwdmg7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzOSwgMjU1LCAyMzkpO1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAgMC44cyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIC4zcyBmb3J3YXJkcztcbn1cblxuI2NvbmZpcm0tdGV4dCB7XG4gIGNvbG9yOiAjMTExO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBhbmltYXRpb246IHNsaWRlLWluLXVwLTIgMC4ycyBjdWJpYy1iZXppZXIoLjE1LCAuODUsIC43NSwgLjkpIDAuM3MgZm9yd2FyZHM7XG59XG5pb24tYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjNERDMDY2O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXVwIHtcbiAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtLWJhY2tncm91bmQ6IHJnYigyMjAsIDI1NSwgMjIwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNsaWRlLWluLXVwLTIge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgICB9XG4gIH1cbiJdfQ== */";
      /***/
    },

    /***/
    13624: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content id=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 15% 0% 3% 0%;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\" class=\"ion-text-center\">\n        <img src=\"../../../../../../assets/icon/Green-Checked.svg\">\n        <p>Thank you for signing up with Find Your Future! You can now login to your account</p>\n        <ion-button (click)=\"goToLogin()\">\n          Done\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_sign-up_thank-you_thank-you_module_ts-es5.js.map