"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_download_download_module_ts"],{

/***/ 77372:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/download/download-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPageRoutingModule": () => (/* binding */ DownloadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _download_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.page */ 11417);




const routes = [
    {
        path: '',
        component: _download_page__WEBPACK_IMPORTED_MODULE_0__.DownloadPage
    }
];
let DownloadPageRoutingModule = class DownloadPageRoutingModule {
};
DownloadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DownloadPageRoutingModule);



/***/ }),

/***/ 23064:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/download/download.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPageModule": () => (/* binding */ DownloadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _download_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download-routing.module */ 77372);
/* harmony import */ var _download_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.page */ 11417);







let DownloadPageModule = class DownloadPageModule {
};
DownloadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _download_routing_module__WEBPACK_IMPORTED_MODULE_0__.DownloadPageRoutingModule
        ],
        declarations: [_download_page__WEBPACK_IMPORTED_MODULE_1__.DownloadPage]
    })
], DownloadPageModule);



/***/ }),

/***/ 11417:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/download/download.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPage": () => (/* binding */ DownloadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _download_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.page.html?ngResource */ 53241);
/* harmony import */ var _download_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.page.scss?ngResource */ 80009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
var _a, _b;






let DownloadPage = class DownloadPage {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.appInstalled = false;
        this.platform = {
            isCompatible: false,
            isIDevice: false,
            isSamsung: false,
            isFireFox: false,
            isOpera: false,
            isEdge: false,
            isChromium: false,
            isInWebAppiOS: false,
            isInWebAppChrome: false,
            isMobileSafari: false,
            isStandalone: false,
            isiPad: false,
            isiPhone: false,
            nativePrompt: "onbeforeinstallprompt" in window
        };
    }
    ngOnInit() {
        this.checkplatform();
        if ("onappinstalled" in window) {
            window.addEventListener("appinstalled", function (evt) {
                evt.preventDefault();
                this.appInstalled = true;
                console.log(evt);
                console.log('App has already been installed');
            });
        }
    }
    download() {
        this.auth.downloadPrompt.prompt();
        console.log('Downloading app ...');
    }
    cancel() {
        this.router.navigateByUrl('');
        console.log('Cancelling Download');
    }
    checkplatform() {
        // browser info and capability
        var _ua = window.navigator.userAgent;
        this.platform.isIDevice = /iphone|ipod|ipad/i.test(navigator.platform);
        this.platform.isSamsung = /Samsung/i.test(_ua);
        this.platform.isFireFox = /Firefox/i.test(_ua);
        this.platform.isOpera = /opr/i.test(_ua);
        this.platform.isEdge = /edg/i.test(_ua);
        // Opera & FireFox only Trigger on Android
        if (this.platform.isFireFox) {
            this.platform.isFireFox = /android/i.test(_ua);
        }
        if (this.platform.isOpera) {
            this.platform.isOpera = /android/i.test(_ua);
        }
        this.platform.isChromium = "onbeforeinstallprompt" in window;
        // this.platform.isInWebAppiOS = window.navigator.standalone === true;
        console.log(window);
        this.platform.isInWebAppChrome =
            window.matchMedia("(display-mode: fullscreen)").matches ||
                window.matchMedia("(display-mode: standalone)").matches ||
                window.matchMedia("(display-mode: minimal-ui)").matches;
        this.platform.isMobileSafari =
            this.platform.isIDevice &&
                _ua.indexOf("Safari") > -1 &&
                _ua.indexOf("CriOS") < 0;
        this.platform.isStandalone = this.platform.isInWebAppiOS || this.platform.isInWebAppChrome;
        this.platform.isiPad = this.platform.isMobileSafari && _ua.indexOf("iPad") > -1;
        this.platform.isiPhone = this.platform.isMobileSafari && _ua.indexOf("iPad") === -1;
        this.platform.isCompatible =
            this.platform.isChromium ||
                this.platform.isMobileSafari ||
                this.platform.isSamsung ||
                this.platform.isFireFox ||
                this.platform.isOpera ||
                this.platform.isIDevice;
        if (this.platform.isChromium) {
            console.log('We are on Chrome!');
        }
        if (this.platform.isIDevice) {
            console.log('We are on Chrome!');
        }
    }
};
DownloadPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
DownloadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-download',
        template: _download_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_download_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService !== "undefined" && src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router) === "function" ? _b : Object])
], DownloadPage);



/***/ }),

/***/ 80009:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/download/download.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-footer {\n  background: #eee;\n  height: 54px;\n  padding-top: 10px;\n}\n\nion-content {\n  --background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23dedede' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23dbdbdb'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\nh2 {\n  margin: 54px auto;\n}\n\n#download-icon {\n  height: 100px;\n  width: 100px;\n  text-align: center;\n  animation: up-and-down 1.5s ease infinite forwards;\n  margin: 0 auto;\n}\n\n@keyframes up-and-down {\n  0% {\n    transform: translateY(10px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(10px);\n  }\n}\n\n.cancel-button {\n  --background: none;\n  font-weight: 600;\n  font-size: 1.07em;\n  color: #e3405f;\n}\n\n.green-button {\n  width: 200px;\n  height: 40px;\n  font-size: 1em;\n  font-weight: 800;\n  margin: 10px auto;\n  --background: #00c400;\n  --transition: 1s;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5NUNBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQWUsWUFBQTtFQUNmLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRTtJQUNFLDJCQUFBO0VBTUY7RUFKQTtJQUNFLDBCQUFBO0VBTUY7RUFKQTtJQUNFLDJCQUFBO0VBTUY7QUFDRjs7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFNRjs7QUFKQTtFQUNFLFlBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU9KIiwiZmlsZSI6ImRvd25sb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBoZWlnaHQ6IDU0cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2RlZGVkZScgc3Ryb2tlLXdpZHRoPScxJyUzRSUzQ3BhdGggZD0nTTc2OSAyMjlMMTAzNyAyNjAuOU05MjcgODgwTDczMSA3MzcgNTIwIDY2MCAzMDkgNTM4IDQwIDU5OSAyOTUgNzY0IDEyNi41IDg3OS41IDQwIDU5OS0xOTcgNDkzIDEwMiAzODItMzEgMjI5IDEyNi41IDc5LjUtNjktNjMnLyUzRSUzQ3BhdGggZD0nTS0zMSAyMjlMMjM3IDI2MSAzOTAgMzgyIDYwMyA0OTMgMzA4LjUgNTM3LjUgMTAxLjUgMzgxLjVNMzcwIDkwNUwyOTUgNzY0Jy8lM0UlM0NwYXRoIGQ9J001MjAgNjYwTDU3OCA4NDIgNzMxIDczNyA4NDAgNTk5IDYwMyA0OTMgNTIwIDY2MCAyOTUgNzY0IDMwOSA1MzggMzkwIDM4MiA1MzkgMjY5IDc2OSAyMjkgNTc3LjUgNDEuNSAzNzAgMTA1IDI5NSAtMzYgMTI2LjUgNzkuNSAyMzcgMjYxIDEwMiAzODIgNDAgNTk5IC02OSA3MzcgMTI3IDg4MCcvJTNFJTNDcGF0aCBkPSdNNTIwLTE0MEw1NzguNSA0Mi41IDczMS02M002MDMgNDkzTDUzOSAyNjkgMjM3IDI2MSAzNzAgMTA1TTkwMiAzODJMNTM5IDI2OU0zOTAgMzgyTDEwMiAzODInLyUzRSUzQ3BhdGggZD0nTS0yMjIgNDJMMTI2LjUgNzkuNSAzNzAgMTA1IDUzOSAyNjkgNTc3LjUgNDEuNSA5MjcgODAgNzY5IDIyOSA5MDIgMzgyIDYwMyA0OTMgNzMxIDczN00yOTUtMzZMNTc3LjUgNDEuNU01NzggODQyTDI5NSA3NjRNNDAtMjAxTDEyNyA4ME0xMDIgMzgyTC0yNjEgMjY5Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzZGJkYmRiJyUzRSUzQ2NpcmNsZSBjeD0nNzY5JyBjeT0nMjI5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUzOScgY3k9JzI2OScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc2MDMnIGN5PSc0OTMnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNzMxJyBjeT0nNzM3JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzUyMCcgY3k9JzY2MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczMDknIGN5PSc1MzgnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjk1JyBjeT0nNzY0JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzQwJyBjeT0nNTk5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzEwMicgY3k9JzM4Micgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScxMjcnIGN5PSc4MCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczNzAnIGN5PScxMDUnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTc4JyBjeT0nNDInIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMjM3JyBjeT0nMjYxJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzM5MCcgY3k9JzM4Micgcj0nNScvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xufVxuaDJ7XG4gIG1hcmdpbjogNTRweCBhdXRvO1xufVxuI2Rvd25sb2FkLWljb24ge1xuICBoZWlnaHQ6IDEwMHB4OyB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiB1cC1hbmQtZG93biAxLjVzIGVhc2UgaW5maW5pdGUgZm9yd2FyZHM7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQGtleWZyYW1lcyB1cC1hbmQtZG93biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbn1cbi5jYW5jZWwtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMDdlbTtcbiAgY29sb3I6ICNlMzQwNWY7XG59XG4uZ3JlZW4tYnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIC0tYmFja2dyb3VuZDogIzAwYzQwMDtcbiAgICAtLXRyYW5zaXRpb246IDFzO1xuICAgIC0tY29sb3I6IHdoaXRlO1xufSJdfQ== */";

/***/ }),

/***/ 53241:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/download/download.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 94vh;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"4\">\n      <div id=\"download-icon\">\n        <img src=\"../../../../assets/icons/download-outline.svg\" alt=\"Download-Icon\">\n      </div>\n        <h2 *ngIf=\"this.appInstalled\">App Installed!</h2>\n        <h2 *ngIf=\"this.platform.isChromium\">Download this app to from Chrome to your Device. No need to look for it in an app store!</h2>\n        <h2 *ngIf=\"this.platform.isSamsung\">Download this app to Samsung</h2>\n        <h2 *ngIf=\"this.platform.isOpera\">Download this app to Opera</h2>\n        <h2 *ngIf=\"this.platform.isFireFox\">Download this app to Firefox</h2>\n        <!-- <h2 *ngIf=\"this.platform.isStandalone\">This app is Standalone</h2> -->\n        <!-- <h2 *ngIf=\"this.platform.isiPad\">Download this app to Ipad</h2>\n        <h2 *ngIf=\"this.platform.isiPhone\">Download this app to iPhone</h2>\n        <h2 *ngIf=\"this.platform.isMobileSafari\">Download this app to Safari iOS</h2> -->\n        <h2 *ngIf=\"this.platform.isIDevice\">\n        1) Look for <img height=\"24\" src=\"../../../../assets/icons/share-outline.svg\" alt=\"Apple-Share-Button\"><br>\n        2) Select \"Add To Homescreen\"\n      </h2>\n\n        <div class=\"ion-text-center\" *ngIf=\"!this.platform.isIDevice\">\n          <ion-button class=\"green-button\" (click)=\"download()\">\n            Download\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-button class=\"cancel-button\" expand=\"full\" (click)=\"cancel()\">\n    Cancel\n  </ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_download_download_module_ts.js.map