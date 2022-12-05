"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 20147:
/*!**************************************************************!*\
  !*** ./src/app/emitters/single-post-page-emitter.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SinglePostPageEmitterService": () => (/* binding */ SinglePostPageEmitterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let SinglePostPageEmitterService = class SinglePostPageEmitterService {
    constructor() {
        this.invokeSinglePostPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    singlePostPageRefresh() {
        this.invokeSinglePostPageRefresh.emit();
    }
};
SinglePostPageEmitterService.ctorParameters = () => [];
SinglePostPageEmitterService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], SinglePostPageEmitterService);



/***/ }),

/***/ 81984:
/*!**************************************************************!*\
  !*** ./src/app/modals/edit-post/edit-post-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPostPageRoutingModule": () => (/* binding */ EditPostPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _edit_post_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-post.page */ 17518);




const routes = [
    {
        path: '',
        component: _edit_post_page__WEBPACK_IMPORTED_MODULE_0__.EditPostPage
    }
];
let EditPostPageRoutingModule = class EditPostPageRoutingModule {
};
EditPostPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditPostPageRoutingModule);



/***/ }),

/***/ 22447:
/*!******************************************************!*\
  !*** ./src/app/modals/edit-post/edit-post.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPostPageModule": () => (/* binding */ EditPostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _edit_post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-post-routing.module */ 81984);
/* harmony import */ var _edit_post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-post.page */ 17518);







let EditPostPageModule = class EditPostPageModule {
};
EditPostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_post_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPostPageRoutingModule
        ],
        declarations: [_edit_post_page__WEBPACK_IMPORTED_MODULE_1__.EditPostPage]
    })
], EditPostPageModule);



/***/ }),

/***/ 17518:
/*!****************************************************!*\
  !*** ./src/app/modals/edit-post/edit-post.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPostPage": () => (/* binding */ EditPostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-post.page.html?ngResource */ 45536);
/* harmony import */ var _edit_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-post.page.scss?ngResource */ 75021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
var _a, _b, _c, _d, _e, _f, _g;








let EditPostPage = class EditPostPage {
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
        this.postID = this.navParams.get('postID');
        this.post = this.navParams.get('post');
        console.log(this.post);
        // To collect comment data
        this.editPostForm = this.formBuilder.group({
            newPost: this.post
        });
    }
    cancel() {
        console.log('cancelling');
        this.modal.dismiss();
    }
    refreshComment() {
        this.postEmitterService.postPageRefresh();
    }
    edit(newPost) {
        console.log('editting');
        this.posts.editPost(this.postID, newPost.newPost).subscribe(post => {
            console.log(post);
            this.editLoading(post['post']);
        });
    }
    editLoading(post) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Editing your Post...',
                duration: 1000
            });
            yield loading.present();
            console.log(post.post);
            const { role, data } = yield loading.onDidDismiss();
            yield this.modal.dismiss();
            yield this.posts.postsSubject$.next(post);
            yield this.confirmAlert();
            console.log('Loading dismissed!');
        });
    }
    confirmAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'success-alert',
                message: 'Your Post has been edited.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
EditPostPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__.PostPageEmitterService }
];
EditPostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-post',
        template: _edit_post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder !== "undefined" && _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController) === "function" ? _d : Object, typeof (_e = typeof src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService !== "undefined" && src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService) === "function" ? _e : Object, typeof (_f = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController) === "function" ? _f : Object, typeof (_g = typeof src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__.PostPageEmitterService !== "undefined" && src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__.PostPageEmitterService) === "function" ? _g : Object])
], EditPostPage);



/***/ }),

/***/ 84790:
/*!********************************************************************************!*\
  !*** ./src/app/modals/new-message-mentor/new-message-mentor-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMessageMentorPageRoutingModule": () => (/* binding */ NewMessageMentorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-message-mentor.page */ 8960);




const routes = [
    {
        path: '',
        component: _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_0__.NewMessageMentorPage
    }
];
let NewMessageMentorPageRoutingModule = class NewMessageMentorPageRoutingModule {
};
NewMessageMentorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewMessageMentorPageRoutingModule);



/***/ }),

/***/ 33692:
/*!************************************************************************!*\
  !*** ./src/app/modals/new-message-mentor/new-message-mentor.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMessageMentorPageModule": () => (/* binding */ NewMessageMentorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _new_message_mentor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-message-mentor-routing.module */ 84790);
/* harmony import */ var _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-message-mentor.page */ 8960);







let NewMessageMentorPageModule = class NewMessageMentorPageModule {
};
NewMessageMentorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_message_mentor_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewMessageMentorPageRoutingModule
        ],
        declarations: [_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_1__.NewMessageMentorPage]
    })
], NewMessageMentorPageModule);



/***/ }),

/***/ 8960:
/*!**********************************************************************!*\
  !*** ./src/app/modals/new-message-mentor/new-message-mentor.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMessageMentorPage": () => (/* binding */ NewMessageMentorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_message_mentor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-message-mentor.page.html?ngResource */ 18801);
/* harmony import */ var _new_message_mentor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-message-mentor.page.scss?ngResource */ 89923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34362);
var _a;





let NewMessageMentorPage = class NewMessageMentorPage {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    cancel() {
        this.modal.dismiss();
    }
};
NewMessageMentorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
NewMessageMentorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-new-message-mentor',
        template: _new_message_mentor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_message_mentor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController) === "function" ? _a : Object])
], NewMessageMentorPage);



/***/ }),

/***/ 11320:
/*!**********************************************************************************!*\
  !*** ./src/app/modals/new-message-student/new-message-student-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMessageStudentPageRoutingModule": () => (/* binding */ NewMessageStudentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _new_message_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-message-student.page */ 50420);




const routes = [
    {
        path: '',
        component: _new_message_student_page__WEBPACK_IMPORTED_MODULE_0__.NewMessageStudentPage
    }
];
let NewMessageStudentPageRoutingModule = class NewMessageStudentPageRoutingModule {
};
NewMessageStudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewMessageStudentPageRoutingModule);



/***/ }),

/***/ 65367:
/*!**************************************************************************!*\
  !*** ./src/app/modals/new-message-student/new-message-student.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMessageStudentPageModule": () => (/* binding */ NewMessageStudentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _new_message_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-message-student-routing.module */ 11320);
/* harmony import */ var _new_message_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-message-student.page */ 50420);







let NewMessageStudentPageModule = class NewMessageStudentPageModule {
};
NewMessageStudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_message_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewMessageStudentPageRoutingModule
        ],
        declarations: [_new_message_student_page__WEBPACK_IMPORTED_MODULE_1__.NewMessageStudentPage]
    })
], NewMessageStudentPageModule);



/***/ }),

/***/ 50420:
/*!************************************************************************!*\
  !*** ./src/app/modals/new-message-student/new-message-student.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewMessageStudentPage": () => (/* binding */ NewMessageStudentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_message_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-message-student.page.html?ngResource */ 19625);
/* harmony import */ var _new_message_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-message-student.page.scss?ngResource */ 59734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/student-chat.service */ 70009);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
var _a, _b, _c, _d;








let NewMessageStudentPage = class NewMessageStudentPage {
    constructor(modal, studentChat, profile, router) {
        this.modal = modal;
        this.studentChat = studentChat;
        this.profile = profile;
        this.router = router;
    }
    ngOnInit() {
        this.profile.getUserDetails().subscribe(data => {
            this.requestingUserFullname = data['fullName'];
            this.requestingUserEmail = data['email'];
            this.requestingUserPhoto = data['profilePicture'];
            this.profile.getAllUsers()
                .subscribe(users => {
                // Make sure to remove the Client user from list of users to search through
                // There is no need to message yourself.
                const usersArray = Object.values(users);
                const index = usersArray
                    .map(user => {
                    return user.email;
                })
                    .indexOf(this.requestingUserEmail);
                usersArray.splice(index, 1);
                this.users = usersArray;
                this.loadedUsers = usersArray;
            });
        });
    }
    search(event) {
        this.initializeItems();
        console.log(this.loadedUsers);
        let search = event.target.value;
        console.log(search);
        this.users = this.users.filter(currentUsers => {
            if (!currentUsers || !search) {
                console.log('No results from that search');
                this.noSearchInput = true;
            }
            if (currentUsers.name && search) {
                if (currentUsers.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                    this.searchTerm = search;
                    this.searching = true;
                    this.noSearchInput = false;
                    return true;
                }
                return false;
            }
            this.noSearchInput = true;
        });
    }
    initializeItems() {
        this.users = this.loadedUsers;
    }
    newChatroom(respondingUserFullName, respondingUserEmail, respondingUserPhoto) {
        this.profile.getUserDetails()
            .subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // If Client user has alreadt started a conversation with a user, direct that user to their conversations chat page.
            let conversations = data['studentChat'];
            for (const convo of conversations) {
                if (convo.requestingUserEmail === respondingUserEmail || convo.respondingUserEmail === respondingUserEmail) {
                    console.log('You have already started a conversation with this user');
                    yield this.cancel();
                    // tslint:disable-next-line: max-line-length
                    return yield this.router.navigate(['home/posts/student-chat/chat-page', convo.chatId, this.requestingUserFullname, this.requestingUserPhoto, this.requestingUserEmail]);
                }
            }
            // tslint:disable-next-line: max-line-length
            // this.studentChat.newChatroom(this.requestingUserFullname, this.requestingUserEmail, this.requestingUserPhoto, respondingUserFullName, respondingUserEmail, respondingUserPhoto);
            // this.studentChat.newChatRoom.subscribe(
            //   d => {
            //     this.studentChat.conversations$.next(Object.values(d));
            //   }
            // );
            this.cancel();
        }));
    }
    cancel() {
        this.modal.dismiss();
    }
};
NewMessageStudentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_2__.StudentChatService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
NewMessageStudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-new-message-student',
        template: _new_message_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_message_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController) === "function" ? _a : Object, typeof (_b = typeof src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_2__.StudentChatService !== "undefined" && src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_2__.StudentChatService) === "function" ? _b : Object, typeof (_c = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService) === "function" ? _c : Object, typeof (_d = typeof _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router) === "function" ? _d : Object])
], NewMessageStudentPage);



/***/ }),

/***/ 28086:
/*!********************************************************************!*\
  !*** ./src/app/modals/report-convo/report-convo-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportConvoPageRoutingModule": () => (/* binding */ ReportConvoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _report_convo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-convo.page */ 10980);




const routes = [
    {
        path: '',
        component: _report_convo_page__WEBPACK_IMPORTED_MODULE_0__.ReportConvoPage
    }
];
let ReportConvoPageRoutingModule = class ReportConvoPageRoutingModule {
};
ReportConvoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportConvoPageRoutingModule);



/***/ }),

/***/ 83281:
/*!************************************************************!*\
  !*** ./src/app/modals/report-convo/report-convo.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportConvoPageModule": () => (/* binding */ ReportConvoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _report_convo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-convo-routing.module */ 28086);
/* harmony import */ var _report_convo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-convo.page */ 10980);







let ReportConvoPageModule = class ReportConvoPageModule {
};
ReportConvoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _report_convo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportConvoPageRoutingModule
        ],
        declarations: [_report_convo_page__WEBPACK_IMPORTED_MODULE_1__.ReportConvoPage]
    })
], ReportConvoPageModule);



/***/ }),

/***/ 10980:
/*!**********************************************************!*\
  !*** ./src/app/modals/report-convo/report-convo.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportConvoPage": () => (/* binding */ ReportConvoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _report_convo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-convo.page.html?ngResource */ 49524);
/* harmony import */ var _report_convo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-convo.page.scss?ngResource */ 37143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 34362);
var _a, _b, _c;





let ReportConvoPage = class ReportConvoPage {
    constructor(modal, alert, toast) {
        this.modal = modal;
        this.alert = alert;
        this.toast = toast;
    }
    ngOnInit() {
    }
    cancel() {
        this.modal.dismiss();
    }
    reportAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: '',
                header: 'Are you sure you want to report this conversation?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.reportedToast();
                            yield this.modal.dismiss();
                        })
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    reportedToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                cssClass: 'favorited-toast',
                message: `You have reported you conversation with ---`,
                duration: 2000
            });
            toast.present();
        });
    }
};
ReportConvoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
ReportConvoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-report-convo',
        template: _report_convo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_report_convo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController) === "function" ? _c : Object])
], ReportConvoPage);



/***/ }),

/***/ 89780:
/*!********************************************************************************!*\
  !*** ./src/app/pages/profile/resume/view-resume/view-resume-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewResumePageRoutingModule": () => (/* binding */ ViewResumePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _view_resume_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-resume.page */ 33311);




const routes = [
    {
        path: '',
        component: _view_resume_page__WEBPACK_IMPORTED_MODULE_0__.ViewResumePage
    }
];
let ViewResumePageRoutingModule = class ViewResumePageRoutingModule {
};
ViewResumePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewResumePageRoutingModule);



/***/ }),

/***/ 47659:
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/resume/view-resume/view-resume.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewResumePageModule": () => (/* binding */ ViewResumePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-resume-routing.module */ 89780);
/* harmony import */ var _view_resume_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-resume.page */ 33311);







let ViewResumePageModule = class ViewResumePageModule {
};
ViewResumePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewResumePageRoutingModule
        ],
        declarations: [_view_resume_page__WEBPACK_IMPORTED_MODULE_1__.ViewResumePage]
    })
], ViewResumePageModule);



/***/ }),

/***/ 33311:
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewResumePage": () => (/* binding */ ViewResumePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_resume_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-resume.page.html?ngResource */ 9906);
/* harmony import */ var _view_resume_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-resume.page.scss?ngResource */ 17660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/profile.service */ 39181);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
var _a, _b, _c;







let ViewResumePage = class ViewResumePage {
    constructor(router, profile, domSanitizer) {
        this.router = router;
        this.profile = profile;
        this.domSanitizer = domSanitizer;
    }
    ngOnInit() {
        this.profile.getUserDetails()
            .subscribe(data => {
            console.log(data);
            this.profile.resume.next(data['resume']);
        });
        this.profile.resume.subscribe(data => {
            this.resume = data;
        });
    }
    sanitizeImageUrl(imageUrl) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl);
    }
    goBack() {
        this.router.navigate(['/home/profile']);
    }
    updateResume() {
        console.log('Updating Resume from View Resume page');
        this.router.navigate(['/home/profile/update-resume']);
    }
};
ViewResumePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer }
];
ViewResumePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-view-resume',
        template: _view_resume_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_resume_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router) === "function" ? _a : Object, typeof (_b = typeof _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService !== "undefined" && _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService) === "function" ? _b : Object, typeof (_c = typeof _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer !== "undefined" && _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer) === "function" ? _c : Object])
], ViewResumePage);



/***/ }),

/***/ 61957:
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
var _a;




let PhotoService = class PhotoService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
    }
    // Testing
    imageUpload(imageForm) {
        console.log('image uploading');
        console.log(imageForm);
        return this.http.post(`${this.BACKEND_URL}/api/photo/upload-profile-picture`, imageForm);
    }
    changeProfilePicture(imageForm) {
        console.log(imageForm);
        return this.http.post(`${this.BACKEND_URL}/api/photo/change-profile-picture`, imageForm);
    }
    updatePostPhotos(newPhoto, email) {
        console.log(newPhoto);
        return this.http.post(`${this.BACKEND_URL}/api/photo/update-all-post-pictures`, newPhoto, email).subscribe();
    }
    boothPartnerLogo(logo) {
        console.log('both partner uploading');
        console.log(logo);
        return this.http.post(`${this.BACKEND_URL}/api/photo/upload-booth-partner-logo`, logo);
    }
};
PhotoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient) === "function" ? _a : Object])
], PhotoService);



/***/ }),

/***/ 70009:
/*!**************************************************!*\
  !*** ./src/app/services/student-chat.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentChatService": () => (/* binding */ StudentChatService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
var _a;




let StudentChatService = class StudentChatService {
    constructor(router) {
        this.router = router;
        this.conversations$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    }
};
StudentChatService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
StudentChatService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router) === "function" ? _a : Object])
], StudentChatService);



/***/ }),

/***/ 53740:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ 64362);
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ 80271);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 59137);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;

  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }

    const target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };

  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }

    const buttonToModify = currentTouchedButton;
    (0,_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return (0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__.h)();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ 98582:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _Users_ferro_Desktop_FYF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);


const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_Users_ferro_Desktop_FYF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps) {
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);

    if (el.componentOnReady) {
      yield el.componentOnReady();
    }

    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};



/***/ }),

/***/ 59137:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
  },

  available() {
    return !!this.getEngine();
  },

  isCordova() {
    return !!window.TapticEngine;
  },

  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },

  impact(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },

  notification(options) {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },

  selection() {
    this.impact({
      style: 'light'
    });
  },

  selectionStart() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },

  selectionChanged() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },

  selectionEnd() {
    const engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }

};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


const hapticImpact = options => {
  HapticEngine.impact(options);
};



/***/ }),

/***/ 91350:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - 9 * index}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 94254:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var _Users_ferro_Desktop_FYF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);


const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};

const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }

  return [];
};

const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

const openURL = /*#__PURE__*/function () {
  var _ref = (0,_Users_ferro_Desktop_FYF_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');

      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }

        return router.push(url, direction, animation);
      }
    }

    return false;
  });

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ 75021:
/*!*****************************************************************!*\
  !*** ./src/app/modals/edit-post/edit-post.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".comment-input {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid rgb(0, 81, 145);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoiZWRpdC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */";

/***/ }),

/***/ 89923:
/*!***********************************************************************************!*\
  !*** ./src/app/modals/new-message-mentor/new-message-mentor.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 0px;\n}\n\nion-input {\n  background: rgba(224, 224, 224, 0.2);\n  height: 60px;\n}\n\nion-button {\n  margin: 50px 0;\n}\n\n.no-users {\n  margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1tZXNzYWdlLW1lbnRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6Im5ldy1tZXNzYWdlLW1lbnRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAxLjRweCBzb2xpZCAjOTk5O1xuICBvcGFjaXR5OiAwLjM7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjIpO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLm5vLXVzZXJzIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn0iXX0= */";

/***/ }),

/***/ 59734:
/*!*************************************************************************************!*\
  !*** ./src/app/modals/new-message-student/new-message-student.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 0px;\n}\n\nion-input {\n  background: rgba(224, 224, 224, 0.2);\n  height: 60px;\n}\n\n.no-users {\n  margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1tZXNzYWdlLXN0dWRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRiIsImZpbGUiOiJuZXctbWVzc2FnZS1zdHVkZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5ociB7XG4gIGJvcmRlci10b3A6IDEuNHB4IHNvbGlkICM5OTk7XG4gIG9wYWNpdHk6IDAuMztcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuMik7XG4gIGhlaWdodDogNjBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG59XG5cbi5uby11c2VycyB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG59Il19 */";

/***/ }),

/***/ 37143:
/*!***********************************************************************!*\
  !*** ./src/app/modals/report-convo/report-convo.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 20px;\n}\n\nion-textarea {\n  background: rgba(224, 224, 224, 0.2);\n  padding: 8px;\n}\n\nion-button {\n  margin: 50px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1jb252by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InJlcG9ydC1jb252by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAxLjRweCBzb2xpZCAjOTk5O1xuICBvcGFjaXR5OiAwLjM7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMC4yKTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA1MHB4IDA7XG59Il19 */";

/***/ }),

/***/ 17660:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(51, 51, 51, 0.1490196078);\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.update-button {\n  --color: white;\n  --background: #faa71b;\n  --background-hover: linear-gradient(#faa71b, #c98b22);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.text-header {\n  background: rgb(228, 235, 241);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcmVzdW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1REFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7QUFBRTtFQUNFLDhCQUFBO0FBR0oiLCJmaWxlIjoidmlldy1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzMyNjtcblxuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbi5iYWNrLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwMDU1YTUsICMwZDJlNGQpO1xuICAgIGhlaWdodDogMjRweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4udXBkYXRlLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNmYWE3MWIsICNjOThiMjIpO1xuICAgIGhlaWdodDogMjRweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC50ZXh0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIyOCwgMjM1LCAyNDEpO1xuICB9Il19 */";

/***/ }),

/***/ 45536:
/*!*****************************************************************!*\
  !*** ./src/app/modals/edit-post/edit-post.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Edit Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Edit Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"editPostForm\" (ngSubmit)=\"edit(this.editPostForm.value)\">\n        <ion-textarea\n          (keydown.control.enter)=\"edit(this.editPostForm.value)\"\n          class=\"comment-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"15\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          formControlName=\"newPost\">\n        </ion-textarea>\n\n        <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n          <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n            Edit\n          </ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ }),

/***/ 18801:
/*!***********************************************************************************!*\
  !*** ./src/app/modals/new-message-mentor/new-message-mentor.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">New Message</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-input type=\"text\" placeholder=\"Type a name\"></ion-input>\n        <hr>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../../assets/batman-pro-pic.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Username</h2>\n            <p>Grade</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../../assets/batman-pro-pic.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Username</h2>\n            <p>Grade</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <!-- If there are no search results -->\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <p class=\"no-users\">There are no users with that name</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 19625:
/*!*************************************************************************************!*\
  !*** ./src/app/modals/new-message-student/new-message-student.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">New Message</p>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button slot=\"end\" color=\"secondary\" (click)=\"newChatroom()\">\n        Next\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-input type=\"text\" placeholder=\"Type a name\" (keyup)=\"search($event)\"></ion-input>\n        <hr>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-item *ngFor=\"let user of users\" lines=\"none\" (click)=\"newChatroom(user.name, user.email, user.profilePicture)\">\n          <ion-avatar slot=\"start\">\n            <img src={{user.profilePicture}}>\n          </ion-avatar>\n          <ion-label>\n            <h2>{{user.name}}</h2>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <!-- If there are no search results -->\n      <ion-col *ngIf=\"this.users.length == 0\" class=\"ion-text-center\" size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <p class=\"no-users\">There are no users with that name</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 49524:
/*!***********************************************************************!*\
  !*** ./src/app/modals/report-convo/report-convo.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Report Conversation</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Mobile -->\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <h5>Reporting</h5>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../assets/batman-pro-pic.png\" />\n          </ion-avatar>\n          <ion-label>Name</ion-label>\n        </ion-item>\n        <hr>\n        <ion-item>\n          <ion-textarea rows=\"12\" required placeholder=\"Why are you reporting?\"></ion-textarea>\n        </ion-item>\n\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <ion-button class=\"blue-button\" (click)=\"reportAlert()\">\n          Report\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 9906:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>View Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <h1>Change Resume</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"update-button\" (click)=\"updateResume()\">\n                  Update\n                </ion-button>\n                <ion-button class=\"back-button\" (click)=\"goBack()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"4\">\n        <h6 class=\"text-header\">You can View and Update your Resume here</h6>\n        <object [data]=\"this.sanitizeImageUrl(this.resume)\" width=\"100%\" height=\"700\" type=\"application/pdf\"></object>\n\n      </ion-col>\n      <ion-button (click)=\"updateResume()\" class=\"orange-button ion-hide-md-up\" style=\"width: 150px;\">UPDATE</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=common.js.map