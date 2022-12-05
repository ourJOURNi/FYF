(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth-guard.service */ 78968);




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/login/login.module */ 79456)).then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    // Change to sign up path name later
    {
        path: 'personal-info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_sign-up_personal-info_personal-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/sign-up/personal-info/personal-info.module */ 22361)).then(m => m.PersonalInfoPageModule)
    },
    //  change to forgot password path name later
    {
        path: 'enter-email',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_forgot-password_enter-email_enter-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/forgot-password/enter-email/enter-email.module */ 84055)).then(m => m.EnterEmailPageModule)
    },
    {
        path: 'enter-code',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_forgot-password_enter-code_enter-code_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/forgot-password/enter-code/enter-code.module */ 17463)).then(m => m.EnterCodePageModule)
    },
    {
        path: 'events',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-node_modules_date-fns_esm_formatDistanceToNow_index_js"), __webpack_require__.e("src_app_pages_events_events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/events/events.module */ 95105)).then(m => m.EventsPageModule)
    },
    {
        path: 'mentors',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_mentors_mentors_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mentors/mentors.module */ 53982)).then(m => m.MentorsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/login/login.module */ 79456)).then(m => m.LoginPageModule)
    },
    {
        path: 'replies-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_formatDistanceToNow_index_js"), __webpack_require__.e("default-src_app_modals_replies-page_replies-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/replies-page/replies-page.module */ 86630)).then(m => m.RepliesPagePageModule)
    },
    {
        path: 'edit-post',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/edit-post/edit-post.module */ 22447)).then(m => m.EditPostPageModule)
    },
    {
        path: 'image-cropper',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_modals_image-cropper_image-cropper_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/image-cropper/image-cropper.module */ 72228)).then(m => m.ImageCropperPageModule)
    },
    {
        path: 'report-convo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/report-convo/report-convo.module */ 83281)).then(m => m.ReportConvoPageModule)
    },
    {
        path: 'new-message-student',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/new-message-student/new-message-student.module */ 65367)).then(m => m.NewMessageStudentPageModule)
    },
    {
        path: 'new-message-mentor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/new-message-mentor/new-message-mentor.module */ 33692)).then(m => m.NewMessageMentorPageModule)
    },
    {
        path: 'report-convo-mentor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modals_report-convo-mentor_report-convo-mentor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/report-convo-mentor/report-convo-mentor.module */ 94390)).then(m => m.ReportConvoMentorPageModule)
    },
    {
        path: 'upload-resume-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_modals_upload-resume-modal_upload-resume-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/upload-resume-modal/upload-resume-modal.module */ 49969)).then(m => m.UploadResumeModalPageModule)
    },
    {
        path: 'download',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_download_download_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/download/download.module */ 23064)).then(m => m.DownloadPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/notifications.service */ 79744);
var _a, _b, _c, _d;








let AppComponent = class AppComponent {
    constructor(platform, auth, notifications, router) {
        this.platform = platform;
        this.auth = auth;
        this.notifications = notifications;
        this.router = router;
        this.tabsPlacement = 'bottom';
        this.tabsLayout = 'icon-top';
        this.initializeApp();
    }
    ngOnInit() {
    }
    /**
     * Initializes App; Depending on the state of the Token
     * in the Auth Service, will navigate directly to home page
     */
    initializeApp() {
        this.platform.ready().then(() => {
            // State for the User. If Authentication State == False, the app reverts back to the landing page
            this.auth.authenticationState.subscribe((state) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (state) {
                    this.router.navigate(['home']);
                }
                else {
                    this.router.navigate(['']);
                }
                return;
            }));
        });
    }
    ngOnDestroy() {
        this.auth.authenticationState.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectionStrategy.OnPush,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform) === "function" ? _a : Object, typeof (_b = typeof _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService !== "undefined" && _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService) === "function" ? _b : Object, typeof (_c = typeof _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService !== "undefined" && _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService) === "function" ? _c : Object, typeof (_d = typeof _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router) === "function" ? _d : Object])
], AppComponent);

// this.notifications.connect();
// this.notifications.messages$
// .pipe(
//   // map(rows => rows.data),
//   catchError(error => { throw error }),
//   tap({
//     error: error => console.log('[Live component] Error:', error),
//     complete: () => console.log('[Live component] Connection Closed')
//   }
//   )
// )
// .subscribe(
//   (e) => {
//     console.log(e)
//   });
// Notification.requestPermission((e) => {
//   console.log(e);
// });
// let img = '../assets/icons/icon-72x72.svg';
// let text = 'This is a notification.';
// let notification = new Notification('To do list', {body: text, icon: img});


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "jwtOptionsFactory": () => (/* binding */ jwtOptionsFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 16490);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ion-bottom-drawer */ 74272);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/custom-component.module */ 64941);
/* harmony import */ var _emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitters/post-page-emitter.service */ 50806);
/* harmony import */ var _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emitters/favorites-event-emitter.service */ 81615);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/storage */ 37045);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 74375);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 82027);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/service-worker */ 64933);

// Angular Modules









// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// const config: SocketIoConfig = { url: 'http://10.0.1.5:3000', options: {} };
// Third Party

// Custom Modules

// Custom Emitters


//  Ionic Modules







// For JWT
function jwtOptionsFactory(storage) {
    return {
        tokenGetter: () => {
            return storage.get('access_token');
        },
        whitelistedDomains: ['localhost:42dfc00']
    };
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [
            ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_12__.IonBottomDrawerModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_3__.CustomComponentsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            // SocketIoModule.forRoot(config),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_18__.IonicStorageModule.forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtModule.forRoot({
                jwtOptionsProvider: {
                    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JWT_OPTIONS,
                    useFactory: jwtOptionsFactory,
                    deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_18__.Storage],
                }
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
        ],
        providers: [
            _emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService,
            _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__.FavoritesEventEmitterService,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File,
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__.FilePath,
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__.WebView,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 17855:
/*!***************************************************************************!*\
  !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentVoteBarComponent": () => (/* binding */ CommentVoteBarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _comment_vote_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-vote-bar.component.html?ngResource */ 63757);
/* harmony import */ var _comment_vote_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-vote-bar.component.scss?ngResource */ 69360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
var _a, _b, _c, _d;









let CommentVoteBarComponent = class CommentVoteBarComponent {
    constructor(posts, profile, toast, postEmitterService) {
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.postEmitterService = postEmitterService;
        this.upVoteCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
        this.downVoteCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
        this.currentUserUpvoted = false;
        this.currentUserDownvoted = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Get information about comment
            this.posts.getPostInfo(this.postID)
                .subscribe(postInfo => {
                let allComments = postInfo['comments'];
                allComments.find(comment => {
                    if (comment._id === this.commentID) {
                        this.upVoters = comment['upvoters'];
                        this.downVoters = comment['downvoters'];
                        this.upVotes = comment['upvotes'];
                        this.downVotes = comment['downvotes'];
                        this.upVoteCount$.next(this.upVotes);
                        this.downVoteCount$.next(this.downVotes);
                        this.upVoteLength = this.upVoteCount$.getValue();
                        this.downVoteLength = this.downVoteCount$.getValue();
                        return;
                    }
                });
                // Get User Email
                this.profile.getUserDetails()
                    .subscribe(userDetails => {
                    let userEmail = userDetails['email'];
                    let upVoted = false;
                    let downVoted = false;
                    this.upVoters.find(findUpVoter);
                    this.downVoters.find(findDownVoter);
                    function findUpVoter(upVoter) {
                        if (!upVoter) {
                        }
                        if (upVoter === userEmail) {
                            return upVoted = true;
                        }
                        console.log(upVoter);
                    }
                    function findDownVoter(downVoter) {
                        if (!downVoter) {
                        }
                        if (downVoter === userEmail) {
                            return downVoted = true;
                        }
                    }
                    console.log('Current user: ', userEmail);
                    this.userEmail = userEmail;
                    this.currentUserUpvoted = upVoted;
                    this.currentUserDownvoted = downVoted;
                });
            });
        });
    }
    refreshAfterComment() {
        this.postEmitterService.postPageRefresh();
    }
    upVoteComment() {
        this.posts.upVoteComment(this.postID, this.commentID, this.userEmail)
            .subscribe(data => {
            const upvotes = data['upvotes'];
            const downvotes = data['downvotes'];
            console.log(data);
            this.upVoteCount$.next(upvotes);
            this.downVoteCount$.next(downvotes);
            this.currentUserUpvoted = true;
            this.upVoteLength = this.upVoteCount$.getValue();
            this.downVoteLength = this.downVoteCount$.getValue();
            if (this.currentUserUpvoted === true) {
                return this.currentUserDownvoted = false;
            }
        });
        this.upVoteCommentToast();
        this.refreshAfterComment();
    }
    upVoteCommentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const upVotePostToast = yield this.toast.create({
                cssClass: 'upvoted-toast',
                message: 'You have UPVOTED this comment.',
                duration: 2000
            });
            upVotePostToast.present();
        });
    }
    downVoteComment() {
        this.posts.downVoteComment(this.postID, this.commentID, this.userEmail)
            .subscribe(data => {
            const upvotes = data['upvotes'];
            const downvotes = data['downvotes'];
            console.log(data);
            this.upVoteCount$.next(upvotes);
            this.downVoteCount$.next(downvotes);
            this.currentUserDownvoted = true;
            this.upVoteLength = this.upVoteCount$.getValue();
            this.downVoteLength = this.downVoteCount$.getValue();
            if (this.currentUserDownvoted === true) {
                return this.currentUserUpvoted = false;
            }
        });
        this.downVoteCommentToast();
        this.refreshAfterComment();
    }
    downVoteCommentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const downVoteToast = yield this.toast.create({
                cssClass: 'downvoted-toast',
                message: 'You have DOWNVOTED this comment.',
                duration: 2000
            });
            downVoteToast.present();
        });
    }
};
CommentVoteBarComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService }
];
CommentVoteBarComponent.propDecorators = {
    postID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    commentID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
CommentVoteBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-comment-vote-bar',
        template: _comment_vote_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comment_vote_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService !== "undefined" && src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService) === "function" ? _a : Object, typeof (_b = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController) === "function" ? _c : Object, typeof (_d = typeof src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService !== "undefined" && src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService) === "function" ? _d : Object])
], CommentVoteBarComponent);



/***/ }),

/***/ 64941:
/*!*******************************************************!*\
  !*** ./src/app/components/custom-component.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomComponentsModule": () => (/* binding */ CustomComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heart-icon/heart-icon.component */ 87811);
/* harmony import */ var _events_favorites_icon_events_favorites_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-favorites-icon/events-favorites-icon.component */ 10877);
/* harmony import */ var _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./follow-icon/follow-icon.component */ 19648);
/* harmony import */ var _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./up-down-vote-buttons/up-down-vote-buttons.component */ 86812);
/* harmony import */ var _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment-vote-bar/comment-vote-bar.component */ 17855);
/* harmony import */ var _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./follow-comment-buttons/follow-comment-buttons.component */ 56264);
/* harmony import */ var _jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobs-filter-popover/jobs-filter-popover.component */ 99820);
/* harmony import */ var _posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts-filter-popover/posts-filter-popover.component */ 78546);
/* harmony import */ var _reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reply-options-popover/reply-options-popover.component */ 56438);













let CustomComponentsModule = class CustomComponentsModule {
};
CustomComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot()
        ],
        declarations: [
            _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_0__.HeartIconComponent,
            _events_favorites_icon_events_favorites_icon_component__WEBPACK_IMPORTED_MODULE_1__.EventsFavoritesIconComponent,
            _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_2__.FollowIconComponent,
            _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_3__.UpDownVoteButtonsComponent,
            _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_4__.CommentVoteBarComponent,
            _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_5__.FollowCommentButtonsComponent,
            _jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_6__.JobsFilterPopoverComponent,
            _posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__.PostsFilterPopoverComponent,
            _reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_8__.ReplyOptionsPopoverComponent
        ],
        exports: [
            _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_0__.HeartIconComponent,
            _events_favorites_icon_events_favorites_icon_component__WEBPACK_IMPORTED_MODULE_1__.EventsFavoritesIconComponent,
            _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_2__.FollowIconComponent,
            _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_3__.UpDownVoteButtonsComponent,
            _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_4__.CommentVoteBarComponent,
            _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_5__.FollowCommentButtonsComponent,
            _jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_6__.JobsFilterPopoverComponent,
            _posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__.PostsFilterPopoverComponent,
            _reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_8__.ReplyOptionsPopoverComponent
        ]
    })
], CustomComponentsModule);



/***/ }),

/***/ 10877:
/*!*************************************************************************************!*\
  !*** ./src/app/components/events-favorites-icon/events-favorites-icon.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsFavoritesIconComponent": () => (/* binding */ EventsFavoritesIconComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _events_favorites_icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-favorites-icon.component.html?ngResource */ 18036);
/* harmony import */ var _events_favorites_icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-favorites-icon.component.scss?ngResource */ 8730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ 80106);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
var _a, _b, _c;








let EventsFavoritesIconComponent = class EventsFavoritesIconComponent {
    constructor(events, toast, router) {
        this.events = events;
        this.toast = toast;
        this.router = router;
        this.iconName = 'heart';
        this.favoritedAnimation = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.unFavoritedAnimation = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.favoriteState = 'unfavorited';
        for (let favEvent of this.events.favoriteEvents) {
            if (this.event === favEvent) {
                console.log('There was a match!');
                console.log(favEvent);
                this.favoriteState = 'favorited';
            }
            else {
                this.favoriteState = 'unfavorited';
            }
        }
        return;
    }
    toggleLikeState() {
        if (this.favoriteState === 'unfavorited') {
            this.setFavoriteStateOn();
            return this.events.favoriteThisEvent(this.event);
        }
        else {
            this.setFavoriteStateOff();
            return this.events.unFavoriteThisEvent(this.event);
        }
    }
    setFavoriteStateOn() {
        this.favoriteState = 'favorited';
        this.favoritedAnimation.emit({
            favorited: true,
            msg: `${this.event} was favorited`
        });
    }
    setFavoriteStateOff() {
        this.favoriteState = 'unfavorited';
        this.unFavoritedAnimation.emit({
            favorited: false,
            msg: `${this.event} was unfavorited`
        });
    }
    FavoriteStateOff() {
        this.favoriteState = 'unfavorited';
    }
    // Toasts
    favoriteToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are favorite to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
    notfavoriteToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are no longer favorite to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
    eventPage(event) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne, event.addressOne, event.city, event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
    }
};
EventsFavoritesIconComponent.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
EventsFavoritesIconComponent.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    userEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    favoritedAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    unFavoritedAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
EventsFavoritesIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-events-favorites-icon',
        template: _events_favorites_icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('heart', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('unfavorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                    color: '#999',
                    opacity: '1',
                    transform: 'scale(0.9)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('favorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                    color: '#e4405f',
                    opacity: '1',
                    transform: 'scale(1)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('unfavorited <=> favorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('100ms ease-out'))
            ])
        ],
        styles: [_events_favorites_icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService !== "undefined" && _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController) === "function" ? _b : Object, typeof (_c = typeof _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router) === "function" ? _c : Object])
], EventsFavoritesIconComponent);



/***/ }),

/***/ 56264:
/*!***************************************************************************************!*\
  !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowCommentButtonsComponent": () => (/* binding */ FollowCommentButtonsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _follow_comment_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-comment-buttons.component.html?ngResource */ 78729);
/* harmony import */ var _follow_comment_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-comment-buttons.component.scss?ngResource */ 31766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84505);
var _a, _b, _c, _d;









let FollowCommentButtonsComponent = class FollowCommentButtonsComponent {
    constructor(router, posts, profile, toast) {
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.comments = [];
        this.followers = [];
        this.following = false;
        this.followingLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.followingLength = null;
        this.commentsLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.commentsLength = null;
    }
    ngOnInit() {
        // Get information about post
        this.posts.getPostInfo(this.postID)
            .subscribe(postDetails => {
            let comments = postDetails['comments'];
            let followers = postDetails['followers'];
            let following = false;
            this.profile.getUserDetails().subscribe(userDetails => {
                let userEmail = userDetails['email'];
                followers.find(findFollower);
                function findFollower(follower) {
                    if (!follower) {
                        // User is not following post
                    }
                    if (follower === userEmail) {
                        following = true;
                    }
                }
                this.followers = followers;
                this.comments = comments;
                this.userEmail = userEmail;
                this.following = following;
                this.followingLength$.next(followers.length);
                this.followingLength$.subscribe(data => {
                    this.followingLength = data;
                });
                this.commentsLength$.next(followers.length);
                this.commentsLength$.subscribe(data => {
                    this.commentsLength = data;
                });
            });
        });
    }
    follow(postID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log('Following Post');
            yield console.log(postID);
            yield this.posts.followPost(postID, this.userEmail);
            this.following = true;
            this.followingLength$.next(this.followingLength + 1);
            yield this.followToast();
        });
    }
    followToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const followToast = yield this.toast.create({
                cssClass: 'followed-toast',
                message: 'You are FOLLOWING this post',
                duration: 2000
            });
            followToast.present();
        });
    }
    unFollow(postID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log('Unfollowing Post');
            yield console.log(postID);
            yield this.posts.unFollowPost(postID, this.userEmail);
            this.following = false;
            this.followingLength$.next(this.followingLength - 1);
            yield this.unFollowToast();
        });
    }
    unFollowToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const unFollowToast = yield this.toast.create({
                cssClass: 'unfollowed-toast',
                message: 'You are UNFOLLOWING this post',
                duration: 2000
            });
            unFollowToast.present();
        });
    }
    postPage() {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', this.postID]);
    }
};
FollowCommentButtonsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
FollowCommentButtonsComponent.propDecorators = {
    postID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    commentLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    postEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
FollowCommentButtonsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-follow-comment-buttons',
        template: _follow_comment_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_follow_comment_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router) === "function" ? _a : Object, typeof (_b = typeof src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostsService !== "undefined" && src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostsService) === "function" ? _b : Object, typeof (_c = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController) === "function" ? _d : Object])
], FollowCommentButtonsComponent);



/***/ }),

/***/ 19648:
/*!*****************************************************************!*\
  !*** ./src/app/components/follow-icon/follow-icon.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowIconComponent": () => (/* binding */ FollowIconComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _follow_icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-icon.component.html?ngResource */ 97532);
/* harmony import */ var _follow_icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-icon.component.scss?ngResource */ 91669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ 69166);
var _a;






let FollowIconComponent = class FollowIconComponent {
    constructor(posts) {
        this.posts = posts;
        this.followState = 'not-followed';
        this.iconName = 'checkbox-outline';
    }
    ngOnInit() { }
    toggleLikeState(post) {
        if (this.followState === 'not-followed') {
            this.followState = 'followed';
            this.iconName = 'checkbox';
            console.log('Followed: ' + post._id + '\n' + this.userEmail);
            this.posts.followPost(post._id, this.userEmail);
        }
        else {
            this.followState = 'not-followed';
            this.iconName = 'checkbox-outline';
            console.log('Un-Followed');
            this.posts.unFollowPost(post._id, this.userEmail);
        }
    }
};
FollowIconComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService }
];
FollowIconComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    userEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
FollowIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-follow-icon',
        template: _follow_icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('follow', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('not-followed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    color: '#d1d8e0',
                    opacity: '0.4',
                    transform: 'scale(0.9)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('followed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    color: '#21ce99',
                    opacity: '1',
                    transform: 'scale(1)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('not-followed <=> followed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('100ms ease-out'))
            ])
        ],
        styles: [_follow_icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService !== "undefined" && _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService) === "function" ? _a : Object])
], FollowIconComponent);



/***/ }),

/***/ 87811:
/*!***************************************************************!*\
  !*** ./src/app/components/heart-icon/heart-icon.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeartIconComponent": () => (/* binding */ HeartIconComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _heart_icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heart-icon.component.html?ngResource */ 88082);
/* harmony import */ var _heart_icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heart-icon.component.scss?ngResource */ 51968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/jobs.service */ 11912);
var _a;






let HeartIconComponent = class HeartIconComponent {
    constructor(jobs) {
        this.jobs = jobs;
        this.iconName = 'heart';
        this.favoritedAnimation = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.unFavoritedAnimation = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.favoriteState = 'unfavorited';
        console.log(this.favoriteJobs);
        for (const favJob of this.favoriteJobs) {
            if (this.job === favJob) {
                console.log('There was a match!');
                console.log(favJob);
                this.favoriteState = 'favorited';
            }
            else {
                this.favoriteState = 'unfavorited';
            }
        }
        return;
    }
    toggleLikeState() {
        if (this.favoriteState === 'unfavorited') {
            this.setFavoriteStateOn();
            return this.jobs.favoriteThisJob(this.job);
        }
        else {
            this.setFavoriteStateOff();
            return this.jobs.unFavoriteThisJob(this.job);
        }
    }
    setFavoriteStateOn() {
        this.favoriteState = 'favorited';
        this.favoritedAnimation.emit({
            favorited: true,
            msg: `${this.job} was favorited`
        });
    }
    setFavoriteStateOff() {
        this.favoriteState = 'unfavorited';
        this.unFavoritedAnimation.emit({
            favorited: false,
            msg: `${this.job} was unfavorited`
        });
    }
};
HeartIconComponent.ctorParameters = () => [
    { type: src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService }
];
HeartIconComponent.propDecorators = {
    job: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    favoriteJobs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    favoritedAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    unFavoritedAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
HeartIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-heart-icon',
        template: _heart_icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('heart', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('unfavorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    color: '#999',
                    opacity: '1',
                    transform: 'scale(0.9)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('favorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    color: '#e4405f',
                    opacity: '1',
                    transform: 'scale(1)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('unfavorited <=> favorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('100ms ease-out'))
            ])
        ],
        styles: [_heart_icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService !== "undefined" && src_app_services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService) === "function" ? _a : Object])
], HeartIconComponent);



/***/ }),

/***/ 99820:
/*!*********************************************************************************!*\
  !*** ./src/app/components/jobs-filter-popover/jobs-filter-popover.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsFilterPopoverComponent": () => (/* binding */ JobsFilterPopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _jobs_filter_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs-filter-popover.component.html?ngResource */ 24501);
/* harmony import */ var _jobs_filter_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-filter-popover.component.scss?ngResource */ 89570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/emitters/filter-jobs.service */ 67677);
var _a, _b;






let JobsFilterPopoverComponent = class JobsFilterPopoverComponent {
    constructor(popoverController, filterJobsService) {
        this.popoverController = popoverController;
        this.filterJobsService = filterJobsService;
        // Initial Filter applied to each no page will be the newest filter.
        this.selection = null;
    }
    ngOnInit() {
        this.selection = this.filter;
        return;
    }
    selectOption(e) {
        this.selection = e.detail.value;
        console.log(this.selection);
        this.dismiss();
        return;
    }
    dismiss() {
        this.filterJobsService.filterBehaviorSub.next(this.selection);
        return this.popoverController.dismiss({
            data: this.selection
        });
    }
};
JobsFilterPopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController },
    { type: src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_2__.FilterJobsService }
];
JobsFilterPopoverComponent.propDecorators = {
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ["filter",] }]
};
JobsFilterPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-jobs-filter-popover',
        template: _jobs_filter_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jobs_filter_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController) === "function" ? _a : Object, typeof (_b = typeof src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_2__.FilterJobsService !== "undefined" && src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_2__.FilterJobsService) === "function" ? _b : Object])
], JobsFilterPopoverComponent);



/***/ }),

/***/ 78546:
/*!***********************************************************************************!*\
  !*** ./src/app/components/posts-filter-popover/posts-filter-popover.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsFilterPopoverComponent": () => (/* binding */ PostsFilterPopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _posts_filter_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts-filter-popover.component.html?ngResource */ 22085);
/* harmony import */ var _posts_filter_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts-filter-popover.component.scss?ngResource */ 49270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/emitters/filter-posts.service */ 15588);
var _a, _b, _c;







let PostsFilterPopoverComponent = class PostsFilterPopoverComponent {
    constructor(popoverController, filterPostsService, navParams) {
        this.popoverController = popoverController;
        this.filterPostsService = filterPostsService;
        this.navParams = navParams;
        // Initial Filter applied to each no page will be the newest filter.
        this.selection = "newest";
    }
    ngOnInit() {
        this.filterFromPostsPage = this.navParams.get('filter');
        this.selection = this.filterFromPostsPage;
    }
    selectOption(e) {
        this.selection = e.detail.value;
        console.log(this.selection);
        this.filterPostsService.filterPosts(this.selection);
    }
    dismiss() {
        this.popoverController.dismiss({
            data: this.selection
        });
    }
};
PostsFilterPopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController },
    { type: src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_2__.FilterPostsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams }
];
PostsFilterPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-posts-filter-popover',
        template: _posts_filter_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_posts_filter_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController) === "function" ? _a : Object, typeof (_b = typeof src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_2__.FilterPostsService !== "undefined" && src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_2__.FilterPostsService) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams) === "function" ? _c : Object])
], PostsFilterPopoverComponent);



/***/ }),

/***/ 56438:
/*!*************************************************************************************!*\
  !*** ./src/app/components/reply-options-popover/reply-options-popover.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyOptionsPopoverComponent": () => (/* binding */ ReplyOptionsPopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reply_options_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reply-options-popover.component.html?ngResource */ 6189);
/* harmony import */ var _reply_options_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reply-options-popover.component.scss?ngResource */ 77173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 34362);
var _a, _b, _c;





let ReplyOptionsPopoverComponent = class ReplyOptionsPopoverComponent {
    constructor(popoverController, alertController, loadingController) {
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.loadingController = loadingController;
    }
    ngOnInit() { }
    selectOption(e) {
        this.selection = e.detail.value;
        console.log(this.selection);
        switch (this.selection) {
            case 'edit':
                console.log('Editting!');
                break;
            case 'delete':
                console.log('Deleting!');
                this.presentAlertConfirm();
                break;
            case 'report':
                console.log('Reporting!');
                break;
            default:
                break;
        }
    }
    dismiss() {
        this.popoverController.dismiss({
            data: this.selection
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Delete?',
                message: 'Are you sure?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Deleting');
                            // TODO: Delete Reply
                            yield this.deleteLoading();
                            yield alert.dismiss();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Deleting Reply ...',
                duration: 1000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
ReplyOptionsPopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
ReplyOptionsPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-reply-options-popover',
        template: _reply_options_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reply_options_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController) === "function" ? _c : Object])
], ReplyOptionsPopoverComponent);



/***/ }),

/***/ 86812:
/*!***********************************************************************************!*\
  !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpDownVoteButtonsComponent": () => (/* binding */ UpDownVoteButtonsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _up_down_vote_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./up-down-vote-buttons.component.html?ngResource */ 31420);
/* harmony import */ var _up_down_vote_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./up-down-vote-buttons.component.scss?ngResource */ 91371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
var _a, _b, _c, _d;









let UpDownVoteButtonsComponent = class UpDownVoteButtonsComponent {
    constructor(posts, profile, toast, postsEmitterService) {
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.postsEmitterService = postsEmitterService;
        this.upVotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.downVotes$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.followingLength$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.followingLength = null;
        this.following = false;
        this.upVoters = [];
        this.downVoters = [];
        this.followers = [];
        this.upVoted = false;
        this.downVoted = false;
    }
    ngOnInit() {
        // Get information about post
        this.posts.getPostInfo(this.postID)
            .subscribe(postInfo => {
            this.upVotes = postInfo['upvotes'];
            this.downVotes = postInfo['downvotes'];
            this.upVoters = postInfo['upvoters'];
            this.downVoters = postInfo['downvoters'];
            let followers = postInfo['followers'];
            this.upVotes$.next(this.upVotes);
            this.downVotes$.next(this.downVotes);
            this.upVoteLength = this.upVotes$.getValue();
            this.downVoteLength = this.downVotes$.getValue();
            // Get User Email
            this.profile.getUserDetails()
                .subscribe(userDetails => {
                let userEmail = userDetails['email'];
                let following = false;
                let upVoted = false;
                let downVoted = false;
                followers.find(findFollower);
                function findFollower(follower) {
                    if (!follower) {
                        // User is not following post
                    }
                    if (follower === userEmail) {
                        following = true;
                    }
                }
                this.upVoters.find(findUpVoter);
                this.downVoters.find(findDownVoter);
                function findUpVoter(upVoter) {
                    if (!upVoter) {
                    }
                    if (upVoter === userEmail) {
                        return upVoted = true;
                    }
                    console.log(`Upvoter: ${upVoter}`);
                }
                function findDownVoter(downVoter) {
                    if (!downVoter) {
                    }
                    if (downVoter === userEmail) {
                        return downVoted = true;
                    }
                }
                this.userEmail = userEmail;
                this.upVoted = upVoted;
                this.downVoted = downVoted;
                this.followers = followers;
                this.following = following;
                console.log(followers.length);
                this.followingLength$.next(followers.length);
                this.followingLength$.subscribe(data => {
                    this.followingLength = data;
                });
            });
        });
    }
    upVotePost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.posts.upVotePost(this.postID, this.userEmail)
                .subscribe(data => {
                const upvotes = (data['upvotes']);
                const downvotes = (data['downvotes']);
                console.log(data);
                this.upVotes$.next(upvotes);
                this.downVotes$.next(downvotes);
                this.upVoted = true;
                this.upVoteLength = this.upVotes$.getValue();
                this.downVoteLength = this.downVotes$.getValue();
                if (this.upVoted === true) {
                    return this.downVoted = false;
                }
            });
            this.postsEmitterService.postPageRefresh();
            this.upVotePostToast();
        });
    }
    upVotePostToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const upVotePostToast = yield this.toast.create({
                cssClass: 'upvoted-toast',
                message: 'You have UPVOTED this post.',
                duration: 2000
            });
            upVotePostToast.present();
        });
    }
    downVotePost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.posts.downVotePost(this.postID, this.userEmail)
                .subscribe(data => {
                const upvotes = (data['upvotes']);
                const downvotes = (data['downvotes']);
                console.log(data);
                this.upVotes$.next(upvotes);
                this.downVotes$.next(downvotes);
                this.downVoted = true;
                this.upVoteLength = this.upVotes$.getValue();
                this.downVoteLength = this.downVotes$.getValue();
                if (this.downVoted === true) {
                    return this.upVoted = false;
                }
            });
            this.postsEmitterService.postPageRefresh();
            this.downVoteToast();
        });
    }
    downVoteToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const downVoteToast = yield this.toast.create({
                cssClass: 'downvoted-toast',
                message: 'You have DOWNVOTED this post.',
                duration: 2000
            });
            downVoteToast.present();
        });
    }
    follow(postID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log('Following Post');
            yield console.log(postID);
            yield this.posts.followPost(postID, this.postEmail);
            this.following = true;
            this.followingLength$.next(this.followingLength + 1);
            yield this.followToast();
        });
    }
    followToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const followToast = yield this.toast.create({
                cssClass: 'followed-toast',
                message: 'You are FOLLOWING this post',
                duration: 2000
            });
            followToast.present();
        });
    }
    unFollow(postID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log('Unfollowing Post');
            yield console.log(postID);
            yield this.posts.unFollowPost(postID, this.postEmail);
            this.following = false;
            this.followingLength$.next(this.followingLength - 1);
            yield this.unFollowToast();
        });
    }
    unFollowToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const unFollowToast = yield this.toast.create({
                cssClass: 'unfollowed-toast',
                message: 'You are UNFOLLOWING this post',
                duration: 2000
            });
            unFollowToast.present();
        });
    }
};
UpDownVoteButtonsComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService }
];
UpDownVoteButtonsComponent.propDecorators = {
    postID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    postEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    isUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
UpDownVoteButtonsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-up-down-vote-buttons',
        template: _up_down_vote_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_up_down_vote_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService !== "undefined" && src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService) === "function" ? _a : Object, typeof (_b = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController) === "function" ? _c : Object, typeof (_d = typeof src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService !== "undefined" && src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService) === "function" ? _d : Object])
], UpDownVoteButtonsComponent);



/***/ }),

/***/ 81615:
/*!*************************************************************!*\
  !*** ./src/app/emitters/favorites-event-emitter.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesEventEmitterService": () => (/* binding */ FavoritesEventEmitterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let FavoritesEventEmitterService = class FavoritesEventEmitterService {
    constructor() {
        this.invokeJobsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onBackAction() {
        this.invokeJobsPageRefresh.emit();
    }
};
FavoritesEventEmitterService.ctorParameters = () => [];
FavoritesEventEmitterService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], FavoritesEventEmitterService);



/***/ }),

/***/ 67677:
/*!*************************************************!*\
  !*** ./src/app/emitters/filter-jobs.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterJobsService": () => (/* binding */ FilterJobsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);



let FilterJobsService = class FilterJobsService {
    constructor() {
        this.filterBehaviorSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('newest');
    }
    filterJobs(selection) {
        console.log('Emitting from FilterJobs Emitter...');
        this.filterBehaviorSub.next(selection);
    }
};
FilterJobsService.ctorParameters = () => [];
FilterJobsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], FilterJobsService);



/***/ }),

/***/ 15588:
/*!**************************************************!*\
  !*** ./src/app/emitters/filter-posts.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPostsService": () => (/* binding */ FilterPostsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let FilterPostsService = class FilterPostsService {
    constructor() {
        this.filterPostsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    filterPosts(selection) {
        console.log('Emitting from FilterPosts Emitter...');
        this.filterPostsEmitter.emit(selection);
    }
};
FilterPostsService.ctorParameters = () => [];
FilterPostsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], FilterPostsService);



/***/ }),

/***/ 50806:
/*!*******************************************************!*\
  !*** ./src/app/emitters/post-page-emitter.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPageEmitterService": () => (/* binding */ PostPageEmitterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let PostPageEmitterService = class PostPageEmitterService {
    constructor() {
        this.invokePostsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onBackAction() {
        this.invokePostsPageRefresh.emit();
    }
    postPageRefresh() {
        this.invokePostsPageRefresh.emit();
    }
};
PostPageEmitterService.ctorParameters = () => [];
PostPageEmitterService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], PostPageEmitterService);



/***/ }),

/***/ 78968:
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);
var _a;



let AuthGuardService = class AuthGuardService {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        return this.auth.isAuthenticated();
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
AuthGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [typeof (_a = typeof _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService !== "undefined" && _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService) === "function" ? _a : Object])
], AuthGuardService);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 16490);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ 37045);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.service */ 39181);
/* harmony import */ var _jobs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs.service */ 11912);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events.service */ 80106);
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.service */ 69166);
/* harmony import */ var _mentor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mentor.service */ 58600);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;















let AuthService = class AuthService {
    constructor(http, storage, profile, jobs, events, posts, mentors, alertController, helper, plt, router, toast) {
        this.http = http;
        this.storage = storage;
        this.profile = profile;
        this.jobs = jobs;
        this.events = events;
        this.posts = posts;
        this.mentors = mentors;
        this.alertController = alertController;
        this.helper = helper;
        this.plt = plt;
        this.router = router;
        this.toast = toast;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url;
        this.TOKEN_KEY = 'access_token';
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
        // Inside the constructor we always check for an existing token so we can automatically log in a user
        this.plt.ready().then(() => {
            this.checkToken();
        });
        this.authenticationState.subscribe();
    }
    /**
     * Looks up our storage for a valid JWT and if found,
     * changes our authenticationState.
     *
     *  - Auth Token
     *  - User Details
     *  - Data that Populates the following Sections:
     *    ~ Jobs & User's Favorite Jobs
     *    ~ Events & User's Favorite Events
     *    ~ Posts, User's Posts & User's Favorite Posts
     *    ~ Mentors
     *
     */
    checkToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get(this.TOKEN_KEY).then((token) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (token) {
                    // Decode Token
                    let decoded = this.helper.decodeToken(token);
                    let isExpired = this.helper.isTokenExpired(token);
                    // If Token is expired, remove Token.
                    if (!isExpired) {
                        // Get User Details
                        this.activeEmail = decoded['email'];
                        yield this.didPopulateUserData(this.activeEmail);
                        yield this.authenticationState.next(true);
                    }
                    else {
                        console.log('Token Removed from Storage');
                        this.storage.remove(this.TOKEN_KEY);
                        return this.authenticationState.next(false);
                    }
                }
                else {
                    // There is no Token!
                    console.log('There was no Token!');
                    // Get user email then populate user data
                    return this.authenticationState.next(false);
                }
            }));
        });
    }
    register() {
        this.http.post(`${this.BACKEND_URL}/api/signup`, this.user).subscribe();
    }
    /**
     * Log in to FYF. Will create and set a JWT for Auth,
     * then pre populate data in all pages
     * @param data - Form Data from LoginComponent
     * @returns - void
     */
    login(data) {
        console.log('Logging in');
        return this.loginSub = this.http.post(`${this.BACKEND_URL}/api`, { email: data.email,
            password: data.password
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(res => {
            if (!res) {
                console.log('There was no response.');
                return;
            }
            // Set Token
            this.storage.set(this.TOKEN_KEY, res['token']);
            // Get User information from Token
            this.user = this.helper.decodeToken(res['token']);
            // Populate Pages with initial
            this.didPopulateUserData(this.user.email);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(e => {
            console.error(e);
            if (e.error.msg === 'The email and password don\'t match.') {
                this.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
            }
            else if (e.error.msg === 'The user does not exist') {
                this.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
            }
            else if (e.message.startsWith('Http failure response')) {
                this.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
            }
            else {
                this.presentAlert('Email/Password Error', 'Please try again.');
            }
            throw new Error(e);
        }))
            // If everything is successfull, set the Auth State to true,
            // which will navigate to Home page (Tabs Module initial route)
            .subscribe(data => {
            this.authenticationState.next(true);
            console.log('Successfully Logged In.');
            console.log(data);
        });
    }
    /**
     * Populate User's Data thoughout multiple Pages of the app
     * Favorite Jobs, Events, and Posts
     * User's Created Posts
     * All Initial Jobs, Events, Posts, and Mentors
     * @param email
     */
    didPopulateUserData(email) {
        this.populateDataSub = this.http.post(`${this.BACKEND_URL}/api/home/user`, { email: email })
            .subscribe(userDetails => {
            // Get User's Favorite Jobs, Events, Posts.
            // Get User's created Posts
            let usersFavoriteJobs = userDetails['favoriteJobs'];
            let usersFavoriteEvents = userDetails['eventsGoing'];
            let usersFavoritePosts = userDetails['followedPost'];
            // TODO: ---
            let usersCreatedPosts = userDetails['posts'];
            // Send this info to Jobs, Events, and Posts Service
            this.jobs.favoriteJobs$.next(usersFavoriteJobs);
            this.jobs.activeEmail = this.activeEmail;
            this.events.favoriteEvents$.next(usersFavoriteEvents);
            this.events.activeEmail = this.activeEmail;
            this.posts.favoritePosts$.next(usersFavoritePosts);
            this.posts.activeEmail = this.activeEmail;
            this.userProfilePicture = userDetails['profilePicture'];
            // Get initial Jobs, Events, Posts, and Mentors
            this.posts.getPosts();
            this.jobs.getJobs();
            this.events.getEvents();
            this.mentors.getMentors();
        });
    }
    logout() {
        this.storage.remove(this.TOKEN_KEY).then((token) => {
            console.log('Logging out...');
            this.user = null;
            this.authenticationState.next(false);
            // window.location.reload();
        });
    }
    forgotPassword(email, newPassword) {
        return this.http.post(`${this.BACKEND_URL}/api/login-credentials/forgot-password`, { email, newPassword }).subscribe();
    }
    checkIfUserExits(email) {
        return this.http.post(`${this.BACKEND_URL}/api/forgot-password`, { email });
    }
    sendEmailWithCodeForgotPassword(code, email) {
        return this.http.post(`${this.BACKEND_URL}/api/forgot-password/email-code`, { code, email }).subscribe();
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    //  Sign up Functions
    getPersonalInfo(data) {
        console.log('Sent Personal Infoto Auth Service: ');
        this.user.fullName = data.fullName;
        this.user.phone = data.phone;
        this.user.about = data.about;
        this.user.gender = data.gender;
        this.user.dob = data.dob;
        this.user.school = data.school;
        this.user.grade = data.grade;
    }
    getProfilePicture(data) {
        console.log('Sending Profile Picture URL to Auth Service...');
        this.user.profilePicture = data;
        console.log(this.user);
    }
    getResume(data) {
        console.log('data from auth service: ' + data);
        console.log('Sent Resume to Auth Service');
        this.user.resume = data;
        console.log(this.user);
    }
    getLoginCredentials(email, password) {
        console.log('Sent Login Credentials to Auth Service');
        this.user.email = email;
        this.user.password = password;
        console.log(this.user);
    }
    doesUserExists(email, password) {
        return this.http.post(`${this.BACKEND_URL}/api/signup/does-user-exist`, { email, password });
    }
    cancelSignUp() {
        this.user = null;
        this.router.navigateByUrl('');
        this.cancelSignUpToast();
    }
    sendEmailWithCode(code, email) {
        console.log('almost there');
        return this.http.post(`${this.BACKEND_URL}/api/login-credentials`, { code, email }).subscribe();
    }
    // Toasts
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'There was an error with your password or email. Please try again.',
                duration: 5000,
                cssClass: 'wrong-password-toast',
                keyboardClose: true,
                position: 'top',
            });
            toast.present();
        });
    }
    cancelSignUpToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You have cancelled signing up.',
                duration: 2000,
                cssClass: 'danger-toast',
                keyboardClose: true
            });
            toast.present();
        });
    }
    presentAlert(header, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'danger-alert',
                header,
                message: msg,
                buttons: [{
                        text: 'OK'
                    }]
            });
            yield alert.present();
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__.Storage },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _jobs_service__WEBPACK_IMPORTED_MODULE_3__.JobsService },
    { type: _events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_5__.PostsService },
    { type: _mentor_service__WEBPACK_IMPORTED_MODULE_6__.MentorsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _ionic_storage__WEBPACK_IMPORTED_MODULE_12__.Storage !== "undefined" && _ionic_storage__WEBPACK_IMPORTED_MODULE_12__.Storage) === "function" ? _b : Object, typeof (_c = typeof _profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService !== "undefined" && _profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService) === "function" ? _c : Object, typeof (_d = typeof _jobs_service__WEBPACK_IMPORTED_MODULE_3__.JobsService !== "undefined" && _jobs_service__WEBPACK_IMPORTED_MODULE_3__.JobsService) === "function" ? _d : Object, typeof (_e = typeof _events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService !== "undefined" && _events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService) === "function" ? _e : Object, typeof (_f = typeof _post_service__WEBPACK_IMPORTED_MODULE_5__.PostsService !== "undefined" && _post_service__WEBPACK_IMPORTED_MODULE_5__.PostsService) === "function" ? _f : Object, typeof (_g = typeof _mentor_service__WEBPACK_IMPORTED_MODULE_6__.MentorsService !== "undefined" && _mentor_service__WEBPACK_IMPORTED_MODULE_6__.MentorsService) === "function" ? _g : Object, typeof (_h = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController) === "function" ? _h : Object, typeof (_j = typeof _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService !== "undefined" && _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService) === "function" ? _j : Object, typeof (_k = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform) === "function" ? _k : Object, typeof (_l = typeof _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router) === "function" ? _l : Object, typeof (_m = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController) === "function" ? _m : Object])
], AuthService);



/***/ }),

/***/ 80106:
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": () => (/* binding */ EventsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
var _a;





let EventsService = class EventsService {
    constructor(http) {
        this.http = http;
        this.favoriteEvents$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.favoriteEvents = [];
        this.allEvents = [];
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.favoriteEvents$.subscribe(data => {
            this.favoriteEvents = data;
        });
    }
    getEvents() {
        console.log('Getting Events');
        this.http.get(`${this.BACKEND_URL}/api/events`)
            .subscribe(events => {
            this.allEvents = Object.values(events);
            console.log(this.allEvents);
            return this.allEvents;
        });
    }
    getEventsFavorites(id) {
        return this.http.post(`${this.BACKEND_URL}/api/events/events-going`, { _id: id });
    }
    favoriteThisEvent(id) {
        return this.http.post(`${this.BACKEND_URL}/api/events/go-to-event`, { email: this.activeEmail, _id: id });
    }
    unFavoriteThisEvent(id) {
        return this.http.post(`${this.BACKEND_URL}/api/events/dont-go-to-event`, { email: this.activeEmail, _id: id });
    }
    deleteEvent(eventId) {
        return this.http.post(`${this.BACKEND_URL}/api/events/delete-event`, { _id: eventId });
    }
};
EventsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient) === "function" ? _a : Object])
], EventsService);



/***/ }),

/***/ 11912:
/*!******************************************!*\
  !*** ./src/app/services/jobs.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsService": () => (/* binding */ JobsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 34362);
var _a, _b;






let JobsService = class JobsService {
    constructor(toast, http) {
        this.toast = toast;
        this.http = http;
        this.favoriteJobs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.favoriteJobs = [];
        this.allJobs = [];
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.favoriteJobs$.subscribe(data => {
            this.favoriteJobs = data;
        });
    }
    /**
     * Get all Jobs from Database, sorted by the most Recently Posted
     */
    getJobs() {
        console.log('Getting Jobs');
        this.http.get(`${this.BACKEND_URL}/api/jobs`)
            .subscribe(jobs => {
            this.allJobs = Object.values(jobs);
            console.log(this.allJobs);
            return this.allJobs;
        });
    }
    getFavorites(email) {
        console.clear();
        console.log(email);
        console.log('Getting Favorites');
        return this.http.post(`${this.BACKEND_URL}/api/jobs/get-favorites`, { email: email });
    }
    favoriteThisJob(job) {
        return this.http.post(`${this.BACKEND_URL}/api/jobs/favorite`, { email: this.activeEmail, _id: job }).subscribe(data => {
            console.log("Favorites: ", data);
            this.favoriteJobs$.next(this.favoriteJobs.concat([job]));
            this.presentToastFavorited('You favorited this job!');
        });
    }
    unFavoriteThisJob(job) {
        return this.http.post(`${this.BACKEND_URL}/api/jobs/unfavorite`, { email: this.activeEmail, _id: job }).subscribe(data => {
            console.log("Favorites: ", data);
            for (let i = 0; i < this.favoriteJobs.length; i++) {
                if (this.favoriteJobs[i] === job) {
                    this.favoriteJobs.splice(i, 1);
                }
            }
            this.favoriteJobs$.next(this.favoriteJobs);
            this.presentToastUnfavorited('You removed this job from Favorites.');
        });
        // update favoriteJobsSubject
        console.log('Unfavoriting this Job');
    }
    presentToastFavorited(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 3000,
                cssClass: 'favorited-toast',
                position: 'bottom'
            });
            toast.present();
        });
    }
    presentToastUnfavorited(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 3000,
                cssClass: 'unfavorited-toast',
                position: 'bottom'
            });
            toast.present();
        });
    }
    sendEmailApplication(user, age, phoneNumber, reason, jobTitle, jobCompanyEmail) {
        console.log(`Sending email to ${jobCompanyEmail}`);
        return this.http.post(`${this.BACKEND_URL}/api/jobs/send-application`, { user, age, phoneNumber, reason, jobTitle, jobCompanyEmail });
    }
};
JobsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
JobsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController) === "function" ? _a : Object, typeof (_b = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient) === "function" ? _b : Object])
], JobsService);



/***/ }),

/***/ 58600:
/*!********************************************!*\
  !*** ./src/app/services/mentor.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorsService": () => (/* binding */ MentorsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
var _a;




let MentorsService = class MentorsService {
    constructor(http) {
        this.http = http;
        this.allMentors = [];
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
    }
    getMentors() {
        console.log('Getting Mentors');
        return this.http.get(`${this.BACKEND_URL}/api/mentors`)
            .subscribe(mentors => {
            this.allMentors = Object.values(mentors);
            console.log(this.allMentors);
            return this.allMentors;
        });
        ;
    }
    sendMentorAnEmail(message, mentorName, mentorEmail, studentEmail, studentName, studentCity, studentState, studentAge, studentGrade, studentSchool, studentProfilePic, studentResume) {
        console.log(`Sending email to ${mentorEmail}`);
        return this.http.post(`${this.BACKEND_URL}/api/mentors/mentor-message`, {
            message,
            mentorName,
            mentorEmail,
            studentEmail,
            studentName,
            studentCity,
            studentState,
            studentAge,
            studentGrade,
            studentSchool,
            studentProfilePic,
            studentResume
        });
    }
};
MentorsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
MentorsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient) === "function" ? _a : Object])
], MentorsService);



/***/ }),

/***/ 79744:
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 33959);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 46774);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 55217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
var _a;







let NotificationsService = class NotificationsService {
    constructor(http) {
        this.http = http;
        this.notifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.notifications = [];
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.messagesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.messages$ = this.messagesSubject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchAll)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(e => { throw e; }));
    }
    getNotifications(email) {
        console.log('Getting Notifications');
        console.log(email);
        return this.http.post(`${this.BACKEND_URL}/api/notifications`, { email: email })
            .subscribe(notifications => {
            this.allNotifications = Object.values(notifications);
            console.log(this.allNotifications);
            return this.allNotifications;
        });
    }
    clearNotifications(email) {
        console.log('Clearing Notifications');
        console.log(email);
        return this.http.post(`${this.BACKEND_URL}/api/notifications/clear-notifications`, { email: email });
    }
    deleteNotification(email, notiID) {
        console.log('Attemtpting to delete notification');
        return this.http.post(`${this.BACKEND_URL}/api/notifications/delete-notification`, { email, notiID });
    }
    commentNotification(instigatingUser, recievingUser, postID, commentID) {
        console.log(`Sending notfication to ${recievingUser} that ${instigatingUser} commented on their post.`);
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/notifications/comment-on-post-notification`, { instigatingUser, recievingUser, postID, commentID }).subscribe((n) => {
            console.log(n);
            this.sendMessageWS(n);
        });
    }
    replyNotification(instigatingUser, recievingUser, postID, commentID, replyID) {
        console.log(`Sending notfication to ${recievingUser} that ${instigatingUser} commented on their post.`);
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/notifications/reply-on-comment-notification`, { instigatingUser, recievingUser, postID, commentID, replyID });
    }
    // public connect(cfg: { reconnect: boolean } = { reconnect: false }): void {
    //   console.log('Attempting to connect to WebSocket.');
    //   console.log(cfg);
    //   if (!this.socket$ || this.socket$.closed) {
    //     this.socket$ = this.getNewWebSocket();
    //     this.socket$.subscribe(
    //       (socket) => {
    //         console.log(socket)
    //       });
    //     const messages = this.socket$.pipe(cfg.reconnect ? this.reconnect : o => o,
    //       tap({
    //         error: error => console.log(error),
    //       }), catchError(_ => EMPTY))
    //     this.messagesSubject$.next(messages);
    //   }
    // }
    // private getNewWebSocket() {
    //   console.log('Creating new WebSocket');
    //   return webSocket({
    //     url: WS_ENDPOINT,
    //     serializer: msg => JSON.stringify({roles: "admin,user", msg: msg}),
    //     deserializer: ({data}) => data,
    //     closeObserver: {
    //       next: () => {
    //         console.log('Service: connection closed');
    //         this.socket$ = undefined;
    //         this.connect({ reconnect: true });
    //       }
    //     }
    //   });
    // }
    reconnect(observable) {
        return observable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(errors => errors.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(val => console.log('[Data Service] Try to reconnect', val)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delayWhen)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(2000)))));
    }
    sendMessageWS(notifications) {
        console.log('Sending Message to WebSocket');
        console.log(notifications);
        this.socket$.next(notifications);
    }
    close() {
        this.socket$.complete();
    }
};
NotificationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient }
];
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient) === "function" ? _a : Object])
], NotificationsService);



/***/ }),

/***/ 69166:
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsService": () => (/* binding */ PostsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile.service */ 39181);
var _a, _b;






let PostsService = class PostsService {
    constructor(http, profile) {
        this.http = http;
        this.profile = profile;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.allPosts = [];
        this.myPosts = [];
        this.postsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.commentsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.favoritePosts$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.myPostSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    getPosts() {
        return this.http.get(`${this.BACKEND_URL}/api/posts/`)
            .subscribe(posts => {
            this.allPosts = Object.values(posts);
            console.log(this.allPosts);
            return this.allPosts;
        });
        ;
    }
    getMyPosts(email) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/my-posts`, { email });
    }
    getPostInfo(id) {
        // console.log(`Getting information for post id ${id}`);
        return this.http.post(`${this.BACKEND_URL}/api/posts/post-info`, { _id: id });
    }
    addPost(creatorName, creatorEmail, creatorProfilePicture, hashtags, post, title) {
        console.log('Adding post to post que...');
        console.log('Post: ', post);
        return this.http.post(`${this.BACKEND_URL}/api/posts/add-text-post`, { creatorName, creatorEmail, creatorProfilePicture, hashtags, post, title });
    }
    comment(postID, userFullName, userEmail, userProfilePicture, comment) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/comment`, { postID, userFullName, userEmail, userProfilePicture, comment });
    }
    editPost(postID, newPost) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/edit-post`, { postID, newPost });
    }
    editComment(commentID, postID, newComment) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/edit-comment`, { postID, commentID, newComment });
    }
    // Upvote Post
    upVotePost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/up-vote-post`, { postID, userEmail });
    }
    // Downvote Post
    downVotePost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/down-vote-post`, { postID, userEmail });
    }
    // Upvote
    upVoteComment(postID, commentID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/up-vote-comment`, { postID, commentID, userEmail });
    }
    // Downvote
    downVoteComment(postID, commentID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/down-vote-comment`, { postID, commentID, userEmail });
    }
    followPost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/follow`, {
            _id: postID,
            email: userEmail
        }).subscribe(data => {
            let updatedFollowingPosts = [...Object.values(data)];
            this.favoritePosts$.next(updatedFollowingPosts);
        });
    }
    unFollowPost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/unfollow`, {
            _id: postID,
            email: userEmail
        }).subscribe(data => {
            let updatedFollowingPosts = [...Object.values(data)];
            this.favoritePosts$.next(updatedFollowingPosts);
        });
    }
    getFollowedPost(userId) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/get-followed-posts`, { _id: userId });
    }
    deleteComment(postID, commentID) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/delete-comment`, { _id: postID, _cid: commentID });
    }
    deletePost(postID) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/delete-post`, { _id: postID });
    }
    // tslint:disable-next-line: max-line-length
    reportComment(commentID, commentContents, post, postID, reportedUserName, reportedUserProfilePicture, reportedUserEmail, commentDate, userEmail, userFullname, reportReason) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/posts/report`, { commentID, commentContents, post, postID, reportedUserName, reportedUserProfilePicture, reportedUserEmail, commentDate, userEmail, userFullname, reportReason });
    }
    replyComment(commentID, postID, reply, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/posts/reply-comment`, { postID: postID, commentID: commentID, reply: reply, userFullName: userFullName, userProfilePicture: userProfilePicture, userEmail: userEmail, commentUserEmail: commentUserEmail, commentUserFullName: commentUserFullName });
    }
    deleteReply(replyID, commentID, postID) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/delete-reply`, { _rid: replyID, _cid: commentID, _pid: postID });
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService }
];
PostsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService !== "undefined" && _services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService) === "function" ? _b : Object])
], PostsService);



/***/ }),

/***/ 39181:
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
var _a, _b, _c;








let ProfileService = class ProfileService {
    constructor(http, 
    // private auth: AuthService,
    router, toastController) {
        this.http = http;
        this.router = router;
        this.toastController = toastController;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.activeEmail = '';
        // user = {};
        this.fullName = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.about = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.city = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.zip = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.gender = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.dob = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.school = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.grade = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.profilePicture = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.resume = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.email = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.phone = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        // Needs the User's email address from the JSON Web Token stored on device.
    }
    getAllUsers() {
        return this.http.get(`${this.BACKEND_URL}/api/home/user`);
    }
    //  Gets User Details from Server to populate the Profile tab with User information.
    getUserDetails() {
        return this.http.post(`${this.BACKEND_URL}/api/home/user`, { email: this.activeEmail });
    }
    getTheirDetails(email) {
        return this.http.post(`${this.BACKEND_URL}/api/home/user/their-details`, { email });
    }
    changeEmail(newEmail, password) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/home/user/change-email`, {
            oldEmail: this.activeEmail,
            email: newEmail,
            password: password
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(e => {
            this.presentFailToast(this.activeEmail);
            throw new Error(e);
        }))
            .subscribe(data => {
            if (data === true) {
                this.email.next(newEmail);
                this.activeEmail = newEmail;
                this.router.navigate(['/home/profile']);
                this.presentSuccessToast();
            }
            else {
                this.presentFailToast(this.activeEmail);
                return console.log('Passwords dont match');
            }
        });
    }
    changePhone(newPhone, password) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(`${this.BACKEND_URL}/api/home/user/change-phone`, {
            email: this.email,
            newPhone: newPhone,
            password: password
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(e => {
            this.presentFailToast(this.activeEmail);
            throw new Error(e);
        }))
            .subscribe(data => {
            if (data === true) {
                this.phone.next(newPhone);
                this.phone = newPhone;
                this.router.navigate(['/home/profile']);
                this.presentSuccessToast();
            }
            else {
                this.presentFailToast(this.activeEmail);
                return console.log('Passwords dont match');
            }
        });
    }
    // Toast for Successful Change
    presentSuccessToast() {
        const successToast = this.toastController.create({
            message: 'Your Email address has been updated.',
            duration: 3000,
            cssClass: 'updated-toast',
            keyboardClose: true,
            position: 'bottom'
        });
        successToast.then(t => t.present());
    }
    presentFailToast(email) {
        // Toast for Successful Change
        const failToast = this.toastController.create({
            // tslint:disable-next-line: max-line-length
            message: `Password and Email combination do not work. Make sure that your password is correct, and that your new email is different from your current email address of ${email}`,
            duration: 9000,
            cssClass: 'wrong-password-toast',
            keyboardClose: true,
            position: 'top'
        });
        failToast.then(t => t.present());
    }
    changePassword(activeEmail, oldPassword, newPassword, reTypeNewPassword) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-password`, {
                oldPassword,
                email: activeEmail,
                newPassword,
                reTypeNewPassword
            })
                .subscribe(data => {
                // if the passwords match, navigate back to landing page
                if (data === true) {
                    console.log('TRUE');
                    this.router.navigate(['']);
                    let toast = this.toastController.create({
                        message: 'Password updated. Please login with your new password.',
                        duration: 3000,
                        cssClass: 'updated-toast',
                        keyboardClose: true,
                        position: 'bottom'
                    });
                    toast.then(t => t.present());
                }
                else {
                    console.log('Passwords dont match!');
                }
            });
        });
    }
    changeAbout(email, newAbout, passsword) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-about`, { email, newAbout, passsword }).subscribe();
        });
    }
    changeSchool(email, newSchool, newGrade, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`, {
                email,
                newSchool,
                newGrade,
                password
            }).subscribe(data => {
                if (data === true) {
                    this.school.next(newSchool);
                    this.grade.next(newGrade);
                    this.router.navigate(['/home/profile']);
                    let successToast = this.toastController.create({
                        // tslint:disable-next-line: max-line-length
                        message: 'Your school information has been updated.',
                        duration: 3000,
                        cssClass: 'updated-toast',
                        keyboardClose: true,
                        position: 'bottom'
                    });
                    successToast.then(t => t.present());
                }
                else {
                    let failToast = this.toastController.create({
                        // tslint:disable-next-line: max-line-length
                        message: 'Please make sure your password is correct',
                        duration: 3000,
                        cssClass: 'wrong-password-toast',
                        keyboardClose: true,
                        position: 'top',
                    });
                    failToast.then(t => t.present());
                    return console.log('Passwords dont match');
                }
            });
        });
    }
    changeProfilePicture(imageForm, oldPhotoKey) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return this.http.post(`${this.BACKEND_URL}/api/photo/change-profile-picture`, {
                imageForm, oldPhotoKey
            }).subscribe();
        });
    }
    changeResume(email, newResume, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`, {
                email,
                newResume,
                password
            }).subscribe(data => {
                if (data === true) {
                    console.log('Changing Resume...');
                    this.resume.next(newResume);
                    this.router.navigate(['/home/user/change-school/:school/:grade/confirm']);
                }
                else {
                    return console.log('Passwords dont match');
                }
            });
        });
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ProfileService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController) === "function" ? _c : Object])
], ProfileService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/plugins/zone-error */ 15856);
/* harmony import */ var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// const url is commented out depending on which you are testing with.
// local host is for local machine and 10.0.1.8 is for android testing

const ip = '10.0.1.16';
const mobileIp = '192.168.43.128';
const wsEndpoint = 'ws://localhost:8081';
const baseUrl = `http://${ip}:3000`;
const fairsUrl = `http://${ip}:4000`;
const environment = {
    production: false,
    url: baseUrl,
    fairsUrl: fairsUrl,
    wsEndpoint
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).then(() => {
    if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        navigator.serviceWorker.register('/ngsw-worker.js');
    }
}).catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		14832,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 69360:
/*!****************************************************************************************!*\
  !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".upvote {\n  border-radius: 5px;\n  width: 60px;\n  position: relative;\n  --color: #005191;\n}\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n.downvote {\n  border-radius: 5px;\n  width: 60px;\n  padding-left: 0px;\n  --color: #005191;\n}\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n.upvoted-toast {\n  --background: #005191;\n}\n.downvoted-toast {\n  --background: #FFB351;\n}\n.followed-toast {\n  --background: #24d8a8;\n}\n.unfollowed-toast {\n  --background: #FFB351;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtdm90ZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ047QUFFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ047QUFHRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7QUFDRTtFQUNFLHFCQUFBO0FBRUoiLCJmaWxlIjoiY29tbWVudC12b3RlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHZvdGV7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6ICMwMDUxOTE7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gIC5kb3dudm90ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgICAgLS1mb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gIFxuICAudXB2b3RlZC10b2FzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xuICB9XG4gIC5kb3dudm90ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgfVxuICBcbiAgLmZvbGxvd2VkLXRvYXN0IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIH1cbiAgLnVuZm9sbG93ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgfSJdfQ== */";

/***/ }),

/***/ 8730:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/events-favorites-icon/events-favorites-icon.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".details-button-mobile {\n  margin-right: 10px;\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  --background: none;\n  --border-color: #0055a5;\n  --border-style: solid;\n  --border-width: 2px;\n  --border-radius: 5px;\n  --color: #0055a5;\n  font-size: 0.7em;\n  font-weight: 700;\n}\n\n#favorited-caption {\n  color: #e3405f;\n  font-size: 0.6em;\n  opacity: 0;\n  display: inline-block;\n  animation: favorite-caption-fade-in 1s ease forwards;\n}\n\n@keyframes favorite-caption-fade-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(6px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy1mYXZvcml0ZXMtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG9EQUFBO0FBRUY7O0FBQUE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQUdGO0VBREE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFHRjtBQUNGIiwiZmlsZSI6ImV2ZW50cy1mYXZvcml0ZXMtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLWJ1dHRvbi1tb2JpbGUge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTVhNTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogIzAwNTVhNTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNmYXZvcml0ZWQtY2FwdGlvbiB7XG4gIGNvbG9yOiAjZTM0MDVmO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFuaW1hdGlvbjogZmF2b3JpdGUtY2FwdGlvbi1mYWRlLWluIDFzIGVhc2UgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGZhdm9yaXRlLWNhcHRpb24tZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 31766:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".comment-button {\n  --color: #0055a5;\n  font-size: 1em;\n  font-size: 800;\n  border-radius: 5px;\n  position: relative;\n  right: 8px;\n}\n\nion-icon {\n  height: 40px;\n  width: 40px;\n  position: relative;\n  left: -5px;\n  font-weight: 600;\n}\n\n@media screen and (max-width: 567px) {\n  .comment-button {\n    font-size: 0.82em;\n    font-weight: 600;\n    width: 80px;\n    --width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy1jb21tZW50LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJmb2xsb3ctY29tbWVudC1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtYnV0dG9ue1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogOHB4O1xufVxuaW9uLWljb24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC01cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb21tZW50LWJ1dHRvbntcbiAgICAgIGZvbnQtc2l6ZTogMC44MmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgLS13aWR0aDogNzBweDtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 91669:
/*!******************************************************************************!*\
  !*** ./src/app/components/follow-icon/follow-icon.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-icon {\n  --color: lightgrey;\n}\n\n@media screen and (max-width: 567px) {\n  .follow-button, .unfollow-button {\n    font-size: 0.52em;\n    font-weight: 600;\n    width: 80px;\n    --width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNDO0lBQ0ssaUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJmb2xsb3ctaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgLS1jb2xvcjogbGlnaHRncmV5O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAuZm9sbG93LWJ1dHRvbiwgLnVuZm9sbG93LWJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDAuNTJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIC0td2lkdGg6IDcwcHg7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 51968:
/*!****************************************************************************!*\
  !*** ./src/app/components/heart-icon/heart-icon.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-icon {\n  z-index: 9999;\n  position: relative;\n}\n\n#favorited-caption {\n  color: #e3405f;\n  font-size: 0.6em;\n  position: relative;\n  top: -10px;\n  opacity: 0;\n  display: inline-block;\n  animation: favorite-caption-fade-in 1s ease forwards;\n}\n\n@keyframes favorite-caption-fade-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(6px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG9EQUFBO0FBRUY7O0FBQUE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQUdGO0VBREE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFHRjtBQUNGIiwiZmlsZSI6ImhlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNmYXZvcml0ZWQtY2FwdGlvbiB7XG4gIGNvbG9yOiAjZTM0MDVmO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYW5pbWF0aW9uOiBmYXZvcml0ZS1jYXB0aW9uLWZhZGUtaW4gMXMgZWFzZSBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgZmF2b3JpdGUtY2FwdGlvbi1mYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpO1xuICB9XG59Il19 */";

/***/ }),

/***/ 89570:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/jobs-filter-popover/jobs-filter-popover.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzLWZpbHRlci1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 49270:
/*!************************************************************************************************!*\
  !*** ./src/app/components/posts-filter-popover/posts-filter-popover.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy1maWx0ZXItcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 77173:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/reply-options-popover/reply-options-popover.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBseS1vcHRpb25zLXBvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 91371:
/*!************************************************************************************************!*\
  !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-buttons {\n  position: relative;\n  left: -10px;\n}\n\n.upvote {\n  border-radius: 5px;\n  position: relative;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n\n.upvoted-toast {\n  --background: #005191;\n}\n\n.downvoted-toast {\n  --background: #FFB351;\n}\n\n.followed-toast {\n  --background: #24d8a8;\n}\n\n.unfollowed-toast {\n  --background: #FFB351;\n}\n\n.follow-button {\n  --color: #888;\n  --border-style: solid;\n  --border-width: 3px;\n  --border-color: #888;\n  font-size: 0.6em;\n  font-weight: 800;\n  border-radius: 5px;\n  width: 100px;\n  margin-left: 10px;\n}\n\n.unfollow-button {\n  --color: #faa71b;\n  --border-style: solid;\n  --border-width: 3px;\n  --border-color: #faa71b;\n  font-size: 0.6em;\n  font-weight: 800;\n  border-radius: 5px;\n  width: 100px;\n  margin-left: 10px;\n}\n\n@media screen and (max-width: 567px) {\n  .follow-button, .unfollow-button {\n    font-size: 0.52em;\n    font-weight: 600;\n    width: 80px;\n    --width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwLWRvd24tdm90ZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU1BO0VBQ0UscUJBQUE7QUFIRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoidXAtZG93bi12b3RlLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi51cHZvdGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1jb2xvcjogIzAwNTE5MTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5cbi5kb3dudm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAtLWZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4udXB2b3RlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbn1cbi5kb3dudm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cbi5mb2xsb3dlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbn1cbi51bmZvbGxvd2VkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZCMzUxO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICM4ODg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgLS1ib3JkZXItY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMC42MGVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8vIENoYW5nZSBjb2xvclxuLnVuZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmYWE3MWI7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmYWE3MWI7XG4gIGZvbnQtc2l6ZTogMC42MGVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5mb2xsb3ctYnV0dG9uLCAudW5mb2xsb3ctYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC41MmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgLS13aWR0aDogNzBweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n\n";

/***/ }),

/***/ 63757:
/*!****************************************************************************************!*\
  !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-toolbar style=\"--background: none\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n";

/***/ }),

/***/ 18036:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/events-favorites-icon/events-favorites-icon.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid>\n    <ion-row class=\"ion-justify-content-end\">\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-icon (click)=\"toggleLikeState()\" \n                tappable \n                [@heart]=\"this.favoriteState\" \n                style=\"font-size: 2em\" \n                [name]=\"iconName\"></ion-icon>\n                <p *ngIf=\"this.favoriteState === 'favorited'\"\n                   id=\"favorited-caption\"\n                >FAVORITED</p>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n                <ion-button class=\"details-button-mobile\" (click)=\"eventPage(event)\">\n                    Details\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-row>\n</ion-grid>\n";

/***/ }),

/***/ 78729:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-toolbar style=\"--background: none;\">\n  <ion-buttons slot=\"end\">\n    <ion-button\n    class=\"comment-button\"\n    (click)=\"postPage()\"><ion-icon src=\"../../assets/icon/comments-icon.svg\"></ion-icon> {{comments.length}}\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>";

/***/ }),

/***/ 97532:
/*!******************************************************************************!*\
  !*** ./src/app/components/follow-icon/follow-icon.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleLikeState(post)\" tappable [@follow]=\"followState\" size=\"medium\" [name]=\"iconName\"></ion-icon>\n";

/***/ }),

/***/ 88082:
/*!****************************************************************************!*\
  !*** ./src/app/components/heart-icon/heart-icon.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-icon (click)=\"toggleLikeState()\" \n    tappable \n    [@heart]=\"this.favoriteState\" \n    style=\"font-size: 2em; color: #ffffff42;\" \n    [name]=\"iconName\">\n</ion-icon>\n<p *ngIf=\"this.favoriteState === 'favorited'\"\n   id=\"favorited-caption\"\n>FAVORITED</p>\n";

/***/ }),

/***/ 24501:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/jobs-filter-popover/jobs-filter-popover.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-radio-group [value]=\"this.selection\" (ionChange)=\"selectOption($event)\" name=\"job-menu-filter\">\n  <ion-item lines=\"none\">\n    <ion-label>Pay - High to Low</ion-label>\n    <ion-radio value=\"htol\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Pay - Low to High</ion-label>\n    <ion-radio value=\"ltoh\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Newest</ion-label>\n    <ion-radio value=\"newest\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Oldest</ion-label>\n    <ion-radio value=\"oldest\"></ion-radio>\n  </ion-item>\n  <ion-item class=\"ion-text-center\" (click)=\"dismiss()\" button lines=\"none\">\n    <ion-label style=\"color: #e3405f\">Close</ion-label>\n  </ion-item>\n</ion-radio-group>";

/***/ }),

/***/ 22085:
/*!************************************************************************************************!*\
  !*** ./src/app/components/posts-filter-popover/posts-filter-popover.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-radio-group [value]=\"this.selection\" (ionChange)=\"selectOption($event)\" name=\"post-menu-filter\">\n  <ion-item lines=\"none\">\n    <ion-label>Most Comments</ion-label>\n    <ion-radio value=\"mostc\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Most Upvotes</ion-label>\n    <ion-radio value=\"mostu\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Most Followers</ion-label>\n    <ion-radio value=\"mostf\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Newest</ion-label>\n    <ion-radio value=\"newest\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Oldest</ion-label>\n    <ion-radio value=\"oldest\"></ion-radio>\n  </ion-item>\n  <ion-item class=\"ion-text-center\" (click)=\"dismiss()\" button lines=\"none\">\n    <ion-label style=\"color: #e3405f\">Close</ion-label>\n  </ion-item>\n</ion-radio-group>";

/***/ }),

/***/ 6189:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/reply-options-popover/reply-options-popover.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-radio-group (ionChange)=\"selectOption($event)\" name=\"reply-option-menu\">\n  <ion-item lines=\"none\">\n    <ion-label>Delete</ion-label>\n    <ion-radio value=\"delete\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Edit</ion-label>\n    <ion-radio value=\"edit\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Report</ion-label>\n    <ion-radio value=\"report\"></ion-radio>\n  </ion-item>\n  <ion-item class=\"ion-text-center\" (click)=\"dismiss()\" button lines=\"none\">\n    <ion-label style=\"color: #e3405f\">Close</ion-label>\n  </ion-item>\n</ion-radio-group>";

/***/ }),

/***/ 31420:
/*!************************************************************************************************!*\
  !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-toolbar style=\"--background: none;\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n\n      <ion-button *ngIf=\"!following\" class=\"follow-button\" (click)=\"follow(postID)\">Follow {{followingLength}}\n      </ion-button>\n      <ion-button *ngIf=\"following\" class=\"unfollow-button\" (click)=\"unFollow(postID)\">Unfollow {{followingLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map