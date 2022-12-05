"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_events_events_module_ts"],{

/***/ 9193:
/*!**********************************************************!*\
  !*** ./src/app/emitters/events-event-emitter.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsEventEmitterService": () => (/* binding */ EventsEventEmitterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let EventsEventEmitterService = class EventsEventEmitterService {
    constructor() {
        this.invokeEventsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onBackAction() {
        this.invokeEventsPageRefresh.emit();
    }
    resetEvents() {
        console.log('Reseting Events Page');
        this.invokeEventsPageRefresh.emit();
    }
};
EventsEventEmitterService.ctorParameters = () => [];
EventsEventEmitterService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], EventsEventEmitterService);



/***/ }),

/***/ 45358:
/*!*******************************************************!*\
  !*** ./src/app/pages/events/events-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPageRoutingModule": () => (/* binding */ EventsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.page */ 64637);




const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_0__.EventsPage
    },
    {
        path: 'events-page/:id/:title/:addressOne/:addressTwo/:city/:state/:zip/:dateCreated/:date/:time/:photo/:description',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_events_events-page_events-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./events-page/events-page.module */ 29403)).then(m => m.EventsPagePageModule)
    },
    {
        path: 'events-favorites',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_events_events-favorites_events-favorites_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./events-favorites/events-favorites.module */ 16565)).then(m => m.EventsFavoritesPageModule)
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventsPageRoutingModule);



/***/ }),

/***/ 95105:
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPageModule": () => (/* binding */ EventsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/custom-component.module */ 64941);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-routing.module */ 45358);
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.page */ 64637);









let EventsPageModule = class EventsPageModule {
};
EventsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__.CustomComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _events_routing_module__WEBPACK_IMPORTED_MODULE_1__.EventsPageRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _events_page__WEBPACK_IMPORTED_MODULE_2__.EventsPage }])
        ],
        declarations: [
            _events_page__WEBPACK_IMPORTED_MODULE_2__.EventsPage
        ]
    })
], EventsPageModule);



/***/ }),

/***/ 64637:
/*!*********************************************!*\
  !*** ./src/app/pages/events/events.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPage": () => (/* binding */ EventsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _events_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.page.html?ngResource */ 93852);
/* harmony import */ var _events_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.page.scss?ngResource */ 41987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ 80106);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 53250);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ 9193);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 51233);
var _a, _b, _c, _d, _e;












let EventsPage = class EventsPage {
    constructor(router, events, profile, loading, eventEmitterService) {
        this.router = router;
        this.events = events;
        this.profile = profile;
        this.loading = loading;
        this.eventEmitterService = eventEmitterService;
        this.jobFilter = 'newest';
        this.searching = false;
        this.noSearchInput = false;
        this.allEvents = this.events.allEvents;
        // Format Times
        for (const event of this.allEvents) {
            event.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(event.date), 'MMMM dd, yyyy');
            event.dateCreated = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(event.dateCreated), {
                includeSeconds: true,
                addSuffix: true
            });
            event.time = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(event.date), 'hh:mm a');
        }
        this.favoriteEventsSub$ = this.events.favoriteEvents$.subscribe(events => {
            this.favoriteEventsAmount = events.length;
            this.favoriteEvents = this.events.favoriteEvents;
            console.log('\nFavorite Events:');
            console.log(this.favoriteEvents);
            console.log(this.favoriteEventsAmount);
        });
    }
    ngOnInit() {
        this.deleteEvent();
        this.trackRoute();
        this.eventEmitterSubscription();
        this.filterEvents();
    }
    filterEvents() {
        // this.filterJobsService.filterBehaviorSub.subscribe(
        //   data => {
        //     console.log('Data from Filter Behavior Subject')
        //     console.log(data);
        //     this.jobFilter = data;
        //     this.getJobs(data);
        //   }
        // )
        // this.getFavoriteJobs();
        // this.trackRoute();
    }
    eventEmitterSubscription() {
        if (this.eventEmitterService.subsVar == undefined) {
            this.eventEmitterService.subsVar = this.eventEmitterService.invokeEventsPageRefresh.subscribe(() => {
                this.getEvents();
            });
        }
    }
    // Searches user by ID in Database
    // Tracks Route Change in Navigator
    // When the user navigates from the main
    // profile page @ /home/events, the Tab Bar
    // at the bottom of the page will be hidden
    trackRoute() {
        this.routerSub = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd)).subscribe(data => {
            let url = data['url'];
            let tabBar = document.getElementById('tabBar');
            let tabBarFab = document.getElementById('tab-bar-fab');
            console.log('\nURL: ');
            console.log(url);
            if (url.includes('/home/events/events-page') ||
                url.includes('/home/events/events-favorites')) {
                tabBar.style.transition = '0.5s';
                tabBar.style.opacity = '0';
                tabBar.style.pointerEvents = 'none';
                tabBarFab.style.transition = '0.5s';
                tabBarFab.style.opacity = '0';
                tabBarFab.style.pointerEvents = 'none';
            }
            else {
                tabBar.style.transition = '0.5s';
                tabBar.style.opacity = '1';
                tabBar.style.pointerEvents = 'auto';
                tabBarFab.style.transition = '0.5s';
                tabBarFab.style.opacity = '1';
                tabBarFab.style.pointerEvents = 'auto';
            }
        });
    }
    deleteEvent() {
        var result = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(1989, 6, 10), new Date(1987, 1, 11));
        // console.log(result);
    }
    eventPage(event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
    }
    favoritesPage() {
        this.router.navigate(['/home/events/events-favorites']);
    }
    filter($event) {
        this.initializeItems();
        let searchTerm = $event.detail.value;
        this.presentLoadingWithOptions();
        this.allEvents = this.allEvents.filter(currentEvents => {
            console.log(currentEvents);
            if (!currentEvents || !searchTerm) {
                console.log('No results from that search');
                this.noSearchInput = true;
            }
            if (currentEvents.title && searchTerm) {
                if (currentEvents.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    console.log(currentEvents.title);
                    console.log((currentEvents));
                    this.searchTerm = searchTerm;
                    this.searching = true;
                    this.noSearchInput = false;
                    return true;
                }
                return false;
            }
            this.noSearchInput = true;
        });
        this.allEventsLength = this.allEvents.length;
        // If there are no matches with the searchTerm
        if (this.allEventsLength === 0) {
            console.log('No results from that search');
            this.searching = true;
            this.searchTerm = searchTerm;
            this.searchbar.getInputElement().then((searchbarInputElement) => {
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
    initializeItems() {
        this.allEvents = this.loadedAllEvents;
    }
    presentLoadingWithOptions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                duration: 1000,
                message: 'Searching for Events...',
                translucent: true,
                cssClass: 'custom-class custom-loading',
                keyboardClose: false
            });
            return yield loading.present();
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.allEvents = [];
            // this.eventsSub = this.events.getEvents().subscribe( events => {
            //   this.allEvents = Object.values(events);
            //   this.allEventsLength = this.allEvents.length;
            //   this.allEvents.reverse();
            //   this.searching = false;
            //   // Format Times
            //   for (const event of this.allEvents) {
            //     // First date Event Date
            //     // Second date Current Date
            //     // If the Current Date is After the Event Date, Delete
            //     // If True, Delete event.
            //     if (isAfter(new Date(Date.now()), new Date(event.date))) {
            //       this.deleteEventSub = this.events.deleteEvent(event._id).subscribe();
            //     }
            //     event.date = format( new Date(event.date), 'MMMM dd, yyyy');
            //     event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
            //       includeSeconds: true,
            //       addSuffix: true
            //     });
            //     event.time = format( new Date(event.date), 'hh:mm a');
            //   }
            // });
            setTimeout(() => {
                event.target.complete();
                console.log('Events Refreshed');
            }, 2000);
            yield console.log('Refreshing Events Page..');
        });
    }
    getEvents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // this.eventsSub = this.events.getEvents().subscribe( events => {
            //   this.allEvents = Object.values(events);
            //   this.allEventsLength = this.allEvents.length;
            //   this.allEvents.reverse();
            //   this.searching = false;
            //   
            // });
        });
    }
};
EventsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService }
];
EventsPage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSearchbar, { static: false },] }]
};
EventsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-events',
        template: _events_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_events_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router) === "function" ? _a : Object, typeof (_b = typeof _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService !== "undefined" && _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService) === "function" ? _b : Object, typeof (_c = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController) === "function" ? _d : Object, typeof (_e = typeof src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService !== "undefined" && src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService) === "function" ? _e : Object])
], EventsPage);



/***/ }),

/***/ 51233:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


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
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ 41987:
/*!**********************************************************!*\
  !*** ./src/app/pages/events/events.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\nion-header {\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n}\nion-card {\n  --background: white;\n  margin-bottom: 8px;\n  position: relative;\n  padding-bottom: 32px;\n  box-shadow: 1px px 6px rgba(0, 0, 0, 0.1);\n}\nion-searchbar {\n  --background: white;\n  border-radius: 5px;\n  --height: 30px;\n  font-size: 0.8em;\n  --box-shadow: none;\n  --cancel-button-color: #005191;\n  --clear-button-color: #005191;\n  --placeholder-opacity: 0.5;\n  --icon-color: #005191;\n  transition: 0.5s;\n}\n#mobile-filter-toolbar {\n  z-index: 999;\n  --background: #e0e7ed;\n}\n.filter-toolbar-wrapper {\n  width: 100%;\n  border-bottom: 3px ​solid #0055a5;\n}\n.filter-toolbar-wrapper ion-toolbar {\n  --background: #e7a12b;\n  --border-width: 0px 0px 3px 0px;\n  --border-style: solid;\n  --border-color: #0055a5;\n  margin: 2em 0em;\n  transition: 0.5s;\n}\n.filter-message {\n  font-weight: 600;\n  font-size: 1em;\n  color: #0055a5;\n  opacity: 0;\n  transition: 0.5s;\n  animation: filter-selection-slide 1s ease-in-out 0.5s forwards;\n}\n@media only screen and (min-width: 992px) {\n  .filter-message {\n    color: #0055a5;\n    font-weight: 600;\n    font-size: 1.4em;\n    position: relative;\n    top: 2px;\n  }\n}\n@keyframes filter-selection-slide {\n  0% {\n    transform: translateX(-10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(10px);\n    opacity: 1;\n  }\n}\n.filter-icon {\n  color: #0055a5;\n  font-size: 1.4em;\n}\n.job-section {\n  height: 230px;\n  color: #777;\n  position: relative;\n  top: 20px;\n  width: 100%;\n}\nh6, p {\n  display: block;\n}\nh6.text-header {\n  padding: 0;\n  padding: initial;\n  text-align: center;\n}\n--ion-buttons {\n  --color: #888;\n}\nion-button {\n  --background: none;\n}\n.desktop-toolbar {\n  --background: linear-gradient(30deg, #004785, #0055a5);\n  box-shadow: 1px 1px 19px rgba(54, 54, 54, 0.2117647059);\n  border-radius: 100px;\n}\n.desktop-toolbar h1 {\n  color: white;\n}\n.desktop-toolbar ion-buttons:nth-child(1) {\n  position: relative;\n  left: 3em;\n}\n.desktop-toolbar ion-buttons:nth-child(2) {\n  position: relative;\n  right: 3em;\n}\n.favorites-button {\n  --color: white;\n  --background: none;\n  --background-hover: linear-gradient(#e3405f, #5f4045);\n  height: 24px;\n  width: 70px;\n  font-size: 0.6em;\n  font-weight: 600;\n  display: block;\n}\n.filter-button {\n  --color: white;\n  --background: none;\n  --background-hover: linear-gradient(#e3405f, #da3a57);\n  height: 24px;\n  --border-radius: 5px;\n  width: 70px;\n  font-size: 0.8em;\n  font-weight: 600;\n  display: block;\n}\n.my-events-button {\n  --color: white;\n  --background: #e3405f;\n  --background-hover: linear-gradient(#e3405f, #5f4045);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\nion-card-title {\n  font-size: 1.5em;\n  font-weight: 600;\n  color: #0055a5;\n}\nion-card-subtitle {\n  font-size: 0.85em;\n  line-height: 0.7em;\n  font-weight: 600;\n  color: #c0bebe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsMENBQUE7QUFFRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5Q0FBQTtBQUFGO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQUVGO0FBQUE7RUFDRSxXQUFBO0VBQ0EsaUNBQUE7QUFHRjtBQURFO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDhEQUFBO0FBR0Y7QUFEQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7RUFJRjtBQUNGO0FBRkE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQUlGO0VBRkE7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFJRjtBQUNGO0FBREE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQURBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSUY7QUFEQTtFQUNFLGNBQUE7QUFJRjtBQURBO0VBQ0UsVUFBQTtFQUFBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJRjtBQURBO0VBQ0UsYUFBQTtBQUlGO0FBREE7RUFDRSxrQkFBQTtBQUlGO0FBRkE7RUFDRSxzREFBQTtFQUNBLHVEQUFBO0VBQ0Esb0JBQUE7QUFLRjtBQUpFO0VBQ0UsWUFBQTtBQU1KO0FBSkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFNSjtBQUpFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBTUo7QUFIQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU1GO0FBSkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU9GO0FBTEE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFRRjtBQU5BO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFTRjtBQVBBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVVGIiwiZmlsZSI6ImV2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuXG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAvLyBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgYm94LXNoYWRvdzogMXB4IHB4IDZweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICMwMDUxOTE7XG4gIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjMDA1MTkxO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgLS1pY29uLWNvbG9yOiAjMDA1MTkxO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuI21vYmlsZS1maWx0ZXItdG9vbGJhciB7XG4gIHotaW5kZXg6IDk5OTtcbiAgLS1iYWNrZ3JvdW5kOiAjZTBlN2VkO1xufVxuLmZpbHRlci10b29sYmFyLXdyYXBwZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAzcHgg4oCLc29saWQgIzAwNTVhNTtcblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTdhMTJiO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDNweCAwcHg7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDA1NWE1O1xuICAgIG1hcmdpbjogMmVtIDBlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG59XG4uZmlsdGVyLW1lc3NhZ2V7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzAwNTVhNTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBmaWx0ZXItc2VsZWN0aW9uLXNsaWRlIDFzIGVhc2UtaW4tb3V0IDAuNXMgZm9yd2FyZHM7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5maWx0ZXItbWVzc2FnZSAge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmlsdGVyLXNlbGVjdGlvbi1zbGlkZSB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5maWx0ZXItaWNvbiB7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuLmpvYi1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgY29sb3I6ICM3Nzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDYsIHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDYudGV4dC1oZWFkZXIge1xuICBwYWRkaW5nOiB1bnNldDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4tLWlvbi1idXR0b25zIHtcbiAgLS1jb2xvcjogIzg4ODtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cbi5kZXNrdG9wLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwZGVnLCAjMDA0Nzg1LCAjMDA1NWE1KTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxOXB4ICMzNjM2MzYzNjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgaW9uLWJ1dHRvbnM6bnRoLWNoaWxkKDEpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAzZW07XG4gIH1cbiAgaW9uLWJ1dHRvbnM6bnRoLWNoaWxkKDIpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogM2VtO1xuICB9XG59XG4uZmF2b3JpdGVzLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNlMzQwNWYsICM1ZjQwNDUpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5maWx0ZXItYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2UzNDA1ZiwgI2RhM2E1Nyk7XG4gIGhlaWdodDogMjRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5teS1ldmVudHMtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogI2UzNDA1ZjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2UzNDA1ZiwgIzVmNDA0NSk7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDU1YTU7XG59XG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjYzBiZWJlO1xufSJdfQ== */";

/***/ }),

/***/ 93852:
/*!**********************************************************!*\
  !*** ./src/app/pages/events/events.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-shadow class=\"ion-hide-lg-up\">\n  <!-- Mobile & Tablet Toolbar -->\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon style=\"position: relative; left: 8px; color: #0055a5;\"name=\"briefcase-outline\"></ion-icon>\n      <ion-title>Events |</ion-title>\n    </ion-buttons>\n    <ion-searchbar></ion-searchbar>\n       <ion-buttons slot=\"end\">\n        <ion-button (click)=\"favoritesPage()\">             \n          <!-- Favorites Icon -->\n          <svg id=\"favorites-page-button\" width=\"35px\" viewBox=\"0 0 400 400\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <title>jobs-favorites-heart-red</title>\n            <defs>\n                <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-134\">\n                    <stop stop-color=\"#E80404\" offset=\"0%\"></stop>\n                    <stop stop-color=\"#980000\" offset=\"100%\"></stop>\n                </linearGradient>\n                <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-135\">\n                    <stop stop-color=\"#777\" offset=\"0%\"></stop>\n                    <stop stop-color=\"#999\" offset=\"100%\"></stop>\n                </linearGradient>\n            </defs>\n            <g id=\"jobs-favorites-heart-red\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <path d=\"M343.54238,63.6069503 C305.547015,30.6673745 249.039314,36.5922661 214.164009,73.1996318 L200.505092,87.5181196 L186.846154,73.1996318 C152.040204,36.5922661 95.4631671,30.6673745 57.4678045,63.6069503 C13.9256735,101.413401 11.6376316,169.267517 50.6036789,210.248017 L184.766137,351.175794 C193.432963,360.274735 207.507886,360.274735 216.174713,351.175794 L350.337169,210.248017 C389.372552,169.267517 387.08451,101.413401 343.54238,63.6069503 Z\" \n                      id=\"heart-path\" \n                      fill=\"url(#linearGradient-134)\" \n                      fill-rule=\"nonzero\"></path>\n            </g>\n          </svg>\n          <p id=\"fav-amount\">{{favoriteEventsAmount}}</p>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Refresh -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col style=\"padding: 0 2em;\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n          <ion-buttons slot=\"start\">\n            <ion-icon style=\"font-size: 2em; margin-right: 8px;\" name=\"calendar\"></ion-icon>\n            <h1 style=\"margin-top: 12px;\">Events |</h1>\n            <p *ngIf=\"this.jobFilter === 'htol'\" class=\"filter-message\">Pay - High to Low</p>\n            <p *ngIf=\"this.jobFilter === 'ltoh'\" class=\"filter-message\">Pay - Low to High</p>\n            <p *ngIf=\"this.jobFilter === 'newest'\" class=\"filter-message\">Newest</p>\n            <p *ngIf=\"this.jobFilter === 'oldest'\" class=\"filter-message\">{{this.jobFilter}}</p>\n          </ion-buttons>\n              <!-- I need filterMenu() -->\n          <ion-buttons slot=\"end\">\n                <ion-icon class=\"filter-icon\" slot=\"start\" name=\"filter\" \n                style=\"position: relative; left: 12px;\">\n                </ion-icon>\n                <ion-button class=\"filter-button\" (click)=\"filterMenu()\">\n                  Filter\n                </ion-button>\n                <ion-button class=\"favorites-button\" (click)=\"favoritesPage()\">\n                  <ion-icon slot=\"start\" style=\"font-size: 3em;\" src=\"../../assets/icon/jobs-favorites-heart-red.svg\"></ion-icon>\n                  <p style=\"color: white; font-size: 2em; position: relative; right: 4px;\">3</p>\n                </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile Filter Toolbar -->\n    <ion-toolbar \n        style=\"position: fixed; z-index: 999; --background: #e0e7ed;\" \n        id=\"mobile-filter-toolbar\"\n        class=\"ion-hide-lg-up\">\n      <ion-buttons slot=\"start\">\n        <p class=\"filter-message\">\n          Filter: Newest</p>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"onClick()\">\n          <!-- Filter -->\n          <ion-icon class=\"filter-icon\" name=\"filter-outline\"></ion-icon> \n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n\n    <!-- Card List Wrapper for consistant aligment & padding -->\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- Card List Inner Wrapper -->\n          <div class=\"spacer ion-hide-lg-down\"></div>\n          \n          <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"9\" size-lg=\"5\" size-xl=\"3\" *ngFor=\"let event of allEvents\">\n            <ion-card class=\"event-card\">\n              <img src=\"{{event.photo}}\" />\n              <ion-card-header>\n                <ion-card-title>{{ event.title }}</ion-card-title>\n                <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n                <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n                <!-- <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle> -->\n                <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n              </ion-card-header>\n              <ion-card-content class=\"ion-text-center\">\n                <ion-toolbar style=\"--background: none; height: auto;\">\n                  <app-events-favorites-icon \n                  [event]=\"event\" \n                  [userEmail]=\"userEmail\" \n                  [id]=\"id\"></app-events-favorites-icon>\n                </ion-toolbar>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_events_events_module_ts.js.map