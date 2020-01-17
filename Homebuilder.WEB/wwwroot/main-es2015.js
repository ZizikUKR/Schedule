(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/activity/activity.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/activity/activity.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"activity\">\r\n  <h2 class=\"title\">Activity</h2>\r\n  <div class=\"board\">\r\n    <header class=\"header\">\r\n      <button class=\"button\" type=\"button\">\r\n        <mat-icon aria-hidden=\"false\">search</mat-icon>\r\n      </button>\r\n      <span>search</span>\r\n    </header>\r\n    \r\n    <ul class=\"articles\">\r\n\r\n      <li class=\"article\">\r\n        <div class=\"post\">\r\n          <div class=\"post-header\">\r\n            <div class=\"post-logo\">\r\n              <img src=\"../../../assets/images/avatar/user-placeholder.png\" alt=\"avatar\">\r\n            </div>\r\n            <div class=\"post-info\">\r\n              <div class=\"post-title\">\r\n                <p>John R. Doe<span class=\"post-event\">Uploaded Photos</span></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          \r\n\r\n        </div>\r\n        <div class=\"article-action\">\r\n          <button class=\"button\" [ngClass]=\"{active: false}\" type=\"button\">\r\n            <mat-icon aria-hidden=\"false\">add_circle_outline</mat-icon>\r\n          </button>\r\n        </div>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"grid-template\">\r\n    <app-activity></app-activity>\r\n    <app-home-builder></app-home-builder>\r\n</main>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home-builder/home-builder.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home-builder/home-builder.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home-builder\">\r\n  <h2 class=\"title\">Homebuilder</h2>\r\n  <div class=\"board\">\r\n    <header class=\"header\">\r\n      <button class=\"button button-add\" type=\"button\">Add Items</button>\r\n      <div class=\"search\">\r\n        <span>search</span>\r\n        <button class=\"button\" type=\"button\">\r\n          <mat-icon aria-hidden=\"false\">keyboard_arrow_down</mat-icon>\r\n        </button>\r\n      </div>\r\n    </header>\r\n    <button class=\"button\" [ngClass]=\"{active: true}\" type=\"button\">\r\n      <mat-icon aria-hidden=\"false\">check_circle_outline</mat-icon>\r\n    </button>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\r\n    <a class=\"logo\" routerLink=\"/\">\r\n      <img src=\"./../../assets/images/logo/logo.png\" alt=\"logo\">\r\n    </a>\r\n    <nav class=\"nav\"> \r\n      <a routerLink=\"dashboard\" routerLinkActive=\"active\" class=\"button button-nav\" type=\"button\" (click)=\"navigateToDashBoard()\">DashBoard</a>\r\n      <a routerLink=\"projects\" routerLinkActive=\"active\" class=\"button button-nav\" [ngClass]=\"{notification: true}\" type=\"button\" (click)=\"navigateToProjects()\" >Projects</a>\r\n      <a routerLink=\"tool-shelf\" routerLinkActive=\"active\" class=\"button button-nav\" [ngClass]=\"{notification: true}\" type=\"button\" (click)=\"navigateToToolShelf()\">ToolShelf</a>\r\n      <a routerLink=\"network\" routerLinkActive=\"active\" class=\"button button-nav\" type=\"button\" (click)=\"navigateToToolNetWork()\">NetWork</a>\r\n    </nav>\r\n    <div class=\"section\">\r\n      <div class=\"action\">\r\n        <button class=\"button\" [ngClass]=\"{notification: true}\" type=\"button\">\r\n          <mat-icon aria-hidden=\"false\">mail_outline</mat-icon>\r\n          <span *ngIf=\"true\" class=\"counter\">5</span>\r\n        </button>\r\n        <button class=\"button\" type=\"button\">\r\n          <mat-icon aria-hidden=\"false\">chat</mat-icon>\r\n        </button>\r\n        <button class=\"button\" type=\"button\">\r\n          <mat-icon aria-hidden=\"false\">settings_applications</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div class=\"avatar\">\r\n        <img src=\"./../../assets/images/avatar/avatar.png\" alt=\"avatar\">\r\n      </div>\r\n    </div>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/network/network.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/network/network.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>network works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>projects works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tool-shelf/tool-shelf.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tool-shelf/tool-shelf.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tool-shelf works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _projects_projects_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.module */ "./src/app/projects/projects.module.ts");
/* harmony import */ var _network_network_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./network/network.module */ "./src/app/network/network.module.ts");
/* harmony import */ var _tool_shelf_tool_shelf_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tool-shelf/tool-shelf.module */ "./src/app/tool-shelf/tool-shelf.module.ts");












const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"],
            _projects_projects_module__WEBPACK_IMPORTED_MODULE_9__["ProjectsModule"],
            _network_network_module__WEBPACK_IMPORTED_MODULE_10__["NetworkModule"],
            _tool_shelf_tool_shelf_module__WEBPACK_IMPORTED_MODULE_11__["ToolShelfModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/activity/activity.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/activity/activity.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Theme UI */\n.activity .title {\n  margin-bottom: 20px;\n}\n.activity .board {\n  background-color: #ffffff;\n  border: 1px solid #C2CCD1;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 2px;\n}\n.activity .board .header {\n  border-bottom: 0.5px solid #C2CCD1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n  color: #8f99a1;\n}\n.activity .articles .article {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.activity .articles .article-action {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 40px 10px 10px;\n}\n.activity .post-header {\n  display: -webkit-box;\n  display: flex;\n  padding: 15px;\n}\n.activity .post-logo {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.activity .post-logo img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FjdGl2aXR5L0M6XFxVc2Vyc1xcQW51aXRleC0xMzRcXHNvdXJjZVxcSG9tZWJ1aWxkZXIuV0VCXFxIb21lYnVpbGRlci5XRUJcXGNsaWVudC9zcmNcXGFzc2V0c1xcc2Fzc1xcX3ZhcnMuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2FjdGl2aXR5L0M6XFxVc2Vyc1xcQW51aXRleC0xMzRcXHNvdXJjZVxcSG9tZWJ1aWxkZXIuV0VCXFxIb21lYnVpbGRlci5XRUJcXGNsaWVudC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxhY3Rpdml0eVxcYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q0EsYUFBQTtBQ3JDRTtFQUNFLG1CQUFBO0FDREo7QURHRTtFQUNFLHlCRE5jO0VDT2QseUJBQUE7RUFDQSwyQ0RzQ1U7RUNyQ1Ysa0JBQUE7QUNESjtBREVJO0VBQ0Usa0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNEUFk7QUVPbEI7QURLSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNITjtBRE1NO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0FDSlI7QURXSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGFBQUE7QUNUTjtBRFlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWTjtBRFdNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yXHJcbiR3aGl0ZTogICAgICAgICAgICNmZmZmZmY7XHJcbiRibGFjazogICAgICAgICAgICMwMDAwMDA7XHJcbiRsaXRlQmxhY2s6ICAgICAgICMzODM4Mzg7IC8vcHJpbWFyeUZvbnRcclxuJGJsdWU6ICAgICAgICAgICAgIzRDODRmZjtcclxuJHllbGxvdzogICAgICAgICAgI2ZmYzEwMDtcclxuJGdyZWVuOiAgICAgICAgICAgIzAwYjc3ZTtcclxuJGxpdGVHcmVlbjogICAgICAgIzAwRDI5MDtcclxuJHJlZDogICAgICAgICAgICAgI2ZmNTU2MDtcclxuJGdyYXk6ICAgICAgICAgICAgIzhmOTlhMTsgLy9zZWNvbmRGb250IFxyXG4kbGl0ZUdyYXk6ICAgICAgICAjREFEQURBOyAvL2ljb25cclxuJGdyYXkxMDA6ICAgICAgICAgI0ZDRkNGQzsgLy9iYWNrZ3JvdW5kLWNvbG9yX3ByaW1hcnlcclxuJGdyYXkyMDA6ICAgICAgICAgI0MyQ0NEMTsgLy9ib3JkZXJcclxuJGdyYXkzMDA6ICAgICAgICAgI2FmYjhCZjsgLy9kb3RzXHJcblxyXG4vL291dGxpbmUgY29sb3JcclxuJG91dGxpbmVDb2xvcjogICAgIzREOTBGRTtcclxuXHJcbi8vZm9udC13ZWlnaHRcclxuJHRoaW5Gb250OiAgICAgICAgMTAwO1xyXG4kZXh0cmFMaWdodEZvbnQ6ICAyMDA7XHJcbiRsaWdodEZvbnQ6ICAgICAgIDMwMDtcclxuJHJlZ3VsYXJGb250OiAgICAgNDAwO1xyXG4kbWVkaXVtRm9udDogICAgICA1MDA7XHJcbiRzZW1pQm9sZEZvbnQ6ICAgIDYwMDtcclxuJGJvbGRGb250OiAgICAgICAgNzAwO1xyXG4kZXh0cmFCb2xkRm9udDogICA4MDA7XHJcbiRibGFja0ZvbnQ6ICAgICAgIDkwMDtcclxuXHJcbi8vZmlndXJlXHJcbiRvY3RhZ29uSGFsZkRvd246IHBvbHlnb24oMTAwJSAwLCAxMDAlIDQ1JSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwIDUwJSwgMCAwKTtcclxuJGhleGFnb246IHBvbHlnb24oNzUlIDAsIDEwMCUgNTAlLCA3NSUgMTAwJSwgMjUlIDEwMCUsIDAgNTAlLCAyNSUgMCk7XHJcbiRoZXhhZ29uSGFsZkRvd246IHBvbHlnb24oMTAwJSA1MCUsNzUlIDEwMCUsMjUlIDEwMCUsMCA1MCUpO1xyXG4kY29ybmVyUmliYm9uOiBwb2x5Z29uKDI5JSAwJSwgNzAlIDAlLCAxMDAlIDk1JSwgMTAwJSAxMzUlLCA5MCUgMTAwJSwgOC40JSAxMDAlLCAwIDEyOCUsIDAgOTUlKTtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vL3NldHRpbmcvLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyogVGhlbWUgVUkgKi9cclxuJHByaW1hcnlCYWNrZ3JvdW5kQ29sb3I6ICRncmF5MTAwO1xyXG4kc2Vjb25kQmFja2dyb3VuZENvbG9yOiAkd2hpdGU7XHJcbiRwcmltYXJ5Rm9udENvbG9yOiAkbGl0ZUJsYWNrO1xyXG4kc2Vjb25kRm9udENvbG9yOiAkZ3JheTtcclxuJHByaW1hcnlCb3JkZXJDb2xvcjogJGdyYXkyMDA7XHJcbiRoZWFkZXJTaGFkb3c6IDBweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiRib2FyZFNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuJGljb25Db2xvcjogJGxpdGVHcmF5O1xyXG4kaWNvbkNvbG9ySG92ZXI6ICRncmF5O1xyXG5cclxuLy9mb250LWZhbWlseVxyXG4kcHJpbWFyeUZvbnRGYW1pbHk6ICdBY3RvcicsIHNhbnMtc2VyaWY7XHJcbiRzZWNvbmRGb250RmFtaWx5OiAnUHJveGltYSBOb3ZhIFJnJywgc2Fucy1zZXJpZjtcclxuXHJcbiIsIkBpbXBvcnQgJ3NyYy9hc3NldHMvc2Fzcy92YXJzJztcclxuXHJcbi5hY3Rpdml0eSB7XHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5ib2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kQmFja2dyb3VuZENvbG9yO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnlCb3JkZXJDb2xvcjtcclxuICAgIGJveC1zaGFkb3c6ICRib2FyZFNoYWRvdztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAkcHJpbWFyeUJvcmRlckNvbG9yO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBjb2xvcjogJHNlY29uZEZvbnRDb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcnRpY2xlcyB7XHJcbiAgICAuYXJ0aWNsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblxyXG4gICAgICAmLWFjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnBvc3Qge1xyXG4gICAgJi1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLWxvZ28ge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIvKiBUaGVtZSBVSSAqL1xuLmFjdGl2aXR5IC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYWN0aXZpdHkgLmJvYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0MyQ0NEMTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmFjdGl2aXR5IC5ib2FyZCAuaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0MyQ0NEMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM4Zjk5YTE7XG59XG4uYWN0aXZpdHkgLmFydGljbGVzIC5hcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFjdGl2aXR5IC5hcnRpY2xlcyAuYXJ0aWNsZS1hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCAxMHB4O1xufVxuLmFjdGl2aXR5IC5wb3N0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uYWN0aXZpdHkgLnBvc3QtbG9nbyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmFjdGl2aXR5IC5wb3N0LWxvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/activity/activity.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/activity/activity.component.ts ***!
  \**********************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActivityComponent = class ActivityComponent {
    constructor() { }
    ngOnInit() {
    }
};
ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/activity/activity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity.component.scss */ "./src/app/dashboard/activity/activity.component.scss")).default]
    })
], ActivityComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-template {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-column-gap: 20px;\n  padding: 30px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcQW51aXRleC0xMzRcXHNvdXJjZVxcSG9tZWJ1aWxkZXIuV0VCXFxIb21lYnVpbGRlci5XRUJcXGNsaWVudC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtdGVtcGxhdGUge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcbn0iLCIuZ3JpZC10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/dashboard/activity/activity.component.ts");
/* harmony import */ var _home_builder_home_builder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-builder/home-builder.component */ "./src/app/dashboard/home-builder/home-builder.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"],
            _home_builder_home_builder_component__WEBPACK_IMPORTED_MODULE_7__["HomeBuilderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutes"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");



const routes = [
    { path: 'dashboard', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] }
];
const DashboardRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/dashboard/home-builder/home-builder.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/home-builder/home-builder.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Theme UI */\n.home-builder .title {\n  margin-bottom: 20px;\n}\n.home-builder .board {\n  background-color: #ffffff;\n  border: 1px solid #C2CCD1;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUtYnVpbGRlci9DOlxcVXNlcnNcXEFudWl0ZXgtMTM0XFxzb3VyY2VcXEhvbWVidWlsZGVyLldFQlxcSG9tZWJ1aWxkZXIuV0VCXFxjbGllbnQvc3JjXFxhc3NldHNcXHNhc3NcXF92YXJzLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9ob21lLWJ1aWxkZXIvQzpcXFVzZXJzXFxBbnVpdGV4LTEzNFxcc291cmNlXFxIb21lYnVpbGRlci5XRUJcXEhvbWVidWlsZGVyLldFQlxcY2xpZW50L3NyY1xcYXBwXFxkYXNoYm9hcmRcXGhvbWUtYnVpbGRlclxcaG9tZS1idWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvaG9tZS1idWlsZGVyL2hvbWUtYnVpbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q0EsYUFBQTtBQ3JDRTtFQUNFLG1CQUFBO0FDREo7QURHRTtFQUNFLHlCRE5jO0VDT2QseUJBQUE7RUFDQSwyQ0RzQ1U7RUNyQ1Ysa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lLWJ1aWxkZXIvaG9tZS1idWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb2xvclxyXG4kd2hpdGU6ICAgICAgICAgICAjZmZmZmZmO1xyXG4kYmxhY2s6ICAgICAgICAgICAjMDAwMDAwO1xyXG4kbGl0ZUJsYWNrOiAgICAgICAjMzgzODM4OyAvL3ByaW1hcnlGb250XHJcbiRibHVlOiAgICAgICAgICAgICM0Qzg0ZmY7XHJcbiR5ZWxsb3c6ICAgICAgICAgICNmZmMxMDA7XHJcbiRncmVlbjogICAgICAgICAgICMwMGI3N2U7XHJcbiRsaXRlR3JlZW46ICAgICAgICMwMEQyOTA7XHJcbiRyZWQ6ICAgICAgICAgICAgICNmZjU1NjA7XHJcbiRncmF5OiAgICAgICAgICAgICM4Zjk5YTE7IC8vc2Vjb25kRm9udCBcclxuJGxpdGVHcmF5OiAgICAgICAgI0RBREFEQTsgLy9pY29uXHJcbiRncmF5MTAwOiAgICAgICAgICNGQ0ZDRkM7IC8vYmFja2dyb3VuZC1jb2xvcl9wcmltYXJ5XHJcbiRncmF5MjAwOiAgICAgICAgICNDMkNDRDE7IC8vYm9yZGVyXHJcbiRncmF5MzAwOiAgICAgICAgICNhZmI4QmY7IC8vZG90c1xyXG5cclxuLy9vdXRsaW5lIGNvbG9yXHJcbiRvdXRsaW5lQ29sb3I6ICAgICM0RDkwRkU7XHJcblxyXG4vL2ZvbnQtd2VpZ2h0XHJcbiR0aGluRm9udDogICAgICAgIDEwMDtcclxuJGV4dHJhTGlnaHRGb250OiAgMjAwO1xyXG4kbGlnaHRGb250OiAgICAgICAzMDA7XHJcbiRyZWd1bGFyRm9udDogICAgIDQwMDtcclxuJG1lZGl1bUZvbnQ6ICAgICAgNTAwO1xyXG4kc2VtaUJvbGRGb250OiAgICA2MDA7XHJcbiRib2xkRm9udDogICAgICAgIDcwMDtcclxuJGV4dHJhQm9sZEZvbnQ6ICAgODAwO1xyXG4kYmxhY2tGb250OiAgICAgICA5MDA7XHJcblxyXG4vL2ZpZ3VyZVxyXG4kb2N0YWdvbkhhbGZEb3duOiBwb2x5Z29uKDEwMCUgMCwgMTAwJSA0NSUsIDc1JSAxMDAlLCAyNSUgMTAwJSwgMCA1MCUsIDAgMCk7XHJcbiRoZXhhZ29uOiBwb2x5Z29uKDc1JSAwLCAxMDAlIDUwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwIDUwJSwgMjUlIDApO1xyXG4kaGV4YWdvbkhhbGZEb3duOiBwb2x5Z29uKDEwMCUgNTAlLDc1JSAxMDAlLDI1JSAxMDAlLDAgNTAlKTtcclxuJGNvcm5lclJpYmJvbjogcG9seWdvbigyOSUgMCUsIDcwJSAwJSwgMTAwJSA5NSUsIDEwMCUgMTM1JSwgOTAlIDEwMCUsIDguNCUgMTAwJSwgMCAxMjglLCAwIDk1JSk7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy9zZXR0aW5nLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qIFRoZW1lIFVJICovXHJcbiRwcmltYXJ5QmFja2dyb3VuZENvbG9yOiAkZ3JheTEwMDtcclxuJHNlY29uZEJhY2tncm91bmRDb2xvcjogJHdoaXRlO1xyXG4kcHJpbWFyeUZvbnRDb2xvcjogJGxpdGVCbGFjaztcclxuJHNlY29uZEZvbnRDb2xvcjogJGdyYXk7XHJcbiRwcmltYXJ5Qm9yZGVyQ29sb3I6ICRncmF5MjAwO1xyXG4kaGVhZGVyU2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4kYm9hcmRTaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiRpY29uQ29sb3I6ICRsaXRlR3JheTtcclxuJGljb25Db2xvckhvdmVyOiAkZ3JheTtcclxuXHJcbi8vZm9udC1mYW1pbHlcclxuJHByaW1hcnlGb250RmFtaWx5OiAnQWN0b3InLCBzYW5zLXNlcmlmO1xyXG4kc2Vjb25kRm9udEZhbWlseTogJ1Byb3hpbWEgTm92YSBSZycsIHNhbnMtc2VyaWY7XHJcblxyXG4iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3Nhc3MvdmFycyc7XHJcblxyXG4uaG9tZS1idWlsZGVyIHtcclxuICAudGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmJvYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeUJvcmRlckNvbG9yO1xyXG4gICAgYm94LXNoYWRvdzogJGJvYXJkU2hhZG93O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxufSIsIi8qIFRoZW1lIFVJICovXG4uaG9tZS1idWlsZGVyIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaG9tZS1idWlsZGVyIC5ib2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDMkNDRDE7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/home-builder/home-builder.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/home-builder/home-builder.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBuilderComponent", function() { return HomeBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeBuilderComponent = class HomeBuilderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-builder',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-builder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home-builder/home-builder.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-builder.component.scss */ "./src/app/dashboard/home-builder/home-builder.component.scss")).default]
    })
], HomeBuilderComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Theme UI */\n.header {\n  background-color: #ffffff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 13px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);\n}\n.header .logo {\n  display: block;\n  max-width: 50px;\n}\n.header .nav {\n  align-self: stretch;\n  margin: -10px;\n}\n.header .section {\n  display: -webkit-box;\n  display: flex;\n}\n.header .section .action {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header .section .action .button {\n  display: block;\n  width: 40px;\n  margin: 0 10px 0 0;\n}\n.header .section .action .button .mat-icon {\n  font-size: 30px;\n}\n.header .section .action .button.notification {\n  position: relative;\n}\n.header .section .action .button.notification .counter {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  background-color: #4C84ff;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 1px solid #ffffff;\n  color: #ffffff;\n  font-family: \"Proxima Nova Rg\", sans-serif;\n  font-size: 9px;\n  line-height: 16px;\n}\n.header .section .avatar {\n  max-width: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcQW51aXRleC0xMzRcXHNvdXJjZVxcSG9tZWJ1aWxkZXIuV0VCXFxIb21lYnVpbGRlci5XRUJcXGNsaWVudC9zcmNcXGFzc2V0c1xcc2Fzc1xcX3ZhcnMuc2NzcyIsInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcQW51aXRleC0xMzRcXHNvdXJjZVxcSG9tZWJ1aWxkZXIuV0VCXFxIb21lYnVpbGRlci5XRUJcXGNsaWVudC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NBLGFBQUE7QUN2Q0E7RUFDRSx5QkREZ0I7RUNFaEIsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLDJDRHNDYTtBRXRDZjtBREVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDREo7QURLRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0hKO0FESUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRk47QURHTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREVRO0VBQ0UsZUFBQTtBQ0FWO0FERVE7RUFDRSxrQkFBQTtBQ0FWO0FEQ1U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRHBDTTtFQ3FDTixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjRDVDTTtFQzZDTiwwQ0RPTztFQ05QLGNBQUE7RUFDQSxpQkFBQTtBQ0NaO0FESUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29sb3JcclxuJHdoaXRlOiAgICAgICAgICAgI2ZmZmZmZjtcclxuJGJsYWNrOiAgICAgICAgICAgIzAwMDAwMDtcclxuJGxpdGVCbGFjazogICAgICAgIzM4MzgzODsgLy9wcmltYXJ5Rm9udFxyXG4kYmx1ZTogICAgICAgICAgICAjNEM4NGZmO1xyXG4keWVsbG93OiAgICAgICAgICAjZmZjMTAwO1xyXG4kZ3JlZW46ICAgICAgICAgICAjMDBiNzdlO1xyXG4kbGl0ZUdyZWVuOiAgICAgICAjMDBEMjkwO1xyXG4kcmVkOiAgICAgICAgICAgICAjZmY1NTYwO1xyXG4kZ3JheTogICAgICAgICAgICAjOGY5OWExOyAvL3NlY29uZEZvbnQgXHJcbiRsaXRlR3JheTogICAgICAgICNEQURBREE7IC8vaWNvblxyXG4kZ3JheTEwMDogICAgICAgICAjRkNGQ0ZDOyAvL2JhY2tncm91bmQtY29sb3JfcHJpbWFyeVxyXG4kZ3JheTIwMDogICAgICAgICAjQzJDQ0QxOyAvL2JvcmRlclxyXG4kZ3JheTMwMDogICAgICAgICAjYWZiOEJmOyAvL2RvdHNcclxuXHJcbi8vb3V0bGluZSBjb2xvclxyXG4kb3V0bGluZUNvbG9yOiAgICAjNEQ5MEZFO1xyXG5cclxuLy9mb250LXdlaWdodFxyXG4kdGhpbkZvbnQ6ICAgICAgICAxMDA7XHJcbiRleHRyYUxpZ2h0Rm9udDogIDIwMDtcclxuJGxpZ2h0Rm9udDogICAgICAgMzAwO1xyXG4kcmVndWxhckZvbnQ6ICAgICA0MDA7XHJcbiRtZWRpdW1Gb250OiAgICAgIDUwMDtcclxuJHNlbWlCb2xkRm9udDogICAgNjAwO1xyXG4kYm9sZEZvbnQ6ICAgICAgICA3MDA7XHJcbiRleHRyYUJvbGRGb250OiAgIDgwMDtcclxuJGJsYWNrRm9udDogICAgICAgOTAwO1xyXG5cclxuLy9maWd1cmVcclxuJG9jdGFnb25IYWxmRG93bjogcG9seWdvbigxMDAlIDAsIDEwMCUgNDUlLCA3NSUgMTAwJSwgMjUlIDEwMCUsIDAgNTAlLCAwIDApO1xyXG4kaGV4YWdvbjogcG9seWdvbig3NSUgMCwgMTAwJSA1MCUsIDc1JSAxMDAlLCAyNSUgMTAwJSwgMCA1MCUsIDI1JSAwKTtcclxuJGhleGFnb25IYWxmRG93bjogcG9seWdvbigxMDAlIDUwJSw3NSUgMTAwJSwyNSUgMTAwJSwwIDUwJSk7XHJcbiRjb3JuZXJSaWJib246IHBvbHlnb24oMjklIDAlLCA3MCUgMCUsIDEwMCUgOTUlLCAxMDAlIDEzNSUsIDkwJSAxMDAlLCA4LjQlIDEwMCUsIDAgMTI4JSwgMCA5NSUpO1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vc2V0dGluZy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiBUaGVtZSBVSSAqL1xyXG4kcHJpbWFyeUJhY2tncm91bmRDb2xvcjogJGdyYXkxMDA7XHJcbiRzZWNvbmRCYWNrZ3JvdW5kQ29sb3I6ICR3aGl0ZTtcclxuJHByaW1hcnlGb250Q29sb3I6ICRsaXRlQmxhY2s7XHJcbiRzZWNvbmRGb250Q29sb3I6ICRncmF5O1xyXG4kcHJpbWFyeUJvcmRlckNvbG9yOiAkZ3JheTIwMDtcclxuJGhlYWRlclNoYWRvdzogMHB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuJGJvYXJkU2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4kaWNvbkNvbG9yOiAkbGl0ZUdyYXk7XHJcbiRpY29uQ29sb3JIb3ZlcjogJGdyYXk7XHJcblxyXG4vL2ZvbnQtZmFtaWx5XHJcbiRwcmltYXJ5Rm9udEZhbWlseTogJ0FjdG9yJywgc2Fucy1zZXJpZjtcclxuJHNlY29uZEZvbnRGYW1pbHk6ICdQcm94aW1hIE5vdmEgUmcnLCBzYW5zLXNlcmlmO1xyXG5cclxuIiwiQGltcG9ydCAnc3JjL2Fzc2V0cy9zYXNzL3ZhcnMnO1xyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kQmFja2dyb3VuZENvbG9yO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxM3B4O1xyXG5cclxuICBib3gtc2hhZG93OiAkaGVhZGVyU2hhZG93O1xyXG5cclxuICAubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogNTBweDtcclxuICB9XHJcblxyXG4gIC5uYXYge1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIG1hcmdpbjogLTEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5hY3Rpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAuYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDA7XHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5ub3RpZmljYXRpb24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLmNvdW50ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kRm9udEZhbWlseTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iLCIvKiBUaGVtZSBVSSAqL1xuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxM3B4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLmhlYWRlciAubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG4uaGVhZGVyIC5uYXYge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBtYXJnaW46IC0xMHB4O1xufVxuLmhlYWRlciAuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGVhZGVyIC5zZWN0aW9uIC5hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlciAuc2VjdGlvbiAuYWN0aW9uIC5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn1cbi5oZWFkZXIgLnNlY3Rpb24gLmFjdGlvbiAuYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5oZWFkZXIgLnNlY3Rpb24gLmFjdGlvbiAuYnV0dG9uLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXIgLnNlY3Rpb24gLmFjdGlvbiAuYnV0dG9uLm5vdGlmaWNhdGlvbiAuY291bnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Qzg0ZmY7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgTm92YSBSZ1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4uaGVhZGVyIC5zZWN0aW9uIC5hdmF0YXIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToProjects() {
        // this.router.navigateByUrl('/projects');
    }
    navigateToDashBoard() {
        // this.router.navigateByUrl('/dashboard');
    }
    navigateToToolShelf() {
        // this.router.navigateByUrl('/tool-shelf');
    }
    navigateToToolNetWork() {
        // this.router.navigateByUrl('/network');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/network/network.component.scss":
/*!************************************************!*\
  !*** ./src/app/network/network.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmsvbmV0d29yay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/network/network.component.ts":
/*!**********************************************!*\
  !*** ./src/app/network/network.component.ts ***!
  \**********************************************/
/*! exports provided: NetworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkComponent", function() { return NetworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NetworkComponent = class NetworkComponent {
    constructor() { }
    ngOnInit() {
    }
};
NetworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-network',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./network.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/network/network.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./network.component.scss */ "./src/app/network/network.component.scss")).default]
    })
], NetworkComponent);



/***/ }),

/***/ "./src/app/network/network.module.ts":
/*!*******************************************!*\
  !*** ./src/app/network/network.module.ts ***!
  \*******************************************/
/*! exports provided: NetworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkModule", function() { return NetworkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _network_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network.component */ "./src/app/network/network.component.ts");
/* harmony import */ var _network_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./network.routing */ "./src/app/network/network.routing.ts");





let NetworkModule = class NetworkModule {
};
NetworkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _network_component__WEBPACK_IMPORTED_MODULE_3__["NetworkComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _network_routing__WEBPACK_IMPORTED_MODULE_4__["NetworkRoutes"],
        ]
    })
], NetworkModule);



/***/ }),

/***/ "./src/app/network/network.routing.ts":
/*!********************************************!*\
  !*** ./src/app/network/network.routing.ts ***!
  \********************************************/
/*! exports provided: NetworkRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkRoutes", function() { return NetworkRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _network_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network.component */ "./src/app/network/network.component.ts");



const routes = [
    { path: 'network', component: _network_component__WEBPACK_IMPORTED_MODULE_2__["NetworkComponent"] }
];
const NetworkRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProjectsComponent = class ProjectsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.routing */ "./src/app/projects/projects.routing.ts");





let ProjectsModule = class ProjectsModule {
};
ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _projects_routing__WEBPACK_IMPORTED_MODULE_4__["ProjectsRoutes"],
        ]
    })
], ProjectsModule);



/***/ }),

/***/ "./src/app/projects/projects.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/projects/projects.routing.ts ***!
  \**********************************************/
/*! exports provided: ProjectsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutes", function() { return ProjectsRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");



const routes = [
    { path: 'projects', component: _projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] }
];
const ProjectsRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/tool-shelf/tool-shelf.component.scss":
/*!******************************************************!*\
  !*** ./src/app/tool-shelf/tool-shelf.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2wtc2hlbGYvdG9vbC1zaGVsZi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tool-shelf/tool-shelf.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tool-shelf/tool-shelf.component.ts ***!
  \****************************************************/
/*! exports provided: ToolShelfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolShelfComponent", function() { return ToolShelfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolShelfComponent = class ToolShelfComponent {
    constructor() { }
    ngOnInit() {
    }
};
ToolShelfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tool-shelf',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tool-shelf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tool-shelf/tool-shelf.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tool-shelf.component.scss */ "./src/app/tool-shelf/tool-shelf.component.scss")).default]
    })
], ToolShelfComponent);



/***/ }),

/***/ "./src/app/tool-shelf/tool-shelf.module.ts":
/*!*************************************************!*\
  !*** ./src/app/tool-shelf/tool-shelf.module.ts ***!
  \*************************************************/
/*! exports provided: ToolShelfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolShelfModule", function() { return ToolShelfModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tool_shelf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tool-shelf.component */ "./src/app/tool-shelf/tool-shelf.component.ts");
/* harmony import */ var _tool_shelf_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tool-shelf.routing */ "./src/app/tool-shelf/tool-shelf.routing.ts");





let ToolShelfModule = class ToolShelfModule {
};
ToolShelfModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tool_shelf_component__WEBPACK_IMPORTED_MODULE_3__["ToolShelfComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tool_shelf_routing__WEBPACK_IMPORTED_MODULE_4__["ToolShelfRoutes"],
        ]
    })
], ToolShelfModule);



/***/ }),

/***/ "./src/app/tool-shelf/tool-shelf.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/tool-shelf/tool-shelf.routing.ts ***!
  \**************************************************/
/*! exports provided: ToolShelfRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolShelfRoutes", function() { return ToolShelfRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tool_shelf_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool-shelf.component */ "./src/app/tool-shelf/tool-shelf.component.ts");



const routes = [
    { path: 'tool-shelf', component: _tool_shelf_component__WEBPACK_IMPORTED_MODULE_2__["ToolShelfComponent"] }
];
const ToolShelfRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anuitex-134\source\Homebuilder.WEB\Homebuilder.WEB\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map