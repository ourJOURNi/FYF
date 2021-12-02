(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_mentors_mentor-chat_chat-page_chat-page_module_ts"], {
    /***/
    31839:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page-routing.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatPagePageRoutingModule": function ChatPagePageRoutingModule() {
          return (
            /* binding */
            _ChatPagePageRoutingModule
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


      var _chat_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chat-page.page */
      28399);

      var routes = [{
        path: '',
        component: _chat_page_page__WEBPACK_IMPORTED_MODULE_0__.ChatPagePage
      }];

      var _ChatPagePageRoutingModule = function ChatPagePageRoutingModule() {
        _classCallCheck(this, ChatPagePageRoutingModule);
      };

      _ChatPagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ChatPagePageRoutingModule);
      /***/
    },

    /***/
    91246:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatPagePageModule": function ChatPagePageModule() {
          return (
            /* binding */
            _ChatPagePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ion-bottom-drawer */
      11);
      /* harmony import */


      var _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chat-page-routing.module */
      31839);
      /* harmony import */


      var _chat_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chat-page.page */
      28399);
      /* harmony import */


      var src_app_modals_report_convo_report_convo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modals/report-convo/report-convo.module */
      83281);

      var _ChatPagePageModule = function ChatPagePageModule() {
        _classCallCheck(this, ChatPagePageModule);
      };

      _ChatPagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _chat_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPagePageRoutingModule, src_app_modals_report_convo_report_convo_module__WEBPACK_IMPORTED_MODULE_2__.ReportConvoPageModule, ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_8__.IonBottomDrawerModule],
        declarations: [_chat_page_page__WEBPACK_IMPORTED_MODULE_1__.ChatPagePage]
      })], _ChatPagePageModule);
      /***/
    },

    /***/
    28399:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page.page.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatPagePage": function ChatPagePage() {
          return (
            /* binding */
            _ChatPagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chat-page.page.html */
      35370);
      /* harmony import */


      var _chat_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chat-page.page.scss */
      26916);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ion-bottom-drawer */
      11);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_modals_report_convo_report_convo_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modals/report-convo/report-convo.page */
      10980);

      var _ChatPagePage = /*#__PURE__*/function () {
        function ChatPagePage(alert, modal) {
          _classCallCheck(this, ChatPagePage);

          this.alert = alert;
          this.modal = modal;
          this.shouldBounce = true;
          this.dockedHeight = 400;
          this.distanceTop = 56;
          this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState.Bottom;
          this.states = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState;
          this.minimumHeight = 0;
        }

        _createClass(ChatPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "menu",
          value: function menu() {
            if (this.drawerState === ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState.Bottom) {
              this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState.Docked;
            } else {
              this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState.Bottom;
            }
          }
        }, {
          key: "delertAlert",
          value: function delertAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alert.create({
                        cssClass: '',
                        header: 'Are you sure you want to delete this conversation?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            console.log('Deleting');
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
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
          key: "reportAlert",
          value: function reportAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alert.create({
                        cssClass: '',
                        header: 'Are you sure you want to report this conversation?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            console.log('Reporting');
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
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
        }, {
          key: "reportConvo",
          value: function reportConvo() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var reportModalConfig;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modal.create({
                        component: src_app_modals_report_convo_report_convo_page__WEBPACK_IMPORTED_MODULE_2__.ReportConvoPage,
                        componentProps: {}
                      });

                    case 2:
                      reportModalConfig = _context3.sent;
                      this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_3__.DrawerState.Bottom;
                      _context3.next = 6;
                      return reportModalConfig.present();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ChatPagePage;
      }();

      _ChatPagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
        }];
      };

      _ChatPagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-chat-page',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chat_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chat_page_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController])], _ChatPagePage);
      /***/
    },

    /***/
    35370:
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/mentors/mentor-chat/chat-page/chat-page.page.html ***!
      \****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Conversation</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"menu()\">\n          <img class=\"ellipsis\" src=\"../../../../../assets/icons/ellipsis.svg\" alt=\"\">\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-bottom-drawer [(state)]=\"drawerState\" [minimumHeight]=\"minimumHeight\" [dockedHeight]=\"dockedHeight\"\n[shouldBounce]=\"shouldBounce\" [distanceTop]=\"distanceTop\">\n<div class=\"drawer-content\">\n    <ion-list>\n      <ion-item lines=\"none\">\n        <ion-button class=\"blue-button\" (click)=\"delertAlert()\">\n          Delete\n        </ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button class=\"blue-button\" (click)=\"reportConvo()\">\n          Report\n        </ion-button>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-button class=\"grey-button\" (click)=\"menu()\">\n          Cancel\n        </ion-button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-bottom-drawer>\n";
      /***/
    },

    /***/
    26916:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/chat-page/chat-page.page.scss ***!
      \*************************************************************************/

    /***/
    function _(module) {
      module.exports = "ion-avatar {\n  height: 1.3em;\n  width: 1.3em;\n}\n\n.new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n\n.ellipsis {\n  height: 2.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQWUsWUFBQTtBQUVqQjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUYiLCJmaWxlIjoiY2hhdC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDEuM2VtOyB3aWR0aDogMS4zZW07XG59XG5cbi5uZXctbWVzc2FnZXtcbiAgY29sb3I6ICNmYWE3MWI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGF0ZS1zZW50IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZWxsaXBzaXMge1xuICBoZWlnaHQ6IDIuMWVtO1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_mentors_mentor-chat_chat-page_chat-page_module_ts-es5.js.map