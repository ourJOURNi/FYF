(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_posts_post-page_post-page_module_ts"],{

/***/ 80670:
/*!********************************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCommentPageRoutingModule": function() { return /* binding */ EditCommentPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_comment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-comment.page */ 92930);




const routes = [
    {
        path: '',
        component: _edit_comment_page__WEBPACK_IMPORTED_MODULE_0__.EditCommentPage
    }
];
let EditCommentPageRoutingModule = class EditCommentPageRoutingModule {
};
EditCommentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditCommentPageRoutingModule);



/***/ }),

/***/ 9533:
/*!************************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCommentPageModule": function() { return /* binding */ EditCommentPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_comment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-comment-routing.module */ 80670);
/* harmony import */ var _edit_comment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-comment.page */ 92930);







let EditCommentPageModule = class EditCommentPageModule {
};
EditCommentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_comment_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditCommentPageRoutingModule
        ],
        declarations: [_edit_comment_page__WEBPACK_IMPORTED_MODULE_1__.EditCommentPage]
    })
], EditCommentPageModule);



/***/ }),

/***/ 92930:
/*!**********************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCommentPage": function() { return /* binding */ EditCommentPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_edit_comment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-comment.page.html */ 32915);
/* harmony import */ var _edit_comment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-comment.page.scss */ 4370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 63818);









let EditCommentPage = class EditCommentPage {
    constructor(formBuilder, modal, navParams, loading, posts, alert, postEmitterService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.navParams = navParams;
        this.loading = loading;
        this.posts = posts;
        this.alert = alert;
        this.postEmitterService = postEmitterService;
    }
    ngOnInit() {
        this.commentID = this.navParams.get('commentID');
        this.commentContents = this.navParams.get('commentCotents');
        this.postID = this.navParams.get('postID');
        this.userEmail = this.navParams.get('userEmail');
        console.log('post_id: ' + this.postID);
        console.log(this.commentID);
        console.log(this.commentContents);
        console.log(this.userEmail);
        // To collect comment data
        this.editCommentForm = this.formBuilder.group({
            newComment: this.commentContents
        });
    }
    cancel() {
        console.log('cancelling');
        this.modal.dismiss();
    }
    refreshComment() {
        this.postEmitterService.postPageRefresh();
    }
    edit(newComment) {
        console.log('editting');
        console.log(newComment);
        this.posts.editComment(this.commentID, this.postID, newComment.newComment).subscribe(comment => {
            this.posts.getPostInfo(this.postID).subscribe(post => {
                for (let postComments of post['comments']) {
                    postComments.isUser = false;
                    postComments.canDeleteComment = false;
                    postComments.canReport = true;
                    // If this comment is the logged in user, they can delete and edit
                    if (postComments.userEmail === this.userEmail) {
                        postComments.isUser = true;
                        postComments.canDeleteComment = true;
                        postComments.canReport = false;
                    }
                    postComments.repliesLength = postComments.replies.length;
                    postComments.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(new Date(postComments.date), {
                        includeSeconds: true,
                        addSuffix: false
                    });
                }
                this.posts.commentsSubject$.next(post['comments'].reverse());
            });
            this.editLoading(comment['newComment']);
        });
    }
    editLoading(comment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Editing your comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            yield this.modal.dismiss();
            yield this.confirmAlert();
            console.log('Loading dismissed!');
        });
    }
    confirmAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'success-alert',
                message: 'Your comment has been edited.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
EditCommentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__.PostPageEmitterService }
];
EditCommentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edit-comment',
        template: _raw_loader_edit_comment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_comment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController,
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController,
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__.PostPageEmitterService])
], EditCommentPage);



/***/ }),

/***/ 67541:
/*!**********************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyCommentPageRoutingModule": function() { return /* binding */ ReplyCommentPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _reply_comment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reply-comment.page */ 23105);




const routes = [
    {
        path: '',
        component: _reply_comment_page__WEBPACK_IMPORTED_MODULE_0__.ReplyCommentPage
    }
];
let ReplyCommentPageRoutingModule = class ReplyCommentPageRoutingModule {
};
ReplyCommentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReplyCommentPageRoutingModule);



/***/ }),

/***/ 6469:
/*!**************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyCommentPageModule": function() { return /* binding */ ReplyCommentPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _reply_comment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reply-comment-routing.module */ 67541);
/* harmony import */ var _reply_comment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reply-comment.page */ 23105);







let ReplyCommentPageModule = class ReplyCommentPageModule {
};
ReplyCommentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reply_comment_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReplyCommentPageRoutingModule
        ],
        declarations: [_reply_comment_page__WEBPACK_IMPORTED_MODULE_1__.ReplyCommentPage]
    })
], ReplyCommentPageModule);



/***/ }),

/***/ 23105:
/*!************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyCommentPage": function() { return /* binding */ ReplyCommentPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reply_comment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reply-comment.page.html */ 42489);
/* harmony import */ var _reply_comment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reply-comment.page.scss */ 94700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ 63818);









let ReplyCommentPage = class ReplyCommentPage {
    constructor(formBuilder, modal, navParams, loading, alert, posts, postEmitterService) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.navParams = navParams;
        this.loading = loading;
        this.alert = alert;
        this.posts = posts;
        this.postEmitterService = postEmitterService;
    }
    ngOnInit() {
        // To collect comment data
        this.replyCommentForm = this.formBuilder.group({
            reply: ['']
        });
        this.commentID = this.navParams.get('commentID');
        this.postID = this.navParams.get('postID');
        this.userFullName = this.navParams.get('userFullName');
        this.userEmail = this.navParams.get('userEmail');
        this.userProfilePicture = this.navParams.get('userProfilePicture');
        this.commentUserFullName = this.navParams.get('commentUserFullName');
        this.commentUserEmail = this.navParams.get('commentUserEmail');
        this.comment = this.navParams.get('comment');
        console.log(this.commentUserEmail);
        console.log(this.userEmail);
    }
    reply(reply) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log('replying to comment...');
            // tslint:disable-next-line: max-line-length
            yield this.posts.replyComment(this.commentID, this.postID, reply.reply, this.userFullName, this.userEmail, this.userProfilePicture, this.commentUserFullName, this.commentUserEmail)
                .subscribe(data => {
                console.log(data);
                let comments = data['comments'];
                let userEmail = data['userEmail'];
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
                    comment.date = (0,date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_5__.default)(new Date(comment.date), {
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
                        comment.replies[i].date = (0,date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_5__.default)(new Date(comment.replies[i].date), {
                            addSuffix: false
                        });
                    }
                }
                this.posts.commentsSubject$.next(comments.reverse());
            });
            yield this.replyLoading();
        });
    }
    replyLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Replying to Comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            yield this.modal.dismiss();
            yield this.confirmAlert();
            console.log('Loading dismissed!');
        });
    }
    confirmAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'success-alert',
                message: 'Your comment has been added.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    cancel() {
        console.log('cancelling reply...');
        this.modal.dismiss();
    }
};
ReplyCommentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__.PostPageEmitterService }
];
ReplyCommentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-reply-post',
        template: _raw_loader_reply_comment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reply_comment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController,
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService,
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__.PostPageEmitterService])
], ReplyCommentPage);



/***/ }),

/***/ 27205:
/*!************************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportCommentPageRoutingModule": function() { return /* binding */ ReportCommentPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _report_comment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-comment.page */ 74698);




const routes = [
    {
        path: '',
        component: _report_comment_page__WEBPACK_IMPORTED_MODULE_0__.ReportCommentPage
    }
];
let ReportCommentPageRoutingModule = class ReportCommentPageRoutingModule {
};
ReportCommentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportCommentPageRoutingModule);



/***/ }),

/***/ 83263:
/*!****************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportCommentPageModule": function() { return /* binding */ ReportCommentPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _report_comment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-comment-routing.module */ 27205);
/* harmony import */ var _report_comment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-comment.page */ 74698);







let ReportCommentPageModule = class ReportCommentPageModule {
};
ReportCommentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _report_comment_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportCommentPageRoutingModule
        ],
        declarations: [_report_comment_page__WEBPACK_IMPORTED_MODULE_1__.ReportCommentPage]
    })
], ReportCommentPageModule);



/***/ }),

/***/ 74698:
/*!**************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportCommentPage": function() { return /* binding */ ReportCommentPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_report_comment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./report-comment.page.html */ 43842);
/* harmony import */ var _report_comment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-comment.page.scss */ 5906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);







let ReportCommentPage = class ReportCommentPage {
    constructor(formBuilder, modal, navParams, loading, posts, alert) {
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.navParams = navParams;
        this.loading = loading;
        this.posts = posts;
        this.alert = alert;
    }
    ngOnInit() {
        // To collect comment data
        this.reportCommentForm = this.formBuilder.group({
            reportedReason: ['']
        });
        this.commentID = this.navParams.get('commentID');
        this.commentContents = this.navParams.get('commentContents');
        this.post = this.navParams.get('post');
        this.postID = this.navParams.get('postID');
        this.commentUserFullName = this.navParams.get('commentUserFullName');
        this.commentUserProfilePicture = this.navParams.get('commentUserProfilePicture');
        this.commentUserEmail = this.navParams.get('commentUserEmail');
        this.commentDate = this.navParams.get('commentDate');
        this.userEmail = this.navParams.get('userEmail');
        this.userFullName = this.navParams.get('userFullName');
    }
    report() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log('reporting comment...');
            yield console.log(this.reportCommentForm.value.reportedReason);
            yield this.reportLoading();
            // tslint:disable-next-line: max-line-length
            yield this.posts.reportComment(this.commentID, this.commentContents, this.post, this.postID, this.commentUserFullName, this.commentUserProfilePicture, this.commentUserEmail, this.commentDate, this.userEmail, this.userFullName, this.reportCommentForm.value.reportedReason)
                .subscribe();
        });
    }
    reportLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Reporting comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            yield this.modal.dismiss();
            yield this.confirmAlert();
            console.log('Loading dismissed!');
        });
    }
    confirmAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Report Sent',
                cssClass: 'success-alert',
                message: 'Thank you for reporting this user. Find Your Future will notifiy the user and take futher actions if necessary.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    cancel() {
        console.log('cancelling comment...');
        this.modal.dismiss();
    }
};
ReportCommentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
ReportCommentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-report-comment',
        template: _raw_loader_report_comment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_report_comment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController,
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController])
], ReportCommentPage);



/***/ }),

/***/ 75363:
/*!*******************************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPagePageRoutingModule": function() { return /* binding */ PostPagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _post_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-page.page */ 90612);




const routes = [
    {
        path: '',
        component: _post_page_page__WEBPACK_IMPORTED_MODULE_0__.PostPagePage
    }
];
let PostPagePageRoutingModule = class PostPagePageRoutingModule {
};
PostPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostPagePageRoutingModule);



/***/ }),

/***/ 52113:
/*!***********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPagePageModule": function() { return /* binding */ PostPagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/custom-component.module */ 64941);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _post_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-page.page */ 90612);
/* harmony import */ var _post_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-page-routing.module */ 75363);
/* harmony import */ var src_app_modals_reply_comment_reply_comment_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/reply-comment/reply-comment.module */ 6469);
/* harmony import */ var src_app_modals_report_comment_report_comment_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/report-comment/report-comment.module */ 83263);
/* harmony import */ var src_app_modals_edit_comment_edit_comment_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/edit-comment/edit-comment.module */ 9533);
/* harmony import */ var src_app_modals_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/edit-post/edit-post.module */ 22447);
/* harmony import */ var src_app_modals_replies_page_replies_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/replies-page/replies-page.module */ 86630);













let PostPagePageModule = class PostPagePageModule {
};
PostPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _post_page_routing_module__WEBPACK_IMPORTED_MODULE_2__.PostPagePageRoutingModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__.CustomComponentsModule,
            src_app_modals_reply_comment_reply_comment_module__WEBPACK_IMPORTED_MODULE_3__.ReplyCommentPageModule,
            src_app_modals_report_comment_report_comment_module__WEBPACK_IMPORTED_MODULE_4__.ReportCommentPageModule,
            src_app_modals_edit_comment_edit_comment_module__WEBPACK_IMPORTED_MODULE_5__.EditCommentPageModule,
            src_app_modals_edit_post_edit_post_module__WEBPACK_IMPORTED_MODULE_6__.EditPostPageModule,
            src_app_modals_replies_page_replies_page_module__WEBPACK_IMPORTED_MODULE_7__.RepliesPagePageModule
        ],
        declarations: [_post_page_page__WEBPACK_IMPORTED_MODULE_1__.PostPagePage]
    })
], PostPagePageModule);



/***/ }),

/***/ 90612:
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPagePage": function() { return /* binding */ PostPagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_post_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./post-page.page.html */ 81346);
/* harmony import */ var _post_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-page.page.scss */ 34414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 63818);
/* harmony import */ var src_app_modals_reply_comment_reply_comment_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/reply-comment/reply-comment.page */ 23105);
/* harmony import */ var src_app_modals_report_comment_report_comment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/report-comment/report-comment.page */ 74698);
/* harmony import */ var src_app_modals_edit_comment_edit_comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/edit-comment/edit-comment.page */ 92930);
/* harmony import */ var src_app_modals_edit_post_edit_post_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/edit-post/edit-post.page */ 17518);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
/* harmony import */ var src_app_modals_replies_page_replies_page_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/replies-page/replies-page.page */ 51782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/emitters/single-post-page-emitter.service */ 20147);








// tslint:disable-next-line: max-line-length










const LANGUAGE_FILTER_LIST = [
    'fuck',
    'damn',
    'shit',
    'ass',
    'bitch',
    'slut',
    'whore',
    'dick',
    'pussy',
    'cunt',
    'faggot'
];
let PostPagePage = class PostPagePage {
    constructor(activatedRoute, postEmitterService, singlePostEmitterService, router, changeDetectorRef, posts, profile, formBuilder, toast, modal, alert, loading, location) {
        this.activatedRoute = activatedRoute;
        this.postEmitterService = postEmitterService;
        this.singlePostEmitterService = singlePostEmitterService;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.posts = posts;
        this.profile = profile;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.modal = modal;
        this.alert = alert;
        this.loading = loading;
        this.location = location;
        this.tabBar = document.getElementById('myTabBar');
        this.votes = document.getElementById('votes');
        this.showFab = false;
        this.following = false;
        this.isUser = false;
        // debugging
        this.scroll = '';
    }
    ngOnDestroy() {
        this.singlePostEmitterService.subsVar.unsubscribe();
        this.commentsSub.unsubscribe();
        this.postsSub.unsubscribe();
        this.userDetailsSub.unsubscribe();
        this.postInfoSub.unsubscribe();
        // this.deletePostSub.unsubscribe();
        // this.deleteCommentSub.unsubscribe();
        // this.unfollowPostSub.unsubscribe();
        // this.followPostSub.unsubscribe();
    }
    ngOnInit() {
        this.location.onPopState(() => {
            this.postEmitterService.onBackAction();
        });
        // Get Post ID from navigation params on the main posts tab
        const id = this.activatedRoute.snapshot.paramMap.get('_id');
        this.postID = id;
        // Get the user's information to insert into the comment metadata
        this.getPostInfo();
        if (this.singlePostEmitterService.subsVar == undefined) {
            // For Comment and Reply Refreshes
            this.singlePostEmitterService.subsVar = this.singlePostEmitterService.invokeSinglePostPageRefresh.subscribe(() => {
                this.getPostInfo();
                console.log('Refreshing Replies');
            });
        }
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
        // Subscribe to comments Behavior subject for live upates, specifically when the user posts a comment on the UI.
        this.commentsSub = this.posts.commentsSubject$.subscribe(commentsFromSub => {
            this.comments = commentsFromSub;
        });
        this.postsSub = this.posts.postsSubject$.subscribe(posts => {
            let currentPost;
            console.log(posts);
            for (const post of posts) {
                if (post._id == this.postID) {
                    currentPost = post;
                }
            }
            this.post = currentPost.post;
        });
    }
    back() {
        this.postEmitterService.onBackAction();
        this.router.navigate(['/home/posts']);
    }
    refreshAfterComment() {
        this.postEmitterService.postPageRefresh();
    }
    refreshAfterDelete() {
        this.postEmitterService.postPageRefresh();
    }
    refreshAfterFollow() {
        this.postEmitterService.postPageRefresh();
    }
    follow(postID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.followPostSub = this.posts.followPost(postID, this.userEmail);
            this.following = true;
            yield this.followToast();
        });
    }
    followToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const followToast = yield this.toast.create({
                cssClass: 'followed-toast',
                message: 'You are FOLLOWING this post',
                duration: 2000
            });
            // await this.refreshAfterFollow();
            yield this.refreshAfterDelete();
            yield followToast.present();
        });
    }
    unFollow(postID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.unfollowPostSub = this.posts.unFollowPost(postID, this.userEmail);
            this.following = false;
            yield this.unFollowToast();
        });
    }
    unFollowToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const unFollowToast = yield this.toast.create({
                cssClass: 'unfollowed-toast',
                message: 'You are UNFOLLOWING this post',
                duration: 2000
            });
            // await this.refreshAfterFollow();
            yield this.refreshAfterDelete();
            yield unFollowToast.present();
        });
    }
    logScrolling(event) {
        // if (event.detail) {
        //   console.log('ScrollTop: ' + event.detail.scrollTop);
        //   console.log('Y: ' + event.detail.currentY);
        //   console.log('Event Details: ' + event.detail);
        // }
        if (event.detail.currentY >= 480) {
            this.showFab = true;
        }
        if (event.detail.currentY <= 480) {
            this.showFab = false;
        }
    }
    // Hide the Tab bar when the user is attempting to make a comment
    ScrollToTop() {
        this.content.scrollToPoint(0, 200, 100);
        this.tabBar.style.height = '0px';
        this.votes.style.height = '0px';
    }
    fabScrollTop() {
        this.content.scrollToTop();
    }
    // When the user submits the comment, the tabar will show up again
    ScrollToPostedComment() {
        this.content.scrollToPoint(0, 600, 100);
        this.textarea.getInputElement()
            .then((textarea) => {
            textarea.blur();
        });
    }
    onBlur() {
        this.textarea.getInputElement()
            .then((textarea) => {
            this.tabBar.style.height = '70px';
        });
    }
    // for when the user un focuses out of the comment textarea but hasnt submitted the comment
    blur() {
        this.textarea.getInputElement()
            .then((textarea) => {
            textarea.blur();
            this.tabBar.style.height = '70px';
        });
    }
    filterComments() {
    }
    commentInput(e) {
        console.log(e.detail.value);
        this.commentInputValue = e.detail.value;
    }
    comment(postID, userFullName, userEmail, userProfilePicture, comment, fromFooterInput) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // Values from Footer Input and Desktop inputs are different.
            // Making a standardized values to send to commentLoading()
            let checkedComment;
            if (!fromFooterInput) {
                checkedComment = comment.comment;
            }
            else {
                checkedComment = comment;
            }
            // Reset Comment Input
            console.log(this.footerCommentInput);
            this.footerCommentInput.value = null;
            this.commentLoading(postID, userFullName, userEmail, userProfilePicture, checkedComment);
            const toast = this.toast.create({
                message: 'Your comment has been added.',
                duration: 1500
            });
            toast.then(toast => toast.present());
        });
    }
    commentLoading(postID, userFullName, userEmail, userProfilePicture, comment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log(comment);
            this.postsSub = this.posts.comment(postID, userFullName, userEmail, userProfilePicture, comment).subscribe(data => {
                this.postInfoSub = this.posts.getPostInfo(this.postID).subscribe(post => {
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
                        postComments.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(postComments.date), {
                            includeSeconds: true,
                            addSuffix: false
                        });
                        console.log(postComments.comment);
                    }
                    this.posts.commentsSubject$.next(post['comments'].reverse());
                });
            });
            const loading = yield this.loading.create({
                message: 'Adding Comment...',
                duration: 1000
            });
            yield this.refreshAfterComment();
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    report(commentID, commentCotents, post, postID, commentUserFullName, commentUserProfilePicture, commentUserEmail, commentDate) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // Get information from comment
            yield console.log('Attemping to report comment');
            // tslint:disable-next-line: max-line-length
            yield this.reportModal(commentID, commentCotents, post, postID, commentUserFullName, commentUserProfilePicture, commentUserEmail, commentDate, this.userEmail, this.userFullName);
        });
    }
    reportModal(commentID, commentContents, post, postID, commentUserFullName, commentUserProfilePicture, commentUserEmail, commentDate, userEmail, userFullName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const reportModalConfig = yield this.modal.create({
                component: src_app_modals_report_comment_report_comment_page__WEBPACK_IMPORTED_MODULE_5__.ReportCommentPage,
                componentProps: {
                    commentID,
                    commentContents,
                    post,
                    postID,
                    commentUserFullName,
                    commentUserProfilePicture,
                    commentUserEmail,
                    commentDate,
                    userEmail,
                    userFullName,
                }
            });
            yield reportModalConfig.present();
        });
    }
    reply(commentID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail, comment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log('Attemping to reply to comment');
            yield this.replyModal(commentID, this.postID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail, comment);
        });
    }
    replyModal(commentID, postID, userFullName, userEmail, userProfilePicture, commentUserFullName, commentUserEmail, comment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const replyModalConfig = yield this.modal.create({
                component: src_app_modals_reply_comment_reply_comment_page__WEBPACK_IMPORTED_MODULE_4__.ReplyCommentPage,
                componentProps: {
                    commentID,
                    postID,
                    userFullName,
                    userProfilePicture,
                    userEmail,
                    commentUserEmail,
                    commentUserFullName,
                    comment
                },
                cssClass: 'reply-modal'
            });
            yield replyModalConfig.present();
        });
    }
    // tslint:disable-next-line: max-line-length
    repliesModal(postID, replies, comment, commentID, commentUserFullName, commentUserEmail, commentDate, userProfilePicture, userFullName, userEmail) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const repliesPageModalConfig = yield this.modal.create({
                component: src_app_modals_replies_page_replies_page_page__WEBPACK_IMPORTED_MODULE_9__.RepliesPagePage,
                componentProps: {
                    postID,
                    replies,
                    comment,
                    commentID,
                    commentUserFullName,
                    commentUserEmail,
                    commentDate,
                    userProfilePicture,
                    userFullName,
                    userEmail
                },
                cssClass: 'reply-modal'
            });
            yield repliesPageModalConfig.present();
        });
    }
    editComment(commentID, commentCotents, postID, userEmail) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log(commentID);
            yield console.log('Attemping to edit comment');
            yield this.editCommentModal(commentID, commentCotents, postID, userEmail);
        });
    }
    editCommentModal(commentID, commentCotents, postID, userEmail) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const editAlertConfig = yield this.modal.create({
                component: src_app_modals_edit_comment_edit_comment_page__WEBPACK_IMPORTED_MODULE_6__.EditCommentPage,
                componentProps: {
                    commentID,
                    commentCotents,
                    postID,
                    userEmail
                }
            });
            yield editAlertConfig.present();
        });
    }
    editPost(postID, post) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log('Attemping to edit comment');
            yield this.editPostModal(postID, post);
        });
    }
    editPostModal(postID, post) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const editPostModalConfig = yield this.modal.create({
                component: src_app_modals_edit_post_edit_post_page__WEBPACK_IMPORTED_MODULE_7__.EditPostPage,
                componentProps: {
                    postID,
                    post
                }
            });
            yield editPostModalConfig.present();
        });
    }
    deleteComment(commentID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log('deleting comment..');
            console.log(this.postID);
            console.log(commentID);
            this.deleteCommentAlert(this.postID, commentID);
        });
    }
    deleteCommentAlert(postID, commentID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Are you sure you want to delete this comment? This cannot be undone.',
                cssClass: 'danger-alert',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.deleteCommentLoading(this.postID, commentID)
                                .catch((err) => {
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteCommentLoading(postID, commentID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.deleteCommentSub = this.posts.deleteComment(this.postID, commentID).subscribe(values => {
                let comments = values['comments'];
                for (const comment of comments) {
                    // If the Logged in User's Email equals the creatorEmail of the Comment,
                    // they will be given the ability to edit and delete their Comment.
                    // The ability for them to report their own comment is disabled
                    comment.repliesLength = comment.replies.length;
                    comment.isUser = false;
                    comment.canDeleteComment = false;
                    comment.canReport = true;
                    comment.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(comment.date), {
                        includeSeconds: false,
                        addSuffix: false
                    });
                    // If this comment is the logged in user, they can delete and edit
                    if (comment.userEmail === this.userEmail) {
                        console.log('true');
                        comment.isUser = true;
                        comment.canDeleteComment = true;
                        comment.canReport = false;
                    }
                }
                this.posts.commentsSubject$.next(comments.reverse());
            });
            const loading = yield this.loading.create({
                message: 'Deleting Comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
            this.changeDetectorRef.detectChanges();
        });
    }
    deletePost(postID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log('deleting post..');
            console.log(postID);
            this.deletePostAlert(postID);
        });
    }
    deletePostAlert(postID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Are you sure you want to delete this post? This cannot be undone.',
                cssClass: 'danger-alert',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.deletePostLoading(postID);
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    deletePostLoading(postID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log(postID);
            this.deletePostSub = this.posts.deletePost(postID).subscribe(remainingPosts => {
                this.posts.postsSubject$.next(Object.values(remainingPosts).reverse());
                console.log(this.posts.postsSubject$.getValue());
            });
            this.postEmitterService.onBackAction();
            this.router.navigate(['/home/posts']);
            console.log('Loading dismissed!');
            const loading = yield this.loading.create({
                message: 'Deleting Comment...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    getPostInfo() {
        this.userDetailsSub = this.profile.getUserDetails().subscribe(details => {
            let userEmail = details['email'];
            this.userEmail = userEmail;
            let userFullName = details['fullName'];
            let userProfilePicture = details['profilePicture'];
            // Get information about selected post.
            // Format its date on the front end
            // initiate this components post metadata from data in Posts Service
            this.postInfoSub = this.posts.getPostInfo(this.postID).subscribe(postInfo => {
                const creatorEmail = postInfo['creatorEmail'];
                const creatorName = postInfo['creatorName'];
                const creatorProfilePicture = postInfo['creatorProfilePicture'];
                const title = postInfo['title'];
                const post = postInfo['post'];
                const followers = postInfo['followers'];
                const hashtags = postInfo['hashtags'];
                let comments = postInfo['comments'];
                let following = false;
                let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(postInfo['date']), {
                    includeSeconds: true,
                    addSuffix: false
                });
                // Check if the post creator is the same as the User
                // Enables the user to delete and edit post if true
                if (creatorEmail === this.userEmail) {
                    this.isUser = true;
                }
                // See if the Logged in User is following the post on this page
                followers.find(findFollower);
                function findFollower(follower) {
                    if (!follower) {
                    }
                    if (follower === userEmail) {
                        following = true;
                    }
                }
                // Give User ability to Edit, Delete, or Report a Comment.
                // User cannot Report their own comment **
                for (const comment of comments) {
                    console.log(comment);
                    // If the Logged in User's Email equals the creatorEmail of the Comment,
                    // they will be given the ability to edit and delete their Comment.
                    // The ability for them to report their own comment is disabled
                    comment.repliesLength = comment.replies.length;
                    comment.isUser = false;
                    comment.canDeleteComment = false;
                    comment.canReport = true;
                    comment.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(comment.date), {
                        includeSeconds: false,
                        addSuffix: false
                    });
                    // If this comment is the logged in user, they can delete and edit
                    if (comment.userEmail === this.userEmail) {
                        comment.isUser = true;
                        comment.canDeleteComment = true;
                        comment.canReport = false;
                    }
                    // Format the Reply Dates
                    for (let i = 0; comment.replies.length > i; i++) {
                        comment.replies[i].date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(comment.replies[i].date), {
                            addSuffix: false
                        });
                    }
                    // comment.comment = comment.comment.replace(/go/g, "not go :(");
                }
                this.creatorName = creatorName;
                this.creatorEmail = creatorEmail;
                this.creatorProfilePicture = creatorProfilePicture;
                this.date = date;
                this.followers = followers;
                this.hashtags = hashtags;
                this.comments = comments;
                this.following = following;
                this.post = post;
                this.title = title;
                this.userProfilePicture = userProfilePicture;
                this.userFullName = userFullName;
            });
        });
    }
    filterLanguage(comment) {
        const updatedComment = comment;
        updatedComment.replace('fuck', '****');
        // LANGUAGE_FILTER_LIST.forEach(word => {
        //   comment.replace(word, '****');
        // });
        return updatedComment;
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.userDetailsSub = this.profile.getUserDetails().subscribe(details => {
                let userEmail = details['email'];
                this.userEmail = userEmail;
                let userFullName = details['fullName'];
                let userProfilePicture = details['profilePicture'];
                // Get information about selected post.
                // Format its date on the front end
                // initiate this components post metadata from data in Posts Service
                this.postInfoSub = this.posts.getPostInfo(this.postID).subscribe(postInfo => {
                    const creatorEmail = postInfo['creatorEmail'];
                    const creatorName = postInfo['creatorName'];
                    const post = postInfo['post'];
                    const title = postInfo['title'];
                    const followers = postInfo['followers'];
                    let comments = postInfo['comments'];
                    let following = false;
                    let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(postInfo['date']), {
                        includeSeconds: true,
                        addSuffix: false
                    });
                    // See if the Logged in User is following the post on this page
                    followers.find(findFollower);
                    function findFollower(follower) {
                        if (!follower) {
                        }
                        if (follower === userEmail) {
                            following = true;
                        }
                    }
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
                        comment.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(comment.date), {
                            includeSeconds: true,
                            addSuffix: false
                        });
                        // If this comment is the logged in user, they can delete and edit
                        if (comment.userEmail === this.userEmail) {
                            comment.isUser = true;
                            comment.canDeleteComment = true;
                            comment.canReport = false;
                        }
                        // Format the Reply Dates
                        for (let i = 0; comment.replies.length > i; i++) {
                            comment.replies[i].date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.default)(new Date(comment.replies[i].date), {
                                addSuffix: false
                            });
                        }
                        comment.comment = this.filterLanguage(comment.comment);
                        // comment.comment = comment.comment.replace(/go/g, "not go :(");
                    }
                    this.creatorName = creatorName;
                    this.creatorEmail = creatorEmail;
                    this.date = date;
                    this.followers = followers;
                    this.comments = comments;
                    this.following = following;
                    this.post = post;
                    this.title = title;
                    this.userProfilePicture = userProfilePicture;
                    this.userFullName = userFullName;
                    this.posts.commentsSubject$.next(comments.reverse());
                });
            });
            yield setTimeout(() => {
                const toast = this.toast.create({
                    message: 'Page has been refreshed',
                    duration: 3000
                });
                event.target.complete();
                toast.then(toast => toast.present());
            }, 2000);
        });
    }
};
PostPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__.PostPageEmitterService },
    { type: src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__.SinglePostPageEmitterService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_17__.PlatformLocation }
];
PostPagePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, { static: true },] }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonTextarea, { static: true },] }],
    footerCommentInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['footerCommentInput', { static: true },] }]
};
PostPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-post-page',
        template: _raw_loader_post_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_post_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute,
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__.PostPageEmitterService,
        src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_10__.SinglePostPageEmitterService,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router,
        _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef,
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.LoadingController,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.PlatformLocation])
], PostPagePage);



/***/ }),

/***/ 4370:
/*!************************************************************!*\
  !*** ./src/app/modals/edit-comment/edit-comment.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comment-input {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY29tbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoiZWRpdC1jb21tZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ 94700:
/*!**************************************************************!*\
  !*** ./src/app/modals/reply-comment/reply-comment.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: white;\n}\n\n.reply-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 0 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.reply-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#comment {\n  font-size: 1em;\n}\n\n#userfullname {\n  font-size: 1em;\n}\n\n#date {\n  font-size: 1em;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGx5LWNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6InJlcGx5LWNvbW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yZXBseS1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ucmVwbHktaW5wdXQ6aG92ZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgODEsIDE0NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4jY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4jdXNlcmZ1bGxuYW1lIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNkYXRlIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNiYWNrLWFycm93LWljb25zIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ 5906:
/*!****************************************************************!*\
  !*** ./src/app/modals/report-comment/report-comment.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".report-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 0 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.report-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#comment {\n  font-size: 1em;\n  color: #e4405f;\n}\n\n#userfullname {\n  font-size: 1em;\n}\n\n#date {\n  font-size: 1em;\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1jb21tZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoicmVwb3J0LWNvbW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4ucmVwb3J0LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2NvbW1lbnQge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNlNDQwNWY7XG59XG5cbiN1c2VyZnVsbG5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2RhdGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ 34414:
/*!***********************************************************!*\
  !*** ./src/app/pages/posts/post-page/post-page.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-hr {\n  border-top: 1px solid #666;\n  opacity: 0.3;\n  margin-top: 10px;\n}\n\n.user-profile-picture {\n  height: 40px;\n  width: 40px;\n  margin-right: 8px;\n  border-radius: 50px;\n}\n\n.post {\n  margin-bottom: 40px;\n  background: #fbfcfd;\n  padding: 20px 0px;\n}\n\n.comments-header {\n  color: #0055a5;\n  font-size: 1.4em;\n  font-weight: 600;\n}\n\n.add-comment-footer {\n  background: rgba(213, 232, 236, 0.3);\n  height: 80px;\n  font-size: 1.3em;\n  border-top: 6px solid #0055a5;\n  padding-top: 4px;\n}\n\n.post-title {\n  color: #67b5ff;\n  padding-top: 24px;\n  margin-bottom: 64px;\n  font-size: 1.4em;\n  font-weight: 600;\n  border-top: 3px solid white;\n}\n\n.profile-picture {\n  border-radius: 100px;\n  height: 35px;\n  width: 35px;\n  position: relative;\n  top: -18px;\n  display: inline-block;\n}\n\n.post-name {\n  color: #0055a5;\n  font-size: 1.6em;\n  font-weight: 600;\n  margin: 0;\n  display: inline-block;\n}\n\n.post-date {\n  opacity: 0.8;\n  font-size: 1em;\n  font-weight: 600;\n  color: #444;\n  margin: 0;\n  display: block;\n}\n\n.blue-button-small {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0055a2);\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.hashtags {\n  position: relative;\n  top: -32px;\n}\n\n.hashtag {\n  font-size: 1.3em;\n  font-weight: 600;\n  display: inline-block;\n  margin-right: 5px;\n  color: #ea8400;\n}\n\n.post-mobile {\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 90px;\n  background: white;\n  box-shadow: none;\n}\n\n.post-mobile:hover {\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 120px;\n  background: white;\n  box-shadow: 1px 1px 3px #999;\n  border-radius: 5px;\n}\n\n@media only screen and (max-width: 576px) {\n  .profile-picture {\n    height: 65px;\n    width: 65px;\n  }\n}\n\nx .post-content {\n  font-size: 1.15em;\n  line-height: 28px;\n  color: #333;\n}\n\n.back-button {\n  --color: white;\n  --background: linear-gradient(#0672c4, #0055a5);\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comment-post-button {\n  --background: #00c400;\n  --background-hover: red;\n  height: 54px;\n  margin-top: 10px;\n  opacity: 0;\n  font-size: 1.4em;\n  font-weight: 600;\n  width: 100%;\n  transform: 0.2s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.unfollow-button {\n  --color: white;\n  --background: linear-gradient(#faa71b, #e99b14);\n  font-weight: 900;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.comments-toolbar-mobile {\n  --background: none;\n}\n\n.comments-toolbar-mobile ion-icon {\n  color: #0055a5;\n  font-size: 2.2em;\n}\n\n.comment {\n  background: white;\n  height: auto;\n  opacity: 0;\n  margin: 10px 8px 0;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  border-top: 3px solid #d7d7d7;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n\n.follow-button {\n  width: 100px;\n  height: 36px;\n  opacity: 0;\n  --background: #24d8a8;\n  --color: white;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color: linear-gradient(#797, #799);\n  -webkit-animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: post-button-slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n  font-weight: 900;\n  width: 100px;\n}\n\n.delete-button {\n  --color: white;\n  --background: linear-gradient(#FF443B, rgb(206, 48, 40));\n  font-weight: 800;\n  display: inline-block;\n  width: 100px;\n  margin-top: 20px;\n}\n\n.upvote {\n  border-radius: 5px;\n  width: 80px;\n  padding-left: 0px;\n  --color: white;\n}\n\n.upvote ion-icon {\n  --color: white;\n  font-size: 48px;\n}\n\n.downvote {\n  border-radius: 5px;\n  width: 50px;\n  padding-left: 0px;\n  --color: #0055a5;\n}\n\n.downvote ion-icon {\n  color: #0055a5;\n  --font-size: 40px;\n}\n\n.reply {\n  width: 60px;\n  --border-width: 3px;\n  --border-color: #0055a5;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #0055a5;\n  font-size: 0.7em;\n  font-weight: 900;\n  margin-right: 10px;\n}\n\n.report {\n  --border-width: 3px;\n  width: 60px;\n  --border-color: #666;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #888;\n  font-size: 0.7em;\n  font-weight: 900;\n  margin-right: 10px;\n}\n\n.edit {\n  --border-width: 3px;\n  width: 60px;\n  --border-color: #faa71b;\n  --border-style: solid;\n  border-radius: 5px;\n  --color: #faa71b;\n  font-size: 0.7em;\n  font-weight: 900;\n  margin-right: 10px;\n}\n\n.delete {\n  width: 60px;\n  --background: #faa71b;\n  border-radius: 5px;\n  --color: white;\n  font-size: 0.7em;\n  font-weight: 900;\n  margin-right: 10px;\n}\n\n.follow {\n  --border-width: 3px;\n  width: 80px;\n  --border-color: linear-gradient(#24d8a8, #1baf88);\n  --border-style: solid;\n  border-radius: 5px;\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  font-size: 0.7em;\n  font-weight: 900;\n  margin-right: 10px;\n}\n\nion-title {\n  color: #0055a5;\n}\n\n.toolbar {\n  --background: #0055a5;\n}\n\nion-item {\n  --background: none;\n}\n\nion-fab {\n  opacity: 0;\n  padding-right: 2%;\n  -webkit-animation: fab-slide-up 0.5s ease-out forwards;\n          animation: fab-slide-up 0.5s ease-out forwards;\n}\n\nion-fab ion-fab-button {\n  --color-activated: white;\n  --background-activated: #FFB351;\n  --background: white;\n}\n\nion-fab ion-fab-button ion-icon {\n  color: #0055a5;\n}\n\n@-webkit-keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-30px);\n  }\n}\n\n@keyframes fab-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-30px);\n  }\n}\n\n.post-header {\n  background: rgba(244, 244, 244, 0.8);\n  padding: 10px 0 10px 0;\n}\n\n.header-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50px;\n}\n\n.comment-form {\n  background: none;\n  margin-bottom: 20px;\n  padding: 20px 0 20px 0;\n}\n\n.comment-text {\n  color: #222;\n  font-size: 1.2em;\n}\n\n.reply-wrapper {\n  position: relative;\n  top: 10px;\n  margin-bottom: 5px;\n}\n\n.reply-text {\n  color: #222;\n  font-size: 1em;\n  margin: 0px 0 20px 0;\n}\n\n.reply-link {\n  color: #0055a5;\n}\n\n.comment-avatar {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n}\n\n.comment-input {\n  background: rgba(213, 232, 236, 0.3);\n  height: auto;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 3px solid #faa71b;\n  color: white;\n  font-size: 1.3em;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:focus {\n  background: rgba(250, 167, 27, 0.04);\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n}\n\n#reply-date {\n  font-size: 0.7em;\n  color: #999;\n}\n\n#replies-link {\n  color: #0055a5;\n  font-weight: 500;\n}\n\nform {\n  width: 100%;\n}\n\n@-webkit-keyframes send-icon-slide-in {\n  0% {\n    transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes send-icon-slide-in {\n  0% {\n    transform: translateX(10px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes post-button-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes post-button-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes comment-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes comment-slide-up {\n  0% {\n    transform: translateY(0px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBTUY7O0FBRkE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBS0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBRkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSxnQkFBQTtFQUNBLG1FQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTEE7RUFDRSxnQkFBQTtFQUNBLG1FQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFRRjs7QUFKQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFPRjtBQUNGOztBQU5DO0VBR0MsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUVBQUE7RUFDQSxpRkFBQTtVQUFBLHlFQUFBO0FBTUY7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBREE7RUFDRSxrQkFBQTtBQUlGOztBQUZFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0dBQUE7VUFBQSwwRkFBQTtBQUlGOztBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0YscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNkZBQUE7VUFBQSxxRkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLHdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBR0o7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUhBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTUE7O0FBSEE7RUFDRSxjQUFBO0FBTUY7O0FBSEE7RUFDRSxxQkFBQTtBQU1GOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUFNRjs7QUFKRTtFQUNFLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpJO0VBQ0EsY0FBQTtBQU1KOztBQURBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFJRjtFQUZBO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBSUY7QUFDRjs7QUFaQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBSUY7RUFGQTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFHRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUVBQUE7QUFFRjs7QUFBQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0FBSUY7O0FBREE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQUlGO0VBRkE7SUFDRSwwQkFBQTtJQUNFLFVBQUE7RUFJSjtBQUNGOztBQVpBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFJRjtFQUZBO0lBQ0UsMEJBQUE7SUFDRSxVQUFBO0VBSUo7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBR0Y7RUFEQTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQUdGO0FBQ0Y7O0FBWEE7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQUdGO0VBREE7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFFRjtFQUFBO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VBRUY7QUFDRjs7QUFWQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBRUY7RUFBQTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoicG9zdC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaHJ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjY2O1xuICBvcGFjaXR5OiAwLjM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udXNlci1wcm9maWxlLXBpY3R1cmV7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnBvc3Qge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmJmY2ZkO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cbi5jb21tZW50cy1oZWFkZXIge1xuICBjb2xvcjogIzAwNTVhNTtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5hZGQtY29tbWVudC1mb290ZXJ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMzIsIDIzNiwgMC4zKTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBib3JkZXItdG9wOiA2cHggc29saWQgIzAwNTVhNTtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5wb3N0LXRpdGxlIHtcbiAgY29sb3I6ICM2N2I1ZmY7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XG5cbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4ucG9zdC1uYW1lIHtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdC1kYXRlIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0NDQ7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ibHVlLWJ1dHRvbi1zbWFsbCB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwMDU1YTUsICMwMDU1YTIpO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGFzaHRhZ3N7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzJweDtcbn1cbi5oYXNodGFne1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogI2VhODQwMDtcbn1cbi5wb3N0LW1vYmlsZSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIG1hcmdpbi1ib3R0b206IDkwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ucG9zdC1tb2JpbGU6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wcm9maWxlLXBpY3R1cmUgIHtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgd2lkdGg6IDY1cHg7XG4gIH1cbn14XG5cbi5wb3N0LWNvbnRlbnR7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1NWE1KTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBjNDAwO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHJlZDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiAwLjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuLy8gQ2hhbmdlIGNvbG9yXG4udW5mb2xsb3ctYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmYWE3MWIsICNlOTliMTQpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb21tZW50cy10b29sYmFye1xuICBcbn1cbi5jb21tZW50cy10b29sYmFyLW1vYmlsZXtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgICBmb250LXNpemU6IDIuMmVtO1xuICB9XG59XG4uY29tbWVudHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luOiAgMTBweCA4cHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2Q3ZDdkNztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogcG9zdC1idXR0b24tc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMC41cyBmb3J3YXJkcztcbn1cblxuXG4uZm9sbG93LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBvcGFjaXR5OiAwO1xuICAtLWJhY2tncm91bmQ6ICMyNGQ4YTg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzc5NywgIzc5OSk7XG4gIGFuaW1hdGlvbjogcG9zdC1idXR0b24tc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmRlbGV0ZS1idXR0b257XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkY0NDNCLCByZ2IoMjA2LCA0OCwgNDApKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi51cHZvdGV7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDgwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICAtLWNvbG9yOiB3aGl0ZTtcblxuICBpb24taWNvbiB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG59XG4uZG93bnZvdGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgLS1jb2xvcjogIzAwNTVhNTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gICAgLS1mb250LXNpemU6IDQwcHg7XG4gIH1cbn1cblxuLnJlcGx5e1xuICB3aWR0aDogNjBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgLS1ib3JkZXItY29sb3I6ICMwMDU1YTU7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuICBmb250LXNpemU6IDAuN2VtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucmVwb3J0e1xuICAtLWJvcmRlci13aWR0aDogM3B4O1xuICB3aWR0aDogNjBweDtcbiAgLS1ib3JkZXItY29sb3I6ICM2NjY7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDAuN2VtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZWRpdHtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmFhNzFiO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogI2ZhYTcxYjtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmRlbGV0ZXtcbiAgd2lkdGg6IDYwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmZvbGxvdyB7XG4tLWJvcmRlci13aWR0aDogM3B4O1xud2lkdGg6IDgwcHg7XG4tLWJvcmRlci1jb2xvcjogbGluZWFyLWdyYWRpZW50KCMyNGQ4YTgsICMxYmFmODgpOztcbi0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbmJvcmRlci1yYWRpdXM6IDVweDtcbi0tY29sb3I6IHdoaXRlO1xuLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzVhZDhiMiwgIzQwYzU5ZCk7XG5mb250LXNpemU6IDAuN2VtO1xuZm9udC13ZWlnaHQ6IDkwMDtcbm1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6ICMwMDU1YTU7XG59XG5cbi50b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLWZhYiB7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBhbmltYXRpb246IGZhYi1zbGlkZS11cCAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xuXG4gIGlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZGQjM1MTtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhYi1zbGlkZS11cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbn1cblxuLnBvc3QtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0NCwgMjQ0LCAwLjgpO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxuXG4uaGVhZGVyLWF2YXRhciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jb21tZW50LWZvcm17XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG59XG5cbi5jb21tZW50LXRleHQge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLnJlcGx5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucmVwbHktdGV4dCB7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAwcHggMCAyMHB4IDA7XG59XG5cbi5yZXBseS1saW5rIHtcbiAgY29sb3I6ICMwMDU1YTU7XG59XG5cbi5jb21tZW50LWF2YXRhciB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIzMiwgMjM2LCAuMyk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IDAgMTBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmYWE3MWI7XG5cbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuLmNvbW1lbnQtaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTY3LCAyNywgMC4wNCk7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4jcmVwbHktZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4jcmVwbGllcy1saW5rIHtcbiAgY29sb3I6ICMwMDU1YTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBzZW5kLWljb24tc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcG9zdC1idXR0b24tc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjb21tZW50LXNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ 32915:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-comment/edit-comment.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Edit Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Edit Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"editCommentForm\" (ngSubmit)=\"edit(this.editCommentForm.value)\">\n        <ion-textarea\n          (keyup.enter)=\"edit(this.editCommentForm.value)\"\n          class=\"comment-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"15\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          formControlName=\"newComment\">\n        </ion-textarea>\n\n        <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n          <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n            Edit\n          </ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ 42489:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/reply-comment/reply-comment.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"cancel()\">\n          cancel\n        </ion-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title slot=\"end\">Reply to Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Reply to Comment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class=\"ion-justify-content-center\">\n\n      <ion-col size=\"10\">\n        <p id=\"userfullname\">{{this.comment}}</p>\n        <form [formGroup]=\"replyCommentForm\" (ngSubmit)=\"this.replyCommentForm.value.reply.length > 0 ? reply(this.replyCommentForm.value) : null\">\n          <ion-textarea\n            (keydown.control.enter)=\"this.replyCommentForm.value.reply.length > 0 ? reply(this.replyCommentForm.value) : null\"\n            class=\"reply-input\"\n            autogrow=\"true\"\n            autocapitalize=\"true\"\n            rows=\"15\"\n            spellcheck=\"true\"\n            wrap=\"soft\"\n            type=\"text\"\n            placeholder=\"Replying to: {{userFullName}}\" formControlName=\"reply\">\n          </ion-textarea>\n\n          <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n            <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n              Reply\n            </ion-button>\n          </div>\n        </form>\n      </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ 43842:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/report-comment/report-comment.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Report Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Report Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 50px;\">\n    <ion-col size=\"10\">\n      <p id=\"userfullname\">User being Reported: {{commentUserFullName}}</p>\n      <hr style=\"background: #999\">\n      <p id=\"comment\">Comment: {{commentContents}}</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"reportCommentForm\" (ngSubmit)=\"report()\">\n        <ion-textarea\n          (keyup.enter)=\"report()\"\n          class=\"report-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"8\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          placeholder=\"Why are you reporting this post?\" formControlName=\"reportedReason\">\n        </ion-textarea>\n\n          <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n            <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n              Report\n            </ion-button>\n          </div>\n      </form>\n    </ion-col>\n</ion-row>\n</ion-content>\n");

/***/ }),

/***/ 81346:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/post-page/post-page.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\" no-border>\n  <ion-toolbar class=\"toolbar\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <img class=\"user-profile-picture\" height=\"30\" [src]=\"this.userProfilePicture\" />\n      </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"logScrolling($event)\">\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n   <!-- fab placed to the bottom end; Going back to the top of the page on the mobile view. -->\n  <ion-fab *ngIf=\"showFab\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"fabScrollTop()\">\n        <ion-icon name=\"arrow-up\" size=\"large\"></ion-icon>\n     </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid>\n    <ion-row class=\"post ion-justify-content-center\">\n       <!-- Profile Header -->\n          <!-- Only on Desktop -->\n          <ion-col class=\"ion-hide-lg-down\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6.5\">\n            <!-- Profile Header -->\n            <div class=\"spacer\"></div>\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- Profile Picture -->\n              <ion-col class=\"ion-text-center\" pull-xl=\"0.5\" pull-lg=\"0.5\" size=\"0.75\">\n                <img src=\"{{creatorProfilePicture}}\" style=\"border-radius: 100px; height: 35xpx; width: 35px;\">\n              </ion-col>\n              <!-- Post Creator's Name -->\n              <ion-col pull-xl=\"0.4\" pull-lg=\"0.4\" size=\"9\">\n                <p class=\"post-name\">{{creatorName}}</p>\n                <p class=\"post-date\">{{date}}</p>\n              </ion-col>\n              <!-- Back button-->\n              <ion-col size=\"1\">\n                <ion-button class=\"blue-button-small ion-float-right\" (click)=\"back()\">\n                Back\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Mobile header -->\n          <ion-col class=\"ion-hide-lg-up\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"5\">\n                <img class=\"profile-picture\" src=\"{{creatorProfilePicture}}\">\n                <div style=\"display: inline-block; margin-left: 10px;\">\n                  <p class=\"post-name\">{{creatorName}}</p>\n                  <p class=\"post-date\">Posted {{date}} ago</p>\n                  <div style=\"position: relative; top: -16px;\">\n                    <p class=\"hashtag\" *ngFor=\"let tag of hashtags\">\n                      #{{tag}}\n                    </p>\n                  </div>\n                </div>\n                <div class=\"hashtags\">\n                  \n                </div>\n                <hr class=\"header-hr\">\n          </ion-col>\n          <!-- Post Content -->\n          <ion-col style=\"position: relative;\n          top: -40px;\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6.5\">\n                <p class=\"post-title\">{{title}}</p>\n               <p class=\"post-content\">{{post}}</p>\n          </ion-col>\n\n          <!-- Comment Input -->\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6.5\">\n            <form (ngSubmit)=\"comment(this.postID, this.userFullName, this.userEmail, this.userProfilePicture, commentForm.value, commentInputValue)\" [formGroup]=\"commentForm\">\n              <ion-textarea\n                (ionBlur)=\"onBlur()\"\n                (onfocusout)=\"blur()\"\n                (keydown.control.enter)=\"comment(this.postID, this.userFullName, this.userEmail, this.userProfilePicture, commentForm.value.comment, false) && ScrollToPostedComment()\"\n                class=\"comment-input\"\n                autogrow=\"true\"\n                autocapitalize=\"true\"\n                rows=\"5\"\n                spellcheck=\"true\"\n                wrap=\"soft\"\n                type=\"text\"\n                placeholder=\"Add a Comment\" formControlName=\"comment\">\n              </ion-textarea>\n              <ion-button\n                      style=\"float: right;\"\n                      class=\"comment-post-button\"\n                      type=\"submit\"\n                      *ngIf=\"!commentForm\n                              .get('comment')\n                              .pristine && commentForm.value.comment.length >= 3\"\n                        name=\"send\">Post\n              </ion-button>\n            </form>\n          </ion-col>\n\n          <!-- Upvote and Downvote Post -->\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"4\" push-xl=\"1.5\" size-xl=\"6\">\n            <app-up-down-vote-buttons [postID]=\"postID\"></app-up-down-vote-buttons>\n          </ion-col>\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"4\" pull-xl=\"1.4\" size-xl=\"3\">\n              <ion-button *ngIf=\"this.isUser === true\" (click)=\"deletePost(this.postID)\"  class=\"delete ion-float-right\">\n                Delete\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === true\" (click)=\"editPost(this.postID, this.post)\"\n                class=\"edit ion-float-right\"\n                style=\"--background: none;\">\n                Edit\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === false && !following\" (click)=\"follow(this.postID)\"\n                class=\"follow ion-float-right\">\n                Follow\n              </ion-button>\n              <ion-button\n                *ngIf=\"this.isUser === false && following\" (click)=\"unFollow(this.postID)\"\n                class=\"delete ion-float-right\"\n                style=\"width: 80px\">\n                Unfollow\n              </ion-button>\n          </ion-col>\n    </ion-row>\n\n    <!-- Comments -->\n    <ion-row class=\"ion-justify-content-center\">\n\n      <!-- If No Comments -->\n      <ion-col class=\"ion-text-center\" style=\"margin: 100px 0;\" *ngIf=\"comments.length === 0\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n      <p style=\"color: #888;\">This post has no comments</p>\n      </ion-col>\n\n      <ion-col style=\"margin-bottom: 24px;\" *ngIf=\"comments.length > 0\" size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"comments-toolbar-mobile ion-hide-lg-up\">\n          <p class=\"comments-header\">Comments - {{comments.length}}</p>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"filterComments()\">\n              <ion-icon slot=\"start\" name=\"filter\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n\n        <!-- Comment Wrapper -->\n        <ion-col *ngFor=\"let comment of comments\" class=\"comment\" size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n\n          <!-- Comment Header -->\n          <ion-row>\n            <ion-col>\n              <ion-item lines=\"none\">\n                <ion-avatar class=\"comment-avatar\" slot=\"start\">\n                  <img src=\"{{comment.userProfilePicture}}\">\n                </ion-avatar>\n                <ion-label>\n                  <h6 style=\"opacity: 0.5\">{{ comment.userFullName  }} - {{ comment.date }} ago</h6>\n\n                  <!-- <hr class=\"header-hr\"> -->\n                  </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- Comment -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n                <p class=\"comment-text\" style=\"margin-top: 40px;\">{{comment.comment}}\n                </p>\n            </ion-col>\n          </ion-row>\n\n\n          <!-- Replies -->\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"11\">\n              <p\n              (click)=\"repliesModal(\n                this.postID,\n                comment.replies,\n                comment.comment,\n                comment._id,\n                comment.userFullName,\n                comment.userEmail,\n                comment.date,\n                comment.userProfilePicture,\n                this.userFullName,\n                this.userEmail)\"\n              *ngIf=\"comment.repliesLength >= 1\" id=\"replies-link\">Replies - {{comment.repliesLength}}</p>\n            </ion-col>\n          </ion-row>\n\n\n          <!-- Comment Buttons -->\n          <ion-row style=\"margin-top: 20px;\">\n            <!-- Upvote & Downvote Comments-->\n            <ion-col size=\"4\">\n              <app-comment-vote-bar [postID]=\"this.postID\" [commentID]=\"comment._id\"></app-comment-vote-bar>\n            </ion-col>\n            <!-- Report, Edit & Reply -->\n            <ion-col push=\"1\" size=\"6\">\n              <ion-toolbar style=\"--background: none;\">\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"repliesModal(\n                    this.postID,\n                    comment.replies,\n                    comment.comment,\n                    comment._id,\n                    comment.userFullName,\n                    comment.userEmail,\n                    comment.date,\n                    comment.userProfilePicture,\n                    this.userFullName,\n                    this.userEmail)\" class=\"reply ion-float-right\">\n                    Reply\n                  </ion-button>\n                  <ion-button *ngIf=\"comment.canReport === true\" (click)=\"report(comment._id, comment.comment, this.post, this.postID, comment.userFullName, comment.userProfilePicture, comment.userEmail, comment.date)\"  class=\"report ion-float-right\">\n                    Report\n                  </ion-button>\n                  <ion-button\n                    *ngIf=\"comment.isUser === true\" (click)=\"editComment(comment._id, comment.comment, this.postID, this.userEmail)\"\n                    class=\"edit ion-float-right\">\n                    Edit\n                  </ion-button>\n                  <ion-button *ngIf=\"comment.canDeleteComment === true\" (click)=\"deleteComment(comment._id)\"  class=\"delete ion-float-right\">\n                    Delete\n                  </ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"ion-hide-lg-up add-comment-footer\">\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col style=\"display: inline-block; height: 40px;\" size=\"10\">\n      <ion-textarea\n      #footerCommentInput\n      (ionChange)=\"commentInput($event)\"\n      style=\"display: inline;\"\n      autocapitalize=\"true\"\n      rows=\"1\"\n      spellcheck=\"true\"\n      wrap=\"soft\"\n      type=\"text\"\n      placeholder=\"Add a Comment\"\n      >\n    </ion-textarea>\n    </ion-col>\n    <ion-col style=\"display: inline-block; height: 50px;\" size=\"1\">\n      <ion-button style=\"--background: none;\" (click)=\"comment(this.postID, this.userFullName, this.userEmail, userProfilePicture, this.commentInputValue, true) && ScrollToPostedComment()\">\n      <ion-icon style=\"font-size: 1.8em; color: #0055a5;\" slot=\"start\" name=\"send\"></ion-icon>\n    </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_posts_post-page_post-page_module_ts-es2015.js.map