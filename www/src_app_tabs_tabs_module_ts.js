"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
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
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_jobs_jobs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/jobs/jobs.module */ 98766)).then(m => m.JobsPageModule)
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
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-node_modules_date-fns_esm_formatDistanceToNow_index_js"), __webpack_require__.e("src_app_pages_events_events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/events/events.module */ 95105)).then(m => m.EventsPageModule)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 65230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 94710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34362);
var _a, _b;






let TabsPage = class TabsPage {
    constructor(auth, alert) {
        this.auth = auth;
        this.alert = alert;
        this.userProfilePicture = this.auth.userProfilePicture;
    }
    ngOnInit() {
    }
    logoutConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService !== "undefined" && _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController) === "function" ? _b : Object])
], TabsPage);



/***/ }),

/***/ 94710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#profile-picture {\n  border-radius: 100px;\n  padding: 2.3em;\n}\n\n@media only screen and (min-width: 993px) {\n  #profile-picture {\n    height: 40px;\n    padding: 0em;\n  }\n}\n\n#logo {\n  height: 44px;\n  position: relative;\n  top: -9px;\n}\n\nion-toolbar {\n  --min-height: 7vh;\n  --background: linear-gradient(30deg, #004785, #0055a5);\n  font-size: 0.9em;\n  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.08);\n}\n\nion-toolbar a {\n  transition: 0.5s;\n  margin: 0 10px 0 10px;\n  text-decoration: none;\n  color: white;\n  font-size: 1em;\n  font-weight: 600;\n  float: right;\n}\n\nion-toolbar .active-link {\n  color: #fbb606;\n}\n\nion-toolbar ion-button {\n  --color: #D0D4D8;\n  opacity: 0.6;\n  font-weight: 700;\n}\n\nion-grid {\n  height: 50px;\n}\n\nion-tabs ion-fab {\n  margin-bottom: env(safe-area-inset-bottom); /* fix notch ios*/\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n\nion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: #000000;\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  --background: #0055a5;\n}\n\nion-tabs ion-tab-bar ion-tab-button ion-icon, ion-tabs ion-tab-bar ion-tab-button ion-label {\n  color: white;\n}\n\nion-tabs ion-tab-bar ion-tab-button.events {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\nion-tabs ion-tab-bar ion-tab-button.posts {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\nion-tabs ion-tab-bar svg {\n  width: 72px;\n  margin-top: 19px;\n}\n\nion-tabs ion-tab-bar svg path {\n  fill: #0055a5;\n}\n\nion-tabs .pro-pic-animation {\n  animation: profile-picture-up 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n@keyframes profile-picture-up {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBQUY7QUFDRjs7QUFHRTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBREo7O0FBR0k7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNILGdCQUFBO0VBQ0csWUFBQTtBQUROOztBQUlJO0VBQ0UsY0FBQTtBQUZOOztBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFITjs7QUFPRTtFQUNFLFlBQUE7QUFKSjs7QUFPQztFQUNDLDBDQUFBLEVBQUEsaUJBQUE7QUFKRjs7QUFTQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFBUSxRQUFBO0VBQ1IsV0FBQTtBQU5GOztBQU9FO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBTEg7O0FBT0U7RUFDQyxxQkFBQTtBQUxIOztBQU9HO0VBQ0MsWUFBQTtBQUxKOztBQVFFO0VBQ0MsaUJBQUE7RUFDQSw2QkFBQTtBQU5IOztBQVFFO0VBQ0MsZ0JBQUE7RUFDQSw0QkFBQTtBQU5IOztBQVFFO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FBTkg7O0FBT0c7RUFDQyxhQUFBO0FBTEo7O0FBU0M7RUFDQyxpRkFBQTtBQVBGOztBQVNDO0VBQ0M7SUFDQywwQkFBQTtFQVBEO0VBU0E7SUFDQyw0QkFBQTtFQVBEO0VBU0E7SUFDQywwQkFBQTtFQVBEO0FBQ0YiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUYWItQmFyXG4jcHJvZmlsZS1waWN0dXJlIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBhZGRpbmc6IDIuM2VtO1xufVxuLy8gUHJvZmlsZSBQaWN0dXJlIG5lZWRzIGhlaWdodDogNDBweCBvbiBkZXNrdG9wIHZpZXdzLlxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkge1xuICAjcHJvZmlsZS1waWN0dXJlIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMGVtO1xuICB9XG59XG4vLyBUb29sYmFyXG4gICNsb2dvIHtcblx0XHRoZWlnaHQ6IDQ0cHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRvcDogLTlweDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDd2aDtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgIzAwNDc4NSwgIzAwNTVhNSk7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE1cHggcmdiYSgwLDAsMCwwLjA4KTtcblxuICAgIGEge1xuICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuXHQgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmFjdGl2ZS1saW5rIHtcbiAgICAgIGNvbG9yOiAjZmJiNjA2O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogI0QwRDREODtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG5cbiAgaW9uLWdyaWQge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuaW9uLXRhYnN7XG5cdGlvbi1mYWIge1xuXHRcdG1hcmdpbi1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTsgLyogZml4IG5vdGNoIGlvcyovXG5cdFx0aW9uLWZhYi1idXR0b24ge1xuXHRcdFx0Ly8gLS1ib3gtc2hhZG93OiBub25lO1xuXHRcdH1cblx0fVxuXHRpb24tdGFiLWJhciB7XG5cdFx0LS1ib3JkZXI6IDA7XG5cdFx0LS1iYWNrZ3JvdW5kOiBub25lO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDowOyByaWdodDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQmOmFmdGVye1xuXHRcdFx0Y29udGVudDogXCIgXCI7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGJhY2tncm91bmQ6ICMwMDAwMDA7XG5cdFx0XHRoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24ge1xuXHRcdFx0LS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuXG5cdFx0XHRpb24taWNvbiwgaW9uLWxhYmVsIHtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpb24tdGFiLWJ1dHRvbi5ldmVudHMge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcblx0XHR9XG5cdFx0aW9uLXRhYi1idXR0b24ucG9zdHMge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDBweDtcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XG5cdFx0fVxuXHRcdHN2ZyB7XG5cdFx0XHR3aWR0aDogNzJweDtcblx0XHRcdG1hcmdpbi10b3A6IDE5cHg7XG5cdFx0XHRwYXRoe1xuXHRcdFx0XHRmaWxsOiAgIzAwNTVhNTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LnByby1waWMtYW5pbWF0aW9uIHtcblx0XHRhbmltYXRpb246IHByb2ZpbGUtcGljdHVyZS11cCAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG5cdH1cblx0QGtleWZyYW1lcyBwcm9maWxlLXBpY3R1cmUtdXAge1xuXHRcdDAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHRcdH1cblx0XHQ1MCUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcblx0XHR9XG5cdFx0MTAwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblx0XHR9XG5cdH1cbn0iXX0= */";

/***/ }),

/***/ 65230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <!-- Toolbar for Desktop -->\n  <ion-toolbar slot=\"top\" class=\"ion-hide-lg-down\">\n    <ion-grid>\n      <ion-row style=\"margin-top: 16px;\" class=\"ion-align-items-center\">\n        <ion-col size=\"2\"></ion-col>\n        <ion-col pull-lg=\"1.5\" pull-xl=\"0\" size=\"2\">\n          <img id=\"logo\" src=\"../../assets/logos/White-FYF-LOGO-2.svg\">\n        </ion-col>\n        <ion-col style=\"z-index: 9999;\" class=\"ion-float-right\" push-lg=\"1.5\"  size-lg=\"6\" push-xl=\"1\" size-xl=\"4.5\">\n\n          <!-- <a (click)=\"logoutConfirm()\" style=\"cursor: pointer;\">\n            LOGOUT\n          </a> -->\n          <a routerLink=\"/home/profile/\" routerLinkActive=\"active-link\">\n            <img id=\"profile-picture\" style=\"position: relative; top: -8px;\" src=\"{{this.userProfilePicture}}\" alt=\"User Profile Picture\" srcset=\"\">\n          </a>\n          <a routerLink=\"/home/mentors\" routerLinkActive=\"active-link\">\n            Mentors\n          </a>\n          <a routerLink=\"/home/posts\" routerLinkActive=\"active-link\">\n            Posts\n          </a>\n          <a routerLink=\"/home/events\" routerLinkActive=\"active-link\">\n           Events\n          </a>\n          <a routerLink=\"/home/jobs\" routerLinkActive=\"active-link\">\n            Jobs\n          </a>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <!-- Tab Bar for Mobile -->\n  <ion-fab id=\"tab-bar-fab\" class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"center\" translucent=\"true\">\n    <ion-fab-button>\n      <ion-tab-button (click)=\"toProfile()\"  tab=\"profile\">\n        <img id=\"profile-picture\" src=\"{{this.userProfilePicture}}\" alt=\"User Profile Picture\">\n        <!-- <ion-label>PROFILE</ion-label> -->\n      </ion-tab-button>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-tab-bar id=\"tabBar\" slot=\"bottom\" class=\"ion-hide-lg-up ion-no-border\">\n  <ion-tab-button tab=\"jobs\">\n    <ion-icon style=\"font-size: 2.1em\"  name=\"briefcase-outline\"></ion-icon>\n    <!-- <ion-icon src=\"../assets/icon/suitcase-inactive.svg\"></ion-icon> -->\n    <ion-label>JOBS</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button class=\"events\" tab=\"events\">\n    <ion-icon style=\"font-size: 2.1em\"  name=\"calendar-outline\"></ion-icon>\n    <!-- <ion-icon src=\"../assets/icon/calendar-inactive.svg\"></ion-icon> -->\n    <ion-label>EVENTS</ion-label>\n  </ion-tab-button>\n\n  <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill-rule=\"evenodd\"></path></svg>\n\n    <ion-tab-button class=\"posts\" tab=\"posts\">\n      <ion-icon style=\"font-size: 2.1em\" name=\"newspaper-outline\"></ion-icon>\n      <ion-label>POSTS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"mentors\">\n      <ion-icon style=\"font-size: 2.1em\" name=\"ribbon-outline\"></ion-icon>\n      <ion-label>MENTORS</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map