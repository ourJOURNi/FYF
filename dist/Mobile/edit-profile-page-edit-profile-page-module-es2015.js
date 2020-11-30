(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-page-edit-profile-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile-page/edit-profile-page.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile-page/edit-profile-page.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n      <ion-title slot=\"end\">Edit Profile</ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Desktop Header - Edit Profile Head w./ Back Button -->\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"3\" size=\"2\">\n        <h1>Edit Profile</h1>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" push=\"2.1\" size=\"2\">\n        <ion-button class=\"blue-button\"  (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile -->\n    <ion-row class=\"ion-justify-content-center ion-hide-lg-up\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n          <ion-list>\n              <ion-item detail=\"true\" lines=\"none\" (click)=\"changeEmail()\">\n                <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n                <ion-label>Change Email</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeAbout()\">\n                <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n                <ion-label>Change About Description</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"changePassword()\">\n                <ion-icon name=\"help\" slot=\"start\"></ion-icon>\n                <ion-label>Change Password</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"changePhoneNumber()\">\n                <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n                <ion-label>Change Phone Number</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeSchool()\">\n                <ion-icon name=\"school\" slot=\"start\"></ion-icon>\n                <ion-label>Change School/Grade</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeProfilePicture()\">\n                <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n                <ion-label>Change Profile Picture</ion-label>\n              </ion-item>\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"updateResume()\">\n                <ion-icon name=\"document\" slot=\"start\"></ion-icon>\n                <ion-label>View/Update Resume</ion-label>\n              </ion-item >\n              <ion-item detail=\"true\" lines=\"none\"   (click)=\"logout()\">\n                <ion-icon name=\"arrow-round-back\" color=\"danger\" slot=\"start\"></ion-icon>\n                <ion-label>Logout</ion-label>\n              </ion-item>\n            </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <!-- Desktop -->\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col class=\"edit-profile-desktop\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"10\">\n              <ion-list>\n                <ion-item detail=\"true\" lines=\"none\" (click)=\"changeEmail()\">\n                  <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n                  <ion-label>Change Email</ion-label>\n                </ion-item>\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeAbout()\">\n                  <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n                  <ion-label>Change About Description</ion-label>\n                </ion-item>\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"changePassword()\">\n                  <ion-icon name=\"help\" slot=\"start\"></ion-icon>\n                  <ion-label>Change Password</ion-label>\n                </ion-item>\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeSchool()\">\n                  <ion-icon name=\"school\" slot=\"start\"></ion-icon>\n                  <ion-label>Change School/Grade</ion-label>\n                </ion-item>\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"changeProfilePicture()\">\n                  <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n                  <ion-label>Change Profile Picture</ion-label>\n                </ion-item>\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"updateResume()\">\n                  <ion-icon name=\"document\" slot=\"start\"></ion-icon>\n                  <ion-label>View/Update Resume</ion-label>\n                </ion-item >\n                <ion-item detail=\"true\" lines=\"none\"   (click)=\"logout()\">\n                  <ion-icon name=\"arrow-round-back\" color=\"danger\" slot=\"start\"></ion-icon>\n                  <ion-label>Logout</ion-label>\n                </ion-item>\n            </ion-list>\n            </ion-col>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/profile/edit-profile-page/edit-profile-page-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EditProfilePagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePagePageRoutingModule", function() { return EditProfilePagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile-page.page */ "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts");




const routes = [
    {
        path: '',
        component: _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePagePage"]
    }
];
let EditProfilePagePageRoutingModule = class EditProfilePagePageRoutingModule {
};
EditProfilePagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/edit-profile-page/edit-profile-page.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EditProfilePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePagePageModule", function() { return EditProfilePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-page-routing.module */ "./src/app/pages/profile/edit-profile-page/edit-profile-page-routing.module.ts");
/* harmony import */ var _edit_profile_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile-page.page */ "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts");







let EditProfilePagePageModule = class EditProfilePagePageModule {
};
EditProfilePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePagePageRoutingModule"]
        ],
        declarations: [_edit_profile_page_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePagePage"]]
    })
], EditProfilePagePageModule);



/***/ }),

/***/ "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blue-button {\n  -webkit-animation: none;\n          animation: none;\n  opacity: unset;\n}\n\nion-item {\n  --min-height: 65px;\n  opacity: 0;\n  -webkit-animation: item-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n          animation: item-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n  cursor: pointer;\n}\n\nion-item ion-icon {\n  color: #005191;\n  font-size: 1.4em;\n}\n\nion-item ion-label {\n  font-size: 1.2em;\n  color: #555;\n}\n\nion-item:nth-child(1) {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n\nion-item:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n\nion-item:nth-child(3) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n\nion-item:nth-child(4) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\nion-item:nth-child(5) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\nion-item:nth-child(6) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n\nion-item:nth-child(7) {\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n}\n\nion-item:nth-child(8) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n\nion-title {\n  margin: 0;\n}\n\n.edit-profile-desktop {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  padding: 20px 0 20px 0;\n  margin-bottom: 100px;\n}\n\n@-webkit-keyframes item-slide-right {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n\n@keyframes item-slide-right {\n  0% {\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9lZGl0LXByb2ZpbGUtcGFnZS9lZGl0LXByb2ZpbGUtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZWRpdC1wcm9maWxlLXBhZ2UvZWRpdC1wcm9maWxlLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUZBQUE7VUFBQSxpRkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FESUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDREY7O0FER0E7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDQUY7O0FERUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDRUY7O0FEQUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDR0Y7O0FEREE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDSUY7O0FERkE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDS0Y7O0FESEE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDTUY7O0FESEE7RUFDRSxTQUFBO0FDTUY7O0FESEE7RUFDRSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNNRjs7QURIQTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ01GO0VESEE7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ0tGO0FBQ0Y7O0FEYkE7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNNRjtFREhBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9lZGl0LXByb2ZpbGUtcGFnZS9lZGl0LXByb2ZpbGUtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZS1idXR0b24ge1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IHVuc2V0O1xufVxuXG5pb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogNjVweDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBpdGVtLXNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIGZvcndhcmRzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjMDA1MTkxO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6ICM1NTU7XG4gIH1cbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xufVxuaW9uLWl0ZW06bnRoLWNoaWxkKDgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuXG5pb24tdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5lZGl0LXByb2ZpbGUtZGVza3RvcCB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGl0ZW0tc2xpZGUtcmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcblxuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cblxuIiwiLmJsdWUtYnV0dG9uIHtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiB1bnNldDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDY1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaXRlbS1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSBmb3J3YXJkcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzAwNTE5MTtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjNTU1O1xufVxuXG5pb24taXRlbTpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbmlvbi1pdGVtOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG5pb24taXRlbTpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbmlvbi1pdGVtOm50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbn1cblxuaW9uLWl0ZW06bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5pb24taXRlbTpudGgtY2hpbGQoNykge1xuICBhbmltYXRpb24tZGVsYXk6IDAuN3M7XG59XG5cbmlvbi1pdGVtOm50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cblxuaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZWRpdC1wcm9maWxlLWRlc2t0b3Age1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuQGtleWZyYW1lcyBpdGVtLXNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/edit-profile-page/edit-profile-page.page.ts ***!
  \***************************************************************************/
/*! exports provided: EditProfilePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePagePage", function() { return EditProfilePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let EditProfilePagePage = class EditProfilePagePage {
    constructor(auth, profile, storage, router, toastController) {
        this.auth = auth;
        this.profile = profile;
        this.storage = storage;
        this.router = router;
        this.toastController = toastController;
        this.userObject = {
            fullName: '',
            about: '',
            city: '',
            state: '',
            zip: '',
            gender: '',
            dob: '',
            school: '',
            grade: '',
            profilePicture: '',
            resume: '',
            email: ''
        };
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/home/profile']);
    }
    changeEmail() {
        console.log('Navigating to Change Email Page');
        this.router.navigate(['/home/profile/change-email']);
    }
    changeAbout() {
        console.log('Navigating to Change About Page');
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/profile/change-about/', this.userObject.about]);
    }
    changePassword() {
        console.log('Navigating to Change Password Page');
        this.router.navigate(['/home/profile/change-password']);
    }
    changePhoneNumber() {
        console.log('Navigating to Change Phone Number Page');
        this.router.navigate(['/home/profile/change-phone', this.userObject.phone]);
    }
    changeSchool() {
        console.log('Navigating to Change School Page');
        this.router.navigate(['/home/profile/change-school', this.userObject.school, this.userObject.grade]);
    }
    changeProfilePicture() {
        console.log('Navigating to Change Profile Page');
        this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
    }
    updateResume() {
        console.log('Navigating to Change Resume Page');
        this.router.navigate(['/home/profile/view-resume']);
    }
    logout() {
        this.router.navigate(['/home/profile/logout']);
    }
};
EditProfilePagePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
EditProfilePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit-profile-page/edit-profile-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile-page.page.scss */ "./src/app/pages/profile/edit-profile-page/edit-profile-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], EditProfilePagePage);



/***/ })

}]);
//# sourceMappingURL=edit-profile-page-edit-profile-page-module-es2015.js.map