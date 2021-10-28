(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["default-src_app_modals_replies-page_replies-page_module_ts"], {
    /***/
    67251: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RepliesPagePageRoutingModule": function RepliesPagePageRoutingModule() {
          return (
            /* binding */
            _RepliesPagePageRoutingModule
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


      var _replies_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./replies-page.page */
      51782);

      var routes = [{
        path: '',
        component: _replies_page_page__WEBPACK_IMPORTED_MODULE_0__.RepliesPagePage
      }];

      var _RepliesPagePageRoutingModule = function RepliesPagePageRoutingModule() {
        _classCallCheck(this, RepliesPagePageRoutingModule);
      };

      _RepliesPagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RepliesPagePageRoutingModule);
      /***/
    },

    /***/
    86630: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RepliesPagePageModule": function RepliesPagePageModule() {
          return (
            /* binding */
            _RepliesPagePageModule
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


      var _replies_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./replies-page-routing.module */
      67251);
      /* harmony import */


      var _replies_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./replies-page.page */
      51782);

      var _RepliesPagePageModule = function RepliesPagePageModule() {
        _classCallCheck(this, RepliesPagePageModule);
      };

      _RepliesPagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _replies_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.RepliesPagePageRoutingModule],
        declarations: [_replies_page_page__WEBPACK_IMPORTED_MODULE_1__.RepliesPagePage]
      })], _RepliesPagePageModule);
      /***/
    },

    /***/
    51782: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RepliesPagePage": function RepliesPagePage() {
          return (
            /* binding */
            _RepliesPagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_replies_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./replies-page.page.html */
      44332);
      /* harmony import */


      var _replies_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./replies-page.page.scss */
      15006);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/post.service */
      69166);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns */
      63818);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      50806);
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/notifications.service */
      79744);
      /* harmony import */


      var src_app_components_reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/reply-options-popover/reply-options-popover.component */
      56438);

      var _RepliesPagePage = /*#__PURE__*/function () {
        function RepliesPagePage(formBuilder, modal, popover, navParams, loading, profile, posts, alert, postEmitterService, notificationsService) {
          _classCallCheck(this, RepliesPagePage);

          this.formBuilder = formBuilder;
          this.modal = modal;
          this.popover = popover;
          this.navParams = navParams;
          this.loading = loading;
          this.profile = profile;
          this.posts = posts;
          this.alert = alert;
          this.postEmitterService = postEmitterService;
          this.notificationsService = notificationsService;
          this.replies$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
          this.tabBar = document.getElementById('myTabBar');
          this.votes = document.getElementById('votes');
        }

        _createClass(RepliesPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.profile.getUserDetails().subscribe(function (details) {
              _this.commentUserProfilePicture = details['profilePicture'];
            }); // To collect comment data

            this.repliesForm = this.formBuilder.group({
              reply: ['']
            });
            this.replies$.next(this.navParams.get('replies').reverse());
            this.replies$.subscribe(function (data) {
              _this.replies = data;

              var _iterator = _createForOfIteratorHelper(_this.replies),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var reply = _step.value;
                  reply.isEditable = false; // console.log('Reply: ', reply);

                  if (reply.userEmail == _this.userEmail) {
                    reply.isEditable = true;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
            this.postID = this.navParams.get('postID');
            this.commentContents = this.navParams.get('comment');
            this.commentID = this.navParams.get('commentID');
            this.commentUserFullName = this.navParams.get('commentUserFullName');
            this.commentUserEmail = this.navParams.get('commentUserEmail');
            this.commentDate = this.navParams.get('commentDate');
            this.userFullName = this.navParams.get('userFullName');
            this.userEmail = this.navParams.get('userEmail');
            this.commentUserProfilePicture = this.navParams.get('userProfilePicture');
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('cancelling comment...');
            this.modal.dismiss();
          }
        }, {
          key: "refreshRepliesAmount",
          value: function refreshRepliesAmount() {
            this.postEmitterService.postPageRefresh();
          }
        }, {
          key: "reply",
          value: function reply(_reply) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.repliesForm.reset();

                    case 2:
                      _context.next = 4;
                      return console.log('replying to comment...');

                    case 4:
                      _context.next = 6;
                      return this.posts.replyComment(this.commentID, this.postID, _reply, this.userFullName, this.userEmail, this.commentUserProfilePicture, this.commentUserFullName, this.commentUserEmail).subscribe(function (data) {
                        var currentComment;
                        var currentCommentReplies = [];

                        var _iterator2 = _createForOfIteratorHelper(data['comments']),
                            _step2;

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var comment = _step2.value;

                            if (comment._id == data['comment']) {
                              currentComment = comment;

                              for (var i = 0; i < comment.replies.length; i++) {
                                currentCommentReplies.push(comment.replies[i]);
                              }
                            }
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }

                        var comments = data['comments'];
                        var userEmail = data['userEmail'];
                        var replies = data['replies']; // Give User ability to Edit, Delete, or Report a Comment.
                        // User cannot Report their own comment **

                        // Give User ability to Edit, Delete, or Report a Comment.
                        // User cannot Report their own comment **
                        var _iterator3 = _createForOfIteratorHelper(comments),
                            _step3;

                        try {
                          // Give User ability to Edit, Delete, or Report a Comment.
                          // User cannot Report their own comment **
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var _comment = _step3.value;
                            // If the Logged in User's Email equals the creatorEmail of the Comment,
                            // they will be given the ability to edit and delete their Comment.
                            // The ability for them to report their own comment is disabled
                            _comment.repliesLength = _comment.replies.length;
                            _comment.isUser = false;
                            _comment.canDeleteComment = false;
                            _comment.canReport = true;
                            _comment.date = (0, date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(_comment.date), {
                              includeSeconds: false,
                              addSuffix: false
                            }); // If this comment is the logged in user, they can delete and edit

                            // If this comment is the logged in user, they can delete and edit
                            if (_comment.userEmail === userEmail) {
                              _comment.isUser = true;
                              _comment.canDeleteComment = true;
                              _comment.canReport = false;
                            } // Format the Reply Dates


                            // Format the Reply Dates
                            for (var _i = 0; _comment.replies.length > _i; _i++) {
                              _comment.replies[_i].date = (0, date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(_comment.replies[_i].date), {
                                addSuffix: false
                              });
                              replies.push(_comment.replies[_i]);
                            }
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }

                        _this2.replies = currentCommentReplies;
                        currentCommentReplies.reverse();

                        _this2.posts.commentsSubject$.next(comments.reverse());

                        _this2.replies$.next(_this2.replies.reverse());

                        console.log('From replyComment');
                        console.log(data); // tslint:disable-next-line: max-line-length

                        // tslint:disable-next-line: max-line-length
                        _this2.notificationsService.replyNotification(_this2.userEmail, _this2.commentUserEmail, _this2.postID, currentComment, data['newReply']).subscribe();

                        console.log(_this2.replyTextArea.value);
                        _this2.replyTextArea.value = undefined;
                      });

                    case 6:
                      _context.next = 8;
                      return this.repliesLoading();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteReply",
          value: function deleteReply(replyID) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('Deleting reply with id ', replyID);
                      _context2.next = 3;
                      return this.posts.deleteReply(replyID, this.commentID, this.postID).subscribe(function (data) {
                        console.log(data);
                        var currentComment;
                        var currentCommentReplies = [];
                        var comments = data['comments'];
                        var userEmail = data['userEmail'];
                        var replies = data['replies'];

                        var _iterator4 = _createForOfIteratorHelper(comments),
                            _step4;

                        try {
                          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                            var comment = _step4.value;

                            if (comment._id == data['comment']) {
                              currentComment = comment;

                              for (var i = 0; i < comment.replies.length; i++) {
                                currentCommentReplies.push(comment.replies[i]);
                              }
                            }
                          }
                        } catch (err) {
                          _iterator4.e(err);
                        } finally {
                          _iterator4.f();
                        }

                        var _iterator5 = _createForOfIteratorHelper(comments),
                            _step5;

                        try {
                          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                            var _comment2 = _step5.value;
                            _comment2.repliesLength = _comment2.replies.length;
                            _comment2.isUser = false;
                            _comment2.canDeleteComment = false;
                            _comment2.canReport = true;
                            _comment2.date = (0, date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(_comment2.date), {
                              includeSeconds: false,
                              addSuffix: false
                            }); // If the comment was posted by the current user, it becomes editable

                            // If the comment was posted by the current user, it becomes editable
                            if (_comment2.userEmail == userEmail) {
                              _comment2.isUser = true;
                              _comment2.canDeleteComment = true;
                              _comment2.canReport = false;
                            } // Format the Reply Dates


                            // Format the Reply Dates
                            for (var _i2 = 0; _comment2.replies.length > _i2; _i2++) {
                              _comment2.replies[_i2].date = (0, date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(_comment2.replies[_i2].date), {
                                addSuffix: false
                              });
                              replies.push(_comment2.replies[_i2]);
                            }
                          }
                        } catch (err) {
                          _iterator5.e(err);
                        } finally {
                          _iterator5.f();
                        }

                        _this3.replies = currentCommentReplies;

                        _this3.posts.commentsSubject$.next(comments.reverse());

                        _this3.replies$.next(_this3.replies.reverse());
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "repliesLoading",
          value: function repliesLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.create({
                        message: 'Replying to Comment...',
                        duration: 2000
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return this.refreshRepliesAmount();

                    case 5:
                      _context3.next = 7;
                      return loading.present();

                    case 7:
                      _context3.next = 9;
                      return loading.onDidDismiss();

                    case 9:
                      _yield$loading$onDidD = _context3.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      // await this.modal.dismiss();
                      // await this.confirmAlert();
                      console.log('Loading dismissed!');

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "confirmAlert",
          value: function confirmAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alert.create({
                        cssClass: 'success-alert',
                        message: 'Your comment has been edited.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // When the user submits the comment, the tabar will show up again

        }, {
          key: "ScrollToReply",
          value: function ScrollToReply() {
            var _this4 = this;

            var scrollHeight = document.documentElement.scrollHeight;
            console.log(this.content.getScrollElement().then(function (data) {
              return _this4.content.scrollToPoint(0, data.scrollHeight, 100);
            }));
          }
        }, {
          key: "replyContent",
          value: function replyContent(e) {
            console.log(e);
            this.replyValue = e.detail.value;
          }
        }, {
          key: "optionsPopover",
          value: function optionsPopover() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var popover, _yield$popover$onDidD, role;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.popover.create({
                        component: src_app_components_reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_6__.ReplyOptionsPopoverComponent,
                        cssClass: 'my-custom-class',
                        translucent: true
                      });

                    case 2:
                      popover = _context5.sent;
                      _context5.next = 5;
                      return popover.present();

                    case 5:
                      _context5.next = 7;
                      return popover.onDidDismiss();

                    case 7:
                      _yield$popover$onDidD = _context5.sent;
                      role = _yield$popover$onDidD.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return RepliesPagePage;
      }();

      _RepliesPagePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService
        }, {
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService
        }];
      };

      _RepliesPagePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, {
            "static": true
          }]
        }],
        replyTextArea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
          args: ['replyTextArea', {
            "static": true
          }]
        }]
      };
      _RepliesPagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-replies-page',
        template: _raw_loader_replies_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_replies_page_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService, src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostsService, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController, src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService, src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService])], _RepliesPagePage);
      /***/
    },

    /***/
    15006: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background: none;\n  position: relative;\n  right: 16px;\n}\n\n.add-comment-footer {\n  background: rgba(213, 232, 236, 0.3);\n  height: 80px;\n  font-size: 1.3em;\n  border-top: 6px solid #0055a5;\n  padding-top: 4px;\n}\n\n.more-icon {\n  color: #0055a5;\n  font-size: 1.3em;\n}\n\n.reply-wrapper {\n  padding: 10px;\n  margin: 16px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  background: white;\n}\n\n#reply-avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n  position: relative;\n  top: 7px;\n}\n\n.reply-name {\n  font-weight: bold;\n  margin: 0.5em 0 0.5em;\n}\n\n#reply-date {\n  font-size: 0.7em;\n  color: #999;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGxpZXMtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFJRiIsImZpbGUiOiJyZXBsaWVzLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE2cHg7XG59XG4uYWRkLWNvbW1lbnQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIzMiwgMjM2LCAwLjMpO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCAjMDA1NWE1O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLm1vcmUtaWNvbiB7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuLnJlcGx5LXdyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDE2cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbiNyZXBseS1hdmF0YXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4O1xufVxuXG4ucmVwbHktbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAuNWVtIDAgMC41ZW07XG59XG5cbiNyZXBseS1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgY29sb3I6ICM5OTk7XG59XG5cbiNiYWNrLWFycm93LWljb25zIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDhweDtcbn0iXX0= */";
      /***/
    },

    /***/
    44332: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-title slot=\"start\">Replies</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Replies</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\">\n  <div style=\"background-color: white; padding: 2em 0 2em 0em;\">\n    <!-- commentUser Info -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\">\n          <ion-avatar class=\"comment-avatar\" slot=\"start\">\n            <img src=\"{{commentUserProfilePicture}}\">\n          </ion-avatar>\n          <ion-label>\n            <h6><span style=\"color: #0055a5; font-weight: 600;\">{{ commentUserFullName  }}</span><br>{{ commentDate }} </h6>\n            </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- Comment -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"11\">\n        <p>{{commentContents}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <!-- Replies -->\n  <ion-row *ngFor=\"let reply of replies\" class=\"ion-justify-content-center ion-align-items-start reply-wrapper\">\n    <ion-col size=\"11\">\n      <!-- <ion-col size=\"6\">\n        <p class=\"reply-name\">\n          <img id=\"reply-avatar\" src=\"{{reply.userProfilePicture}}\">\n          {{reply.userFullName}}\n        </p>\n        <p id=\"reply-date\">{{reply.date}} ago</p>\n      </ion-col> -->\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\">\n          <ion-avatar class=\"comment-avatar\" slot=\"start\">\n            <img src=\"{{reply.userProfilePicture}}\">\n          </ion-avatar>\n          <ion-label>\n            <h6><span style=\"color: #000;\">{{ reply.userFullName  }}</span><br>{{ reply.date }} ago</h6>\n            </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"11\">\n        <p class=\"reply-text\">{{reply.reply}}</p>\n      </ion-col>\n      <ion-col class=\"ion-float-right\" size=\"2\">\n        <ion-button style=\"--background: none; position: relative; left: 32px;\" (click)=\"optionsPopover()\">\n          <ion-icon class=\"more-icon\" name=\"ellipsis-vertical-outline\"></ion-icon>\n        </ion-button>\n        <!-- <ion-button class=\"blue-button\" *ngIf=\"reply.isEditable\" (click)=\"deleteReply(reply._id)\" expand=\"block\">\n          Delete\n        </ion-button> -->\n      </ion-col>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer class=\"ion-hide-lg-up add-comment-footer\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col style=\"display: inline-block; height: 40px;\" size=\"10\">\n      <ion-textarea\n      #replyTextArea\n      (ionChange)=\"replyContent($event)\"\n      style=\"display: inline;\"\n      autocapitalize=\"true\"\n      rows=\"1\"\n      spellcheck=\"true\"\n      wrap=\"soft\"\n      type=\"text\"\n      placeholder=\"Add a Reply\"\n      >\n    </ion-textarea>\n    </ion-col>\n    <ion-col (click)=\"reply(this.replyValue) && ScrollToReply()\" style=\"display: inline-block; height: 50px;\" size=\"1\">\n      <ion-button style=\"--background: none;\">\n      <ion-icon style=\"font-size: 1.8em; color: #0055a5;\" slot=\"start\" name=\"send\"></ion-icon>\n    </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_modals_replies-page_replies-page_module_ts-es5.js.map