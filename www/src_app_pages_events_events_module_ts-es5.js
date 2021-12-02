(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_events_events_module_ts"], {
    /***/
    48292:
    /*!****************************************************!*\
      !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            isAfter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name isAfter
       * @category Common Helpers
       * @summary Is the first date after the second one?
       *
       * @description
       * Is the first date after the second one?
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the date that should be after the other one to return true
       * @param {Date|Number} dateToCompare - the date to compare with
       * @returns {Boolean} the first date is after the second date
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Is 10 July 1989 after 11 February 1987?
       * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
       * //=> true
       */


      function isAfter(dirtyDate, dirtyDateToCompare) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var date = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
        var dateToCompare = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
        return date.getTime() > dateToCompare.getTime();
      }
      /***/

    },

    /***/
    45358:
    /*!*******************************************************!*\
      !*** ./src/app/pages/events/events-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventsPageRoutingModule": function EventsPageRoutingModule() {
          return (
            /* binding */
            _EventsPageRoutingModule
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


      var _events_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./events.page */
      64637);

      var routes = [{
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_0__.EventsPage
      }, {
        path: 'events-page/:id/:title/:addressOne/:addressTwo/:city/:state/:zip/:dateCreated/:date/:time/:photo/:description',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_events_events-page_events-page_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./events-page/events-page.module */
          29403)).then(function (m) {
            return m.EventsPagePageModule;
          });
        }
      }, {
        path: 'going',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_events_going_going_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./going/going.module */
          44210)).then(function (m) {
            return m.GoingPageModule;
          });
        }
      }];

      var _EventsPageRoutingModule = function EventsPageRoutingModule() {
        _classCallCheck(this, EventsPageRoutingModule);
      };

      _EventsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EventsPageRoutingModule);
      /***/
    },

    /***/
    95105:
    /*!***********************************************!*\
      !*** ./src/app/pages/events/events.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventsPageModule": function EventsPageModule() {
          return (
            /* binding */
            _EventsPageModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../components/custom-component.module */
      64941);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _events_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./events-routing.module */
      45358);
      /* harmony import */


      var _events_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events.page */
      64637);

      var _EventsPageModule = function EventsPageModule() {
        _classCallCheck(this, EventsPageModule);
      };

      _EventsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__.CustomComponentsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _events_routing_module__WEBPACK_IMPORTED_MODULE_1__.EventsPageRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
          path: '',
          component: _events_page__WEBPACK_IMPORTED_MODULE_2__.EventsPage
        }])],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_2__.EventsPage]
      })], _EventsPageModule);
      /***/
    },

    /***/
    64637:
    /*!*********************************************!*\
      !*** ./src/app/pages/events/events.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventsPage": function EventsPage() {
          return (
            /* binding */
            _EventsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_events_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./events.page.html */
      81470);
      /* harmony import */


      var _events_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./events.page.scss */
      77377);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/events.service */
      80106);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! date-fns */
      79379);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns */
      48578);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/emitters/events-event-emitter.service */
      9193);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! date-fns */
      48292);

      var _EventsPage = /*#__PURE__*/function () {
        function EventsPage(router, events, profile, loading, eventEmitterService) {
          _classCallCheck(this, EventsPage);

          this.router = router;
          this.events = events;
          this.profile = profile;
          this.loading = loading;
          this.eventEmitterService = eventEmitterService;
          this.searching = false;
          this.noSearchInput = false;
        }

        _createClass(EventsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.deleteEvent();
            this.trackRoute();

            if (this.eventEmitterService.subsVar == undefined) {
              this.eventEmitterService.subsVar = this.eventEmitterService.invokeEventsPageRefresh.subscribe(function () {
                _this.getEvents();
              });
            } // Get the User's details


            this.profileSub = this.profile.getUserDetails().subscribe(function (details) {
              _this.id = details['_id'];
              _this.userEmail = details['email'];

              _this.events.eventsGoing$.next(details['eventsGoing']);

              _this.eventsGoingSub = _this.events.eventsGoing$.subscribe(function (events) {
                console.log(events.length);
                _this.eventsGoingLength = events.length;
              });
              console.log('User id: ' + _this.id);
              console.log('User email: ' + _this.userEmail);
            });
            this.eventsGoing = this.events.getEvents().subscribe(function (events) {
              // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list events,
              // .
              // First Array of Events
              // this.allEvents = Object.values(events);
              _this.allEvents = Object.values(events);
              _this.allEventsLength = _this.allEvents.length;

              _this.allEvents.reverse();

              console.log(_this.allEvents); // Second Array of Events

              _this.loadedAllEvents = Object.values(events);

              _this.loadedAllEvents.reverse(); // Loop each Event and format the dates. Also, delete an Event if its scheduled date


              var _iterator = _createForOfIteratorHelper(_this.allEvents),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var event = _step.value;

                  // First date Event Date
                  // Second date Current Date
                  // If the Current Date is After the Event Date, Delete
                  // If True, Delete event.
                  if ((0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(Date.now()), new Date(event.date))) {
                    _this.deleteEventSub = _this.events.deleteEvent(event._id).subscribe();
                  }

                  event.date = (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(event.date), 'MMMM dd, yyyy');
                  event.time = (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(event.date), 'hh:mm a');
                  event.dateCreated = (0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(event.dateCreated), {
                    includeSeconds: true,
                    addSuffix: true
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }, {
          key: "trackRoute",
          value: function trackRoute() {
            this.routerSub = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (e) {
              return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd;
            })).subscribe(function (data) {
              console.log(data['url']);
              var url = data['url'];

              if (url.includes('/home/events/event-page/')) {
                console.log('Hide Tab Bar!');
                var tabBar = document.getElementById('tabBar');
                tabBar.style.height = '0px';
                tabBar.style.transition = '1s';
              } else {
                var _tabBar = document.getElementById('tabBar');

                console.log(_tabBar);
                _tabBar.style.height = '50px';
                _tabBar.style.transition = '1s';
              }
            });
          }
        }, {
          key: "deleteEvent",
          value: function deleteEvent() {
            var result = (0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(1989, 6, 10), new Date(1987, 1, 11));
            console.log(result);
          }
        }, {
          key: "eventPage",
          value: function eventPage(event) {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
          }
        }, {
          key: "myEvents",
          value: function myEvents() {
            this.router.navigate(['/home/events/going']);
          }
        }, {
          key: "filter",
          value: function filter($event) {
            var _this2 = this;

            this.initializeItems();
            var searchTerm = $event.detail.value;
            this.presentLoadingWithOptions();
            this.allEvents = this.allEvents.filter(function (currentEvents) {
              console.log(currentEvents);

              if (!currentEvents || !searchTerm) {
                console.log('No results from that search');
                _this2.noSearchInput = true;
              }

              if (currentEvents.title && searchTerm) {
                if (currentEvents.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                  console.log(currentEvents.title);
                  console.log(currentEvents);
                  _this2.searchTerm = searchTerm;
                  _this2.searching = true;
                  _this2.noSearchInput = false;
                  return true;
                }

                return false;
              }

              _this2.noSearchInput = true;
            });
            this.allEventsLength = this.allEvents.length; // If there are no matches with the searchTerm

            if (this.allEventsLength === 0) {
              console.log('No results from that search');
              this.searching = true;
              this.searchTerm = searchTerm;
              this.searchbar.getInputElement().then(function (searchbarInputElement) {
                searchbarInputElement.value = '';
              });
              this.noSearchInput = true;
            }

            if (!searchTerm) {
              console.log('Search term is empty; showing all events instead');
              this.noSearchInput = false;
              this.searching = false;
              this.getEvents();
            }
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            this.allEvents = this.loadedAllEvents;
          }
        }, {
          key: "presentLoadingWithOptions",
          value: function presentLoadingWithOptions() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loading.create({
                        duration: 1000,
                        message: 'Searching for Events...',
                        translucent: true,
                        cssClass: 'custom-class custom-loading',
                        keyboardClose: false
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.allEvents = [];
                      this.eventsSub = this.events.getEvents().subscribe(function (events) {
                        _this3.allEvents = Object.values(events);
                        _this3.allEventsLength = _this3.allEvents.length;

                        _this3.allEvents.reverse();

                        _this3.searching = false; // Format Times

                        var _iterator2 = _createForOfIteratorHelper(_this3.allEvents),
                            _step2;

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var _event = _step2.value;

                            // First date Event Date
                            // Second date Current Date
                            // If the Current Date is After the Event Date, Delete
                            // If True, Delete event.
                            if ((0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(Date.now()), new Date(_event.date))) {
                              _this3.deleteEventSub = _this3.events.deleteEvent(_event._id).subscribe();
                            }

                            _event.date = (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(_event.date), 'MMMM dd, yyyy');
                            _event.dateCreated = (0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(_event.dateCreated), {
                              includeSeconds: true,
                              addSuffix: true
                            });
                            _event.time = (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(_event.date), 'hh:mm a');
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                      });
                      setTimeout(function () {
                        event.target.complete();
                        console.log('Events Refreshed');
                      }, 2000);
                      _context2.next = 5;
                      return console.log('Refreshing Events Page..');

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.eventsSub = this.events.getEvents().subscribe(function (events) {
                        _this4.allEvents = Object.values(events);
                        _this4.allEventsLength = _this4.allEvents.length;

                        _this4.allEvents.reverse();

                        _this4.searching = false; // Format Times

                        var _iterator3 = _createForOfIteratorHelper(_this4.allEvents),
                            _step3;

                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var event = _step3.value;
                            event.date = (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(event.date), 'MMMM dd, yyyy');
                            event.dateCreated = (0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(event.dateCreated), {
                              includeSeconds: true,
                              addSuffix: true
                            });
                            event.time = (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(event.date), 'hh:mm a');
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return EventsPage;
      }();

      _EventsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }, {
          type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService
        }];
      };

      _EventsPage.propDecorators = {
        searchbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSearchbar, {
            "static": false
          }]
        }]
      };
      _EventsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-events',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_events_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_events_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController, src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService])], _EventsPage);
      /***/
    },

    /***/
    81470:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/events/events.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-icon style=\"position: relative; left: 24px\" color=\"light\" name=\"calendar-outline\"></ion-icon>\n       <ion-buttons slot=\"end\">\n        <ion-button style=\"width: 100px; --background: #faa71b; font-weight: 600;\" (click)=\"myEvents()\">\n         <!-- My Events ({{ eventsGoingLength }}) -->\n         My Events\n     </ion-button>\n       </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Refresh -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../assets/icon/my-events-icon.svg\" alt=\"\" srcset=\"\">\n                  <h1>Events</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"my-events-button\" (click)=\"myEvents()\">\n                  My Events\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <!-- Card List -->\n    <ion-row class=\"ion-justify-content-center\">\n      <div class=\"spacer ion-hide-lg-down\"></div>\n      <!-- Individual Cards -->\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"8\">\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"3\" size-xl=\"3\" *ngFor=\"let event of allEvents\">\n            <ion-card class=\"event-card\">\n              <img src=\"{{event.photo}}\" />\n              <ion-card-header>\n                <ion-card-title>{{ event.title }}</ion-card-title>\n                <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n                <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n                <!-- <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle> -->\n                <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n              </ion-card-header>\n              <ion-card-content class=\"ion-text-center\">\n                <ion-toolbar style=\"--background: none; height: auto;\">\n                  <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n                </ion-toolbar>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n";
      /***/
    },

    /***/
    77377:
    /*!***********************************************!*\
      !*** ./src/app/pages/events/events.page.scss ***!
      \***********************************************/

    /***/
    function _(module) {
      module.exports = "ion-header {\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n}\nion-header ion-icon {\n  font-size: 2em;\n}\nion-card {\n  --background: white;\n  margin: 0px 0 50px 0;\n  position: relative;\n  padding-bottom: 32px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);\n}\nion-searchbar {\n  --background: white;\n  margin-left: 10px;\n  border-radius: 5px;\n  --height: 30px;\n  width: 95%;\n  font-size: 0.8em;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  transition: 0.5s;\n}\n.job-section {\n  height: 230px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\nh6, p {\n  display: block;\n}\nh6.text-header {\n  padding: unset;\n  text-align: center;\n}\n--ion-buttons {\n  --color: #888;\n}\nion-button {\n  --background: none;\n}\nion-button ion-icon {\n  font-size: 2.5em;\n}\n.desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n  position: relative;\n  left: 8px;\n}\n.my-events-button {\n  --color: white;\n  --background: #e3405f;\n  --background-hover: linear-gradient(#e3405f, #5f4045);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\nion-card-title {\n  font-size: 1em;\n  font-weight: 600;\n  color: #0055a5;\n}\nion-card-subtitle {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFHQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7QUFERjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDRjtBQUVBO0VBQ0UsY0FBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtBQUNKO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNKO0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQUE7RUFDRSxjQUFBO0FBR0YiLCJmaWxlIjoiZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHggMCA1MHB4IDA7XG4gIC8vIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICBib3gtc2hhZG93OiAxcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogMzBweDtcbiAgd2lkdGg6IDk1JTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgLS1pY29uLWNvbG9yOiAjMDA1MTkxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLmpvYi1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgY29sb3I6ICM3Nzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDYudGV4dC1oZWFkZXIge1xuICBwYWRkaW5nOiB1bnNldDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4tLWlvbi1idXR0b25zIHtcbiAgLS1jb2xvcjogIzg4ODtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgfVxufVxuLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzMyNjtcblxuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDhweDtcbiAgfVxufVxuLm15LWV2ZW50cy1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZTM0MDVmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZTM0MDVmLCAjNWY0MDQ1KTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDU1YTU7XG59XG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_events_events_module_ts-es5.js.map