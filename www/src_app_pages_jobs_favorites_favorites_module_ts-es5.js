(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_jobs_favorites_favorites_module_ts"], {
    /***/
    92864: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoritesPageRoutingModule": function FavoritesPageRoutingModule() {
          return (
            /* binding */
            _FavoritesPageRoutingModule
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


      var _favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./favorites.page */
      69667);

      var routes = [{
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPage
      }];

      var _FavoritesPageRoutingModule = function FavoritesPageRoutingModule() {
        _classCallCheck(this, FavoritesPageRoutingModule);
      };

      _FavoritesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FavoritesPageRoutingModule);
      /***/
    },

    /***/
    23420: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoritesPageModule": function FavoritesPageModule() {
          return (
            /* binding */
            _FavoritesPageModule
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


      var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./favorites-routing.module */
      92864);
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../components/custom-component.module */
      64941);
      /* harmony import */


      var _favorites_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./favorites.page */
      69667);

      var _FavoritesPageModule = function FavoritesPageModule() {
        _classCallCheck(this, FavoritesPageModule);
      };

      _FavoritesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesPageRoutingModule, _components_custom_component_module__WEBPACK_IMPORTED_MODULE_1__.CustomComponentsModule],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_2__.FavoritesPage]
      })], _FavoritesPageModule);
      /***/
    },

    /***/
    69667: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoritesPage": function FavoritesPage() {
          return (
            /* binding */
            _FavoritesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./favorites.page.html */
      37485);
      /* harmony import */


      var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./favorites.page.scss */
      13918);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/favorites.service */
      85097);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! date-fns */
      63818);
      /* harmony import */


      var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/emitters/favorites-event-emitter.service */
      81615);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _FavoritesPage = /*#__PURE__*/function () {
        function FavoritesPage(router, favorites, profile, eventEmitterService, location) {
          _classCallCheck(this, FavoritesPage);

          this.router = router;
          this.favorites = favorites;
          this.profile = profile;
          this.eventEmitterService = eventEmitterService;
          this.location = location;
        }

        _createClass(FavoritesPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // this.favoriteSubs.unsubscribe();
            // this.favorites.favoriteJobs$.unsubscribe();
            this.profileSub.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.location.onPopState(function () {
              _this.eventEmitterService.onBackAction(); // this.favorites.getFavorites(this.userEmail);

            }); // this.favorites.favoriteJobs$.subscribe(favorites => {
            //   this.favoriteJobs = Object.values(favorites);
            // });

            this.getFavoriteJobs();
          }
        }, {
          key: "back",
          value: function back() {
            this.eventEmitterService.onBackAction();
            this.router.navigate(['/home/jobs']);
          }
        }, {
          key: "getFavoriteJobs",
          value: function getFavoriteJobs() {
            var _this2 = this;

            // getting all the favorite jobs that the user has on their profile
            this.profileSub = this.profile.getUserDetails().subscribe(function (data) {
              _this2.userEmail = data['email']; // this.favoriteJobs = data['favoriteJobs']
              // console.log('Favorite Jobs:');
              // console.log(this.favoriteJobs);
              // this.favorites.favoriteJobs$.next(this.favoriteJobs);

              _this2.favorites.favoriteJobs$.subscribe(function (favs) {
                console.log("Favorite Jobs in Service: ".concat(favs));
                _this2.favoriteSubs = _this2.favorites.getFavorites(_this2.userEmail).subscribe(function (favDetails) {
                  _this2.favoriteJobsObj = favDetails;
                  console.log('Favorite jobs:');
                  console.log(favDetails);

                  if (_this2.favoriteJobsObj.length == 0) {
                    console.log('wassup');
                    _this2.noFavorites = true;
                  } else {
                    _this2.noFavorites = false;
                  }

                  var _iterator = _createForOfIteratorHelper(_this2.favoriteJobsObj),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var job = _step.value;
                      job.dateCreated = (0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(job.dateCreated), {
                        addSuffix: true
                      });
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                });
              });
            });
          }
        }, {
          key: "jobPage",
          value: function jobPage(job) {
            console.log(job);
            console.log('Going to specific Job Page'); // state object after url has to be an object for navigate()
            // tslint:disable-next-line: max-line-length

            this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
            console.log(job.name);
          }
        }, {
          key: "favoriteJobPage",
          value: function favoriteJobPage() {
            console.log('Going to favorite bad');
          }
        }]);

        return FavoritesPage;
      }();

      _FavoritesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesService
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService
        }, {
          type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.FavoritesEventEmitterService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.PlatformLocation
        }];
      };

      _FavoritesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-favorites',
        template: _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router, _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService, src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.FavoritesEventEmitterService, _angular_common__WEBPACK_IMPORTED_MODULE_7__.PlatformLocation])], _FavoritesPage);
      /***/
    },

    /***/
    13918: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n  background: #edf3f8;\n  border-bottom: 1px solid #005191;\n}\nion-header ion-icon {\n  font-size: 2.5em;\n}\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n.company-logo {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n}\n.filter-message {\n  color: #888;\n  opacity: 0;\n  -webkit-animation: filter-message-slide 0.5s ease 1s forwards;\n          animation: filter-message-slide 0.5s ease 1s forwards;\n  float: right;\n}\n.filter-message span {\n  font-weight: 600;\n}\n@-webkit-keyframes filter-message-slide {\n  0% {\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes filter-message-slide {\n  0% {\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n.job-details {\n  --background: #0055a5;\n  --color: white;\n  --background-hover: rgb(24, 40, 54);\n  height: 24px;\n  --width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n  position: relative;\n  top: 10px;\n}\n.desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #e3405f;\n  --background-hover: linear-gradient(#e3405f, #5f4045);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.job-section {\n  background: white;\n  border-radius: 10px;\n  height: auto;\n  color: #777;\n  width: 100%;\n  opacity: 0;\n  padding: 2em 0px;\n  margin-bottom: 50px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  -webkit-animation: job-section-slide 0.5s ease 0.5 forwards;\n          animation: job-section-slide 0.5s ease 0.5 forwards;\n}\n@-webkit-keyframes job-section-slide {\n  0% {\n    transform: translateX(-20px);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes job-section-slide {\n  0% {\n    transform: translateX(-20px);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\nh6, p {\n  display: block;\n}\n--ion-buttons {\n  --color: #888;\n}\n#job-summary {\n  font-size: 1em;\n  line-height: 1.3em;\n  color: #222;\n}\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -29px;\n}\n#job-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n  color: #111;\n}\n#job-rate {\n  font-size: 0.95em;\n  font-weight: 900;\n  opacity: 0.7;\n  position: relative;\n  top: -53px;\n  color: #116e56;\n}\n@media only screen and (min-width: 992px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFERjtBQUlBO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSw2REFBQTtVQUFBLHFEQUFBO0VBQ0EsWUFBQTtBQUFGO0FBRUU7RUFDRSxnQkFBQTtBQUFKO0FBR0E7RUFDRTtJQUNFLDJCQUFBO0VBQUY7RUFFQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUFGO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsMkJBQUE7RUFBRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBQUY7QUFDRjtBQUVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQUY7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUFFRjtBQUFBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFHRjtFQURBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBR0Y7QUFDRjtBQVhBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFHRjtFQURBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBR0Y7QUFDRjtBQUNBO0VBQ0UsY0FBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQURGIiwiZmlsZSI6ImZhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNTE5MTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgfVxufVxuXG5cbiNzZWFyY2hiYXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiB9XG5cbiNsb2dve1xuICB3aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uY29tcGFueS1sb2dvIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uZmlsdGVyLW1lc3NhZ2V7XG4gIGNvbG9yOiAjODg4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZpbHRlci1tZXNzYWdlLXNsaWRlIDAuNXMgZWFzZSAxcyBmb3J3YXJkcztcbiAgZmxvYXQ6IHJpZ2h0O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmlsdGVyLW1lc3NhZ2Utc2xpZGUge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG4uam9iLWRldGFpbHMge1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYigyNCwgNDAsIDU0KTtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLXdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzMyNjtcblxuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbi5iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICNlMzQwNWY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNlMzQwNWYsICM1ZjQwNDUpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uam9iLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzc3NztcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmc6IDJlbSAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDI2cHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgYW5pbWF0aW9uOiBqb2Itc2VjdGlvbi1zbGlkZSAwLjVzIGVhc2UgMC41IGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBqb2Itc2VjdGlvbi1zbGlkZSB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbiAgMCV7XG4gIH1cbn1cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi0taW9uLWJ1dHRvbnMge1xuICAtLWNvbG9yOiAjODg4O1xufVxuXG4jam9iLXN1bW1hcnkge1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICBjb2xvcjogIzIyMjtcbn1cblxuI2NvbXBhbnktbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yOXB4XG59XG5cbiNqb2ItdGl0bGUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE1cHg7XG4gIGNvbG9yOiAjMTExO1xufVxuXG4jam9iLXJhdGUge1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUzcHg7XG4gIGNvbG9yOiAjMTE2ZTU2O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAjam9iLXRpdGxlICB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbiNqb2ItcG9zdGVkLWRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00M3B4XG59XG4iXX0= */";
      /***/
    },

    /***/
    37485: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Favorites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../../assets/icon/my-favorite-jobs-blue.svg\" alt=\"\" srcset=\"\">\n                  <h1>Favorites</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"back()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n        <!-- <ion-row>\n          <ion-col size=\"12\">\n            <p *ngIf=\"this.jobFilter === 'htol'\" class=\"filter-message\"><span>Filter</span>: Pay - High to Low</p>\n            <p *ngIf=\"this.jobFilter === 'ltoh'\" class=\"filter-message\"><span>Filter</span>: Pay - Low to High</p>\n            <p *ngIf=\"this.jobFilter === 'newest'\" class=\"filter-message\"><span>Filter</span>: Newest</p>\n            <p *ngIf=\"this.jobFilter === 'oldest'\" class=\"filter-message\"><span>Filter</span> {{this.jobFilter}}</p>\n          </ion-col>\n        </ion-row> -->\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row class=\"ion-justify-content-center\">\n      <ion-col style=\"position: relative; top: -32px;\" class=\"ion-text-center\" size=\"12\">\n        <ion-spinner *ngIf=\"this.filtering\" name=\"bubbles\">Filtering</ion-spinner>\n      </ion-col>\n    </ion-row> -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col *ngIf=\"noFavorites\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <h1>You have no favorites.</h1>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-row class=\"job-section ion-justify-content-center\" *ngFor=\"let job of favoriteJobsObj\">\n              <ion-col push=\"0.5\" size=\"1\">\n                <img class=\"company-logo\" src=\"{{job.companyLogo}}\">\n              </ion-col>\n              <ion-col push=\"0.5\" style=\"height: 80px;\">\n                <h5 id=\"job-title\">{{job.title}}</h5>\n                <p id=\"company-name\">{{job.companyName}}</p>\n                <h5 id=\"job-posted-date\">Posted: {{job.dateCreated}}</h5>\n                <h5 id=\"job-rate\">${{job.rateOfPay}}/hr</h5>\n              </ion-col>\n              <ion-col size=\"11\">\n                <p id=\"job-summary\">{{job.summary}}</p>\n              </ion-col>\n              <ion-col pull=\"0\" size=\"11\">\n                  <ion-button class=\"job-details ion-float-right\" (click)=\"jobPage(job)\">\n                    Details\n                  </ion-button>\n                  <!-- Heart Icon Component holds the state for Favorites -->\n                  <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n              </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_jobs_favorites_favorites_module_ts-es5.js.map