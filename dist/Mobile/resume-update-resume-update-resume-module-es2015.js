(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resume-update-resume-update-resume-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/update-resume/update-resume.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/update-resume/update-resume.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Update Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.8\" size=\"2.5\">\n        <h1>Update Resume</h1>\n      </ion-col>\n      <ion-col push=\"2.5\" size=\"2\">\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"6\">\n        <hr style=\"background: #666;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n        <!-- Need to express to User formats that are acceptable -->\n        <!-- pdf, ect -->\n        <p class=\"text-header\">Please upload a resume from your phone</p>\n        <form\n        (ngSubmit)=\"uploadResume()\" id=\"changeResumeForm\">\n          <input\n            name=\"resume-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Resume\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!uploadedPhotoURL\">Update\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/profile/resume/update-resume/update-resume-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: UpdateResumePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResumePageRoutingModule", function() { return UpdateResumePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _update_resume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-resume.page */ "./src/app/pages/profile/resume/update-resume/update-resume.page.ts");




const routes = [
    {
        path: '',
        component: _update_resume_page__WEBPACK_IMPORTED_MODULE_3__["UpdateResumePage"]
    }
];
let UpdateResumePageRoutingModule = class UpdateResumePageRoutingModule {
};
UpdateResumePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdateResumePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/resume/update-resume/update-resume.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume.module.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResumePageModule", function() { return UpdateResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _update_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-resume-routing.module */ "./src/app/pages/profile/resume/update-resume/update-resume-routing.module.ts");
/* harmony import */ var _update_resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-resume.page */ "./src/app/pages/profile/resume/update-resume/update-resume.page.ts");







let UpdateResumePageModule = class UpdateResumePageModule {
};
UpdateResumePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_resume_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateResumePageRoutingModule"]
        ],
        declarations: [_update_resume_page__WEBPACK_IMPORTED_MODULE_6__["UpdateResumePage"]]
    })
], UpdateResumePageModule);



/***/ }),

/***/ "./src/app/pages/profile/resume/update-resume/update-resume.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin: 0;\n}\n\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJyby9EZXNrdG9wL1VuaXRlZC1XYXkvTW9iaWxlL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9yZXN1bWUvdXBkYXRlLXJlc3VtZS91cGRhdGUtcmVzdW1lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9yZXN1bWUvdXBkYXRlLXJlc3VtZS91cGRhdGUtcmVzdW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURJRTtFQUNFLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Jlc3VtZS91cGRhdGUtcmVzdW1lL3VwZGF0ZS1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgICB3aWR0aDogdW5zZXQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDY3MmM0LCAjMDA1MTkxKTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgfVxuXG4gIGlucHV0W3R5cGU9ZmlsZV06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiIsImlvbi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm9yYW5nZS1idXR0b24ge1xuICB3aWR0aDogdW5zZXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6ICMwMDUxOTEgMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/resume/update-resume/update-resume.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume.page.ts ***!
  \**************************************************************************/
/*! exports provided: UpdateResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResumePage", function() { return UpdateResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_resume_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/resume.service */ "./src/app/services/resume.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let UpdateResumePage = class UpdateResumePage {
    constructor(resume, router, profile, alert, toast, loading) {
        this.resume = resume;
        this.router = router;
        this.profile = profile;
        this.alert = alert;
        this.toast = toast;
        this.loading = loading;
        this.userProPicUrl = this.profile.resume.getValue();
        this.awsPrefix = this.userProPicUrl.slice(-51);
    }
    ngOnInit() {
        this.profile.getUserDetails()
            .subscribe(data => {
            this.userEmail = data['email'];
            console.log(this.userEmail);
        });
    }
    back() {
        this.router.navigate(['/home/profile/view-resume']);
    }
    getFormData(event) {
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'changeResumeForm') {
                console.log('Got Form: ' + form);
                this.formData = new FormData(form);
                this.uploadedResume = true;
            }
        });
        console.log(this.formData);
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            // convert image file to base64 string
            this.uploadedPhotoURL = reader.result;
        }, false);
        if (formElement) {
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    uploadResume() {
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'changeResumeForm') {
                console.log('Got Form: ' + form);
                this.formData = new FormData(form);
                this.formData.append('oldResumeKey', this.awsPrefix);
                this.formData.append('email', this.userEmail);
            }
        });
        this.resume.changeResume(this.formData).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(data);
            let newResume = data['objectUrl'];
            console.log(newResume);
            yield this.presentLoading();
            yield this.profile.resume.next(newResume);
            yield this.presentToast();
            yield this.router.navigate(['/home/profile/view-resume']);
        }));
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Your Resume has been changed',
                animated: true,
                cssClass: 'updated-toast',
                duration: 2000
            });
            toast.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                cssClass: 'my-custom-class',
                message: 'Updating Resume...',
                duration: 1000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
UpdateResumePage.ctorParameters = () => [
    { type: _services_resume_service__WEBPACK_IMPORTED_MODULE_4__["ResumeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
UpdateResumePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-resume',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-resume.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/resume/update-resume/update-resume.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update-resume.page.scss */ "./src/app/pages/profile/resume/update-resume/update-resume.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_resume_service__WEBPACK_IMPORTED_MODULE_4__["ResumeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], UpdateResumePage);



/***/ }),

/***/ "./src/app/services/resume.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/resume.service.ts ***!
  \********************************************/
/*! exports provided: ResumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeService", function() { return ResumeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ResumeService = class ResumeService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    resumeUpload(resumeForm) {
        console.log('resume uploading');
        return this.http.post(`${this.BACKEND_URL}/api/resume/upload-resume`, resumeForm);
    }
    changeResume(imageForm) {
        console.log(imageForm);
        return this.http.post(`${this.BACKEND_URL}/api/resume/change-resume`, imageForm);
    }
};
ResumeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ResumeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ResumeService);



/***/ })

}]);
//# sourceMappingURL=resume-update-resume-update-resume-module-es2015.js.map