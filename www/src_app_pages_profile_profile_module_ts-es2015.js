(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 41474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": function() { return /* binding */ ProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    },
    {
        path: 'change-email',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-email_change-email_change-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-email/change-email/change-email.module */ 55349)).then(m => m.ChangeEmailPageModule)
    },
    {
        path: 'change-phone/:phone',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-phone_change-phone_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-phone/change-phone.module */ 79736)).then(m => m.ChangePhonePageModule)
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-password_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-password/change-password/change-password.module */ 79363)).then(m => m.ChangePasswordPageModule)
    },
    {
        path: 'change-school/:school/:grade',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-school_change-school_change-school_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-school/change-school/change-school.module */ 46397)).then(m => m.ChangeSchoolPageModule)
    },
    {
        path: 'change-profile-picture/:profilePicture',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_image-cropper_image-cropper_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_change-profile-picture_change-profile-picture_change-profile-picture_mo-0385bc")]).then(__webpack_require__.bind(__webpack_require__, /*! ./change-profile-picture/change-profile-picture/change-profile-picture.module */ 90416)).then(m => m.ChangeProfilePicturePageModule)
    },
    {
        path: 'resume',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_resume_resume_resume_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./resume/resume/resume.module */ 38261)).then(m => m.ResumePageModule)
    },
    {
        path: 'logout',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_logout_logout_logout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./logout/logout/logout.module */ 15694)).then(m => m.LogoutPageModule)
    },
    // Keep Resume pages seperate?
    {
        path: 'view-resume',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./resume/view-resume/view-resume.module */ 65207)).then(m => m.ViewResumePageModule)
    },
    {
        path: 'update-resume',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_resume_update-resume_update-resume_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./resume/update-resume/update-resume.module */ 58939)).then(m => m.UpdateResumePageModule)
    },
    // Combine with profile pictures directory?
    {
        path: 'confirm-photo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-profile-picture_confirm-photo_confirm-photo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-profile-picture/confirm-photo/confirm-photo.module */ 50561)).then(m => m.ConfirmPhotoPageModule)
    },
    {
        path: 'change-about/:about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-about_change-about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-about/change-about.module */ 38575)).then(m => m.ChangeAboutPageModule)
    },
    {
        path: 'edit-profile-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_edit-profile-page_edit-profile-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-profile-page/edit-profile-page.module */ 19981)).then(m => m.EditProfilePagePageModule)
    },
    {
        path: 'change-about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-about_change-about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-about/change-about.module */ 38575)).then(m => m.ChangeAboutPageModule)
    },
    {
        path: 'change-phone',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-phone_change-phone_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-phone/change-phone.module */ 79736)).then(m => m.ChangePhonePageModule)
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": function() { return /* binding */ ProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/custom-component.module */ 64941);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ 41474);









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfilePageRoutingModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_1__.CustomComponentsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage }])
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 79291);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 2777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/profile.service */ 39181);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 38605);










let ProfilePage = class ProfilePage {
    constructor(auth, profile, storage, router, toast, alert, loading) {
        this.auth = auth;
        this.profile = profile;
        this.storage = storage;
        this.router = router;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.userObject = {
            fullName: '',
            about: '',
            city: '',
            state: '',
            zip: '',
            gender: '',
            dob: '',
            school: '',
            grade: '',
            profilePicture: '',
            resume: '',
            email: '',
            phone: ''
        };
    }
    ngOnDestroy() {
        this.detailsSub.unsubscribe();
        this.profile.fullName.unsubscribe();
        this.profile.about.unsubscribe();
        this.profile.city.unsubscribe();
        this.profile.state.unsubscribe();
        this.profile.zip.unsubscribe();
        this.profile.gender.unsubscribe();
        this.profile.school.unsubscribe();
        this.profile.grade.unsubscribe();
        this.profile.profilePicture.unsubscribe();
        this.profile.email.unsubscribe();
        this.profile.phone.unsubscribe();
        this.profile.resume.unsubscribe();
    }
    ngOnInit() {
        this.trackRoute();
        this.detailsSub = this.profile.getUserDetails()
            .subscribe(res => {
            console.log(res);
            const fullName = res['fullName'];
            const about = res['about'];
            const city = res['city'];
            const state = res['state'];
            const zip = res['zip'];
            const gender = res['gender'];
            const dob = res['dob'];
            const school = res['school'];
            const grade = res['grade'];
            const profilePicture = res['profilePicture'];
            const resume = res['resume'];
            const email = res['email'];
            const phone = res['phone'];
            // Send initial profile values to Profile Service;
            // Have to initial these values from the Profile Component
            this.profile.fullName.next(fullName);
            this.profile.about.next(about);
            this.profile.city.next(city);
            this.profile.state.next(state);
            this.profile.zip.next(zip);
            this.profile.gender.next(gender);
            this.profile.dob.next(dob);
            this.profile.school.next(school);
            this.profile.grade.next(grade);
            this.profile.profilePicture.next(profilePicture);
            this.profile.resume.next(resume);
            this.profile.email.next(email);
            this.profile.phone.next(phone);
            // Subscribe to all the B.Subjects to get live updates of value changes.
            this.profile.fullName.subscribe(data => {
                this.userObject.fullName = data;
            });
            this.profile.about.subscribe(data => {
                this.userObject.about = data;
            });
            this.profile.city.subscribe(data => {
                this.userObject.city = data;
            });
            this.profile.state.subscribe(data => {
                this.userObject.state = data;
            });
            this.profile.zip.subscribe(data => {
                this.userObject.zip = data;
            });
            this.profile.gender.subscribe(data => {
                this.userObject.gender = data;
            });
            this.profile.dob.subscribe(data => {
                this.userObject.dob = data;
            });
            this.profile.school.subscribe(data => {
                this.userObject.school = data;
            });
            this.profile.grade.subscribe(data => {
                this.userObject.grade = data;
            });
            this.profile.profilePicture.subscribe(data => {
                this.userObject.profilePicture = data;
            });
            this.profile.resume.subscribe(data => {
                this.userObject.resume = data;
            });
            this.profile.email.subscribe(data => {
                this.userObject.email = data;
            });
            this.profile.phone.subscribe(data => {
                this.userObject.phone = data;
            });
        });
    }
    trackRoute() {
        this.routerSub = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(data => {
            console.log(data['url']);
            let url = data['url'];
            if (url.includes('/home/profile/change') ||
                url.includes('/home/profile/view-resume') ||
                url.includes('/home/profile/update-resume')) {
                console.log('Hide Tab Bar!');
                let tabBar = document.getElementById('tabBar');
                tabBar.style.height = '0px';
                tabBar.style.transition = '1s';
            }
            else {
                let tabBar = document.getElementById('tabBar');
                console.log(tabBar);
                tabBar.style.height = '50px';
                tabBar.style.transition = '1s';
            }
        });
    }
    clearToken() {
        // ONLY FOR TESTING!
        this.storage.remove('access_token');
        const toast = this.toast.create({
            message: 'JWT removed',
            duration: 3000
        });
        toast.then(toast => toast.present());
    }
    editPage() {
        this.router.navigate(['/home/profile/edit-profile-page']);
    }
    changeProfilePicture() {
        console.log('Navigating to Change Profile Page');
        this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
    }
    updateResume() {
        console.log('Navigating to Change Resume Page');
        this.router.navigate(['/home/profile/view-resume']);
    }
    confirmLogout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = this.toast.create({
                message: 'User has been logged out',
                duration: 3000
            });
            const loading = yield this.loading.create({
                message: 'Logging out...',
                duration: 1000
            });
            const alert = yield this.alert.create({
                header: 'Logout',
                cssClass: 'alert',
                message: 'Are you sure you want to logout?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Canceling logout');
                            this.profile.fullName.next('');
                            this.profile.about.next('');
                            this.profile.city.next('');
                            this.profile.state.next('');
                            this.profile.zip.next('');
                            this.profile.gender.next('');
                            this.profile.dob.next('');
                            this.profile.school.next('');
                            this.profile.grade.next('');
                            this.profile.profilePicture.next('');
                            this.profile.resume.next('');
                            this.profile.email.next('');
                            this.router.navigate(['/home/profile']);
                        }
                    },
                    {
                        text: 'Logout',
                        handler: () => {
                            console.log('Logging out');
                            this.auth.logout();
                            loading.present();
                            toast.then(t => t.present());
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    changeEmail() {
        console.log('Navigating to Change Email Page');
        this.router.navigate(['/home/profile/change-email']);
    }
    changePhone() {
        console.log('Navigating to Change Phone Page');
        this.router.navigate(['/home/profile/change-phone']);
    }
    changeAbout() {
        console.log('Navigating to Change About Page');
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/profile/change-about/', this.userObject.about]);
    }
    changePassword() {
        console.log('Navigating to Change Password Page');
        this.router.navigate(['/home/profile/change-password']);
    }
    changePhoneNumber() {
        console.log(this.userObject);
        console.log('Navigating to Change Phone Number Page');
        this.router.navigate(['/home/profile/change-phone', this.userObject.phone]);
    }
    changeSchool() {
        console.log('Navigating to Change School Page');
        this.router.navigate(['/home/profile/change-school', this.userObject.school, this.userObject.grade]);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController])
], ProfilePage);



/***/ }),

/***/ 2777:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-wrapper {\n  margin: 16px auto;\n}\n\n@media only screen and (max-width: 575px) {\n  .profile-wrapper {\n    margin: 24px auto;\n  }\n}\n\nion-alert {\n  --background: #e4405f;\n}\n\nion-list {\n  background: none;\n}\n\nion-item {\n  background: none;\n  --color: #0055a5;\n  margin: 8px auto;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n}\n\n.desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n\n#profile-info {\n  height: auto;\n  text-align: left;\n  margin-left: 24px;\n}\n\nh4 {\n  color: #000;\n  font-size: 1.9em;\n  opacity: 1;\n}\n\np {\n  font-size: 1em;\n  opacity: 1;\n  transition: 0.5s;\n}\n\nspan {\n  color: #0055a5;\n  font-weight: 600;\n  width: 64px;\n  display: inline-block;\n}\n\n#profile-picture {\n  height: 80px;\n  width: 80px;\n  border-radius: 100px;\n  margin: 0 auto 8px;\n  display: block;\n  opacity: 1;\n  border: 5px solid #0055a5;\n}\n\n.back-button {\n  opacity: 1;\n}\n\n.blue-button {\n  --background: #0055a5;\n  opacity: 1;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n}\n\n.logout-button {\n  color: white;\n  --background: #e4405f;\n  --background-hover: #dd3252;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 52px auto;\n}\n\n@-webkit-keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes text-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes pic-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes header-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes buttons-slide-up {\n  0% {\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes buttons-slide-right {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@media screen and (max-width: 992px) {\n  p {\n    font-size: 1em;\n  }\n\n  span {\n    color: #0055a5;\n    font-weight: 600;\n    width: 64px;\n    display: inline-block;\n    text-align: left;\n    margin-right: 10px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  #change-pro-pic-button {\n    position: absolute;\n    top: 75px;\n    left: 188px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0UscUJBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFLRjs7QUFIRTtFQUNFLGNBQUE7QUFLSjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBS0Y7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFNRjs7QUFIQTtFQUNFLFVBQUE7QUFNRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtBQU1GOztBQUZBO0VBQ0U7SUFDRSwyQkFBQTtFQUtGO0VBSEE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFLRjtBQUNGOztBQVpBO0VBQ0U7SUFDRSwyQkFBQTtFQUtGO0VBSEE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFLRjtBQUNGOztBQUZBO0VBQ0U7SUFDRSw0QkFBQTtFQUlGO0VBRkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFJRjtBQUNGOztBQVhBO0VBQ0U7SUFDRSw0QkFBQTtFQUlGO0VBRkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFJRjtBQUNGOztBQURBO0VBQ0U7SUFDRSw0QkFBQTtFQUdGO0VBREE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFHRjtBQUNGOztBQVZBO0VBQ0U7SUFDRSw0QkFBQTtFQUdGO0VBREE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0U7SUFDRSw0QkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFFRjtBQUNGOztBQVRBO0VBQ0U7SUFDRSw0QkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0U7SUFDRSw0QkFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFDRjtBQUNGOztBQVJBO0VBQ0U7SUFDRSw0QkFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFBO0VBQUY7O0VBRUM7SUFDQyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7QUFDRjs7QUFHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQURGO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS13cmFwcGVyIHtcbiAgbWFyZ2luOiAxNnB4IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5wcm9maWxlLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMjRweCBhdXRvO1xuICB9XG59XG5pb24tYWxlcnQge1xuICAtLWJhY2tncm91bmQ6ICNlNDQwNWY7XG59XG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC0tY29sb3I6ICMwMDU1YTU7XG4gIG1hcmdpbjogOHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDI2cHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzMyNjtcblxuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbiNwcm9maWxlLWluZm8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEuOWVtO1xuICBvcGFjaXR5OiAxO1xuICAvLyBhbmltYXRpb246IGhlYWRlci1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAxcyBmb3J3YXJkcztcbn1cbnAge1xuICBmb250LXNpemU6IDFlbTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgLy8gYW5pbWF0aW9uOiB0ZXh0LXNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuNXMgZm9yd2FyZHM7XG59XG5zcGFuIHtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiA2NHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jcHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDU1YTU7XG4gIC8vIGFuaW1hdGlvbjogcGljLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG59XG4uYmFjay1idXR0b257XG4gIG9wYWNpdHk6IDE7XG4gIC8vIGFuaW1hdGlvbjogYnV0dG9ucy1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cbi5ibHVlLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgLy8gYW5pbWF0aW9uOiBidXR0b25zLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIC45cyBmb3J3YXJkcztcbn1cbi5sb2dvdXQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICNlNDQwNWY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2RkMzI1MjtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDUycHggYXV0bztcbiAgLy8gYW5pbWF0aW9uOiBidXR0b25zLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDEuM3MgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgdGV4dC1zbGlkZS11cCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwaWMtc2xpZGUtcmlnaHQge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhlYWRlci1zbGlkZS1yaWdodCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9ucy1zbGlkZS11cCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9ucy1zbGlkZS1yaWdodCB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gICBzcGFuIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNjaGFuZ2UtcHJvLXBpYy1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDc1cHg7XG4gICAgbGVmdDogMTg4cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ 79291:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-item style=\"--background: #0055a5;\">\n      <ion-avatar slot=\"start\">\n        <img style=\"border-radius: 80px;\" height=\"50\" src=\"../../../assets/icon/profile-icon.svg\">\n      </ion-avatar>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"7\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../assets/icon/profile-icon-blue.svg\" alt=\"\" srcset=\"\">\n                  <h1>Profile</h1>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"profile-wrapper ion-justify-content-center ion-align-items-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"7\">\n        <ion-row style=\"background: rgb(228, 235, 241); padding: 1em; border-radius: 5px;\n        box-shadow: 1px 10px 26px rgba(0,0,0,0.05);\" >\n          <ion-col size-xs=\"11\" size-sm=\"3\" size-md=\"2\" size-lg=\"1.5\">\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"12\">\n                <img id=\"profile-picture\" src=\"{{this.userObject.profilePicture}}\" alt=\"User Profile Picture\">\n              </ion-col>\n              <ion-col class=\"ion-text-center\" size=\"12\">\n                <ion-button class=\"blue-button\" (click)=\"changeProfilePicture()\">\n                  Change Picture\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size-xs=\"11\" size-sm=\"6\" size-md=\"5\" size-lg=\"10\" size-xl=\"5\">\n            <ion-row>\n              <ion-col id=\"profile-info\" size=\"12\">\n                <p><span>About</span>{{userObject.about}}</p>\n                <p><span>Name:</span> {{userObject.fullName}}</p>\n                <p><span>Email:</span> {{userObject.email}}</p>\n                <p><span>Phone:</span> {{userObject.phone}}</p>\n                <p style=\"text-transform: capitalize;\"><span>Gender:</span> {{userObject.gender}}</p>\n                <p><span>School:</span> {{userObject.school}}</p>\n                <p><span>Grade:</span> {{userObject.grade}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"7\">\n        <ion-list>\n          <ion-item detail=\"true\" lines=\"none\" (click)=\"changeEmail()\">\n            <ion-label>Change Email</ion-label>\n          </ion-item>\n          <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeAbout()\">\n            <ion-label>Change About Description</ion-label>\n          </ion-item>\n          <ion-item detail=\"true\" lines=\"none\"   (click)=\"changePassword()\">\n            <ion-label>Change Password</ion-label>\n          </ion-item>\n          <ion-item detail=\"true\" lines=\"none\"   (click)=\"changePhoneNumber()\">\n            <ion-label>Change Phone Number</ion-label>\n          </ion-item>\n          <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeSchool()\">\n            <ion-label>Change School/Grade</ion-label>\n          </ion-item>\n          <ion-item detail=\"true\" lines=\"none\"   (click)=\"updateResume()\">\n            <ion-label>View/Update Resume</ion-label>\n          </ion-item>\n          <ion-item style=\"--background: #e3405f; --color: white;\" detail=\"true\" lines=\"none\"   (click)=\"confirmLogout()\">\n            <ion-label>Logout</ion-label>\n          </ion-item>\n      </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts-es2015.js.map