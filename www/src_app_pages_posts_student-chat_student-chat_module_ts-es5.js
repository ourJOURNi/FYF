(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_posts_student-chat_student-chat_module_ts"], {
    /***/
    48410: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentChatPageRoutingModule": function StudentChatPageRoutingModule() {
          return (
            /* binding */
            _StudentChatPageRoutingModule
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


      var _student_chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-chat.page */
      34019);

      var routes = [{
        path: '',
        component: _student_chat_page__WEBPACK_IMPORTED_MODULE_0__.StudentChatPage
      }, {
        path: 'chat-page/:chatId/:fullName/:profilePicture/:email',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_posts_student-chat_chat-page_chat-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./chat-page/chat-page.module */
          71674)).then(function (m) {
            return m.ChatPagePageModule;
          });
        }
      }];

      var _StudentChatPageRoutingModule = function StudentChatPageRoutingModule() {
        _classCallCheck(this, StudentChatPageRoutingModule);
      };

      _StudentChatPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StudentChatPageRoutingModule);
      /***/
    },

    /***/
    33877: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentChatPageModule": function StudentChatPageModule() {
          return (
            /* binding */
            _StudentChatPageModule
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


      var _student_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-chat-routing.module */
      48410);
      /* harmony import */


      var _student_chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-chat.page */
      34019);
      /* harmony import */


      var src_app_modals_new_message_student_new_message_student_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modals/new-message-student/new-message-student.module */
      65367);

      var _StudentChatPageModule = function StudentChatPageModule() {
        _classCallCheck(this, StudentChatPageModule);
      };

      _StudentChatPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _student_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentChatPageRoutingModule, src_app_modals_new_message_student_new_message_student_module__WEBPACK_IMPORTED_MODULE_2__.NewMessageStudentPageModule],
        declarations: [_student_chat_page__WEBPACK_IMPORTED_MODULE_1__.StudentChatPage]
      })], _StudentChatPageModule);
      /***/
    },

    /***/
    34019: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentChatPage": function StudentChatPage() {
          return (
            /* binding */
            _StudentChatPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_student_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./student-chat.page.html */
      41715);
      /* harmony import */


      var _student_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-chat.page.scss */
      57792);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_modals_new_message_student_new_message_student_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modals/new-message-student/new-message-student.page */
      50420);
      /* harmony import */


      var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/student-chat.service */
      70009);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! date-fns */
      63818);

      var _StudentChatPage = /*#__PURE__*/function () {
        function StudentChatPage(router, modal, studentChat, profile) {
          _classCallCheck(this, StudentChatPage);

          this.router = router;
          this.modal = modal;
          this.studentChat = studentChat;
          this.profile = profile;
        }

        _createClass(StudentChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.profile.getUserDetails().subscribe(function (data) {
              _this.fullName = data['fullName'];
              _this.profilePicture = data['profilePicture'];
              _this.email = data['email'];

              _this.studentChat.conversations$.subscribe(function (conversations) {
                _this.conversations = Object.values(conversations).reverse();

                var _iterator = _createForOfIteratorHelper(_this.conversations),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var convo = _step.value;

                    var _iterator2 = _createForOfIteratorHelper(convo.messages),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var message = _step2.value;
                        message.date = (0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(message.date));
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }

                    if (convo.requestingUserEmail === _this.email) {
                      // console.log('The requesting users is the same user as the one who logged in on this app');
                      convo.isUser = true;
                    } // Get the most recent message information for text and date


                    convo.lastMessage = convo.messages.slice(-1)[0];
                    convo.lastMessageText = convo.lastMessage.text;
                    convo.lastMessageTime = convo.lastMessage.date;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            });
          }
        }, {
          key: "chatPage",
          value: function chatPage(chatId) {
            this.router.navigate(['home/posts/student-chat/chat-page', chatId, this.fullName, this.profilePicture, this.email]);
          }
        }, {
          key: "newMessage",
          value: function newMessage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var newMessageModalConfig;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modal.create({
                        component: src_app_modals_new_message_student_new_message_student_page__WEBPACK_IMPORTED_MODULE_2__.NewMessageStudentPage,
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
        }, {
          key: "delete",
          value: function _delete(item) {}
        }]);

        return StudentChatPage;
      }();

      _StudentChatPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_3__.StudentChatService
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService
        }];
      };

      _StudentChatPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-student-chat',
        template: _raw_loader_student_chat_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_student_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController, src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_3__.StudentChatService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService])], _StudentChatPage);
      /***/
    },

    /***/
    57792: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-message {\n  color: #faa71b;\n}\n\nion-label {\n  font-weight: 800;\n  display: block;\n}\n\n.searchbar-wrapper {\n  margin: 20px 0 20px 0px;\n}\n\n.unread {\n  --background: rgb(203, 215, 230);\n}\n\n.date-sent {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3R1ZGVudC1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctbWVzc2FnZXtcbiAgY29sb3I6ICNmYWE3MWI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VhcmNoYmFyLXdyYXBwZXJ7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMHB4O1xufVxuXG4udW5yZWFkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjAzLCAyMTUsIDIzMCk7XG59XG5cbi5kYXRlLXNlbnQge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */";
      /***/
    },

    /***/
    41715: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <p class=\"toolbar-title\">Student Chat</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"newMessage()\">\n          <ion-icon class=\"new-message\" size=\"large\" name=\"create\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- Mobile -->\n  <!-- Searchbar -->\n  <ion-toolbar class=\"searchbar-wrapper ion-hide-lg-up\">\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n\n  \n\n  <!-- List of Text Items -->\n<ion-list class=\"ion-hide-lg-up\">\n  <!-- If student has no messages in their inbox -->\n  <div *ngIf=\"this.conversations == 0\" id=\"no-messages\" class=\"ion-text-center\" style=\"margin-top: 75px; padding: 15px;\">\n    <p>You have <b>no messages</b> in your inbox. Please press the <ion-icon class=\"new-message\" size=\"small\" name=\"create\"></ion-icon> button to create a new message. </p>\n  </div>\n\n  <ion-item-sliding *ngFor=\"let convo of conversations\" (click)=\"chatPage(convo.chatId)\">\n  <ion-item class=\"unread\">\n    <ion-avatar slot=\"start\">\n      <!-- Show images are profiles of the other user -->\n      <img src=\"{{convo.isUser ? convo.respondingUserPhoto : convo.requestingUserPhoto}}\">\n    </ion-avatar>\n    <ion-label>\n      <h2>{{convo.isUser ? convo.respondingUserFullname : convo.requestingUserFullname}} <span class=\"date-sent\">&middot; {{convo.lastMessageTime}}</span></h2>\n      <!-- TODO: Most recent message -->\n      <p>{{convo.lastMessageText}}</p>\n    </ion-label>\n  </ion-item>\n    <ion-item-options side=\"end\">\n      <!-- <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option> -->\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n\n  <!-- Desktop -->\n  <!-- <ion-grid class=\"ion-hide-lg-down\">\n    <ion-row>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"6\"></ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_posts_student-chat_student-chat_module_ts-es5.js.map