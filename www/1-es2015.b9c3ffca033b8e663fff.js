(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/Tr7":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("jIYg");function r(t){Object(n.a)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},"7xvl":function(t,e,a){"use strict";var n=a("JhOC"),r=a("/Tr7"),o=a("jIYg");function i(t,e){Object(o.a)(2,arguments);var a=Object(r.a)(t),n=Object(r.a)(e),i=a.getFullYear()-n.getFullYear(),s=a.getMonth()-n.getMonth();return 12*i+s}function s(t,e){Object(o.a)(2,arguments);var a=Object(r.a)(t),s=Object(r.a)(e),u=Object(n.a)(a,s),h=Math.abs(i(a,s));a.setMonth(a.getMonth()-u*h);var d=Object(n.a)(a,s)===-u,c=u*(h-d);return 0===c?0:c}function u(t,e){Object(o.a)(2,arguments);var a=Object(r.a)(t),n=Object(r.a)(e);return a.getTime()-n.getTime()}function h(t,e){Object(o.a)(2,arguments);var a=u(t,e)/1e3;return a>0?Math.floor(a):Math.ceil(a)}var d=a("iSMj");function c(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in e=e||{})e.hasOwnProperty(a)&&(t[a]=e[a]);return t}({},t)}var l=a("JCDJ");function m(t,e,a){Object(o.a)(2,arguments);var i=a||{},u=i.locale||d.a;if(!u.formatDistance)throw new RangeError("locale must contain formatDistance property");var m=Object(n.a)(t,e);if(isNaN(m))throw new RangeError("Invalid time value");var f,g,p=c(i);p.addSuffix=Boolean(i.addSuffix),p.comparison=m,m>0?(f=Object(r.a)(e),g=Object(r.a)(t)):(f=Object(r.a)(t),g=Object(r.a)(e));var b,w=h(g,f),v=(Object(l.a)(g)-Object(l.a)(f))/1e3,y=Math.round((w-v)/60);if(y<2)return i.includeSeconds?w<5?u.formatDistance("lessThanXSeconds",5,p):w<10?u.formatDistance("lessThanXSeconds",10,p):w<20?u.formatDistance("lessThanXSeconds",20,p):w<40?u.formatDistance("halfAMinute",null,p):u.formatDistance(w<60?"lessThanXMinutes":"xMinutes",1,p):0===y?u.formatDistance("lessThanXMinutes",1,p):u.formatDistance("xMinutes",y,p);if(y<45)return u.formatDistance("xMinutes",y,p);if(y<90)return u.formatDistance("aboutXHours",1,p);if(y<1440){var M=Math.round(y/60);return u.formatDistance("aboutXHours",M,p)}if(y<2520)return u.formatDistance("xDays",1,p);if(y<43200){var C=Math.round(y/1440);return u.formatDistance("xDays",C,p)}if(y<86400)return b=Math.round(y/43200),u.formatDistance("aboutXMonths",b,p);if((b=s(g,f))<12){var j=Math.round(y/43200);return u.formatDistance("xMonths",j,p)}var P=b%12,D=Math.floor(b/12);return P<3?u.formatDistance("aboutXYears",D,p):P<9?u.formatDistance("overXYears",D,p):u.formatDistance("almostXYears",D+1,p)}function f(t,e){return Object(o.a)(1,arguments),m(t,Date.now(),e)}a.d(e,"a",(function(){return f}))},Aso2:function(t,e,a){"use strict";a.d(e,"a",(function(){return g}));var n=a("mrSG"),r=(a("EThc"),a("ZZ/e")),o=a("lGQG"),i=a("2Vo4"),s=a("JIr8"),u=a("vkgz"),h=a("AytR"),d=a("8Y7J"),c=a("IheW"),l=a("xgBC"),m=a("gFH1"),f=a("iInd");let g=(()=>{class t{constructor(t,e,a,n,r,o,s){this.http=t,this.storage=e,this.alertController=a,this.helper=n,this.auth=r,this.router=o,this.toastController=s,this.BACKEND_URL=h.a.url,this.activeEmail="",this.user={},this.fullName=new i.a(""),this.addressOne=new i.a(""),this.addressTwo=new i.a(""),this.phone=new i.a(""),this.city=new i.a(""),this.state=new i.a(""),this.zip=new i.a(""),this.gender=new i.a(""),this.dob=new i.a(""),this.school=new i.a(""),this.grade=new i.a(""),this.profilePicture=new i.a(""),this.resume=new i.a(""),this.email=new i.a(""),this.activeEmail=this.auth.user.email}getUserDetails(){return this.http.post(`${this.BACKEND_URL}/api/home/user`,{email:this.activeEmail})}changeEmail(t,e,a){return this.http.post(`${this.BACKEND_URL}/api/home/user/change-email`,{oldEmail:this.activeEmail,email:e,password:a}).pipe(Object(s.a)(t=>{throw this.presentFailToast(this.activeEmail),new Error(t)})).subscribe(t=>{if(!0!==t)return this.presentFailToast(this.activeEmail),console.log("Passwords dont match");this.email.next(e),this.activeEmail=e,this.router.navigate(["/home/profile"]),this.presentSuccessToast()})}presentSuccessToast(){this.toastController.create({message:"Your Email address has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(t=>t.present())}presentFailToast(t){this.toastController.create({message:`Password and Email combination do not work. Make sure that your password is correct, and that your new email is different from your current email address of ${t}`,duration:9e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then(t=>t.present())}changePassword(t,e,a,r){return n.b(this,void 0,void 0,(function*(){return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-password`,{oldPassword:e,email:t,newPassword:a,reTypeNewPassword:r}).subscribe(t=>{!0===t?(console.log("TRUE"),this.router.navigate([""]),this.toastController.create({message:"Password updated. Please login with your new password.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(t=>t.present())):console.log("Passwords dont match!")})}))}changePhone(t,e,a){return n.b(this,void 0,void 0,(function*(){return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-phone`,{newNumber:e,password:a,email:t}).subscribe(t=>{!0===t?(console.log("Changing phone number..."),this.phone.next(e),this.router.navigate(["/home/profile"]),this.toastController.create({message:"Your phone number has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(t=>t.present())):(console.log("Passwords dont match!"),this.toastController.create({message:"Password was incorrect",duration:3e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then(t=>t.present()))})}))}changeAddress(t,e,a,r,o,i,h){return n.b(this,void 0,void 0,(function*(){return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-address`,{email:t,addressOne:e,addressTwo:a,city:r,state:o,zip:i,password:h}).pipe(Object(u.a)(t=>{t||console.log("There was no response. There might be a bad password")}),Object(s.a)(t=>{throw new Error(t)})).subscribe(t=>{if(!0!==t)return this.toastController.create({message:"Please make sure your password is correct",duration:3e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then(t=>t.present()),console.log("Passwords dont match");this.addressOne.next(e),this.addressTwo.next(a),this.city.next(r),this.state.next(o),this.zip.next(i),this.router.navigate(["/home/profile"]),this.toastController.create({message:"Your address has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(t=>t.present())})}))}changeSchool(t,e,a,r){return n.b(this,void 0,void 0,(function*(){return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`,{email:t,newSchool:e,newGrade:a,password:r}).subscribe(t=>{if(!0!==t)return this.toastController.create({message:"Please make sure your password is correct",duration:3e3,cssClass:"wrong-password-toast",keyboardClose:!0,position:"top"}).then(t=>t.present()),console.log("Passwords dont match");this.school.next(e),this.grade.next(a),this.router.navigate(["/home/profile"]),this.toastController.create({message:"Your school information has been updated.",duration:3e3,cssClass:"updated-toast",keyboardClose:!0,position:"bottom"}).then(t=>t.present())})}))}changeProfilePicture(t,e){return n.b(this,void 0,void 0,(function*(){return this.http.post(`${this.BACKEND_URL}/api/photo/change-profile-picture`,{imageForm:t,oldPhotoKey:e}).subscribe()}))}changeResume(t,e,a){return n.b(this,void 0,void 0,(function*(){return yield this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`,{email:t,newResume:e,password:a}).subscribe(t=>{if(!0!==t)return console.log("Passwords dont match");console.log("Changing Resume..."),this.resume.next(e),this.router.navigate(["/home/user/change-school/:school/:grade/confirm"])})}))}delete(){console.log("Deleted User")}}return t.ngInjectableDef=d.Yb({factory:function(){return new t(d.Zb(c.c),d.Zb(l.b),d.Zb(r.b),d.Zb(m.a),d.Zb(o.a),d.Zb(f.m),d.Zb(r.Qb))},token:t,providedIn:"root"}),t})()},JCDJ:function(t,e,a){"use strict";function n(t){var e=new Date(t.getTime()),a=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*a+e.getTime()%6e4}a.d(e,"a",(function(){return n}))},JhOC:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a("/Tr7"),r=a("jIYg");function o(t,e){Object(r.a)(2,arguments);var a=Object(n.a)(t),o=Object(n.a)(e),i=a.getTime()-o.getTime();return i<0?-1:i>0?1:i}},iSMj:function(t,e,a){"use strict";var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(t){return function(e){var a=e||{},n=a.width?String(a.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function i(t){return function(e,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=r.width?String(r.width):o;n=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;n=t.values[u]||t.values[s]}return n[t.argumentCallback?t.argumentCallback(e):e]}}function s(t){return function(e,a){var n=String(e),r=a||{},o=n.match(t.matchPattern);if(!o)return null;var i=o[0],s=n.match(t.parsePattern);if(!s)return null;var u=t.valueCallback?t.valueCallback(s[0]):s[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}}function u(t){return function(e,a){var n=String(e),r=a||{},o=r.width,i=n.match(o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth]);if(!i)return null;var s,u=i[0],h=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(h)?function(t,e){for(var a=0;a<t.length;a++)if(t[a].test(n))return a}(h):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&t[a].test(n))return a}(h),s=t.valueCallback?t.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(u.length)}}}e.a={code:"en-US",formatDistance:function(t,e,a){var r;return a=a||{},r="string"==typeof n[t]?n[t]:1===e?n[t].one:n[t].other.replace("{{count}}",e),a.addSuffix?a.comparison>0?"in "+r:r+" ago":r},formatLong:{date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},formatRelative:function(t,e,a,n){return o[t]},localize:{ordinalNumber:function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:i({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:i({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:i({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:i({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:i({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:s({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:u({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:u({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:u({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:u({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}},jIYg:function(t,e,a){"use strict";function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+t>1?"s":" required, but only "+e.length+" present")}a.d(e,"a",(function(){return n}))}}]);