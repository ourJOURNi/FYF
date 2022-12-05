"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_events_events-page_events-page_module_ts"],{

/***/ 17760:
/*!************************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPagePageRoutingModule": () => (/* binding */ EventsPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPagePageModule": () => (/* binding */ EventsPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPagePage": () => (/* binding */ EventsPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _events_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-page.page.html?ngResource */ 87023);
/* harmony import */ var _events_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-page.page.scss?ngResource */ 7628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/events.service */ 80106);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profile.service */ 39181);
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ 9193);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
var _a, _b, _c, _d, _e, _f, _g;










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
            let favoriteEvents = details['favoriteEvents'];
            console.log(favoriteEvents);
            if (favoriteEvents.includes(this.eventId)) {
                this.going = true;
            }
            else {
                this.going = false;
            }
            console.log();
        });
    }
    favoritingEvent() {
        this.going = true;
        this.presentGoingToast();
        console.log(`Adding ${this.eventId} to this Users favoriteEvents property`);
        this.favoritingEventSub = this.events.favoriteThisEvent(this.id)
            .subscribe(events => {
            let updatedEvents = [...Object.values(events['favoriteEvents']), this.eventId];
            this.events.favoriteEvents$.next(updatedEvents);
            console.log(this.events.favoriteEvents$.getValue());
            // this.events.getfavoriteEvents(this.id).subscribe(
            //   favoriteEvents => {
            //     console.log(favoriteEvents);
            //   }
            // );
        });
    }
    unFavoritingEvent() {
        this.going = false;
        this.presentNotGoingToast();
        console.log(`Removing ${this.eventId} from this Users favoriteEvents property`);
        ;
        this.unFavoritingEventSub = this.events.unFavoriteThisEvent(this.id).subscribe(events => {
            const favoriteEvents = this.events.favoriteEvents$.getValue();
            for (let i = 0; i < favoriteEvents.length; i++) {
                if (favoriteEvents[i] === this.eventId) {
                    favoriteEvents.splice(i, 1);
                }
            }
            console.log(favoriteEvents);
            this.events.favoriteEvents$.next(favoriteEvents);
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
        template: _events_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_events_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute) === "function" ? _a : Object, typeof (_b = typeof _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService !== "undefined" && _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService) === "function" ? _b : Object, typeof (_c = typeof _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService !== "undefined" && _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService) === "function" ? _c : Object, typeof (_d = typeof _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router) === "function" ? _d : Object, typeof (_e = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController) === "function" ? _e : Object, typeof (_f = typeof src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService !== "undefined" && src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService) === "function" ? _f : Object, typeof (_g = typeof _angular_common__WEBPACK_IMPORTED_MODULE_8__.PlatformLocation !== "undefined" && _angular_common__WEBPACK_IMPORTED_MODULE_8__.PlatformLocation) === "function" ? _g : Object])
], EventsPagePage);



/***/ }),

/***/ 7628:
/*!***************************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  background: none;\n  --box-shadow: none;\n}\n\nion-header {\n  background: none;\n  --box-shadow: none;\n}\n\nh3 {\n  font-weight: 800;\n  line-height: 1em;\n  width: 150px;\n  color: #0055a5;\n  font-size: 1.4em;\n}\n\np {\n  font-size: 1.1em;\n  color: #333;\n  margin-bottom: 16px;\n  white-space: pre-wrap;\n}\n\n.going-link:link {\n  color: rgba(72, 123, 109, 0.568627451);\n  text-decoration: none;\n  font-style: 1.2em;\n  font-weight: 600;\n}\n\n.going-link:visited {\n  color: #487b6d;\n}\n\n.not-going-link:link {\n  color: #faa71b;\n  font-size: 1.2em;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.not-going-link:visited {\n  color: #faa71b;\n}\n\n.header {\n  background-color: #edf3f8;\n  padding: 0;\n  height: auto;\n}\n\n.event-image {\n  width: 100%;\n  height: 50vh;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n@media screen and (min-width: 900px) {\n  .event-image {\n    margin: 3em auto;\n  }\n}\n\n.details {\n  height: auto;\n  background: white;\n  padding: 2em;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n}\n\n.details #event-title {\n  color: #ca7200;\n  width: 100%;\n  margin-bottom: 2em;\n  padding-bottom: 0.3em;\n  border-bottom: 1px solid rgba(153, 153, 153, 0.3490196078);\n}\n\n.details p {\n  font-weight: 600;\n  margin: 0 0 2em 0;\n}\n\n.going-text {\n  font-weight: 600;\n  font-size: 1.1em;\n  color: #345e85;\n  background: rgba(217, 217, 217, 0.4588235294);\n  padding: 0.8em;\n  border-radius: 5px;\n  width: 80%;\n  margin: 26px auto;\n}\n\n.going {\n  background: #edf3f8;\n  padding: 80px 0px;\n  color: white;\n}\n\n.not-going {\n  background: #edf3f8;\n  padding: 80px 0px;\n  color: white;\n}\n\n.going-button {\n  width: 200px;\n  font-size: 1.2em;\n  font-weight: 800;\n  --background: #1baf88;\n  --background-hover: #1baf88;\n  --color: white;\n}\n\n.not-going-button {\n  width: 200px;\n  font-size: 1.2em;\n  --background: #faa71b;\n  --background-hover: #faa71b;\n  --color: white;\n}\n\nion-buttons > ion-button {\n  --padding: ;\n  color: white;\n  height: 45px;\n  border-radius: 5px;\n  font-size: 0.9em;\n  text-transform: none;\n}\n\n@keyframes slide-up {\n  0% {\n    width: 0px;\n    transform: translateY(20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsZ0JBQUE7RUFBRjtBQUNGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0FBRkY7O0FBSUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwREFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUhKOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQVRGOztBQVlBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFURjs7QUFZQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBVkY7O0FBYUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLFVBQUE7RUFWRjtFQWFBO0lBQ0UseUJBQUE7SUFDQSxVQUFBO0VBWEY7QUFDRiIsImZpbGUiOiJldmVudHMtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB3aWR0aDogMTUwcHg7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLmdvaW5nLWxpbms6bGluayB7XG4gIGNvbG9yOiAjNDg3YjZkOTE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zdHlsZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5nb2luZy1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogIzQ4N2I2ZDtcbn1cblxuLm5vdC1nb2luZy1saW5rOmxpbmsge1xuICBjb2xvcjogI2ZhYTcxYjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubm90LWdvaW5nLWxpbms6dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmFhNzFiO1xufVxuXG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmM2Y4O1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ldmVudC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuZXZlbnQtaW1hZ2Uge1xuICAgIG1hcmdpbjogM2VtIGF1dG87XG4gIH1cbn1cblxuLy9FdmVudCBEZXRhaWxzIEVsZW1lbnRzXG4uZGV0YWlscyB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDJlbTtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMjZweCByZ2JhKDAsMCwwLDAuMDUpO1xuXG4gICNldmVudC10aXRsZSB7XG4gICAgY29sb3I6ICNjYTcyMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTk5OTU5OyBcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG5cbiAgfVxuICBoMyB7XG5cbiAgfVxufVxuXG4uZ29pbmctdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiAjMzQ1ZTg1O1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5NzU7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMjZweCBhdXRvO1xufVxuXG4uZ29pbmcge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICBwYWRkaW5nOiA4MHB4IDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubm90LWdvaW5nIHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgcGFkZGluZzogODBweCAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdvaW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMxYmFmODg7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubm90LWdvaW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmYWE3MWI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5cbmlvbi1idXR0b25zID4gaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZzogO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 87023:
/*!***************************************************************************!*\
  !*** ./src/app/pages/events/events-page/events-page.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{eventTitle}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n\n        <!-- Picture Header Mobile -->\n        <ion-row class=\"ion-hide-sm-up ion-justify-content-center event-image\">\n          <ion-col \n            size-xs=\"11\" size-sm=\"10\"\n            class=\"event-image\" \n            style=\"background-image: url({{eventPhoto}});\">\n          </ion-col>\n        </ion-row>\n\n        <!-- Picture Header Desktop -->\n        <ion-row class=\"ion-hide-sm-down ion-justify-content-center\">\n          <ion-col size-md=\"10\" size-lg=\"6\" size-xl=\"6\" \n            class=\"event-image\" \n            style=\"background-image: url({{eventPhoto}});\">\n          </ion-col>\n        </ion-row>\n\n        <!-- Event Details -->\n        <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n          <ion-col class=\"details\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"4\">\n            <h1 id=\"event-title\">{{ eventTitle }}</h1>\n            <h3>Address </h3>\n            <p>{{ eventAddressOne }} {{ eventAddressTwo }}, {{ eventCity }}, {{ eventState }}, {{ eventZip}}</p>\n            <h3>Date</h3>\n            <p>{{ eventDate }}</p>\n            <h3>Time</h3>\n            <p>{{ eventTime }}</p>\n            <h3>Description</h3>\n            <p>{{ eventDescription }}</p>\n        </ion-col>\n        </ion-row>\n\n        <!-- Going or Not Going sections? -->\n\n        <!-- GOING? -->\n        <ion-row *ngIf=\"!going\" class=\"going ion-justify-content-center\">\n            <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"5\">\n              <div>\n                <img height=\"70\" src=\"../../../../assets/icon/jobs-favorites-heart-grey-outline.svg\" alt=\"Favorite Icon\">\n              </div>\n              <p class=\"going-text\">Favorite this Event?</p>\n              <ion-button class=\"going-button\" (click)=\"goingToEvent()\">\n                   Yes.\n                </ion-button><br><br>\n              <a class=\"going-link\" routerLink=\"/home/events\" (click)=\"callEventEmitter()\">Go back to Events Page</a><br><br>\n               <a class=\"going-link\" routerLink=\"/home/events/going\">View Favorites</a>\n                 </ion-col>\n        </ion-row>\n\n        <!-- NOT GOING -->\n        <ion-row *ngIf=\"going\" class=\"going ion-justify-content-center\">\n              <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"6\" size-xl=\"5\">\n                <div>\n                  <img height=\"70\" src=\"../../../../assets/icon/jobs-favorites-heart-red.svg\" alt=\"Favorite Icon\">\n                </div>\n                <p class=\"going-text\">Un-favorite this Event?</p>\n                <ion-button class=\"not-going-button\" (click)=\"notGoingToEvent()\">\n                 No.\n                </ion-button><br><br>\n                <a class=\"not-going-link\" routerLink=\"/home/events\" (click)=\"callEventEmitter()\">\n                  \n                  Go back to Events Page</a><br><br>\n                <a class=\"not-going-link\" routerLink=\"/home/events/going\">View Favorites</a>\n               </ion-col>\n      </ion-row>\n      <div style=\"padding-bottom: 4em\"></div>\n\n      </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_events_events-page_events-page_module_ts.js.map