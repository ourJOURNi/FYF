"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_change-profile-picture_change-profile-picture_change-profile-picture_mo-9a34fe"],{

/***/ 60717:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture-routing.module.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeProfilePicturePageRoutingModule": () => (/* binding */ ChangeProfilePicturePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-profile-picture.page */ 4070);




const routes = [
    {
        path: '',
        component: _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_0__.ChangeProfilePicturePage
    },
    {
        path: 'confirm',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_change-profile-picture_confirm_confirm_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../confirm/confirm.module */ 73804)).then(m => m.ConfirmPageModule)
    }
];
let ChangeProfilePicturePageRoutingModule = class ChangeProfilePicturePageRoutingModule {
};
ChangeProfilePicturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangeProfilePicturePageRoutingModule);



/***/ }),

/***/ 90416:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeProfilePicturePageModule": () => (/* binding */ ChangeProfilePicturePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _change_profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-profile-picture-routing.module */ 60717);
/* harmony import */ var _change_profile_picture_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-profile-picture.page */ 4070);
/* harmony import */ var src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/image-cropper/image-cropper.module */ 72228);








let ChangeProfilePicturePageModule = class ChangeProfilePicturePageModule {
};
ChangeProfilePicturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _change_profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeProfilePicturePageRoutingModule,
            src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_2__.ImageCropperPageModule
        ],
        declarations: [_change_profile_picture_page__WEBPACK_IMPORTED_MODULE_1__.ChangeProfilePicturePage]
    })
], ChangeProfilePicturePageModule);



/***/ }),

/***/ 4070:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeProfilePicturePage": () => (/* binding */ ChangeProfilePicturePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_profile_picture_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-profile-picture.page.html?ngResource */ 52305);
/* harmony import */ var _change_profile_picture_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-profile-picture.page.scss?ngResource */ 12684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/profile.service */ 39181);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/photo.service */ 61957);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/image-cropper/image-cropper.page */ 64151);
/* harmony import */ var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/emitters/post-page-emitter.service */ 50806);
/* harmony import */ var src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/emitters/single-post-page-emitter.service */ 20147);
var _a, _b, _c, _d, _e, _f, _g, _h, _j;












let ChangeProfilePicturePage = class ChangeProfilePicturePage {
    constructor(photo, router, profile, alert, modal, toast, loading, postEmitter, singlePostEmitterService) {
        this.photo = photo;
        this.router = router;
        this.profile = profile;
        this.alert = alert;
        this.modal = modal;
        this.toast = toast;
        this.loading = loading;
        this.postEmitter = postEmitter;
        this.singlePostEmitterService = singlePostEmitterService;
        this.imageUrl = this.profile.profilePicture.getValue();
        this.uploadedPhoto = false;
        this.awsPrefix = this.imageUrl.slice(-51);
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.url;
    }
    ngOnInit() {
        this.profile.getUserDetails()
            .subscribe(data => {
            this.userEmail = data['email'];
            console.log(this.userEmail);
        });
    }
    getFormData(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const formElement = document.querySelectorAll('form');
            yield formElement.forEach(form => {
                if (form.id === 'changePhotoForm') {
                    console.log('Got Form: ' + form);
                    this.formData = new FormData(form);
                    this.uploadedPhoto = true;
                }
            });
            console.log(this.formData);
            let reader = new FileReader();
            yield reader.addEventListener('load', () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                // convert image file to base64 string
                this.uploadedPhotoURL = reader.result;
                console.log('Before cropping: ' + reader.result);
                yield this.cropPhoto(this.uploadedPhotoURL);
            }), true);
            if (formElement) {
                return reader.readAsDataURL(event.target.files[0]);
            }
        });
    }
    uploadChangedPhoto() {
        const formData = new FormData();
        formData.append('oldPhotoKey', this.awsPrefix);
        formData.append('email', this.userEmail);
        const photoFile = new File([this.dataURLtoBlob(this.uploadedPhotoURL)], 'picture.png');
        formData.append('profile-picture-update', photoFile);
        if (this.uploadedPhoto === true) {
            this.photo.changeProfilePicture(formData).subscribe(data => {
                console.log(data);
                let newPhoto = data['objectUrl'];
                // Update all the creatorProfilePicture properties with newPhoto
                // this.photo.updatePostPhotos(newPhoto, this.userEmail);
                this.presentLoading();
                this.profile.profilePicture.next(newPhoto);
                this.presentToast();
                // Get profile pages to refresh with updated profile pics
                this.postEmitter.postPageRefresh();
                this.singlePostEmitterService.singlePostPageRefresh();
                this.router.navigate(['/home/profile']);
            });
        }
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Your Profile Picture has been changed',
                animated: true,
                cssClass: 'updated-toast',
                duration: 2000
            });
            toast.present();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                cssClass: 'my-custom-class',
                message: 'Updating Photo...',
                duration: 1000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    cropPhoto(uploadedPhotoURL) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_5__.ImageCropperPage,
                cssClass: 'image-cropper',
                componentProps: {
                    uploadedPhotoURL
                }
            });
            yield modal.present();
            modal.onDidDismiss().then(data => {
                this.uploadedPhotoURL = data.data;
            });
        });
    }
    dataURLtoBlob(dataurl) {
        let arr = dataurl.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
    goBack() {
        this.router.navigate(['/home/profile']);
    }
};
ChangeProfilePicturePage.ctorParameters = () => [
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__.PostPageEmitterService },
    { type: src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__.SinglePostPageEmitterService }
];
ChangeProfilePicturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-change-profile-picture',
        template: _change_profile_picture_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_profile_picture_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [typeof (_a = typeof _services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService !== "undefined" && _services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router) === "function" ? _b : Object, typeof (_c = typeof _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService !== "undefined" && _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController) === "function" ? _d : Object, typeof (_e = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController) === "function" ? _e : Object, typeof (_f = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController) === "function" ? _f : Object, typeof (_g = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController) === "function" ? _g : Object, typeof (_h = typeof src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__.PostPageEmitterService !== "undefined" && src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_6__.PostPageEmitterService) === "function" ? _h : Object, typeof (_j = typeof src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__.SinglePostPageEmitterService !== "undefined" && src_app_emitters_single_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_7__.SinglePostPageEmitterService) === "function" ? _j : Object])
], ChangeProfilePicturePage);



/***/ }),

/***/ 12684:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(51, 51, 51, 0.1490196078);\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n#profile-picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n  margin: 50px auto;\n  display: block;\n  opacity: 0;\n  border: 2px solid #005191;\n  animation: pic-slide-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\n.orange-button {\n  width: initial;\n  display: block;\n  margin: 40px auto;\n  width: 200px;\n}\n.blue-button {\n  width: 200px;\n}\n.skip-button {\n  display: block;\n  --background: none;\n  color: #888;\n  --border-color: #888;\n  --border-width: 3px;\n  --border-style: solid;\n  width: 200px;\n  margin: 40px auto;\n  animation: none;\n  opacity: 0.5;\n}\n.blue-button {\n  width: auto;\n  width: initial;\n  animation: none;\n  opacity: 1;\n  opacity: initial;\n}\n.wrapper {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  height: auto;\n  padding: 50px;\n}\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 20px auto 50px auto;\n  border-radius: 50px;\n  background-image: url('default-pro-picture.svg');\n  opacity: 0;\n  animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s forwards;\n}\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  border: 4px solid #005191;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  border-radius: 50px;\n  animation: slide-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;\n}\nspan {\n  color: #FFB351;\n  font-weight: 600;\n  background: #999;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n#next-button {\n  width: 100%;\n  height: 60px;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: none;\n  height: 50px;\n  width: 200px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.cancel-button:hover {\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);\n}\n.camera-button {\n  --background: white;\n  --color: #005191;\n  --border-style: solid;\n  --border-width: 1px;\n  --border-color:#005191;\n  border: 1px;\n  margin: 30px auto;\n}\ninput[type=file] {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  border: #005191 1px solid;\n  background: linear-gradient(#0672c4, #005191);\n  width: 400px;\n  height: 50px;\n  border-radius: 5px;\n  padding: 20px 0 0 20px;\n  text-align: center;\n  cursor: pointer;\n}\ninput[type=file]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n#img-wrapper {\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n}\n@keyframes lide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVEQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHFGQUFBO0FBRUo7QUFDRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7QUFFSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFBQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFBQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtFQUNBLDBFQUFBO0FBRUo7QUFDRTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhFQUFBO0FBR0o7QUFBRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFHSjtBQURFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUlKO0FBREU7RUFDRSwyQ0FBQTtBQUlKO0FBREU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSUo7QUFERTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKO0FBQUU7RUFDRSxrQkFBQTtBQUdKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFFRTtFQUNFO0lBQ0UsNEJBQUE7RUFDSjtFQUVFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBQUo7QUFDRiIsImZpbGUiOiJjaGFuZ2UtcHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNrdG9wLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzMjY7XG5cbiAgaDEge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICB9XG59XG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDA1NWE1LCAjMGQyZTRkKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNwcm9maWxlLXBpY3R1cmUge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNTE5MTtcbiAgICBhbmltYXRpb246IHBpYy1zbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xuICB9XG5cbiAgLm9yYW5nZS1idXR0b24ge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cblxuICAuYmx1ZS1idXR0b24ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG5cbiAgLnNraXAtYnV0dG9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICAtLWJvcmRlci1jb2xvcjogIzg4ODtcbiAgICAtLWJvcmRlci13aWR0aCA6IDNweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAuYmx1ZS1idXR0b24ge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgb3BhY2l0eTogdW5zZXQ7XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuXG4gICNkZWZhdWx0LXBpY3R1cmUtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDUwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ljb24vZGVmYXVsdC1wcm8tcGljdHVyZS5zdmcnKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKSAwLjVzIGZvcndhcmRzO1xuICB9XG5cbiAgI3VwbG9hZC1waWN0dXJlLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMDA1MTkxO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBhbmltYXRpb246IHNsaWRlLXVwIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDAuNXMgZm9yd2FyZHM7XG4gIH1cblxuICBzcGFue1xuICAgIGNvbG9yOiAjRkZCMzUxO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogIzk5OTtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gICNuZXh0LWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiAgLmNhbmNlbC1idXR0b24ge1xuICAgIGNvbG9yOiAjZTQ0MDVmO1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgfVxuXG4gIC5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjQpO1xuICB9XG5cbiAgLmNhbWVyYS1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWNvbG9yOiAjMDA1MTkxO1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiMwMDUxOTE7XG4gICAgYm9yZGVyOiAxcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIH1cblxuICBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogIzAwNTE5MSAxcHggc29saWQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICB9XG5cbiAgaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG5cblxuICAjaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICB9XG5cbiAgQGtleWZyYW1lcyBsaWRlLXVwIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuIl19 */";

/***/ }),

/***/ 52305:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/change-profile-picture/change-profile-picture/change-profile-picture.page.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Profile Picture</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid>\n    \n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <h1>Change Profile Picture</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"goBack()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"4\">\n        <h6 class=\"text-header\">Please select the profile picture you will use to replace your current one. Only pictures with the extentions <span>'.png', '.jpg', and '.jpeg'</span> are allowed. </h6>\n\n        <!-- <p>{{awsPrefix}}</p> -->\n        <img *ngIf=\"!uploadedPhoto\" id=\"profile-picture\" src=\"{{imageUrl}}\" alt=\"Profile Picture\">\n\n\n        <img *ngIf=\"uploadedPhoto\" id=\"profile-picture\" src=\"{{uploadedPhotoURL}}\" alt=\"Profile Picture\">\n\n        <form\n        (ngSubmit)=\"uploadChangedPhoto()\" id=\"changePhotoForm\">\n          <input\n            name=\"profile-picture-update\"\n            (change)=\"getFormData($event)\" placeholder=\"Upload Image\"\n            type=\"file\"/>\n\n          <ion-button\n            type=\"submit\"\n            class=\"orange-button\"\n            [disabled]=\"!imageUrl\">Update\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_change-profile-picture_change-profile-picture_change-profile-picture_mo-9a34fe.js.map