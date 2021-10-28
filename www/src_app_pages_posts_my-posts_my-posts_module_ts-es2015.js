(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_posts_my-posts_my-posts_module_ts"],{

/***/ 30898:
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/my-posts/my-posts-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPostsPageRoutingModule": function() { return /* binding */ MyPostsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_posts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-posts.page */ 21092);




const routes = [
    {
        path: '',
        component: _my_posts_page__WEBPACK_IMPORTED_MODULE_0__.MyPostsPage
    }
];
let MyPostsPageRoutingModule = class MyPostsPageRoutingModule {
};
MyPostsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyPostsPageRoutingModule);



/***/ }),

/***/ 95717:
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/my-posts/my-posts.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPostsPageModule": function() { return /* binding */ MyPostsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/custom-component.module */ 64941);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_posts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-posts-routing.module */ 30898);
/* harmony import */ var _my_posts_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-posts.page */ 21092);








let MyPostsPageModule = class MyPostsPageModule {
};
MyPostsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__.CustomComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _my_posts_routing_module__WEBPACK_IMPORTED_MODULE_1__.MyPostsPageRoutingModule
        ],
        declarations: [_my_posts_page__WEBPACK_IMPORTED_MODULE_2__.MyPostsPage]
    })
], MyPostsPageModule);



/***/ }),

/***/ 21092:
/*!*******************************************************!*\
  !*** ./src/app/pages/posts/my-posts/my-posts.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPostsPage": function() { return /* binding */ MyPostsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_posts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-posts.page.html */ 23409);
/* harmony import */ var _my_posts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-posts.page.scss */ 68535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/post.service */ 69166);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 92707);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 63818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);













let MyPostsPage = class MyPostsPage {
    constructor(activatedRoute, router, posts, profile, toast, formBuilder, eventEmitterService, modal, location) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.eventEmitterService = eventEmitterService;
        this.modal = modal;
        this.location = location;
        this.showShortDesciption = true;
        this.isUser = true;
        this.allMyPosts = [];
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.eventEmitterService.onBackAction();
        });
        this.profile.getUserDetails().subscribe(details => {
            this.userID = details['_id'];
            this.userFullName = details['fullName'];
            this.userEmail = details['email'];
            this.userProfilePicture = details['profilePicture'];
        });
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
        const email = this.activatedRoute.snapshot.paramMap.get('email');
        this.userEmail = email;
        console.log(this.userEmail);
        this.myPosts(this.userEmail);
    }
    alterDescriptionText() {
        this.showShortDesciption = !this.showShortDesciption;
    }
    addPost() {
        this.router.navigate(['/home/posts/add-post']);
    }
    back() {
        this.eventEmitterService.onBackAction();
        this.router.navigate(['/home/posts']);
    }
    myPosts(userEmail) {
        this.posts.getMyPosts(userEmail).subscribe(data => {
            this.allMyPosts = Object.values(data).reverse();
            console.log(data);
            for (const post of this.allMyPosts) {
                post.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(new Date(post.date), 'MMMM do, yyyy');
            }
            return this.allMyPosts;
        });
    }
    comment(postID, userFullName, userEmail, userProfilePicture, comment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Reset Comment Input
            this.commentForm.reset();
            const date = yield Date.now();
            console.log('Posting comment');
            console.log('Post ID: ' + postID);
            yield this.posts.comment(postID, this.userFullName, this.userEmail, this.userProfilePicture, comment).subscribe(() => {
                this.posts.getPostInfo(postID).subscribe(post => {
                    this.posts.getPostInfo(postID).subscribe(post => {
                        for (let postComments of post['comments']) {
                            console.log(postComments);
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
                            postComments.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(new Date(postComments.date), {
                                includeSeconds: true,
                                addSuffix: false
                            });
                        }
                        this.posts.commentsSubject$.next(post['comments'].reverse());
                    });
                });
            });
            yield this.posts.getPostInfo(postID).subscribe(post => {
                for (let postComments of post['comments']) {
                    postComments.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(new Date(postComments.date), {
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
MyPostsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.PlatformLocation }
];
MyPostsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-my-posts',
        template: _raw_loader_my_posts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_posts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router,
        _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder,
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.PlatformLocation])
], MyPostsPage);



/***/ }),

/***/ 68535:
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/my-posts/my-posts.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n\n.post {\n  padding: 24px 0;\n  margin-bottom: 80px;\n  border-radius: 11px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  font-size: 1.1em;\n  line-height: 35px;\n  background: white;\n}\n\n.post-content {\n  font-size: 1em;\n}\n\n.post-title {\n  font-weight: 800;\n  color: #0055a5;\n  font-size: 0.9em;\n  position: relative;\n  top: -20px;\n  line-height: 25px;\n  margin: 10px 0px 0px 0px;\n}\n\n.post-buttons ion-toolbar {\n  --background: none;\n}\n\n.post-name {\n  font-size: 0.9em;\n  font-weight: 700;\n  color: #666;\n  margin: 0;\n  line-height: 18px;\n}\n\n.post-date {\n  opacity: 0.4;\n  font-size: 0.65em;\n  margin: 0;\n  line-height: 18px;\n}\n\n.show-less {\n  height: auto;\n  overflow: hidden;\n}\n\n.show-more-or-less-button {\n  float: right;\n  position: relative;\n  right: 0px;\n  margin-top: 35px;\n  padding: 0.5em;\n  background: #0055a5;\n  color: white;\n  border-radius: 5px;\n  font-size: 0.6em;\n  font-weight: 600;\n}\n\n.ellipsis {\n  float: right;\n  position: relative;\n  right: 20px;\n  top: -18px;\n}\n\n@media screen and (max-width: 567px) {\n  .post {\n    padding: 30px 0px;\n  }\n}\n\n.no-posts {\n  height: 70vh;\n}\n\nform {\n  width: 100%;\n}\n\n.hashtags {\n  position: relative;\n  top: -32px;\n}\n\n.hashtag {\n  font-size: 0.55em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #ea8400;\n}\n\n.no-tags {\n  font-size: 0.7em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #333;\n  opacity: 0.5;\n  position: relative;\n  top: -32px;\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  --padding-start: 20px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#0672c4, #005191);\n  height: 30px;\n  margin-top: 20px;\n  opacity: 0;\n  width: 80px;\n  transform: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 50px 0 80px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-item {\n  --background: none;\n}\n\n.toolbar > ion-buttons > ion-button {\n  height: 45px;\n  border-radius: 5px;\n  padding: 10px;\n  --background: rgb(209,216,224,0.13);\n  --color: white;\n  width: 140px;\n  font-size: 0.6em;\n}\n\n.toolbar > ion-buttons > ion-button ion-icon {\n  position: relative;\n  left: -10px;\n}\n\n.post-toolbar ion-buttons ion-button {\n  width: 140px;\n  font-size: 1em;\n  --color: #005191;\n}\n\n.blue-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0055a2);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#bffce9, #7efcd4);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.comment {\n  border: 1px solid #0055a5;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 10px;\n}\n\n.comment-button {\n  font-size: 1em;\n  font-weight: 600;\n  position: relative;\n  right: -20px;\n  top: 5px;\n}\n\n.comment-post-button {\n  --border-color: #40c59d;\n  --border-width: 2px;\n  --border-style: solid;\n  --background: #40c59d;\n  --color: white;\n  height: 40px;\n  margin: 29px auto;\n  font-weight: 600;\n  font-size: 0.6em;\n  border-radius: 5px;\n  width: 100px;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 4px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(213, 232, 236, 0.3);\n  height: auto;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 3px solid #0055a5;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-button {\n  width: 130px;\n  --background: #0055a5;\n  --background-hover: #0055a5;\n  --color: white;\n  font-size: 0.6em;\n  font-size: 800;\n  border-radius: 5px;\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBvc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUVGOztBQUFFO0VBQ0UsY0FBQTtBQUVKOztBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBSUY7O0FBQUU7RUFDRSxrQkFBQTtBQUdKOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFBYSxTQUFBO0VBQ2IsaUJBQUE7QUFHRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFBVyxpQkFBQTtBQUdiOztBQURBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUlGOztBQURBO0VBQ0U7SUFDRSxpQkFBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU1GOztBQUhBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBTUY7O0FBSEE7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1FQUFBO0VBQ0EsaUZBQUE7VUFBQSx5RUFBQTtBQU1GOztBQUhBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFNRjs7QUFIQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBTUY7O0FBSEE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1FQUFBO0FBTUY7O0FBSEE7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtRUFBQTtBQU1GOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFKRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUFJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdOOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUVGOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFFRjs7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBRUY7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1FQUFBO0FBRUY7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtRUFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFDRjtFQUVBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBQUY7QUFDRjs7QUFUQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBQ0Y7RUFFQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoibXktcG9zdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzMyNjtcblxuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbi5wb3N0IHtcbiAgcGFkZGluZzogMjRweCAwO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBib3gtc2hhZG93OiAxcHggMTBweCAyNnB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5wb3N0LWNvbnRlbnQge1xuICBmb250LXNpemU6IDFlbTtcbiB9XG4ucG9zdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG59XG5cbi5wb3N0LWJ1dHRvbnN7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cblxuLnBvc3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNjY2OyBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG59XG5cbi5wb3N0LWRhdGUge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICBtYXJnaW46IDA7IGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLnNob3ctbGVzcyB7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNob3ctbW9yZS1vci1sZXNzLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5lbGxpcHNpcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAtMThweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLnBvc3Qge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICB9XG59XG5cbi5uby1wb3N0cyB7XG4gIGhlaWdodDogNzB2aDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhhc2h0YWdze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMycHg7XG59XG4uaGFzaHRhZ3tcbiAgZm9udC1zaXplOiAwLjU1ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZWE4NDAwO1xufVxuLm5vLXRhZ3Mge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMC41O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMycHg7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDgwcHg7XG4gIHRyYW5zZm9ybTogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuLmNvbW1lbnQtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogNTBweCAwIDgwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0LW1vYmlsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggMCA2MHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0LW1vYmlsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAzMHB4IDAgMTUwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50b29sYmFyID4gaW9uLWJ1dHRvbnMgPiBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIwOSwyMTYsMjI0LDAuMTMpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDE0MHB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuXG4gIGlvbi1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTEwcHg7XG4gIH1cbn1cblxuLnBvc3QtdG9vbGJhciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgLS1jb2xvcjogIzAwNTE5MTtcbiAgICB9XG4gIH1cbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwNTVhNSwgIzAwNTVhMik7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFkZC1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzVhZDhiMiwgIzQwYzU5ZCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNiZmZjZTksICM3ZWZjZDQpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29tbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDU1YTU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29tbWVudC1idXR0b24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTIwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4uY29tbWVudC1wb3N0LWJ1dHRvbiB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjNDBjNTlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYmFja2dyb3VuZDogIzQwYzU5ZDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAyOXB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggMCAwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEycHggMCA0cHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0LW1vYmlsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMzIsIDIzNiwgLjMpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDA1NWE1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMzBweCAwIDE1MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWJ1dHRvbntcbiAgd2lkdGg6IDEzMHB4O1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzAwNTVhNTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtc2l6ZTogODAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMxYmFmODg7XG4gIC0tY29sb3ItZm9jdXNlZDogd2hpdGU7XG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ 23409:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/my-posts/my-posts.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n <ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>My Posts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the bottom end -->\n  <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addPost()\">\n        <ion-icon name=\"add\" size=\"large\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n    <!-- Desktop -->\n  <ion-grid class=\"ion-hide-md-down\">\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <h1>My Posts</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"add-button\"  (click)=\"addPost()\">\n                  Add Post\n                </ion-button>\n                <ion-button class=\"blue-button\"  (click)=\"back()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n      <ion-col\n      class=\"no-posts ion-align-items-center\"\n      *ngIf=\"allMyPosts.length === 0\"\n      size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n      <div>\n        <p style=\"font-size: 1.2em;\">You currently do not have any posts. Please click the Add Post button to create a Post.</p>\n      </div>\n      </ion-col>\n\n    <!-- Posts -->\n    <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <div class=\"post\" *ngFor=\"let post of allMyPosts\" style=\"margin-top: 1%;\">\n        <!-- Profile Header -->\n        <ion-row class=\"ion-justify-content-center\">\n              <!-- Profile Picture -->\n              <ion-col size=\"1\">\n                <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 35xpx; width: 35px;\">\n              </ion-col>\n\n              <!-- Post Creator's Name -->\n              <ion-col size=\"10\">\n                <p class=\"post-name\">{{post.creatorName}}</p>\n                <p class=\"post-date\">{{post.date}}</p>\n              </ion-col>\n\n        </ion-row>\n        <!-- Post Content -->\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- (click)=\"postPage(post)\"  -->\n          <!-- 1080x1350 -->\n          <ion-col size=\"11\">\n            <p class=\"post-title\">{{post.title}}</p>\n            <div class=\"hashtags\">\n              <p class=\"hashtag\" *ngFor=\"let tag of post.hashtags\">\n                #{{tag}}\n              </p>\n            </div>\n            <p class=\"no-tags\" *ngIf=\"post.hashtags.length === 0\">\n              No #hashtags for this post\n            </p>\n            <p [ngClass]=\"{'show-less': showShortDesciption}\" class=\"post-content\">{{post.post}}</p>\n            <span class=\"ellipsis\" *ngIf=\"post.post.length > 400 && showShortDesciption\">...</span>\n            <button *ngIf=\"post.post.length > 400\" class=\"show-more-or-less-button\" type=\"button\" (click)=\"alterDescriptionText()\">\n              {{ showShortDesciption ? 'SHOW ALL': 'SHOW LESS' }}\n            </button>\n          </ion-col>\n        </ion-row>\n        <!-- Comment -->\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\">\n            <ion-item  style=\"height: auto;\" lines=\"none\">\n              <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                <ion-textarea\n                    class=\"comment-input-mobile\"\n                    autogrow=\"true\"\n                    autocapitalize=\"true\"\n                    rows=\"5\"\n                    spellcheck=\"true\"\n                    wrap=\"soft\"\n                    type=\"text\"\n                    #postComment\n                    placeholder=\"Add a Comment\" formControlName=\"comment\">\n                </ion-textarea>\n                <!-- Comment Post Button -->\n                <ion-button\n                  style=\"float: right;\"\n                  *ngIf=\"postComment.value.length >= 2;\"\n                  class=\"comment-post-button\"\n                  name=\"send\"\n                  type=\"submit\">Post Comment\n                </ion-button>\n              </form>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Post Buttons -->\n        <ion-row class=\"ion-justify-content-center\">\n          <!-- Upvote & Downvote-->\n          <ion-col size=\"8\">\n            <app-up-down-vote-buttons [postID]=\"post._id\" [postEmail]=\"post.creatorEmail\"></app-up-down-vote-buttons>\n          </ion-col>\n          <!-- Follow & Comment -->\n          <ion-col size=\"3\">\n            <app-follow-comment-buttons [postID]=\"post._id\" [commentLength]=\"post.comments.length\"></app-follow-comment-buttons>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_posts_my-posts_my-posts_module_ts-es2015.js.map