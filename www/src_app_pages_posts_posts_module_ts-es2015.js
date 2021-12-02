"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_posts_posts_module_ts"],{

/***/ 73773:
/*!****************************************************!*\
  !*** ./src/app/pages/posts/post-routing.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostRoutingModule": function() { return /* binding */ PostRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPageModule": function() { return /* binding */ PostPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.page */ 35292);
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-routing.module */ 73773);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/custom-component.module */ 64941);








// import { ReadMoreComponent } from '../../components/read-more/read-more.component';
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPage": function() { return /* binding */ PostsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_posts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./posts.page.html */ 83135);
/* harmony import */ var _posts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page.scss */ 69757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ 69166);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 48578);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
/* harmony import */ var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/student-chat.service */ 70009);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notifications.service */ 79744);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var src_app_components_posts_filter_popover_posts_filter_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/posts-filter-popover/posts-filter-popover.component */ 78546);
/* harmony import */ var src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/emitters/filter-posts.service */ 15588);


















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
    }
    ngOnDestroy() {
        this.postsSub.unsubscribe();
        this.notificationsSub.unsubscribe();
        this.postsEmitterService.subsVar.unsubscribe();
        this.profileSub.unsubscribe();
        this.routerSub.unsubscribe();
        this.posts.followingSubject$.unsubscribe();
    }
    ngOnInit() {
        this.getUserInfo();
        this.getPosts();
        this.getFollowingPosts();
        this.trackRoute();
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
        // When Users updated their Profile Picture, Unfollow/Follow, Up/Downvote, or Comment on an individual
        if (this.postsEmitterService.subsVar === undefined) {
            this.postsEmitterService.subsVar = this.postsEmitterService.invokePostsPageRefresh.subscribe(() => {
                this.getPosts();
                this.getUserInfo();
            });
        }
        // Filter Jobs from Popover
        if (this.filterPostsService.subsVar == undefined) {
            this.filterPostsService.subsVar = this.filterPostsService.filterPostsEmitter.subscribe(data => {
                // Filter jobs
                this.postFilter = data;
                this.getPosts();
            });
        }
    }
    trackRoute() {
        this.routerSub = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd)).subscribe(data => {
            console.log(data['url']);
            let url = data['url'];
            if (url.includes('/home/posts/post-page/') ||
                url.includes('/home/posts/my-posts/') ||
                url.includes('/home/posts/notifications/') ||
                url.includes('/home/posts/following')) {
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
                    this.getPosts();
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
                this.getPosts();
            });
            console.log('Loading dismissed!');
        });
    }
    searchBarFocus() {
        console.log('Focusing on Searchbar');
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
    getUserInfo() {
        this.postsSub = this.profile.getUserDetails().subscribe(details => {
            // console.log(details);
            this.userEmail = details['email'];
            this.userProfilePicture = details['profilePicture'];
            this.userFullName = details['fullName'];
            this.myPostsLength = details['posts'].length;
            this.followedPost = details['followedPost'];
            this.notifications.getNotifications(this.userEmail)
                .subscribe(notifications => {
                console.log(notifications);
                this.notificationsLength = Object.values(notifications).length;
            });
        });
    }
    getFollowingPosts() {
        // Get the user's posts he/she is following
        this.profileSub = this.profile.getUserDetails().subscribe(details => {
            this.posts.followingSubject$.next(this.followedPost);
            this.posts.followingSubject$.subscribe(posts => {
                this.followedPostCount = posts.length;
            });
            // TODO:
            // Add My Posts Counter
            // this.posts.followingSubject$.next(this.myPosts);
            // this.posts.followingSubject$.subscribe( posts => {
            //   this.myPostCount = posts.length;
            // });
        });
    }
    formatDistanceToNow(date) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(date), {
            includeSeconds: true,
            addSuffix: true
        });
    }
    doRefresh(event) {
        this.getFollowingPosts();
        this.postsSub = this.posts.getPosts().subscribe(posts => {
            this.allPosts = Object.values(posts).reverse();
            for (const post of this.allPosts) {
                post.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(post.date), {
                    includeSeconds: true,
                    addSuffix: true
                });
            }
        });
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
    getPosts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.postsSub = this.posts.getPosts().subscribe(posts => {
                this.allPosts = Object.values(posts);
                this.loadedAllPosts = Object.values(posts);
                // Filter Logic
                switch (this.postFilter) {
                    case 'mostc':
                        console.log('Most Comments');
                        this.filtering = true;
                        this.postFilter = 'mostc';
                        function mostComments(a, b) {
                            console.log('Sorting Posts');
                            return a.comments.length - b.comments.length;
                        }
                        this.allPosts.sort(mostComments);
                        this.allPosts.reverse();
                        this.searching = false;
                        break;
                    case 'mostu':
                        console.log('Most Upvotes');
                        this.filtering = true;
                        this.postFilter = 'mostu';
                        function mostUpvotes(a, b) {
                            console.log('Sorting Posts');
                            return a.upvotes - b.upvotes;
                        }
                        this.allPosts.sort(mostUpvotes);
                        this.allPosts.reverse();
                        this.searching = false;
                        break;
                    case 'mostf':
                        console.log('Most Followers');
                        this.filtering = true;
                        this.postFilter = 'mostf';
                        function mostFollowers(a, b) {
                            console.log('Sorting Posts');
                            return a.followers.length - b.followers.length;
                        }
                        this.allPosts.sort(mostFollowers);
                        this.allPosts.reverse();
                        this.searching = false;
                        break;
                    case 'newest':
                        console.log('Newest');
                        this.filtering = true;
                        this.postFilter = 'newest';
                        function newestPost(a, b) {
                            console.log('Sorting Posts');
                            return a.date - b.date;
                        }
                        this.allPosts.sort(newestPost);
                        this.allPosts.reverse();
                        this.searching = false;
                        break;
                    case 'oldest':
                        console.log('Oldest');
                        this.filtering = true;
                        this.postFilter = 'oldest';
                        function oldestPost(a, b) {
                            console.log('Sorting Posts');
                            return b.date - a.date;
                        }
                        this.allPosts.sort(oldestPost);
                        this.searching = false;
                        break;
                    default:
                        break;
                }
                return setTimeout(() => {
                    this.filtering = false;
                }, 1000);
            });
        });
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
                        postComments.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(postComments.date), {
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
                    postComments.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(postComments.date), {
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
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_posts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.trigger)('inOutAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('0.8s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({ transform: 'translateX(100px)' }))
                ])
            ])
        ],
        styles: [_posts_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController,
        _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.PopoverController,
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService,
        src_app_emitters_filter_posts_service__WEBPACK_IMPORTED_MODULE_8__.FilterPostsService,
        src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_5__.StudentChatService,
        src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService])
], PostsPage);



/***/ }),

/***/ 83135:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/posts/posts.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon style=\"color: white; font-size: 1.5em; margin-left: 16px;\" slot=\"start\" name=\"newspaper-outline\"></ion-icon>\n    <ion-title>\n      <img class=\"profile-picture\" src=\"{{userProfilePicture}}\" alt=\"\">\n      <!-- {{userFullName}} -->\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- Notifications -->\n      <ion-button (click)=\"notificationsPage()\">\n        <ion-icon class=\"header-icons\" src=\"../../assets/icon/notifications-icon.svg\"></ion-icon>\n        <span style=\"color: #ffb351; height: 25px; width: 25px; border-radius: 100px; position: relative; font-size: 1.4em; font-weight: 600;\">{{notificationsLength}}</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the bottom end -->\n  <ion-fab [@inOutAnimation] id=\"fab-wrapper\" class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button id=\"add-post-button\" (click)=\"addPost()\">\n      <ion-icon name=\"add\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <!-- Spinner -->\n<ion-spinner *ngIf=\"searching\" name=\"crescent\"></ion-spinner>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-lg-down\">\n    <!-- Search & Filter -->\n    <ion-row style=\"background-color: rgb(215, 234, 255); box-shadow: 1px 10px 26px rgba(0,0,0,0.05); padding: 1em 0; position: fixed; width: 100%; z-index: 999;\" class=\"ion-justify-content-center\">\n      <ion-col  size-md=\"7.5\" size-lg=\"6\" pull-xl=\"0.5\" size-xl=\"5\">\n        <h3><ion-icon size=\"large\" name=\"newspaper-outline\"></ion-icon>Posts</h3>\n        <ion-searchbar\n          class=\"searchbar-desktop\"\n          animated=\"true\"\n          (keyup.enter)=\"searchLoading()\"\n          cancelButtonText=\"\"\n          showCancelButton=\"true\"\n          placeholder=\"Search Posts by Hashtags\"\n          (ionFocus)=\"searchBarFocus()\"\n          (ionChange)=\"search($event)\">\n          <span class=\"hash-desktop\">#</span>\n          <ion-button style=\"display: inline-block; width: 72px; font-size: 0.7em; position: absolute; right: -80px; z-index: 999;\" (click)=\"searchLoading()\">\n            Search\n          </ion-button>\n        </ion-searchbar>\n\n        <p style=\"color: #333; font-size: 1em;\">You can choose up to five hashtags. Please seperate each tag with a comma ( , ). Example: \"Computers, Science, Technology\".</p>\n      </ion-col>\n      <ion-col  size-md=\"7.5\" size-lg=\"2\" pull-xl=\"1.8\" size-xl=\"2\">\n      </ion-col>\n    </ion-row>\n\n    <!-- If Filtering -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col style=\"position: relative; top: -32px;\" class=\"ion-text-center\" size=\"12\">\n        <ion-spinner *ngIf=\"this.filtering\" name=\"bubbles\">Filtering</ion-spinner>\n      </ion-col>\n    </ion-row>\n\n    <!-- Posts & SideBar -->\n    <ion-row *ngIf=\"!this.filtering\" class=\"ion-justify-content-center\">\n      <!-- Posts -->\n      <ion-col style=\"padding: 100px 0px;\"  size-md=\"7.5\" size-lg=\"9\" size-xl=\"6\">\n        <div class=\"post\" *ngFor=\"let post of allPosts\" style=\"margin-top: 16%;\">\n          <!-- Profile Header -->\n          <ion-row>\n                <!-- Profile Picture -->\n                <ion-col class=\"ion-text-center\" push=\"0.2\" size=\"1\">\n                  <img src=\"{{post.creatorProfilePicture}}\" style=\"border-radius: 100px; height: 35xpx; width: 35px;\">\n                </ion-col>\n                <!-- Post Creator's Name -->\n                <ion-col push=\"0.2\" size=\"10\">\n                  <p class=\"post-name\">{{post.creatorName}}</p>\n                  <p class=\"post-date\">{{this.formatDistanceToNow(post.date)}}</p>\n                </ion-col>\n          </ion-row>\n          <!-- Post Content -->\n          <ion-row class=\"ion-justify-content-center\">\n            <!-- (click)=\"postPage(post)\"  -->\n            <!-- 1080x1350 -->\n            <ion-col size=\"11\">\n              <p class=\"post-title\">{{post.title}}</p>\n              <div class=\"hashtags\">\n                <p class=\"hashtag\" *ngFor=\"let tag of post.hashtags\">\n                  #{{tag}}\n                </p>\n              </div>\n              <p class=\"no-tags\" *ngIf=\"post.hashtags.length === 0\">\n                No #hashtags for this post\n              </p>\n              <p style=\"border-top: 1px solid #999; padding: 18px 0px;\"  [ngClass]=\"{'show-less': showShortDesciption}\" class=\"post-content\">{{post.post}}</p>\n              <span class=\"ellipsis\" *ngIf=\"post.post.length > 400 && showShortDesciption\">...</span>\n              <button *ngIf=\"post.post.length > 400\" class=\"show-more-or-less-button\" type=\"button\" (click)=\"alterDescriptionText(post.post)\">\n                {{ showShortDesciption ? 'Read More': 'Hide' }}\n              </button>\n            </ion-col>\n          </ion-row>\n          <!-- Comment -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11.5\">\n              <ion-item  style=\"height: auto;\" lines=\"none\">\n                <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                  <ion-textarea\n                      class=\"comment-input-mobile\"\n                      autogrow=\"true\"\n                      autocapitalize=\"true\"\n                      rows=\"5\"\n                      spellcheck=\"true\"\n                      wrap=\"soft\"\n                      type=\"text\"\n                      #postComment\n                      placeholder=\"Add a Comment\"\n                      formControlName=\"comment\">\n                  </ion-textarea>\n                  <!-- Comment Post Button -->\n                  <ion-button\n                    style=\"float: right;\"\n                    *ngIf=\"postComment.value.length >= 2;\"\n                    class=\"comment-post-button\"\n                    name=\"send\"\n                    type=\"submit\">Post Comment\n                  </ion-button>\n                </form>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Post Buttons -->\n          <ion-row class=\"ion-justify-content-center\">\n            <!-- Upvote & Downvote-->\n            <ion-col size=\"8\">\n              <app-up-down-vote-buttons [postID]=\"post._id\" [postEmail]=\"post.creatorEmail\"></app-up-down-vote-buttons>\n            </ion-col>\n            <!-- Follow & Comment -->\n            <ion-col size=\"3\">\n              <app-follow-comment-buttons [postID]=\"post._id\" [commentLength]=\"post.comments.length\"></app-follow-comment-buttons>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n      <!-- Sidebar with User Info -->\n      <ion-col push=\"0.5\" size=\"2\">\n        <ion-row class=\"user-details\">\n          <ion-col size=\"12\">\n            <img src=\"{{userProfilePicture}}\" style=\"border-radius: 100px; height: 55px; width: 55px;\">\n            <ion-button style=\"--background: none; --background: none; position: relative; top: 16px;\" (click)=\"notificationsPage()\">\n              <ion-icon style=\"font-size: 1.5em;\" src=\"../../assets/icon/notifications-icon-blue.svg\"></ion-icon>\n              <span style=\"color: #e4405f; height: 25px; width: 25px; border-radius: 100px; position: relative; font-size: 1.4em; font-weight: 600;\">{{notificationsLength}}</span>\n            </ion-button>\n            <h6 style=\"font-size: 1.2em;\">{{userFullName}}</h6>\n            <ion-button class=\"my-post-button\"  (click)=\"myPosts()\">\n              My Posts\n            </ion-button>\n            <ion-button class=\"following-button\" (click)=\"following()\">\n              Following ({{followedPostCount}})\n            </ion-button>\n            <ion-button class=\"add-button\"  (click)=\"addPost()\">\n              Add Post\n            </ion-button>\n            <div>\n              <!-- <ion-button style=\"display: inline-block; width: 72px; font-size: 1.2em; --background: none; --color: white;\" (click)=\"filterMenu()\">\n                <ion-icon slot=\"start\" style=\"font-size: 1.3em;\" color=\"primary\" name=\"filter\"></ion-icon>\n              </ion-button> -->\n              <div class=\"spacer ion-hide-lg-down\"></div>\n              <p *ngIf=\"this.postFilter === 'mostc'\" (click)=\"filterMenu()\" class=\"filter-message\"><span>Filter</span>: Most Comments</p>\n              <p *ngIf=\"this.postFilter === 'mostu'\" (click)=\"filterMenu()\" class=\"filter-message\"><span>Filter</span>: Most Upvotes</p>\n              <p *ngIf=\"this.postFilter === 'mostf'\" (click)=\"filterMenu()\" class=\"filter-message\"><span>Filter</span>: Most Followers</p>\n              <p *ngIf=\"this.postFilter === 'newest'\" (click)=\"filterMenu()\" class=\"filter-message\"><span>Filter</span>: Newest</p>\n              <p *ngIf=\"this.postFilter === 'oldest'\" (click)=\"filterMenu()\" class=\"filter-message\"><span>Filter</span> {{this.postFilter}}</p>\n              <div class=\"spacer ion-hide-lg-down\"></div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Mobile -->\n  <ion-grid class=\"ion-hide-lg-up\">\n    <!-- Filter Toolbar -->\n    <ion-row class=\"filter-toolbar-wrapper ion-hide-lg-up ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"filter-toolbar\">\n          <ion-buttons slot=\"start\">\n            <p *ngIf=\"this.postFilter === 'mostc'\" class=\"filter-message\"><span>Filter</span>: Most Comments</p>\n            <p *ngIf=\"this.postFilter === 'mostu'\" class=\"filter-message\"><span>Filter</span>: Most Upvotes</p>\n            <p *ngIf=\"this.postFilter === 'mostf'\" class=\"filter-message\"><span>Filter</span>: Most Followers</p>\n            <p *ngIf=\"this.postFilter === 'newest'\" class=\"filter-message\"><span>Filter</span>: Newest</p>\n            <p *ngIf=\"this.postFilter === 'oldest'\" class=\"filter-message\"><span>Filter</span> {{this.postFilter}}</p>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"filterMenu()\">\n              <ion-icon class=\"filter-icon\" slot=\"start\" name=\"filter\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n    <!-- Followed Posts and My Posts -->\n    <!-- <ion-row class=\"top-button-wrapper ion-hide-lg-up ion-justify-content-center\">\n      <div class=\"spacer\"></div>\n      <ion-col class=\"ion-text-left\" push-xs=\"1\" size-xs=\"12\" size-sm=\"11\" size-md=\"10\">\n        <ion-button class=\"toolbar-orange-button\" (click)=\"following()\">\n          <ion-icon class=\"header-icons\" src=\"../../assets/icon/following.svg\"></ion-icon>\n          Following ({{this.followedPostCount}})\n        </ion-button>\n        <ion-button class=\"toolbar-orange-button\" (click)=\"myPosts()\">\n          <ion-icon class=\"header-icons\" name=\"list\"></ion-icon>\n          My Posts ({{this.myPostsLength}})\n        </ion-button>\n      </ion-col>\n    </ion-row> -->\n    <!-- Posts -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col *ngIf=\"noPosts\" size-xs=\"12\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"5\">\n        <p>No Posts with those #Hashtags. Please try again.</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- Posts -->\n      <ion-col style=\"padding: 0; position: relative; top: 88px;\" size-xs=\"12\" size-sm=\"11\" pull-md=\"1.5\" size-md=\"8\" size-lg=\"8\" size-xl=\"5\">\n        <div class=\"post\" *ngFor=\"let post of allPosts\" style=\"margin-top: 1%;\">\n      <!-- Profile Header -->\n      <ion-row class=\"ion-justify-content-center\">\n            <!-- Profile Picture -->\n            <ion-col size=\"1\">\n              <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 35xpx; width: 35px;\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col push=\"0.2\" size=\"10\">\n              <p class=\"post-name\">{{post.creatorName}}</p>\n              <p class=\"post-date\">{{this.formatDistanceToNow(post.date)}}</p>\n            </ion-col>\n\n      </ion-row>\n      <!-- Post Content -->\n      <ion-row class=\"ion-justify-content-center\">\n        <!-- (click)=\"postPage(post)\"  -->\n        <!-- 1080x1350 -->\n        <ion-col size=\"11\">\n          <p class=\"post-title\">{{post.title}}</p>\n          <div class=\"hashtags\">\n            <p class=\"hashtag\" *ngFor=\"let tag of post.hashtags\">\n              #{{tag}}\n            </p>\n          </div>\n          <p class=\"no-tags\" *ngIf=\"post.hashtags.length === 0\">\n            No #hashtags for this post\n          </p>\n          <p [ngClass]=\"{'show-less': showShortDesciption}\" class=\"post-content\">{{post.post}}</p>\n          <span class=\"ellipsis\" *ngIf=\"post.post.length > 400 && showShortDesciption\">...</span>\n          <button *ngIf=\"post.post.length > 400\" class=\"show-more-or-less-button\" type=\"button\" (click)=\"alterDescriptionText(post.post)\">\n            {{ showShortDesciption ? 'Read More': 'Hide' }}\n          </button>\n        </ion-col>\n      </ion-row>\n      <!-- Comment -->\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <ion-item  style=\"height: auto;\" lines=\"none\">\n            <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n              <ion-textarea\n                (ionBlur)=\"this.commentBlur()\"\n                (ionFocus)=\"this.commentFocus()\"\n                class=\"comment-input-mobile\"\n                autogrow=\"true\"\n                autocapitalize=\"true\"\n                rows=\"1\"\n                spellcheck=\"true\"\n                wrap=\"soft\"\n                type=\"text\"\n                #postComment\n                placeholder=\"Add a Comment\"\n                formControlName=\"comment\">\n              </ion-textarea>\n\n              <!-- Textarea that appears after User focuses on Comment Input -->\n              <!-- Comment Post Button -->\n              <ion-button\n                style=\"float: right;\"\n                *ngIf=\"postComment.value.length >= 2;\"\n                class=\"comment-post-button\"\n                name=\"send\"\n                type=\"submit\">Post Comment\n              </ion-button>\n            </form>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Post Buttons -->\n      <ion-row class=\"ion-justify-content-center\">\n        <!-- Upvote & Downvote-->\n        <ion-col size=\"8\">\n          <app-up-down-vote-buttons [postID]=\"post._id\" [postEmail]=\"post.creatorEmail\"></app-up-down-vote-buttons>\n        </ion-col>\n        <!-- Follow & Comment -->\n        <ion-col size=\"3\">\n          <app-follow-comment-buttons [postID]=\"post._id\" [commentLength]=\"post.comments.length\"></app-follow-comment-buttons>\n        </ion-col>\n      </ion-row>\n        </div>\n      </ion-col>\n     </ion-row>\n    <!-- Spacer -->\n    <div style=\"margin-bottom: 200px;\" ></div>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer class=\"ion-hide-lg-up\">\n  <!-- <ion-textarea\n    class=\"comment-input-mobile-focused\"\n    autogrow=\"true\"\n    autocapitalize=\"true\"\n    rows=\"1\"\n    spellcheck=\"true\"\n    wrap=\"soft\"\n    type=\"text\"\n    #postComment\n    placeholder=\"Add a Comment\">\n  </ion-textarea> -->\n  <div\n  id=\"searchbar-wrapper\">\n  <!-- (keyup)=\"addHashTag($event)\"-->\n    <ion-searchbar\n      class=\"searchbar\"\n      animated=\"true\"\n      searchIcon=\"none\"\n      cancelButtonText=\"\"\n      showCancelButton=\"true\"\n      placeholder=\"Search Posts by Hashtags\"\n      (ionFocus)=\"searchBarFocus()\"\n      (ionChange)=\"search($event)\">\n      <span class=\"hash\">#</span>\n    </ion-searchbar>\n    <div id=\"search-options\">\n      <p>You can choose up to five hashtags.\n        <br>Please seperate each tag with a comma ( , ).\n        <br>Example: \"Computers, Science, Technology\"</p>\n      <div>\n        <ion-button\n        (click)=\"searchLoading()\" class=\"search-button\">\n          Search\n        </ion-button>\n        <ion-button\n        (click)=\"searchBarBlur()\" class=\"cancel-button\">\n          Cancel\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-footer>\n\n");

/***/ }),

/***/ 69757:
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.page.scss ***!
  \*********************************************/
/***/ (function(module) {

module.exports = ".profile-picture {\n  height: 40px;\n  width: 40px;\n  border-radius: 100px;\n  margin-right: 5px;\n  display: inline-block;\n  position: relative;\n  top: 0px;\n}\n\n.spacer {\n  margin: 21px 0;\n}\n\n.header-hr {\n  border-top: 1px solid #666;\n  opacity: 0.5;\n  margin-top: 10px;\n}\n\n.post {\n  padding: 24px 0;\n  border-radius: 10px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  font-size: 1.1em;\n  line-height: 35px;\n  background: white;\n}\n\n.post-title {\n  color: #0055a5;\n  font-size: 0.9em;\n  font-weight: 600;\n  position: relative;\n  top: -14px;\n  line-height: 16px;\n  margin: 10px 0px 0px 0px;\n}\n\n.post-buttons ion-toolbar {\n  --background: none;\n}\n\n.post-name {\n  font-size: 0.9em;\n  color: #222;\n  margin: 0;\n  line-height: 18px;\n}\n\n.post-date {\n  opacity: 0.4;\n  font-size: 0.65em;\n  margin: 0;\n  line-height: 18px;\n}\n\nion-content {\n  background: #edf3f8;\n}\n\n.filter-toolbar-wrapper {\n  background: #0057a9b8;\n  position: fixed;\n  width: 100%;\n  height: 50px;\n  z-index: 9999;\n}\n\n.filter-toolbar-wrapper ion-toolbar {\n  --background: none;\n}\n\n.top-button-wrapper {\n  width: 100%;\n  position: relative;\n  top: 100px;\n}\n\n.filter-toolbar {\n  position: relative;\n  top: -16px;\n}\n\n.filter-message {\n  color: white;\n  font-size: 0.85em;\n  display: inline;\n  position: relative;\n}\n\n.filter-message span {\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 992px) {\n  .filter-message {\n    color: #0055a5;\n    background-color: white;\n    border: 2px solid #0055a5;\n    padding: 0.5em;\n    border-radius: 50px;\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);\n  }\n  .filter-message .filter-icon {\n    font-size: 2.5em;\n    color: #0055a5;\n  }\n}\n\n.filter-icon {\n  font-size: 2.5em;\n  color: white;\n}\n\n.toolbar-orange-button {\n  width: 130px;\n  font-weight: 600;\n  --background: #faa71b;\n  position: relative;\n  right: 8px;\n}\n\n@media screen and (max-width: 744px) {\n  .post {\n    position: relative;\n    top: 0px;\n  }\n}\n\n.searchbar {\n  font-weight: 600;\n  color: #0055a5;\n  background: #0055a5;\n}\n\n.searchbar-desktop {\n  font-weight: 600;\n  color: #0055a5;\n}\n\n.hash {\n  margin-right: 8px;\n  font-size: 2em;\n  font-weight: 600;\n  color: white;\n}\n\n.hash-desktop {\n  margin-right: 8px;\n  font-size: 2em;\n  font-weight: 600;\n  color: #0055a5;\n}\n\n.hashtags {\n  position: relative;\n  top: -32px;\n}\n\n.hashtag {\n  font-size: 0.65em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #ea8400;\n}\n\n.no-tags {\n  font-size: 0.7em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #333;\n  opacity: 0.5;\n  position: relative;\n  top: -32px;\n}\n\n.post-content {\n  font-size: 1em;\n  color: #111;\n  height: auto;\n  overflow: hidden;\n}\n\n.show-less {\n  height: 100px;\n  overflow: hidden;\n}\n\n.show-more-or-less-button {\n  float: right;\n  position: relative;\n  right: 0px;\n  margin-top: 35px;\n  padding: 0.5em;\n  background: #666;\n  color: white;\n  border-radius: 5px;\n  font-size: 0.6em;\n  font-weight: 600;\n}\n\n.ellipsis {\n  float: right;\n  position: relative;\n  right: 20px;\n  top: -18px;\n  font-size: 1.5em;\n}\n\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #f4f5f8;\n}\n\n.searchbar-input-container .sc-ion-searchbar-md {\n  display: block;\n  position: relative;\n  flex-shrink: 1;\n  width: 96%;\n  position: relative;\n  left: 4px;\n}\n\n#search-options {\n  padding: 10px;\n  color: white;\n  font-weight: 500;\n  font-size: 0.8em;\n  background: #0055a5;\n}\n\n#search-options .cancel-button {\n  display: block;\n  --background: #0055a5;\n}\n\n#search-options .search-button {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 16px;\n  --background: #faa71b;\n}\n\n.user-details {\n  position: fixed;\n  margin-top: 16%;\n  background: white;\n  border-radius: 15px;\n  border: 2px solid #e6e6e6;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  padding: 1em;\n}\n\n#username {\n  color: #0055a5;\n  font-size: 0.8em;\n  font-weight: 600;\n  position: relative;\n  left: 0px;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-header .header-icons {\n  font-size: 1.6em;\n}\n\nion-header p {\n  color: #000;\n  font-size: 1.2em;\n}\n\nion-item {\n  --backsground: none;\n}\n\n.following-mobile-button {\n  display: inline-block;\n  opacity: 1;\n  --background: #0055a5;\n  --color: white;\n  box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.1);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-size: 0.6em;\n  font-weight: 600;\n  position: relative;\n  right: 15px;\n}\n\n@media screen and (max-width: 470px) {\n  .following-mobile-button {\n    position: relative;\n    right: 35px;\n  }\n}\n\n.following-button {\n  --color: white;\n  --background: #0055a5;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#5ad8b2, #2e8f72);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.my-post-button {\n  --background: #333;\n  --background-hover: #444;\n  --color: white;\n  font-weight: 600;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  display: block;\n}\n\n.my-post-button:hover {\n  --color: white;\n}\n\nform {\n  width: 100%;\n}\n\n.comment {\n  border: 1px solid #0055a5;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 10px;\n}\n\n.comment-button {\n  font-size: 1em;\n  font-weight: 600;\n  position: relative;\n  right: -20px;\n  top: 5px;\n}\n\n.comment-post-button {\n  --border-color: #40c59d;\n  --border-width: 2px;\n  --border-style: solid;\n  --background: #40c59d;\n  --color: white;\n  height: 40px;\n  margin: 29px auto;\n  font-weight: 600;\n  font-size: 0.6em;\n  border-radius: 5px;\n  width: 100px;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 4px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(213, 232, 236, 0.3);\n  height: auto;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 3px solid #0055a5;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile-focused {\n  background: rgba(213, 232, 236, 0.3);\n  height: auto;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 3px solid #0055a5;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #e3405f;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-button {\n  width: 130px;\n  --background: #0055a5;\n  --background-hover: #0055a5;\n  --color: white;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n}\n\n.comment-button:focus {\n  --color: orange;\n}\n\n.follow-button {\n  --color: white;\n  --background: #888;\n  --background-hover: #24d8a8;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n  width: 100px;\n}\n\n.unfollow-button {\n  font-weight: 800;\n  line-height: 1em;\n  border: 1px solid #faa71b;\n  width: 300px;\n  color: #faa71b;\n  font-size: 1.5em;\n  padding: 2px 0px 2px 0px;\n  position: relative;\n  right: 20px;\n  border-radius: 50px;\n}\n\n.follow-button:hover, .unfollow-button:hover, .comment-button:hover {\n  --color: white;\n}\n\n@media screen and (max-width: 567px) {\n  .comment-button, .follow-button, .unfollow-button {\n    font-weight: 600;\n    font-size: 0.5em;\n    width: 80px;\n  }\n}\n\nion-buttons {\n  position: relative;\n  left: 10px;\n}\n\n.upvote {\n  border-radius: 5px;\n  position: relative;\n  --color: #0055a5;\n}\n\n.upvote ion-icon {\n  color: #0055a5;\n  font-size: 40px;\n}\n\n.downvote {\n  border-radius: 5px;\n  padding-left: 0px;\n  --color: #0055a5;\n}\n\n.downvote ion-icon {\n  color: #0055a5;\n  --font-size: 40px;\n}\n\n.upvoted-toast {\n  --background: #0055a5;\n}\n\n.downvoted-toast {\n  --background: #FFB351;\n}\n\n.followed-toast {\n  --background: #24d8a8;\n}\n\n.unfollowed-toast {\n  --background: #FFB351;\n}\n\nion-fab-button {\n  --background: #00c400;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 10px;\n  right: 10px;\n  opacity: 0;\n  transition: 0.5s;\n  -webkit-animation: fab-slide-in 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s forwards;\n          animation: fab-slide-in 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s forwards;\n}\n\n@-webkit-keyframes fab-slide-in {\n  0% {\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes fab-slide-in {\n  0% {\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes username-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes username-slide-in {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes add-post-button-tap {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes add-post-button-tap {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QUE7RUFaRjtBQUNGOztBQWVBO0VBQ0U7SUFDRSw0QkFBQTtFQWJGO0VBZ0JBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBZEY7QUFDRjs7QUFNQTtFQUNFO0lBQ0UsNEJBQUE7RUFiRjtFQWdCQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQWRGO0FBQ0Y7O0FBaUJBO0VBQ0U7SUFDRSxtQkFBQTtFQWZGO0VBaUJBO0lBQ0UscUJBQUE7RUFmRjtFQWlCQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQWZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLG1CQUFBO0VBZkY7RUFpQkE7SUFDRSxxQkFBQTtFQWZGO0VBaUJBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBZkY7QUFDRiIsImZpbGUiOiJwb3N0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiA0MHB4OyB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG59XG4uc3BhY2VyIHtcbiAgbWFyZ2luOiAyMXB4IDA7XG59XG4uaGVhZGVyLWhye1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucG9zdCB7XG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMjZweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ucG9zdC10aXRsZSB7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG59XG5cbi5wb3N0LWJ1dHRvbnN7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cblxuLnBvc3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjMjIyO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG59XG5cbi5wb3N0LWRhdGUge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICBtYXJnaW46IDA7IGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG59XG4uZmlsdGVyLXRvb2xiYXItd3JhcHBlcntcbiAgYmFja2dyb3VuZDogIzAwNTdhOWI4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC8vIGJveC1zaGFkb3c6IDFweCAxMHB4IDI2cHggcmdiYSgwLDAsMCwwLjA1KTtcblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICB9XG59XG4udG9wLWJ1dHRvbi13cmFwcGVye1xuICAvLyBiYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwMHB4O1xufVxuLmZpbHRlci10b29sYmFye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE2cHg7XG59XG4uZmlsdGVyLW1lc3NhZ2V7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmZpbHRlci1tZXNzYWdlICB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNTVhNTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xuICAuZmlsdGVyLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIH1cblxuICB9XG59XG4uZmlsdGVyLWljb24ge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4udG9vbGJhci1vcmFuZ2UtYnV0dG9uIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDhweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0NHB4KSB7XG4gIC5wb3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwcHg7XG4gIH1cbn1cbi5zZWFyY2hiYXIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwNTVhNTtcbiAgYmFja2dyb3VuZDogIzAwNTVhNVxufVxuLnNlYXJjaGJhci1kZXNrdG9wIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDU1YTU7XG59XG4uaGFzaHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGFzaC1kZXNrdG9we1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDA1NWE1O1xufVxuLmhhc2h0YWdze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMycHg7XG59XG4uaGFzaHRhZ3tcbiAgZm9udC1zaXplOiAwLjY1ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZWE4NDAwO1xufVxuLm5vLXRhZ3Mge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMC41O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMycHg7XG59XG4ucG9zdC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMTExO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gfVxuXG4gLnNob3ctbGVzcyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaG93LW1vcmUtb3ItbGVzcy1idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJhY2tncm91bmQ6ICM2NjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZWxsaXBzaXMge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogLTE4cHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbiNzZWFyY2hiYXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbiB9XG5cbiAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciAuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICB3aWR0aDogOTYlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0cHg7XG4gfVxuXG4gI3NlYXJjaC1vcHRpb25zIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBiYWNrZ3JvdW5kOiAjMDA1NWE1O1xuXG4gIC5jYW5jZWwtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIH1cbiAgLnNlYXJjaC1idXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIC0tYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgfVxuIH1cblxuXG4udXNlci1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tdG9wOiAxNiU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDI2cHggcmdiKDAgMCAwIC8gNSUpO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbiN1c2VybmFtZSB7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuXG5pb24taGVhZGVyIHtcblxuICAuaGVhZGVyLWljb25zIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vIC0tYmFja2dyb3VuZDogI2VkZjNmODtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNTVhNTtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tzZ3JvdW5kOiBub25lO1xufVxuXG5cbi5mb2xsb3dpbmctbW9iaWxlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0MHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG4gIC5mb2xsb3dpbmctbW9iaWxlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICB9XG59XG5cblxuXG4uZm9sbG93aW5nLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hZGQtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1YWQ4YjIsICM0MGM1OWQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjMmU4ZjcyKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubXktcG9zdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMzMzM7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzQ0NDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm15LXBvc3QtYnV0dG9uOmhvdmVyIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbW1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1NWE1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbW1lbnQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IC0yMHB4O1xuICB0b3A6IDVweDtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWJvcmRlci1jb2xvcjogIzQwYzU5ZDtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJhY2tncm91bmQ6ICM0MGM1OWQ7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMjlweCBhdXRvO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4IDAgMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMnB4IDAgNHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjMyLCAyMzYsIC4zKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwNTVhNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cbi5jb21tZW50LWlucHV0LW1vYmlsZS1mb2N1c2Vke1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjMyLCAyMzYsIC4zKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwNTVhNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgLy8gaGVpZ2h0OiAwcHg7XG59XG4uY29tbWVudC1pbnB1dC1tb2JpbGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMzBweCAwIDE1MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI3LDY0LDk1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtYnV0dG9ue1xuICB3aWR0aDogMTMwcHg7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDA1NWE1O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbW1lbnQtYnV0dG9uOmZvY3VzIHtcbiAgLS1jb2xvcjogb3JhbmdlO1xufVxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICM4ODg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzI0ZDhhODtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZm9udC1zaXplOiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4vLyBDaGFuZ2UgY29sb3Jcbi51bmZvbGxvdy1idXR0b24ge1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICAvLyBiYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmFhNzFiO1xuICB3aWR0aDogMzAwcHg7XG4gIGNvbG9yOiAjZmFhNzFiO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nOiAycHggMHB4IDJweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5mb2xsb3ctYnV0dG9uOmhvdmVyLCAudW5mb2xsb3ctYnV0dG9uOmhvdmVyLCAuY29tbWVudC1idXR0b246aG92ZXIge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY29tbWVudC1idXR0b24sIC5mb2xsb3ctYnV0dG9uLCAudW5mb2xsb3ctYnV0dG9uIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgICAgd2lkdGg6IDgwcHg7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi51cHZvdGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1jb2xvcjogIzAwNTVhNTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5cbi5kb3dudm90ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgICAtLWZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG4udXB2b3RlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbn1cbi5kb3dudm90ZWQtdG9hc3Qge1xuICAtLWJhY2tncm91bmQ6ICNGRkIzNTE7XG59XG5cbi5mb2xsb3dlZC10b2FzdCB7XG4gIC0tYmFja2dyb3VuZDogIzI0ZDhhODtcbn1cbi51bmZvbGxvd2VkLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZCMzUxO1xufVxuXG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBjNDAwO1xuICAtLWNvbG9yLWZvY3VzZWQ6IHdoaXRlO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogZmFiLXNsaWRlLWluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSkgMC41cyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmYWItc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB1c2VybmFtZS1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFkZC1wb3N0LWJ1dHRvbi10YXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_posts_posts_module_ts-es2015.js.map