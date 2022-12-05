"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_jobs_favorites_favorites_module_ts"],{

/***/ 92864:
/*!******************************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageRoutingModule": () => (/* binding */ FavoritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page */ 90740);




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPage
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ 23420:
/*!**********************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageModule": () => (/* binding */ FavoritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-routing.module */ 92864);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/custom-component.module */ 64941);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites.page */ 90740);








let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesPageRoutingModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_1__.CustomComponentsModule
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_2__.FavoritesPage]
    })
], FavoritesPageModule);



/***/ }),

/***/ 90740:
/*!********************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPage": () => (/* binding */ FavoritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _favorites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page.html?ngResource */ 32527);
/* harmony import */ var _favorites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page.scss?ngResource */ 95095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/emitters/favorites-event-emitter.service */ 81615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/jobs.service */ 11912);
var _a, _b, _c, _d;








let FavoritesPage = class FavoritesPage {
    constructor(router, jobs, eventEmitterService, location) {
        this.router = router;
        this.jobs = jobs;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
        this.skeletonData = true;
        this.allFavoriteJobs = this.jobs.favoriteJobs;
    }
    ngOnDestroy() {
        // this.favoriteSubs.unsubscribe();
        // this.jobs.favoriteJobs$.unsubscribe();
    }
    ngOnInit() {
        this.jobs.favoriteJobs$.subscribe(favs => {
            console.log(favs);
            this.favoritesLength = favs;
            this.jobs.getFavorites(this.jobs.activeEmail).subscribe(favs => {
                this.allFavoriteJobs = favs;
                return this.skeletonData = false;
            });
        });
    }
    back() {
        this.eventEmitterService.onBackAction();
        this.router.navigate(['/home/jobs']);
    }
    jobPage(job) {
        console.log(job);
        console.log('Going to specific Job Page');
        // state object after url has to be an object for navigate()
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page', job._id, job.title, job.companyName, job.companyEmail, job.summary, job.fullJobDescription, job.rateOfPay]);
        console.log(job.name);
    }
    favoriteJobPage() {
        console.log('Going to favorite bad');
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_3__.JobsService },
    { type: src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesEventEmitterService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.PlatformLocation }
];
FavoritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-favorites',
        template: _favorites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_favorites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router) === "function" ? _a : Object, typeof (_b = typeof src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_3__.JobsService !== "undefined" && src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_3__.JobsService) === "function" ? _b : Object, typeof (_c = typeof src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesEventEmitterService !== "undefined" && src_app_emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesEventEmitterService) === "function" ? _c : Object, typeof (_d = typeof _angular_common__WEBPACK_IMPORTED_MODULE_5__.PlatformLocation !== "undefined" && _angular_common__WEBPACK_IMPORTED_MODULE_5__.PlatformLocation) === "function" ? _d : Object])
], FavoritesPage);



/***/ }),

/***/ 95095:
/*!*********************************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  padding-bottom: 40px;\n}\n\nion-row {\n  margin-top: 0.5em;\n}\n\n#no-favorites {\n  text-align: center;\n  background: none;\n  color: #0055a5;\n  width: 200px;\n  font-size: 1em;\n  font-weight: 600;\n  margin: 4em auto;\n  padding: 0.5em;\n  border: 2px solid #0055a5;\n  border-radius: 8px;\n}\n\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n\n#logo {\n  width: 100px;\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n\n.company-logo {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n}\n\n.filter-message {\n  color: #888;\n  opacity: 0;\n  animation: filter-message-slide 0.5s ease 1s forwards;\n  float: right;\n}\n\n.filter-message span {\n  font-weight: 600;\n}\n\n@keyframes filter-message-slide {\n  0% {\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n.job-details {\n  --background: white;\n  --color: #0055a5;\n  --border-color: #0055a5;\n  --border-style: solid;\n  --border-width: 2px;\n  height: 24px;\n  --width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n  position: relative;\n  top: 10px;\n}\n\n.desktop-toolbar {\n  --background: linear-gradient(30deg, #004785, #0055a5);\n  box-shadow: 1px 1px 19px rgba(54, 54, 54, 0.2117647059);\n  border-radius: 100px;\n  margin-top: 2em;\n}\n\n.desktop-toolbar h1 {\n  color: white;\n  position: relative;\n  left: 10px;\n  top: -5px;\n  font-size: 1.5em;\n}\n\n.desktop-toolbar ion-buttons:nth-child(1) {\n  position: relative;\n  left: 3em;\n}\n\n.desktop-toolbar ion-buttons:nth-child(2) {\n  position: relative;\n  right: 3em;\n}\n\n.back-button {\n  --color: white;\n  --background: #faa71b;\n  --background-hover: linear-gradient(#faa71b, #faa81bc7);\n  height: 24px;\n  border-radius: 5px;\n  width: 60px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.job-section {\n  background: white;\n  border-radius: 10px;\n  height: auto;\n  color: #777;\n  width: 100%;\n  opacity: 0;\n  padding: 1em 0;\n  margin-bottom: 50px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  animation: job-section-slide 0.5s ease 0.5 forwards;\n}\n\n@keyframes job-section-slide {\n  0% {\n    transform: translateX(-20px);\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\nh6, p {\n  display: block;\n}\n\n--ion-buttons {\n  --color: #888;\n}\n\n#job-summary {\n  font-size: 0.9em;\n  line-height: 1.6em;\n  color: #222;\n}\n\n@media only screen and (min-width: 993px) {\n  #job-summary {\n    font-size: 16px;\n    line-height: 21px;\n  }\n}\n\n#company-name {\n  font-size: 0.9em;\n  opacity: 0.8;\n  position: relative;\n  top: -29px;\n}\n\n#job-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  position: relative;\n  top: -15px;\n  color: #111;\n}\n\n#job-rate {\n  font-size: 0.95em;\n  font-weight: 900;\n  opacity: 0.7;\n  position: relative;\n  top: -53px;\n  color: #116e56;\n}\n\n@media only screen and (min-width: 992px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n\n@media only screen and (min-width: 576px) {\n  #job-title {\n    font-size: 1.3em;\n    font-weight: 500;\n  }\n}\n\n#job-posted-date {\n  font-size: 10px;\n  opacity: 0.7;\n  position: relative;\n  top: -43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkU7RUFDRSxnQkFBQTtBQUlKOztBQURBO0VBQ0U7SUFDRSwyQkFBQTtFQUlGO0VBRkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFJRjtBQUNGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFJRjs7QUFGQTtFQUNFLHNEQUFBO0VBQ0EsdURBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFKRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBTUo7O0FBSEE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1EQUFBO0FBT0Y7O0FBTEE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQVFGO0VBTkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFRRjtBQUNGOztBQUpBO0VBQ0UsY0FBQTtBQU1GOztBQUhBO0VBQ0UsYUFBQTtBQU1GOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFKQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBT0Y7QUFDRjs7QUFMQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU9GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFPRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQU9GOztBQUpBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBT0Y7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQU1GO0FBQ0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUtGIiwiZmlsZSI6ImZhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuaW9uLXJvdyB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuI25vLWZhdm9yaXRlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogNGVtIGF1dG87XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA1NWE1O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzZWFyY2hiYXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiB9XG5cbiNsb2dve1xuICB3aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uY29tcGFueS1sb2dvIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uZmlsdGVyLW1lc3NhZ2V7XG4gIGNvbG9yOiAjODg4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZpbHRlci1tZXNzYWdlLXNsaWRlIDAuNXMgZWFzZSAxcyBmb3J3YXJkcztcbiAgZmxvYXQ6IHJpZ2h0O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmlsdGVyLW1lc3NhZ2Utc2xpZGUge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG4uam9iLWRldGFpbHMge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTVhNTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIC0td2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG4uZGVza3RvcC10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgIzAwNDc4NSwgIzAwNTVhNSk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTlweCAjMzYzNjM2MzY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIGgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdG9wOiAtNXB4O1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbiAgaW9uLWJ1dHRvbnM6bnRoLWNoaWxkKDEpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAzZW07XG4gIH1cbiAgaW9uLWJ1dHRvbnM6bnRoLWNoaWxkKDIpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogM2VtO1xuICB9XG59XG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZmFhNzFiLCAjZmFhODFiYzcpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmpvYi1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICM3Nzc7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMjZweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBhbmltYXRpb246IGpvYi1zZWN0aW9uLXNsaWRlIDAuNXMgZWFzZSAwLjUgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGpvYi1zZWN0aW9uLXNsaWRlIHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICAwJXtcbiAgfVxufVxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLS1pb24tYnV0dG9ucyB7XG4gIC0tY29sb3I6ICM4ODg7XG59XG5cbiNqb2Itc3VtbWFyeSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgY29sb3I6ICMyMjI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XG4gICNqb2Itc3VtbWFyeSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICB9XG59XG4jY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3BhY2l0eTogMC44O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI5cHhcbn1cblxuI2pvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTVweDtcbiAgY29sb3I6ICMxMTE7XG59XG5cbiNqb2ItcmF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTNweDtcbiAgY29sb3I6ICMxMTZlNTY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI2pvYi10aXRsZSAge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICNqb2ItdGl0bGUgIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuI2pvYi1wb3N0ZWQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQzcHhcbn1cbiJdfQ== */";

/***/ }),

/***/ 32527:
/*!*********************************************************************!*\
  !*** ./src/app/pages/jobs/favorites/favorites.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <img height=\"30\" src=\"../../../../assets/icon/jobs-favorites-heart-red.svg\" alt=\"Favorite Jobs Icon\">\n    </ion-buttons>\n    <ion-title>Favorites ({{allFavoriteJobs.length}})</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"this.skeletonData\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"11\" size-md=\"10\" size-lg=\"6\" size-xl=\"5\">\n        <div *ngIf=\"this.skeletonData\" class=\"ion-padding custom-skeleton\">\n          <ion-skeleton-text animated style=\"width: 100px; line-height: 100px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%; line-height: 15px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%; line-height: 15px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%; line-height: 15px;\"></ion-skeleton-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"!this.skeletonData\">\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"5\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"36\" src=\"../../../../assets/icon/jobs-favorites-heart-red.svg\" alt=\"Favorites-Icon\">\n                  <h1>Favorites</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"back()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n\n    <!-- No Favorites -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col *ngIf=\"noFavorites\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"5\">\n        <h1 id=\"no-favorites\">You have no favorites.</h1>\n      </ion-col>\n    </ion-row>\n\n    <!-- Favorite Jobs -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"5\">\n      <ion-row class=\"job-section ion-justify-content-center\" *ngFor=\"let job of allFavoriteJobs\">\n            <ion-col push=\"0.3\" size=\"1\">\n              <img class=\"company-logo\" src=\"{{job.companyLogo}}\">\n            </ion-col>\n            <ion-col push=\"0.3\" style=\"height: 80px;\">\n              <h5 id=\"job-title\">{{job.title}}</h5>\n              <p id=\"company-name\">{{job.companyName}}</p>\n              <h5 id=\"job-posted-date\">Posted: {{job.dateCreated}}</h5>\n              <h5 id=\"job-rate\">${{job.rateOfPay}}/hr</h5>\n            </ion-col>\n            <ion-col size=\"11\">\n              <p id=\"job-summary\">{{job.summary}}</p>\n            </ion-col>\n            <ion-col pull=\"0\" size=\"11\">\n                <!-- Heart Icon Component holds the state for Favorites -->\n                <app-heart-icon [job]=\"job\" [favoriteJobs]=\"favoriteJobsObj\" *ngIf=\"favoriteJobsObj\"></app-heart-icon>\n                <ion-button class=\"job-details ion-float-right\" (click)=\"jobPage(job)\">\n                  Details\n                </ion-button>\n            </ion-col>\n      </ion-row>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_jobs_favorites_favorites_module_ts.js.map