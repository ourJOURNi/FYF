"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_jobs_job-page_job-page_module_ts"],{

/***/ 68303:
/*!****************************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPagePageRoutingModule": () => (/* binding */ JobPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _job_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-page.page */ 21196);




const routes = [
    {
        path: '',
        component: _job_page_page__WEBPACK_IMPORTED_MODULE_0__.JobPagePage
    },
    {
        path: 'apply/:title/:companyName/:companyEmail/:companyLogo/:rateOfPay',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_upload-resume-modal_upload-resume-modal_module_ts"), __webpack_require__.e("src_app_pages_jobs_apply_apply_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../apply/apply.module */ 29382)).then(m => m.ApplyPageModule)
    },
];
let JobPagePageRoutingModule = class JobPagePageRoutingModule {
};
JobPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JobPagePageRoutingModule);



/***/ }),

/***/ 82562:
/*!********************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPagePageModule": () => (/* binding */ JobPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/custom-component.module */ 64941);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _job_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-page-routing.module */ 68303);
/* harmony import */ var _job_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-page.page */ 21196);








let JobPagePageModule = class JobPagePageModule {
};
JobPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__.CustomComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _job_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobPagePageRoutingModule
        ],
        declarations: [_job_page_page__WEBPACK_IMPORTED_MODULE_2__.JobPagePage]
    })
], JobPagePageModule);



/***/ }),

/***/ 21196:
/*!******************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPagePage": () => (/* binding */ JobPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _job_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-page.page.html?ngResource */ 24790);
/* harmony import */ var _job_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-page.page.scss?ngResource */ 96539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var src_app_services_favorite_jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/favorite-jobs.service */ 66032);
/* harmony import */ var src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/jobs.service */ 11912);
/* harmony import */ var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/emitters/favorites-event-emitter.service */ 81615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
var _a, _b, _c, _d, _e, _f, _g, _h;











let JobPagePage = class JobPagePage {
    constructor(activatedRoute, router, toastController, profile, favorites, jobs, eventEmitterService, location) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
        this.profile = profile;
        this.favorites = favorites;
        this.jobs = jobs;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
    }
    ngOnDestroy() {
        this.profileSub.unsubscribe();
        this.favoriteJobsSub.unsubscribe();
        this.favoritesSub.unsubscribe();
        this.jobsSub.unsubscribe();
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.triggerJobPageRefresh();
        });
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        // tslint:disable-next-line: radix
        const companyLogo = this.activatedRoute.snapshot.paramMap.get('companyLogo');
        // tslint:disable-next-line: radix
        const companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
        // tslint:disable-next-line: radix
        const companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
        // tslint:disable-next-line: radix
        const summary = this.activatedRoute.snapshot.paramMap.get('summary');
        // tslint:disable-next-line: radix
        const fullJobDescription = this.activatedRoute.snapshot.paramMap.get('fullJobDescription');
        // tslint:disable-next-line: radix
        const rateOfPay = this.activatedRoute.snapshot.paramMap.get('rateOfPay');
        this.jobId = id;
        this.jobTitle = title;
        this.jobLogo = companyLogo;
        // this.jobPosted = posted;
        this.jobCompanyName = companyName;
        this.jobCompanyEmail = companyEmail;
        this.jobSummary = summary;
        this.jobFullJobDescription = fullJobDescription;
        this.jobRateOfPay = rateOfPay;
        // this.getFavoriteJobs();
    }
    // getFavoriteJobs() {
    //   // getting all the favorite jobs that the user has on their profile
    //   this.profileSub = this.profile.getUserDetails().subscribe(
    //     data => {
    //       let favoriteJobs = data['favoriteJobs']
    //       this.favorites.favoriteJobs$.next(favoriteJobs);
    //       this.favoriteJobsSub = this.favorites.favoriteJobs$.subscribe(
    //         favs => {
    //           console.log(`Favorite Jobs in Service: ${favs}`);
    //           // this.jobsSub = this.jobs.getJobs().subscribe( jobs => {
    //           //   for (const job of Object.values(jobs)) {
    //           //     if (this.jobId == job._id) {
    //           //       this.jobObj = job;
    //           //     }
    //           //   }
    //           // });
    //           this.favoritesSub = this.favorites.getFavorites(data['email']).subscribe( favDetails => {
    //             this.favoriteJobsObj = favDetails;
    //           });
    //         }
    //       );
    //     }
    //   );
    // }
    applyForJob() {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page/:id/:title/:companyLogo/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail, this.jobLogo, this.jobRateOfPay]);
    }
    favoriteThisJob() {
        console.log('Favoriting this Job');
        // Check for error before we present the toast
        this.presentToast();
    }
    goBack() {
        this.triggerJobPageRefresh();
        this.router.navigate(['/home/jobs']);
    }
    triggerJobPageRefresh() {
        this.eventEmitterService.onBackAction();
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'This job has been favorited.',
                duration: 2000
            });
            toast.present();
        });
    }
};
JobPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: src_app_services_favorite_jobs_service__WEBPACK_IMPORTED_MODULE_3__.FavoriteJobsService },
    { type: src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_4__.JobsService },
    { type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__.FavoritesEventEmitterService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.PlatformLocation }
];
JobPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-job-page',
        template: _job_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_job_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController) === "function" ? _c : Object, typeof (_d = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService) === "function" ? _d : Object, typeof (_e = typeof src_app_services_favorite_jobs_service__WEBPACK_IMPORTED_MODULE_3__.FavoriteJobsService !== "undefined" && src_app_services_favorite_jobs_service__WEBPACK_IMPORTED_MODULE_3__.FavoriteJobsService) === "function" ? _e : Object, typeof (_f = typeof src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_4__.JobsService !== "undefined" && src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_4__.JobsService) === "function" ? _f : Object, typeof (_g = typeof src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__.FavoritesEventEmitterService !== "undefined" && src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__.FavoritesEventEmitterService) === "function" ? _g : Object, typeof (_h = typeof _angular_common__WEBPACK_IMPORTED_MODULE_9__.PlatformLocation !== "undefined" && _angular_common__WEBPACK_IMPORTED_MODULE_9__.PlatformLocation) === "function" ? _h : Object])
], JobPagePage);



/***/ }),

/***/ 66032:
/*!***************************************************!*\
  !*** ./src/app/services/favorite-jobs.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteJobsService": () => (/* binding */ FavoriteJobsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 37556);
var _a, _b, _c;







let FavoriteJobsService = class FavoriteJobsService {
    constructor(http, auth, toast) {
        this.http = http;
        this.auth = auth;
        this.toast = toast;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.favoriteJobs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
};
FavoriteJobsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
FavoriteJobsService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService !== "undefined" && _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController) === "function" ? _c : Object])
], FavoriteJobsService);



/***/ }),

/***/ 96539:
/*!*******************************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #0055a5;\n}\n\nion-content {\n  background: white;\n}\n\n#job-header-wrapper {\n  margin-top: 1em;\n}\n\n@media only screen and (min-width: 992px) {\n  #job-header-wrapper {\n    margin-top: 4em;\n  }\n}\n\n#mobile-toolbar-icon {\n  height: 32px;\n  position: relative;\n}\n\nion-back-button {\n  color: white;\n  width: auto;\n}\n\napp-heart-icon {\n  position: relative;\n  right: 25px;\n}\n\n.toolbar-apply-button {\n  width: 90px;\n  font-weight: 600;\n  --background: #faa71b;\n  position: relative;\n  right: 8px;\n}\n\n.toolbar-company-info {\n  display: inline-block;\n  margin-left: 1em;\n  --background: none;\n}\n\n.toolbar-company-info h2, .toolbar-company-info h3, .toolbar-company-info p {\n  margin: 0;\n}\n\n.toolbar-company-info h2 {\n  color: #0055a5;\n  font-weight: 600;\n}\n\n.toolbar-company-info h3 {\n  font-size: 1em;\n  color: #666;\n}\n\n.toolbar-company-info p {\n  color: white;\n  margin-top: 0.7em;\n  text-align: center;\n  background: #4dc066;\n  width: 50px;\n  padding: 4px;\n  font-size: 0.7em;\n  font-weight: 600;\n  border-radius: 5px;\n}\n\n.company-logo {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  opacity: 0;\n  animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  font-weight: 700;\n}\n\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 54px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n#job-summary {\n  font-size: 1.1em;\n  line-height: 29px;\n  position: relative;\n  color: #666;\n  opacity: 0.7;\n}\n\n#company-name {\n  margin-top: 22px;\n  margin-left: 8px;\n  color: #222;\n}\n\n#job-title {\n  font-size: 2em;\n  font-weight: 900;\n  color: #005191;\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n\n#job-full-description {\n  font-size: 1.2em;\n  font-weight: 600;\n  line-height: 1.4em;\n  color: #222;\n  border-top: 1px solid rgba(34, 34, 34, 0.1294117647);\n  padding: 1em;\n  margin-top: 2em;\n}\n\n@keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0U7SUFDRSxlQUFBO0VBSUY7QUFDRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFPRjs7QUFMQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVFGOztBQU5FO0VBQ0UsU0FBQTtBQVFKOztBQU5FO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQVFKOztBQU5FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTEE7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxtRkFBQTtBQVFGOztBQU5BO0VBQ0UsZ0JBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVUY7O0FBUkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVdGOztBQVJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFXRjs7QUFUQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFZRjs7QUFWQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBYUY7O0FBWEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWNGOztBQVpBO0VBQ0U7SUFDRSw0QkFBQTtFQWVGO0VBYkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFlRjtBQUNGIiwiZmlsZSI6ImpvYi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xufVxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiNqb2ItaGVhZGVyLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxZW1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI2pvYi1oZWFkZXItd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNGVtO1xuICB9XG59XG4jbW9iaWxlLXRvb2xiYXItaWNvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogYXV0bztcbn1cbmFwcC1oZWFydC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMjVweDtcbn1cbi50b29sYmFyLWFwcGx5LWJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDhweDtcbn1cbi50b29sYmFyLWNvbXBhbnktaW5mb3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG5cbiAgaDIsIGgzLCBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgaDIge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjNjY2XG4gIH1cbiAgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDAuN2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjNGRjMDY2O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG4uY29tcGFueS1sb2dvIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogbG9nby1zbGlkZS1pbiAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDA1NWE1LCAjMGQyZTRkKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDU0cHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI2pvYi1zdW1tYXJ5IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM2NjY7XG4gIG9wYWNpdHk6IDAuNztcbiAgLy8gdG9wOiAtNjBweDtcbn1cbiNjb21wYW55LW5hbWUge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogIzIyMjtcbn1cbiNqb2ItdGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG4jam9iLXBvc3RlZC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNDNweFxufVxuI2pvYi1mdWxsLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBjb2xvcjogIzIyMjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjIyMjIyMTtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5Aa2V5ZnJhbWVzIGxvZ28tc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */";

/***/ }),

/***/ 24790:
/*!*******************************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"triggerJobPageRefresh()\"></ion-back-button>\n      <img id=\"mobile-toolbar-icon\" src=\"../../../../assets/logos/White-FYF-LOGO.svg\" alt=\"White FYF Logo\">\n    </ion-buttons>\n    <ion-buttons slot=\"end\"> \n      <app-heart-icon  class=\"ion-float-right\" id=\"heart-icon\" [job]=\"jobObj\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\">\n      </app-heart-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row id=\"job-header-wrapper\" class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"5\">\n        <div class=\"spacer\"></div>\n        <ion-toolbar class=\"toolbar-company-info\">\n          <ion-buttons slot=\"start\">\n            <img style=\"border-radius: 50px;\" height=\"75\" src=\"{{this.jobLogo}}\">\n            <div class=\"toolbar-company-info\">\n              <h2>{{jobCompanyName}}</h2>\n              <h3>{{jobTitle}}</h3>\n              <p>${{jobRateOfPay}} / hr</p>\n            </div>\n          </ion-buttons>\n          <ion-buttons class=\"ion-hide-lg-down\" slot=\"end\">\n            <app-heart-icon  class=\"ion-float-right\" id=\"heart-icon\" [job]=\"jobObj\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n            <ion-button class=\"back-button\" (click)=\"goBack()\">\n              Back\n            </ion-button>\n          </ion-buttons>\n    </ion-toolbar>\n        <div class=\"spacer\"></div>\n        <div class=\"spacer\"></div>\n        <p id=\"job-full-description\">{{jobFullJobDescription}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\"  class=\"ion-text-center\">\n        <ion-button (click)=\"applyForJob()\" class=\"blue-button\" style=\"width: 150px;\">Apply</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_jobs_job-page_job-page_module_ts.js.map