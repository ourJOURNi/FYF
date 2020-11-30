(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-posts-posts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/read-more/read-more.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/read-more/read-more.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  [class.collapsed]=\"isCollapsed\"\n  [ngClass]=\"{'isCollapsed': !isCollapsed}\"\n  class=\"pull-left read-more\">\n  <ng-content></ng-content>\n</div>\n\n<a (click)=\"isCollapsed = !isCollapsed\" [hidden]=\"dataLength\" class=\"pull-right\">\n  <p class=\"collapsed-text\" *ngIf=\"isCollapsed\">Read More</p>\n  <p class=\"not-collapsed-text\" *ngIf=\"!isCollapsed\">Show Less</p>\n</a>\n\n<div class=\"cb\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Mobile Toolbar -->\n<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>\n        <img class=\"profile-picture\" src=\"{{userProfilePicture}}\" alt=\"\">\n        {{userFullName}}\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"following()\">\n        <ion-icon  size=\"large\" src=\"../../assets/icons/following-icon.svg\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button (click)=\"chat()\">\n        <ion-icon size=\"medium\" src=\"../../assets/icons/chat-box-icon.svg\"></ion-icon>\n      </ion-button> -->\n      <ion-button (click)=\"notifications()\">\n        <ion-icon size=\"large\" src=\"../../assets/icons/notifications-icon.svg\"></ion-icon>\n        <span style=\"background: none; color: #e4405f; height: 15px; width: 15px; border-radius: 100px; position: relative; font-size: 1.5em;\">{{notificationsLength}}</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-toolbar>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col push-xs=\".45\"  push-sm=\"0.35\"  size-xs=\"1.2\">\n          <img src=\"{{userProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 28px; width: 28px;\">\n        </ion-col>\n        <ion-col push-sm=\".5\" size=\"7\">\n          <p id=\"username\">{{userFullName}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab class=\"ion-hide-lg-up\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button id=\"add-post-button\" (click)=\"addPost()\">\n      <ion-icon name=\"add\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Desktop -->\n  <ion-grid class=\"ion-hide-md-down\">\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- Posts -->\n      <ion-col size=\"7.5\" style=\"margin-top: 2%;\">\n        <ion-row *ngFor=\"let post of allPosts\" class=\"post ion-justify-content-center\">\n\n          <!-- Profile Heder -->\n          <ion-col size=\"11\">\n            <ion-row class=\"ion-align-items-center\">\n            <!-- Profile Picture -->\n            <ion-col push=\"0.2\" size=\"1\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n              <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 40px; width: 40px;\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col size=\"4\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n              <h6 style=\"font-size: 1em; font-weight: 500;\">{{post.creatorName}}</h6>\n            </ion-col>\n\n            <!-- Date -->\n            <ion-col class=\"ion-float-right\" push-lg=\"4.3\" size=\"3\">\n                <h6 style=\"opacity: 0.4; font-size: 0.8em;\">{{post.date}}</h6>\n            </ion-col>\n\n          </ion-row>\n          </ion-col>\n\n          <!-- (click)=\"postPage(post)\" -->\n          <!-- Post Content -->\n          <ion-col size=\"11\">\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- 1080x1350 -->\n              <ion-col size=\"11.3\">\n               <p class=\"post-title\">{{post.title}}</p>\n              </ion-col>\n           </ion-row>\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- 1080x1350 -->\n              <ion-col size=\"11.3\">\n                <app-read-more [dataLength]=\"dataLength\">\n                  {{post.post}}\n                </app-read-more>\n               <!-- <p class=\"post-content\">{{post.post}}</p> -->\n              </ion-col>\n           </ion-row>\n          </ion-col>\n\n          <!-- Comment -->\n          <ion-col size=\"11\">\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"11.8\">\n                <ion-item lines=\"none\">\n                 <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                   <ion-textarea\n                      class=\"comment-input\"\n                      autogrow=\"true\"\n                      autocapitalize=\"true\"\n                      rows=\"5\"\n                      spellcheck=\"true\"\n                      wrap=\"soft\"\n                      type=\"text\"\n                      placeholder=\"Add a Comment\" formControlName=\"comment\">\n                    </ion-textarea>\n                    <!-- Comment Post Button -->\n                    <ion-button\n                      class=\"comment-post-button\"\n                      *ngIf=\"!commentForm\n                              .get('comment')\n                              .pristine && commentForm.value.comment.length >= 3\"\n                        name=\"send\"\n                        type=\"submit\">Post\n                    </ion-button>\n                 </form>\n\n        </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Post Buttons -->\n          <ion-col size=\"11\">\n            <ion-row>\n              <!-- Upvote & Downvote-->\n              <ion-col push=\"0\" size=\"4.7\">\n                <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n              </ion-col>\n\n              <!-- Follow & Comment -->\n              <ion-col push=\"0.8\" size=\"6\">\n                <app-follow-comment-buttons [isUser]=\"post.isUser\" [postID]=\"post._id\"></app-follow-comment-buttons>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n\n        </ion-row>\n      </ion-col>\n\n      <!-- Sidebar with User Info -->\n      <ion-col push=\"0.5\" size=\"2\" style=\"margin-top: 2%;\">\n        <ion-row class=\"user-details\" style=\"position: fixed;\">\n          <ion-col size=\"12\">\n            <ion-row>\n              <ion-col size-lg=\"2.8\" size-xl=\"2.1\">\n                <img src=\"{{userProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 65px; width: 65px;\">\n              </ion-col>\n              <ion-col size=\"6\">\n                <h6 style=\"font-size: 1.2em; font-weight: 700; position: relative; left: 10px;\">{{userFullName}}</h6>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button class=\"blue-button following-desktop-button\" (click)=\"following()\">\n              Following ({{followedPostCount}})\n            </ion-button>\n            <ion-button class=\"my-post-button\"  (click)=\"myPosts(this.userEmail)\">\n              My Posts\n            </ion-button>\n            <ion-button class=\"add-button\"  (click)=\"addPost()\">\n              Add Post\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Mobile -->\n  <ion-grid class=\"ion-hide-lg-up\">\n\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 1%;\">\n\n      <!-- Posts -->\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"10\" pull-lg=\"2\">\n        <ion-row *ngFor=\"let post of allPosts\" style=\"margin-top: 1%;\" class=\"post ion-justify-content-center\">\n\n          <!-- Profile Header -->\n          <ion-col size=\"11\">\n            <ion-row style=\"position: relative; right: 5px; top: -4px;\" >\n            <!-- Profile Picture -->\n            <ion-col size=\"1.3\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n              <img src=\"{{post.creatorProfilePicture}}\" style=\"background: #999; border-radius: 100px; height: 35xpx; width: 35px;\">\n            </ion-col>\n\n            <!-- Post Creator's Name -->\n            <ion-col size=\"10\" (click)=\"thirdPersonProfileModal(post.creatorEmail, post.creatorName)\">\n              <p class=\"post-name\">{{post.creatorName}}</p>\n              <p class=\"post-date\">{{post.date}}</p>\n              <hr class=\"header-hr\">\n            </ion-col>\n\n          </ion-row>\n          </ion-col>\n\n          <!-- Post Content -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- (click)=\"postPage(post)\"  -->\n              <!-- 1080x1350 -->\n              <ion-col size=\"11\">\n                <p class=\"post-title\">{{post.title}}</p>\n                <p class=\"post-content\">{{post.post}}</p>\n              </ion-col>\n          </ion-row>\n          </ion-col>\n\n          <!-- Comment -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\" style=\"position: relative; right: 0px; top: -4px;\" >\n              <ion-col size=\"12\">\n                <ion-item  style=\"height: auto;\" lines=\"none\">\n                <form (ngSubmit)=\"comment(post._id, this.userFullName, this.userEmail, this.userProfilePicture, this.commentForm.value)\" [formGroup]=\"commentForm\">\n                  <ion-textarea\n                  class=\"comment-input-mobile\"\n                  autogrow=\"true\"\n                  autocapitalize=\"true\"\n                  rows=\"5\"\n                  spellcheck=\"true\"\n                  wrap=\"soft\"\n                  type=\"text\"\n                  placeholder=\"Add a Comment\" formControlName=\"comment\">\n                </ion-textarea>\n                <!-- Comment Post Button -->\n                <ion-button\n                  style=\"float: right;\"\n                  class=\"comment-post-button\"\n                  *ngIf=\"!commentForm\n                          .get('comment')\n                          .pristine && commentForm.value.comment.length >= 3\"\n                    name=\"send\"\n                    type=\"submit\">Post\n                </ion-button>\n                </form>\n\n        </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <!-- Post Buttons -->\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-center\">\n              <!-- Upvote & Downvote-->\n              <ion-col pull=\"1\" size=\"4\" size-xs=\"4.4\">\n                <app-up-down-vote-buttons [postID]=\"post._id\"></app-up-down-vote-buttons>\n              </ion-col>\n\n              <!-- Follow & Comment -->\n              <ion-col push=\"1\" size=\"6\" class=\"ion-float-right\">\n                <app-follow-comment-buttons [postID]=\"post._id\"></app-follow-comment-buttons>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/components/read-more/read-more.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/read-more/read-more.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.collapsed {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  display: -webkit-inline-box;\n  display: inline-block;\n  font-size: 1.3em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n\n.collapsed-text {\n  color: #005191;\n  font-size: 1.3em;\n  opacity: 0.5;\n}\n\n.not-collapsed-text {\n  color: #e4405f;\n  font-size: 1.3em;\n  background: #eee;\n}\n\n.read-more {\n  margin-top: -3px;\n  line-height: 1.4;\n  font-size: 1.3em;\n}\n\n.isCollapsed {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  width: 100%;\n}\n\n.cb {\n  clear: both;\n  height: 0;\n}\n\n.pull-right {\n  float: right;\n}\n\n.pull-left {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9yZWFkLW1vcmUvcmVhZC1tb3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQVZVO0VBV1YsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsY0FmSztFQWdCTCxnQkFuQlU7RUFvQlYsWUFBQTtBQ0xGOztBRE9BO0VBQ0UsY0FuQkk7RUFvQkosZ0JBeEJVO0VBMEJWLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBaENVO0FDMkJaOztBRE9BO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFdBQUE7QUNKRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDSEY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FESUE7RUFDRSxXQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1zaXplOiAxLjNlbTtcbiRsaW5lLWhlaWdodDogMS41O1xuJGxpbmVzLXRvLXNob3c6IDE7XG4kYmx1ZTogIzAwNTE5MTtcbiRyZWQ6ICNlNDQwNWY7XG5cbmRpdi5jb2xsYXBzZWQge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2xsYXBzZWQtdGV4dCB7XG4gIGNvbG9yOiAkYmx1ZTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBvcGFjaXR5OiAwLjU7XG59XG4ubm90LWNvbGxhcHNlZC10ZXh0IHtcbiAgY29sb3I6ICRyZWQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcblxuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4ucmVhZC1tb3Jle1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG59XG4uaXNDb2xsYXBzZWQge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYiB7XG4gIGNsZWFyOiBib3RoO1xuICBoZWlnaHQ6IDA7XG59XG4ucHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuXG4iLCJkaXYuY29sbGFwc2VkIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbGxhcHNlZC10ZXh0IHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm5vdC1jb2xsYXBzZWQtdGV4dCB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4ucmVhZC1tb3JlIHtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmlzQ29sbGFwc2VkIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYiB7XG4gIGNsZWFyOiBib3RoO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHVsbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/read-more/read-more.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/read-more/read-more.component.ts ***!
  \*************************************************************/
/*! exports provided: ReadMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadMoreComponent", function() { return ReadMoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReadMoreComponent = class ReadMoreComponent {
    constructor() {
        this.isCollapsed = true;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ReadMoreComponent.prototype, "dataLength", void 0);
ReadMoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-read-more',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./read-more.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/read-more/read-more.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./read-more.component.scss */ "./src/app/components/read-more/read-more.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReadMoreComponent);



/***/ }),

/***/ "./src/app/pages/posts/post-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/posts/post-routing.module.ts ***!
  \****************************************************/
/*! exports provided: PostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRoutingModule", function() { return PostRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.page */ "./src/app/pages/posts/posts.page.ts");




const routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_3__["PostsPage"]
    },
    {
        path: 'add-post',
        loadChildren: () => __webpack_require__.e(/*! import() | add-post-add-post-module */ "add-post-add-post-module").then(__webpack_require__.bind(null, /*! ./add-post/add-post.module */ "./src/app/pages/posts/add-post/add-post.module.ts")).then(m => m.AddPostPageModule)
    },
    {
        path: 'post-page/:_id',
        loadChildren: () => Promise.all(/*! import() | post-page-post-page-module */[__webpack_require__.e("default~modals-replies-page-replies-page-module~post-page-post-page-module"), __webpack_require__.e("common"), __webpack_require__.e("post-page-post-page-module")]).then(__webpack_require__.bind(null, /*! ./post-page/post-page.module */ "./src/app/pages/posts/post-page/post-page.module.ts")).then(m => m.PostPagePageModule)
    },
    {
        path: 'following',
        loadChildren: () => __webpack_require__.e(/*! import() | following-following-module */ "following-following-module").then(__webpack_require__.bind(null, /*! ./following/following.module */ "./src/app/pages/posts/following/following.module.ts")).then(m => m.FollowingPageModule)
    },
    {
        path: 'my-posts/:email',
        loadChildren: () => __webpack_require__.e(/*! import() | my-posts-my-posts-module */ "my-posts-my-posts-module").then(__webpack_require__.bind(null, /*! ./my-posts/my-posts.module */ "./src/app/pages/posts/my-posts/my-posts.module.ts")).then(m => m.MyPostsPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => __webpack_require__.e(/*! import() | notifications-notifications-module */ "notifications-notifications-module").then(__webpack_require__.bind(null, /*! ./notifications/notifications.module */ "./src/app/pages/posts/notifications/notifications.module.ts")).then(m => m.NotificationsPageModule)
    },
    {
        path: 'student-chat',
        loadChildren: () => Promise.all(/*! import() | student-chat-student-chat-module */[__webpack_require__.e("common"), __webpack_require__.e("student-chat-student-chat-module")]).then(__webpack_require__.bind(null, /*! ./student-chat/student-chat.module */ "./src/app/pages/posts/student-chat/student-chat.module.ts")).then(m => m.StudentChatPageModule)
    }
];
let PostRoutingModule = class PostRoutingModule {
};
PostRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PostRoutingModule);



/***/ }),

/***/ "./src/app/pages/posts/posts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.module.ts ***!
  \*********************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts.page */ "./src/app/pages/posts/posts.page.ts");
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-routing.module */ "./src/app/pages/posts/post-routing.module.ts");
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/custom-component.module */ "./src/app/components/custom-component.module.ts");
/* harmony import */ var src_app_modals_third_person_profile_third_person_profile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/third-person-profile/third-person-profile.module */ "./src/app/modals/third-person-profile/third-person-profile.module.ts");
/* harmony import */ var _components_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/read-more/read-more.component */ "./src/app/components/read-more/read-more.component.ts");










let PostPageModule = class PostPageModule {
};
PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _post_routing_module__WEBPACK_IMPORTED_MODULE_6__["PostRoutingModule"],
            src_app_modals_third_person_profile_third_person_profile_module__WEBPACK_IMPORTED_MODULE_8__["ThirdPersonProfilePageModule"],
            _components_read_more_read_more_component__WEBPACK_IMPORTED_MODULE_9__["ReadMoreComponent"],
        ],
        declarations: [
            _posts_page__WEBPACK_IMPORTED_MODULE_5__["PostsPage"]
        ]
    })
], PostPageModule);



/***/ }),

/***/ "./src/app/pages/posts/posts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-picture {\n  height: 28px;\n  width: 28px;\n  border-radius: 100px;\n  margin-right: 5px;\n  display: inline-block;\n  position: relative;\n  top: 5px;\n}\n\n.header-hr {\n  border-top: 1px solid #666;\n  opacity: 0.5;\n  margin-top: 10px;\n}\n\n.post {\n  padding: 10px 0;\n  margin-bottom: 80px;\n  border-radius: 5px;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  font-size: 1.2em;\n  line-height: 35px;\n  background: white;\n}\n\n.post-title {\n  font-weight: 800;\n  color: #005191;\n  position: relative;\n  left: 5px;\n  margin: 0;\n  line-height: 25px;\n}\n\n.post-name {\n  font-size: 0.9em;\n  font-weight: 500;\n  color: #666;\n  margin: 0;\n  line-height: 18px;\n}\n\n.post-date {\n  opacity: 0.4;\n  font-size: 0.5em;\n  margin: 0;\n  line-height: 18px;\n}\n\nion-content {\n  background: #edf3f8;\n}\n\n@media screen and (max-width: 744px) {\n  .post {\n    position: relative;\n    top: 0px;\n  }\n}\n\n.post-content {\n  font-size: 0.9em;\n  position: relative;\n  top: 20px;\n  margin: 0;\n}\n\n.user-details {\n  position: fixed;\n  background: none;\n  height: 200px;\n}\n\n#username {\n  color: #005191;\n  font-size: 0.8em;\n  font-weight: 600;\n  position: relative;\n  left: 0px;\n  opacity: 0;\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\nion-header ion-toolbar {\n  --background: #edf3f8;\n  border-bottom: 1px solid #005191;\n}\n\nion-header p {\n  color: #000;\n  font-size: 1.2em;\n}\n\nion-item {\n  --backsground: none;\n}\n\n.following-mobile-button {\n  display: inline-block;\n  opacity: 1;\n  --background: #005191;\n  --color: white;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  width: 40px;\n  height: 40px;\n  font-size: 0.6em;\n  font-weight: 600;\n  position: relative;\n  right: 15px;\n}\n\n@media screen and (max-width: 470px) {\n  .following-mobile-button {\n    position: relative;\n    right: 35px;\n  }\n}\n\n.following-desktop-button {\n  font-weight: 800;\n  height: 36px;\n  width: 150px;\n  margin-top: 20px;\n  font-size: 0.7em;\n  -webkit-transition: 0s;\n  transition: 0s;\n}\n\n.blue-button {\n  height: 36px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\n.add-button {\n  --color: white;\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#5ad8b2, #2e8f72);\n  font-weight: 800;\n  display: block;\n  width: 150px;\n  margin-top: 20px;\n  font-size: 0.7em;\n}\n\n.my-post-button {\n  --background: #e6e6e6;\n  --background-hover: #999;\n  --color: #888;\n  font-weight: 800;\n  display: block;\n  width: 150px;\n  margin-top: 20px;\n  font-size: 0.7em;\n}\n\n.my-post-button:hover {\n  --color: white;\n}\n\nform {\n  width: 100%;\n}\n\n.comment {\n  border: 1px solid #005191;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  padding-left: 10px;\n}\n\n.comment-post-button {\n  --background: linear-gradient(#5ad8b2, #40c59d);\n  --background-hover: linear-gradient(#5ad8b2, #2e8f72);\n  height: 40px;\n  margin-top: 0px;\n  border-radius: 5px;\n  opacity: 0;\n  width: 100%;\n  -webkit-transform: 0.5s;\n          transform: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.comment-input {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 10px 0 0px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  background: rgba(247, 248, 248, 0.5);\n  height: auto;\n  margin: 12px 0 4px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile {\n  background: rgba(247, 248, 248, 0.5);\n  height: 150px;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding-left: 10px;\n  border: 2px solid #005191;\n  border-radius: 2px;\n  -webkit-transition: 1s;\n  transition: 1s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input-mobile:focus {\n  background: rgba(247, 248, 248, 0.5);\n  height: 100px;\n  margin: 30px 0 150px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  -webkit-transition: 1s;\n  transition: 1s;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-fab-button {\n  --background: #1baf88;\n  --color-focused: white;\n  --color-hover: white;\n  --color-activated: white;\n  position: relative;\n  bottom: 50px;\n  right: 10px;\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes username-slide-in {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes username-slide-in {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes add-post-button-tap {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes add-post-button-tap {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQWMsV0FBQTtFQUNkLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0VGOztBRENBO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFBYSxTQUFBO0VBQ2IsaUJBQUE7QUNHRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFBVyxpQkFBQTtBQ0diOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxRQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUZBQUE7VUFBQSx5RUFBQTtBQ0VGOztBRElFO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtBQ0RKOztBRElFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDRko7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VDSEY7QUFDRjs7QURPQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFBQSxjQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSwrQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtFQUNBLGlGQUFBO1VBQUEseUVBQUE7QUNMRjs7QURRQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0xGOztBRFFBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDTEY7O0FEUUE7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFBQSxjQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0xGOztBRFFBO0VBQ0Usb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUFBLGNBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDTEY7O0FEU0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNORjs7QURTQTtFQUNFO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLFVBQUE7RUNORjtFRFNBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNQRjtBQUNGOztBREZBO0VBQ0U7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0EsVUFBQTtFQ05GO0VEU0E7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0EsVUFBQTtFQ1BGO0FBQ0Y7O0FEVUE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNSRjtFRFdBO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtJQUNBLFVBQUE7RUNURjtBQUNGOztBRENBO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDUkY7RURXQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSxVQUFBO0VDVEY7QUFDRjs7QURZQTtFQUNFO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtFQ1ZGO0VEWUE7SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0VDVkY7RURZQTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxVQUFBO0VDVkY7QUFDRjs7QURBQTtFQUNFO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtFQ1ZGO0VEWUE7SUFDRSw2QkFBQTtZQUFBLHFCQUFBO0VDVkY7RURZQTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7SUFDQSxVQUFBO0VDVkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBpY3R1cmUge1xuICBoZWlnaHQ6IDI4cHg7IHdpZHRoOiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbn1cblxuLmhlYWRlci1ocntcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2NjY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBvc3Qge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5wb3N0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4ucG9zdC1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM2NjY7IG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5cbn1cblxuLnBvc3QtZGF0ZSB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgbWFyZ2luOiAwOyBsaW5lLWhlaWdodDogMThweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDRweCkge1xuICAucG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbi5wb3N0LWNvbnRlbnQge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgbWFyZ2luOiAwO1xuIH1cblxuLnVzZXItZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuI3VzZXJuYW1lIHtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG5cbmlvbi1oZWFkZXIge1xuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNlZGYzZjg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDUxOTE7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrc2dyb3VuZDogbm9uZTtcbn1cblxuLmZvbGxvd2luZy1tb2JpbGUtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQ6ICMwMDUxOTE7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzBweCkge1xuICAuZm9sbG93aW5nLW1vYmlsZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMzVweDtcbiAgfVxufVxuXG5cbi5mb2xsb3dpbmctZGVza3RvcC1idXR0b24ge1xuICBmb250LXdlaWdodDogODAwO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgdHJhbnNpdGlvbjogMHM7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIGhlaWdodDogMzZweDtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiB1bnNldDtcbn1cblxuLmFkZC1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzVhZDhiMiwgIzQwYzU5ZCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCM1YWQ4YjIsICMyZThmNzIpO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4ubXktcG9zdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzk5OTtcbiAgLS1jb2xvcjogIzg4ODtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLm15LXBvc3QtYnV0dG9uOmhvdmVyIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbW1lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbW1lbnQtcG9zdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjNDBjNTlkKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzVhZDhiMiwgIzJlOGY3Mik7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgZm9yd2FyZHM7XG59XG5cbi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTBweCAwIDBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTJweCAwIDRweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQtbW9iaWxlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDI0OCwgMjQ4LCAwLjUpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDMwcHggMCAxNTBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWNvbG9yLWZvY3VzZWQ6IHdoaXRlO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdXNlcm5hbWUtc2xpZGUtaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhZGQtcG9zdC1idXR0b24tdGFwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiLnByb2ZpbGUtcGljdHVyZSB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xufVxuXG4uaGVhZGVyLWhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2NjY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBvc3Qge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5wb3N0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICMwMDUxOTE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4ucG9zdC1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5wb3N0LWRhdGUge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2VkZjNmODtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ0cHgpIHtcbiAgLnBvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuLnBvc3QtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi51c2VyLWRldGFpbHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbiN1c2VybmFtZSB7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2VkZjNmODtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDUxOTE7XG59XG5pb24taGVhZGVyIHAge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tzZ3JvdW5kOiBub25lO1xufVxuXG4uZm9sbG93aW5nLW1vYmlsZS1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZDogIzAwNTE5MTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3MHB4KSB7XG4gIC5mb2xsb3dpbmctbW9iaWxlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICB9XG59XG4uZm9sbG93aW5nLWRlc2t0b3AtYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHRyYW5zaXRpb246IDBzO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgb3BhY2l0eTogdW5zZXQ7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1YWQ4YjIsICM0MGM1OWQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjNWFkOGIyLCAjMmU4ZjcyKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLm15LXBvc3QtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM5OTk7XG4gIC0tY29sb3I6ICM4ODg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5teS1wb3N0LWJ1dHRvbjpob3ZlciB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNTE5MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb21tZW50LXBvc3QtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzVhZDhiMiwgIzQwYzU5ZCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCM1YWQ4YjIsICMyZThmNzIpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xufVxuXG4uY29tbWVudC1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyNDgsIDI0OCwgMC41KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEwcHggMCAwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbW1lbnQtaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMnB4IDAgNHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMjBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA1MTkxO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY29tbWVudC1pbnB1dC1tb2JpbGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjQ4LCAyNDgsIDAuNSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMzBweCAwIDE1MHB4IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDUxOTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWJhZjg4O1xuICAtLWNvbG9yLWZvY3VzZWQ6IHdoaXRlO1xuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyB1c2VybmFtZS1zbGlkZS1pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYWRkLXBvc3QtYnV0dG9uLXRhcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/posts/posts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/posts/posts.page.ts ***!
  \*******************************************/
/*! exports provided: PostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPage", function() { return PostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ "./src/app/emitters/post-page-emitter.service.ts");
/* harmony import */ var src_app_modals_third_person_profile_third_person_profile_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/third-person-profile/third-person-profile.page */ "./src/app/modals/third-person-profile/third-person-profile.page.ts");
/* harmony import */ var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/student-chat.service */ "./src/app/services/student-chat.service.ts");
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/notifications.service */ "./src/app/services/notifications.service.ts");













let PostsPage = class PostsPage {
    constructor(router, modal, posts, profile, toast, formBuilder, postsEmitterService, studentChat, notificationsService) {
        this.router = router;
        this.modal = modal;
        this.posts = posts;
        this.profile = profile;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.postsEmitterService = postsEmitterService;
        this.studentChat = studentChat;
        this.notificationsService = notificationsService;
    }
    ngOnDestroy() {
        this.postsSub.unsubscribe();
        this.notificationsSub.unsubscribe();
        this.postsEmitterService.subsVar.unsubscribe();
        this.profileSub.unsubscribe();
        this.posts.followingSubject$.unsubscribe();
    }
    ngOnInit() {
        this.getUserInfo();
        this.getPosts();
        this.getFollowingPosts();
        // When Users updated their Profile Picture, Unfollow/Follow, Up/Downvote, or Comment on an individual
        if (this.postsEmitterService.subsVar === undefined) {
            this.postsEmitterService.subsVar = this.postsEmitterService.invokePostsPageRefresh.subscribe(() => {
                this.getPosts();
                this.getUserInfo();
            });
        }
        // To collect comment data
        this.commentForm = this.formBuilder.group({
            comment: ['']
        });
    }
    postPage(post) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/posts/post-page', post._id]);
    }
    getUserInfo() {
        this.postsSub = this.profile.getUserDetails().subscribe(details => {
            this.userEmail = details['email'];
            this.userProfilePicture = details['profilePicture'];
            this.userFullName = details['fullName'];
            this.followedPost = details['followedPost'];
            this.notificationsSub = this.notificationsService.notifications$.subscribe(notifications => {
                console.log(notifications.length);
                this.notificationsLength = notifications.length;
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
            this.studentChat.conversations$.next(Object.values(details['studentChat']).reverse());
        });
    }
    doRefresh(event) {
        this.getFollowingPosts();
        this.postsSub = this.posts.getPosts().subscribe(jobs => {
            this.allPosts = Object.values(jobs).reverse();
            for (const post of this.allPosts) {
                post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(post.date), {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.postsSub = this.posts.getPosts().subscribe(posts => {
                // console.log(posts);
                this.allPosts = Object.values(posts).reverse();
                this.posts.postsSubject$.next(this.allPosts);
                for (const post of this.allPosts) {
                    post.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(post.date), {
                        includeSeconds: true,
                        addSuffix: true
                    });
                }
            });
        });
    }
    addPost() {
        this.router.navigate(['/home/posts/add-post']);
    }
    myPosts(userEmail) {
        console.log('Going to my posts page');
        this.router.navigate(['/home/posts/my-posts', userEmail]);
    }
    following() {
        this.router.navigate(['/home/posts/following']);
    }
    chat() {
        this.router.navigate(['/home/posts/student-chat']);
    }
    notifications() {
        this.router.navigate(['/home/posts/notifications']);
    }
    comment(postID, userFullName, userEmail, userProfilePicture, comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                        postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(postComments.date), {
                            includeSeconds: true,
                            addSuffix: false
                        });
                    }
                    this.posts.commentsSubject$.next(post['comments'].reverse());
                    let postCreator = post['creatorEmail'];
                    console.log(newComment);
                    // this.userEmail = instigatingUser
                    // postCreator = recievingUser
                    this.notificationsService.
                        commentNotification(this.userEmail, postCreator, postID, newComment).subscribe();
                });
            });
            this.postsSub = this.posts.getPostInfo(postID).subscribe(post => {
                for (let postComments of post['comments']) {
                    postComments.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["formatDistanceToNow"])(new Date(postComments.date), {
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
    thirdPersonProfileModal(creatorEmail, creatorName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const thirdPersonProfileModalConfig = yield this.modal.create({
                component: src_app_modals_third_person_profile_third_person_profile_page__WEBPACK_IMPORTED_MODULE_9__["ThirdPersonProfilePage"],
                componentProps: {
                    creatorEmail,
                    creatorName
                },
                cssClass: 'third-person-profile-modal'
            });
            yield thirdPersonProfileModalConfig.present();
        });
    }
};
PostsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"] },
    { type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_10__["StudentChatService"] },
    { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_11__["NotificationsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"])
], PostsPage.prototype, "fabButton", void 0);
PostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.page.scss */ "./src/app/pages/posts/posts.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_8__["PostPageEmitterService"],
        src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_10__["StudentChatService"],
        src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_11__["NotificationsService"]])
], PostsPage);



/***/ })

}]);
//# sourceMappingURL=pages-posts-posts-module-es2015.js.map