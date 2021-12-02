"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_events_going_going_module_ts"],{

/***/ 23520:
/*!************************************************************!*\
  !*** ./src/app/pages/events/going/going-routing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoingPageRoutingModule": function() { return /* binding */ GoingPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _going_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./going.page */ 3035);




const routes = [
    {
        path: '',
        component: _going_page__WEBPACK_IMPORTED_MODULE_0__.GoingPage
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

/***/ 44210:
/*!****************************************************!*\
  !*** ./src/app/pages/events/going/going.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoingPageModule": function() { return /* binding */ GoingPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/custom-component.module */ 64941);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _going_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./going-routing.module */ 23520);
/* harmony import */ var _going_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./going.page */ 3035);








let GoingPageModule = class GoingPageModule {
};
GoingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__.CustomComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _going_routing_module__WEBPACK_IMPORTED_MODULE_1__.GoingPageRoutingModule
        ],
        declarations: [_going_page__WEBPACK_IMPORTED_MODULE_2__.GoingPage]
    })
], GoingPageModule);



/***/ }),

/***/ 3035:
/*!**************************************************!*\
  !*** ./src/app/pages/events/going/going.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoingPage": function() { return /* binding */ GoingPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_going_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./going.page.html */ 75401);
/* harmony import */ var _going_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./going.page.scss */ 13074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/events.service */ 80106);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 79379);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 48578);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ 9193);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);











let GoingPage = class GoingPage {
    constructor(router, events, profile, cdr, toast, alert, eventEmitterService, location) {
        this.router = router;
        this.events = events;
        this.profile = profile;
        this.cdr = cdr;
        this.toast = toast;
        this.alert = alert;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
        this.goingToEvents = [];
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.eventEmitterService.onBackAction();
        });
        // Get the User's details
        this.profileSub = this.profile.getUserDetails().subscribe(details => {
            this.id = details['_id'];
            this.userEmail = details['email'];
            this.eventsGoingSub = this.events.eventsGoing$.subscribe(events => {
                this.goingToEvents = events;
            });
            console.log('getting event user ' + this.id + ' is going to');
            this.refreshGoingEvents();
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
    refreshGoingEvents() {
        this.eventsGoingSub = this.events.getEventsGoing(this.id).subscribe(eventsGoing => {
            this.goingToEvents = Object.values(eventsGoing);
            this.goingToEvents.reverse();
            console.log(`Updated events going list: ${this.goingToEvents}`);
            for (const event of this.goingToEvents) {
                event.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(new Date(event.date), 'MMMM dd, yyyy');
                event.time = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(new Date(event.date), 'hh:mm a');
                event.dateCreated = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(event.dateCreated), {
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
GoingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.PlatformLocation }
];
GoingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-going',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_going_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_going_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router,
        _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService,
        _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController,
        src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.PlatformLocation])
], GoingPage);



/***/ }),

/***/ 75401:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/events/going/going.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Events</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Desktop -->\n    <ion-grid class=\"ion-hide-md-down\">\n\n      <!-- Back Button -->\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"margin-top: 5%;\">\n        <ion-col class=\"ion-align-self-center\" pull=\".1\" size=\"8\">\n          <div><h1>My Events</h1></div>\n          <ion-button class=\"ion-float-right blue-button\" style=\"position: relative; top: -40px;\" (click)=\"goBack()\">\n            Go Back\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\n        <ion-col size=\"10\" class=\"ion-text-center\" style=\"margin-top: 100px;\">\n          <p>You have no events saved in My Events list.</p>\n        </ion-col>\n      </ion-row>\n\n      <!-- Events -->\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 5%;\" *ngFor=\"let event of goingToEvents\">\n        <ion-col size=\"2\">\n         <img class=\"thumbnail\" src=\"../assets/Journi_flyer.jpg\"/>\n        </ion-col>\n        <ion-col size=\"4\">\n          <p>{{ event.title }}</p>\n          <p>{{ event.time }}</p>\n          <p>{{ event.date }}</p>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-button class=\"grey-button\" (click)=\"eventPage(event)\">\n            Details\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Mobile -->\n    <ion-grid class=\"ion-hide-lg-up\">\n      <ion-row *ngIf=\"goingToEvents.length === 0\" class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" class=\"ion-text-center\" style=\"margin-top: 100px;\">\n          <p>You have no events saved in My Events list. Please hit the <ion-button class=\"going\">\n            Go\n        </ion-button> button on an Event to save it to this list.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"9\">\n          <ion-card *ngFor=\"let event of goingToEvents\">\n            <img src=\"../assets/Journi_flyer.jpg\" />\n            <ion-card-header (click)=\"eventPage(event)\">\n              <ion-card-title>{{ event.title }}</ion-card-title>\n              <ion-card-subtitle>{{ event.time }}</ion-card-subtitle>\n              <ion-card-subtitle>{{ event.date }}</ion-card-subtitle>\n              <ion-card-subtitle> {{ event.city }}, {{ event.state }}</ion-card-subtitle>\n              <!-- <ion-card-subtitle float-right style=\"opacity: 0.3; margin-top: 60px;\">posted: {{ event.dateCreated }}</ion-card-subtitle> -->\n            </ion-card-header>\n            <ion-card-content>\n                <app-going-icon [event]=\"event\" [userEmail]=\"userEmail\" [id]=\"id\"></app-going-icon>\n           </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 13074:
/*!****************************************************!*\
  !*** ./src/app/pages/events/going/going.page.scss ***!
  \****************************************************/
/***/ (function(module) {

module.exports = "ion-title {\n  margin: 0;\n}\n\n.thumbnail {\n  width: 200px;\n}\n\n.going {\n  --color: white;\n  width: 50px;\n  font-weight: 500;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n}\n\n.going:hover {\n  --color: white;\n}\n\np {\n  font-size: 1.2em;\n  color: #0055a5;\n  font-weight: 600;\n}\n\nhr {\n  border: 1px solid #999;\n}\n\nion-card {\n  margin-top: 5%;\n}\n\nion-card-content ion-button {\n  width: 47%;\n}\n\nion-card-content :first-child {\n  margin-right: 5px;\n}\n\nion-card-content :nth-child(2) {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQUU7RUFDRSxjQUFBO0FBRUo7O0FBQ0E7RUFFRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFLRTtFQUNFLFVBQUE7QUFGSjs7QUFLRTtFQUNFLGlCQUFBO0FBSEo7O0FBS0U7RUFDRSxnQkFBQTtBQUhKIiwiZmlsZSI6ImdvaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5nb2luZyB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMjRkOGE4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMyNGQ4YTg7XG5cbiAgJjpob3ZlciB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gIH1cbn1cbnAge1xuICBcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbn1cblxuXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogNDclO1xuICB9XG5cbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICA6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_events_going_going_module_ts-es2015.js.map