(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_jobs_jobs_module_ts"], {
    /***/
    43136:
    /*!***************************************************!*\
      !*** ./src/app/pages/jobs/jobs-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    98766:
    /*!*******************************************!*\
      !*** ./src/app/pages/jobs/jobs.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
      3786);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
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
      47659);

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
    18788:
    /*!*****************************************!*\
      !*** ./src/app/pages/jobs/jobs.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./jobs.page.html */
      96381);
      /* harmony import */


      var _jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jobs.page.scss */
      30629);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
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
      48578);
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
          this.noSearchInput = false; // Set this false to enable skeleton

          this.data = true;
        }

        _createClass(JobsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.favoritesEventEmitterService.subsVar == undefined) {
              this.favoritesEventEmitterService.subsVar = this.favoritesEventEmitterService.invokeJobsPageRefresh.subscribe(function () {
                return _this.getJobs('newest');
              });
            }

            this.filterJobsService.filterBehaviorSub.subscribe(function (data) {
              console.log('Data from Filter Behavior Subject');
              console.log(data);
              _this.jobFilter = data;

              _this.getJobs(data);
            });
            this.getFavoriteJobs();
            this.trackRoute(); // Refresh Favorites after one has been deleted from the favoites page.
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            setTimeout(function () {
              _this2.data = true;
            }, 1500);
          }
        }, {
          key: "trackRoute",
          value: function trackRoute() {
            this.routerSub = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (e) {
              return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd;
            })).subscribe(function (data) {
              // console.log(data['url']);
              var url = data['url'];

              if (url.includes('/home/jobs/job-page/')) {
                console.log('Hide Tab Bar!');
                var tabBar = document.getElementById('tabBar');
                var tabBarFab = document.getElementById('tab-bar-fab');
                tabBar.style.height = '0px';
                tabBar.style.transition = '1s';
                tabBarFab.style.transform = 'translateY(100px)';
              } else {
                var _tabBar = document.getElementById('tabBar');

                var _tabBarFab = document.getElementById('tab-bar-fab'); // console.log(tabBar);


                _tabBar.style.height = '50px';
                _tabBar.style.transition = '1s';
                _tabBarFab.style.transform = 'translateY(0px)';
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
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getFavoriteJobs",
          value: function getFavoriteJobs() {
            var _this3 = this;

            console.clear(); // Get all the user's favorite jobs

            this.profileSub = this.profile.getUserDetails().subscribe(function (data) {
              console.log(data);
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
          value: function getJobs(filter) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.jobsSub = this.jobs.getJobs().subscribe(function (jobs) {
                        console.log('Getting Jobs from JOBS.PAGE.TS');

                        if (filter === 'newest') {
                          console.log('Newest');
                          _this5.filtering = true;
                          _this5.jobFilter = 'newest';
                          _this5.allJobs = jobs;
                          _this5.allJobsLength = _this5.allJobs.length; // Format Times

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
                        }

                        if (filter === 'htol') {
                          var sortHighToLow = function sortHighToLow(a, b) {
                            console.log('Sorting Price');
                            return parseFloat(a.rateOfPay) - parseFloat(b.rateOfPay);
                          };

                          console.log('High to Low');
                          _this5.filtering = true;
                          _this5.jobFilter = 'htol';
                          _this5.allJobs = jobs;
                          _this5.allJobsLength = _this5.allJobs.length;

                          _this5.allJobs.sort(sortHighToLow);

                          _this5.allJobs.reverse(); // Format Times


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
                        }

                        if (filter === 'ltoh') {
                          var sortLowToHigh = function sortLowToHigh(a, b) {
                            console.log('Sorting Price');
                            return parseFloat(b.rateOfPay) - parseFloat(a.rateOfPay);
                          };

                          console.log('Low to High');
                          _this5.filtering = true;
                          _this5.jobFilter = 'ltoh';
                          _this5.allJobs = jobs;
                          _this5.allJobsLength = _this5.allJobs.length;

                          _this5.allJobs.sort(sortLowToHigh);

                          _this5.allJobs.reverse(); // Format Times


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
                        }

                        if (filter === 'oldest') {
                          console.log('Oldest');
                          _this5.filtering = true;
                          _this5.jobFilter = 'oldest';
                          _this5.allJobs = jobs;
                          _this5.allJobsLength = _this5.allJobs.length;
                          _this5.jobFilter = 'Oldest'; // Format Times

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
                        }

                        return _this5.allJobs;
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
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('Jobs Page Destroyed!');
            this.favoritesEventEmitterService.subsVar.unsubscribe();
            this.favoriteJobsSub.unsubscribe();
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
        }],
        ngOnDestroy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.HostListener,
          args: ['unloaded']
        }]
      };
      _JobsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-jobs',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService, _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__.FavoritesService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController, src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__.FavoritesEventEmitterService, src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_7__.FilterJobsService, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController])], _JobsPage);
      /***/
    },

    /***/
    11912:
    /*!******************************************!*\
      !*** ./src/app/services/jobs.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
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
    96381:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/jobs/jobs.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon style=\"position: relative; left: 24px; color: #0055a5;\"name=\"briefcase-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Jobs</ion-title>\n       <ion-buttons slot=\"end\">\n        <ion-button (click)=\"favoritesPage()\">\n          <ion-icon slot=\"start\" src=\"../../assets/icon/jobs-favorites-heart-blue.svg\"></ion-icon>\n        </ion-button>\n        <!-- <ion-button (click)=\"filterMenu()\">\n          <ion-icon slot=\"start\" name=\"filter\"></ion-icon>\n        </ion-button> -->\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <div *ngIf=\"this.data\">\n      <!-- Desktop Header -->\n      <ion-row style=\"padding-top: 40px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n        <ion-col style=\"padding: 0 2em;\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n          <ion-toolbar class=\"desktop-toolbar\">\n            <ion-buttons slot=\"start\">\n              <ion-icon style=\"font-size: 2em; color: white; margin-right: 8px;\" name=\"briefcase-outline\"></ion-icon>\n              <h1 style=\"margin-top: 12px;\">Jobs |</h1>\n              <p *ngIf=\"this.jobFilter === 'htol'\" class=\"filter-message\">Pay - High to Low</p>\n              <p *ngIf=\"this.jobFilter === 'ltoh'\" class=\"filter-message\">Pay - Low to High</p>\n              <p *ngIf=\"this.jobFilter === 'newest'\" class=\"filter-message\">Newest</p>\n              <p *ngIf=\"this.jobFilter === 'oldest'\" class=\"filter-message\">{{this.jobFilter}}</p>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n                  <ion-button class=\"filter-button\" (click)=\"filterMenu()\">\n                    Filter\n                  </ion-button>\n                  <ion-button class=\"favorites-button\" (click)=\"favoritesPage()\">\n                    <img height=\"30\" src=\"../../../assets/icon/jobs-favorites-heart-white.svg\" alt=\"\" srcset=\"\">\n                  </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n\n      <!-- Filter Toolbar -->\n      <ion-row class=\"filter-toolbar-wrapper ion-hide-lg-up ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n          <ion-toolbar (click)=\"filterMenu()\" class=\"filter-toolbar\">\n            <ion-buttons slot=\"start\">\n              <p class=\"filter-message\">{{this.jobFilter}}</p>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n                <ion-button>\n                  <ion-icon class=\"filter-icon\" slot=\"start\" name=\"filter\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n\n      <!-- Jobs -->\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n          <div class=\"spacer ion-hide-lg-up\"></div>\n          <ion-row class=\"job-section ion-justify-content-center\" *ngFor=\"let job of allJobs\">\n                <ion-col push=\"0.3\" size=\"1\">\n                  <img class=\"company-logo\" src=\"{{job.companyLogo}}\">\n                </ion-col>\n                <ion-col push=\"0.3\" style=\"height: 80px;\">\n                  <h5 id=\"job-title\">{{job.title}}</h5>\n                  <p id=\"company-name\">{{job.companyName}}</p>\n                  <h5 id=\"job-posted-date\">Posted: {{job.dateCreated}}</h5>\n                  <h5 id=\"job-rate\">${{job.rateOfPay}}/hr</h5>\n                </ion-col>\n                <ion-col size=\"11\">\n                  <p id=\"job-summary\">{{job.summary}}</p>\n                </ion-col>\n                <ion-col pull=\"0\" size=\"11\">\n                    <!-- Heart Icon Component holds the state for Favorites -->\n                    <app-heart-icon [job]=\"job\" [favoriteJobs]=\"this.favoriteJobsObj\" ></app-heart-icon>\n                    <ion-button class=\"job-details ion-float-right\" (click)=\"jobPage(job)\">\n                      Details\n                    </ion-button>\n                </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n    <!-- Skeleton Data -->\n    <div *ngIf=\"!this.data\">\n      <ion-list>\n        <ion-item lines=\"none\">\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    30629:
    /*!*******************************************!*\
      !*** ./src/app/pages/jobs/jobs.page.scss ***!
      \*******************************************/

    /***/
    function _(module) {
      module.exports = "#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n\n#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n\n.company-logo {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n  width: 100%;\n}\n\n.filter-toolbar-wrapper {\n  width: 100%;\n  z-index: 9999;\n}\n\n.filter-toolbar-wrapper ion-toolbar {\n  --background: linear-gradient(30deg, #004785, #0055a5);\n  position: relative;\n  top: 10px;\n  box-shadow: 1px 1px 8px #36363654;\n  border-radius: 100px;\n}\n\n.filter-toolbar-wrapper ion-toolbar p {\n  font-weight: 600;\n  color: white;\n}\n\n.filter-message {\n  color: #222;\n  font-size: 1.2em;\n  position: relative;\n  left: 16px;\n}\n\n@media only screen and (min-width: 992px) {\n  .filter-message {\n    color: #fbb606;\n    font-weight: 600;\n    position: relative;\n    top: 3px;\n  }\n}\n\n.filter-icon {\n  color: white;\n  font-size: 1.4em;\n}\n\n.job-details {\n  --background: white;\n  --color: #0055a5;\n  --border-color: #0055a5;\n  --border-style: solid;\n  --border-width: 2px;\n  height: 24px;\n  --width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n  position: relative;\n  top: 10px;\n}\n\n.desktop-toolbar {\n  --background: linear-gradient(30deg, #004785, #0055a5);\n  box-shadow: 1px 1px 19px #36363636;\n  border-radius: 100px;\n}\n\n.desktop-toolbar h1 {\n  color: white;\n}\n\n.desktop-toolbar ion-buttons:nth-child(1) {\n  position: relative;\n  left: 3em;\n}\n\n.desktop-toolbar ion-buttons:nth-child(2) {\n  position: relative;\n  right: 3em;\n}\n\n.favorites-button {\n  --color: white;\n  --background: none;\n  --background-hover: linear-gradient(#e3405f, #5f4045);\n  height: 24px;\n  width: 70px;\n  font-size: 0.6em;\n  font-weight: 600;\n  display: block;\n}\n\n.filter-button {\n  --color: white;\n  --background: none;\n  --background-hover: linear-gradient(#e3405f, #da3a57);\n  height: 24px;\n  --border-radius: 5px;\n  width: 70px;\n  font-size: 0.8em;\n  font-weight: 600;\n  display: block;\n}\n\n.job-section {\n  background: white;\n  border-radius: 10px;\n  height: auto;\n  color: #777;\n  width: 100%;\n  opacity: 0;\n  padding: 1em 0px;\n  margin-bottom: 50px;\n  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.05);\n  -webkit-animation: job-section-slide 0.5s ease 0.5 forwards;\n          animation: job-section-slide 0.5s ease 0.5 forwards;\n}\n\n@-webkit-keyframes job-section-slide {\n  0% {\n    transform: translateX(-20px);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes job-section-slide {\n  0% {\n    transform: translateX(-20px);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\n#job-summary {\n  font-size: 0.9em;\n  line-height: 1.4em;\n  color: #222;\n}\n\n@media only screen and (min-width: 993px) {\n  #job-summary {\n    font-size: 16px;\n    line-height: 21px;\n  }\n}\n\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -29px;\n}\n\n#job-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n  color: #111;\n}\n\n#job-rate {\n  font-size: 0.95em;\n  font-weight: 900;\n  opacity: 0.7;\n  position: relative;\n  top: -53px;\n  color: #116e56;\n}\n\n@media only screen and (min-width: 992px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0U7RUFDRSxzREFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFBSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUVOOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBREY7O0FBS0E7RUFDRTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQUZGO0FBQ0Y7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBREY7O0FBR0E7RUFDRSxzREFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFDRTtFQUNFLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUFHRjs7QUFEQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VBSUY7RUFGQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUlGO0FBQ0Y7O0FBWkE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQUlGO0VBRkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFJRjtBQUNGOztBQUFBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBR0Y7QUFDRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUFBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBR0Y7QUFDRjs7QUFBQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6ImpvYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jc2VhcmNoYmFyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gfVxuXG4jbG9nb3tcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbn1cbi5jb21wYW55LWxvZ28ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmlsdGVyLXRvb2xiYXItd3JhcHBlcntcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC8vIGJveC1zaGFkb3c6IDFweCAxMHB4IDI2cHggcmdiYSgwLDAsMCwwLjA1KTtcblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsICMwMDQ3ODUsICMwMDU1YTUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggIzM2MzYzNjU0O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHAge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cbi5maWx0ZXItdG9vbGJhcntcbn1cbi5maWx0ZXItbWVzc2FnZXtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTZweDtcblxuICBcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmZpbHRlci1tZXNzYWdlICB7XG4gICAgY29sb3I6ICNmYmI2MDY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzcHg7XG4gIH1cbn1cbi5maWx0ZXItaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cbi5qb2ItZGV0YWlscyB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMwMDU1YTU7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDA1NWE1O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gIGhlaWdodDogMjRweDtcbiAgLS13aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbn1cbi5kZXNrdG9wLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwZGVnLCAjMDA0Nzg1LCAjMDA1NWE1KTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxOXB4ICMzNjM2MzYzNjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgaW9uLWJ1dHRvbnM6bnRoLWNoaWxkKDEpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAzZW07XG4gIH1cbiAgaW9uLWJ1dHRvbnM6bnRoLWNoaWxkKDIpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogM2VtO1xuICB9XG59XG4uZmF2b3JpdGVzLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNlMzQwNWYsICM1ZjQwNDUpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5maWx0ZXItYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2UzNDA1ZiwgI2RhM2E1Nyk7XG4gIGhlaWdodDogMjRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5qb2Itc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNzc3O1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogMWVtIDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA1cHggcmdiKDAgMCAwIC8gNSUpO1xuICBhbmltYXRpb246IGpvYi1zZWN0aW9uLXNsaWRlIDAuNXMgZWFzZSAwLjUgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGpvYi1zZWN0aW9uLXNsaWRlIHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICAwJXtcbiAgfVxufVxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbiNqb2Itc3VtbWFyeSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgY29sb3I6ICMyMjI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XG4gICNqb2Itc3VtbWFyeSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICB9XG59XG4jY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3BhY2l0eTogMC44O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI5cHhcbn1cblxuI2pvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbiAgY29sb3I6ICMxMTE7XG59XG5cbiNqb2ItcmF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTNweDtcbiAgY29sb3I6ICMxMTZlNTY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI2pvYi10aXRsZSAge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuI2pvYi1wb3N0ZWQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQzcHhcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_jobs_jobs_module_ts-es5.js.map