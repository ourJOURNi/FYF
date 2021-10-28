(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_formatDistanceToNow_index_js"), __webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_pages_events_events_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/events/events.module */ 95105)).then(m => m.EventsPageModule)
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/notifications.service */ 79744);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);









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
    ngOnDestroy() {
        this.auth.authenticationState.unsubscribe();
    }
    initializeApp() {
        this.auth.checkToken();
        // this.notifications.connect();
        this.notifications.messages$
            .pipe(
        // map(rows => rows.data),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => { throw error; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)({
            error: error => console.log('[Live component] Error:', error),
            complete: () => console.log('[Live component] Connection Closed')
        }))
            .subscribe((e) => {
            console.log(e);
        });
        // Notification.requestPermission((e) => {
        //   console.log(e);
        // });
        let img = '../assets/icons/icon-72x72.svg';
        let text = 'This is a notification.';
        // let notification = new Notification('To do list', {body: text, icon: img});
        this.platform.ready().then(() => {
        });
        // State for the User. If Authentication State == False, the app reverts back to the landing page
        this.auth.authenticationState.subscribe((state) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (state) {
                this.router.navigate(['home']);
            }
            else {
                this.router.navigate(['']);
            }
        }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router])
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jwtOptionsFactory": function() { return /* binding */ jwtOptionsFactory; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 55036);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ion-bottom-drawer */ 21224);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/custom-component.module */ 64941);
/* harmony import */ var _emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitters/post-page-emitter.service */ 50806);
/* harmony import */ var _emitters_favorites_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emitters/favorites-event-emitter.service */ 81615);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 59865);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 24575);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/service-worker */ 72249);

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentVoteBarComponent": function() { return /* binding */ CommentVoteBarComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_comment_vote_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comment-vote-bar.component.html */ 81620);
/* harmony import */ var _comment_vote_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-vote-bar.component.scss */ 59300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);









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
        template: _raw_loader_comment_vote_bar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comment_vote_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController,
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService])
], CommentVoteBarComponent);



/***/ }),

/***/ 64941:
/*!*******************************************************!*\
  !*** ./src/app/components/custom-component.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomComponentsModule": function() { return /* binding */ CustomComponentsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heart-icon/heart-icon.component */ 87811);
/* harmony import */ var _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./going-icon/going-icon.component */ 78520);
/* harmony import */ var _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-going-icon/not-going-icon.component */ 94661);
/* harmony import */ var _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./follow-icon/follow-icon.component */ 19648);
/* harmony import */ var _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./up-down-vote-buttons/up-down-vote-buttons.component */ 86812);
/* harmony import */ var _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment-vote-bar/comment-vote-bar.component */ 17855);
/* harmony import */ var _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./follow-comment-buttons/follow-comment-buttons.component */ 56264);
/* harmony import */ var _jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobs-filter-popover/jobs-filter-popover.component */ 99820);
/* harmony import */ var _posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts-filter-popover/posts-filter-popover.component */ 78546);
/* harmony import */ var _reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reply-options-popover/reply-options-popover.component */ 56438);














let CustomComponentsModule = class CustomComponentsModule {
};
CustomComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot()
        ],
        declarations: [
            _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_0__.HeartIconComponent,
            _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_1__.GoingIconComponent,
            _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_2__.NotGoingIconComponent,
            _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_3__.FollowIconComponent,
            _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_4__.UpDownVoteButtonsComponent,
            _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_5__.CommentVoteBarComponent,
            _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_6__.FollowCommentButtonsComponent,
            _jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__.JobsFilterPopoverComponent,
            _posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_8__.PostsFilterPopoverComponent,
            _reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_9__.ReplyOptionsPopoverComponent
        ],
        exports: [
            _heart_icon_heart_icon_component__WEBPACK_IMPORTED_MODULE_0__.HeartIconComponent,
            _going_icon_going_icon_component__WEBPACK_IMPORTED_MODULE_1__.GoingIconComponent,
            _not_going_icon_not_going_icon_component__WEBPACK_IMPORTED_MODULE_2__.NotGoingIconComponent,
            _follow_icon_follow_icon_component__WEBPACK_IMPORTED_MODULE_3__.FollowIconComponent,
            _up_down_vote_buttons_up_down_vote_buttons_component__WEBPACK_IMPORTED_MODULE_4__.UpDownVoteButtonsComponent,
            _comment_vote_bar_comment_vote_bar_component__WEBPACK_IMPORTED_MODULE_5__.CommentVoteBarComponent,
            _follow_comment_buttons_follow_comment_buttons_component__WEBPACK_IMPORTED_MODULE_6__.FollowCommentButtonsComponent,
            _jobs_filter_popover_jobs_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__.JobsFilterPopoverComponent,
            _posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_8__.PostsFilterPopoverComponent,
            _reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_9__.ReplyOptionsPopoverComponent
        ]
    })
], CustomComponentsModule);



/***/ }),

/***/ 56264:
/*!***************************************************************************************!*\
  !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowCommentButtonsComponent": function() { return /* binding */ FollowCommentButtonsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_follow_comment_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./follow-comment-buttons.component.html */ 56812);
/* harmony import */ var _follow_comment_buttons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-comment-buttons.component.scss */ 66525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26215);









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
        template: _raw_loader_follow_comment_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_follow_comment_buttons_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router,
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostsService,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController])
], FollowCommentButtonsComponent);



/***/ }),

/***/ 19648:
/*!*****************************************************************!*\
  !*** ./src/app/components/follow-icon/follow-icon.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowIconComponent": function() { return /* binding */ FollowIconComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_follow_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./follow-icon.component.html */ 46897);
/* harmony import */ var _follow_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-icon.component.scss */ 73325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ 69166);






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
        template: _raw_loader_follow_icon_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
        styles: [_follow_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService])
], FollowIconComponent);



/***/ }),

/***/ 78520:
/*!***************************************************************!*\
  !*** ./src/app/components/going-icon/going-icon.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoingIconComponent": function() { return /* binding */ GoingIconComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_going_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./going-icon.component.html */ 3749);
/* harmony import */ var _going_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./going-icon.component.scss */ 46301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ 80106);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/events-event-emitter.service */ 9193);










let GoingIconComponent = class GoingIconComponent {
    constructor(events, eventsEventEmitterService, toast, router, profile) {
        this.events = events;
        this.eventsEventEmitterService = eventsEventEmitterService;
        this.toast = toast;
        this.router = router;
        this.profile = profile;
        this.going = false;
        this.goingState = 'not-going';
        this.iconName = 'add-circle-outline';
    }
    ngOnInit() {
        // Get the User's details
        this.profile.getUserDetails().subscribe(details => {
            this.userEmail = details['email'];
            let eventsGoing = details['eventsGoing'];
            if (eventsGoing.includes(this.event._id)) {
                this.going = true;
                this.goingState = 'going';
            }
            else {
                this.going = false;
                this.goingState = 'not-going';
            }
        });
    }
    toggleGoingState(event) {
        if (this.goingState === 'not-going') {
            // Going
            this.goingState = 'going';
            this.iconName = 'close-circle-outline';
            this.going = true;
            this.goingToast();
            console.log(`Going to event, ${event.title}`);
            this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe(events => {
                let updatedEvents = [...Object.values(events['eventsGoing']), this.event._id];
                this.events.eventsGoing$.next(updatedEvents);
                console.log(this.events.eventsGoing$.getValue());
            });
        }
        else {
            // Not Going
            this.goingState = 'not-going';
            this.iconName = 'add-circle-outline';
            this.going = false;
            this.notGoingToast();
            console.log('No longer going to Event');
            this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe(events => {
                const eventsGoing = this.events.eventsGoing$.getValue();
                for (let i = 0; i < eventsGoing.length; i++) {
                    if (eventsGoing[i] === this.event._id) {
                        eventsGoing.splice(i, 1);
                    }
                }
                console.log(eventsGoing);
                this.events.eventsGoing$.next(eventsGoing);
            });
        }
    }
    goingToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
    notGoingToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are no longer going to this event.',
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
GoingIconComponent.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService }
];
GoingIconComponent.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    userEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
GoingIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-going-icon',
        template: _raw_loader_going_icon_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('going', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('going', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
                    color: 'blue',
                    opacity: '0.4',
                    transition: '0.5s',
                    transform: 'scale(0.9)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('not-going', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
                    color: '#21ce99',
                    opacity: '1',
                    transition: '0.5s',
                    transform: 'scale(1)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('not-going <=> going', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('100ms ease-out'))
            ])
        ],
        styles: [_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService,
        src_app_emitters_events_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__.EventsEventEmitterService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService])
], GoingIconComponent);



/***/ }),

/***/ 87811:
/*!***************************************************************!*\
  !*** ./src/app/components/heart-icon/heart-icon.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeartIconComponent": function() { return /* binding */ HeartIconComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_heart_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./heart-icon.component.html */ 37167);
/* harmony import */ var _heart_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heart-icon.component.scss */ 62947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favorites.service */ 85097);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);







let HeartIconComponent = class HeartIconComponent {
    constructor(favorites, profile) {
        this.favorites = favorites;
        this.profile = profile;
        this.favoriteState = 'unfavorited';
        this.iconName = 'heart';
    }
    ngOnInit() {
        setTimeout(() => {
            for (const job of this.favoriteJobs) {
                if (this.job._id == job._id) {
                    this.setFavoriteStateOn();
                }
            }
        }, 300);
    }
    toggleLikeState() {
        if (this.favoriteState === 'unfavorited') {
            this.setFavoriteStateOn();
            this.favorites.favoriteThisJob(this.job);
        }
        else {
            this.setFavoriteStateOff();
            this.favorites.unFavoriteThisJob(this.job);
        }
    }
    setFavoriteStateOn() {
        this.favoriteState = 'favorited';
        this.iconName = 'heart';
    }
    setFavoriteStateOff() {
        this.favoriteState = 'unfavorited';
        this.iconName = 'heart';
    }
};
HeartIconComponent.ctorParameters = () => [
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService }
];
HeartIconComponent.propDecorators = {
    job: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    favoriteJobs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
HeartIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-heart-icon',
        template: _raw_loader_heart_icon_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('heart', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('unfavorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    color: '#999',
                    opacity: '1',
                    transform: 'scale(0.9)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('favorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    color: '#e4405f',
                    opacity: '1',
                    transform: 'scale(1)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('unfavorited <=> favorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('100ms ease-out'))
            ])
        ],
        styles: [_heart_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__.FavoritesService,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService])
], HeartIconComponent);



/***/ }),

/***/ 99820:
/*!*********************************************************************************!*\
  !*** ./src/app/components/jobs-filter-popover/jobs-filter-popover.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsFilterPopoverComponent": function() { return /* binding */ JobsFilterPopoverComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_jobs_filter_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./jobs-filter-popover.component.html */ 16607);
/* harmony import */ var _jobs_filter_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-filter-popover.component.scss */ 40958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/emitters/filter-jobs.service */ 67677);







let JobsFilterPopoverComponent = class JobsFilterPopoverComponent {
    constructor(popoverController, filterJobsService, navParams) {
        this.popoverController = popoverController;
        this.filterJobsService = filterJobsService;
        this.navParams = navParams;
        // Initial Filter applied to each no page will be the newest filter.
        this.selection = "newest";
    }
    ngOnInit() {
        this.filterFromJobsPage = this.navParams.get('filter');
        this.selection = this.filterFromJobsPage;
    }
    selectOption(e) {
        this.selection = e.detail.value;
        console.log(this.selection);
        this.filterJobsService.filterJobs(this.selection);
    }
    dismiss() {
        this.popoverController.dismiss({
            data: this.selection
        });
    }
};
JobsFilterPopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController },
    { type: src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_2__.FilterJobsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams }
];
JobsFilterPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-jobs-filter-popover',
        template: _raw_loader_jobs_filter_popover_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_jobs_filter_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController,
        src_app_emitters_filter_jobs_service__WEBPACK_IMPORTED_MODULE_2__.FilterJobsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams])
], JobsFilterPopoverComponent);



/***/ }),

/***/ 94661:
/*!***********************************************************************!*\
  !*** ./src/app/components/not-going-icon/not-going-icon.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotGoingIconComponent": function() { return /* binding */ NotGoingIconComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_not_going_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./not-going-icon.component.html */ 23922);
/* harmony import */ var _not_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-going-icon.component.scss */ 67023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ 80106);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);







let NotGoingIconComponent = class NotGoingIconComponent {
    constructor(events, toast) {
        this.events = events;
        this.toast = toast;
        this.notGoingState = 'not-going';
        this.iconName = 'add-circle';
    }
    ngOnInit() { }
    toggleNotGoingState(event) {
        if (this.notGoingState === 'not-going') {
            this.notGoingState = 'going';
            this.iconName = 'close-circle-outline';
            this.goingToast();
            console.log(`Going to event, ${event.title}`);
            this.events.goingToEvent(event._id, this.userEmail, this.id).subscribe();
        }
        else {
            this.notGoingState = 'not-not-going';
            this.iconName = 'add-circle-outline';
            this.notGoingToast();
            console.log('No longer going to Event');
            this.events.notGoingToEvent(event._id, this.userEmail, this.id).subscribe();
        }
    }
    goingToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
    notGoingToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You are no longer going to this event.',
                duration: 2000
            });
            toast.present();
        });
    }
};
NotGoingIconComponent.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
NotGoingIconComponent.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    userEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
NotGoingIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-not-going-icon',
        template: _raw_loader_not_going_icon_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('notGoing', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('not-going', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    color: '#e4405f',
                    opacity: '0.4',
                    transition: '0.5s',
                    transform: 'scale(0.9)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('not-not-going', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    color: '#21ce99',
                    opacity: '1',
                    transition: '0.5s',
                    transform: 'scale(1)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('not-going <=> ot-not-going', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('100ms ease-out'))
            ])
        ],
        styles: [_not_going_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_2__.EventsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController])
], NotGoingIconComponent);



/***/ }),

/***/ 78546:
/*!***********************************************************************************!*\
  !*** ./src/app/components/posts-filter-popover/posts-filter-popover.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsFilterPopoverComponent": function() { return /* binding */ PostsFilterPopoverComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_posts_filter_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./posts-filter-popover.component.html */ 19050);
/* harmony import */ var _posts_filter_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts-filter-popover.component.scss */ 84794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/emitters/filter-posts.service */ 15588);







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
        template: _raw_loader_posts_filter_popover_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_posts_filter_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController,
        src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_2__.FilterPostsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams])
], PostsFilterPopoverComponent);



/***/ }),

/***/ 56438:
/*!*************************************************************************************!*\
  !*** ./src/app/components/reply-options-popover/reply-options-popover.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyOptionsPopoverComponent": function() { return /* binding */ ReplyOptionsPopoverComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reply_options_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reply-options-popover.component.html */ 56074);
/* harmony import */ var _reply_options_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reply-options-popover.component.scss */ 67348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





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
        template: _raw_loader_reply_options_popover_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reply_options_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController])
], ReplyOptionsPopoverComponent);



/***/ }),

/***/ 86812:
/*!***********************************************************************************!*\
  !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpDownVoteButtonsComponent": function() { return /* binding */ UpDownVoteButtonsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_up_down_vote_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./up-down-vote-buttons.component.html */ 69495);
/* harmony import */ var _up_down_vote_buttons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./up-down-vote-buttons.component.scss */ 65568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);









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
        template: _raw_loader_up_down_vote_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_up_down_vote_buttons_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController,
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService])
], UpDownVoteButtonsComponent);



/***/ }),

/***/ 9193:
/*!**********************************************************!*\
  !*** ./src/app/emitters/events-event-emitter.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsEventEmitterService": function() { return /* binding */ EventsEventEmitterService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


let EventsEventEmitterService = class EventsEventEmitterService {
    constructor() {
        this.invokeEventsPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onBackAction() {
        this.invokeEventsPageRefresh.emit();
    }
    resetEvents() {
        console.log('Reseting Events Page');
        this.invokeEventsPageRefresh.emit();
    }
};
EventsEventEmitterService.ctorParameters = () => [];
EventsEventEmitterService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], EventsEventEmitterService);



/***/ }),

/***/ 81615:
/*!*************************************************************!*\
  !*** ./src/app/emitters/favorites-event-emitter.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesEventEmitterService": function() { return /* binding */ FavoritesEventEmitterService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterJobsService": function() { return /* binding */ FilterJobsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


let FilterJobsService = class FilterJobsService {
    constructor() {
        this.filterJobsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    filterJobs(selection) {
        console.log('Emitting from FilterJobs Emitter...');
        this.filterJobsEmitter.emit(selection);
    }
};
FilterJobsService.ctorParameters = () => [];
FilterJobsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], FilterJobsService);



/***/ }),

/***/ 15588:
/*!**************************************************!*\
  !*** ./src/app/emitters/filter-posts.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPostsService": function() { return /* binding */ FilterPostsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPageEmitterService": function() { return /* binding */ PostPageEmitterService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": function() { return /* binding */ AuthGuardService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);



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
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService])
], AuthGuardService);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 55036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);










let AuthService = class AuthService {
    constructor(http, storage, alertController, helper, plt, router, toast) {
        this.http = http;
        this.storage = storage;
        this.alertController = alertController;
        this.helper = helper;
        this.plt = plt;
        this.router = router;
        this.toast = toast;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url;
        this.TOKEN_KEY = 'access_token';
        this.user = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.activeEmail = '';
        //  Define type
        this.userInfo = {
            fullName: '',
            about: '',
            gender: '',
            dob: '',
            phone: '',
            school: '',
            grade: '',
            profilePicture: '',
            resume: '',
            email: '',
            password: ''
        };
        // Inside the constructor we always check for an existing token so we can automatically log in a user
        this.plt.ready().then(() => {
            this.checkToken();
            this.getEmailFromToken();
        });
        console.log('Authentication State');
        this.authenticationState.subscribe(console.log);
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
    }
    cancelSignUp() {
        this.user = {
            fullName: '',
            about: '',
            gender: '',
            dob: '',
            phone: '',
            school: '',
            grade: '',
            profilePicture: '',
            resume: '',
            email: '',
            password: ''
        };
        this.router.navigateByUrl('');
        this.cancelSignUpToast();
    }
    // Get UserInfo -- testing purposes. Delete eventually.
    getUserInfo() {
        console.log(this.userInfo);
    }
    //  Sign up Functions
    getPersonalInfo(data) {
        console.log('Sent Personal Infoto Auth Service: ');
        this.userInfo.fullName = data.fullName;
        this.userInfo.phone = data.phone;
        this.userInfo.about = data.about;
        this.userInfo.gender = data.gender;
        this.userInfo.dob = data.dob;
        this.userInfo.school = data.school;
        this.userInfo.grade = data.grade;
    }
    getProfilePicture(data) {
        console.log('Sending Profile Picture URL to Auth Service...');
        this.userInfo.profilePicture = data;
        console.log(this.userInfo);
    }
    getResume(data) {
        console.log('data from auth service: ' + data);
        console.log('Sent Resume to Auth Service');
        this.userInfo.resume = data;
        console.log(this.userInfo);
    }
    getLoginCredentials(email, password) {
        console.log('Sent Login Credentials to Auth Service');
        this.userInfo.email = email;
        this.userInfo.password = password;
        console.log(this.userInfo);
    }
    doesUserExists(email, password) {
        return this.http.post(`${this.BACKEND_URL}/api/signup/does-user-exist`, { email, password });
    }
    // looks up our storage for a valid JWT and if found, changes our authenticationState
    checkToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get(this.TOKEN_KEY).then(token => {
                if (token) {
                    const decoded = this.helper.decodeToken(token);
                    const isExpired = this.helper.isTokenExpired(token);
                    if (!isExpired) {
                        this.user = decoded;
                        console.log('Decoded Token: ' + JSON.stringify(decoded));
                        this.authenticationState.next(true);
                    }
                    else {
                        console.log('Token Removed from Storage');
                        this.storage.remove(this.TOKEN_KEY);
                    }
                }
            });
        });
    }
    checkIfUserExits(email) {
        return this.http.post(`${this.BACKEND_URL}/api/forgot-password`, { email });
    }
    getEmailFromToken() {
        this.storage.get(this.TOKEN_KEY).then(token => {
            if (token) {
                const decoded = this.helper.decodeToken(token);
                console.log('Token Email: ' + decoded.email);
                this.activeEmail = decoded.email;
            }
        });
    }
    //  Needs the Resonse Type to be text because I am sending the code, which isn't in JSON format
    sendEmailWithCode(code, email) {
        console.log('almost there');
        return this.http.post(`${this.BACKEND_URL}/api/login-credentials`, { code, email }).subscribe();
    }
    sendEmailWithCodeForgotPassword(code, email) {
        return this.http.post(`${this.BACKEND_URL}/api/forgot-password/email-code`, { code, email }).subscribe();
    }
    // Register User
    register() {
        this.http.post(`${this.BACKEND_URL}/api/signup`, this.userInfo).subscribe();
    }
    // Login User
    login(data) {
        console.log('Logging in');
        return this.loginSub = this.http.post(`${this.BACKEND_URL}/api`, { email: data.email,
            password: data.password
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(res => {
            if (!res) {
                console.log('There was no response.');
            }
            this.storage.set(this.TOKEN_KEY, res['token']);
            this.user = this.helper.decodeToken(res['token']);
            this.activeEmail = this.user.email;
            this.authenticationState.next(true);
            console.log('Active User: ' + this.user.email);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(e => {
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
            .subscribe();
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
    forgotPassword(email, newPassword) {
        return this.http.post(`${this.BACKEND_URL}/api/login-credentials/forgot-password`, { email, newPassword }).subscribe();
    }
    logout() {
        this.storage.remove(this.TOKEN_KEY).then((token) => {
            console.log('Logging out...');
            this.user = null;
            this.userInfo = {
                fullName: '',
                about: '',
                phone: '',
                gender: '',
                dob: '',
                school: '',
                grade: '',
                profilePicture: '',
                resume: '',
                email: '',
                password: ''
            },
                this.authenticationState.next(false);
            // window.location.reload();
        });
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController,
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController])
], AuthService);



/***/ }),

/***/ 80106:
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": function() { return /* binding */ EventsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);






let EventsService = class EventsService {
    constructor(http, profile) {
        this.http = http;
        this.profile = profile;
        this.eventsGoing$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
    }
    getEvents() {
        console.log('Getting Events');
        return this.http.get(`${this.BACKEND_URL}/api/events`);
    }
    getEventsGoing(id) {
        return this.http.post(`${this.BACKEND_URL}/api/events/events-going`, { _id: id });
    }
    goingToEvent(eventID, userEmail, id) {
        console.log(this.profile);
        return this.http.post(`${this.BACKEND_URL}/api/events/go-to-event`, { eventID, userEmail, id });
    }
    notGoingToEvent(eventID, userEmail, id) {
        return this.http.post(`${this.BACKEND_URL}/api/events/dont-go-to-event`, {
            userEmail,
            eventID,
            id
        });
    }
    deleteEvent(eventId) {
        return this.http.post(`${this.BACKEND_URL}/api/events/delete-event`, { _id: eventId });
    }
};
EventsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService }
];
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService])
], EventsService);



/***/ }),

/***/ 85097:
/*!***********************************************!*\
  !*** ./src/app/services/favorites.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesService": function() { return /* binding */ FavoritesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let FavoritesService = class FavoritesService {
    constructor(http, profile, toast) {
        this.http = http;
        this.profile = profile;
        this.toast = toast;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url;
        this.favoriteJobs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    getFavorites(email) {
        console.log('Getting Favorites');
        return this.http.post(`${this.BACKEND_URL}/api/jobs/get-favorites`, { email: email });
    }
    favoriteThisJob(job) {
        // get user's email for database query
        const email = this.profile.activeEmail;
        // put this job's id into this user's favoriteJobs property
        job.userEmail = email;
        let id = job._id;
        // this.favoriteJobs$.next([job]);
        return this.http.post(`${this.BACKEND_URL}/api/jobs/favorite`, { email: email, _id: id }).subscribe(data => {
            console.log('Posting Favorite Job to Database..');
            let updatedFavorites = [...Object.values(data)];
            this.favoriteJobs$.next(updatedFavorites);
            this.presentToastFavorited('You favorited this job!');
        });
    }
    unFavoriteThisJob(job) {
        // get user's email for database query
        const email = this.profile.activeEmail;
        job.userEmail = email;
        let id = job._id;
        // post to database
        this.http.post(`${this.BACKEND_URL}/api/jobs/unfavorite`, { email: email, _id: id }).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Unfavorite data value: ", data);
            let updatedFavorites = [...Object.values(data)];
            // for (let i = 0; i < updatedFavorites.length; i++) {
            //   if (updatedFavorites[i] === job) {
            //     updatedFavorites.splice(i, 1);
            //   }
            // }
            this.favoriteJobs$.next(updatedFavorites);
            this.presentToastUnfavorited('You removed this job from Favorites.');
        }));
        // update favoriteJobsSubject
        console.log('Unfavoriting this Job');
    }
    presentToastFavorited(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 3000,
                cssClass: 'unfavorited-toast',
                position: 'bottom'
            });
            toast.present();
        });
    }
};
FavoritesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
FavoritesService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController])
], FavoritesService);



/***/ }),

/***/ 79744:
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": function() { return /* binding */ NotificationsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 94634);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 67666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 11627);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 46797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);







// export const WS_ENDPOINT = environment.wsEndpoint;
let NotificationsService = class NotificationsService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.notifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.messagesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.messages$ = this.messagesSubject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchAll)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(e => { throw e; }));
    }
    getNotifications(email) {
        console.log('Getting Notifications');
        console.log(email);
        return this.http.post(`${this.BACKEND_URL}/api/notifications`, { email: email });
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
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient])
], NotificationsService);



/***/ }),

/***/ 69166:
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsService": function() { return /* binding */ PostsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile.service */ 39181);






let PostsService = class PostsService {
    constructor(http, profile) {
        this.http = http;
        this.profile = profile;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.postsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.commentsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.followingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.myPostSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    }
    getPosts() {
        // console.log('Getting Posts');
        return this.http.get(`${this.BACKEND_URL}/api/posts/`);
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
            this.followingSubject$.next(updatedFollowingPosts);
        });
    }
    unFollowPost(postID, userEmail) {
        return this.http.post(`${this.BACKEND_URL}/api/posts/unfollow`, {
            _id: postID,
            email: userEmail
        }).subscribe(data => {
            let updatedFollowingPosts = [...Object.values(data)];
            this.followingSubject$.next(updatedFollowingPosts);
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
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient,
        _services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService])
], PostsService);



/***/ }),

/***/ 39181:
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": function() { return /* binding */ ProfileService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 55036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 38605);












let ProfileService = class ProfileService {
    constructor(http, storage, alertController, helper, auth, router, toastController) {
        this.http = http;
        this.storage = storage;
        this.alertController = alertController;
        this.helper = helper;
        this.auth = auth;
        this.router = router;
        this.toastController = toastController;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url;
        this.activeEmail = '';
        // user = {};
        this.fullName = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.about = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.city = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.zip = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.gender = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.dob = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.school = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.grade = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.profilePicture = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.resume = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.email = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.phone = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        // Needs the User's email address from the JSON Web Token stored on device.
        this.activeEmail = this.auth.user.email;
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(e => {
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(e => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-about`, { email, newAbout, passsword }).subscribe();
        });
    }
    changeSchool(email, newSchool, newGrade, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return this.http.post(`${this.BACKEND_URL}/api/photo/change-profile-picture`, {
                imageForm, oldPhotoKey
            }).subscribe();
        });
    }
    changeResume(email, newResume, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    // Delete User
    delete() {
        console.log('Deleted User');
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
ProfileService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController,
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController])
], ProfileService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
/* harmony import */ var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/plugins/zone-error */ 17746);
/* harmony import */ var zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_plugins_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// const url is commented out depending on which you are testing with.
// local host is for local machine and 10.0.1.8 is for android testing

const ip = '10.0.1.7';
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 59300:
/*!*****************************************************************************!*\
  !*** ./src/app/components/comment-vote-bar/comment-vote-bar.component.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upvote {\n  border-radius: 5px;\n  width: 60px;\n  position: relative;\n  --color: #005191;\n}\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n.downvote {\n  border-radius: 5px;\n  width: 60px;\n  padding-left: 0px;\n  --color: #005191;\n}\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n.upvoted-toast {\n  --background: #005191;\n}\n.downvoted-toast {\n  --background: #FFB351;\n}\n.followed-toast {\n  --background: #24d8a8;\n}\n.unfollowed-toast {\n  --background: #FFB351;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtdm90ZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ047QUFFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ047QUFHRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7QUFDRTtFQUNFLHFCQUFBO0FBRUoiLCJmaWxlIjoiY29tbWVudC12b3RlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHZvdGV7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6ICMwMDUxOTE7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gIC5kb3dudm90ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIC0tY29sb3I6ICMwMDUxOTE7XG4gIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgICAgLS1mb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gIFxuICAudXB2b3RlZC10b2FzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA1MTkxO1xuICB9XG4gIC5kb3dudm90ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgfVxuICBcbiAgLmZvbGxvd2VkLXRvYXN0IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIH1cbiAgLnVuZm9sbG93ZWQtdG9hc3Qge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbiAgfSJdfQ== */");

/***/ }),

/***/ 66525:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/follow-comment-buttons/follow-comment-buttons.component.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comment-button {\n  --color: #0055a5;\n  font-size: 1em;\n  font-size: 800;\n  border-radius: 5px;\n  position: relative;\n  right: 8px;\n}\n\nion-icon {\n  height: 40px;\n  width: 40px;\n  position: relative;\n  left: -5px;\n  font-weight: 600;\n}\n\n@media screen and (max-width: 567px) {\n  .comment-button {\n    font-size: 0.82em;\n    font-weight: 600;\n    width: 80px;\n    --width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy1jb21tZW50LWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJmb2xsb3ctY29tbWVudC1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtYnV0dG9ue1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogOHB4O1xufVxuaW9uLWljb24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC01cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb21tZW50LWJ1dHRvbntcbiAgICAgIGZvbnQtc2l6ZTogMC44MmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgLS13aWR0aDogNzBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 73325:
/*!*******************************************************************!*\
  !*** ./src/app/components/follow-icon/follow-icon.component.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  --color: lightgrey;\n}\n\n@media screen and (max-width: 567px) {\n  .follow-button, .unfollow-button {\n    font-size: 0.52em;\n    font-weight: 600;\n    width: 80px;\n    --width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNDO0lBQ0ssaUJBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJmb2xsb3ctaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgLS1jb2xvcjogbGlnaHRncmV5O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAuZm9sbG93LWJ1dHRvbiwgLnVuZm9sbG93LWJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDAuNTJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIC0td2lkdGg6IDcwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ 46301:
/*!*****************************************************************!*\
  !*** ./src/app/components/going-icon/going-icon.component.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  transition: 0.5s;\n  opacity: 1;\n}\n\nion-button {\n  font-size: 1em;\n  font-weight: 800;\n  height: 20px;\n  width: 100px;\n  margin-left: 0px;\n  margin-right: 10px;\n  display: inline;\n}\n\n.not-going {\n  --color: white;\n  font-size: 0.65em;\n  --background: linear-gradient(#faa71b, #e99b14);\n}\n\n.grey-button {\n  margin-right: 10px;\n  --background: #222;\n  --color: #edf3f8;\n  font-size: 0.65em;\n}\n\n.going {\n  --color: white;\n  font-size: 0.65em;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n}\n\n.not-going-mobile {\n  --color: white;\n  display: block;\n  width: 100%;\n  height: 40px;\n  font-size: 1em;\n  --background: linear-gradient(#faa71b, #e99b14);\n}\n\n.grey-button-mobile {\n  margin-right: 10px;\n  display: block;\n  width: 100%;\n  height: 40px;\n  --background: #0055a5;\n  --color: #edf3f8;\n  font-size: 1em;\n  top: -8px;\n  position: relative;\n}\n\n.going-mobile {\n  --color: white;\n  display: block;\n  width: 100%;\n  height: 40px;\n  font-size: 1em;\n  --background: #24d8a8;\n  --background-hover: #24d8a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvaW5nLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBUUYiLCJmaWxlIjoiZ29pbmctaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAxO1xufVxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubm90LWdvaW5nIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmFhNzFiLCAjZTk5YjE0KTtcbn1cbi5ncmV5LWJ1dHRvbntcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICMyMjI7XG4gIC0tY29sb3I6ICNlZGYzZjg7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xufVxuLmdvaW5nIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI0ZDhhODtcbn1cbi5ub3QtZ29pbmctbW9iaWxlICB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmYWE3MWIsICNlOTliMTQpO1xufVxuLmdyZXktYnV0dG9uLW1vYmlsZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1jb2xvcjogI2VkZjNmODtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRvcDogLThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmdvaW5nLW1vYmlsZSB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMjRkOGE4O1xufVxuXG5cblxuIl19 */");

/***/ }),

/***/ 62947:
/*!*****************************************************************!*\
  !*** ./src/app/components/heart-icon/heart-icon.component.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  float: right;\n  z-index: 9999;\n  position: relative;\n  right: 10px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYXJ0LWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiaGVhcnQtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiA5OTk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ 40958:
/*!***********************************************************************************!*\
  !*** ./src/app/components/jobs-filter-popover/jobs-filter-popover.component.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzLWZpbHRlci1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 67023:
/*!*************************************************************************!*\
  !*** ./src/app/components/not-going-icon/not-going-icon.component.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZ29pbmctaWNvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 84794:
/*!*************************************************************************************!*\
  !*** ./src/app/components/posts-filter-popover/posts-filter-popover.component.scss ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy1maWx0ZXItcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 67348:
/*!***************************************************************************************!*\
  !*** ./src/app/components/reply-options-popover/reply-options-popover.component.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBseS1vcHRpb25zLXBvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 65568:
/*!*************************************************************************************!*\
  !*** ./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.scss ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-buttons {\n  position: relative;\n  left: -10px;\n}\n\n.upvote {\n  border-radius: 5px;\n  position: relative;\n  --color: #005191;\n}\n\n.upvote ion-icon {\n  color: #005191;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  padding-left: 0px;\n  --color: #005191;\n}\n\n.downvote ion-icon {\n  color: #005191;\n  --font-size: 40px;\n}\n\n.upvoted-toast {\n  --background: #005191;\n}\n\n.downvoted-toast {\n  --background: #FFB351;\n}\n\n.followed-toast {\n  --background: #24d8a8;\n}\n\n.unfollowed-toast {\n  --background: #FFB351;\n}\n\n.follow-button {\n  --color: #888;\n  --border-style: solid;\n  --border-width: 3px;\n  --border-color: #888;\n  font-size: 0.6em;\n  font-weight: 800;\n  border-radius: 5px;\n  width: 100px;\n  margin-left: 10px;\n}\n\n.unfollow-button {\n  --color: #faa71b;\n  --border-style: solid;\n  --border-width: 3px;\n  --border-color: #faa71b;\n  font-size: 0.6em;\n  font-weight: 800;\n  border-radius: 5px;\n  width: 100px;\n  margin-left: 10px;\n}\n\n@media screen and (max-width: 567px) {\n  .follow-button, .unfollow-button {\n    font-size: 0.52em;\n    font-weight: 600;\n    width: 80px;\n    --width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwLWRvd24tdm90ZS1idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU1BO0VBQ0UscUJBQUE7QUFIRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoidXAtZG93bi12b3RlLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi51cHZvdGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1jb2xvcjogIzAwNTE5MTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDUxOTE7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5cbi5kb3dudm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1MTkxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTE5MTtcbiAgICAtLWZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4udXB2b3RlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbn1cbi5kb3dudm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cbi5mb2xsb3dlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbn1cbi51bmZvbGxvd2VkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZCMzUxO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICM4ODg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgLS1ib3JkZXItY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMC42MGVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8vIENoYW5nZSBjb2xvclxuLnVuZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmYWE3MWI7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgLS1ib3JkZXItY29sb3I6ICNmYWE3MWI7XG4gIGZvbnQtc2l6ZTogMC42MGVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5mb2xsb3ctYnV0dG9uLCAudW5mb2xsb3ctYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC41MmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgLS13aWR0aDogNzBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n\n");

/***/ }),

/***/ 81620:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-vote-bar/comment-vote-bar.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar style=\"--background: none\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"currentUserUpvoted\" class=\"upvote\" (click)=\"upVoteComment()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"currentUserDownvoted\" class=\"downvote\" (click)=\"downVoteComment()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n");

/***/ }),

/***/ 56812:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-comment-buttons/follow-comment-buttons.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar style=\"--background: none;\">\n  <ion-buttons slot=\"end\">\n    <ion-button\n    class=\"comment-button\"\n    (click)=\"postPage()\"><ion-icon src=\"../../assets/icon/comments-icon.svg\"></ion-icon> {{comments.length}}\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>");

/***/ }),

/***/ 46897:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/follow-icon/follow-icon.component.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleLikeState(post)\" tappable [@follow]=\"followState\" size=\"medium\" [name]=\"iconName\"></ion-icon>\n");

/***/ }),

/***/ 3749:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/going-icon/going-icon.component.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\n    <ion-row class=\"ion-hide-lg-down ion-justify-content-center\">\n        <ion-col style=\"height: 20px;\" size=\"5\">\n            <ion-button class=\"grey-button\" (click)=\"eventPage(event)\">\n                    Details\n            </ion-button>\n        </ion-col>\n        <ion-col style=\"height: 20px;\" size=\"5\">\n            <ion-button class=\"going\" *ngIf='!going' (click)=\"toggleGoingState(event)\">\n                Go\n            </ion-button>\n            <ion-button class=\"not-going\" *ngIf='going' (click)=\"toggleGoingState(event)\">\n                Cancel\n            </ion-button>\n        </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: 24px;\" class=\"ion-hide-lg-up ion-justify-content-center\">\n        <ion-col size=\"11\">\n            <ion-button class=\"grey-button-mobile\" (click)=\"eventPage(event)\">\n                Details\n            </ion-button>\n            <ion-button class=\"going-mobile\" *ngIf='!going' (click)=\"toggleGoingState(event)\">\n                Go\n            </ion-button>\n            <ion-button class=\"not-going-mobile\" *ngIf='going' (click)=\"toggleGoingState(event)\">\n                Cancel\n            </ion-button>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ 37167:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/heart-icon/heart-icon.component.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-icon (click)=\"toggleLikeState()\" tappable [@heart]=\"favoriteState\" style=\"font-size: 3em\" [name]=\"iconName\"></ion-icon>\n");

/***/ }),

/***/ 16607:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jobs-filter-popover/jobs-filter-popover.component.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-radio-group [value]=\"this.selection\" (ionChange)=\"selectOption($event)\" name=\"job-menu-filter\">\n  <ion-item lines=\"none\">\n    <ion-label>Pay - High to Low</ion-label>\n    <ion-radio value=\"htol\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Pay - Low to High</ion-label>\n    <ion-radio value=\"ltoh\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Newest</ion-label>\n    <ion-radio value=\"newest\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Oldest</ion-label>\n    <ion-radio value=\"oldest\"></ion-radio>\n  </ion-item>\n  <ion-item class=\"ion-text-center\" (click)=\"dismiss()\" button lines=\"none\">\n    <ion-label style=\"color: #e3405f\">Close</ion-label>\n  </ion-item>\n</ion-radio-group>");

/***/ }),

/***/ 23922:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-going-icon/not-going-icon.component.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\n    <ion-row>\n        <ion-col size=\"10\" style=\"padding-top: 10px;\">\n            <p>No longer going to this Event?</p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon style=\" position: relative; left: -5px;\" (click)=\"toggleNotGoingState(event)\" tappable [@notGoing]=\"notGoingState\" size=\"large\" [name]=\"iconName\"></ion-icon>\n        </ion-col>\n    </ion-row>\n  </ion-grid>");

/***/ }),

/***/ 19050:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/posts-filter-popover/posts-filter-popover.component.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-radio-group [value]=\"this.selection\" (ionChange)=\"selectOption($event)\" name=\"post-menu-filter\">\n  <ion-item lines=\"none\">\n    <ion-label>Most Comments</ion-label>\n    <ion-radio value=\"mostc\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Most Upvotes</ion-label>\n    <ion-radio value=\"mostu\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Most Followers</ion-label>\n    <ion-radio value=\"mostf\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Newest</ion-label>\n    <ion-radio value=\"newest\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Oldest</ion-label>\n    <ion-radio value=\"oldest\"></ion-radio>\n  </ion-item>\n  <ion-item class=\"ion-text-center\" (click)=\"dismiss()\" button lines=\"none\">\n    <ion-label style=\"color: #e3405f\">Close</ion-label>\n  </ion-item>\n</ion-radio-group>");

/***/ }),

/***/ 56074:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/reply-options-popover/reply-options-popover.component.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-radio-group (ionChange)=\"selectOption($event)\" name=\"reply-option-menu\">\n  <ion-item lines=\"none\">\n    <ion-label>Delete</ion-label>\n    <ion-radio value=\"delete\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Edit</ion-label>\n    <ion-radio value=\"edit\"></ion-radio>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Report</ion-label>\n    <ion-radio value=\"report\"></ion-radio>\n  </ion-item>\n  <ion-item class=\"ion-text-center\" (click)=\"dismiss()\" button lines=\"none\">\n    <ion-label style=\"color: #e3405f\">Close</ion-label>\n  </ion-item>\n</ion-radio-group>");

/***/ }),

/***/ 69495:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/up-down-vote-buttons/up-down-vote-buttons.component.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar style=\"--background: none;\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"!upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-up-outline.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n    <ion-button *ngIf=\"upVoted\" class=\"upvote\" (click)=\"upVotePost()\">\n      <ion-icon  size=\"large\" src=\"../assets/icon/caret-up-outline-active.svg\"></ion-icon>\n      {{upVoteLength}}\n    </ion-button>\n\n    <!-- Downvotes -->\n    <ion-button *ngIf=\"!downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n      <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline.svg\">\n      </ion-icon>\n      {{downVoteLength}}\n    </ion-button>\n      <ion-button *ngIf=\"downVoted\" class=\"downvote\" (click)=\"downVotePost()\">\n        <ion-icon size=\"large\" src=\"../assets/icon/caret-down-outline-active.svg\"></ion-icon>\n        {{downVoteLength}}\n      </ion-button>\n\n      <ion-button *ngIf=\"!following\" class=\"follow-button\" (click)=\"follow(postID)\">Follow {{followingLength}}\n      </ion-button>\n      <ion-button *ngIf=\"following\" class=\"unfollow-button\" (click)=\"unFollow(postID)\">Unfollow {{followingLength}}\n      </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map