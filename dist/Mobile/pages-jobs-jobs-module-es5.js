(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-jobs-jobs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesJobsJobsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-searchbar\n      debounce=\"2000\"\n      class=\"searchbar\"\n      animated=\"true\"\n      searchIcon=\"none\"\n      showCancelButton=\"true\"\n      placeholder=\"Search Job Titles\"\n      (ionChange)=\"filter($event)\"\n       ></ion-searchbar>\n\n       <ion-buttons slot=\"end\">\n        <ion-button (click)=\"favoritesPage()\">\n         <!-- My Events ({{ eventsGoingLength }}) -->\n         <ion-icon slot=\"start\" src=\"../../assets/icons/my-favorite-jobs.svg\"></ion-icon>\n     </ion-button>\n       </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n\n    <!-- Desktop Searchbar / Toolbar -->\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 50px 0 50px 0;\">\n      <ion-col size=\"8.33\" push=\"1\">\n        <ion-searchbar\n        class=\"searchbar\"\n        showCancelButton=\"true\"\n        placeholder=\"Search Job Titles\"\n        debounce=\"1500\"\n        (ionChange)=\"filter($event)\"\n        ></ion-searchbar>\n\n      </ion-col>\n      <ion-col size=\"2\" push=\"0.5\">\n        <ion-button class=\"blue-button ion-float-right\" style=\"width: 170px; position: fixed; top: 60px;\" (click)=\"favoritesPage()\">\n          <ion-icon src=\"../../../assets/icons/my-favorite-jobs\"></ion-icon>\n          {{favoriteJobsAmount}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- No Search Results Message -->\n    <ion-row *ngIf=\"noSearchInput\" class=\"ion-justify-content-center\">\n      <ion-col size=\"6\" style=\"margin-top: 25px;\">\n        <h6 class=\"text-header-mobile\" style=\"text-align: center;\">There were no search results with that name.</h6>\n        <ion-button class=\"orange-button\" expand=\"block\" (click)=\"doRefresh($event)\">\n          Clear Search\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"!noSearchInput\">\n      <ion-col push-xs=\"0\" push-sm=\"1.3\" push-lg=\"1.05\" size-xs=\"12\" size-sm=\"10\" size-md=\"7.4\">\n        <ion-row class=\"job-section\" *ngFor=\"let job of allJobs\">\n\n          <!-- First Row w/ Job Tile, Date posted, and Logo -->\n          <ion-col push=\"0.5\" push-lg=\"0.6\" size-xs=\"12 \"size=\"7\" style=\"padding-top: 30px\">\n            <ion-row class=\"ion-align-items-start\">\n              <ion-col size=\"1\">\n                <div class=\"company-logo\" style=\"height: 60px; width: 60px;\"></div>\n              </ion-col>\n              <ion-col push-xs=\"1\" push-sm=\"1\" push-md=\"1\" push-lg=\"0.5\" size=\"4\">\n                <h5 id=\"job-title\">{{job.title}}</h5>\n                <p id=\"company-name\">{{job.companyName}}</p>\n                <h5 id=\"job-posted-date\">Posted: {{job.dateCreated}}</h5>\n                <h5 id=\"job-rate\">${{job.rateOfPay}}/hr</h5>\n              </ion-col>\n              <ion-col push-xs=\"3.5\" push-sm=\"3.5\" push-sm=\"3.5\" push-sm=\"3.9\" size=\"1\">\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n            <ion-row>\n              <ion-col push=\"0.5\"  size=\"10.5\" >\n                <p id=\"job-summary\">{{job.summary}}</p>\n              </ion-col>\n            </ion-row>\n\n          <ion-col size=\"12\">\n            <ion-row>\n              <ion-col push=\"0.5\" size=\"10.5\">\n                <ion-button id=\"job-details\" class=\"ion-float-right\" (click)=\"jobPage(job)\">\n                  Details\n                </ion-button>\n                <!-- Heart Icon Component holds the state for Favorites -->\n                <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Fourth Row w/ Favorite Button -->\n          <ion-col size=\"12\">\n            <ion-row>\n            </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/jobs/jobs-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/jobs/jobs-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: JobsPageRoutingModule */

  /***/
  function srcAppPagesJobsJobsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsPageRoutingModule", function () {
      return JobsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _jobs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./jobs.page */
    "./src/app/pages/jobs/jobs.page.ts");

    const routes = [{
      path: '',
      component: _jobs_page__WEBPACK_IMPORTED_MODULE_3__["JobsPage"]
    }, {
      path: 'job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay',
      loadChildren: () => __webpack_require__.e(
      /*! import() | job-page-job-page-module */
      "job-page-job-page-module").then(__webpack_require__.bind(null,
      /*! ./job-page/job-page.module */
      "./src/app/pages/jobs/job-page/job-page.module.ts")).then(m => m.JobPagePageModule)
    }, {
      path: 'favorites',
      loadChildren: () => __webpack_require__.e(
      /*! import() | favorites-favorites-module */
      "favorites-favorites-module").then(__webpack_require__.bind(null,
      /*! ./favorites/favorites.module */
      "./src/app/pages/jobs/favorites/favorites.module.ts")).then(m => m.FavoritesPageModule)
    }];
    let JobsPageRoutingModule = class JobsPageRoutingModule {};
    JobsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], JobsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/jobs.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/jobs/jobs.module.ts ***!
    \*******************************************/

  /*! exports provided: JobsPageModule */

  /***/
  function srcAppPagesJobsJobsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsPageModule", function () {
      return JobsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _jobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./jobs.page */
    "./src/app/pages/jobs/jobs.page.ts");
    /* harmony import */


    var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./jobs-routing.module */
    "./src/app/pages/jobs/jobs-routing.module.ts");
    /* harmony import */


    var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/custom-component.module */
    "./src/app/components/custom-component.module.ts");
    /* harmony import */


    var _profile_resume_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../profile/resume/view-resume/view-resume.module */
    "./src/app/pages/profile/resume/view-resume/view-resume.module.ts");

    let JobsPageModule = class JobsPageModule {};
    JobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _components_custom_component_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__["JobsPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"]
      }]), _profile_resume_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_9__["ViewResumePageModule"]],
      declarations: [_jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"]]
    })], JobsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/jobs/jobs.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/jobs/jobs.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesJobsJobsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n  background: #edf3f8;\n  border-bottom: 1px solid #005191;\n}\nion-header ion-icon {\n  font-size: 2.5em;\n}\n#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n.company-logo {\n  background-image: url('journi-logo.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n#job-details {\n  --background: #edf3f8;\n  --background-hover: #edf3f8;\n  color: #005191;\n  margin-right: 10px;\n  font-size: 15px;\n  height: 45px;\n  border-radius: 5px;\n}\n#job-details:hover {\n  color: white;\n}\n#favorites-button {\n  opacity: 1;\n  --background: #005191;\n  --background-hover: #005191;\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 100px;\n  height: 50px;\n  font-size: 0.8em;\n  font-weight: 600;\n  position: relative;\n  right: 15px;\n}\nion-searchbar {\n  margin-left: 10px;\n  --background: white;\n  border-radius: 5px;\n  --height: 60px;\n  width: 95%;\n  font-size: 0.8em;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 5px;\n}\nion-searchbar:focus {\n  border: 1px solid #005191;\n}\n.job-section {\n  background: white;\n  height: auto;\n  color: #777;\n  width: 100%;\n  margin-bottom: 50px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);\n}\nh6, p {\n  display: block;\n}\n--ion-buttons {\n  --color: #888;\n}\n#job-summary {\n  font-size: 1.3em;\n  line-height: 1.3em;\n  position: relative;\n  color: #333;\n  opacity: 0.7;\n  top: -60px;\n  padding-bottom: 40px;\n  border-bottom: 1px solid #005191;\n}\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -29px;\n}\n#job-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n  color: #111;\n}\n#job-rate {\n  font-size: 0.95em;\n  font-weight: 900;\n  opacity: 0.7;\n  position: relative;\n  top: -53px;\n  color: #116e56;\n}\n@media only screen and (min-width: 992px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvam9icy9qb2JzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvam9icy9qb2JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtBQ0NKO0FER0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0FGO0FER0E7RUFDRSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQ0FGO0FER0E7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQUY7QURJQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UseUJBQUE7QUNERjtBRElBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDREY7QURJQTtFQUNFLGNBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDREY7QURJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0RGO0FESUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNERjtBRElBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VDREY7QUFDRjtBRElBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYnMvam9icy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNTE5MTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgfVxufVxuXG4jbG9nb3tcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9qb3VybmktbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4jam9iLWRldGFpbHMge1xuICAtLWJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2VkZjNmODtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2pvYi1kZXRhaWxzOmhvdmVye1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNmYXZvcml0ZXMtYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMDUxOTE7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cblxuaW9uLXNlYXJjaGJhciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0taGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogOTUlO1xuICBmb250LXNpemU6IDAuOGVtO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1jbGVhci1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAtLWljb24tY29sb3I6ICMwMDUxOTE7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuaW9uLXNlYXJjaGJhcjpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG59XG5cbi5qb2Itc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNzc3O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbmg2LCBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi0taW9uLWJ1dHRvbnMge1xuICAtLWNvbG9yOiAjODg4O1xufVxuXG4jam9iLXN1bW1hcnkge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMzMzM7XG4gIG9wYWNpdHk6IDAuNztcbiAgdG9wOiAtNjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA1MTkxO1xufVxuXG4jY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3BhY2l0eTogMC44O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI5cHhcbn1cblxuI2pvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbiAgY29sb3I6ICMxMTE7XG59XG5cbiNqb2ItcmF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTNweDtcbiAgY29sb3I6ICMxMTZlNTY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI2pvYi10aXRsZSAge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuI2pvYi1wb3N0ZWQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQzcHhcbn1cbiIsImlvbi1oZWFkZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA1MTkxO1xufVxuaW9uLWhlYWRlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbiNsb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLmNvbXBhbnktbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9qb3VybmktbG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4jam9iLWRldGFpbHMge1xuICAtLWJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2VkZjNmODtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2pvYi1kZXRhaWxzOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jZmF2b3JpdGVzLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDA1MTkxO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1oZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogIzAwNTE5MTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gIC0taWNvbi1jb2xvcjogIzAwNTE5MTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZzogNXB4O1xufVxuXG5pb24tc2VhcmNoYmFyOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbn1cblxuLmpvYi1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICM3Nzc7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBib3gtc2hhZG93OiAxcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbiNqb2Itc3VtbWFyeSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMC43O1xuICB0b3A6IC02MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDUxOTE7XG59XG5cbiNjb21wYW55LW5hbWUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjlweDtcbn1cblxuI2pvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbiAgY29sb3I6ICMxMTE7XG59XG5cbiNqb2ItcmF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTNweDtcbiAgY29sb3I6ICMxMTZlNTY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI2pvYi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICNqb2ItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuI2pvYi1wb3N0ZWQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/jobs/jobs.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/jobs/jobs.page.ts ***!
    \*****************************************/

  /*! exports provided: JobsPage */

  /***/
  function srcAppPagesJobsJobsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsPage", function () {
      return JobsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/jobs.service */
    "./src/app/services/jobs.service.ts");
    /* harmony import */


    var _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/emitters/favorites-event-emitter.service */
    "./src/app/emitters/favorites-event-emitter.service.ts");

    let JobsPage = class JobsPage {
      constructor(router, jobs, favorites, profile, eventEmitterService, loading) {
        this.router = router;
        this.jobs = jobs;
        this.favorites = favorites;
        this.profile = profile;
        this.eventEmitterService = eventEmitterService;
        this.loading = loading;
        this.jobsGoingLength = 0;
        this.searching = false;
        this.noSearchInput = false;
        this.favorited = 'favorited';
        this.unfavorited = 'unfavorited';
      }

      ngOnDestroy() {
        this.eventEmitterService.subsVar.unsubscribe();
        this.jobsSub.unsubscribe();
        this.profileSub.unsubscribe();
        this.favoriteJobsSub.unsubscribe();
      }

      ngOnInit() {
        // Hide Tab Bar
        const tabBar = document.getElementById('tabBar');
        tabBar.style.display = 'static';

        if (this.eventEmitterService.subsVar == undefined) {
          this.eventEmitterService.subsVar = this.eventEmitterService.invokeJobsPageRefresh.subscribe(() => {
            this.getJobs();
          });
        }

        this.getFavoriteJobs();
        this.jobsSub = this.jobs.getJobs().subscribe(jobs => {
          // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list jobs,
          // .
          console.log('jobs that are intially loaded: ');
          console.log(jobs);
          this.allJobs = Object.values(jobs);
          this.allJobsLength = this.allJobs.length;
          this.allJobs.reverse();
          this.loadedAllJobs = Object.values(jobs);
          this.loadedAllJobs.reverse();

          for (const job of this.allJobs) {
            job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(job.dateCreated), {
              addSuffix: true
            });
          }
        });
      }

      filter($job) {
        this.initializeItems();
        let searchTerm = $job.detail.value;
        this.presentLoadingWithOptions();
        this.allJobs = this.allJobs.filter(currentJobs => {
          console.log(currentJobs);

          if (!currentJobs || !searchTerm) {
            console.log('No results from that search');
            this.noSearchInput = true;
          }

          if (currentJobs.title && searchTerm) {
            if (currentJobs.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
              console.log(currentJobs.title);
              console.log(currentJobs);
              this.searchTerm = searchTerm;
              this.searching = true;
              this.noSearchInput = false;
              return true;
            }

            return false;
          }

          this.noSearchInput = true;
        });
        this.allJobsLength = this.allJobs.length; // If there are no matches with the searchTerm

        if (this.allJobsLength === 0) {
          console.log('No results from that search');
          this.searching = true;
          this.searchTerm = searchTerm;
          this.searchbar.getInputElement().then(searchbarInputElement => {
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

      initializeItems() {
        this.allJobs = this.loadedAllJobs;
      }

      getFavoriteJobs() {
        // Get all the user's favorite jobs
        this.profileSub = this.profile.getUserDetails().subscribe(data => {
          this.favoriteJobs = data['favoriteJobs'];
          console.log('Favorite Jobs:');
          console.log(this.favoriteJobs);
          this.favorites.favoriteJobs$.next(this.favoriteJobs);
          this.favoriteJobsSub = this.favorites.favoriteJobs$.subscribe(favs => {
            console.log("Favorite Jobs in Service: ".concat(favs));
            this.favoriteJobsAmount = favs.length;
            this.favorites.getFavorites(data['email']).subscribe(favDetails => {
              this.favoriteJobsObj = favDetails;
            });
          });
        });
      }

      jobPage(job) {
        console.log('Going to specific Job Page:', job.title);
        console.log('The job: ', job); // state object after url has to be an object for navigate()
        // tslint:disable-next-line: max-line-length

        this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
      }

      favoritesPage() {
        this.router.navigate(['/home/jobs/favorites']);
      }

      doRefresh(job) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.allJobs = [];
          this.getFavoriteJobs();
          this.jobsSub = this.jobs.getJobs().subscribe(jobs => {
            this.allJobs = Object.values(jobs);
            this.allJobsLength = this.allJobs.length;
            this.allJobs.reverse();
            this.searching = false; // Format Times

            for (const job of this.allJobs) {
              job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(job.dateCreated), {
                addSuffix: false
              });
            }
          });
          setTimeout(() => {
            job.target.complete();
            console.log('jobs Refreshed');
          }, 2000);
          yield this.searchbar.getInputElement().then(searchbarInputElement => {
            searchbarInputElement.value = '';
            this.noSearchInput = false;
          });
          yield console.log('Refreshing jobs Page..');
        });
      }

      getJobs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.jobsSub = this.jobs.getJobs().subscribe(jobs => {
            this.allJobs = Object.values(jobs);
            this.allJobsLength = this.allJobs.length;
            this.allJobs.reverse();
            this.searching = false; // Format Times

            for (const job of this.allJobs) {
              job.dateCreated = Object(date_fns__WEBPACK_IMPORTED_MODULE_7__["formatDistanceToNow"])(new Date(job.dateCreated), {
                addSuffix: false
              });
            }
          });
        });
      }

      presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loading.create({
            duration: 1000,
            message: 'Searching for jobs...',
            translucent: true,
            cssClass: 'custom-class custom-loading',
            keyboardClose: false
          });
          return yield loading.present();
        });
      }

    };

    JobsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"]
    }, {
      type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"]
    }, {
      type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
    }, {
      type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["FavoritesEventEmitterService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])], JobsPage.prototype, "searchbar", void 0);
    JobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jobs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jobs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/jobs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jobs.page.scss */
      "./src/app/pages/jobs/jobs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"], _services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"], src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"], src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["FavoritesEventEmitterService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], JobsPage);
    /***/
  },

  /***/
  "./src/app/services/jobs.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/jobs.service.ts ***!
    \******************************************/

  /*! exports provided: JobsService */

  /***/
  function srcAppServicesJobsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsService", function () {
      return JobsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    let JobsService = class JobsService {
      constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
      }

      getJobs() {
        console.log('Getting Jobs');
        return this.http.get("".concat(this.BACKEND_URL, "/api/jobs"));
      }

      sendEmailApplication(user, age, phoneNumber, reason, jobTitle, jobCompanyEmail) {
        console.log("Sending email to ".concat(jobCompanyEmail));
        return this.http.post("".concat(this.BACKEND_URL, "/api/jobs/send-application"), {
          user,
          age,
          phoneNumber,
          reason,
          jobTitle,
          jobCompanyEmail
        });
      }

    };

    JobsService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    JobsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], JobsService);
    /***/
  }
}]);
//# sourceMappingURL=pages-jobs-jobs-module-es5.js.map