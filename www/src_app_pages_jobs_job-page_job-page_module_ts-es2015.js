(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_jobs_job-page_job-page_module_ts"],{

/***/ 68303:
/*!****************************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPagePageRoutingModule": function() { return /* binding */ JobPagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPagePageModule": function() { return /* binding */ JobPagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/custom-component.module */ 64941);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPagePage": function() { return /* binding */ JobPagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_job_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./job-page.page.html */ 7312);
/* harmony import */ var _job_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-page.page.scss */ 53174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/favorites.service */ 85097);
/* harmony import */ var src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/jobs.service */ 11912);
/* harmony import */ var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/emitters/favorites-event-emitter.service */ 81615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);











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
        this.getFavoriteJobs();
    }
    getFavoriteJobs() {
        // getting all the favorite jobs that the user has on their profile
        this.profileSub = this.profile.getUserDetails().subscribe(data => {
            let favoriteJobs = data['favoriteJobs'];
            this.favorites.favoriteJobs$.next(favoriteJobs);
            this.favoriteJobsSub = this.favorites.favoriteJobs$.subscribe(favs => {
                console.log(`Favorite Jobs in Service: ${favs}`);
                this.jobsSub = this.jobs.getJobs().subscribe(jobs => {
                    for (const job of Object.values(jobs)) {
                        if (this.jobId == job._id) {
                            this.jobObj = job;
                        }
                    }
                });
                this.favoritesSub = this.favorites.getFavorites(data['email']).subscribe(favDetails => {
                    this.favoriteJobsObj = favDetails;
                });
            });
        });
    }
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
    { type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__.FavoritesService },
    { type: src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_4__.JobsService },
    { type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__.FavoritesEventEmitterService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.PlatformLocation }
];
JobPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-job-page',
        template: _raw_loader_job_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_job_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService,
        src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__.FavoritesService,
        src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_4__.JobsService,
        src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__.FavoritesEventEmitterService,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.PlatformLocation])
], JobPagePage);



/***/ }),

/***/ 53174:
/*!********************************************************!*\
  !*** ./src/app/pages/jobs/job-page/job-page.page.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.toolbar-apply-button {\n  width: 90px;\n  font-weight: 600;\n  --background: #faa71b;\n  position: relative;\n  right: 8px;\n}\n\n.toolbar-company-info {\n  display: inline-block;\n  margin-left: 8px;\n  --background: none;\n}\n\n.toolbar-company-info h2, .toolbar-company-info h3, .toolbar-company-info p {\n  margin: 0;\n}\n\n.toolbar-company-info h2 {\n  color: #222;\n}\n\n.toolbar-company-info h3 {\n  font-size: 1em;\n  color: #666;\n}\n\n.toolbar-company-info p {\n  color: white;\n  background: #4dc066;\n  width: 71px;\n  padding: 4px;\n  font-size: 1em;\n  font-weight: 600;\n  border-radius: 5px;\n}\n\n.company-logo {\n  border-radius: 50px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  opacity: 0;\n  -webkit-animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: logo-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\nspan {\n  font-weight: 700;\n}\n\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n#job-summary {\n  font-size: 1.1em;\n  line-height: 29px;\n  position: relative;\n  color: #666;\n  opacity: 0.7;\n}\n\n#company-name {\n  margin-top: 22px;\n  margin-left: 8px;\n  color: #222;\n}\n\n#job-title {\n  font-size: 2em;\n  font-weight: 900;\n  color: #005191;\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n\n#job-full-description {\n  font-size: 1em;\n  line-height: 1.4em;\n  color: #333;\n  margin: 50px 0;\n  border-top: 1px solid #99999975;\n  padding-top: 16px;\n}\n\n@-webkit-keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes logo-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFERTtFQUNFLFNBQUE7QUFHSjs7QUFERTtFQUNFLFdBQUE7QUFHSjs7QUFERTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSwyRkFBQTtVQUFBLG1GQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFRRjs7QUFOQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQVNGOztBQVBBO0VBQ0U7SUFDRSw0QkFBQTtFQVVGO0VBUkE7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFVRjtBQUNGOztBQWpCQTtFQUNFO0lBQ0UsNEJBQUE7RUFVRjtFQVJBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBVUY7QUFDRiIsImZpbGUiOiJqb2ItcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG4udG9vbGJhci1hcHBseS1idXR0b24ge1xuICB3aWR0aDogOTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA4cHg7XG59XG4udG9vbGJhci1jb21wYW55LWluZm97XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuXG4gIGgyLCBoMywgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGgyIHtcbiAgICBjb2xvcjogIzIyMjtcbiAgfVxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICM2NjZcbiAgfVxuICBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogIzRkYzA2NjtcbiAgICB3aWR0aDogNzFweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cbi5jb21wYW55LWxvZ28ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBsb2dvLXNsaWRlLWluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwMDU1YTUsICMwZDJlNGQpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI2pvYi1zdW1tYXJ5IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM2NjY7XG4gIG9wYWNpdHk6IDAuNztcbiAgLy8gdG9wOiAtNjBweDtcbn1cbiNjb21wYW55LW5hbWUge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogIzIyMjtcbn1cbiNqb2ItdGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG4jam9iLXBvc3RlZC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNDNweFxufVxuI2pvYi1mdWxsLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogNTBweCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5OTk5OTc1O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbkBrZXlmcmFtZXMgbG9nby1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ 7312:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jobs/job-page/job-page.page.html ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"triggerJobPageRefresh()\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button style=\"--width: 50px;\" class=\"toolbar-apply-button\" (click)=\"applyForJob()\">\n        Apply\n      </ion-button>\n    </ion-buttons>\n  <ion-title>Job Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <div class=\"spacer\"></div>\n        <ion-toolbar class=\"toolbar-company-info\">\n          <ion-buttons slot=\"start\">\n            <img style=\"border-radius: 50px;\" height=\"75\" src=\"{{this.jobLogo}}\">\n            <div class=\"toolbar-company-info\">\n              <h2>{{jobCompanyName}}</h2>\n              <h3>{{jobTitle}}</h3>\n              <p>${{jobRateOfPay}} / hr</p>\n            </div>\n          </ion-buttons>\n          <ion-buttons class=\"ion-hide-lg-down\" slot=\"end\">\n            <app-heart-icon  class=\"ion-float-right\" id=\"heart-icon\" [job]=\"jobObj\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n            <ion-button class=\"back-button\" (click)=\"goBack()\">\n              Back\n            </ion-button>\n          </ion-buttons>\n    </ion-toolbar>\n        <div class=\"spacer\"></div>\n        \n        <div class=\"spacer\"></div>\n        <p style=\"margin: 0;\" id=\"job-full-description\">{{jobFullJobDescription}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"6\"  class=\"ion-text-center\">\n        <ion-button (click)=\"applyForJob()\" class=\"orange-button\" style=\"width: 150px; margin: 120px auto;\">Apply</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_jobs_job-page_job-page_module_ts-es2015.js.map