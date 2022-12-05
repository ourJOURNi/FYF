"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_login_login_module_ts"],{

/***/ 65221:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 47412);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 79456:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 65221);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 47412);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 47412:
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 46579);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 61191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
var _a, _b, _c, _d, _e;








let LoginPage = class LoginPage {
    constructor(
    // private auth: AuthService,
    formBuilder, auth, loading, toast, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.loading = loading;
        this.toast = toast;
        this.router = router;
        this.initialLoading = true;
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Must be a valid email address' }
            ],
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.' }
            ]
        };
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['Lacrosse2', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    // this is for the letters (both uppercase and lowercase) and numbers validation
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])]
        });
        // Check if app is online
        if (window.navigator.onLine === false) {
            console.log('We are OFFLINE!');
        }
        if (window.navigator.onLine === true) {
            console.log('We are ONLINE!');
            // Chrome, Edge,
        }
        ;
        let downloadFooter = document.getElementById('download-footer');
        let footerText = document.getElementById('footer-text');
        if ("onbeforeinstallprompt" in window) {
            window.addEventListener("beforeinstallprompt", (e) => {
                setTimeout(() => {
                    console.log('lol');
                }, 2000);
                e.preventDefault();
                console.log(e);
                downloadFooter.style.background = "#00c90c";
                console.log(e);
                downloadFooter.style.display = "block";
                downloadFooter.addEventListener('mouseover', (e) => {
                    downloadFooter.style.background = "#52975e";
                });
                downloadFooter.addEventListener('mouseout', (e) => {
                    downloadFooter.style.background = "#00c90c";
                });
                downloadFooter.addEventListener('click', () => {
                    this.downloadPageLoading();
                });
                footerText.innerHTML = "<ion-icon style='font-size: 1em; animation: up-and-down 1s ease infinite forwards;' name='download-outline'></ion-icon><p style='font-size: 0.7em; margin-left: 8px; display: inline;'>Download App</p>";
                return this.auth.downloadPrompt = e;
            });
        }
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Logging in...',
                duration: 2000,
                cssClass: 'success-loading',
                keyboardClose: true,
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    downloadPageLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: '',
                duration: 1000,
                keyboardClose: true,
            });
            yield loading.present();
            yield loading.onDidDismiss().then((e) => {
                this.router.navigateByUrl('download');
            });
        });
    }
    login(data) {
        this.presentLoading();
        this.auth.login(data);
    }
    back() {
        this.router.navigate(['/landing']);
    }
    download() {
        // this.deferredPrompt.prompt();
        this.downloadPageLoading();
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
LoginPage.propDecorators = {
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['autoFocusInput', { static: false },] }],
    initialLoadingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['initialLoadingIcon', { static: false },] }],
    initialLoadingISpinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['initialLoadingSpinner', { static: false },] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder !== "undefined" && _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder) === "function" ? _a : Object, typeof (_b = typeof _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService !== "undefined" && _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController) === "function" ? _d : Object, typeof (_e = typeof _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router) === "function" ? _e : Object])
], LoginPage);



/***/ }),

/***/ 61191:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".backgound {\n  --background: linear-gradient(180deg,rgba(0,85,165, 0.7) 30%, rgba(0,85,165, 1) 100%), url('schools-small.png') no-repeat center center / cover;\n}\n\n@media only screen and (max-width: 602px) {\n  .backgound {\n    --background: linear-gradient(180deg, rgba(0,85,165, 0.7) 30%, rgb(5, 20, 34) 100%), url('schools-small.png') no-repeat center center / cover;\n    -webkit-backdrop-filter: blur(50px);\n    backdrop-filter: blur(50px);\n  }\n}\n\n#logo {\n  height: 70px;\n}\n\n.form-wrapper {\n  border-radius: 15px;\n  padding: 3em;\n  margin: 10% auto 0 auto;\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(50px);\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n}\n\n@media only screen and (max-width: 600px) {\n  .form-wrapper {\n    background: none;\n  }\n}\n\nion-footer:hover {\n  background: linear-gradient(#02850b, #02850b);\n}\n\nion-footer {\n  opacity: 1;\n  border: none;\n  border-radius: 40px 40px 0px 0px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  z-index: 9998;\n  padding-top: 10px;\n  background: #faa71b;\n  opacity: 0;\n  display: none;\n  animation: slide-up 0.2s ease forwards;\n}\n\nion-footer * {\n  font-size: 1.15em;\n  color: white;\n  width: 100%;\n}\n\nion-footer p {\n  font-size: 0.9em;\n  width: 100%;\n}\n\nion-footer ion-icon {\n  display: inline-block;\n  font-weight: 600;\n  margin-right: 8px;\n  animation: up-and-down 2s ease infinite forwards;\n}\n\nion-footer #dot-one {\n  animation: flash 2s ease 0.5s infinite forwards;\n}\n\nion-footer #dot-two {\n  animation: flash 2s ease 1s infinite forwards;\n}\n\nion-footer #dot-three {\n  animation: flash 2s ease 1.5s infinite forwards;\n}\n\n@keyframes flash {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes up-and-down {\n  0% {\n    transform: translateY(5px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(5px);\n  }\n}\n\nion-footer p {\n  display: inline;\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n\nion-button {\n  margin: 8px auto;\n}\n\n#login-loading {\n  background: #0055a5;\n  height: 100vh;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: loading-exit 500ms ease 2s forwards;\n}\n\n@keyframes loading-exit {\n  0% {\n    height: 100vh;\n  }\n  100% {\n    height: 0vh;\n    opacity: 0;\n  }\n}\n\n#sign-up-button {\n  width: 200px;\n  height: 50px;\n  font-size: 1em;\n  font-weight: 700;\n  --color: white;\n  --background: linear-gradient(#005191, #000000);\n  opacity: 0;\n}\n\n#forgot {\n  width: 200px;\n  height: 40px;\n  font-size: 1em;\n  font-weight: 700;\n  opacity: 0;\n  --background: rgb(29, 28, 28);\n  --background-hover: #474444;\n  --color: white;\n  --transition: 0.5s;\n  animation: slide-up 0.5s ease 1.5s forwards;\n}\n\n.grey-button {\n  width: 200px;\n  height: 40px;\n  font-size: 1em;\n  font-weight: 700;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: #999;\n  --background:none;\n  --color: #999;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtJQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUVFLDZJQUFBO0lBQ0gsbUNBQUE7SUFDQSwyQkFBQTtFQUNDO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0QsbUNBQUE7RUFDQyw2Q0FBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxnQkFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSw2Q0FBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtBQUVGOztBQURFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBQUdKOztBQURFO0VBQ0UsK0NBQUE7QUFHSjs7QUFERTtFQUNFLDZDQUFBO0FBR0o7O0FBREU7RUFDRSwrQ0FBQTtBQUdKOztBQURFO0VBQ0U7SUFDRSxVQUFBO0VBR0o7RUFERTtJQUNFLFlBQUE7RUFHSjtFQURFO0lBQ0UsVUFBQTtFQUdKO0FBQ0Y7O0FBREU7RUFDRTtJQUNFLDBCQUFBO0VBR0o7RUFERTtJQUNFLDBCQUFBO0VBR0o7RUFERTtJQUNFLDBCQUFBO0VBR0o7QUFDRjs7QUFERTtFQUNFLGVBQUE7QUFHSjs7QUFBQTtFQUNFO0lBQ0UsMkJBQUE7RUFHRjtFQUFBO0lBQ0UseUJBQUE7SUFDQSxVQUFBO0VBRUY7QUFDRjs7QUFBQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQUdGOztBQURBO0VBQ0U7SUFDRSxhQUFBO0VBSUY7RUFGQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VBSUY7QUFDRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBR0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tnb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDAsODUsMTY1LCAwLjcpIDMwJSwgcmdiYSgwLDg1LDE2NSwgMSkgMTAwJSksIHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3NjaG9vbHMtc21hbGwucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAycHgpIHtcbiAgLmJhY2tnb3VuZCB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjZmZmIHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2Z5Zi1sb2dpbi1pbWFnZS1zbWFsbC5wbmcnKSBsaW5lYXItZ3JhZGllbnQoI2ViMDFhNSwgI2QxMzUzMSlcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCw4NSwxNjUsIDAuNykgMzAlLCByZ2IoNSwgMjAsIDM0KSAxMDAlKSwgdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc2Nob29scy1zbWFsbC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDUwcHgpO1xuICB9XG59XG4jbG9nbyB7XG4gIGhlaWdodDogNzBweDtcbiAgLy8gbWFyZ2luOiA1NHB4IDAgMzBweCAwO1xufVxuLmZvcm0td3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDNlbTtcbiAgbWFyZ2luOiAxMCUgYXV0byAwIGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMjZweCByZ2JhKDAsMCwwLDAuMDUpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZm9ybS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG59XG5pb24tZm9vdGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMjg1MGIsICMwMjg1MGIpO1xufVxuaW9uLWZvb3RlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNDBweCA0MHB4IDBweCAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDk5OTg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwYzkwYywgIzAyODUwYik7XG4gIGJhY2tncm91bmQ6ICNmYWE3MWI7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC4ycyBlYXNlIGZvcndhcmRzO1xuICAqIHtcbiAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpb24taWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgYW5pbWF0aW9uOiB1cC1hbmQtZG93biAycyBlYXNlIGluZmluaXRlIGZvcndhcmRzO1xuICB9XG4gICNkb3Qtb25lIHtcbiAgICBhbmltYXRpb246IGZsYXNoIDJzIGVhc2UgMC41cyBpbmZpbml0ZSBmb3J3YXJkcztcbiAgfVxuICAjZG90LXR3byB7XG4gICAgYW5pbWF0aW9uOiBmbGFzaCAycyBlYXNlIDFzIGluZmluaXRlIGZvcndhcmRzO1xuICB9XG4gICNkb3QtdGhyZWUge1xuICAgIGFuaW1hdGlvbjogZmxhc2ggMnMgZWFzZSAxLjVzIGluZmluaXRlIGZvcndhcmRzO1xuICB9XG4gIEBrZXlmcmFtZXMgZmxhc2gge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB1cC1hbmQtZG93biB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB9XG4gIH1cbiAgcCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogOHB4IGF1dG87XG59XG4jbG9naW4tbG9hZGluZyB7XG4gIGJhY2tncm91bmQ6ICMwMDU1YTU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IGxvYWRpbmctZXhpdCA1MDBtcyBlYXNlIDJzIGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBsb2FkaW5nLWV4aXQge1xuICAwJSB7XG4gICAgaGVpZ2h0OiAxMDB2aFxuICB9XG4gIDEwMCUge1xuICAgIGhlaWdodDogMHZoO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuI3NpZ24tdXAtYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwNTE5MSwgIzAwMDAwMCk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNmb3Jnb3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG9wYWNpdHk6IDA7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI5LCAyOCwgMjgpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM0NzQ0NDQ7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLXRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC41cyBlYXNlIDEuNXMgZm9yd2FyZHM7XG59XG5cbi5ncmV5LWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogIzk5OTtcbiAgLS1iYWNrZ3JvdW5kOm5vbmU7XG4gIC0tY29sb3I6ICM5OTk7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIl19 */";

/***/ }),

/***/ 46579:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "  <!-- Loading -->\n<!-- <ion-content>\n  <ion-grid>\n    <ion-row style=\"margin-top: 17%;\" class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col class=\"ion-text-center\" size=\"6\">\n        <img #initialLoadingIcon src=\"../../../../assets/icons/icon-72x72.png\" alt=\"\" srcset=\"\"><br>\n        <ion-spinner #initialLoadingSpinner style=\"--color: #0055a5;\" name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content> -->\n\n\n<!-- When done loading -->\n<ion-content class=\"backgound\">\n  <div *ngIf=\"initialLoading\" id=\"login-loading\">\n    <div>\n      <img height=\"90\" src=\"../../../../assets/icon/icon-192x192-white.png\" alt=\"\" srcset=\"\"><br>\n      <ion-spinner style=\"color: white; margin-top: 20px; position: relative; left: 30px;\" name=\"bubbles\"></ion-spinner>\n    </div>\n  </div>\n  <ion-grid>\n    <!-- Form -->\n    <!-- <div class=\"spacer ion-hide-lg-down\"></div> -->\n    <!-- <div class=\"spacer\"></div> -->\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col style=\"padding: 2em\" class=\"ion-text-center form-wrapper\" size-xs=\"11\" size-sm=\"10\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\">\n        <img class=\"ion-hide-sm-up\" id=\"logo\" src=\"../../../../assets/icon/White-FYF-LOGO.png\"/>\n        <img class=\"ion-hide-sm-down\" id=\"logo\" src=\"../../../../assets/icon/Logo 2.0.png\"/>\n          <form  [formGroup]=\"loginForm\"\n                 (ngSubmit)=\"login(this.loginForm.value)\">\n            <ion-list class=\"line-input\">\n            <ion-item>\n              <!-- Email -->\n                <ion-input\n                  required\n                  placeholder=\"Email\"\n                  inputmode=\"email\"\n                  formControlName=\"email\"\n                  type=\"email\"\n                  (keyup.enter)=\"login(this.loginForm.value)\">\n                </ion-input>\n            </ion-item>\n            <!-- Email Validation-->\n            <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                    <div class=\"error-message\"\n                    *ngIf=\"loginForm\n                      .get('email')\n                      .hasError(validation.type) && (loginForm.get('email')\n                      .dirty || loginForm.get('email').touched)\">\n                      {{ validation.message }}\n                    </div>\n                  </ng-container>\n            </div>\n\n          <!-- Password -->\n          <ion-item>\n              <ion-input\n                required\n                placeholder=\"Password\"\n                inputmode=\"text\"\n                formControlName=\"password\"\n                type=\"password\"\n                (keyup.enter)=\"login(this.loginForm.value)\">\n              </ion-input>\n          </ion-item>\n\n          <!-- Password Validation-->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessasges.password\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n\n            </ion-list>\n\n              <!-- Login Button -->\n              <ion-col size=\"12\">\n                <ion-button class=\"orange-button\" type=\"submit\">Login</ion-button><br>\n                <ion-button class=\"blue-button\" [routerLink]=\"['personal-info']\">Sign Up\n                </ion-button><br>\n                <ion-button [routerLink]=\"['enter-email']\" id=\"forgot\">Forgot Password</ion-button>\n              </ion-col>\n\n              <!-- UW Logo -->\n              <ion-col size=\"12\">\n                <br>\n                <img height=\"80\" style=\"margin-top: 50px;\" src=\"../../../../assets/logos/UWSEM-Color.png\" alt=\"United Way Southeastern Michigan\" srcset=\"\">\n              </ion-col>\n            </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-- (click)=\"download()\" -->\n<ion-footer id=\"download-footer\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <div id=\"footer-text\">\n              <p style=\"font-size: 0.9em;\">Preparing Download </p>\n              <span id=\"dot-one\">.</span>\n              <span id=\"dot-two\">.</span>\n              <span id=\"dot-three\">.</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts.js.map