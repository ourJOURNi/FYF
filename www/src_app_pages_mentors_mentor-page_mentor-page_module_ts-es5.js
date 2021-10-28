(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_mentors_mentor-page_mentor-page_module_ts"], {
    /***/
    11216: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorPagePageRoutingModule": function MentorPagePageRoutingModule() {
          return (
            /* binding */
            _MentorPagePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _mentor_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mentor-page.page */
      98186);

      var routes = [{
        path: '',
        component: _mentor_page_page__WEBPACK_IMPORTED_MODULE_0__.MentorPagePage
      }, {
        path: 'contact-mentor/:name/:email/:photo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_mentors_mentor-page_contact-mentor_contact-mentor_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./contact-mentor/contact-mentor.module */
          20918)).then(function (m) {
            return m.ContactMentorPageModule;
          });
        }
      }];

      var _MentorPagePageRoutingModule = function MentorPagePageRoutingModule() {
        _classCallCheck(this, MentorPagePageRoutingModule);
      };

      _MentorPagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MentorPagePageRoutingModule);
      /***/
    },

    /***/
    77156: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorPagePageModule": function MentorPagePageModule() {
          return (
            /* binding */
            _MentorPagePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mentor-page-routing.module */
      11216);
      /* harmony import */


      var _mentor_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mentor-page.page */
      98186);

      var _MentorPagePageModule = function MentorPagePageModule() {
        _classCallCheck(this, MentorPagePageModule);
      };

      _MentorPagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mentor_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MentorPagePageRoutingModule],
        declarations: [_mentor_page_page__WEBPACK_IMPORTED_MODULE_1__.MentorPagePage]
      })], _MentorPagePageModule);
      /***/
    },

    /***/
    98186: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorPagePage": function MentorPagePage() {
          return (
            /* binding */
            _MentorPagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mentor_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mentor-page.page.html */
      8059);
      /* harmony import */


      var _mentor_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mentor-page.page.scss */
      53580);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _MentorPagePage = /*#__PURE__*/function () {
        function MentorPagePage(activatedRoute, router, toastController) {
          _classCallCheck(this, MentorPagePage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.toastController = toastController;
        }

        _createClass(MentorPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // tslint:disable-next-line: radix
            var title = this.activatedRoute.snapshot.paramMap.get('title'); // tslint:disable-next-line: radix

            var name = this.activatedRoute.snapshot.paramMap.get('name'); // tslint:disable-next-line: radix

            var email = this.activatedRoute.snapshot.paramMap.get('email'); // tslint:disable-next-line: radix

            var description = this.activatedRoute.snapshot.paramMap.get('description'); // tslint:disable-next-line: radix

            var photo = this.activatedRoute.snapshot.paramMap.get('photo'); // tslint:disable-next-line: radix

            var city = this.activatedRoute.snapshot.paramMap.get('city'); // tslint:disable-next-line: radix

            var state = this.activatedRoute.snapshot.paramMap.get('state');
            this.mentorName = name;
            this.mentorTitle = title;
            this.mentorEmail = email;
            this.mentorDescription = description;
            this.mentorPhoto = photo;
            this.mentorCity = city;
            this.mentorState = state;
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/mentors']);
          }
        }, {
          key: "contactMentor",
          value: function contactMentor() {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor', this.mentorName, this.mentorEmail, this.mentorPhoto]);
          }
        }]);

        return MentorPagePage;
      }();

      _MentorPagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }];
      };

      _MentorPagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mentor-page',
        template: _raw_loader_mentor_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mentor_page_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute, _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController])], _MentorPagePage);
      /***/
    },

    /***/
    53580: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".blue-button-small {\n  --background: #0055a5;\n  opacity: 1;\n  height: 24px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  position: relative;\n  top: 100px;\n  z-index: 9999;\n}\n\n.toolbar-contact-button {\n  width: 90px;\n  font-weight: 600;\n  --background: #faa71b;\n  position: relative;\n  right: 8px;\n}\n\n.orange-button {\n  margin: 120px auto;\n}\n\n#mentor-profile-picture {\n  margin-top: 50px;\n  height: 50px;\n  width: 50px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n  opacity: 1;\n}\n\n#mentor-name {\n  font-size: 2em;\n  font-weight: 900;\n  opacity: 1;\n}\n\n#mentor-title {\n  font-size: 1em;\n  font-weight: 600;\n  color: #0055a5;\n  opacity: 1;\n}\n\n#mentor-location {\n  font-size: 1em;\n  font-weight: 600;\n  color: #0055a5;\n  opacity: 1;\n}\n\n#mentor-email {\n  font-size: 1em;\n  color: #999;\n  opacity: 1;\n}\n\n#mentor-description {\n  font-size: 1.1em;\n  color: #222;\n  line-height: 1.7em;\n  opacity: 1;\n}\n\n#contact-button {\n  margin: 50px 0 250px 0;\n  --background: linear-gradient(#0672c4, #005191);\n  --background-hover: linear-gradient(#0672c4, #222);\n  --transition: 0.5s;\n  font-weight: 800;\n}\n\n@-webkit-keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvci1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQWMsV0FBQTtFQUNkLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBTUo7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFNSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUhBO0VBQ0ksc0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUhBO0VBQ0k7SUFDSSw0QkFBQTtFQU1OO0VBSkU7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFNTjtBQUNGOztBQWJBO0VBQ0k7SUFDSSw0QkFBQTtFQU1OO0VBSkU7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFNTjtBQUNGOztBQUhBO0VBQ0k7SUFDSSw0QkFBQTtFQUtOO0VBSEU7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFLTjtBQUNGOztBQVpBO0VBQ0k7SUFDSSw0QkFBQTtFQUtOO0VBSEU7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUFLTjtBQUNGIiwiZmlsZSI6Im1lbnRvci1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVlLWJ1dHRvbi1zbWFsbCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbn1cbi50b29sYmFyLWNvbnRhY3QtYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYmFja2dyb3VuZDogI2ZhYTcxYjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDhweDtcbiAgfVxuLm9yYW5nZS1idXR0b257XG4gICAgbWFyZ2luOiAxMjBweCBhdXRvO1xufVxuI21lbnRvci1wcm9maWxlLXBpY3R1cmV7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7IHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLy8gYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwLjVzIGZvcndhcmRzO1xufVxuI21lbnRvci1uYW1lIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiNtZW50b3ItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gICAgb3BhY2l0eTogMTtcbn1cbiNtZW50b3ItbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuI21lbnRvci1lbWFpbCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICM5OTk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuI21lbnRvci1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XG4gICAgb3BhY2l0eTogMTtcbn1cblxuI2NvbnRhY3QtYnV0dG9uIHtcbiAgICBtYXJnaW46IDUwcHggMCAyNTBweCAwO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMwMDUxOTEpO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwNjcyYzQsICMyMjIpO1xuICAgIC0tdHJhbnNpdGlvbjogMC41cztcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWxlZnQge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbi11cCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    8059: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button style=\"--width: 50px;\" class=\"toolbar-contact-button\" (click)=\"contactMentor()\">\n        Contact\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Mentor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <!-- Desktop Header -->\n    <ion-row class=\"ion-hide-md-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <ion-button class=\"blue-button-small ion-float-right\" (click)=\"back()\">\n          Back\n       </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mentors -->\n    <ion-row class=\"mentor ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"7\" size-lg=\"6\" size-xl=\"5\">\n        <div id=\"mentor-profile-picture\"></div>\n            <p id=\"mentor-name\">{{mentorName}}</p>\n            <p id=\"mentor-title\">{{mentorTitle}}</p>\n            <p id=\"mentor-location\">{{mentorCity}}, {{mentorState}}</p>\n            <p id=\"mentor-description\">{{mentorDescription}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"9\" size-md=\"2\" class=\"ion-text-center\">\n        <ion-button class=\"orange-button\"  (click)=\"contactMentor()\">\n          Contact\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_mentors_mentor-page_mentor-page_module_ts-es5.js.map