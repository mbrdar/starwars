webpackJsonp([1,4],Array(32).concat([
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService() {
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    AuthService.prototype.login = function (username, password) {
        if (username === 'username' && password === 'password') {
            localStorage.setItem('username', username);
            this.loggedIn$.next(true);
        }
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.isLoggedIn = function () {
        this.loggedIn$.next(this.getUser() !== null);
        return this.loggedIn$;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('username');
        this.loggedIn$.next(false);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.createCorrectImagePath = function (apiUrl, value) {
        if (value instanceof Array) {
            value.map(function (item) {
                item.image = apiUrl + item.image;
            });
        }
        else {
            value.image = apiUrl + value.image;
        }
        return value;
    };
    return HelperService;
}());
HelperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], HelperService);

//# sourceMappingURL=helper.service.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatAll__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatAll__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MovieService = (function () {
    function MovieService(apiUrl, http) {
        this.apiUrl = apiUrl;
        this.http = http;
    }
    MovieService.prototype.getAll = function () {
        return this.query(this.apiUrl + "films");
    };
    MovieService.prototype.getById = function (id) {
        return this.query(this.apiUrl + "films/" + id);
    };
    MovieService.prototype.query = function (url) {
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return MovieService;
}());
MovieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Inject */])('API_URL')),
    __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MovieService);

var _a;
//# sourceMappingURL=movie.service.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatAll__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarshipService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var StarshipService = (function () {
    function StarshipService(apiUrl, http, helperService) {
        this.apiUrl = apiUrl;
        this.http = http;
        this.helperService = helperService;
    }
    StarshipService.prototype.getAll = function () {
        return this.query(this.apiUrl + "starships");
    };
    StarshipService.prototype.getById = function (id) {
        return this.query(this.apiUrl + "starships/" + id);
    };
    StarshipService.prototype.query = function (url) {
        var _this = this;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .map(function (response) {
            return _this.helperService.createCorrectImagePath(_this.apiUrl, response);
        });
    };
    return StarshipService;
}());
StarshipService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Inject */])('API_URL')),
    __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__helper_service__["a" /* HelperService */]) === "function" && _b || Object])
], StarshipService);

var _a, _b;
//# sourceMappingURL=starship.service.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var VehicleService = (function () {
    function VehicleService(apiUrl, http, helperService) {
        this.apiUrl = apiUrl;
        this.http = http;
        this.helperService = helperService;
    }
    VehicleService.prototype.getAll = function () {
        return this.query(this.apiUrl + "vehicles");
    };
    VehicleService.prototype.getById = function (id) {
        return this.query(this.apiUrl + "vehicles/" + id);
    };
    VehicleService.prototype.query = function (url) {
        var _this = this;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .map(function (response) {
            return _this.helperService.createCorrectImagePath(_this.apiUrl, response);
        });
    };
    return VehicleService;
}());
VehicleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Inject */])('API_URL')),
    __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__helper_service__["a" /* HelperService */]) === "function" && _b || Object])
], VehicleService);

var _a, _b;
//# sourceMappingURL=vehicle.service.js.map

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Profile.prototype.lastChanged = function () {
        return new Date();
    };
    return Profile;
}());

//# sourceMappingURL=profile.model.js.map

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatAll__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CharacterService = (function () {
    function CharacterService(apiUrl, http, helperService) {
        this.apiUrl = apiUrl;
        this.http = http;
        this.helperService = helperService;
    }
    CharacterService.prototype.getAll = function () {
        this.characters$ = this.query(this.apiUrl + "people");
        return this.characters$;
    };
    CharacterService.prototype.getById = function (id) {
        return this.query(this.apiUrl + "people/" + id);
    };
    CharacterService.prototype.query = function (url) {
        var _this = this;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .map(function (response) {
            return _this.helperService.createCorrectImagePath(_this.apiUrl, response);
        });
    };
    return CharacterService;
}());
CharacterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Inject */])('API_URL')),
    __metadata("design:paramtypes", [String, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__helper_service__["a" /* HelperService */]) === "function" && _b || Object])
], CharacterService);

var _a, _b;
//# sourceMappingURL=chatacter.service.js.map

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directive_custom_if_directive__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__life_cycle_hooks_life_cycle_hooks_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hooks_hooks_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custom_if_custom_if_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_change_detection_default_change_detection_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__on_push_change_detection_on_push_change_detection_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rxjs_rxjs_component__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'examples', redirectTo: 'examples/hooks', pathMatch: 'full' },
    { path: 'examples/hooks', component: __WEBPACK_IMPORTED_MODULE_4__hooks_hooks_component__["a" /* HooksComponent */] },
    { path: 'examples/directive', component: __WEBPACK_IMPORTED_MODULE_7__custom_if_custom_if_component__["a" /* CustomIfComponent */] },
    { path: 'examples/changedetection', component: __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_component__["a" /* ChangeDetectionComponent */] },
    { path: 'examples/rxjs', component: __WEBPACK_IMPORTED_MODULE_12__rxjs_rxjs_component__["a" /* RxjsComponent */] }
];
var ExamplesModule = (function () {
    function ExamplesModule() {
    }
    return ExamplesModule;
}());
ExamplesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__directive_custom_if_directive__["a" /* CustomIfDirective */],
            __WEBPACK_IMPORTED_MODULE_3__life_cycle_hooks_life_cycle_hooks_component__["a" /* LifeCycleHooksComponent */],
            __WEBPACK_IMPORTED_MODULE_4__hooks_hooks_component__["a" /* HooksComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__custom_if_custom_if_component__["a" /* CustomIfComponent */],
            __WEBPACK_IMPORTED_MODULE_8__default_change_detection_default_change_detection_component__["a" /* DefaultChangeDetectionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_component__["a" /* ChangeDetectionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__on_push_change_detection_on_push_change_detection_component__["a" /* OnPushChangeDetectionComponent */],
            __WEBPACK_IMPORTED_MODULE_12__rxjs_rxjs_component__["a" /* RxjsComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__directive_custom_if_directive__["a" /* CustomIfDirective */]]
    })
], ExamplesModule);

//# sourceMappingURL=examples.module.js.map

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/examples/examples.module": [
		73
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 98;


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(132);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.loggedIn = authService.isLoggedIn().getValue();
    }
    AppComponent.prototype.onLoggedInEvent = function (event) {
        this.loggedIn = event;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(206),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__characters_characters_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_impl_chatacter_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_highlite_directive__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__character_details_character_details_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vehicles_vehicles_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_service_impl_vehicle_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_service_helper_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__starships_starships_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_service_impl_starship_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__movies_movies_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_service_impl_movie_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__logged_in_guard__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_service_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__movie_details_movie_details_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__vehicle_details_vehicle_details_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__starship_details_starship_details_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_gender_pipe__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_filter_pipe__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__register_register_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__register_builder_register_builder_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_directives_equal_validator_directive__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_examples_examples_module__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var routes = [
    { path: '', redirectTo: 'characters', pathMatch: 'full' },
    { path: 'characters', component: __WEBPACK_IMPORTED_MODULE_5__characters_characters_component__["a" /* CharactersComponent */] },
    { path: 'characters/:id', component: __WEBPACK_IMPORTED_MODULE_9__character_details_character_details_component__["a" /* CharacterDetailsComponent */] },
    { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_15__movies_movies_component__["a" /* MoviesComponent */] },
    { path: 'movies/:id', component: __WEBPACK_IMPORTED_MODULE_20__movie_details_movie_details_component__["a" /* MovieDetailsComponent */] },
    { path: 'vehicles', component: __WEBPACK_IMPORTED_MODULE_10__vehicles_vehicles_component__["a" /* VehiclesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'vehicles/:id', component: __WEBPACK_IMPORTED_MODULE_21__vehicle_details_vehicle_details_component__["a" /* VehicleDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'starships', component: __WEBPACK_IMPORTED_MODULE_13__starships_starships_component__["a" /* StarshipsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'starships/:id', component: __WEBPACK_IMPORTED_MODULE_22__starship_details_starship_details_component__["a" /* StarshipDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_25__register_register_component__["a" /* RegisterComponent */] },
    { path: 'register-builder', component: __WEBPACK_IMPORTED_MODULE_26__register_builder_register_builder_component__["a" /* RegisterBuilderComponent */] },
    { path: 'examples', loadChildren: 'app/examples/examples.module#ExamplesModule' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__characters_characters_component__["a" /* CharactersComponent */],
            __WEBPACK_IMPORTED_MODULE_7__directives_highlite_directive__["a" /* HighlightDirective */],
            __WEBPACK_IMPORTED_MODULE_9__character_details_character_details_component__["a" /* CharacterDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__vehicles_vehicles_component__["a" /* VehiclesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__starships_starships_component__["a" /* StarshipsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__movies_movies_component__["a" /* MoviesComponent */],
            __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20__movie_details_movie_details_component__["a" /* MovieDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__vehicle_details_vehicle_details_component__["a" /* VehicleDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__starship_details_starship_details_component__["a" /* StarshipDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_gender_pipe__["a" /* GenderPipe */],
            __WEBPACK_IMPORTED_MODULE_24__pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_25__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_26__register_builder_register_builder_component__["a" /* RegisterBuilderComponent */],
            __WEBPACK_IMPORTED_MODULE_27_app_directives_equal_validator_directive__["a" /* EqualValidatorDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_28_app_examples_examples_module__["ExamplesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__service_impl_chatacter_service__["a" /* CharacterService */],
            __WEBPACK_IMPORTED_MODULE_11_app_service_impl_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_12_app_service_helper_service__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_14_app_service_impl_starship_service__["a" /* StarshipService */],
            __WEBPACK_IMPORTED_MODULE_16_app_service_impl_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_17__logged_in_guard__["a" /* LoggedInGuard */],
            __WEBPACK_IMPORTED_MODULE_19_app_service_auth_service__["a" /* AuthService */],
            { provide: 'API_URL', useValue: 'https://starwars-json-server-ewtdxbyfdz.now.sh/' }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_impl_chatacter_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_impl_vehicle_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_impl_starship_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_impl_movie_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CharacterDetailsComponent = (function () {
    function CharacterDetailsComponent(route, characterService, vehicleService, starshipService, movieService) {
        var _this = this;
        this.route = route;
        this.characterService = characterService;
        this.vehicleService = vehicleService;
        this.starshipService = starshipService;
        this.movieService = movieService;
        this.vehicles = Array();
        this.starships = Array();
        this.movies = Array();
        route.params.subscribe(function (params) {
            _this.characterService.getById(params['id'])
                .subscribe(function (character) {
                _this.getAllCharacterVehicles(character.vehicles);
                _this.getAllCharacterStarships(character.starships);
                _this.getAllCharacterMovies(character.films);
                _this.character = character;
            });
        });
    }
    CharacterDetailsComponent.prototype.getAllCharacterVehicles = function (vehicles) {
        var _this = this;
        for (var _i = 0, vehicles_1 = vehicles; _i < vehicles_1.length; _i++) {
            var vehicleId = vehicles_1[_i];
            this.vehicleService.getById(vehicleId).subscribe(function (vehicle) {
                _this.vehicles.push(vehicle);
            });
        }
    };
    ;
    CharacterDetailsComponent.prototype.getAllCharacterStarships = function (starships) {
        var _this = this;
        for (var _i = 0, starships_1 = starships; _i < starships_1.length; _i++) {
            var starshipId = starships_1[_i];
            this.starshipService.getById(starshipId).subscribe(function (starship) {
                _this.starships.push(starship);
            });
        }
    };
    ;
    CharacterDetailsComponent.prototype.getAllCharacterMovies = function (movies) {
        var _this = this;
        for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
            var movieId = movies_1[_i];
            this.movieService.getById(movieId).subscribe(function (movie) {
                _this.movies.push(movie);
            });
        }
    };
    return CharacterDetailsComponent;
}());
CharacterDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'character-details',
        template: __webpack_require__(207),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_impl_chatacter_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_impl_chatacter_service__["a" /* CharacterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_impl_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_impl_vehicle_service__["a" /* VehicleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_service_impl_starship_service__["a" /* StarshipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_service_impl_starship_service__["a" /* StarshipService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__service_impl_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_impl_movie_service__["a" /* MovieService */]) === "function" && _e || Object])
], CharacterDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=character-details.component.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_impl_chatacter_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concatAll__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concatAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concatAll__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharactersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharactersComponent = (function () {
    function CharactersComponent(characterService) {
        var _this = this;
        this.characterService = characterService;
        characterService.getAll().subscribe(function (charachters) {
            _this.results = charachters;
        });
    }
    return CharactersComponent;
}());
CharactersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'characters',
        template: __webpack_require__(208),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_impl_chatacter_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_impl_chatacter_service__["a" /* CharacterService */]) === "function" && _a || Object])
], CharactersComponent);

var _a;
//# sourceMappingURL=characters.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EqualValidatorDirective = EqualValidatorDirective_1 = (function () {
    function EqualValidatorDirective() {
    }
    EqualValidatorDirective.prototype.validate = function (c) {
        return c.value !== this.original ? { mismatch: true } : null;
    };
    return EqualValidatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('equalValidator'),
    __metadata("design:type", String)
], EqualValidatorDirective.prototype, "original", void 0);
EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[equalValidator]',
        //extend build in validators
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* forwardRef */])(function () { return EqualValidatorDirective_1; }), multi: true }
        ]
    }),
    __metadata("design:paramtypes", [])
], EqualValidatorDirective);

var EqualValidatorDirective_1;
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el;
        this.el.nativeElement.style.cursor = 'pointer';
    }
    HighlightDirective.prototype.onMouseOver = function () {
        this.el.nativeElement.style.backgroundColor = '#f5f5f5';
    };
    HighlightDirective.prototype.onMouseOut = function () {
        this.el.nativeElement.style.backgroundColor = 'transparent';
    };
    return HighlightDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('mouseover'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseOver", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseOut", null);
HighlightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[highlight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]) === "function" && _a || Object])
], HighlightDirective);

var _a;
//# sourceMappingURL=highlite.directive.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_model__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeDetectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangeDetectionComponent = (function () {
    function ChangeDetectionComponent() {
        this.profile1 = new __WEBPACK_IMPORTED_MODULE_1__profile_model__["a" /* Profile */]('Joe', 'Doe');
        this.profile2 = new __WEBPACK_IMPORTED_MODULE_1__profile_model__["a" /* Profile */]('Jane', 'Roe');
    }
    return ChangeDetectionComponent;
}());
ChangeDetectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'change-detection',
        template: __webpack_require__(209),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [])
], ChangeDetectionComponent);

//# sourceMappingURL=change-detection.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomIfComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomIfComponent = (function () {
    function CustomIfComponent() {
        this.active = true;
    }
    CustomIfComponent.prototype.ngOnInit = function () {
    };
    CustomIfComponent.prototype.toggle = function () {
        this.active = !this.active;
    };
    return CustomIfComponent;
}());
CustomIfComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'custom-if',
        template: __webpack_require__(210),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], CustomIfComponent);

//# sourceMappingURL=custom-if.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_model__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultChangeDetectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultChangeDetectionComponent = (function () {
    function DefaultChangeDetectionComponent() {
        // console.log(this.profile.lastName);
    }
    return DefaultChangeDetectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('profile'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_model__["a" /* Profile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_model__["a" /* Profile */]) === "function" && _a || Object)
], DefaultChangeDetectionComponent.prototype, "profile", void 0);
DefaultChangeDetectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'default-change-detection',
        template: __webpack_require__(211),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [])
], DefaultChangeDetectionComponent);

var _a;
//# sourceMappingURL=default-change-detection.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomIfDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomIfDirective = (function () {
    function CustomIfDirective(_viewContainer, _template) {
        this._viewContainer = _viewContainer;
        this._template = _template;
    }
    Object.defineProperty(CustomIfDirective.prototype, "customIf", {
        set: function (condition) {
            if (condition) {
                this._viewContainer.createEmbeddedView(this._template);
            }
            else {
                this._viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return CustomIfDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CustomIfDirective.prototype, "customIf", null);
CustomIfDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[customIf]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewContainerRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* TemplateRef */]) === "function" && _b || Object])
], CustomIfDirective);

var _a, _b;
//# sourceMappingURL=custom-if.directive.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HooksComponent = (function () {
    function HooksComponent() {
        this.displayComponent = true;
    }
    HooksComponent.prototype.ngOnInit = function () {
    };
    HooksComponent.prototype.toggleDisplay = function () {
        this.displayComponent = !this.displayComponent;
    };
    return HooksComponent;
}());
HooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'hooks',
        template: __webpack_require__(212),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [])
], HooksComponent);

//# sourceMappingURL=hooks.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifeCycleHooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LifeCycleHooksComponent = (function () {
    function LifeCycleHooksComponent() {
        console.log('Hook -> constructor');
        this.counter = 1;
    }
    LifeCycleHooksComponent.prototype.inc = function () {
        console.log('Hook -> counter');
        this.counter += 1;
    };
    LifeCycleHooksComponent.prototype.ngOnInit = function () {
        console.log('Hook -> onInit');
    };
    LifeCycleHooksComponent.prototype.ngOnDestroy = function () {
        console.log('Hook -> onDestroy');
    };
    LifeCycleHooksComponent.prototype.ngDoCheck = function () {
        console.log('Hook -> doCheck');
    };
    LifeCycleHooksComponent.prototype.ngOnChanges = function (changes) {
        console.log('Hook -> onChanges');
    };
    LifeCycleHooksComponent.prototype.ngAfterContentInit = function () {
        console.log('Hook -> afterContentInit');
    };
    LifeCycleHooksComponent.prototype.ngAfterContentChecked = function () {
        console.log('Hook -> afterContentChecked');
    };
    LifeCycleHooksComponent.prototype.ngAfterViewInit = function () {
        console.log('Hook -> afterViewInit');
    };
    LifeCycleHooksComponent.prototype.ngAfterViewChecked = function () {
        console.log('Hook -> afterViewChecked');
    };
    return LifeCycleHooksComponent;
}());
LifeCycleHooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'life-cycle-hooks',
        template: __webpack_require__(213),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [])
], LifeCycleHooksComponent);

//# sourceMappingURL=life-cycle-hooks.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'navigation',
        template: __webpack_require__(214),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_model__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnPushChangeDetectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OnPushChangeDetectionComponent = (function () {
    function OnPushChangeDetectionComponent() {
    }
    return OnPushChangeDetectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_model__["a" /* Profile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_model__["a" /* Profile */]) === "function" && _a || Object)
], OnPushChangeDetectionComponent.prototype, "profile", void 0);
OnPushChangeDetectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'on-push-change-detection',
        template: __webpack_require__(215),
        styles: [__webpack_require__(195)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], OnPushChangeDetectionComponent);

var _a;
//# sourceMappingURL=on-push-change-detection.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_throttleTime__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_throttleTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RxjsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RxjsComponent = (function () {
    function RxjsComponent() {
        this.clickMeStream$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.clickMeStream$
            .map(function (value) {
            return 'test' + value;
        })
            .throttleTime(2000)
            .subscribe(function (event) { return console.log(event); });
    }
    return RxjsComponent;
}());
RxjsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'rxjs',
        template: __webpack_require__(216),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [])
], RxjsComponent);

//# sourceMappingURL=rxjs.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = (function () {
    function LoggedInGuard(authService) {
        this.authService = authService;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        return this.authService.isLoggedIn().getValue();
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoggedInGuard);

var _a;
//# sourceMappingURL=logged-in.guard.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.loggedInEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* EventEmitter */]();
        authService.isLoggedIn()
            .subscribe(function (loggedIn) {
            _this.loggedIn = loggedIn;
            _this.loggedInEvent.emit(loggedIn);
        });
    }
    LoginComponent.prototype.login = function (loginForm) {
        this.authService.login(loginForm.username, loginForm.password);
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/characters');
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* EventEmitter */]) === "function" && _a || Object)
], LoginComponent.prototype, "loggedInEvent", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'login',
        template: __webpack_require__(217),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//Example of login service without stream
/*export class LoginComponent {
  @Output() loggedInEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  loggedIn: boolean;

  constructor(private authService: AuthService) {
    this.loggedIn = authService.isLoggedIn();
    this.loggedInEvent.emit(this.loggedIn);
  }

  login(loginForm) {
    this.loggedIn = this.authService.login(loginForm.username, loginForm.password);
    this.loggedInEvent.emit(this.loggedIn);
  }

  logout() {
    this.loggedIn = this.authService.logout();
    this.loggedInEvent.emit(this.loggedIn);
  }
}*/
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_impl_movie_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieDetailsComponent = (function () {
    function MovieDetailsComponent(movieService, route) {
        var _this = this;
        this.movieService = movieService;
        this.route = route;
        route.params.subscribe(function (params) {
            movieService.getById(params['id'])
                .subscribe(function (movie) {
                _this.movie = movie;
            });
        });
    }
    return MovieDetailsComponent;
}());
MovieDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'movie-details',
        template: __webpack_require__(218),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_impl_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_impl_movie_service__["a" /* MovieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], MovieDetailsComponent);

var _a, _b;
//# sourceMappingURL=movie-details.component.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_impl_movie_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesComponent = (function () {
    function MoviesComponent(movieService) {
        var _this = this;
        this.movieService = movieService;
        this.movieService.getAll()
            .subscribe(function (movies) {
            _this.movies = movies;
        });
    }
    return MoviesComponent;
}());
MoviesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'movies',
        template: __webpack_require__(219),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_impl_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_impl_movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], MoviesComponent);

var _a;
//# sourceMappingURL=movies.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (values, term) {
        // check is search term is undefined
        if (term === undefined) {
            return values;
        }
        return values.filter(function (value) {
            return value.name.toLowerCase().includes(term.toLowerCase());
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenderPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GenderPipe = (function () {
    function GenderPipe() {
    }
    GenderPipe.prototype.transform = function (value, args) {
        return value === 'male' ? 'M' : 'F';
    };
    return GenderPipe;
}());
GenderPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Pipe */])({
        name: 'gender'
    })
], GenderPipe);

//# sourceMappingURL=gender.pipe.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_validation_CustomValidators__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterBuilderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterBuilderComponent = (function () {
    function RegisterBuilderComponent(fb) {
        this.fb = fb;
        this.registerForm = fb.group({
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'confirmPassword': ['']
        });
        this.registerForm.controls.confirmPassword.validator = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2_app_validation_CustomValidators__["a" /* CustomValidators */].matchValue(this.registerForm.controls.password)]);
    }
    RegisterBuilderComponent.prototype.ngOnInit = function () {
    };
    return RegisterBuilderComponent;
}());
RegisterBuilderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'register-builder',
        template: __webpack_require__(220),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object])
], RegisterBuilderComponent);

var _a;
//# sourceMappingURL=register-builder.component.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.register = function (registerForm) {
        console.log(registerForm);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'register',
        template: __webpack_require__(221),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_impl_starship_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarshipDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StarshipDetailsComponent = (function () {
    function StarshipDetailsComponent(route, starshipService) {
        var _this = this;
        this.route = route;
        this.starshipService = starshipService;
        route.params.subscribe(function (params) {
            starshipService.getById(params['id']).subscribe(function (starship) {
                _this.starship = starship;
            });
        });
    }
    return StarshipDetailsComponent;
}());
StarshipDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'starship-details',
        template: __webpack_require__(222),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_impl_starship_service__["a" /* StarshipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_impl_starship_service__["a" /* StarshipService */]) === "function" && _b || Object])
], StarshipDetailsComponent);

var _a, _b;
//# sourceMappingURL=starship-details.component.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_impl_starship_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarshipsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarshipsComponent = (function () {
    function StarshipsComponent(starshipService) {
        var _this = this;
        this.starshipService = starshipService;
        starshipService.getAll()
            .subscribe(function (starships) {
            _this.starships = starships;
        });
    }
    return StarshipsComponent;
}());
StarshipsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'starships',
        template: __webpack_require__(223),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_impl_starship_service__["a" /* StarshipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_impl_starship_service__["a" /* StarshipService */]) === "function" && _a || Object])
], StarshipsComponent);

var _a;
//# sourceMappingURL=starships.component.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidators; });
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.matchValue = function (original) {
        return function (c) {
            return original.value !== c.value ? { 'mismatch': true } : null;
        };
    };
    return CustomValidators;
}());

//# sourceMappingURL=CustomValidators.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_impl_vehicle_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleDetailsComponent = (function () {
    function VehicleDetailsComponent(route, vehicleService) {
        var _this = this;
        this.route = route;
        this.vehicleService = vehicleService;
        this.something = '';
        route.params.subscribe(function (params) {
            vehicleService.getById(params['id'])
                .subscribe(function (vehicle) {
                _this.vehicle = vehicle;
            });
        });
    }
    VehicleDetailsComponent.prototype.justForTesting = function (name) {
        this.something = "Hello " + name;
    };
    return VehicleDetailsComponent;
}());
VehicleDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'vehicle-details',
        template: __webpack_require__(224),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_impl_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_impl_vehicle_service__["a" /* VehicleService */]) === "function" && _b || Object])
], VehicleDetailsComponent);

var _a, _b;
//# sourceMappingURL=vehicle-details.component.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_impl_vehicle_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehiclesComponent = (function () {
    function VehiclesComponent(vehicleService) {
        var _this = this;
        this.vehicleService = vehicleService;
        this.vehicles = Array();
        vehicleService.getAll()
            .subscribe(function (vehicles) {
            _this.vehicles = vehicles;
        });
    }
    return VehiclesComponent;
}());
VehiclesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'vehicles',
        template: __webpack_require__(225),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_impl_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_impl_vehicle_service__["a" /* VehicleService */]) === "function" && _a || Object])
], VehiclesComponent);

var _a;
//# sourceMappingURL=vehicles.component.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".login-text {\n  color: #9d9d9d;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse bg-inverse navbar-static-top\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"\">Star Wars</a>\n    </div>\n    <login (loggedInEvent)=\"onLoggedInEvent($event)\"></login>\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"characters\"\n               routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{exact: true}\" id=\"charactersNavigation\">Characters</a>\n        </li>\n        <li><a routerLink=\"movies\"\n               routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{exact: true}\"\n               id=\"moviesNavigation\">Movies</a>\n        </li>\n        <li>\n          <a routerLink=\"starships\" id=\"starShipsNavigation\">\n          Starships <span *ngIf=\"!loggedIn\" class=\"glyphicon glyphicon-lock\"\n                                                               aria-hidden=\"true\"></span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"vehicles\" id=\"vehiclesNavigation\">\n            Vehicles <span *ngIf=\"!loggedIn\" class=\"glyphicon glyphicon-lock\"\n                                                    aria-hidden=\"true\"></span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"examples\" id=\"examples\">\n            Examples\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"characterDetails\">\n    <div class=\"container\" *ngIf=\"character\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <h3>Character:</h3>\n              <img [src]=\"character?.image\" [alt]=\"character?.name\" class=\"img-rounded\">\n            </div>\n            <div class=\"row\">\n              <h3>Movies:</h3>\n              <div class=\"list-group\"  *ngIf=\"movies.length>0\">\n                <a class=\"list-group-item\" *ngFor=\"let movie of movies\"\n                   routerLink=\"/movies/{{movie.id}}\">\n                  {{movie.title}}\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <h3 id=\"characterName\">{{character.name}}</h3>\n            <p><b>Gender:</b> {{character?.gender | gender}}</p>\n            <p><b>Skin color:</b> {{character?.skin_color}}</p>\n            <p><b>Hair color:</b> {{character?.hair_color}}</p>\n            <p><b>Height:</b> {{character?.height}}</p>\n            <p><b>Eye color:</b> {{character?.eye_color}}</p>\n            <p><b>Mass:</b> {{character?.mass}}</p>\n            <p><b>Birth year:</b> {{character?.birth_year}}</p>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"col-md-5\" *ngIf=\"vehicles.length>0\">\n            <h3>Vehicles:</h3>\n            <div class=\"row\">\n              <div *ngFor=\"let vehicle of vehicles\">\n                <div class=\"thumbnail\" highlight routerLink=\"/vehicles/{{vehicle.id}}\">\n                  <img [src]=\"vehicle.image\" [alt]=\"vehicle.name\" class=\"thumbnail\">\n                  <div class=\"caption\">\n                    <h3>{{vehicle.name}}</h3>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-5 pull-right\" *ngIf=\"starships.length>0\">\n            <h3>Starships:</h3>\n            <div class=\"row\">\n              <div *ngFor=\"let starship of starships\">\n                <div class=\"thumbnail\" highlight routerLink=\"/starships/{{starship.id}}\">\n                  <img [src]=\"starship.image\" [alt]=\"starship.name\" class=\"thumbnail\">\n                  <div class=\"caption\">\n                    <h3>{{starship.name}}</h3>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"search\">Search for character</label>\n  <input type=\"text\" class=\"form-control\" id=\"search\" placeholder=\"Search\" [(ngModel)]=\"term\">\n</div>\n<div class=\"row\" id=\"characters\">\n  <div id=\"character\" class=\"col-sm-4 col-md-3\" *ngFor=\"let character of results | filter:term\">\n    <div class=\"thumbnail\" highlight [routerLink]=\"character.id\" popup>\n      <img [src]=\"character.image\" [alt]=\"character.name\" class=\"thumbnail\">\n      <div class=\"caption\">\n        <h3>{{character.name}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\n  <navigation></navigation>\n</div>\n<div class=\"col-md-8\">\n  <h4>\n    Change detection\n  </h4>\n  <div class=\"col-md-6\">\n    <default-change-detection [profile]=\"profile1\"></default-change-detection>\n  </div>\n  <div class=\"col-md-6\">\n    <on-push-change-detection [profile]=\"profile2\"></on-push-change-detection>\n  </div>\n\n</div>\n"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\n  <navigation></navigation>\n</div>\n<div class=\"col-md-8\">\n  <h4>\n    Custom directive\n  </h4>\n\n  <p>This is wrapper paragraph.\n    <span *customIf=\"active\">\n      This text needs to be hidden after click on button\n    </span>\n  </p>\n\n  <button class=\"btn btn-default\" (click)=\"toggle()\">Toggle</button>\n</div>\n"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<h4>\n  Default Strategy\n</h4>\n\n<form class=\"form-horizontal\">\n  <div class=\"form-group\">\n    <label for=\"firstName\" class=\"col-sm-2 col-md-2 col-lg-2 control-label\">First name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"profile.firstName\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"lastName\" class=\"col-sm-2 col-md-2 col-lg-2 control-label\">Last name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"profile.lastName\">\n    </div>\n  </div>\n</form>\n\n<h4>\n  Last changed\n  {{profile.lastChanged()}}\n</h4>\n"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\n  <navigation></navigation>\n</div>\n<div class=\"col-md-8\">\n  <h4>\n    All Hooks\n  </h4>\n\n  <life-cycle-hooks *ngIf=\"displayComponent\"></life-cycle-hooks>\n\n  <button class=\"btn btn-default\" (click)=\"toggleDisplay()\">Toggle</button>\n</div>\n"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "<p>Counter: {{counter}}</p>\n<button class=\"btn btn-default\" (click)=\"inc()\">Increment</button>\n"

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <button routerLink=\"/examples/hooks\" type=\"button\" class=\"list-group-item\">All hooks</button>\n  <button routerLink=\"/examples/directive\" type=\"button\" class=\"list-group-item\">Custom structural directive</button>\n  <button routerLink=\"/examples/changedetection\" type=\"button\" class=\"list-group-item\">Change detection</button>\n</div>\n\n<div class=\"list-group\">\n  <button routerLink=\"/examples/rxjs\" type=\"button\" class=\"list-group-item\">RxJS examples</button>\n</div>\n"

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = "<h4>\n  On Push Strategy\n</h4>\n\n<form class=\"form-horizontal\">\n  <div class=\"form-group\">\n    <label for=\"firstName\" class=\"col-sm-2 col-md-2 col-lg-2 control-label\">First name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"profile.firstName\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"lastName\" class=\"col-sm-2 col-md-2 col-lg-2 control-label\">Last name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"profile.lastName\">\n    </div>\n  </div>\n</form>\n\n<h4>\n  Last changed\n  {{profile.lastChanged()}}\n</h4>\n"

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\n  <navigation></navigation>\n</div>\n<div class=\"col-md-8\">\n  <h4>\n    RxJS Examples\n  </h4>\n\n  Basic example:\n  <button id=\"clickMeButton\" class=\"btn btn-default\" (click)=\"clickMeStream$.next($event)\">Click me</button>\n</div>\n"

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = "<form class=\"navbar-form navbar-right\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\" *ngIf=\"!loggedIn\">\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"username\" id=\"username\" name=\"username\" ngModel>\n    <input type=\"password\" class=\"form-control\" placeholder=\"password\" id=\"password\" name=\"password\" ngModel>\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\" id=\"loginBtn\">Log in</button>\n  <button class=\"btn btn-default\" id=\"signUpBtn\"\n          routerLink=\"register\"\n          routerLinkActive=\"register\"\n          [routerLinkActiveOptions]=\"{exact: true}\">Sign up</button>\n</form>\n\n<p class=\"navbar-form navbar-right\" *ngIf=\"loggedIn\">\n  <span class=\"login-text\" id=\"loginMessage\">Signed in as {{authService.getUser()}}</span>\n  <button (click)=\"logout()\" class=\"btn btn-default\" id=\"logOutBtn\">Logout</button>\n</p>\n"

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1>{{movie.title}}</h1>\n      <p><b>Release date:</b> {{movie.release_date}}</p>\n      <p><b>Director:</b> {{movie?.director}}</p>\n      <p><b>Producer:</b> {{movie?.producer}}</p>\n      <p><b>Episode Number:</b> {{movie?.episode_id}}</p>\n      <p><b>Opening crawl:</b> {{movie?.opening_crawl}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"movies\">\n  <div class=\"col-sm-4 col-md-3\" *ngFor=\"let movie of movies\">\n    <div class=\"thumbnail\" highlight [routerLink]=\"movie.id\">\n      <div class=\"caption\">\n        <h3>{{movie.title}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h1>Using ngForm</h1>\n    <form [formGroup]=\"registerForm\" class=\"form-horizontal\">\n      <div class=\"form-group\" [class.has-error]=\"registerForm.controls.firstName.invalid && registerForm.controls.firstName.touched\">\n        <label for=\"firstName\" class=\"col-sm-2 col-md-2 col-lg-2 control-label\">First name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First name\"\n                 name=\"firstName\" [formControl]=\"registerForm.controls['firstName']\">\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error]=\"registerForm.controls.lastName.invalid && registerForm.controls.lastName.touched\">\n        <label for=\"lastName\" class=\"col-sm-2 col-md-2 col-lg-2 control-label\">Last name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last name\"\n                 name=\"lastName\" [formControl]=\"registerForm.controls['firstName']\">\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error]=\"registerForm.controls.email.invalid && registerForm.controls.email.touched\">\n        <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\"\n                 name=\"email\"  [formControl]=\"registerForm.controls['email']\">\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error]=\"registerForm.controls.password.invalid && registerForm.controls.password.touched\">\n        <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\"\n                 min-length=\"3\" name=\"password\" [formControl]=\"registerForm.controls['password']\">\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error]=\"registerForm.controls.confirmPassword.invalid && registerForm.controls.confirmPassword.touched\">\n        <label for=\"confirmPassword\" class=\"col-sm-2 control-label\">Confirm Password</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirm password\"\n                 name=\"confirmPassword\" [formControl]=\"registerForm.controls['confirmPassword']\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"col-md-6\" *ngIf=\"registerForm\">\n    Form valid: {{registerForm.valid | json}}<br>\n    <hr>\n    Fields validation:<br>\n    <p><b>firstName:</b> {{registerForm.controls.firstName.valid | json}}</p>\n    <p><b>lastName:</b> {{registerForm.controls.lastName.valid | json}}</p>\n    <p><b>email:</b> {{registerForm.controls.email.valid | json}}</p>\n    <p><b>password:</b> {{registerForm.controls.password.valid | json}}</p>\n    <p><b>confirm password:</b> {{registerForm.controls.confirmPassword.valid | json}}</p>\n    <hr>\n    Fields errors:<br>\n    <p><b>firstName:</b> {{registerForm.controls.firstName.errors | json}}</p>\n    <p><b>lastName:</b> {{registerForm.controls.lastName.errors | json}}</p>\n    <p><b>email:</b> {{registerForm.controls.email.errors | json}}</p>\n    <p><b>password:</b> {{registerForm.controls.password.errors | json}}</p>\n    <p><b>confirm password:</b> {{registerForm.controls.confirmPassword.errors | json}}</p>\n\n    <hr>\n    Fields touched:<br>\n    <p><b>firstName:</b> {{registerForm.controls.firstName.touched | json}}</p>\n    <p><b>lastName:</b> {{registerForm.controls.lastName.touched | json}}</p>\n    <p><b>email:</b> {{registerForm.controls.email.touched | json}}</p>\n    <p><b>password:</b> {{registerForm.controls.password.touched | json}}</p>\n    <p><b>confirm password:</b> {{registerForm.controls.confirmPassword.touched | json}}</p>\n    <hr>\n    Fields pristine:<br>\n    <p><b>firstName:</b> {{registerForm.controls.firstName.pristine | json}}</p>\n    <p><b>lastName:</b> {{registerForm.controls.lastName.pristine | json}}</p>\n    <p><b>email:</b> {{registerForm.controls.email.pristine | json}}</p>\n    <p><b>password:</b> {{registerForm.controls.password.pristine | json}}</p>\n    <p><b>confirm password:</b> {{registerForm.controls.confirmPassword.pristine | json}}</p>\n    <hr>\n  </div>\n\n</div>\n"

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h1>Using ngForm</h1>\n    <form #f=\"ngForm\" class=\"form-horizontal\" (ngSubmit)=\"register(f)\">\n      <div class=\"form-group\" [class.has-error]=\"f.controls.firstName.invalid && f.controls.firstName.touched\">\n        <label for=\"firstName\" class=\"col-sm-2 col-md-2 col-lg-2 control-label\">First name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First name\"\n                 minlength=\"3\" name=\"firstName\" ngModel required>\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error]=\"f.controls.lastName.invalid && f.controls.lastName.touched\">\n        <label for=\"lastName\" class=\"col-sm-2 col-md-2 col-lg-2 control-label\">Last name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last name\"\n                 min-length=\"3\" name=\"lastName\" ngModel required>\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error]=\"f.controls.email.invalid && f.controls.email.touched\">\n        <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\"\n                 pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" ngModel required>\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error]=\"f.controls.password.invalid && f.controls.password.touched\">\n        <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\"\n                 min-length=\"3\" name=\"password\" ngModel required #password>\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error]=\"f.controls.confirmPassword.invalid && f.controls.confirmPassword.touched\">\n        <label for=\"confirmPassword\" class=\"col-sm-2 control-label\">Confirm Password</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirm password\"\n                 min-length=\"3\" name=\"confirmPassword\" ngModel required [equalValidator]=\"password.value\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n        </div>\n      </div>\n    </form>\n    <a routerLink=\"/register-builder\"\n       routerLinkActive=\"active\"\n       [routerLinkActiveOptions]=\"{exact: true}\"><h1>Example that uses Form Builder</h1></a>\n  </div>\n  <div class=\"col-md-6\" *ngIf=\"f\">\n    Form valid: {{f.valid | json}}<br>\n    <hr>\n    Fields validation:<br>\n    <p><b>firstName:</b> {{f.controls.firstName.valid | json}}</p>\n    <p><b>lastName:</b> {{f.controls.lastName.valid | json}}</p>\n    <p><b>email:</b> {{f.controls.email.valid | json}}</p>\n    <p><b>password:</b> {{f.controls.password.valid | json}}</p>\n    <p><b>confirm password:</b> {{f.controls.confirmPassword.valid | json}}</p>\n    <hr>\n    Fields errors:<br>\n    <p><b>firstName:</b> {{f.controls.firstName.errors | json}}</p>\n    <p><b>lastName:</b> {{f.controls.lastName.errors | json}}</p>\n    <p><b>email:</b> {{f.controls.email.errors | json}}</p>\n    <p><b>password:</b> {{f.controls.password.errors | json}}</p>\n    <p><b>confirm password:</b> {{f.controls.confirmPassword.errors | json}}</p>\n\n    <hr>\n    Fields touched:<br>\n    <p><b>firstName:</b> {{f.controls.firstName.touched | json}}</p>\n    <p><b>lastName:</b> {{f.controls.lastName.touched | json}}</p>\n    <p><b>email:</b> {{f.controls.email.touched | json}}</p>\n    <p><b>password:</b> {{f.controls.password.touched | json}}</p>\n    <p><b>confirm password:</b> {{f.controls.confirmPassword.touched | json}}</p>\n    <hr>\n    Fields pristine:<br>\n    <p><b>firstName:</b> {{f.controls.firstName.pristine | json}}</p>\n    <p><b>lastName:</b> {{f.controls.lastName.pristine | json}}</p>\n    <p><b>email:</b> {{f.controls.email.pristine | json}}</p>\n    <p><b>password:</b> {{f.controls.password.pristine | json}}</p>\n    <p><b>confirm password:</b> {{f.controls.confirmPassword.pristine | json}}</p>\n    <hr>\n  </div>\n\n</div>\n"

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <h3>Starship:</h3>\n            <img [src]=\"starship.image\" [alt]=\"starship.name\" class=\"img-rounded\">\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h3>{{starship.name}}</h3>\n          <p><b>Passengers:</b> {{starship.passengers}}</p>\n          <p><b>starship class:</b> {{starship.starship_class}}</p>\n          <p><b>Cargo capacity:</b> {{starship.cargo_capacity}}</p>\n          <p><b>Max atmosphering speed:</b> {{starship.max_atmosphering_speed}}</p>\n          <p><b>Crew:</b> {{starship.crew}}</p>\n          <p><b>Length:</b> {{starship.length}}</p>\n          <p><b>Model:</b> {{starship.model}}</p>\n          <p><b>Manufacturer:</b> {{starship.manufacturer}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"starShips\">\n  <div class=\"col-sm-4 col-md-3\" *ngFor=\"let starship of starships\">\n    <div class=\"thumbnail\" highlight [routerLink]=\"starship.id\">\n      <img [src]=\"starship.image\" [alt]=\"starship.name\" class=\"thumbnail\">\n      <div class=\"caption\">\n        <h3>{{starship.name}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"vehicleDetails\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <h3>Vehicle:</h3>\n            <img [src]=\"vehicle?.image\" [alt]=\"vehicle.name\" class=\"img-rounded\">\n          </div>\n        </div>\n        <div class=\"col-md-6 details\">\n          <h3>{{vehicle.name}}</h3>\n          <p><b>Passengers:</b> {{vehicle.passengers}}</p>\n          <p><b>Vehicle class:</b> {{vehicle.vehicle_class}}</p>\n          <p><b>Cargo capacity:</b> {{vehicle.cargo_capacity}}</p>\n          <p><b>Max atmosphering speed:</b> {{vehicle.max_atmosphering_speed}}</p>\n          <p><b>Crew:</b> {{vehicle.crew}}</p>\n          <p><b>Length:</b> {{vehicle.length}}</p>\n          <p><b>Model:</b> {{vehicle.model}}</p>\n          <p><b>Manufacturer:</b> {{vehicle.manufacturer}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"vehicles\">\n  <div class=\"col-sm-4 col-md-3\" *ngFor=\"let vehicle of vehicles\">\n    <div class=\"thumbnail\" highlight [routerLink]=\"vehicle.id\">\n      <img [src]=\"vehicle.image\" [alt]=\"vehicle.name\" class=\"thumbnail\">\n      <div class=\"caption\">\n        <h3>{{vehicle.name}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ })
]),[262]);
//# sourceMappingURL=main.bundle.js.map