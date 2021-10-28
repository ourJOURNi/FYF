(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_resume_confirm_confirm_module_ts"], {
    /***/
    15206: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmPageRoutingModule": function ConfirmPageRoutingModule() {
          return (
            /* binding */
            _ConfirmPageRoutingModule
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


      var _confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./confirm.page */
      84667);

      var routes = [{
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmPage
      }];

      var _ConfirmPageRoutingModule = function ConfirmPageRoutingModule() {
        _classCallCheck(this, ConfirmPageRoutingModule);
      };

      _ConfirmPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ConfirmPageRoutingModule);
      /***/
    },

    /***/
    87468: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmPageModule": function ConfirmPageModule() {
          return (
            /* binding */
            _ConfirmPageModule
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


      var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./confirm-routing.module */
      15206);
      /* harmony import */


      var _confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./confirm.page */
      84667);

      var _ConfirmPageModule = function ConfirmPageModule() {
        _classCallCheck(this, ConfirmPageModule);
      };

      _ConfirmPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmPageRoutingModule],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmPage]
      })], _ConfirmPageModule);
      /***/
    },

    /***/
    84667: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmPage": function ConfirmPage() {
          return (
            /* binding */
            _ConfirmPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./confirm.page.html */
      98592);
      /* harmony import */


      var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./confirm.page.scss */
      68513);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ConfirmPage = /*#__PURE__*/function () {
        function ConfirmPage(router) {
          _classCallCheck(this, ConfirmPage);

          this.router = router;
        }

        _createClass(ConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBackToProfile",
          value: function goBackToProfile() {
            console.log('Updating Resume from View Resume page');
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ConfirmPage;
      }();

      _ConfirmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _ConfirmPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])], _ConfirmPage);
      /***/
    },

    /***/
    68513: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    98592: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p>Your Resume has been uploaded.</p>\n</ion-content>\n<button (click)=\"goBackToProfile()\" id=\"next-button\">BACK TO PROFILE</button>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_profile_resume_confirm_confirm_module_ts-es5.js.map