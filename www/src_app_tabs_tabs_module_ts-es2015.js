(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        redirectTo: '/home/jobs',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'jobs',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_formatDistanceToNow_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_jobs_jobs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/jobs/jobs.module */ 98766)).then(m => m.JobsPageModule)
                    }
                ]
            },
            {
                path: 'posts',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_formatDistanceToNow_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_posts_posts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/posts/posts.module */ 31399)).then(m => m.PostPageModule)
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/profile/profile.module */ 88558)).then(m => m.ProfilePageModule)
                    }
                ]
            },
            {
                path: 'events',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_formatDistanceToNow_index_js"), __webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_pages_events_events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/events/events.module */ 95105)).then(m => m.EventsPageModule)
                    }
                ]
            },
            {
                path: 'mentors',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_mentors_mentors_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/mentors/mentors.module */ 53982)).then(m => m.MentorsPageModule)
                    }
                ]
            },
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile.service */ 39181);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);









let TabsPage = class TabsPage {
    constructor(auth, router, alert, location, profile) {
        this.auth = auth;
        this.router = router;
        this.alert = alert;
        this.location = location;
        this.profile = profile;
    }
    ngOnInit() {
        this.getUserInfo();
    }
    getUserInfo() {
        this.infoSub = this.profile.getUserDetails().subscribe(details => {
            // console.log(details);
            this.userProfilePicture = details['profilePicture'];
            console.log(this.userProfilePicture);
        });
    }
    logoutConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Are you sure you want to log out?',
                cssClass: 'danger-alert',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Logout',
                        handler: () => {
                            this.auth.logout();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    toProfile() {
        let tabBarFab = document.getElementById('tab-bar-fab');
        tabBarFab.classList.remove("pro-pic-animation");
        tabBarFab.offsetWidth;
        tabBarFab.classList.add("pro-pic-animation");
        return;
        // this.router.navigateByUrl('/profile');
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location,
        _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService])
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#profile-picture {\n  border-radius: 100px;\n  padding: 2.3em;\n}\n\n@media only screen and (min-width: 993px) {\n  #profile-picture {\n    height: 40px;\n    padding: 0em;\n  }\n}\n\n#logo {\n  height: 44px;\n  position: relative;\n  top: -9px;\n}\n\nion-toolbar {\n  --min-height: 7vh;\n  --background: linear-gradient(30deg, #004785, #0055a5);\n  font-size: 0.9em;\n  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.08);\n}\n\nion-toolbar a {\n  transition: 0.5s;\n  margin: 0 10px 0 10px;\n  text-decoration: none;\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  float: right;\n}\n\nion-toolbar .active-link {\n  color: #fbb606;\n}\n\nion-toolbar ion-button {\n  --color: #D0D4D8;\n  opacity: 0.6;\n  font-weight: 700;\n}\n\nion-grid {\n  height: 50px;\n}\n\nion-tabs ion-fab {\n  margin-bottom: env(safe-area-inset-bottom);\n  /* fix notch ios*/\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: #000000;\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  --background: linear-gradient(30deg, #004785, #0055a5);\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon, ion-tabs ion-tab-bar ion-tab-button ion-label {\n  color: white;\n}\n\nion-tabs ion-tab-bar ion-tab-button.events {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.posts {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\nion-tabs ion-tab-bar svg {\n  width: 72px;\n  margin-top: 19px;\n}\n\nion-tabs ion-tab-bar svg path {\n  fill: #0055a5;\n}\n\nion-tabs .pro-pic-animation {\n  -webkit-animation: profile-picture-up 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: profile-picture-up 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n@-webkit-keyframes profile-picture-up {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes profile-picture-up {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBQUY7QUFDRjs7QUFHRTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBREo7O0FBR0k7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDSCxnQkFBQTtFQUNHLFlBQUE7QUFETjs7QUFJSTtFQUNFLGNBQUE7QUFGTjs7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSE47O0FBT0U7RUFDRSxZQUFBO0FBSko7O0FBT0M7RUFDQywwQ0FBQTtFQUE0QyxpQkFBQTtBQUg5Qzs7QUFRQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFBUSxRQUFBO0VBQ1IsV0FBQTtBQUxGOztBQU1FO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBSkg7O0FBTUU7RUFDQyxzREFBQTtBQUpIOztBQU1HO0VBQ0MsWUFBQTtBQUpKOztBQU9FO0VBQ0MsaUJBQUE7RUFDQSw2QkFBQTtBQUxIOztBQU9FO0VBQ0MsZ0JBQUE7RUFDQSw0QkFBQTtBQUxIOztBQU9FO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FBTEg7O0FBTUc7RUFDQyxhQUFBO0FBSko7O0FBUUM7RUFDQyx5RkFBQTtVQUFBLGlGQUFBO0FBTkY7O0FBUUM7RUFDQztJQUNDLDBCQUFBO0VBTkQ7RUFRQTtJQUNDLDRCQUFBO0VBTkQ7RUFRQTtJQUNDLDBCQUFBO0VBTkQ7QUFDRjs7QUFIQztFQUNDO0lBQ0MsMEJBQUE7RUFORDtFQVFBO0lBQ0MsNEJBQUE7RUFORDtFQVFBO0lBQ0MsMEJBQUE7RUFORDtBQUNGIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGFiLUJhclxuI3Byb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBwYWRkaW5nOiAyLjNlbTtcbn1cbi8vIFByb2ZpbGUgUGljdHVyZSBuZWVkcyBoZWlnaHQ6IDQwcHggb24gZGVza3RvcCB2aWV3cy5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkzcHgpIHtcbiAgI3Byb2ZpbGUtcGljdHVyZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDBlbTtcbiAgfVxufVxuLy8gVG9vbGJhclxuICAjbG9nbyB7XG5cdFx0aGVpZ2h0OiA0NHB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IC05cHg7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1taW4taGVpZ2h0OiA3dmg7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsICMwMDQ3ODUsICMwMDU1YTUpO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxNXB4IHJnYmEoMCwwLDAsMC4wOCk7XG5cbiAgICBhIHtcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG5cbiAgICAuYWN0aXZlLWxpbmsge1xuICAgICAgY29sb3I6ICNmYmI2MDY7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWNvbG9yOiAjRDBENEQ4O1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gIH1cblxuICBpb24tZ3JpZCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5pb24tdGFic3tcblx0aW9uLWZhYiB7XG5cdFx0bWFyZ2luLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pOyAvKiBmaXggbm90Y2ggaW9zKi9cblx0XHRpb24tZmFiLWJ1dHRvbiB7XG5cdFx0XHQvLyAtLWJveC1zaGFkb3c6IG5vbmU7XG5cdFx0fVxuXHR9XG5cdGlvbi10YWItYmFyIHtcblx0XHQtLWJvcmRlcjogMDtcblx0XHQtLWJhY2tncm91bmQ6IG5vbmU7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OjA7IHJpZ2h0OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdCY6YWZ0ZXJ7XG5cdFx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0YmFja2dyb3VuZDogIzAwMDAwMDtcblx0XHRcdGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbiB7XG5cdFx0XHQtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgIzAwNDc4NSwgIzAwNTVhNSk7XG5cblx0XHRcdGlvbi1pY29uLCBpb24tbGFiZWwge1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlvbi10YWItYnV0dG9uLmV2ZW50cyB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcblx0XHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbi5wb3N0cyB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcblx0XHR9XG5cdFx0c3ZnIHtcblx0XHRcdHdpZHRoOiA3MnB4O1xuXHRcdFx0bWFyZ2luLXRvcDogMTlweDtcblx0XHRcdHBhdGh7XG5cdFx0XHRcdGZpbGw6ICAjMDA1NWE1O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQucHJvLXBpYy1hbmltYXRpb24ge1xuXHRcdGFuaW1hdGlvbjogcHJvZmlsZS1waWN0dXJlLXVwIDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcblx0fVxuXHRAa2V5ZnJhbWVzIHByb2ZpbGUtcGljdHVyZS11cCB7XG5cdFx0MCUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cdFx0fVxuXHRcdDUwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuXHRcdH1cblx0XHQxMDAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHRcdH1cblx0fVxufSJdfQ== */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <!-- Toolbar for Desktop -->\n  <ion-toolbar slot=\"top\" class=\"ion-hide-lg-down\">\n    <ion-grid>\n      <ion-row style=\"margin-top: 16px;\" class=\"ion-align-items-center\">\n        <ion-col size=\"2\"></ion-col>\n        <ion-col pull-lg=\"1.5\" pull-xl=\"0\" size=\"2\">\n          <img id=\"logo\" src=\"../../assets/logos/White-FYF-LOGO-2.svg\">\n        </ion-col>\n        <ion-col style=\"z-index: 9999;\" class=\"ion-float-right\" push-lg=\"1.5\"  size-lg=\"6\" push-xl=\"1\" size-xl=\"4.5\">\n\n          <!-- <a (click)=\"logoutConfirm()\" style=\"cursor: pointer;\">\n            LOGOUT\n          </a> -->\n          <a routerLink=\"/home/profile/\" routerLinkActive=\"active-link\">\n            <img id=\"profile-picture\" style=\"position: relative; top: -8px;\" src=\"{{this.userProfilePicture}}\" alt=\"User Profile Picture\" srcset=\"\">\n          </a>\n          <a routerLink=\"/home/mentors\" routerLinkActive=\"active-link\">\n            Mentors\n          </a>\n          <a routerLink=\"/home/posts\" routerLinkActive=\"active-link\">\n            Posts\n          </a>\n          <a routerLink=\"/home/events\" routerLinkActive=\"active-link\">\n           Events\n          </a>\n          <a routerLink=\"/home/jobs\" routerLinkActive=\"active-link\">\n            Jobs\n          </a>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <!-- Tab Bar for Mobile -->\n  <ion-fab id=\"tab-bar-fab\" class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"center\" translucent=\"true\">\n    <ion-fab-button>\n      <ion-tab-button (click)=\"toProfile()\"  tab=\"profile\">\n        <img id=\"profile-picture\" src=\"{{this.userProfilePicture}}\" alt=\"User Profile Picture\">\n        <!-- <ion-label>PROFILE</ion-label> -->\n      </ion-tab-button>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-tab-bar id=\"tabBar\" slot=\"bottom\" class=\"ion-hide-lg-up ion-no-border\">\n  <ion-tab-button tab=\"jobs\">\n    <ion-icon style=\"font-size: 2.1em\"  name=\"briefcase-outline\"></ion-icon>\n    <!-- <ion-icon src=\"../assets/icon/suitcase-inactive.svg\"></ion-icon> -->\n    <ion-label>JOBS</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button class=\"events\" tab=\"events\">\n    <ion-icon style=\"font-size: 2.1em\"  name=\"calendar-outline\"></ion-icon>\n    <!-- <ion-icon src=\"../assets/icon/calendar-inactive.svg\"></ion-icon> -->\n    <ion-label>EVENTS</ion-label>\n  </ion-tab-button>\n\n  <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill-rule=\"evenodd\"></path></svg>\n\n    <ion-tab-button class=\"posts\" tab=\"posts\">\n      <ion-icon style=\"font-size: 2.1em\" name=\"newspaper-outline\"></ion-icon>\n      <ion-label>POSTS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"mentors\">\n      <ion-icon style=\"font-size: 2.1em\" name=\"ribbon-outline\"></ion-icon>\n      <ion-label>MENTORS</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es2015.js.map