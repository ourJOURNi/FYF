(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
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


      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/auth-guard.service */
      78968);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/auth/login/login.module */
          79456)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./tabs/tabs.module */
          15564)).then(function (m) {
            return m.TabsPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, // Change to sign up path name later
      {
        path: 'personal-info',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_auth_sign-up_personal-info_personal-info_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/auth/sign-up/personal-info/personal-info.module */
          22361)).then(function (m) {
            return m.PersonalInfoPageModule;
          });
        }
      }, //  change to forgot password path name later
      {
        path: 'enter-email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_auth_forgot-password_enter-email_enter-email_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/auth/forgot-password/enter-email/enter-email.module */
          84055)).then(function (m) {
            return m.EnterEmailPageModule;
          });
        }
      }, {
        path: 'enter-code',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_auth_forgot-password_enter-code_enter-code_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/auth/forgot-password/enter-code/enter-code.module */
          17463)).then(function (m) {
            return m.EnterCodePageModule;
          });
        }
      }, {
        path: 'events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_date-fns_esm_formatDistanceToNow_index_js"), __webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_pages_events_events_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/events/events.module */
          95105)).then(function (m) {
            return m.EventsPageModule;
          });
        }
      }, {
        path: 'mentors',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_mentors_mentors_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/mentors/mentors.module */
          53982)).then(function (m) {
            return m.MentorsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/auth/login/login.module */
          79456)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'replies-page',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_date-fns_esm_formatDistanceToNow_index_js"), __webpack_require__.e("default-src_app_modals_replies-page_replies-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/replies-page/replies-page.module */
          86630)).then(function (m) {
            return m.RepliesPagePageModule;
          });
        }
      }, {
        path: 'edit-post',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "common").then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/edit-post/edit-post.module */
          22447)).then(function (m) {
            return m.EditPostPageModule;
          });
        }
      }, {
        path: 'image-cropper',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "default-src_app_modals_image-cropper_image-cropper_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/image-cropper/image-cropper.module */
          72228)).then(function (m) {
            return m.ImageCropperPageModule;
          });
        }
      }, {
        path: 'report-convo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "common").then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/report-convo/report-convo.module */
          83281)).then(function (m) {
            return m.ReportConvoPageModule;
          });
        }
      }, {
        path: 'new-message-student',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "common").then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/new-message-student/new-message-student.module */
          65367)).then(function (m) {
            return m.NewMessageStudentPageModule;
          });
        }
      }, {
        path: 'new-message-mentor',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "common").then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/new-message-mentor/new-message-mentor.module */
          33692)).then(function (m) {
            return m.NewMessageMentorPageModule;
          });
        }
      }, {
        path: 'report-convo-mentor',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_modals_report-convo-mentor_report-convo-mentor_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/report-convo-mentor/report-convo-mentor.module */
          94390)).then(function (m) {
            return m.ReportConvoMentorPageModule;
          });
        }
      }, {
        path: 'upload-resume-modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "default-src_app_modals_upload-resume-modal_upload-resume-modal_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./modals/upload-resume-modal/upload-resume-modal.module */
          49969)).then(function (m) {
            return m.UploadResumeModalPageModule;
          });
        }
      }, {
        path: 'download',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_auth_download_download_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/auth/download/download.module */
          23064)).then(function (m) {
            return m.DownloadPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          enableTracing: false,
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      53040);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/auth.service */
      37556);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/notifications.service */
      79744);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      98636);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, auth, notifications, router) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.auth = auth;
          this.notifications = notifications;
          this.router = router;
          this.tabsPlacement = 'bottom';
          this.tabsLayout = 'icon-top';
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.auth.authenticationState.unsubscribe();
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.auth.checkToken(); // this.notifications.connect();

            this.notifications.messages$.pipe( // map(rows => rows.data),
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (error) {
              throw error;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)({
              error: function error(_error) {
                return console.log('[Live component] Error:', _error);
              },
              complete: function complete() {
                return console.log('[Live component] Connection Closed');
              }
            })).subscribe(function (e) {
              console.log(e);
            }); // Notification.requestPermission((e) => {
            //   console.log(e);
            // });

            var img = '../assets/icons/icon-72x72.svg';
            var text = 'This is a notification.'; // let notification = new Notification('To do list', {body: text, icon: img});

            this.platform.ready().then(function () {}); // State for the User. If Authentication State == False, the app reverts back to the landing page

            this.auth.authenticationState.subscribe(function (state) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (state) {
                          this.router.navigate(['home']);
                        } else {
                          this.router.navigate(['']);
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform, _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService, _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router])], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "jwtOptionsFactory": function jwtOptionsFactory() {
          return (
            /* binding */
            _jwtOptionsFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      69956);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ion-bottom-drawer */
      11);
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/custom-component.module */
      64941);
      /* harmony import */


      var _emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./emitters/post-page-emitter.service */
      50806);
      /* harmony import */


      var _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./emitters/favorites-event-emitter.service */
      81615);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic/storage */
      12314);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      34483);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      18659);
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      40773);
      /* harmony import */


      var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/ionic-webview/ngx */
      73039);
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/service-worker */
      47334); // Angular Modules
      // import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
      // const config: SocketIoConfig = { url: 'http://10.0.1.5:3000', options: {} };
      // Third Party
      // Custom Modules
      // Custom Emitters
      //  Ionic Modules
      // For JWT


      function _jwtOptionsFactory(storage) {
        return {
          tokenGetter: function tokenGetter() {
            return storage.get('access_token');
          },
          whitelistedDomains: ['localhost:42dfc00']
        };
      }

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_12__.IonBottomDrawerModule, _components_custom_component_module__WEBPACK_IMPORTED_MODULE_3__.CustomComponentsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, // SocketIoModule.forRoot(config),
        _ionic_storage__WEBPACK_IMPORTED_MODULE_18__.IonicStorageModule.forRoot(), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtModule.forRoot({
          jwtOptionsProvider: {
            provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JWT_OPTIONS,
            useFactory: _jwtOptionsFactory,
            deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_18__.Storage]
          }
        }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: true
        })],
        providers: [_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService, _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__.FavoritesEventEmitterService, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File, _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__.FilePath, _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__.WebView, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    17855:
    /*!***************************************************************************!*\
      !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommentVoteBarComponent": function CommentVoteBarComponent() {
          return (
            /* binding */
            _CommentVoteBarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comment_vote_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./comment-vote-bar.component.html */
      37133);
      /* harmony import */


      var _comment_vote_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./comment-vote-bar.component.scss */
      71920);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/post.service */
      69166);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      50806);

      var _CommentVoteBarComponent = /*#__PURE__*/function () {
        function CommentVoteBarComponent(posts, profile, toast, postEmitterService) {
          _classCallCheck(this, CommentVoteBarComponent);

          this.posts = posts;
          this.profile = profile;
          this.toast = toast;
          this.postEmitterService = postEmitterService;
          this.upVoteCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
          this.downVoteCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
          this.currentUserUpvoted = false;
          this.currentUserDownvoted = false;
        }

        _createClass(CommentVoteBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // Get information about comment
                      this.posts.getPostInfo(this.postID).subscribe(function (postInfo) {
                        var allComments = postInfo['comments'];
                        allComments.find(function (comment) {
                          if (comment._id === _this2.commentID) {
                            _this2.upVoters = comment['upvoters'];
                            _this2.downVoters = comment['downvoters'];
                            _this2.upVotes = comment['upvotes'];
                            _this2.downVotes = comment['downvotes'];

                            _this2.upVoteCount$.next(_this2.upVotes);

                            _this2.downVoteCount$.next(_this2.downVotes);

                            _this2.upVoteLength = _this2.upVoteCount$.getValue();
                            _this2.downVoteLength = _this2.downVoteCount$.getValue();
                            return;
                          }
                        }); // Get User Email

                        _this2.profile.getUserDetails().subscribe(function (userDetails) {
                          var userEmail = userDetails['email'];
                          var upVoted = false;
                          var downVoted = false;

                          _this2.upVoters.find(findUpVoter);

                          _this2.downVoters.find(findDownVoter);

                          function findUpVoter(upVoter) {
                            if (!upVoter) {}

                            if (upVoter === userEmail) {
                              return upVoted = true;
                            }

                            console.log(upVoter);
                          }

                          function findDownVoter(downVoter) {
                            if (!downVoter) {}

                            if (downVoter === userEmail) {
                              return downVoted = true;
                            }
                          }

                          console.log('Current user: ', userEmail);
                          _this2.userEmail = userEmail;
                          _this2.currentUserUpvoted = upVoted;
                          _this2.currentUserDownvoted = downVoted;
                        });
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "refreshAfterComment",
          value: function refreshAfterComment() {
            this.postEmitterService.postPageRefresh();
          }
        }, {
          key: "upVoteComment",
          value: function upVoteComment() {
            var _this3 = this;

            this.posts.upVoteComment(this.postID, this.commentID, this.userEmail).subscribe(function (data) {
              var upvotes = data['upvotes'];
              var downvotes = data['downvotes'];
              console.log(data);

              _this3.upVoteCount$.next(upvotes);

              _this3.downVoteCount$.next(downvotes);

              _this3.currentUserUpvoted = true;
              _this3.upVoteLength = _this3.upVoteCount$.getValue();
              _this3.downVoteLength = _this3.downVoteCount$.getValue();

              if (_this3.currentUserUpvoted === true) {
                return _this3.currentUserDownvoted = false;
              }
            });
            this.upVoteCommentToast();
            this.refreshAfterComment();
          }
        }, {
          key: "upVoteCommentToast",
          value: function upVoteCommentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var upVotePostToast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toast.create({
                        cssClass: 'upvoted-toast',
                        message: 'You have UPVOTED this comment.',
                        duration: 2000
                      });

                    case 2:
                      upVotePostToast = _context3.sent;
                      upVotePostToast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "downVoteComment",
          value: function downVoteComment() {
            var _this4 = this;

            this.posts.downVoteComment(this.postID, this.commentID, this.userEmail).subscribe(function (data) {
              var upvotes = data['upvotes'];
              var downvotes = data['downvotes'];
              console.log(data);

              _this4.upVoteCount$.next(upvotes);

              _this4.downVoteCount$.next(downvotes);

              _this4.currentUserDownvoted = true;
              _this4.upVoteLength = _this4.upVoteCount$.getValue();
              _this4.downVoteLength = _this4.downVoteCount$.getValue();

              if (_this4.currentUserDownvoted === true) {
                return _this4.currentUserUpvoted = false;
              }
            });
            this.downVoteCommentToast();
            this.refreshAfterComment();
          }
        }, {
          key: "downVoteCommentToast",
          value: function downVoteCommentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var downVoteToast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toast.create({
                        cssClass: 'downvoted-toast',
                        message: 'You have DOWNVOTED this comment.',
                        duration: 2000
                      });

                    case 2:
                      downVoteToast = _context4.sent;
                      downVoteToast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return CommentVoteBarComponent;
      }();

      _CommentVoteBarComponent.ctorParameters = function () {
        return [{
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService
        }];
      };

      _CommentVoteBarComponent.propDecorators = {
        postID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        commentID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }]
      };
      _CommentVoteBarComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-comment-vote-bar',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comment_vote_bar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_comment_vote_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController, src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService])], _CommentVoteBarComponent);
      /***/
    },

    /***/
    64941:
    /*!*******************************************************!*\
      !*** ./src/app/components/custom-component.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomComponentsModule": function CustomComponentsModule() {
          return (
            /* binding */
            _CustomComponentsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./heart-icon/heart-icon.component */
      87811);
      /* harmony import */


      var _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./going-icon/going-icon.component */
      78520);
      /* harmony import */


      var _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-going-icon/not-going-icon.component */
      94661);
      /* harmony import */


      var _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./follow-icon/follow-icon.component */
      19648);
      /* harmony import */


      var _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./up-down-vote-buttons/up-down-vote-buttons.component */
      86812);
      /* harmony import */


      var _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./comment-vote-bar/comment-vote-bar.component */
      17855);
      /* harmony import */


      var _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./follow-comment-buttons/follow-comment-buttons.component */
      56264);
      /* harmony import */


      var _jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./jobs-filter-popover/jobs-filter-popover.component */
      99820);
      /* harmony import */


      var _posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./posts-filter-popover/posts-filter-popover.component */
      78546);
      /* harmony import */


      var _reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./reply-options-popover/reply-options-popover.component */
      56438);

      var _CustomComponentsModule = function CustomComponentsModule() {
        _classCallCheck(this, CustomComponentsModule);
      };

      _CustomComponentsModule = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot()],
        declarations: [_heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_0__.HeartIconComponent, _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_1__.GoingIconComponent, _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_2__.NotGoingIconComponent, _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_3__.FollowIconComponent, _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_4__.UpDownVoteButtonsComponent, _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_5__.CommentVoteBarComponent, _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_6__.FollowCommentButtonsComponent, _jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__.JobsFilterPopoverComponent, _posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_8__.PostsFilterPopoverComponent, _reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_9__.ReplyOptionsPopoverComponent],
        exports: [_heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_0__.HeartIconComponent, _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_1__.GoingIconComponent, _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_2__.NotGoingIconComponent, _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_3__.FollowIconComponent, _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_4__.UpDownVoteButtonsComponent, _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_5__.CommentVoteBarComponent, _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_6__.FollowCommentButtonsComponent, _jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__.JobsFilterPopoverComponent, _posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_8__.PostsFilterPopoverComponent, _reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_9__.ReplyOptionsPopoverComponent]
      })], _CustomComponentsModule);
      /***/
    },

    /***/
    56264:
    /*!***************************************************************************************!*\
      !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FollowCommentButtonsComponent": function FollowCommentButtonsComponent() {
          return (
            /* binding */
            _FollowCommentButtonsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_follow_comment_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./follow-comment-buttons.component.html */
      13707);
      /* harmony import */


      var _follow_comment_buttons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./follow-comment-buttons.component.scss */
      22787);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/post.service */
      69166);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      76491);

      var _FollowCommentButtonsComponent = /*#__PURE__*/function () {
        function FollowCommentButtonsComponent(router, posts, profile, toast) {
          _classCallCheck(this, FollowCommentButtonsComponent);

          this.router = router;
          this.posts = posts;
          this.profile = profile;
          this.toast = toast;
          this.comments = [];
          this.followers = [];
          this.following = false;
          this.followingLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
          this.followingLength = null;
          this.commentsLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
          this.commentsLength = null;
        }

        _createClass(FollowCommentButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            // Get information about post
            this.posts.getPostInfo(this.postID).subscribe(function (postDetails) {
              var comments = postDetails['comments'];
              var followers = postDetails['followers'];
              var following = false;

              _this5.profile.getUserDetails().subscribe(function (userDetails) {
                var userEmail = userDetails['email'];
                followers.find(findFollower);

                function findFollower(follower) {
                  if (!follower) {// User is not following post
                  }

                  if (follower === userEmail) {
                    following = true;
                  }
                }

                _this5.followers = followers;
                _this5.comments = comments;
                _this5.userEmail = userEmail;
                _this5.following = following;

                _this5.followingLength$.next(followers.length);

                _this5.followingLength$.subscribe(function (data) {
                  _this5.followingLength = data;
                });

                _this5.commentsLength$.next(followers.length);

                _this5.commentsLength$.subscribe(function (data) {
                  _this5.commentsLength = data;
                });
              });
            });
          }
        }, {
          key: "follow",
          value: function follow(postID) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return console.log('Following Post');

                    case 2:
                      _context5.next = 4;
                      return console.log(postID);

                    case 4:
                      _context5.next = 6;
                      return this.posts.followPost(postID, this.userEmail);

                    case 6:
                      this.following = true;
                      this.followingLength$.next(this.followingLength + 1);
                      _context5.next = 10;
                      return this.followToast();

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "followToast",
          value: function followToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var followToast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toast.create({
                        cssClass: 'followed-toast',
                        message: 'You are FOLLOWING this post',
                        duration: 2000
                      });

                    case 2:
                      followToast = _context6.sent;
                      followToast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "unFollow",
          value: function unFollow(postID) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return console.log('Unfollowing Post');

                    case 2:
                      _context7.next = 4;
                      return console.log(postID);

                    case 4:
                      _context7.next = 6;
                      return this.posts.unFollowPost(postID, this.userEmail);

                    case 6:
                      this.following = false;
                      this.followingLength$.next(this.followingLength - 1);
                      _context7.next = 10;
                      return this.unFollowToast();

                    case 10:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "unFollowToast",
          value: function unFollowToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var unFollowToast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toast.create({
                        cssClass: 'unfollowed-toast',
                        message: 'You are UNFOLLOWING this post',
                        duration: 2000
                      });

                    case 2:
                      unFollowToast = _context8.sent;
                      unFollowToast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "postPage",
          value: function postPage() {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/posts/post-page', this.postID]);
          }
        }]);

        return FollowCommentButtonsComponent;
      }();

      _FollowCommentButtonsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostsService
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }];
      };

      _FollowCommentButtonsComponent.propDecorators = {
        postID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        commentLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        postEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }]
      };
      _FollowCommentButtonsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-follow-comment-buttons',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_follow_comment_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_follow_comment_buttons_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router, src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostsService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController])], _FollowCommentButtonsComponent);
      /***/
    },

    /***/
    19648:
    /*!*****************************************************************!*\
      !*** ./src/app/components/follow-icon/follow-icon.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FollowIconComponent": function FollowIconComponent() {
          return (
            /* binding */
            _FollowIconComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_follow_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./follow-icon.component.html */
      9121);
      /* harmony import */


      var _follow_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./follow-icon.component.scss */
      51801);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/post.service */
      69166);

      var _FollowIconComponent = /*#__PURE__*/function () {
        function FollowIconComponent(posts) {
          _classCallCheck(this, FollowIconComponent);

          this.posts = posts;
          this.followState = 'not-followed';
          this.iconName = 'checkbox-outline';
        }

        _createClass(FollowIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleLikeState",
          value: function toggleLikeState(post) {
            if (this.followState === 'not-followed') {
              this.followState = 'followed';
              this.iconName = 'checkbox';
              console.log('Followed: ' + post._id + '\n' + this.userEmail);
              this.posts.followPost(post._id, this.userEmail);
            } else {
              this.followState = 'not-followed';
              this.iconName = 'checkbox-outline';
              console.log('Un-Followed');
              this.posts.unFollowPost(post._id, this.userEmail);
            }
          }
        }]);

        return FollowIconComponent;
      }();

      _FollowIconComponent.ctorParameters = function () {
        return [{
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService
        }];
      };

      _FollowIconComponent.propDecorators = {
        post: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        userEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _FollowIconComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-follow-icon',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_follow_icon_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('follow', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('not-followed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          color: '#d1d8e0',
          opacity: '0.4',
          transform: 'scale(0.9)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('followed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          color: '#21ce99',
          opacity: '1',
          transform: 'scale(1)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('not-followed <=> followed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('100ms ease-out'))])],
        styles: [_follow_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService])], _FollowIconComponent);
      /***/
    },

    /***/
    78520:
    /*!***************************************************************!*\
      !*** ./src/app/components/going-icon/going-icon.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GoingIconComponent": function GoingIconComponent() {
          return (
            /* binding */
            _GoingIconComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_going_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./going-icon.component.html */
      34971);
      /* harmony import */


      var _going_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./going-icon.component.scss */
      95266);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/events.service */
      80106);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/emitters/events-event-emitter.service */
      9193);

      var _GoingIconComponent = /*#__PURE__*/function () {
        function GoingIconComponent(events, eventsEventEmitterService, toast, router, profile) {
          _classCallCheck(this, GoingIconComponent);

          this.events = events;
          this.eventsEventEmitterService = eventsEventEmitterService;
          this.toast = toast;
          this.router = router;
          this.profile = profile;
          this.going = false;
          this.goingState = 'not-going';
          this.iconName = 'add-circle-outline';
        }

        _createClass(GoingIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            // Get the User's details
            this.profile.getUserDetails().subscribe(function (details) {
              _this6.userEmail = details['email'];
              var eventsGoing = details['eventsGoing'];

              if (eventsGoing.includes(_this6.event._id)) {
                _this6.going = true;
                _this6.goingState = 'going';
              } else {
                _this6.going = false;
                _this6.goingState = 'not-going';
              }
            });
          }
        }, {
          key: "toggleGoingState",
          value: function toggleGoingState(event) {
            var _this7 = this;

            if (this.goingState === 'not-going') {
              // Going
              this.goingState = 'going';
              this.iconName = 'close-circle-outline';
              this.going = true;
              this.goingToast();
              console.log("Going to event, ".concat(event.title));
              this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe(function (events) {
                var updatedEvents = [].concat(_toConsumableArray(Object.values(events['eventsGoing'])), [_this7.event._id]);

                _this7.events.eventsGoing$.next(updatedEvents);

                console.log(_this7.events.eventsGoing$.getValue());
              });
            } else {
              // Not Going
              this.goingState = 'not-going';
              this.iconName = 'add-circle-outline';
              this.going = false;
              this.notGoingToast();
              console.log('No longer going to Event');
              this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe(function (events) {
                var eventsGoing = _this7.events.eventsGoing$.getValue();

                for (var i = 0; i < eventsGoing.length; i++) {
                  if (eventsGoing[i] === _this7.event._id) {
                    eventsGoing.splice(i, 1);
                  }
                }

                console.log(eventsGoing);

                _this7.events.eventsGoing$.next(eventsGoing);
              });
            }
          }
        }, {
          key: "goingToast",
          value: function goingToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var toast;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.toast.create({
                        message: 'You are going to this event.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context9.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "notGoingToast",
          value: function notGoingToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var toast;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.toast.create({
                        message: 'You are no longer going to this event.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context10.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "eventPage",
          value: function eventPage(event) {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
          }
        }]);

        return GoingIconComponent;
      }();

      _GoingIconComponent.ctorParameters = function () {
        return [{
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService
        }, {
          type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService
        }];
      };

      _GoingIconComponent.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        userEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }]
      };
      _GoingIconComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-going-icon',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_going_icon_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('going', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('going', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          color: 'blue',
          opacity: '0.4',
          transition: '0.5s',
          transform: 'scale(0.9)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('not-going', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          color: '#21ce99',
          opacity: '1',
          transition: '0.5s',
          transform: 'scale(1)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('not-going <=> going', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('100ms ease-out'))])],
        styles: [_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService, src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController, _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService])], _GoingIconComponent);
      /***/
    },

    /***/
    87811:
    /*!***************************************************************!*\
      !*** ./src/app/components/heart-icon/heart-icon.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeartIconComponent": function HeartIconComponent() {
          return (
            /* binding */
            _HeartIconComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_heart_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./heart-icon.component.html */
      67330);
      /* harmony import */


      var _heart_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./heart-icon.component.scss */
      20970);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/favorites.service */
      85097);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);

      var _HeartIconComponent = /*#__PURE__*/function () {
        function HeartIconComponent(favorites, profile) {
          _classCallCheck(this, HeartIconComponent);

          this.favorites = favorites;
          this.profile = profile;
          this.iconName = 'heart';
        }

        _createClass(HeartIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.favoriteState = 'unfavorited';

            var _iterator = _createForOfIteratorHelper(this.favoriteJobs),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var favJob = _step.value;

                if (this.job._id === favJob['_id']) {
                  console.log('There was a match!');
                  return this.setFavoriteStateOn();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "toggleLikeState",
          value: function toggleLikeState() {
            if (this.favoriteState === 'unfavorited') {
              this.setFavoriteStateOn();
              return this.favorites.favoriteThisJob(this.job);
            } else {
              this.setFavoriteStateOff();
              return this.favorites.unFavoriteThisJob(this.job);
            }
          }
        }, {
          key: "setFavoriteStateOn",
          value: function setFavoriteStateOn() {
            this.favoriteState = 'favorited';
            this.iconName = 'heart';
          }
        }, {
          key: "setFavoriteStateOff",
          value: function setFavoriteStateOff() {
            this.favoriteState = 'unfavorited';
            this.iconName = 'heart';
          }
        }]);

        return HeartIconComponent;
      }();

      _HeartIconComponent.ctorParameters = function () {
        return [{
          type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesService
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService
        }];
      };

      _HeartIconComponent.propDecorators = {
        job: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        favoriteJobs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }]
      };
      _HeartIconComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-heart-icon',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_heart_icon_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('heart', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('unfavorited', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          color: '#999',
          opacity: '1',
          transform: 'scale(0.9)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('favorited', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          color: '#e4405f',
          opacity: '1',
          transform: 'scale(1)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('unfavorited <=> favorited', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('100ms ease-out'))])],
        styles: [_heart_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService])], _HeartIconComponent);
      /***/
    },

    /***/
    99820:
    /*!*********************************************************************************!*\
      !*** ./src/app/components/jobs-filter-popover/jobs-filter-popover.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobsFilterPopoverComponent": function JobsFilterPopoverComponent() {
          return (
            /* binding */
            _JobsFilterPopoverComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_jobs_filter_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./jobs-filter-popover.component.html */
      99969);
      /* harmony import */


      var _jobs_filter_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jobs-filter-popover.component.scss */
      45634);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/emitters/filter-jobs.service */
      67677);

      var _JobsFilterPopoverComponent = /*#__PURE__*/function () {
        function JobsFilterPopoverComponent(popoverController, filterJobsService) {
          _classCallCheck(this, JobsFilterPopoverComponent);

          this.popoverController = popoverController;
          this.filterJobsService = filterJobsService; // Initial Filter applied to each no page will be the newest filter.

          this.selection = null;
        }

        _createClass(JobsFilterPopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selection = this.filter;
            return;
          }
        }, {
          key: "selectOption",
          value: function selectOption(e) {
            this.selection = e.detail.value;
            console.log(this.selection);
            this.dismiss();
            return;
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.filterJobsService.filterBehaviorSub.next(this.selection);
            return this.popoverController.dismiss({
              data: this.selection
            });
          }
        }]);

        return JobsFilterPopoverComponent;
      }();

      _JobsFilterPopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController
        }, {
          type: src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_2__.FilterJobsService
        }];
      };

      _JobsFilterPopoverComponent.propDecorators = {
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ["filter"]
        }]
      };
      _JobsFilterPopoverComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-jobs-filter-popover',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_jobs_filter_popover_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_jobs_filter_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController, src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_2__.FilterJobsService])], _JobsFilterPopoverComponent);
      /***/
    },

    /***/
    94661:
    /*!***********************************************************************!*\
      !*** ./src/app/components/not-going-icon/not-going-icon.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotGoingIconComponent": function NotGoingIconComponent() {
          return (
            /* binding */
            _NotGoingIconComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_going_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./not-going-icon.component.html */
      24645);
      /* harmony import */


      var _not_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./not-going-icon.component.scss */
      59612);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/events.service */
      80106);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _NotGoingIconComponent = /*#__PURE__*/function () {
        function NotGoingIconComponent(events, toast) {
          _classCallCheck(this, NotGoingIconComponent);

          this.events = events;
          this.toast = toast;
          this.notGoingState = 'not-going';
          this.iconName = 'add-circle';
        }

        _createClass(NotGoingIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleNotGoingState",
          value: function toggleNotGoingState(event) {
            if (this.notGoingState === 'not-going') {
              this.notGoingState = 'going';
              this.iconName = 'close-circle-outline';
              this.goingToast();
              console.log("Going to event, ".concat(event.title));
              this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe();
            } else {
              this.notGoingState = 'not-not-going';
              this.iconName = 'add-circle-outline';
              this.notGoingToast();
              console.log('No longer going to Event');
              this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe();
            }
          }
        }, {
          key: "goingToast",
          value: function goingToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var toast;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.toast.create({
                        message: 'You are going to this event.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context11.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "notGoingToast",
          value: function notGoingToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var toast;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.toast.create({
                        message: 'You are no longer going to this event.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context12.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }]);

        return NotGoingIconComponent;
      }();

      _NotGoingIconComponent.ctorParameters = function () {
        return [{
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }];
      };

      _NotGoingIconComponent.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
        }],
        userEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
        }]
      };
      _NotGoingIconComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-not-going-icon',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_going_icon_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('notGoing', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('not-going', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          color: '#e4405f',
          opacity: '0.4',
          transition: '0.5s',
          transform: 'scale(0.9)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('not-not-going', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          color: '#21ce99',
          opacity: '1',
          transition: '0.5s',
          transform: 'scale(1)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('not-going <=> ot-not-going', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('100ms ease-out'))])],
        styles: [_not_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController])], _NotGoingIconComponent);
      /***/
    },

    /***/
    78546:
    /*!***********************************************************************************!*\
      !*** ./src/app/components/posts-filter-popover/posts-filter-popover.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PostsFilterPopoverComponent": function PostsFilterPopoverComponent() {
          return (
            /* binding */
            _PostsFilterPopoverComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_posts_filter_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./posts-filter-popover.component.html */
      72813);
      /* harmony import */


      var _posts_filter_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./posts-filter-popover.component.scss */
      4511);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/emitters/filter-posts.service */
      15588);

      var _PostsFilterPopoverComponent = /*#__PURE__*/function () {
        function PostsFilterPopoverComponent(popoverController, filterPostsService, navParams) {
          _classCallCheck(this, PostsFilterPopoverComponent);

          this.popoverController = popoverController;
          this.filterPostsService = filterPostsService;
          this.navParams = navParams; // Initial Filter applied to each no page will be the newest filter.

          this.selection = "newest";
        }

        _createClass(PostsFilterPopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.filterFromPostsPage = this.navParams.get('filter');
            this.selection = this.filterFromPostsPage;
          }
        }, {
          key: "selectOption",
          value: function selectOption(e) {
            this.selection = e.detail.value;
            console.log(this.selection);
            this.filterPostsService.filterPosts(this.selection);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.popoverController.dismiss({
              data: this.selection
            });
          }
        }]);

        return PostsFilterPopoverComponent;
      }();

      _PostsFilterPopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController
        }, {
          type: src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_2__.FilterPostsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
        }];
      };

      _PostsFilterPopoverComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-posts-filter-popover',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_posts_filter_popover_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_posts_filter_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController, src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_2__.FilterPostsService, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams])], _PostsFilterPopoverComponent);
      /***/
    },

    /***/
    56438:
    /*!*************************************************************************************!*\
      !*** ./src/app/components/reply-options-popover/reply-options-popover.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReplyOptionsPopoverComponent": function ReplyOptionsPopoverComponent() {
          return (
            /* binding */
            _ReplyOptionsPopoverComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reply_options_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reply-options-popover.component.html */
      20995);
      /* harmony import */


      var _reply_options_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reply-options-popover.component.scss */
      61778);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _ReplyOptionsPopoverComponent = /*#__PURE__*/function () {
        function ReplyOptionsPopoverComponent(popoverController, alertController, loadingController) {
          _classCallCheck(this, ReplyOptionsPopoverComponent);

          this.popoverController = popoverController;
          this.alertController = alertController;
          this.loadingController = loadingController;
        }

        _createClass(ReplyOptionsPopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectOption",
          value: function selectOption(e) {
            this.selection = e.detail.value;
            console.log(this.selection);

            switch (this.selection) {
              case 'edit':
                console.log('Editting!');
                break;

              case 'delete':
                console.log('Deleting!');
                this.presentAlertConfirm();
                break;

              case 'report':
                console.log('Reporting!');
                break;

              default:
                break;
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.popoverController.dismiss({
              data: this.selection
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Delete?',
                        message: 'Are you sure?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                                while (1) {
                                  switch (_context13.prev = _context13.next) {
                                    case 0:
                                      console.log('Deleting'); // TODO: Delete Reply

                                      _context13.next = 3;
                                      return this.deleteLoading();

                                    case 3:
                                      _context13.next = 5;
                                      return alert.dismiss();

                                    case 5:
                                    case "end":
                                      return _context13.stop();
                                  }
                                }
                              }, _callee13, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context14.sent;
                      _context14.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "deleteLoading",
          value: function deleteLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Deleting Reply ...',
                        duration: 1000
                      });

                    case 2:
                      loading = _context15.sent;
                      _context15.next = 5;
                      return loading.present();

                    case 5:
                      _context15.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context15.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return ReplyOptionsPopoverComponent;
      }();

      _ReplyOptionsPopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController
        }];
      };

      _ReplyOptionsPopoverComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-reply-options-popover',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reply_options_popover_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reply_options_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController])], _ReplyOptionsPopoverComponent);
      /***/
    },

    /***/
    86812:
    /*!***********************************************************************************!*\
      !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UpDownVoteButtonsComponent": function UpDownVoteButtonsComponent() {
          return (
            /* binding */
            _UpDownVoteButtonsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_up_down_vote_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./up-down-vote-buttons.component.html */
      6404);
      /* harmony import */


      var _up_down_vote_buttons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./up-down-vote-buttons.component.scss */
      82993);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/post.service */
      69166);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      50806);

      var _UpDownVoteButtonsComponent = /*#__PURE__*/function () {
        function UpDownVoteButtonsComponent(posts, profile, toast, postsEmitterService) {
          _classCallCheck(this, UpDownVoteButtonsComponent);

          this.posts = posts;
          this.profile = profile;
          this.toast = toast;
          this.postsEmitterService = postsEmitterService;
          this.upVotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
          this.downVotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
          this.followingLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
          this.followingLength = null;
          this.following = false;
          this.upVoters = [];
          this.downVoters = [];
          this.followers = [];
          this.upVoted = false;
          this.downVoted = false;
        }

        _createClass(UpDownVoteButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            // Get information about post
            this.posts.getPostInfo(this.postID).subscribe(function (postInfo) {
              _this9.upVotes = postInfo['upvotes'];
              _this9.downVotes = postInfo['downvotes'];
              _this9.upVoters = postInfo['upvoters'];
              _this9.downVoters = postInfo['downvoters'];
              var followers = postInfo['followers'];

              _this9.upVotes$.next(_this9.upVotes);

              _this9.downVotes$.next(_this9.downVotes);

              _this9.upVoteLength = _this9.upVotes$.getValue();
              _this9.downVoteLength = _this9.downVotes$.getValue(); // Get User Email

              _this9.profile.getUserDetails().subscribe(function (userDetails) {
                var userEmail = userDetails['email'];
                var following = false;
                var upVoted = false;
                var downVoted = false;
                followers.find(findFollower);

                function findFollower(follower) {
                  if (!follower) {// User is not following post
                  }

                  if (follower === userEmail) {
                    following = true;
                  }
                }

                _this9.upVoters.find(findUpVoter);

                _this9.downVoters.find(findDownVoter);

                function findUpVoter(upVoter) {
                  if (!upVoter) {}

                  if (upVoter === userEmail) {
                    return upVoted = true;
                  }

                  console.log("Upvoter: ".concat(upVoter));
                }

                function findDownVoter(downVoter) {
                  if (!downVoter) {}

                  if (downVoter === userEmail) {
                    return downVoted = true;
                  }
                }

                _this9.userEmail = userEmail;
                _this9.upVoted = upVoted;
                _this9.downVoted = downVoted;
                _this9.followers = followers;
                _this9.following = following;
                console.log(followers.length);

                _this9.followingLength$.next(followers.length);

                _this9.followingLength$.subscribe(function (data) {
                  _this9.followingLength = data;
                });
              });
            });
          }
        }, {
          key: "upVotePost",
          value: function upVotePost() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this10 = this;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.posts.upVotePost(this.postID, this.userEmail).subscribe(function (data) {
                        var upvotes = data['upvotes'];
                        var downvotes = data['downvotes'];
                        console.log(data);

                        _this10.upVotes$.next(upvotes);

                        _this10.downVotes$.next(downvotes);

                        _this10.upVoted = true;
                        _this10.upVoteLength = _this10.upVotes$.getValue();
                        _this10.downVoteLength = _this10.downVotes$.getValue();

                        if (_this10.upVoted === true) {
                          return _this10.downVoted = false;
                        }
                      });

                    case 2:
                      this.postsEmitterService.postPageRefresh();
                      this.upVotePostToast();

                    case 4:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "upVotePostToast",
          value: function upVotePostToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var upVotePostToast;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.toast.create({
                        cssClass: 'upvoted-toast',
                        message: 'You have UPVOTED this post.',
                        duration: 2000
                      });

                    case 2:
                      upVotePostToast = _context17.sent;
                      upVotePostToast.present();

                    case 4:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "downVotePost",
          value: function downVotePost() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.posts.downVotePost(this.postID, this.userEmail).subscribe(function (data) {
                        var upvotes = data['upvotes'];
                        var downvotes = data['downvotes'];
                        console.log(data);

                        _this11.upVotes$.next(upvotes);

                        _this11.downVotes$.next(downvotes);

                        _this11.downVoted = true;
                        _this11.upVoteLength = _this11.upVotes$.getValue();
                        _this11.downVoteLength = _this11.downVotes$.getValue();

                        if (_this11.downVoted === true) {
                          return _this11.upVoted = false;
                        }
                      });

                    case 2:
                      this.postsEmitterService.postPageRefresh();
                      this.downVoteToast();

                    case 4:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "downVoteToast",
          value: function downVoteToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var downVoteToast;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.toast.create({
                        cssClass: 'downvoted-toast',
                        message: 'You have DOWNVOTED this post.',
                        duration: 2000
                      });

                    case 2:
                      downVoteToast = _context19.sent;
                      downVoteToast.present();

                    case 4:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "follow",
          value: function follow(postID) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return console.log('Following Post');

                    case 2:
                      _context20.next = 4;
                      return console.log(postID);

                    case 4:
                      _context20.next = 6;
                      return this.posts.followPost(postID, this.postEmail);

                    case 6:
                      this.following = true;
                      this.followingLength$.next(this.followingLength + 1);
                      _context20.next = 10;
                      return this.followToast();

                    case 10:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "followToast",
          value: function followToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var followToast;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.toast.create({
                        cssClass: 'followed-toast',
                        message: 'You are FOLLOWING this post',
                        duration: 2000
                      });

                    case 2:
                      followToast = _context21.sent;
                      followToast.present();

                    case 4:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "unFollow",
          value: function unFollow(postID) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return console.log('Unfollowing Post');

                    case 2:
                      _context22.next = 4;
                      return console.log(postID);

                    case 4:
                      _context22.next = 6;
                      return this.posts.unFollowPost(postID, this.postEmail);

                    case 6:
                      this.following = false;
                      this.followingLength$.next(this.followingLength - 1);
                      _context22.next = 10;
                      return this.unFollowToast();

                    case 10:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "unFollowToast",
          value: function unFollowToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var unFollowToast;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.toast.create({
                        cssClass: 'unfollowed-toast',
                        message: 'You are UNFOLLOWING this post',
                        duration: 2000
                      });

                    case 2:
                      unFollowToast = _context23.sent;
                      unFollowToast.present();

                    case 4:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }]);

        return UpDownVoteButtonsComponent;
      }();

      _UpDownVoteButtonsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService
        }];
      };

      _UpDownVoteButtonsComponent.propDecorators = {
        postID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        postEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }],
        isUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }]
      };
      _UpDownVoteButtonsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-up-down-vote-buttons',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_up_down_vote_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_up_down_vote_buttons_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController, src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService])], _UpDownVoteButtonsComponent);
      /***/
    },

    /***/
    9193:
    /*!**********************************************************!*\
      !*** ./src/app/emitters/events-event-emitter.service.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventsEventEmitterService": function EventsEventEmitterService() {
          return (
            /* binding */
            _EventsEventEmitterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _EventsEventEmitterService = /*#__PURE__*/function () {
        function EventsEventEmitterService() {
          _classCallCheck(this, EventsEventEmitterService);

          this.invokeEventsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(EventsEventEmitterService, [{
          key: "onBackAction",
          value: function onBackAction() {
            this.invokeEventsPageRefresh.emit();
          }
        }, {
          key: "resetEvents",
          value: function resetEvents() {
            console.log('Reseting Events Page');
            this.invokeEventsPageRefresh.emit();
          }
        }]);

        return EventsEventEmitterService;
      }();

      _EventsEventEmitterService.ctorParameters = function () {
        return [];
      };

      _EventsEventEmitterService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], _EventsEventEmitterService);
      /***/
    },

    /***/
    81615:
    /*!*************************************************************!*\
      !*** ./src/app/emitters/favorites-event-emitter.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoritesEventEmitterService": function FavoritesEventEmitterService() {
          return (
            /* binding */
            _FavoritesEventEmitterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FavoritesEventEmitterService = /*#__PURE__*/function () {
        function FavoritesEventEmitterService() {
          _classCallCheck(this, FavoritesEventEmitterService);

          this.invokeJobsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(FavoritesEventEmitterService, [{
          key: "onBackAction",
          value: function onBackAction() {
            this.invokeJobsPageRefresh.emit();
          }
        }]);

        return FavoritesEventEmitterService;
      }();

      _FavoritesEventEmitterService.ctorParameters = function () {
        return [];
      };

      _FavoritesEventEmitterService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], _FavoritesEventEmitterService);
      /***/
    },

    /***/
    67677:
    /*!*************************************************!*\
      !*** ./src/app/emitters/filter-jobs.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilterJobsService": function FilterJobsService() {
          return (
            /* binding */
            _FilterJobsService
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


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      76491);

      var _FilterJobsService = /*#__PURE__*/function () {
        function FilterJobsService() {
          _classCallCheck(this, FilterJobsService);

          this.filterBehaviorSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('newest');
        }

        _createClass(FilterJobsService, [{
          key: "filterJobs",
          value: function filterJobs(selection) {
            console.log('Emitting from FilterJobs Emitter...');
            this.filterBehaviorSub.next(selection);
          }
        }]);

        return FilterJobsService;
      }();

      _FilterJobsService.ctorParameters = function () {
        return [];
      };

      _FilterJobsService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], _FilterJobsService);
      /***/
    },

    /***/
    15588:
    /*!**************************************************!*\
      !*** ./src/app/emitters/filter-posts.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilterPostsService": function FilterPostsService() {
          return (
            /* binding */
            _FilterPostsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FilterPostsService = /*#__PURE__*/function () {
        function FilterPostsService() {
          _classCallCheck(this, FilterPostsService);

          this.filterPostsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(FilterPostsService, [{
          key: "filterPosts",
          value: function filterPosts(selection) {
            console.log('Emitting from FilterPosts Emitter...');
            this.filterPostsEmitter.emit(selection);
          }
        }]);

        return FilterPostsService;
      }();

      _FilterPostsService.ctorParameters = function () {
        return [];
      };

      _FilterPostsService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], _FilterPostsService);
      /***/
    },

    /***/
    50806:
    /*!*******************************************************!*\
      !*** ./src/app/emitters/post-page-emitter.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PostPageEmitterService": function PostPageEmitterService() {
          return (
            /* binding */
            _PostPageEmitterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _PostPageEmitterService = /*#__PURE__*/function () {
        function PostPageEmitterService() {
          _classCallCheck(this, PostPageEmitterService);

          this.invokePostsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(PostPageEmitterService, [{
          key: "onBackAction",
          value: function onBackAction() {
            this.invokePostsPageRefresh.emit();
          }
        }, {
          key: "postPageRefresh",
          value: function postPageRefresh() {
            this.invokePostsPageRefresh.emit();
          }
        }]);

        return PostPageEmitterService;
      }();

      _PostPageEmitterService.ctorParameters = function () {
        return [];
      };

      _PostPageEmitterService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], _PostPageEmitterService);
      /***/
    },

    /***/
    78968:
    /*!************************************************!*\
      !*** ./src/app/services/auth-guard.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuardService": function AuthGuardService() {
          return (
            /* binding */
            _AuthGuardService
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      37556);

      var _AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(auth) {
          _classCallCheck(this, AuthGuardService);

          this.auth = auth;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            return this.auth.isAuthenticated();
          }
        }]);

        return AuthGuardService;
      }();

      _AuthGuardService.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
        }];
      };

      _AuthGuardService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService])], _AuthGuardService);
      /***/
    },

    /***/
    37556:
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      69956);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      12314);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);

      var _AuthService = /*#__PURE__*/function () {
        function AuthService(http, storage, alertController, helper, plt, router, toast) {
          var _this12 = this;

          _classCallCheck(this, AuthService);

          this.http = http;
          this.storage = storage;
          this.alertController = alertController;
          this.helper = helper;
          this.plt = plt;
          this.router = router;
          this.toast = toast;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url;
          this.TOKEN_KEY = 'access_token';
          this.user = null;
          this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
          this.activeEmail = ''; //  Define type

          this.userInfo = {
            fullName: '',
            about: '',
            gender: '',
            dob: '',
            phone: '',
            school: '',
            grade: '',
            profilePicture: '',
            resume: '',
            email: '',
            password: ''
          }; // Inside the constructor we always check for an existing token so we can automatically log in a user

          this.plt.ready().then(function () {
            _this12.checkToken();

            _this12.getEmailFromToken();
          });
          console.log('Authentication State');
          this.authenticationState.subscribe(console.log);
        } // tslint:disable-next-line: use-lifecycle-interface


        _createClass(AuthService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "cancelSignUp",
          value: function cancelSignUp() {
            this.user = {
              fullName: '',
              about: '',
              gender: '',
              dob: '',
              phone: '',
              school: '',
              grade: '',
              profilePicture: '',
              resume: '',
              email: '',
              password: ''
            };
            this.router.navigateByUrl('');
            this.cancelSignUpToast();
          } // Get UserInfo -- testing purposes. Delete eventually.

        }, {
          key: "getUserInfo",
          value: function getUserInfo() {
            console.log(this.userInfo);
          } //  Sign up Functions

        }, {
          key: "getPersonalInfo",
          value: function getPersonalInfo(data) {
            console.log('Sent Personal Infoto Auth Service: ');
            this.userInfo.fullName = data.fullName;
            this.userInfo.phone = data.phone;
            this.userInfo.about = data.about;
            this.userInfo.gender = data.gender;
            this.userInfo.dob = data.dob;
            this.userInfo.school = data.school;
            this.userInfo.grade = data.grade;
          }
        }, {
          key: "getProfilePicture",
          value: function getProfilePicture(data) {
            console.log('Sending Profile Picture URL to Auth Service...');
            this.userInfo.profilePicture = data;
            console.log(this.userInfo);
          }
        }, {
          key: "getResume",
          value: function getResume(data) {
            console.log('data from auth service: ' + data);
            console.log('Sent Resume to Auth Service');
            this.userInfo.resume = data;
            console.log(this.userInfo);
          }
        }, {
          key: "getLoginCredentials",
          value: function getLoginCredentials(email, password) {
            console.log('Sent Login Credentials to Auth Service');
            this.userInfo.email = email;
            this.userInfo.password = password;
            console.log(this.userInfo);
          }
        }, {
          key: "doesUserExists",
          value: function doesUserExists(email, password) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/signup/does-user-exist"), {
              email: email,
              password: password
            });
          } // looks up our storage for a valid JWT and if found, changes our authenticationState

        }, {
          key: "checkToken",
          value: function checkToken() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this13 = this;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      this.storage.get(this.TOKEN_KEY).then(function (token) {
                        if (token) {
                          var decoded = _this13.helper.decodeToken(token);

                          var isExpired = _this13.helper.isTokenExpired(token);

                          if (!isExpired) {
                            _this13.user = decoded;
                            console.log('Decoded Token: ' + JSON.stringify(decoded));

                            _this13.authenticationState.next(true);
                          } else {
                            console.log('Token Removed from Storage');

                            _this13.storage.remove(_this13.TOKEN_KEY);
                          }
                        }
                      });

                    case 1:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "checkIfUserExits",
          value: function checkIfUserExits(email) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/forgot-password"), {
              email: email
            });
          }
        }, {
          key: "getEmailFromToken",
          value: function getEmailFromToken() {
            var _this14 = this;

            this.storage.get(this.TOKEN_KEY).then(function (token) {
              if (token) {
                var decoded = _this14.helper.decodeToken(token);

                console.log('Token Email: ' + decoded.email);
                _this14.activeEmail = decoded.email;
              }
            });
          } //  Needs the Resonse Type to be text because I am sending the code, which isn't in JSON format

        }, {
          key: "sendEmailWithCode",
          value: function sendEmailWithCode(code, email) {
            console.log('almost there');
            return this.http.post("".concat(this.BACKEND_URL, "/api/login-credentials"), {
              code: code,
              email: email
            }).subscribe();
          }
        }, {
          key: "sendEmailWithCodeForgotPassword",
          value: function sendEmailWithCodeForgotPassword(code, email) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/forgot-password/email-code"), {
              code: code,
              email: email
            }).subscribe();
          } // Register User

        }, {
          key: "register",
          value: function register() {
            this.http.post("".concat(this.BACKEND_URL, "/api/signup"), this.userInfo).subscribe();
          } // Login User

        }, {
          key: "login",
          value: function login(data) {
            var _this15 = this;

            console.log('Logging in');
            return this.loginSub = this.http.post("".concat(this.BACKEND_URL, "/api"), {
              email: data.email,
              password: data.password
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (res) {
              if (!res) {
                console.log('There was no response.');
              }

              _this15.storage.set(_this15.TOKEN_KEY, res['token']);

              _this15.user = _this15.helper.decodeToken(res['token']);
              _this15.activeEmail = _this15.user.email;

              _this15.authenticationState.next(true);

              console.log('Active User: ' + _this15.user.email);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (e) {
              console.error(e);

              if (e.error.msg === 'The email and password don\'t match.') {
                _this15.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
              } else if (e.error.msg === 'The user does not exist') {
                _this15.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
              } else if (e.message.startsWith('Http failure response')) {
                _this15.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
              } else {
                _this15.presentAlert('Email/Password Error', 'Please try again.');
              }

              throw new Error(e);
            })).subscribe();
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var toast;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.toast.create({
                        message: 'There was an error with your password or email. Please try again.',
                        duration: 5000,
                        cssClass: 'wrong-password-toast',
                        keyboardClose: true,
                        position: 'top'
                      });

                    case 2:
                      toast = _context25.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "cancelSignUpToast",
          value: function cancelSignUpToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var toast;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return this.toast.create({
                        message: 'You have cancelled signing up.',
                        duration: 2000,
                        cssClass: 'danger-toast',
                        keyboardClose: true
                      });

                    case 2:
                      toast = _context26.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var alert;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return this.alertController.create({
                        cssClass: 'danger-alert',
                        header: header,
                        message: msg,
                        buttons: [{
                          text: 'OK'
                        }]
                      });

                    case 2:
                      alert = _context27.sent;
                      _context27.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(email, newPassword) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/login-credentials/forgot-password"), {
              email: email,
              newPassword: newPassword
            }).subscribe();
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this16 = this;

            this.storage.remove(this.TOKEN_KEY).then(function (token) {
              console.log('Logging out...');
              _this16.user = null;
              _this16.userInfo = {
                fullName: '',
                about: '',
                phone: '',
                gender: '',
                dob: '',
                school: '',
                grade: '',
                profilePicture: '',
                resume: '',
                email: '',
                password: ''
              }, _this16.authenticationState.next(false); // window.location.reload();
            });
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.authenticationState.value;
          }
        }]);

        return AuthService;
      }();

      _AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
        }];
      };

      _AuthService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient, _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController])], _AuthService);
      /***/
    },

    /***/
    80106:
    /*!********************************************!*\
      !*** ./src/app/services/events.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventsService": function EventsService() {
          return (
            /* binding */
            _EventsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);

      var _EventsService = /*#__PURE__*/function () {
        function EventsService(http, profile) {
          _classCallCheck(this, EventsService);

          this.http = http;
          this.profile = profile;
          this.eventsGoing$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        }

        _createClass(EventsService, [{
          key: "getEvents",
          value: function getEvents() {
            console.log('Getting Events');
            return this.http.get("".concat(this.BACKEND_URL, "/api/events"));
          }
        }, {
          key: "getEventsGoing",
          value: function getEventsGoing(id) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/events/events-going"), {
              _id: id
            });
          }
        }, {
          key: "goingToEvent",
          value: function goingToEvent(eventID, userEmail, id) {
            console.log(this.profile);
            return this.http.post("".concat(this.BACKEND_URL, "/api/events/go-to-event"), {
              eventID: eventID,
              userEmail: userEmail,
              id: id
            });
          }
        }, {
          key: "notGoingToEvent",
          value: function notGoingToEvent(eventID, userEmail, id) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/events/dont-go-to-event"), {
              userEmail: userEmail,
              eventID: eventID,
              id: id
            });
          }
        }, {
          key: "deleteEvent",
          value: function deleteEvent(eventId) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/events/delete-event"), {
              _id: eventId
            });
          }
        }]);

        return EventsService;
      }();

      _EventsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService
        }];
      };

      _EventsService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService])], _EventsService);
      /***/
    },

    /***/
    85097:
    /*!***********************************************!*\
      !*** ./src/app/services/favorites.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoritesService": function FavoritesService() {
          return (
            /* binding */
            _FavoritesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _FavoritesService = /*#__PURE__*/function () {
        function FavoritesService(http, profile, toast) {
          _classCallCheck(this, FavoritesService);

          this.http = http;
          this.profile = profile;
          this.toast = toast;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url;
          this.favoriteJobs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        }

        _createClass(FavoritesService, [{
          key: "getFavorites",
          value: function getFavorites(email) {
            console.log('Getting Favorites');
            return this.http.post("".concat(this.BACKEND_URL, "/api/jobs/get-favorites"), {
              email: email
            });
          }
        }, {
          key: "favoriteThisJob",
          value: function favoriteThisJob(job) {
            var _this17 = this;

            // get user's email for database query
            var email = this.profile.activeEmail; // put this job's id into this user's favoriteJobs property

            job.userEmail = email;
            var id = job._id; // this.favoriteJobs$.next([job]);

            return this.http.post("".concat(this.BACKEND_URL, "/api/jobs/favorite"), {
              email: email,
              _id: id
            }).subscribe(function (data) {
              console.log('Posting Favorite Job to Database..');

              var updatedFavorites = _toConsumableArray(Object.values(data));

              _this17.favoriteJobs$.next(updatedFavorites);

              _this17.presentToastFavorited('You favorited this job!');
            });
          }
        }, {
          key: "unFavoriteThisJob",
          value: function unFavoriteThisJob(job) {
            var _this18 = this;

            // get user's email for database query
            var email = this.profile.activeEmail;
            job.userEmail = email;
            var id = job._id; // post to database

            this.http.post("".concat(this.BACKEND_URL, "/api/jobs/unfavorite"), {
              email: email,
              _id: id
            }).subscribe(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
                var updatedFavorites;
                return regeneratorRuntime.wrap(function _callee28$(_context28) {
                  while (1) {
                    switch (_context28.prev = _context28.next) {
                      case 0:
                        console.log("Unfavorite data value: ", data);
                        updatedFavorites = _toConsumableArray(Object.values(data)); // for (let i = 0; i < updatedFavorites.length; i++) {
                        //   if (updatedFavorites[i] === job) {
                        //     updatedFavorites.splice(i, 1);
                        //   }
                        // }

                        this.favoriteJobs$.next(updatedFavorites);
                        this.presentToastUnfavorited('You removed this job from Favorites.');

                      case 4:
                      case "end":
                        return _context28.stop();
                    }
                  }
                }, _callee28, this);
              }));
            }); // update favoriteJobsSubject

            console.log('Unfavoriting this Job');
          }
        }, {
          key: "presentToastFavorited",
          value: function presentToastFavorited(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var toast;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return this.toast.create({
                        message: msg,
                        duration: 3000,
                        cssClass: 'favorited-toast',
                        position: 'bottom'
                      });

                    case 2:
                      toast = _context29.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "presentToastUnfavorited",
          value: function presentToastUnfavorited(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var toast;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.toast.create({
                        message: msg,
                        duration: 3000,
                        cssClass: 'unfavorited-toast',
                        position: 'bottom'
                      });

                    case 2:
                      toast = _context30.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }]);

        return FavoritesService;
      }();

      _FavoritesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }];
      };

      _FavoritesService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController])], _FavoritesService);
      /***/
    },

    /***/
    79744:
    /*!***************************************************!*\
      !*** ./src/app/services/notifications.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationsService": function NotificationsService() {
          return (
            /* binding */
            _NotificationsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      61531);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      29845);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      33392);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      12702);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491); // export const WS_ENDPOINT = environment.wsEndpoint;


      var _NotificationsService = /*#__PURE__*/function () {
        function NotificationsService(http) {
          _classCallCheck(this, NotificationsService);

          this.http = http;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
          this.notifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
          this.messagesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          this.messages$ = this.messagesSubject$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchAll)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (e) {
            throw e;
          }));
        }

        _createClass(NotificationsService, [{
          key: "getNotifications",
          value: function getNotifications(email) {
            console.log('Getting Notifications');
            console.log(email);
            return this.http.post("".concat(this.BACKEND_URL, "/api/notifications"), {
              email: email
            });
          }
        }, {
          key: "clearNotifications",
          value: function clearNotifications(email) {
            console.log('Clearing Notifications');
            console.log(email);
            return this.http.post("".concat(this.BACKEND_URL, "/api/notifications/clear-notifications"), {
              email: email
            });
          }
        }, {
          key: "deleteNotification",
          value: function deleteNotification(email, notiID) {
            console.log('Attemtpting to delete notification');
            return this.http.post("".concat(this.BACKEND_URL, "/api/notifications/delete-notification"), {
              email: email,
              notiID: notiID
            });
          }
        }, {
          key: "commentNotification",
          value: function commentNotification(instigatingUser, recievingUser, postID, commentID) {
            var _this19 = this;

            console.log("Sending notfication to ".concat(recievingUser, " that ").concat(instigatingUser, " commented on their post.")); // tslint:disable-next-line: max-line-length

            return this.http.post("".concat(this.BACKEND_URL, "/api/notifications/comment-on-post-notification"), {
              instigatingUser: instigatingUser,
              recievingUser: recievingUser,
              postID: postID,
              commentID: commentID
            }).subscribe(function (n) {
              console.log(n);

              _this19.sendMessageWS(n);
            });
          }
        }, {
          key: "replyNotification",
          value: function replyNotification(instigatingUser, recievingUser, postID, commentID, replyID) {
            console.log("Sending notfication to ".concat(recievingUser, " that ").concat(instigatingUser, " commented on their post.")); // tslint:disable-next-line: max-line-length

            return this.http.post("".concat(this.BACKEND_URL, "/api/notifications/reply-on-comment-notification"), {
              instigatingUser: instigatingUser,
              recievingUser: recievingUser,
              postID: postID,
              commentID: commentID,
              replyID: replyID
            });
          } // public connect(cfg: { reconnect: boolean } = { reconnect: false }): void {
          //   console.log('Attempting to connect to WebSocket.');
          //   console.log(cfg);
          //   if (!this.socket$ || this.socket$.closed) {
          //     this.socket$ = this.getNewWebSocket();
          //     this.socket$.subscribe(
          //       (socket) => {
          //         console.log(socket)
          //       });
          //     const messages = this.socket$.pipe(cfg.reconnect ? this.reconnect : o => o,
          //       tap({
          //         error: error => console.log(error),
          //       }), catchError(_ => EMPTY))
          //     this.messagesSubject$.next(messages);
          //   }
          // }
          // private getNewWebSocket() {
          //   console.log('Creating new WebSocket');
          //   return webSocket({
          //     url: WS_ENDPOINT,
          //     serializer: msg => JSON.stringify({roles: "admin,user", msg: msg}),
          //     deserializer: ({data}) => data,
          //     closeObserver: {
          //       next: () => {
          //         console.log('Service: connection closed');
          //         this.socket$ = undefined;
          //         this.connect({ reconnect: true });
          //       }
          //     }
          //   });
          // }

        }, {
          key: "reconnect",
          value: function reconnect(observable) {
            return observable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(function (errors) {
              return errors.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (val) {
                return console.log('[Data Service] Try to reconnect', val);
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delayWhen)(function (_) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(2000);
              }));
            }));
          }
        }, {
          key: "sendMessageWS",
          value: function sendMessageWS(notifications) {
            console.log('Sending Message to WebSocket');
            console.log(notifications);
            this.socket$.next(notifications);
          }
        }, {
          key: "close",
          value: function close() {
            this.socket$.complete();
          }
        }]);

        return NotificationsService;
      }();

      _NotificationsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }];
      };

      _NotificationsService = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient])], _NotificationsService);
      /***/
    },

    /***/
    69166:
    /*!******************************************!*\
      !*** ./src/app/services/post.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PostsService": function PostsService() {
          return (
            /* binding */
            _PostsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/profile.service */
      39181);

      var _PostsService = /*#__PURE__*/function () {
        function PostsService(http, profile) {
          _classCallCheck(this, PostsService);

          this.http = http;
          this.profile = profile;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
          this.postsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.commentsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.followingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.myPostSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        }

        _createClass(PostsService, [{
          key: "getPosts",
          value: function getPosts() {
            // console.log('Getting Posts');
            return this.http.get("".concat(this.BACKEND_URL, "/api/posts/"));
          }
        }, {
          key: "getMyPosts",
          value: function getMyPosts(email) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/my-posts"), {
              email: email
            });
          }
        }, {
          key: "getPostInfo",
          value: function getPostInfo(id) {
            // console.log(`Getting information for post id ${id}`);
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/post-info"), {
              _id: id
            });
          }
        }, {
          key: "addPost",
          value: function addPost(creatorName, creatorEmail, creatorProfilePicture, hashtags, post, title) {
            console.log('Adding post to post que...');
            console.log('Post: ', post);
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/add-text-post"), {
              creatorName: creatorName,
              creatorEmail: creatorEmail,
              creatorProfilePicture: creatorProfilePicture,
              hashtags: hashtags,
              post: post,
              title: title
            });
          }
        }, {
          key: "comment",
          value: function comment(postID, userFullName, userEmail, userProfilePicture, _comment) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/comment"), {
              postID: postID,
              userFullName: userFullName,
              userEmail: userEmail,
              userProfilePicture: userProfilePicture,
              comment: _comment
            });
          }
        }, {
          key: "editPost",
          value: function editPost(postID, newPost) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/edit-post"), {
              postID: postID,
              newPost: newPost
            });
          }
        }, {
          key: "editComment",
          value: function editComment(commentID, postID, newComment) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/edit-comment"), {
              postID: postID,
              commentID: commentID,
              newComment: newComment
            });
          } // Upvote Post

        }, {
          key: "upVotePost",
          value: function upVotePost(postID, userEmail) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/up-vote-post"), {
              postID: postID,
              userEmail: userEmail
            });
          } // Downvote Post

        }, {
          key: "downVotePost",
          value: function downVotePost(postID, userEmail) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/down-vote-post"), {
              postID: postID,
              userEmail: userEmail
            });
          } // Upvote

        }, {
          key: "upVoteComment",
          value: function upVoteComment(postID, commentID, userEmail) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/up-vote-comment"), {
              postID: postID,
              commentID: commentID,
              userEmail: userEmail
            });
          } // Downvote

        }, {
          key: "downVoteComment",
          value: function downVoteComment(postID, commentID, userEmail) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/down-vote-comment"), {
              postID: postID,
              commentID: commentID,
              userEmail: userEmail
            });
          }
        }, {
          key: "followPost",
          value: function followPost(postID, userEmail) {
            var _this20 = this;

            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/follow"), {
              _id: postID,
              email: userEmail
            }).subscribe(function (data) {
              var updatedFollowingPosts = _toConsumableArray(Object.values(data));

              _this20.followingSubject$.next(updatedFollowingPosts);
            });
          }
        }, {
          key: "unFollowPost",
          value: function unFollowPost(postID, userEmail) {
            var _this21 = this;

            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/unfollow"), {
              _id: postID,
              email: userEmail
            }).subscribe(function (data) {
              var updatedFollowingPosts = _toConsumableArray(Object.values(data));

              _this21.followingSubject$.next(updatedFollowingPosts);
            });
          }
        }, {
          key: "getFollowedPost",
          value: function getFollowedPost(userId) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/get-followed-posts"), {
              _id: userId
            });
          }
        }, {
          key: "deleteComment",
          value: function deleteComment(postID, commentID) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/delete-comment"), {
              _id: postID,
              _cid: commentID
            });
          }
        }, {
          key: "deletePost",
          value: function deletePost(postID) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/delete-post"), {
              _id: postID
            });
          } // tslint:disable-next-line: max-line-length

        }, {
          key: "reportComment",
          value: function reportComment(commentID, commentContents, post, postID, reportedUserName, reportedUserProfilePicture, reportedUserEmail, commentDate, userEmail, userFullname, reportReason) {
            // tslint:disable-next-line: max-line-length
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/report"), {
              commentID: commentID,
              commentContents: commentContents,
              post: post,
              postID: postID,
              reportedUserName: reportedUserName,
              reportedUserProfilePicture: reportedUserProfilePicture,
              reportedUserEmail: reportedUserEmail,
              commentDate: commentDate,
              userEmail: userEmail,
              userFullname: userFullname,
              reportReason: reportReason
            });
          }
        }, {
          key: "replyComment",
          value: function replyComment(commentID, postID, reply, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
            // tslint:disable-next-line: max-line-length
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/reply-comment"), {
              postID: postID,
              commentID: commentID,
              reply: reply,
              userFullName: userFullName,
              userProfilePicture: userProfilePicture,
              userEmail: userEmail,
              commentUserEmail: commentUserEmail,
              commentUserFullName: commentUserFullName
            });
          }
        }, {
          key: "deleteReply",
          value: function deleteReply(replyID, commentID, postID) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/posts/delete-reply"), {
              _rid: replyID,
              _cid: commentID,
              _pid: postID
            });
          }
        }]);

        return PostsService;
      }();

      _PostsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService
        }];
      };

      _PostsService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient, _services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService])], _PostsService);
      /***/
    },

    /***/
    39181:
    /*!*********************************************!*\
      !*** ./src/app/services/profile.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileService": function ProfileService() {
          return (
            /* binding */
            _ProfileService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      69956);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/auth.service */
      37556);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      12314);

      var _ProfileService = /*#__PURE__*/function () {
        function ProfileService(http, storage, alertController, helper, auth, router, toastController) {
          _classCallCheck(this, ProfileService);

          this.http = http;
          this.storage = storage;
          this.alertController = alertController;
          this.helper = helper;
          this.auth = auth;
          this.router = router;
          this.toastController = toastController;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url;
          this.activeEmail = ''; // user = {};

          this.fullName = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.about = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.city = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.state = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.zip = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.gender = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.dob = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.school = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.grade = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.profilePicture = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.resume = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.email = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
          this.phone = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(''); // Needs the User's email address from the JSON Web Token stored on device.

          this.activeEmail = this.auth.user.email;
        }

        _createClass(ProfileService, [{
          key: "getAllUsers",
          value: function getAllUsers() {
            return this.http.get("".concat(this.BACKEND_URL, "/api/home/user"));
          } //  Gets User Details from Server to populate the Profile tab with User information.

        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            return this.http.post("".concat(this.BACKEND_URL, "/api/home/user"), {
              email: this.activeEmail
            });
          }
        }, {
          key: "getTheirDetails",
          value: function getTheirDetails(email) {
            return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/their-details"), {
              email: email
            });
          }
        }, {
          key: "changeEmail",
          value: function changeEmail(newEmail, password) {
            var _this22 = this;

            // tslint:disable-next-line: max-line-length
            return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-email"), {
              oldEmail: this.activeEmail,
              email: newEmail,
              password: password
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (e) {
              _this22.presentFailToast(_this22.activeEmail);

              throw new Error(e);
            })).subscribe(function (data) {
              if (data === true) {
                _this22.email.next(newEmail);

                _this22.activeEmail = newEmail;

                _this22.router.navigate(['/home/profile']);

                _this22.presentSuccessToast();
              } else {
                _this22.presentFailToast(_this22.activeEmail);

                return console.log('Passwords dont match');
              }
            });
          }
        }, {
          key: "changePhone",
          value: function changePhone(newPhone, password) {
            var _this23 = this;

            // tslint:disable-next-line: max-line-length
            return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-phone"), {
              email: this.email,
              newPhone: newPhone,
              password: password
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (e) {
              _this23.presentFailToast(_this23.activeEmail);

              throw new Error(e);
            })).subscribe(function (data) {
              if (data === true) {
                _this23.phone.next(newPhone);

                _this23.phone = newPhone;

                _this23.router.navigate(['/home/profile']);

                _this23.presentSuccessToast();
              } else {
                _this23.presentFailToast(_this23.activeEmail);

                return console.log('Passwords dont match');
              }
            });
          } // Toast for Successful Change

        }, {
          key: "presentSuccessToast",
          value: function presentSuccessToast() {
            var successToast = this.toastController.create({
              message: 'Your Email address has been updated.',
              duration: 3000,
              cssClass: 'updated-toast',
              keyboardClose: true,
              position: 'bottom'
            });
            successToast.then(function (t) {
              return t.present();
            });
          }
        }, {
          key: "presentFailToast",
          value: function presentFailToast(email) {
            // Toast for Successful Change
            var failToast = this.toastController.create({
              // tslint:disable-next-line: max-line-length
              message: "Password and Email combination do not work. Make sure that your password is correct, and that your new email is different from your current email address of ".concat(email),
              duration: 9000,
              cssClass: 'wrong-password-toast',
              keyboardClose: true,
              position: 'top'
            });
            failToast.then(function (t) {
              return t.present();
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword(activeEmail, oldPassword, newPassword, reTypeNewPassword) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var _this24 = this;

              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-password"), {
                        oldPassword: oldPassword,
                        email: activeEmail,
                        newPassword: newPassword,
                        reTypeNewPassword: reTypeNewPassword
                      }).subscribe(function (data) {
                        // if the passwords match, navigate back to landing page
                        if (data === true) {
                          console.log('TRUE');

                          _this24.router.navigate(['']);

                          var toast = _this24.toastController.create({
                            message: 'Password updated. Please login with your new password.',
                            duration: 3000,
                            cssClass: 'updated-toast',
                            keyboardClose: true,
                            position: 'bottom'
                          });

                          toast.then(function (t) {
                            return t.present();
                          });
                        } else {
                          console.log('Passwords dont match!');
                        }
                      });

                    case 2:
                      return _context31.abrupt("return", _context31.sent);

                    case 3:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "changeAbout",
          value: function changeAbout(email, newAbout, passsword) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-about"), {
                        email: email,
                        newAbout: newAbout,
                        passsword: passsword
                      }).subscribe();

                    case 2:
                      return _context32.abrupt("return", _context32.sent);

                    case 3:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "changeSchool",
          value: function changeSchool(email, newSchool, newGrade, password) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var _this25 = this;

              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-school"), {
                        email: email,
                        newSchool: newSchool,
                        newGrade: newGrade,
                        password: password
                      }).subscribe(function (data) {
                        if (data === true) {
                          _this25.school.next(newSchool);

                          _this25.grade.next(newGrade);

                          _this25.router.navigate(['/home/profile']);

                          var successToast = _this25.toastController.create({
                            // tslint:disable-next-line: max-line-length
                            message: 'Your school information has been updated.',
                            duration: 3000,
                            cssClass: 'updated-toast',
                            keyboardClose: true,
                            position: 'bottom'
                          });

                          successToast.then(function (t) {
                            return t.present();
                          });
                        } else {
                          var failToast = _this25.toastController.create({
                            // tslint:disable-next-line: max-line-length
                            message: 'Please make sure your password is correct',
                            duration: 3000,
                            cssClass: 'wrong-password-toast',
                            keyboardClose: true,
                            position: 'top'
                          });

                          failToast.then(function (t) {
                            return t.present();
                          });
                          return console.log('Passwords dont match');
                        }
                      });

                    case 2:
                      return _context33.abrupt("return", _context33.sent);

                    case 3:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "changeProfilePicture",
          value: function changeProfilePicture(imageForm, oldPhotoKey) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      return _context34.abrupt("return", this.http.post("".concat(this.BACKEND_URL, "/api/photo/change-profile-picture"), {
                        imageForm: imageForm,
                        oldPhotoKey: oldPhotoKey
                      }).subscribe());

                    case 1:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }, {
          key: "changeResume",
          value: function changeResume(email, newResume, password) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              var _this26 = this;

              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.next = 2;
                      return this.http.post("".concat(this.BACKEND_URL, "/api/home/user/change-school"), {
                        email: email,
                        newResume: newResume,
                        password: password
                      }).subscribe(function (data) {
                        if (data === true) {
                          console.log('Changing Resume...');

                          _this26.resume.next(newResume);

                          _this26.router.navigate(['/home/user/change-school/:school/:grade/confirm']);
                        } else {
                          return console.log('Passwords dont match');
                        }
                      });

                    case 2:
                      return _context35.abrupt("return", _context35.sent);

                    case 3:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          } // Delete User

        }, {
          key: "delete",
          value: function _delete() {
            console.log('Deleted User');
          }
        }]);

        return ProfileService;
      }();

      _ProfileService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
        }];
      };

      _ProfileService = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient, _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService, _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController])], _ProfileService);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/plugins/zone-error */
      79815);
      /* harmony import */


      var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.
      // const url is commented out depending on which you are testing with.
      // local host is for local machine and 10.0.1.8 is for android testing


      var ip = '10.0.1.7';
      var wsEndpoint = 'ws://localhost:8081';
      var baseUrl = "http://".concat(ip, ":3000");
      var fairsUrl = "http://".concat(ip, ":4000");
      var _environment = {
        production: false,
        url: baseUrl,
        fairsUrl: fairsUrl,
        wsEndpoint: wsEndpoint
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).then(function () {
        if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
          navigator.serviceWorker.register('/ngsw-worker.js');
        }
      })["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [90733, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [20985, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [93899, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [5121, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [52960, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [45473, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [19787, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66165, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [69569, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [35119, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [90799, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68918, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [94028, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [98107, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [72178, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [42868, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [18706, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [12099, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [84868, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [54377, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [15678, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [16735, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [87686, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [48555, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [30568, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [6231, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [45772, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [14977, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [42886, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [54990, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [13810, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [2446, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [47619, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [28393, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [56281, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [35932, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [57970, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [80298, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [71006, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [74783, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [62749, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [55404, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [39043, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    75158:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n\n";
      /***/
    },

    /***/
    37133:
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/comment-vote-bar/comment-vote-bar.component.html ***!
      \********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar style=\"--background: none\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n";
      /***/
    },

    /***/
    13707:
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/follow-comment-buttons/follow-comment-buttons.component.html ***!
      \********************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar style=\"--background: none;\">\n  <ion-buttons slot=\"end\">\n    <ion-button\n    class=\"comment-button\"\n    (click)=\"postPage()\"><ion-icon src=\"../../assets/icon/comments-icon.svg\"></ion-icon> {{comments.length}}\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>";
      /***/
    },

    /***/
    9121:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/follow-icon/follow-icon.component.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleLikeState(post)\" tappable [@follow]=\"followState\" size=\"medium\" [name]=\"iconName\"></ion-icon>\n";
      /***/
    },

    /***/
    34971:
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/going-icon/going-icon.component.html ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid>\n    <ion-row class=\"ion-hide-lg-down ion-justify-content-center\">\n        <ion-col style=\"height: 20px;\" size=\"5\">\n            <ion-button class=\"grey-button\" (click)=\"eventPage(event)\">\n                    Details\n            </ion-button>\n        </ion-col>\n        <ion-col style=\"height: 20px;\" size=\"5\">\n            <ion-button class=\"going\" *ngIf='!going' (click)=\"toggleGoingState(event)\">\n                Go\n            </ion-button>\n            <ion-button class=\"not-going\" *ngIf='going' (click)=\"toggleGoingState(event)\">\n                Cancel\n            </ion-button>\n        </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: 24px;\" class=\"ion-hide-lg-up ion-justify-content-center\">\n        <ion-col size=\"11\">\n            <ion-button class=\"grey-button-mobile\" (click)=\"eventPage(event)\">\n                Details\n            </ion-button>\n            <ion-button class=\"going-mobile\" *ngIf='!going' (click)=\"toggleGoingState(event)\">\n                Go\n            </ion-button>\n            <ion-button class=\"not-going-mobile\" *ngIf='going' (click)=\"toggleGoingState(event)\">\n                Cancel\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n";
      /***/
    },

    /***/
    67330:
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/heart-icon/heart-icon.component.html ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-icon (click)=\"toggleLikeState()\" tappable [@heart]=\"this.favoriteState\" style=\"font-size: 2em\" [name]=\"iconName\"></ion-icon>\n";
      /***/
    },

    /***/
    99969:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/jobs-filter-popover/jobs-filter-popover.component.html ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-radio-group [value]=\"this.selection\" (ionChange)=\"selectOption($event)\" name=\"job-menu-filter\">\n  <ion-item lines=\"none\">\n    <ion-label>Pay - High to Low</ion-label>\n    <ion-radio value=\"htol\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Pay - Low to High</ion-label>\n    <ion-radio value=\"ltoh\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Newest</ion-label>\n    <ion-radio value=\"newest\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Oldest</ion-label>\n    <ion-radio value=\"oldest\"></ion-radio>\n  </ion-item>\n  <ion-item class=\"ion-text-center\" (click)=\"dismiss()\" button lines=\"none\">\n    <ion-label style=\"color: #e3405f\">Close</ion-label>\n  </ion-item>\n</ion-radio-group>";
      /***/
    },

    /***/
    24645:
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/not-going-icon/not-going-icon.component.html ***!
      \****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid fixed>\n    <ion-row>\n        <ion-col size=\"10\" style=\"padding-top: 10px;\">\n            <p>No longer going to this Event?</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleNotGoingState(event)\" tappable [@notGoing]=\"notGoingState\" size=\"large\" [name]=\"iconName\"></ion-icon>\n        </ion-col>\n    </ion-row>\n  </ion-grid>";
      /***/
    },

    /***/
    72813:
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/posts-filter-popover/posts-filter-popover.component.html ***!
      \****************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-radio-group [value]=\"this.selection\" (ionChange)=\"selectOption($event)\" name=\"post-menu-filter\">\n  <ion-item lines=\"none\">\n    <ion-label>Most Comments</ion-label>\n    <ion-radio value=\"mostc\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Most Upvotes</ion-label>\n    <ion-radio value=\"mostu\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Most Followers</ion-label>\n    <ion-radio value=\"mostf\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Newest</ion-label>\n    <ion-radio value=\"newest\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Oldest</ion-label>\n    <ion-radio value=\"oldest\"></ion-radio>\n  </ion-item>\n  <ion-item class=\"ion-text-center\" (click)=\"dismiss()\" button lines=\"none\">\n    <ion-label style=\"color: #e3405f\">Close</ion-label>\n  </ion-item>\n</ion-radio-group>";
      /***/
    },

    /***/
    20995:
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/reply-options-popover/reply-options-popover.component.html ***!
      \******************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-radio-group (ionChange)=\"selectOption($event)\" name=\"reply-option-menu\">\n  <ion-item lines=\"none\">\n    <ion-label>Delete</ion-label>\n    <ion-radio value=\"delete\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Edit</ion-label>\n    <ion-radio value=\"edit\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Report</ion-label>\n    <ion-radio value=\"report\"></ion-radio>\n  </ion-item>\n  <ion-item class=\"ion-text-center\" (click)=\"dismiss()\" button lines=\"none\">\n    <ion-label style=\"color: #e3405f\">Close</ion-label>\n  </ion-item>\n</ion-radio-group>";
      /***/
    },

    /***/
    6404:
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.html ***!
      \****************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar style=\"--background: none;\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n\n      <ion-button *ngIf=\"!following\" class=\"follow-button\" (click)=\"follow(postID)\">Follow {{followingLength}}\n      </ion-button>\n      <ion-button *ngIf=\"following\" class=\"unfollow-button\" (click)=\"unFollow(postID)\">Unfollow {{followingLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n";
      /***/
    },

    /***/
    53040:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    71920:
    /*!*****************************************************************************!*\
      !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.scss ***!
      \*****************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = ".upvote {\n  border-radius: 5px;\n  width: 60px;\n  position: relative;\n  --color: #005191;\n}\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n.downvote {\n  border-radius: 5px;\n  width: 60px;\n  padding-left: 0px;\n  --color: #005191;\n}\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n.upvoted-toast {\n  --background: #005191;\n}\n.downvoted-toast {\n  --background: #FFB351;\n}\n.followed-toast {\n  --background: #24d8a8;\n}\n.unfollowed-toast {\n  --background: #FFB351;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtdm90ZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ047QUFFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ047QUFHRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7QUFDRTtFQUNFLHFCQUFBO0FBRUoiLCJmaWxlIjoiY29tbWVudC12b3RlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHZvdGV7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6ICMwMDUxOTE7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gIC5kb3dudm90ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgICAgLS1mb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gIFxuICAudXB2b3RlZC10b2FzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xuICB9XG4gIC5kb3dudm90ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgfVxuICBcbiAgLmZvbGxvd2VkLXRvYXN0IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIH1cbiAgLnVuZm9sbG93ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    22787:
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.scss ***!
      \*****************************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = ".comment-button {\n  --color: #0055a5;\n  font-size: 1em;\n  font-size: 800;\n  border-radius: 5px;\n  position: relative;\n  right: 8px;\n}\n\nion-icon {\n  height: 40px;\n  width: 40px;\n  position: relative;\n  left: -5px;\n  font-weight: 600;\n}\n\n@media screen and (max-width: 567px) {\n  .comment-button {\n    font-size: 0.82em;\n    font-weight: 600;\n    width: 80px;\n    --width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy1jb21tZW50LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJmb2xsb3ctY29tbWVudC1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtYnV0dG9ue1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogOHB4O1xufVxuaW9uLWljb24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC01cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb21tZW50LWJ1dHRvbntcbiAgICAgIGZvbnQtc2l6ZTogMC44MmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgLS13aWR0aDogNzBweDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    51801:
    /*!*******************************************************************!*\
      !*** ./src/app/components/follow-icon/follow-icon.component.scss ***!
      \*******************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-icon {\n  --color: lightgrey;\n}\n\n@media screen and (max-width: 567px) {\n  .follow-button, .unfollow-button {\n    font-size: 0.52em;\n    font-weight: 600;\n    width: 80px;\n    --width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNDO0lBQ0ssaUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJmb2xsb3ctaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgLS1jb2xvcjogbGlnaHRncmV5O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAuZm9sbG93LWJ1dHRvbiwgLnVuZm9sbG93LWJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDAuNTJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIC0td2lkdGg6IDcwcHg7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    95266:
    /*!*****************************************************************!*\
      !*** ./src/app/components/going-icon/going-icon.component.scss ***!
      \*****************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "p {\n  transition: 0.5s;\n  opacity: 1;\n}\n\nion-button {\n  font-size: 1em;\n  font-weight: 800;\n  height: 20px;\n  width: 100px;\n  margin-left: 0px;\n  margin-right: 10px;\n  display: inline;\n}\n\n.not-going {\n  --color: white;\n  font-size: 0.65em;\n  --background: linear-gradient(#faa71b, #e99b14);\n}\n\n.grey-button {\n  margin-right: 10px;\n  --background: #222;\n  --color: #edf3f8;\n  font-size: 0.65em;\n}\n\n.going {\n  --color: white;\n  font-size: 0.65em;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n}\n\n.not-going-mobile {\n  --color: white;\n  display: block;\n  width: 100%;\n  height: 40px;\n  font-size: 1em;\n  --background: linear-gradient(#faa71b, #e99b14);\n}\n\n.grey-button-mobile {\n  margin-right: 10px;\n  display: block;\n  width: 100%;\n  height: 40px;\n  --background: #0055a5;\n  --color: #edf3f8;\n  font-size: 1em;\n  top: -8px;\n  position: relative;\n}\n\n.going-mobile {\n  --color: white;\n  display: block;\n  width: 100%;\n  height: 40px;\n  font-size: 1em;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvaW5nLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBUUYiLCJmaWxlIjoiZ29pbmctaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAxO1xufVxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubm90LWdvaW5nIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmFhNzFiLCAjZTk5YjE0KTtcbn1cbi5ncmV5LWJ1dHRvbntcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICMyMjI7XG4gIC0tY29sb3I6ICNlZGYzZjg7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xufVxuLmdvaW5nIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI0ZDhhODtcbn1cbi5ub3QtZ29pbmctbW9iaWxlICB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmYWE3MWIsICNlOTliMTQpO1xufVxuLmdyZXktYnV0dG9uLW1vYmlsZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1jb2xvcjogI2VkZjNmODtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRvcDogLThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmdvaW5nLW1vYmlsZSB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMjRkOGE4O1xufVxuXG5cblxuIl19 */";
      /***/
    },

    /***/
    20970:
    /*!*****************************************************************!*\
      !*** ./src/app/components/heart-icon/heart-icon.component.scss ***!
      \*****************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-icon {\n  z-index: 9999;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJoZWFydC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICB6LWluZGV4OiA5OTk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */";
      /***/
    },

    /***/
    45634:
    /*!***********************************************************************************!*\
      !*** ./src/app/components/jobs-filter-popover/jobs-filter-popover.component.scss ***!
      \***********************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzLWZpbHRlci1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    59612:
    /*!*************************************************************************!*\
      !*** ./src/app/components/not-going-icon/not-going-icon.component.scss ***!
      \*************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZ29pbmctaWNvbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    4511:
    /*!*************************************************************************************!*\
      !*** ./src/app/components/posts-filter-popover/posts-filter-popover.component.scss ***!
      \*************************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy1maWx0ZXItcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    61778:
    /*!***************************************************************************************!*\
      !*** ./src/app/components/reply-options-popover/reply-options-popover.component.scss ***!
      \***************************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBseS1vcHRpb25zLXBvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    82993:
    /*!*************************************************************************************!*\
      !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.scss ***!
      \*************************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-buttons {\n  position: relative;\n  left: -10px;\n}\n\n.upvote {\n  border-radius: 5px;\n  position: relative;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n\n.upvoted-toast {\n  --background: #005191;\n}\n\n.downvoted-toast {\n  --background: #FFB351;\n}\n\n.followed-toast {\n  --background: #24d8a8;\n}\n\n.unfollowed-toast {\n  --background: #FFB351;\n}\n\n.follow-button {\n  --color: #888;\n  --border-style: solid;\n  --border-width: 3px;\n  --border-color: #888;\n  font-size: 0.6em;\n  font-weight: 800;\n  border-radius: 5px;\n  width: 100px;\n  margin-left: 10px;\n}\n\n.unfollow-button {\n  --color: #faa71b;\n  --border-style: solid;\n  --border-width: 3px;\n  --border-color: #faa71b;\n  font-size: 0.6em;\n  font-weight: 800;\n  border-radius: 5px;\n  width: 100px;\n  margin-left: 10px;\n}\n\n@media screen and (max-width: 567px) {\n  .follow-button, .unfollow-button {\n    font-size: 0.52em;\n    font-weight: 600;\n    width: 80px;\n    --width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwLWRvd24tdm90ZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU1BO0VBQ0UscUJBQUE7QUFIRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoidXAtZG93bi12b3RlLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi51cHZvdGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1jb2xvcjogIzAwNTE5MTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5cbi5kb3dudm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAtLWZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4udXB2b3RlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbn1cbi5kb3dudm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cbi5mb2xsb3dlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbn1cbi51bmZvbGxvd2VkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZCMzUxO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICM4ODg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgLS1ib3JkZXItY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMC42MGVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8vIENoYW5nZSBjb2xvclxuLnVuZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmYWE3MWI7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmYWE3MWI7XG4gIGZvbnQtc2l6ZTogMC42MGVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5mb2xsb3ctYnV0dG9uLCAudW5mb2xsb3ctYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC41MmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgLS13aWR0aDogNzBweDtcbiAgfVxufSJdfQ== */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map