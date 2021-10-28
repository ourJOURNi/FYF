(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_mentors_mentors_module_ts"], {
    /***/
    79313: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorsPageRoutingModule": function MentorsPageRoutingModule() {
          return (
            /* binding */
            _MentorsPageRoutingModule
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


      var _mentors_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mentors.page */
      56685);

      var routes = [{
        path: '',
        component: _mentors_page__WEBPACK_IMPORTED_MODULE_0__.MentorsPage
      }, {
        path: 'mentor-page/:name/:title/:email/:description/:photo/:city/:state',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_mentors_mentor-page_mentor-page_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./mentor-page/mentor-page.module */
          77156)).then(function (m) {
            return m.MentorPagePageModule;
          });
        }
      }, {
        path: 'mentor-chat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_mentors_mentor-chat_mentor-chat_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./mentor-chat/mentor-chat.module */
          36358)).then(function (m) {
            return m.MentorChatPageModule;
          });
        }
      }];

      var _MentorsPageRoutingModule = function MentorsPageRoutingModule() {
        _classCallCheck(this, MentorsPageRoutingModule);
      };

      _MentorsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MentorsPageRoutingModule);
      /***/
    },

    /***/
    53982: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorsPageModule": function MentorsPageModule() {
          return (
            /* binding */
            _MentorsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../components/custom-component.module */
      64941);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _mentors_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mentors-routing.module */
      79313);
      /* harmony import */


      var _mentors_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mentors.page */
      56685);
      /* harmony import */


      var src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modals/new-message-mentor/new-message-mentor.module */
      33692);

      var _MentorsPageModule = function MentorsPageModule() {
        _classCallCheck(this, MentorsPageModule);
      };

      _MentorsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__.CustomComponentsModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _mentors_routing_module__WEBPACK_IMPORTED_MODULE_1__.MentorsPageRoutingModule, src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_3__.NewMessageMentorPageModule],
        declarations: [_mentors_page__WEBPACK_IMPORTED_MODULE_2__.MentorsPage]
      })], _MentorsPageModule);
      /***/
    },

    /***/
    56685: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorsPage": function MentorsPage() {
          return (
            /* binding */
            _MentorsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mentors_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mentors.page.html */
      94293);
      /* harmony import */


      var _mentors_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mentors.page.scss */
      81898);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var _services_mentor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/mentor.service */
      58600);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modals/new-message-mentor/new-message-mentor.page */
      8960);

      var _MentorsPage = /*#__PURE__*/function () {
        function MentorsPage(router, mentors, loading, modal) {
          _classCallCheck(this, MentorsPage);

          this.router = router;
          this.mentors = mentors;
          this.loading = loading;
          this.modal = modal;
          this.searching = false;
          this.noSearchInput = false;
        }

        _createClass(MentorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMentors();
            this.trackRoute();
          }
        }, {
          key: "trackRoute",
          value: function trackRoute() {
            this.routerSub = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(function (e) {
              return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd;
            })).subscribe(function (data) {
              console.log(data['url']);
              var url = data['url'];

              if (url.includes('/home/mentors/mentor-page/')) {
                console.log('Hide Tab Bar!');
                var tabBar = document.getElementById('tabBar');
                tabBar.style.height = '0px';
                tabBar.style.transition = '1s';
              } else {
                var _tabBar = document.getElementById('tabBar');

                console.log(_tabBar);
                _tabBar.style.height = '50px';
                _tabBar.style.transition = '1s';
              }
            });
          }
        }, {
          key: "getMentors",
          value: function getMentors() {
            var _this = this;

            this.mentors.getMentors().subscribe(function (mentors) {
              _this.allMentors = Object.values(mentors);
              console.log(_this.allMentors);
              _this.allMentorsLength = _this.allMentors.length;

              _this.allMentors.reverse();

              _this.loadedAllMentors = Object.values(mentors);

              _this.loadedAllMentors.reverse();

              _this.searching = false;
            });
          }
        }, {
          key: "chat",
          value: function chat() {
            this.router.navigate(['/home/mentors/mentor-chat']);
          }
        }, {
          key: "newMessage",
          value: function newMessage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var newMessageModalConfig;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modal.create({
                        component: src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_3__.NewMessageMentorPage,
                        componentProps: {}
                      });

                    case 2:
                      newMessageModalConfig = _context.sent;
                      _context.next = 5;
                      return newMessageModalConfig.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "mentorPage",
          value: function mentorPage(mentor) {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/home/mentors/mentor-page', mentor.name, mentor.title, mentor.email, mentor.description, mentor.photo, mentor.city, mentor.state]);
          }
        }, {
          key: "filter",
          value: function filter($event) {
            var _this2 = this;

            this.initializeItems();
            var searchTerm = $event.detail.value;
            this.presentLoadingWithOptions();
            console.log(this.allMentors);
            this.allMentors = this.allMentors.filter(function (currentMentors) {
              console.log(currentMentors);

              if (!currentMentors || !searchTerm) {
                console.log('No results from that search');
                _this2.noSearchInput = true;
              }

              if (currentMentors.name && searchTerm) {
                if (currentMentors.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                  console.log(currentMentors.name);
                  console.log(currentMentors);
                  _this2.searchTerm = searchTerm;
                  _this2.searching = true;
                  _this2.noSearchInput = false;
                  return true;
                }

                return false;
              }
            });
            this.allMentorsLength = this.allMentors.length; // If there are no matches with the searchTerm

            if (this.allMentorsLength === 0) {
              console.log('No results from that search');
              this.searching = true;
              this.searchTerm = searchTerm;
              this.searchbar.getInputElement().then(function (searchbarInputElement) {
                searchbarInputElement.value = '';
              });
              this.noSearchInput = true;
            }

            if (!searchTerm) {
              console.log('Search term is empty; showing all events instead');
              this.noSearchInput = false;
              this.searching = false;
              this.getMentors();
            }
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            this.allMentors = this.loadedAllMentors;
          }
        }, {
          key: "presentLoadingWithOptions",
          value: function presentLoadingWithOptions() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.create({
                        duration: 1000,
                        message: 'Searching for Mentors...',
                        translucent: true,
                        cssClass: 'custom-class custom-loading'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return MentorsPage;
      }();

      _MentorsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _services_mentor_service__WEBPACK_IMPORTED_MODULE_2__.MentorsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }];
      };

      _MentorsPage.propDecorators = {
        searchbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar, {
            "static": false
          }]
        }]
      };
      _MentorsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-mentors',
        template: _raw_loader_mentors_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mentors_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _services_mentor_service__WEBPACK_IMPORTED_MODULE_2__.MentorsService, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController])], _MentorsPage);
      /***/
    },

    /***/
    58600: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MentorsService": function MentorsService() {
          return (
            /* binding */
            _MentorsService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _MentorsService = /*#__PURE__*/function () {
        function MentorsService(http) {
          _classCallCheck(this, MentorsService);

          this.http = http;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        }

        _createClass(MentorsService, [{
          key: "getMentors",
          value: function getMentors() {
            console.log('Getting Mentors');
            return this.http.get("".concat(this.BACKEND_URL, "/api/mentors"));
          }
        }, {
          key: "sendMentorAnEmail",
          value: function sendMentorAnEmail(message, mentorName, mentorEmail, studentEmail, studentName, studentCity, studentState, studentAge, studentGrade, studentSchool, studentProfilePic, studentResume) {
            console.log("Sending email to ".concat(mentorEmail));
            return this.http.post("".concat(this.BACKEND_URL, "/api/mentors/mentor-message"), {
              message: message,
              mentorName: mentorName,
              mentorEmail: mentorEmail,
              studentEmail: studentEmail,
              studentName: studentName,
              studentCity: studentCity,
              studentState: studentState,
              studentAge: studentAge,
              studentGrade: studentGrade,
              studentSchool: studentSchool,
              studentProfilePic: studentProfilePic,
              studentResume: studentResume
            });
          }
        }]);

        return MentorsService;
      }();

      _MentorsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _MentorsService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient])], _MentorsService);
      /***/
    },

    /***/
    81898: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0px;\n}\n\n.desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n\nion-list {\n  background: none;\n}\n\n.mentor {\n  border-radius: 5px;\n  margin-bottom: 16px;\n  box-shadow: 1px 10px 26px rgba(0, 0, 0, 0.05);\n}\n\n.new-message {\n  color: #faa71b;\n}\n\nh2 {\n  font-size: 1em;\n  font-weight: 400;\n}\n\n.blue-button {\n  -webkit-animation: none;\n          animation: none;\n}\n\n.info-button {\n  --background: #0055a5;\n  --color: white;\n  font-weight: 600;\n  margin-right: 20px;\n  width: 80px;\n}\n\n.mentor-thumbnail {\n  position: absolute;\n  top: 25px;\n  right: 15px;\n  height: 50px;\n  width: 50px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n}\n\n.mentors {\n  background: white;\n  height: auto;\n  margin: 20px 0 20px 0;\n  box-shadow: none;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding: 40px 40px 40px 40px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 0.1s;\n}\n\n.mentors:hover {\n  background: white;\n  height: auto;\n  margin: 30px 0 30px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding: 40px 40px 40px 40px;\n  transition: 0.1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#mentor-name {\n  font-size: 1.3em;\n  font-weight: 800;\n}\n\n#mentor-title {\n  font-size: 1.1em;\n  font-weight: 800;\n  color: #777;\n  position: relative;\n  top: -10px;\n}\n\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBRUY7O0FBQUU7RUFDRSxjQUFBO0FBRUo7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFEQTtFQUNFLHVCQUFBO1VBQUEsZUFBQTtBQUlGOztBQUZBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUFvQixXQUFBO0FBTXRCOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0VBQ0Esc0JBQUE7QUFPRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1FQUFBO0FBT0Y7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU9GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFPRiIsImZpbGUiOiJtZW50b3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzMyNjtcblxuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5tZW50b3J7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMjZweCByZ2JhKDAsMCwwLDAuMDUpO1xufVxuLm5ldy1tZXNzYWdle1xuICBjb2xvcjogI2ZhYTcxYjtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuLmluZm8tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB3aWR0aDogODBweDtcbn1cbi5tZW50b3ItdGh1bWJuYWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5tZW50b3JzIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDQwcHggNDBweCA0MHB4IDQwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi5tZW50b3JzOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgMzBweCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDQwcHggNDBweCA0MHB4IDQwcHg7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbiNtZW50b3ItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbiNtZW50b3ItdGl0bGUge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzc3NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMHB4O1xufVxuXG4jc2VhcmNoYmFyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGYzZjg7XG4gfSJdfQ== */";
      /***/
    },

    /***/
    94293: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-item style=\"--background: #0055a5;\">\n      <ion-avatar slot=\"start\">\n        <img height=\"80\" src=\"../../../assets/icon/mentor-icon.svg\">\n      </ion-avatar>\n      <ion-label style=\"font-size: 1.2em; color: white;\">Mentors</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../assets/icon/mentor-icon-blue.svg\" alt=\"\" srcset=\"\">\n                  <h1>Mentors</h1>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"4\">\n        <p class=\"ion-hide-md-up\" style=\"font-size: 1em;\">Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!</p>\n        <p class=\"ion-hide-md-down\" style=\"font-size: 1.1em; margin-top: 24px;\">Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\"  style=\" margin-top: 20px;\">\n      <ion-col  size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"4\">\n        <ion-list>\n          <ion-item class=\"mentor\" *ngFor=\"let mentor of allMentors\" lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img src=\"{{mentor.photo}}\" />\n            </ion-avatar>\n            <ion-label>\n              <h2>{{mentor.name}}</h2>\n              <p>{{mentor.title}}</p>\n            </ion-label>\n            <ion-buttons slot=\"end\">\n              <ion-button class=\"info-button\" (click)=\"mentorPage(mentor)\">\n                Info\n              </ion-button>\n              <!-- <ion-button (click)=\"newMessage()\">\n                <ion-icon size=\"large\"  class=\"new-message\" slot=\"start\" name=\"create\"></ion-icon>\n              </ion-button> -->\n            </ion-buttons>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_mentors_mentors_module_ts-es5.js.map