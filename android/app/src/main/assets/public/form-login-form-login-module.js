(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-login-form-login-module"],{

/***/ "4o5H":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-login/form-login.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"back-circle\">\n\n\n    </div>\n    <ion-title class=\"ion-text-center\" class=\"findercolor1\">finder</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form>\n <div class=\"wrap-input\">\n  <ion-input class=\"ion-text-center\"  type=\"email\" name=\"user_email\" placeholder=\"email\"[(ngModel)]=\"user_email\" >  </ion-input>\n </div>\n <div class=\"wrap-input\">\n  <ion-input class=\"input\" class=\"ion-text-center\" type=\"password\" name=\"user_pass\" placeholder=\"mots de passe\" [(ngModel)]=\"user_pass\" >  </ion-input>\n </div>\n\n <div class=\"container-form-btn\">\n  \n\n    <button ion-button  class=\"form-btn\"  (click)=\"login()\" >\n      <ion-icon ion-button  name=\"camera\">&nbsp; \n      </ion-icon>&nbsp; \n      connexion\n    </button> \n </div>\n\n  </form>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\" >\n<ion-toolbar  class=\"foot\" >\n\n  <p   class=\"ion-text-center\">vous n'etes pas encore enregistré?\n    <a href=\"/form-register\" class=\"findercolor1\">enrégistrez vous</a>\n  \n  \n</p>\n\n\n</ion-toolbar>\n\n</ion-footer>");

/***/ }),

/***/ "BTnb":
/*!*************************************************!*\
  !*** ./src/app/form-login/form-login.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --barckground: transparent;\n}\n\nion-title {\n  padding: 20px 0 46px 0;\n}\n\n.back-circle {\n  z-index: -1;\n  width: 400px;\n  height: 400px;\n  background: #9651DA;\n  position: absolute;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nform {\n  margin-top: 150px;\n}\n\n.wrap-input {\n  background-color: #9651da52;\n  border-radius: 20px;\n  margin-bottom: 26px;\n  color: #9651DA;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.12);\n}\n\n.input {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-size: 16px;\n  line-height: 1.2;\n  border: npne;\n  outline: none;\n  padding: 0 50px 0 23px;\n}\n\n.container-form-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 42px;\n  background-color: #9651DA;\n  border-radius: 20px;\n  font-size: 14px;\n  color: yellow;\n  text-transform: uppercase;\n  padding-top: 5px;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.5);\n}\n\n.findercolor1 {\n  color: #c9df09;\n}\n\n.foot {\n  --background:#9651DA;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvcm0tbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsMEJBQUE7QUFBRjs7QUFFQTtFQUNBLHNCQUFBO0FBQ0E7O0FBRUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0E7O0FBQ0M7RUFDRSxpQkFBQTtBQUVIOztBQUFFO0VBQ0YsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtEQUFBO0FBR0E7O0FBQ0U7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDRCxzQkFBQTtBQUVEOztBQUNFO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDRCx5QkFBQTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpREFBQTtBQUNGOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdLO0VBR0csb0JBQUE7RUFDQSxZQUFBO0FBRlIiLCJmaWxlIjoiZm9ybS1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuXHJcbiAgLS1iYXJja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICBcclxufVxyXG5pb24tdGl0bGV7XHJcbnBhZGRpbmc6MjBweCAwIDQ2cHggMDtcclxuXHJcbn1cclxuLmJhY2stY2lyY2xle1xyXG56LWluZGV4OiAtMTtcclxud2lkdGg6IDQwMHB4O1xyXG5oZWlnaHQ6IDQwMHB4O1xyXG5iYWNrZ3JvdW5kOiAjOTY1MURBO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5tYXJnaW4tbGVmdDogYXV0bztcclxubWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5sZWZ0OiAwO1xyXG5yaWdodDogMDtcclxuYm90dG9tOiAwO1xyXG59XHJcbiBmb3Jte1xyXG4gICBtYXJnaW4tdG9wOiAxNTBweDsgIFxyXG4gfVxyXG4gIC53cmFwLWlucHV0e1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjOTY1MWRhNTI7XHJcbmJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbm1hcmdpbi1ib3R0b206IDI2cHg7XHJcbmNvbG9yOiAjOTY1MURBO1xyXG5ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSg1Nyw3MSw4MiwwLjEyKTtcclxuXHJcbiAgfVxyXG5cclxuICAuaW5wdXR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgYm9yZGVyOiBucG5lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiBwYWRkaW5nOiAwIDUwcHggMCAyM3B4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1mb3JtLWJ0bntcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1idG57XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIG1pbi13aWR0aDoxNjBweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiM5NjUxREE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHllbGxvdztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsNzEsODIsMC41KTtcclxuXHJcbiAgfVxyXG5cclxuLmZpbmRlcmNvbG9yMXtcclxuICAgIGNvbG9yOiNjOWRmMDk7XHJcbiAgICBcclxuICAgICB9XHJcbiAgICAgLmZvb3R7XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIC0tYmFja2dyb3VuZDojOTY1MURBO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "RykD":
/*!*************************************************!*\
  !*** ./src/app/form-login/form-login.module.ts ***!
  \*************************************************/
/*! exports provided: FormLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginPageModule", function() { return FormLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _form_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-login-routing.module */ "bj72");
/* harmony import */ var _form_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-login.page */ "j1M3");







let FormLoginPageModule = class FormLoginPageModule {
};
FormLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormLoginPageRoutingModule"]
        ],
        declarations: [_form_login_page__WEBPACK_IMPORTED_MODULE_6__["FormLoginPage"]]
    })
], FormLoginPageModule);



/***/ }),

/***/ "bj72":
/*!*********************************************************!*\
  !*** ./src/app/form-login/form-login-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FormLoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginPageRoutingModule", function() { return FormLoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-login.page */ "j1M3");




const routes = [
    {
        path: '',
        component: _form_login_page__WEBPACK_IMPORTED_MODULE_3__["FormLoginPage"]
    }
];
let FormLoginPageRoutingModule = class FormLoginPageRoutingModule {
};
FormLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormLoginPageRoutingModule);



/***/ }),

/***/ "j1M3":
/*!***********************************************!*\
  !*** ./src/app/form-login/form-login.page.ts ***!
  \***********************************************/
/*! exports provided: FormLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginPage", function() { return FormLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-login.page.html */ "4o5H");
/* harmony import */ var _form_login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-login.page.scss */ "BTnb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







let FormLoginPage = class FormLoginPage {
    constructor(storage, router, http) {
        this.storage = storage;
        this.router = router;
        this.http = http;
        this.user_email = "";
        this.user_pass = "";
        this.data1 = "";
        this.data2 = "";
        this.url = "http://169.254.248.202/finder/super/ionic_api.php";
    }
    ngOnInit() {
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.create();
            this.storage.get("body").then(val => {
                console.log("val content" + val);
                if (val == null) {
                    console.log("rien dans la bd");
                    let body1 = {
                        action2: 'ionic_login',
                        email: this.user_email,
                        password: this.user_pass,
                    };
                    this.http.post(this.url, body1).subscribe((res) => {
                        console.log("response=" + res);
                        this.response = res.success;
                        console.log("response api" + this.response);
                        if (this.response == true) {
                            this.storage.create();
                            this.storage.set('body1', body1);
                            this.response = res.msg;
                            console.log(" retour de mon api00 :" + this.response);
                            let navigationExtras = {
                                state: {
                                    data: "bonjour"
                                }
                            };
                            this.router.navigate(['market'], navigationExtras);
                        }
                        else if (this.response == false) {
                            this.response = res.msg;
                            console.log(" erreur connection:" + this.response);
                        }
                        else
                            console.log(" retour bizard :");
                    }, error => {
                        console.log("probleme suvenu:" + error);
                    });
                }
                else {
                    this.data1 = val.email;
                    this.data2 = val.password;
                    console.log("ma valeur" + this.data1);
                    let navigationExtras = {
                        state: {
                            data: "bonjour"
                        }
                    };
                    this.router.navigate(['market'], navigationExtras);
                }
            }).catch(error => "erreur enregistrement" + error);
            if (this.user_email == this.data1 && this.user_pass == this.data2) {
                return new Promise((resolve) => {
                    let body = {
                        action2: 'ionic_login',
                        email: this.user_email,
                        password: this.user_pass,
                    };
                    this.http.post(this.url, body).subscribe((res) => {
                        this.response = res.success;
                        console.log("response api" + this.response);
                        if (this.response == true) {
                            // this.storage.create();
                            // this.storage.set('login',login);
                            this.response = res.msg;
                            console.log(" retour de mon api00 :" + this.response);
                            let navigationExtras = {
                                state: {
                                    data: "bonjour"
                                }
                            };
                            this.router.navigate(['market'], navigationExtras);
                        }
                        else if (this.response == false) {
                            this.response = res.msg;
                            console.log(" erreur connection:" + this.response);
                        }
                        else
                            console.log(" retour bizard :");
                    }, error => {
                        console.log("probleme suvenu:" + error);
                    });
                });
            }
            else if (this.user_email == null && this.user_pass == null) {
                console.log("aucun utilisateur enregistrer");
            }
        });
    }
};
FormLoginPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
FormLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-login',
        template: _raw_loader_form_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormLoginPage);



/***/ })

}]);
//# sourceMappingURL=form-login-form-login-module.js.map