(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["common"], {
    /***/
    13179:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      56837);
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      11388);
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      99502);

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return (0, _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    95147:
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      19369);

      var attachComponent = /*#__PURE__*/function () {
        var _ref = (0, _Users_ferro_Desktop_United_Way_FYF_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    99502:
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    15907:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    43784:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createColorClasses
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getClassMap
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hostContext
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            openURL
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      19369);

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = (0, _Users_ferro_Desktop_United_Way_FYF_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    20147:
    /*!**************************************************************!*\
      !*** ./src/app/emitters/single-post-page-emitter.service.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SinglePostPageEmitterService": function SinglePostPageEmitterService() {
          return (
            /* binding */
            _SinglePostPageEmitterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SinglePostPageEmitterService = /*#__PURE__*/function () {
        function SinglePostPageEmitterService() {
          _classCallCheck(this, SinglePostPageEmitterService);

          this.invokeSinglePostPageRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(SinglePostPageEmitterService, [{
          key: "singlePostPageRefresh",
          value: function singlePostPageRefresh() {
            this.invokeSinglePostPageRefresh.emit();
          }
        }]);

        return SinglePostPageEmitterService;
      }();

      _SinglePostPageEmitterService.ctorParameters = function () {
        return [];
      };

      _SinglePostPageEmitterService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], _SinglePostPageEmitterService);
      /***/
    },

    /***/
    81984:
    /*!**************************************************************!*\
      !*** ./src/app/modals/edit-post/edit-post-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditPostPageRoutingModule": function EditPostPageRoutingModule() {
          return (
            /* binding */
            _EditPostPageRoutingModule
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


      var _edit_post_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-post.page */
      17518);

      var routes = [{
        path: '',
        component: _edit_post_page__WEBPACK_IMPORTED_MODULE_0__.EditPostPage
      }];

      var _EditPostPageRoutingModule = function EditPostPageRoutingModule() {
        _classCallCheck(this, EditPostPageRoutingModule);
      };

      _EditPostPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditPostPageRoutingModule);
      /***/
    },

    /***/
    22447:
    /*!******************************************************!*\
      !*** ./src/app/modals/edit-post/edit-post.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditPostPageModule": function EditPostPageModule() {
          return (
            /* binding */
            _EditPostPageModule
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


      var _edit_post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-post-routing.module */
      81984);
      /* harmony import */


      var _edit_post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-post.page */
      17518);

      var _EditPostPageModule = function EditPostPageModule() {
        _classCallCheck(this, EditPostPageModule);
      };

      _EditPostPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _edit_post_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPostPageRoutingModule],
        declarations: [_edit_post_page__WEBPACK_IMPORTED_MODULE_1__.EditPostPage]
      })], _EditPostPageModule);
      /***/
    },

    /***/
    17518:
    /*!****************************************************!*\
      !*** ./src/app/modals/edit-post/edit-post.page.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditPostPage": function EditPostPage() {
          return (
            /* binding */
            _EditPostPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_post_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-post.page.html */
      26317);
      /* harmony import */


      var _edit_post_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit-post.page.scss */
      19946);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/post.service */
      69166);
      /* harmony import */


      var src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/emitters/post-page-emitter.service */
      50806);

      var _EditPostPage = /*#__PURE__*/function () {
        function EditPostPage(formBuilder, modal, navParams, loading, posts, alert, postEmitterService) {
          _classCallCheck(this, EditPostPage);

          this.formBuilder = formBuilder;
          this.modal = modal;
          this.navParams = navParams;
          this.loading = loading;
          this.posts = posts;
          this.alert = alert;
          this.postEmitterService = postEmitterService;
        }

        _createClass(EditPostPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.postID = this.navParams.get('postID');
            this.post = this.navParams.get('post');
            console.log(this.post); // To collect comment data

            this.editPostForm = this.formBuilder.group({
              newPost: this.post
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            console.log('cancelling');
            this.modal.dismiss();
          }
        }, {
          key: "refreshComment",
          value: function refreshComment() {
            this.postEmitterService.postPageRefresh();
          }
        }, {
          key: "edit",
          value: function edit(newPost) {
            var _this = this;

            console.log('editting');
            this.posts.editPost(this.postID, newPost.newPost).subscribe(function (post) {
              console.log(post);

              _this.editLoading(post['post']);
            });
          }
        }, {
          key: "editLoading",
          value: function editLoading(post) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.create({
                        message: 'Editing your Post...',
                        duration: 1000
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      console.log(post.post);
                      _context3.next = 8;
                      return loading.onDidDismiss();

                    case 8:
                      _yield$loading$onDidD = _context3.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      _context3.next = 13;
                      return this.modal.dismiss();

                    case 13:
                      _context3.next = 15;
                      return this.posts.postsSubject$.next(post);

                    case 15:
                      _context3.next = 17;
                      return this.confirmAlert();

                    case 17:
                      console.log('Loading dismissed!');

                    case 18:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "confirmAlert",
          value: function confirmAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alert.create({
                        cssClass: 'success-alert',
                        message: 'Your Post has been edited.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return EditPostPage;
      }();

      _EditPostPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__.PostPageEmitterService
        }];
      };

      _EditPostPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-post',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_post_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_post_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController, src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostsService, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController, src_app_emitters_post_page_emitter_service__WEBPACK_IMPORTED_MODULE_3__.PostPageEmitterService])], _EditPostPage);
      /***/
    },

    /***/
    84790:
    /*!********************************************************************************!*\
      !*** ./src/app/modals/new-message-mentor/new-message-mentor-routing.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewMessageMentorPageRoutingModule": function NewMessageMentorPageRoutingModule() {
          return (
            /* binding */
            _NewMessageMentorPageRoutingModule
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


      var _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-message-mentor.page */
      8960);

      var routes = [{
        path: '',
        component: _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_0__.NewMessageMentorPage
      }];

      var _NewMessageMentorPageRoutingModule = function NewMessageMentorPageRoutingModule() {
        _classCallCheck(this, NewMessageMentorPageRoutingModule);
      };

      _NewMessageMentorPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewMessageMentorPageRoutingModule);
      /***/
    },

    /***/
    33692:
    /*!************************************************************************!*\
      !*** ./src/app/modals/new-message-mentor/new-message-mentor.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewMessageMentorPageModule": function NewMessageMentorPageModule() {
          return (
            /* binding */
            _NewMessageMentorPageModule
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


      var _new_message_mentor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-message-mentor-routing.module */
      84790);
      /* harmony import */


      var _new_message_mentor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-message-mentor.page */
      8960);

      var _NewMessageMentorPageModule = function NewMessageMentorPageModule() {
        _classCallCheck(this, NewMessageMentorPageModule);
      };

      _NewMessageMentorPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _new_message_mentor_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewMessageMentorPageRoutingModule],
        declarations: [_new_message_mentor_page__WEBPACK_IMPORTED_MODULE_1__.NewMessageMentorPage]
      })], _NewMessageMentorPageModule);
      /***/
    },

    /***/
    8960:
    /*!**********************************************************************!*\
      !*** ./src/app/modals/new-message-mentor/new-message-mentor.page.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewMessageMentorPage": function NewMessageMentorPage() {
          return (
            /* binding */
            _NewMessageMentorPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_message_mentor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-message-mentor.page.html */
      13142);
      /* harmony import */


      var _new_message_mentor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-message-mentor.page.scss */
      37336);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _NewMessageMentorPage = /*#__PURE__*/function () {
        function NewMessageMentorPage(modal) {
          _classCallCheck(this, NewMessageMentorPage);

          this.modal = modal;
        }

        _createClass(NewMessageMentorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cancel",
          value: function cancel() {
            this.modal.dismiss();
          }
        }]);

        return NewMessageMentorPage;
      }();

      _NewMessageMentorPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _NewMessageMentorPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-new-message-mentor',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_message_mentor_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_message_mentor_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController])], _NewMessageMentorPage);
      /***/
    },

    /***/
    11320:
    /*!**********************************************************************************!*\
      !*** ./src/app/modals/new-message-student/new-message-student-routing.module.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewMessageStudentPageRoutingModule": function NewMessageStudentPageRoutingModule() {
          return (
            /* binding */
            _NewMessageStudentPageRoutingModule
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


      var _new_message_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-message-student.page */
      50420);

      var routes = [{
        path: '',
        component: _new_message_student_page__WEBPACK_IMPORTED_MODULE_0__.NewMessageStudentPage
      }];

      var _NewMessageStudentPageRoutingModule = function NewMessageStudentPageRoutingModule() {
        _classCallCheck(this, NewMessageStudentPageRoutingModule);
      };

      _NewMessageStudentPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewMessageStudentPageRoutingModule);
      /***/
    },

    /***/
    65367:
    /*!**************************************************************************!*\
      !*** ./src/app/modals/new-message-student/new-message-student.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewMessageStudentPageModule": function NewMessageStudentPageModule() {
          return (
            /* binding */
            _NewMessageStudentPageModule
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


      var _new_message_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-message-student-routing.module */
      11320);
      /* harmony import */


      var _new_message_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-message-student.page */
      50420);

      var _NewMessageStudentPageModule = function NewMessageStudentPageModule() {
        _classCallCheck(this, NewMessageStudentPageModule);
      };

      _NewMessageStudentPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _new_message_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewMessageStudentPageRoutingModule],
        declarations: [_new_message_student_page__WEBPACK_IMPORTED_MODULE_1__.NewMessageStudentPage]
      })], _NewMessageStudentPageModule);
      /***/
    },

    /***/
    50420:
    /*!************************************************************************!*\
      !*** ./src/app/modals/new-message-student/new-message-student.page.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewMessageStudentPage": function NewMessageStudentPage() {
          return (
            /* binding */
            _NewMessageStudentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_message_student_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-message-student.page.html */
      91746);
      /* harmony import */


      var _new_message_student_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-message-student.page.scss */
      28017);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/student-chat.service */
      70009);
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/profile.service */
      39181);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _NewMessageStudentPage = /*#__PURE__*/function () {
        function NewMessageStudentPage(modal, studentChat, profile, router) {
          _classCallCheck(this, NewMessageStudentPage);

          this.modal = modal;
          this.studentChat = studentChat;
          this.profile = profile;
          this.router = router;
        }

        _createClass(NewMessageStudentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.profile.getUserDetails().subscribe(function (data) {
              _this2.requestingUserFullname = data['fullName'];
              _this2.requestingUserEmail = data['email'];
              _this2.requestingUserPhoto = data['profilePicture'];

              _this2.profile.getAllUsers().subscribe(function (users) {
                // Make sure to remove the Client user from list of users to search through
                // There is no need to message yourself.
                var usersArray = Object.values(users);
                var index = usersArray.map(function (user) {
                  return user.email;
                }).indexOf(_this2.requestingUserEmail);
                usersArray.splice(index, 1);
                _this2.users = usersArray;
                _this2.loadedUsers = usersArray;
              });
            });
          }
        }, {
          key: "search",
          value: function search(event) {
            var _this3 = this;

            this.initializeItems();
            console.log(this.loadedUsers);
            var search = event.target.value;
            console.log(search);
            this.users = this.users.filter(function (currentUsers) {
              if (!currentUsers || !search) {
                console.log('No results from that search');
                _this3.noSearchInput = true;
              }

              if (currentUsers.name && search) {
                if (currentUsers.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                  _this3.searchTerm = search;
                  _this3.searching = true;
                  _this3.noSearchInput = false;
                  return true;
                }

                return false;
              }

              _this3.noSearchInput = true;
            });
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            this.users = this.loadedUsers;
          }
        }, {
          key: "newChatroom",
          value: function newChatroom(respondingUserFullName, respondingUserEmail, respondingUserPhoto) {
            var _this4 = this;

            this.profile.getUserDetails().subscribe(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var conversations, _iterator, _step, convo;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        // If Client user has alreadt started a conversation with a user, direct that user to their conversations chat page.
                        conversations = data['studentChat'];
                        _iterator = _createForOfIteratorHelper(conversations);
                        _context5.prev = 2;

                        _iterator.s();

                      case 4:
                        if ((_step = _iterator.n()).done) {
                          _context5.next = 15;
                          break;
                        }

                        convo = _step.value;

                        if (!(convo.requestingUserEmail === respondingUserEmail || convo.respondingUserEmail === respondingUserEmail)) {
                          _context5.next = 13;
                          break;
                        }

                        console.log('You have already started a conversation with this user');
                        _context5.next = 10;
                        return this.cancel();

                      case 10:
                        _context5.next = 12;
                        return this.router.navigate(['home/posts/student-chat/chat-page', convo.chatId, this.requestingUserFullname, this.requestingUserPhoto, this.requestingUserEmail]);

                      case 12:
                        return _context5.abrupt("return", _context5.sent);

                      case 13:
                        _context5.next = 4;
                        break;

                      case 15:
                        _context5.next = 20;
                        break;

                      case 17:
                        _context5.prev = 17;
                        _context5.t0 = _context5["catch"](2);

                        _iterator.e(_context5.t0);

                      case 20:
                        _context5.prev = 20;

                        _iterator.f();

                        return _context5.finish(20);

                      case 23:
                        // tslint:disable-next-line: max-line-length
                        // this.studentChat.newChatroom(this.requestingUserFullname, this.requestingUserEmail, this.requestingUserPhoto, respondingUserFullName, respondingUserEmail, respondingUserPhoto);
                        // this.studentChat.newChatRoom.subscribe(
                        //   d => {
                        //     this.studentChat.conversations$.next(Object.values(d));
                        //   }
                        // );
                        this.cancel();

                      case 24:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this, [[2, 17, 20, 23]]);
              }));
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.modal.dismiss();
          }
        }]);

        return NewMessageStudentPage;
      }();

      _NewMessageStudentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
        }, {
          type: src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_2__.StudentChatService
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _NewMessageStudentPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-new-message-student',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_message_student_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_message_student_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController, src_app_services_student_chat_service__WEBPACK_IMPORTED_MODULE_2__.StudentChatService, src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService, _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router])], _NewMessageStudentPage);
      /***/
    },

    /***/
    28086:
    /*!********************************************************************!*\
      !*** ./src/app/modals/report-convo/report-convo-routing.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportConvoPageRoutingModule": function ReportConvoPageRoutingModule() {
          return (
            /* binding */
            _ReportConvoPageRoutingModule
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


      var _report_convo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./report-convo.page */
      10980);

      var routes = [{
        path: '',
        component: _report_convo_page__WEBPACK_IMPORTED_MODULE_0__.ReportConvoPage
      }];

      var _ReportConvoPageRoutingModule = function ReportConvoPageRoutingModule() {
        _classCallCheck(this, ReportConvoPageRoutingModule);
      };

      _ReportConvoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ReportConvoPageRoutingModule);
      /***/
    },

    /***/
    83281:
    /*!************************************************************!*\
      !*** ./src/app/modals/report-convo/report-convo.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportConvoPageModule": function ReportConvoPageModule() {
          return (
            /* binding */
            _ReportConvoPageModule
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


      var _report_convo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./report-convo-routing.module */
      28086);
      /* harmony import */


      var _report_convo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./report-convo.page */
      10980);

      var _ReportConvoPageModule = function ReportConvoPageModule() {
        _classCallCheck(this, ReportConvoPageModule);
      };

      _ReportConvoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _report_convo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportConvoPageRoutingModule],
        declarations: [_report_convo_page__WEBPACK_IMPORTED_MODULE_1__.ReportConvoPage]
      })], _ReportConvoPageModule);
      /***/
    },

    /***/
    10980:
    /*!**********************************************************!*\
      !*** ./src/app/modals/report-convo/report-convo.page.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportConvoPage": function ReportConvoPage() {
          return (
            /* binding */
            _ReportConvoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_convo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./report-convo.page.html */
      78319);
      /* harmony import */


      var _report_convo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./report-convo.page.scss */
      36858);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _ReportConvoPage = /*#__PURE__*/function () {
        function ReportConvoPage(modal, alert, toast) {
          _classCallCheck(this, ReportConvoPage);

          this.modal = modal;
          this.alert = alert;
          this.toast = toast;
        }

        _createClass(ReportConvoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cancel",
          value: function cancel() {
            this.modal.dismiss();
          }
        }, {
          key: "reportAlert",
          value: function reportAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alert.create({
                        cssClass: '',
                        header: 'Are you sure you want to report this conversation?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      _context6.next = 2;
                                      return this.reportedToast();

                                    case 2:
                                      _context6.next = 4;
                                      return this.modal.dismiss();

                                    case 4:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee6, this);
                            }));
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "reportedToast",
          value: function reportedToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toast.create({
                        cssClass: 'favorited-toast',
                        message: "You have reported you conversation with ---",
                        duration: 2000
                      });

                    case 2:
                      toast = _context8.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return ReportConvoPage;
      }();

      _ReportConvoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }];
      };

      _ReportConvoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-report-convo',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_report_convo_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_convo_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController])], _ReportConvoPage);
      /***/
    },

    /***/
    83256:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/profile/resume/view-resume/view-resume-routing.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewResumePageRoutingModule": function ViewResumePageRoutingModule() {
          return (
            /* binding */
            _ViewResumePageRoutingModule
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


      var _view_resume_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./view-resume.page */
      33311);

      var routes = [{
        path: '',
        component: _view_resume_page__WEBPACK_IMPORTED_MODULE_0__.ViewResumePage
      }];

      var _ViewResumePageRoutingModule = function ViewResumePageRoutingModule() {
        _classCallCheck(this, ViewResumePageRoutingModule);
      };

      _ViewResumePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ViewResumePageRoutingModule);
      /***/
    },

    /***/
    47659:
    /*!************************************************************************!*\
      !*** ./src/app/pages/profile/resume/view-resume/view-resume.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewResumePageModule": function ViewResumePageModule() {
          return (
            /* binding */
            _ViewResumePageModule
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


      var _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./view-resume-routing.module */
      83256);
      /* harmony import */


      var _view_resume_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view-resume.page */
      33311);

      var _ViewResumePageModule = function ViewResumePageModule() {
        _classCallCheck(this, ViewResumePageModule);
      };

      _ViewResumePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewResumePageRoutingModule],
        declarations: [_view_resume_page__WEBPACK_IMPORTED_MODULE_1__.ViewResumePage]
      })], _ViewResumePageModule);
      /***/
    },

    /***/
    33311:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewResumePage": function ViewResumePage() {
          return (
            /* binding */
            _ViewResumePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_resume_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./view-resume.page.html */
      18732);
      /* harmony import */


      var _view_resume_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view-resume.page.scss */
      68814);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/profile.service */
      39181);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);

      var _ViewResumePage = /*#__PURE__*/function () {
        function ViewResumePage(router, profile, domSanitizer) {
          _classCallCheck(this, ViewResumePage);

          this.router = router;
          this.profile = profile;
          this.domSanitizer = domSanitizer;
        }

        _createClass(ViewResumePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.profile.getUserDetails().subscribe(function (data) {
              console.log(data);

              _this6.profile.resume.next(data['resume']);
            });
            this.profile.resume.subscribe(function (data) {
              _this6.resume = data;
            });
          }
        }, {
          key: "sanitizeImageUrl",
          value: function sanitizeImageUrl(imageUrl) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/home/profile']);
          }
        }, {
          key: "updateResume",
          value: function updateResume() {
            console.log('Updating Resume from View Resume page');
            this.router.navigate(['/home/profile/update-resume']);
          }
        }]);

        return ViewResumePage;
      }();

      _ViewResumePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer
        }];
      };

      _ViewResumePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-view-resume',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_resume_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_resume_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router, _services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer])], _ViewResumePage);
      /***/
    },

    /***/
    61957:
    /*!*******************************************!*\
      !*** ./src/app/services/photo.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotoService": function PhotoService() {
          return (
            /* binding */
            _PhotoService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _PhotoService = /*#__PURE__*/function () {
        function PhotoService(http) {
          _classCallCheck(this, PhotoService);

          this.http = http;
          this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        } // Testing


        _createClass(PhotoService, [{
          key: "imageUpload",
          value: function imageUpload(imageForm) {
            console.log('image uploading');
            console.log(imageForm);
            return this.http.post("".concat(this.BACKEND_URL, "/api/photo/upload-profile-picture"), imageForm);
          }
        }, {
          key: "changeProfilePicture",
          value: function changeProfilePicture(imageForm) {
            console.log(imageForm);
            return this.http.post("".concat(this.BACKEND_URL, "/api/photo/change-profile-picture"), imageForm);
          }
        }, {
          key: "updatePostPhotos",
          value: function updatePostPhotos(newPhoto, email) {
            console.log(newPhoto);
            return this.http.post("".concat(this.BACKEND_URL, "/api/photo/update-all-post-pictures"), newPhoto, email).subscribe();
          }
        }, {
          key: "boothPartnerLogo",
          value: function boothPartnerLogo(logo) {
            console.log('both partner uploading');
            console.log(logo);
            return this.http.post("".concat(this.BACKEND_URL, "/api/photo/upload-booth-partner-logo"), logo);
          }
        }]);

        return PhotoService;
      }();

      _PhotoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _PhotoService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient])], _PhotoService);
      /***/
    },

    /***/
    70009:
    /*!**************************************************!*\
      !*** ./src/app/services/student-chat.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentChatService": function StudentChatService() {
          return (
            /* binding */
            _StudentChatService
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      76491); // export class SocketNameSpace extends Socket {
      //   constructor(socketConfig: SocketIoConfig) {
      //     // TODO: Study this a little more
      //     // super()
      //     super(socketConfig);
      //   }
      // }


      var _StudentChatService = function StudentChatService(router) {
        _classCallCheck(this, StudentChatService);

        this.router = router;
        this.conversations$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
      };

      _StudentChatService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }];
      };

      _StudentChatService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router])], _StudentChatService);
      /***/
    },

    /***/
    26317:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modals/edit-post/edit-post.page.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Desktop Header -->\n<ion-header class=\"ion-hide-md-down\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Edit Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-icon id=\"back-arrow-icons\" (click)=\"cancel()\" name=\"arrow-back\"></ion-icon>\n    <ion-title slot=\"end\">Edit Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"10\">\n      <form [formGroup]=\"editPostForm\" (ngSubmit)=\"edit(this.editPostForm.value)\">\n        <ion-textarea\n          (keydown.control.enter)=\"edit(this.editPostForm.value)\"\n          class=\"comment-input\"\n          autogrow=\"true\"\n          autocapitalize=\"true\"\n          rows=\"15\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          formControlName=\"newPost\">\n        </ion-textarea>\n\n        <div style=\"text-align: center; width: 100%; margin-top: 20px;\" >\n          <ion-button class=\"orange-button\" style=\"margin: 0 auto;\" type=\"submit\">\n            Edit\n          </ion-button>\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    13142:
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modals/new-message-mentor/new-message-mentor.page.html ***!
      \***************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">New Message</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-input type=\"text\" placeholder=\"Type a name\"></ion-input>\n        <hr>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../../assets/batman-pro-pic.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Username</h2>\n            <p>Grade</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../../assets/batman-pro-pic.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Username</h2>\n            <p>Grade</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <!-- If there are no search results -->\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <p class=\"no-users\">There are no users with that name</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    91746:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modals/new-message-student/new-message-student.page.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">New Message</p>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button slot=\"end\" color=\"secondary\" (click)=\"newChatroom()\">\n        Next\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row  class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-input type=\"text\" placeholder=\"Type a name\" (keyup)=\"search($event)\"></ion-input>\n        <hr>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <ion-item *ngFor=\"let user of users\" lines=\"none\" (click)=\"newChatroom(user.name, user.email, user.profilePicture)\">\n          <ion-avatar slot=\"start\">\n            <img src={{user.profilePicture}}>\n          </ion-avatar>\n          <ion-label>\n            <h2>{{user.name}}</h2>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <!-- If there are no search results -->\n      <ion-col *ngIf=\"this.users.length == 0\" class=\"ion-text-center\" size-xs=\"12\" size-sm=\"8\" size-lg=\"6\">\n        <p class=\"no-users\">There are no users with that name</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    78319:
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modals/report-convo/report-convo.page.html ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <p class=\"toolbar-title\">Report Conversation</p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Mobile -->\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <h5>Reporting</h5>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../assets/batman-pro-pic.png\" />\n          </ion-avatar>\n          <ion-label>Name</ion-label>\n        </ion-item>\n        <hr>\n        <ion-item>\n          <ion-textarea rows=\"12\" required placeholder=\"Why are you reporting?\"></ion-textarea>\n        </ion-item>\n\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size-xs=\"11\" size-sm=\"8\" size-lg=\"6\">\n        <ion-button class=\"blue-button\" (click)=\"reportAlert()\">\n          Report\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    18732:
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/resume/view-resume/view-resume.page.html ***!
      \***************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>View Resume</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n     <!-- Desktop Header -->\n     <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <h1>Change Resume</h1>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"update-button\" (click)=\"updateResume()\">\n                  Update\n                </ion-button>\n                <ion-button class=\"back-button\" (click)=\"goBack()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"4\">\n        <h6 class=\"text-header\">You can View and Update your Resume here</h6>\n        <object [data]=\"this.sanitizeImageUrl(this.resume)\" width=\"100%\" height=\"700\" type=\"application/pdf\"></object>\n\n      </ion-col>\n      <ion-button (click)=\"updateResume()\" class=\"orange-button ion-hide-md-up\" style=\"width: 150px;\">UPDATE</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    19946:
    /*!******************************************************!*\
      !*** ./src/app/modals/edit-post/edit-post.page.scss ***!
      \******************************************************/

    /***/
    function _(module) {
      module.exports = ".comment-input {\n  background: white;\n  height: auto;\n  margin: 30px 0 60px 0;\n  box-shadow: none;\n  border: 1px solid rgba(0, 81, 145, 0.4);\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.comment-input:hover {\n  height: auto;\n  box-shadow: 1px 1px 3px #999;\n  border: 1px solid #005191;\n  border-radius: 5px;\n  padding-left: 10px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#back-arrow-icons {\n  font-size: 1.5em;\n  position: relative;\n  left: 24px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoiZWRpdC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAzMHB4IDAgNjBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG5cbi5jb21tZW50LWlucHV0OmhvdmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDgxLCAxNDUsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuI2JhY2stYXJyb3ctaWNvbnMge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI0cHg7XG4gIHRvcDogOHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    37336:
    /*!************************************************************************!*\
      !*** ./src/app/modals/new-message-mentor/new-message-mentor.page.scss ***!
      \************************************************************************/

    /***/
    function _(module) {
      module.exports = "ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 0px;\n}\n\nion-input {\n  background: rgba(224, 224, 224, 0.2);\n  height: 60px;\n}\n\nion-button {\n  margin: 50px 0;\n}\n\n.no-users {\n  margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1tZXNzYWdlLW1lbnRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6Im5ldy1tZXNzYWdlLW1lbnRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAxLjRweCBzb2xpZCAjOTk5O1xuICBvcGFjaXR5OiAwLjM7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjIpO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLm5vLXVzZXJzIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn0iXX0= */";
      /***/
    },

    /***/
    28017:
    /*!**************************************************************************!*\
      !*** ./src/app/modals/new-message-student/new-message-student.page.scss ***!
      \**************************************************************************/

    /***/
    function _(module) {
      module.exports = "ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 0px;\n}\n\nion-input {\n  background: rgba(224, 224, 224, 0.2);\n  height: 60px;\n}\n\n.no-users {\n  margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1tZXNzYWdlLXN0dWRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRiIsImZpbGUiOiJuZXctbWVzc2FnZS1zdHVkZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5ociB7XG4gIGJvcmRlci10b3A6IDEuNHB4IHNvbGlkICM5OTk7XG4gIG9wYWNpdHk6IDAuMztcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuMik7XG4gIGhlaWdodDogNjBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG59XG5cbi5uby11c2VycyB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG59Il19 */";
      /***/
    },

    /***/
    36858:
    /*!************************************************************!*\
      !*** ./src/app/modals/report-convo/report-convo.page.scss ***!
      \************************************************************/

    /***/
    function _(module) {
      module.exports = "ion-icon {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: 1.4px solid #999;\n  opacity: 0.3;\n  margin-top: 20px;\n}\n\nion-textarea {\n  background: rgba(224, 224, 224, 0.2);\n  padding: 8px;\n}\n\nion-button {\n  margin: 50px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1jb252by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InJlcG9ydC1jb252by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAxLjRweCBzb2xpZCAjOTk5O1xuICBvcGFjaXR5OiAwLjM7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMC4yKTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiA1MHB4IDA7XG59Il19 */";
      /***/
    },

    /***/
    68814:
    /*!************************************************************************!*\
      !*** ./src/app/pages/profile/resume/view-resume/view-resume.page.scss ***!
      \************************************************************************/

    /***/
    function _(module) {
      module.exports = ".desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.update-button {\n  --color: white;\n  --background: #faa71b;\n  --background-hover: linear-gradient(#faa71b, #c98b22);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n.text-header {\n  background: #e4ebf1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcmVzdW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7QUFBRTtFQUNFLG1CQUFBO0FBR0oiLCJmaWxlIjoidmlldy1yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzMyNjtcblxuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbi5iYWNrLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCMwMDU1YTUsICMwZDJlNGQpO1xuICAgIGhlaWdodDogMjRweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4udXBkYXRlLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFhNzFiO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogbGluZWFyLWdyYWRpZW50KCNmYWE3MWIsICNjOThiMjIpO1xuICAgIGhlaWdodDogMjRweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC50ZXh0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIyOCwgMjM1LCAyNDEpO1xuICB9Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map