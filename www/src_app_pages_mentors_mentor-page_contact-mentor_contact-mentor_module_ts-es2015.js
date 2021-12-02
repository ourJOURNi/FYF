"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_mentors_mentor-page_contact-mentor_contact-mentor_module_ts"],{

/***/ 55743:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor-routing.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactMentorPageRoutingModule": function() { return /* binding */ ContactMentorPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _contact_mentor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-mentor.page */ 22246);




const routes = [
    {
        path: '',
        component: _contact_mentor_page__WEBPACK_IMPORTED_MODULE_0__.ContactMentorPage
    },
    {
        path: 'confirm/:name/:email/:phone',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mentors_mentor-page_contact-mentor_confirm_confirm_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./confirm/confirm.module */ 75943)).then(m => m.ConfirmPageModule)
    }
];
let ContactMentorPageRoutingModule = class ContactMentorPageRoutingModule {
};
ContactMentorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactMentorPageRoutingModule);



/***/ }),

/***/ 20918:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactMentorPageModule": function() { return /* binding */ ContactMentorPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _contact_mentor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-mentor-routing.module */ 55743);
/* harmony import */ var _contact_mentor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-mentor.page */ 22246);







let ContactMentorPageModule = class ContactMentorPageModule {
};
ContactMentorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contact_mentor_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactMentorPageRoutingModule
        ],
        declarations: [_contact_mentor_page__WEBPACK_IMPORTED_MODULE_1__.ContactMentorPage]
    })
], ContactMentorPageModule);



/***/ }),

/***/ 22246:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactMentorPage": function() { return /* binding */ ContactMentorPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_mentor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact-mentor.page.html */ 97202);
/* harmony import */ var _contact_mentor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-mentor.page.scss */ 5082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/profile.service */ 39181);
/* harmony import */ var _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/mentor.service */ 58600);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);









let ContactMentorPage = class ContactMentorPage {
    constructor(profile, mentors, activatedRoute, formBuilder, router, location) {
        this.profile = profile;
        this.mentors = mentors;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.location = location;
    }
    ngOnInit() {
        this.contactMenorForm = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        console.log(`Valid: ${this.contactMenorForm.valid}`);
        this.contactMenorForm.get("message").valueChanges.subscribe(msg => {
            console.log(`Subscribed message: ${msg}`);
            setTimeout(() => {
                if (this.contactMenorForm.valid) {
                    this.messageValid = true;
                }
                else {
                    this.messageValid = false;
                }
                console.log(`Valid: ${this.contactMenorForm.valid}`);
            }, 100);
        });
        this.message = this.contactMenorForm.value.message;
        // tslint:disable-next-line: radix
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        // tslint:disable-next-line: radix
        const email = this.activatedRoute.snapshot.paramMap.get('email');
        // tslint:disable-next-line: radix
        const name = this.activatedRoute.snapshot.paramMap.get('name');
        // tslint:disable-next-line: radix
        const photo = this.activatedRoute.snapshot.paramMap.get('photo');
        this.mentorId = id;
        this.mentorName = name;
        this.mentorEmail = email;
        this.mentorPhoto = photo;
        // Get User details
        this.userDetails();
    }
    confirm(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.sendMessage(value);
            // tslint:disable-next-line: max-line-length
            yield this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor/:name/:email/:photo/confirm', this.mentorName, this.mentorEmail, this.mentorPhoto]);
        });
    }
    userDetails() {
        this.profile.getUserDetails().subscribe(details => {
            this.userEmail = details['email'];
            this.userName = details['fullName'];
            this.userCity = details['city'];
            this.userState = details['state'];
            this.userAge = details['age'];
            this.userGrade = details['grade'];
            this.userSchool = details['school'];
            this.userProfilePicture = details['profilePicture'];
            this.userResume = details['resume'];
        });
    }
    sendMessage(value) {
        this.mentors.sendMentorAnEmail(value, this.mentorName, this.mentorEmail, this.userEmail, this.userName, this.userCity, this.userState, this.userAge, this.userGrade, this.userSchool, this.userProfilePicture, this.userResume).subscribe();
    }
    back() {
        this.location.back();
    }
};
ContactMentorPage.ctorParameters = () => [
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__.MentorsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location }
];
ContactMentorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-contact-mentor',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_mentor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_mentor_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService,
        _services_mentor_service__WEBPACK_IMPORTED_MODULE_3__.MentorsService,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location])
], ContactMentorPage);



/***/ }),

/***/ 97202:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.html ***!
  \**************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Contact Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"margin-top: 100px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <!-- Mentor Photo -->\n        <div id=\"mentor-photo\"></div>\n        <ion-button class=\"blue-button-small ion-float-right\" (click)=\"back();\">Back</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Contact Form -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <!-- Form -->\n        <!-- Mentor Photo -->\n        <div class=\"ion-text-center\">\n          <img src=\"{{mentorPhoto}}\" class=\"ion-hide-lg-up\"  id=\"mentor-photo\">\n        </div>\n        <form [formGroup]=\"contactMenorForm\"  (ngSubmit)=\"confirm(this.contactMenorForm.value)\">\n          <ion-textarea\n                class=\"message-input\"\n                formControlName=\"message\"\n                placeholder=\"Have a question for a {{mentorName}}? Send them an email!\"\n                rows=\"10\"\n                autogrow=\"true\"\n                required\n                spellcheck=\"true\"\n                (keydown.control.enter)=\"messageValid ? confirm(this.contactMenorForm.value) : null\"></ion-textarea>\n            <ion-button type=\"submit\" class=\"orange-button\" [disabled]=\"!messageValid\"\n            expand=\"block\">\n                Send\n            </ion-button>\n          </form>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 5082:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/contact-mentor.page.scss ***!
  \***********************************************************************************/
/***/ (function(module) {

module.exports = "ion-content {\n  --background: #f4f5f8;\n}\n\n.blue-button-small {\n  --background: #0055a5;\n  opacity: 1;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n}\n\n.name {\n  display: block;\n  font-size: 1em;\n  color: #999;\n  opacity: 0;\n}\n\n.name:nth-child(1) {\n  -webkit-animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.3s forwards;\n          animation: slide-in-left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.3s forwards;\n}\n\n#mentor-photo {\n  height: 100px;\n  border-radius: 100px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  display: inline-block;\n  opacity: 1;\n  margin: 54px auto;\n}\n\n@media screen and (min-width: 992px) {\n  #mentor-photo {\n    border-radius: 100px;\n    width: 100px;\n    height: 100px;\n    position: relative;\n    top: -38px;\n  }\n}\n\n.message-input {\n  padding: 0 8px;\n  border-radius: 5px;\n  font-size: 1.2em;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n}\n\n.orange-button {\n  margin-top: 40px;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n@-webkit-keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbWVudG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFHSjs7QUFDQTtFQUNJLHlGQUFBO1VBQUEsaUZBQUE7QUFFSjs7QUFDQTtFQUVJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUFDTjtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtBQUNGOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFJQTtFQUNJLHVCQUFBO1VBQUEsZUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0ksNEJBQUE7RUFETjtFQUdFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBRE47QUFDRjs7QUFOQTtFQUNJO0lBQ0ksNEJBQUE7RUFETjtFQUdFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNBO0lBQ0ksNEJBQUE7RUFGRjtFQUlGO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBRkY7QUFDRjs7QUFMQTtFQUNBO0lBQ0ksNEJBQUE7RUFGRjtFQUlGO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJjb250YWN0LW1lbnRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuLmJsdWUtYnV0dG9uLXNtYWxsIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5uYW1lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4vLyA6bnRoLWNoaWxkKDIpIG5vdCB3b3JraW5nXG4ubmFtZTpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMS4zcyBmb3J3YXJkcztcbn1cblxuI21lbnRvci1waG90byB7XG4gICAgLy8gd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1hcmdpbjogNTRweCBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICNtZW50b3ItcGhvdG8ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTM4cHg7XG4gICAgfVxufVxuLm1lc3NhZ2UtaW5wdXQge1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcblxufVxuXG4ub3JhbmdlLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAvLyBhbmltYXRpb246IHNsaWRlLWluLXVwIDAuMXMgY3ViaWMtYmV6aWVyKC4xNSwgLjg1LCAuNzUsIC45KSAxLjlzIGZvcndhcmRzO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiB1bnNldDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAge1xuMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG59XG4xMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xufVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mentors_mentor-page_contact-mentor_contact-mentor_module_ts-es2015.js.map