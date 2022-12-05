"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_sign-up_upload-resume_upload-resume_module_ts"],{

/***/ 7015:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadResumePageRoutingModule": () => (/* binding */ UploadResumePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _upload_resume_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-resume.page */ 179);




const routes = [
    {
        path: '',
        component: _upload_resume_page__WEBPACK_IMPORTED_MODULE_0__.UploadResumePage
    },
    {
        path: 'login-credentials',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_sign-up_login-credentials_login-credentials_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../login-credentials/login-credentials.module */ 75095)).then(m => m.LoginCredentialsPageModule)
    },
];
let UploadResumePageRoutingModule = class UploadResumePageRoutingModule {
};
UploadResumePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadResumePageRoutingModule);



/***/ }),

/***/ 4607:
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadResumePageModule": () => (/* binding */ UploadResumePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-resume-routing.module */ 7015);
/* harmony import */ var _upload_resume_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-resume.page */ 179);







let UploadResumePageModule = class UploadResumePageModule {
};
UploadResumePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _upload_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadResumePageRoutingModule
        ],
        declarations: [_upload_resume_page__WEBPACK_IMPORTED_MODULE_1__.UploadResumePage]
    })
], UploadResumePageModule);



/***/ }),

/***/ 179:
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadResumePage": () => (/* binding */ UploadResumePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _upload_resume_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-resume.page.html?ngResource */ 82189);
/* harmony import */ var _upload_resume_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-resume.page.scss?ngResource */ 8355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ 37556);
/* harmony import */ var _services_resume_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/resume.service */ 14153);
var _a, _b, _c, _d, _e;








let UploadResumePage = class UploadResumePage {
    constructor(router, alertController, auth, resume, toastController) {
        this.router = router;
        this.alertController = alertController;
        this.auth = auth;
        this.resume = resume;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    getFormData(event) {
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'resume-form') {
                console.log('Got Form: ');
                this.formData = new FormData(form);
                console.log(event);
            }
        });
    }
    uploadResume() {
        if (this.formData == undefined) {
            return this.noResumeToast();
        }
        else {
            this.resume.resumeUpload(this.formData);
        }
    }
    noResumeToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please upload a Resume, or Skip',
                cssClass: 'danger-toast',
                duration: 2000
            });
            toast.present();
        });
    }
    getFileFromPhone() {
        console.error("TODO: getFileFromPhone() not implemented yet");
    }
    back() {
        console.log('Sign up cancelled');
        this.router.navigate(['/personal-info/profile-picture']);
    }
    skip() {
        console.log('Skipping to Upload Resume >>');
        this.presentAlert();
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Skip',
                message: 'Are you sure you want to skip? You can always upload a Resume in the future by going to your Profile.',
                buttons: [
                    {
                        text: 'Skip',
                        handler: () => {
                            // Get Default Picture Logo
                            this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelling Resume Upload Skip...');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
UploadResumePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
UploadResumePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-upload-resume',
        template: _upload_resume_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_upload_resume_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController) === "function" ? _b : Object, typeof (_c = typeof _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService !== "undefined" && _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService) === "function" ? _c : Object, typeof (_d = typeof _services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService !== "undefined" && _services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService) === "function" ? _d : Object, typeof (_e = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController) === "function" ? _e : Object])
], UploadResumePage);



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

/***/ 8355:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(51, 51, 51, 0.1490196078);\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0c375f);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.get-resume-button {\n  --background: #1FCC6D;\n  --color: white;\n  height: 50px;\n  font-weight: 600;\n  margin: 32px auto;\n}\n.cancel-button {\n  color: #e4405f;\n  --background: linear-gradient(#fdfbfb, #fff7f8);\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 50px;\n  width: 200px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.cancel-button:hover {\n  color: white;\n}\n.no-resume {\n  background: rgba(13, 70, 123, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  transition: 0.5s;\n  opacity: 0;\n  animation: slide-up 0.5s ease 1.5s forwards;\n}\n.uploaded-resume {\n  background: rgba(33, 223, 130, 0.1);\n  font-size: 0.8em;\n  padding: 20px;\n  margin: 60px 0 60px 0;\n  transition: 0.5s;\n  opacity: 0;\n  animation: slide-up 0.5s ease 0.5s forwards;\n}\n.get-file {\n  display: block;\n  --background: none;\n  color: #005191;\n  --border-color: #005191;\n  --border-width: 1px;\n  --border-style: solid;\n  border: 1px;\n  width: 130px;\n  margin: 30px auto;\n}\nspan {\n  font-weight: 900;\n  font-size: 1em;\n  color: #e3405f;\n}\n.skip-button {\n  display: block;\n  border: none;\n  --background: rgb(230, 230, 230);\n  color: #888;\n  width: 200px;\n  margin: 8px auto;\n  animation: none;\n  opacity: 0.5;\n}\ninput[type=file] {\n  background: #1FCC6D;\n  color: white;\n  height: 39px;\n  font-weight: 600;\n  margin: 32px auto;\n  padding-top: 13px;\n  border-radius: 5px;\n}\ninput[type=file]:hover {\n  background: linear-gradient(#1FCC6D, #46fa94);\n  color: white;\n}\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1yZXN1bWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVEQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7QUFDRjtBQUNBO0VBQ0UsY0FBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtBQUVGO0FBQ0E7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUFFQTtBQUNBO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FBRUY7QUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR0Y7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFJRjtBQUZBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUtGO0FBRkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLRjtBQUZBO0VBQ0UsNkNBQUE7RUFDQSxZQUFBO0FBS0Y7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7QUFEQTtFQUNFO0lBQ0UsNEJBQUE7RUFJRjtFQURBO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJ1cGxvYWQtcmVzdW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNrdG9wLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzMjY7XG5cbiAgaDEge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICB9XG59XG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDA1NWE1LCAjMGMzNzVmKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5nZXQtcmVzdW1lLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzFGQ0M2RDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLy8gYm9yZGVyOiAycHggZG90dGVkICMxRkNDNkQ7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xufVxuLmNhbmNlbC1idXR0b24ge1xuICBjb2xvcjogI2U0NDA1ZjtcbiAgLS1iYWNrZ3JvdW5kOiAgbGluZWFyLWdyYWRpZW50KCNmZGZiZmIsICNmZmY3ZjgpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZjE1Yjc3LCAjZTQ0MDVmKTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubm8tcmVzdW1lIHtcbmJhY2tncm91bmQ6IHJnYmEoMTMsNzAsMTIzLDAuMSk7XG5mb250LXNpemU6IDAuOGVtO1xucGFkZGluZzogMjBweDtcbm1hcmdpbjogNjBweCAwIDYwcHggMDtcbnRyYW5zaXRpb246IDAuNXM7XG5vcGFjaXR5OiAwO1xuYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UgMS41cyBmb3J3YXJkcztcbn1cblxuLnVwbG9hZGVkLXJlc3VtZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzMsMjIzLDEzMCwwLjEpO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDYwcHggMCA2MHB4IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDAuNXMgZm9yd2FyZHM7XG59XG4uZ2V0LWZpbGV7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjMDA1MTkxO1xuICAtLWJvcmRlci1jb2xvcjogIzAwNTE5MTtcbiAgLS1ib3JkZXItd2lkdGggOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyOiAxcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjZTM0MDVmO1xufVxuLnNraXAtYnV0dG9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICAtLWJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcbiAgY29sb3I6ICM4ODg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiA4cHggYXV0bztcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBiYWNrZ3JvdW5kOiAjMUZDQzZEO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMzlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAzMnB4IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzFGQ0M2RCwgIzQ2ZmE5NCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 82189:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/upload-resume/upload-resume.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <img style=\"margin-right: 16px;\" height=\"32\" src=\"../../../../../assets/icon/fyf-white-icon.svg\">\n    </ion-buttons>\n    <ion-title size=\"small\">Upload Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    <div class=\"spacer ion-hide-lg-down\"></div>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../../../assets/icon/Logo 2.0.svg\" alt=\"\" srcset=\"\">\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"back()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n\n    <!-- Header -->\n    <ion-row class=\"ion-justify-content-center header\">\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <h6 class=\"text-header\">Please upload your Resume. <br><span>Must be a .pdf file.</span></h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\">\n        <form id=\"resume-form\" (ngSubmit)=\"uploadResume()\">\n\n          <input class=\"get-resume-button\" name=\"resume\" (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n          type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            style=\"display: block;\">\n          NEXT</ion-button>\n        </form>\n\n        <!-- <ion-button class=\"blue-button skip-button\"  (click)=\"skip()\">\n          Skip\n        </ion-button> -->\n        <ion-button (click)=\"this.auth.cancelSignUp()\" class=\"cancel-button\">\n            Cancel\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_sign-up_upload-resume_upload-resume_module_ts.js.map