(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_mentors_mentor-chat_mentor-chat_module_ts"], {
    /***/
    12023:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/mentor-chat-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorChatPageRoutingModule": function MentorChatPageRoutingModule() {
          return (
            /* binding */
            _MentorChatPageRoutingModule
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


      var _mentor_chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mentor-chat.page */
      74394);

      var routes = [{
        path: '',
        component: _mentor_chat_page__WEBPACK_IMPORTED_MODULE_0__.MentorChatPage
      }, {
        path: 'chat-page',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_mentors_mentor-chat_chat-page_chat-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./chat-page/chat-page.module */
          91246)).then(function (m) {
            return m.ChatPagePageModule;
          });
        }
      }];

      var _MentorChatPageRoutingModule = function MentorChatPageRoutingModule() {
        _classCallCheck(this, MentorChatPageRoutingModule);
      };

      _MentorChatPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MentorChatPageRoutingModule);
      /***/
    },

    /***/
    36358:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorChatPageModule": function MentorChatPageModule() {
          return (
            /* binding */
            _MentorChatPageModule
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


      var _mentor_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mentor-chat-routing.module */
      12023);
      /* harmony import */


      var _mentor_chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mentor-chat.page */
      74394);
      /* harmony import */


      var src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modals/new-message-mentor/new-message-mentor.module */
      33692);

      var _MentorChatPageModule = function MentorChatPageModule() {
        _classCallCheck(this, MentorChatPageModule);
      };

      _MentorChatPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _mentor_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.MentorChatPageRoutingModule, src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_2__.NewMessageMentorPageModule],
        declarations: [_mentor_chat_page__WEBPACK_IMPORTED_MODULE_1__.MentorChatPage]
      })], _MentorChatPageModule);
      /***/
    },

    /***/
    74394:
    /*!***************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorChatPage": function MentorChatPage() {
          return (
            /* binding */
            _MentorChatPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mentor_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./mentor-chat.page.html */
      39162);
      /* harmony import */


      var _mentor_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mentor-chat.page.scss */
      64481);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modals/new-message-mentor/new-message-mentor.page */
      8960);
      /* harmony import */


      var src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/mentor-chat.service */
      54607);

      var _MentorChatPage = /*#__PURE__*/function () {
        function MentorChatPage(router, modal, mentorChat) {
          _classCallCheck(this, MentorChatPage);

          this.router = router;
          this.modal = modal;
          this.mentorChat = mentorChat;
        }

        _createClass(MentorChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.mentorChat.createChatRoom();
          }
        }, {
          key: "chatPage",
          value: function chatPage() {
            this.router.navigate(['home/mentors/mentor-chat/chat-page']);
          }
        }, {
          key: "newMessage",
          value: function newMessage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var newMessageModalConfig;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modal.create({
                        component: src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_2__.NewMessageMentorPage,
                        componentProps: {}
                      });

                    case 2:
                      newMessageModalConfig = _context.sent;
                      _context.next = 5;
                      return newMessageModalConfig.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MentorChatPage;
      }();

      _MentorChatPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_3__.MentorChatService
        }];
      };

      _MentorChatPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mentor-chat',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mentor_chat_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mentor_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController, src_app_services_mentor_chat_service__WEBPACK_IMPORTED_MODULE_3__.MentorChatService])], _MentorChatPage);
      /***/
    },

    /***/
    54607:
    /*!*************************************************!*\
      !*** ./src/app/services/mentor-chat.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorChatService": function MentorChatService() {
          return (
            /* binding */
            _MentorChatService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316); // import { Socket, SocketIoConfig } from 'ngx-socket-io';
      // export class SocketNameSpace extends Socket{
      //   constructor(socketConfig: SocketIoConfig){
      //     super(socketConfig);
      //   }
      // }


      var _MentorChatService = /*#__PURE__*/function () {
        // mentorsChat: SocketNameSpace;
        function MentorChatService() {// this.mentorsChat  = new SocketNameSpace({url: 'http://127.0.0.1:3000/mentor-chat', options: {} });

          _classCallCheck(this, MentorChatService);
        } // newChatroom(): void {
        //   this.mentorsChat
        //     .emit('addChatroom', { chatId: this.chatId() });
        // }


        _createClass(MentorChatService, [{
          key: "chatId",
          value: function chatId() {
            var text = 'chat-';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (var i = 0; i < 5; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            text += Date.now();
            return text;
          }
        }]);

        return MentorChatService;
      }();

      _MentorChatService.ctorParameters = function () {
        return [];
      };

      _MentorChatService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [])], _MentorChatService);
      /***/
    },

    /***/
    39162:
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/mentors/mentor-chat/mentor-chat.page.html ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Mentor Chat</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"newMessage()\">\n          <ion-icon class=\"new-message\" size=\"large\" name=\"create\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- Mobile -->\n  <!-- Searchbar -->\n  <ion-toolbar class=\"searchbar-wrapper ion-hide-lg-up\">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n      <!-- List of Text Items -->\n      <ion-list class=\"ion-hide-lg-up\">\n  <ion-item-sliding (click)=\"chatPage()\">\n  <ion-item class=\"unread\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../../../assets/batman-pro-pic.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n      <p>This is the message...</p>\n    </ion-label>\n  </ion-item>\n    <ion-item-options side=\"end\">\n      <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n    </ion-item-options>\n  </ion-item-sliding>\n  <ion-item-sliding>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../../assets/batman-pro-pic.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Username <span class=\"date-sent\">&middot; date</span></h2>\n        <p>This is the message...</p>\n      </ion-label>\n    </ion-item>\n      <ion-item-options side=\"end\">\n        <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n      </ion-item-options>\n  </ion-item-sliding>\n      </ion-list>\n      </ion-col>\n      <ion-col size=\"6\"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    64481:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/mentors/mentor-chat/mentor-chat.page.scss ***!
      \*****************************************************************/

    /***/
    function _(module) {
      module.exports = ".new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\n.searchbar-wrapper {\n  margin: 20px 0 20px 0px;\n}\n\n.unread {\n  --background: rgb(203, 215, 230);\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvci1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJtZW50b3ItY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LW1lc3NhZ2V7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaGJhci13cmFwcGVye1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDBweDtcbn1cblxuLnVucmVhZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwMywgMjE1LCAyMzApO1xufVxuXG4uZGF0ZS1zZW50IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_mentors_mentor-chat_mentor-chat_module_ts-es5.js.map