(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_jobs_jobs_module_ts"], {
    /***/
    43136: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobsPageRoutingModule": function JobsPageRoutingModule() {
          return (
            /* binding */
            _JobsPageRoutingModule
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


      var _jobs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jobs.page */
      18788);

      var routes = [{
        path: '',
        component: _jobs_page__WEBPACK_IMPORTED_MODULE_0__.JobsPage
      }, {
        path: 'job-page/:id/:title/:companyLogo/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_jobs_job-page_job-page_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./job-page/job-page.module */
          82562)).then(function (m) {
            return m.JobPagePageModule;
          });
        }
      }, {
        path: 'favorites',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_jobs_favorites_favorites_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./favorites/favorites.module */
          23420)).then(function (m) {
            return m.FavoritesPageModule;
          });
        }
      }];

      var _JobsPageRoutingModule = function JobsPageRoutingModule() {
        _classCallCheck(this, JobsPageRoutingModule);
      };

      _JobsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _JobsPageRoutingModule);
      /***/
    },

    /***/
    98766: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobsPageModule": function JobsPageModule() {
          return (
            /* binding */
            _JobsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _jobs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jobs.page */
      18788);
      /* harmony import */


      var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jobs-routing.module */
      43136);
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/custom-component.module */
      64941);
      /* harmony import */


      var _profile_resume_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../profile/resume/view-resume/view-resume.module */
      65207);

      var _JobsPageModule = function JobsPageModule() {
        _classCallCheck(this, JobsPageModule);
      };

      _JobsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _components_custom_component_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _jobs_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobsPageRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
          path: '',
          component: _jobs_page__WEBPACK_IMPORTED_MODULE_0__.JobsPage
        }]), _profile_resume_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_3__.ViewResumePageModule],
        declarations: [_jobs_page__WEBPACK_IMPORTED_MODULE_0__.JobsPage]
      })], _JobsPageModule);
      /***/
    },

    /***/
    18788: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobsPage": function JobsPage() {
          return (
            /* binding */
            _JobsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./jobs.page.html */
      69663);
      /* harmony import */


      var _jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jobs.page.scss */
      14836);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/jobs.service */
      11912);
      /* harmony import */


      var _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/favorites.service */
      85097);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! date-fns */
      63818);
      /* harmony import */


      var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/emitters/favorites-event-emitter.service */
      81615);
      /* harmony import */


      var src_app_components_jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/jobs-filter-popover/jobs-filter-popover.component */
      99820);
      /* harmony import */


      var src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/emitters/filter-jobs.service */
      67677);

      var _JobsPage = /*#__PURE__*/function () {
        function JobsPage(router, jobs, favorites, profile, popoverController, favoritesEventEmitterService, filterJobsService, loading) {
          _classCallCheck(this, JobsPage);

          this.router = router;
          this.jobs = jobs;
          this.favorites = favorites;
          this.profile = profile;
          this.popoverController = popoverController;
          this.favoritesEventEmitterService = favoritesEventEmitterService;
          this.filterJobsService = filterJobsService;
          this.loading = loading;
          this.jobFilter = 'newest';
          this.jobsGoingLength = 0;
          this.searching = false;
          this.noSearchInput = false;
        }

        _createClass(JobsPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.favoritesEventEmitterService.subsVar.unsubscribe();
            this.jobsSub.unsubscribe();
            this.profileSub.unsubscribe();
            this.favoriteJobsSub.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Refresh Favorites after one has been deleted from the favoites page.
            if (this.favoritesEventEmitterService.subsVar == undefined) {
              this.favoritesEventEmitterService.subsVar = this.favoritesEventEmitterService.invokeJobsPageRefresh.subscribe(function () {
                _this.getJobs();
              });
            } // Filter Jobs from Popover


            if (this.filterJobsService.subsVar == undefined) {
              this.filterJobsService.subsVar = this.filterJobsService.filterJobsEmitter.subscribe(function (data) {
                // Filter jobs
                _this.jobFilter = data;

                _this.getJobs();
              });
            }

            this.getFavoriteJobs();
            this.getJobs();
            this.trackRoute();
          }
        }, {
          key: "trackRoute",
          value: function trackRoute() {
            this.routerSub = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (e) {
              return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd;
            })).subscribe(function (data) {
              console.log(data['url']);
              var url = data['url'];

              if (url.includes('/home/jobs/job-page/')) {
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
          key: "filterMenu",
          value: function filterMenu() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: src_app_components_jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_6__.JobsFilterPopoverComponent,
                        cssClass: 'my-custom-class',
                        // translucent: true,
                        showBackdrop: true,
                        componentProps: {
                          filter: this.jobFilter
                        }
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                      _context.next = 7;
                      return popover.onWillDismiss().then(function (data) {
                        console.log(data);
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "filter",
          value: function filter(job) {
            var _this2 = this;

            this.initializeItems();
            var searchTerm = job.detail.value;
            this.presentLoadingWithOptions();
            this.allJobs = this.allJobs.filter(function (currentJobs) {
              console.log(currentJobs);

              if (!currentJobs || !searchTerm) {
                console.log('No results from that search');
                _this2.noSearchInput = true;
              }

              if (currentJobs.title && searchTerm) {
                if (currentJobs.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                  console.log(currentJobs.title);
                  console.log(currentJobs);
                  _this2.searchTerm = searchTerm;
                  _this2.searching = true;
                  _this2.noSearchInput = false;
                  return true;
                }

                return false;
              }

              _this2.noSearchInput = true;
            });
            this.allJobsLength = this.allJobs.length; // If there are no matches with the searchTerm

            if (this.allJobsLength === 0) {
              console.log('No results from that search');
              this.searching = true;
              this.searchTerm = searchTerm;
              this.searchbar.getInputElement().then(function (searchbarInputElement) {
                searchbarInputElement.value = '';
              });
              this.noSearchInput = true;
            }

            if (!searchTerm) {
              console.log('Search term is empty; showing all jobs instead');
              this.noSearchInput = false;
              this.searching = false;
              this.getJobs();
            }
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            this.allJobs = this.loadedAllJobs;
          }
        }, {
          key: "getFavoriteJobs",
          value: function getFavoriteJobs() {
            var _this3 = this;

            // Get all the user's favorite jobs
            this.profileSub = this.profile.getUserDetails().subscribe(function (data) {
              _this3.favoriteJobs = data['favoriteJobs'];
              console.log('Favorite Jobs:');
              console.log(_this3.favoriteJobs);

              _this3.favorites.favoriteJobs$.next(_this3.favoriteJobs);

              _this3.favoriteJobsSub = _this3.favorites.favoriteJobs$.subscribe(function (favs) {
                console.log("Favorite Jobs in Service: ".concat(favs));
                _this3.favoriteJobsAmount = favs.length;

                _this3.favorites.getFavorites(data['email']).subscribe(function (favDetails) {
                  _this3.favoriteJobsObj = favDetails;
                });
              });
            });
          }
        }, {
          key: "jobPage",
          value: function jobPage(job) {
            console.log('Going to specific Job Page:', job.title);
            console.log('The job: ', job); // state object after url has to be an object for navigate()
            // tslint:disable-next-line: max-line-length

            this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyLogo, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
          }
        }, {
          key: "favoritesPage",
          value: function favoritesPage() {
            this.router.navigate(['/home/jobs/favorites']);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(job) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.allJobs = [];
                      this.getFavoriteJobs();
                      this.jobsSub = this.jobs.getJobs().subscribe(function (jobs) {
                        _this4.allJobs = Object.values(jobs);
                        _this4.allJobsLength = _this4.allJobs.length;

                        _this4.allJobs.reverse();

                        _this4.searching = false; // Format Times

                        var _iterator = _createForOfIteratorHelper(_this4.allJobs),
                            _step;

                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var _job = _step.value;
                            _job.dateCreated = (0, date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(_job.dateCreated), {
                              addSuffix: false
                            });
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }
                      });
                      setTimeout(function () {
                        job.target.complete();
                        console.log('jobs Refreshed');
                      }, 2000);
                      _context2.next = 6;
                      return this.searchbar.getInputElement().then(function (searchbarInputElement) {
                        searchbarInputElement.value = '';
                        _this4.noSearchInput = false;
                      });

                    case 6:
                      _context2.next = 8;
                      return console.log('Refreshing jobs Page..');

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getJobs",
          value: function getJobs() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.jobsSub = this.jobs.getJobs().subscribe(function (jobs) {
                        console.log(jobs);

                        switch (_this5.jobFilter) {
                          case 'htol':
                            console.log('High to Low');
                            _this5.filtering = true;
                            _this5.jobFilter = 'htol';
                            _this5.allJobs = Object.values(jobs);
                            _this5.allJobsLength = _this5.allJobs.length;

                            var sortHighToLow = function sortHighToLow(a, b) {
                              console.log('Sorting Price');
                              return parseFloat(a.rateOfPay) - parseFloat(b.rateOfPay);
                            };

                            _this5.allJobs.sort(sortHighToLow);

                            _this5.allJobs.reverse();

                            _this5.searching = false; // Format Times

                            var _iterator2 = _createForOfIteratorHelper(_this5.allJobs),
                                _step2;

                            try {
                              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var job = _step2.value;
                                job.dateCreated = (0, date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(job.dateCreated), {
                                  addSuffix: false
                                });
                              }
                            } catch (err) {
                              _iterator2.e(err);
                            } finally {
                              _iterator2.f();
                            }

                            break;

                          case 'ltoh':
                            console.log('Low to High');
                            _this5.filtering = true;
                            _this5.jobFilter = 'ltoh';
                            _this5.allJobs = Object.values(jobs);
                            _this5.allJobsLength = _this5.allJobs.length;

                            var sortLowToHigh = function sortLowToHigh(a, b) {
                              console.log('Sorting Price');
                              return parseFloat(b.rateOfPay) - parseFloat(a.rateOfPay);
                            };

                            _this5.allJobs.sort(sortLowToHigh);

                            _this5.allJobs.reverse();

                            _this5.searching = false; // Format Times

                            var _iterator3 = _createForOfIteratorHelper(_this5.allJobs),
                                _step3;

                            try {
                              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                var _job2 = _step3.value;
                                _job2.dateCreated = (0, date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(_job2.dateCreated), {
                                  addSuffix: false
                                });
                              }
                            } catch (err) {
                              _iterator3.e(err);
                            } finally {
                              _iterator3.f();
                            }

                            break;

                          case 'oldest':
                            console.log('Oldest');
                            _this5.filtering = true;
                            _this5.jobFilter = 'oldest';
                            _this5.allJobs = Object.values(jobs);
                            _this5.allJobsLength = _this5.allJobs.length;
                            _this5.searching = false; // Format Times

                            var _iterator4 = _createForOfIteratorHelper(_this5.allJobs),
                                _step4;

                            try {
                              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                                var _job3 = _step4.value;
                                _job3.dateCreated = (0, date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(_job3.dateCreated), {
                                  addSuffix: false
                                });
                              }
                            } catch (err) {
                              _iterator4.e(err);
                            } finally {
                              _iterator4.f();
                            }

                            break;

                          case 'newest':
                            console.log('Newest');
                            _this5.filtering = true;
                            _this5.jobFilter = 'newest';
                            _this5.allJobs = Object.values(jobs);
                            _this5.allJobsLength = _this5.allJobs.length;

                            _this5.allJobs.reverse();

                            _this5.searching = false; // Format Times

                            var _iterator5 = _createForOfIteratorHelper(_this5.allJobs),
                                _step5;

                            try {
                              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                                var _job4 = _step5.value;
                                _job4.dateCreated = (0, date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(_job4.dateCreated), {
                                  addSuffix: false
                                });
                              }
                            } catch (err) {
                              _iterator5.e(err);
                            } finally {
                              _iterator5.f();
                            }

                            break;

                          default:
                            break;
                        }

                        return setTimeout(function () {
                          _this5.filtering = false;
                        }, 1000);
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentLoadingWithOptions",
          value: function presentLoadingWithOptions() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loading.create({
                        duration: 1000,
                        message: 'Searching for jobs...',
                        translucent: true,
                        cssClass: 'custom-class custom-loading',
                        keyboardClose: false
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      return _context4.abrupt("return", _context4.sent);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return JobsPage;
      }();

      _JobsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService
        }, {
          type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__.FavoritesService
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController
        }, {
          type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__.FavoritesEventEmitterService
        }, {
          type: src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_7__.FilterJobsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
        }];
      };

      _JobsPage.propDecorators = {
        searchbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSearchbar, {
            "static": false
          }]
        }]
      };
      _JobsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-jobs',
        template: _raw_loader_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService, _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__.FavoritesService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController, src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__.FavoritesEventEmitterService, src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_7__.FilterJobsService, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController])], _JobsPage);
      /***/
    },

    /***/
    11912: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobsService": function JobsService() {
          return (
            /* binding */
            _JobsService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _JobsService = /*#__PURE__*/function () {
        function JobsService(http) {
          _classCallCheck(this, JobsService);

          this.http = http;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        }

        _createClass(JobsService, [{
          key: "getJobs",
          value: function getJobs() {
            console.log('Getting Jobs');
            return this.http.get("".concat(this.BACKEND_URL, "/api/jobs"));
          }
        }, {
          key: "sendEmailApplication",
          value: function sendEmailApplication(user, age, phoneNumber, reason, jobTitle, jobCompanyEmail) {
            console.log("Sending email to ".concat(jobCompanyEmail));
            return this.http.post("".concat(this.BACKEND_URL, "/api/jobs/send-application"), {
              user: user,
              age: age,
              phoneNumber: phoneNumber,
              reason: reason,
              jobTitle: jobTitle,
              jobCompanyEmail: jobCompanyEmail
            });
          }
        }]);

        return JobsService;
      }();

      _JobsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _JobsService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient])], _JobsService);
      /***/
    },

    /***/
    14836: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n  background: #edf3f8;\n  border-bottom: 1px solid #005191;\n}\nion-header ion-icon {\n  font-size: 2em;\n}\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n.company-logo {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n}\n.filter-toolbar-wrapper {\n  background: linear-gradient(90deg, #0055a5 10%, #051422 100%);\n  position: fixed;\n  width: 100%;\n  height: 50px;\n  z-index: 9999;\n}\n.filter-toolbar-wrapper ion-toolbar {\n  --background: none;\n}\n.filter-toolbar {\n  height: 40px;\n  position: relative;\n  top: -8px;\n}\n.filter-message {\n  color: white;\n  font-size: 1.2em;\n}\n.filter-message span {\n  font-weight: 600;\n}\n@media only screen and (min-width: 992px) {\n  .filter-message {\n    color: #0055a5;\n  }\n}\n.filter-icon {\n  color: white;\n  font-size: 1.4em;\n}\n.job-details {\n  --background: #0055a5;\n  --color: white;\n  --background-hover: rgb(24, 40, 54);\n  height: 24px;\n  --width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n  position: relative;\n  top: 10px;\n}\n.desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.favorites-button {\n  --color: white;\n  --background: #e3405f;\n  --background-hover: linear-gradient(#e3405f, #5f4045);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.filter-button {\n  --color: white;\n  --background: #333;\n  --background-hover: linear-gradient(#e3405f, #da3a57);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.job-section {\n  background: white;\n  border-radius: 10px;\n  height: auto;\n  color: #777;\n  width: 100%;\n  opacity: 0;\n  padding: 1em 0px;\n  margin-bottom: 50px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  -webkit-animation: job-section-slide 0.5s ease 0.5 forwards;\n          animation: job-section-slide 0.5s ease 0.5 forwards;\n}\n@-webkit-keyframes job-section-slide {\n  0% {\n    transform: translateX(-20px);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes job-section-slide {\n  0% {\n    transform: translateX(-20px);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\nh6, p {\n  display: block;\n}\n--ion-buttons {\n  --color: #888;\n}\n#job-summary {\n  font-size: 1em;\n  line-height: 1.3em;\n  color: #222;\n}\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -29px;\n}\n#job-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n  color: #111;\n}\n#job-rate {\n  font-size: 0.95em;\n  font-weight: 900;\n  opacity: 0.7;\n  position: relative;\n  top: -53px;\n  color: #116e56;\n}\n@media only screen and (min-width: 992px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjtBQUNBO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFBO0VBQ0UsNkRBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBR0Y7QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFFRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFERTtFQUNFLGdCQUFBO0FBR0o7QUFBQTtFQUNFO0lBQ0UsY0FBQTtFQUdGO0FBQ0Y7QUFEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUdGO0FBREE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFJRjtBQUZBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBS0Y7QUFIRTtFQUNFLGNBQUE7QUFLSjtBQUZBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBS0Y7QUFIQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTUY7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBQU9GO0FBTEE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQVFGO0VBTkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFRRjtBQUNGO0FBaEJBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFRRjtFQU5BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBUUY7QUFDRjtBQUpBO0VBQ0UsY0FBQTtBQU1GO0FBSEE7RUFDRSxhQUFBO0FBTUY7QUFIQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFNRjtBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBTUY7QUFIQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBTUY7QUFIQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQU1GO0FBSEE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFNRjtBQUNGO0FBSEE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFLRjtBQUNGO0FBRkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUlGIiwiZmlsZSI6ImpvYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDUxOTE7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG59XG4jc2VhcmNoYmFyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gfVxuXG4jbG9nb3tcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbn1cbi5jb21wYW55LWxvZ28ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5maWx0ZXItdG9vbGJhci13cmFwcGVye1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCw4NSwxNjUsIDEpIDEwJSwgcmdiKDUsIDIwLCAzNCkgMTAwJSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk5OTtcbiAgLy8gYm94LXNoYWRvdzogMXB4IDEwcHggMjZweCByZ2JhKDAsMCwwLDAuMDUpO1xuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cbi5maWx0ZXItdG9vbGJhcntcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLThweDtcbn1cbi5maWx0ZXItbWVzc2FnZXtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmZpbHRlci1tZXNzYWdlICB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbi5maWx0ZXItaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cbi5qb2ItZGV0YWlscyB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiKDI0LCA0MCwgNTQpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0td2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG4uZGVza3RvcC10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzI2O1xuXG4gIGgxIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgfVxufVxuLmZhdm9yaXRlcy1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZTM0MDVmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZTM0MDVmLCAjNWY0MDQ1KTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZpbHRlci1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzMzO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZTM0MDVmLCAjZGEzYTU3KTtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5qb2Itc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNzc3O1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogMWVtIDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMjZweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBhbmltYXRpb246IGpvYi1zZWN0aW9uLXNsaWRlIDAuNXMgZWFzZSAwLjUgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGpvYi1zZWN0aW9uLXNsaWRlIHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICAwJXtcbiAgfVxufVxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbiNqb2Itc3VtbWFyeSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4jY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3BhY2l0eTogMC44O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI5cHhcbn1cblxuI2pvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbiAgY29sb3I6ICMxMTE7XG59XG5cbiNqb2ItcmF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTNweDtcbiAgY29sb3I6ICMxMTZlNTY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI2pvYi10aXRsZSAge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuI2pvYi1wb3N0ZWQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQzcHhcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    69663: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-icon style=\"position: relative; left: 24px\" color=\"light\" name=\"briefcase-outline\"></ion-icon>\n       <ion-buttons slot=\"end\">\n        <ion-button (click)=\"favoritesPage()\">\n          <ion-icon slot=\"start\" src=\"../../assets/icon/my-favorite-jobs.svg\"></ion-icon>\n        </ion-button>\n        <!-- <ion-button (click)=\"filterMenu()\">\n          <ion-icon slot=\"start\" name=\"filter\"></ion-icon>\n        </ion-button> -->\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <ion-icon style=\"font-size: 2em; color: #0055a5; margin-right: 8px;\" name=\"briefcase-outline\"></ion-icon>\n                  <h1>Jobs</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"filter-button\" (click)=\"filterMenu()\">\n                  Filter\n                </ion-button>\n                <ion-button class=\"favorites-button\" (click)=\"favoritesPage()\">\n                  Favorites\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n        <ion-row>\n          <ion-col size=\"12\">\n            <p *ngIf=\"this.jobFilter === 'htol'\" class=\"filter-message\"><span>Filter</span>: Pay - High to Low</p>\n            <p *ngIf=\"this.jobFilter === 'ltoh'\" class=\"filter-message\"><span>Filter</span>: Pay - Low to High</p>\n            <p *ngIf=\"this.jobFilter === 'newest'\" class=\"filter-message\"><span>Filter</span>: Newest</p>\n            <p *ngIf=\"this.jobFilter === 'oldest'\" class=\"filter-message\"><span>Filter</span> {{this.jobFilter}}</p>\n          </ion-col>\n        </ion-row>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <!-- Filter Toolbar -->\n    <ion-row class=\"filter-toolbar-wrapper ion-hide-lg-up ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"filter-toolbar\">\n          <ion-buttons slot=\"start\">\n            <p *ngIf=\"this.jobFilter === 'htol'\" class=\"filter-message\"><span>Filter</span>: Pay - High to Low</p>\n            <p *ngIf=\"this.jobFilter === 'ltoh'\" class=\"filter-message\"><span>Filter</span>: Pay - Low to High</p>\n            <p *ngIf=\"this.jobFilter === 'newest'\" class=\"filter-message\"><span>Filter</span>: Newest</p>\n            <p *ngIf=\"this.jobFilter === 'oldest'\" class=\"filter-message\"><span>Filter</span> Oldest</p>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n              <ion-button (click)=\"filterMenu()\">\n                <ion-icon class=\"filter-icon\" slot=\"start\" name=\"filter\"></ion-icon>\n              </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n\n    <!-- Filtering Message -->\n    <ion-row *ngIf=\"this.filtering\" class=\"ion-justify-content-center\">\n      <ion-col style=\"position: relative; top: -100px;\" class=\"ion-text-center\" size=\"12\">\n        <ion-spinner  name=\"bubbles\">Filtering</ion-spinner>\n      </ion-col>\n    </ion-row>\n\n    <!-- Jobs -->\n    <ion-row *ngIf=\"!this.filtering\" class=\"ion-justify-content-center\">\n      <ion-col style=\"margin-top: 16px;\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <div class=\"spacer ion-hide-lg-up\"></div>\n        <ion-row class=\"job-section ion-justify-content-center\" *ngFor=\"let job of allJobs\">\n              <ion-col push=\"0.5\" size=\"1\">\n                <img class=\"company-logo\" src=\"{{job.companyLogo}}\">\n              </ion-col>\n              <ion-col push=\"1\" style=\"height: 80px;\">\n                <h5 id=\"job-title\">{{job.title}}</h5>\n                <p id=\"company-name\">{{job.companyName}}</p>\n                <h5 id=\"job-posted-date\">Posted: {{job.dateCreated}}</h5>\n                <h5 id=\"job-rate\">${{job.rateOfPay}}/hr</h5>\n              </ion-col>\n              <ion-col size=\"11\">\n                <p id=\"job-summary\">{{job.summary}}</p>\n              </ion-col>\n              <ion-col pull=\"0\" size=\"11\">\n                  <ion-button class=\"job-details ion-float-right\" (click)=\"jobPage(job)\">\n                    Details\n                  </ion-button>\n                  <!-- Heart Icon Component holds the state for Favorites -->\n                  <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n              </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_jobs_jobs_module_ts-es5.js.map