(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-cni-add-cni-module"],{

/***/ "6Xv1":
/*!***************************************************!*\
  !*** ./src/app/add-cni/add-cni-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AddCniPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCniPageRoutingModule", function() { return AddCniPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_cni_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-cni.page */ "p2la");




const routes = [
    {
        path: '',
        component: _add_cni_page__WEBPACK_IMPORTED_MODULE_3__["AddCniPage"]
    }
];
let AddCniPageRoutingModule = class AddCniPageRoutingModule {
};
AddCniPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCniPageRoutingModule);



/***/ }),

/***/ "J8qm":
/*!*******************************************!*\
  !*** ./src/app/add-cni/add-cni.module.ts ***!
  \*******************************************/
/*! exports provided: AddCniPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCniPageModule", function() { return AddCniPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_cni_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-cni-routing.module */ "6Xv1");
/* harmony import */ var _add_cni_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-cni.page */ "p2la");







let AddCniPageModule = class AddCniPageModule {
};
AddCniPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_cni_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCniPageRoutingModule"]
        ],
        declarations: [_add_cni_page__WEBPACK_IMPORTED_MODULE_6__["AddCniPage"]]
    })
], AddCniPageModule);



/***/ }),

/***/ "TZIY":
/*!*******************************************!*\
  !*** ./src/app/add-cni/add-cni.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --barckground: transparent;\n}\n\nion-title {\n  padding: 20px 0 46px 0;\n}\n\n.back-circle {\n  z-index: -1;\n  width: 400px;\n  height: 400px;\n  background: #9651DA;\n  position: absolute;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nform {\n  margin-top: 50px;\n}\n\n.wrap-input {\n  background-color: #9651da52;\n  border-radius: 20px;\n  margin-bottom: 26px;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.12);\n}\n\n.input {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-size: 16px;\n  line-height: 1.2;\n  border: npne;\n  outline: none;\n  padding: 0 50px 0 23px;\n}\n\n.container-form-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.text {\n  display: flex;\n  justify-content: center;\n}\n\n.form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 42px;\n  background-color: #9651DA;\n  border-radius: 20px;\n  font-size: 14px;\n  color: yellow;\n  text-transform: uppercase;\n  padding-top: 5px;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.5);\n}\n\n.findercolor1 {\n  font-size: 16px;\n  text-justify: auto;\n  color: yellow;\n}\n\n.ptext {\n  font-size: 16px;\n  text-justify: auto;\n  color: #9651DA;\n}\n\n.foot {\n  --background:#9651DA;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1jbmkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMEJBQUE7QUFBSjs7QUFFRTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUU7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0c7RUFDRSxnQkFBQTtBQUVMOztBQUFJO0VBQ0YsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7QUFHRjs7QUFDSTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNELHNCQUFBO0FBRUg7O0FBQ0k7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7QUFDTjs7QUFDSTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtBQUNOOztBQUVJO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0QseUJBQUE7RUFDQyxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaURBQUE7QUFDSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNFLGFBQUE7QUFBTjs7QUFHTztFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBUjs7QUFFTztFQUdHLG9CQUFBO0VBQ0EsWUFBQTtBQURWIiwiZmlsZSI6ImFkZC1jbmkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcblxyXG4gICAgLS1iYXJja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICBcclxuICB9XHJcbiAgaW9uLXRpdGxle1xyXG4gIHBhZGRpbmc6MjBweCAwIDQ2cHggMDtcclxuICBcclxuICB9XHJcbiAgLmJhY2stY2lyY2xle1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM5NjUxREE7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB9XHJcbiAgIGZvcm17XHJcbiAgICAgbWFyZ2luLXRvcDogNTBweDsgIFxyXG4gICB9XHJcbiAgICAud3JhcC1pbnB1dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY1MWRhNTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LDcxLDgyLDAuMTIpO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlucHV0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGJvcmRlcjogbnBuZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgIHBhZGRpbmc6IDAgNTBweCAwIDIzcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29udGFpbmVyLWZvcm0tYnRue1xyXG4gIFxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG5cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9ybS1idG57XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtaW4td2lkdGg6MTYwcHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6Izk2NTFEQTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LDcxLDgyLDAuNSk7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgLmZpbmRlcmNvbG9yMXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtanVzdGlmeTphdXRvO1xyXG4gICAgICBjb2xvcjp5ZWxsb3c7XHJcbiAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgLnB0ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWp1c3RpZnk6YXV0bztcclxuICAgICAgICBjb2xvcjojOTY1MURBO1xyXG4gICAgICAgfVxyXG4gICAgICAgLmZvb3R7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDojOTY1MURBO1xyXG4gICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "mbNj":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-cni/add-cni.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"back-circle\"></div>\n    <ion-title class=\"ion-text-center\" class=\"findercolor1\">Finder!</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"ptext\" >\n    <p class=\"text\">Vous avez trouvé une CNI? </p>\n    <p class=\"text\">Enrégistrez le</p>\n    <p class=\"text\">et gagnez de l'argent!</p>\n   </div>\n\n   <form>\n    <div class=\"wrap-input\">\n     <ion-input class=\"ion-text-center\"  type=\"text\" name=\"nom\"\n      placeholder=\"Nom\"[(ngModel)]=\"Nom\" >  </ion-input>\n    </div>\n    <div class=\"wrap-input\">\n      <ion-input class=\"ion-text-center\"  type=\"text\" name=\"prenom\"\n       placeholder=\"Prenom\"[(ngModel)]=\"Prenom\" >  </ion-input>\n     </div>\n     <div class=\"wrap-input\">\n      <ion-input class=\"ion-text-center\" type=\"number\" name=\"number\"\n       placeholder=\"numéro de la cni\"[(ngModel)]=\"Numero_cni\" > </ion-input>\n     </div>\n     <div class=\"wrap-input\">\n      <ion-input class=\"ion-text-center\" type=\"date\" name=\"datecni\"\n       placeholder=\"date de délivrance\"[(ngModel)]=\"date_cni\" > </ion-input>\n     </div>\n     <div class=\"container-form-btn\">\n\n\n      <button ion-button  class=\"form-btn\"  (click)=\"imagePicker()\" >\n        <ion-icon ion-button  name=\"camera\">&nbsp; \n        </ion-icon>&nbsp; \n          photo cni\n        </button> \n        </div>&nbsp;&nbsp;\n\n     <div class=\"wrap-input\">\n      <ion-input class=\"ion-text-center\" type=\"text\" name=\"votrenom\"\n       placeholder=\"votre nom\"[(ngModel)]=\"votre_nom\" > </ion-input>\n     </div>\n     <div class=\"wrap-input\">\n      <ion-input class=\"ion-text-center\" type=\"email\" name=\"email\"\n       placeholder=\"votre email\"[(ngModel)]=\"email\"> </ion-input>\n     </div>\n\n     <div class=\"wrap-input\">\n      <ion-input class=\"ion-text-center\" type=\"number\" name=\"telephone\"\n       placeholder=\"votre numero de telephone\"[(ngModel)]=\"telephone\"> </ion-input>\n     </div>\n\n     \n<div class=\"container-form-btn\">\n\n\n<button ion-button  class=\"form-btn\"  (click)=\"register()\" >\n  <ion-icon ion-button  name=\"camera\">&nbsp; \n  </ion-icon>&nbsp; \n    Register\n  </button> \n  </div>\n\n     \n  </form>\n</ion-content>\n");

/***/ }),

/***/ "p2la":
/*!*****************************************!*\
  !*** ./src/app/add-cni/add-cni.page.ts ***!
  \*****************************************/
/*! exports provided: AddCniPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCniPage", function() { return AddCniPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_cni_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-cni.page.html */ "mbNj");
/* harmony import */ var _add_cni_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-cni.page.scss */ "TZIY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");





let AddCniPage = class AddCniPage {
    constructor(image) {
        this.image = image;
    }
    imagePicker() {
        this.options = {
            width: 200,
            quality: 30,
            outputType: 1
        };
        this.imgres = [];
        this.image.getPictures(this.options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.imgres.push('data:image/jpeg;base64,' + results[i]);
            }
        }, (error) => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
};
AddCniPage.ctorParameters = () => [
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"] }
];
AddCniPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-cni',
        template: _raw_loader_add_cni_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_cni_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddCniPage);



/***/ })

}]);
//# sourceMappingURL=add-cni-add-cni-module.js.map