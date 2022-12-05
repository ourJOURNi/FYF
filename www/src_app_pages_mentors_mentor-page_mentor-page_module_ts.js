"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mentors_mentor-page_mentor-page_module_ts"],{

/***/ 11216:
/*!*************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorPagePageRoutingModule": () => (/* binding */ MentorPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mentor_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mentor-page.page */ 98186);




const routes = [
    {
        path: '',
        component: _mentor_page_page__WEBPACK_IMPORTED_MODULE_0__.MentorPagePage
    },
    {
        path: 'contact-mentor/:name/:email/:photo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mentors_mentor-page_contact-mentor_contact-mentor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact-mentor/contact-mentor.module */ 20918)).then(m => m.ContactMentorPageModule)
    }
];
let MentorPagePageRoutingModule = class MentorPagePageRoutingModule {
};
MentorPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MentorPagePageRoutingModule);



/***/ }),

/***/ 77156:
/*!*****************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorPagePageModule": () => (/* binding */ MentorPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mentor-page-routing.module */ 11216);
/* harmony import */ var _mentor_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentor-page.page */ 98186);







let MentorPagePageModule = class MentorPagePageModule {
};
MentorPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MentorPagePageRoutingModule
        ],
        declarations: [_mentor_page_page__WEBPACK_IMPORTED_MODULE_1__.MentorPagePage]
    })
], MentorPagePageModule);



/***/ }),

/***/ 98186:
/*!***************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorPagePage": () => (/* binding */ MentorPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mentor_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mentor-page.page.html?ngResource */ 70646);
/* harmony import */ var _mentor_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentor-page.page.scss?ngResource */ 66707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 34362);
var _a, _b, _c;






let MentorPagePage = class MentorPagePage {
    constructor(activatedRoute, router, toastController) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
    }
    ngOnInit() {
        // tslint:disable-next-line: radix
        const title = this.activatedRoute.snapshot.paramMap.get('title');
        // tslint:disable-next-line: radix
        const name = this.activatedRoute.snapshot.paramMap.get('name');
        // tslint:disable-next-line: radix
        const email = this.activatedRoute.snapshot.paramMap.get('email');
        // tslint:disable-next-line: radix
        const description = this.activatedRoute.snapshot.paramMap.get('description');
        // tslint:disable-next-line: radix
        const photo = this.activatedRoute.snapshot.paramMap.get('photo');
        // tslint:disable-next-line: radix
        const city = this.activatedRoute.snapshot.paramMap.get('city');
        // tslint:disable-next-line: radix
        const state = this.activatedRoute.snapshot.paramMap.get('state');
        this.mentorName = name;
        this.mentorTitle = title;
        this.mentorEmail = email;
        this.mentorDescription = description;
        this.mentorPhoto = photo;
        this.mentorCity = city;
        this.mentorState = state;
    }
    back() {
        this.router.navigate(['/home/mentors']);
    }
    contactMentor() {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor', this.mentorName, this.mentorEmail, this.mentorPhoto]);
    }
};
MentorPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
MentorPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mentor-page',
        template: _mentor_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mentor_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController) === "function" ? _c : Object])
], MentorPagePage);



/***/ }),

/***/ 66707:
/*!****************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #0055a5;\n}\n\nion-back-button {\n  color: white;\n  width: auto;\n}\n\n.blue-button-small {\n  --background: #0055a5;\n  opacity: 1;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  position: relative;\n  top: 100px;\n  z-index: 9999;\n}\n\n.toolbar-contact-button {\n  width: 90px;\n  font-weight: 600;\n  --background: #faa71b;\n  position: relative;\n  right: 8px;\n}\n\n.orange-button {\n  margin: 120px auto;\n}\n\n.message-mobile {\n  font-size: 1em;\n  background: white;\n  padding: 8px;\n  border-left: 5px solid #0055a5;\n}\n\n#mentor-card {\n  background: #fff;\n  padding: 0.8em;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px #c6c6c6;\n}\n\n#mentor-profile-picture {\n  margin: 1em 0;\n  height: 100px;\n  width: 100px;\n  opacity: 0;\n  animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;\n}\n\n#mentor-name {\n  font-size: 2em;\n  font-weight: 900;\n  opacity: 1;\n  margin: 0.2em 0;\n}\n\n#mentor-title {\n  font-size: 1em;\n  font-weight: 600;\n  color: #0055a5;\n  opacity: 1;\n  margin: 0.2em 0;\n}\n\n#mentor-location {\n  font-size: 1em;\n  font-weight: 600;\n  color: #0055a5;\n  opacity: 1;\n  margin: 0.2em 0;\n}\n\n#mentor-email {\n  font-size: 1em;\n  color: #999;\n  opacity: 1;\n}\n\n#mentor-description {\n  font-size: 1.1em;\n  color: #222;\n  line-height: 1.7em;\n  opacity: 1;\n}\n\n#contact-button {\n  margin: 50px 0 250px 0;\n  --background: linear-gradient(#0672c4, #005191);\n  --background-hover: linear-gradient(#0672c4, #222);\n  --transition: 0.5s;\n  font-weight: 800;\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvci1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSwrRUFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFRSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBU0o7O0FBTkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFTSjs7QUFOQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVNKOztBQU5BO0VBQ0ksc0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVNKOztBQU5BO0VBQ0k7SUFDSSw0QkFBQTtFQVNOO0VBUEU7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFTTjtBQUNGOztBQU5BO0VBQ0k7SUFDSSw0QkFBQTtFQVFOO0VBTkU7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFRTjtBQUNGIiwiZmlsZSI6Im1lbnRvci1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIH1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbi5ibHVlLWJ1dHRvbi1zbWFsbCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbn1cbi50b29sYmFyLWNvbnRhY3QtYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDhweDtcbiAgfVxuLm9yYW5nZS1idXR0b257XG4gICAgbWFyZ2luOiAxMjBweCBhdXRvO1xufVxuLm1lc3NhZ2UtbW9iaWxlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA1NWE1O1xufVxuI21lbnRvci1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggI2M2YzZjNjtcbn1cbiNtZW50b3ItcHJvZmlsZS1waWN0dXJle1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDFzIGZvcndhcmRzO1xufVxuI21lbnRvci1uYW1lIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWFyZ2luOiAwLjJlbSAwO1xufVxuXG4jbWVudG9yLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWFyZ2luOiAwLjJlbSAwO1xufVxuI21lbnRvci1sb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1hcmdpbjogMC4yZW0gMDtcbn1cblxuI21lbnRvci1lbWFpbCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICM5OTk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuI21lbnRvci1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XG4gICAgb3BhY2l0eTogMTtcbn1cblxuI2NvbnRhY3QtYnV0dG9uIHtcbiAgICBtYXJnaW46IDUwcHggMCAyNTBweCAwO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMyMjIpO1xuICAgIC0tdHJhbnNpdGlvbjogMC41cztcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi11cCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 70646:
/*!****************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/mentor-page.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <img height=\"30\" id=\"mobile-toolbar-icon\" src=\"../../../../assets/logos/White-FYF-LOGO.svg\" alt=\"White FYF Logo\">\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button style=\"--width: 50px;\" class=\"toolbar-contact-button\" (click)=\"contactMentor()\">\n        Contact\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-md-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <ion-button class=\"blue-button-small ion-float-right\" (click)=\"back()\">\n          Back\n       </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mentors -->\n    <ion-row class=\"mentor ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <p class=\"ion-hide-md-up message-mobile\">Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!</p>\n        <div id=\"mentor-card\">\n          <img src=\"{{this.mentorPhoto}}\" id=\"mentor-profile-picture\"/>\n          <p id=\"mentor-name\">{{mentorName}}</p>\n          <p id=\"mentor-title\">{{mentorTitle}}</p>\n          <p id=\"mentor-location\">{{mentorCity}}, {{mentorState}}</p>\n        </div>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <p id=\"mentor-description\">{{mentorDescription}}</p>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <ion-button class=\"orange-button\"  (click)=\"contactMentor()\">\n          Contact\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mentors_mentor-page_mentor-page_module_ts.js.map