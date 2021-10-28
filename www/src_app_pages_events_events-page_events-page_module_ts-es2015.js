(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_events_events-page_events-page_module_ts"],{

/***/ 17760:
/*!************************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPagePageRoutingModule": function() { return /* binding */ EventsPagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _events_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-page.page */ 68973);




const routes = [
    {
        path: '',
        component: _events_page_page__WEBPACK_IMPORTED_MODULE_0__.EventsPagePage
    }
];
let EventsPagePageRoutingModule = class EventsPagePageRoutingModule {
};
EventsPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventsPagePageRoutingModule);



/***/ }),

/***/ 29403:
/*!****************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPagePageModule": function() { return /* binding */ EventsPagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _events_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-page-routing.module */ 17760);
/* harmony import */ var _events_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-page.page */ 68973);







let EventsPagePageModule = class EventsPagePageModule {
};
EventsPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _events_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventsPagePageRoutingModule
        ],
        declarations: [_events_page_page__WEBPACK_IMPORTED_MODULE_1__.EventsPagePage]
    })
], EventsPagePageModule);



/***/ }),

/***/ 68973:
/*!**************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPagePage": function() { return /* binding */ EventsPagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_events_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./events-page.page.html */ 58162);
/* harmony import */ var _events_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-page.page.scss */ 91188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/events.service */ 80106);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profile.service */ 39181);
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ 9193);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);










let EventsPagePage = class EventsPagePage {
    constructor(activatedRoute, events, profile, router, toastController, eventEmitterService, location) {
        this.activatedRoute = activatedRoute;
        this.events = events;
        this.profile = profile;
        this.router = router;
        this.toastController = toastController;
        this.eventEmitterService = eventEmitterService;
        this.location = location;
        this.going = false;
    }
    ngOnDestroy() {
        // this.eventsSub.unsubscribe();
        this.eventEmitterService.subsVar.unsubscribe();
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.eventEmitterService.onBackAction();
        });
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        // tslint:disable-next-line: radix
        const addressOne = this.activatedRoute.snapshot.paramMap.get('addressOne');
        // tslint:disable-next-line: radix
        const addressTwo = this.activatedRoute.snapshot.paramMap.get('addressTwo');
        // tslint:disable-next-line: radix
        const city = this.activatedRoute.snapshot.paramMap.get('city');
        // tslint:disable-next-line: radix
        const state = this.activatedRoute.snapshot.paramMap.get('state');
        // tslint:disable-next-line: radix
        const zip = this.activatedRoute.snapshot.paramMap.get('zip');
        // tslint:disable-next-line: radix
        const date = this.activatedRoute.snapshot.paramMap.get('date');
        // tslint:disable-next-line: radix
        const dateCreated = this.activatedRoute.snapshot.paramMap.get('dateCreated');
        // tslint:disable-next-line: radix
        const time = this.activatedRoute.snapshot.paramMap.get('time');
        // tslint:disable-next-line: radix
        const description = this.activatedRoute.snapshot.paramMap.get('description');
        // tslint:disable-next-line: radix
        const photo = this.activatedRoute.snapshot.paramMap.get('photo');
        // tslint:disable-next-line: radix
        this.eventId = id;
        this.eventTitle = title;
        this.eventAddressOne = addressOne;
        this.eventAddressTwo = addressTwo;
        this.eventCity = city;
        this.eventState = state;
        this.eventZip = zip;
        this.eventDateCreated = dateCreated;
        this.eventDate = date;
        this.eventTime = time;
        this.eventDescription = description;
        this.eventPhoto = photo;
        this.profileSub = this.profile.getUserDetails().subscribe(details => {
            // Get all the events that the user is going to.
            this.id = details['_id'];
            let eventsGoing = details['eventsGoing'];
            console.log(eventsGoing);
            if (eventsGoing.includes(this.eventId)) {
                this.going = true;
            }
            else {
                this.going = false;
            }
            console.log();
        });
    }
    goingToEvent() {
        this.going = true;
        this.presentGoingToast();
        console.log(`Adding ${this.eventId} to this Users eventsGoing property`);
        this.goingToEventSub = this.events.goingToEvent(this.eventId, this.userEmail, this.id)
            .subscribe(events => {
            let updatedEvents = [...Object.values(events['eventsGoing']), this.eventId];
            this.events.eventsGoing$.next(updatedEvents);
            console.log(this.events.eventsGoing$.getValue());
            // this.events.getEventsGoing(this.id).subscribe(
            //   eventsGoing => {
            //     console.log(eventsGoing);
            //   }
            // );
        });
    }
    notGoingToEvent() {
        this.going = false;
        this.presentNotGoingToast();
        console.log(`Removing ${this.eventId} from this Users eventsGoing property`);
        ;
        this.notGoingToEventSub = this.events.notGoingToEvent(this.eventId, this.userEmail, this.id).subscribe(events => {
            const eventsGoing = this.events.eventsGoing$.getValue();
            for (let i = 0; i < eventsGoing.length; i++) {
                if (eventsGoing[i] === this.eventId) {
                    eventsGoing.splice(i, 1);
                }
            }
            console.log(eventsGoing);
            this.events.eventsGoing$.next(eventsGoing);
        });
    }
    callEventEmitter() {
        this.eventEmitterService.onBackAction();
    }
    presentGoingToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'You are going to this Event. It has been saved to your "Going" list',
                duration: 2000
            });
            toast.present();
        });
    }
    presentNotGoingToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'You are no longer going to event. It has been removed from your "Going" list',
                duration: 2000
            });
            toast.present();
        });
    }
};
EventsPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.PlatformLocation }
];
EventsPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-events-page',
        template: _raw_loader_events_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_events_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute,
        _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService,
        _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController,
        src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.PlatformLocation])
], EventsPagePage);



/***/ }),

/***/ 91188:
/*!****************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  background: none;\n  --box-shadow: none;\n}\n\nion-header {\n  background: none;\n  --box-shadow: none;\n}\n\nh3 {\n  font-weight: 800;\n  line-height: 1em;\n  width: 150px;\n  color: #0055a5;\n  font-size: 1.1em;\n}\n\np {\n  font-size: 1.1em;\n  color: #333;\n  margin-bottom: 16px;\n  white-space: pre-wrap;\n}\n\n.going-link:link {\n  color: #1baf88;\n}\n\n.going-link:visited {\n  color: #1baf88;\n}\n\n.not-going-link:link {\n  color: #faa71b;\n  font-size: 1.4em;\n}\n\n.not-going-link:visited {\n  color: #faa71b;\n  font-size: 1.4em;\n}\n\n.header {\n  background-color: #edf3f8;\n  padding: 0;\n  height: auto;\n}\n\n.event-image {\n  height: 350px;\n  background-size: cover;\n  background-position: center;\n}\n\n.details {\n  height: auto;\n  background: white;\n  padding: 2em;\n  margin: 2em;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n}\n\n.going-text {\n  font-weight: 600;\n  color: #222;\n  width: 100%;\n  margin: 26px auto;\n}\n\n.going {\n  background: #edf3f8;\n  padding: 80px 0px;\n  color: white;\n}\n\n.not-going {\n  background: #edf3f8;\n  padding: 80px 0px;\n  color: white;\n}\n\n.going-button {\n  width: 200px;\n  font-size: 1.2em;\n  font-weight: 800;\n  --background: #1baf88;\n  --background-hover: #1baf88;\n  --color: white;\n}\n\n.not-going-button {\n  width: 200px;\n  font-size: 1.2em;\n  --background: #faa71b;\n  --background-hover: #faa71b;\n  --color: white;\n}\n\nion-buttons > ion-button {\n  --padding: ;\n  color: white;\n  height: 45px;\n  border-radius: 5px;\n  font-size: 0.9em;\n  text-transform: none;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    width: 0px;\n    transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    width: 0px;\n    transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLFVBQUE7RUFERjtFQUlBO0lBQ0UseUJBQUE7SUFDQSxVQUFBO0VBRkY7QUFDRjs7QUFSQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0EsVUFBQTtFQURGO0VBSUE7SUFDRSx5QkFBQTtJQUNBLFVBQUE7RUFGRjtBQUNGIiwiZmlsZSI6ImV2ZW50cy1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAxNTBweDtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uZ29pbmctbGluazpsaW5rIHtcbiAgY29sb3I6ICMxYmFmODg7XG59XG5cbi5nb2luZy1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogIzFiYWY4ODtcbn1cblxuLm5vdC1nb2luZy1saW5rOmxpbmsge1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLm5vdC1nb2luZy1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjNmODtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZXZlbnQtaW1hZ2Uge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxzIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMmVtO1xuICBtYXJnaW46IDJlbTs7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDI2cHggcmdiYSgwLDAsMCwwLjA1KTtcbn1cblxuLmdvaW5nLXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjZweCBhdXRvO1xufVxuXG4uZ29pbmcge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBwYWRkaW5nOiA4MHB4IDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubm90LWdvaW5nIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgcGFkZGluZzogODBweCAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdvaW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMxYmFmODg7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubm90LWdvaW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmYWE3MWI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5cbmlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZzogO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ 58162:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-page/events-page.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{eventTitle}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n\n        <!-- Picture Header -->\n        <ion-row style=\"\n        background: url({{eventPhoto}});\" class=\"ion-hide-sm-up ion-justify-content-center event-image\">\n        </ion-row>\n        <ion-row class=\"ion-hide-sm-down ion-justify-content-center\">\n          <ion-col class=\"ion-text-center\" style=\"margin: 2em 0em;\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n            <img height=\"350\" src=\"{{this.eventPhoto}}\">\n          </ion-col>\n        </ion-row>\n\n        <!-- Event Details -->\n        <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n          <ion-col class=\"details\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n            <h3>Event Title</h3>\n            <p>{{ eventTitle }}</p>\n            <h3>Address </h3>\n            <p>{{ eventAddressOne }} {{ eventAddressTwo }}, {{ eventCity }}, {{ eventState }}, {{ eventZip}}</p>\n            <h3>Date</h3>\n            <p>{{ eventDate }}</p>\n            <h3>Time</h3>\n            <p>{{ eventTime }}</p>\n            <h3>Description</h3>\n            <p>{{ eventDescription }}</p>\n        </ion-col>\n        </ion-row>\n\n        <!-- Going or Not Going sections? -->\n\n        <!-- GOING? -->\n        <ion-row *ngIf=\"!going\" class=\"going ion-justify-content-center\">\n            <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n              <p class=\"going-text\">Do you want to go to this event?<br> By clicking 'Yes', this event will be added to your Your Events.</p>\n              <ion-button class=\"going-button\" (click)=\"goingToEvent()\">\n                   Yes.\n                </ion-button><br><br>\n              <a class=\"going-link\" routerLink=\"/home/events\" (click)=\"callEventEmitter()\">Go back to Events Page</a><br><br>\n               <a class=\"going-link\" routerLink=\"/home/events/going\">View My Events</a>\n                 </ion-col>\n        </ion-row>\n\n        <!-- NOT GOING -->\n        <ion-row *ngIf=\"going\" class=\"going ion-justify-content-center\">\n              <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n                <p class=\"going-text\">Do you want to go to this event?<br> By clicking 'No', this event will be deleted from your Your Events.</p>\n                <ion-button class=\"not-going-button\" (click)=\"notGoingToEvent()\">\n                 No.\n                </ion-button><br><br>\n                <a class=\"not-going-link\" routerLink=\"/home/events\" (click)=\"callEventEmitter()\">Go back to Events Page</a><br><br>\n                <a class=\"not-going-link\" routerLink=\"/home/events/going\">View My Events</a>\n               </ion-col>\n      </ion-row>\n\n      </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_events_events-page_events-page_module_ts-es2015.js.map