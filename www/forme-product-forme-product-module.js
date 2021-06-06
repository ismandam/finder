(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forme-product-forme-product-module"],{

/***/ "1/oi":
/*!*******************************************************!*\
  !*** ./src/app/forme-product/forme-product.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtZS1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "CBty":
/*!***************************************************************!*\
  !*** ./src/app/forme-product/forme-product-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FormeProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormeProductPageRoutingModule", function() { return FormeProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forme_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forme-product.page */ "drnQ");




const routes = [
    {
        path: '',
        component: _forme_product_page__WEBPACK_IMPORTED_MODULE_3__["FormeProductPage"]
    }
];
let FormeProductPageRoutingModule = class FormeProductPageRoutingModule {
};
FormeProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormeProductPageRoutingModule);



/***/ }),

/***/ "Raz/":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forme-product/forme-product.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>forme-product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "d+U7":
/*!*******************************************************!*\
  !*** ./src/app/forme-product/forme-product.module.ts ***!
  \*******************************************************/
/*! exports provided: FormeProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormeProductPageModule", function() { return FormeProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forme_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forme-product-routing.module */ "CBty");
/* harmony import */ var _forme_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forme-product.page */ "drnQ");







let FormeProductPageModule = class FormeProductPageModule {
};
FormeProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forme_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormeProductPageRoutingModule"]
        ],
        declarations: [_forme_product_page__WEBPACK_IMPORTED_MODULE_6__["FormeProductPage"]]
    })
], FormeProductPageModule);



/***/ }),

/***/ "drnQ":
/*!*****************************************************!*\
  !*** ./src/app/forme-product/forme-product.page.ts ***!
  \*****************************************************/
/*! exports provided: FormeProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormeProductPage", function() { return FormeProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forme_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forme-product.page.html */ "Raz/");
/* harmony import */ var _forme_product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forme-product.page.scss */ "1/oi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FormeProductPage = class FormeProductPage {
    constructor() { }
    ngOnInit() {
    }
};
FormeProductPage.ctorParameters = () => [];
FormeProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forme-product',
        template: _raw_loader_forme_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forme_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormeProductPage);



/***/ })

}]);
//# sourceMappingURL=forme-product-forme-product-module.js.map