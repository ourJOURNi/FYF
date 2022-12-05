"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_posts_posts_module_ts"],{

/***/ 73773:
/*!****************************************************!*\
  !*** ./src/app/pages/posts/post-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostRoutingModule": () => (/* binding */ PostRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.page */ 35292);




const routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_0__.PostsPage
    },
    {
        path: 'add-post',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_posts_add-post_add-post_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add-post/add-post.module */ 19228)).then(m => m.AddPostPageModule)
    },
    {
        path: 'post-page/:_id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_replies-page_replies-page_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_posts_post-page_post-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./post-page/post-page.module */ 52113)).then(m => m.PostPagePageModule)
    },
    {
        path: 'following',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_pages_posts_following_following_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./following/following.module */ 25988)).then(m => m.FollowingPageModule)
    },
    {
        path: 'my-posts/:email',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_pages_posts_my-posts_my-posts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./my-posts/my-posts.module */ 95717)).then(m => m.MyPostsPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_posts_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 1841)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'student-chat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_posts_student-chat_student-chat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./student-chat/student-chat.module */ 33877)).then(m => m.StudentChatPageModule)
    }
];
let PostRoutingModule = class PostRoutingModule {
};
PostRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], PostRoutingModule);



/***/ }),

/***/ 31399:
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPageModule": () => (/* binding */ PostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.page */ 35292);
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-routing.module */ 73773);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/custom-component.module */ 64941);








let PostPageModule = class PostPageModule {
};
PostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _post_routing_module__WEBPACK_IMPORTED_MODULE_1__.PostRoutingModule,
            // ReadMoreComponent,
        ],
        declarations: [
            _posts_page__WEBPACK_IMPORTED_MODULE_0__.PostsPage
        ]
    })
], PostPageModule);



/***/ }),

/***/ 35292:
/*!*******************************************!*\
  !*** ./src/app/pages/posts/posts.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPage": () => (/* binding */ PostsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _posts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.page.html?ngResource */ 4919);
/* harmony import */ var _posts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page.scss?ngResource */ 25212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ 69166);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 53250);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
/* harmony import */ var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/student-chat.service */ 70009);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notifications.service */ 79744);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var src_app_components_posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/posts-filter-popover/posts-filter-popover.component */ 78546);
/* harmony import */ var src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/emitters/filter-posts.service */ 15588);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;


















let PostsPage = class PostsPage {
    constructor(router, modal, posts, profile, toast, loading, formBuilder, popoverController, postsEmitterService, filterPostsService, studentChat, notifications) {
        this.router = router;
        this.modal = modal;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.popoverController = popoverController;
        this.postsEmitterService = postsEmitterService;
        this.filterPostsService = filterPostsService;
        this.studentChat = studentChat;
        this.notifications = notifications;
        this.showShortDesciption = true;
        this.noSearchInput = false;
        this.searching = false;
        this.noPosts = false;
        this.postFilter = 'newest';
        this.allPosts = this.posts.allPosts;
    }
    ngOnDestroy() {
        this.postsSub.unsubscribe();
        this.notificationsSub.unsubscribe();
        this.postsEmitterService.subsVar.unsubscribe();
        this.profileSub.unsubscribe();
        this.routerSub.unsubscribe();
        this.posts.favoritePosts$.unsubscribe();
    }
    ngOnInit() {
        // this.getPosts();
        // this.getUserInfo();
        // this.getFollowingPosts();
        this.trackRoute();
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
    }
    // Tracks Route Change in Navigator
    // When the user navigates from the main
    // posts page @ /home/posts, the Tab Bar
    // at the bottom of the page will be hidden
    trackRoute() {
        this.routerSub = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd)).subscribe(data => {
            let url = data['url'];
            let tabBar = document.getElementById('tabBar');
            let tabBarFab = document.getElementById('tab-bar-fab');
            if (url.includes('/home/posts/post-page/') ||
                url.includes('/home/posts/my-posts/') ||
                url.includes('/home/posts/notifications/') ||
                url.includes('/home/posts/following')) {
                tabBar.style.transition = '0.5s';
                tabBar.style.opacity = '0';
                tabBar.style.pointerEvents = 'none';
                tabBarFab.style.transition = '0.5s';
                tabBarFab.style.opacity = '0';
                tabBarFab.style.pointerEvents = 'none';
            }
            else {
                tabBar.style.transition = '0.5s';
                tabBar.style.opacity = '1';
                tabBar.style.pointerEvents = 'auto';
                tabBarFab.style.transition = '0.5s';
                tabBarFab.style.opacity = '1';
                tabBarFab.style.pointerEvents = 'auto';
            }
        });
    }
    alterDescriptionText(post) {
        console.log(post);
        console.log(post.length);
        this.showShortDesciption = !this.showShortDesciption;
    }
    filterMenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__.PostsFilterPopoverComponent,
                cssClass: 'my-custom-class',
                // translucent: true,
                showBackdrop: true,
                componentProps: {
                    filter: this.postFilter
                }
            });
            yield popover.present();
            yield popover.onWillDismiss().then((data) => {
                console.log(data);
            });
        });
    }
    search(event) {
        this.searchTerm = event.detail.value.replace(/\s+/g, '');
        console.log(this.searchTerm);
    }
    searchHashtags() {
        if (this.noPosts) {
            this.allPosts = this.loadedAllPosts;
            this.noPosts = false;
        }
        let searchedPosts = [];
        let searchTermArray = this.searchTerm.split(',');
        console.log('Searching...\n');
        console.log('Search Terms: ');
        console.log(searchTermArray);
        console.log('Loaded Posts');
        console.log(this.loadedAllPosts);
        searchTermArray.forEach(searchedTag => {
            console.log(searchedTag);
            this.allPosts.filter(foundPost => {
                console.log(foundPost.hashtags);
                foundPost.hashtags.forEach(tag => {
                    console.log(tag);
                    if (tag === searchedTag) {
                        // console.log(tag + ' is a match!');
                        searchedPosts.push(foundPost);
                    }
                });
                if (!this.searchTerm) {
                    // console.log('Search term is empty; showing all events instead');
                    this.noSearchInput = false;
                    this.searching = false;
                }
                this.noSearchInput = true;
            });
        });
        // Get Unique values from searchPosts Object
        this.allPosts = [...new Set(Object.values(searchedPosts))];
        console.log(this.allPosts);
        if (this.allPosts.length === 0) {
            console.log('That search had no results!');
            return this.noPosts = true;
        }
        if (this.allPosts.length > 0) {
            console.log('That search had results!');
            return this.noPosts = false;
        }
        return this.searchBarBlur();
    }
    searchLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                cssClass: 'my-custom-class',
                message: 'Searching ...',
                duration: 1000
            });
            yield loading.present();
            yield loading.onDidDismiss().then(() => {
                // this.searching = true;
                this.searchHashtags();
            });
            console.log('Loading dismissed!');
        });
    }
    searchLoadingEmptySearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                cssClass: 'my-custom-class',
                message: 'Refreshing Posts',
                duration: 1000
            });
            yield loading.present();
            yield loading.onDidDismiss().then(() => {
            });
            console.log('Loading dismissed!');
        });
    }
    searchBarFocus() {
        console.clear();
        console.log('Focusing on Searchbar');
        let searchMessageWrapper = document.getElementById('search-message-wrapper');
        let searchMessageOverlay = document.getElementById('search-message-overlay');
        let searchMessageButton = document.getElementById('search-button');
        searchMessageWrapper.style.transform = 'translateY(36px)';
        searchMessageOverlay.style.opacity = '1';
        searchMessageOverlay.style.display = 'block';
        searchMessageButton.style.background = "red";
        setTimeout(() => {
            let searchBarWrapper = document.getElementById('searchbar-wrapper');
            let fabWrapper = document.getElementById('fab-wrapper');
            let tabBar = document.getElementById('tabBar');
            searchBarWrapper.style.height = '275px';
            // searchBarWrapper.style.background = '#0055a5c7';
            fabWrapper.style.display = 'none';
            tabBar.style.height = '0px';
            tabBar.style.transition = '500ms';
            tabBar.style.transform = 'translateY(40px)';
        }, 0);
    }
    searchBarBlur() {
        console.log('Blurring out of Searchbar');
        let searchMessageWrapper = document.getElementById('search-message-wrapper');
        let searchMessageOverlay = document.getElementById('search-message-overlay');
        let searchMessageButton = document.getElementById('search-button');
        searchMessageWrapper.style.transform = 'translateY(-36px)';
        searchMessageOverlay.style.opacity = '0';
        searchMessageOverlay.style.display = 'none';
        searchMessageButton.style.background = "blue";
        setTimeout(() => {
            let searchBarWrapper = document.getElementById('searchbar-wrapper');
            let fabWrapper = document.getElementById('fab-wrapper');
            let tabBar = document.getElementById('tabBar');
            searchBarWrapper.style.height = '60px';
            searchBarWrapper.style.background = 'none';
            fabWrapper.style.display = 'block';
            tabBar.style.height = '50px';
            tabBar.style.transition = '500ms';
            tabBar.style.transform = 'translateY(0px)';
        }, 0);
    }
    commentFocus() {
        console.log('Blurring out of Comment');
        setTimeout(() => {
            let searchBarWrapper = document.getElementById('searchbar-wrapper');
            let fabWrapper = document.getElementById('fab-wrapper');
            let tabBar = document.getElementById('tabBar');
            searchBarWrapper.style.height = '0px';
            searchBarWrapper.style.background = 'none';
            fabWrapper.style.display = 'none';
        }, 750);
    }
    commentBlur() {
        let searchBarWrapper = document.getElementById('searchbar-wrapper');
        let fabWrapper = document.getElementById('fab-wrapper');
        let tabBar = document.getElementById('tabBar');
        searchBarWrapper.style.height = '60px';
        searchBarWrapper.style.background = 'none';
        fabWrapper.style.display = 'block';
    }
    postPage(post) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', post._id]);
    }
    formatDistanceToNow(date) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(date), {
            includeSeconds: true,
            addSuffix: true
        });
    }
    doRefresh(event) {
        // Present Toast
        setTimeout(() => {
            const toast = this.toast.create({
                message: 'Inspiration Page has been refreshed',
                duration: 3000
            });
            event.target.complete();
            toast.then(toast => toast.present());
        }, 2000);
    }
    addPost() {
        this.router.navigate(['/home/posts/add-post']);
    }
    myPosts() {
        console.log('Going to my posts page');
        this.router.navigate(['/home/posts/my-posts', this.userEmail]);
    }
    following() {
        this.router.navigate(['/home/posts/following']);
    }
    chat() {
        this.router.navigate(['/home/posts/student-chat']);
    }
    notificationsPage() {
        this.router.navigate(['/home/posts/notifications']);
    }
    comment(postID, userFullName, userEmail, userProfilePicture, comment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log(postID, userFullName, userEmail, userProfilePicture, comment);
            // Reset Comment Input
            this.commentForm.reset();
            console.log('Posting comment');
            console.log('Post ID: ' + postID);
            yield this.posts.comment(postID, userFullName, userEmail, userProfilePicture, comment.comment).subscribe(newComment => {
                this.postsSub = this.posts.getPostInfo(postID).subscribe(post => {
                    for (let postComments of post['comments']) {
                        postComments.isUser = false;
                        postComments.canDeleteComment = false;
                        postComments.canReport = true;
                        // If this comment is from the logged in user, they can delete and edit
                        if (postComments.userEmail === this.userEmail) {
                            postComments.isUser = true;
                            postComments.canDeleteComment = true;
                            postComments.canReport = false;
                        }
                        postComments.repliesLength = postComments.replies.length;
                        postComments.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(postComments.date), {
                            includeSeconds: true,
                            addSuffix: false
                        });
                    }
                    this.posts.commentsSubject$.next(post['comments'].reverse());
                    let postCreator = post['creatorEmail'];
                    console.log(newComment);
                    // this.userEmail = instigatingUser
                    // postCreator = recievingUser
                    this.notifications.
                        commentNotification(this.userEmail, postCreator, postID, newComment);
                });
            });
            this.postsSub = this.posts.getPostInfo(postID).subscribe(post => {
                for (let postComments of post['comments']) {
                    postComments.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(postComments.date), {
                        includeSeconds: true,
                        addSuffix: true
                    });
                }
                this.posts.commentsSubject$.next(post['comments'].reverse());
            });
            const toast = this.toast.create({
                message: 'Your comment has been added.',
                duration: 1500
            });
            toast.then(toast => toast.present());
            yield this.router.navigate(['/home/posts/post-page', postID]);
        });
    }
};
PostsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.PopoverController },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService },
    { type: src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_8__.FilterPostsService },
    { type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__.StudentChatService },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService }
];
PostsPage.propDecorators = {
    fabButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFabButton, { static: true },] }],
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSearchbar, { static: false },] }]
};
PostsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-posts',
        template: _posts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.trigger)('inOutAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('0.8s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({ transform: 'translateX(100px)' }))
                ])
            ])
        ],
        styles: [_posts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController) === "function" ? _b : Object, typeof (_c = typeof _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService !== "undefined" && _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService) === "function" ? _c : Object, typeof (_d = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService) === "function" ? _d : Object, typeof (_e = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController) === "function" ? _e : Object, typeof (_f = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController) === "function" ? _f : Object, typeof (_g = typeof _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder !== "undefined" && _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder) === "function" ? _g : Object, typeof (_h = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.PopoverController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.PopoverController) === "function" ? _h : Object, typeof (_j = typeof src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService !== "undefined" && src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService) === "function" ? _j : Object, typeof (_k = typeof src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_8__.FilterPostsService !== "undefined" && src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_8__.FilterPostsService) === "function" ? _k : Object, typeof (_l = typeof src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__.StudentChatService !== "undefined" && src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__.StudentChatService) === "function" ? _l : Object, typeof (_m = typeof src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService !== "undefined" && src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService) === "function" ? _m : Object])
], PostsPage);



/***/ }),

/***/ 25212:
/*!********************************************************!*\
  !*** ./src/app/pages/posts/posts.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.profile-picture {\n  height: 40px;\n  width: 40px;\n  border-radius: 100px;\n  margin-right: 5px;\n  display: inline-block;\n  position: relative;\n  top: 0px;\n}\n#my-documents-button {\n  --color: #d0d0d0;\n}\n#search-wrapper {\n  background-color: #fff;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  position: fixed;\n  width: 100%;\n  z-index: 999;\n  height: 70px;\n}\n#search-wrapper h3 {\n  position: relative;\n  left: 8px;\n  top: 4px;\n  display: inline;\n  color: #0055a5;\n  font-weight: 600;\n  font-size: 1em;\n}\n#search-wrapper #posts-icon {\n  position: relative;\n  top: 12px;\n  color: #0055a5;\n}\n#search-wrapper #search-button {\n  display: inline-block;\n  width: 100%;\n  --background: #faae43;\n  border-radius: 5px;\n  color: #0055a5;\n  font-size: 0.65em;\n  font-weight: 600;\n  height: 32px;\n}\n#search-message-wrapper {\n  background: #ffcf81;\n  position: fixed;\n  top: 34px;\n  text-align: center;\n  width: 100%;\n  height: 36px;\n  z-index: 100;\n  transition: 0.2s;\n  transition-timing-function: ease;\n}\n#search-message-wrapper p {\n  position: relative;\n  top: -4px;\n  font-weight: 600;\n  font-size: 0.7em;\n  color: #444;\n}\n#search-message-overlay {\n  background: linear-gradient(rgba(250, 167, 27, 0.1490196078), #111);\n  position: fixed;\n  opacity: 0;\n  display: none;\n  top: 34px;\n  height: 100vh;\n  width: 100%;\n  z-index: 99;\n  transition: 0.2s;\n  transition-timing-function: ease;\n}\n.filter-toolbar-wrapper {\n  width: 100%;\n  border-bottom: 3px ​solid #0055a5;\n}\n.filter-toolbar-wrapper ion-toolbar {\n  --background: #ededed;\n  --border-width: 0px 0px 3px 0px;\n  --border-style: solid;\n  --border-color: #0055a5;\n  margin: 2em 0em;\n  transition: 0.5s;\n}\n.filter-message {\n  font-weight: 600;\n  font-size: 1em;\n  color: #0055a5;\n  transition: 0.5s;\n  box-shadow: 1px 1px 8px rgba(184, 184, 184, 0.6705882353);\n  border-radius: 5px;\n  padding: 6px 10px;\n  position: relative;\n  left: 12px;\n  height: 20px;\n}\n.filter-message ion-icon {\n  font-size: 1.1em;\n}\n.filter-message p {\n  display: inline;\n  position: relative;\n  top: -3px;\n  left: 4px;\n  font-size: 0.9em;\n}\n.filter-message:hover {\n  background: #0055a5;\n  color: white;\n}\n.spacer {\n  margin: 21px 0;\n}\n.header-hr {\n  border-top: 1px solid #666;\n  opacity: 0.5;\n  margin-top: 10px;\n}\n#posts-wrapper {\n  padding: 90px 0;\n}\n.post {\n  margin-top: 2%;\n  padding: 24px 0;\n  border-radius: 10px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  font-size: 1.1em;\n  line-height: 35px;\n  background: white;\n}\n.post-title {\n  color: #0055a5;\n  font-size: 0.9em;\n  font-weight: 600;\n  line-height: 0px;\n  margin: 0;\n}\n.post-buttons ion-toolbar {\n  --background: none;\n}\n.post-name {\n  font-size: 0.9em;\n  color: #222;\n  margin: 0;\n  line-height: 18px;\n}\n.post-date {\n  opacity: 0.4;\n  font-size: 0.65em;\n  margin: 0;\n  line-height: 18px;\n}\nion-content {\n  background: #edf3f8;\n}\n.top-button-wrapper {\n  width: 100%;\n  position: relative;\n  top: 100px;\n}\n.filter-icon {\n  font-size: 0.5em;\n  color: #0055a5;\n}\n.toolbar-orange-button {\n  width: 130px;\n  font-weight: 600;\n  --background: #faa71b;\n  position: relative;\n  right: 8px;\n}\n@media screen and (max-width: 744px) {\n  .post {\n    position: relative;\n    top: 0px;\n  }\n}\n.searchbar {\n  font-weight: 600;\n  color: #0055a5;\n}\n.searchbar-desktop {\n  font-weight: 600;\n  color: #222;\n  font-size: 1.2em;\n}\n.hash-desktop {\n  margin-right: 8px;\n  font-size: 2em;\n  font-weight: 600;\n  color: #0055a5;\n}\n.hashtag {\n  font-size: 0.65em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #ea8400;\n  line-height: 20px;\n}\n.no-tags {\n  font-size: 0.7em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #333;\n  opacity: 0.5;\n  position: relative;\n  top: -32px;\n}\n.post-content {\n  font-size: 0.8em;\n  position: relative;\n  line-height: 1.3em;\n  color: #111;\n  height: auto;\n  overflow: hidden;\n  border-top: 2px solid rgba(153, 153, 153, 0.2117647059);\n  padding: 8px 0px;\n}\n.show-less {\n  height: 80px;\n  overflow: hidden;\n}\n.show-more-or-less-button {\n  float: right;\n  padding: 0.5em 1em;\n  background: #a7a7a7;\n  color: white;\n  border-radius: 30px;\n  font-size: 0.6em;\n  font-weight: 600;\n}\n#user-details {\n  position: fixed;\n  margin-top: 6%;\n  padding: 1em;\n}\n#user-details #posts-profile-picture {\n  border-radius: 100px;\n  height: 55px;\n  width: 55px;\n}\n#user-details span {\n  font-size: 1.2em;\n  position: relative;\n  top: -18px;\n  left: 8px;\n  font-weight: 500;\n}\n#user-details a {\n  font-size: 0.9em;\n  margin: 0.4em 0;\n  color: #999;\n  height: 16px;\n  transition: 0.5s;\n  border-bottom: 1px solid #f4f5f8;\n}\n#user-details a:hover {\n  color: #0055a5;\n  border-bottom: 1px solid #0055a5;\n}\n#user-details #add-button {\n  --color: white;\n  --background: linear-gradient(#00c400, #008b00);\n  --background-hover: linear-gradient(#000000, #ffffff);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n  margin-top: 2em;\n  transition: 0.5s;\n}\n#username {\n  color: #0055a5;\n  font-size: 0.8em;\n  font-weight: 600;\n  position: relative;\n  left: 0px;\n  opacity: 0;\n  animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\nion-header .header-icons {\n  font-size: 1.6em;\n}\nion-header p {\n  color: #000;\n  font-size: 1.2em;\n}\nion-item {\n  --backsground: none;\n}\n.following-mobile-button {\n  display: inline-block;\n  opacity: 1;\n  --background: #0055a5;\n  --color: white;\n  box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.1);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-size: 0.6em;\n  font-weight: 600;\n  position: relative;\n  right: 15px;\n}\n@media screen and (max-width: 470px) {\n  .following-mobile-button {\n    position: relative;\n    right: 35px;\n  }\n}\n.following-button {\n  --color: white;\n  --background: #0055a5;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.my-post-button {\n  --background: #333;\n  --background-hover: #444;\n  --color: white;\n  font-weight: 600;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  display: block;\n}\n.my-post-button:hover {\n  --color: white;\n}\nform {\n  width: 100%;\n}\n.comment {\n  border: 1px solid #0055a5;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 10px;\n}\n.comment-button {\n  font-size: 1em;\n  font-weight: 600;\n  position: relative;\n  right: -20px;\n  top: 5px;\n}\n.comment-post-button {\n  --border-color: #40c59d;\n  --border-width: 2px;\n  --border-style: solid;\n  --background: #40c59d;\n  --color: white;\n  height: 40px;\n  margin: 29px auto;\n  font-weight: 600;\n  font-size: 0.6em;\n  border-radius: 5px;\n  width: 100px;\n}\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 4px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid rgb(0, 81, 145);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.comment-input-mobile {\n  background: rgba(213, 232, 236, 0.3);\n  height: 100px;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 3px solid #0055a5;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.comment-input-mobile-focused {\n  background: rgba(213, 232, 236, 0.3);\n  height: auto;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 3px solid #0055a5;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid rgb(227, 64, 95);\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.comment-button {\n  width: 130px;\n  --background: #0055a5;\n  --background-hover: #0055a5;\n  --color: white;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n}\n.comment-button:focus {\n  --color: orange;\n}\n.follow-button {\n  --color: white;\n  --background: #888;\n  --background-hover: #24d8a8;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n  width: 100px;\n}\n.unfollow-button {\n  font-weight: 800;\n  line-height: 1em;\n  border: 1px solid #faa71b;\n  width: 300px;\n  color: #faa71b;\n  font-size: 1.5em;\n  padding: 2px 0px 2px 0px;\n  position: relative;\n  right: 20px;\n  border-radius: 50px;\n}\n.follow-button:hover, .unfollow-button:hover, .comment-button:hover {\n  --color: white;\n}\n@media screen and (max-width: 567px) {\n  .comment-button, .follow-button, .unfollow-button {\n    font-weight: 600;\n    font-size: 0.5em;\n    width: 80px;\n  }\n}\nion-buttons {\n  position: relative;\n  left: 10px;\n}\n.upvote {\n  border-radius: 5px;\n  position: relative;\n  --color: #0055a5;\n}\n.upvote ion-icon {\n  color: #0055a5;\n  font-size: 40px;\n}\n.downvote {\n  border-radius: 5px;\n  padding-left: 0px;\n  --color: #0055a5;\n}\n.downvote ion-icon {\n  color: #0055a5;\n  --font-size: 40px;\n}\n.upvoted-toast {\n  --background: #0055a5;\n}\n.downvoted-toast {\n  --background: #FFB351;\n}\n.followed-toast {\n  --background: #24d8a8;\n}\n.unfollowed-toast {\n  --background: #FFB351;\n}\nion-fab-button {\n  --background: #00c400;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 10px;\n  right: 10px;\n  opacity: 0;\n  transition: 0.5s;\n  animation: fab-slide-in 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s forwards;\n}\n@keyframes fab-slide-in {\n  0% {\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\nion-footer {\n  height: 135px;\n  background: #ecf3ff;\n}\n.hash {\n  margin-right: 8px;\n  font-size: 2em;\n  font-weight: 600;\n  color: #0055a5;\n}\n.searchbar-input-container .sc-ion-searchbar-md {\n  display: block;\n  position: relative;\n  flex-shrink: 1;\n  width: 96%;\n  position: relative;\n  left: 4px;\n}\n#search-options {\n  padding: 4px;\n  color: #333;\n  text-align: left;\n  font-weight: 500;\n  font-size: 0.7em;\n  position: relative;\n  top: -15px;\n}\n@keyframes fab-slide-in {\n  0% {\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes username-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@keyframes add-post-button-tap {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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NEJBO0VBQ0UscUJBQUE7QUF6QkY7QUEyQkE7RUFDRSxxQkFBQTtBQXhCRjtBQTJCQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0FBeEJGO0FBMkJBO0VBQ0U7SUFDRSw0QkFBQTtFQXhCRjtFQTBCQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQXhCRjtBQUNGO0FBMkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBekJGO0FBMkJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBeEJGO0FBMkJDO0VBQ0MsY0FBQTtFQUNFLGtCQUFBO0VBRUEsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUF4Qko7QUEyQkM7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQXhCRjtBQTJCQTtFQUNFO0lBQ0UsNEJBQUE7RUF4QkY7RUEwQkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUF4QkY7QUFDRjtBQTRCQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBMUJGO0VBNkJBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBM0JGO0FBQ0Y7QUE4QkE7RUFDRTtJQUNFLDRCQUFBO0VBNUJGO0VBK0JBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBN0JGO0FBQ0Y7QUFnQ0E7RUFDRTtJQUNFLG1CQUFBO0VBOUJGO0VBZ0NBO0lBQ0UscUJBQUE7RUE5QkY7RUFnQ0E7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUE5QkY7QUFDRiIsImZpbGUiOiJwb3N0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG59XG4jbXktZG9jdW1lbnRzLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNkMGQwZDA7XG59XG4vLyBEZXNrdG9wIFNlYXJjaCBCYXIgRGl2XG4jc2VhcmNoLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMjZweCByZ2JhKDAsMCwwLDAuMDUpOyBcbiAgcG9zaXRpb246IGZpeGVkOyBcbiAgd2lkdGg6IDEwMCU7IFxuICB6LWluZGV4OiA5OTk7XG4gIGhlaWdodDogNzBweDtcbiAgXG4gIGgzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogOHB4O1xuICAgIHRvcDogNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgI3Bvc3RzLWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbiAgXG4gICNzZWFyY2gtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFhZTQzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgICBmb250LXNpemU6IDAuNjVlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxufVxuXG4jc2VhcmNoLW1lc3NhZ2Utd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmNmODE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cbiAgcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgY29sb3I6ICM0NDQ7XG4gIH1cblxuIH1cblxuICNzZWFyY2gtbWVzc2FnZS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmYWE3MWIyNiwgIzExMSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgdG9wOiAzNHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuIH1cblxuLmZpbHRlci10b29sYmFyLXdyYXBwZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAzcHgg4oCLc29saWQgIzAwNTVhNTtcblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDNweCAwcHg7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDA1NWE1O1xuICAgIG1hcmdpbjogMmVtIDBlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG59XG4uZmlsdGVyLW1lc3NhZ2V7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMWVtOyAgICBcbiAgY29sb3I6ICMwMDU1YTU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggOHB4ICNiOGI4YjhhYjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMnB4O1xuICBoZWlnaHQ6IDIwcHg7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gIH1cblxuICBwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxufVxuLmZpbHRlci1tZXNzYWdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNwYWNlciB7XG4gIG1hcmdpbjogMjFweCAwO1xufVxuLmhlYWRlci1ocntcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2NjY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiNwb3N0cy13cmFwcGVyIHtcbiAgcGFkZGluZzogOTBweCAwO1xufVxuLnBvc3Qge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgcGFkZGluZzogMjRweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggMTBweCAyNnB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5wb3N0LXRpdGxlIHtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBvc3QtYnV0dG9uc3tcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufVxuXG4ucG9zdC1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICMyMjI7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5cbn1cblxuLnBvc3QtZGF0ZSB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgZm9udC1zaXplOiAwLjY1ZW07XG4gIG1hcmdpbjogMDsgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbn1cblxuLnRvcC1idXR0b24td3JhcHBlcntcbiAgLy8gYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMDBweDtcbn1cbi5maWx0ZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGNvbG9yOiAjMDA1NWE1O1xufVxuLnRvb2xiYXItb3JhbmdlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDRweCkge1xuICAucG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xuICB9XG59XG4uc2VhcmNoYmFyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDU1YTU7XG59XG4uc2VhcmNoYmFyLWRlc2t0b3Age1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5oYXNoLWRlc2t0b3B7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDU1YTU7XG59XG4uaGFzaHRhZ3N7XG4gIFxufVxuLmhhc2h0YWd7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogI2VhODQwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbn1cbi5uby10YWdzIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICMzMzM7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMnB4O1xufVxuLnBvc3QtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICBjb2xvcjogIzExMTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzk5OTk5OTM2OyBcbiAgcGFkZGluZzogOHB4IDBweDtcbiB9XG5cbiAuc2hvdy1sZXNzIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2hvdy1tb3JlLW9yLWxlc3MtYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJhY2tncm91bmQ6ICNhN2E3YTc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLy8gVXNlciBEZXRhaWxzIGluIFNpZGViYXJcbiN1c2VyLWRldGFpbHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi10b3A6IDYlO1xuICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLy8gYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLy8gYm9yZGVyOiAycHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xuICAvLyBib3gtc2hhZG93OiAxcHggMTBweCAyNnB4IHJnYigwIDAgMCAvIDUlKTtcbiAgcGFkZGluZzogMWVtO1xuXG4gICNwb3N0cy1wcm9maWxlLXBpY3R1cmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4OyBcbiAgICBoZWlnaHQ6IDU1cHg7IFxuICAgIHdpZHRoOiA1NXB4O1xuICB9XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMThweDtcbiAgICBsZWZ0OiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbWFyZ2luOiAwLjRlbSAwO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGhlaWdodDogMTZweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNWY4O1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDU1YTU7XG4gIH1cblxuICAjYWRkLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwYzQwMCwgIzAwOGIwMCk7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwMDAwMCwgI2ZmZmZmZik7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbn1cblxuI3VzZXJuYW1lIHtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG5cbmlvbi1oZWFkZXIge1xuXG4gIC5oZWFkZXItaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA1NWE1O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja3Nncm91bmQ6IG5vbmU7XG59XG5cblxuLmZvbGxvd2luZy1tb2JpbGUtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDQwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgLmZvbGxvd2luZy1tb2JpbGUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDM1cHg7XG4gIH1cbn1cblxuXG5cbi5mb2xsb3dpbmctYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm15LXBvc3QtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzMzO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM0NDQ7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5teS1wb3N0LWJ1dHRvbjpob3ZlciB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTVhNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb21tZW50LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1ib3JkZXItY29sb3I6ICM0MGM1OWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1iYWNrZ3JvdW5kOiAjNDBjNTlkO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDI5cHggYXV0bztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCAwIDBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTJweCAwIDRweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIzMiwgMjM2LCAuMyk7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMjBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDA1NWE1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlLWZvY3VzZWR7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMzIsIDIzNiwgLjMpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDA1NWE1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICAvLyBoZWlnaHQ6IDBweDtcbn1cbi5jb21tZW50LWlucHV0LW1vYmlsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAzMHB4IDAgMTUwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjcsNjQsOTUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1idXR0b257XG4gIHdpZHRoOiAxMzBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMDU1YTU7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXNpemU6IDgwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29tbWVudC1idXR0b246Zm9jdXMge1xuICAtLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5mb2xsb3ctYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzg4ODtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMjRkOGE4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXNpemU6IDgwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi8vIENoYW5nZSBjb2xvclxuLnVuZm9sbG93LWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIC8vIGJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmYWE3MWI7XG4gIHdpZHRoOiAzMDBweDtcbiAgY29sb3I6ICNmYWE3MWI7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmc6IDJweCAwcHggMnB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLmZvbGxvdy1idXR0b246aG92ZXIsIC51bmZvbGxvdy1idXR0b246aG92ZXIsIC5jb21tZW50LWJ1dHRvbjpob3ZlciB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5jb21tZW50LWJ1dHRvbiwgLmZvbGxvdy1idXR0b24sIC51bmZvbGxvdy1idXR0b24ge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgICB3aWR0aDogODBweDtcbiAgfVxufVxuXG5pb24tYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTBweDtcbn1cblxuLnVwdm90ZXtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyB3aWR0aDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cblxuLmRvd252b3RlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyB3aWR0aDogNjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0tY29sb3I6ICMwMDU1YTU7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIC0tZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5cbi51cHZvdGVkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xufVxuLmRvd252b3RlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogI0ZGQjM1MTtcbn1cblxuLmZvbGxvd2VkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjRkOGE4O1xufVxuLnVuZm9sbG93ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBjNDAwO1xuICAtLWNvbG9yLWZvY3VzZWQ6IHdoaXRlO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogZmFiLXNsaWRlLWluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSkgMC41cyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmYWItc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbmlvbi1mb290ZXIge1xuICBoZWlnaHQ6IDEzNXB4O1xuICBiYWNrZ3JvdW5kOiAjZWNmM2ZmO1xufVxuLmhhc2h7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDU1YTU7XG59XG5cbiAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciAuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICB3aWR0aDogOTYlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0cHg7XG4gfVxuXG4gI3NlYXJjaC1vcHRpb25zIHtcbiAgcGFkZGluZzogNHB4O1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXB4O1xuIH1cblxuQGtleWZyYW1lcyBmYWItc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB1c2VybmFtZS1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFkZC1wb3N0LWJ1dHRvbi10YXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 4919:
/*!********************************************************!*\
  !*** ./src/app/pages/posts/posts.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = " <!-- Mobile Toolbar -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <!-- \n     <ion-button id=\"search-button\"\n      (click)=\"searchLoading()\" class=\"search-button\">\n        Search\n      </ion-button> -->\n    <ion-searchbar\n    class=\"searchbar\"\n    animated=\"true\"\n    searchIcon=\"none\"\n    placeholder=\"Search\"\n    (ionFocus)=\"searchBarFocus()\"\n    (ionBlur)=\"searchBarBlur()\"\n    (ionChange)=\"search($event)\">\n    <span class=\"hash\">#</span>\n  </ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <!-- Notifications -->\n      <ion-button (click)=\"notificationsPage()\">\n        <img height=\"25\" class=\"header-icons\" src=\"../../../assets/icon/posts-notification-bell-grey.svg\">\n        <span style=\"color: #666; height: 25px; width: 25px; border-radius: 100px; position: relative; font-size: 1.4em; font-weight: 600;\">{{notificationsLength}}</span>\n      </ion-button>\n      <ion-button id=\"my-documents-button\" (click)=\"myPosts()\" fill=\"clear\">\n        <ion-icon name=\"documents-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Spinner -->\n  <ion-spinner *ngIf=\"searching\" name=\"crescent\"></ion-spinner>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-lg-down\">\n    <!-- Search & Filter -->\n    <ion-row id=\"search-wrapper\" class=\"ion-justify-content-center\">\n      <!-- Posts Page Icon -->\n      <ion-col size=\"1\" push=\"0.2\" pull-lg=\"2\">\n        <ion-icon id=\"posts-icon\" size=\"large\" name=\"newspaper-outline\"></ion-icon>\n        <h3>| Posts</h3>\n      </ion-col>\n      <!-- Searchbar Element -->\n      <ion-col size=\"2.5\">\n        <ion-searchbar\n          class=\"searchbar-desktop\"\n          animated=\"true\"\n          (keyup.enter)=\"searchLoading()\"\n          cancelButtonText=\"\"\n          showCancelButton=\"true\"\n          placeholder=\"Search Posts by #Hashtags\"\n          (ionFocus)=\"searchBarFocus()\"\n          (ionBlur)=\"searchBarBlur()\"\n          (ionChange)=\"search($event)\">\n          <span class=\"hash-desktop\">\n            <ion-icon name=\"search-outline\" style=\"font-size: 0.8em; color: #0055a5;\"></ion-icon>\n          </span>\n\n        </ion-searchbar>\n      </ion-col>\n      <!-- Search Button -->\n      <ion-col size=\"0.8\">\n        <div style=\"margin-top: 11px;\"></div>\n        <ion-button id=\"search-button\" (click)=\"searchLoading()\">\n          Search\n        </ion-button>\n      </ion-col>\n      <!-- Filter-Button -->\n      <ion-col size=\"1.4\">\n        <div class=\"spacer-1x\"></div>\n        <div class=\"filter-message\">\n          <ion-icon name=\"filter-outline\"></ion-icon>\n          <p *ngIf=\"this.postFilter === 'mostc'\" (click)=\"filterMenu()\"> Most Comments</p>\n          <p *ngIf=\"this.postFilter === 'mostu'\" (click)=\"filterMenu()\"> Most Upvotes</p>\n          <p *ngIf=\"this.postFilter === 'mostf'\" (click)=\"filterMenu()\"> Most Followers</p>\n          <p *ngIf=\"this.postFilter === 'newest'\" (click)=\"filterMenu()\"> Newest</p>\n          <p *ngIf=\"this.postFilter === 'oldest'\" (click)=\"filterMenu()\"> Oldest</p>\n        </div>\n      </ion-col>\n      <!-- Notifications -->\n      <ion-col size=\"1\" push=\"0.2\">\n        <!-- TODO: Switch to Grey Icon when Notifications count == 0 -->\n        <div class=\"spacer-1x\"></div>\n        <img height=\"25\" src=\"../../../assets/icon/posts-notification-bell-red.svg\"/>\n        <span id=\"notifications-count\">3</span>\n      </ion-col>\n    </ion-row>\n    \n    <!-- Search message -->\n    <ion-row id=\"search-message-wrapper\">\n      <ion-col size=\"12\">\n        <p>You can choose up to five hashtags. \n          Please seperate each tag with a comma ( , ). \n          Example: \"Computers, Science, Technology\".</p>\n      </ion-col>\n    </ion-row>\n\n    <!-- Search Message Overlay -->\n    <ion-row id=\"search-message-overlay\">\n      <ion-col size=\"12\"></ion-col>\n    </ion-row>\n\n    <!-- If Filtering -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col style=\"position: relative; top: -32px;\" class=\"ion-text-center\" size=\"12\">\n        <ion-spinner *ngIf=\"this.filtering\" name=\"bubbles\">Filtering</ion-spinner>\n      </ion-col>\n    </ion-row>\n\n    <!-- Posts & SideBar -->\n    <ion-row *ngIf=\"!this.filtering\" class=\"ion-justify-content-center\">\n      <!-- Posts -->\n      <ion-col id=\"posts-wrapper\" size-md=\"7.5\" size-lg=\"5\" size-xl=\"4.5\">\n        <div class=\"post\" *ngFor=\"let post of allPosts\">\n          <!-- Profile Header -->\n          <ion-row>\n            <!-- Profile Picture -->\n            <ion-col class=\"ion-text-center\" push=\"0.2\" size=\"1\">\n              <img src=\"{{post.creatorProfilePicture}}\" style=\"border-radius: 100px; height: 35xpx; width: 35px;\">\n            </ion-col>\n            <!-- Post Creator's Name -->\n            <ion-col push=\"0.2\" size=\"10\">\n              <p class=\"post-name\">{{post.creatorName}}</p>\n              <p class=\"post-date\">{{this.formatDistanceToNow(post.date)}}</p>\n            </ion-col>\n          </ion-row>\n          <!-- Post Content -->\n          <ion-row class=\"ion-justify-content-center\">\n            <!-- (click)=\"postPage(post)\"  -->\n            <!-- 1080x1350 -->\n            <ion-col size=\"11\">\n              <p class=\"post-title\">{{post.title}}</p>\n              <div class=\"hashtags\">\n                <p class=\"hashtag\" *ngFor=\"let tag of post.hashtags\">\n                  #{{tag}}\n                </p>\n              </div>\n              <p class=\"no-tags\" *ngIf=\"post.hashtags.length === 0\">\n                No #hashtags for this post\n              </p>\n              <p [ngClass]=\"{'show-less': showShortDesciption}\" \n                class=\"post-content\">\n                {{post.post}}\n                <button *ngIf=\"post.post.length > 400\" class=\"show-more-or-less-button\" type=\"button\" (click)=\"alterDescriptionText(post.post)\">\n                  {{ showShortDesciption ? '... Read More': 'Show Less' }}\n                </button>\n              </p>\n              \n            </ion-col>\n          </ion-row>\n          <!-- Comment -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11.5\">\n              <ion-item  style=\"height: auto;\" lines=\"none\">\n                <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                  <ion-textarea\n                      class=\"comment-input-mobile\"\n                      autogrow=\"true\"\n                      autocapitalize=\"true\"\n                      rows=\"5\"\n                      spellcheck=\"true\"\n                      wrap=\"soft\"\n                      type=\"text\"\n                      #postComment\n                      placeholder=\"Add a Comment\"\n                      formControlName=\"comment\">\n                  </ion-textarea>\n                  <!-- Comment Post Button -->\n                  <ion-button\n                    style=\"float: right;\"\n                    *ngIf=\"postComment.value.length >= 2;\"\n                    class=\"comment-post-button\"\n                    name=\"send\"\n                    type=\"submit\">Post Comment\n                  </ion-button>\n                </form>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Post Buttons -->\n          <ion-row class=\"ion-justify-content-center\">\n            <!-- Upvote & Downvote-->\n            <ion-col size=\"8\">\n              <app-up-down-vote-buttons [postID]=\"post._id\" [postEmail]=\"post.creatorEmail\"></app-up-down-vote-buttons>\n            </ion-col>\n            <!-- Follow & Comment -->\n            <ion-col size=\"3\">\n              <app-follow-comment-buttons [postID]=\"post._id\" [commentLength]=\"post.comments.length\"></app-follow-comment-buttons>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n      <!-- Sidebar with User Info -->\n      <ion-col size=\"2\">\n        <ion-row id=\"user-details\">\n          <ion-col size=\"12\">\n            <img id=\"posts-profile-picture\" src=\"{{userProfilePicture}}\">\n            <span>{{userFullName}}</span>\n            <div class=\"spacer\"></div>\n            <a class=\"my-post-button\"  (click)=\"myPosts()\">\n              My Posts {{myPostsLength}}\n            </a>\n            <a class=\"following-button\" (click)=\"following()\">\n              Following {{followedPostCount}}\n            </a>\n            <ion-button id=\"add-button\"  (click)=\"addPost()\">\n              <ion-icon slot=\"start\" name=\"add-outline\" style=\"color: white; font-size: 2em;\"></ion-icon>\n              Add Post\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Fab placed to the bottom end -->\n  <ion-fab [@inOutAnimation] id=\"fab-wrapper\" class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button id=\"add-post-button\" (click)=\"addPost()\">\n        <ion-icon name=\"add\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n  <!-- Mobile -->\n  <ion-grid class=\"ion-hide-lg-up\">\n \n    <!-- <ion-row class=\"filter-toolbar-wrapper ion-hide-lg-up ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"filter-toolbar\">\n          <ion-buttons slot=\"start\">\n            <p *ngIf=\"this.postFilter === 'mostc'\" class=\"filter-message\"><span>Filter</span>: Most Comments</p>\n            <p *ngIf=\"this.postFilter === 'mostu'\" class=\"filter-message\"><span>Filter</span>: Most Upvotes</p>\n            <p *ngIf=\"this.postFilter === 'mostf'\" class=\"filter-message\"><span>Filter</span>: Most Followers</p>\n            <p *ngIf=\"this.postFilter === 'newest'\" class=\"filter-message\"><span>Filter</span>: Newest</p>\n            <p *ngIf=\"this.postFilter === 'oldest'\" class=\"filter-message\"><span>Filter</span> {{this.postFilter}}</p>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"filterMenu()\">\n              <ion-icon class=\"filter-icon\" slot=\"start\" name=\"filter\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row> -->\n    <!-- Followed Posts and My Posts -->\n    <!-- <ion-row class=\"top-button-wrapper ion-hide-lg-up ion-justify-content-center\">\n      <div class=\"spacer\"></div>\n      <ion-col class=\"ion-text-left\" push-xs=\"1\" size-xs=\"12\" size-sm=\"11\" size-md=\"10\">\n        <ion-button class=\"toolbar-orange-button\" (click)=\"following()\">\n          <ion-icon class=\"header-icons\" src=\"../../assets/icon/following.svg\"></ion-icon>\n          Following ({{this.followedPostCount}})\n        </ion-button>\n        <ion-button class=\"toolbar-orange-button\" (click)=\"myPosts()\">\n          <ion-icon class=\"header-icons\" name=\"list\"></ion-icon>\n          My Posts ({{this.myPostsLength}})\n        </ion-button>\n      </ion-col>\n    </ion-row> -->\n    <!-- Posts -->\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- Posts -->\n      <ion-col *ngIf=\"noPosts\" size-xs=\"12\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"5\">\n        <p>No Posts with those #Hashtags. Please try again.</p>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"11\" pull-md=\"1.5\" size-md=\"8\" size-lg=\"8\" size-xl=\"5\"> \n        <div class=\"post\" *ngFor=\"let post of allPosts\">\n        <!-- Profile Header -->\n        <ion-row class=\"ion-justify-content-center\">\n              <!-- Profile Picture -->\n              <ion-col size=\"1\">\n                <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 35xpx; width: 35px;\">\n              </ion-col>\n\n              <!-- Post Creator's Name -->\n              <ion-col push=\"0.2\" size=\"10\">\n                <p class=\"post-name\">{{post.creatorName}}</p>\n                <p class=\"post-date\">{{this.formatDistanceToNow(post.date)}}</p>\n              </ion-col>\n\n        </ion-row>\n        <!-- Post Content -->\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- (click)=\"postPage(post)\"  -->\n          <!-- 1080x1350 -->\n          <ion-col size=\"11\">\n            <p class=\"post-title\">{{post.title}}</p>\n            <div class=\"hashtags\">\n              <p class=\"hashtag\" *ngFor=\"let tag of post.hashtags\">\n                #{{tag}}\n              </p>\n            </div>\n            <p class=\"no-tags\" *ngIf=\"post.hashtags.length === 0\">\n              No #hashtags for this post\n            </p>\n            <p [ngClass]=\"{'show-less': showShortDesciption}\" class=\"post-content\">{{post.post}}</p>\n            <button *ngIf=\"post.post.length > 400\" class=\"show-more-or-less-button\" type=\"button\" (click)=\"alterDescriptionText(post.post)\">\n              {{ showShortDesciption ? '... Read More': 'Show Less ...' }}\n            </button>\n          </ion-col>\n        </ion-row>\n        <!-- Comment -->\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\">\n            <ion-item  style=\"height: auto;\" lines=\"none\">\n              <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                <ion-textarea\n                  (ionBlur)=\"this.commentBlur()\"\n                  (ionFocus)=\"this.commentFocus()\"\n                  class=\"comment-input-mobile\"\n                  autogrow=\"true\"\n                  autocapitalize=\"true\"\n                  rows=\"1\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  type=\"text\"\n                  #postComment\n                  placeholder=\"Add a Comment\"\n                  formControlName=\"comment\">\n                </ion-textarea>\n\n                <!-- Textarea that appears after User focuses on Comment Input -->\n                <!-- Comment Post Button -->\n                <ion-button\n                  style=\"float: right;\"\n                  *ngIf=\"postComment.value.length >= 2;\"\n                  class=\"comment-post-button\"\n                  name=\"send\"\n                  type=\"submit\">Post Comment\n                </ion-button>\n              </form>\n            </ion-item>\n          </ion-col>\n          </ion-row>\n        <!-- Post Buttons -->\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- Upvote & Downvote-->\n          <ion-col size=\"8\">\n            <app-up-down-vote-buttons [postID]=\"post._id\" [postEmail]=\"post.creatorEmail\"></app-up-down-vote-buttons>\n          </ion-col>\n          <!-- Follow & Comment -->\n          <ion-col size=\"3\">\n            <app-follow-comment-buttons [postID]=\"post._id\" [commentLength]=\"post.comments.length\"></app-follow-comment-buttons>\n          </ion-col>\n        </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- Spacer -->\n    <div style=\"margin-bottom: 200px;\" ></div>\n  </ion-grid>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_posts_posts_module_ts.js.map