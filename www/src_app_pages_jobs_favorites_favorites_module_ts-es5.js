(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_jobs_favorites_favorites_module_ts"], {
    /***/
    92864:
    /*!******************************************************************!*\
      !*** ./src/app/pages/jobs/favorites/favorites-routing.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    23420:
    /*!**********************************************************!*\
      !*** ./src/app/pages/jobs/favorites/favorites.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    69667:
    /*!********************************************************!*\
      !*** ./src/app/pages/jobs/favorites/favorites.page.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./favorites.page.html */
      87747);
      /* harmony import */


      var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./favorites.page.scss */
      77194);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
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
      48578);
      /* harmony import */


      var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/emitters/favorites-event-emitter.service */
      81615);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

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
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router, _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService, src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.FavoritesEventEmitterService, _angular_common__WEBPACK_IMPORTED_MODULE_7__.PlatformLocation])], _FavoritesPage);
      /***/
    },

    /***/
    87747:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/jobs/favorites/favorites.page.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <img height=\"30\" src=\"../../../../assets/icon/jobs-favorites-heart-blue.svg\" alt=\"\" srcset=\"\">\n    </ion-buttons>\n    <ion-title>Favorites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"36\" src=\"../../../../assets/icon/jobs-favorites-heart-white.svg\" alt=\"Favorites-Icon\">\n                  <h1>Favorites</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"back()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n\n    <!-- No Favorites -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col *ngIf=\"noFavorites\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <h1 id=\"no-favorites\">You have no favorites.</h1>\n      </ion-col>\n    </ion-row>\n\n    <!-- Favorite Jobs -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <ion-row class=\"job-section ion-justify-content-center\" *ngFor=\"let job of favoriteJobsObj\">\n            <ion-col push=\"0.3\" size=\"1\">\n              <img class=\"company-logo\" src=\"{{job.companyLogo}}\">\n            </ion-col>\n            <ion-col push=\"0.3\" style=\"height: 80px;\">\n              <h5 id=\"job-title\">{{job.title}}</h5>\n              <p id=\"company-name\">{{job.companyName}}</p>\n              <h5 id=\"job-posted-date\">Posted: {{job.dateCreated}}</h5>\n              <h5 id=\"job-rate\">${{job.rateOfPay}}/hr</h5>\n            </ion-col>\n            <ion-col size=\"11\">\n              <p id=\"job-summary\">{{job.summary}}</p>\n            </ion-col>\n            <ion-col pull=\"0\" size=\"11\">\n                <!-- Heart Icon Component holds the state for Favorites -->\n                <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n                <ion-button class=\"job-details ion-float-right\" (click)=\"jobPage(job)\">\n                  Details\n                </ion-button>\n            </ion-col>\n      </ion-row>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    77194:
    /*!**********************************************************!*\
      !*** ./src/app/pages/jobs/favorites/favorites.page.scss ***!
      \**********************************************************/

    /***/
    function _(module) {
      module.exports = "ion-grid {\n  padding-bottom: 40px;\n}\n\nion-row {\n  margin-top: 0.5em;\n}\n\n#no-favorites {\n  text-align: center;\n  background: none;\n  color: #0055a5;\n  width: 200px;\n  font-size: 1em;\n  font-weight: 600;\n  margin: 4em auto;\n  padding: 0.5em;\n  border: 2px solid #0055a5;\n  border-radius: 8px;\n}\n\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n\n#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n\n.company-logo {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n}\n\n.filter-message {\n  color: #888;\n  opacity: 0;\n  -webkit-animation: filter-message-slide 0.5s ease 1s forwards;\n          animation: filter-message-slide 0.5s ease 1s forwards;\n  float: right;\n}\n\n.filter-message span {\n  font-weight: 600;\n}\n\n@-webkit-keyframes filter-message-slide {\n  0% {\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes filter-message-slide {\n  0% {\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n.job-details {\n  --background: white;\n  --color: #0055a5;\n  --border-color: #0055a5;\n  --border-style: solid;\n  --border-width: 2px;\n  height: 24px;\n  --width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n  position: relative;\n  top: 10px;\n}\n\n.desktop-toolbar {\n  --background: linear-gradient(30deg, #004785, #0055a5);\n  box-shadow: 1px 1px 19px #36363636;\n  border-radius: 100px;\n  margin-top: 2em;\n}\n\n.desktop-toolbar h1 {\n  color: white;\n  position: relative;\n  left: 10px;\n  top: -5px;\n  font-size: 1.5em;\n}\n\n.desktop-toolbar ion-buttons:nth-child(1) {\n  position: relative;\n  left: 3em;\n}\n\n.desktop-toolbar ion-buttons:nth-child(2) {\n  position: relative;\n  right: 3em;\n}\n\n.back-button {\n  --color: white;\n  --background: #e3405f;\n  --background-hover: linear-gradient(#e3405f, #5f4045);\n  height: 24px;\n  border-radius: 5px;\n  width: 60px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.job-section {\n  background: white;\n  border-radius: 10px;\n  height: auto;\n  color: #777;\n  width: 100%;\n  opacity: 0;\n  padding: 1em 0;\n  margin-bottom: 50px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  -webkit-animation: job-section-slide 0.5s ease 0.5 forwards;\n          animation: job-section-slide 0.5s ease 0.5 forwards;\n}\n\n@-webkit-keyframes job-section-slide {\n  0% {\n    transform: translateX(-20px);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes job-section-slide {\n  0% {\n    transform: translateX(-20px);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\n#job-summary {\n  font-size: 0.9em;\n  line-height: 1.6em;\n  color: #222;\n}\n\n@media only screen and (min-width: 993px) {\n  #job-summary {\n    font-size: 16px;\n    line-height: 21px;\n  }\n}\n\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -29px;\n}\n\n#job-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n  color: #111;\n}\n\n#job-rate {\n  font-size: 0.95em;\n  font-weight: 900;\n  opacity: 0.7;\n  position: relative;\n  top: -53px;\n  color: #116e56;\n}\n\n@media only screen and (min-width: 992px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n/*# sourceMappingURL=data:application/json;base64,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Z3JpZCB7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuaW9uLXJvdyB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuI25vLWZhdm9yaXRlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogNGVtIGF1dG87XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA1NWE1O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzZWFyY2hiYXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiB9XG5cbiNsb2dve1xuICB3aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uY29tcGFueS1sb2dvIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uZmlsdGVyLW1lc3NhZ2V7XG4gIGNvbG9yOiAjODg4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZpbHRlci1tZXNzYWdlLXNsaWRlIDAuNXMgZWFzZSAxcyBmb3J3YXJkcztcbiAgZmxvYXQ6IHJpZ2h0O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmlsdGVyLW1lc3NhZ2Utc2xpZGUge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG4uam9iLWRldGFpbHMge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTVhNTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0td2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG4uZGVza3RvcC10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgIzAwNDc4NSwgIzAwNTVhNSk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTlweCAjMzYzNjM2MzY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIGgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdG9wOiAtNXB4O1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbiAgaW9uLWJ1dHRvbnM6bnRoLWNoaWxkKDEpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAzZW07XG4gIH1cbiAgaW9uLWJ1dHRvbnM6bnRoLWNoaWxkKDIpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogM2VtO1xuICB9XG59XG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZTM0MDVmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZTM0MDVmLCAjNWY0MDQ1KTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5qb2Itc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNzc3O1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogMWVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDI2cHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgYW5pbWF0aW9uOiBqb2Itc2VjdGlvbi1zbGlkZSAwLjVzIGVhc2UgMC41IGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBqb2Itc2VjdGlvbi1zbGlkZSB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbiAgMCV7XG4gIH1cbn1cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi0taW9uLWJ1dHRvbnMge1xuICAtLWNvbG9yOiAjODg4O1xufVxuXG4jam9iLXN1bW1hcnkge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIGNvbG9yOiAjMjIyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkge1xuICAjam9iLXN1bW1hcnkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgfVxufVxuI2NvbXBhbnktbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yOXB4XG59XG5cbiNqb2ItdGl0bGUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE1cHg7XG4gIGNvbG9yOiAjMTExO1xufVxuXG4jam9iLXJhdGUge1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUzcHg7XG4gIGNvbG9yOiAjMTE2ZTU2O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAjam9iLXRpdGxlICB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbiNqb2ItcG9zdGVkLWRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00M3B4XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_jobs_favorites_favorites_module_ts-es5.js.map