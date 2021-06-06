(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vandre-vandre-module"],{

/***/ "6poX":
/*!*************************************************!*\
  !*** ./src/app/vandre/vandre-routing.module.ts ***!
  \*************************************************/
/*! exports provided: VandrePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VandrePageRoutingModule", function() { return VandrePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vandre_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vandre.page */ "LfG+");




const routes = [
    {
        path: '',
        component: _vandre_page__WEBPACK_IMPORTED_MODULE_3__["VandrePage"]
    }
];
let VandrePageRoutingModule = class VandrePageRoutingModule {
};
VandrePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VandrePageRoutingModule);



/***/ }),

/***/ "LaNp":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vandre/vandre.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"findercolor\" >\n    <ion-buttons id=\"menubtn\" slot=\"start\">\n      <ion-back-button id=\"menubtn\" class=\"findercolor\" ></ion-back-button>\n     \n    </ion-buttons>\n    \n \n   <ion-title>bienvenu</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\" >\n  <ion-toolbar  class=\"foot\" >\n  <p   class=\"ion-text-center\">Finder pour vous servire\n   \n  </p>\n  \n  \n  </ion-toolbar>\n  \n  </ion-footer>");

/***/ }),

/***/ "LfG+":
/*!***************************************!*\
  !*** ./src/app/vandre/vandre.page.ts ***!
  \***************************************/
/*! exports provided: VandrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VandrePage", function() { return VandrePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vandre_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vandre.page.html */ "LaNp");
/* harmony import */ var _vandre_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vandre.page.scss */ "bxaE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let VandrePage = class VandrePage {
    constructor() { }
    ngOnInit() {
    }
};
VandrePage.ctorParameters = () => [];
VandrePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vandre',
        template: _raw_loader_vandre_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vandre_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VandrePage);



/***/ }),

/***/ "bxaE":
/*!*****************************************!*\
  !*** ./src/app/vandre/vandre.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".findercolor {\n  --background:#9651DA;\n  color: white;\n}\n\n.search {\n  padding-inline-end: 10px;\n  align-self: center;\n  color: white;\n}\n\n.buttoncol {\n  margin-right: 10%;\n  margin-left: 20%;\n  margin-block-end: 10%;\n  padding: auto;\n}\n\n.headerpad {\n  --background:#9651DA;\n  color: rgba(240, 240, 240, 0.562);\n  height: 70px;\n}\n\n.footerpos {\n  padding-inline-end: 0%;\n  margin-right: 25%;\n}\n\n.starcolor {\n  color: yellow;\n}\n\n.fabcolor {\n  --background: var(--ion-color-finder);\n}\n\n.fabsecond {\n  --background: var(--ion-color-finder2);\n}\n\n.sharecol {\n  color: #9651DA;\n}\n\n.btncenter {\n  display: flex;\n  justify-content: center;\n}\n\n.fabbtn {\n  margin-bottom: 30px;\n}\n\nion-fab-button[data-desc] {\n  position: relative;\n}\n\nion-fab-button[data-desc]::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 55px;\n  bottom: 4px;\n  background-color: var(--ion-color-finder);\n  padding: 9px;\n  border-radius: 15px;\n  color: white;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZhbmRyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFQyxvQkFBQTtFQUNDLFlBQUE7QUFESjs7QUFHSTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUk7RUFHSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0FBSlI7O0FBT0k7RUFDRSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQUpOOztBQU1JO0VBQ0Qsc0JBQUE7RUFDRSxpQkFBQTtBQUhMOztBQUtJO0VBRUMsYUFBQTtBQUhMOztBQU1JO0VBQ0UscUNBQUE7QUFITjs7QUFNSTtFQUNFLHNDQUFBO0FBSE47O0FBS0k7RUFFRSxjQUFBO0FBSE47O0FBS0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFGTjs7QUFLSTtFQUVFLG1CQUFBO0FBSE47O0FBTUs7RUFDRSxrQkFBQTtBQUhQOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlIQUFBO0FBRkYiLCJmaWxlIjoidmFuZHJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5maW5kZXJjb2xvcntcclxuICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZmluZGVyKTtcclxuICAgLS1iYWNrZ3JvdW5kOiM5NjUxREE7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgIC5zZWFyY2h7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICBcclxuICAgIH1cclxuICAgIC5idXR0b25jb2x7XHJcbiAgICAgIFxyXG4gICAgIC8vIGNvbG9yOnJnYigyNDUsIDI0MSwgNik7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxMCU7XHJcbiAgICAgICBcclxuICAgICAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5oZWFkZXJwYWR7XHJcbiAgICAgIC0tYmFja2dyb3VuZDojOTY1MURBO1xyXG4gICAgICBjb2xvcjpyZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNTYyKTtcclxuICAgICAgaGVpZ2h0OjcwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVycG9ze1xyXG4gICBwYWRkaW5nLWlubGluZS1lbmQ6IDAlO1xyXG4gICAgIG1hcmdpbi1yaWdodDogMjUlO1xyXG4gICAgfVxyXG4gICAgLnN0YXJjb2xvcntcclxuICAgIFxyXG4gICAgIGNvbG9yOiB5ZWxsb3c7XHJcblxyXG4gICAgfVxyXG4gICAgLmZhYmNvbG9ye1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1maW5kZXIpO1xyXG4gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM5NjUxREE7XHJcbiAgICB9XHJcbiAgICAuZmFic2Vjb25ke1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1maW5kZXIyKTtcclxuICAgIH1cclxuICAgIC5zaGFyZWNvbHtcclxuICAgICBcclxuICAgICAgY29sb3I6Izk2NTFEQTtcclxuICAgIH1cclxuICAgIC5idG5jZW50ZXJ7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgXHJcbiAgICAgfVxyXG4gICAgLmZhYmJ0bntcclxuICAgICAgIFxyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgXHJcbiAgICAgfVxyXG4gICAgIGlvbi1mYWItYnV0dG9uW2RhdGEtZGVzY117XHJcbiAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICB9XHJcbmlvbi1mYWItYnV0dG9uW2RhdGEtZGVzY106OmFmdGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OmF0dHIoZGF0YS1kZXNjKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHJpZ2h0OiA1NXB4O1xyXG4gIGJvdHRvbTo0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWZpbmRlcik7XHJcbiAgcGFkZGluZzo5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4yKSwwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcclxufSJdfQ== */");

/***/ }),

/***/ "zYQn":
/*!*****************************************!*\
  !*** ./src/app/vandre/vandre.module.ts ***!
  \*****************************************/
/*! exports provided: VandrePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VandrePageModule", function() { return VandrePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _vandre_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vandre-routing.module */ "6poX");
/* harmony import */ var _vandre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vandre.page */ "LfG+");







let VandrePageModule = class VandrePageModule {
};
VandrePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vandre_routing_module__WEBPACK_IMPORTED_MODULE_5__["VandrePageRoutingModule"]
        ],
        declarations: [_vandre_page__WEBPACK_IMPORTED_MODULE_6__["VandrePage"]]
    })
], VandrePageModule);



/***/ })

}]);
//# sourceMappingURL=vandre-vandre-module.js.map