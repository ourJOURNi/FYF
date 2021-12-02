(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_logout_logout_logout_module_ts"], {
    /***/
    87619:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/profile/logout/logout/logout-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LogoutPageRoutingModule": function LogoutPageRoutingModule() {
          return (
            /* binding */
            _LogoutPageRoutingModule
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


      var _logout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./logout.page */
      45075);

      var routes = [{
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_0__.LogoutPage
      }];

      var _LogoutPageRoutingModule = function LogoutPageRoutingModule() {
        _classCallCheck(this, LogoutPageRoutingModule);
      };

      _LogoutPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LogoutPageRoutingModule);
      /***/
    },

    /***/
    15694:
    /*!**************************************************************!*\
      !*** ./src/app/pages/profile/logout/logout/logout.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LogoutPageModule": function LogoutPageModule() {
          return (
            /* binding */
            _LogoutPageModule
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


      var _logout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./logout-routing.module */
      87619);
      /* harmony import */


      var _logout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./logout.page */
      45075);

      var _LogoutPageModule = function LogoutPageModule() {
        _classCallCheck(this, LogoutPageModule);
      };

      _LogoutPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _logout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LogoutPageRoutingModule],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_1__.LogoutPage]
      })], _LogoutPageModule);
      /***/
    },

    /***/
    45075:
    /*!************************************************************!*\
      !*** ./src/app/pages/profile/logout/logout/logout.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LogoutPage": function LogoutPage() {
          return (
            /* binding */
            _LogoutPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./logout.page.html */
      70508);
      /* harmony import */


      var _logout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./logout.page.scss */
      74988);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/auth.service */
      37556);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _LogoutPage = /*#__PURE__*/function () {
        function LogoutPage(router, auth, toast, loading, alert) {
          _classCallCheck(this, LogoutPage);

          this.router = router;
          this.auth = auth;
          this.toast = toast;
          this.loading = loading;
          this.alert = alert;
        }

        _createClass(LogoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loading.create({
                        message: 'Logging out...',
                        duration: 1000
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
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "confirmLogout",
          value: function confirmLogout() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var toast, loading, alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      toast = this.toast.create({
                        message: 'User has been logged out',
                        duration: 3000
                      });
                      _context2.next = 3;
                      return this.loading.create({
                        message: 'Logging out...',
                        duration: 1000
                      });

                    case 3:
                      loading = _context2.sent;
                      _context2.next = 6;
                      return this.alert.create({
                        message: 'Are you sure you want to logout?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelling logout');

                            _this.router.navigate(['/home/profile']);
                          }
                        }, {
                          text: 'Logout',
                          handler: function handler() {
                            console.log('Logging out');

                            _this.auth.logout();

                            loading.present();
                            toast.then(function (t) {
                              return t.present();
                            });
                          }
                        }]
                      });

                    case 6:
                      alert = _context2.sent;
                      _context2.next = 9;
                      return alert.present();

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('logout cancelled');
            this.router.navigate(['/home/profile']);
          }
        }]);

        return LogoutPage;
      }();

      _LogoutPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }];
      };

      _LogoutPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-logout',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_logout_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_logout_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router, _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController])], _LogoutPage);
      /***/
    },

    /***/
    70508:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/logout/logout/logout.page.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar>\n    <ion-title>Logout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center full-page\">\n      <ion-col size=\"6\" class=\"white-background padding\">\n        <ion-button (click)=\"confirmLogout()\" class=\"orange-button\" style=\"position: relative; top: 40%\">Logout</ion-button>\n        <br><br>\n        <ion-button (click)=\"cancel()\" class=\"cancel-button\">cancel</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n";
      /***/
    },

    /***/
    74988:
    /*!**************************************************************!*\
      !*** ./src/app/pages/profile/logout/logout/logout.page.scss ***!
      \**************************************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_profile_logout_logout_logout_module_ts-es5.js.map