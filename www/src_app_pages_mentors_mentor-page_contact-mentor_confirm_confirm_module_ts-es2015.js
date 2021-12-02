"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_mentors_mentor-page_contact-mentor_confirm_confirm_module_ts"],{

/***/ 94692:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm-routing.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPageRoutingModule": function() { return /* binding */ ConfirmPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm.page */ 40007);




const routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmPage
    }
];
let ConfirmPageRoutingModule = class ConfirmPageRoutingModule {
};
ConfirmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmPageRoutingModule);



/***/ }),

/***/ 75943:
/*!************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPageModule": function() { return /* binding */ ConfirmPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-routing.module */ 94692);
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm.page */ 40007);







let ConfirmPageModule = class ConfirmPageModule {
};
ConfirmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmPageRoutingModule
        ],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmPage]
    })
], ConfirmPageModule);



/***/ }),

/***/ 40007:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.page.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPage": function() { return /* binding */ ConfirmPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./confirm.page.html */ 12005);
/* harmony import */ var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm.page.scss */ 73782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);





let ConfirmPage = class ConfirmPage {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.mentorName = this.activatedRoute.snapshot.paramMap.get('name');
        this.mentorEmail = this.activatedRoute.snapshot.paramMap.get('email');
        this.mentorPhoto = this.activatedRoute.snapshot.paramMap.get('photo');
        console.log('Mentor Photo:');
        console.log(this.mentorName);
        // setTimeout(() => {
        //   this.router.navigate(['/home/mentors']);
        // }, 9000);
    }
    returnToMentors() {
        this.router.navigate(['/home/mentors']);
    }
};
ConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ConfirmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-confirm',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])
], ConfirmPage);



/***/ }),

/***/ 12005:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.page.html ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"display: none;\">\n</ion-header>\n\n<ion-content id=\"background\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center full-page\" style=\"margin: 15% 0% 3% 0%;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\" class=\"ion-text-center\" size=\"10\">\n        <img src=\"../../../../../../assets/icon/Green-Checked.svg\">\n        <p>An email has been sent to <span style=\"font-weight: 800;\">{{mentorName}}</span> with your message. They will contact you at their earliest convenience. Please be sure to check the email you have associated with your FYF Account.</p>\n        <ion-button (click)=\"returnToMentors()\">\n          Done\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 73782:
/*!************************************************************************************!*\
  !*** ./src/app/pages/mentors/mentor-page/contact-mentor/confirm/confirm.page.scss ***!
  \************************************************************************************/
/***/ (function(module) {

module.exports = "#background {\n  opacity: 0;\n  height: 90vh;\n  --background: rgb(239, 255, 239);\n  --transition: 0.5s;\n  -webkit-animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up 0.8s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\n#confirm-text {\n  color: #111;\n  font-size: 1.3em;\n  -webkit-animation: slide-in-up-2 0.2s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n          animation: slide-in-up-2 0.2s cubic-bezier(0.15, 0.85, 0.75, 0.9) 0.3s forwards;\n}\n\nion-button {\n  opacity: 1;\n  font-weight: 600;\n  --background: #4DC066;\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: rgb(220, 255, 220);\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    opacity: 1;\n    --background: rgb(220, 255, 220);\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n\n@keyframes slide-in-up-2 {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-100px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUZBQUE7VUFBQSw2RUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUZBQUE7VUFBQSwrRUFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0ksNEJBQUE7RUFFSjtFQUFBO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0lBQ0EsMEJBQUE7RUFFSjtBQUNGOztBQVZBO0VBQ0U7SUFDSSw0QkFBQTtFQUVKO0VBQUE7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7SUFDQSwwQkFBQTtFQUVKO0FBQ0Y7O0FBQ0U7RUFDRTtJQUNJLDBCQUFBO0VBQ047RUFDRTtJQUNJLFVBQUE7SUFDQSw2QkFBQTtFQUNOO0FBQ0Y7O0FBUkU7RUFDRTtJQUNJLDBCQUFBO0VBQ047RUFDRTtJQUNJLFVBQUE7SUFDQSw2QkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoiY29uZmlybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogOTB2aDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjM5LCAyNTUsIDIzOSk7XG4gIC0tdHJhbnNpdGlvbjogMC41cztcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi11cCAwLjhzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgLjNzIGZvcndhcmRzO1xufVxuXG4jY29uZmlybS10ZXh0IHtcbiAgY29sb3I6ICMxMTE7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdXAtMiAwLjJzIGN1YmljLWJlemllciguMTUsIC44NSwgLjc1LCAuOSkgMC4zcyBmb3J3YXJkcztcbn1cbmlvbi1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJhY2tncm91bmQ6ICM0REMwNjY7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdXAge1xuICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiKDIyMCwgMjU1LCAyMjApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2xpZGUtaW4tdXAtMiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xuICAgIH1cbiAgfVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mentors_mentor-page_contact-mentor_confirm_confirm_module_ts-es2015.js.map