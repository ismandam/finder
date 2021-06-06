(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marke-user-marke-user-module"],{

/***/ "E2lP":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marke-user/marke-user.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>marke-user</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "Y8PQ":
/*!*********************************************************!*\
  !*** ./src/app/marke-user/marke-user-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MarkeUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkeUserPageRoutingModule", function() { return MarkeUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _marke_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marke-user.page */ "f+4f");




const routes = [
    {
        path: '',
        component: _marke_user_page__WEBPACK_IMPORTED_MODULE_3__["MarkeUserPage"]
    }
];
let MarkeUserPageRoutingModule = class MarkeUserPageRoutingModule {
};
MarkeUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MarkeUserPageRoutingModule);



/***/ }),

/***/ "cGcp":
/*!*************************************************!*\
  !*** ./src/app/marke-user/marke-user.module.ts ***!
  \*************************************************/
/*! exports provided: MarkeUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkeUserPageModule", function() { return MarkeUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _marke_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marke-user-routing.module */ "Y8PQ");
/* harmony import */ var _marke_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marke-user.page */ "f+4f");







let MarkeUserPageModule = class MarkeUserPageModule {
};
MarkeUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _marke_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarkeUserPageRoutingModule"]
        ],
        declarations: [_marke_user_page__WEBPACK_IMPORTED_MODULE_6__["MarkeUserPage"]]
    })
], MarkeUserPageModule);



/***/ }),

/***/ "csnX":
/*!*************************************************!*\
  !*** ./src/app/marke-user/marke-user.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: white;\n}\n\n.findercolor {\n  --background:#9651DA;\n  color: white;\n}\n\n.search {\n  padding-inline-end: 10px;\n  align-self: center;\n  color: white;\n}\n\n.buttoncol {\n  margin-right: 10%;\n  margin-left: 20%;\n  margin-block-end: 10%;\n  padding: auto;\n}\n\n.headerpad {\n  --background:#9651DA;\n  color: rgba(240, 240, 240, 0.562);\n  height: 70px;\n}\n\n.footerpos {\n  padding-inline-end: 0%;\n  margin-right: 25%;\n}\n\n.starcolor {\n  color: yellow;\n}\n\n.fabcolor {\n  --background: var(--ion-color-finder);\n}\n\n.fabsecond {\n  --background: var(--ion-color-finder2);\n}\n\n.sharecol {\n  color: #9651DA;\n}\n\n.btncenter {\n  display: flex;\n  justify-content: center;\n}\n\n.fabbtn {\n  margin-bottom: 30px;\n}\n\nion-fab-button[data-desc] {\n  position: relative;\n}\n\nion-fab-button[data-desc]::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 55px;\n  bottom: 4px;\n  background-color: var(--ion-color-finder);\n  padding: 9px;\n  border-radius: 15px;\n  color: white;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hcmtlLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVFO0VBRUMsb0JBQUE7RUFDQyxZQUFBO0FBQUo7O0FBRUk7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdJO0VBR0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtBQUhSOztBQU1JO0VBQ0Usb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUFITjs7QUFLSTtFQUNELHNCQUFBO0VBQ0UsaUJBQUE7QUFGTDs7QUFJSTtFQUVDLGFBQUE7QUFGTDs7QUFLSTtFQUNFLHFDQUFBO0FBRk47O0FBS0k7RUFDRSxzQ0FBQTtBQUZOOztBQUlJO0VBRUUsY0FBQTtBQUZOOztBQUlJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBRE47O0FBSUk7RUFFRSxtQkFBQTtBQUZOOztBQUtLO0VBQ0Usa0JBQUE7QUFGUDs7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpSEFBQTtBQURGIiwiZmlsZSI6Im1hcmtlLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5maW5kZXJjb2xvcntcclxuICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZmluZGVyKTtcclxuICAgLS1iYWNrZ3JvdW5kOiM5NjUxREE7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgIC5zZWFyY2h7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICBcclxuICAgIH1cclxuICAgIC5idXR0b25jb2x7XHJcbiAgICAgIFxyXG4gICAgIC8vIGNvbG9yOnJnYigyNDUsIDI0MSwgNik7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxMCU7XHJcbiAgICAgICBcclxuICAgICAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5oZWFkZXJwYWR7XHJcbiAgICAgIC0tYmFja2dyb3VuZDojOTY1MURBO1xyXG4gICAgICBjb2xvcjpyZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNTYyKTtcclxuICAgICAgaGVpZ2h0OjcwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVycG9ze1xyXG4gICBwYWRkaW5nLWlubGluZS1lbmQ6IDAlO1xyXG4gICAgIG1hcmdpbi1yaWdodDogMjUlO1xyXG4gICAgfVxyXG4gICAgLnN0YXJjb2xvcntcclxuICAgIFxyXG4gICAgIGNvbG9yOiB5ZWxsb3c7XHJcblxyXG4gICAgfVxyXG4gICAgLmZhYmNvbG9ye1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1maW5kZXIpO1xyXG4gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM5NjUxREE7XHJcbiAgICB9XHJcbiAgICAuZmFic2Vjb25ke1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1maW5kZXIyKTtcclxuICAgIH1cclxuICAgIC5zaGFyZWNvbHtcclxuICAgICBcclxuICAgICAgY29sb3I6Izk2NTFEQTtcclxuICAgIH1cclxuICAgIC5idG5jZW50ZXJ7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgXHJcbiAgICAgfVxyXG4gICAgLmZhYmJ0bntcclxuICAgICAgIFxyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgXHJcbiAgICAgfVxyXG4gICAgIGlvbi1mYWItYnV0dG9uW2RhdGEtZGVzY117XHJcbiAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICB9XHJcbmlvbi1mYWItYnV0dG9uW2RhdGEtZGVzY106OmFmdGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OmF0dHIoZGF0YS1kZXNjKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHJpZ2h0OiA1NXB4O1xyXG4gIGJvdHRvbTo0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWZpbmRlcik7XHJcbiAgcGFkZGluZzo5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC4yKSwwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcclxufSJdfQ== */");

/***/ }),

/***/ "f+4f":
/*!***********************************************!*\
  !*** ./src/app/marke-user/marke-user.page.ts ***!
  \***********************************************/
/*! exports provided: MarkeUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkeUserPage", function() { return MarkeUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_marke_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./marke-user.page.html */ "E2lP");
/* harmony import */ var _marke_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marke-user.page.scss */ "csnX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MarkeUserPage = class MarkeUserPage {
    constructor() { }
    ngOnInit() {
    }
};
MarkeUserPage.ctorParameters = () => [];
MarkeUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-marke-user',
        template: _raw_loader_marke_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_marke_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MarkeUserPage);



/***/ })

}]);
//# sourceMappingURL=marke-user-marke-user-module.js.map