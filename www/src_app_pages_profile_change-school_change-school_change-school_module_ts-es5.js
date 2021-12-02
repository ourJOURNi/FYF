(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_profile_change-school_change-school_change-school_module_ts"], {
    /***/
    96545:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/profile/change-school/change-school/change-school-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeSchoolPageRoutingModule": function ChangeSchoolPageRoutingModule() {
          return (
            /* binding */
            _ChangeSchoolPageRoutingModule
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


      var _change_school_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-school.page */
      82256);

      var routes = [{
        path: '',
        component: _change_school_page__WEBPACK_IMPORTED_MODULE_0__.ChangeSchoolPage
      }, {
        path: 'confirm',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_profile_change-school_confirm_confirm_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../confirm/confirm.module */
          32600)).then(function (m) {
            return m.ConfirmPageModule;
          });
        }
      }];

      var _ChangeSchoolPageRoutingModule = function ChangeSchoolPageRoutingModule() {
        _classCallCheck(this, ChangeSchoolPageRoutingModule);
      };

      _ChangeSchoolPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ChangeSchoolPageRoutingModule);
      /***/
    },

    /***/
    46397:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/profile/change-school/change-school/change-school.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeSchoolPageModule": function ChangeSchoolPageModule() {
          return (
            /* binding */
            _ChangeSchoolPageModule
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


      var _change_school_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-school-routing.module */
      96545);
      /* harmony import */


      var _change_school_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-school.page */
      82256);

      var _ChangeSchoolPageModule = function ChangeSchoolPageModule() {
        _classCallCheck(this, ChangeSchoolPageModule);
      };

      _ChangeSchoolPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _change_school_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeSchoolPageRoutingModule],
        declarations: [_change_school_page__WEBPACK_IMPORTED_MODULE_1__.ChangeSchoolPage]
      })], _ChangeSchoolPageModule);
      /***/
    },

    /***/
    82256:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/profile/change-school/change-school/change-school.page.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeSchoolPage": function ChangeSchoolPage() {
          return (
            /* binding */
            _ChangeSchoolPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_change_school_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./change-school.page.html */
      12861);
      /* harmony import */


      var _change_school_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-school.page.scss */
      4967);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/profile.service */
      39181);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);

      var _ChangeSchoolPage = /*#__PURE__*/function () {
        function ChangeSchoolPage(activatedRoute, formBuilder, profile, auth, router) {
          _classCallCheck(this, ChangeSchoolPage);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.profile = profile;
          this.auth = auth;
          this.router = router;
          this.activeEmail = this.profile.email.getValue();
          this.school = this.profile.school.getValue();
          this.grade = this.profile.grade.getValue();
          this.activeEmail = this.auth.user.email;
        }

        _createClass(ChangeSchoolPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changeSchool = this.formBuilder.group({
              newSchool: ["".concat(this.school), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              newGrade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
          }
        }, {
          key: "confirmChangedSchool",
          value: function confirmChangedSchool(email, newSchool, newGrade, password) {
            this.profile.changeSchool(email, newSchool, newGrade, password);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/home/profile']);
          }
        }]);

        return ChangeSchoolPage;
      }();

      _ChangeSchoolPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _ChangeSchoolPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-change-school',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_change_school_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_change_school_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder, _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService, src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router])], _ChangeSchoolPage);
      /***/
    },

    /***/
    12861:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/change-school/change-school/change-school.page.html ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change School/Grade</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class=\"ion-text-center\">\n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <h1>Change Grade & School</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"goBack()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\">\n        <h6 class=\"text-header\">{{grade}}<br>{{school}}</h6>\n      </ion-col>\n    </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"4\">\n            <form [formGroup]=\"changeSchool\" (ngSubmit)=\"confirmChangedSchool(\n              this.activeEmail,\n              this.changeSchool.controls.newSchool.value,\n              this.changeSchool.controls.newGrade.value,\n              this.changeSchool.controls.password.value\n            )\" >\n\n\n            <ion-list class=\"line-input\">\n                <!-- Email -->\n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"Name of new school\"\n                      formControlName=\"newSchool\"\n                      type=\"\">\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-select\n                      required  \n                      formControlName=\"newGrade\"   placeholder=\"Grade\">\n                        <ion-select-option value=\"7th Grade\">Middle School - 7th Grade</ion-select-option>\n                        <ion-select-option value=\"8th Grade\">Middle School - 8th Grade</ion-select-option>\n                        <ion-select-option value=\"High School - Freshmen\">High School - Freshmen</ion-select-option>\n                        <ion-select-option value=\"High School - Sophmore\">High School - Sophmore</ion-select-option>\n                        <ion-select-option value=\"High School - Junior\">High School - Junior</ion-select-option>\n                        <ion-select-option value=\"High School - Senior\">High School - Senior</ion-select-option>\n                        <ion-select-option value=\"Collge - Freshmen\">College - Freshmen</ion-select-option>\n                        <ion-select-option value=\"Collge - Sophmore\">College - Sophmore</ion-select-option>\n    \n                      </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-input\n                      required\n                      placeholder=\"Password\"\n                      formControlName=\"password\"\n                      type=\"password\">\n                    </ion-input>\n                </ion-item>\n              </ion-list>\n                <ion-button type=\"submit\" class=\"orange-button\" style=\"width: unset;\">CHANGE SCHOOL</ion-button>\n              </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n";
      /***/
    },

    /***/
    4967:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/profile/change-school/change-school/change-school.page.scss ***!
      \***********************************************************************************/

    /***/
    function _(module) {
      module.exports = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.text-header {\n  background: #e4ebf1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1zY2hvb2wucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7QUFDTjtBQUVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNFO0VBQ0UsbUJBQUE7QUFFSiIsImZpbGUiOiJjaGFuZ2Utc2Nob29sLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNrdG9wLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzMjY7XG4gIFxuICAgIGgxIHtcbiAgICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIH1cbiAgfVxuICAuYmFjay1idXR0b24ge1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDA1NWE1LCAjMGQyZTRkKTtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAudGV4dC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjgsIDIzNSwgMjQxKTtcbiAgfSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_profile_change-school_change-school_change-school_module_ts-es5.js.map