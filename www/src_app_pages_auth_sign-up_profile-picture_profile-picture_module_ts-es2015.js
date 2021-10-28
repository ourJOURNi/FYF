(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_auth_sign-up_profile-picture_profile-picture_module_ts"],{

/***/ 7777:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": function() { return /* binding */ CameraSource; },
/* harmony export */   "CameraDirection": function() { return /* binding */ CameraDirection; },
/* harmony export */   "CameraResultType": function() { return /* binding */ CameraResultType; },
/* harmony export */   "FilesystemDirectory": function() { return /* binding */ FilesystemDirectory; },
/* harmony export */   "FilesystemEncoding": function() { return /* binding */ FilesystemEncoding; },
/* harmony export */   "HapticsImpactStyle": function() { return /* binding */ HapticsImpactStyle; },
/* harmony export */   "HapticsNotificationType": function() { return /* binding */ HapticsNotificationType; },
/* harmony export */   "KeyboardStyle": function() { return /* binding */ KeyboardStyle; },
/* harmony export */   "KeyboardResize": function() { return /* binding */ KeyboardResize; },
/* harmony export */   "ActionSheetOptionStyle": function() { return /* binding */ ActionSheetOptionStyle; },
/* harmony export */   "PermissionType": function() { return /* binding */ PermissionType; },
/* harmony export */   "PhotosAlbumType": function() { return /* binding */ PhotosAlbumType; },
/* harmony export */   "StatusBarStyle": function() { return /* binding */ StatusBarStyle; },
/* harmony export */   "StatusBarAnimation": function() { return /* binding */ StatusBarAnimation; }
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
var FilesystemDirectory;
(function (FilesystemDirectory) {
    /**
     * The Documents directory
     * On iOS it's the app's documents directory.
     * Use this directory to store user-generated content.
     * On Android it's the Public Documents folder, so it's accessible from other apps.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`
     */
    FilesystemDirectory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     * On iOS it will use the Documents directory
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     */
    FilesystemDirectory["Data"] = "DATA";
    /**
     * The Cache directory
     * Can be deleted in cases of low memory, so use this directory to write app-specific files
     * that your app can re-create easily.
     */
    FilesystemDirectory["Cache"] = "CACHE";
    /**
     * The external directory
     * On iOS it will use the Documents directory
     * On Android it's the directory on the primary shared/external
     * storage device where the application can place persistent files it owns.
     * These files are internal to the applications, and not typically visible
     * to the user as media.
     * Files will be deleted when the application is uninstalled.
     */
    FilesystemDirectory["External"] = "EXTERNAL";
    /**
     * The external storage directory
     * On iOS it will use the Documents directory
     * On Android it's the primary shared/external storage directory.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`
     */
    FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(FilesystemDirectory || (FilesystemDirectory = {}));
var FilesystemEncoding;
(function (FilesystemEncoding) {
    FilesystemEncoding["UTF8"] = "utf8";
    FilesystemEncoding["ASCII"] = "ascii";
    FilesystemEncoding["UTF16"] = "utf16";
})(FilesystemEncoding || (FilesystemEncoding = {}));
var HapticsImpactStyle;
(function (HapticsImpactStyle) {
    HapticsImpactStyle["Heavy"] = "HEAVY";
    HapticsImpactStyle["Medium"] = "MEDIUM";
    HapticsImpactStyle["Light"] = "LIGHT";
})(HapticsImpactStyle || (HapticsImpactStyle = {}));
var HapticsNotificationType;
(function (HapticsNotificationType) {
    HapticsNotificationType["SUCCESS"] = "SUCCESS";
    HapticsNotificationType["WARNING"] = "WARNING";
    HapticsNotificationType["ERROR"] = "ERROR";
})(HapticsNotificationType || (HapticsNotificationType = {}));
var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Dark"] = "DARK";
    KeyboardStyle["Light"] = "LIGHT";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResize;
(function (KeyboardResize) {
    KeyboardResize["Body"] = "body";
    KeyboardResize["Ionic"] = "ionic";
    KeyboardResize["Native"] = "native";
    KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
var ActionSheetOptionStyle;
(function (ActionSheetOptionStyle) {
    ActionSheetOptionStyle["Default"] = "DEFAULT";
    ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
    ActionSheetOptionStyle["Cancel"] = "CANCEL";
})(ActionSheetOptionStyle || (ActionSheetOptionStyle = {}));
//
var PermissionType;
(function (PermissionType) {
    PermissionType["Camera"] = "camera";
    PermissionType["Photos"] = "photos";
    PermissionType["Geolocation"] = "geolocation";
    PermissionType["Notifications"] = "notifications";
    PermissionType["ClipboardRead"] = "clipboard-read";
    PermissionType["ClipboardWrite"] = "clipboard-write";
    PermissionType["Microphone"] = "microphone";
})(PermissionType || (PermissionType = {}));
var PhotosAlbumType;
(function (PhotosAlbumType) {
    /**
     * Album is a "smart" album (such as Favorites or Recently Added)
     */
    PhotosAlbumType["Smart"] = "smart";
    /**
     * Album is a cloud-shared album
     */
    PhotosAlbumType["Shared"] = "shared";
    /**
     * Album is a user-created album
     */
    PhotosAlbumType["User"] = "user";
})(PhotosAlbumType || (PhotosAlbumType = {}));
var StatusBarStyle;
(function (StatusBarStyle) {
    /**
     * Light text for dark backgrounds.
     */
    StatusBarStyle["Dark"] = "DARK";
    /**
     * Dark text for light backgrounds.
     */
    StatusBarStyle["Light"] = "LIGHT";
})(StatusBarStyle || (StatusBarStyle = {}));
var StatusBarAnimation;
(function (StatusBarAnimation) {
    /**
     * No animation during show/hide.
     */
    StatusBarAnimation["None"] = "NONE";
    /**
     * Slide animation during show/hide.
     */
    StatusBarAnimation["Slide"] = "SLIDE";
    /**
     * Fade animation during show/hide.
     */
    StatusBarAnimation["Fade"] = "FADE";
})(StatusBarAnimation || (StatusBarAnimation = {}));
//# sourceMappingURL=core-plugin-definitions.js.map

/***/ }),

/***/ 32653:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": function() { return /* binding */ Capacitor; },
/* harmony export */   "Plugins": function() { return /* binding */ Plugins; }
/* harmony export */ });
/* harmony import */ var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-runtime */ 31994);

// Create our default Capacitor instance, which will be
// overridden on native platforms
var Capacitor = (function (globalThis) {
    // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
    // Ensure the global is assigned the same Capacitor instance,
    // then export Capacitor so it can be imported in other modules
    return globalThis.Capacitor = (globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__.CapacitorWeb());
})(
// figure out the current globalThis, such as "window", "self" or "global"
// ensure errors are not thrown in an node SSR environment or web worker
typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
var Plugins = Capacitor.Plugins;

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 51188:
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionSheetOptionStyle": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.ActionSheetOptionStyle; },
/* harmony export */   "CameraDirection": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.CameraDirection; },
/* harmony export */   "CameraResultType": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.CameraResultType; },
/* harmony export */   "CameraSource": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.CameraSource; },
/* harmony export */   "FilesystemDirectory": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.FilesystemDirectory; },
/* harmony export */   "FilesystemEncoding": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.FilesystemEncoding; },
/* harmony export */   "HapticsImpactStyle": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.HapticsImpactStyle; },
/* harmony export */   "HapticsNotificationType": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.HapticsNotificationType; },
/* harmony export */   "KeyboardResize": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.KeyboardResize; },
/* harmony export */   "KeyboardStyle": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.KeyboardStyle; },
/* harmony export */   "PermissionType": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.PermissionType; },
/* harmony export */   "PhotosAlbumType": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.PhotosAlbumType; },
/* harmony export */   "StatusBarAnimation": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.StatusBarAnimation; },
/* harmony export */   "StatusBarStyle": function() { return /* reexport safe */ _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__.StatusBarStyle; },
/* harmony export */   "Capacitor": function() { return /* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_1__.Capacitor; },
/* harmony export */   "Plugins": function() { return /* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_1__.Plugins; },
/* harmony export */   "Accessibility": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Accessibility; },
/* harmony export */   "AccessibilityPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.AccessibilityPluginWeb; },
/* harmony export */   "App": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.App; },
/* harmony export */   "AppPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.AppPluginWeb; },
/* harmony export */   "Browser": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Browser; },
/* harmony export */   "BrowserPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.BrowserPluginWeb; },
/* harmony export */   "Camera": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Camera; },
/* harmony export */   "CameraPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.CameraPluginWeb; },
/* harmony export */   "Clipboard": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Clipboard; },
/* harmony export */   "ClipboardPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.ClipboardPluginWeb; },
/* harmony export */   "Device": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Device; },
/* harmony export */   "DevicePluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.DevicePluginWeb; },
/* harmony export */   "Filesystem": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Filesystem; },
/* harmony export */   "FilesystemPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.FilesystemPluginWeb; },
/* harmony export */   "Geolocation": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Geolocation; },
/* harmony export */   "GeolocationPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.GeolocationPluginWeb; },
/* harmony export */   "LocalNotifications": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.LocalNotifications; },
/* harmony export */   "LocalNotificationsPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.LocalNotificationsPluginWeb; },
/* harmony export */   "Modals": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Modals; },
/* harmony export */   "ModalsPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.ModalsPluginWeb; },
/* harmony export */   "Motion": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Motion; },
/* harmony export */   "MotionPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.MotionPluginWeb; },
/* harmony export */   "Network": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Network; },
/* harmony export */   "NetworkPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.NetworkPluginWeb; },
/* harmony export */   "Permissions": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Permissions; },
/* harmony export */   "PermissionsPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.PermissionsPluginWeb; },
/* harmony export */   "Share": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Share; },
/* harmony export */   "SharePluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.SharePluginWeb; },
/* harmony export */   "SplashScreen": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.SplashScreen; },
/* harmony export */   "SplashScreenPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.SplashScreenPluginWeb; },
/* harmony export */   "Storage": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Storage; },
/* harmony export */   "StoragePluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.StoragePluginWeb; },
/* harmony export */   "Toast": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.Toast; },
/* harmony export */   "ToastPluginWeb": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.ToastPluginWeb; },
/* harmony export */   "registerWebPlugin": function() { return /* reexport safe */ _web_plugins__WEBPACK_IMPORTED_MODULE_2__.registerWebPlugin; },
/* harmony export */   "WebPlugin": function() { return /* reexport safe */ _web_index__WEBPACK_IMPORTED_MODULE_3__.WebPlugin; },
/* harmony export */   "WebPluginRegistry": function() { return /* reexport safe */ _web_index__WEBPACK_IMPORTED_MODULE_3__.WebPluginRegistry; },
/* harmony export */   "WebPlugins": function() { return /* reexport safe */ _web_index__WEBPACK_IMPORTED_MODULE_3__.WebPlugins; },
/* harmony export */   "mergeWebPlugin": function() { return /* reexport safe */ _web_index__WEBPACK_IMPORTED_MODULE_3__.mergeWebPlugin; },
/* harmony export */   "mergeWebPlugins": function() { return /* reexport safe */ _web_index__WEBPACK_IMPORTED_MODULE_3__.mergeWebPlugins; }
/* harmony export */ });
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-plugin-definitions */ 7777);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ 32653);
/* harmony import */ var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-plugins */ 59339);
/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/index */ 76605);




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 56949:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "uuid4": function() { return /* binding */ uuid4; }
/* harmony export */ });
var extend = function (target) {
    var objs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
    }
    objs.forEach(function (o) {
        if (o && typeof (o) === 'object') {
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    target[k] = o[k];
                }
            }
        }
    });
    return target;
};
var uuid4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 59339:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accessibility": function() { return /* reexport safe */ _web_accessibility__WEBPACK_IMPORTED_MODULE_2__.Accessibility; },
/* harmony export */   "AccessibilityPluginWeb": function() { return /* reexport safe */ _web_accessibility__WEBPACK_IMPORTED_MODULE_2__.AccessibilityPluginWeb; },
/* harmony export */   "App": function() { return /* reexport safe */ _web_app__WEBPACK_IMPORTED_MODULE_3__.App; },
/* harmony export */   "AppPluginWeb": function() { return /* reexport safe */ _web_app__WEBPACK_IMPORTED_MODULE_3__.AppPluginWeb; },
/* harmony export */   "Browser": function() { return /* reexport safe */ _web_browser__WEBPACK_IMPORTED_MODULE_4__.Browser; },
/* harmony export */   "BrowserPluginWeb": function() { return /* reexport safe */ _web_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserPluginWeb; },
/* harmony export */   "Camera": function() { return /* reexport safe */ _web_camera__WEBPACK_IMPORTED_MODULE_5__.Camera; },
/* harmony export */   "CameraPluginWeb": function() { return /* reexport safe */ _web_camera__WEBPACK_IMPORTED_MODULE_5__.CameraPluginWeb; },
/* harmony export */   "Clipboard": function() { return /* reexport safe */ _web_clipboard__WEBPACK_IMPORTED_MODULE_6__.Clipboard; },
/* harmony export */   "ClipboardPluginWeb": function() { return /* reexport safe */ _web_clipboard__WEBPACK_IMPORTED_MODULE_6__.ClipboardPluginWeb; },
/* harmony export */   "Filesystem": function() { return /* reexport safe */ _web_filesystem__WEBPACK_IMPORTED_MODULE_7__.Filesystem; },
/* harmony export */   "FilesystemPluginWeb": function() { return /* reexport safe */ _web_filesystem__WEBPACK_IMPORTED_MODULE_7__.FilesystemPluginWeb; },
/* harmony export */   "Geolocation": function() { return /* reexport safe */ _web_geolocation__WEBPACK_IMPORTED_MODULE_8__.Geolocation; },
/* harmony export */   "GeolocationPluginWeb": function() { return /* reexport safe */ _web_geolocation__WEBPACK_IMPORTED_MODULE_8__.GeolocationPluginWeb; },
/* harmony export */   "Device": function() { return /* reexport safe */ _web_device__WEBPACK_IMPORTED_MODULE_9__.Device; },
/* harmony export */   "DevicePluginWeb": function() { return /* reexport safe */ _web_device__WEBPACK_IMPORTED_MODULE_9__.DevicePluginWeb; },
/* harmony export */   "LocalNotifications": function() { return /* reexport safe */ _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__.LocalNotifications; },
/* harmony export */   "LocalNotificationsPluginWeb": function() { return /* reexport safe */ _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__.LocalNotificationsPluginWeb; },
/* harmony export */   "Share": function() { return /* reexport safe */ _web_share__WEBPACK_IMPORTED_MODULE_11__.Share; },
/* harmony export */   "SharePluginWeb": function() { return /* reexport safe */ _web_share__WEBPACK_IMPORTED_MODULE_11__.SharePluginWeb; },
/* harmony export */   "Modals": function() { return /* reexport safe */ _web_modals__WEBPACK_IMPORTED_MODULE_12__.Modals; },
/* harmony export */   "ModalsPluginWeb": function() { return /* reexport safe */ _web_modals__WEBPACK_IMPORTED_MODULE_12__.ModalsPluginWeb; },
/* harmony export */   "Motion": function() { return /* reexport safe */ _web_motion__WEBPACK_IMPORTED_MODULE_13__.Motion; },
/* harmony export */   "MotionPluginWeb": function() { return /* reexport safe */ _web_motion__WEBPACK_IMPORTED_MODULE_13__.MotionPluginWeb; },
/* harmony export */   "Network": function() { return /* reexport safe */ _web_network__WEBPACK_IMPORTED_MODULE_14__.Network; },
/* harmony export */   "NetworkPluginWeb": function() { return /* reexport safe */ _web_network__WEBPACK_IMPORTED_MODULE_14__.NetworkPluginWeb; },
/* harmony export */   "Permissions": function() { return /* reexport safe */ _web_permissions__WEBPACK_IMPORTED_MODULE_15__.Permissions; },
/* harmony export */   "PermissionsPluginWeb": function() { return /* reexport safe */ _web_permissions__WEBPACK_IMPORTED_MODULE_15__.PermissionsPluginWeb; },
/* harmony export */   "SplashScreen": function() { return /* reexport safe */ _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__.SplashScreen; },
/* harmony export */   "SplashScreenPluginWeb": function() { return /* reexport safe */ _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__.SplashScreenPluginWeb; },
/* harmony export */   "Storage": function() { return /* reexport safe */ _web_storage__WEBPACK_IMPORTED_MODULE_17__.Storage; },
/* harmony export */   "StoragePluginWeb": function() { return /* reexport safe */ _web_storage__WEBPACK_IMPORTED_MODULE_17__.StoragePluginWeb; },
/* harmony export */   "Toast": function() { return /* reexport safe */ _web_toast__WEBPACK_IMPORTED_MODULE_18__.Toast; },
/* harmony export */   "ToastPluginWeb": function() { return /* reexport safe */ _web_toast__WEBPACK_IMPORTED_MODULE_18__.ToastPluginWeb; },
/* harmony export */   "registerWebPlugin": function() { return /* binding */ registerWebPlugin; }
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 32653);
/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web/index */ 76605);
/* harmony import */ var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web/accessibility */ 35825);
/* harmony import */ var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/app */ 319);
/* harmony import */ var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/browser */ 3538);
/* harmony import */ var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web/camera */ 29842);
/* harmony import */ var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web/clipboard */ 96362);
/* harmony import */ var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web/filesystem */ 5);
/* harmony import */ var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web/geolocation */ 35956);
/* harmony import */ var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web/device */ 9747);
/* harmony import */ var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/local-notifications */ 62146);
/* harmony import */ var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web/share */ 17881);
/* harmony import */ var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web/modals */ 54374);
/* harmony import */ var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web/motion */ 73813);
/* harmony import */ var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./web/network */ 10840);
/* harmony import */ var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web/permissions */ 14383);
/* harmony import */ var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./web/splash-screen */ 55477);
/* harmony import */ var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web/storage */ 23030);
/* harmony import */ var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./web/toast */ 31814);



















(0,_web_index__WEBPACK_IMPORTED_MODULE_1__.mergeWebPlugins)(_global__WEBPACK_IMPORTED_MODULE_0__.Plugins);
var registerWebPlugin = function (plugin) {
    (0,_web_index__WEBPACK_IMPORTED_MODULE_1__.mergeWebPlugin)(_global__WEBPACK_IMPORTED_MODULE_0__.Plugins, plugin);
};
//# sourceMappingURL=web-plugins.js.map

/***/ }),

/***/ 31994:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorWeb": function() { return /* binding */ CapacitorWeb; }
/* harmony export */ });
var CapacitorWeb = /** @class */ (function () {
    function CapacitorWeb() {
        var _this = this;
        this.platform = 'web';
        this.isNative = false;
        // Need to assign here to avoid having to define every plugin but still
        // get the typed benefits of the provided plugins in PluginRegistry
        this.Plugins = {};
        // Gracefully degrade in non-Proxy supporting engines, e.g. IE11. This
        // effectively means that trying to access an unavailable plugin will
        // locally throw, but this is still better than throwing a syntax error.
        if (typeof Proxy !== 'undefined') {
            // Build a proxy for the Plugins object that returns the "Noop Plugin"
            // if a plugin isn't available
            this.Plugins = new Proxy(this.Plugins, {
                get: function (target, prop) {
                    if (typeof target[prop] === 'undefined') {
                        var thisRef_1 = _this;
                        return new Proxy({}, {
                            get: function (_target, _prop) {
                                if (typeof _target[_prop] === 'undefined') {
                                    return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                                }
                                else {
                                    return _target[_prop];
                                }
                            }
                        });
                    }
                    else {
                        return target[prop];
                    }
                }
            });
        }
    }
    CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
    };
    CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
    };
    CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
    };
    CapacitorWeb.prototype.convertFileSrc = function (filePath) {
        return filePath;
    };
    CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
    };
    return CapacitorWeb;
}());

//# sourceMappingURL=web-runtime.js.map

/***/ }),

/***/ 35825:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessibilityPluginWeb": function() { return /* binding */ AccessibilityPluginWeb; },
/* harmony export */   "Accessibility": function() { return /* binding */ Accessibility; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var AccessibilityPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(AccessibilityPluginWeb, _super);
    function AccessibilityPluginWeb() {
        return _super.call(this, {
            name: 'Accessibility',
            platforms: ['web']
        }) || this;
    }
    AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
        throw new Error('Feature not available in the browser');
    };
    AccessibilityPluginWeb.prototype.speak = function (options) {
        if (!('speechSynthesis' in window)) {
            return Promise.reject('Browser does not support the Speech Synthesis API');
        }
        var utterance = new SpeechSynthesisUtterance(options.value);
        if (options.language) {
            utterance.lang = options.language;
        }
        window.speechSynthesis.speak(utterance);
        return Promise.resolve();
    };
    return AccessibilityPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Accessibility = new AccessibilityPluginWeb();

//# sourceMappingURL=accessibility.js.map

/***/ }),

/***/ 319:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppPluginWeb": function() { return /* binding */ AppPluginWeb; },
/* harmony export */   "App": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var AppPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(AppPluginWeb, _super);
    function AppPluginWeb() {
        var _this = _super.call(this, {
            name: 'App',
            platforms: ['web']
        }) || this;
        if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
        }
        return _this;
    }
    AppPluginWeb.prototype.exitApp = function () {
        throw new Error('Method not implemented.');
    };
    AppPluginWeb.prototype.canOpenUrl = function (_options) {
        return Promise.resolve({ value: true });
    };
    AppPluginWeb.prototype.openUrl = function (_options) {
        return Promise.resolve({ completed: true });
    };
    AppPluginWeb.prototype.getLaunchUrl = function () {
        return Promise.resolve({ url: '' });
    };
    AppPluginWeb.prototype.getState = function () {
        return Promise.resolve({ isActive: document.hidden !== true });
    };
    AppPluginWeb.prototype.handleVisibilityChange = function () {
        var data = {
            isActive: document.hidden !== true
        };
        this.notifyListeners('appStateChange', data);
    };
    return AppPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var App = new AppPluginWeb();

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 3538:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserPluginWeb": function() { return /* binding */ BrowserPluginWeb; },
/* harmony export */   "Browser": function() { return /* binding */ Browser; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var BrowserPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(BrowserPluginWeb, _super);
    function BrowserPluginWeb() {
        return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
        }) || this;
    }
    BrowserPluginWeb.prototype.open = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                this._lastWindow = window.open(options.url, options.windowName || '_blank');
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.prefetch = function (_options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                // Does nothing
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.close = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                this._lastWindow && this._lastWindow.close();
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    return BrowserPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Browser = new BrowserPluginWeb();

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 29842:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPluginWeb": function() { return /* binding */ CameraPluginWeb; },
/* harmony export */   "Camera": function() { return /* binding */ Camera; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core-plugin-definitions */ 7777);



var CameraPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CameraPluginWeb, _super);
    function CameraPluginWeb() {
        return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
        }) || this;
    }
    CameraPluginWeb.prototype.getPhoto = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
                        var cameraModal_1, e_1;
                        var _this = this;
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!options.webUseInput) return [3 /*break*/, 1];
                                    this.fileInputExperience(options, resolve);
                                    return [3 /*break*/, 7];
                                case 1:
                                    if (!customElements.get('pwa-camera-modal')) return [3 /*break*/, 6];
                                    cameraModal_1 = document.createElement('pwa-camera-modal');
                                    document.body.appendChild(cameraModal_1);
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 4, , 5]);
                                    return [4 /*yield*/, cameraModal_1.componentOnReady()];
                                case 3:
                                    _a.sent();
                                    cameraModal_1.addEventListener('onPhoto', function (e) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
                                        var photo, _a;
                                        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    photo = e.detail;
                                                    if (!(photo === null)) return [3 /*break*/, 1];
                                                    reject('User cancelled photos app');
                                                    return [3 /*break*/, 4];
                                                case 1:
                                                    if (!(photo instanceof Error)) return [3 /*break*/, 2];
                                                    reject(photo.message);
                                                    return [3 /*break*/, 4];
                                                case 2:
                                                    _a = resolve;
                                                    return [4 /*yield*/, this._getCameraPhoto(photo, options)];
                                                case 3:
                                                    _a.apply(void 0, [_b.sent()]);
                                                    _b.label = 4;
                                                case 4:
                                                    cameraModal_1.dismiss();
                                                    document.body.removeChild(cameraModal_1);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    cameraModal_1.present();
                                    return [3 /*break*/, 5];
                                case 4:
                                    e_1 = _a.sent();
                                    this.fileInputExperience(options, resolve);
                                    return [3 /*break*/, 5];
                                case 5: return [3 /*break*/, 7];
                                case 6:
                                    console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                                    this.fileInputExperience(options, resolve);
                                    _a.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CameraPluginWeb.prototype.fileInputExperience = function (options, resolve) {
        var input = document.querySelector('#_capacitor-camera-input');
        var cleanup = function () {
            input.parentNode && input.parentNode.removeChild(input);
        };
        if (!input) {
            input = document.createElement('input');
            input.id = '_capacitor-camera-input';
            input.type = 'file';
            document.body.appendChild(input);
        }
        input.accept = 'image/*';
        input.capture = true;
        if (options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos || options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Prompt) {
            input.removeAttribute('capture');
        }
        else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection.Front) {
            input.capture = 'user';
        }
        else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection.Rear) {
            input.capture = 'environment';
        }
        input.addEventListener('change', function (_e) {
            var file = input.files[0];
            var format = 'jpeg';
            if (file.type === 'image/png') {
                format = 'png';
            }
            else if (file.type === 'image/gif') {
                format = 'gif';
            }
            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.DataUrl || options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Base64) {
                var reader_1 = new FileReader();
                reader_1.addEventListener('load', function () {
                    if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.DataUrl) {
                        resolve({
                            dataUrl: reader_1.result,
                            format: format
                        });
                    }
                    else if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Base64) {
                        var b64 = reader_1.result.split(',')[1];
                        resolve({
                            base64String: b64,
                            format: format
                        });
                    }
                    cleanup();
                });
                reader_1.readAsDataURL(file);
            }
            else {
                resolve({
                    webPath: URL.createObjectURL(file),
                    format: format
                });
                cleanup();
            }
        });
        input.click();
    };
    CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var format = photo.type.split('/')[1];
            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri) {
                resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format
                });
            }
            else {
                reader.readAsDataURL(photo);
                reader.onloadend = function () {
                    var r = reader.result;
                    if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.DataUrl) {
                        resolve({
                            dataUrl: r,
                            format: format
                        });
                    }
                    else {
                        resolve({
                            base64String: r.split(',')[1],
                            format: format
                        });
                    }
                };
                reader.onerror = function (e) {
                    reject(e);
                };
            }
        });
    };
    return CameraPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Camera = new CameraPluginWeb();

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 96362:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardPluginWeb": function() { return /* binding */ ClipboardPluginWeb; },
/* harmony export */   "Clipboard": function() { return /* binding */ Clipboard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var ClipboardPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ClipboardPluginWeb, _super);
    function ClipboardPluginWeb() {
        return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
        }) || this;
    }
    ClipboardPluginWeb.prototype.write = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var blob, clipboardItemInput, err_1;
            var _a;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(options.string !== undefined || options.url)) return [3 /*break*/, 2];
                        if (!navigator.clipboard.writeText) {
                            return [2 /*return*/, Promise.reject('Writting to clipboard not supported in this browser')];
                        }
                        return [4 /*yield*/, navigator.clipboard.writeText(options.string !== undefined ? options.string : options.url)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 2:
                        if (!options.image) return [3 /*break*/, 9];
                        if (!navigator.clipboard.write) {
                            return [2 /*return*/, Promise.reject('Setting images not supported in this browser')];
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 7, , 8]);
                        return [4 /*yield*/, fetch(options.image)];
                    case 4: return [4 /*yield*/, (_b.sent()).blob()];
                    case 5:
                        blob = _b.sent();
                        clipboardItemInput = new ClipboardItem((_a = {}, _a[blob.type] = blob, _a));
                        return [4 /*yield*/, navigator.clipboard.write([clipboardItemInput])];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        err_1 = _b.sent();
                        return [2 /*return*/, Promise.reject('Failed to write image')];
                    case 8: return [3 /*break*/, 10];
                    case 9: return [2 /*return*/, Promise.reject('Nothing to write')];
                    case 10: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.read = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var clipboardItems, type, clipboardBlob, data, err_2;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!!navigator.clipboard.read) return [3 /*break*/, 1];
                        if (!navigator.clipboard.readText) {
                            return [2 /*return*/, Promise.reject('Reading from clipboard not supported in this browser')];
                        }
                        return [2 /*return*/, this.readText()];
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, navigator.clipboard.read()];
                    case 2:
                        clipboardItems = _a.sent();
                        type = clipboardItems[0].types[0];
                        return [4 /*yield*/, clipboardItems[0].getType(type)];
                    case 3:
                        clipboardBlob = _a.sent();
                        return [4 /*yield*/, this._getBlobData(clipboardBlob, type)];
                    case 4:
                        data = _a.sent();
                        return [2 /*return*/, Promise.resolve({ value: data, type: type })];
                    case 5:
                        err_2 = _a.sent();
                        return [2 /*return*/, this.readText()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.readText = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var text;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.clipboard.readText()];
                    case 1:
                        text = _a.sent();
                        return [2 /*return*/, Promise.resolve({ value: text, type: 'text/plain' })];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype._getBlobData = function (clipboardBlob, type) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            if (type.includes('image')) {
                reader.readAsDataURL(clipboardBlob);
            }
            else {
                reader.readAsText(clipboardBlob);
            }
            reader.onloadend = function () {
                var r = reader.result;
                resolve(r);
            };
            reader.onerror = function (e) {
                reject(e);
            };
        });
    };
    return ClipboardPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Clipboard = new ClipboardPluginWeb();

//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ 9747:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicePluginWeb": function() { return /* binding */ DevicePluginWeb; },
/* harmony export */   "Device": function() { return /* binding */ Device; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ 56949);



var DevicePluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DevicePluginWeb, _super);
    function DevicePluginWeb() {
        return _super.call(this, {
            name: 'Device',
            platforms: ['web']
        }) || this;
    }
    DevicePluginWeb.prototype.getInfo = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var ua, uaFields;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                ua = navigator.userAgent;
                uaFields = this.parseUa(ua);
                return [2 /*return*/, Promise.resolve({
                        model: uaFields.model,
                        platform: 'web',
                        appVersion: '',
                        appBuild: '',
                        appId: '',
                        appName: '',
                        operatingSystem: uaFields.operatingSystem,
                        osVersion: uaFields.osVersion,
                        manufacturer: navigator.vendor,
                        isVirtual: false,
                        uuid: this.getUid()
                    })];
            });
        });
    };
    DevicePluginWeb.prototype.getBatteryInfo = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var battery, e_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        battery = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.getBattery()];
                    case 2:
                        battery = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve({
                            batteryLevel: battery.level,
                            isCharging: battery.charging
                        })];
                }
            });
        });
    };
    DevicePluginWeb.prototype.getLanguageCode = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                return [2 /*return*/, {
                        value: navigator.language
                    }];
            });
        });
    };
    DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;
        var end = _ua.indexOf(') AppleWebKit');
        if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
        }
        var fields = _ua.substring(start, end);
        if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
        }
        else {
            uaFields.model = fields.split('; ')[0];
            if (navigator.oscpu) {
                uaFields.osVersion = navigator.oscpu;
            }
            else {
                if (_ua.indexOf('Windows') !== -1) {
                    uaFields.osVersion = fields;
                }
                else {
                    var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
                    uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
                }
            }
        }
        if (/android/i.test(_ua)) {
            uaFields.operatingSystem = 'android';
        }
        else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
            uaFields.operatingSystem = 'ios';
        }
        else if (/Win/.test(_ua)) {
            uaFields.operatingSystem = 'windows';
        }
        else if (/Mac/i.test(_ua)) {
            uaFields.operatingSystem = 'mac';
        }
        else {
            uaFields.operatingSystem = 'unknown';
        }
        return uaFields;
    };
    DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');
        if (uid) {
            return uid;
        }
        uid = (0,_util__WEBPACK_IMPORTED_MODULE_1__.uuid4)();
        window.localStorage.setItem('_capuid', uid);
        return uid;
    };
    return DevicePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Device = new DevicePluginWeb();

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 5:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesystemPluginWeb": function() { return /* binding */ FilesystemPluginWeb; },
/* harmony export */   "Filesystem": function() { return /* binding */ Filesystem; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core-plugin-definitions */ 7777);



var FilesystemPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(FilesystemPluginWeb, _super);
    function FilesystemPluginWeb() {
        var _this = _super.call(this, {
            name: 'Filesystem',
            platforms: ['web']
        }) || this;
        _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory.Data;
        _this.DB_VERSION = 1;
        _this.DB_NAME = 'Disc';
        _this._writeCmds = ['add', 'put', 'delete'];
        return _this;
    }
    FilesystemPluginWeb.prototype.initDb = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                if (this._db !== undefined) {
                    return [2 /*return*/, this._db];
                }
                if (!('indexedDB' in window)) {
                    throw new Error('This browser doesn\'t support IndexedDB');
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
                        request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;
                        request.onsuccess = function () {
                            _this._db = request.result;
                            resolve(request.result);
                        };
                        request.onerror = function () { return reject(request.error); };
                        request.onblocked = function () {
                            console.warn('db blocked');
                        };
                    })];
            });
        });
    };
    FilesystemPluginWeb.doUpgrade = function (event) {
        var eventTarget = event.target;
        var db = eventTarget.result;
        switch (event.oldVersion) {
            case 0:
            case 1:
            default:
                if (db.objectStoreNames.contains('FileStorage')) {
                    db.deleteObjectStore('FileStorage');
                }
                var store = db.createObjectStore('FileStorage', { keyPath: 'path' });
                store.createIndex('by_folder', 'folder');
        }
    };
    FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var readFlag;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var req = store[cmd].apply(store, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var readFlag;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var index = store.index(indexName);
                            var req = index[cmd].apply(index, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
        directory = directory || this.DEFAULT_DIRECTORY;
        var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
        var fsPath = '/' + directory;
        if (uriPath !== '')
            fsPath += '/' + cleanedUriPath;
        return fsPath;
    };
    FilesystemPluginWeb.prototype.clear = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var conn, tx, store;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initDb()];
                    case 1:
                        conn = _a.sent();
                        tx = conn.transaction(['FileStorage'], 'readwrite');
                        store = tx.objectStore('FileStorage');
                        store.clear();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Read a file from disk
     * @param options options for the file read
     * @return a promise that resolves with the read file data result
     */
    FilesystemPluginWeb.prototype.readFile = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var path, entry;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [2 /*return*/, { data: entry.content }];
                }
            });
        });
    };
    /**
     * Write a file to disk in the specified location on device
     * @param options options for the file write
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.writeFile = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var path, data, doRecursive, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        doRecursive = options.recursive;
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry && occupiedEntry.type === 'directory')
                            throw ('The supplied path is a directory.');
                        encoding = options.encoding;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 2:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 4];
                        subDirIndex = parentPath.indexOf('/', 1);
                        if (!(subDirIndex !== -1)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(subDirIndex);
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, recursive: doRecursive })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: now,
                            mtime: now,
                            content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data,
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {
                                uri: pathObj.path
                            }];
                }
            });
        });
    };
    /**
     * Append to a file on disk in the specified location on device
     * @param options options for the file append
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.appendFile = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, subDirIndex, parentArgPath, pathObj;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        now = Date.now();
                        ctime = now;
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry && occupiedEntry.type === 'directory')
                            throw ('The supplied path is a directory.');
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 2:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 4];
                        subDirIndex = parentPath.indexOf('/', 1);
                        if (!(subDirIndex !== -1)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(subDirIndex);
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, recursive: true })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (occupiedEntry !== undefined) {
                            data = occupiedEntry.content + data;
                            ctime = occupiedEntry.ctime;
                        }
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: ctime,
                            mtime: now,
                            content: data
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Delete a file from disk
     * @param options options for the file delete
     * @return a promise that resolves with the deleted file data result
     */
    FilesystemPluginWeb.prototype.deleteFile = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var path, entry, entries;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        if (entries.length !== 0)
                            throw Error('Folder is not empty.');
                        return [4 /*yield*/, this.dbRequest('delete', [path])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Create a directory.
     * @param options options for the mkdir
     * @return a promise that resolves with the mkdir result
     */
    FilesystemPluginWeb.prototype.mkdir = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var path, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        doRecursive = options.recursive;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        depth = (path.match(/\//g) || []).length;
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 1:
                        parentEntry = _a.sent();
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 2:
                        occupiedEntry = _a.sent();
                        if (depth === 1)
                            throw Error('Cannot create Root directory');
                        if (occupiedEntry !== undefined)
                            throw Error('Current directory does already exist.');
                        if (!doRecursive && depth !== 2 && parentEntry === undefined)
                            throw Error('Parent directory must exist');
                        if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                        return [4 /*yield*/, this.mkdir({
                                path: parentArgPath,
                                directory: options.directory,
                                recursive: doRecursive
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = { path: path, folder: parentPath, type: 'directory', size: 0, ctime: now, mtime: now };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Remove a directory
     * @param options the options for the directory remove
     */
    FilesystemPluginWeb.prototype.rmdir = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        path = options.path, directory = options.directory, recursive = options.recursive;
                        fullPath = this.getPath(directory, path);
                        return [4 /*yield*/, this.dbRequest('get', [fullPath])];
                    case 1:
                        entry = _b.sent();
                        if (entry === undefined)
                            throw Error('Folder does not exist.');
                        if (entry.type !== 'directory')
                            throw Error('Requested path is not a directory');
                        return [4 /*yield*/, this.readdir({ path: path, directory: directory })];
                    case 2:
                        readDirResult = _b.sent();
                        if (readDirResult.files.length !== 0 && !recursive)
                            throw Error('Folder is not empty');
                        _i = 0, _a = readDirResult.files;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        entry_1 = _a[_i];
                        entryPath = path + "/" + entry_1;
                        return [4 /*yield*/, this.stat({ path: entryPath, directory: directory })];
                    case 4:
                        entryObj = _b.sent();
                        if (!(entryObj.type === 'file')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.deleteFile({ path: entryPath, directory: directory })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.rmdir({ path: entryPath, directory: directory, recursive: recursive })];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9: return [4 /*yield*/, this.dbRequest('delete', [fullPath])];
                    case 10:
                        _b.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Return a list of files from the directory (not recursive)
     * @param options the options for the readdir operation
     * @return a promise that resolves with the readdir directory listing result
     */
    FilesystemPluginWeb.prototype.readdir = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var path, entry, entries, names;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (options.path !== '' && entry === undefined)
                            throw Error('Folder does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        names = entries.map(function (e) {
                            return e.substring(path.length + 1);
                        });
                        return [2 /*return*/, { files: names }];
                }
            });
        });
    };
    /**
     * Return full File URI for a path and directory
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.getUri = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var path, entry;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Return data about a file
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.stat = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var path, entry;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                type: entry.type,
                                size: entry.size,
                                ctime: entry.ctime,
                                mtime: entry.mtime,
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Rename a file or directory
     * @param options the options for the rename operation
     * @return a promise that resolves with the rename result
     */
    FilesystemPluginWeb.prototype.rename = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                return [2 /*return*/, this._copy(options, true)];
            });
        });
    };
    /**
     * Copy a file or directory
     * @param options the options for the copy operation
     * @return a promise that resolves with the copy result
     */
    FilesystemPluginWeb.prototype.copy = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                return [2 /*return*/, this._copy(options, false)];
            });
        });
    };
    /**
     * Function that can perform a copy or a rename
     * @param options the options for the rename operation
     * @param doRename whether to perform a rename or copy operation
     * @return a promise that resolves with the result
     */
    FilesystemPluginWeb.prototype._copy = function (options, doRename) {
        if (doRename === void 0) { doRename = false; }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;
                        if (!to || !from) {
                            throw Error('Both to and from must be provided');
                        }
                        // If no "to" directory is provided, use the "from" directory
                        if (!toDirectory) {
                            toDirectory = fromDirectory;
                        }
                        fromPath = this.getPath(fromDirectory, from);
                        toPath = this.getPath(toDirectory, to);
                        // Test that the "to" and "from" locations are different
                        if (fromPath === toPath) {
                            return [2 /*return*/, {}];
                        }
                        if (toPath.startsWith(fromPath)) {
                            throw Error('To path cannot contain the from path');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, this.stat({
                                path: to,
                                directory: toDirectory
                            })];
                    case 2:
                        toObj = _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        e_1 = _b.sent();
                        toPathComponents = to.split('/');
                        toPathComponents.pop();
                        toPath_1 = toPathComponents.join('/');
                        if (!(toPathComponents.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.stat({
                                path: toPath_1,
                                directory: toDirectory,
                            })];
                    case 4:
                        toParentDirectory = _b.sent();
                        if (toParentDirectory.type !== 'directory') {
                            throw new Error('Parent directory of the to path is a file');
                        }
                        _b.label = 5;
                    case 5: return [3 /*break*/, 6];
                    case 6:
                        // Cannot overwrite a directory
                        if (toObj && toObj.type === 'directory') {
                            throw new Error('Cannot overwrite a directory with a file');
                        }
                        return [4 /*yield*/, this.stat({
                                path: from,
                                directory: fromDirectory,
                            })];
                    case 7:
                        fromObj = _b.sent();
                        updateTime = function (path, ctime, mtime) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
                            var fullPath, entry;
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fullPath = this.getPath(toDirectory, path);
                                        return [4 /*yield*/, this.dbRequest('get', [fullPath])];
                                    case 1:
                                        entry = _a.sent();
                                        entry.ctime = ctime;
                                        entry.mtime = mtime;
                                        return [4 /*yield*/, this.dbRequest('put', [entry])];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        _a = fromObj.type;
                        switch (_a) {
                            case 'file': return [3 /*break*/, 8];
                            case 'directory': return [3 /*break*/, 15];
                        }
                        return [3 /*break*/, 28];
                    case 8: return [4 /*yield*/, this.readFile({
                            path: from,
                            directory: fromDirectory
                        })];
                    case 9:
                        file = _b.sent();
                        if (!doRename) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.deleteFile({
                                path: from,
                                directory: fromDirectory
                            })];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: 
                    // Write the file to the new location
                    return [4 /*yield*/, this.writeFile({
                            path: to,
                            directory: toDirectory,
                            data: file.data
                        })];
                    case 12:
                        // Write the file to the new location
                        _b.sent();
                        if (!doRename) return [3 /*break*/, 14];
                        return [4 /*yield*/, updateTime(to, fromObj.ctime, fromObj.mtime)];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14: 
                    // Resolve promise
                    return [2 /*return*/, {}];
                    case 15:
                        if (toObj) {
                            throw Error('Cannot move a directory over an existing object');
                        }
                        _b.label = 16;
                    case 16:
                        _b.trys.push([16, 20, , 21]);
                        // Create the to directory
                        return [4 /*yield*/, this.mkdir({
                                path: to,
                                directory: toDirectory,
                                recursive: false,
                            })];
                    case 17:
                        // Create the to directory
                        _b.sent();
                        if (!doRename) return [3 /*break*/, 19];
                        return [4 /*yield*/, updateTime(to, fromObj.ctime, fromObj.mtime)];
                    case 18:
                        _b.sent();
                        _b.label = 19;
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        e_2 = _b.sent();
                        return [3 /*break*/, 21];
                    case 21: return [4 /*yield*/, this.readdir({
                            path: from,
                            directory: fromDirectory,
                        })];
                    case 22:
                        contents = (_b.sent()).files;
                        _i = 0, contents_1 = contents;
                        _b.label = 23;
                    case 23:
                        if (!(_i < contents_1.length)) return [3 /*break*/, 26];
                        filename = contents_1[_i];
                        // Move item from the from directory to the to directory
                        return [4 /*yield*/, this._copy({
                                from: from + "/" + filename,
                                to: to + "/" + filename,
                                directory: fromDirectory,
                                toDirectory: toDirectory,
                            }, doRename)];
                    case 24:
                        // Move item from the from directory to the to directory
                        _b.sent();
                        _b.label = 25;
                    case 25:
                        _i++;
                        return [3 /*break*/, 23];
                    case 26:
                        if (!doRename) return [3 /*break*/, 28];
                        return [4 /*yield*/, this.rmdir({
                                path: from,
                                directory: fromDirectory
                            })];
                    case 27:
                        _b.sent();
                        _b.label = 28;
                    case 28: return [2 /*return*/, {}];
                }
            });
        });
    };
    FilesystemPluginWeb._debug = true;
    return FilesystemPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Filesystem = new FilesystemPluginWeb();

//# sourceMappingURL=filesystem.js.map

/***/ }),

/***/ 35956:
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationPluginWeb": function() { return /* binding */ GeolocationPluginWeb; },
/* harmony export */   "Geolocation": function() { return /* binding */ Geolocation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ 56949);



var GeolocationPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GeolocationPluginWeb, _super);
    function GeolocationPluginWeb() {
        return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
        }) || this;
    }
    GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
                window.navigator.geolocation.getCurrentPosition(function (pos) {
                    resolve(pos);
                }, function (err) {
                    reject(err);
                }, (0,_util__WEBPACK_IMPORTED_MODULE_1__.extend)({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }, options));
            });
        });
    };
    GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
        }, function (err) {
            callback(null, err);
        }, (0,_util__WEBPACK_IMPORTED_MODULE_1__.extend)({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }, options));
        return "" + id;
    };
    GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
    };
    return GeolocationPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Geolocation = new GeolocationPluginWeb();

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ 76605:
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebPluginRegistry": function() { return /* binding */ WebPluginRegistry; },
/* harmony export */   "WebPlugins": function() { return /* binding */ WebPlugins; },
/* harmony export */   "WebPlugin": function() { return /* binding */ WebPlugin; },
/* harmony export */   "mergeWebPlugins": function() { return /* binding */ mergeWebPlugins; },
/* harmony export */   "mergeWebPlugin": function() { return /* binding */ mergeWebPlugin; }
/* harmony export */ });
var WebPluginRegistry = /** @class */ (function () {
    function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
    }
    WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
    };
    WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
    };
    WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);
        if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
        }
        plugin.load();
    };
    WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];
        for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
        }
        return p;
    };
    return WebPluginRegistry;
}());

var WebPlugins = new WebPluginRegistry();

var WebPlugin = /** @class */ (function () {
    function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};
        if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
        }
        else {
            pluginRegistry.addPlugin(this);
        }
    }
    WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    };
    WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    };
    WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;
        var listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        var windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        return {
            remove: function () {
                _this.removeListener(eventName, listenerFunc);
            }
        };
    };
    WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    };
    WebPlugin.prototype.removeAllListeners = function () {
        this.listeners = {};
        for (var listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    };
    WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(function (listener) { return listener(data); });
        }
    };
    WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
    };
    WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function (event) {
                _this.notifyListeners(pluginEventName, event);
            }
        };
    };
    WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        }
        else {
            return Promise.resolve({ results: [] });
        }
    };
    WebPlugin.prototype.load = function () {
        this.loaded = true;
    };
    return WebPlugin;
}());

var shouldMergeWebPlugin = function (plugin) {
    return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
};
/**
 * For all our known web plugins, merge them into the global plugins
 * registry if they aren't already existing. If they don't exist, that
 * means there's no existing native implementation for it.
 * @param knownPlugins the Capacitor.Plugins global registry.
 */
var mergeWebPlugins = function (knownPlugins) {
    var plugins = WebPlugins.getPlugins();
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
    }
};
var mergeWebPlugin = function (knownPlugins, plugin) {
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
    }
    knownPlugins[plugin.config.name] = plugin;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 62146:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotificationsPluginWeb": function() { return /* binding */ LocalNotificationsPluginWeb; },
/* harmony export */   "LocalNotifications": function() { return /* binding */ LocalNotifications; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var LocalNotificationsPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(LocalNotificationsPluginWeb, _super);
    function LocalNotificationsPluginWeb() {
        var _this = _super.call(this, {
            name: 'LocalNotifications',
            platforms: ['web']
        }) || this;
        _this.pending = [];
        return _this;
    }
    LocalNotificationsPluginWeb.prototype.createChannel = function (channel) {
        throw new Error('Feature not available in the browser. ' + channel.id);
    };
    LocalNotificationsPluginWeb.prototype.deleteChannel = function (channel) {
        throw new Error('Feature not available in the browser. ' + channel.id);
    };
    LocalNotificationsPluginWeb.prototype.listChannels = function () {
        throw new Error('Feature not available in the browser');
    };
    LocalNotificationsPluginWeb.prototype.sendPending = function () {
        var _this = this;
        var toRemove = [];
        var now = +new Date;
        this.pending.forEach(function (localNotification) {
            if (localNotification.schedule && localNotification.schedule.at) {
                if (+localNotification.schedule.at <= now) {
                    _this.buildNotification(localNotification);
                    toRemove.push(localNotification);
                }
            }
        });
        console.log('Sent pending, removing', toRemove);
        this.pending = this.pending.filter(function (localNotification) { return !toRemove.find(function (ln) { return ln === localNotification; }); });
    };
    LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
        var _this = this;
        var l = localNotification;
        if (localNotification.schedule && localNotification.schedule.at) {
            var diff = +localNotification.schedule.at - +new Date;
            this.pending.push(l);
            setTimeout(function () {
                _this.sendPending();
            }, diff);
            return;
        }
        this.buildNotification(localNotification);
    };
    LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
        var l = localNotification;
        return new Notification(l.title, {
            body: l.body
        });
    };
    LocalNotificationsPluginWeb.prototype.schedule = function (options) {
        var _this = this;
        var notifications = [];
        options.notifications.forEach(function (notification) {
            notifications.push(_this.sendNotification(notification));
        });
        return Promise.resolve({
            notifications: options.notifications.map(function (notification) { return { id: '' + notification.id }; })
        });
    };
    LocalNotificationsPluginWeb.prototype.getPending = function () {
        return Promise.resolve({
            notifications: this.pending.map(function (localNotification) {
                return {
                    id: '' + localNotification.id
                };
            })
        });
    };
    LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
        throw new Error('Method not implemented.');
    };
    LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
        console.log('Cancel these', pending);
        this.pending = this.pending.filter(function (localNotification) { return !pending.notifications.find(function (ln) { return ln.id === '' + localNotification.id; }); });
        return Promise.resolve();
    };
    LocalNotificationsPluginWeb.prototype.areEnabled = function () {
        return Promise.resolve({
            value: Notification.permission === 'granted'
        });
    };
    LocalNotificationsPluginWeb.prototype.requestPermission = function () {
        return new Promise(function (resolve) {
            Notification.requestPermission(function (result) {
                var granted = true;
                if (result === 'denied' || result === 'default') {
                    granted = false;
                }
                resolve({ granted: granted });
            });
        });
    };
    LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
        return new Promise(function (resolve, reject) {
            Notification.requestPermission(function (result) {
                if (result === 'denied' || result === 'default') {
                    reject(result);
                    return;
                }
                resolve({
                    results: [result]
                });
            });
        });
    };
    return LocalNotificationsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var LocalNotifications = new LocalNotificationsPluginWeb();

//# sourceMappingURL=local-notifications.js.map

/***/ }),

/***/ 54374:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsPluginWeb": function() { return /* binding */ ModalsPluginWeb; },
/* harmony export */   "Modals": function() { return /* binding */ Modals; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var ModalsPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ModalsPluginWeb, _super);
    function ModalsPluginWeb() {
        return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
        }) || this;
    }
    ModalsPluginWeb.prototype.alert = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                window.alert(options.message);
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    ModalsPluginWeb.prototype.prompt = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var val;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                val = window.prompt(options.message, options.inputText || '');
                return [2 /*return*/, Promise.resolve({
                        value: val,
                        cancelled: val === null
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.confirm = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var val;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                val = window.confirm(options.message);
                return [2 /*return*/, Promise.resolve({
                        value: val
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.showActions = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, _reject) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(_this, void 0, void 0, function () {
                        var actionSheet;
                        var _this = this;
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                            actionSheet = document.querySelector('pwa-action-sheet');
                            if (!actionSheet) {
                                actionSheet = document.createElement('pwa-action-sheet');
                                document.body.appendChild(actionSheet);
                            }
                            actionSheet.header = options.title;
                            actionSheet.cancelable = false;
                            actionSheet.options = options.options;
                            actionSheet.addEventListener('onSelection', function (e) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(_this, void 0, void 0, function () {
                                var selection;
                                return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                                    selection = e.detail;
                                    resolve({
                                        index: selection
                                    });
                                    return [2 /*return*/];
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    return ModalsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Modals = new ModalsPluginWeb();

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ 73813:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionPluginWeb": function() { return /* binding */ MotionPluginWeb; },
/* harmony export */   "Motion": function() { return /* binding */ Motion; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var MotionPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MotionPluginWeb, _super);
    function MotionPluginWeb() {
        var _this = _super.call(this, {
            name: 'Motion'
        }) || this;
        _this.registerWindowListener('devicemotion', 'accel');
        _this.registerWindowListener('deviceorientation', 'orientation');
        return _this;
    }
    return MotionPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Motion = new MotionPluginWeb();

//# sourceMappingURL=motion.js.map

/***/ }),

/***/ 10840:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPluginWeb": function() { return /* binding */ NetworkPluginWeb; },
/* harmony export */   "Network": function() { return /* binding */ Network; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var NetworkPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NetworkPluginWeb, _super);
    function NetworkPluginWeb() {
        var _this = _super.call(this, {
            name: 'Network',
            platforms: ['web']
        }) || this;
        _this.listenerFunction = null;
        return _this;
    }
    NetworkPluginWeb.prototype.getStatus = function () {
        return new Promise(function (resolve, reject) {
            if (!window.navigator) {
                reject('Network info not available');
                return;
            }
            var connected = window.navigator.onLine;
            var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
            var connectionType = connection ? (connection.type || connection.effectiveType) : 'wifi';
            resolve({
                connected: connected,
                connectionType: connected ? connectionType : 'none'
            });
        });
    };
    NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
        var thisRef = this;
        var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
        var connectionType = connection ? (connection.type || connection.effectiveType) : 'wifi';
        var onlineBindFunc = listenerFunc.bind(thisRef, { connected: true, connectionType: connectionType });
        var offlineBindFunc = listenerFunc.bind(thisRef, { connected: false, connectionType: 'none' });
        if (eventName.localeCompare('networkStatusChange') === 0) {
            window.addEventListener('online', onlineBindFunc);
            window.addEventListener('offline', offlineBindFunc);
            return {
                remove: function () {
                    window.removeEventListener('online', onlineBindFunc);
                    window.removeEventListener('offline', offlineBindFunc);
                }
            };
        }
    };
    return NetworkPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Network = new NetworkPluginWeb();

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 14383:
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsPluginWeb": function() { return /* binding */ PermissionsPluginWeb; },
/* harmony export */   "Permissions": function() { return /* binding */ Permissions; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core-plugin-definitions */ 7777);



var PermissionsPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(PermissionsPluginWeb, _super);
    function PermissionsPluginWeb() {
        return _super.call(this, {
            name: 'Permissions'
        }) || this;
    }
    PermissionsPluginWeb.prototype.query = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var navigator, name, ret;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigator = window.navigator;
                        if (!navigator.permissions) {
                            return [2 /*return*/, Promise.reject('This browser does not support the Permissions API')];
                        }
                        name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_1__.PermissionType.Photos ? 'camera' : options.name;
                        return [4 /*yield*/, navigator.permissions.query({ name: name })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, {
                                state: ret.state
                            }];
                }
            });
        });
    };
    return PermissionsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Permissions = new PermissionsPluginWeb();

//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ 17881:
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharePluginWeb": function() { return /* binding */ SharePluginWeb; },
/* harmony export */   "Share": function() { return /* binding */ Share; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var SharePluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SharePluginWeb, _super);
    function SharePluginWeb() {
        return _super.call(this, {
            name: 'Share',
            platforms: ['web']
        }) || this;
    }
    SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
            return Promise.reject('Web Share API not available');
        }
        return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
        });
    };
    return SharePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Share = new SharePluginWeb();

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 55477:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenPluginWeb": function() { return /* binding */ SplashScreenPluginWeb; },
/* harmony export */   "SplashScreen": function() { return /* binding */ SplashScreen; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var SplashScreenPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SplashScreenPluginWeb, _super);
    function SplashScreenPluginWeb() {
        return _super.call(this, {
            name: 'SplashScreen',
            platforms: ['web']
        }) || this;
    }
    SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
        return Promise.resolve();
    };
    SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
        return Promise.resolve();
    };
    return SplashScreenPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var SplashScreen = new SplashScreenPluginWeb();

//# sourceMappingURL=splash-screen.js.map

/***/ }),

/***/ 23030:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoragePluginWeb": function() { return /* binding */ StoragePluginWeb; },
/* harmony export */   "Storage": function() { return /* binding */ Storage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var StoragePluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(StoragePluginWeb, _super);
    function StoragePluginWeb() {
        var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
        }) || this;
        _this.KEY_PREFIX = '_cap_';
        return _this;
    }
    StoragePluginWeb.prototype.get = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                value: window.localStorage.getItem(_this.makeKey(options.key))
            });
        });
    };
    StoragePluginWeb.prototype.set = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
        });
    };
    StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
        });
    };
    StoragePluginWeb.prototype.keys = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                keys: Object.keys(localStorage).filter(function (k) { return _this.isKey(k); }).map(function (k) { return _this.getKey(k); })
            });
        });
    };
    StoragePluginWeb.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            Object.keys(localStorage)
                .filter(function (k) { return _this.isKey(k); })
                .forEach(function (k) { return window.localStorage.removeItem(k); });
            resolve();
        });
    };
    StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
    };
    StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
    };
    StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
    };
    return StoragePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Storage = new StoragePluginWeb();

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 31814:
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastPluginWeb": function() { return /* binding */ ToastPluginWeb; },
/* harmony export */   "Toast": function() { return /* binding */ Toast; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ 76605);


var ToastPluginWeb = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ToastPluginWeb, _super);
    function ToastPluginWeb() {
        return _super.call(this, {
            name: 'Toast',
            platforms: ['web']
        }) || this;
    }
    ToastPluginWeb.prototype.show = function (options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var duration, toast;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                duration = 2000;
                if (options.duration) {
                    duration = options.duration === 'long' ? 3500 : 2000;
                }
                toast = document.createElement('pwa-toast');
                toast.duration = duration;
                toast.message = options.text;
                document.body.appendChild(toast);
                return [2 /*return*/];
            });
        });
    };
    return ToastPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_0__.WebPlugin));

var Toast = new ToastPluginWeb();

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 4937:
/*!******************************************************!*\
  !*** ./node_modules/compressorjs/dist/compressor.js ***!
  \******************************************************/
/***/ (function(module) {

/*!
 * Compressor.js v1.0.7
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-11-28T07:13:17.754Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var canvasToBlob = createCommonjsModule(function (module) {
    if (typeof window === 'undefined') {
      return;
    }

    (function (window) {

      var CanvasPrototype = window.HTMLCanvasElement && window.HTMLCanvasElement.prototype;

      var hasBlobConstructor = window.Blob && function () {
        try {
          return Boolean(new Blob());
        } catch (e) {
          return false;
        }
      }();

      var hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array && function () {
        try {
          return new Blob([new Uint8Array(100)]).size === 100;
        } catch (e) {
          return false;
        }
      }();

      var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
      var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;

      var dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob && window.ArrayBuffer && window.Uint8Array && function (dataURI) {
        var matches, mediaType, isBase64, dataString, byteString, arrayBuffer, intArray, i, bb; // Parse the dataURI components as per RFC 2397

        matches = dataURI.match(dataURIPattern);

        if (!matches) {
          throw new Error('invalid data URI');
        } // Default to text/plain;charset=US-ASCII


        mediaType = matches[2] ? matches[1] : 'text/plain' + (matches[3] || ';charset=US-ASCII');
        isBase64 = !!matches[4];
        dataString = dataURI.slice(matches[0].length);

        if (isBase64) {
          // Convert base64 to raw binary data held in a string:
          byteString = atob(dataString);
        } else {
          // Convert base64/URLEncoded data component to raw binary:
          byteString = decodeURIComponent(dataString);
        } // Write the bytes of the string to an ArrayBuffer:


        arrayBuffer = new ArrayBuffer(byteString.length);
        intArray = new Uint8Array(arrayBuffer);

        for (i = 0; i < byteString.length; i += 1) {
          intArray[i] = byteString.charCodeAt(i);
        } // Write the ArrayBuffer (or ArrayBufferView) to a blob:


        if (hasBlobConstructor) {
          return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
            type: mediaType
          });
        }

        bb = new BlobBuilder();
        bb.append(arrayBuffer);
        return bb.getBlob(mediaType);
      };

      if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
        if (CanvasPrototype.mozGetAsFile) {
          CanvasPrototype.toBlob = function (callback, type, quality) {
            var self = this;
            setTimeout(function () {
              if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
                callback(dataURLtoBlob(self.toDataURL(type, quality)));
              } else {
                callback(self.mozGetAsFile('blob', type));
              }
            });
          };
        } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
          if (CanvasPrototype.msToBlob) {
            CanvasPrototype.toBlob = function (callback, type, quality) {
              var self = this;
              setTimeout(function () {
                if ((type && type !== 'image/png' || quality) && CanvasPrototype.toDataURL && dataURLtoBlob) {
                  callback(dataURLtoBlob(self.toDataURL(type, quality)));
                } else {
                  callback(self.msToBlob(type));
                }
              });
            };
          } else {
            CanvasPrototype.toBlob = function (callback, type, quality) {
              var self = this;
              setTimeout(function () {
                callback(dataURLtoBlob(self.toDataURL(type, quality)));
              });
            };
          }
        }
      }

      if ( module.exports) {
        module.exports = dataURLtoBlob;
      } else {
        window.dataURLtoBlob = dataURLtoBlob;
      }
    })(window);
  });

  var isBlob = function isBlob(value) {
    if (typeof Blob === 'undefined') {
      return false;
    }

    return value instanceof Blob || Object.prototype.toString.call(value) === '[object Blob]';
  };

  var DEFAULTS = {
    /**
     * Indicates if output the original image instead of the compressed one
     * when the size of the compressed image is greater than the original one's
     * @type {boolean}
     */
    strict: true,

    /**
     * Indicates if read the image's Exif Orientation information,
     * and then rotate or flip the image automatically.
     * @type {boolean}
     */
    checkOrientation: true,

    /**
     * The max width of the output image.
     * @type {number}
     */
    maxWidth: Infinity,

    /**
     * The max height of the output image.
     * @type {number}
     */
    maxHeight: Infinity,

    /**
     * The min width of the output image.
     * @type {number}
     */
    minWidth: 0,

    /**
     * The min height of the output image.
     * @type {number}
     */
    minHeight: 0,

    /**
     * The width of the output image.
     * If not specified, the natural width of the source image will be used.
     * @type {number}
     */
    width: undefined,

    /**
     * The height of the output image.
     * If not specified, the natural height of the source image will be used.
     * @type {number}
     */
    height: undefined,

    /**
     * The quality of the output image.
     * It must be a number between `0` and `1`,
     * and only available for `image/jpeg` and `image/webp` images.
     * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
     * @type {number}
     */
    quality: 0.8,

    /**
     * The mime type of the output image.
     * By default, the original mime type of the source image file will be used.
     * @type {string}
     */
    mimeType: 'auto',

    /**
     * PNG files over this value (5 MB by default) will be converted to JPEGs.
     * To disable this, just set the value to `Infinity`.
     * @type {number}
     */
    convertSize: 5000000,

    /**
     * The hook function to execute before draw the image into the canvas for compression.
     * @type {Function}
     * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
     * @param {HTMLCanvasElement} canvas - The canvas for compression.
     * @example
     * function (context, canvas) {
     *   context.fillStyle = '#fff';
     * }
     */
    beforeDraw: null,

    /**
     * The hook function to execute after drew the image into the canvas for compression.
     * @type {Function}
     * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
     * @param {HTMLCanvasElement} canvas - The canvas for compression.
     * @example
     * function (context, canvas) {
     *   context.filter = 'grayscale(100%)';
     * }
     */
    drew: null,

    /**
     * The hook function to execute when success to compress the image.
     * @type {Function}
     * @param {File} file - The compressed image File object.
     * @example
     * function (file) {
     *   console.log(file);
     * }
     */
    success: null,

    /**
     * The hook function to execute when fail to compress the image.
     * @type {Function}
     * @param {Error} err - An Error object.
     * @example
     * function (err) {
     *   console.log(err.message);
     * }
     */
    error: null
  };

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};

  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  var REGEXP_IMAGE_TYPE = /^image\/.+$/;
  /**
   * Check if the given value is a mime type of image.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given is a mime type of image, else `false`.
   */

  function isImageType(value) {
    return REGEXP_IMAGE_TYPE.test(value);
  }
  /**
   * Convert image type to extension.
   * @param {string} value - The image type to convert.
   * @returns {boolean} Returns the image extension.
   */

  function imageTypeToExtension(value) {
    var extension = isImageType(value) ? value.substr(6) : '';

    if (extension === 'jpeg') {
      extension = 'jpg';
    }

    return ".".concat(extension);
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    var i;
    length += start;

    for (i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var btoa = WINDOW.btoa;
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = [];
    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (e) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }

  var ArrayBuffer$1 = WINDOW.ArrayBuffer,
      FileReader = WINDOW.FileReader;
  var URL = WINDOW.URL || WINDOW.webkitURL;
  var REGEXP_EXTENSION = /\.\w+$/;
  var AnotherCompressor = WINDOW.Compressor;
  /**
   * Creates a new image compressor.
   * @class
   */

  var Compressor = /*#__PURE__*/function () {
    /**
     * The constructor of Compressor.
     * @param {File|Blob} file - The target image file for compressing.
     * @param {Object} [options] - The options for compressing.
     */
    function Compressor(file, options) {
      _classCallCheck(this, Compressor);

      this.file = file;
      this.image = new Image();
      this.options = _objectSpread2(_objectSpread2({}, DEFAULTS), options);
      this.aborted = false;
      this.result = null;
      this.init();
    }

    _createClass(Compressor, [{
      key: "init",
      value: function init() {
        var _this = this;

        var file = this.file,
            options = this.options;

        if (!isBlob(file)) {
          this.fail(new Error('The first argument must be a File or Blob object.'));
          return;
        }

        var mimeType = file.type;

        if (!isImageType(mimeType)) {
          this.fail(new Error('The first argument must be an image File or Blob object.'));
          return;
        }

        if (!URL || !FileReader) {
          this.fail(new Error('The current browser does not support image compression.'));
          return;
        }

        if (!ArrayBuffer$1) {
          options.checkOrientation = false;
        }

        if (URL && !options.checkOrientation) {
          this.load({
            url: URL.createObjectURL(file)
          });
        } else {
          var reader = new FileReader();
          var checkOrientation = options.checkOrientation && mimeType === 'image/jpeg';
          this.reader = reader;

          reader.onload = function (_ref) {
            var target = _ref.target;
            var result = target.result;
            var data = {};

            if (checkOrientation) {
              // Reset the orientation value to its default value 1
              // as some iOS browsers will render image with its orientation
              var orientation = resetAndGetOrientation(result);

              if (orientation > 1 || !URL) {
                // Generate a new URL which has the default orientation value
                data.url = arrayBufferToDataURL(result, mimeType);

                if (orientation > 1) {
                  _extends(data, parseOrientation(orientation));
                }
              } else {
                data.url = URL.createObjectURL(file);
              }
            } else {
              data.url = result;
            }

            _this.load(data);
          };

          reader.onabort = function () {
            _this.fail(new Error('Aborted to read the image with FileReader.'));
          };

          reader.onerror = function () {
            _this.fail(new Error('Failed to read the image with FileReader.'));
          };

          reader.onloadend = function () {
            _this.reader = null;
          };

          if (checkOrientation) {
            reader.readAsArrayBuffer(file);
          } else {
            reader.readAsDataURL(file);
          }
        }
      }
    }, {
      key: "load",
      value: function load(data) {
        var _this2 = this;

        var file = this.file,
            image = this.image;

        image.onload = function () {
          _this2.draw(_objectSpread2(_objectSpread2({}, data), {}, {
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight
          }));
        };

        image.onabort = function () {
          _this2.fail(new Error('Aborted to load the image.'));
        };

        image.onerror = function () {
          _this2.fail(new Error('Failed to load the image.'));
        }; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.


        if (WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent)) {
          // Fix the `The operation is insecure` error (#57)
          image.crossOrigin = 'anonymous';
        }

        image.alt = file.name;
        image.src = data.url;
      }
    }, {
      key: "draw",
      value: function draw(_ref2) {
        var _this3 = this;

        var naturalWidth = _ref2.naturalWidth,
            naturalHeight = _ref2.naturalHeight,
            _ref2$rotate = _ref2.rotate,
            rotate = _ref2$rotate === void 0 ? 0 : _ref2$rotate,
            _ref2$scaleX = _ref2.scaleX,
            scaleX = _ref2$scaleX === void 0 ? 1 : _ref2$scaleX,
            _ref2$scaleY = _ref2.scaleY,
            scaleY = _ref2$scaleY === void 0 ? 1 : _ref2$scaleY;
        var file = this.file,
            image = this.image,
            options = this.options;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var aspectRatio = naturalWidth / naturalHeight;
        var is90DegreesRotated = Math.abs(rotate) % 180 === 90;
        var maxWidth = Math.max(options.maxWidth, 0) || Infinity;
        var maxHeight = Math.max(options.maxHeight, 0) || Infinity;
        var minWidth = Math.max(options.minWidth, 0) || 0;
        var minHeight = Math.max(options.minHeight, 0) || 0;
        var width = Math.max(options.width, 0) || naturalWidth;
        var height = Math.max(options.height, 0) || naturalHeight;

        if (is90DegreesRotated) {
          var _ref3 = [maxHeight, maxWidth];
          maxWidth = _ref3[0];
          maxHeight = _ref3[1];
          var _ref4 = [minHeight, minWidth];
          minWidth = _ref4[0];
          minHeight = _ref4[1];
          var _ref5 = [height, width];
          width = _ref5[0];
          height = _ref5[1];
        }

        if (maxWidth < Infinity && maxHeight < Infinity) {
          if (maxHeight * aspectRatio > maxWidth) {
            maxHeight = maxWidth / aspectRatio;
          } else {
            maxWidth = maxHeight * aspectRatio;
          }
        } else if (maxWidth < Infinity) {
          maxHeight = maxWidth / aspectRatio;
        } else if (maxHeight < Infinity) {
          maxWidth = maxHeight * aspectRatio;
        }

        if (minWidth > 0 && minHeight > 0) {
          if (minHeight * aspectRatio > minWidth) {
            minHeight = minWidth / aspectRatio;
          } else {
            minWidth = minHeight * aspectRatio;
          }
        } else if (minWidth > 0) {
          minHeight = minWidth / aspectRatio;
        } else if (minHeight > 0) {
          minWidth = minHeight * aspectRatio;
        }

        if (height * aspectRatio > width) {
          height = width / aspectRatio;
        } else {
          width = height * aspectRatio;
        }

        width = Math.floor(normalizeDecimalNumber(Math.min(Math.max(width, minWidth), maxWidth)));
        height = Math.floor(normalizeDecimalNumber(Math.min(Math.max(height, minHeight), maxHeight)));
        var destX = -width / 2;
        var destY = -height / 2;
        var destWidth = width;
        var destHeight = height;

        if (is90DegreesRotated) {
          var _ref6 = [height, width];
          width = _ref6[0];
          height = _ref6[1];
        }

        canvas.width = width;
        canvas.height = height;

        if (!isImageType(options.mimeType)) {
          options.mimeType = file.type;
        }

        var fillStyle = 'transparent'; // Converts PNG files over the `convertSize` to JPEGs.

        if (file.size > options.convertSize && options.mimeType === 'image/png') {
          fillStyle = '#fff';
          options.mimeType = 'image/jpeg';
        } // Override the default fill color (#000, black)


        context.fillStyle = fillStyle;
        context.fillRect(0, 0, width, height);

        if (options.beforeDraw) {
          options.beforeDraw.call(this, context, canvas);
        }

        if (this.aborted) {
          return;
        }

        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(rotate * Math.PI / 180);
        context.scale(scaleX, scaleY);
        context.drawImage(image, destX, destY, destWidth, destHeight);
        context.restore();

        if (options.drew) {
          options.drew.call(this, context, canvas);
        }

        if (this.aborted) {
          return;
        }

        var done = function done(result) {
          if (!_this3.aborted) {
            _this3.done({
              naturalWidth: naturalWidth,
              naturalHeight: naturalHeight,
              result: result
            });
          }
        };

        if (canvas.toBlob) {
          canvas.toBlob(done, options.mimeType, options.quality);
        } else {
          done(canvasToBlob(canvas.toDataURL(options.mimeType, options.quality)));
        }
      }
    }, {
      key: "done",
      value: function done(_ref7) {
        var naturalWidth = _ref7.naturalWidth,
            naturalHeight = _ref7.naturalHeight,
            result = _ref7.result;
        var file = this.file,
            image = this.image,
            options = this.options;

        if (URL && !options.checkOrientation) {
          URL.revokeObjectURL(image.src);
        }

        if (result) {
          // Returns original file if the result is greater than it and without size related options
          if (options.strict && result.size > file.size && options.mimeType === file.type && !(options.width > naturalWidth || options.height > naturalHeight || options.minWidth > naturalWidth || options.minHeight > naturalHeight)) {
            result = file;
          } else {
            var date = new Date();
            result.lastModified = date.getTime();
            result.lastModifiedDate = date;
            result.name = file.name; // Convert the extension to match its type

            if (result.name && result.type !== file.type) {
              result.name = result.name.replace(REGEXP_EXTENSION, imageTypeToExtension(result.type));
            }
          }
        } else {
          // Returns original file if the result is null in some cases.
          result = file;
        }

        this.result = result;

        if (options.success) {
          options.success.call(this, result);
        }
      }
    }, {
      key: "fail",
      value: function fail(err) {
        var options = this.options;

        if (options.error) {
          options.error.call(this, err);
        } else {
          throw err;
        }
      }
    }, {
      key: "abort",
      value: function abort() {
        if (!this.aborted) {
          this.aborted = true;

          if (this.reader) {
            this.reader.abort();
          } else if (!this.image.complete) {
            this.image.onload = null;
            this.image.onabort();
          } else {
            this.fail(new Error('The compression process has been aborted.'));
          }
        }
      }
      /**
       * Get the no conflict compressor class.
       * @returns {Compressor} The compressor class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Compressor = AnotherCompressor;
        return Compressor;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        _extends(DEFAULTS, options);
      }
    }]);

    return Compressor;
  }();

  return Compressor;

})));


/***/ }),

/***/ 60793:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture-routing.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePicturePageRoutingModule": function() { return /* binding */ ProfilePicturePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_picture_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-picture.page */ 83289);




const routes = [
    {
        path: '',
        component: _profile_picture_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePicturePage
    },
    {
        path: 'upload-resume',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_sign-up_upload-resume_upload-resume_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../upload-resume/upload-resume.module */ 4607)).then(m => m.UploadResumePageModule)
    },
];
let ProfilePicturePageRoutingModule = class ProfilePicturePageRoutingModule {
};
ProfilePicturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePicturePageRoutingModule);



/***/ }),

/***/ 49305:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePicturePageModule": function() { return /* binding */ ProfilePicturePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-picture-routing.module */ 60793);
/* harmony import */ var _profile_picture_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-picture.page */ 83289);
/* harmony import */ var src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/image-cropper/image-cropper.module */ 72228);








let ProfilePicturePageModule = class ProfilePicturePageModule {
};
ProfilePicturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePicturePageRoutingModule,
            src_app_modals_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_2__.ImageCropperPageModule
        ],
        declarations: [_profile_picture_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePicturePage]
    })
], ProfilePicturePageModule);



/***/ }),

/***/ 83289:
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePicturePage": function() { return /* binding */ ProfilePicturePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_picture_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile-picture.page.html */ 94827);
/* harmony import */ var _profile_picture_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-picture.page.scss */ 87187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 51188);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ 37556);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/photo.service */ 61957);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/image-cropper/image-cropper.page */ 64151);
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! compressorjs */ 4937);
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(compressorjs__WEBPACK_IMPORTED_MODULE_7__);






const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Plugins;






let ProfilePicturePage = class ProfilePicturePage {
    constructor(router, alertController, loadingController, modalController, photo, auth, toastController) {
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.photo = photo;
        this.auth = auth;
        this.toastController = toastController;
        this.uploadedPhoto = false;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.url;
    }
    ngOnInit() {
    }
    takePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 30,
                height: 50,
                webUseInput: true,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos,
                preserveAspectRatio: true,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.DataUrl
            });
            console.log(image);
            let compressedImage = new (compressorjs__WEBPACK_IMPORTED_MODULE_7___default())(this.dataURLtoBlob(image.dataUrl), {
                quality: 0.3,
                success: compressedBlob => {
                    // console.log(compressedBlob)
                    // **blob to dataURL**
                    function blobToDataURL(blob, callback) {
                        var a = new FileReader();
                        a.onload = function (e) { callback(e.target.result); };
                        a.readAsDataURL(blob);
                    }
                    blobToDataURL(compressedBlob, data => {
                        console.log('Compressed Blob to DataURL');
                        this.imageCropperLoading(data);
                    });
                },
                error: (err) => {
                    console.log(err);
                },
            });
        });
    }
    imageCropModal(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(image);
            const modal = yield this.modalController.create({
                component: src_app_modals_image_cropper_image_cropper_page__WEBPACK_IMPORTED_MODULE_6__.ImageCropperPage,
                cssClass: 'image-cropper',
                componentProps: {
                    imageFromProfilePage: image
                }
            });
            yield modal.present();
            yield modal.onDidDismiss().then((data) => {
                console.log(data);
                this.imageSrc = data.data;
                if (data.data === undefined) {
                    this.uploadedPhoto = false;
                }
                else {
                    this.uploadedPhoto = true;
                }
            });
        });
    }
    skipAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'skip-alert',
                header: 'Skip Logo Upload',
                message: 'Are you sure you want to Skip uploading a Profile Picture? You can always add one later.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.router.navigate(['/sign-up/carrier/driver-info']);
                            this.auth.user.profilePicture = '<default picture>';
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    imageCropperLoading(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(image);
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Loading Image Cropper',
                duration: 3000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            yield this.imageCropModal(image);
        });
    }
    uploadPhoto() {
        if (!this.uploadedPhoto) {
            return this.noPhotoToast();
        }
        const formElement = document.querySelectorAll('form');
        formElement.forEach(form => {
            if (form.id === 'proPicForm') {
                console.log('Got Form: ' + form);
                this.formData = new FormData(form);
            }
        });
        const formData = new FormData();
        const photoFile = new File([this.dataURLtoBlob(this.imageSrc)], 'picture.png');
        formData.append('profile-picture', photoFile);
        if (this.uploadedPhoto === true) {
            this.photo.imageUpload(formData).subscribe(data => {
                console.log(data);
                console.log('Image Upload API Successful');
                this.goToUploadResumePage(data['objectUrl']);
            });
        }
    }
    noPhotoToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Please upload a photo, or Skip',
                cssClass: 'danger-toast',
                duration: 2000
            });
            toast.present();
        });
    }
    goToUploadResumePage(photoURL) {
        this.auth.getProfilePicture(photoURL);
        console.log('Going to Resume Page >>');
        this.router.navigate(['/personal-info/profile-picture/upload-resume']);
    }
    cancel() {
        console.log('Sign up cancelled');
    }
    presentCancelAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cancel Sign up?',
                cssClass: 'danger-alert',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.router.navigate(['']);
                            console.log('Cancelling Sign Up...');
                        }
                    },
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
        });
    }
    dataURLtoBlob(dataurl) {
        // console.log(dataurl)
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
};
ProfilePicturePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_4__.PhotoService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController }
];
ProfilePicturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-profile-picture',
        template: _raw_loader_profile_picture_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [],
        styles: [_profile_picture_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController,
        _services_photo_service__WEBPACK_IMPORTED_MODULE_4__.PhotoService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController])
], ProfilePicturePage);



/***/ }),

/***/ 87187:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-cropper {\n  height: 100%;\n  width: 100%;\n}\n\n.desktop-toolbar {\n  --background: none;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #33333326;\n}\n\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n\n.back-button {\n  --color: white;\n  --background: #0055a5;\n  --background-hover: linear-gradient(#0055a5, #0c375f);\n  height: 24px;\n  --border-radius: 5px;\n  width: 100px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.orange-button {\n  width: unset;\n  display: block;\n  margin: 8px auto;\n  width: 200px;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 1;\n}\n\n.skip-button {\n  display: block;\n  --background: #e6e6e6;\n  --background-hover: #999;\n  color: #888;\n  width: 200px;\n  font-weight: 600;\n  margin: 8px auto;\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.5;\n}\n\n#default-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  background-image: url('default-pro-picture.svg');\n}\n\n#uploaded-photo {\n  height: 100px;\n  box-shadow: 1px 1px 28px rgba(0, 0, 0, 0.2);\n  border-radius: 100px;\n}\n\n#upload-picture-wrapper {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n}\n\nspan {\n  color: #0055a5;\n  font-weight: 600;\n  background: white;\n  padding: 6px;\n  line-height: 1.5em;\n  border-radius: 5px;\n}\n\n#next-button {\n  width: 100%;\n  height: 60px;\n  margin: 8px auto;\n  background: lightgray;\n  position: absolute;\n  bottom: 0;\n  font-size: 1em;\n}\n\n.cancel-button {\n  color: #e4405f;\n  --background: none;\n  --background-hover: linear-gradient(#f15b77, #e4405f);\n  height: 50px;\n  width: 200px;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.cancel-button:hover {\n  color: white;\n}\n\n.get-picture-button {\n  --background: #1FCC6D;\n  --color: white;\n  height: 50px;\n  font-weight: 600;\n  margin: 32px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBRUY7O0FBQUU7RUFDRSxjQUFBO0FBRUo7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFBZSxZQUFBO0VBQ2YsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFFQSwyQ0FBQTtFQUNBLG9CQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQWUsWUFBQTtFQUNmLGNBQUE7RUFDQSxtQkFBQTtBQVFGOztBQUxBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVFGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVNGOztBQVBBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFVRjs7QUFQQTtFQUNFLFlBQUE7QUFVRjs7QUFSQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBV0YiLCJmaWxlIjoicHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jcm9wcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXNrdG9wLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzMjY7XG5cbiAgaDEge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICB9XG59XG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjMDA1NWE1LCAjMGMzNzVmKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5vcmFuZ2UtYnV0dG9uIHtcbiAgd2lkdGg6IHVuc2V0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA4cHggYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBhbmltYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2tpcC1idXR0b257XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzk5OTtcbiAgY29sb3I6ICM4ODg7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiA4cHggYXV0bztcbiAgYW5pbWF0aW9uOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG4jZGVmYXVsdC1waWN0dXJlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4OyB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29uL2RlZmF1bHQtcHJvLXBpY3R1cmUuc3ZnJyk7XG59XG4jdXBsb2FkZWQtcGhvdG8ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICAvLyBib3JkZXI6IDVweCBzb2xpZCAjZmFhNzFiO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDI4cHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4jdXBsb2FkLXBpY3R1cmUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5zcGFue1xuICBjb2xvcjogIzAwNTVhNTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jbmV4dC1idXR0b257XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogOHB4IGF1dG87XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmNhbmNlbC1idXR0b24ge1xuICBjb2xvcjogI2U0NDA1ZjtcbiAgLS1iYWNrZ3JvdW5kOiAgbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaW5lYXItZ3JhZGllbnQoI2YxNWI3NywgI2U0NDA1Zik7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5nZXQtcGljdHVyZS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMxRkNDNkQ7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xufVxuXG4iXX0= */");

/***/ }),

/***/ 94827:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/sign-up/profile-picture/profile-picture.page.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-md-up\">\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <img style=\"margin-right: 16px;\" height=\"32\" src=\"../../../../../assets/icon/fyf-white-icon.svg\">\n    </ion-buttons>\n    <ion-title size=\"small\">Profile Picture</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <div class=\"spacer ion-hide-lg-down\"></div>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 80px; margin-bottom: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                  <img height=\"50\" src=\"../../../../../assets/icon/Logo 2.0.svg\" alt=\"\" srcset=\"\">\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"cancel()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n            <!-- <img height=\"50\" style=\"display: inline;\" src=\"../../../assets/icon/suitcase-blue.svg\" alt=\"\" srcset=\"\">\n            <h1 style=\"display: inline; margin-left: 15px;\">Jobs</h1> -->\n      </ion-col>\n    </ion-row>\n\n    <!-- Header -->\n    <ion-row class=\"ion-justify-content-center header\">\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <h6 class=\"text-header\">Please upload your Profile Picture</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <!-- Picture Wrappers -->\n        <ion-col  size-lg=\"3\" size-md=\"7\" size-xs=\"11\" class=\"ion-align-items-center\">\n          <!-- Default Picture if user does not select profile picture Wrapper -->\n          <canvas\n            #defaultPicture\n            id=\"default-picture-wrapper\"\n            *ngIf=\"!uploadedPhoto\"></canvas>\n\n          <!-- User has uploaded cropped profile picture -->\n          <img id=\"uploaded-photo\" *ngIf=\"this.uploadedPhoto\" src=\"{{imageSrc}}\">\n\n            <!-- User has cropped profile picture -->\n            <!-- <img\n              id=\"upload-picture-wrapper\"\n              *ngIf=\"uploadedPhoto\"\n              src=\"{{croppedPhotoURL}}\" /> -->\n        </ion-col>\n      <!-- Get Picture Button -->\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"10\">\n          <img height=\"80\" *ngIf=\"!this.uploadedPhoto\" src=\"../../../../../assets/icons/carrier-candidate.svg\" alt=\"\" srcset=\"\">\n        </ion-col>\n        <ion-button (click)=\"takePicture()\" class=\"get-picture-button\">\n          Tap to get Profile Picture\n          <!-- <span>Only .png, .jpg, and .jpeg are allowed.</span> -->\n        </ion-button>\n      </ion-row>\n      <!-- Skip & Cancel Buttons -->\n      <ion-row class=\"ion-justify-content-center\" style=\"margin-top: 16px;\">\n        <ion-col size=\"10\">\n          <ion-button\n            (click)=\"uploadPhoto()\"\n            class=\"orange-button\">\n            Next\n          </ion-button>\n          <!-- <ion-button class=\"skip-button\">\n            Skip\n          </ion-button> -->\n          <ion-button (click)=\"this.auth.cancelSignUp()\" class=\"cancel-button\">\n            Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_sign-up_profile-picture_profile-picture_module_ts-es2015.js.map