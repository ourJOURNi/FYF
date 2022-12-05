"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_jobs_jobs_module_ts"],{

/***/ 43136:
/*!***************************************************!*\
  !*** ./src/app/pages/jobs/jobs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsPageRoutingModule": () => (/* binding */ JobsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs.page */ 18788);




const routes = [
    {
        path: '',
        component: _jobs_page__WEBPACK_IMPORTED_MODULE_0__.JobsPage
    },
    {
        path: 'job-page/:id/:title/:companyLogo/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_jobs_job-page_job-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./job-page/job-page.module */ 82562)).then(m => m.JobPagePageModule)
    },
    {
        path: 'favorites',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_jobs_favorites_favorites_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./favorites/favorites.module */ 23420)).then(m => m.FavoritesPageModule)
    }
];
let JobsPageRoutingModule = class JobsPageRoutingModule {
};
JobsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JobsPageRoutingModule);



/***/ }),

/***/ 98766:
/*!*******************************************!*\
  !*** ./src/app/pages/jobs/jobs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsPageModule": () => (/* binding */ JobsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs.page */ 18788);
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-routing.module */ 43136);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/custom-component.module */ 64941);
/* harmony import */ var _profile_resume_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile/resume/view-resume/view-resume.module */ 47659);










let JobsPageModule = class JobsPageModule {
};
JobsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _jobs_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobsPageRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{ path: '', component: _jobs_page__WEBPACK_IMPORTED_MODULE_0__.JobsPage }]),
            _profile_resume_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_3__.ViewResumePageModule
        ],
        declarations: [
            _jobs_page__WEBPACK_IMPORTED_MODULE_0__.JobsPage
        ]
    })
], JobsPageModule);



/***/ }),

/***/ 18788:
/*!*****************************************!*\
  !*** ./src/app/pages/jobs/jobs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsPage": () => (/* binding */ JobsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _jobs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs.page.html?ngResource */ 96932);
/* harmony import */ var _jobs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs.page.scss?ngResource */ 31731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jobs.service */ 11912);
/* harmony import */ var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/emitters/favorites-event-emitter.service */ 81615);
/* harmony import */ var src_app_components_jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/jobs-filter-popover/jobs-filter-popover.component */ 99820);
/* harmony import */ var src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/emitters/filter-jobs.service */ 67677);
var _a, _b, _c, _d, _e, _f;











let JobsPage = class JobsPage {
    constructor(router, jobs, popoverController, favoritesEventEmitterService, filterJobsService, loading) {
        this.router = router;
        this.jobs = jobs;
        this.popoverController = popoverController;
        this.favoritesEventEmitterService = favoritesEventEmitterService;
        this.filterJobsService = filterJobsService;
        this.loading = loading;
        this.jobFilter = 'newest';
        // What a user taps on a heart icon to favorite/unfavorite a job,
        // this will trigger an animation event on the Favorites counter
        // in the header toolbar. 
        this.favorited = false;
        this.unFavorited = false;
        this.searching = false;
        this.noSearchInput = false;
        // Set this false to enable skeleton
        this.data = true;
        this.allJobs = this.jobs.allJobs;
        this.favoriteJobsSub$ = this.jobs.favoriteJobs$.subscribe(jobs => {
            this.favoriteJobs = jobs;
            this.favoriteJobsAmount = jobs.length;
            console.log('\nFavorite Jobs with Favorites:');
            console.log(this.favoriteJobs);
            console.log(this.favoriteJobsAmount);
        });
    }
    ngOnInit() {
        this.filterJobsService.filterBehaviorSub.subscribe(data => {
            this.jobFilter = 'newest';
        });
        this.trackRoute();
        // Refresh Favorites after one has been deleted from the favoites page.
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.data = true;
        }, 1500);
    }
    trackRoute() {
        this.routerSub = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd)).subscribe(data => {
            // console.log(data['url']);
            let url = data['url'];
            if (url.includes('/home/jobs/job-page/')) {
                console.log('Hide Tab Bar!');
                let tabBar = document.getElementById('tabBar');
                let tabBarFab = document.getElementById('tab-bar-fab');
                tabBar.style.height = '0px';
                tabBar.style.transition = '1s';
                tabBarFab.style.transform = 'translateY(100px)';
            }
            else {
                let tabBar = document.getElementById('tabBar');
                let tabBarFab = document.getElementById('tab-bar-fab');
                // console.log(tabBar);
                tabBar.style.height = '50px';
                tabBar.style.transition = '1s';
                tabBarFab.style.transform = 'translateY(0px)';
            }
        });
    }
    filterMenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_4__.JobsFilterPopoverComponent,
                cssClass: 'my-custom-class',
                // translucent: true,
                showBackdrop: true,
                componentProps: {
                    filter: this.jobFilter
                }
            });
            yield popover.present();
        });
    }
    jobPage(job) {
        console.log('Going to specific Job Page:', job.title);
        console.log('The job: ', job);
        // state object after url has to be an object for navigate()
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyLogo, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
    }
    // Favorites
    /**
     * Scales the Heart Icon to appear to be pop out when the user favorites a job
     * @param e event value passed
     */
    favoriteAnimation(e) {
        console.clear();
        console.log(e);
        let headerToolbarFavoriteIconWrapper = document.getElementById('favorites-page-button');
        headerToolbarFavoriteIconWrapper.style.transition = '0.3s';
        headerToolbarFavoriteIconWrapper.style.transitionTimingFunction = 'ease-in';
        headerToolbarFavoriteIconWrapper.animate([
            { transform: 'scale(0.85)' },
            { transform: 'scale(1.15)' },
            { transform: 'scale(1)' },
        ], {
            duration: 1000,
        });
    }
    unFavoriteAnimation(e) {
        console.clear();
        console.log(e);
        // SVG Wrapper Scales
        let headerToolbarFavoriteIconWrapper = document.getElementById('favorites-page-button');
        headerToolbarFavoriteIconWrapper.style.transition = '0.3s';
        headerToolbarFavoriteIconWrapper.style.transitionTimingFunction = 'ease-in';
        headerToolbarFavoriteIconWrapper.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(0.8)' },
            { transform: 'scale(1)' },
        ], {
            duration: 1000,
        });
        // Heart turns gray when something is unfavorited
        let headerToolbarFavoriteIcon = document.getElementById('heart-path');
        headerToolbarFavoriteIcon.style.transitionTimingFunction = 'ease';
        headerToolbarFavoriteIcon.animate([
            { fill: 'url(#linearGradient-135)' },
        ], {
            duration: 1000,
        });
    }
    favoritesPage() {
        this.router.navigate(['/home/jobs/favorites']);
    }
    doRefresh(job) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.allJobs = [];
            // this.jobsSub = this.jobs.getJobs().subscribe( jobs => {
            //   this.allJobs = Object.values(jobs);
            //   this.allJobsLength = this.allJobs.length;
            //   this.allJobs.reverse();
            //   this.searching = false;
            //   // Format Times
            //   for (const job of this.allJobs) {
            //     job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
            //   }
            // });
            setTimeout(() => {
                job.target.complete();
                console.log('jobs Refreshed');
            }, 2000);
            yield this.searchbar.getInputElement().then((searchbarInputElement) => {
                searchbarInputElement.value = '';
                this.noSearchInput = false;
            });
            yield console.log('Refreshing jobs Page..');
        });
    }
    getJobs(filter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // this.jobsSub = this.jobs.getJobs().subscribe( jobs => {
            //   console.log('Getting Jobs from JOBS.PAGE.TS');
            //   if(filter === 'newest') {
            //     console.log('Newest');
            //     this.filtering = true;
            //     this.jobFilter = 'newest';
            //     this.allJobs = jobs;
            //     this.allJobsLength = this.allJobs.length;
            //     // Format Times
            //     for (const job of this.allJobs) {
            //       job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
            //   }}
            //     if(filter === 'htol')  {
            //       console.log('High to Low');
            //       this.filtering = true;
            //       this.jobFilter = 'htol';
            //       this.allJobs = jobs;
            //       this.allJobsLength = this.allJobs.length;
            //       function sortHighToLow(a, b){
            //         console.log('Sorting Price')
            //         return parseFloat(a.rateOfPay) - parseFloat(b.rateOfPay);
            //       }
            //       this.allJobs.sort(sortHighToLow);
            //       this.allJobs.reverse();
            //       // Format Times
            //       for (const job of this.allJobs) {
            //         job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
            //     }}
            //     if(filter ==='ltoh') {
            //       console.log('Low to High');
            //       this.filtering = true;
            //       this.jobFilter = 'ltoh';
            //       this.allJobs = jobs;
            //       this.allJobsLength = this.allJobs.length;
            //       function sortLowToHigh(a, b){
            //         console.log('Sorting Price')
            //         return parseFloat(b.rateOfPay) - parseFloat(a.rateOfPay);
            //       }
            //       this.allJobs.sort(sortLowToHigh);
            //       this.allJobs.reverse();
            //       // Format Times
            //       for (const job of this.allJobs) {
            //         job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
            //       }
            //     }
            //     if(filter === 'oldest') {
            //       console.log('Oldest');
            //       this.filtering = true;
            //       this.jobFilter = 'oldest';
            //       this.allJobs = jobs;
            //       this.allJobsLength = this.allJobs.length;
            //       this.jobFilter = 'Oldest'
            //       // Format Times
            //       for (const job of this.allJobs) {
            //         job.dateCreated = formatDistanceToNow( new Date(job.dateCreated), { addSuffix: false });
            //       }
            //     }
            //     return this.allJobs;
            // });
        });
    }
    ngOnDestroy() {
        console.log('Jobs Page Destroyed!');
    }
};
JobsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController },
    { type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__.FavoritesEventEmitterService },
    { type: src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_5__.FilterJobsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController }
];
JobsPage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSearchbar, { static: false },] }],
    ngOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.HostListener, args: ['unloaded',] }]
};
JobsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-jobs',
        template: _jobs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jobs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router) === "function" ? _a : Object, typeof (_b = typeof _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService !== "undefined" && _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController) === "function" ? _c : Object, typeof (_d = typeof src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__.FavoritesEventEmitterService !== "undefined" && src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__.FavoritesEventEmitterService) === "function" ? _d : Object, typeof (_e = typeof src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_5__.FilterJobsService !== "undefined" && src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_5__.FilterJobsService) === "function" ? _e : Object, typeof (_f = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController) === "function" ? _f : Object])
], JobsPage);



/***/ }),

/***/ 31731:
/*!******************************************************!*\
  !*** ./src/app/pages/jobs/jobs.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n.company-logo {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n  width: 100%;\n}\n#mobile-filter-toolbar {\n  --background: #e0e7ed;\n  z-index: 999;\n}\n.filter-toolbar-wrapper {\n  width: 100%;\n  border-bottom: 3px ​solid #0055a5;\n}\n.filter-toolbar-wrapper ion-toolbar {\n  --background: #e7a12b;\n  --border-width: 0px 0px 3px 0px;\n  --border-style: solid;\n  --border-color: #0055a5;\n  margin: 2em 0em;\n  transition: 0.5s;\n}\n.filter-message {\n  font-weight: 600;\n  font-size: 1em;\n  color: #0055a5;\n  opacity: 0;\n  transition: 0.5s;\n  animation: filter-selection-slide 1s ease-in-out 0.5s forwards;\n}\n@media only screen and (min-width: 992px) {\n  .filter-message {\n    color: #0055a5;\n    font-weight: 600;\n    font-size: 1.4em;\n    position: relative;\n    top: 2px;\n  }\n}\n@keyframes filter-selection-slide {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(10px);\n    opacity: 1;\n  }\n}\n.filter-icon {\n  color: #0055a5;\n  font-size: 1.4em;\n}\n.job-details {\n  --background: white;\n  --color: #0055a5;\n  --border-color: #0055a5;\n  --border-style: solid;\n  --border-width: 2px;\n  height: 24px;\n  --width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n  position: relative;\n  top: 10px;\n}\n.desktop-toolbar {\n  --background: linear-gradient(30deg, #004785, #0055a5);\n  box-shadow: 1px 1px 19px rgba(54, 54, 54, 0.2117647059);\n  border-radius: 100px;\n}\n.desktop-toolbar h1 {\n  color: white;\n}\n.desktop-toolbar ion-buttons:nth-child(1) {\n  position: relative;\n  left: 3em;\n}\n.desktop-toolbar ion-buttons:nth-child(2) {\n  position: relative;\n  right: 3em;\n}\n#fav-amount {\n  color: red;\n  font-size: 1.2em;\n  position: relative;\n  right: 4px;\n}\n#favorites-page-button {\n  position: relative;\n  right: 6px;\n}\n.favorites-button {\n  --color: white;\n  --background: none;\n  --background-hover: linear-gradient(#e3405f, #5f4045);\n  height: 24px;\n  width: 70px;\n  font-size: 0.6em;\n  font-weight: 600;\n  display: block;\n}\n.filter-button {\n  --color: #0055a5;\n  --background: none;\n  --background-hover: linear-gradient(#e3405f, #da3a57);\n  height: 24px;\n  --border-radius: 5px;\n  width: 70px;\n  font-size: 0.8em;\n  font-weight: 600;\n  display: block;\n}\n.job-section {\n  background: white;\n  border-radius: 10px;\n  height: auto;\n  color: #777;\n  width: 100%;\n  opacity: 0;\n  padding: 1em 0px;\n  margin-bottom: 50px;\n  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.05);\n  animation: job-section-slide 0.5s ease 0.5 forwards;\n}\n@keyframes job-section-slide {\n  0% {\n    transform: translateX(-20px);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\nh6, p {\n  display: block;\n}\n--ion-buttons {\n  --color: #888;\n}\n#job-summary {\n  font-size: 0.9em;\n  line-height: 1.4em;\n  color: #222;\n}\n@media only screen and (min-width: 993px) {\n  #job-summary {\n    font-size: 16px;\n    line-height: 21px;\n  }\n}\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -29px;\n}\n#job-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n  color: #0055a5;\n}\n#job-rate {\n  font-size: 0.95em;\n  font-weight: 900;\n  opacity: 0.7;\n  position: relative;\n  top: -53px;\n  color: #116e56;\n}\n@media only screen and (min-width: 992px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDQTtFQUNFLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0FBSUY7QUFGRTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUo7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4REFBQTtBQUlGO0FBRkE7RUFDRTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VBS0Y7QUFDRjtBQUhBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFLRjtFQUhBO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBS0Y7QUFDRjtBQUhBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBS0Y7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBTUY7QUFKQTtFQUNFLHNEQUFBO0VBQ0EsdURBQUE7RUFDQSxvQkFBQTtBQU9GO0FBTkU7RUFDRSxZQUFBO0FBUUo7QUFORTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQVFKO0FBTkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFRSjtBQUxBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBUUY7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQVNGO0FBTkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFTRjtBQVBBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVUY7QUFSQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbURBQUE7QUFXRjtBQVRBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFZRjtFQVZBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBWUY7QUFDRjtBQVJBO0VBQ0UsY0FBQTtBQVVGO0FBUEE7RUFDRSxhQUFBO0FBVUY7QUFQQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBVUY7QUFSQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBV0Y7QUFDRjtBQVRBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBV0Y7QUFSQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBV0Y7QUFSQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQVdGO0FBUkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFXRjtBQUNGO0FBUkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFVRjtBQUNGO0FBUEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVNGIiwiZmlsZSI6ImpvYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jc2VhcmNoYmFyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gfVxuXG4jbG9nb3tcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbn1cbi5jb21wYW55LWxvZ28ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jbW9iaWxlLWZpbHRlci10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTBlN2VkO1xuICB6LWluZGV4OiA5OTk7XG59XG4uZmlsdGVyLXRvb2xiYXItd3JhcHBlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDNweCDigItzb2xpZCAjMDA1NWE1O1xuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNlN2ExMmI7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggM3B4IDBweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwMDU1YTU7XG4gICAgbWFyZ2luOiAyZW0gMGVtO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbn1cbi5maWx0ZXItbWVzc2FnZXtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBhbmltYXRpb246IGZpbHRlci1zZWxlY3Rpb24tc2xpZGUgMXMgZWFzZS1pbi1vdXQgMC41cyBmb3J3YXJkcztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmZpbHRlci1tZXNzYWdlICB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDJweDtcbiAgfVxufVxuQGtleWZyYW1lcyBmaWx0ZXItc2VsZWN0aW9uLXNsaWRlIHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5maWx0ZXItaWNvbiB7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuLmpvYi1kZXRhaWxzIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogIzAwNTVhNTtcbiAgLS1ib3JkZXItY29sb3I6ICMwMDU1YTU7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLXdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsICMwMDQ3ODUsICMwMDU1YTUpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDE5cHggIzM2MzYzNjM2O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgaDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBpb24tYnV0dG9uczpudGgtY2hpbGQoMSl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDNlbTtcbiAgfVxuICBpb24tYnV0dG9uczpudGgtY2hpbGQoMil7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAzZW07XG4gIH1cbn1cbiNmYXYtYW1vdW50IHtcbiAgY29sb3I6IHJlZDsgXG4gIGZvbnQtc2l6ZTogMS4yZW07IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICByaWdodDogNHB4O1xufVxuI2Zhdm9yaXRlcy1wYWdlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDZweDtcbn1cblxuLmZhdm9yaXRlcy1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZTM0MDVmLCAjNWY0MDQ1KTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogNzBweDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZmlsdGVyLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICMwMDU1YTU7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2UzNDA1ZiwgI2RhM2E1Nyk7XG4gIGhlaWdodDogMjRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5qb2Itc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjNzc3O1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogMWVtIDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA1cHggcmdiKDAgMCAwIC8gNSUpO1xuICBhbmltYXRpb246IGpvYi1zZWN0aW9uLXNsaWRlIDAuNXMgZWFzZSAwLjUgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGpvYi1zZWN0aW9uLXNsaWRlIHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICAwJXtcbiAgfVxufVxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbiNqb2Itc3VtbWFyeSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgY29sb3I6ICMyMjI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XG4gICNqb2Itc3VtbWFyeSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICB9XG59XG4jY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3BhY2l0eTogMC44O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI5cHhcbn1cblxuI2pvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbiAgY29sb3I6ICMwMDU1YTU7XG59XG5cbiNqb2ItcmF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTNweDtcbiAgY29sb3I6ICMxMTZlNTY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI2pvYi10aXRsZSAge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuI2pvYi1wb3N0ZWQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQzcHhcbn1cbiJdfQ== */";

/***/ }),

/***/ 96932:
/*!******************************************************!*\
  !*** ./src/app/pages/jobs/jobs.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-shadow class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon style=\"position: relative; left: 8px; color: #0055a5;\"name=\"briefcase-outline\"></ion-icon>\n      <ion-title>Jobs |</ion-title>\n    </ion-buttons>\n    <ion-searchbar></ion-searchbar>\n       <ion-buttons slot=\"end\">\n        <ion-button (click)=\"favoritesPage()\">             \n          <!-- Favorites Icon -->\n          <svg id=\"favorites-page-button\" width=\"35px\" viewBox=\"0 0 400 400\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <title>jobs-favorites-heart-red</title>\n            <defs>\n                <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-134\">\n                    <stop stop-color=\"#E80404\" offset=\"0%\"></stop>\n                    <stop stop-color=\"#980000\" offset=\"100%\"></stop>\n                </linearGradient>\n                <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-135\">\n                    <stop stop-color=\"#777\" offset=\"0%\"></stop>\n                    <stop stop-color=\"#999\" offset=\"100%\"></stop>\n                </linearGradient>\n            </defs>\n            <g id=\"jobs-favorites-heart-red\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <path d=\"M343.54238,63.6069503 C305.547015,30.6673745 249.039314,36.5922661 214.164009,73.1996318 L200.505092,87.5181196 L186.846154,73.1996318 C152.040204,36.5922661 95.4631671,30.6673745 57.4678045,63.6069503 C13.9256735,101.413401 11.6376316,169.267517 50.6036789,210.248017 L184.766137,351.175794 C193.432963,360.274735 207.507886,360.274735 216.174713,351.175794 L350.337169,210.248017 C389.372552,169.267517 387.08451,101.413401 343.54238,63.6069503 Z\" \n                      id=\"heart-path\" \n                      fill=\"url(#linearGradient-134)\" \n                      fill-rule=\"nonzero\"></path>\n            </g>\n          </svg>\n          <p id=\"fav-amount\">{{favoriteJobs.length}}</p>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <div *ngIf=\"this.data\">\n      <!-- Desktop Header -->\n      <ion-row style=\"padding-top: 40px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n        <ion-col style=\"padding: 0 2em;\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"7\" size-xl=\"6\">\n          <ion-toolbar class=\"desktop-toolbar\">\n            <ion-buttons slot=\"start\">\n              <ion-icon style=\"font-size: 2em; margin-right: 8px;\" name=\"briefcase-outline\"></ion-icon>\n              <h1 style=\"margin-top: 12px;\">Jobs |</h1>\n              <p *ngIf=\"this.jobFilter === 'htol'\" class=\"filter-message\">Pay - High to Low</p>\n              <p *ngIf=\"this.jobFilter === 'ltoh'\" class=\"filter-message\">Pay - Low to High</p>\n              <p *ngIf=\"this.jobFilter === 'newest'\" class=\"filter-message\">Newest</p>\n              <p *ngIf=\"this.jobFilter === 'oldest'\" class=\"filter-message\">{{this.jobFilter}}</p>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n              <ion-icon class=\"filter-icon\" slot=\"start\" name=\"filter\" \n              style=\"position: relative; left: 12px;\">\n              </ion-icon>\n              <ion-button class=\"filter-button\" (click)=\"filterMenu()\">\n                Filter\n              </ion-button>\n              <ion-button class=\"favorites-button\" (click)=\"favoritesPage()\">\n                <ion-icon slot=\"start\" style=\"font-size: 3em;\" src=\"../../assets/icon/jobs-favorites-heart-red.svg\"></ion-icon>\n                <p style=\"color: white; font-size: 2em; position: relative; right: 4px;\">3</p>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n\n      <!-- Filter Toolbar (Mobile) -->\n      <!-- <ion-row class=\"filter-toolbar-wrapper ion-hide-lg-up ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"5\">\n          <ion-toolbar (click)=\"filterMenu()\" class=\"filter-toolbar\">\n            <ion-buttons slot=\"start\">\n              <p class=\"filter-message\">{{this.jobFilter}}</p>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n                <ion-button>\n                  <ion-icon class=\"filter-icon\" slot=\"start\" name=\"filter\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row> -->\n      \n      <!-- Mobile Filter Toolbar -->\n      <ion-toolbar style=\"position: fixed;\" class=\"mobile-filter-toolbar ion-hide-lg-up\">\n        <ion-buttons slot=\"start\">\n          <p class=\"filter-message\">\n            Filter: Newest</p>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"onClick()\">\n            <!-- Filter -->\n            <ion-icon class=\"filter-icon\" name=\"filter-outline\"></ion-icon> \n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      \n      <!-- Jobs -->\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"5\">\n          <div style=\"margin-top: 4em;\"></div>\n\n          <!-- Jobs Sections -->\n          <ion-row class=\"job-section ion-justify-content-center\" *ngFor=\"let job of allJobs\">\n            <ion-col push=\"0.3\" size=\"1\">\n                  <img class=\"company-logo\" src=\"{{job.companyLogo}}\">\n            </ion-col>\n            <ion-col push=\"0.3\" style=\"height: 80px;\">\n                  <h5 id=\"job-title\">{{job.title}}</h5>\n                  <p id=\"company-name\">{{job.companyName}}</p>\n                  <h5 id=\"job-posted-date\">Posted: {{job.dateCreated}}</h5>\n                  <h5 id=\"job-rate\">${{job.rateOfPay}}/hr</h5>\n            </ion-col>\n            <ion-col size=\"11\">\n                  <p id=\"job-summary\">{{job.summary}}</p>\n            </ion-col>\n            <ion-col pull=\"0\" size=\"11\" class=\"ion-align-items-center\">\n                    <!-- Heart Icon Component holds the state for Favorites -->\n                    <app-heart-icon \n                      [job]=\"job._id\" \n                      [favoriteJobs]=\"favoriteJobs\"\n                      (favoritedAnimation)=\"favoriteAnimation($event)\"\n                      (unFavoritedAnimation)=\"unFavoriteAnimation($event)\"\n                       >\n                    </app-heart-icon>\n                    <ion-button class=\"job-details ion-float-right\" (click)=\"jobPage(job)\">\n                      Details\n                    </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n    <!-- Skeleton Data -->\n    <div *ngIf=\"!this.data\">\n      <ion-list>\n        <ion-item lines=\"none\">\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_jobs_jobs_module_ts.js.map