(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_posts_notifications_notifications_module_ts"], {
    /***/
    15226: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationsPageRoutingModule": function NotificationsPageRoutingModule() {
          return (
            /* binding */
            _NotificationsPageRoutingModule
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


      var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notifications.page */
      3518);

      var routes = [{
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
      }];

      var _NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
        _classCallCheck(this, NotificationsPageRoutingModule);
      };

      _NotificationsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NotificationsPageRoutingModule);
      /***/
    },

    /***/
    1841: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationsPageModule": function NotificationsPageModule() {
          return (
            /* binding */
            _NotificationsPageModule
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


      var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notifications-routing.module */
      15226);
      /* harmony import */


      var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notifications.page */
      3518);

      var _NotificationsPageModule = function NotificationsPageModule() {
        _classCallCheck(this, NotificationsPageModule);
      };

      _NotificationsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage]
      })], _NotificationsPageModule);
      /***/
    },

    /***/
    3518: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationsPage": function NotificationsPage() {
          return (
            /* binding */
            _NotificationsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./notifications.page.html */
      44115);
      /* harmony import */


      var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notifications.page.scss */
      88348);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/notifications.service */
      79744);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      63818);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _NotificationsPage = /*#__PURE__*/function () {
        function NotificationsPage(notifications, profile, toast, router) {
          _classCallCheck(this, NotificationsPage);

          this.notifications = notifications;
          this.profile = profile;
          this.toast = toast;
          this.router = router;
          this.noNotifications = false;
        }

        _createClass(NotificationsPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.notificationsSub.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.initSub = this.profile.getUserDetails().subscribe(function (userDetails) {
              _this.userEmail = userDetails['email'];
              _this.notificationsSub = _this.notifications.getNotifications(_this.userEmail).subscribe(function (notifications) {
                console.log(notifications);
                _this.allNotifications = Object.values(notifications); // Track if No Notifications

                if (_this.allNotifications.length <= 0 || _this.allNotifications === []) {
                  _this.noNotifications = true;
                } else {
                  _this.noNotifications = false;
                }

                _this.notifications.notifications$.next(Object.values(notifications));

                _this.notifications.notifications$.subscribe(function (data) {
                  var _iterator = _createForOfIteratorHelper(_this.allNotifications),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var n = _step.value;
                      n.date = (0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(n.date), {
                        includeSeconds: true,
                        addSuffix: false
                      });
                      _this.allNotifications = Object.values(notifications);
                      console.log(_this.allNotifications);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }); // TODO: replaces 'minutes' with M
                // let minutes = ;

              });
            });
          }
        }, {
          key: "clear",
          value: function clear() {
            var _this2 = this;

            this.notifications.clearNotifications(this.userEmail).subscribe(function (data) {
              _this2.notificationsSub = _this2.notifications.getNotifications(_this2.userEmail).subscribe(function (notifications) {
                console.log(notifications);

                _this2.notifications.notifications$.next(Object.values(notifications));

                _this2.notifications.notifications$.subscribe(function (data) {
                  _this2.allNotifications = Object.values(data);

                  var _iterator2 = _createForOfIteratorHelper(_this2.allNotifications),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var n = _step2.value;
                      n.date = (0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(n.date), {
                        includeSeconds: true,
                        addSuffix: false
                      });
                    } // Track if No Notifications

                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  if (_this2.allNotifications.length <= 0 || _this2.allNotifications === []) {
                    _this2.noNotifications = true;
                  } else {
                    _this2.noNotifications = false;

                    _this2.clearedToast();
                  }
                }); // TODO: replaces 'minutes' with M
                // let minutes = ;

              });
            });
          }
        }, {
          key: "clearedToast",
          value: function clearedToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toast.create({
                        message: 'Cleared Notifications.',
                        cssClass: 'danger-toast',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      _context.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigateByUrl('home/posts');
          }
        }, {
          key: "goTo",
          value: function goTo() {
            console.log('Going to page from notification');
          }
        }, {
          key: "deleteSwipe",
          value: function deleteSwipe(e, notiID) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(e);

                      if (e) {
                        _context2.next = 5;
                        break;
                      }

                      throw Error('No Swipe Event returned.');

                    case 5:
                      console.log('Delete Swipe ... ');
                      _context2.next = 8;
                      return this.deleteNotification(notiID);

                    case 8:
                      _context2.next = 10;
                      return this.deletedToast();

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteNotification",
          value: function deleteNotification(notiID) {
            var _this3 = this;

            this.notifications.deleteNotification(this.userEmail, notiID).subscribe(function (data) {
              console.log(data);
              _this3.allNotifications = Object.values(data);
              ;

              var _iterator3 = _createForOfIteratorHelper(_this3.allNotifications),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var n = _step3.value;
                  n.date = (0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(n.date), {
                    includeSeconds: true,
                    addSuffix: false
                  });
                  console.log(_this3.allNotifications);
                } // Track if No Notifications

              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              if (_this3.allNotifications.length <= 0 || _this3.allNotifications === []) {
                _this3.noNotifications = true;
              } else {
                _this3.noNotifications = false;
              }
            });
          }
        }, {
          key: "deletedToast",
          value: function deletedToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toast.create({
                        message: 'Deleted.',
                        cssClass: 'danger-toast',
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
        }]);

        return NotificationsPage;
      }();

      _NotificationsPage.ctorParameters = function () {
        return [{
          type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _NotificationsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-notifications',
        template: _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController, _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router])], _NotificationsPage);
      /***/
    },

    /***/
    88348: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-size: 0.7em;\n  margin-left: 10px;\n}\n\n#message {\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n}\n\nion-list {\n  background: none;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nion-item {\n  border-bottom: 1px solid #e9e9e9;\n}\n\n#clear-button {\n  --background: linear-gradient(rgba(6, 114, 196, 0.3), rgba(0, 81, 145, 0.2));\n  --color: white;\n  --border-color: white;\n  --border-style: solid;\n  --border-width: 2px;\n  font-weight: 600;\n  margin-right: 20px;\n  width: 80px;\n}\n\n#delete-noti {\n  background: #e3405f;\n  font-weight: 600;\n}\n\n#date {\n  opacity: 0.5;\n  display: inline-block;\n}\n\n#icon {\n  opacity: 0.2;\n}\n\n#no-notifications {\n  opacity: 0.3;\n}\n\n.margin-top {\n  margin-top: 15%;\n}\n\n.blue-button {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkNBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0NBQUE7QUFHRjs7QUFEQTtFQUNFLDRFQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7QUFNRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7QUFNRiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuI21lc3NhZ2Uge1xuICBib3gtc2hhZG93OiAxcHggMTBweCAyNnB4IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5pb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyk7XG59XG4jY2xlYXItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2LCAxMTQsIDE5NiwgMC4zKSwgcmdiYSgwLCA4MSwgMTQ1LCAwLjIpKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuI2RlbGV0ZS1ub3RpIHtcbiAgYmFja2dyb3VuZDogI2UzNDA1ZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNkYXRlIHtcbiAgb3BhY2l0eTogMC41O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNpY29uIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4jbm8tbm90aWZpY2F0aW9ucyB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLm1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    44115: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-title>Notifications</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button id=\"clear-button\" (click)=\"clear()\">\n        Clear\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!-- No Messages -->\n  <ion-row *ngIf=\"noNotifications\" class=\"ion-justify-content-center\">\n    <ion-col class=\"margin-top ion-text-center\" size-xs=\"12\" size-sm=\"12\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <h3 id=\"no-notifications\">You have no notifications</h3>\n      <img id=\"icon\" src=\"../../../../assets/icons/no-notifications-icon.svg\" alt=\"\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"!noNotifications\" class=\"ion-justify-content-center\">\n    <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <!-- List of Sliding Items -->\n      <ion-list>\n        <ion-item-sliding (click)=\"goTo()\" *ngFor=\"let n of allNotifications\">\n          <ion-item lines=\"none\">\n            <ion-avatar>\n              <img [src]=\"n.instigatingUserProfilePicture\" />\n            </ion-avatar>\n            <p id=\"message\">{{n.message}}</p>\n            <p id=\"date\">{{n.date}}</p>\n          </ion-item>\n          <ion-item-options (ionSwipe)=\"deleteSwipe($event, n.notiID)\" side=\"end\">\n            <ion-item-option  id=\"delete-noti\">Slide left to Delete</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_posts_notifications_notifications_module_ts-es5.js.map