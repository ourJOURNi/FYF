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
        redirectTo: '/home/posts',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile.service */ 39181);








let TabsPage = class TabsPage {
    constructor(auth, alert, location, profile) {
        this.auth = auth;
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
};
TabsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location,
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
/* harmony default export */ __webpack_exports__["default"] = ("#profile-picture {\n  height: 32px;\n  border-radius: 50px;\n}\n\nion-tab-bar {\n  padding: 0 40px;\n  height: 50px;\n  z-index: 9999;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-label {\n  position: relative;\n  top: 6px;\n  font-size: 0.8em;\n  transition: 0.5s;\n  font-weight: 700;\n}\n\nion-tab-button {\n  font-size: 0.8em;\n  --color: #0055a563;\n  --color-selected: #FFB351;\n  --padding-end: 0px;\n  --padding-start: 10px;\n  --padding-bottom: 0px;\n  --margin-left:0px;\n  --margin-right:0px;\n  max-width: 100px;\n}\n\nion-tab-button ion-icon {\n  font-size: 2em;\n  --font-size-selected: 4em;\n  --background-color: white;\n  transition: 0.5s;\n}\n\n#logo {\n  height: 32px;\n}\n\nion-toolbar {\n  --min-height: 7vh;\n  --background: white;\n  font-size: 0.9em;\n  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.08);\n}\n\nion-toolbar a {\n  margin: 0 10px 0 10px;\n  text-decoration: none;\n  color: #333;\n  letter-spacing: 1px;\n  font-size: 0.8em;\n  float: right;\n}\n\nion-toolbar .active-link {\n  color: #0055a5;\n  font-weight: 600;\n  transition: 0.5s;\n}\n\nion-toolbar ion-button {\n  --color: #D0D4D8;\n  opacity: 0.6;\n  font-weight: 700;\n}\n\nion-grid {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtFQUNBLG1FQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUNFO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNOOztBQU9FO0VBQ0UsWUFBQTtBQUpKOztBQU9FO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUFKSjs7QUFNSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFKTjs7QUFPSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTE47O0FBUUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQU5OOztBQVVFO0VBQ0UsWUFBQTtBQVBKIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGFiLUJhclxuI3Byb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbmlvbi10YWItYmFyICB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICAvLyBib3gtc2hhZG93OiAycHggMXB4IDVweCAjNTU1O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG5pb24tbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNnB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tdGFiLWJ1dHRvbntcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgLS1jb2xvcjogIzAwNTVhNTYzO1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjRkZCMzUxO1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLW1hcmdpbi1sZWZ0OjBweDtcbiAgLS1tYXJnaW4tcmlnaHQ6MHB4O1xuICBtYXgtd2lkdGg6MTAwcHg7XG4gIGlvbi1pY29ue1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAtLWZvbnQtc2l6ZS1zZWxlY3RlZDogNGVtO1xuICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH19XG5cblxuXG5cbiAgLy8gVG9vbGJhclxuXG4gICNsb2dvIHtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1taW4taGVpZ2h0OiA3dmg7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCByZ2JhKDAsMCwwLDAuMDgpO1xuXG4gICAgYSB7XG4gICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIC5hY3RpdmUtbGluayB7XG4gICAgICBjb2xvcjogIzAwNTVhNTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogI0QwRDREODtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG5cbiAgaW9uLWdyaWQge1xuICAgIGhlaWdodDogNTBweDtcbiAgfSJdfQ== */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <!-- Toolbar for Desktop -->\n  <ion-toolbar slot=\"top\" class=\"ion-hide-lg-down\">\n    <ion-grid>\n      <ion-row style=\"margin-top: 16px;\" class=\"ion-align-items-center\">\n        <ion-col size=\"2\"></ion-col>\n        <ion-col pull-lg=\"1.5\" pull-xl=\"0\" size=\"2\">\n          <img id=\"logo\" src=\"../../assets/icon/Logo 2.0.png\">\n        </ion-col>\n        <ion-col style=\"z-index: 9999;\" class=\"ion-float-right\" push-lg=\"1.5\"  size-lg=\"6\" push-xl=\"1\" size-xl=\"4.5\">\n\n          <!-- <a (click)=\"logoutConfirm()\" style=\"cursor: pointer;\">\n            LOGOUT\n          </a> -->\n          <a routerLink=\"/home/profile/\" routerLinkActive=\"active-link\">\n            <img id=\"profile-picture\" style=\"position: relative; top: -8px;\" src=\"{{this.userProfilePicture}}\" alt=\"User Profile Picture\" srcset=\"\">\n          </a>\n          <a routerLink=\"/home/mentors\" routerLinkActive=\"active-link\">\n            MENTORS\n          </a>\n          <a routerLink=\"/home/posts\" routerLinkActive=\"active-link\">\n            POSTS\n          </a>\n          <a routerLink=\"/home/events\" routerLinkActive=\"active-link\">\n           EVENTS\n          </a>\n          <a routerLink=\"/home/jobs\" routerLinkActive=\"active-link\">\n            JOBS\n          </a>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <!-- Tab Bar for Mobile -->\n  <ion-tab-bar slot=\"bottom\" id=\"tabBar\" class=\"ion-hide-lg-up\">\n    <ion-tab-button tab=\"jobs\">\n      <ion-icon name=\"briefcase-outline\"></ion-icon>\n      <!-- <ion-icon src=\"../assets/icon/suitcase-inactive.svg\"></ion-icon> -->\n      <!-- <ion-label>JOBS</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"events\">\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n      <!-- <ion-icon src=\"../assets/icon/calendar-inactive.svg\"></ion-icon> -->\n      <!-- <ion-label>EVENTS</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"posts\">\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\n      <!-- <ion-icon src=\"../assets/icon/post-inactive.svg\"></ion-icon> -->\n      <!-- <ion-label>POSTS</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"mentors\">\n      <ion-icon src=\"../assets/icon/question-inactive.svg\"></ion-icon>\n      <!-- <ion-label>MENTORS</ion-label> -->\n    </ion-tab-button>\n\n    <!-- I need to add profile picture -->\n    <!-- Where do I get it from? -->\n    <ion-tab-button tab=\"profile\">\n      <img id=\"profile-picture\" src=\"{{this.userProfilePicture}}\" alt=\"User Profile Picture\" srcset=\"\">\n      <!-- <ion-label>PROFILE</ion-label> -->\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es2015.js.map