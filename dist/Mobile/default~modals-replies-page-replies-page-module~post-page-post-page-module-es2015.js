(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modals-replies-page-replies-page-module~post-page-post-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/replies-page/replies-page.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/replies-page/replies-page.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-title slot=\"start\">Replies</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Replies</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- commentUser Info -->\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"11\">\n      <ion-item lines=\"none\">\n        <ion-avatar class=\"comment-avatar\" slot=\"start\">\n          <img src=\"{{commentUserProfilePicture}}\">\n        </ion-avatar>\n        <ion-label>\n          <h6 style=\"opacity: 0.5\">{{ commentUserFullName  }} - {{ commentDate }} </h6>\n          </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <!-- Comment -->\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"11\">\n      <p>{{ commentContents}}</p>\n    </ion-col>\n  </ion-row>\n\n  <!-- Reply Input -->\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"11\">\n    <form [formGroup]=\"repliesForm\" (ngSubmit)=\"this.repliesForm.value.reply.length > 0 ? reply(this.repliesForm.value) && ScrollToReply() : null\">\n      <ion-textarea\n      (ionFocus)=\"ScrollToTop()\"\n      (ionBlur)=\"onBlur()\"\n      (onfocusout)=\"blur()\"\n      (keydown.control.enter)=\"this.repliesForm.value.reply.length > 0 ? reply(this.repliesForm.value) && ScrollToReply() : null\"\n      class=\"reply-input\"\n      autogrow=\"true\"\n      autocapitalize=\"true\"\n      rows=\"5\"\n      spellcheck=\"true\"\n      wrap=\"soft\"\n      type=\"text\"\n      placeholder=\"Reply to this comment\" formControlName=\"reply\">\n      </ion-textarea>\n      <ion-button type=\"submit\" expand=\"block\">\n        Reply\n      </ion-button>\n    </form>\n    </ion-col>\n  </ion-row>\n\n  <!-- Line-->\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"11\">\n      <hr style=\"background-color: #999; opacity: 0.4; margin: 20px 0 20px 0;\">\n    </ion-col>\n  </ion-row>\n\n  <!-- Replies -->\n  <ion-row *ngFor=\"let reply of replies\" class=\"ion-justify-content-center ion-align-items-start reply-wrapper\">\n    <ion-col size=\"1\">\n      <img id=\"reply-avatar\" src=\"{{reply.userProfilePicture}}\">\n    </ion-col>\n    <ion-col size=\"5\">\n      <p class=\"reply-name\">{{reply.userFullName}}</p>\n      <p class=\"reply-text\">{{reply.reply}}</p>\n    </ion-col>\n    <ion-col size=\"1.5\">\n       <p id=\"reply-date\">{{reply.date}}</p>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button class=\"blue-button\" *ngIf=\"reply.isEditable\" (click)=\"deleteReply(reply._id)\" expand=\"block\">\n        Delete\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modals/replies-page/replies-page-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modals/replies-page/replies-page-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: RepliesPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepliesPagePageRoutingModule", function() { return RepliesPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _replies_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replies-page.page */ "./src/app/modals/replies-page/replies-page.page.ts");




const routes = [
    {
        path: '',
        component: _replies_page_page__WEBPACK_IMPORTED_MODULE_3__["RepliesPagePage"]
    }
];
let RepliesPagePageRoutingModule = class RepliesPagePageRoutingModule {
};
RepliesPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RepliesPagePageRoutingModule);



/***/ }),

/***/ "./src/app/modals/replies-page/replies-page.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modals/replies-page/replies-page.module.ts ***!
  \************************************************************/
/*! exports provided: RepliesPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepliesPagePageModule", function() { return RepliesPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _replies_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./replies-page-routing.module */ "./src/app/modals/replies-page/replies-page-routing.module.ts");
/* harmony import */ var _replies_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./replies-page.page */ "./src/app/modals/replies-page/replies-page.page.ts");







let RepliesPagePageModule = class RepliesPagePageModule {
};
RepliesPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _replies_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["RepliesPagePageRoutingModule"]
        ],
        declarations: [_replies_page_page__WEBPACK_IMPORTED_MODULE_6__["RepliesPagePage"]]
    })
], RepliesPagePageModule);



/***/ }),

/***/ "./src/app/modals/replies-page/replies-page.page.scss":
/*!************************************************************!*\
  !*** ./src/app/modals/replies-page/replies-page.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reply-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 20px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: linear;\n}\n\n.reply-input:hover {\n  background: rgba(250, 167, 27, 0.02);\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-button[type=submit] {\n  --color: white;\n  --background: linear-gradient(#24d8a8, #1baf88) ;\n}\n\n.blue-button {\n  width: unset;\n  height: 36px;\n  font-size: 0.85em;\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n.reply-wrapper {\n  padding: 10px;\n}\n\n#reply-avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n  position: relative;\n  right: 15px;\n}\n\n.reply-name {\n  font-weight: bold;\n  margin: 0.5em 0 0.5em;\n}\n\n#reply-date {\n  font-size: 0.7em;\n  color: #999;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvbW9kYWxzL3JlcGxpZXMtcGFnZS9yZXBsaWVzLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvcmVwbGllcy1wYWdlL3JlcGxpZXMtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0RBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL3JlcGxpZXMtcGFnZS9yZXBsaWVzLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcGx5LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbi5yZXBseS1pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAxNjcsIDI3LCAwLjAyKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuaW9uLWJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OClcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgd2lkdGg6IHVuc2V0O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IHVuc2V0O1xufVxuXG4ucmVwbHktd3JhcHBlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNyZXBseS1hdmF0YXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG4ucmVwbHktbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAuNWVtIDAgMC41ZW07XG59XG5cbiNyZXBseS1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgY29sb3I6ICM5OTk7XG59XG5cbiNiYWNrLWFycm93LWljb25zIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDhweDtcbn0iLCIucmVwbHktaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbi5yZXBseS1pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAxNjcsIDI3LCAwLjAyKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuaW9uLWJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzI0ZDhhOCwgIzFiYWY4OCkgO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG4gIGhlaWdodDogMzZweDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogdW5zZXQ7XG59XG5cbi5yZXBseS13cmFwcGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3JlcGx5LWF2YXRhciB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5yZXBseS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMC41ZW0gMCAwLjVlbTtcbn1cblxuI3JlcGx5LWRhdGUge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modals/replies-page/replies-page.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/modals/replies-page/replies-page.page.ts ***!
  \**********************************************************/
/*! exports provided: RepliesPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepliesPagePage", function() { return RepliesPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "./src/app/emitters/post-page-emitter.service.ts");
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/notifications.service */ "./src/app/services/notifications.service.ts");










let RepliesPagePage = class RepliesPagePage {
    constructor(formBuilder, modal, navParams, loading, profile, posts, alert, postEmitterService, notificationsService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.navParams = navParams;
        this.loading = loading;
        this.profile = profile;
        this.posts = posts;
        this.alert = alert;
        this.postEmitterService = postEmitterService;
        this.notificationsService = notificationsService;
        this.replies$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        this.tabBar = document.getElementById('myTabBar');
        this.votes = document.getElementById('votes');
    }
    ngOnInit() {
        this.profile.getUserDetails().subscribe(details => {
            this.commentUserProfilePicture = details['profilePicture'];
        });
        // To collect comment data
        this.repliesForm = this.formBuilder.group({
            reply: ['']
        });
        this.replies$.next(this.navParams.get('replies').reverse());
        this.replies$.subscribe(data => {
            this.replies = data;
            for (let reply of this.replies) {
                reply.isEditable = false;
                console.log('Reply: ', reply);
                if (reply.userEmail == this.userEmail) {
                    reply.isEditable = true;
                }
            }
        });
        this.postID = this.navParams.get('postID');
        this.commentContents = this.navParams.get('comment');
        this.commentID = this.navParams.get('commentID');
        this.commentUserFullName = this.navParams.get('commentUserFullName');
        this.commentUserEmail = this.navParams.get('commentUserEmail');
        this.commentDate = this.navParams.get('commentDate');
        this.userFullName = this.navParams.get('userFullName');
        this.userEmail = this.navParams.get('userEmail');
        this.commentUserProfilePicture = this.navParams.get('userProfilePicture');
    }
    cancel() {
        console.log('cancelling comment...');
        this.modal.dismiss();
    }
    refreshRepliesAmount() {
        this.postEmitterService.postPageRefresh();
    }
    reply(reply) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Reset Comment Input
            yield this.repliesForm.reset();
            yield console.log('replying to comment...');
            // tslint:disable-next-line: max-line-length
            yield this.posts.replyComment(this.commentID, this.postID, reply.reply, this.userFullName, this.userEmail, this.commentUserProfilePicture, this.commentUserFullName, this.commentUserEmail)
                .subscribe(data => {
                let currentComment;
                let currentCommentReplies = [];
                for (const comment of data['comments']) {
                    if (comment._id == data['comment']) {
                        currentComment = comment;
                        for (let i = 0; i < comment.replies.length; i++) {
                            currentCommentReplies.push(comment.replies[i]);
                        }
                    }
                }
                let comments = data['comments'];
                let userEmail = data['userEmail'];
                let replies = data['replies'];
                // Give User ability to Edit, Delete, or Report a Comment.
                // User cannot Report their own comment **
                for (const comment of comments) {
                    // If the Logged in User's Email equals the creatorEmail of the Comment,
                    // they will be given the ability to edit and delete their Comment.
                    // The ability for them to report their own comment is disabled
                    comment.repliesLength = comment.replies.length;
                    comment.isUser = false;
                    comment.canDeleteComment = false;
                    comment.canReport = true;
                    comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(comment.date), {
                        includeSeconds: false,
                        addSuffix: false
                    });
                    // If this comment is the logged in user, they can delete and edit
                    if (comment.userEmail === userEmail) {
                        comment.isUser = true;
                        comment.canDeleteComment = true;
                        comment.canReport = false;
                    }
                    // Format the Reply Dates
                    for (let i = 0; comment.replies.length > i; i++) {
                        comment.replies[i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(comment.replies[i].date), {
                            addSuffix: false
                        });
                        replies.push(comment.replies[i]);
                    }
                }
                this.replies = currentCommentReplies;
                this.posts.commentsSubject$.next(comments.reverse());
                this.replies$.next(this.replies.reverse());
                console.log('From replyComment');
                console.log(data);
                // tslint:disable-next-line: max-line-length
                this.notificationsService.replyNotification(this.userEmail, this.commentUserEmail, this.postID, currentComment, data['newReply']).subscribe();
            });
            yield this.repliesLoading();
        });
    }
    deleteReply(replyID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Deleting reply with id ', replyID);
            yield this.posts.deleteReply(replyID, this.commentID, this.postID).subscribe(data => {
                console.log(data);
                let currentComment;
                let currentCommentReplies = [];
                let comments = data['comments'];
                let userEmail = data['userEmail'];
                let replies = data['replies'];
                for (const comment of comments) {
                    if (comment._id == data['comment']) {
                        currentComment = comment;
                        for (let i = 0; i < comment.replies.length; i++) {
                            currentCommentReplies.push(comment.replies[i]);
                        }
                    }
                }
                for (const comment of comments) {
                    comment.repliesLength = comment.replies.length;
                    comment.isUser = false;
                    comment.canDeleteComment = false;
                    comment.canReport = true;
                    comment.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(comment.date), {
                        includeSeconds: false,
                        addSuffix: false
                    });
                    // If the comment was posted by the current user, it becomes editable
                    if (comment.userEmail == userEmail) {
                        comment.isUser = true;
                        comment.canDeleteComment = true;
                        comment.canReport = false;
                    }
                    // Format the Reply Dates
                    for (let i = 0; comment.replies.length > i; i++) {
                        comment.replies[i].date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(comment.replies[i].date), {
                            addSuffix: false
                        });
                        replies.push(comment.replies[i]);
                    }
                }
                this.replies = currentCommentReplies;
                this.posts.commentsSubject$.next(comments.reverse());
                this.replies$.next(this.replies.reverse());
            });
        });
    }
    repliesLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Replying to Comment...',
                duration: 2000
            });
            yield this.refreshRepliesAmount();
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            // await this.modal.dismiss();
            // await this.confirmAlert();
            console.log('Loading dismissed!');
        });
    }
    confirmAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'success-alert',
                message: 'Your comment has been edited.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    // Hide the Tab bar when the user is attempting to make a comment
    ScrollToTop() {
        this.content.scrollToPoint(0, 140, 100);
        this.tabBar.style.height = '0px';
        this.votes.style.height = '0px';
    }
    // When the user submits the comment, the tabar will show up again
    ScrollToReply() {
        this.content.scrollToPoint(0, 300, 100);
        this.textarea.getInputElement()
            .then((textarea) => {
            textarea.blur();
        });
    }
    onBlur() {
        this.textarea.getInputElement()
            .then((textarea) => {
            this.tabBar.style.height = '70px';
            this.votes.style.height = '70px';
        });
    }
    // for when the user un focuses out of the comment textarea but hasnt submitted the comment
    blur() {
        this.textarea.getInputElement()
            .then((textarea) => {
            textarea.blur();
            this.tabBar.style.height = '70px';
            this.votes.style.height = '70px';
        });
    }
};
RepliesPagePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"] },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], RepliesPagePage.prototype, "content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"])
], RepliesPagePage.prototype, "textarea", void 0);
RepliesPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-replies-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./replies-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/replies-page/replies-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./replies-page.page.scss */ "./src/app/modals/replies-page/replies-page.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"],
        src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]])
], RepliesPagePage);



/***/ })

}]);
//# sourceMappingURL=default~modals-replies-page-replies-page-module~post-page-post-page-module-es2015.js.map