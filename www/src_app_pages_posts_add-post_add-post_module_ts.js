"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_posts_add-post_add-post_module_ts"],{

/***/ 26979:
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPostPageRoutingModule": () => (/* binding */ AddPostPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_post_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-post.page */ 36990);




const routes = [
    {
        path: '',
        component: _add_post_page__WEBPACK_IMPORTED_MODULE_0__.AddPostPage
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_posts_add-post_verification_verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verification/verification.module */ 22944)).then(m => m.VerificationPageModule)
    }
];
let AddPostPageRoutingModule = class AddPostPageRoutingModule {
};
AddPostPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddPostPageRoutingModule);



/***/ }),

/***/ 19228:
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPostPageModule": () => (/* binding */ AddPostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _add_post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-post-routing.module */ 26979);
/* harmony import */ var _add_post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-post.page */ 36990);







let AddPostPageModule = class AddPostPageModule {
};
AddPostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_post_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddPostPageRoutingModule
        ],
        declarations: [_add_post_page__WEBPACK_IMPORTED_MODULE_1__.AddPostPage]
    })
], AddPostPageModule);



/***/ }),

/***/ 36990:
/*!*******************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPostPage": () => (/* binding */ AddPostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-post.page.html?ngResource */ 26455);
/* harmony import */ var _add_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-post.page.scss?ngResource */ 56778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
var _a, _b, _c, _d, _e;









let AddPostPage = class AddPostPage {
    constructor(router, loading, posts, profile, formBuilder) {
        this.router = router;
        this.loading = loading;
        this.posts = posts;
        this.profile = profile;
        this.formBuilder = formBuilder;
        this.hashtags = [];
        // Do some sort of Validation Later
        this.validationMessages = {};
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.textPostForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            hashtags: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            post: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        this.profile.getUserDetails().subscribe(details => {
            console.log(details);
            this.creatorEmail = details['email'];
            this.creatorName = details['fullName'];
            this.creatorProfilePicture = details['profilePicture'];
        });
    }
    back() {
        this.router.navigate(['/home/posts']);
    }
    post(creatorName, creatorEmail, creatorProfilePicture, hashtags, post, title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            yield this.posts.addPost(creatorName, creatorEmail, creatorProfilePicture, hashtags, post, title).subscribe(data => {
                console.log(data);
            });
            yield this.router.navigate(['home/posts/add-post/verification']);
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Sending post to be Verified...',
                spinner: 'bubbles',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    addHashTag(event) {
        console.log(event);
        let hashtagControl = this.textPostForm.get('hashtags');
        if (event.code === "Enter") {
            console.log('ENTER button pressed.');
            console.log('Value: ');
            console.log(hashtagControl.value);
            console.log('Hashtags: ');
            this.hashtags.push(hashtagControl.value);
            console.log(this.hashtags);
        }
    }
    deleteTag(i) {
        console.log(i);
        let index = this.hashtags.indexOf(i);
        console.log(index);
        if (index = -1) {
            this.hashtags.splice(index, 1);
            console.log(this.hashtags);
        }
    }
};
AddPostPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
AddPostPage.propDecorators = {
    postChars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['postChars', { static: false },] }],
    titleChars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['titleChars', { static: false },] }],
    hashtagRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['hashtagRef', { static: false },] }]
};
AddPostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-post',
        template: _add_post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController) === "function" ? _b : Object, typeof (_c = typeof src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService !== "undefined" && src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService) === "function" ? _c : Object, typeof (_d = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService) === "function" ? _d : Object, typeof (_e = typeof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder !== "undefined" && _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder) === "function" ? _e : Object])
], AddPostPage);



/***/ }),

/***/ 56778:
/*!********************************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".blue-button-small {\n  --color: white;\n  --background: #0055a5;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\nion-toolbar {\n  --background: #0055a5;\n}\n\nion-back-button {\n  color: white;\n  width: auto;\n}\n\nh1 {\n  font-weight: 600;\n  font-size: 3em;\n  color: #46c9a3;\n  display: inline;\n}\n\nion-label {\n  font-size: 1.4em;\n  margin-bottom: 1em;\n  color: #0055a5;\n  font-weight: 600;\n}\n\nh5 {\n  font-size: 1em;\n  color: #222;\n  margin-bottom: 25px;\n}\n\n.hashtag {\n  background: #e1f0fc;\n  width: 300px;\n  padding: 0.1px 10px;\n  margin-bottom: 14px;\n  border-radius: 5px;\n  font-size: 1em;\n  color: #005191;\n}\n\n.hashtag p {\n  display: inline-block;\n}\n\n.hashtag img {\n  height: 20px;\n  float: right;\n  display: inline-block;\n  position: relative;\n  top: 14px;\n}\n\n.line-input > ion-item {\n  margin-bottom: 88px;\n}\n\n.char-limit {\n  position: relative;\n  top: -35px;\n  text-align: right;\n}\n\nion-title {\n  margin: 0;\n}\n\n.message {\n  font-size: 1.05em;\n  text-align: left;\n  font-weight: 500;\n  line-height: 1.5em;\n  color: #555;\n}\n\n.char-limit {\n  color: #e4405f;\n  margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 576px) {\n  .text-input {\n    box-shadow: none;\n    background: #edf3f8;\n  }\n}\n\n.item-interactive {\n  --border-width: 0px;\n  --show-full-highlight: 0;\n}\n\nh6 {\n  padding: 15px;\n  line-height: 35px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLGNBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREk7RUFDRSxxQkFBQTtBQUdOOztBQUFJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUVOOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBQ0Y7QUFDRjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSkYiLCJmaWxlIjoiYWRkLXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWUtYnV0dG9uLXNtYWxsIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGF1dG87XG59XG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBjb2xvcjogIzQ2YzlhMztcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5oYXNodGFnIHtcbiAgYmFja2dyb3VuZDogI2UxZjBmYztcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAwLjFweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzAwNTE5MTtcblxuICAgIHAge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDE0cHg7XG4gICAgfVxufVxuXG4ubGluZS1pbnB1dCA+IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogODhweDtcbn1cblxuLmNoYXItbGltaXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTM1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxLjA1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5jaGFyLWxpbWl0IHtcbiAgY29sb3I6ICNlNDQwNWY7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnRleHQtaW5wdXQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2VkZjNmODtcbiAgfVxuXG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgLy8gYmFja2dyb3VuZDogI2VkZjNmODtcbiAgfVxufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMDtcbn1cblxuaDYge1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";

/***/ }),

/***/ 26455:
/*!********************************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n        <ion-title>Add Post</ion-title>\n      </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <img height=\"30\" src=\"../../../../assets/icon/White-FYF-LOGO.png\" alt=\"\" srcset=\"\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row class=\"header ion-hide-md-down ion-justify-content-center\"  style=\"margin: 4% 0% 1% 0%;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"6\" size-xl=\"6\">\n        <h1 style=\"\">New Post</h1>\n        <ion-button class=\"blue-button-small ion-float-right\"  (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"7\" size-xl=\"6\">\n        <!-- Mobile Text Header -->\n        <p class=\"message ion-hide-md-up\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n\n        <!-- Desktop Text Header -->\n        <p class=\"message ion-hide-md-down\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n        <hr style=\"border-top: #9993 solid 2px;\n        margin-bottom: 50px;\">\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <form [formGroup]=\"textPostForm\" (ngSubmit)=\"textPostForm.value.post.length > 0 ? post(this.creatorName, this.creatorEmail, this.creatorProfilePicture, this.hashtags, this.textPostForm.controls.post.value, this.textPostForm.controls.title.value) : null\">\n\n          <ion-list class=\"line-input\">\n            <ion-label>Title</ion-label>\n            <ion-item>\n              <ion-input\n              #titleChars\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              maxlength=\"100\"\n              formControlName=\"title\"\n              placeholder=\"Title\"></ion-input>\n            </ion-item>\n            <ion-label>Hashtags</ion-label>\n            <h5>Please seperate each tag with a comma ( , ). You can add up to 5 hashtags.</h5>\n            <div class=\"hashtag\" *ngFor=\"let i = index; let tag of hashtags\">\n              <p>{{tag}}</p>\n              <img (click)=\"deleteTag(i)\" src=\"../../../../assets/icon/close-icon.svg\" alt=\"\" srcset=\"\">\n            </div>\n            <ion-item>\n              <ion-input\n              #hashtagRef\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              maxlength=\"100\"\n              clearInput=\"true\"\n              (keydown)=\"addHashTag($event)\"\n              formControlName=\"hashtags\"\n              placeholder=\"Type tag then press Enter\">#</ion-input>\n            </ion-item>\n            <!-- <p class=\"char-limit\">{{titleChars.value.length}} / 100 character limit</p> -->\n\n            <ion-label>Post</ion-label>\n            <h5>Keep your content clean. There is a filter for profane language. Administrative action will be taken against posts with too much profanity.</h5>\n              <ion-item style=\"height: auto;\">\n                <ion-textarea\n                  #postChars\n                  rows=\"10\"\n                  auto-grow=\"true\"\n                  spellcheck=\"true\"\n                  maxlength=\"1000\"\n                  formControlName=\"post\"\n                  placeholder=\"What do you have to say?\"\n                  (keydown.control.enter)=\"textPostForm.value.textPost.length > 0 ? post(this.hashtags, this.creatorName, this.creatorEmail, this.creatorProfilePicture, this.textPostForm.value.textPost, this.textPostForm.value.title) : null\">\n                </ion-textarea>\n              </ion-item>\n              <p class=\"char-limit\">{{postChars.value.length}} / 3000 character limit</p>\n             <div class=\"ion-text-center\">\n              <ion-button\n              class=\"orange-button\"\n              type=\"submit\">\n                Submit\n              </ion-button>\n             </div>\n            </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_posts_add-post_add-post_module_ts.js.map