webpackJsonp([1,4],{

/***/ 385:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 385;


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(503);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/CitiPreciouskyFight/src/main.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
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
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        $('li.dropdown').mouseover(function () {
            $(this).addClass('open');
        }).mouseout(function () {
            $(this).removeClass('open');
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $('nav.navbar-fixed-top').removeClass('opacity8');
            }
            else {
                $('nav.navbar-fixed-top').addClass('opacity8');
            }
        });
    };
    AppComponent.prototype.login = function () {
        this.router.navigate(['/host']);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(771),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/app.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fund_fund_module__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__information_information_module__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__course_course_module__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tool_tool_module__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forum_forum_module__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_module__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__host_host_module__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__no_page_found_no_page_found_component__ = __webpack_require__(558);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var appRoutes = [
    // { path: 'home', component: HomeComponent },
    // { path: 'information', component: InformationComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_14__no_page_found_no_page_found_component__["a" /* NoPageFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__no_page_found_no_page_found_component__["a" /* NoPageFoundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_7__fund_fund_module__["a" /* FundModule */],
                __WEBPACK_IMPORTED_MODULE_8__information_information_module__["a" /* InformationModule */],
                __WEBPACK_IMPORTED_MODULE_9__course_course_module__["a" /* CourseModule */],
                __WEBPACK_IMPORTED_MODULE_10__tool_tool_module__["a" /* ToolModule */],
                __WEBPACK_IMPORTED_MODULE_11__forum_forum_module__["a" /* ForumModule */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_13__host_host_module__["a" /* HostModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/app.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_course_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__way_way_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__danger_edu_danger_edu_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__law_law_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__way_for_right_way_for_right_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edu_info1_edu_info1_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edu_info2_edu_info2_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edu_info3_edu_info3_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__law_details1_law_details1_component__ = __webpack_require__(510);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var appRoutes = [
    { path: 'course', component: __WEBPACK_IMPORTED_MODULE_2__course_course_component__["a" /* CourseComponent */], children: [
            { path: '', redirectTo: 'way', pathMatch: 'full' },
            { path: 'law', component: __WEBPACK_IMPORTED_MODULE_6__law_law_component__["a" /* LawComponent */] },
            { path: 'eduInfo1', component: __WEBPACK_IMPORTED_MODULE_8__edu_info1_edu_info1_component__["a" /* EduInfo1Component */] },
            { path: 'eduInfo2', component: __WEBPACK_IMPORTED_MODULE_9__edu_info2_edu_info2_component__["a" /* EduInfo2Component */] },
            { path: 'eduInfo3', component: __WEBPACK_IMPORTED_MODULE_10__edu_info3_edu_info3_component__["a" /* EduInfo3Component */] },
            { path: 'dangerEdu', component: __WEBPACK_IMPORTED_MODULE_5__danger_edu_danger_edu_component__["a" /* DangerEduComponent */] },
            { path: 'way', component: __WEBPACK_IMPORTED_MODULE_4__way_way_component__["a" /* WayComponent */] },
            { path: 'wayforright', component: __WEBPACK_IMPORTED_MODULE_7__way_for_right_way_for_right_component__["a" /* WayForRightComponent */] },
            { path: 'lawdetails1', component: __WEBPACK_IMPORTED_MODULE_11__law_details1_law_details1_component__["a" /* LawDetails1Component */] }
        ] }
];
var CourseModule = (function () {
    function CourseModule() {
    }
    CourseModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__course_course_component__["a" /* CourseComponent */],
                __WEBPACK_IMPORTED_MODULE_4__way_way_component__["a" /* WayComponent */],
                __WEBPACK_IMPORTED_MODULE_5__danger_edu_danger_edu_component__["a" /* DangerEduComponent */],
                __WEBPACK_IMPORTED_MODULE_6__law_law_component__["a" /* LawComponent */],
                __WEBPACK_IMPORTED_MODULE_7__way_for_right_way_for_right_component__["a" /* WayForRightComponent */],
                __WEBPACK_IMPORTED_MODULE_8__edu_info1_edu_info1_component__["a" /* EduInfo1Component */],
                __WEBPACK_IMPORTED_MODULE_9__edu_info2_edu_info2_component__["a" /* EduInfo2Component */],
                __WEBPACK_IMPORTED_MODULE_10__edu_info3_edu_info3_component__["a" /* EduInfo3Component */],
                __WEBPACK_IMPORTED_MODULE_11__law_details1_law_details1_component__["a" /* LawDetails1Component */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CourseModule);
    return CourseModule;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/course.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseComponent = (function () {
    function CourseComponent() {
    }
    CourseComponent.prototype.ngOnInit = function () {
    };
    CourseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-course',
            template: __webpack_require__(772),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [])
    ], CourseComponent);
    return CourseComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/course.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DangerEduComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DangerEduComponent = (function () {
    function DangerEduComponent() {
    }
    DangerEduComponent.prototype.ngOnInit = function () {
    };
    DangerEduComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-danger-edu',
            template: __webpack_require__(773),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [])
    ], DangerEduComponent);
    return DangerEduComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/danger-edu.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EduInfo1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EduInfo1Component = (function () {
    function EduInfo1Component() {
    }
    EduInfo1Component.prototype.ngOnInit = function () {
    };
    EduInfo1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-edu-info1',
            template: __webpack_require__(774),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [])
    ], EduInfo1Component);
    return EduInfo1Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/edu-info1.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EduInfo2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EduInfo2Component = (function () {
    function EduInfo2Component() {
    }
    EduInfo2Component.prototype.ngOnInit = function () {
    };
    EduInfo2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-edu-info2',
            template: __webpack_require__(775),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [])
    ], EduInfo2Component);
    return EduInfo2Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/edu-info2.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EduInfo3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EduInfo3Component = (function () {
    function EduInfo3Component() {
    }
    EduInfo3Component.prototype.ngOnInit = function () {
    };
    EduInfo3Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-edu-info3',
            template: __webpack_require__(776),
            styles: [__webpack_require__(723)]
        }), 
        __metadata('design:paramtypes', [])
    ], EduInfo3Component);
    return EduInfo3Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/edu-info3.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LawDetails1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LawDetails1Component = (function () {
    function LawDetails1Component() {
    }
    LawDetails1Component.prototype.ngOnInit = function () {
    };
    LawDetails1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-law-details1',
            template: __webpack_require__(777),
            styles: [__webpack_require__(724)]
        }), 
        __metadata('design:paramtypes', [])
    ], LawDetails1Component);
    return LawDetails1Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/law-details1.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LawComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LawComponent = (function () {
    function LawComponent() {
    }
    LawComponent.prototype.ngOnInit = function () {
    };
    LawComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-law',
            template: __webpack_require__(778),
            styles: [__webpack_require__(725)]
        }), 
        __metadata('design:paramtypes', [])
    ], LawComponent);
    return LawComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/law.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WayForRightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WayForRightComponent = (function () {
    function WayForRightComponent() {
    }
    WayForRightComponent.prototype.ngOnInit = function () {
    };
    WayForRightComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-way-for-right',
            template: __webpack_require__(779),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], WayForRightComponent);
    return WayForRightComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/way-for-right.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WayComponent = (function () {
    function WayComponent() {
    }
    WayComponent.prototype.ngOnInit = function () {
    };
    WayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-way',
            template: __webpack_require__(780),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [])
    ], WayComponent);
    return WayComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/way.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsComponent = (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__(781),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailsComponent);
    return DetailsComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/details.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__(782),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditComponent);
    return EditComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/edit.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavoriteComponent = (function () {
    function FavoriteComponent() {
    }
    FavoriteComponent.prototype.ngOnInit = function () {
    };
    FavoriteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-favorite',
            template: __webpack_require__(783),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [])
    ], FavoriteComponent);
    return FavoriteComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/favorite.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_forum_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__initialbody_initialbody_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorite_favorite_component__ = __webpack_require__(516);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var appRoutes = [
    { path: 'forum', component: __WEBPACK_IMPORTED_MODULE_2__forum_forum_component__["a" /* ForumComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__initialbody_initialbody_component__["a" /* InitialbodyComponent */] },
            { path: 'initialBody', component: __WEBPACK_IMPORTED_MODULE_6__initialbody_initialbody_component__["a" /* InitialbodyComponent */] },
            { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__["a" /* EditComponent */] },
            { path: 'details', component: __WEBPACK_IMPORTED_MODULE_5__details_details_component__["a" /* DetailsComponent */] },
            { path: 'favorite', component: __WEBPACK_IMPORTED_MODULE_7__favorite_favorite_component__["a" /* FavoriteComponent */] }
        ] }
];
var ForumModule = (function () {
    function ForumModule() {
    }
    ForumModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__forum_forum_component__["a" /* ForumComponent */], __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_5__details_details_component__["a" /* DetailsComponent */], __WEBPACK_IMPORTED_MODULE_6__initialbody_initialbody_component__["a" /* InitialbodyComponent */], __WEBPACK_IMPORTED_MODULE_7__favorite_favorite_component__["a" /* FavoriteComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ForumModule);
    return ForumModule;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/forum.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForumComponent = (function () {
    function ForumComponent() {
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    ForumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-forum',
            template: __webpack_require__(784),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [])
    ], ForumComponent);
    return ForumComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/forum.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialbodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InitialbodyComponent = (function () {
    function InitialbodyComponent() {
    }
    InitialbodyComponent.prototype.ngOnInit = function () {
    };
    InitialbodyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-initialbody',
            template: __webpack_require__(785),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [])
    ], InitialbodyComponent);
    return InitialbodyComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/initialbody.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FundDetailsComponent = (function () {
    function FundDetailsComponent() {
    }
    FundDetailsComponent.prototype.ngOnInit = function () {
    };
    FundDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-fund-details',
            template: __webpack_require__(786),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [])
    ], FundDetailsComponent);
    return FundDetailsComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/fund-details.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fund_fund_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recommend_recommend_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__future_product_future_product_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fund_details_fund_details_component__ = __webpack_require__(520);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var appRoutes = [
    { path: 'fund', component: __WEBPACK_IMPORTED_MODULE_2__fund_fund_component__["a" /* FundComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__recommend_recommend_component__["a" /* RecommendComponent */] },
            { path: 'recommend', component: __WEBPACK_IMPORTED_MODULE_5__recommend_recommend_component__["a" /* RecommendComponent */] },
            { path: 'product', component: __WEBPACK_IMPORTED_MODULE_4__product_product_component__["a" /* ProductComponent */] },
            { path: 'futureProduct', component: __WEBPACK_IMPORTED_MODULE_6__future_product_future_product_component__["a" /* FutureProductComponent */] },
            { path: 'fundDetails', component: __WEBPACK_IMPORTED_MODULE_7__fund_details_fund_details_component__["a" /* FundDetailsComponent */] }
        ] }
];
var FundModule = (function () {
    function FundModule() {
    }
    FundModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__fund_fund_component__["a" /* FundComponent */], __WEBPACK_IMPORTED_MODULE_4__product_product_component__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_5__recommend_recommend_component__["a" /* RecommendComponent */], __WEBPACK_IMPORTED_MODULE_6__future_product_future_product_component__["a" /* FutureProductComponent */], __WEBPACK_IMPORTED_MODULE_7__fund_details_fund_details_component__["a" /* FundDetailsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], FundModule);
    return FundModule;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/fund.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FundComponent = (function () {
    function FundComponent() {
    }
    FundComponent.prototype.ngOnInit = function () {
    };
    FundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-fund',
            template: __webpack_require__(787),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [])
    ], FundComponent);
    return FundComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/fund.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FutureProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FutureProductComponent = (function () {
    function FutureProductComponent() {
    }
    FutureProductComponent.prototype.ngOnInit = function () {
    };
    FutureProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-future-product',
            template: __webpack_require__(788),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [])
    ], FutureProductComponent);
    return FutureProductComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/future-product.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__(789),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/product.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecommendComponent = (function () {
    function RecommendComponent() {
    }
    RecommendComponent.prototype.ngOnInit = function () {
    };
    RecommendComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-recommend',
            template: __webpack_require__(790),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [])
    ], RecommendComponent);
    return RecommendComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/recommend.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(527);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] }
];
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(appRoutes)
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/home.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('#slideshow').on('slide.bs.carousel', function () {
            console.log('paly the picture! ');
        });
        $('#slideshow').on('slid.bs.carousel', function () {
            console.log('overpaly the picture! ');
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            template: __webpack_require__(791),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/home.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstPageComponent = (function () {
    function FirstPageComponent() {
    }
    FirstPageComponent.prototype.ngOnInit = function () {
        this.identified = true;
    };
    FirstPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-first-page',
            template: __webpack_require__(792),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [])
    ], FirstPageComponent);
    return FirstPageComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/first-page.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__host_host_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__first_page_first_page_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__warehouse_warehouse_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_logs_search_logs_component__ = __webpack_require__(531);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var appRoutes = [
    { path: 'host', component: __WEBPACK_IMPORTED_MODULE_2__host_host_component__["a" /* HostComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__first_page_first_page_component__["a" /* FirstPageComponent */] },
            { path: 'firstpage', component: __WEBPACK_IMPORTED_MODULE_4__first_page_first_page_component__["a" /* FirstPageComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */] },
            { path: 'warehouse', component: __WEBPACK_IMPORTED_MODULE_6__warehouse_warehouse_component__["a" /* WarehouseComponent */] },
            { path: 'searchlogs', component: __WEBPACK_IMPORTED_MODULE_7__search_logs_search_logs_component__["a" /* SearchLogsComponent */] }
        ] }
];
var HostModule = (function () {
    function HostModule() {
    }
    HostModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__host_host_component__["a" /* HostComponent */], __WEBPACK_IMPORTED_MODULE_4__first_page_first_page_component__["a" /* FirstPageComponent */], __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_6__warehouse_warehouse_component__["a" /* WarehouseComponent */], __WEBPACK_IMPORTED_MODULE_7__search_logs_search_logs_component__["a" /* SearchLogsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HostModule);
    return HostModule;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/host.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HostComponent = (function () {
    function HostComponent() {
    }
    HostComponent.prototype.ngOnInit = function () {
    };
    HostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-host',
            template: __webpack_require__(793),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [])
    ], HostComponent);
    return HostComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/host.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchLogsComponent = (function () {
    function SearchLogsComponent() {
    }
    SearchLogsComponent.prototype.ngOnInit = function () {
    };
    SearchLogsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-search-logs',
            template: __webpack_require__(794),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchLogsComponent);
    return SearchLogsComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/search-logs.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__(795),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsComponent);
    return SettingsComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/settings.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarehouseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WarehouseComponent = (function () {
    function WarehouseComponent() {
    }
    WarehouseComponent.prototype.ngOnInit = function () {
    };
    WarehouseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-warehouse',
            template: __webpack_require__(796),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [])
    ], WarehouseComponent);
    return WarehouseComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/warehouse.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fof11Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Fof11Component = (function () {
    function Fof11Component() {
    }
    Fof11Component.prototype.ngOnInit = function () {
    };
    Fof11Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-fof11',
            template: __webpack_require__(797),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [])
    ], Fof11Component);
    return Fof11Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/fof11.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fof12Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Fof12Component = (function () {
    function Fof12Component() {
    }
    Fof12Component.prototype.ngOnInit = function () {
    };
    Fof12Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-fof12',
            template: __webpack_require__(798),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [])
    ], Fof12Component);
    return Fof12Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/fof12.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fof13Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Fof13Component = (function () {
    function Fof13Component() {
    }
    Fof13Component.prototype.ngOnInit = function () {
    };
    Fof13Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-fof13',
            template: __webpack_require__(799),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [])
    ], Fof13Component);
    return Fof13Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/fof13.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fof21Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Fof21Component = (function () {
    function Fof21Component() {
    }
    Fof21Component.prototype.ngOnInit = function () {
    };
    Fof21Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-fof21',
            template: __webpack_require__(800),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [])
    ], Fof21Component);
    return Fof21Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/fof21.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FofComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FofComponent = (function () {
    function FofComponent(router) {
        this.router = router;
    }
    FofComponent.prototype.ngOnInit = function () {
    };
    FofComponent.prototype.toDetails1 = function (infoID) {
        this.router.navigate(['/information/details', { id: infoID }]);
    };
    FofComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-fof',
            template: __webpack_require__(801),
            styles: [__webpack_require__(748)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], FofComponent);
    return FofComponent;
    var _a;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/fof.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenNews11Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GreenNews11Component = (function () {
    function GreenNews11Component() {
    }
    GreenNews11Component.prototype.ngOnInit = function () {
    };
    GreenNews11Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-green-news11',
            template: __webpack_require__(802),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [])
    ], GreenNews11Component);
    return GreenNews11Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/green-news11.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenNews12Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GreenNews12Component = (function () {
    function GreenNews12Component() {
    }
    GreenNews12Component.prototype.ngOnInit = function () {
    };
    GreenNews12Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-green-news12',
            template: __webpack_require__(803),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [])
    ], GreenNews12Component);
    return GreenNews12Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/green-news12.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenNews21Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GreenNews21Component = (function () {
    function GreenNews21Component() {
    }
    GreenNews21Component.prototype.ngOnInit = function () {
    };
    GreenNews21Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-green-news21',
            template: __webpack_require__(804),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [])
    ], GreenNews21Component);
    return GreenNews21Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/green-news21.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenNews22Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GreenNews22Component = (function () {
    function GreenNews22Component() {
    }
    GreenNews22Component.prototype.ngOnInit = function () {
    };
    GreenNews22Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-green-news22',
            template: __webpack_require__(805),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [])
    ], GreenNews22Component);
    return GreenNews22Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/green-news22.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__information_information_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ppp_ppp_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fof_fof_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_news_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fof11_fof11_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fof12_fof12_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fof13_fof13_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fof21_fof21_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ppp11_ppp11_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ppp12_ppp12_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ppp13_ppp13_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ppp21_ppp21_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ppp22_ppp22_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ppp23_ppp23_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__green_news11_green_news11_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__green_news12_green_news12_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__green_news21_green_news21_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__green_news22_green_news22_component__ = __webpack_require__(542);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var appRoutes = [
    { path: 'information', component: __WEBPACK_IMPORTED_MODULE_5__information_information_component__["a" /* InformationComponent */], children: [
            { path: 'fof', component: __WEBPACK_IMPORTED_MODULE_7__fof_fof_component__["a" /* FofComponent */] },
            { path: 'fof-11', component: __WEBPACK_IMPORTED_MODULE_9__fof11_fof11_component__["a" /* Fof11Component */] },
            { path: 'fof-12', component: __WEBPACK_IMPORTED_MODULE_10__fof12_fof12_component__["a" /* Fof12Component */] },
            { path: 'fof-13', component: __WEBPACK_IMPORTED_MODULE_11__fof13_fof13_component__["a" /* Fof13Component */] },
            { path: 'fof-21', component: __WEBPACK_IMPORTED_MODULE_12__fof21_fof21_component__["a" /* Fof21Component */] },
            { path: 'ppp', component: __WEBPACK_IMPORTED_MODULE_6__ppp_ppp_component__["a" /* PppComponent */] },
            { path: 'ppp-11', component: __WEBPACK_IMPORTED_MODULE_13__ppp11_ppp11_component__["a" /* Ppp11Component */] },
            { path: 'ppp-12', component: __WEBPACK_IMPORTED_MODULE_14__ppp12_ppp12_component__["a" /* Ppp12Component */] },
            { path: 'ppp-13', component: __WEBPACK_IMPORTED_MODULE_15__ppp13_ppp13_component__["a" /* Ppp13Component */] },
            { path: 'ppp-21', component: __WEBPACK_IMPORTED_MODULE_16__ppp21_ppp21_component__["a" /* Ppp21Component */] },
            { path: 'ppp-22', component: __WEBPACK_IMPORTED_MODULE_17__ppp22_ppp22_component__["a" /* Ppp22Component */] },
            { path: 'ppp-23', component: __WEBPACK_IMPORTED_MODULE_18__ppp23_ppp23_component__["a" /* Ppp23Component */] },
            { path: 'news', component: __WEBPACK_IMPORTED_MODULE_8__news_news_component__["a" /* NewsComponent */] },
            { path: 'news-11', component: __WEBPACK_IMPORTED_MODULE_19__green_news11_green_news11_component__["a" /* GreenNews11Component */] },
            { path: 'news-12', component: __WEBPACK_IMPORTED_MODULE_20__green_news12_green_news12_component__["a" /* GreenNews12Component */] },
            { path: 'news-21', component: __WEBPACK_IMPORTED_MODULE_21__green_news21_green_news21_component__["a" /* GreenNews21Component */] },
            { path: 'news-22', component: __WEBPACK_IMPORTED_MODULE_22__green_news22_green_news22_component__["a" /* GreenNews22Component */] },
            { path: '', redirectTo: '/information/fof', pathMatch: 'full' }
        ] }
];
var InformationModule = (function () {
    function InformationModule() {
    }
    InformationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__information_information_component__["a" /* InformationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ppp_ppp_component__["a" /* PppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__fof_fof_component__["a" /* FofComponent */],
                __WEBPACK_IMPORTED_MODULE_8__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__fof11_fof11_component__["a" /* Fof11Component */],
                __WEBPACK_IMPORTED_MODULE_10__fof12_fof12_component__["a" /* Fof12Component */],
                __WEBPACK_IMPORTED_MODULE_11__fof13_fof13_component__["a" /* Fof13Component */],
                __WEBPACK_IMPORTED_MODULE_12__fof21_fof21_component__["a" /* Fof21Component */],
                __WEBPACK_IMPORTED_MODULE_13__ppp11_ppp11_component__["a" /* Ppp11Component */],
                __WEBPACK_IMPORTED_MODULE_14__ppp12_ppp12_component__["a" /* Ppp12Component */],
                __WEBPACK_IMPORTED_MODULE_15__ppp13_ppp13_component__["a" /* Ppp13Component */],
                __WEBPACK_IMPORTED_MODULE_16__ppp21_ppp21_component__["a" /* Ppp21Component */],
                __WEBPACK_IMPORTED_MODULE_17__ppp22_ppp22_component__["a" /* Ppp22Component */],
                __WEBPACK_IMPORTED_MODULE_18__ppp23_ppp23_component__["a" /* Ppp23Component */],
                __WEBPACK_IMPORTED_MODULE_19__green_news11_green_news11_component__["a" /* GreenNews11Component */],
                __WEBPACK_IMPORTED_MODULE_20__green_news12_green_news12_component__["a" /* GreenNews12Component */],
                __WEBPACK_IMPORTED_MODULE_21__green_news21_green_news21_component__["a" /* GreenNews21Component */],
                __WEBPACK_IMPORTED_MODULE_22__green_news22_green_news22_component__["a" /* GreenNews22Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(appRoutes)
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], InformationModule);
    return InformationModule;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/information.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformationComponent = (function () {
    function InformationComponent() {
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    InformationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-information',
            template: __webpack_require__(806),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [])
    ], InformationComponent);
    return InformationComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/information.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__(807),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [])
    ], NewsComponent);
    return NewsComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/news.component.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ppp11Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ppp11Component = (function () {
    function Ppp11Component() {
    }
    Ppp11Component.prototype.ngOnInit = function () {
    };
    Ppp11Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-ppp11',
            template: __webpack_require__(808),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [])
    ], Ppp11Component);
    return Ppp11Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/ppp11.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ppp12Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ppp12Component = (function () {
    function Ppp12Component() {
    }
    Ppp12Component.prototype.ngOnInit = function () {
    };
    Ppp12Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-ppp12',
            template: __webpack_require__(809),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [])
    ], Ppp12Component);
    return Ppp12Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/ppp12.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ppp13Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ppp13Component = (function () {
    function Ppp13Component() {
    }
    Ppp13Component.prototype.ngOnInit = function () {
    };
    Ppp13Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-ppp13',
            template: __webpack_require__(810),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [])
    ], Ppp13Component);
    return Ppp13Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/ppp13.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ppp21Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ppp21Component = (function () {
    function Ppp21Component() {
    }
    Ppp21Component.prototype.ngOnInit = function () {
    };
    Ppp21Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-ppp21',
            template: __webpack_require__(811),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [])
    ], Ppp21Component);
    return Ppp21Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/ppp21.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ppp22Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ppp22Component = (function () {
    function Ppp22Component() {
    }
    Ppp22Component.prototype.ngOnInit = function () {
    };
    Ppp22Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-ppp22',
            template: __webpack_require__(812),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [])
    ], Ppp22Component);
    return Ppp22Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/ppp22.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ppp23Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ppp23Component = (function () {
    function Ppp23Component() {
    }
    Ppp23Component.prototype.ngOnInit = function () {
    };
    Ppp23Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-ppp23',
            template: __webpack_require__(813),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [])
    ], Ppp23Component);
    return Ppp23Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/ppp23.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PppComponent = (function () {
    function PppComponent() {
    }
    PppComponent.prototype.ngOnInit = function () {
    };
    PppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-ppp',
            template: __webpack_require__(814),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [])
    ], PppComponent);
    return PppComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/ppp.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivateComponent = (function () {
    function ActivateComponent() {
    }
    ActivateComponent.prototype.ngOnInit = function () {
    };
    ActivateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-activate',
            template: __webpack_require__(815),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [])
    ], ActivateComponent);
    return ActivateComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/activate.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnrollComponent = (function () {
    function EnrollComponent(router) {
        this.router = router;
        this.tele = '';
        this.psd1 = '';
        this.psd2 = '';
        this.alertMsg = '';
    }
    EnrollComponent.prototype.ngOnInit = function () {
    };
    EnrollComponent.prototype.setPsd1 = function (event) {
        this.psd1 = event.target.value;
        this.alertMsg = '';
    };
    EnrollComponent.prototype.setPsd2 = function (event) {
        this.alertMsg = '';
        this.psd2 = event.target.value;
    };
    EnrollComponent.prototype.setTele = function (event) {
        this.tele = event.target.value;
    };
    EnrollComponent.prototype.enroll = function () {
        if (this.psd1 === this.psd2) {
            this.router.navigate(['/host']);
            alert('注册成功');
        }
        else {
            this.alertMsg = '您输入的两次密码不一致';
        }
    };
    EnrollComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-enroll',
            template: __webpack_require__(816),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], EnrollComponent);
    return EnrollComponent;
    var _a;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/enroll.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IdentifyComponent = (function () {
    function IdentifyComponent() {
    }
    IdentifyComponent.prototype.ngOnInit = function () {
    };
    IdentifyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-identify',
            template: __webpack_require__(817),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [])
    ], IdentifyComponent);
    return IdentifyComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/identify.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_enroll_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identify_identify_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionnaire_questionnaire_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activate_activate_component__ = __webpack_require__(553);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var appRoutes = [
    { path: 'enroll', component: __WEBPACK_IMPORTED_MODULE_2__enroll_enroll_component__["a" /* EnrollComponent */] },
    { path: 'identify', component: __WEBPACK_IMPORTED_MODULE_4__identify_identify_component__["a" /* IdentifyComponent */] },
    { path: 'questionnaire', component: __WEBPACK_IMPORTED_MODULE_5__questionnaire_questionnaire_component__["a" /* QuestionnaireComponent */] },
    { path: 'activate', component: __WEBPACK_IMPORTED_MODULE_6__activate_activate_component__["a" /* ActivateComponent */] }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__enroll_enroll_component__["a" /* EnrollComponent */], __WEBPACK_IMPORTED_MODULE_4__identify_identify_component__["a" /* IdentifyComponent */], __WEBPACK_IMPORTED_MODULE_5__questionnaire_questionnaire_component__["a" /* QuestionnaireComponent */], __WEBPACK_IMPORTED_MODULE_6__activate_activate_component__["a" /* ActivateComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/login.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionnaireComponent = (function () {
    function QuestionnaireComponent() {
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
    };
    QuestionnaireComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-questionnaire',
            template: __webpack_require__(818),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/questionnaire.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoPageFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoPageFoundComponent = (function () {
    function NoPageFoundComponent() {
    }
    NoPageFoundComponent.prototype.ngOnInit = function () {
    };
    NoPageFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-no-page-found',
            template: __webpack_require__(819),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [])
    ], NoPageFoundComponent);
    return NoPageFoundComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/no-page-found.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cal1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Cal1Component = (function () {
    function Cal1Component() {
    }
    Cal1Component.prototype.ngOnInit = function () {
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal1Component.prototype.cal1 = function (val) {
        this.val1 = val;
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal1Component.prototype.cal2 = function (val) {
        this.val2 = val;
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal1Component.prototype.cal3 = function (val) {
        this.val3 = val;
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal1Component.prototype.cal = function () {
        this.result1 = this.val1 - (this.val1 / (1 + this.val3 / 100));
        this.result2 = this.val1 / (1 + this.val3 / 100) / this.val2;
    };
    Cal1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-cal-1',
            template: __webpack_require__(820),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [])
    ], Cal1Component);
    return Cal1Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/cal-1.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cal2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Cal2Component = (function () {
    function Cal2Component() {
    }
    Cal2Component.prototype.ngOnInit = function () {
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal2Component.prototype.cal1 = function (val) {
        this.val1 = val;
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal2Component.prototype.cal2 = function (val) {
        this.val2 = val;
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal2Component.prototype.cal3 = function (val) {
        this.val3 = val;
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal2Component.prototype.cal = function () {
        this.result1 = this.val1 * this.val2 * this.val3 / 100;
        this.result2 = this.val1 * this.val2 - this.result1;
    };
    Cal2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-cal-2',
            template: __webpack_require__(821),
            styles: [__webpack_require__(768)]
        }), 
        __metadata('design:paramtypes', [])
    ], Cal2Component);
    return Cal2Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/cal-2.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cal3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Cal3Component = (function () {
    function Cal3Component() {
    }
    Cal3Component.prototype.ngOnInit = function () {
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal3Component.prototype.cal1 = function (val) {
        this.val1 = val;
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal3Component.prototype.cal2 = function (val) {
        this.val2 = val;
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal3Component.prototype.cal3 = function (val) {
        this.val3 = val;
        this.result1 = 0;
        this.result2 = 0;
    };
    Cal3Component.prototype.cal = function () {
        this.result1 = (this.val2 - this.val1) / 365;
        this.result2 = (this.val2 - this.val1) / this.val3;
    };
    Cal3Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-cal-3',
            template: __webpack_require__(822),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [])
    ], Cal3Component);
    return Cal3Component;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/cal-3.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tool_tool_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cal_1_cal_1_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cal_2_cal_2_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cal_3_cal_3_component__ = __webpack_require__(561);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var appRoutes = [
    { path: 'tool', component: __WEBPACK_IMPORTED_MODULE_2__tool_tool_component__["a" /* ToolComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__cal_1_cal_1_component__["a" /* Cal1Component */] },
            { path: 'cal-1', component: __WEBPACK_IMPORTED_MODULE_4__cal_1_cal_1_component__["a" /* Cal1Component */] },
            { path: 'cal-2', component: __WEBPACK_IMPORTED_MODULE_5__cal_2_cal_2_component__["a" /* Cal2Component */] },
            { path: 'cal-3', component: __WEBPACK_IMPORTED_MODULE_6__cal_3_cal_3_component__["a" /* Cal3Component */] },
        ] }
];
var ToolModule = (function () {
    function ToolModule() {
    }
    ToolModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tool_tool_component__["a" /* ToolComponent */], __WEBPACK_IMPORTED_MODULE_4__cal_1_cal_1_component__["a" /* Cal1Component */], __WEBPACK_IMPORTED_MODULE_5__cal_2_cal_2_component__["a" /* Cal2Component */], __WEBPACK_IMPORTED_MODULE_6__cal_3_cal_3_component__["a" /* Cal3Component */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolModule);
    return ToolModule;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/tool.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolComponent = (function () {
    function ToolComponent() {
    }
    ToolComponent.prototype.ngOnInit = function () {
    };
    ToolComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-tool',
            template: __webpack_require__(823),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolComponent);
    return ToolComponent;
}());
//# sourceMappingURL=E:/CitiPreciouskyFight/src/tool.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/CitiPreciouskyFight/src/environment.js.map

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "\r\n.navbar-inverse .navbar-nav > li > a {\r\n  color: #d7d7d7;\r\n  height: 80px;\r\n  padding-top: 28px;\r\n}\r\n\r\n.opacity8 {\r\n  /*opacity: 0.8;*/\r\n}\r\nfooter a, footer a:focus, footer a:visited, footer a:hover{\r\n  color: #FFF;\r\n  margin-left: 55px;\r\n  font-size: large;\r\n}\r\n.footerdiv{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.navbar-fixed-top {\r\n  top: 0;\r\n  border-width: 0 0 1px;\r\n  font-weight: 600;\r\n}\r\n\r\n.modal-body {\r\n  height: 220px;\r\n}\r\n\r\n.case {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.case img {\r\n  width: inherit;\r\n}\r\n\r\n.product {\r\n  height: 300px;\r\n  width: 400px;\r\n}\r\n\r\n.screenshot .item {\r\n  border-top: 1px solid #CCC;\r\n  padding-bottom: 30px;\r\n  padding-top: 20px;\r\n}\r\n.para{\r\n  margin: 30px;\r\n}\r\n\r\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "\r\n.row{\r\n  background-color: rgba(196, 166, 245, 0.17);\r\n  height: auto\r\n}\r\n.rightList{\r\n  padding: 0px;\r\n  width: 190px;\r\n  height: inherit;\r\n  box-shadow: 3px 0px 10px #888888;\r\n}\r\n.title{\r\n  text-shadow: 1px 0px 1px;\r\n  height: 60px;\r\n  color: black;\r\n  background-color: transparent;\r\n  text-align: center;\r\n  padding-top: 18px;\r\n  font-size: large;\r\n  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;\r\n}\r\n.SubTitle{\r\n  text-align: center;\r\n  background-color:  transparent;\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n  border-left-color: rgba(44, 105, 255, 0.42);\r\n  border-left-width: 4px;;\r\n  border-left-style: solid;\r\n}\r\n.SubTitle:hover{\r\n  box-sizing: border-box;\r\n  border-right-color: #2c69ff;\r\n  border-right-width: 3px;\r\n  border-right-style: solid;\r\n  border-left-width: 0px;\r\n}\r\nli a{\r\n  font-size: medium;\r\n  font-weight: bolder;\r\n  /*text-shadow: 1px 0px 2px;*/\r\n}\r\n\r\n\r\nbody {\r\n  font-size: 11px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #4A4A4A ;\r\n  text-align: center;\r\n  background: url(data:;base64,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);\r\n}\r\n\r\n.titles{\r\n  background: -webkit-gradient(linear, 100% 100%, 10% 10%, from(rgba(196, 166, 245, 0.32)), to(#f3f3f3), color-stop(.1,#fff));\r\n  -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);\r\n  -webkit-border-bottom-right-radius: 60px 5px;\r\n  padding-right: 2px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "a {\r\n  background: #fff;\r\n  display: block;\r\n  padding:20px;\r\n  margin: 6px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\nh4{\r\n  text-align: left;\r\n}\r\np{\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "a {\r\n  background: #fff;\r\n  display: block;\r\n  padding:20px;\r\n  margin: 6px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\nh4{\r\n  text-align: left;\r\n}\r\np{\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = ".shell{\r\n  margin:50px;\r\n  font-size: x-large;\r\n  font-weight: 900;\r\n  opacity: 0.8;\r\n  box-shadow: 2px 1px 2px;\r\n}\r\nh3{\r\n  font-size: x-large;\r\n  text-shadow: 1px 1px 1px;\r\n}\r\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "img{\r\n  margin:60px;\r\n}\r\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = " button{\r\n  float: right;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  background: #00b4ef;\r\n  border-radius: 30px;\r\n  padding: 10px 25px;\r\n  border: none;\r\n  text-transform: capitalize;\r\n  transition: all 0.5s ease 0s;\r\n   margin:20px;\r\n}\r\n .mytitle{\r\n   background-image: url(\"../../../assets/img/home_img/title3.png\");\r\n   background-repeat: no-repeat;\r\n   height: 60px;\r\n   text-align: left;\r\n   padding-left: 90px;\r\n   padding-top: 1px;\r\n   font-size: x-large;\r\n   font-weight: bolder;\r\n   text-shadow: 1px 0px 2px #888888;\r\n   margin: 15px;\r\n   margin-top: 30px;\r\n   margin-bottom: 15px;\r\n }\r\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "a {\r\n  background: #fff;\r\n  display: block;\r\n  padding:20px;\r\n  margin: 6px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\nh4{\r\n  text-align: left;\r\n}\r\np{\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "\r\n.row{\r\n  background-color: rgba(196, 166, 245, 0.17);\r\n  height: auto\r\n}\r\n.rightList{\r\n  padding: 0px;\r\n  width: 190px;\r\n  height: inherit;\r\n  box-shadow: 3px 0px 10px #888888;\r\n}\r\n.title{\r\n  text-shadow: 1px 0px 1px;\r\n  height: 60px;\r\n  color: black;\r\n  background-color: transparent;\r\n  text-align: center;\r\n  padding-top: 18px;\r\n  font-size: large;\r\n  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;\r\n}\r\n.SubTitle{\r\n  text-align: center;\r\n  background-color:  transparent;\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n  border-left-color: rgba(44, 105, 255, 0.42);\r\n  border-left-width: 4px;;\r\n  border-left-style: solid;\r\n}\r\n.SubTitle:hover{\r\n  box-sizing: border-box;\r\n  border-right-color: #2c69ff;\r\n  border-right-width: 3px;\r\n  border-right-style: solid;\r\n  border-left-width: 0px;\r\n}\r\nli a{\r\n  font-size: medium;\r\n  font-weight: bolder;\r\n  /*text-shadow: 1px 0px 2px;*/\r\n}\r\n\r\n\r\nbody {\r\n  font-size: 11px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #4A4A4A ;\r\n  text-align: center;\r\n  background: url(data:;base64,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);\r\n}\r\n\r\n.titles{\r\n  background: -webkit-gradient(linear, 100% 100%, 10% 10%, from(rgba(196, 166, 245, 0.32)), to(#f3f3f3), color-stop(.1,#fff));\r\n  -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);\r\n  -webkit-border-bottom-right-radius: 60px 5px;\r\n  padding-right: 2px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = ".masterShow{\r\n  margin-top: 10px;\r\n}\r\n.list-group{\r\n}\r\nimg{\r\n  height: 50px;\r\n}\r\n.list-group a {\r\n  background-color: #FFFFFF;\r\n  margin: 6px;\r\n  margin-left: 1px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n  text-align: left;\r\n  font-weight: 300;\r\n  font-size: larger;\r\n}\r\nli a {\r\n  margin: 6px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  margin-bottom: 0px;\r\n  box-shadow:  2px 2px 4px #777;\r\n  border: solid;\r\n  border-color: #ffffff;\r\n  border-width: 1px;\r\n  border-bottom-width: 0;\r\n  font-size: large;\r\n  font-weight: 700;\r\n}\r\n.dropdown-menu li a {\r\n  margin: 0px;\r\n  box-shadow:  0px 0px 0px;\r\n  font-weight: lighter;\r\n}\r\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = ".row{\r\n  background-color: rgba(196, 166, 245, 0.17);\r\n  height: auto\r\n}\r\n.rightList{\r\n  padding: 0px;\r\n  width: 190px;\r\n  height: inherit;\r\n  box-shadow: 3px 0px 10px #888888;\r\n}\r\n.title{\r\n  text-shadow: 1px 0px 1px;\r\n  height: 60px;\r\n  color: black;\r\n  background-color: transparent;\r\n  text-align: center;\r\n  padding-top: 18px;\r\n  font-size: large;\r\n  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;\r\n}\r\n.SubTitle{\r\n  text-align: center;\r\n  background-color:  transparent;\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n  border-left-color: rgba(44, 105, 255, 0.42);\r\n  border-left-width: 4px;;\r\n  border-left-style: solid;\r\n}\r\n.SubTitle:hover{\r\n  box-sizing: border-box;\r\n  border-right-color: #2c69ff;\r\n  border-right-width: 3px;\r\n  border-right-style: solid;\r\n  border-left-width: 0px;\r\n}\r\nli a{\r\n  font-size: medium;\r\n  font-weight: bolder;\r\n  /*text-shadow: 1px 0px 2px;*/\r\n}\r\n\r\n\r\nbody {\r\n  font-size: 11px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #4A4A4A ;\r\n  text-align: center;\r\n  background: url(data:;base64,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);\r\n}\r\n\r\n.titles{\r\n  background: -webkit-gradient(linear, 100% 100%, 10% 10%, from(rgba(196, 166, 245, 0.32)), to(#f3f3f3), color-stop(.1,#fff));\r\n  -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);\r\n  -webkit-border-bottom-right-radius: 60px 5px;\r\n  padding-right: 2px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = ".wrap {\r\n  background: #fff;\r\n  margin: 20px auto;\r\n  display: block;\r\n  width: 300px;\r\n  height: auto;\r\n  padding:20px;\r\n  margin: 20px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 1px 4px\r\n  rgba(0, 0, 0, 0.3), 0 0 40px\r\n  rgba(0, 0, 0, 0.1) inset;\r\n}\r\n\r\n.wrap img {\r\n  width: 100%;\r\n  margin-top: 15px;\r\n}\r\n\r\np{\r\n  margin-top: 15px;\r\n  text-align: justify;\r\n}\r\n\r\nh1{\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin-top: 5px;\r\n  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color: #4A4A4A !important;\r\n}\r\n\r\na:hover{\r\n  text-decoration: underline;\r\n  color: #6B6B6B !important ;\r\n}\r\n\r\n.titles{\r\n  background: -webkit-gradient(linear, 100% 100%, 50% 10%, from(rgba(196, 166, 245, 0.32)), to(#f3f3f3), color-stop(.1,#fff));\r\n  -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);\r\n  -webkit-border-bottom-right-radius: 60px 5px;\r\n  padding-right: 2px;\r\n  padding-bottom: 25px;\r\n}\r\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "/*tr {*/\r\n/*background: #fff;*/\r\n/*display: block;*/\r\n/*margin: 6px;*/\r\n/*border-radius: 2px 2px 2px 2px;*/\r\n/*-webkit-box-shadow: 0 10px 6px -6px #777;*/\r\n/*-moz-box-shadow: 0 10px 6px -6px #777;*/\r\n/*box-shadow: 0 10px 6px -6px #777;*/\r\n/*}*/\r\ntr td{\r\n  text-align: center;\r\n}\r\ntr th{\r\n  text-align: center;\r\n}\r\n.myline{\r\n  background: #fff;\r\n  margin: 6px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = ".wrap {\r\n  background: #fff;\r\n  margin: 20px auto;\r\n  display: block;\r\n  width: 300px;\r\n  height: auto;\r\n  padding:20px;\r\n  margin: 20px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 1px 4px\r\n  rgba(0, 0, 0, 0.3), 0 0 40px\r\n  rgba(0, 0, 0, 0.1) inset;\r\n}\r\n\r\n.wrap img {\r\n  width: 100%;\r\n  margin-top: 15px;\r\n}\r\n\r\np{\r\n  margin-top: 15px;\r\n  text-align: justify;\r\n}\r\n\r\nh1{\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin-top: 5px;\r\n  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color: #4A4A4A !important;\r\n}\r\n\r\na:hover{\r\n  text-decoration: underline;\r\n  color: #6B6B6B !important ;\r\n}\r\n\r\n.titles{\r\n  background: -webkit-gradient(linear, 100% 100%, 50% 10%, from(rgba(196, 166, 245, 0.32)), to(#f3f3f3), color-stop(.1,#fff));\r\n  -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);\r\n  -webkit-border-bottom-right-radius: 60px 5px;\r\n  padding-right: 2px;\r\n  padding-bottom: 25px;\r\n}\r\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "\r\n.title{\r\n  background-image: url(\"../../../assets/img/home_img/title3.png\");\r\n  background-repeat: no-repeat;\r\n  height: 60px;\r\n  text-align: left;\r\n  padding-left: 90px;\r\n  padding-top: 1px;\r\n  font-size: x-large;\r\n  font-weight: bolder;\r\n  text-shadow: 1px 0px 2px #888888;\r\n  margin: 15px;\r\n  margin-top: 30px;\r\n  margin-bottom: 0px;\r\n}\r\n.featureDiv{\r\n  padding: 10px;\r\n}\r\n.rowElement{\r\n  padding: 0px;\r\n  text-align: center;\r\n}\r\n.rowElementtextli{\r\n  /*border-left-width: 1px;*/\r\n  /*border-bottom-width: 2px;*/\r\n  /*border-top-width: 1px;*/\r\n  /*border-left-style:solid;*/\r\n  /*border-bottom-style:solid;*/\r\n  /*border-top-style:solid;*/\r\n  /*border-bottom-color: #28a4c9;*/\r\n  /*border-left-color: #1e6c87;*/\r\n  /*border-top-color: #ffffff;*/\r\n  box-shadow: 1px 1px 2px #000000;\r\n  padding:3px;\r\n  margin-top: 10px;\r\n  border-radius: 5px;\r\n\r\n}\r\nli h4 {\r\n  margin: 5px;\r\n  width: 150px;\r\n}\r\nli p{\r\n  margin: 5px;\r\n  width: 150px;\r\n}\r\nli img{\r\n  height: 100px;\r\n}\r\n.todetail{\r\n  font-size: larger;\r\n  font-weight: 700;\r\n}\r\n.row{\r\n  margin: 10px;\r\n}\r\n.box9{\r\n  margin: 30px;\r\n  width: 300px;\r\n  min-height: 310px;\r\n  padding: 10px;\r\n  position:relative;\r\n  border: 1px solid rgba(0,0,0,0.1);\r\n  border-radius:20px;\r\n  background: white;\r\n  -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.box9:before{\r\n  content: '';\r\n  width: 110%;\r\n  left: 0;\r\n  height: 111%;\r\n  z-index:-1;\r\n  position:absolute;\r\n  border-radius:20px;\r\n  border: 1px solid rgba(0,0,0, 0.1);\r\n  background: rgba(0, 0, 0, 0.0);\r\n  -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\r\n  -webkit-transform:     translate(-5%,-5%);\r\n}\r\n\r\n.box9:after{\r\n  content: '';\r\n  position:absolute;\r\n  top:-25px; left: 30%;\r\n  width: 130px;\r\n  height: 40px;\r\n  background: -webkit-gradient(linear, 555% 20%, 0% 92%, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.0)), color-stop(.1,rgba(0, 0, 0, 0.2)));\r\n  border-left: 1px dashed rgba(0, 0, 0, 0.1);\r\n  border-right: 1px dashed rgba(0, 0, 0, 0.1);\r\n  -webkit-box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.box9 img {\r\n  width: 100%;\r\n  margin-top: 15px;\r\n}\r\n\r\np{\r\n  margin-top: 15px;\r\n  text-align: justify;\r\n}\r\n\r\nh1{\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin-top: 5px;\r\n  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color: #4A4A4A !important;\r\n}\r\n\r\na:hover{\r\n  text-decoration: underline;\r\n  color: #6B6B6B !important ;\r\n}\r\n\r\n.steps{\r\n  height: 130px;\r\n  width:120px;\r\n  background-image: url(\"../../../assets/img/home_img/square.png\");\r\n  padding-top: 47px;\r\n  text-shadow: 1px 1px 1px rgba(90, 81, 81, 0.78);\r\n  font-weight: 600;\r\n  font-size: large;\r\n}\r\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = ".wrap {\r\n  background: #fff;\r\n  margin: 5px;\r\n  display: block;\r\n  padding:20px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 1px 4px\r\n  rgba(0, 0, 0, 0.3), 0 0 40px\r\n  rgba(0, 0, 0, 0.1) inset;\r\n}\r\na.list-group-item {\r\n  background: #fff;\r\n  display: block;\r\n  padding:20px;\r\n  margin: 6px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\nh4{\r\n  text-align: left;\r\n}\r\np{\r\n  text-align: left;\r\n}\r\n.left{\r\n  height:80px;\r\n  border-left-width: 2px;\r\n  border-style: solid;\r\n  border-color: #28a4c9;\r\n}\r\n.right{\r\n  height:80px;\r\n  border-right-width: 2px;\r\n  border-style: solid;\r\n  border-color: #28a4c9;\r\n}\r\n.lr{\r\n  height:80px;\r\n  border-left-width: 2px;\r\n  border-style: solid;\r\n  border-color: #28a4c9;\r\n  border-right-width: 2px\r\n}\r\n.mytext{\r\n  font-size: larger;\r\n  font-weight: 500;\r\n  text-shadow: 1px 1px 1px #888888;\r\n\r\n}\r\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = ".row{\r\n  background-color: rgba(196, 166, 245, 0.17);\r\n  height: auto\r\n}\r\n.rightList{\r\n  padding: 0px;\r\n  width: 190px;\r\n  height: inherit;\r\n  box-shadow: 3px 0px 10px #888888;\r\n}\r\n.title{\r\n  text-shadow: 1px 0px 1px;\r\n  height: 60px;\r\n  color: black;\r\n  background-color: transparent;\r\n  text-align: center;\r\n  padding-top: 18px;\r\n  font-size: large;\r\n  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;\r\n}\r\n.SubTitle{\r\n  text-align: center;\r\n  background-color:  transparent;\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n  border-left-color: rgba(44, 105, 255, 0.42);\r\n  border-left-width: 7px;\r\n  border-left-style: solid;\r\n}\r\n.smaller:hover{\r\n  box-sizing: border-box;\r\n  border-right-color: #2c69ff;\r\n  border-right-width: 3px;\r\n  border-right-style: solid;\r\n  border-left-width: 0;\r\n}\r\nli a{\r\n  font-size: medium;\r\n  font-weight: bolder;\r\n  /*text-shadow: 1px 0px 2px;*/\r\n}\r\n\r\n\r\nbody {\r\n  font-size: 11px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #4A4A4A ;\r\n  text-align: center;\r\n  background: url(data:;base64,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);\r\n}\r\n\r\n.titles{\r\n  background: -webkit-gradient(linear, 100% 100%, 10% 10%, from(rgba(196, 166, 245, 0.32)), to(#f3f3f3), color-stop(.1,#fff));\r\n  -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);\r\n  -webkit-border-bottom-right-radius: 60px 5px;\r\n  padding-right: 2px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.smaller a{\r\n  padding:6.3px;\r\n  font-size:14px;\r\n  padding-left: 20px;\r\n}\r\n.smaller{\r\n  border-left-width: 4px;\r\n}\r\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ".wrap {\r\n  background: #fff;\r\n  margin: 30px;\r\n  display: block;\r\n  padding:20px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 1px 4px\r\n  rgba(0, 0, 0, 0.3), 0 0 40px\r\n  rgba(0, 0, 0, 0.1) inset;\r\n}\r\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = ".mainbody {\r\n  background: #fff;\r\n  padding:40px;\r\n  margin: 50px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = ".wrap {\r\n  background: #fff;\r\n  margin: 30px;\r\n  display: block;\r\n  padding:20px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 1px 4px\r\n  rgba(0, 0, 0, 0.3), 0 0 40px\r\n  rgba(0, 0, 0, 0.1) inset;\r\n}\r\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "a {\r\n  background: #fff;\r\n  display: block;\r\n  padding:20px;\r\n  margin: 6px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\nh4{\r\n  text-align: left;\r\n}\r\np{\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = ".row{\r\n  background-color: rgba(196, 166, 245, 0.17);\r\n  height: auto\r\n}\r\n.rightList{\r\n  padding: 0px;\r\n  width: 190px;\r\n  height: inherit;\r\n  box-shadow: 3px 0px 10px #888888;\r\n}\r\n.title{\r\n  text-shadow: 1px 0px 1px;\r\n  height: 60px;\r\n  color: black;\r\n  background-color: transparent;\r\n  text-align: center;\r\n  padding-top: 18px;\r\n  font-size: large;\r\n  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;\r\n}\r\n.SubTitle{\r\n  text-align: center;\r\n  background-color:  transparent;\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n  border-left-color: rgba(44, 105, 255, 0.42);\r\n  border-left-width: 4px;;\r\n  border-left-style: solid;\r\n}\r\n.SubTitle:hover{\r\n  box-sizing: border-box;\r\n  border-right-color: #2c69ff;\r\n  border-right-width: 3px;\r\n  border-right-style: solid;\r\n  border-left-width: 0px;\r\n}\r\nli a{\r\n  font-size: medium;\r\n  font-weight: bolder;\r\n  /*text-shadow: 1px 0px 2px;*/\r\n}\r\n\r\n\r\nbody {\r\n  font-size: 11px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #4A4A4A ;\r\n  text-align: center;\r\n  background: url(data:;base64,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);\r\n}\r\n\r\n.titles{\r\n  background: -webkit-gradient(linear, 100% 100%, 10% 10%, from(rgba(196, 166, 245, 0.32)), to(#f3f3f3), color-stop(.1,#fff));\r\n  -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);\r\n  -webkit-border-bottom-right-radius: 60px 5px;\r\n  padding-right: 2px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "a {\r\n  background: #fff;\r\n  display: block;\r\n  padding:20px;\r\n  margin: 6px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\nh4{\r\n  text-align: left;\r\n}\r\np{\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n\r\n"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  /*text-indent:2em;*/\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n\r\ntable{\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  margin-left: 60px;\r\n  margin-right: 60px;\r\n  border-collapse:collapse;\r\n}\r\ntd{\r\n  border:1px;\r\n  border-style: solid;\r\n}\r\n"

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n\r\ntable{\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  margin-left: 60px;\r\n  margin-right: 60px;\r\n  border-collapse:collapse;\r\n}\r\ntd{\r\n  border:1px;\r\n  border-style: solid;\r\n}\r\n"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "p{\r\n  padding:5px;\r\n  font-size: medium;\r\n  margin: 5px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n  text-align: left;\r\n  text-indent:2em;\r\n}\r\n.sub{\r\n  text-align: right;\r\n  margin-right: 60px;\r\n  font-weight:100;\r\n}\r\n.text{\r\n  margin-bottom:50px;\r\n}\r\n"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "a {\r\n  background: #fff;\r\n  display: block;\r\n  padding:20px;\r\n  margin: 6px;\r\n  border-radius: 2px 2px 2px 2px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\nh4{\r\n  text-align: left;\r\n}\r\np{\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = ".form-bg{\r\n  background: #00b4ef;\r\n}\r\n.form-horizontal{\r\n  background: #fff;\r\n  padding-bottom: 40px;\r\n  border-radius: 15px;\r\n  text-align: center;\r\n}\r\n.form-horizontal .heading{\r\n  display: block;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  padding: 35px 0;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  margin-bottom: 30px;\r\n}\r\n.form-horizontal .form-group{\r\n  padding: 0 40px;\r\n  margin: 0 0 25px 0;\r\n  position: relative;\r\n}\r\n.form-horizontal .form-control{\r\n  background: #f0f0f0;\r\n  border: none;\r\n  border-radius: 20px;\r\n  box-shadow: none;\r\n  padding: 0 20px 0 45px;\r\n  height: 40px;\r\n  transition: all 0.3s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus{\r\n  background: #e0e0e0;\r\n  box-shadow: none;\r\n  outline: 0 none;\r\n}\r\n.form-horizontal .form-group i{\r\n  position: absolute;\r\n  top: 12px;\r\n  left: 60px;\r\n  font-size: 17px;\r\n  color: #c8c8c8;\r\n  transition : all 0.5s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus + i{\r\n  color: #00b4ef;\r\n}\r\n.form-horizontal .fa-question-circle{\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 12px;\r\n  right: 60px;\r\n  font-size: 20px;\r\n  color: #808080;\r\n  transition: all 0.5s ease 0s;\r\n}\r\n.form-horizontal .fa-question-circle:hover{\r\n  color: #000;\r\n}\r\n.form-horizontal .main-checkbox{\r\n  float: left;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: #11a3fc;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  margin: 5px 0 0 5px;\r\n  border: 1px solid #11a3fc;\r\n}\r\n.form-horizontal .main-checkbox label{\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  cursor: pointer;\r\n}\r\n.form-horizontal .main-checkbox label:after{\r\n  content: \"\";\r\n  width: 10px;\r\n  height: 5px;\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 4px;\r\n  border: 3px solid #fff;\r\n  border-top: none;\r\n  border-right: none;\r\n  background: transparent;\r\n  opacity: 0;\r\n  -webkit-transform: rotate(-45deg);\r\n  transform: rotate(-45deg);\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]{\r\n  visibility: hidden;\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{\r\n  opacity: 1;\r\n}\r\n.form-horizontal .text{\r\n  float: left;\r\n  margin-left: 7px;\r\n  line-height: 20px;\r\n  padding-top: 5px;\r\n  text-transform: capitalize;\r\n}\r\n.form-horizontal .btn{\r\n  float: right;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  background: #00b4ef;\r\n  border-radius: 30px;\r\n  padding: 10px 25px;\r\n  border: none;\r\n  text-transform: capitalize;\r\n  transition: all 0.5s ease 0s;\r\n}\r\n"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "\r\n.form-horizontal{\r\n  background: #fff;\r\n  padding-bottom: 40px;\r\n  border-radius: 15px;\r\n  text-align: center;\r\n}\r\n.form-horizontal .heading{\r\n  display: block;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  padding: 35px 0;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  margin-bottom: 30px;\r\n}\r\n.form-horizontal .form-group{\r\n  padding: 0 40px;\r\n  margin: 0 0 25px 0;\r\n  position: relative;\r\n}\r\n.form-horizontal .form-control{\r\n  background: #f0f0f0;\r\n  border: none;\r\n  border-radius: 20px;\r\n  box-shadow: none;\r\n  padding: 0 20px 0 45px;\r\n  height: 40px;\r\n  transition: all 0.3s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus{\r\n  background: #e0e0e0;\r\n  box-shadow: none;\r\n  outline: 0 none;\r\n}\r\n.form-horizontal .form-group i{\r\n  position: absolute;\r\n  top: 12px;\r\n  left: 60px;\r\n  font-size: 17px;\r\n  color: #c8c8c8;\r\n  transition : all 0.5s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus + i{\r\n  color: #00b4ef;\r\n}\r\n.form-horizontal .btn{\r\n  float: right;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  background: #00b4ef;\r\n  border-radius: 30px;\r\n  padding: 10px 25px;\r\n  border: none;\r\n  text-transform: capitalize;\r\n  transition: all 0.5s ease 0s;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = ".form-bg{\r\n  background: #00b4ef;\r\n}\r\n.form-horizontal{\r\n  background: #fff;\r\n  padding-bottom: 40px;\r\n  border-radius: 15px;\r\n  text-align: center;\r\n}\r\n.form-horizontal .heading{\r\n  display: block;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  padding: 35px 0;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  margin-bottom: 30px;\r\n}\r\n.form-horizontal .form-group{\r\n  padding: 0 40px;\r\n  margin: 0 0 25px 0;\r\n  position: relative;\r\n}\r\n.form-horizontal .form-control{\r\n  background: #f0f0f0;\r\n  border: none;\r\n  border-radius: 20px;\r\n  box-shadow: none;\r\n  padding: 0 20px 0 45px;\r\n  height: 40px;\r\n  transition: all 0.3s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus{\r\n  background: #e0e0e0;\r\n  box-shadow: none;\r\n  outline: 0 none;\r\n}\r\n.form-horizontal .form-group i{\r\n  position: absolute;\r\n  top: 12px;\r\n  left: 60px;\r\n  font-size: 17px;\r\n  color: #c8c8c8;\r\n  transition : all 0.5s ease 0s;\r\n}\r\n.form-horizontal .form-control:focus + i{\r\n  color: #00b4ef;\r\n}\r\n.form-horizontal .fa-question-circle{\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 12px;\r\n  right: 60px;\r\n  font-size: 20px;\r\n  color: #808080;\r\n  transition: all 0.5s ease 0s;\r\n}\r\n.form-horizontal .fa-question-circle:hover{\r\n  color: #000;\r\n}\r\n.form-horizontal .main-checkbox{\r\n  float: left;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: #11a3fc;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  margin: 5px 0 0 5px;\r\n  border: 1px solid #11a3fc;\r\n}\r\n.form-horizontal .main-checkbox label{\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  cursor: pointer;\r\n}\r\n.form-horizontal .main-checkbox label:after{\r\n  content: \"\";\r\n  width: 10px;\r\n  height: 5px;\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 4px;\r\n  border: 3px solid #fff;\r\n  border-top: none;\r\n  border-right: none;\r\n  background: transparent;\r\n  opacity: 0;\r\n  -webkit-transform: rotate(-45deg);\r\n  transform: rotate(-45deg);\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]{\r\n  visibility: hidden;\r\n}\r\n.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{\r\n  opacity: 1;\r\n}\r\n.form-horizontal .text{\r\n  float: left;\r\n  margin-left: 7px;\r\n  line-height: 20px;\r\n  padding-top: 5px;\r\n  text-transform: capitalize;\r\n}\r\n.form-horizontal .btn{\r\n  float: right;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  background: #00b4ef;\r\n  border-radius: 30px;\r\n  padding: 10px 25px;\r\n  border: none;\r\n  text-transform: capitalize;\r\n  transition: all 0.5s ease 0s;\r\n}\r\n"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = ".title{\r\n  background-image: url(\"../../../assets/img/home_img/title3.png\");\r\n  background-repeat: no-repeat;\r\n  height: 60px;\r\n  text-align: left;\r\n  padding-left: 80px;\r\n  padding-top: 1px;\r\n  font-size: larger;\r\n  font-weight: bolder;\r\n  text-shadow: 1px 0px 2px #888888;\r\n  margin: 15px;\r\n  margin-bottom:0px;\r\n}\r\n.myinput{\r\n  width: 300px;\r\n  margin-left: 100px;\r\n}\r\n.result{\r\n  margin-left: 100px;\r\n  font-size: large;\r\n  font-weight: 500;\r\n  text-align: left;\r\n  padding-bottom: 10px;\r\n  text-shadow: 1px 1px 1px;\r\n}\r\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = ".title{\r\n  background-image: url(\"../../../assets/img/home_img/title3.png\");\r\n  background-repeat: no-repeat;\r\n  height: 60px;\r\n  text-align: left;\r\n  padding-left: 80px;\r\n  padding-top: 1px;\r\n  font-size: larger;\r\n  font-weight: bolder;\r\n  text-shadow: 1px 0px 2px #888888;\r\n  margin: 15px;\r\n  margin-bottom:0px;\r\n}\r\n.myinput{\r\n  width: 300px;\r\n  margin-left: 100px;\r\n}\r\n.result{\r\n  margin-left: 100px;\r\n  font-size: large;\r\n  font-weight: 500;\r\n  text-align: left;\r\n  padding-bottom: 10px;\r\n  text-shadow: 1px 1px 1px;\r\n}\r\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = ".title{\r\n  background-image: url(\"../../../assets/img/home_img/title3.png\");\r\n  background-repeat: no-repeat;\r\n  height: 60px;\r\n  text-align: left;\r\n  padding-left: 80px;\r\n  padding-top: 1px;\r\n  font-size: larger;\r\n  font-weight: bolder;\r\n  text-shadow: 1px 0px 2px #888888;\r\n  margin: 15px;\r\n  margin-bottom:0px;\r\n}\r\n.myinput{\r\n  width: 300px;\r\n  margin-left: 100px;\r\n}\r\n.result{\r\n  margin-left: 100px;\r\n  font-size: large;\r\n  font-weight: 500;\r\n  text-align: left;\r\n  padding-bottom: 10px;\r\n  text-shadow: 1px 1px 1px;\r\n}\r\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = ".row{\r\n  background-color: rgba(196, 166, 245, 0.17);\r\n  height: auto\r\n}\r\n.rightList{\r\n  padding: 0px;\r\n  width: 190px;\r\n  height: inherit;\r\n  box-shadow: 3px 0px 10px #888888;\r\n}\r\n.title{\r\n  text-shadow: 1px 0px 1px;\r\n  height: 60px;\r\n  color: black;\r\n  background-color: transparent;\r\n  text-align: center;\r\n  padding-top: 18px;\r\n  font-size: large;\r\n  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;\r\n}\r\n.SubTitle{\r\n  text-align: center;\r\n  background-color:  transparent;\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n  border-left-color: rgba(44, 105, 255, 0.42);\r\n  border-left-width: 4px;;\r\n  border-left-style: solid;\r\n}\r\n.SubTitle:hover{\r\n  box-sizing: border-box;\r\n  border-right-color: #2c69ff;\r\n  border-right-width: 3px;\r\n  border-right-style: solid;\r\n  border-left-width: 0px;\r\n}\r\nli a{\r\n  font-size: medium;\r\n  font-weight: bolder;\r\n  /*text-shadow: 1px 0px 2px;*/\r\n}\r\n\r\n\r\nbody {\r\n  font-size: 11px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #4A4A4A ;\r\n  text-align: center;\r\n  background: url(data:;base64,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);\r\n}\r\n\r\n.titles{\r\n  background: -webkit-gradient(linear, 100% 100%, 10% 10%, from(rgba(196, 166, 245, 0.32)), to(#f3f3f3), color-stop(.1,#fff));\r\n  -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);\r\n  -webkit-border-bottom-right-radius: 60px 5px;\r\n  padding-right: 2px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top opacity8\">\n  <div class=\"container\">\n    <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#responsive-navbar\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a routerLink=\"home\">\n      <img src=\"assets/img/index_img/CitiIcon.png\" style=\"float: left;height: 80px; margin-right: 20px\">\n    </a>\n    <div class=\"collapse navbar-collapse\" id=\"responsive-navbar\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown\" data-toggle=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n             aria-expanded=\"false\" routerLink=\"/home\">\n            LV首页<span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">优秀产品</a></li>\n            <li><a href=\"#\">荣誉</a></li>\n            <li><a href=\"#\">合作伙伴</a></li>\n            <li><a href=\"#\">设备流程</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\" data-toggle=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n             aria-expanded=\"false\" routerLink=\"/fund\">\n            FOF基金产品 <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">推荐产品</a></li>\n            <li><a href=\"#\">LV绿产基金产品</a></li>\n            <li><a href=\"#\">即将上线</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\" data-toggle=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n             aria-expanded=\"false\" routerLink=\"/information\">\n            资讯<span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/information\" routerLinkActive=\"active\">FOF今日头条</a></li>\n            <li><a href=\"#\">FOF研报</a></li>\n            <li><a href=\"#\">PPP动态</a></li>\n            <li><a href=\"#\">绿产基金发展</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\" data-toggle=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n             aria-expanded=\"false\" routerLink=\"/course\">\n            绿投基地<span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">绿投走向</a></li>\n            <li><a href=\"#\">风险教育</a></li>\n            <li><a href=\"#\">法律法规</a></li>\n            <li><a href=\"#\">投资者维权</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\" data-toggle=\"dropdown\">\n          <a href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" routerLink=\"/tool\">\n            基金工具\n          </a>\n        </li>\n        <li class=\"dropdown\" data-toggle=\"dropdown\">\n          <a href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" routerLink=\"/forum\">\n            论坛\n          </a>\n\n        </li>\n      </ul>\n\n      <div class=\"profile navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li>\n            <a data-toggle=\"modal\" data-target=\"#login-modal\">用户登录</a>\n          </li>\n        </ul>\n        <form class=\"navbar-form navbar-left form-horizontal\" style=\"margin-top: 21px;\">\n          <input placeholder=\"搜索…\" class=\"form-control\" type=\"text\">\n          <button class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-search\"></span>\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<div id=\"login-modal\" class=\"modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          &times;\n        </button>\n        <h1 class=\"text-center text-primary\">登录</h1>\n      </div>\n      <div class=\"modal-body\" style=\"height: 210px\">\n        <form action=\"\" class=\"form col-md-12 center-block\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control input-lg\" placeholder=\"电子邮件\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control input-lg\" placeholder=\"登录密码\">\n          </div>\n          <div class=\"form-group\">\n            <button data-dismiss=\"modal\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"login()\">立刻登录</button>\n            <!--<span><a href=\"#\">找回密码</a></span>-->\n            <span><a data-dismiss=\"modal\" routerLink=\"/enroll\" class=\"pull-right\" style=\"font-size: medium\">没有账号？马上注册~</a></span>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div>\n<footer style=\"background-color: #717171\">\n  <div class=\"container\" style=\"padding-bottom: 100px;padding-top: 50px\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-2 footerdiv\">\n        <a>网络地图</a>\n      </div>\n      <div class=\"col-sm-4 col-md-2 footerdiv\">\n        <a>联系我们</a>\n      </div>\n      <div class=\"col-sm-4 col-md-2 footerdiv\">\n        <a>使用条款</a>\n      </div>\n      <div class=\"col-sm-4 col-md-2 footerdiv\">\n        <a>隐私条款</a>\n      </div>\n      <div class=\"col-sm-4 col-md-2 footerdiv\">\n        <a>风险提示</a>\n      </div>\n      <div class=\"col-sm-4 col-md-2 footerdiv\">\n        <a>关于我们</a>\n      </div>\n    </div>\n    <div style=\"text-align: center;margin-top: 20px;font-size: medium;font-weight: 600\">© 2017 LVFaith. All rights reserved.</div>\n  </div>\n</footer>\n\n\n\n\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80px;\"></div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"titles span2  col-xs-12 col-sm-3 col-md-2 rightList\" id=\"rightList\">\n      <ul class=\"nav nav-stacked\">\n        <li class=\"title\">绿投基地</li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"way\">绿投走向</a></li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"dangerEdu\">风险教育</a></li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"law\">法律法规</a></li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"wayforright\">投资者维权</a></li>\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10\" >\n      <router-outlet></router-outlet>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 20px\">\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" routerLink=\"/course/eduInfo1\">\n      <h4 class=\"list-group-item-heading\">反洗钱新规 7 月实施 机构严查跨境交易真实背景</h4>\n      <p class=\"list-group-item-text\">来源：21 世纪经济报道</p>\n    </a>\n    <a class=\"list-group-item\" routerLink=\"/course/eduInfo2\">\n      <h4 class=\"list-group-item-heading\">非法证券活动九大问题破解</h4>\n      <p class=\"list-group-item-text\">来源：证监会网站</p>\n    </a>\n    <a class=\"list-group-item\" routerLink=\"/course/eduInfo3\">\n      <h4 class=\"list-group-item-heading\">牢固树立风险意识，防范非法证券活动</h4>\n      <p class=\"list-group-item-text\">来源：华泰资讯中心</p>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<h3>\n  反洗钱新规7月实施 机构严查跨境交易真实背景\n</h3>\n<div class=\"sub\">来源：21世纪经济报道</div>\n<div class=\"text\">\n\n  <p>\n  业内人士强调，总体而言，随着《管理办法》正式实施，任何无法证明资金合法来源、或难以证实资金出海实际用途的跨境大额现金转账交易都将被从严查处。\n  </p><p>\n  跨境大额现金转账交易的反洗钱监管序幕即将开启。\n</p><p>\n  去年年底，中国人民银行发布《金融机构大额交易和可疑交易报告管理办法》(中国人民银行令〔2016〕第3号，下称《管理办法》)，决定从2017年7月1日起实施。\n</p><p>\n  在业内人士看来，《管理办法》相比以往反洗钱监管规定的最大变化，主要集中在三点，一是将自然人大额现金交易报告标准从原先的当日单笔或累计交易(包括现金缴存、现金支取、现金结售汇、现钞兑换、现金汇款、现金票据解付及其他形式的现金收支)人民币20万元以上，调整到5万元以上，外币等值1万美元以上的报告标准维持不变;二是要求金融机构新增建立与完善交易监测标准、交易分析与识别、涉恐名单监测、监测系统建立和记录保存等;三是新增非银行支付机构、保险专业代理公司等机构履行反洗钱监管义务。\n</p><p>\n  此外，非自然人银行账户境内和跨境的大额转账交易额度超过人民币200万元或等值20万美元外币;自然人银行账户境内大额转账交易规模超过人民币50万元或等值10万美元外币;跨境大额转账交易超过人民币20万元或外币等值1万美元，也需要向相关部门报备。\n</p><p>\n  反洗钱监管全面收紧\n</p><p>\n  记者多方了解到，为了落实《管理办法》规定，银行的实际执行标准十分严格。\n</p><p>\n  一位不愿具名的外资银行合规部人士向21世纪经济报道记者透露，银行内部规定若境内个人每月向境外转账额度超过1万美元，需向银行出示具体的消费证明;否则银行可能会关闭个人账户，并将相关信息汇报给国家外汇管理局(下称外管局)相关部门。\n</p><p>\n  “即便部分银行尚未要求出示具体消费证明，不排除他们未来会对相关账户进行抽查，若个人无法补缴消费证明，同样会面临关闭账户与信息汇报风险。”他透露。\n</p><p>\n  另外，该人士介绍，针对企业对外投资并购贸易所涉及的跨境大额转账现金交易，银行会要求企业出示详尽的贸易投资收购合同等相关材料，即便有些企业在自贸区设立自由贸易账户(FT账户)，银行也必须了解该企业的客户、业务等，在尽职调查三大操作原则的基础上，先对跨境资金流动进行反洗钱核查。\n</p><p>\n  多位银行人士向21世纪经济报道透露，部分反洗钱监管体系不够完善的银行甚至会适度削减当月换汇额度，避免企业或个人通过银行尚未察觉的灰色通道换汇出境。究其原因，相比境内大额转账现金交易，跨境金融业务的反洗钱监测面临的挑战更加复杂。不少企业或个人会利用部分国家反洗钱监管体系漏洞，采取各种灰色通道将资金转移出境。\n</p><p>\n  为此，央行要求相关金融机构构建客户名称检查(NC)，交易监控(TM)、银行流水单监控(SM)、审慎调查(DD)与客户洗钱风险再分析等监控模块，完善反洗钱监管体系，甚至建立反洗钱分类评级进行“奖罚”。\n</p><p>\n  “若银行在反洗钱分类评级得到A以上，或许能获得相对宽松的监管环境，有效降低合规操作的成本投入。”一位不愿具名的股份制银行人士向21世纪经济报道透露。\n</p><p>\n  业内人士强调，总体而言，随着《管理办法》正式实施，任何无法证明资金合法来源、或难以证实资金出海实际用途的跨境大额现金转账交易都将被从严查处。\n</p><p>\n  银行积极完善反洗钱监测数据库\n</p><p>\n  以往，银行主要通过跟踪资金流向与资金归集方向，对蚂蚁搬家式的资金跨境转移加大监管力度。然而，部分企业和个人很快找到了新的灰色通道。\n</p><p>\n  “这些企业、个人抓住的，就是一些国家反洗钱监管相对薄弱，无法与国内银行实现全面的账户信息共享。”一家国际会计事务所纠纷协调及审查服务合伙人透露。所幸的是，这类操作正变得渐行渐难，原因是这些资金最终流向欧美发达国家，而后者正在加强对反洗钱监管薄弱国家资金跨境流动的监管。\n</p><p>\n  一位中资企业驻中亚某国分支机构负责人向21世纪经济报道记者透露，此前企业总部打算从中亚国家账户划拨一笔闲置美元资金给美国账户，用于海外投资收购。没想到整个流程耗时大半年，因为美国金融监管部门对这笔资金开展反洗钱核查，要求中资企业提供最详尽的资金来源合法性材料，以及海外投资收购文件。\n</p><p>\n  “若相关材料存在漏洞，这笔资金可能被美国金融监管部门直接罚没。”他透露。\n</p><p>\n  21世纪经济报道记者多方了解到，有些运作资金跨境转移的账户持有者开始转变策略，利用本国语言拼写手法的多样性设立不同账户不断腾挪资金，但国内银行缺乏识别高风险账户的数据库，难以及时将这些关联账户全部识别出来。\n</p><p>\n  多位银行人士坦言，这需要外部力量的协助，帮助金融机构进一步完善数据库建设。21世纪经济报道记者也注意到，央行对此持支持态度。今年5月，央行发布的《义务机构反洗钱交易监测标准建设工作指引》明确，相关金融机构可选择自主开发、共享开发或市场采购等方式建设大额交易和可疑交易监测系统，但无论采取何种开发方式，开发前应当在监测标准设计等方面提出适合本机构的监测系统建设需求，开发完成后，监测系统能有效满足监测标准运行的数据需求。\n</p><p>\n  “其实，我们反洗钱监控体系的部分数据库，也是从外部采购的。”上述股份制银行人士透露。\n</p><p>\n  在他看来，这种做法有三大好处，一是帮助银行尽快建立相对全面的、用于识别高风险账户的数据库，对涉嫌洗钱的关联账户资金流向进行实时跟踪;二是外部专业机构能开展员工培训，比如帮助银行培养针对不同国家语言习惯来辩别可疑账户的数据分析师等;三是及时更新高风险账户信息，很多涉嫌洗钱的企业、个人一旦发现自己洗钱账户被“曝光”，就迅速对账户进行重命名，或更换账户注册地点进而逃避监管。因此数据库需要不断更新，才能让他们无处遁形。\n</p><p>\n  加快制订比特币管理办法\n</p><p>\n  尽管金融机构纷纷构建全面的反洗钱监控系统满足《管理办法》要求，但比特币的意外崛起，让他们发现了一个潜在的“漏网之鱼”。\n</p><p>\n  具体而言，由于比特币尚未被很多国家纳入金融监管范畴，不少企业、个人便在国内买入比特币，再到境外出售套现，顺利将资金转移出境。\n</p><p>\n  “甚至有些企业、个人还利用杠杆融资买入比特币，再通过境内买、境外卖的方式，实现更大规模的资金非法转移出境。”一位银行合规部人士向21世纪经济报道直言。一旦这些大额资金流向海外，多数用于海外置业与投资金融产品等，但这是国内换汇规定所不允许的外币使用范畴。\n</p><p>\n  该人士坦言，当前银行主要对存在比特币跨境买卖的个人或企业账户进行资金流向监控，一旦发现其中部分账户存在洗钱嫌疑，迅速向外管局相关部门汇报。但在实际操作中，不少借比特币买卖转移资金出境的企业、个人都会借用他人账户操作，导致相关反洗钱监管难度加大。\n</p><p>\n  21世纪经济报道记者多方了解到，针对比特币交易暗藏的洗钱与高杠杆融币融资风险隐患，央行正在加快推进制订比特币管理办法，其中包括关于比特币交易平台的管理办法，以及比特币平台反洗钱规范操作流程。\n</p><p>\n  “市场传闻这些管理办法最快会在6月份公布。”一家比特币平台负责人告诉21世纪经济报道记者，为此他们已经要求参与比特币交易的国内企业、个人实名制注册并提供本人银行账户进行交易，便于监管部门对比特币交易资金跨境流向进行反洗钱监管。\n</p><p>\n  知情人士对21世纪经济报道透露，不少第三方支付机构也纷纷未雨绸缪，按照《管理办法》相关规定，对跨境支付业务进行反洗钱监管。毕竟，随着跨境电商业务规模迅速壮大，不排除某些个人、企业通过虚构海外购物清单，将资金转移出境。\n</p><p>\n  一位第三方支付机构负责人告诉21世纪经济报道记者，当前央行对第三方支付机构设定两条不能触碰的经营红线，一是严格遵守备付金管理相关规定，二是反洗钱监管需要合规操作。\n\n</p></div>\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<h3>\n  非法证券活动九大问题破解\n</h3>\n<div class=\"sub\">来源：证监会网站</div>\n<div class=\"text\">\n\n\n<p>\n  一、什么是非法证券活动?\n</p><p>\n  答：非法证券活动是指未经法定机关核准或批准，从事依法应由法定机关核准或批准、应受法定监督的证券发行、交易等行为。这类违法犯罪行为主要有两大类：一是非法发行股票，是指未经证监会核准而擅自公开、变相公开发行股票的行为;二是非法经营证券业务，是指未经证监会批准，从事股票承销、经纪(代理买卖)、证券投资咨询等证券业务。\n</p><p>\n  从事上述非法证券活动的公司或个人，往往通过广告、广播、传真、信函、电话、投资发布会、投资说明会、互联网、传销等方式，诱骗投资者上当受骗，购买未上市公司原始股、股权证或加入证券投资咨询会员等。特别值得投资者注意的是，根据国家有关法规，投资者向非法机构购买未上市公司股票等行为属于参与非法金融活动，不受法律保护。因参与非法金融业务活动受到的损失，将由投资者自行承担。\n</p><p>\n  二、以“境外上市”为名非法发行或转让股票的主要形式有哪些?\n</p><p>\n  答：一些企业以境外上市为名，行非法发行或转让股权的欺诈、诱骗投资者之实。主要表现为以下几种方式：\n</p><p>\n  1.以境外上市为名，欺诈宣传。一些公司通过媒体、新闻发布会、理财讲座、散发传单等方式，宣称公司将在境外上市，诱骗投资者购买。宣传中，将直接上市与买壳间接上市混为一谈，将NASDAQ(全美证券业协会证券行情自动报价系统，指美国纳斯达克股票市场)与OTCBB(是由全美证券商协会监管的一个非交易所性质的市场)不加区分，使投资者轻信如果持有其推销的股票，就会获得高额回报。实际上，投资者持有的只是境内公司的股权，与在境外上市的公司的股票并无直接关系，存在无法转换和流通的风险。\n</p><p>\n  2.以“分散股权”为借口，非法发行或转让股权。一些公司或机构借用美国等证券市场关于上市公司股东人数最低限的规定，制造股权发行或转让的题材。但是，投资者受让的股权难以得到确认，成了“虚拟股东”或“二级股东”。\n</p><p>\n  3.以“收益保底”、“到期回购”为诱饵，蒙骗投资者。为了推销股票，一些公司承诺到期回购未能上市的股票，但又设置了许多前置条件，很难真正兑现。如有些公司设定“以公司净资产为回购价格”的条件，与投资者购买价格有很大差距。事实上，股票的收购是有严格法律规定的。我国《公司法》第143条规定，公司一般不得收购本公司的股票，除非公司存在减资、合并等法定的特殊例外情形。此外，法律对股份回购的程序也有严格的限制。因此，股票(份)一旦发行，一般不能回购，也没有保底收益。\n</p><p>\n  4.以中介机构或个人为销售主体。为了逃避非法发行或转让股份的责任，一些股份公司委托中介机构或个人进行操作，公司幕后配合。出现纠纷或遇监管部门查处时，股份公司通常以“股东行为与公司无关”为托词，推卸责任。\n</p><p>\n  5.以股权托管为招牌，增加欺骗性。一些公司通过委托地方股权托管机构对股份进行托管或确认，企图使投资者相信这是股票上市前的法定程序。殊不知这种托管与证券交易所的托管程序有着本质区别，与上市并无任何关系。\n</p><p>\n  三、投资境外间接上市股权有何风险?\n</p><p>\n  答：1.公司上市的风险。许多公司虽有境外上市的计划，但由于业绩差、运作不规范、上市过程中“黑箱操作”等原因，最终绝大多数会受阻夭折。更有甚者，只是打着“海外上市”的幌子，欺骗投资者。\n</p><p>\n  2.上市后股权确认的风险。少数公司虽然采用非正常\n</p><p>\n  方式实现了境外上市，但是投资者仍面临股权能否确认的风险：一是许多境内投资者并非在册股东。不少公司为了达到上市标准，利用投资者对境外上市程序和规则不了解的情况，上市运作中“黑箱”操作，将许多投资者排除在股东名册之外，使投资者成为“虚拟股东”;二是在册股东换股难。商务部关于外国投资者并购境内企业的相关规定中，对并购、变更后所设外商投资企业的中方投资者的资格做了严格限制，不符合条件的国内自然人股东不能成为境外上市公司的股东。\n</p><p>\n  3.股票交易操作难的风险。国内投资者因受外汇管制所限，实现在境外证券市场交易的难度很大。若想直接交易，则要开立高额外汇保证金账户;若要委托他人代理，则会承担受托人不守信用的风险。\n</p><p>\n  4.股票交易价格风险。国内投资者即使能实现最终的交易，也未必就能获利。以国内企业上市最多的美国OCTBB为例，该市场类似于国内退市公司进行交易的三板市场，大部分公司规模小、业绩差、交投清淡、股价低迷，国内投资者很难获利。\n</p><p>\n  5.股权交易资金风险。国内投资者即使实现了股票最终交易，但结算资金安全到账缺乏保障。为了规避外汇管理机关的监管，目前这类资金的进出多采用“地下”的不合法途径，投资者对资金无法控制，风险很大，权益得不到保障。\n</p><p>\n  四、不法机构如何诱骗投资者购买所谓的“原始股”?\n</p><p>\n  答：从已查处的案例看，不法机构诱骗投资者购买“原始股”主要是通过以下方式：(1)谎称公司将要在境内外上市。比如，有的宣称要到美国“纳斯达克”上市，有的谎称要到英国上市等，鼓吹上市后能带来巨额投资收益，诱使购买其股票或股权证;(2)假称股票发行得到了政府部门的批准，甚至伪造政府文件，骗取投资者的信任;(3)以发行原始股的名义与投资者共同发起设立股份公司，骗取投资者的资金;(4)声称可以为投资者办理股权托管证明，迷惑投资者;(5)以大股东转让股份或增资的名义，向社会不特定对\n</p><p>\n  象，以电话、信函、推介会等公开方式，高价转让股票、股权证或公开募集资金;(6)以“证券投资咨询公司”、“产权经纪公司”、“证券投资公司”等为名，未经批准向社会公众非法买卖、代理买卖未上市公司股票;(7)以给国内企业提供境外上市服务为名，一些外国资本公司或投资公司驻中国办事处，未经批准向社会公众代理买卖未上市公司股票。\n</p><p>\n  五、如何防范“原始股”骗局?\n</p><p>\n  投资者首先要认清非法证券活动的本质和危害，提高自\n</p><p>\n  身辨别判断能力。自觉抵制各种诱惑，不要轻信“一本万利”、“天上掉馅饼”之类的“好事”。以下防范措施可供投资者参考：\n</p><p>\n  1、如果股票发行、或者转让采取了广告、发布会、说明会、网络等公开方式，就要看是否取得证监会的核准，如果没有证监会的核准文件，就可判别是非法发行股票。\n</p><p>\n  2、看股票的发行和转让活动是否有前面介绍的不法机构诱骗投资者购买所谓原始股的方式、手法。\n</p><p>\n  3、看中介机构从事证券承销、代理买卖等活动，是否取得证监会的批准。如果没有，基本可判别是非法经营证券业务。\n</p><p>\n  4、千万不要相信“即将境内外上市、能带来高额回报”的花言巧语，保持头脑冷静。\n</p><p>\n  5、当您遇到判断不清的问题时，可及时与证券监管部门联系、咨询。\n</p><p>\n  “原始股”骗局在各地时有发生，隐蔽性强，手法多样。\n</p><p>\n  投资者一定要增强风险意识，切不可心存侥幸、轻信不法机构和个人的各类骗人的“把戏”，否则上当受骗、损失钱财就难以避免。\n</p><p>\n  六、非法证券活动中常用哪些骗术?\n</p><p>\n  答：近年来，中介机构从事非法证券活动经常采取“钓鱼式”电话传销方式，借用股权投资、海外上市等诱惑性极强的名目，采取“拉、抬、吊、压”等传销骗术，加之操作手段的“系统化”、“专业化”和“团队化”，步步紧逼，试图瓦解投资者心理防线。\n</p><p>\n  1、电话传销先“拉”家常，套近乎，打消戒备心理。\n</p><p>\n  中介机构通过不法手段获得投资者个人信息后，令其业务员以投资顾问的身份，向投资者及其家人询问其家庭理财状况、收益情况和疑难之处，以“免费”提供个股分析、潜力个股参考和市场研判信息等“专家级”投资咨询服务的名义，和投资者“拉”家常，套近乎。中介机构借此手段在打消投资者的戒备心理，骗取信任的同时，收集了大量投资者个人信息，包括更详细的联系方式、股市操作情况等个人详细资料，以便悄悄布开骗局。\n</p><p>\n  2、“抬”高身价、制造神秘感，提高投资者信任度。\n</p><p>\n  在使用大量赞美之词满足投资者虚荣心的同时，投资顾问常会引用证券专业词汇、海外企业上市股权投资成功案例、中介机构成功操作案例，塑造中介机构与业务员的“专业”形象，采取情境假设方式激发投资者参与股权投资获取翻倍暴利的幻想，谎称若不上市就“回购”以打消投资者顾虑。中介公司通过“抬”高投资者、“抬”高自身、“抬”高股权投资预期等手段，逐步将投资者引诱至陷阱边缘。\n</p><p>\n  3、以超额利润“吊”起投资者欲望。\n</p><p>\n  中介公司结合国内市场投资品种较贫乏和个别海外股权投资(携程、百度等国内公司在美国Nasdaq上市)获取300%-500%收益率的事例，标榜其所推销的投资项目优良，很快就将通过海外上市赢得巨大的发展空间，对投资者动之以“利”，甚至考虑放水(如降低最低认购数量或成交价格)，以增强客户的认可及信任。中介机构所描绘的美妙前景，将投资者的胃口“吊”起来。\n</p><p>\n  4、制造“压”力，营造稍纵即逝的假象以促成交易。\n</p><p>\n  在部分投资者因为某种缘故正在动摇之时，中介机构便使出“压”的招数，制造紧张气氛，编造“所剩余股不多”、“海外市场对股东数量有要求”、“很多客户都在抢购”、“优惠政策截至本周”等假象，有意营造投资机会稍纵即逝的紧张气氛，殷切告知投资者机不可失，时不再来，如不当机立断把握机会，将错过重大投资翻倍机会，以便促成最终交易。终于，有的投资者抵挡不住诱惑，义无反顾地打开自己的钱包。\n</p><p>\n  广大投资者应提高风险防范意识和识别能力，充分认识中介机构的操作伎俩，防止受骗上当。\n</p><p>\n  七、什么是非法证券投资咨询?\n</p><p>\n  答：非法证券投资咨询，是指有关机构或个人未经中国证监会批准，擅自从事为证券投资人或客户提供证券投资分析、预测或者建议等直接或者间接有偿咨询服务的活动。\n</p><p>\n  未经国务院证券监督管理机构批准擅自开展下列活动的，为“非法证券投资咨询”活动：(一)接受投资人或者客户委托，提供证券投资咨询服务;(二)举办有关证券投资咨询的讲座、报告会、分析会等;(三)在报刊上发表证券投资咨询的文章、评论、报告，以及通过电台、电视台等公众传播媒体提供证券投资咨询活动;(四)通过电话、传真、电脑网络等电信设备系统，提供证券投资咨询活动;(五)中国证监会认定的其他形式。\n</p><p>\n  八、非法证券投资咨询活动的主要手法?\n</p><p>\n  答：1、通过建立网站、博客、QQ群等招收会员，推荐股票，其目的是收取会费。不少上网的证券投资者都有这样的经验，经常会在一些博客或论坛上看到某人自称“股神”、“荐股专家”，有的博客发文声称，只要加入成为会员，就可以获取具体信息;有的门户网站出现招募广告，声称只要成为会员，就保证收益达到相当水平;有的网站声称代客炒股，收益分成。典型案例是被法院以非法经营罪判处有期徒刑3年的“带头大哥”案。\n</p><p>\n  2、以出售炒股软件为名实施非法证券投资咨询。部分机构打着信息公司、软件开发公司的旗号，以销售所谓的“荐股软件”为掩盖从事非法证券投资咨询活动。其基本做法是：以开发专业证券资讯产品为名，通过报纸、电台、网站、现场营销等方式，销售“荐股软件”。不法分子不敢直接提供咨询服务，而是以销售“荐股软件”名义，将非法证券投资咨询作为软件的功能和后期服务，把高额的收费隐藏在软件的销售当中。\n</p><p>\n  3、以代客理财的名义非法从事证券投资咨询。不法分子往往宣称推出了新的理财方式，会员无须缴纳会员费，只要将自己的股票代码及交易密码告知公司的业务员，公司就可代会员进行股票买卖，盈利后按约定的比例收取咨询费用。另外一种方式就是与投资者签订协议，由公司向投资者推荐股票，投资者自行操作，盈利后按约定的比例收取咨询费用。\n</p><p>\n  4、以私募基金之名，非法从事证券投资咨询业务。他们先在互联网上设立公司网站，并组织人员搜集各大媒体公开的股票研究报告信息，同时在网站上设立股票行情即时分析业务吸引股票投资者。然后随机给投资者打电话，称是国内知名私募基金公司为广大股票投资者提供免费证券投资咨询服务。通过电话得知所联系的投资者有意愿获得证券投资咨询服务后，就反复向投资者推荐股票，收取服务费。\n</p><p>\n  5、以证券投资讲座、培训会、研究报告会等现场宣讲方式为名从事非法证券投资咨询活动。这类非法证券投资咨询活动通过网络、散发传单等方式发布有关讲座会议信息，以增强投资者投资专业知识为名，在宣讲的过程中骗取投资者信任，将其招收为会员，收取会员费，推荐所谓能带来高回报的股票。\n</p><p>\n  6、假冒合法机构名称、自编“理财分析师资格证号”、伪造公司工商执照、证券投资咨询资格证书等各种备案认证资格标志，设立李鬼网站，蒙骗投资者，非法从事证券投资咨询。\n</p><p>\n  九、如何防范非法证券投资咨询?\n</p><p>\n  答：以下几个方面，供投资者防范非法证券投资咨询的参考：\n</p><p>\n  1、树立理性投资观念。投资者切不可轻信任何可疑网站、陌生电话和手机短信发来的投资理财广告，所谓“内部消息”、“解套翻本”、“高额回报率”等传言和蛊惑，不抱“贪图小利”、“天上掉馅饼”等心理和幻想，用健康的心态对待投资盈亏，树立正确的投资理财观念。特别是投资股票亏损或被套的投资者，切不可“病急乱投医”。\n</p><p>\n  2、提高风险意识，自觉维护合法权益。投资者要加强证券法律、法规学习，提高证券投资风险防范意识，自觉远离非法证券活动。在日常生活中，不随便泄漏个人的身份、财产及家庭等基本资料信息，不给不法机构和个人可乘之机。对可疑的机构和个人的主动联系，要增强风险意识。\n</p><p>\n  3、查验资格证书，甄别咨询行为的合法性。根据规定，\n</p><p>\n  未经中国证监会许可，任何机构和个人均不得从事证券投资咨询业务。同时，取得证券投资咨询业务资格的个人，必须在具有证券投资咨询业务资格的机构从事证券投资咨询活动。因此，投资者接受投资咨询服务前，应主动向有关机构和个人索取其资格证书，并可通过中国证券业协会官方网站(www.sac.net.cn)查询具有合法证券咨询业务资格的机构名单，或电话询问辖区证券监管部门，核实所委托的咨询机构是否属合法机构。对任何夸大宣传、承诺收益等煽动性语言，投资者一定要保持高度警惕。\n</p><p>\n  4、签订书面合同，规范付款行为。根据规定，证券投资咨询机构接受客户委托，提供证券投资咨询服务时，应当与客户签订投资咨询服务合同，且只能通过公司专用收款账户\n</p></div>\n"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<h3>\n  牢固树立风险意识，防范非法证券活动\n</h3>\n<div class=\"sub\">来源：华泰资讯中心</div>\n<div class=\"text\">\n\n<p>\n\n  e租宝庞氏骗局败露 网络金融“巨子”一夜陨落\n</p><p>\n  案件回放：\n</p><p>\n  “e租宝”是安徽钰诚集团及其关联公司下属的金易融(北京)网络科技有限公司运营的网络平台，主打产品为融资租赁债权转让。自2014年7月上线以后，e租宝交易规模快速挤入行业前列。根据零壹研究院数据中心统计，截至\n</p><p>\n  数据也显示，截至12月8日，e租宝总成交量745.68亿元，总投资人数90.95万人，待收总额703.97亿元。2015年12月16日，e租宝涉嫌犯罪，被立案侦查。\n</p><p>\n  “1元起投，随时赎回，高收益低风险。”是e租宝广为人知的宣传口号，e租宝承诺保本保息、灵活支取，并以高息(9%—14%)吸引投资者，但实际上，e租宝平台上所列的融资项目大多为虚构，一开始就是空手套白狼的把戏，案发后，“e租宝”的幕后负责人自己都承认“‘e租宝’就是一个彻头彻尾的庞氏骗局。”经查，2014年6月至2015年12月间，安徽钰诚控股集团、钰诚国际控股集团有限公司及丁宁等人违反国家法律规定，组织、利用其控制的多家公司，在其建立的“e租宝”、“芝麻金融”互联网平台发布虚假的融资租赁债权及个人债权项目，以承诺还本付息为诱饵，通过媒体等途径向社会公开宣传，非法吸收公众资金累计762亿余元，扣除重复投资部分后非法吸收资金598亿余元，涉及全国投资人约90万名。至案发，集资款未兑付380亿余元。\n</p><p>\n  案件警示：\n</p><p>\n  面对纷繁的P2P投资平台及投资产品时，投资者应当谨慎考察平台经营能力，平台的管理团队构成是怎样的，平台风险控制能力如何，投资项目的透明度如何都是判断平台经营能力的指标。在这些指标里，平台的风控能力为重中之重，也是保障投资项目真实、合规的根本，同时，投资者应当始终铭记高收益高回报必然伴随着高风险这一投资理财常识，理性判断高收益宣传背后隐藏的投资风险和可能存在的骗局。\n</p></div>\n\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<h3>\n  公开募集证券投资基金运作指引第2号 ——基金中基金指引\n</h3>\n<div class=\"text\">\n<p>\n\n第一条 为促进证券投资基金的创新发展，规范基金中基\n金的运作，保护投资人的合法权益，根据《证券投资基金法》\n《公开募集证券投资基金运作管理办法》等有关规定，制定本\n  指引。</p><p>\n第二条 基金管理人开展基金中基金业务，应当遵循基金\n份额持有人利益优先原则，制定科学合理的投资管理制度，有\n效防范和控制风险。\n</p><p>第三条 基金中基金是指，将 80%以上的基金资产投资于 经中国证监会依法核准或注册的公开募集的基金份额的基金。 </p><p>交易型开放式证券投资基金联接基金（以下简称 ETF 联 接基金）是指，将绝大部分基金资产投资于跟踪同一标的指数 的 ETF（以下简称目标 ETF），紧密跟踪标的指数表现，追求 跟踪偏离度和跟踪误差最小化，采用开放式运作方式的基金。 ETF 联接基金是一种特殊的基金中基金。\n</p><p>第四条 基金中基金应当遵循下列规定：\n</p><p>（一）基金中基金持有单只基金的市值，不得高于基金中 基金资产净值的 20%，且不得持有其他基金中基金。\n</p><p>ETF 联接基金持有目标 ETF 的市值，不得低于该联接基 金资产净值的 90%。\n</p><p>（二）除 ETF 联接基金外，同一管理人管理的全部基金中 基金持有单只基金不得超过被投资基金净资产的 20％，被投 资基金净资产规模以最近定期报告披露的规模为准。\n</p><p>（三）基金中基金不得持有具有复杂、衍生品性质的基金\n份额，包括分级基金和中国证监会认定的其他基金份额，中国\n证监会认可或批准的特殊基金中基金除外。\n</p><p>（四）除 ETF 联接基金外，基金中基金投资其他基金时， 被投资基金的运作期限应当不少于 1 年，最近定期报告披露的 基金净资产应当不低于 1 亿元。\n</p><p>（五）基金管理人应当做好基金中基金的流动性风险管理，\n对于运用基金中基金财产投资于封闭运作基金、定期开放基金\n等流通受限基金的，应当合理设置投资比例，制定专门的风险\n管理制度。\n</p><p>（六）基金管理人运用基金中基金财产投资于股票、债券\n等金融工具的，投资品种和比例应当符合基金中基金的投资目\n标和投资策略。\n</p><p>（七）中国证监会认可的其他特殊基金中基金可不受上述\n规定限制。\n</p><p>因证券市场波动、基金规模变动等基金管理人之外的因素\n致使基金投资不符合前款第（一）项、第（二）项规定的比例\n或者基金合同约定的投资比例的，基金管理人应当在 20 个交 易日内进行调整，但中国证监会规定的特殊情形除外。\n</p><p>第五条 基金管理人不得对基金中基金财产中持有的自身\n管理的基金部分收取基金中基金的管理费。\n</p><p>基金托管人不得对基金中基金财产中持有的自身托管的\n基金部分收取基金中基金的托管费。\n</p><p>基金管理人运用基金中基金财产申购自身管理的基金的 （ETF 除外），应当通过直销渠道申购且不得收取申购费、赎 回费（按照相关法规、基金招募说明书约定应当收取，并记入\n基金财产的赎回费用除外）、销售服务费等销售费用。\n</p><p>第六条 基金中基金持有的基金召开基金份额持有人大会\n时，基金中基金的管理人应当代表其份额持有人的利益，根据\n基金合同的约定参与所持有基金的份额持有人大会，并在遵循\n基金中基金份额持有人利益优先原则的前提下行使相关投票\n权利。基金中基金管理人需将表决意见事先征求基金托管人的\n意见，并将表决意见在定期报告中予以披露。 </p><p>目标 ETF 召开基金份额持有人大会时，ETF 联接基金持 有人应当根据基金合同约定参加 ETF 持有人大会表决。\n</p><p>第七条 基金中基金的投资风格应当清晰、鲜明。基金名\n称应当表明基金类别和投资特征。基金合同中应当明确被投资\n基金的选择标准，定期报告和招募说明书等文件中应当设立专\n门章节披露所持有基金以下相关情况，并揭示相关风险：\n</p><p>（一）投资政策、持仓情况、损益情况、净值披露时间等。\n</p><p>（二）交易及持有基金产生的费用，包括申购费、赎回费、\n销售服务费、管理费、托管费等，招募说明书中应当列明计算\n方法并举例说明。\n</p><p>（三）基金中基金持有的基金发生的重大影响事件，如转\n换运作方式、与其他基金合并、终止基金合同以及召开基金份\n额持有人大会等。\n</p><p>（四）基金中基金投资于管理人以及管理人关联方所管\n理基金的情况。\n</p><p>第八条 基金中基金应当采用公允的估值方法，及时、准\n确地反映基金资产的价值变动。基金管理人应当在基金中基金\n所投资基金披露净值的次日，及时披露基金中基金份额净值和\n份额累计净值。 </p><p>第九条 除 ETF 联接基金外，基金管理人开展基金中基金 业务，应当设置独立部门、配备专门人员，制定业务规则和明\n确相关安排，有效防范利益输送、内幕交易等行为。 </p><p>除 ETF 联接基金外，基金中基金的基金经理不得同时兼 任其他基金的基金经理。\n</p><p>第十条 基金管理人应当与相关各方认真制定基金产品方\n案，明确认购、申购、赎回、投资管理、估值核算、信息披露\n等环节的运作机制、业务流程和管理制度，做好相关技术准备，\n有效防范投资运作风险，确保基金平稳安全运行。\n</p><p>第十一条 基金管理人和基金托管人应当根据相关规定，\n确定资产保管、交易执行、清算交收、数据传送等业务中的权\n利和义务，建立资产安全保障机制。\n</p><p>基金托管人应当加强对基金的监督核查，切实保护基金持\n有人的合法权益。\n</p><p>第十二条 本指引自公布之日起施行。</p>\n</div>\n"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 20px\">\n  <div class=\"list-group\">\n    <a class=\"list-group-item\">\n      <h4 class=\"list-group-item-heading\">法律顾问</h4>\n      <p class=\"list-group-item-text\"></p>\n    </a>\n    <a class=\"list-group-item\" routerLink=\"/course/lawdetails1\">\n      <h4 class=\"list-group-item-heading\">《公开募集证券投资基金运作指引第2号 —— 基金中基金指引</h4>\n      <p class=\"list-group-item-text\"></p>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<div class=\"shell\">\n<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">反馈电话</h3>\n  </div>\n  <div class=\"panel-body\">\n    ***-********\n  </div>\n</div>\n</div>\n<div class=\"shell\">\n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">反馈邮箱</h3>\n    </div>\n    <div class=\"panel-body\">\n      ***@***.***\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/img/course_img/stream2.png\">\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<p>暂时还没有内容~</p>\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<div class=\"mytitle\">我要发帖</div>\n  <div class=\"form-group\" style=\"margin:20px\">\n    <textarea class=\"form-control\" rows=\"15\" placeholder=\"写点什么~\"></textarea>\n  </div>\n  <button class=\"btn btn-info\" >确认发表</button>\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 20px\">\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" routerLink=\"/forum/details\">\n      <h4 class=\"list-group-item-heading\">大资管 2.0 时代到来 公募 FOF 成未来创新中坚力量</h4>\n      <p class=\"list-group-item-text\">2017-07-28</p>\n    </a>\n    <a class=\"list-group-item\" routerLink=\"/forum/details\">\n      <h4 class=\"list-group-item-heading\">公募 FOF\"双重收费\":事实是个\"伪命题\" 投资者不必担忧</h4>\n      <p class=\"list-group-item-text\">2017-07-27</p>\n    </a>\n    <a class=\"list-group-item\" routerLink=\"/forum/details\">\n      <h4 class=\"list-group-item-heading\">FOF 渐行渐近 下半年公募市场迎机遇</h4>\n      <p class=\"list-group-item-text\">2017-08-01</p>\n    </a>\n    <a  class=\"list-group-item\" routerLink=\"/forum/details\">\n      <h4 class=\"list-group-item-heading\">成功投资 FOF 五要素</h4>\n      <p class=\"list-group-item-text\">2017-08-06</p>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80px;\"></div>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"titles span2  col-xs-12 col-sm-3 col-md-2 rightList\" id=\"rightList\">\r\n      <ul class=\"nav nav-stacked\">\r\n        <li class=\"title\">论坛</li>\r\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"initialBody\">到处看看</a></li>\r\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"edit\">我要发帖</a></li>\r\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"favorite\">我的收藏</a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-9 col-md-10\" >\r\n      <router-outlet></router-outlet>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "\r\n<!--<div class=\"masterShow\">-->\r\n  <!--<ul class=\"list-inline\" style=\"height: 50px\">-->\r\n    <!--<li style=\"height: 80px\">LOGO</li>-->\r\n    <!--<li><a href=\"#ios\"><img src=\"../../../assets/img/123.jpg\"/> </a><li>-->\r\n    <!--<li><a href=\"#ios\"><img src=\"../../../assets/img/123.jpg\"/> </a><li>-->\r\n    <!--<li><a href=\"#ios\"><img src=\"../../../assets/img/123.jpg\"/> </a><li>-->\r\n    <!--<li><a href=\"#ios\"><img src=\"../../../assets/img/123.jpg\"/> </a><li>-->\r\n    <!--<li><a href=\"#ios\"><img src=\"../../../assets/img/123.jpg\"/> </a><li>-->\r\n    <!--<li><a href=\"#ios\"><img src=\"../../../assets/img/123.jpg\"/> </a><li>-->\r\n    <!--<li><a href=\"#ios\"><img src=\"../../../assets/img/123.jpg\"/> </a><li>-->\r\n    <!--<li><a href=\"#ios\"><img src=\"../../../assets/img/123.jpg\"/> </a><li>-->\r\n    <!--<li><a href=\"#ios\"><img src=\"../../../assets/img/123.jpg\"/> </a><li>-->\r\n    <!--<li><a href=\"#ios\"><img src=\"../../../assets/img/123.jpg\"/> </a><li>-->\r\n  <!--</ul>-->\r\n<!--</div>-->\r\n\r\n<!-- tab标签 -->\r\n<ul id=\"myTab\" class=\"nav nav-tabs\">\r\n  <li class=\"active\">\r\n    <a href=\"#home\" data-toggle=\"tab\">\r\n      专家点评\r\n    </a>\r\n  </li>\r\n\r\n  <li>\r\n    <a href=\"#ios\" data-toggle=\"tab\">\r\n      热门话题\r\n    </a>\r\n  </li>\r\n  <li class=\"dropdown\">\r\n    <a href=\"#\" id=\"myTabDrop1\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n      投资交流\r\n      <b class=\"caret\"></b>\r\n    </a>\r\n    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"myTabDrop1\">\r\n      <li><a href=\"#jmeter\" tabindex=\"-1\" data-toggle=\"tab\">绿色产业</a></li>\r\n      <li><a href=\"#ejb\" tabindex=\"-1\" data-toggle=\"tab\">FOF基金</a></li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<!-- 每个tab页对应的内容 -->\r\n<div id=\"myTabContent\" class=\"tab-content\">\r\n  <div class=\"tab-pane fade in active\" id=\"home\">\r\n    <div class=\"list-group\">\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\" style=\"margin-top: 0px\">Cras justo odio </a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Dapibus ac facilisis in</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Morbi leo risus</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Porta ac consectetur ac</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Vestibulum at eros</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"ios\">\r\n    <div class=\"list-group\">\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\" style=\"margin-top: 0px\">Cras justo odio </a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Dapibus ac facilisis in</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Morbi leo risus</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Porta ac consectetur ac</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Vestibulum at eros</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"jmeter\">\r\n    <div class=\"list-group\">\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\" style=\"margin-top: 0px\">Cras justo odio </a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Dapibus ac facilisis in</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Morbi leo risus</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Porta ac consectetur ac</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Vestibulum at eros</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"ejb\">\r\n    <div class=\"list-group\">\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\" style=\"margin-top: 0px\">Cras justo odio </a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Dapibus ac facilisis in</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Morbi leo risus</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Porta ac consectetur ac</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Vestibulum at eros</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- tab标签 -->\r\n<ul id=\"myTab2\" class=\"nav nav-tabs\">\r\n  <li class=\"active\">\r\n    <a href=\"#home2\" data-toggle=\"tab\">\r\n      专家点评\r\n    </a>\r\n  </li>\r\n\r\n  <li>\r\n    <a href=\"#ios2\" data-toggle=\"tab\">\r\n      热门话题\r\n    </a>\r\n  </li>\r\n  <li class=\"dropdown\">\r\n    <a href=\"#\" id=\"myTabDrop2\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n      投资交流\r\n      <b class=\"caret\"></b>\r\n    </a>\r\n    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"myTabDrop2\">\r\n      <li><a href=\"#jmeter2\" tabindex=\"-1\" data-toggle=\"tab\">绿色产业</a></li>\r\n      <li><a href=\"#ejb2\" tabindex=\"-1\" data-toggle=\"tab\">FOF基金</a></li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<!-- 每个tab页对应的内容 -->\r\n<div id=\"myTabContent2\" class=\"tab-content\">\r\n  <div class=\"tab-pane fade in active\" id=\"home2\">\r\n    <div class=\"list-group\">\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\" style=\"margin-top: 0px\">Cras justo odio </a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Dapibus ac facilisis in</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Morbi leo risus</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Porta ac consectetur ac</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Vestibulum at eros</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"ios2\">\r\n    <div class=\"list-group\">\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\" style=\"margin-top: 0px\">Cras justo odio </a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Dapibus ac facilisis in</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Morbi leo risus</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Porta ac consectetur ac</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Vestibulum at eros</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"jmeter2\">\r\n    <div class=\"list-group\">\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\" style=\"margin-top: 0px\">Cras justo odio </a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Dapibus ac facilisis in</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Morbi leo risus</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Porta ac consectetur ac</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Vestibulum at eros</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"ejb2\">\r\n    <div class=\"list-group\">\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\" style=\"margin-top: 0px\">Cras justo odio </a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Dapibus ac facilisis in</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Morbi leo risus</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Porta ac consectetur ac</a>\r\n      <a  class=\"list-group-item\" routerLink=\"/forum/details\">Vestibulum at eros</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "\n<div style=\"height: 80px;\"></div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"titles span2  col-xs-12 col-sm-3 col-md-2 rightList\" id=\"rightList\">\n      <ul class=\"nav nav-stacked\">\n        <li class=\"title\">FOF基金产品</li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"recommend\">推荐产品</a></li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"product\">LV绿色产业基金</a></li>\n       <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"futureProduct\">即将上线</a></li>\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10\" >\n      <router-outlet></router-outlet>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<p>\n  future-product works!\n</p>\n\n\n<div class=\"wrap col-xs-12 col-sm-4 col-md-3\">\n  <h1>Sample Box</h1>\n  <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n  </p>\n  <br />\n  <a routerLink=\"/fund/fundDetails\">了解详情</a>\n</div>\n<div class=\"wrap col-xs-12 col-sm-4 col-md-3\">\n  <h1>Sample Box</h1>\n  <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n  </p>\n  <br />\n  <a routerLink=\"/fund/fundDetails\">了解详情</a>\n</div>\n<div class=\"wrap col-xs-12 col-sm-4 col-md-3\">\n  <h1>Sample Box</h1>\n  <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n  </p>\n  <br />\n  <a routerLink=\"/fund/fundDetails\">了解详情</a>\n</div>\n<div class=\"wrap col-xs-12 col-sm-4 col-md-3\">\n  <h1>Sample Box</h1>\n  <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n  </p>\n  <br />\n  <a routerLink=\"/fund/fundDetails\">了解详情</a>\n</div>\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 20px\">\n<table class=\"table\">\n  <thead>\n  <tr class=\"myline\"><th>基金</th><th>单位净值</th><th>累计净值</th><th>净值日期</th><th>成立日期</th><th>近一年收益率</th><th>成立以来收益率</th><th>操作</th></tr>\n  </thead>\n  <tbody>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  <tr class=\"myline\"><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td>25</td><td><a routerLink=\"/fund/fundDetails\">了解详情</a></td></tr>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<p>\n  recommend works!\n</p>\n\n\n<div class=\"wrap col-xs-12 col-sm-4 col-md-3\">\n  <h1>Sample Box</h1>\n  <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n  </p>\n  <br />\n  <a routerLink=\"/fund/fundDetails\">了解详情</a>\n</div>\n<div class=\"wrap col-xs-12 col-sm-4 col-md-3\">\n  <h1>Sample Box</h1>\n  <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n  </p>\n  <br />\n  <a routerLink=\"/fund/fundDetails\">了解详情</a>\n</div>\n<div class=\"wrap col-xs-12 col-sm-4 col-md-3\">\n  <h1>Sample Box</h1>\n  <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n  </p>\n  <br />\n  <a routerLink=\"/fund/fundDetails\">了解详情</a>\n</div>\n<div class=\"wrap col-xs-12 col-sm-4 col-md-3\">\n  <h1>Sample Box</h1>\n  <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n  </p>\n  <br />\n  <a routerLink=\"/fund/fundDetails\">了解详情</a>\n</div>\n\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel slide\" id=\"slideshow\" data-interval=\"3500\" data-pause=\"true\" data-wrap=\"true\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#slideshow\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#slideshow\" data-slide-to=\"1\"></li>\n    <li data-target=\"#slideshow\" data-slide-to=\"2\"></li>\n    <li data-target=\"#slideshow\" data-slide-to=\"3\"></li>\n  </ol>\n\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n      <img src=\"../../../assets/img/index_img/index-sea.jpg\" alt=\"\">\n      <div class=\"carousel-caption\">\n        <h2>~SUNSHINE~</h2>\n        <p>Beatiful Sea·Bright Smile</p>\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"../../../assets/img/index_img/index_friends.jpg\" alt=\"\">\n      <div class=\"carousel-caption\">\n        <h2>~YEAH~</h2>\n        <p>Happy·Lucky Day</p>\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"../../../assets/img/index_img/index_people.jpg\" alt=\"\">\n      <div class=\"carousel-caption\">\n        <h2>~Ooh~</h2>\n        <p>Relaxing</p>\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"../../../assets/img/index_img/index_road.jpg\" alt=\"\">\n      <div class=\"carousel-caption\">\n        <h2>~The Road~</h2>\n        <p>Long Long Ago</p>\n      </div>\n    </div>\n  </div>\n\n  <a href=\"#slideshow\" data-slide=\"prev\" class=\"left carousel-control\">\n    <span class=\"glyphicon glyphicon-chevron-left\"> </span>\n  </a>\n  <a href=\"#slideshow\" data-slide=\"next\" class=\"right carousel-control\">\n    <span class=\"glyphicon glyphicon-chevron-right\"> </span>\n  </a>\n\n</div>\n\n<div class=\"container screenshot\">\n  <div class=\"title\">优秀产品</div>\n  <div class=\"row\" style=\"padding-left: 10px\">\n  <div class=\"box9 col-md-4 col-lg-4\">\n      <h1>Sample Box</h1>\n      <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n      </p>\n\n      <br />\n      <a class=\"todetail\" href=\"http://www.designshock.com/\">了解详情</a>\n    </div>\n  <div class=\"box9 col-md-4 col-lg-4\">\n      <h1>Sample Box</h1>\n      <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n      </p>\n\n      <br />\n      <a class=\"todetail\" href=\"http://www.designshock.com/\">了解详情</a>\n    </div>\n  <div class=\"box9 col-md-4 col-lg-4\">\n      <h1>Sample Box</h1>\n      <img src=\"http://www.wpthemegenerator.com/wp-content/uploads/2012/06/Image.jpg\">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus consectetur dolor a porttitor. Curabitur id sem sed ante fringilla pulvinar et id lectus. Nullam justo ipsum, hendrerit ut commodo nec, pellentesque nec erat. Pellentesque pharetra.\n      </p>\n\n      <br />\n      <a class=\"todetail\" href=\"http://www.designshock.com/\">了解详情</a>\n    </div>\n  </div>\n  <div class=\"title\">公司特色</div>\n  <div class=\"featureDiv\">\n    <ul class=\"list-inline\" style=\"height: 100px\">\n      <li class=\"rowElement\">\n          <img src=\"../../../assets/img/home_img/1.png\" >\n      </li>\n      <li class=\"rowElement rowElementtextli\">\n            <div style=\"font-weight: 900\">\n              业务定位\n            </div>\n            <p>\n              专注PPP模式绿色产业基金的第三方理财平台\n            </p>\n      </li>\n      <li class=\"rowElement\">\n          <img src=\"../../../assets/img/home_img/2.png\" >\n      </li>\n      <li class=\"rowElement rowElementtextli\">\n            <div style=\"font-weight: 900\">\n              产品特色\n            </div>\n            <p>\n              绿色产业基金为子基金,普通投资者的公募FOF\n            </p>\n      </li>\n      <li class=\"rowElement\">\n          <img src=\"../../../assets/img/home_img/3.png\" >\n      </li>\n      <li class=\"rowElement rowElementtextli\">\n            <div style=\"font-weight: 900\">\n              风险保障\n            </div>\n            <p>\n              强大的银行级风险保障,依托大数据建立模型\n            </p>\n      </li>\n      <li class=\"rowElement\">\n          <img src=\"../../../assets/img/home_img/4.png\" >\n      </li>\n      <li class=\"rowElement rowElementtextli\">\n            <div style=\"font-weight: 900\">\n              资金安全\n            </div>\n            <p>\n              第三方支付提供资金托管,全程监控,专款专用\n            </p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"title\" style=\"margin-top: 50px\">投资流程</div>\n  <div >\n    <ul class=\"list-inline\" style=\"height: 100px\">\n      <li>\n        <div>\n          <img style=\"height:60px;width:60px\" src=\"../../../assets/img/home_img/upload2.png\">\n        </div>\n      </li>\n      <li>\n        <div class=\"steps\" style=\"padding-top: 33px\">\n          注册<br>认证\n        </div>\n      </li>\n      <li>\n        <div>\n          <img style=\"height:60px;width:60px\" src=\"../../../assets/img/home_img/upload2.png\">\n        </div>\n      </li>\n      <li class=\"rowElement\">\n        <div class=\"steps\">\n          充值\n        </div>\n      </li>\n      <li>\n        <div>\n          <img style=\"height:60px;width:60px\" src=\"../../../assets/img/home_img/upload2.png\">\n        </div>\n      </li>\n      <li class=\"rowElement\">\n        <div class=\"steps\" style=\"padding-top: 33px\">\n          挑选<br>基金\n        </div>\n      </li>\n      <li>\n        <div>\n          <img style=\"height:60px;width:60px\" src=\"../../../assets/img/home_img/upload2.png\">\n        </div>\n      </li>\n      <li class=\"rowElement\">\n        <div class=\"steps\">\n          投资\n        </div>\n      </li>\n      <li>\n        <div>\n          <img style=\"height:60px;width:60px\" src=\"../../../assets/img/home_img/upload2.png\">\n        </div>\n      </li>\n      <li class=\"rowElement\">\n        <div class=\"steps\" style=\"padding-top: 33px\">\n          获得<br>收益\n        </div>\n      </li>\n\n    </ul>\n  </div>\n  <button class=\"btn btn-danger\" style=\"width:300px;margin-top:50px\">立即尝试</button>\n  <div class=\"title\" style=\"margin-top: 20px;align-content: flex-start\">合作伙伴</div>\n  <img style=\"\n    height: 80px;\n    float: left;\n    margin-left: 100px;\n    margin-bottom: 15px;\"\n    src=\"../../../assets/img/home_img/ba28b0668bbffb897110d28c9f447043.png\">\n</div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-info\" (click)=\"identified =! identified\">\n</button>\n<div class=\"panel panel-primary wrap\" *ngIf= \"identified\" >\n  <div class=\"panel-heading\">总资产</div>\n  <div class=\"panel-body\">\n    <div style=\"float: left; width:200px\" class = \"right\">\n      <div class=\"mytext\">\n      0.00元\n      </div>\n    </div>\n    <div style=\"float: left; width:200px\" class = \"lr\">\n      <div class=\"mytext\">\n      基金产品\n      </div>\n    </div>\n    <div style=\"float: left; width:500px\" class = \"left\">\n      <div class=\"mytext\">\n        储蓄罐\n      </div>\n      <button class = \"btn btn-danger\" style=\"margin-top:20px\">立即存钱\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"panel panel-primary wrap\" *ngIf= \"!identified\">\n  <div class=\"panel-heading\">总资产</div>\n  <div class=\"panel-body\">\n    <div style=\"float: left;width: 400px\" class=\"right\">\n      <div class=\"mytext\">\n        实名认证\n      </div>\n      <button class = \"btn btn-info\" style=\"margin-top:20px\" routerLink=\"/identify\">立即认证\n      </button>\n    </div>\n    <div style=\"float: left;width:400px\" class=\"left\">\n      <div class=\"mytext\">\n        储蓄罐\n      </div>\n      <button class = \"btn btn-danger\" style=\"margin-top:20px\">立即存钱\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"panel panel-primary wrap\">\n  <div class=\"panel-heading\">我的持仓(现在持有基金 0 支)</div>\n  <div class=\"panel-body\">\n    <div style=\"margin-top: 30px; margin-bottom: 30px\">\n      <a style=\"font-size: 20px;font-weight: 800\" routerLink=\"/fund\">\n      —选购基金—\n    </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"panel panel-primary wrap\">\n  <div class=\"panel-heading\">我的收藏</div>\n  <div class=\"panel-body\">\n    <div class=\"list-group\">\n      <a class=\"list-group-item\" routerLink=\"/fund/fundDetails\">\n        <h4 class=\"list-group-item-heading\">大资管 2.0 时代到来 公募 FOF 成未来创新中坚力量</h4>\n        <p class=\"list-group-item-text\">2017-07-28</p>\n      </a>\n      <a class=\"list-group-item\" routerLink=\"/fund/fundDetails\">\n        <h4 class=\"list-group-item-heading\">公募 FOF\"双重收费\":事实是个\"伪命题\" 投资者不必担忧</h4>\n        <p class=\"list-group-item-text\">2017-07-27</p>\n      </a>\n      <a class=\"list-group-item\" routerLink=\"/fund/fundDetails\">\n        <h4 class=\"list-group-item-heading\">FOF 渐行渐近 下半年公募市场迎机遇</h4>\n        <p class=\"list-group-item-text\">2017-08-01</p>\n      </a>\n      <a  class=\"list-group-item\" routerLink=\"/fund/fundDetails\">\n        <h4 class=\"list-group-item-heading\">成功投资 FOF 五要素</h4>\n        <p class=\"list-group-item-text\">2017-08-06</p>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "\n<div style=\"height: 80px;\"></div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"titles span2  col-xs-12 col-sm-3 col-md-2 rightList\" id=\"rightList\">\n      <ul class=\"nav nav-stacked\">\n        <li class=\"title\">我的主页</li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"firstpage\">我的账户</a></li>\n\n        <li class=\"SubTitle smaller\"><a class=\"SubTitleText\" routerLink=\"firstpage\">账户首页</a></li>\n        <li class=\"SubTitle smaller\"><a class=\"SubTitleText\" routerLink=\"settings\">账户设置</a></li>\n\n        <li class=\"SubTitle\" style=\"margin-top: 15px;\"><a class=\"SubTitleText\" routerLink=\"warehouse\">我的资产</a></li>\n\n        <li class=\"SubTitle smaller\"><a class=\"SubTitleText\" routerLink=\"warehouse\">我的持仓</a></li>\n        <li class=\"SubTitle smaller\"><a class=\"SubTitleText\" routerLink=\"searchlogs\">交易查询</a></li>\n\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10\" >\n      <router-outlet></router-outlet>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary wrap\">\n  <div class=\"panel-heading\">交易记录</div>\n  <div class=\"panel-body\">\n    <div style=\"margin-top: 30px; margin-bottom: 30px\" routerLink=\"/fund\">\n      <a style=\"font-size: 20px;font-weight: 800\">\n        <div>—目前暂无交易记录—</div>\n        <div>—前去购买产品—</div>\n      </a>\n    </div>\n    <div style=\"height: 100px\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbody\">\n  <div>\n  <p>\n    姓名：— —</p><p>\n  性别：— —</p><p>\n  地区：— —</p><p>\n  — —</p><p>\n  — —</p><p>\n  — —</p><p>\n  — —</p><p>\n  — —</p><p>\n  — —</p><p>\n  — —</p><p>\n  — —</p><p>\n  — —</p><p>\n  — —</p><p>\n  — —</p>\n  </div>\n  <div style=\"child-align: middle\">\n    <button class= \"btn btn-info\" style=\"margin: 20px; width:200px\">修改信息</button>\n</div>\n</div>\n\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary wrap\">\n  <div class=\"panel-heading\">我的持仓(现在持有基金 0 支)</div>\n  <div class=\"panel-body\">\n    <div style=\"margin-top: 30px; margin-bottom: 30px\">\n      <a style=\"font-size: 20px;font-weight: 800\" routerLink=\"/fund\">\n        —选购基金—\n      </a>\n    </div>\n\n    <div style=\"height: 100px\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "<h3>\n  大资管 2.0 时代到来 公募 FOF 成未来创新中坚力量\n</h3>\n<div class=\"sub\">作者：高君</div>\n<div class=\"sub\">来源：金融界网站</div>\n<div class=\"sub\">2017-07-28</div>\n<div class=\"text\">\n  <p>金融界网站7月27日讯 公募FOF步伐渐行渐近。作为业内具有划时代意义的大事件，公募FOF的到来持续引发市场各方的热切关注。7月27日下午，继北京之后，由金融界联合南方基金、招商基金、广发基金、鹏华基金、中邮基金、融通基金、民生加银、前海开源基金等38家公募基金公司共同举办的“智领未来.FOF开启基金投资新时代暨2017年全球资产配置与风险管理研讨会”在深圳成功举行。本次会议群贤毕至、盛况空前，与会嘉宾就中国公募基金行业发展趋势、FOF的准备工作、优势、发展前景等问题进行了激烈的观点交流和思维碰撞，诚为行业顶级盛会。\n  </p>\n  <p>会上，南方基金南方基金首席市场官吴增涛先生和中国金融在线集团智能金融业务总经理何剑波先生作为主题演讲环节的主讲嘉宾，发表了关于FOF与大类资产配置的主题演讲。\n  </p>\n  <p>吴增涛在演讲中表示，作为业内FOF业务领域的先行者，南方基金高度重视FOF业务的开展，专门成立宏观研究与资产配置部，负责大类资产配置策略、资产投资模型和资产投资组合的研究，并进行资产配置类产品的投资管理工作。为抢占FOF市场制高点，南方基金抢先与Morningstar晨星中国达成深度合作，借助后者在基金研究、资讯服务、资产配置等方面积淀的丰富经验和优势为南方基金FOF组合提供高效的投资管理支持。\n  </p>\n  <img src=\"../../../assets/img/information/fof-1.jpg\">\n  <p>吴增涛指出，大多数人参考美国FOF的发展情况，预估中国FOF的发展空间巨大。但是这种简单的类比，似乎说服力不强，因为美国FOF发展拥有自身的条件，美国市场与中国存在很大的差异。我们应该更加关注如何根据中国的实际情况，研发满足投资者需求的FOF产品。目前，南方基金已基于成熟的风险平价模型，以绝对收益为目标，发行了专户FOF产品，取得了良好的业绩。同时，已上报的公募FOF产品正在等待审批。后续，将配合养老金体系第三支柱的推出，结合个人投资者养老、教育、买房等理财目标，匹配机构投资者特定的资产管理需求，推出能够在未来一定阶段内满足客户需求的系列FOF产品，通过量身定制的形式为客户提供资产管理解决方案，打造南方SUPER FOF的品牌。\n  </p>\n  <p>谈及公募FOF的意义，吴增涛认为，FOF不单单是一种新的理财产品，重要的是，FOF能够实现底层资产投资与大类资产配置的专业化分工，将开创基金行业新的时代。一方面，在产品设计层面引入财富管理的理念，弥补行业价值链缺失，创造新的价值，可根据投资者的投资目标、投资期限和风险偏好设计产品。另一方面，在投资运作层面创造新的系统化分工模式，让专业的人做专业的事，形成新的团队，专注于大类资产的研究与投资。这将有利于推动基金销售从“产品导向”向“客户需求导向”转型，推动基金公司从“投资管理机构” 向“财富管理机构”转型，从“产品制造商”向“整体解决方案提供商”转型。\n  </p>\n  <p>在吴增涛看来，公募FOF的推出很可能重塑行业格局，引领基金公司在更高层次进行全方位的竞争。FOF、基金组合、智能投顾、私人财富管理以及机构客户解决方案等，从本质上来讲，都是以客户需求为导向，以客户目标风险与收益为出发点，为客户提供资产配置与管理服务。未来，基金公司的竞争将从产品质量的竞争，进一步升级到资产配置能力、客户需求挖掘能力、产品设计能力以及智能技术应用能力的全方位竞争。\n  </p>\n  <p>作为国内首批成立的基金公司，南方基金凭借过去19年的优良业绩和良好的风险控制树立了稳健风格的金字招牌，在备战公募FOF业务方面已具备厚积薄发之势。今年上半年，市场持续震荡，南方权益、固收条线继续保持了稳健业绩。Wind数据显示，截至6月30日，南方旗下净值增长率超过10%的基金有26只，16只基金的业绩涨幅跻身同类前10%，43只基金业绩排名同类前20%。从更长期业绩来看，南方基金旗下有18只产品近5年年化回报超10%，且该18只基金的近5年累计收益率均超70%，显示出不俗的长跑能力。\n  </p>\n  <p>根据海通证券(14.80 +0.07%,诊股)7月发布的报告显示，南方旗下权益基金无论是绝对收益还是超额收益，近半年、近一年、近两年、近三年、近五年内的业绩排名都稳居行业前1/3、前十大基金公司前三的身位，表现出出色的长跑能力和业绩管理的稳定性。近五年来（2012年-2016年）南方基金凭借出色的投研业绩和风控实力为投资者赚取660.23亿元的累计回报，近三年（2014年-2016年）累计超过514亿元。作为国内首批成立的基金公司，南方基金已用过去19年的优良业绩和良好风控打出了“稳健”风格的金字招牌。没有大牛市时的昙花一现，更没有股市低迷时的随波逐流，南方基金始终用“稳”在诠释资产管理的真谛。\n  </p>\n  <p>继吴增涛之后，中国金融在线集团智能金融业务总经理何剑波先生就智能金融与FOF的关系，发表了自己的看法。\n  </p>\n  <p>何剑波称，很多老百姓(45.36 -2.11%,诊股)都是在市场相对高点买基金，而在相对低点不愿意买基金，所以时机的错配导致很多基民并没有赚到钱，他以自己的夫人为例打趣道，“包括我夫人也是，买了这么多年基金，也没赚到什么钱，这是事实。”而基金公司出于无奈，为了迎合客户的需求，在基金发行中也只能时机错配，进一步造成了基民盈利更加困难。\n  </p>\n  <p>何剑波认为，公募基金本身平滑风险的效果是极其有限的，由于中国市场尤其是股票市场中，个股与板块之间的高度相关性，基金本身第一次配置并没有很好地对冲掉系统性风险，而通过FOF可以很好的解决这一问题。“通过FOF能不能把商品、债券和国外的权益类产品集中起来做二次平滑，对风险控制是不是更加有利？” 何剑波表示。\n  </p>\n  <p>何剑波认为，智能金融的配置内核就是FOF，但是，基于国内的市场环境，实践中仍然有不少的问题存在，尤其是涉及到境外市场的资产配置方面，由于资本管制，QDII 的额度总是处于非常紧张的状态，因此，智能化配置当中出现一些阻碍和问题，但是，相对来说还不错，风险控制的也还比较好。\n  </p>\n  <p>以用户需求为导向，智能金融首先在于精准的用户画像。何剑波表示，用户画像是智能金融当中非常重要的子系统。\n  </p>\n  <p>“有了用户分析子系统之后，如果把主动管理基金纳入进来，首先就要对基金进行打分，或者对基金做标签，我们做了两个分析系统。”何剑波称，一个系统是对基金风格的分析系统，因为只有基金风格相对固定，不会发生太大飘移的时候，才有智能配置的价值。另一个系统是基金评价体系。“我根据基金收益、风险的特征，希望找到比较好的基金评级结果。”通过科学的评价体系，何剑波希望可以寻找到风控较为稳健，首席持续性较好的基金标的。\n  </p>\n  <p>主题演讲环节之后是十分钟的茶歇间隙。随后，是本次研讨会的嘉宾圆桌论坛环节，在圆桌论坛环节，到场嘉宾热议公募基金产品的创新问题。\n  </p>\n  <p>公募产品要有所创新，银行、保险的需求改变，特别是终端零售需求客户的改变影响到公募基金产品有一些变化，甚至做了一些创新，其中公募FOF也是创新的一个类型。各家机构如何看待这种变化，并做出产品方面调整？\n  </p>\n  <p>对此，民生加银基金资产配置部负责人王铮表示，从以前的从业经验来看，如果是绝对收益的产品，客户是比较感兴趣的，所以民生加银想从绝对收益入手。王铮认为，国内的投资者教育是一个比较长期的过程，但现在的大环境比较有利。给客户提供的产品，风险可控，收益有一定的竞争力后，当客户看到这个市场的价值之后，慢慢对产品的接受度也会越来越高。\n  </p>\n  <p>鹏华基金资产配置与基金投资部FOF投资副总监赵强认为，创新要跳出产品的层面，就是说它是公司的层面，FOF同样如此，中国资本市场之前是公募基金不能投公募基金，这是法规的要求，现在进行了供给侧改革之后，公募基金未来的发展空间非常大，这个过程中就需要不断的创新，不断适应供给侧变化的要求去壮大基金行业。\n  </p>\n  <p>前海开源基金FOF投资部负责人苏辛认为，公募产品的创新主要体现在以下几点：一、投资目标的创新方面，传统公募产品主要以做相对收益为主，现在不断有一些做绝对收益或者降低波动率目标的公募产品开始出现，投资目标的改变也会导致公募产品投资策略的变化，除了传统多头策略之外，多空策略、绝对收益策略、波动率策略会越来越多的应用到公募基金产品中。二、目前公募产品的创新还在于投资范围的创新，传统公募产品的投资范围只有股票、债券、货币市场工具，现在投资范围已经扩展到商品、基金、REITs、新三板、非上市股权等投资标的。三、公募产品的创新还存在客户边界的创新，传统的公募主要是盯住银行零售客户，现在公募产品的目标客户已经扩展到企业客户、互联网客户、高净值个人客户。四、其他创新，主要是产品要素方面的创新，包括浮动费率、杠杆、分级等。FOF也是一个创新，我们觉得目前市场上的ETF或者被动型债券基金还比较少，将来这方面的产品线有可能进一步丰富和发展。\n  </p>\n  <p>广发基金资产配置部投资经理朱坤表示，FOF基金是2.0时代，所有做FOF的人都是围绕目标收益、目标风险做工作，产品模式是第一个创新。第二个创新是大家对于各种各样投资技术上的创新，比如大家以前会想我选一个股票，怎么构建一个股票组合。\n  </p>\n  <p>中邮基金创新业务部FOF拟任基金经理王喆表示，近几年因为客观因素的变化，大部分产品创新还是停留在申赎方式、投资范围等方面，真正的产品创新只有分级基金。王喆认为，随着FOF的推出，各基金公司，尤其是已经有产品布局的公司，已经开始加速了指数覆盖，但起步较晚的公司在这方面会比较困难，未来大公司以完善自己的产品布局为核心，中小基金公司可能会将精力放在差异化竞争上；此外，FOF基金不仅会催生市场对于工具化产品的需求，也是现有工具化产品的替代。\n  </p>\n  <p>南方基金宏观研究与资产配置部高级研究员夏莹莹表示，从全球来看，未来产品发展的几个方向，一是另类资产的变化，还有一个是怎样为客户提供最好的综合解决方案，解决方案的提供涉及到你对机构客户、个人客户如何深挖他们的需求，只有满足需求的产品，才能在市场中活下来。\n  </p>\n  <p>招商基金FOF拟任基金经理徐冉认为，产品创新更重要的还是需求端和供给端的创新，FOF产品在这个阶段出来的创新是非常有市场空间的。\n  </p>\n  <p>徐冉认为，未来资管行业持续往专业化发展是一个必然的方向，公募基金已经有快二十年的历史了，不管是从规范性、专业化还是从持续的业绩回报来讲，都给客户创造了一定的价值，是有存在价值的，未来绝对收益产品非常有空间。\n  </p>\n  <p>融通基金FOF业务负责人李勇表示，基金行业有两个问题，一是对普通投资者来说，多数不会做风险匹配，而是做收益匹配，特别是看到权益性的产品，他想的是能赚多少钱，而不是想要承受多的风险。其次是资产配置能力完全反过来，在风险最大的时候，期望风险收益最小的时候，增配权益性产品，还是在风险低的时候、期望收益高的时候，低配权益性产品，总体来说就是资产配置能力的欠缺。\n  </p>\n  <p>李勇表示，另一方面，从供给端来说，现在基金产品已经有很多，但风险收益产品的连续性还不够，固定收益的产品，收益很稳定，但增值效果没那么好，权益类可能收益好，但波动又很大，普通投资者拿不住，这也是基金收益好，但基民赚不到钱的原因，中间缺乏一个风险适中，能带来比较好增值效果的基金。真正风险适中又有增值潜力的产品，没有形成比较明确的系列或者特征，而FOF正好可以弥补这一缺口，这是产品创新比较核心的一点。\n  </p>\n</div>\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<h3>\n  公募FOF\"双重收费\":事实是个\"伪命题\" 投资者不必担忧\n</h3>\n<div class=\"sub\">作者：鸡血石</div>\n<div class=\"sub\">来源：新浪</div>\n<div class=\"sub\">2017-07-27</div>\n<div class=\"text\">\n<p>聚焦公募FOF“双重收费”：事实是个“伪命题” 投资者不必“杞人忧天”\n</p><p>市场都在等待公募FOF批复，对于优势较明显的FOF产品，市场对其收费很关注，也有投资者对FOF的双重收费问题表示担忧。接下来我们采访专家、结合一些研究员的观点谈谈FOF收费问题。总体上，监管层、基金研究专家王群航、媒体研究员综合认为，不存在“双重收费”概念，投资者可以不用担心。\n</p><p>监管机构：明确FOF收费指引 减少双重收费\n</p><p>根据证监会发布的《公开募集证券投资基金运作指引第2号 ——基金中基金指引》对收费问题做了明确规定，旨在减少双重收费，防范利益输送。\n</p><p>《指引》第五条规定：一是基金管理人不得对 FOF 财产中持有的自身管理的基金部分收取 FOF 的管理费。二是基金托管人不得对 FOF 财产中持有的自身托管的基金部分收取 FOF 的托管费。三是 基金管理人运用 FOF 财产申购自身管理的基金（ETF 除外），应当通过直销渠道申购，且不得收取申购费、赎回费、销售 服务费等销售费用。\n</p><p>王群航：FOF的“双重收费”是个伪命题\n</p><p>济安金信副总经理、基金评价中心主任王群航表示，所谓的“双重收费”，事实上是一个伪命题。FOF作为一种理财产品，尤其是主动型的FOF，包含了管理人方方面面的辛勤劳动，研究、决策、交易、清算、营销，等等，有支出、有成本，并且，这种劳动的成果理论上是对于投资者有益的，就应该理直气壮、理所当然地收取相关的费用，否则，一种不能够有基本收入的服务，一个不能够有合理收入的行业，永远都不可能发展起来。。\n</p><p>对于内部FOF，以及涉及到混合FOF里投资自己公司旗下基金的情况，我们还是建议要参照联接基金收费方式进行处理，那就是：免费；对于外部FOF、内外部兼有投资的混合FOF，即投资了别人家的基金，该如何收，就如何收，\n</p><p>媒体研究员：完全透明市场竞争中 不必担忧FOF“二次收费”\n</p><p>投资者报研究员常阳表示，市场担忧FOF“二次收费”大可不必，有些“杞人忧天”。主要因为FOF定位于稳健收益，费用应该低于积极操作的产品；对其他公司产品进行投资的FOF，完全可以通过大额申购的方式降低申购赎回费；在完全透明竞争的市场中，任何一家公司的费用高低都会被全市场品头论足，各家公司都会绞尽脑汁降低费用。\n</p><p>市场中44家基金公司向证监会申请的78只产品仍在待审批中，对于FOF产品收费具体情况还不可知，待后续FOF产品陆续放开，FOF收费情况将揭晓！\n</p>\n</div>\n"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = "<h3>\n  FOF渐行渐近, 下半年公募市场迎机遇\n</h3>\n<div class=\"sub\">来源：金融界基金频道</div>\n<div class=\"sub\">2017-08-01</div>\n<div class=\"text\">\n<p>\n在海外发达市场(例如美国)，FOF历经几十年的发展，早已是一个非常成熟的产品，而史博认为国内FOF发展前景广阔。首先是国家层面政策\"新国九条\"等顶层设计的逐步落实，以及保险机构、养老金、社保基金的参与。网金宝表示，FOF和养老金投资相辅相成，史博指出FOF十分适合作为养老金投资的方式，目标日期FOF是养老金产品市场上重要的品种之一。\n  </p><p>\n\n2017年5月，监管层下发《养老型公开募集证券投资基金指引(试行)》初稿，对于养老型公募基金的投资品种选择和资产配置，史博认为必然成为未来重点。网金宝表示，养老基金投资的主要特点是长期投资，风格稳健，控制风险，收益稳定。养老型基金追求组合业绩长期稳定，而FOF则是资产配置的良好承载形式，相比于普通基金，史博认为FOF型的养老基金与《指引》的理念更为契合，也能更好地实现养老型基金的风险收益特征。\n</p><p>\n\n\n中国基金业协会副会长钟蓉萨在出席\"2017年财富管理与资产配置高峰论坛暨南方基金&晨星中国合作仪式\"时强调指出，目前约37家公司69只FOF基金都在排队等候发行。而此前也有市场人士预测，三季度将迎来FOF产品的爆发期。\"公募FOF的推出有利于解决基金选择难、基金同质化等问题，通过公募FOF的实践，也有助于提升公募的资产配置能力，为普通投资者带来更好的投资体验。\n</p><p>\n\n\n就目前基金市场现状而言，一方面，基金数量繁多、同质化严重，投资者的选择难度很大;另一方面，市场波动性大，择时操作的难度很大。投资者的投资目标和期限是多样化的，对大类资产的需求也是全方位的，FOF则为解决投资者这一痛点提供了新的工具。\n</p><p>\n\n\n分析师认为，市场的不可预测性在提高择时难度，资产管理长期的收益更多地取决于资产配置能力，而FOF最大的价值就是资产配置。未来，做好资产配置仍是投资制胜的关键。对于普通投资者而言，应以全球视角挑选最具成长性的资产，并可通过基金组合的形式达到收益增强的目的。\n  </p></div>\n"

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "<h3>\n  成功投资FOF五要素\n</h3>\n<div class=\"sub\">作者：陈嘉禾</div>\n<div class=\"sub\">来源：证券时报</div>\n<div class=\"sub\">2017-08-06</div>\n<div class=\"text\">\n<p>\n  　　\n\n  　　我们究竟应该如何投资基金？对于专门从事这种购买基金的基金来说，通用的名字就是FOF（基金中的基金，英文Fund of Fund）。这里，就让我们来看一下，如何才能专业的挑选到好基金，做一个好的FOF。\n</p><p>\n  　　许多投资者一谈到买基金，就说哪个哪个基金，最近业绩特别好，赶快可以买之类。殊不知，按照历史业绩去选择基金，几乎可以说盲人摸象，按图索骥，毫无准确率可言。\n</p><p>\n  　　一个基金最近一段时间的业绩，可以由很多原因决定：可能是标的资产表现特别好，可能是基金经理重仓压宝运气特别好，可能是过分使用杠杆（在私募基金中相对更常见一些），也有可能是正好赶上一个泡沫，年轻的基金经理不能识别泡沫，因此胆子特别大导致短期业绩特别好等等，不一而足。\n</p><p>\n  　　不管怎么说，一个基金最近业绩特别好，并不是一个很重要的指标，甚至根本不是一个有意义的指标：这就和看股票的股价走势选股票没什么区别。那么，到底应该如何选择基金，如何做一个好的FOF？\n</p><p>\n  　　首先，你得完全了解这个基金经理的投资哲学。说到底，FOF赚钱的根本来源，是选中的基金经理，其投资能力相对市场更高。因此，投资者需要非常了解这个基金经理的水平究竟如何，知识储备是否丰富、完整，投资哲学到底是怎样，是否有成熟、独立、大致准确的投资判断体系。\n</p><p>\n  　　但是如何判断一个素不相识的基金经理的水平呢？中医诊病有“望闻问切”四法。其实，判断一个基金经理的水平究竟如何，也可以通过类似的方法。\n</p><p>\n  　　所谓“望、闻”，就是通过基金经理历史上业绩的表现、选股的情况和当时市场的匹配程度，来判断基金经理的水平如何。比如历史上市场泡沫期间，基金经理反而买入了一些低估值的股票，不理会泡沫的疯狂，比如重仓股稳健、换手率低但业绩不错，这些都是发现一个好基金经理的方法。反之，则可能面对的是一个心浮气躁、毛手毛脚的基金经理。\n</p><p>\n  　　所谓“问、切”，就是看看基金经理的理论水平如何。而搜集一个人的理论水平，往往需要细致比较历史上各个信息来源提供的言论，而不是光看基金的宣传材料。比如在历史上接受采访时可以聊出非常有深度的判断，在大熊市中反而发表乐观的言论，长期的理论分析框架统一而不散乱，这些都是发现一个好基金经理的方法。\n</p><p>\n  　　其次，在寻找到好的基金经理以后，选择基金还要考虑这个基金经理的动机如何、所在的基金管理平台如何。\n</p><p>\n  　　如果一个基金经理很有水平，但所在的基金公司急功近利，逼迫他去追逐市场热点，或者利益机制不到位，不能调动优秀基金经理的全部动力，不能引起他努力的动机，那么基金的表现也会因此打折扣。\n</p><p>\n  　　就这点来说，一个稳定、市场化、开明包容、规范健康的平台，如同好的基金经理一样不可或缺。反过来，好的平台也会修正，规范基金经理的错误决策，从而降低基金投资失误的概率。\n</p><p>\n  　　最后，需要考虑的，则是所投资基金所在的大类资产的长期时点。\n</p><p>\n  　　正所谓“覆巢之下焉有完卵”。如果一个大类资产当时的市场情绪特别疯狂，价格特别贵，泡沫特别大，那么能力再优秀、动机再强的基金经理、资质再好的基金管理平台，也很难让投资者赚多少钱，充其量能做到不亏钱而已。\n</p><p>\n  　　举例来说，在A股2007年底到2008年底、2015年中到2016年，能够不亏钱的基金就已经是第一流的水平，赚钱的则凤毛麟角。反之，在2008年年底、2014年年中这些时点，即使是挑选一个“无人干预、自动管理”的指数基金，也都可以取得不错的收益。\n</p><p>\n  　　在挑选了优秀的基金经理、良好的基金管理平台和管理机制、不错的大类资产时点以后，我们离组建一个好的FOF就只差两步了：分散和耐心。\n</p><p>\n  　　电影《大空头》中，曾经引用过一句马克·吐温的名言：“让我们陷入困境的不是无知，而是看似正确的谬论和误断。”对于判断这件事来说，很难有人能保证自己的判断永远准确无误。因此，适度的分散、多选择一些基金，就成为保证FOF优益又稳健的必备方法。\n</p><p>\n  　　一旦按照以上的思路选定基金，良好的耐心就成为最后一个要素。任何优秀的基金都不可能长期一帆风顺，对于好的基金来说，短期业绩的低迷，反而往往预示着长期投资的机会。历史上鲍叔牙选管仲、秦穆公选孟明视，都不以暂时的失败而废贤才良将，最终才有所收获。因此，对于好的FOF投资来说，一旦选定标的，极佳的耐心和坚韧，就不可或缺。\n</p><p>\n  　　所以，选择优秀的基金经理、良好的管理平台、恰当的大类资产、适度的分散、耐心与坚韧，只有把这五者结合在一起，才能做成优秀的FOF。一个好的FOF，会让这个市场上最聪明的人努力帮你赚钱，投资者自己却从此不必再操劳忧虑，岂不懿欤。\n</p><p>\n  　　（作者系信达证券首席策略分析师、研发中心执行总监）\n</p></div>\n"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 20px\">\n<div class=\"list-group\">\n  <a class=\"list-group-item\" routerLink=\"/information/fof-11\">\n    <h4 class=\"list-group-item-heading\">大资管 2.0 时代到来 公募 FOF 成未来创新中坚力量</h4>\n    <p class=\"list-group-item-text\">2017-07-28</p>\n  </a>\n  <a class=\"list-group-item\" routerLink=\"/information/fof-12\">\n    <h4 class=\"list-group-item-heading\">公募 FOF\"双重收费\":事实是个\"伪命题\" 投资者不必担忧</h4>\n    <p class=\"list-group-item-text\">2017-07-27</p>\n  </a>\n  <a class=\"list-group-item\" routerLink=\"/information/fof-13\">\n    <h4 class=\"list-group-item-heading\">FOF 渐行渐近 下半年公募市场迎机遇</h4>\n    <p class=\"list-group-item-text\">2017-08-01</p>\n  </a>\n  <a  class=\"list-group-item\" routerLink=\"/information/fof-21\">\n    <h4 class=\"list-group-item-heading\">成功投资 FOF 五要素</h4>\n    <p class=\"list-group-item-text\">2017-08-06</p>\n  </a>\n</div>\n</div>\n"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "<h3>\n  “绿色”已成信贷新标准：发展迅速并实现突破\n</h3>\n<div class=\"sub\">记者：常艳军</div>\n<div class=\"sub\">来源：经济日报</div>\n<div class=\"sub\">2017-06-20</div>\n<div class=\"text\">\n<p>\n  核心提示：作为资金出借方，商业银行从工作机制、信贷流程等方面不断强化绿色标准，完善绿色信贷政策，并拓展绿色信贷资金来源，支持环保、节能、清洁能源等绿色产业发展，助力经济绿色转型。对商业银行而言，“绿色”已成为新的信贷标准。\n</p><p>\n  近几年，在各方推动下，我国绿色金融发展迅速，在多个领域实现了突破。作为资金出借方，商业银行从工作机制、信贷流程等方面不断强化绿色标准，完善绿色信贷政策，并拓展绿色信贷资金来源，支持环保、节能、清洁能源等绿色产业发展，助力经济绿色转型。对商业银行而言，“绿色”已成为新的信贷标准。\n</p><p>\n  信贷“环保一票否决”\n</p><p>\n  去年，人民银行、财政部等7部委联合印发的《关于构建绿色金融体系的指导意见》对绿色金融的发展作出了顶层设计，并提出要大力发展绿色信贷。银监会也陆续出台《绿色信贷指引》《能效信贷指引》等专项政策，推出绿色信贷统计标准、绿色信贷实施情况关键评价指标等行业标准。\n</p><p>\n  中国人民大学重阳金融研究院客座研究员董希淼说，商业银行不断推进绿色信贷发展，提升绿色金融的战略认知，将节能环保等作为信贷审批的重要前提和核心指标，对不符合产业政策和环境违法的企业和项目实行信贷控制。\n</p><p>\n  实践中，各商业银行不断优化绿色信贷工作机制和流程。兴业银行实现绿色信贷专业审批和优先审批，安排专项财务资源用于支持激励在绿色金融客户建设、重点项目投放、创新产品落地等方面的业绩；哈尔滨银行在考核政策中设置绿色产业项目推进指标，按照已认定绿色产业项目规模对分行实施正向激励，坚持向绿色项目倾斜资源；浙江安吉农商行制定和完善绿色指标，初步建立以行业投向、行业分类为维度的绿色信贷分类标准，合理引导信贷投向。\n</p><p>\n  工商银行河北省分行信贷风险官李夺说，工行已制定完善《绿色信贷建设实施纲要》《节能领域信贷指导意见》等一系列绿色信贷政策体系。绿色信贷政策有两大核心，一是在贷款投向上一定要符合绿色标准；二是对未达到国家环保标准并存在重大环保隐患的项目和企业，实行环保一票否决制。\n</p><p>\n  “黑龙江是农业大省，秸秆等农业废弃物产量很大，近几年黑龙江银行业支持秸秆综合利用，不仅减少了秸秆焚烧带来的大气污染，还将秸秆变成新材料、新能源。”黑龙江银监局局长包祖明说。\n</p><p>\n  实行环保一票否决制体现出银行对于绿色发展的重视。记者从河北银监局了解到，2017年一季度，河北省银行业发放绿色信贷2213.99亿元，拒绝不符合绿色信贷政策贷款申请617笔、金额18.15亿元，退出不符合绿色信贷政策贷款7笔、金额1.33亿元。\n</p><p>\n  绿色资金专款专用\n</p><p>\n  “与普通信贷资金来源一样，银行绿色信贷资金主要来自对个人和企业客户的负债以及同业拆借资金。”恒丰银行研究院商业银行研究中心负责人吴琦说，随着绿色信贷需求迅速增加以及银行融资渠道的拓展和业务模式的多元化，银行绿色信贷资金来源得以拓宽，比如发行绿色金融债、绿色信贷资产证券化等。\n</p><p>\n  今年4月份和5月份，哈尔滨银行共发行绿色金融债券50亿元，将重点投向污染防治设施建设运营项目、生物质资源循环利用项目等。哈尔滨银行相关部门负责人说，截至5月中旬，符合绿债资金用途且经第三方机构认定的拟投绿色项目金额已近20亿元。\n</p><p>\n  兴业银行杭州分行绿色金融部总经理汤瑛说，总行发行的500亿元绿色金融债已有50亿元投入浙江省绿色产业项目。去年，兴业银行发行了总金额为26.46亿元的绿色信贷资产支持证券，并将盘活资金再次投放到绿色产业领域。\n</p><p>\n  资金渠道的拓宽，为扩大绿色信贷投放提供了资金保障。浙商银行发展研究部分析研究中心总经理杨跃说，银行发行绿色金融债可与绿色信贷中长期融资项目匹配，能解决绿色项目融资需求与银行资金期限错配的问题，同时还可成为主动负债的工具，扩大银行对绿色产业的中长期信贷投放能力。\n</p><p>\n  吴琦说，绿色金融债可以定向支持绿色产业和绿色项目，实现专款专用，但目前绿色金融债相对于传统金融债没有体现出明显的成本优势。同时，绿色信贷资产证券化也处于发展初级阶段，尚需不断探索。\n</p><p>\n  防范风险各有对策\n</p><p>\n  绿色项目前期投入较大、投资回报期较长，具有高风险、低收益的特征。同时，绿色信贷风险管理专业性较强。杨跃说，绿色信贷涉及领域专业性强、变化快，商业银行欠缺对这些行业和领域技术的识别能力。董希淼认为，银行发展绿色信贷，需要熟悉生产经营、节能、环保等领域的专业型人才，帮助审查项目融资过程中的文件，提出专业意见建议，并对企业在生产经营过程中产生的风险开展投贷后管理和提出应对解决方案。\n</p><p>\n  “绿色信贷涉及节能、环保等专业性较强的领域，如何有效获取企业环境、财务、经营等信息是银行面临的首要难题，也是防控绿色信贷领域风险的关键所在。”浙江银监局相关负责人说。\n</p><p>\n  商业银行在防控绿色信贷领域风险上也各有对策。哈尔滨银行严格项目准入和贷前调查，关注客户的环保风险隐患，并重点关注企业烟气脱硫、工业废水处理以及垃圾处理等相关减排设施的运行情况，及时防范因减排设施运行不正常、排污超标而引发的环境风险。同时，积极培养、储备环境与社会风险评估及授信审查的复合型人才。浙商银行严格执行绿色项目双人调查制度，持续监测客户对环境和社会风险的管理状况，并将其作为决定信贷资金拨付的重要依据，对环境违法违规及发生重大安全事故的企业或项目，采取下调资产质量等级、停贷、收贷等措施。\n</p><p>\n  据了解，为推动解决绿色信贷领域银企信息不对称，浙江银监局与浙江省环保厅合作建立起了绿色信贷信息共享平台，并将其纳入信贷流程管理。目前，平台已拥有10200多家企业的环境行为信用评级、环境违法违规等各类信息。\n</p><p>\n  防控绿色信贷领域风险，吴琦认为，银行可对绿色信贷客户实行细分，提高风险定价能力，根据其抵押物价值和经营状况实施精细化、差异化定价；探索适用于绿色项目和客户的风控模型，还可与政府部门探讨设立绿色金融风险补偿基金，由政府、银行和贷款客户三方共担风险。\n</p></div>\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<h3>\n  央行马骏：绿金委将利用央行再贷款支持绿色信贷\n</h3>\n<div class=\"sub\">作者：张晗</div>\n<div class=\"sub\">来源：中国网财经</div>\n<div class=\"sub\">2017-04-15</div>\n<div class=\"text\">\n<img src=\"../../../assets/img/information/new-12.jpg\">\n<p>\n\n  　　人民银行研究局首席经济学家、中国金融学会绿色金融专业委员会主任马骏\n</p><p>\n  　　4月15日，2017中国金融学会绿色金融专业委员会（以下简称“绿金委”）年会暨中国绿色金融峰会在京召开。人民银行研究局首席经济学家、中国金融学会绿色金融专业委员会主任马骏在会上介绍了绿金委2017年度工作计划。\n</p><p>\n  　　马骏表示，在2017年度和今后几年内，绿金委的主要工作目标就是充分动员和利用金融界和绿色企业界的资源，支持和推动《关于构建绿色金融体系的指导意见》的细化和落地，具体来说，绿金委及其成员单位要在如下领域发挥更加积极的作用：\n</p><p>\n  　　支持在中央和地方层面设立绿色发展基金，支持民间资本与外资设立绿色基金；开展对绿色项目的贴息和提供专业化担保的试点，利用央行再贷款支持绿色信贷，降低绿色项目的融资成本；推动和支持金融机构及企业发行绿色债券，积极开展绿色资产证券化；进一步完善绿色债券的认证与评级方法，建立自律机制，提升服务质量，探索降低绿色债券认证成本的方法；推出更多的绿色股票指数和相关金融产品；强化上市公司和发债企业的环境信息披露，开展上市公司环境信息披露试点；推动在环境高风险领域建立环境污染强制责任保险制度；支持更多的金融机构开展环境风险压力测试；推动“一带一路”建设中的绿色投资；加强绿色金融领域的多边与双边国际合作，进一步提升中国在该领域的影响力。\n</p></div>\n"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = "<h3>\n  国外发展绿色金融经验借鉴及我国绿色金融发展问题与措施\n</h3>\n<div class=\"sub\">作者：陈嘉禾</div>\n<div class=\"sub\">来源：金融时代网</div>\n<div class=\"sub\">2017-08-04</div>\n<div class=\"text\">\n<p>\n  绿色金融也被称为环境金融或可持续性金融，它是指能产生环境效益以支持可持续发展的投融资活动，这些环境效益包括减少空气、水和土壤污染，降低温室气体排放，提高资源使用效率，减缓和适应气候变化并体现协同效应等。绿色金融要求金融部门将环境保护作为一项基本原则，在投融资决策过程中充分考虑潜在的环境影响，通过信贷、保险、证券及金融衍生工具多种金融手段，引导资金流向环境友好型产业和资源节约与高效利用领域，同时实现环境保护和经济增长的双目标，促进经济社会可持续发展。\n</p><p>\n  21世纪以来，全球绿色金融步入系统化、制度化的发展轨道，金融机构对环境风险的认知不断强化，推行了绿色金融的国际规则，各国绿色金融制度逐步完善，绿色信贷、绿色债券、绿色保险、绿色基金、绿色指数产品、绿色资产抵押支持证券等绿色金融创新产品迅速发展，金融体系的绿色化已成为全球趋势。\n</p><p>\n  发展绿色金融是推动当前我国经济金融结构调整，实现经济和环境可持续发展的必然路径，是我国未来金融发展的方向，也是我国金融领域的一场创新与变革。\n</p><p>\n  一、国外如何发展绿色金融\n</p><p>\n  1、美国绿色金融发展：以制度保障和金融创新为特点\n</p><p>\n  美国作为发达经济体，在绿色金融领域起步较早。美国将绿色环保责任写入相关环境法律，并制定相应的绿色金融法规，保证绿色金融有法可依，运用法律制度的强制力促进绿色金融发展。\n</p><p>\n  美国绿色金融制度的体系构建比较完善。20世纪70年代以来，美国国会通过了20多部涉及水环境、大气污染、废物管理、污染场地清除等有关环境保护的法律，每部法律都对污染者或公共机构应采取的措施提出了严格要求。在完善的环境法律之下，联邦政府及各州政府制定了多部促进绿色金融发展的法律、法规，明确了对金融机构、产业部门、市场中介和个人等主体的相应规范，为优化配置绿色金融资金奠定了良好基础。例如，1980年，美国联邦政府出台了《全面环境响应、补偿和负债法案》，该法案规定银行必须对客户造成的环境污染负责，并支付修复成本，且这种贷方责任可以追溯，政府不仅约束银行，还对投资者和第三方评级机构设立了环境条款。\n</p><p>\n  美国注重绿色产业发展，以绿色产业拉动绿色金融。近年来，美国能源部对清洁能源和高端车辆制造项目提供贷款担保，通过降低融资成本来支持国内清洁能源技术的商业化。\n</p><p>\n  绿色金融创新产品丰富是美国绿色金融发展的另一大特点，这与美国拥有发达的金融市场有关。绿色金融创新产品包括绿色信贷、绿色保险、绿色债券等，涉及生产、消费诸多环节。\n</p><p>\n  例如，绿色信贷方面，美国银行创新了支持节油技术发展的无抵押优惠贷款，纽约、夏威夷、康涅狄格等州成立了绿色银行，使用创新的商业模式，吸引民间资金投资绿色行业，还有十几个州正在考虑建立相似的机制。绿色保险方面，1988年，美国成立了专业的环境保护保险公司，之后在强制保险方式、个性化保险设计、政府担保上不断创新。总之，通过各种金融产品的创新，美国为绿色金融资金提供了丰富的投资渠道，推动绿色金融资金供给与需求形成相互促进的良性循环。\n</p><p>\n  2、欧盟积极运作政府绿色资金推动绿色金融发展\n</p><p>\n  欧盟对绿色金融发展十分重视，绿色金融不仅历史悠久，而且法律制度体系成熟，产品创新活跃。\n</p><p>\n  与美国相比，欧盟在发展绿色金融的过程中，政府的支持和引导更为积极主动，欧盟及各成员国政府在催化和便利社会资金支持绿色增长方面发挥着关键性作用，在市场化运作的前提下，通过政府少量的资金撬动了大量社会资源投入绿色项目，在资金运用上收到了良好的杠杆效应。\n</p><p>\n  一是通过税收优惠、政府担保激励绿色环保项目。\n</p><p>\n  例如，德国政府对绿色项目贷款给予一定的贴息和利率优惠;欧盟规定绿色信贷及证券化产品可以享受税收优惠;英国政府采用“贷款担保计划”支持中小企业，尤其是环保类中小企业，等等。\n</p><p>\n  二是通过政策性金融机构带动私有资本投入绿色经济。\n</p><p>\n  发展绿色金融需要社会资本的支持，那么，有限的财政资金怎样吸引社会资本呢?在这方面，欧盟充分利用了政策性金融这一工具，包括政策性银行、政策性基金等。\n</p><p>\n  德国复兴信贷银行是德国影响力最大的政策性银行，早在2003年就参与了碳排放交易。2014年，该行在全球发放的740亿欧元贷款中，用于环保与可再生能源领域的贷款高达360亿欧元，它在德国绿色金融发展上发挥着基础性的作用。德国财政部委托德国复兴信贷银行管理绿色贷款贴息资金，通过其寻找优质绿色项目和企业，该银行在绿色项目选择和融资上公开、透明，保证了绿色金融资金的高效使用。2012年10月，英国政府出资30亿英镑成立了首家绿色投资银行——英国绿色投资银行，该政策性银行独立运营，投资重点是具有商业价值的绿色基础设施项目，每年为可再生能源和低碳项目投资8亿英镑，迄今已支持了近100个可持续项目，有效解决了英国绿色基础设施项目建设中的市场失灵问题，引导大量私人投资投向绿色产业。据英国绿色投资银行年报统计，绿色投资银行每投资1英镑可带动近3英镑的私人资金，发挥着3倍效果的杠杆作用。今年4月，澳大利亚金融巨头麦格理收购了英国绿色投资银行，英国财政部通过这笔交易会获得17亿英镑的股本转让收益，而且英国政府在收购条款中增加了一条“黄金股东”的要求，即在涉及投资时拥有绝对否决权，确保该银行可以始终履行绿色投资义务。\n</p><p>\n  在政府性基金方面，2001年英国设立碳基金，该基金由政府投资，但以市场化方式运作，基金公司的经费开支、项目投资等均按企业模式由董事会决定。德国则以政府和德国复兴信贷银行共同投资的形式成立碳基金，该基金公司主要投资节能减排绿色项目。\n</p><p>\n  欧盟的上述经验为其他国家政府支持绿色金融发展提供了有益的经验：\n</p><p>\n  绿色金融与其他商业性金融活动既有区别也有联系，一方面，绿色金融的运作模式必须是以市场化为前提的。\n</p><p>\n  另一方面，绿色金融在一定程度上又是金融机构履行社会责任的重要方式，具有一定公益性特征，需要政府提供适宜的引导和支持，政府绿色资金的支持应作为绿色投资市场的“催化剂”和补充者，挤入而不是挤出私人资本，引进和鼓励更多的社会资金投入到绿色经济领域。\n</p><p>\n  二、新兴经济体绿色金融发展迅速\n</p><p>\n  近年来，新兴经济体绿色金融迅速发展，绿色金融活动主要集中在以下领域：\n</p><p>\n  一是绿色信贷领域。\n</p><p>\n  例如，巴西中央银行于2014年4月出台了新的监管办法，要求商业银行必须制定环境管理和社会风险管理的战略行动和治理框架，并将其作为整体风险管理的核心要素加以实施，目前，巴西约有10%的银行贷款被列为绿色贷款。孟加拉国央行特别将增加金融包容度作为中央银行货币政策的明确目标，并对商业银行提供了包括新能源、污染治理、提高能效等内容的信贷指南，目前绿色信贷占比已达5%。\n</p><p>\n  二是促进企业关注可持续发展方面，新兴经济体已制定了相关政策。\n</p><p>\n  例如，2005年，巴西圣保罗证券交易所开始对外公布企业可持续发展指数。2011年，南非出台监管准则要求企业披露其财务与可持续性能力。2014年，马来西亚证券委员会发布机构投资者规则，要求机构投资者应该将公司治理和可持续发展纳入投资决策程序中。印度尼西亚也针对其快速发展的股票市场制定了绿色评级标准。\n</p><p>\n  三是在绿色债券发展方面。\n</p><p>\n  例如，巴西、菲律宾等国加入了绿色债券发行市场。今年5月，巴西国家经济和社会发展银行发行绿色债券融资10亿美元，用于风能和太阳能方面的投资。\n</p><p>\n  三、中国绿色金融发展面临的问题和挑战\n</p><p>\n  1、我国现有金融机构对绿色项目的投资和贷款总体比重过少\n</p><p>\n  一是绿色产业在市场导入期存在一定风险，回报期长，对市场缺乏吸引力;二是目前我国金融体系以间接融资为主且由大型金融机构主导，侧重于大项目投资、间接投融资，对中小型环保企业融资关照不足;三是大多数绿色产业核心资产为知识产权等无形资产，抵质押贷款、转让、引资等体系不健全;四是环保产业没有实现信贷证券化、风险投资等融资安排，项目运营管理及退出机制不畅。\n</p><p>\n  2、缺乏绿色金融指标体系和激励机制\n</p><p>\n  一是绿色金融技术性评价指标很少，金融企业社会责任中的绿色金融权重严重不足，不利于通过考核和激励机制支持绿色行业健康发展;二是国家的政策及市场信号对于绿色投资和贷款的引导作用不明确，在某些情况下甚至出现了反向激励;三是在各级官员的晋升体系中，环境保护及绿色产业发展的工作业绩缺少足够评估和体现。\n</p><p>\n  3、支持政策不配套，未能形成支持绿色产业合力\n</p><p>\n  一是政府对绿色产业支持政策不足，财政补贴、价格优惠、税收减免、贴息低息贷款等政策工具运用不够;二是部分高投入、高风险环保项目缺乏特别融资渠道，政府没有帮助建立特别融资机制和风险分担机制;三是国家对绿色财政和绿色金融缺乏通盘考虑，政策不配套，效率不高。\n</p><p>\n  4、未能建立生态文明建设的良性循环市场机制\n</p><p>\n  一是部分金融机构缺乏激励机制，存在“等靠要”思想，对绿色项目积极性不高;二是我国生态文明市场化规则体现尚未完全建立;三是未能充分借鉴吸取国际社会构建绿色金融体系的成功经验和失败教训。\n</p><p>\n  四、构建我国绿色金融发展的长效机制\n</p><p>\n  以绿色金融助推绿色经济发展是破解资源环境约束的重要方式，当前我国绿色金融发展仍处于初期阶段，我国应加强绿色理念培育，完善绿色金融法律法规建设，坚持市场化运作，鼓励市场创新是优化绿色金融资金配置，提升绿色金融资金使用效率，构建我国绿色金融发展的长效机制。\n</p><p>\n  1、理念培育是发展基础\n</p><p>\n  一是培育金融机构绿色经营理念。金融机构要将绿色发展理念纳入长期发展战略，在经营决策中强调环境保护。同时要充分认识绿色金融发展对其改善经营状况，拓展市场份额的积极影响，随着利率市场化改革的不断深化，金融机构依赖利率管制产生的存贷利差获得超额利润的情况已经不复存在，在越来越激烈的市场竞争下，绿色金融涉及较多新兴产业和节能减排项目，市场潜力大，社会形象好，将是金融机构重要利润增长点。\n</p><p>\n  二是培育企业绿色生产理念。企业要改变依赖低劳动成本、低技术、高污染的生产方式，要将环保技术创新升级作为新的利润增长点。要不断扩展融资渠道，借力绿色金融支持，加大技术研发投入，提高产品质量，研发新型绿色产品，提升企业核心竞争力。同时要增强社会责任感，履行社会责任，将改善资源环境、节约能耗作为企业的核心生产理念和价值观。\n</p><p>\n  三是培育消费者绿色消费理念。满足消费者的消费需求是企业生产的最终目标，消费者的消费偏好对企业推行绿色生产有重要引导作用。2016年3月国家发改委等十部门出台《关于促进绿色消费的指导意见》，要认真贯彻落实，加大绿色消费的宣传和教育，深入家庭和学校广泛开展绿色、低碳生活方式宣传，鼓励消费者购买绿色建筑、新能源汽车、节能电器等绿色产品。要建立贷款人的绿色信用评价体系，将绿色环保、节能指标纳入信用考察。\n</p><p>\n  2、法律法规完善是发展保障\n</p><p>\n  一是建立和完善绿色金融制度体系建设。要完善绿色金融产品和服务的实施标准和操作规范，明确各参与主体的权利和责任，从制度上引导金融机构推进绿色信贷，鼓励企业使用绿色融资进行节能减排，化解产能过剩，促进经济与环境的可持续发展。近年来金融管理部门先后出台了《关于加快金融创新促进林业发展的指导意见》《关于金融支持节能减排的指导意见》《排污权质押贷款管理办法(试行)》，为金融机构向相关绿色产业和企业提供金融服务建立了制度保障，应充分发挥相关制度的作用，并在实践中进一步检验完善。\n</p><p>\n  二是加大财政资金的支持力度，充分发挥杠杆带动作用。财政资金和央行资金能带动私人部门和金融机构资金投向绿色产业，具有较强的杠杆作用，因此要加大财政资金的支持力度，通过政府采购、与社会资本合作等方式介入绿色金融项目。同时要创新财政资金投入方式，在不干预管理运作的前提下，通过股权投资、隐形担保、风险补偿、专项补偿等方式间接参与绿色金融项目，提升财政资金的杠杆率。\n</p><p>\n  三是强化监管，建立信息共享制度。要加强市场监管，有效识别企业存在的环保风险。人民银行、银行业监管部门、环保部门与发改委、经贸委等政府部门要建立有效的信息沟通制度。确保第一时间识别企业落后产能、环境保护等方面的信息，并及时与有关部门共享，为金融机构识别企业生产经营、环保风险等提供信息，确保绿色金融政策实施统一性，促进相关政策制度得到有效的贯彻落实。\n</p><p>\n  3、市场化运作是机制核心\n</p><p>\n  一是培育多元化的市场参与主体。\n</p><p>\n  政策性银行、商业银行、非银行类金融机构在绿色金融中的职责和作用各不相同。要发挥不同类型金融机构的优势，形成互补。在绿色金融发展的初期，对公共性质较强的一部分绿色产业要充分发挥政策性银行带头参与和示范作用。鼓励和引导商业银行积极挖掘绿色产业发展潜力，实现绿色产业发展和商业银行利率增长的双赢局面。要充分挖掘互联网金融在支付结算、融资、投资理财保险等方面的创新优势，为绿色经济增长提供专业化服务，形成多元化市场参与主体。要加大绿色金融中介机构的培育力度。鼓励与绿色金融和绿色产业相关的信用评级、产品认证、资产评估机构、信息咨询、环境风险评估等中介机构的发展。\n</p><p>\n  二是持续推进绿色金融市场产品与机制创新。\n</p><p>\n  (1)加强绿色融资产品创新。缺乏抵押品是企业融资主要难点，绿色金融项目的抵押品更为难寻，因此要加大合同能源管理未来收益权质押贷款、排污权质押贷款等产品的创新和使用;在化解产能过剩上，要鼓励融资租赁、订单融资、并购贷款等融资工具的开发应用;在节约减排绿色金融项目上，要推广低碳信用卡等金融产品。\n</p><p>\n  (2)创新多元化融资渠道，鼓励和支持发展前景好的环保企业直接融资。探索为环境保护和节能减排表现好的企业优先提供上市、股权融资、债券发行机会的机制。国有融资担保机构要优先为节能环保企业服务。\n</p><p>\n  (3)积极培育环境产权交易市场。要控制整体排放总量，维护良好的生态环境，在条件成熟地区或行业开展排放总量控制试点，待时机成熟后推广。同时要进一步完善股权交易中心功能，确保相关企业能通过排放权交易获得节能减排收益，同时也为企业进行排放指标(余缺)的调剂，发挥市场机制作用。\n</p></div>\n"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = "<h3>\n  创新试验区或为G20绿色金融发展探路\n</h3>\n<div class=\"sub\">作者：王勇</div>\n<div class=\"sub\">来源：上海证券报</div>\n<div class=\"sub\">2017-07-05</div>\n<div class=\"text\">\n  <p>\n  　　进入“十三五”以来，在政府推动、市场发挥主体作用下，我国绿色金融市场已迈入了绿色金融立体化发展的新阶段。我国绿色信贷已占国内全部贷款余额近10%，成为全球最大的绿色债券市场。如今，中国政府决定在全国范围内选择部分省份建设绿色金融改革创新试验区，可以说是绿色金融立体化发展的又一战略布局。我们热切期待绿色金融改革创新试验区五大任务能尽早获得突破性进展，这不仅将助推中国经济的绿色转型，更能为G20绿色金融发展做出重大贡献\n  </p><p>\n  　　第十二次G20峰会本周五将在德国最重要的海港和最大的外贸中心汉堡开幕。在去年的G20杭州峰会上，作为今年G20主席国的德国就宣布将继续在G20财金渠道讨论绿色金融议题，中国人民银行和英格兰银行将继续担任G20绿色金融研究小组共同主席。德国作出这样的决定，是因为中国在绿色金融的研究和探索方面已经走在了G20的前列。\n</p><p>\n  　　就在几天前，国务院常务会议决定，在浙江、江西、广东、贵州、新疆5省（区）选择部分地方，建设各有侧重、各具特色的绿色金融改革创新试验区，在体制机制上探索可复制、可推广的经验，推动经济绿色转型升级。随后，央行等六部委联合印发了这五个省（区）各自的总体方案。所以，从战略视角看，可以说绿色金融改革创新试验区不仅为中国，而且也在为G20绿色金融发展探路。\n</p><p>\n  　　发展绿色经济，离不开绿色金融体系的强大支撑。去年3月发布的我国“十三五”规划纲要明确提出建立绿色金融体系，发展绿色信贷、绿色债券、设立绿色发展基金。去年8月底，央行等七部委发布了《关于构建绿色金融体系的指导意见》（以下简称《指导意见》），首次给出了绿色金融的“官方”定义，即对环保、节能、清洁能源、绿色交通、绿色建筑等领域的项目投融资、项目运营、风险管理等所提供的金融服务。《指导意见》中提出的绿色金融体系，还包括了绿色信贷、绿色债券、绿色股票指数及相关产品、绿色发展基金、绿色保险、碳金融等所有主要金融工具和相关政策，支持经济向绿色化转型的制度安排。构建绿色金融体系主要目的，是动员和激励更多社会资本投入绿色产业，同时更有效地抑制污染性投资。眼下，我国的绿色信贷已占国内全部贷款余额近10%，成为全球最大的绿色债券市场。但要建成完整的绿色金融体系，还有很长的路要走。构建绿色金融体系，不仅有助于加快我国经济向绿色化转型，支持生态文明建设，也有利于促进环保、新能源、节能等领域的技术进步，加快培育新的经济增长点，提升经济增长潜力。\n</p><p>\n  　　在我国的倡议下，去年9月，G20绿色金融研究小组在G20杭州峰会上提交的《G20绿色金融综合报告》提出了一系列供G20和各国政府自主考虑的可选措施，包括提供支持绿色投资的政策信号；推广绿色金融自愿原则；扩大能力建设网络；支持本币绿色债券市场发展；推动跨境绿色债券投资；推动环境风险问题的研讨；完善绿色金融指标体系等。可以说，该报告是《巴黎协定》的具体贯彻和落实。鉴于《巴黎协定》的落实难度之高，各国需要付出艰辛的努力。尤其是美国总统特朗普在上月初宣布美国退出《巴黎协定》后，全球绿色金融发展必定会面临不少新的障碍。\n</p><p>\n  　　世人看到，早在去年9月中国全国人大常务委员会就批准了《巴黎协定》，向G20乃至全球表明了中国的态度。实际上，进入“十三五”以来，在政府推动、市场发挥主体作用下，中国的绿色金融市场已迈入了绿色金融立体化发展的新阶段。首先，市场对绿色理念的认识和认同逐步提升，市场的参与主体越来越多元化。其次，绿色金融产品不断丰富，绿色基金、绿色股票指数、绿色债券指数、碳金融创新产品等不断涌现，并且绿色金融产品与实体经济的关联，以及对产业的支撑作用日益紧密。再次，绿色金融的标准体系正在成形，包括绿债的认证和披露、绿色评级方法、环境压力测试等方面都有新的进展，这为绿色金融未来的规模化、规范化发展打下了基础。笔者这里最想提及的是，银行业依然是中国绿色金融市场的主导力量。\n</p><p>\n  　　根据中国银行业协会、普华永道会计师事务所今年2月共同发布的《中国银行家调查报告（2016）》，近九成（88.9%）受访的银行家认为当前开展绿色金融将对银行经营产生正面影响，包括降低行业信贷风险、分享经济结构调整红利、开拓海外市场等，有利于商业银行长期的发展。另外，几乎所有受访银行家（97%）都预计，绿色金融在未来五年内有望成为银行业务最不可忽视的一部分，甚至成为主要的经营发展方向。除了原先在绿色金融领域先行一步的部分股份制银行及国有大行，今年上半年有更多银行迈出了探索的步伐。如江苏银行宣布采纳“赤道原则”，成为继兴业银行后中国大陆地区采纳赤道原则的第二家银行。大同绿色商业银行方案5月16日通过评审，进入组织筹建阶段，有望成为我国首家绿色银行。此外，还有更多银行业机构发行或者参与发行、承销了各类绿色债券、债务融资工具等。\n</p><p>\n  　　如今，中国政府决定在全国范围内选择部分省（区）建设绿色金融改革创新试验区，可以说这是中国绿色金融立体化发展的又一战略布局，对在G20引领绿色金融发展及全球继续履行《巴黎协定》意义重大。毕竟，发展绿色金融对于我们是新生事物，有太多东西需要探索，所以需要选择部分地方先行试验，在体制机制上探索可复制、可推广的经验。由此，高层强调，五省（区）的绿色金融改革试验必须从各自实际出发，各有侧重。模式设计要突出地方特色，形成各地协同发展、优势互补、良性互动的局面。而据央行副行长陈雨露在吹风会上的介绍，五省（区）绿色金融改革创新方案各具特色、各有侧重，而且还有所创新。\n</p><p>\n  　　比如，广东省广州市的绿色金融试验区将支持试验区外资企业的境外母公司或子公司按规定在境?银行间市场发行人民币绿色债券，支持港澳地区机构投资者按程序在试验区内开展合格境外有限合伙人（QFLP）业务，参与境内绿色私募股权投资基金和绿色创业投资基金投资。浙江省湖州市、衢州市方案揭示的绿色金融思路则是，支持符合条件的民间资本发起设立民营银行、证券公司和保险公司等，重点支持地方生态环境建设和绿色产业发展；支持符合条件的“两高六新”绿色企业在中小板、创业板和主板上市等等。\n</p><p>  　　我们热切期待绿色金融改革创新试验区五大任务能尽早获得突破性进展，这不仅将更好地发挥绿色金融助推中国经济绿色转型的积极作用，更能为G20绿色金融发展作出重大贡献。\n</p></div>\n"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "\n<div style=\"height: 80px;\"></div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"titles span2  col-xs-12 col-sm-3 col-md-2 rightList\" id=\"rightList\">\n      <ul class=\"nav nav-stacked\">\n        <li class=\"title\">资讯</li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"fof\">FOF资讯</a></li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"ppp\">PPP资讯</a></li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"news\">绿色产业基金资讯</a></li>\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10\" >\n      <router-outlet></router-outlet>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 20px\">\n<div class=\"list-group\">\n  <a class=\"list-group-item\" routerLink=\"/information/news-11\">\n    <h4 class=\"list-group-item-heading\">“绿色”已成信贷新标准：发展迅速并实现突破 </h4>\n    <p class=\"list-group-item-text\">2017-06-20</p>\n  </a>\n  <a class=\"list-group-item\" routerLink=\"/information/news-12\">\n    <h4 class=\"list-group-item-heading\">央行马骏：绿金委将利用央行再贷款支持绿色信贷</h4>\n    <p class=\"list-group-item-text\">2017-04-15</p>\n  </a>\n  <a  class=\"list-group-item\" routerLink=\"/information/news-21\">\n    <h4 class=\"list-group-item-heading\">国外发展绿色金融经验借鉴及我国绿色金融发展问题与措施 </h4>\n    <p class=\"list-group-item-text\">2017-08-04</p>\n  </a>\n  <a  class=\"list-group-item\" routerLink=\"/information/news-22\">\n    <h4 class=\"list-group-item-heading\">创新试验区或为 G20 绿色金融发展探路</h4>\n    <p class=\"list-group-item-text\">2017-07-05</p>\n  </a>\n</div>\n</div>\n"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "<h3>\n  全国PPP入库项目落地投资额达3.3万亿元\n</h3>\n<div class=\"sub\">来源：中国财经报</div>\n<div class=\"sub\">2017-08-07</div>\n<div class=\"text\">\n  <p>\n财政部PPP中心日前发布了全国PPP综合信息平台项目库第7期季报，对全国PPP入库项目、PPP示范项目及PPP落地项目投资额等情况进行了通报。\n  </p><p>政府和社会资本合作（PPP）“大数据”再一次如期发布。透过数据分析，持续三年多的PPP实践呈现出了哪些新特点、新趋势？\n</p><p>\n根据财政部PPP中心发布的第7期全国PPP综合信息平台项目库季报，以及其所提供的详实数据，记者对业界普遍关心的焦点问题进行了梳理。\n</p><p>\n全国入库项目13554个，累计投资额16.3万亿元\n</p><p>\n我国PPP市场的蓬勃发展令世界瞩目。截至目前，这个市场到底有多大？\n</p><p>\n根据财政部PPP中心的最新统计显示：截至2017年6月末，按照财政部相关要求审核纳入项目库的项目，即全国入库项目有13554个，总投资额达16.4万亿元，覆盖全国31个省（自治区、直辖市）及新疆兵团，19个行业领域。自2016年1月末至2017年6月末，全国PPP综合信息平台项目库月均增长项目386个、投资额4842亿元，PPP项目需求还在持续加大。\n</p><p>\n在这个十几万亿元级的PPP大市场上，全国PPP示范项目的表现一直被认为是重要的参照标杆。\n</p><p>\n从此次发布的统计数据来看，在项目库中，全国PPP示范项目共有700个、总投资额1.7万亿元。其中，2014年第一批PPP示范项目有22个、总投资额714亿元；2015年第二批PPP示范项目有162个、总投资额4846亿元；2016年第三批PPP示范项目有516个、总投资额11623亿元。\n</p><p>\n记者发现，此次发布的三批PPP示范项目总数与之前发布的数据略有出入。\n</p><p>\n财政部PPP中心相关负责人对此表示，这是因为有一些项目发生了退库。2014年第一批PPP示范项目最初为30个，后来陆续调出8个；2015年第二批PPP示范项目最初为206个，陆续调出44个，目前在库162个。\n</p><p>\n除了示范项目，记者注意到，在全国入库项目之中也有退库现象出现。季报数据显示，经审核把关，今年6月当月新入库项目495个；同时，经省级财政部门申请，退库73个项目。与2016年年末相比，今年上半年，经审核把关后新入库项目2632个，退库338个。\n</p><p>\n为什么会发生项目的退库？\n</p><p>\n财政部PPP中心相关负责人解释，经向省级财政部门了解，退库原因主要有三类：一是项目不再采用PPP模式。有的项目缺乏对社会资本的吸引力，有的总投资额过小或期限过短，有的已采用其他模式。二是项目停止。因征地受阻、前期手续不全或不符合PPP操作流程，有的项目无法推进，并已被政府叫停。三是项目整合与消除重复。一些项目在前期重复入库，近期逐步整合删减。\n</p><p>\n落地率34.2%，投资额3.3万亿元\n</p><p>\nPPP项目按全生命周期分为识别、准备、采购、执行和移交5个阶段。执行和移交两个阶段项目数之和与准备、采购、执行、移交4个阶段项目数总和的比值为项目落地率。\n</p><p>\n按照这个口径计算，截至6月末，在全国入库项目中，已签约落地的项目有2021个、投资额达到3.3万亿元，覆盖除天津、西藏以外的29个省（自治区、直辖市）及新疆兵团，19个领域，整体项目落地率为34.2%\n</p><p>\n仅从今年上半年的情况来看，PPP项目总体推进良好，识别、准备、采购阶段示范项目数和投资额均逐月减少，落地（即已签订PPP项目合同，进入执行阶段）项目数和投资额逐月增加。截至今年6月末，落地495个、投资额12390亿元，落地率达到71%。\n</p><p>\n从示范项目的落地率来看，第一批和第二批示范项目已100%落地。截至今年6月末，第三批示范项目已经落地311个，落地率为60.6%，环比增加15个落地项目，落地率提高2.9个百分点；与去年末相比，增加91个落地项目，落地率提高17.7个百分点。\n</p><p>\n从地域和行业领域来看，落地项目数前三位的地方是：山东、新疆和安徽，合计占落地项目总数的30.4%。落地项目数前三位的行业领域是：市政工程、交通运输以及生态建设和环境保护，合计占落地项目总数的64.3%。\n</p><p>\n“幸福产业”异军突起，落地投资额占比近10%\n</p><p>\n记者注意到，在本次发布的季报中，财政部PPP中心对“幸福产业”相关PPP项目情况进行了专门统计。\n</p><p>\n按照《国务院办公厅关于进一步扩大旅游文化体育健康养老教育培训等领域消费的意见》（国办发〔2016〕85号）的定义，“幸福产业”主要范围为旅游、文化、体育、健康、养老、教育培训等重点领域。\n</p><p>\n据介绍，从入库项目来看，“幸福产业”入库项目呈增长趋势，旅游作为“幸福产业”的排头兵，优势明显。\n</p><p>\n截至6月末，“幸福产业”项目数为3012个、投资额2.2万亿元，分别占当期项目总数和总投资额的22.2%和13.2%。与5月末相比，净增入库项目97个，净增投资额1013亿元；与2016年年末相比，净增入库项目为498个，净增投资额为4767亿元。\n</p><p>\n从落地项目看，截至6月末，“幸福产业”落地项目有318个、投资额2838亿元，分别占当期落地项目总数和投资额的15.7%和8.6%。与5月末相比，当月净增落地项目23个、投资额115亿元；与2016年年末相比，上半年净增落地项目128个、投资额1026亿元。\n</p><p>\n政府付费和可行性缺口补助类项目投资额占比近7成\n</p><p>\n一般而言，PPP项目的回报机制有三种：使用者付费、政府付费和可行性缺口补助。因为后两种回报机制涉及到政府财政资金的使用，所以业界及社会公众对采用这两种回报机制的项目一直格外关注。\n</p><p>\n从入库项目统计来看，截至6月末，使用者付费项目有4929个、投资额5万亿元，分别占入库项目总数和总投资额的36.4%和30.5%；政府付费项目4659个、投资额4.3万亿元，分别占入库项目总数和总投资额的34.4%和26.5%；可行性缺口补助项目3966个、投资额7万亿元，分别占入库项目总数和总投资额的29.2%和43.0%。\n</p><p>\n从今年上半年各月、2016年年末、2016年同期的三种回报机制项目数统计来看，政府付费类和可行性缺口补助类入库项目的比重基本上呈逐月、逐季度小幅上升趋势，使用者付费类入库项目的比重变化趋势则相反。\n</p><p>\n从落地项目来看，截至6月末，使用者付费类落地项目458个、投资额5333亿元，分别占落地项目总数和总投资额的22.7%和16.2%；政府付费类落地项目867个、投资额10276元，分别占落地项目总数和总投资额42.9%和31.2%；可行性缺口补助类落地项目696个、投资额17356亿元，分别占落地项目总数和总投资额的34.4%和52.6%。\n</p><p>\n记者 于丽\n</p></div>\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "<h3>\n  《PPP条例（征求意见稿）》的10个纯法律问题\n</h3>\n<div class=\"sub\">作者：宿辉</div>\n<div class=\"sub\">来源：PPP知乎</div>\n<div class=\"sub\">2017-08-03</div>\n<div class=\"text\">\n<p>《基础设施和公共服务领域政府和社会资本合作条例（征求意见稿）》自公开征求意见以来，理论与实务界同仁热烈回应，关注重点与研究视角各有不同。作者不揣简陋，依PPP法律关系之蹊径，择核心问题简析于此，求教方家。\n</p><p>一 PPP法律关系的政府方主体\n</p><p>\n  意见稿未对“政府”进行定义，而“政府”作为行政组织法中的概念，在我国法律中具有特定含义，即仅指中央人民政府和地方各级人民政府。《宪法》第八十五条规定：“中华人民共和国国务院，即中央人民政府，是最高国家权力机关的执行机关，是最高国家行政机关。”第一百零五条第一款规定：“地方各级人民政府是地方各级国家权力机关的执行机关，是地方各级国家行政机关。”\n</p><p>\n  意见稿中的“政府”与《民法总则》中的“机关法人”内涵应不一致。概因机关法人包括两种：一是有独立经费的机关；二是承担行政职能的法定机构。如此，意见稿中“政府”法律地位如何落实值得研究。\n</p><p>【相关条文】第二条 本条例所称基础设施和公共服务领域政府和社会资本合作（以下简称政府和社会资本合作），是指政府采用竞争性方式选择社会资本方，双方订立协议明确各自的权利和义务，由社会资本方负责基础设施和公共服务项目的投资、建设、运营，并通过使用者付费、政府付费、政府提供补助等方式获得合理收益的活动。\n</p><p>本条例所称社会资本方，是指依法设立，具有投资、建设、运营能力的企业。\n</p><p>二 PPP法律关系的客体\n</p><p>条例适用范围为基础设施和公共服务领域政府和社会资本合作，其中基础设施是指为社会生产和居民生活提供公共服务的物质工程设施，是用于保证国家或地区社会经济活动正常进行的公共服务系统。政府提供的基础设施既有主权事务，也有人权事务。而政府提供公共服务是为了提供基本保障、增进公平、促进基本消费均等化。属于人权事务领域。因此作为PPP模式适用的领域，如何界分“基础设施”和“公共服务”的范围？\n</p><p>【相关条文】第三条 符合下列条件的基础设施和公共服务项目，可以采用政府和社会资本合作模式：\n</p><p>（一）政府负有提供责任；\n</p><p>（二）需求长期稳定；\n</p><p>（三）适宜由社会资本方承担。\n</p><p>国务院有关部门根据前款规定的条件，制定可以采用政府和社会资本合作模式的基础设施和公共服务项目指导目录，并适时调整。\n</p><p>三 PPP合作项目协议的相对性\n</p><p>政府实施机构通过采购程序确定中选社会资本方，却与项目公司签订合作项目协议，有违“合同相对性”原理，也不符合《政府采购法》关于“采购人与中标、成交供应商应当在中标、成交通知书发出之日起三十日内，按照采购文件确定的事项签订政府采购合同”的规定。\n</p><p>【相关条文】第十四条 政府实施机构与其选定的社会资本方应当在协商一致的基础上签订合作项目协议；设立专门负责实施合作项目的公司（以下简称项目公司）的，合作项目协议由政府实施机构与项目公司签订。\n</p><p>项目公司不得从事与合作项目实施无关的经营活动。\n</p><p>四 PPP采购的法律适用\n</p><p>意见稿回避了选择社会资本方采购程序适用《招标投标法》还是《政府采购法》，仅表明“采用竞争性方式”，但第十三条中进一步表明“通过招标、竞争性谈判等竞争性方式选择社会资本方”。由此可以推断《PPP条例（征求意见稿）》社会资本方采购适用《政府采购法》。\n</p><p>意见稿第十三条同时规定“法律、行政法规对特定基础设施和公共服务项目选择社会资本方的方式有规定的，依照其规定”。即社会资本方的选择方式只能由法律、行政法规规定，因此排除了适用财政部发布的《政府采购竞争性磋商采购方式管理暂行办法》。\n</p><p>【相关条文】第十三条  政府实施机构应当根据经审核同意的合作项目实施方案，通过招标、竞争性谈判等竞争性方式选择社会资本方，并将选定的社会资本方向社会公示。法律、行政法规对特定基础设施和公共服务项目选择社会资本方的方式有规定的，依照其规定。\n</p><p>五 政府采购路径下PPP政府实施机构\n</p><p>依据意见稿的规定，本级人民政府审核同意合作项目实施方案的，应当确定相关部门、单位作为政府实施机构，负责合作项目实施的相关工作。而实施机构的工作之一就是根据经审核同意的合作项目实施方案，通过招标、竞争性谈判等竞争性方式选择社会资本方。\n</p><p>如前述，可推断PPP采购适用《政府采购法》，则适格的采购人只能是国家机关、事业单位、团体组织。因此，应对意见稿中的“部门”“单位”进行明确。\n</p><p>【相关条文】第十二条  合作项目实施方案应当经本级人民政府审核同意。本级人民政府应当组织有关部门对合作项目实施方案进行联合评审。\n</p><p>经本级人民政府审核同意的合作项目实施方案，由有关主管部门向社会公布。\n</p><p>本级人民政府审核同意合作项目实施方案的，应当确定相关部门、单位作为政府实施机构，负责合作项目实施的相关工作。\n</p><p>第十三条  政府实施机构应当根据经审核同意的合作项目实施方案，通过招标、竞争性谈判等竞争性方式选择社会资本方，并将选定的社会资本方向社会公示。法律、行政法规对特定基础设施和公共服务项目选择社会资本方的方式有规定的，依照其规定。\n</p><p>六 政府采购路径下PPP的社会资本方\n</p><p>意见稿定义“社会资本方”为依法设立，具有投资、建设、运营能力的“企业”。企业的文义解释，其范围应该既包括《民法总则》中的营利法人（包括有限责任公司、股份有限公司和其他企业法人），也应该包括部分非法人组织（个人独资企业、合伙企业）。但是作为《政府采购法》中的供应商需要具有独立承担民事责任的能力，因此个人独资企业和合伙企业是否可以参与PPP项目采购程序不无疑问。\n</p><p>【相关条文】第二条 本条例所称社会资本方，是指依法设立，具有投资、建设、运营能力的企业。\n</p><p>七 特许经营模式下合作项目协议的法律属性\n</p><p>《行政诉讼法》司法解释规定：行政机关为实现公共利益或者行政管理目标，在法定职责范围内，与公民、法人或者其他组织协商订立的具有行政法上权利义务内容的协议，属于行政诉讼法规定的行政协议。并明确政府特许经营协议属于行政协议。\n</p><p>意见稿通篇未体现“特许经营”字样，但是不可否认特许经营是世界范围内PPP的一种重要形式。政府方授予社会资本方特许经营权的项目合作协议，其法律属性为何？是一个无法回避的问题。\n</p><p>【相关条文】第十四条 政府实施机构与其选定的社会资本方应当在协商一致的基础上签订合作项目协议；\n</p><p>八 PPP项目合作协议争议解决方式\n</p><p>意见稿对合作项目争议规定了四种解决途径，其中明确了PPP项目协议可诉讼、可仲裁，这无疑确立了PPP协议的民事合同属性，同时可合理推断出诉讼应适用民事诉讼程序，因为行政争议不具可仲裁性。由此产生的问题之一是，PPP合同采用民事诉讼程序将使得政府方摆脱人民法院对于行政行为的合法性审查。对于建设法治政府、保障依法行政是不利的。\n</p><p>其次，2014年修改的《行政诉讼法》中取消了“具体行政行为”的概念，已将相关法条中的“具体行政行为”统一修改为“行政行为”。因此，建议本《条例》的相关表述应与《行政诉讼法》的表述保持一致，将“具体行政行为”修改为“行政行为”。\n</p><p>【相关条文】第四十条  因合作项目协议履行发生的争议，可以依法申请仲裁或者向人民法院提起诉讼。\n</p><p>第四十一条 对政府有关部门作出的与合作项目的实施和监督管理有关的具体行政行为，社会资本方认为侵犯其合法权益的，有陈述、申辩的权利，并可以依法提起行政复议或者行政诉讼。\n</p><p>九 政府方违约责任与国家赔偿程序\n</p><p>意见稿项目合作协议须载明事项中明确规定了“违约责任”，然而，政府方承担违约责任的适用程序和标准均有待明确。追究政府方违反PPP协议的损害赔偿责任如何解决损害赔偿金给付的法律程序。根据我国现有的法制资源，可供选择的途径要么准用民事法律的规定，要么依据《国家赔偿法》确定。\n</p><p>如果准用民事法律规范，政府方承担违约责任并没有相应的预算安排；而适用国家赔偿程序，其责任产生于对职责的违反而非对合同义务的违反。可见，违约责任的程序适用存在两难。\n</p><p>【相关条文】第十五条 合作项目协议应当符合招投标、竞争性谈判等文件，载明下列事项：……（十二）违约责任；\n</p><p>十 社会资本方与项目公司法律责任混淆\n</p><p>意见稿《条例》第四十七条规定，社会资本方或者项目公司有相关违法情形的，由有关政府部门责令处罚，甚至追究刑事责任。这一做法显然忽视了PPP项目公司中，政府方股东和社会资本方股东分别代表不同利益的客观实际，将一般公司治理结构中法律责任的一体性套用到PPP项目公司之上，因一方股东的过错使得另一方股东承担法律责任，并不符合PPP模式下政府和社会资本风险分担的原则。\n</p><p>【相关条文】第四十七条 社会资本方或者项目公司有下列情形之一的，由政府有关部门责令限期改正，处20万元以上50万元以下的罚款；有违法所得的，没收违法所得；构成犯罪的，依法追究刑事责任：\n</p><p>（一）项目公司从事与实施合作项目无关的经营活动；\n</p><p>（二）在合作项目实施中违反法律、行政法规、规章、技术规范、强制性标准；\n</p><p>（三）将合作项目的设施、土地使用权、项目收益权和融资款项用于实施合作项目以外的用途，或者以上述资产为他人债务提供担保；\n</p><p>（四）合作项目争议解决期间，擅自中断公共服务的提供；\n</p><p>（五）未妥善保管合作项目投资、建设、运营等方面的有关资料或者未按照规定向政府有关部门移交有关资料。\n</p><p>对前款规定的情形，有关法律、行政法规对其行政处罚另有规定的，依照其规定。\n</p></div>\n"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "<h3>\n    PPP条例征求意见\n</h3>\n<div class=\"sub\">来源：新华社</div>\n<div class=\"sub\">2017-07-25</div>\n\n<div class=\"text\">\n\n<p>\n本报讯 国务院法制办近日就《基础设施和公共服务领域政府和社会资本合作条例(征求意见稿)》公开征求意见。征求意见稿明确，国家保障各种所有制形式的社会资本方依法平等参与政府和社会资本合作项目。\n</p><p>\n国务院法制办在征求意见稿的说明中指出，近年来，我国基础设施和公共服务领域政府和社会资本合作模式快速推进，成效明显，但实践中推进政府和社会资本合作模式也存在诸如合作项目决策不够严谨、实施不够规范等问题。\n</p><p>\n据了解，征求意见稿规范了项目合作协议，规定政府实施机构与其选定的社会资本方或者项目公司应当签订合作项目协议，并明确规定了合作项目协议应当载明的事项。\n</p><p>\n社会公众可以在2017年8月22日前登录中国政府法制信息网，对征求意见稿提出意见。\n</p><p>\n（新华社）\n</p></div>\n"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "<h3>\n  福建省南平市光泽县“水美城市”（一期）工程PPP项目资格预审公告\n</h3>\n<div class=\"sub\">来源：中国政府采购网</div>\n<div class=\"sub\">2017-08-07</div>\n<div class=\"text\">\n  <p>\n　　根据《中华人民共和国政府采购法》等有关规定，经政府采购管理部门批准，将对福建省南平市光泽县“水美城市”（一期）工程PPP项目进行招标，特邀请有意向的潜在供应商前来报名参加。\n  </p>\n  <p>\n\n\n项目名称：福建省南平市光泽县“水美城市”（一期）工程PPP项目\n  </p>\n  <p>项目编号：FJTP-00091711011180C\n  </p>\n  <p>项目联系方式：\n  </p>\n  <p>项目联系人：郑先生\n  </p>\n  <p>项目联系电话：0591-28302236\n  </p>\n  <p>\n\n项目实施机构联系方式：\n  </p>\n  <p>项目实施机构：光泽县水利局\n  </p>\n  <p>地址：光泽县文昌路64号\n  </p>\n  <p>联系方式：陈先生0599-7953021\n  </p>\n  <p>\n\n代理机构联系方式：\n  </p>\n  <p>代理机构：福建省招标采购集团有限公司\n  </p>\n  <p>代理机构联系人：郑先生0591-28302236 38113875\n  </p><p>\n代理机构地址： 福州市鼓楼区洪山园路68号招标大厦\n  </p>\n  <p>\n\n一、采购项目内容及预算金额\n  </p>\n  <p>预算金额：77019.47 万元（人民币）\n  </p>\n  <p>获取资格预审文件的时间：2017年08月07日 09:00 至 2017年08月11日 17:30(双休日及法定节假日除外)\n  </p>\n  <p>获取资格预审文件的地点：福建省招标采购集团有限公司（福建省招标股份有限公司）（福州市鼓楼区洪山园路68号招标大厦A座601、602、603室）\n  </p>\n  <p>获取资格预审文件的方式：携带资料报名，文件每套500元，售后不退。\n  </p>\n  <p>\n\n二、投标人的资格要求:\n  </p>\n  <p>详见公告\n  </p>\n  <p>\n\n三、采购项目需要落实的政府采购政策：\n  </p>\n  <p>详见公告\n  </p>\n  <p>四、审查标准、方法：\n  </p>\n  <p>合格制\n  </p>\n  <p>五、资格审查日期：2017-08-28\n  </p>\n  <p>资格预审申请文件递交截止时间：2017年08月28日 09:00  (双休日及法定节假日除外)\n  </p>\n  <p>资格审查地点：福建省招标采购集团有限公司（福建省招标股份有限公司）（福州市鼓楼区洪山园路68号招标大厦A座四楼）\n  </p>\n  <p>六、招标项目基本概况、用途、采购需求、数量、简要技术要求：\n  </p>\n  <p>资格预审公告\n  </p>\n  <p>（招标编号：FJTP-00091711011180C）\n  </p>\n  <p>\n\n1．招标说明\n  </p>\n  <p>根据光泽县政府会议纪要精神，光泽县人民政府决定采用PPP模式（即政府和社会资本合作模式）建设福建省南平市光泽县“水美城市”（一期）工程，并原则同意福建省南平市光泽县“水美城市”（一期）工程PPP项目的实施方案。目前该项目已具备招标条件，光泽县水利局为本项目实施机构、招标人及合同签约主体，光泽县人民政府授权光泽县水利投资有限公司为本项目政府出资人代表，福建省招标采购集团有限公司（福建省招标股份有限公司）为本项目顾问咨询（含招标代理）机构，对本项目的社会投资人进行公开招标，现欢迎具备相应资格条件的社会投资人提出资格预审申请。\n  </p>\n  <p>2．项目概况与招标范围\n  </p>\n  <p>2.1 项目名称：福建省南平市光泽县“水美城市”（一期）工程PPP项目（以下简称“本项目”或项目）。\n  </p>\n  <p>2.2 项目地点：福建省光泽县。\n  </p>\n  <p>2.3 项目类型：新建项目。\n  </p>\n  <p>2.4 开工和计划完成时间：2017年9月正式开工建设（自各子项目总监理工程师发出开工令至竣（完）工验收合格），项目整体建设期2年，预计2019年8月完成项目建设。要求各子项目建设工期均不得超过2年。（备注：水利工程完成完工验收即进入运营期，景观工程和市政生态工程完成竣工验收即进入运营期）\n  </p>\n  <p>2.5 项目概况：\n  </p>\n  <p>本工程为光泽县 “水美城市”工程，主体工程主要内容包括防洪堤防、堤顶道路、桥梁、堤坝、沙洲湿地、滨河景观带、疏浚等。\n\n  </p>\n\n<table>\n  <tr>\n  <td>\n序号\n  </td> <td>\n工程位置\n</td> <td>\n\n工程内容\n</td> <td>\n\n工程规模\n\n</td> <td>\n主要结构型式\n</td> <td>\n\n备注\n</td>\n  </tr><tr>\n    <td>\n1\n</td> <td>\n\n北溪右岸（仙华洲电站）\n\n</td> <td>\n城市景观、景观护岸\n\n</td> <td>\n1000m\n</td> <td>\n\n景观斜坡式堤防\n</td> <td>\n\n含陆域城市景观及预制场景观改造\n</td>\n</tr><tr>\n  <td>\n2\n</td> <td>\n\n北溪~富屯溪左岸（上屯大桥~君山村）\n\n</td> <td>\n城市景观、城市道路、景观护岸\n</td> <td>\n\n3700m\n</td> <td>\n\n景观斜坡式堤防，堤路结合\n\n</td>\n  <td>\n    &nbsp;\n  </td>\n</tr><tr>\n  <td>\n3\n</td> <td>\n\n富屯溪右岸（大洲水电站临河侧）\n</td> <td>\n\n电站进水渠与主河道分隔堤\n\n</td> <td>\n1500m\n</td> <td>\n\n防冲分隔堤\n</td> <td>\n\n丰水季节可过水\n</td>\n</tr><tr>\n  <td>\n4\n</td> <td>\n\n富屯溪右岸（宁光高速以下，圣农小镇）\n\n</td> <td>\n景观护岸\n</td> <td>\n\n1000m\n</td> <td>\n\n景观堤防\n\n</td> <td>\n现状堤防景观改造\n</td>\n</tr><tr>\n  <td>\n5\n</td> <td>\n\n西溪左岸（欧沪发展）\n</td> <td>\n\n城市景观、景观护岸\n\n</td> <td>\n500m\n</td> <td>\n\n退台式景观堤防\n</td> <td>\n\n现状防汛墙景观改造\n</td>\n</tr><tr>\n  <td>\n6\n</td> <td>\n\n西溪右岸（胜利桥~文昌东路福兰线交汇口附近）\n</td> <td>\n\n景观护岸\n</td> <td>\n\n800m\n</td> <td>\n\n直立式景观堤防\n</td> <td>\n\n现状防汛墙景观改造\n</td>\n</tr><tr>\n  <td>\n7\n</td> <td>\n\n沙坪溪两岸\n\n</td> <td>\n景观护岸\n\n</td> <td>\n1600m\n</td> <td>\n\n景观斜坡式堤防\n</td> <td>\n\n现状堤防景观改造\n</td>\n</tr><tr>\n  <td>\n8\n</td> <td>\n\n三江荟湿地\n\n</td> <td>\n景观湿地\n</td> <td>\n\n18000m2\n\n</td> <td>\n景观水域\n</td> <td>\n\n湿地开挖\n</td>\n</tr><tr>\n  <td>\n9\n</td> <td>\n\n回龙湾沙洲湿地\n</td> <td>\n\n沙洲湿地、地面景观、休闲便道\n</td> <td>\n\n550000m2\n</td> <td>\n\n土方造型、理砌石护底、铺地绿化等\n</td>\n  <td>\n    &nbsp;\n  </td>\n</tr>\n  <tr>\n  <td>\n\n10\n\n</td> <td>\n沙坪溪沿线、回龙湾沙洲湿地附近\n</td> <td>\n\n浆砌式景观造型坝\n\n</td> <td>\n共3座\n\n</td> <td>\n埋石砼或砌石，带造型\n</td>\n    <td>\n      &nbsp;\n    </td>\n</tr>\n  <tr>\n  <td>\n\n\n11\n</td> <td>\n\n高速出口上游水文测亭前沿\n\n</td> <td>\n翻板坝\n</td> <td>\n\n1座\n</td> <td>\n\n钢坝，动力驱动\n</td>\n  <td>\n    &nbsp;\n</td>\n</tr>\n</table>\n\n<p>\n  2.6投资建设运营范围和内容：\n</p><p>\n  （1）本项目估算总投资77019.47万元，其中工程费用54190万元，工程建设其他费22829.47万元（含征地拆迁费15400万元）。\n</p><p>\n  投资范围为本项目的工程投资、工程建设其他费用、建设期利息、运营管养费用投资。\n</p><p>\n  建安费以光泽县有权部门或第三方机构审核结果为准，工程建设其他费用以经实施机构确认的实际发生的费用为准。最终项目实施范围以施工图纸、招标文件、设计变更等相关资料为准。\n</p><p>\n  （2）运营内容包括项目投资范围内所有建设内容的养护。\n</p><p>\n  2.7项目公司组建要求\n</p><p>\n  （1）项目公司注册资本（5000万元）、注册所在地（光泽县）、组织形式（有限责任公司）。在项目实施机构、政府出资人代表与中标社会资本签订《PPP项目合同》和《股东协议》后的60个日历日内，中标社会资本与政府出资人代表按股权比例共同成立项目公司，项目公司负责本项目投资、融资、建设及运营维护。要求项目公司在整个建设、运营期限内，未经项目实施机构书面同意不得减资，不得从事本项目无关的其他业务，不得变更公司名称，不得将公司注册地址迁出光泽县。\n</p><p>\n  （2）项目公司股东结构、出资形式：中标社会资本与政府出资人代表按90%：10%的股权比例共同出资成立项目公司，出资形式为货币。\n</p><p>\n  （3）成立时间：在项目实施机构、政府出资人代表与中标社会资本签订《PPP项目合同》和《股东协议》后的60个日历日内，按照《公司法》等中国适用法律和招标文件规定成立项目公司，并在项目所在地工商部门进行注册登记获得法人资格，登记管理机关向项目公司签发营业执照的日期即为项目公司成立之日。\n</p><p>\n  2.8投资回报机制：可用性服务费+绩效服务费。\n</p><p>\n  2.9资金来源：项目资金通过股权融资和债务融资获得。\n</p><p>\n  （1）股权融资：设定政府出资人代表和中标社会资本须共同提供不少于投资总额20%的自有资本金（其中政府出资人代表仅需出资项目公司注册资本的10%即可，其余自有资本金由中标社会资本负责筹措），自有资本金按建设进度逐步到位。\n</p><p>\n  （2）债务融资：除自有资本金外的资金由项目公司负责筹措，项目自有资本金外建设资金解决方式：一是可通过项目公司申请银行贷款或其他融资方式解决，但所获资金仅限用于本项目建设使用；二是该项资金筹措过程中所需融资担保，由社会投资人自行负责并承担办理融资担保所需的一切费用；三是项目公司不得以本项目的固定资产以任何形式为其他项目的融资提供担保；四是该项资金应按照项目资金需求计划要求及时到位，若资本金外的建设资金未及时到位，则由社会投资人注入。\n</p><p>\n  （3）项目公司的资金仅限于本项目建设和运营维护。\n</p><p>\n  2.10合作年限：项目合作期含建设期和运营期，其中本项目整体建设期为2年，运营期为20年【本项目水利工程完工验收和景观工程竣工验收合格次日分别进入运营期，运营期均为20年】，整体合作期为22年。若建设期延长（缩短），运营期年限不变，项目合作期相应延长（缩短）。\n</p><p>\n  建设期要求：要求项目在开工令发出之日起在限定工期内通过竣（完）工验收。\n</p><p>\n  2.11招标内容及范围：\n</p><p>\n  招标内容为福建省南平市光泽县“水美城市”（一期）工程PPP项目社会投资人招标。\n</p><p>\n  招标范围为本项目的投融资、工程建设、管理维护、运营和移交。工程建设和运营维护范围以本项目各类设计文件、施工图纸及相关技术标准和要求为准。\n</p><p>\n  3. 申请人资格要求\n</p><p>\n  3.1凡有投资意向并是正式成立且有效存在、具有相应的综合实力、投融资能力和投资建设经验的中国境内企业法人或合伙企业，均可向本项目招标人提出资格审查申请，只有资格预审合格并被列入投标申请人入围名单的投标申请人才能参加投标。\n</p><p>\n  3.2 投标申请人基本资格条件：\n</p><p>\n  （1）投标申请人符合《中华人民共和国政府采购法》第二十二条及《中华人民共和国政府采购法实施条例》第十九条第二款规定的供应商资格条件；（若为联合体申请的，联合体所有成员均需满足本款要求）\n</p><p>\n  （2）投标申请人必须是有效存续的境内企业法人或合伙企业(或者是该等企业法人或合伙企业组成的联合体)，持有合法有效的企业法人或合伙企业营业执照；\n</p><p>\n  （3）若投标申请人存在下述情况的，其申请将被评审小组予以否决：与招标人存在利害关系可能影响招标公正性的法人、其他组织或者个人；（若为联合体申请的，联合体所有成员须满足本条款要求）\n</p><p>\n  （4）投标申请人具备行政主管部门核发的有效资质证书：\n</p><p>\n  投标申请人具备行政主管部门核发的有效的水利水电工程施工总承包三级及以上、市政公用工程施工总承包一及以上资质以及《施工企业安全生产许可证》；（若为联合体申请，联合体须满足本条款要求；提供水利水电工程施工总承包服务和提供市政公用工程施工总承包服务的企业均需提供施工企业安全生产许可证）\n</p><p>\n  （5）投标申请人2016年度的净资产不少于4亿元；（若为联合体申请的，联合体牵头人须满足本条款要求）\n</p><p>\n  （6）投标申请人应具备良好的投融资能力、资金实力：\n</p><p>\n  ①申请人须提供不少于人民币6.16亿元的金融机构贷款意向函或综合授信文件；（若为联合体申请的，联合体牵头人须满足本条款要求）\n</p><p>\n  ②申请人应承诺：投标申请人按约定完成自有资金的筹集，除自有资金以外的资金由项目公司负责融资，申请人根据需要提供金融机构认可的融资担保；若除自有资金以外的资金无法实现项目融资，由申请人提供担保或由申请人保障债务资金到位，保障项目建设进度需要；（若为联合体申请的，由联合体各方共同承诺）\n</p><p>\n  （7）投标申请人必须具备如下项目经验和业绩：\n</p><p>\n  自本项目资格预审公告发布之日起（不含发布当日）的前三年内作为投资人承接过单项合同金额不少于2亿元人民币的水利水电工程或市政公用工程类PPP项目；（若为联合体申请的，联合体其中一方满足；PPP模式包括BOT、BOO、BTO、DBFO等运作方式，但不含BT模式；联合体成员全资子公司的业绩予以认定）\n</p><p>\n  所提供PPP项目业绩必须已录入到财政部政府和社会资本合作中心PPP项目库。需提供财政部政府和社会资本合作中心（网址：http://www.cpppc.org/）PPP项目库中相应项目“项目详情”的网页截图并加盖投标人单位公章；\n</p><p>\n  水利水电工程是指以防洪、灌溉、发电、供水、治涝、水环境治理等为目的的各类工程（包括配套与附属工程），主要工程内容包括：水工建筑物（坝、堤、水闸、溢洪道、水工隧洞、涵洞与涵管、取水建筑物、河道整治建筑物、渠系建筑物、通航、过木、过鱼建筑物、地基处理）建设、水电站建设、水泵站建设、水力机械安装、水工金属结构制造及安装、电气设备安装、自动化信息系统、环境保护工程建设、水土保持工程建设、土地整治工程建设，以及与防汛抗旱有关的道路、桥梁、通讯、水文、凿井等工程建设，与上述工程相关的管理用房附属工程建设等；\n</p><p>\n  市政公用工程包括给水工程、排水工程、燃气工程、热力工程、城市道路工程、城市桥梁工程、城市隧道工程（指城市规划区内的穿山过江隧道、地铁隧道、地下交通工程、地下过街通道）、公共交通工程、轨道交通工程、环境卫生工程、照明工程、绿化工程；\n</p><p>\n  （8）根据福建省检察院、福建省财政厅文件《关于在政府采购活动中开展行贿犯罪档案查询工作的通知》【闽检发[2014]7号】的通知，投标申请人需提供资格预审申请文件提交截止日前两个月内投标申请人住所地或本项目业务发生地检察院出具的针对投标申请人单位的行贿犯罪档案查询结果告知函原件（若为联合体申请的，则联合体各方均须提供）；\n</p><p>\n  （9）本项目接受相关企业组成联合体参与投标，但联合体成员数（含联合体牵头人）不超过2家。\n</p><p>\n  （其他资格预审合格条件详见本项目《资格预审文件》）\n</p><p>\n  3.3本次招标不分标段，各投标申请人应对上述招标范围进行全部投标。\n</p><p>\n  4.资格预审方法\n</p><p>\n  本次资格预审采用合格制。招标人将依法组建资格审查委员会，根据本《资格预审文件》中所规定的资格预审评审标准和办法，对各投标申请人按时提交的资格预审申请文件进行审查，并确定投标申请人入围名单。资格预审结果将及时告知投标申请人，对进入投标申请人入围名单的投标申请人发出《投标邀请书》。投标申请人凭《投标邀请书》购买《招标文件》。\n</p><p>\n  5.申请报名和文件获取\n</p><p>\n  凡有意申请资格预审者，请投标申请人的法定代表人或其授权代理人于2017年8月7日至2017年8月11日（法定公休日、法定节假日除外），每日上午9时00分至11时30分，下午15时00分至17时30分（北京时间，下同），携带下述资料至福建省招标采购集团有限公司（福建省招标股份有限公司）（福州市鼓楼区洪山园路68号招标大厦A座601、602、603室）报名。资格预审文件每套500元，售后不退。\n</p><p>\n  （1）投资申请原件（格式详见附件一，须加盖单位公章、法定代表人签名或盖章，如为联合体申请，联合体各方均须加盖单位公章和各方法定代表人签名或盖章）；\n</p><p>\n  （2）投标申请人对其授权代理人出具的授权委托书原件（授权委托书格式详见附件二；如为联合体申请，由联合体牵头人出具；如联合体牵头人法定代表人参加报名，则不需要提交授权委托书）；\n</p><p>\n  （3）投标申请人法定代表人或其授权代理人的有效身份证件原件和复印件（加盖公章，如为联合体申请，加盖联合体牵头人公章）；\n</p><p>\n  （4）企业法人或合伙企业营业执照副本复印件（加盖公章；若为联合体申请的，联合体各方均需提供，且复印件须加盖各自单位公章）。\n</p><p>\n  6．资格预审申请文件的递交\n</p><p>\n  6.1 递交资格预审申请文件截止时间：2017年8月28日上午9时00分，提交地点为福建省招标采购集团有限公司（福建省招标股份有限公司）（福州市鼓楼区洪山园路68号招标大厦A座四楼开标室），递交方式为当面递交。\n</p><p>\n  6.2逾期送达或者未送达指定地点的资格预审申请文件，招标人不予受理。\n</p><p>\n  7．信息发布媒介\n</p><p>\n  有关本项目招标的相关信息（包括资格预审文件的澄清、修改）都将在中国政府采购网、福建省政府采购网上公布，不作另行通知，请有意参与的投标申请人随时关注相关网站，以免错漏重要信息。\n</p><p>\n  8．投标保证金的提交\n</p><p>\n  8.1 投标保证金提交的时间及金额：投标保证金为人民币600万元，资格预审阶段投标保证金为人民币300万元，通过资格预审并参加投标的投标人在招标文件规定的时间前再提交剩余保证金。\n</p><p>\n  8.2 资格预审阶段投标保证金提交的方式：在提交资格预审申请文件截止之日的前一个工作日下午17:30分前，从投标申请人企业基本账户银行以电汇或银行转账的形式，汇达至指定的保证金账户。\n</p><p>\n  8.3 资格预审阶段投标保证金汇款凭证上用途栏应注明本项目招标编号[标准格式：投标保证金00091711011180C]。\n</p><p>\n  8.4 若为联合体申请，由联合体牵头人按照上述要求提供投标保证金。\n</p><p>\n  9.联系方式\n</p><p>\n  9.1 招 标 人：光泽县水利局\n</p><p>\n  地  址：光泽县文昌路64号\n</p><p>\n  联系人：陈先生\n</p><p>\n  电  话：0599-7953021\n</p><p>\n  传  真：0599-7935792\n</p><p>\n  9.2顾问咨询（含招标代理）机构：福建省招标采购集团有限公司（福建省招标股份有限公司）\n</p><p>\n  地  址：福州市鼓楼区洪山园路68号招标大厦(邮编350002)\n</p><p>\n  联 系 人：郑先生、吕女士\n</p><p>\n  联系电话：0591-28302236、0591-38872076\n</p><p>\n  传    真：0591- 38113823\n</p><p>\n  保证金账户：\n</p><p>\n  开户名：福建省招标采购集团有限公司\n</p><p>\n  开户行：福建海峡银行五一支行\n</p><p>\n  帐号：100012691880010002\n</p><p>\n  七、其它补充事宜：\n</p><p>\n\n\n  PPP项目信息如下：\n</p><p>\n  项目授权主体名称：光泽县人民政府\n</p><p>\n  是否允许联合体：是\n</p><p>\n  是否限定社会资本数量： 否\n</p><p>\n  是否采购本国货物和服务：是\n</p><p>\n  技术引进和转让要求：\n</p><p>\n  详见公告\n</p><p>\n  对社会资本参与采购活动和履约保证的担保要求：\n</p><p>\n  详见公告</p>\n</div>\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "<h3>\n  乌鲁木齐红雁路（原东过境专用公路）改建工程PPP项目资格预审公告\n</h3>\n<div class=\"sub\">来源：中国政府采购网</div>\n<div class=\"sub\">2017-08-04</div>\n<div class=\"text\">\n\n<p>\n　　根据《中华人民共和国政府采购法》等有关规定，经政府采购管理部门批准，将对乌鲁木齐红雁路（原东过境专用公路）改建工程PPP项目资格预审公告进行招标，特邀请有意向的潜在供应商前来报名参加。\n</p><p>\n\n\n项目名称：乌鲁木齐红雁路（原东过境专用公路）改建工程PPP项目资格预审公告\n</p><p>\n项目编号：WZCG201701061\n</p><p>\n项目联系方式：\n</p><p>\n项目联系人：彭严\n</p><p>\n项目联系电话：13281149272\n\n</p><p>\n\n项目实施机构联系方式：\n</p><p>\n项目实施机构：乌鲁木齐市交通运输局\n</p><p>\n地址：新疆维吾尔自治区乌鲁木齐市南湖西路北二巷28号\n</p><p>\n联系方式：薛文君 电话：0991-4886302\n\n</p><p>\n\n代理机构联系方式：\n</p><p>\n代理机构：乌鲁木齐市公共资源交易中心（乌鲁木齐市政府采购中心）\n</p><p>\n代理机构联系人：周旭翔\n</p><p>\n代理机构地址： 0991--4184317\n</p><p>\n\n\n一、采购项目内容及预算金额\n</p><p>\n预算金额：75163.93 万元（人民币）\n</p><p>\n获取资格预审文件的时间：2017年08月07日 10:30 至 2017年08月11日 19:30(双休日及法定节假日除外)\n</p><p>\n获取资格预审文件的地点：新疆维吾尔自治区乌鲁木齐市南湖西路北二巷28号；联系人：彭严；联系电话：13281149272。\n</p><p>\n获取资格预审文件的方式：新疆维吾尔自治区乌鲁木齐市南湖西路北二巷28号；联系人：彭严；联系电话：13281149272\n</p><p>\n\n\n二、投标人的资格要求:\n</p><p>\n详见文件\n\n</p><p>\n\n三、采购项目需要落实的政府采购政策：\n</p><p>\n详见文件\n</p><p>\n四、审查标准、方法：\n</p><p>\n详见文件\n</p><p>\n五、资格审查日期：2017-08-31\n</p><p>\n资格预审申请文件递交截止时间：2017年08月31日 11:00  (双休日及法定节假日除外)\n</p><p>\n资格审查地点：乌鲁木齐市公共资源交易中心（乌鲁木齐市政府采购中心）7号开标厅（乌鲁木齐市益民大厦）\n</p><p>\n六、招标项目基本概况、用途、采购需求、数量、简要技术要求：\n</p><p>\n乌鲁木齐红雁路（原东过境专用公路）改建工程PPP项目\n资格预审公告\n\n</p><p>\n\n依据乌鲁木齐市政府批复，乌鲁木齐市交通运输局委托乌鲁木齐市公共资源交易中心（市政府采购中心）对乌鲁木齐红雁路（原东过境专用公路）改建工程PPP 项目（以下简称“本项目”）以公开招标采购方式确定投融资、建设及运营单位。本次采购工作按照《中华人民共和国政府采购法》及《政府和社会资本合作项目政府采购管理办法》等有关法律法规组织和实施。现将资格预审有关事宜公告如下，特邀请符合条件的社会资本方（以下简称申请人）提出资格预审申请。\n</p><p>\n项目概况\n</p><p>\n项目名称：乌鲁木齐红雁路（原东过境专用公路）改建工程PPP项目</p><p>\n项目编号：WZCG201701061</p><p>\n授权主体：乌鲁木齐市人民政府</p><p>\n实施机构：乌鲁木齐市交通运输局</p><p>\n招标代理机构：乌鲁木齐市公共资源交易中心（乌鲁木齐市\n\n政府采购中心）\n</p><p>\n采购方式：公开招标</p><p>\n采购需求：本项目采购需求为乌鲁木齐红雁路（原东过境专用公路）改建工程PPP项目的社会资本。</p><p>\n项目投资及建设规模：红雁路（原东过境专用公路）改建工程起点位于燕南立交东出口与燕儿窝路交叉口，终点至在建东二环路。线路位于东绕城与二环之间，西接河滩快速路、G314（雅山路）及规划城南经贸合作区，北接东绕城花儿连接线、东二环路。项目按城市主干路建设，全长9.35Km，道路规划红线宽度50m，本次实施断面宽度40m，两侧各预留5.0m宽绿化控制带。断面组成为：中央24m宽机动车道，两侧依次为3.5m宽绿化带、4.5m宽人行道。PPP项目范围包括道路工程、交通工程、照明工程、雨污水管线工程、绿化工程及照明电力土建工程等，具体以工可批复中政府投资范围为准。本项目投资估算总额为75163.93万元。\n</p><p>项目合作模式：本项目以PPP模式操作，具体运作方式为BOT（建设－运营－移交），合作期为16年，其中建设期1年，运营期15年。本项目由社会资本出资100%组建项目公司，项目公司注册资本1亿元，投入的项目资本金比例为项目总投资的20％，由项目公司负责本项目的投资、建设、运营和移交工作。项目公司通过政府付费收回投资并取得收益。\n</p><p>社会资本应具备的资格条件\n</p><p>\n参与本项目的社会资本申请人应具有以下资格条件：\n</p><p>\n符合《中华人民共和国政府采购法》第二十二条的规定：具有独立承担民事责任的能力；具有良好的商业信誉和健全的财务会计制度；具有履行合同所必需的设备和专业技术能力；有依法缴纳税收和社会保障资金的良好记录；参加政府采购活动前三年内，在经营活动中没有重大违法记录；法律、行政法规规定的其他条件。\n</p><p>须为具有独立法人资格，自主经营、独立核算的公司，具备承担本项目的能力，2016年期末净资产不低于10亿元，资产负债率不超过85%。\n</p><p>须具有建设行政主管部门颁发的市政公用工程施工总承包一级（含）以上资质，须具有有效的施工企业《安全生产许可证》。\n</p><p>注册资本为 1 亿元人民币及以上。\n</p><p>自2012年至资格预审申请文件递交截止日，在中国大陆地区至少有一个已完工的单项合同额在2亿元及以上的市政道路（或隧道、桥梁）施工项目业绩。\n</p><p>具有足够的资本实力和相应渠道的融资能力，能履行建设义务：\n</p><p>\n提供2014年、2015年、2016年度的审计报告；</p><p>\n财务状况良好，并有满足该项目经营必需的资金或者可靠的资金来源及相应偿债能力；</p><p>\n其他能证明申请人有出资能力的文件。</p><p>\n</p><p>\n</p><p>申请人、申请人的法定代表人近三年内在检察机关行贿犯罪档案查询系统中无犯罪记录。\n</p><p>关联方约束\n</p><p>\n单位负责人为同一人或者存在控股、管理关系的不同单位，不得同时参加本项目投标，否则，相关投标都将被否决。\n</p><p>\n上述条件可能会根据市场测试情况进行部分调整，以达到充分竞争和公开竞选的目的。\n</p><p>\n本次采购不接受联合体投标。</p><p>\n资格报名表的填报及预审文件的获取</p><p>\n申请人获得资格预审文件需下载并完整填写乌鲁木齐红雁路（原东过境专用公路）改建工程PPP项目报名表（详见1.8附件），并提供以下资料进行报名：\n</p><p>\n法定代表人身份证原件和身份证明原件或者法定代表人授权委托书原件、委托代理人身份证原件、委托代理人缴纳6个月以上的社保证明复印件（加盖公章），原件备查。\n</p><p>营业执照、组织机构代码证及税务登记证复印件或三证合一营业执照副本复印件并加盖公章，原件备查。\n</p><p>企业资质证书复印件加盖公章，原件备查。\n</p><p>施工企业安全生产许可证副本复印件加盖公章，原件备查。\n</p><p>商业银行对公司的不低于 2 亿元的授信协议复印件并加盖公章，原件备查。\n</p><p>2014年-2016年依法缴纳税收和社保金的复印件并加盖公章，原件备查。\n</p><p>开户许可证复印件并加盖公章，原件备查。\n</p><p>无犯罪行贿记录档案及无重大违法记录声明函复印件并加盖公章，原件备查。\n</p><p>报名时间： 2017 年8月7日至8月11日期间，每日上午 10:30-13:30（北京时间），下午 15:30-19:30（北京时间）。报名地点：乌鲁木齐市交通运输局建设管理处。地  址：新疆维吾尔自治区乌鲁木齐市南湖西路北二巷28号；联系人：彭严；联系电话：13281149272。\n</p><p>资格预审文件的获取：根据本公告要求提供资料报名。证件及资料不全者，不予发售资格预审文件。\n</p><p>资格预审文件递交截止时间、地点\n</p><p>\n申请人应当按照资格预审文件的要求准备完整的资格预审申请文件， 密封后递交至乌鲁木齐市公共资源交易中心（市政府采购中心）7号开标厅，逾期送达的资格预审文件不予受理。\n</p><p>\n申请人递交申请文件时应由法定代表人携带法定代表人身份证和身份证明原件，或者由委托代理人携带法定代表人授权委托书原件、委托代理人身份证原件及复印件以及委托代理人缴纳6个月以上的社保证明复印件（加盖公章），原件备查。\n</p><p>\n本项目资格预审文件所要求携带原件除身份证原件不密封外，其他原件均需与资格预审申请文件分开密封提交审查。\n</p><p>\n递交截止时间： 2017 年 8 月31日11时 0分；\n</p><p>\n递交地点：乌鲁木齐市公共资源交易中心（市政府采购中心）（乌鲁木齐市益民大厦）；\n</p><p>\n资格预审\n</p><p>\n资格预审时间：2017 年8月31日11时0分；\n</p><p>\n资格预审地点：乌鲁木齐市公共资源交易中心（乌鲁木齐市政府采购中心）7号开标厅（乌鲁木齐市益民大厦）；\n</p><p>\n逾期送达或密封不合格的资格预审申请文件， 不予受理。\n</p><p>\n资格审查</p><p>及确定潜在社会资本的方法\n\n本资格预审采用有限数量制。审查委员会依据本文件规定的审查标准和程序，选取不超过四家符合条件的社会资本申请人。本项目通过资格预审的社会资本申请人不足三家的，项目实施机构应当在调整资格预审公告内容后重新组织资格预审。\n</p><p>\n合格社会资本申请人将在资格预审结束后在中国政府采购网和乌鲁木齐市政府采购网进行公示。未参加本次资格预审及资格预审不合格的申请人均不得进入后续公开招标程序。\n</p><p>\n联系方式\n</p><p>\n采购人：乌鲁木齐市交通运输局\n</p><p>\n地  址：新疆维吾尔自治区乌鲁木齐市南湖西路北二巷28号\n</p><p>\n联系人：彭严\n</p><p>\n电  话：13281149272\n</p><p>\n传  真：0991-3700595\n</p><p>\n招标代理机构\n</p><p>\n招标代理机构：乌鲁木齐市公共资源交易中心（市政府采购中心）\n</p><p>\n地  址：新疆维吾尔自治区乌鲁木齐市水磨沟区龙盛街益民大厦\n</p><p>\n联系人：周旭翔\n</p><p>\n电  话：0991-4184317\n</p><p>\n2017年8月7日\n</p><p>\n\n\n\n附件</p><p>\n\n资格预审报名表</p>\n<table>\n<tr>\n  <td>\n文件名称\n  </td>\n  <td>\n资格预审报名表\n\n  </td>\n</tr>\n  <tr>\n  <td>\n项目名称\n\n  </td>\n  <td>\n\n乌鲁木齐红雁路（原东过境专用公路）改建工程PPP项目\n\n  </td>\n  </tr>\n  <tr>\n  <td>\n项目编号\n\n\n  </td><td>&nbsp;</td>\n  </tr>\n  <tr>\n  <td>\n\n\n报名时间\n\n\n  </td><td>&nbsp;</td>\n  </tr>\n  <tr>\n  <td>\n\n\n报名联系人姓名\n\n\n  </td><td>&nbsp;</td>\n  </tr>\n  <tr>\n  <td>\n\n\n报名联系人电话及邮箱\n\n\n  </td><td>&nbsp;</td>\n  </tr>\n  <tr>\n  <td>\n\n\n报名联系人传真\n\n\n  </td><td>&nbsp;</td>\n  </tr>\n  <tr>\n  <td>\n\n\n公司名称\n\n\n\n  </td><td>&nbsp;</td>\n  </tr>\n  <tr>\n  <td>\n\n公司地址\n\n\n  </td><td>&nbsp;</td>\n  </tr>\n  <tr>\n  <td>\n\n\n法定代表人姓名\n\n\n  </td><td>&nbsp;</td>\n  </tr>\n  <tr>\n  <td>\n\n\n法定代表人联系方式\n\n\n  </td><td>&nbsp;</td>\n  </tr>\n  <tr>\n  <td>\n\n\n所需带资料情况\n\n  </td>\n  <td>\n<p>\n法定代表人身份证原件和身份证明原件或者法定代表人授权委托书原件、委托代理人身份证原件及委托代理人缴纳6个月以上的社保证明复印件（加盖公章），原件备查。\n营业执照、组织机构代码证及税务登记证复印件或三证合一营业执照副本复印件并加盖公章，原件备查。\n  企业资质证书复印件加盖公章，原件备查。</p><p>\n施工企业安全生产许可证副本复印件加盖公章，原件备查。</p><p>\n商业银行对公司的不低于 2 亿元的授信协议复印件并加盖公章，原件备查。</p><p>\n2014年-2016年依法缴纳税收和社保金的复印件并加盖公章，原件备查。</p><p>\n开户许可证复印件并加盖公章，原件备查。</p><p>\n无犯罪行贿记录档案及无重大违法记录声明函复印件并加盖公章，原件备查。</p>\n\n  </td>\n  </tr>\n\n</table>\n\n  <p>\n  七、其它补充事宜：\n\n</p><p>\n\n  PPP项目信息如下：\n</p><p>\n  项目授权主体名称：乌鲁木齐市人民政府\n</p><p>\n  是否允许联合体： 否\n</p><p>\n  是否限定社会资本数量：是\n</p><p>\n  限定社会资本方法及标准：\n</p><p>\n  详见文件\n</p><p>\n  是否采购本国货物和服务：是\n</p><p>\n  技术引进和转让要求：\n</p><p>\n  详见文件\n</p><p>\n  对社会资本参与采购活动和履约保证的担保要求：\n</p><p>\n  详见文件</p>\n</div>div>\n"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<h3>\n\n  永泰县生态主题公园等一揽子民生工程PPP项目资格预审公告\n</h3>\n<div class=\"sub\">来源：中国政府采购网</div>\n<div class=\"sub\">2017-08-07</div>\n<div class=\"text\">\n<p>\n\n　　根据《中华人民共和国政府采购法》等有关规定，经政府采购管理部门批准，将对永泰县生态主题公园等一揽子民生工程PPP项目进行招标，特邀请有意向的潜在供应商前来报名参加。\n</p><p>\n\n项目名称：永泰县生态主题公园等一揽子民生工程PPP项目\n</p><p>\n项目编号：FJTP-00091711011299\n</p><p>\n项目联系方式：\n</p><p>\n项目联系人：施先生\n</p><p>\n项目联系电话：0591-38872076\n</p><p>\n\n\n项目实施机构联系方式：\n</p><p>\n项目实施机构：永泰县住房和城乡建设局\n</p><p>\n地址：永泰县樟城镇富裕新村18号\n</p><p>\n联系方式：黄先生、吴先生0591-24812863\n</p><p>\n\n\n代理机构联系方式：\n</p><p>\n代理机构：福建省招标采购集团有限公司\n</p><p>\n代理机构联系人：邱先生、施先生0591-28302236、0591-38872076\n</p><p>\n代理机构地址： 福州市鼓楼区洪山园路68号招标大厦\n\n</p><p>\n\n一、采购项目内容及预算金额\n</p><p>\n预算金额：58700.0 万元（人民币）\n</p><p>\n获取资格预审文件的时间：2017年08月07日 09:00 至 2017年08月11日 17:30(双休日及法定节假日除外)\n</p><p>\n获取资格预审文件的地点：福建省招标采购集团有限公司（福建省招标股份有限公司）（福州市鼓楼区洪山园路68号招标大厦A座601、602、603室）\n</p><p>\n获取资格预审文件的方式：携带资料报名，文件每套500元，售后不退。\n\n</p><p>\n\n二、投标人的资格要求:\n</p><p>\n详见公告\n</p><p>\n\n\n三、采购项目需要落实的政府采购政策：\n</p><p>\n详见公告\n</p><p>\n四、审查标准、方法：\n</p><p>\n合格制\n</p><p>\n五、资格审查日期：2017-08-28\n</p><p>\n资格预审申请文件递交截止时间：2017年08月28日 09:00  (双休日及法定节假日除外)\n</p><p>\n资格审查地点：福建省招标采购集团有限公司（福建省招标股份有限公司）（福州市鼓楼区洪山园路68号招标大厦A座四楼）\n</p><p>\n六、招标项目基本概况、用途、采购需求、数量、简要技术要求：\n</p><p>\n资格预审公告\n</p><p>\n（招标编号：FJTP-00091711011299）\n\n</p><p>\n\n1．招标说明\n</p><p>\n根据永泰县人民政府相关会议精神，永泰县人民政府决定采用PPP模式（即政府和社会资本合作模式）建设永泰县生态主题公园等一揽子民生工程PPP项目，并原则同意永泰县生态主题公园等一揽子民生工程PPP项目的实施方案。目前该项目已具备招标条件，永泰县住房和城乡建设局为本项目实施机构、招标人及合同签约主体，永泰县城投实业集团有限公司为本项目政府出资人代表，福建省招标采购集团有限公司（福建省招标股份有限公司）为本项目顾问咨询（含招标代理）机构，对本项目的社会投资人进行公开招标，现欢迎具备相应资格条件的社会投资人提出资格预审申请。\n</p><p>\n2．项目概况与招标范围\n</p><p>\n2.1 项目名称：永泰县生态主题公园等一揽子民生工程PPP项目（以下简称“本项目”）。\n</p><p>\n2.2 项目地点：福建省福州永泰县。\n</p><p>\n2.3项目概况：\n</p><p>\n本项目包含永泰县小汤山生态主题公园（塔山至小汤山）林荫休闲步道工程、永泰县进出城关通道节点改造提升项目、永泰县南城区便民综合市场、永泰县南湖路立体智能停车场项目四个项目包。\n</p><p>\n其中项目一：永泰县小汤山生态主题公园（塔山至小汤山）林荫休闲步道工程。\n</p><p>\n本项目位于永泰南城区大樟溪县城段南侧，项目规划设计为永泰林荫步道刘岐大桥至塔山城关大桥段工程南侧，横跨塔山和小汤山，越过六馆一中心。工程建设规模：4.5 公里长，属于市级综合性休闲步道。 主线路3.5Km（含高架桥0.5Km）， 支线长0.947Km； 其中6m 道路长1.9km， 4m道路长1.1Km，TKK栈道长1.5Km。\n</p><p>\n建设内容包括景观高架桥漫步道、观景平台、铺装、绿化等工程；\n</p><p>\n项目总投资17835.60万元，工程建设静态投资17244.12万元（其中工程费用14649.28万元，工程建设其他费用1773.69万元，基本预备费821.15万元），项目建设期利息591.47万元；建设期0.5年。\n</p><p>\n项目二：永泰县进出城关通道节点改造提升项目\n</p><p>\n本项目位于富裕新村至永泰西出口区段（约3.4公里）、永泰西出口至永泰东出口区段（约12.8公里）、永泰东出口至龙峰路江滨公园（约6.0公里）、北门桥至清凉柴桥头（约2.2公里）。主要改造提升各进出城线路的道路改善、缆线归整、景观绿化、违章临搭拆除、环境卫生整治等，包括楼体立面改造、整修路面、改造公共照明设施、合理配置绿化等改造工程内容。\n</p><p>\n项目总投资6149.74万元，其中工程费用5130万元，工程建设其他费用626.57万元，基本预备费287.82万元，项目建设期利息105.35万元；建设期1年。\n</p><p>\n项目三：永泰县南城区便民综合市场\n</p><p>\n项目选址用地面积19881㎡，容积率3.5以下，建筑密度35%以上，绿化率30%以上，建筑限高100米。拟建一座便民综合市场，地上四层，地下二层，便民综合市场总建筑面积约58000㎡，其中便民综合市场地上建筑面积31000㎡，计容建筑面积约31000㎡，地下市场建筑面积27000㎡（不计容）；两座安置房，地上32层，建筑面积约32200平方米（含2700平方米的商业网点及不计容的400平方米的架空层）。\n</p><p>\n项目总投资32097.81万元，其中工程费用27755.06万元，工程建设其他费用1765.44万元，预备费1476.03万元，项目建设期利息1101.28万元；建设期2年。\n</p><p>\n项目四：永泰县南湖路立体智能停车场项目\n</p><p>\n（1）智能停车库：本项目占地总面积1032.25平方米，其中车库占地面积294平方米，车库面积2940平方米。拟建一栋停车十层的智能停车库，总高度23.9米，其中一至十层为机械停车区域，预计地上机械停车112辆，地面车位3个。\n</p><p>\n公共厕所：在永泰县城范围建设10座公厕。\n</p><p>\n项目总投资2654.485万元。其中停车场项目总投资2335.097万元，工程费用为1846.11万元，建安工程费为727.55万元，设备投资费1118.56万元，工程建设其他费用为306.23万元；基本预备费为107.617万元，建设期利息71.14万元。公共厕所部分总投资319.388万元，工程费用为250.338万元，建安工程费为250.338万元，工程建设其他费用为44.05万元；基本预备费为14.72万元，建设期利息10.28万元。建设期1年。\n</p><p>\n纳入本项目的投资总额约为5.87亿元（其中工程费用4.96亿元、工程建设其它费用0.45亿元，预备费为0.27亿元，建设期利息为0.19亿元）以及后期的运营维护费用，本项目投资估算最终以政府核准或批准的金额为准。\n</p><p>\n本项目的运营维护内容包括：南湖路立体智能停车场（完全使用者付费形式）、便民综合市场停车场、地下一层农贸市场、安置房商业配套、物业服务的运营（要求投资人年保底运营收入不少于1359.9万元人民币）以及上述PPP范围内提供的基础设施、园林绿化、物业管理的管养和维护服务。\n</p><p>\n项目公司可以向项目实施机构提出本项目范围内的其他可经营性项目，届时协商具体收入分配机制。\n</p><p>\n2.4项目公司组建要求\n</p><p>\n（1）注册资金（5000万元）、注册住所（永泰县）、组织形式（有限责任公司），股东注册资本金的注入时间及管理按国家相关法律法规的规定办理。\n</p><p>\n（2）项目公司股东结构、出资形式：由中标投资人与政府出资人代表永泰县城投实业集团有限公司共同组建项目公司，股权比例为90%:10%，政府出资人代表占有10%股权，按照项目资本金的10%出资到位，出资形式均为货币。\n</p><p>\n（3）成立时间：在项目实施机构、政府出资人代表与中标投资人签订《PPP项目合同》和《股东协议》后30个日历日内，按照《公司法》等中国适用法律和招标文件规定成立项目公司，并在项目所在地工商部门进行注册登记获得法人资格，登记管理机关向项目公司签发营业执照的日期即为项目公司成立之日。\n</p><p>\n2.5投资回报机制：项目一、项目二和项目三采用“使用者付费+政府付费”即“可行性缺口补助”形式；项目四采用“使用者付费”形式。\n</p><p>\n2.6资金来源：\n</p><p>\n（1）政府出资人代表和中标投资人须共同提供不少于投资总额30%的项目资本金（其中政府出资人代表仅需出资项目资本金的10%即可，其余项目资本金由中标投资人负责筹措），项目资本金按建设进度逐步到位。\n</p><p>\n（2）除项目资本金以外的资金由项目公司负责融资，中标投资人根据需要提供金融机构认可的融资担保，若除项目资本金以外的资金未按时到位的由投资人负责补齐。\n</p><p>\n（3）项目公司的资金仅限于本项目建设和运营维护。\n</p><p>\n2.7项目合作期：项目整体合作期为25年；其中永泰县小汤山生态主题公园（塔山至小汤山）林荫休闲步道工程合作期为15.5年，建设期为0.5年，运营期为15年；永泰县进出城关通道节点改造提升项目合作期为16年，建设期为1年，运营期为15年；永泰县南城区便民综合市场合作期为17年，建设期为2年，运营期为15年；永泰县南湖路立体智能停车场项目合作期为25年，建设期为1年，运营期为24年；建设期延长，合作期限均相应延长。\n</p><p>\n2.8招标内容及范围：\n</p><p>\n招标内容为永泰县生态主题公园等一揽子民生工程PPP项目投资人招标。\n</p><p>\n招标范围为本项目的投融资、建设（含勘察合计）、运营维护和移交，工程建设和运营维护范围以本项目各类设计文件、施工图纸及相关技术标准和要求为准。\n</p><p>\n3. 投标申请人资格要求\n</p><p>\n3.1凡有投资意向并是正式成立且有效存在、具有相应的综合实力、投融资能力和投资建设经验的中国境内企业法人，均可向本项目招标人提出资格审查申请，只有资格预审合格并被列入投标申请人入围名单的投标申请人才能参加投标。\n</p><p>\n3.2 投标申请人基本资格条件：\n</p><p>\n（1）投标申请人符合《中华人民共和国政府采购法》第二十二条及《中华人民共和国政府采购法实施条例》第十九条第二款规定的供应商资格条件；（若为联合体申请的，联合体所有成员均需满足本款要求）\n</p><p>\n（2）投标申请人必须是有效存续的境内企业法人(或者是该等企业法人组成的联合体)，持有合法有效的企业法人营业执照；\n</p><p>\n（3）若投标申请人存在下述情况的，其申请将被评审小组予以否决：与招标人存在利害关系可能影响招标公正性的法人、其他组织或者个人；（若为联合体申请的，联合体所有成员须满足本条款要求）\n</p><p>\n（4）投标申请人具备行政主管部门核发的有效资质证书：\n</p><p>\n①投标申请人具备行政主管部门核发的工程设计综合甲级资质或同时具备以下设计资质：\n</p><p>\nA:市政行业设计甲级资质或市政行业（燃气工程、轨道交通工程除外）设计甲级资质或市政行业（道路工程）设计甲级资质；\n</p><p>\nB:风景园林工程设计专项甲级资质；\n</p><p>\nC:建筑行业设计甲级资质或建筑行业(建筑工程)设计甲级资质。\n</p><p>\n②工程勘察综合甲级资质或工程勘察专业类（岩土工程）甲级资质。\n</p><p>\n③投标申请人具备行政主管部门核发有效的市政公用工程施工总承包一级及以上资质和建筑工程施工总承包一级及以上资质以及《施工企业安全生产许可证》。\n</p><p>\n（5）投标申请人应具备良好的投融资能力和资金实力：\n</p><p>\n①投标申请人2016年度净资产不少于5.87亿元人民币；（若为联合体申请的，联合体牵头人满足本条款要求）\n</p><p>\n②投标申请人须提供由国内银行在本资格预审公告发布之日后出具的总额不少于人民币1.76亿元的自有资金证明材料；（若为联合体申请的，联合体牵头人满足本条款要求）\n</p><p>\n③投标申请人须提供不少于5.87亿元人民币的的有效的金融机构贷款意向函或综合授信额度；（若为联合体申请的，联合体牵头人须满足本条款要求）\n</p><p>\n④申请人应承诺：投标申请人按约定完成项目资本金的筹集，除项目资本金以外的资金由项目公司负责融资，申请人根据需要提供金融机构认可的融资担保；若除项目资本金以外的资金无法实现项目融资，由申请人负责资金到位，保障项目建设进度需要。（若为联合体申请的，由联合体各方共同承诺）\n</p><p>\n（6）投标申请人必须具备如下项目经验和业绩要求：\n</p><p>\n自本项目资格预审公告发出之日起（不含发布当日）的前三年内作为投资人承接过单项合同金额不少于人民币5.87亿元的市政公用类PPP项目。【PPP项目业绩需纳入财政部PPP综合信息平台项目库中[http://www.cpppc.org]，否则不予认定】。（若为联合体申请的，联合体其中一方应满足本条款要求）\n</p><p>\n（7）本项目接受联合体申请，联合体各方均需持股且联合体牵头人需在项目公司中控股。\n</p><p>\n（8）根据福建省检察院、福建省财政厅文件《关于在政府采购活动中开展行贿犯罪档案查询工作的通知》【闽检发[2014]7号】的通知，投标申请人需提供资格预审申请文件提交截止日前两个月内投标申请人住所地或本项目业务发生地检察院出具的针对投标申请人单位的行贿犯罪档案查询结果告知函原件（若为联合体申请的，则联合体各方均须提供）。\n</p><p>\n（其它资格预审合格条件详见本项目《资格预审文件》）\n</p><p>\n3.3本次招标不分标段，各投标申请人应对上述招标范围进行全部投标。\n</p><p>\n4.资格预审方法\n</p><p>\n本次资格预审采用合格制。招标人将依法组建资格审查委员会，根据本《资格预审文件》中所规定的资格预审评审标准和办法，对各投标申请人按时提交的资格预审申请文件进行审查，并确定投标申请人入围名单。资格预审结果将及时告知投标申请人，对进入投标申请人入围名单的投标申请人发出《投标邀请书》。投标申请人凭《投标邀请书》购买《招标文件》。\n</p><p>\n5.申请报名和文件获取\n</p><p>\n凡有意申请资格预审者，请投标申请人的法定代表人或其授权代理人于2017年08月7日至2017年08月11日（法定公休日、法定节假日除外），每日上午9时00分至11时30分，下午15时00分至17时30分（北京时间，下同），携带下述资料至福建省招标采购集团有限公司（福建省招标股份有限公司）（福州市鼓楼区洪山园路68号招标大厦A座601、602、603室）报名。资格预审文件每套500元，售后不退。\n</p><p>\n（1）投资申请原件（格式详见附件一，须加盖单位公章、法定代表人签名或盖章，如为联合体申请，联合体各方均须加盖单位公章和各方法定代表人签名或盖章）；\n</p><p>\n（2）投标申请人对其授权代理人出具的授权委托书原件（授权委托书格式详见附件二；如为联合体申请，由联合体牵头人出具；如联合体牵头人法定代表人参加报名，则不需要提交授权委托书）；\n</p><p>\n（3）投标申请人法定代表人或其授权代理人的有效身份证件原件和复印件（加盖公章，如为联合体申请，加盖联合体牵头人公章）；\n</p><p>\n（4）企业法人营业执照副本复印件（加盖公章；若为联合体申请的，联合体各方均需提供，且复印件须加盖各自单位公章）。\n</p><p>\n（5）投标申请人经有审计资格单位审计的2016年度审计报告（含财务报表）复印件[加盖单位公章；若为联合体申请的，需提供联合体各方审计报告（含财务报表）复印件，并加盖各自单位公章]。\n</p><p>\n6．资格预审申请文件的递交\n</p><p>\n6.1 递交资格预审申请文件截止时间：2017年08月28日9时00分，提交地点为福建省招标采购集团有限公司（福建省招标股份有限公司）（福州市鼓楼区洪山园路68号招标大厦A座四楼开标室），递交方式为当面递交。\n</p><p>\n6.2逾期送达或者未送达指定地点的资格预审申请文件，招标人不予受理。\n</p><p>\n7．信息发布媒介\n</p><p>\n有关本项目招标的相关信息（包括资格预审文件的澄清、修改）都将在中国政府采购网、福建省政府采购网上公布，不作另行通知，请有意参与的投标申请人随时关注相关网站，以免错漏重要信息。\n</p><p>\n8．投标保证金的提交\n</p><p>\n8.1 投标保证金提交的时间及金额：投标保证金1100万元，投标申请人需在提交资格预审申请文件截止时间前提交人民币1100万元。\n</p><p>\n8.2 资格预审阶段投标保证金提交的方式：在提交资格预审申请文件截止时间前从投标申请人企业基本账户银行以电汇或银行转账的形式，汇达至指定的保证金账户。\n</p><p>\n8.3 资格预审阶段投标保证金汇款凭证上用途栏应注明本项目招标编号[标准格式：投标保证金00091711011299]。\n</p><p>\n8.4 若为联合体申请，由联合体牵头人按照上述要求提供投标保证金。\n</p><p>\n9.联系方式\n</p><p>\n9.1 招 标 人：永泰县住房和城乡建设局\n</p><p>\n地  址：永泰县樟城镇富裕新村18号\n</p><p>\n联系人：黄先生、吴先生\n</p><p>\n电  话：0591-24812863\n</p><p>\n9.2顾问咨询（含招标代理）机构：福建省招标采购集团有限公司（福建省招标股份有限公司）\n</p><p>\n地  址：福州市鼓楼区洪山园路68号招标大厦(邮编350002)\n</p><p>\n联 系 人：邱先生、施先生\n</p><p>\n联系电话：0591-28302236、0591-38872076\n</p><p>\n传    真：0591- 38113823\n\n</p><p>\n\n保证金账户：\n</p><p>\n开户名：福建省招标采购集团有限公司\n</p><p>\n开户行：福建海峡银行五一支行\n</p><p>\n帐号：100012691880010002\n</p><p>\n9.3 监督单位：永泰县财政局\n</p><p>\n七、其它补充事宜：\n</p><p>\n\n\nPPP项目信息如下：\n</p><p>\n项目授权主体名称：永泰县人民政府\n</p><p>\n是否允许联合体：是\n</p><p>\n是否限定社会资本数量： 否\n</p><p>\n是否采购本国货物和服务：是\n</p><p>\n技术引进和转让要求：\n</p><p>\n详见公告\n</p><p>\n对社会资本参与采购活动和履约保证的担保要求：\n</p><p>\n  详见公告</p></div>\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 20px\">\n<div class=\"list-group\">\n  <a class=\"list-group-item\" routerLink=\"/information/ppp-11\">\n    <h4 class=\"list-group-item-heading\">全国 PPP 入库项目落地投资额达 3.3 万亿元 </h4>\n    <p class=\"list-group-item-text\"> 2017-08-07</p>\n  </a>\n  <a  class=\"list-group-item\" routerLink=\"/information/ppp-12\">\n    <h4 class=\"list-group-item-heading\">《PPP 条例（征求意见稿）》的 10 个纯法律问题  </h4>\n    <p class=\"list-group-item-text\">2017-08-03</p>\n  </a>\n  <a class=\"list-group-item\" routerLink=\"/information/ppp-13\">\n    <h4 class=\"list-group-item-heading\">PPP 条例征求意见</h4>\n    <p class=\"list-group-item-text\">2017-07-25</p>\n  </a>\n  <a class=\"list-group-item\" routerLink=\"/information/ppp-21\">\n    <h4 class=\"list-group-item-heading\">福建省南平市光泽县“水美城市”（一期）工程 PPP 项目资格预审公告</h4>\n    <p class=\"list-group-item-text\"></p>\n  </a>\n  <a class=\"list-group-item\" routerLink=\"/information/ppp-22\">\n    <h4 class=\"list-group-item-heading\">乌鲁木齐红雁路（原东过境专用公路）改建工程 PPP 项目资格预审公告</h4>\n    <p class=\"list-group-item-text\"></p>\n  </a>\n  <a class=\"list-group-item\" routerLink=\"/information/ppp-23\">\n    <h4 class=\"list-group-item-heading\">永泰县生态主题公园等一揽子民生工程 PPP 项目资格预审公告</h4>\n    <p class=\"list-group-item-text\"></p>\n  </a>\n</div>\n</div>\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80px;\"></div>\n\n\n\n<!--<form class=\"form-horizontal\">-->\n<div class=\"form-horizontal\">\n  <span class=\"heading\">用户激活</span>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\" id=\"inputTelephone\" placeholder=\"手  机  号\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\" id=\"inpuCheckCode\" placeholder=\"手机校验码\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" id=\"inputPassword1\" placeholder=\"LVfaith密码\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" id=\"inputBankNumber\" placeholder=\"银行卡号\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" id=\"inputBankTele\" placeholder=\"预留手机号\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\" id=\"inputBankCheckCode\" placeholder=\"手机校验码\">\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-default\" routerLink=\"/host\">立即激活</button>\n  </div>\n</div>\n<!--</form>-->\n"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80px;\"></div>\n\n\n\n        <!--<form class=\"form-horizontal\">-->\n        <div class=\"form-horizontal\">\n          <span class=\"heading\">用户注册</span>\n          <div class=\"form-group\">\n            <input class=\"form-control\" id=\"inputTelephone\" placeholder=\"手 机 号\" (keyup)=\"setTele($event)\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword1\" placeholder=\"密  　码\" (keyup)=\"setPsd1($event)\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"确认密码\" (keyup)=\"setPsd2($event)\">\n          </div>\n          <div class=\"form-group\">\n            <p style = \"color:red;\">{{alertMsg}}</p>\n            <!--<button type=\"submit\" class=\"btn btn-default\" (click)=\"enroll()\">注册</button>-->\n            <button class=\"btn btn-default\" (click)=\"enroll()\">注册</button>\n          </div>\n        </div>\n        <!--</form>-->\n"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80px;\"></div>\n<!--<from>-->\n<div class=\"form-horizontal\">\n  <span class=\"heading\">用户实名验证</span>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\"  placeholder=\"身份证号码\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"真实姓名\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\"  placeholder=\"联系地址\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\"  placeholder=\"选择银行\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"银行卡号\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\"  placeholder=\"银行预留手机号\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\"  placeholder=\"开户行所在地 \">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\"  placeholder=\"交易密码设置\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"再输入一次交易密码\">\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-default\" routerLink=\"/host\">确认提交进行实名认证</button>\n  </div>\n</div>\n<!--</from>-->\n"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<p>\n  questionnaire works!\n</p>\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100px\"></div>\n<p>\n  no-page-found works!\n</p>\n"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"title\">适用于计算认/申购基金的手续费和成交份额。</div>\n\n<div style=\"padding: 0px;\">\n  <form class=\"bs-example bs-example-form\" role=\"form\">\n    <div class=\"input-group myinput\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"认/申购金额\" (input)=\"cal1($event.target.value)\">\n      <span class=\"input-group-addon\">元</span>\n    </div>\n    <br>\n    <div class=\"input-group myinput\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"单位净值\"  (input)=\"cal2($event.target.value)\">\n      <span class=\"input-group-addon\">元</span>\n    </div>\n    <br>\n    <div class=\"input-group myinput\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"认/申购费率\" (input)=\"cal3($event.target.value)\">\n      <span class=\"input-group-addon\">%</span>\n    </div>\n  </form>\n</div>\n<div style=\"width: 300px;\nmargin-left: 100px;\nmargin-top: 20px;\"><button class=\"btn btn-danger\" style=\"width:300px;text-align: center\" (click)=\"cal()\">计算</button></div>\n<div class=\"title\">计算结果</div>\n<div style=\"margin-bottom: 20px\">\n<div class=\"result\">认/申购手续费:{{ result1}}元</div>\n<div class=\"result\">认/申购成交份额:{{ result2}}份</div>\n</div>\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"title\">适用于计算赎回基金的手续费和实际所得金额。</div>\n\n<div style=\"padding: 0px;\">\n  <form class=\"bs-example bs-example-form\" role=\"form\">\n    <div class=\"input-group myinput\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"赎回份额\" (input)=\"cal1($event.target.value)\">\n      <span class=\"input-group-addon\">份</span>\n    </div>\n    <br>\n    <div class=\"input-group myinput\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"赎回净值\" (input)=\"cal2($event.target.value)\">\n      <span class=\"input-group-addon\">元</span>\n    </div>\n    <br>\n    <div class=\"input-group myinput\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"赎回费率\" (input)=\"cal3($event.target.value)\">\n      <span class=\"input-group-addon\">%</span>\n    </div>\n  </form>\n</div>\n\n<div style=\"width: 300px;\nmargin-left: 100px;\nmargin-top: 20px;\"><button class=\"btn btn-danger\" style=\"width:300px;text-align: center\" (click)=\"cal()\">计算</button></div>\n<div class=\"title\">计算结果</div>\n<div style=\"margin-bottom: 20px\">\n  <div class=\"result\">赎回手续费:{{result1}}元</div>\n  <div class=\"result\">实际所得金额:{{result2}}份</div>\n</div>\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"title\">适用于计算基金的收益率</div>\n\n<div style=\"padding: 0px;\">\n  <form class=\"bs-example bs-example-form\" role=\"form\">\n    <div class=\"input-group myinput\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"投入本金\" (input)=\"cal1($event.target.value)\">\n      <span class=\"input-group-addon\">元</span>\n    </div>\n    <br>\n    <div class=\"input-group myinput\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"收回金额\" (input)=\"cal2($event.target.value)\">\n      <span class=\"input-group-addon\">元</span>\n    </div>\n    <br>\n    <div class=\"input-group myinput\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"持有期限\" (input)=\"cal3($event.target.value)\">\n      <span class=\"input-group-addon\">天</span>\n    </div>\n  </form>\n</div>\n\n<div style=\"width: 300px;\nmargin-left: 100px;\nmargin-top: 20px;\"><button class=\"btn btn-danger\" style=\"width:300px;text-align: center\" (click)=\"cal()\">计算</button></div>\n<div class=\"title\">计算结果</div>\n<div style=\"margin-bottom: 20px\">\n  <div class=\"result\">这两个的计算公式有待核实——持有期总收益率:{{result1}}元</div>\n  <div class=\"result\">持有期年化收益率:{{result2}}份</div>\n</div>\n"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 80px;\"></div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"titles span2  col-xs-12 col-sm-3 col-md-2 rightList\" id=\"rightList\">\n      <ul class=\"nav nav-stacked\">\n        <li class=\"title\">基金工具</li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"cal-1\">任/申购计算器</a></li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"cal-2\">赎回计算器</a></li>\n        <li class=\"SubTitle\"><a class=\"SubTitleText\" routerLink=\"cal-3\">收益计算器</a></li>\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-md-10\" >\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);


/***/ })

},[841]);
//# sourceMappingURL=main.bundle.map