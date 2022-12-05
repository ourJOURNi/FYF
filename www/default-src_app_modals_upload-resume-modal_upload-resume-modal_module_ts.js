"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_upload-resume-modal_upload-resume-modal_module_ts"],{

/***/ 2831:
/*!**********************************************************************************!*\
  !*** ./src/app/modals/upload-resume-modal/upload-resume-modal-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadResumeModalPageRoutingModule": () => (/* binding */ UploadResumeModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-resume-modal.page */ 84455);




const routes = [
    {
        path: '',
        component: _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_0__.UploadResumeModalPage
    }
];
let UploadResumeModalPageRoutingModule = class UploadResumeModalPageRoutingModule {
};
UploadResumeModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadResumeModalPageRoutingModule);



/***/ }),

/***/ 49969:
/*!**************************************************************************!*\
  !*** ./src/app/modals/upload-resume-modal/upload-resume-modal.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadResumeModalPageModule": () => (/* binding */ UploadResumeModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _upload_resume_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-resume-modal-routing.module */ 2831);
/* harmony import */ var _upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-resume-modal.page */ 84455);







let UploadResumeModalPageModule = class UploadResumeModalPageModule {
};
UploadResumeModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _upload_resume_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadResumeModalPageRoutingModule
        ],
        declarations: [_upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_1__.UploadResumeModalPage]
    })
], UploadResumeModalPageModule);



/***/ }),

/***/ 84455:
/*!************************************************************************!*\
  !*** ./src/app/modals/upload-resume-modal/upload-resume-modal.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadResumeModalPage": () => (/* binding */ UploadResumeModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _upload_resume_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-resume-modal.page.html?ngResource */ 78346);
/* harmony import */ var _upload_resume_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-resume-modal.page.scss?ngResource */ 35431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/resume.service */ 14153);
var _a, _b, _c, _d, _e, _f, _g;








let UploadResumeModalPage = class UploadResumeModalPage {
    constructor(resume, router, profile, alert, modal, toast, loading) {
        this.resume = resume;
        this.router = router;
        this.profile = profile;
        this.alert = alert;
        this.modal = modal;
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
    // Uploads Resume
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
        this.resume.changeResume(this.formData).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            let newResume = data['objectUrl'];
            console.log(newResume);
            yield this.presentLoading();
            yield this.profile.resume.next(newResume);
            yield this.presentToast();
        }));
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                cssClass: 'my-custom-class',
                message: 'Updating Resume...',
                duration: 1000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
            this.modal.dismiss();
        });
    }
    cancel() {
        this.modal.dismiss();
    }
};
UploadResumeModalPage.ctorParameters = () => [
    { type: src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
UploadResumeModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-upload-resume-modal',
        template: _upload_resume_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_upload_resume_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService !== "undefined" && src_app_services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router) === "function" ? _b : Object, typeof (_c = typeof src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService !== "undefined" && src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController) === "function" ? _d : Object, typeof (_e = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController) === "function" ? _e : Object, typeof (_f = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController) === "function" ? _f : Object, typeof (_g = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController) === "function" ? _g : Object])
], UploadResumeModalPage);



/***/ }),

/***/ 14153:
/*!********************************************!*\
  !*** ./src/app/services/resume.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeService": () => (/* binding */ ResumeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
var _a, _b, _c, _d;








let ResumeService = class ResumeService {
    constructor(http, toast, auth, router) {
        this.http = http;
        this.toast = toast;
        this.auth = auth;
        this.router = router;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
    }
    resumeUpload(resumeForm) {
        console.log('resume uploading');
        return this.http.post(`${this.BACKEND_URL}/api/resume/upload-resume`, resumeForm).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(e => {
            console.log(e.error.msg);
            if (e.error.msg === 'File needs to be a .pdf file') {
                this.wrongFileTypeToast('Resume needs to be a .pdf file.');
                return e;
            }
        })).subscribe(data => {
            console.log(data['objectUrl']);
            return this.goToCredentialsPage(data['objectUrl']);
        });
    }
    wrongFileTypeToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msg,
                duration: 2000,
                cssClass: 'danger-toast',
            });
            toast.present();
        });
    }
    goToCredentialsPage(resume) {
        this.auth.getResume(resume);
        console.log('Going to Credentials Page');
        this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
    }
    changeResume(imageForm) {
        console.log(imageForm);
        return this.http.post(`${this.BACKEND_URL}/api/resume/change-resume`, imageForm);
    }
};
ResumeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
ResumeService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController) === "function" ? _b : Object, typeof (_c = typeof _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService !== "undefined" && _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService) === "function" ? _c : Object, typeof (_d = typeof _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router) === "function" ? _d : Object])
], ResumeService);



/***/ }),

/***/ 35431:
/*!*************************************************************************************!*\
  !*** ./src/app/modals/upload-resume-modal/upload-resume-modal.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #0055a5;\n}\n\nion-icon, ion-title {\n  color: white;\n}\n\nion-icon {\n  position: relative;\n  left: 1em;\n}\n\nh4 {\n  margin: 45px auto;\n  color: #005191;\n}\n\ninput[type=file] {\n  display: block;\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\nion-button {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1yZXN1bWUtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtBQUtGIiwiZmlsZSI6InVwbG9hZC1yZXN1bWUtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG59XG5pb24taWNvbiwgaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDFlbTtcbn1cbmg0IHtcbiAgbWFyZ2luOiA0NXB4IGF1dG87XG4gIGNvbG9yOiAjMDA1MTkxO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxufVxuaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuIl19 */";

/***/ }),

/***/ 78346:
/*!*************************************************************************************!*\
  !*** ./src/app/modals/upload-resume-modal/upload-resume-modal.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <ion-title>Upload Resume</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-hide-md-down\" style=\"margin: 5% 0% 3% 0%;\">\n      <ion-col offset=\"2.8\" size=\"2.5\">\n        <h1>Update Resume</h1>\n      </ion-col>\n      <ion-col push=\"2.5\" size=\"2\">\n        <ion-button class=\"blue-button\" (click)=\"back()\">\n           Back\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-md-down\">\n      <ion-col size=\"6\">\n        <hr style=\"background: #666;\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n        <!-- Need to express to User formats that are acceptable -->\n        <!-- pdf, ect -->\n        <p class=\"text-header\">Please upload a resume from your phone</p>\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\">\n        <form\n        (ngSubmit)=\"uploadResume()\" id=\"changeResumeForm\">\n          <input\n            name=\"resume-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Resume\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!uploadedPhotoURL\">Submit\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_upload-resume-modal_upload-resume-modal_module_ts.js.map