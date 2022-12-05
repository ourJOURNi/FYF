"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_resume_update-resume_update-resume_module_ts"],{

/***/ 33089:
/*!************************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateResumePageRoutingModule": () => (/* binding */ UpdateResumePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _update_resume_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-resume.page */ 70350);




const routes = [
    {
        path: '',
        component: _update_resume_page__WEBPACK_IMPORTED_MODULE_0__.UpdateResumePage
    }
];
let UpdateResumePageRoutingModule = class UpdateResumePageRoutingModule {
};
UpdateResumePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateResumePageRoutingModule);



/***/ }),

/***/ 58939:
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateResumePageModule": () => (/* binding */ UpdateResumePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _update_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-resume-routing.module */ 33089);
/* harmony import */ var _update_resume_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-resume.page */ 70350);







let UpdateResumePageModule = class UpdateResumePageModule {
};
UpdateResumePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateResumePageRoutingModule
        ],
        declarations: [_update_resume_page__WEBPACK_IMPORTED_MODULE_1__.UpdateResumePage]
    })
], UpdateResumePageModule);



/***/ }),

/***/ 70350:
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateResumePage": () => (/* binding */ UpdateResumePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_resume_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-resume.page.html?ngResource */ 86312);
/* harmony import */ var _update_resume_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-resume.page.scss?ngResource */ 32286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/profile.service */ 39181);
/* harmony import */ var _services_resume_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/resume.service */ 14153);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
var _a, _b, _c, _d, _e, _f;








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
    goBack() {
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
        this.resume.changeResume(this.formData).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        });
    }
};
UpdateResumePage.ctorParameters = () => [
    { type: _services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
UpdateResumePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-resume',
        template: _update_resume_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_resume_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService !== "undefined" && _services_resume_service__WEBPACK_IMPORTED_MODULE_3__.ResumeService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router) === "function" ? _b : Object, typeof (_c = typeof _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService !== "undefined" && _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController) === "function" ? _d : Object, typeof (_e = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController) === "function" ? _e : Object, typeof (_f = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController) === "function" ? _f : Object])
], UpdateResumePage);



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

/***/ 32286:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(51, 51, 51, 0.1490196078);\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.text-header {\n  background: rgb(228, 235, 241);\n}\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1yZXN1bWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVEQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0UsOEJBQUE7QUFFRjtBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUo7QUFFRTtFQUNFLGtCQUFBO0FBQ0oiLCJmaWxlIjoidXBkYXRlLXJlc3VtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVza3RvcC10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzI2O1xuXG4gIGgxIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgfVxufVxuLmJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwNTVhNSwgIzBkMmU0ZCk7XG4gIGhlaWdodDogMjRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGV4dC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAyMzUsIDI0MSk7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiAjMDA1MTkxIDFweCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2NzJjNCwgIzAwNTE5MSk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIH1cblxuICBpbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4iXX0= */";

/***/ }),

/***/ 86312:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profile/resume/update-resume/update-resume.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Update Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n     <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n       <ion-toolbar class=\"desktop-toolbar\">\n             <ion-buttons slot=\"start\">\n                 <h1>Update Resume </h1>\n             </ion-buttons>\n             <ion-buttons slot=\"end\">\n               <ion-button class=\"back-button\" (click)=\"goBack()\">\n                 Back\n               </ion-button>\n             </ion-buttons>\n       </ion-toolbar>\n           <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n           <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n     </ion-col>\n   </ion-row>\n\n   <ion-row class=\"ion-justify-content-center\">\n    <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\n      <h6 class=\"text-header\">Please upload a resume from your phone</h6>\n    </ion-col>\n  </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"4\">\n        <!-- Need to express to User formats that are acceptable -->\n        <!-- pdf, ect -->\n        <form\n        (ngSubmit)=\"uploadResume()\" id=\"changeResumeForm\">\n          <input\n            name=\"resume-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Resume\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!uploadedPhotoURL\">Update\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_resume_update-resume_update-resume_module_ts.js.map