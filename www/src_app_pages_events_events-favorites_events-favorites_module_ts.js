"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_events_events-favorites_events-favorites_module_ts"],{

/***/ 10840:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/events/events-favorites/events-favorites-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoingPageRoutingModule": () => (/* binding */ GoingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _events_favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-favorites.page */ 60597);




const routes = [
    {
        path: '',
        component: _events_favorites_page__WEBPACK_IMPORTED_MODULE_0__.EventsFavoritesPage
    }
];
let GoingPageRoutingModule = class GoingPageRoutingModule {
};
GoingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GoingPageRoutingModule);



/***/ }),

/***/ 16565:
/*!**************************************************************************!*\
  !*** ./src/app/pages/events/events-favorites/events-favorites.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsFavoritesPageModule": () => (/* binding */ EventsFavoritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/custom-component.module */ 64941);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _events_favorites_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-favorites-routing.module */ 10840);
/* harmony import */ var _events_favorites_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-favorites.page */ 60597);








let EventsFavoritesPageModule = class EventsFavoritesPageModule {
};
EventsFavoritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__.CustomComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _events_favorites_routing_module__WEBPACK_IMPORTED_MODULE_1__.GoingPageRoutingModule
        ],
        declarations: [_events_favorites_page__WEBPACK_IMPORTED_MODULE_2__.EventsFavoritesPage]
    })
], EventsFavoritesPageModule);



/***/ }),

/***/ 60597:
/*!************************************************************************!*\
  !*** ./src/app/pages/events/events-favorites/events-favorites.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsFavoritesPage": () => (/* binding */ EventsFavoritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _events_favorites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-favorites.page.html?ngResource */ 77304);
/* harmony import */ var _events_favorites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-favorites.page.scss?ngResource */ 29758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/events.service */ 80106);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 53250);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ 9193);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
var _a, _b, _c, _d, _e, _f, _g, _h;











let EventsFavoritesPage = class EventsFavoritesPage {
    constructor(router, events, profile, cdr, toast, alert, eventEmitterService, location) {
        this.router = router;
        this.events = events;
        this.profile = profile;
        this.cdr = cdr;
        this.toast = toast;
        this.alert = alert;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
        this.favoriteEvents = [];
    }
    ngOnInit() {
        this.getFavoriteEvents();
        this.location.onPopState(() => {
            this.eventEmitterService.onBackAction();
        });
        // Get the User's details
        this.profileSub = this.profile.getUserDetails().subscribe(details => {
            this.id = details['_id'];
            this.userEmail = details['email'];
            this.favoriteEventsSub = this.events.favoriteEvents$.subscribe(events => {
                console.clear();
                console.log('Events: ');
                console.log(events);
                this.favoriteEvents = events;
                this.favoriteEventsLength = events.length;
                return;
            });
            console.log('getting event user ' + this.id + ' is going to');
        });
    }
    eventPage(event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
    }
    goBack() {
        this.eventEmitterService.onBackAction();
        this.router.navigate(['/home/events']);
    }
    getFavoriteEvents() {
        this.favoriteEventsSub = this.events.getEventsFavorites(this.id).subscribe(eventsGoing => {
            this.favoriteEvents = Object.values(eventsGoing);
            this.favoriteEvents.reverse();
            console.log(`Updated events going list: ${this.favoriteEvents}`);
            for (const event of this.favoriteEvents) {
                event.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(event.date), 'MMMM dd, yyyy');
                event.time = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(event.date), 'hh:mm a');
                event.dateCreated = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(event.dateCreated), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
            this.eventEmitterService.resetEvents();
        });
    }
    refreshFavoriteEvents() {
        this.favoriteEventsSub = this.events.getEventsFavorites(this.id).subscribe(eventsGoing => {
            this.favoriteEvents = Object.values(eventsGoing);
            this.favoriteEvents.reverse();
            console.log(`Updated events going list: ${this.favoriteEvents}`);
            for (const event of this.favoriteEvents) {
                event.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(event.date), 'MMMM dd, yyyy');
                event.time = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(event.date), 'hh:mm a');
                event.dateCreated = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(event.dateCreated), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
            this.eventEmitterService.resetEvents();
        });
    }
    presentNotGoingToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are no longer going to event. It has been removed from your "Going" list',
                duration: 2000
            });
            toast.present();
        });
    }
};
EventsFavoritesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.PlatformLocation }
];
EventsFavoritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-events-favorites',
        template: _events_favorites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_events_favorites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router) === "function" ? _a : Object, typeof (_b = typeof _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService !== "undefined" && _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService) === "function" ? _b : Object, typeof (_c = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService) === "function" ? _c : Object, typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef) === "function" ? _d : Object, typeof (_e = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController) === "function" ? _e : Object, typeof (_f = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController) === "function" ? _f : Object, typeof (_g = typeof src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService !== "undefined" && src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService) === "function" ? _g : Object, typeof (_h = typeof _angular_common__WEBPACK_IMPORTED_MODULE_11__.PlatformLocation !== "undefined" && _angular_common__WEBPACK_IMPORTED_MODULE_11__.PlatformLocation) === "function" ? _h : Object])
], EventsFavoritesPage);



/***/ }),

/***/ 29758:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/events/events-favorites/events-favorites.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  margin: 0;\n}\n\n.thumbnail {\n  width: 200px;\n}\n\n.going {\n  --color: white;\n  width: 50px;\n  font-weight: 500;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n}\n\n.going:hover {\n  --color: white;\n}\n\np {\n  font-size: 1.2em;\n  color: #0055a5;\n  font-weight: 600;\n}\n\nhr {\n  border: 1px solid #999;\n}\n\nion-card {\n  margin-top: 5%;\n}\n\nion-card-content ion-button {\n  width: 47%;\n}\n\nion-card-content :first-child {\n  margin-right: 5px;\n}\n\nion-card-content :nth-child(2) {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy1mYXZvcml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFBRTtFQUNFLGNBQUE7QUFFSjs7QUFDQTtFQUVFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBSUE7RUFDRSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUtFO0VBQ0UsVUFBQTtBQUZKOztBQUtFO0VBQ0UsaUJBQUE7QUFISjs7QUFLRTtFQUNFLGdCQUFBO0FBSEoiLCJmaWxlIjoiZXZlbnRzLWZhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi50aHVtYm5haWwge1xuICB3aWR0aDogMjAwcHg7XG59XG4uZ29pbmcge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMjRkOGE4O1xuXG4gICY6aG92ZXIge1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICB9XG59XG5wIHtcbiAgXG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXdlaWdodDogNjAwO1xuXG59XG5cblxuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgaW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDQ3JTtcbiAgfVxuXG4gIDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 77304:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/events/events-favorites/events-favorites.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <img height=\"30\" src=\"../../../../assets/icon/jobs-favorites-heart-red.svg\" alt=\"Favorite Events Icon\">\n    </ion-buttons>\n    <ion-title>Favorite Events ({{favoriteEventsLength}})</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Desktop -->\n    <ion-grid class=\"ion-hide-md-down\">\n\n      <!-- Back Button -->\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"margin-top: 5%;\">\n        <ion-col class=\"ion-align-self-center\" pull=\".1\" size=\"8\">\n          <div><h1>My Events</h1></div>\n          <ion-button class=\"ion-float-right blue-button\" style=\"position: relative; top: -40px;\" (click)=\"goBack()\">\n            Go Back\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\n        <ion-col size=\"10\" class=\"ion-text-center\" style=\"margin-top: 100px;\">\n          <p>You have no events saved in My Events list.</p>\n        </ion-col>\n      </ion-row>\n\n      <!-- Events -->\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 5%;\" *ngFor=\"let event of goingToEvents\">\n        <ion-col size=\"2\">\n         <img class=\"thumbnail\" src=\"../assets/Journi_flyer.jpg\"/>\n        </ion-col>\n        <ion-col size=\"4\">\n          <p>{{ event.title }}</p>\n          <p>{{ event.time }}</p>\n          <p>{{ event.date }}</p>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-button class=\"grey-button\" (click)=\"eventPage(event)\">\n            Details\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Mobile -->\n    <ion-grid class=\"ion-hide-lg-up\">\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" class=\"ion-text-center\" style=\"margin-top: 100px;\">\n          <p>You have no events saved in My Events list. Please hit the <ion-button class=\"going\">\n            Go\n        </ion-button> button on an Event to save it to this list.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"9\">\n          <ion-card *ngFor=\"let event of goingToEvents\">\n            <img src=\"../assets/Journi_flyer.jpg\" />\n            <ion-card-header (click)=\"eventPage(event)\">\n              <ion-card-title>{{ event.title }}</ion-card-title>\n              <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n              <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n              <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n              <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n            </ion-card-header>\n            <ion-card-content>\n                <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n           </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_events_events-favorites_events-favorites_module_ts.js.map