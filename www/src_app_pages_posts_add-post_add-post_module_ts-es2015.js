(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_posts_add-post_add-post_module_ts"],{

/***/ 26979:
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPostPageRoutingModule": function() { return /* binding */ AddPostPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPostPageModule": function() { return /* binding */ AddPostPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPostPage": function() { return /* binding */ AddPostPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_post_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-post.page.html */ 16217);
/* harmony import */ var _add_post_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-post.page.scss */ 10466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ 69166);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);









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
        template: _raw_loader_add_post_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_post_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController,
        src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder])
], AddPostPage);



/***/ }),

/***/ 10466:
/*!*********************************************************!*\
  !*** ./src/app/pages/posts/add-post/add-post.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blue-button-small {\n  --color: white;\n  --background: #0055a5;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\nh1 {\n  font-weight: 600;\n  font-size: 3em;\n  color: #46c9a3;\n  display: inline;\n}\n\nion-label {\n  font-size: 2em;\n  color: #0055a5;\n  font-weight: 600;\n}\n\nh5 {\n  font-size: 1em;\n  color: #222;\n  margin-bottom: 25px;\n}\n\n.hashtag {\n  background: #e1f0fc;\n  width: 300px;\n  padding: 0.1px 10px;\n  margin-bottom: 14px;\n  border-radius: 5px;\n  font-size: 1em;\n  color: #005191;\n}\n\n.hashtag p {\n  display: inline-block;\n}\n\n.hashtag img {\n  height: 20px;\n  float: right;\n  display: inline-block;\n  position: relative;\n  top: 14px;\n}\n\n.line-input > ion-item {\n  margin-bottom: 88px;\n}\n\n.char-limit {\n  position: relative;\n  top: -35px;\n  text-align: right;\n}\n\nion-title {\n  margin: 0;\n}\n\n.message {\n  font-size: 1.05em;\n  text-align: left;\n  font-weight: 500;\n  line-height: 1.5em;\n  color: #555;\n}\n\n.char-limit {\n  color: #e4405f;\n  margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 576px) {\n  .text-input {\n    box-shadow: none;\n    background: #edf3f8;\n  }\n}\n\n.item-interactive {\n  --border-width: 0px;\n  --show-full-highlight: 0;\n}\n\nh6 {\n  padding: 15px;\n  line-height: 35px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFJO0VBQ0UscUJBQUE7QUFFTjs7QUFDSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDTjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQUFGO0FBQ0Y7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxGIiwiZmlsZSI6ImFkZC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVlLWJ1dHRvbi1zbWFsbCB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiAjNDZjOWEzO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzAwNTVhNTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uaGFzaHRhZyB7XG4gIGJhY2tncm91bmQ6ICNlMWYwZmM7XG4gIHdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogMC4xcHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICMwMDUxOTE7XG5cbiAgICBwIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAxNHB4O1xuICAgIH1cbn1cblxuLmxpbmUtaW5wdXQgPiBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDg4cHg7XG59XG5cbi5jaGFyLWxpbWl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4uY2hhci1saW1pdCB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50ZXh0LWlucHV0IHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIH1cblxuICBpb24tdGV4dGFyZWEge1xuICAgIC8vIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gIH1cbn1cblxuLml0ZW0taW50ZXJhY3RpdmUge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLXNob3ctZnVsbC1oaWdobGlnaHQ6IDA7XG59XG5cbmg2IHtcbiAgcGFkZGluZzogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */");

/***/ }),

/***/ 16217:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/add-post/add-post.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Mobile Toolbar -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Add Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row class=\"header ion-hide-md-down ion-justify-content-center\"  style=\"margin: 4% 0% 1% 0%;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"6\" size-xl=\"6\">\n        <h1 style=\"\">New Post</h1>\n        <ion-button class=\"blue-button-small ion-float-right\"  (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"9\" size-lg=\"7\" size-xl=\"6\">\n        <!-- Mobile Text Header -->\n        <p class=\"message ion-hide-md-up\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n\n        <!-- Desktop Text Header -->\n        <p class=\"message ion-hide-md-down\">Please keep your content clean. In order to maintain a high standard of content, each post will have to be verified before they are added to the Posts feed. Happy posting, and be inspired!</p>\n        <hr style=\"border-top: #9993 solid 2px;\n        margin-bottom: 50px;\">\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <form [formGroup]=\"textPostForm\" (ngSubmit)=\"textPostForm.value.post.length > 0 ? post(this.creatorName, this.creatorEmail, this.creatorProfilePicture, this.hashtags, this.textPostForm.controls.post.value, this.textPostForm.controls.title.value) : null\">\n\n          <ion-list class=\"line-input\">\n            <ion-label>Title</ion-label>\n            <ion-item>\n              <ion-input\n              #titleChars\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              maxlength=\"100\"\n              formControlName=\"title\"\n              placeholder=\"Title\"></ion-input>\n            </ion-item>\n            <ion-label>Hashtags</ion-label>\n            <h5>Please seperate each tag with a comma ( , ). You can add up to 5 hashtags.</h5>\n            <div class=\"hashtag\" *ngFor=\"let i = index; let tag of hashtags\">\n              <p>{{tag}}</p>\n              <img (click)=\"deleteTag(i)\" src=\"../../../../assets/icon/close-icon.svg\" alt=\"\" srcset=\"\">\n            </div>\n            <ion-item>\n              <ion-input\n              #hashtagRef\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              maxlength=\"100\"\n              clearInput=\"true\"\n              (keydown)=\"addHashTag($event)\"\n              formControlName=\"hashtags\"\n              placeholder=\"Type tag then press Enter\">#</ion-input>\n            </ion-item>\n            <!-- <p class=\"char-limit\">{{titleChars.value.length}} / 100 character limit</p> -->\n\n            <ion-label>Post</ion-label>\n            <h5>Keep your content clean. There is a filter for profane language. Administrative action will be taken against posts with too much profanity.</h5>\n              <ion-item style=\"height: auto;\">\n                <ion-textarea\n                  #postChars\n                  rows=\"10\"\n                  auto-grow=\"true\"\n                  spellcheck=\"true\"\n                  maxlength=\"1000\"\n                  formControlName=\"post\"\n                  placeholder=\"What do you have to say?\"\n                  (keydown.control.enter)=\"textPostForm.value.textPost.length > 0 ? post(this.hashtags, this.creatorName, this.creatorEmail, this.creatorProfilePicture, this.textPostForm.value.textPost, this.textPostForm.value.title) : null\">\n                </ion-textarea>\n              </ion-item>\n              <p class=\"char-limit\">{{postChars.value.length}} / 3000 character limit</p>\n             <div class=\"ion-text-center\">\n              <ion-button\n              class=\"orange-button\"\n              type=\"submit\">\n                Submit\n              </ion-button>\n             </div>\n            </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_posts_add-post_add-post_module_ts-es2015.js.map