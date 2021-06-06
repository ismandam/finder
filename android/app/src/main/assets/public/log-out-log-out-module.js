(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-out-log-out-module"],{

/***/ "1KrA":
/*!*******************************************!*\
  !*** ./src/app/log-out/log-out.module.ts ***!
  \*******************************************/
/*! exports provided: LogOutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutPageModule", function() { return LogOutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _log_out_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-out-routing.module */ "Z5ZX");
/* harmony import */ var _log_out_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-out.page */ "3uwn");







let LogOutPageModule = class LogOutPageModule {
};
LogOutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _log_out_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogOutPageRoutingModule"]
        ],
        declarations: [_log_out_page__WEBPACK_IMPORTED_MODULE_6__["LogOutPage"]]
    })
], LogOutPageModule);



/***/ }),

/***/ "3uwn":
/*!*****************************************!*\
  !*** ./src/app/log-out/log-out.page.ts ***!
  \*****************************************/
/*! exports provided: LogOutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutPage", function() { return LogOutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "fwsW");




let LogOutPage = class LogOutPage {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.storage.create();
        this.storage.clear();
        this.router.navigate(['form-login']);
    }
    ngOnInit() {
    }
};
LogOutPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LogOutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-out',
    })
], LogOutPage);



/***/ }),

/***/ "Z5ZX":
/*!***************************************************!*\
  !*** ./src/app/log-out/log-out-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LogOutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutPageRoutingModule", function() { return LogOutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _log_out_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-out.page */ "3uwn");




const routes = [
    {
        path: '',
        component: _log_out_page__WEBPACK_IMPORTED_MODULE_3__["LogOutPage"]
    }
];
let LogOutPageRoutingModule = class LogOutPageRoutingModule {
};
LogOutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogOutPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=log-out-log-out-module.js.map