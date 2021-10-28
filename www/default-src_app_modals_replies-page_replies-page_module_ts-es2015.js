(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["default-src_app_modals_replies-page_replies-page_module_ts"],{

/***/ 67251:
/*!********************************************************************!*\
  !*** ./src/app/modals/replies-page/replies-page-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepliesPagePageRoutingModule": function() { return /* binding */ RepliesPagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _replies_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replies-page.page */ 51782);




const routes = [
    {
        path: '',
        component: _replies_page_page__WEBPACK_IMPORTED_MODULE_0__.RepliesPagePage
    }
];
let RepliesPagePageRoutingModule = class RepliesPagePageRoutingModule {
};
RepliesPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RepliesPagePageRoutingModule);



/***/ }),

/***/ 86630:
/*!************************************************************!*\
  !*** ./src/app/modals/replies-page/replies-page.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepliesPagePageModule": function() { return /* binding */ RepliesPagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _replies_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replies-page-routing.module */ 67251);
/* harmony import */ var _replies_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replies-page.page */ 51782);







let RepliesPagePageModule = class RepliesPagePageModule {
};
RepliesPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _replies_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.RepliesPagePageRoutingModule
        ],
        declarations: [_replies_page_page__WEBPACK_IMPORTED_MODULE_1__.RepliesPagePage]
    })
], RepliesPagePageModule);



/***/ }),

/***/ 51782:
/*!**********************************************************!*\
  !*** ./src/app/modals/replies-page/replies-page.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepliesPagePage": function() { return /* binding */ RepliesPagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_replies_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./replies-page.page.html */ 44332);
/* harmony import */ var _replies_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replies-page.page.scss */ 15006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 63818);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notifications.service */ 79744);
/* harmony import */ var src_app_components_reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/reply-options-popover/reply-options-popover.component */ 56438);













let RepliesPagePage = class RepliesPagePage {
    constructor(formBuilder, modal, popover, navParams, loading, profile, posts, alert, postEmitterService, notificationsService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.popover = popover;
        this.navParams = navParams;
        this.loading = loading;
        this.profile = profile;
        this.posts = posts;
        this.alert = alert;
        this.postEmitterService = postEmitterService;
        this.notificationsService = notificationsService;
        this.replies$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
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
                // console.log('Reply: ', reply);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // Reset Comment Input
            yield this.repliesForm.reset();
            yield console.log('replying to comment...');
            // tslint:disable-next-line: max-line-length
            yield this.posts.replyComment(this.commentID, this.postID, reply, this.userFullName, this.userEmail, this.commentUserProfilePicture, this.commentUserFullName, this.commentUserEmail)
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
                    comment.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.default)(new Date(comment.date), {
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
                        comment.replies[i].date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.default)(new Date(comment.replies[i].date), {
                            addSuffix: false
                        });
                        replies.push(comment.replies[i]);
                    }
                }
                this.replies = currentCommentReplies;
                currentCommentReplies.reverse();
                this.posts.commentsSubject$.next(comments.reverse());
                this.replies$.next(this.replies.reverse());
                console.log('From replyComment');
                console.log(data);
                // tslint:disable-next-line: max-line-length
                this.notificationsService.replyNotification(this.userEmail, this.commentUserEmail, this.postID, currentComment, data['newReply']).subscribe();
                console.log(this.replyTextArea.value);
                this.replyTextArea.value = undefined;
            });
            yield this.repliesLoading();
        });
    }
    deleteReply(replyID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
                    comment.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.default)(new Date(comment.date), {
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
                        comment.replies[i].date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.default)(new Date(comment.replies[i].date), {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'success-alert',
                message: 'Your comment has been edited.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    // When the user submits the comment, the tabar will show up again
    ScrollToReply() {
        let scrollHeight = document.documentElement.scrollHeight;
        console.log(this.content.getScrollElement().then(data => this.content.scrollToPoint(0, data.scrollHeight, 100)));
    }
    replyContent(e) {
        console.log(e);
        this.replyValue = e.detail.value;
    }
    optionsPopover() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popover.create({
                component: src_app_components_reply_options_popover_reply_options_popover_component__WEBPACK_IMPORTED_MODULE_6__.ReplyOptionsPopoverComponent,
                cssClass: 'my-custom-class',
                translucent: true
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
RepliesPagePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService }
];
RepliesPagePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, { static: true },] }],
    replyTextArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['replyTextArea', { static: true },] }]
};
RepliesPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-replies-page',
        template: _raw_loader_replies_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_replies_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService,
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController,
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_4__.PostPageEmitterService,
        src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService])
], RepliesPagePage);



/***/ }),

/***/ 15006:
/*!************************************************************!*\
  !*** ./src/app/modals/replies-page/replies-page.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: none;\n  position: relative;\n  right: 16px;\n}\n\n.add-comment-footer {\n  background: rgba(213, 232, 236, 0.3);\n  height: 80px;\n  font-size: 1.3em;\n  border-top: 6px solid #0055a5;\n  padding-top: 4px;\n}\n\n.more-icon {\n  color: #0055a5;\n  font-size: 1.3em;\n}\n\n.reply-wrapper {\n  padding: 10px;\n  margin: 16px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  background: white;\n}\n\n#reply-avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n  position: relative;\n  top: 7px;\n}\n\n.reply-name {\n  font-weight: bold;\n  margin: 0.5em 0 0.5em;\n}\n\n#reply-date {\n  font-size: 0.7em;\n  color: #999;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGxpZXMtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFJRiIsImZpbGUiOiJyZXBsaWVzLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE2cHg7XG59XG4uYWRkLWNvbW1lbnQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIzMiwgMjM2LCAwLjMpO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCAjMDA1NWE1O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLm1vcmUtaWNvbiB7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuLnJlcGx5LXdyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDE2cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbiNyZXBseS1hdmF0YXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4O1xufVxuXG4ucmVwbHktbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAuNWVtIDAgMC41ZW07XG59XG5cbiNyZXBseS1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgY29sb3I6ICM5OTk7XG59XG5cbiNiYWNrLWFycm93LWljb25zIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ 44332:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/replies-page/replies-page.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-title slot=\"start\">Replies</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Replies</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\">\n  <div style=\"background-color: white; padding: 2em 0 2em 0em;\">\n    <!-- commentUser Info -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\">\n          <ion-avatar class=\"comment-avatar\" slot=\"start\">\n            <img src=\"{{commentUserProfilePicture}}\">\n          </ion-avatar>\n          <ion-label>\n            <h6><span style=\"color: #0055a5; font-weight: 600;\">{{ commentUserFullName  }}</span><br>{{ commentDate }} </h6>\n            </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- Comment -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"11\">\n        <p>{{commentContents}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <!-- Replies -->\n  <ion-row *ngFor=\"let reply of replies\" class=\"ion-justify-content-center ion-align-items-start reply-wrapper\">\n    <ion-col size=\"11\">\n      <!-- <ion-col size=\"6\">\n        <p class=\"reply-name\">\n          <img id=\"reply-avatar\" src=\"{{reply.userProfilePicture}}\">\n          {{reply.userFullName}}\n        </p>\n        <p id=\"reply-date\">{{reply.date}} ago</p>\n      </ion-col> -->\n      <ion-col size=\"11\">\n        <ion-item lines=\"none\">\n          <ion-avatar class=\"comment-avatar\" slot=\"start\">\n            <img src=\"{{reply.userProfilePicture}}\">\n          </ion-avatar>\n          <ion-label>\n            <h6><span style=\"color: #000;\">{{ reply.userFullName  }}</span><br>{{ reply.date }} ago</h6>\n            </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"11\">\n        <p class=\"reply-text\">{{reply.reply}}</p>\n      </ion-col>\n      <ion-col class=\"ion-float-right\" size=\"2\">\n        <ion-button style=\"--background: none; position: relative; left: 32px;\" (click)=\"optionsPopover()\">\n          <ion-icon class=\"more-icon\" name=\"ellipsis-vertical-outline\"></ion-icon>\n        </ion-button>\n        <!-- <ion-button class=\"blue-button\" *ngIf=\"reply.isEditable\" (click)=\"deleteReply(reply._id)\" expand=\"block\">\n          Delete\n        </ion-button> -->\n      </ion-col>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer class=\"ion-hide-lg-up add-comment-footer\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col style=\"display: inline-block; height: 40px;\" size=\"10\">\n      <ion-textarea\n      #replyTextArea\n      (ionChange)=\"replyContent($event)\"\n      style=\"display: inline;\"\n      autocapitalize=\"true\"\n      rows=\"1\"\n      spellcheck=\"true\"\n      wrap=\"soft\"\n      type=\"text\"\n      placeholder=\"Add a Reply\"\n      >\n    </ion-textarea>\n    </ion-col>\n    <ion-col (click)=\"reply(this.replyValue) && ScrollToReply()\" style=\"display: inline-block; height: 50px;\" size=\"1\">\n      <ion-button style=\"--background: none;\">\n      <ion-icon style=\"font-size: 1.8em; color: #0055a5;\" slot=\"start\" name=\"send\"></ion-icon>\n    </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_replies-page_replies-page_module_ts-es2015.js.map