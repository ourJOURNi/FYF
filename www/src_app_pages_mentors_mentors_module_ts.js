"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mentors_mentors_module_ts"],{

/***/ 79313:
/*!*********************************************************!*\
  !*** ./src/app/pages/mentors/mentors-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorsPageRoutingModule": () => (/* binding */ MentorsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mentors_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mentors.page */ 56685);




const routes = [
    {
        path: '',
        component: _mentors_page__WEBPACK_IMPORTED_MODULE_0__.MentorsPage
    },
    {
        path: 'mentor-page/:name/:title/:email/:description/:photo/:city/:state',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mentors_mentor-page_mentor-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mentor-page/mentor-page.module */ 77156)).then(m => m.MentorPagePageModule)
    },
    {
        path: 'mentor-chat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mentors_mentor-chat_mentor-chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mentor-chat/mentor-chat.module */ 36358)).then(m => m.MentorChatPageModule)
    }
];
let MentorsPageRoutingModule = class MentorsPageRoutingModule {
};
MentorsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MentorsPageRoutingModule);



/***/ }),

/***/ 53982:
/*!*************************************************!*\
  !*** ./src/app/pages/mentors/mentors.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorsPageModule": () => (/* binding */ MentorsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/custom-component.module */ 64941);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var _mentors_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentors-routing.module */ 79313);
/* harmony import */ var _mentors_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mentors.page */ 56685);
/* harmony import */ var src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/new-message-mentor/new-message-mentor.module */ 33692);









let MentorsPageModule = class MentorsPageModule {
};
MentorsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__.CustomComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _mentors_routing_module__WEBPACK_IMPORTED_MODULE_1__.MentorsPageRoutingModule,
            src_app_modals_new_message_mentor_new_message_mentor_module__WEBPACK_IMPORTED_MODULE_3__.NewMessageMentorPageModule
        ],
        declarations: [_mentors_page__WEBPACK_IMPORTED_MODULE_2__.MentorsPage]
    })
], MentorsPageModule);



/***/ }),

/***/ 56685:
/*!***********************************************!*\
  !*** ./src/app/pages/mentors/mentors.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentorsPage": () => (/* binding */ MentorsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mentors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mentors.page.html?ngResource */ 4289);
/* harmony import */ var _mentors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentors.page.scss?ngResource */ 74564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _services_mentor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mentor.service */ 58600);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34362);
/* harmony import */ var src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/new-message-mentor/new-message-mentor.page */ 8960);
var _a, _b, _c, _d;









let MentorsPage = class MentorsPage {
    constructor(router, mentors, loading, modal) {
        this.router = router;
        this.mentors = mentors;
        this.loading = loading;
        this.modal = modal;
        this.searching = false;
        this.noSearchInput = false;
        this.allMentors = this.mentors.allMentors;
    }
    ngOnInit() {
        this.getMentors();
        this.trackRoute();
    }
    trackRoute() {
        this.routerSub = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(data => {
            console.log(data['url']);
            let url = data['url'];
            if (url.includes('/home/mentors/mentor-page/')) {
                console.log('Hide Tab Bar!');
                let tabBar = document.getElementById('tabBar');
                tabBar.style.height = '0px';
                tabBar.style.transition = '1s';
            }
            else {
                let tabBar = document.getElementById('tabBar');
                console.log(tabBar);
                tabBar.style.height = '50px';
                tabBar.style.transition = '1s';
            }
        });
    }
    getMentors() {
        // this.mentors.getMentors().subscribe(
        //   mentors => {
        //     this.allMentors = Object.values(mentors);
        //     console.log(this.allMentors);
        //     this.allMentorsLength = this.allMentors.length;
        //     this.allMentors.reverse();
        //     this.loadedAllMentors = Object.values(mentors);
        //     this.loadedAllMentors.reverse();
        //     this.searching = false;
        //   }
        // );
    }
    chat() {
        this.router.navigate(['/home/mentors/mentor-chat']);
    }
    newMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const newMessageModalConfig = yield this.modal.create({
                component: src_app_modals_new_message_mentor_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_3__.NewMessageMentorPage,
                componentProps: {}
            });
            yield newMessageModalConfig.present();
        });
    }
    mentorPage(mentor) {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/mentors/mentor-page', mentor.name, mentor.title, mentor.email, mentor.description, mentor.photo, mentor.city, mentor.state]);
    }
    filter($event) {
        this.initializeItems();
        let searchTerm = $event.detail.value;
        this.presentLoadingWithOptions();
        console.log(this.allMentors);
        this.allMentors = this.allMentors.filter(currentMentors => {
            console.log(currentMentors);
            if (!currentMentors || !searchTerm) {
                console.log('No results from that search');
                this.noSearchInput = true;
            }
            if (currentMentors.name && searchTerm) {
                if (currentMentors.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    console.log(currentMentors.name);
                    console.log((currentMentors));
                    this.searchTerm = searchTerm;
                    this.searching = true;
                    this.noSearchInput = false;
                    return true;
                }
                return false;
            }
        });
        this.allMentorsLength = this.allMentors.length;
        // If there are no matches with the searchTerm
        if (this.allMentorsLength === 0) {
            console.log('No results from that search');
            this.searching = true;
            this.searchTerm = searchTerm;
            this.searchbar.getInputElement().then((searchbarInputElement) => {
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
    initializeItems() {
        this.allMentors = this.loadedAllMentors;
    }
    presentLoadingWithOptions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                duration: 1000,
                message: 'Searching for Mentors...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
MentorsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_mentor_service__WEBPACK_IMPORTED_MODULE_2__.MentorsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
MentorsPage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar, { static: false },] }]
};
MentorsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-mentors',
        template: _mentors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mentors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router) === "function" ? _a : Object, typeof (_b = typeof _services_mentor_service__WEBPACK_IMPORTED_MODULE_2__.MentorsService !== "undefined" && _services_mentor_service__WEBPACK_IMPORTED_MODULE_2__.MentorsService) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController) === "function" ? _d : Object])
], MentorsPage);



/***/ }),

/***/ 74564:
/*!************************************************************!*\
  !*** ./src/app/pages/mentors/mentors.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  padding: 0px;\n}\n\n.desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(51, 51, 51, 0.1490196078);\n}\n\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n\n.message-mobile {\n  font-size: 1em;\n  background: white;\n  padding: 8px;\n  border-left: 5px solid #0055a5;\n}\n\nion-list {\n  background: none;\n}\n\nion-item {\n  border-bottom: 1px solid #ebebeb;\n}\n\n.mentor-name {\n  color: #0055a5;\n  font-weight: 600;\n}\n\n.new-message {\n  color: #faa71b;\n}\n\nh2 {\n  font-size: 1em;\n  font-weight: 400;\n}\n\n.blue-button {\n  animation: none;\n}\n\n.info-button {\n  --background: none;\n  --color: #0055a5;\n  width: 50px;\n}\n\n.info-button ion-icon {\n  --olor: #0055a5;\n}\n\n.mentor-thumbnail {\n  position: absolute;\n  top: 25px;\n  right: 15px;\n  height: 50px;\n  width: 50px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-radius: 50px;\n}\n\n.mentors {\n  background: white;\n  height: auto;\n  margin: 20px 0 20px 0;\n  box-shadow: none;\n  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  padding: 40px 40px 40px 40px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-delay: 0.1s;\n}\n\n.mentors:hover {\n  background: white;\n  height: auto;\n  margin: 30px 0 30px 0;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid rgb(0, 81, 145);\n  border-radius: 5px;\n  padding: 40px 40px 40px 40px;\n  transition: 0.1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#mentor-name {\n  font-size: 1.3em;\n  font-weight: 800;\n}\n\n#mentor-title {\n  font-size: 1.1em;\n  font-weight: 800;\n  color: #777;\n  position: relative;\n  top: -10px;\n}\n\n#searchbar-wrapper {\n  transition: 0.5s;\n  height: 60px;\n  background: #edf3f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRvcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVEQUFBO0FBRUY7O0FBQUU7RUFDRSxjQUFBO0FBRUo7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQ0FBQTtBQUlGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUU7RUFDRSxlQUFBO0FBRUo7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUVBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVGIiwiZmlsZSI6Im1lbnRvcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uZGVza3RvcC10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMzI2O1xuXG4gIGgxIHtcbiAgICBjb2xvcjogIzAwNTVhNTtcbiAgfVxufVxuLm1lc3NhZ2UtbW9iaWxlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwNTVhNTtcbn1cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG59XG4ubWVudG9ye1xuICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIC8vIGJveC1zaGFkb3c6IDFweCAxMHB4IDI2cHggcmdiYSgwLDAsMCwwLjA1KTtcbn1cbi5tZW50b3ItbmFtZSB7XG4gIGNvbG9yOiAjMDA1NWE1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm5ldy1tZXNzYWdle1xuICBjb2xvcjogI2ZhYTcxYjtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuLmluZm8tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWNvbG9yOiAjMDA1NWE1O1xuICB3aWR0aDogNTBweDtcblxuICBpb24taWNvbiB7XG4gICAgLS1vbG9yOiAjMDA1NWE1O1xuICB9XG59XG4ubWVudG9yLXRodW1ibmFpbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICByaWdodDogMTVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4ubWVudG9ycyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LDAuNCk7XG4gIGJveC1zaGFkb3c6IDFweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0MHB4IDQwcHggNDBweCA0MHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG4ubWVudG9yczpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCAwIDMwcHggMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4MSwgMTQ1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0MHB4IDQwcHggNDBweCA0MHB4O1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4jbWVudG9yLW5hbWUge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4jbWVudG9yLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICM3Nzc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbn1cblxuI3NlYXJjaGJhci13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWRmM2Y4O1xuIH0iXX0= */";

/***/ }),

/***/ 4289:
/*!************************************************************!*\
  !*** ./src/app/pages/mentors/mentors.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header no-border class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img height=\"35\" style=\"position: relative; left: 8px;\" src=\"../../../assets/icon/mentor-icon-blue.png\">\n      <ion-title>Mentors</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../assets/icon/mentor-icon-blue.svg\" alt=\"\" srcset=\"\">\n                  <h1>Mentors</h1>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"4\">\n        <p class=\"ion-hide-md-up message-mobile\">Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!</p>\n        <p class=\"ion-hide-md-down\" style=\"font-size: 1.1em; margin-top: 24px;\">Need advice? Want feedback on something? Want to learn about a particular career field? Browse through Find Your Future's list of Mentors, and contact them if you have any questions!</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col  size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"4\">\n        <ion-list>\n          <ion-item class=\"mentor\" *ngFor=\"let mentor of allMentors\" lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img src=\"{{mentor.photo}}\" />\n            </ion-avatar>\n            <ion-label>\n              <h2 class=\"mentor-name\">{{mentor.name}}</h2>\n              <p>{{mentor.title}}</p>\n            </ion-label>\n            <ion-buttons slot=\"end\">\n              <ion-button class=\"info-button\" (click)=\"mentorPage(mentor)\">\n                <img height=\"20\" src=\"../../../assets/icon/right-chevron.svg\" alt=\"Right Chevron\">\n              </ion-button>\n              <!-- <ion-button (click)=\"newMessage()\">\n                <ion-icon size=\"large\"  class=\"new-message\" slot=\"start\" name=\"create\"></ion-icon>\n              </ion-button> -->\n            </ion-buttons>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mentors_mentors_module_ts.js.map