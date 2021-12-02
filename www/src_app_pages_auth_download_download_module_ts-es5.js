(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_download_download_module_ts"], {
    /***/
    77372:
    /*!****************************************************************!*\
      !*** ./src/app/pages/auth/download/download-routing.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DownloadPageRoutingModule": function DownloadPageRoutingModule() {
          return (
            /* binding */
            _DownloadPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _download_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./download.page */
      11417);

      var routes = [{
        path: '',
        component: _download_page__WEBPACK_IMPORTED_MODULE_0__.DownloadPage
      }];

      var _DownloadPageRoutingModule = function DownloadPageRoutingModule() {
        _classCallCheck(this, DownloadPageRoutingModule);
      };

      _DownloadPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DownloadPageRoutingModule);
      /***/
    },

    /***/
    23064:
    /*!********************************************************!*\
      !*** ./src/app/pages/auth/download/download.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DownloadPageModule": function DownloadPageModule() {
          return (
            /* binding */
            _DownloadPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _download_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./download-routing.module */
      77372);
      /* harmony import */


      var _download_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./download.page */
      11417);

      var _DownloadPageModule = function DownloadPageModule() {
        _classCallCheck(this, DownloadPageModule);
      };

      _DownloadPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _download_routing_module__WEBPACK_IMPORTED_MODULE_0__.DownloadPageRoutingModule],
        declarations: [_download_page__WEBPACK_IMPORTED_MODULE_1__.DownloadPage]
      })], _DownloadPageModule);
      /***/
    },

    /***/
    11417:
    /*!******************************************************!*\
      !*** ./src/app/pages/auth/download/download.page.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DownloadPage": function DownloadPage() {
          return (
            /* binding */
            _DownloadPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_download_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./download.page.html */
      31131);
      /* harmony import */


      var _download_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./download.page.scss */
      69501);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _DownloadPage = /*#__PURE__*/function () {
        function DownloadPage(auth, router) {
          _classCallCheck(this, DownloadPage);

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

        _createClass(DownloadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "download",
          value: function download() {
            this.auth.downloadPrompt.prompt();
            console.log('Downloading app ...');
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.router.navigateByUrl('');
            console.log('Cancelling Download');
          }
        }, {
          key: "checkplatform",
          value: function checkplatform() {
            // browser info and capability
            var _ua = window.navigator.userAgent;
            this.platform.isIDevice = /iphone|ipod|ipad/i.test(navigator.platform);
            this.platform.isSamsung = /Samsung/i.test(_ua);
            this.platform.isFireFox = /Firefox/i.test(_ua);
            this.platform.isOpera = /opr/i.test(_ua);
            this.platform.isEdge = /edg/i.test(_ua); // Opera & FireFox only Trigger on Android

            if (this.platform.isFireFox) {
              this.platform.isFireFox = /android/i.test(_ua);
            }

            if (this.platform.isOpera) {
              this.platform.isOpera = /android/i.test(_ua);
            }

            this.platform.isChromium = "onbeforeinstallprompt" in window; // this.platform.isInWebAppiOS = window.navigator.standalone === true;

            console.log(window);
            this.platform.isInWebAppChrome = window.matchMedia("(display-mode: fullscreen)").matches || window.matchMedia("(display-mode: standalone)").matches || window.matchMedia("(display-mode: minimal-ui)").matches;
            this.platform.isMobileSafari = this.platform.isIDevice && _ua.indexOf("Safari") > -1 && _ua.indexOf("CriOS") < 0;
            this.platform.isStandalone = this.platform.isInWebAppiOS || this.platform.isInWebAppChrome;
            this.platform.isiPad = this.platform.isMobileSafari && _ua.indexOf("iPad") > -1;
            this.platform.isiPhone = this.platform.isMobileSafari && _ua.indexOf("iPad") === -1;
            this.platform.isCompatible = this.platform.isChromium || this.platform.isMobileSafari || this.platform.isSamsung || this.platform.isFireFox || this.platform.isOpera || this.platform.isIDevice;

            if (this.platform.isChromium) {
              console.log('We are on Chrome!');
            }

            if (this.platform.isIDevice) {
              console.log('We are on Chrome!');
            }
          }
        }]);

        return DownloadPage;
      }();

      _DownloadPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _DownloadPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-download',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_download_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_download_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router])], _DownloadPage);
      /***/
    },

    /***/
    31131:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/auth/download/download.page.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 94vh;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"4\">\n      <div id=\"download-icon\">\n        <img src=\"../../../../assets/icons/download-outline.svg\" alt=\"Download-Icon\">\n      </div>\n        <h2 *ngIf=\"this.appInstalled\">App Installed!</h2>\n        <h2 *ngIf=\"this.platform.isChromium\">Download this app to from Chrome to your Device. No need to look for it in an app store!</h2>\n        <h2 *ngIf=\"this.platform.isSamsung\">Download this app to Samsung</h2>\n        <h2 *ngIf=\"this.platform.isOpera\">Download this app to Opera</h2>\n        <h2 *ngIf=\"this.platform.isFireFox\">Download this app to Firefox</h2>\n        <!-- <h2 *ngIf=\"this.platform.isStandalone\">This app is Standalone</h2> -->\n        <!-- <h2 *ngIf=\"this.platform.isiPad\">Download this app to Ipad</h2>\n        <h2 *ngIf=\"this.platform.isiPhone\">Download this app to iPhone</h2>\n        <h2 *ngIf=\"this.platform.isMobileSafari\">Download this app to Safari iOS</h2> -->\n        <h2 *ngIf=\"this.platform.isIDevice\">\n        1) Look for <img height=\"24\" src=\"../../../../assets/icons/share-outline.svg\" alt=\"Apple-Share-Button\"><br>\n        2) Select \"Add To Homescreen\"\n      </h2>\n\n        <div class=\"ion-text-center\" *ngIf=\"!this.platform.isIDevice\">\n          <ion-button class=\"green-button\" (click)=\"download()\">\n            Download\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-button class=\"cancel-button\" expand=\"full\" (click)=\"cancel()\">\n    Cancel\n  </ion-button>\n</ion-footer>";
      /***/
    },

    /***/
    69501:
    /*!********************************************************!*\
      !*** ./src/app/pages/auth/download/download.page.scss ***!
      \********************************************************/

    /***/
    function _(module) {
      module.exports = "ion-footer {\n  background: #eee;\n  height: 54px;\n  padding-top: 10px;\n}\n\nion-content {\n  --background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23dedede' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23dbdbdb'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\nh2 {\n  margin: 54px auto;\n}\n\n#download-icon {\n  height: 100px;\n  width: 100px;\n  text-align: center;\n  -webkit-animation: up-and-down 1.5s ease infinite forwards;\n          animation: up-and-down 1.5s ease infinite forwards;\n  margin: 0 auto;\n}\n\n@-webkit-keyframes up-and-down {\n  0% {\n    transform: translateY(10px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(10px);\n  }\n}\n\n@keyframes up-and-down {\n  0% {\n    transform: translateY(10px);\n  }\n  50% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(10px);\n  }\n}\n\n.cancel-button {\n  --background: none;\n  font-weight: 600;\n  font-size: 1.07em;\n  color: #e3405f;\n}\n\n.green-button {\n  width: 200px;\n  height: 40px;\n  font-size: 1em;\n  font-weight: 800;\n  margin: 10px auto;\n  --background: #00c400;\n  --transition: 1s;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5NUNBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQWUsWUFBQTtFQUNmLGtCQUFBO0VBQ0EsMERBQUE7VUFBQSxrREFBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFO0lBQ0UsMkJBQUE7RUFNRjtFQUpBO0lBQ0UsMEJBQUE7RUFNRjtFQUpBO0lBQ0UsMkJBQUE7RUFNRjtBQUNGOztBQWZBO0VBQ0U7SUFDRSwyQkFBQTtFQU1GO0VBSkE7SUFDRSwwQkFBQTtFQU1GO0VBSkE7SUFDRSwyQkFBQTtFQU1GO0FBQ0Y7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTUY7O0FBSkE7RUFDRSxZQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFPSiIsImZpbGUiOiJkb3dubG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgaGVpZ2h0OiA1NHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzIwMCcgaGVpZ2h0PScyMDAnIHZpZXdCb3g9JzAgMCA4MDAgODAwJyUzRSUzQ2cgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNkZWRlZGUnIHN0cm9rZS13aWR0aD0nMSclM0UlM0NwYXRoIGQ9J003NjkgMjI5TDEwMzcgMjYwLjlNOTI3IDg4MEw3MzEgNzM3IDUyMCA2NjAgMzA5IDUzOCA0MCA1OTkgMjk1IDc2NCAxMjYuNSA4NzkuNSA0MCA1OTktMTk3IDQ5MyAxMDIgMzgyLTMxIDIyOSAxMjYuNSA3OS41LTY5LTYzJy8lM0UlM0NwYXRoIGQ9J00tMzEgMjI5TDIzNyAyNjEgMzkwIDM4MiA2MDMgNDkzIDMwOC41IDUzNy41IDEwMS41IDM4MS41TTM3MCA5MDVMMjk1IDc2NCcvJTNFJTNDcGF0aCBkPSdNNTIwIDY2MEw1NzggODQyIDczMSA3MzcgODQwIDU5OSA2MDMgNDkzIDUyMCA2NjAgMjk1IDc2NCAzMDkgNTM4IDM5MCAzODIgNTM5IDI2OSA3NjkgMjI5IDU3Ny41IDQxLjUgMzcwIDEwNSAyOTUgLTM2IDEyNi41IDc5LjUgMjM3IDI2MSAxMDIgMzgyIDQwIDU5OSAtNjkgNzM3IDEyNyA4ODAnLyUzRSUzQ3BhdGggZD0nTTUyMC0xNDBMNTc4LjUgNDIuNSA3MzEtNjNNNjAzIDQ5M0w1MzkgMjY5IDIzNyAyNjEgMzcwIDEwNU05MDIgMzgyTDUzOSAyNjlNMzkwIDM4MkwxMDIgMzgyJy8lM0UlM0NwYXRoIGQ9J00tMjIyIDQyTDEyNi41IDc5LjUgMzcwIDEwNSA1MzkgMjY5IDU3Ny41IDQxLjUgOTI3IDgwIDc2OSAyMjkgOTAyIDM4MiA2MDMgNDkzIDczMSA3MzdNMjk1LTM2TDU3Ny41IDQxLjVNNTc4IDg0MkwyOTUgNzY0TTQwLTIwMUwxMjcgODBNMTAyIDM4MkwtMjYxIDI2OScvJTNFJTNDL2clM0UlM0NnIGZpbGw9JyUyM2RiZGJkYiclM0UlM0NjaXJjbGUgY3g9Jzc2OScgY3k9JzIyOScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc1MzknIGN5PScyNjknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNjAzJyBjeT0nNDkzJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzczMScgY3k9JzczNycgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc1MjAnIGN5PSc2NjAnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMzA5JyBjeT0nNTM4JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzI5NScgY3k9Jzc2NCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc0MCcgY3k9JzU5OScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScxMDInIGN5PSczODInIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMTI3JyBjeT0nODAnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMzcwJyBjeT0nMTA1JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzU3OCcgY3k9JzQyJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzIzNycgY3k9JzI2MScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSczOTAnIGN5PSczODInIHI9JzUnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbmgye1xuICBtYXJnaW46IDU0cHggYXV0bztcbn1cbiNkb3dubG9hZC1pY29uIHtcbiAgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogdXAtYW5kLWRvd24gMS41cyBlYXNlIGluZmluaXRlIGZvcndhcmRzO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBrZXlmcmFtZXMgdXAtYW5kLWRvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG59XG4uY2FuY2VsLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjA3ZW07XG4gIGNvbG9yOiAjZTM0MDVmO1xufVxuLmdyZWVuLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAtLWJhY2tncm91bmQ6ICMwMGM0MDA7XG4gICAgLS10cmFuc2l0aW9uOiAxcztcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_download_download_module_ts-es5.js.map