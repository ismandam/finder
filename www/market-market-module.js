(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["market-market-module"],{

/***/ "3inm":
/*!*****************************************!*\
  !*** ./src/app/market/market.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: white;\n}\n\n.findercolor {\n  --background:#9651DA;\n  color: white;\n}\n\n.search {\n  padding-inline-end: 10px;\n  align-self: center;\n  color: white;\n}\n\n.buttoncol {\n  margin-right: 10%;\n  margin-left: 20%;\n  margin-block-end: 10%;\n  padding: auto;\n}\n\n.headerpad {\n  --background:#9651DA;\n  color: rgba(240, 240, 240, 0.562);\n  height: 70px;\n}\n\n.footerpos {\n  padding-inline-end: 0%;\n  margin-right: 25%;\n}\n\n.starcolor {\n  color: yellow;\n}\n\n.fabcolor {\n  --background: var(--ion-color-finder);\n}\n\n.fabsecond {\n  --background: var(--ion-color-finder2);\n}\n\n.sharecol {\n  color: #9651DA;\n}\n\n.btncenter {\n  display: flex;\n  justify-content: center;\n}\n\n.fabbtn {\n  margin-bottom: 30px;\n}\n\nion-fab-button[data-desc] {\n  position: relative;\n}\n\nion-fab-button[data-desc]::after {\n  position: absolute;\n  content: attr(data-desc);\n  z-index: 1;\n  right: 55px;\n  bottom: 4px;\n  background-color: var(--ion-color-finder);\n  padding: 9px;\n  border-radius: 15px;\n  color: white;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hcmtldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUU7RUFFQyxvQkFBQTtFQUNDLFlBQUE7QUFBSjs7QUFFSTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0k7RUFHSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0FBSFI7O0FBTUk7RUFDRSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQUhOOztBQUtJO0VBQ0Qsc0JBQUE7RUFDRSxpQkFBQTtBQUZMOztBQUlJO0VBRUMsYUFBQTtBQUZMOztBQUtJO0VBQ0UscUNBQUE7QUFGTjs7QUFLSTtFQUNFLHNDQUFBO0FBRk47O0FBSUk7RUFFRSxjQUFBO0FBRk47O0FBSUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFETjs7QUFJSTtFQUVFLG1CQUFBO0FBRk47O0FBS0s7RUFDRSxrQkFBQTtBQUZQOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlIQUFBO0FBREYiLCJmaWxlIjoibWFya2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIFxyXG4gIH1cclxuICAuZmluZGVyY29sb3J7XHJcbiAgIC8vIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWZpbmRlcik7XHJcbiAgIC0tYmFja2dyb3VuZDojOTY1MURBO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoe1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgXHJcbiAgICB9XHJcbiAgICAuYnV0dG9uY29se1xyXG4gICAgICBcclxuICAgICAvLyBjb2xvcjpyZ2IoMjQ1LCAyNDEsIDYpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMTAlO1xyXG4gICAgICAgXHJcbiAgICAgICAgcGFkZGluZzogYXV0bztcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuaGVhZGVycGFke1xyXG4gICAgICAtLWJhY2tncm91bmQ6Izk2NTFEQTtcclxuICAgICAgY29sb3I6cmdiYSgyNDAsIDI0MCwgMjQwLCAwLjU2Mik7XHJcbiAgICAgIGhlaWdodDo3MHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3RlcnBvc3tcclxuICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwJTtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxuICAgIH1cclxuICAgIC5zdGFyY29sb3J7XHJcbiAgICBcclxuICAgICBjb2xvcjogeWVsbG93O1xyXG5cclxuICAgIH1cclxuICAgIC5mYWJjb2xvcntcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZmluZGVyKTtcclxuICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY1MURBO1xyXG4gICAgfVxyXG4gICAgLmZhYnNlY29uZHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZmluZGVyMik7XHJcbiAgICB9XHJcbiAgICAuc2hhcmVjb2x7XHJcbiAgICAgXHJcbiAgICAgIGNvbG9yOiM5NjUxREE7XHJcbiAgICB9XHJcbiAgICAuYnRuY2VudGVye1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIFxyXG4gICAgIH1cclxuICAgIC5mYWJidG57XHJcbiAgICAgICBcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIFxyXG4gICAgIH1cclxuICAgICBpb24tZmFiLWJ1dHRvbltkYXRhLWRlc2Nde1xyXG4gICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgfVxyXG5pb24tZmFiLWJ1dHRvbltkYXRhLWRlc2NdOjphZnRlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDphdHRyKGRhdGEtZGVzYyk7XHJcbiAgei1pbmRleDogMTtcclxuICByaWdodDogNTVweDtcclxuICBib3R0b206NHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1maW5kZXIpO1xyXG4gIHBhZGRpbmc6OXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsMC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsMC4xMik7XHJcbn0iXX0= */");

/***/ }),

/***/ "eCrd":
/*!***************************************!*\
  !*** ./src/app/market/market.page.ts ***!
  \***************************************/
/*! exports provided: MarketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPage", function() { return MarketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_market_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./market.page.html */ "gMtw");
/* harmony import */ var _market_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./market.page.scss */ "3inm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let MarketPage = class MarketPage {
    constructor(navCtrl, activatedRoute, router, storage) {
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.storage = storage;
        this.data1 = "";
        this.data2 = "";
        this.toggled = false;
        this.slideOptions = {
            initialSlide: 0,
            slidesPerview: 1,
            autoplay: true,
            loop: true
        };
        this.data = [
            { title: 'radio',
                description: 'ma description',
                img: [
                    'assets/img/prod1/img1.jpg',
                    'assets/img/prod1/img2.png'
                ],
                price: 5000,
                category: 'vetement',
                state: 'neuf',
                city: 'yde',
                avStart: 4
            },
            ////////im2////////////
            { title: 'television',
                description: 'ma description',
                img: [
                    'assets/img/prod2/img1.jpg',
                    'assets/img/prod2/img2.jpg'
                ],
                price: 2000,
                category: 'vetement',
                state: 'neuf',
                city: 'yde',
                avStart: 3
            },
            ///////////////img3///////////////
            { title: 'camera',
                description: 'ma description',
                img: [
                    'assets/img/prod3/img1.jpg',
                    'assets/img/prod3/img2.jpg',
                    'assets/img/prod3/img3.png'
                ],
                price: 10000,
                category: 'vetement',
                state: 'neuf',
                city: 'Yaoundé',
                avStart: 1
            },
            //////////////img4///////////////////
            { title: 'laptop',
                description: 'Ordinateur portable core i5, 4GB de ram ',
                img: [
                    'assets/img/prod4/img1.png',
                    'assets/img/prod4/img2.jpg',
                    'assets/img/prod4/img3.jpg'
                ],
                price: 22000,
                category: 'vetement',
                state: 'neuf',
                city: 'Douala',
                avStart: 2
            },
            //////////////img5///////////////////
            { title: 'laptop prime',
                description: 'Ordinateur portable',
                img: [
                    'assets/img/prod4/img1.png',
                    'assets/img/prod4/img2.jpg',
                    'assets/img/prod4/img3.jpg'
                ],
                price: 22000,
                category: 'vetement',
                state: 'neuf',
                city: 'Bafoussam',
                avStart: 2
            },
            //////////////img6///////////////////
            { title: 'costa',
                description: 'Ordinateur portable  ',
                img: [
                    'assets/img/prod4/img1.png',
                    'assets/img/prod4/img2.jpg',
                    'assets/img/prod4/img3.jpg'
                ],
                price: 22000,
                category: 'vetement',
                state: 'neuf',
                city: 'Ebolowa',
                avStart: 2
            },
            //////////////img7///////////////////
            { title: 'desktop',
                description: 'Ordinateur portable',
                img: [
                    'assets/img/prod4/img1.png',
                    'assets/img/prod4/img2.jpg',
                    'assets/img/prod4/img3.jpg'
                ],
                price: 22000,
                category: 'vetement',
                state: 'neuf',
                city: 'Kribi',
                avStart: 2
            }
        ];
        this.toggled = false;
    }
    toggle() {
        this.toggled = !this.toggled;
    }
    toggleSearch() {
        this.toggled = this.toggled ? false : true;
    }
    ngOnInit() {
    }
    vendre() {
        this.storage.create();
        this.storage.get("body1").then(val => {
            console.log("val content" + val);
            if (val == null) {
                console.log("connectez vous pour vendre un produit");
                this.router.navigate(["form-login"]);
            }
            else {
                this.data1 = val.email;
                this.data2 = val.password;
                console.log("bienvenu" + this.data1);
                this.router.navigate(["vandre"]);
            }
        }).catch(error => "erreur de donnees" + error);
    }
    registerpage() {
        this.router.navigate(['form-register']);
    }
    marketlistener(data) {
        let navigationExtras = {
            state: {
                data: data
            }
        };
        this.router.navigate(['detail-market'], navigationExtras);
    }
    fab() {
        console.log("bonjour");
    }
};
MarketPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
MarketPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-market',
        template: _raw_loader_market_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_market_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MarketPage);



/***/ }),

/***/ "gC3m":
/*!*************************************************!*\
  !*** ./src/app/market/market-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MarketPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPageRoutingModule", function() { return MarketPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _market_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./market.page */ "eCrd");




const routes = [
    {
        path: '',
        component: _market_page__WEBPACK_IMPORTED_MODULE_3__["MarketPage"]
    }
];
let MarketPageRoutingModule = class MarketPageRoutingModule {
};
MarketPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MarketPageRoutingModule);



/***/ }),

/***/ "gMtw":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/market/market.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"findercolor\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button ></ion-menu-button>\n    </ion-buttons>\n \n   <ion-title>Market:{{data1}}</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-fab class=\"fabbtn\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" edge>\n    <ion-fab-button class=\"fabcolor\" >\n      <ion-icon name=\"add\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\" >\n      <ion-fab-button class=\"fabsecond\" data-desc=\"deconexion\"  (click)=\"log_out()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button class=\"fabsecond\" data-desc=\"vetements\"  (click)=\"fab()\">\n        <ion-icon name=\"shirt\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button class=\"fabsecond\" data-desc=\"chaussure\"  (click)=\"fab()\">\n        <ion-icon name=\"shirt\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button class=\"fabsecond\" data-desc=\"bijoux\"  (click)=\"fab()\">\n        <ion-icon name=\"diamond1\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button class=\"fabsecond\" data-desc=\"sac\"  (click)=\"fab()\">\n        <ion-icon name=\"bag-remove\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button class=\"fabsecond\" data-desc=\"beauté\"  (click)=\"fab()\">\n        <ion-icon name=\"umbrella\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button class=\"fabsecond\" data-desc=\"mode\"  (click)=\"fab()\">\n        <ion-icon name=\"woman\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button class=\"fabsecond\" data-desc=\"électroniques\"  (click)=\"fab()\">\n        <ion-icon name=\"tablet-landscape\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button class=\"fabsecond\" data-desc=\"voitures\"  (click)=\"fab()\">\n        <ion-icon name=\"tablet-landscape\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button class=\"fabsecond\" data-desc=\"immobilier\"  (click)=\"fab()\">\n        <ion-icon name=\"home\"></ion-icon>\n      </ion-fab-button>\n\n    </ion-fab-list>\n  </ion-fab>\n  <ion-header>\n\n    <ion-toolbar  class=\"headerpad\">\n<!-- \n      <ion-buttons >\n        <ion-slides  pager [options]=\"slideOptions\" >\n          <ion-slide>\n        <ion-row><ion-col class=\"buttoncol\">\n          <ion-button  >\n            <ion-icon class=\"starcolor\" ion-button name=\"shirt\" large >\n            \n            </ion-icon>\n          </ion-button>&nbsp; \n          <ion-label>vetements</ion-label>\n        </ion-col></ion-row>\n     \n        \n        <ion-row><ion-col class=\"buttoncol\">\n          <ion-button  >\n            <ion-icon class=\"starcolor\" ion-button name=\"shirt\" large >\n            \n            </ion-icon>\n          </ion-button>&nbsp; \n          <ion-label>chaussure</ion-label>\n        </ion-col></ion-row>\n\n        <ion-row><ion-col class=\"buttoncol\">\n          <ion-button  >\n            <ion-icon class=\"starcolor\" ion-button name=\"diamond1\" large >\n              \n            </ion-icon>\n          </ion-button>&nbsp; \n          <ion-label>bijoux</ion-label>\n        </ion-col></ion-row>\n      </ion-slide>\n      <ion-slide>\n        \n      \n      \n        <ion-row><ion-col class=\"buttoncol\">\n          <ion-button  >\n            <ion-icon class=\"starcolor\" ion-button name=\"bag-remove\" large >\n            \n            </ion-icon>\n          </ion-button>&nbsp; \n          <ion-label>sac</ion-label>\n        </ion-col></ion-row>\n\n        <ion-row><ion-col class=\"buttoncol\">\n          <ion-button  >\n            <ion-icon class=\"starcolor\" ion-button name=\"umbrella\" large >\n              \n            </ion-icon>\n          </ion-button>&nbsp; \n          <ion-label>beauté</ion-label>\n        </ion-col></ion-row>\n\n        <ion-row><ion-col class=\"buttoncol\">\n          <ion-button  >\n            <ion-icon class=\"starcolor\" ion-button name=\"woman\" large >\n            \n            </ion-icon>\n          </ion-button>&nbsp; \n          <ion-label>mode</ion-label>\n        </ion-col></ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-row><ion-col class=\"buttoncol\">\n          <ion-button  >\n            <ion-icon class=\"starcolor\" ion-button name=\"tablet-landscape\" large >\n              \n            </ion-icon>\n          </ion-button>&nbsp; \n          <ion-label>électroniques</ion-label>\n        </ion-col></ion-row>\n      \n      \n        <ion-row><ion-col class=\"buttoncol\">\n          <ion-button  >\n            <ion-icon class=\"starcolor\" ion-button name=\"bag-remove\" large >\n            \n            </ion-icon>\n          </ion-button>&nbsp; \n          <ion-label>voitures</ion-label>\n        </ion-col></ion-row>\n\n        <ion-row><ion-col class=\"buttoncol\">\n          <ion-button  >\n            <ion-icon class=\"starcolor\" ion-button name=\"home\" large >\n            \n            </ion-icon>\n          </ion-button>&nbsp; \n          <ion-label>Mobiliers</ion-label>\n        </ion-col></ion-row>\n      </ion-slide>\n      </ion-slides>\n    \n      </ion-buttons>\n-->\n      <ion-searchbar\n          *ngIf=\"toggled\"\n          showCancelbutton=\"always\"\n          animated=\"true\"\n          (ionCancel)=\"toggleSearch()\"\n          animated [(ngModel)]=\"searchTerm\"\n          >\n      </ion-searchbar>\n      <ion-icon class=\"search\" ion-button slot=\"end\" *ngIf=\"!toggled\" (click)=\"toggle()\" name=\"search\" >\n\n      </ion-icon>\n    </ion-toolbar>\n  </ion-header>\n    <ion-list>\n     <ion-item *ngFor=\"let product of data|filter:searchTerm\" type=\"ion-button\" (click)=\"marketlistener(product)\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"product.img[0]\" *ngIf=\"product.img[0]!= null\" alt=\"Image\">\n       </ion-thumbnail>\n       <ion-label>\n       <h3>{{ product.title}}</h3>\n       <p>{{product.description}}</p>\n       <p>{{product.price | currency}}</p>\n      \n      <span *ngIf=\"product.avStart>0\">\n        <ion-icon class=\"starcolor\" icon=\"star\"></ion-icon>\n      </span>\n      <span *ngIf=\"product.avStart>1\">\n        <ion-icon class=\"starcolor\" icon=\"star\"></ion-icon>\n      </span>\n      <span *ngIf=\"product.avStart>2\">\n        <ion-icon class=\"starcolor\" icon=\"star\"></ion-icon>\n      </span>\n      <span *ngIf=\"product.avStart>3\">\n        <ion-icon class=\"starcolor\" icon=\"star\"></ion-icon>\n      </span>\n     \n    </ion-label>\n    \n     </ion-item>\n\n    </ion-list>\n\n\n  \n\n \n</ion-content>\n\n<ion-footer class=\"ion-no-border\" >\n<ion-grid >\n  <ion-buttons padding class=\"btncenter\">\n  <ion-row padding  >   \n  <ion-col >\n    <ion-button class=\"findercolor\" (click)=\"vendre()\">\n      <ion-icon ion-button class=\"starcolor\" name=\"camera\">&nbsp; \n      </ion-icon>&nbsp; \n         Vendez un produit\n    </ion-button> \n  </ion-col>\n  \n</ion-row>\n<ion-row  >   \n  <ion-col >\n    <ion-button class=\"findercolor\">\n      <ion-icon ion-button class=\"starcolor\" name=\"camera\">&nbsp; \n      </ion-icon>&nbsp; \n         Vendez un service\n    </ion-button> \n  </ion-col>\n\n</ion-row>\n</ion-buttons>\n</ion-grid>\n  \n\n\n</ion-footer>\n");

/***/ }),

/***/ "qkvE":
/*!*****************************************!*\
  !*** ./src/app/market/market.module.ts ***!
  \*****************************************/
/*! exports provided: MarketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPageModule", function() { return MarketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _market_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market-routing.module */ "gC3m");
/* harmony import */ var _market_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./market.page */ "eCrd");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








let MarketPageModule = class MarketPageModule {
};
MarketPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _market_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarketPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_market_page__WEBPACK_IMPORTED_MODULE_6__["MarketPage"]]
    })
], MarketPageModule);



/***/ })

}]);
//# sourceMappingURL=market-market-module.js.map