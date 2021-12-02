"use strict";
(self["webpackChunkfind_you_future_app"] = self["webpackChunkfind_you_future_app"] || []).push([["src_app_pages_jobs_apply_apply_module_ts"],{

/***/ 76371:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toInteger; }
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ 4185:
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInCalendarYears; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ 81305:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInYears/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ differenceInYears; }
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 62711);
/* harmony import */ var _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarYears/index.js */ 4185);
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ 17986);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);




/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */

function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days

  dateLeft.setFullYear('1584');
  dateRight.setFullYear('1584'); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastYearNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight) === -sign;
  var result = sign * (difference - isLastYearNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 98048:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ parseISO; }
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 76371);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 24252);


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate(), dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    result.setFullYear(dirtyDate.getUTCFullYear());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ 62934:
/*!******************************************************************!*\
  !*** ./src/app/modals/view-resume/view-resume-routing.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewResumePageRoutingModule": function() { return /* binding */ ViewResumePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _view_resume_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-resume.page */ 68098);




const routes = [
    {
        path: '',
        component: _view_resume_page__WEBPACK_IMPORTED_MODULE_0__.ViewResumePage
    }
];
let ViewResumePageRoutingModule = class ViewResumePageRoutingModule {
};
ViewResumePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewResumePageRoutingModule);



/***/ }),

/***/ 703:
/*!**********************************************************!*\
  !*** ./src/app/modals/view-resume/view-resume.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewResumePageModule": function() { return /* binding */ ViewResumePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-resume-routing.module */ 62934);
/* harmony import */ var _view_resume_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-resume.page */ 68098);
/* harmony import */ var _upload_resume_modal_upload_resume_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-resume-modal/upload-resume-modal.module */ 49969);








let ViewResumePageModule = class ViewResumePageModule {
};
ViewResumePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _view_resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewResumePageRoutingModule,
            _upload_resume_modal_upload_resume_modal_module__WEBPACK_IMPORTED_MODULE_2__.UploadResumeModalPageModule
        ],
        declarations: [_view_resume_page__WEBPACK_IMPORTED_MODULE_1__.ViewResumePage]
    })
], ViewResumePageModule);



/***/ }),

/***/ 68098:
/*!********************************************************!*\
  !*** ./src/app/modals/view-resume/view-resume.page.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewResumePage": function() { return /* binding */ ViewResumePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_resume_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./view-resume.page.html */ 10236);
/* harmony import */ var _view_resume_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-resume.page.scss */ 73174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ 39181);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _upload_resume_modal_upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../upload-resume-modal/upload-resume-modal.page */ 84455);



// Modal






let ViewResumePage = class ViewResumePage {
    constructor(router, _modal, profile, domSanitizer) {
        this.router = router;
        this._modal = _modal;
        this.profile = profile;
        this.domSanitizer = domSanitizer;
    }
    ngOnInit() {
        this.profile.getUserDetails()
            .subscribe(data => {
            console.log(data);
            this.profile.resume.next(data['resume']);
        });
        this.profile.resume.subscribe(data => {
            this.resume = data;
        });
    }
    sanitizeImageUrl(imageUrl) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl);
    }
    back() {
        this.router.navigate(['/home/profile']);
    }
    uploadResumeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _upload_resume_modal_upload_resume_modal_page__WEBPACK_IMPORTED_MODULE_3__.UploadResumeModalPage,
                cssClass: 'my-custom-class'
            });
            yield modal.present();
        });
    }
    cancel() {
        this._modal.dismiss();
    }
};
ViewResumePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
ViewResumePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-view-resume',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_resume_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_resume_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer])
], ViewResumePage);



/***/ }),

/***/ 95691:
/*!**********************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyPageRoutingModule": function() { return /* binding */ ApplyPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _apply_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply.page */ 26042);




const routes = [
    {
        path: '',
        component: _apply_page__WEBPACK_IMPORTED_MODULE_0__.ApplyPage
    },
    {
        path: 'apply-confirm/:title/:companyName/:companyEmail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_jobs_apply-confirm_apply-confirm_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../apply-confirm/apply-confirm.module */ 32173)).then(m => m.ApplyConfirmPageModule)
    }
];
let ApplyPageRoutingModule = class ApplyPageRoutingModule {
};
ApplyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApplyPageRoutingModule);



/***/ }),

/***/ 29382:
/*!**************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyPageModule": function() { return /* binding */ ApplyPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/custom-component.module */ 64941);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _apply_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-routing.module */ 95691);
/* harmony import */ var _apply_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apply.page */ 26042);
/* harmony import */ var src_app_modals_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/view-resume/view-resume.module */ 703);









let ApplyPageModule = class ApplyPageModule {
};
ApplyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _components_custom_component_module__WEBPACK_IMPORTED_MODULE_0__.CustomComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _apply_routing_module__WEBPACK_IMPORTED_MODULE_1__.ApplyPageRoutingModule,
            src_app_modals_view_resume_view_resume_module__WEBPACK_IMPORTED_MODULE_3__.ViewResumePageModule
        ],
        declarations: [_apply_page__WEBPACK_IMPORTED_MODULE_2__.ApplyPage]
    })
], ApplyPageModule);



/***/ }),

/***/ 26042:
/*!************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyPage": function() { return /* binding */ ApplyPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_apply_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./apply.page.html */ 68490);
/* harmony import */ var _apply_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply.page.scss */ 1256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/jobs.service */ 11912);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profile.service */ 39181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 81305);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 98048);
/* harmony import */ var src_app_modals_view_resume_view_resume_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modals/view-resume/view-resume.page */ 68098);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 7602);












let ApplyPage = class ApplyPage {
    constructor(router, activatedRoute, jobs, profile, formBuilder, location, modal) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.jobs = jobs;
        this.profile = profile;
        this.formBuilder = formBuilder;
        this.location = location;
        this.modal = modal;
    }
    ngOnDestroy() {
        this.profileSub.unsubscribe();
        // this.sendAppSub.unsubscribe();
    }
    ngOnInit() {
        this.profileSub = this.profile.getUserDetails().subscribe(data => {
            console.log(data);
            this.user = data;
            this.age = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(Date.now(), (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(data["dob"]));
            console.log('User\'s age: ', this.age);
            this.phoneNumber = data["phone"];
            this.applyPageForm = this.formBuilder.group({
                phoneNumber: [this.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)
                    ])],
                reasonTextArea: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2500)])]
            });
            const title = this.activatedRoute.snapshot.paramMap.get('title');
            const companyLogo = this.activatedRoute.snapshot.paramMap.get('companyLogo');
            const companyName = this.activatedRoute.snapshot.paramMap.get('companyName');
            const companyEmail = this.activatedRoute.snapshot.paramMap.get('companyEmail');
            const rateOfPay = this.activatedRoute.snapshot.paramMap.get('rateOfPay');
            this.jobTitle = title;
            this.jobCompanyName = companyName;
            this.jobLogo = companyLogo;
            this.jobCompanyEmail = companyEmail;
            this.jobRateOfPay = rateOfPay;
        });
    }
    goBack() {
        this.location.back();
    }
    viewResumeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_modals_view_resume_view_resume_page__WEBPACK_IMPORTED_MODULE_4__.ViewResumePage,
                cssClass: 'my-custom-class'
            });
            yield modal.present();
        });
    }
    sendConfirmationEmail() {
        console.log('Sending confirmation email to Users email address');
    }
    finishApplication() {
        this.reason = this.applyPageForm.value.reasonTextArea;
        this.phoneNumber = this.applyPageForm.value.phoneNumber;
        console.log('Reason: ', this.reason);
        // tslint:disable-next-line: max-line-length
        this.sendAppSub = this.jobs.sendEmailApplication(this.user, this.age, this.phoneNumber, this.reason, this.jobTitle, this.jobCompanyEmail).subscribe();
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/home/jobs/job-page/:id/:title/:companyLogo/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply/:title/:companyLogo/:companyEmail/:companyName/:rateOfRate/apply-confirm/', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail]);
    }
};
ApplyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController }
];
ApplyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-apply',
        template: _Users_ferro_Desktop_United_Way_FYF_node_modules_ngtools_webpack_src_loaders_direct_resource_js_apply_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_apply_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute,
        _services_jobs_service__WEBPACK_IMPORTED_MODULE_2__.JobsService,
        _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController])
], ApplyPage);



/***/ }),

/***/ 10236:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modals/view-resume/view-resume.page.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons (click)=\"cancel()\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      <ion-title>View Resume</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"uploadResumeModal()\" id=\"upload-button\">UPDATE</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-toolbar class=\"ion-hide-lg-down\">\n      <ion-buttons (click)=\"cancel()\" slot=\"start\">\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n        <ion-title>View Resume</ion-title>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"uploadResumeModal()\" id=\"upload-button\">UPDATE</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n\n    <!-- Resume View -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"10\">\n        <p class=\"text-header\">You can View and Update your Resume here</p>\n        <object [data]=\"this.sanitizeImageUrl(this.resume)\" width=\"100%\" height=\"700\" type=\"application/pdf\"></object>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 68490:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/jobs/apply/apply.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <img id=\"mobile-toolbar-icon\" src=\"../../../../assets/logos/White-FYF-LOGO.svg\" alt=\"White FYF Logo\">\n    </ion-buttons>\n  <ion-title>Application</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!-- Desktop Header -->\n    <ion-row style=\"padding-top: 40px;\" class=\"ion-hide-lg-down ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <ion-toolbar class=\"desktop-toolbar\">\n              <ion-buttons slot=\"start\">\n                <img style=\"border-radius: 50px;\" height=\"75\" src=\"{{this.jobLogo}}\">\n                <div class=\"toolbar-company-info\">\n                  <h2>{{jobCompanyName}}</h2>\n                  <h3>{{jobTitle}}</h3>\n                  <p>${{jobRateOfPay}} / hr</p>\n                </div>\n              </ion-buttons>\n              <ion-buttons slot=\"end\">\n                <ion-button class=\"back-button\" (click)=\"goBack()\">\n                  Back\n                </ion-button>\n              </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-hide-lg-up\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\">\n        <div class=\"spacer\"></div>\n        <img style=\"border-radius: 50px;\" height=\"75\" src=\"{{this.jobLogo}}\">\n        <div class=\"toolbar-company-info\">\n          <h2>{{jobCompanyName}}</h2>\n          <h3>{{jobTitle}}</h3>\n          <p>${{jobRateOfPay}} / hr</p>\n        </div>\n        <div class=\"spacer\"></div>\n      </ion-col>\n    </ion-row>\n    <!-- Instructions -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <p id=\"instructions\">Please go over your information before you send your application. You can edit your profile's phone number and Resume from here. After you hit submit, an email with your FYF Profile, Resume, and application message will be sent to the employer.</p>\n      </ion-col>\n    </ion-row>\n    <!-- Forms -->\n    <ion-row class=\"ion-justify-content-center\" style=\"margin: 20px auto;\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\n        <form *ngIf=\"applyPageForm\" [formGroup]=\"applyPageForm\">\n          <div class=\"info-section\">\n            <p class=\"instructions\" >Phone Number</p>\n            <ion-list class=\"line-input\">\n              <ion-item>\n                <ion-input formControlName=\"phoneNumber\" maxlength=\"10\" inputmode=\"tel\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </div>\n          <div class=\"info-section\">\n            <p class=\"instructions\" >Resume</p>\n            <ion-button class=\"blue-button\" style=\"height: 45px;\" (click)=\"viewResumeModal()\">\n                        View Resume\n            </ion-button>\n                      <!-- <p>or</p> -->\n            <ion-input type=\"file\" class=\"custom-file-input \">\n            <label style=\"margin-right: 10px;\">Upload Resume</label>\n            </ion-input>\n          </div>\n          <div class=\"info-section\">\n            <p class=\"instructions\" >Why are you a good fit for this job?</p>\n            <ion-textarea\n              class=\"message-input\"\n              formControlName=\"reasonTextArea\"\n              maxlength=\"2500\"\n              rows=\"15\"\n              placeholder=\"Add message here - 2500 characters max\"></ion-textarea>\n          </div>\n          <ion-row>\n            <ion-col class=\"ion-text-center\" size=\"12\">\n              <ion-button (click)=\"finishApplication()\" class=\"orange-button next-button\">Submit</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 73174:
/*!**********************************************************!*\
  !*** ./src/app/modals/view-resume/view-resume.page.scss ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = "ion-toolbar {\n  --background: #0055a5;\n}\n\nion-icon, ion-title {\n  color: white;\n}\n\nion-icon {\n  position: relative;\n  left: 1em;\n}\n\nh4 {\n  margin: 45px auto;\n  color: #005191;\n}\n\n#upload-button {\n  position: relative;\n  top: 4px;\n  font-size: 10px;\n  font-weight: 600;\n  right: 20px;\n  --width: 60px;\n  --background: #ffba1930;\n  --border-style: solid;\n  --border-color: #ffba19;\n  --border-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcmVzdW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlGIiwiZmlsZSI6InZpZXctcmVzdW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xufVxuaW9uLWljb24sIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxZW07XG59XG5oNCB7XG4gIG1hcmdpbjogNDVweCBhdXRvO1xuICBjb2xvcjogIzAwNTE5MTtcbn1cblxuI3VwbG9hZC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHJpZ2h0OiAyMHB4O1xuICAtLXdpZHRoOiA2MHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmJhMTkzMDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogI2ZmYmExOTtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbn0iXX0= */";

/***/ }),

/***/ 1256:
/*!**************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.page.scss ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "ion-title {\n  margin: 0;\n  color: white;\n}\n\nion-toolbar {\n  --background: #0055a5;\n}\n\n#mobile-toolbar-icon {\n  height: 32px;\n  position: relative;\n}\n\nion-back-button {\n  color: white;\n  width: auto;\n}\n\n.desktop-toolbar {\n  --background: none;\n}\n\n.desktop-toolbar h1 {\n  color: #0055a5;\n}\n\n.toolbar-company-info {\n  display: inline-block;\n  margin-left: 1em;\n  --background: none;\n}\n\n.toolbar-company-info h2, .toolbar-company-info h3, .toolbar-company-info p {\n  margin: 0;\n}\n\n.toolbar-company-info h2 {\n  color: #0055a5;\n  font-weight: 600;\n}\n\n.toolbar-company-info h3 {\n  font-size: 1em;\n  color: #666;\n}\n\n.toolbar-company-info p {\n  color: white;\n  margin-top: 0.7em;\n  text-align: center;\n  background: #4dc066;\n  width: 50px;\n  padding: 4px;\n  font-size: 0.7em;\n  font-weight: 600;\n  border-radius: 5px;\n}\n\n.back-button {\n  --color: white;\n  --background: #e3405f;\n  --background-hover: linear-gradient(#e3405f, #0d2e4d);\n  height: 24px;\n  --border-radius: 5px;\n  width: 50px;\n  font-size: 0.5em;\n  font-weight: 600;\n  display: block;\n}\n\n.instructions {\n  line-height: 1em;\n  width: 400px;\n  color: #333;\n  font-size: 1em;\n  font-weight: 600;\n}\n\n.info-section {\n  margin-bottom: 20px;\n}\n\n.message-input {\n  background: white;\n  height: auto;\n  margin: 20px 0 10px 0;\n  box-shadow: none;\n  padding: 10px;\n  border: 3px solid #0055a5;\n  border-radius: 2px;\n  transition: 1s;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.company-logo {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n\n.job-title {\n  font-size: 2em;\n  margin-top: 15px;\n  margin-bottom: 5px;\n  color: #005191;\n}\n\n#company-name {\n  margin-top: 22px;\n  margin-left: 8px;\n  color: #222;\n}\n\n#instructions {\n  margin-top: 25px;\n  font-size: 1em;\n  color: #111;\n}\n\n@media only screen and (min-width: 992px) {\n  #instructions {\n    font-size: 0.9em;\n  }\n}\n\n.custom-file-input {\n  visibility: hidden;\n}\n\n.custom-file-input::before {\n  content: \"Select some files\";\n  display: inline-block;\n  background: linear-gradient(to top, #f9f9f9, #e3e3e3);\n  border: 1px solid #999;\n  border-radius: 3px;\n  padding: 5px 8px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  text-shadow: 1px 1px #fff;\n  font-weight: 700;\n  font-size: 10pt;\n}\n\n.custom-file-input:hover::before {\n  border-color: black;\n}\n\n.custom-file-input:active::before {\n  background: -webkit-linear-gradient(to top, #e3e3e3, #f9f9f9);\n}\n\nion-label {\n  margin-top: 25px;\n  font-size: 1.3em;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFKRTtFQUNFLGNBQUE7QUFNSjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUpFO0VBQ0UsU0FBQTtBQU1KOztBQUpFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUpFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSEE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUpBO0VBQ0UsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtRUFBQTtBQVFGOztBQU5BO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFVRjs7QUFSQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBV0Y7O0FBVEE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBWUY7O0FBVkE7RUFDRTtJQUNFLGdCQUFBO0VBYUY7QUFDRjs7QUFYQTtFQUNFLGtCQUFBO0FBYUY7O0FBWEE7RUFDRSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWNGOztBQVpBO0VBQ0UsbUJBQUE7QUFlRjs7QUFiQTtFQUNFLDZEQUFBO0FBZ0JGOztBQWJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFnQkYiLCJmaWxlIjoiYXBwbHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTVhNTtcbn1cbiNtb2JpbGUtdG9vbGJhci1pY29uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmRlc2t0b3AtdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBoMSB7XG4gICAgY29sb3I6ICMwMDU1YTU7XG4gIH1cbn1cbi50b29sYmFyLWNvbXBhbnktaW5mb3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG5cbiAgaDIsIGgzLCBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgaDIge1xuICAgIGNvbG9yOiAjMDA1NWE1O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjNjY2XG4gIH1cbiAgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDAuN2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjNGRjMDY2O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG4uYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZTM0MDVmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgjZTM0MDVmLCAjMGQyZTRkKTtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmluc3RydWN0aW9ucyB7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiA0MDBweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW5mby1zZWN0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1lc3NhZ2UtaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggMCAxMHB4IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDU1YTU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4uY29tcGFueS1sb2dvIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uam9iLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICMwMDUxOTE7XG59XG4jY29tcGFueS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgY29sb3I6ICMyMjI7XG59XG4jaW5zdHJ1Y3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMTExO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAjaW5zdHJ1Y3Rpb25zIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdTZWxlY3Qgc29tZSBmaWxlcyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2Y5ZjlmOSwgI2UzZTNlMyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEwcHQ7XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQ6aG92ZXI6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG4uY3VzdG9tLWZpbGUtaW5wdXQ6YWN0aXZlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlM2UzZTMsICNmOWY5ZjkpO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzY2Njtcbn1cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_jobs_apply_apply_module_ts-es2015.js.map