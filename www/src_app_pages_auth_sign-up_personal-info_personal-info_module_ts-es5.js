(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_sign-up_personal-info_personal-info_module_ts"], {
    /***/
    28229:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/personal-info/personal-info-routing.module.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonalInfoPageRoutingModule": function PersonalInfoPageRoutingModule() {
          return (
            /* binding */
            _PersonalInfoPageRoutingModule
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


      var _personal_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./personal-info.page */
      84828);

      var routes = [{
        path: '',
        component: _personal_info_page__WEBPACK_IMPORTED_MODULE_0__.PersonalInfoPage
      }, {
        path: 'profile-picture',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_modals_image-cropper_image-cropper_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_auth_sign-up_profile-picture_profile-picture_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../profile-picture/profile-picture.module */
          49305)).then(function (m) {
            return m.ProfilePicturePageModule;
          });
        }
      }];

      var _PersonalInfoPageRoutingModule = function PersonalInfoPageRoutingModule() {
        _classCallCheck(this, PersonalInfoPageRoutingModule);
      };

      _PersonalInfoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PersonalInfoPageRoutingModule);
      /***/
    },

    /***/
    22361:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonalInfoPageModule": function PersonalInfoPageModule() {
          return (
            /* binding */
            _PersonalInfoPageModule
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


      var _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./personal-info-routing.module */
      28229);
      /* harmony import */


      var _personal_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./personal-info.page */
      84828);

      var _PersonalInfoPageModule = function PersonalInfoPageModule() {
        _classCallCheck(this, PersonalInfoPageModule);
      };

      _PersonalInfoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _personal_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalInfoPageRoutingModule],
        declarations: [_personal_info_page__WEBPACK_IMPORTED_MODULE_1__.PersonalInfoPage]
      })], _PersonalInfoPageModule);
      /***/
    },

    /***/
    84828:
    /*!************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.page.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonalInfoPage": function PersonalInfoPage() {
          return (
            /* binding */
            _PersonalInfoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_personal_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./personal-info.page.html */
      41467);
      /* harmony import */


      var _personal_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./personal-info.page.scss */
      69892);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/auth.service */
      37556);

      var _PersonalInfoPage = /*#__PURE__*/function () {
        function PersonalInfoPage( // private auth: AuthService,
        formBuilder, router, auth) {
          _classCallCheck(this, PersonalInfoPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.auth = auth;
          this.validationMessasges = {
            phone: [// tslint:disable-next-line: max-line-length
            {
              type: 'text',
              message: 'Phone Number has to be 10 digits (xxx) xxx - xxxx'
            }]
          };
          this.fullNamePattern = '/^([^0-9]*)$/';
          this.phonePattern = '';
        }

        _createClass(PersonalInfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userInfoForm = this.formBuilder.group({
              fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])],
              gender: '',
              // Date of Birth
              dob: '',
              school: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              about: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
            this.formOnChanges();
          }
        }, {
          key: "goToProfilePicturePage",
          value: function goToProfilePicturePage(data) {
            console.log(data);
            this.auth.getPersonalInfo(data);
            this.router.navigate(['/personal-info/profile-picture']);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('Sign up cancelled');
            this.router.navigate(['']);
          }
        }, {
          key: "formOnChanges",
          value: function formOnChanges() {
            console.log(this.userInfoForm);
          }
        }]);

        return PersonalInfoPage;
      }();

      _PersonalInfoPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }];
      };

      _PersonalInfoPage.propDecorators = {
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
          args: ['ioninput', {
            "static": false
          }]
        }]
      };
      _PersonalInfoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-personal-info',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_personal_info_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_personal_info_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder, _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router, _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService])], _PersonalInfoPage);
      /***/
    },

    /***/
    41467:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/auth/sign-up/personal-info/personal-info.page.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <img style=\"margin-right: 16px;\" height=\"32\" src=\"../../../../../assets/icon/fyf-white-icon.svg\">\n    </ion-buttons>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../../../assets/icon/Logo 2.0.svg\" alt=\"\" srcset=\"\">\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"cancel()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <h6 class=\"text-header\">Please enter your profile information.</h6>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <!-- Form -->\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"4\">\n        <form [formGroup]=\"userInfoForm\" (ngSubmit)=\"goToProfilePicturePage(this.userInfoForm.value)\">\n\n            <ion-list class=\"line-input\">\n\n            <ion-item>\n              <ion-input\n              #ioninput\n              autocapitalize=\"on\"\n              required\n              inputmode=\"text\"\n              formControlName=\"fullName\"\n              placeholder=\"First & Last Name\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input\n              autocapitalize=\"on\"\n              required\n              maxlength=\"10\"\n              inputmode=\"text\"\n              formControlName=\"phone\"\n              placeholder=\"Phone: (xxx) xxx - xxxx\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-select\n                  required\n                  formControlName=\"gender\"  placeholder=\"Gender\">\n                    <ion-select-option value=\"female\">Female</ion-select-option>\n                    <ion-select-option value=\"male\">Male</ion-select-option>\n                  </ion-select>\n            </ion-item>\n\n            <ion-item>\n                  <ion-label>Date of Birth</ion-label>\n                  <ion-datetime\n                    required\n                    min=\"2000\"\n                    displayFormat=\"DDD. MMM DD, YY\"\n                    placeholder=\"Select Date\"\n                    formControlName=\"dob\"\n                    monthShortNames=\"Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec\"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n              <ion-input\n                required\n                formControlName=\"school\" placeholder=\"School\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-select\n                  required\n                  formControlName=\"grade\"   placeholder=\"Grade\">\n                  <ion-select-option value=\"7th Grade\">Middle School - 7th Grade</ion-select-option>\n                  <ion-select-option value=\"8th Grade\">Middle School - 8th Grade</ion-select-option>\n                  <ion-select-option value=\"High School - Freshmen\">High School - Freshmen</ion-select-option>\n                  <ion-select-option value=\"High School - Sophmore\">High School - Sophmore</ion-select-option>\n                  <ion-select-option value=\"High School - Junior\">High School - Junior</ion-select-option>\n                  <ion-select-option value=\"High School - Senior\">High School - Senior</ion-select-option>\n                  <ion-select-option value=\"Collge - Freshmen\">College - Freshmen</ion-select-option>\n                  <ion-select-option value=\"Collge - Sophmore\">College - Sophmore</ion-select-option>\n\n                  </ion-select>\n\n            </ion-item>\n\n              <ion-textarea\n              autogrow=\"true\"\n              autocapitalize=\"true\"\n              rows=\"10\"\n              spellcheck=\"true\"\n              wrap=\"soft\"\n              type=\"text\"\n              maxlength=\"300\"\n              placeholder=\"About Me - 300 Character Limit\" formControlName=\"about\">\n            </ion-textarea>\n            </ion-list>\n\n            <div class=\"ion-text-center\">\n              <ion-button class=\"orange-button\" type=\"submit\">NEXT</ion-button><br>\n               <ion-button (click)=\"this.auth.cancelSignUp()\" class=\"cancel-button\">\n                cancel\n              </ion-button>\n            </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n";
      /***/
    },

    /***/
    69892:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/auth/sign-up/personal-info/personal-info.page.scss ***!
      \**************************************************************************/

    /***/
    function _(module) {
      module.exports = ".blue-button {\n  margin: 0px 0 100px 0;\n}\n\n.desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0c375f);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 40px;\n  width: 200px;\n  margin-bottom: 100px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\nion-textarea {\n  background: white;\n  transition: 0.2s;\n  border-radius: 4px;\n  padding: 8px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n  border: 2px solid #0055a5;\n}\n\n.char-limit {\n  float: right;\n  position: relative;\n  top: 20px;\n  margin-bottom: 80px;\n  color: #e4405f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUVKOztBQUFJO0VBQ0UsY0FBQTtBQUVOOztBQUNBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFQTs7QUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFHRjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBS0oiLCJmaWxlIjoicGVyc29uYWwtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZS1idXR0b24ge1xuICAgIG1hcmdpbjogMHB4IDAgMTAwcHggMDtcbn1cbi5kZXNrdG9wLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzMjY7XG4gIFxuICAgIGgxIHtcbiAgICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIH1cbiAgfVxuLmJhY2stYnV0dG9uIHtcbi0tY29sb3I6IHdoaXRlO1xuLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoIzAwNTVhNSwgIzBjMzc1Zik7XG5oZWlnaHQ6IDI0cHg7XG4tLWJvcmRlci1yYWRpdXM6IDVweDtcbndpZHRoOiAxMDBweDtcbmZvbnQtc2l6ZTogMC41ZW07XG5mb250LXdlaWdodDogNjAwO1xuZGlzcGxheTogYmxvY2s7XG59XG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xuICAtLWJhY2tncm91bmQ6ICBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZjE1Yjc3LCAjZTQ0MDVmKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuaW9uLXRleHRhcmVhe1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3gtc2hhZG93OiAxcHggMTBweCAyNnB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNTVhNTtcbn1cbi5jaGFyLWxpbWl0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgIGNvbG9yOiAjZTQ0MDVmO1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_sign-up_personal-info_personal-info_module_ts-es5.js.map