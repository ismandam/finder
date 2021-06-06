(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-market-detail-market-module"],{

/***/ "/GLM":
/*!*****************************************************!*\
  !*** ./src/app/detail-market/detail-market.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailMarketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMarketPage", function() { return DetailMarketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_market_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-market.page.html */ "4J7L");
/* harmony import */ var _detail_market_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-market.page.scss */ "MYPj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart/cart.page */ "Xo8k");







let DetailMarketPage = class DetailMarketPage {
    constructor(router, route, modalcontol) {
        this.router = router;
        this.route = route;
        this.modalcontol = modalcontol;
        this.slideOptions = {
            initialSlide: 0,
            slidesPerview: 1,
            autoplay: true,
            loop: true
        };
        this.option = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
            }
        });
    }
    ngOnInit() {
    }
    openCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalcontol.create({
                component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"],
                animated: true
            });
            return yield modal.present();
        });
    }
};
DetailMarketPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
DetailMarketPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-market',
        template: _raw_loader_detail_market_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_market_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailMarketPage);



/***/ }),

/***/ "4J7L":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-market/detail-market.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  \n  <ion-toolbar class=\"findercolor\" *ngIf=\"data != null\" >\n    <ion-buttons id=\"menubtn\" slot=\"start\">\n      <ion-back-button id=\"menubtn\" class=\"findercolor\" ></ion-back-button>\n     \n    </ion-buttons>\n      \n    \n    \n      <ion-button class=\"findercolor\" slot=\"end\"  (click)=\"openCart()\" >\n        <ion-icon class=\"startcolor\" ion-button icon=\"cart\" large >\n          \n        </ion-icon>\n      </ion-button>\n    \n      <ion-button  slot=\"end\" class=\"findercolor\" (click)=\"partage()\">\n         \n      <ion-icon class=\"startcolor\"  slot=\"start\" icon=\"share1\"></ion-icon>&nbsp;\n        \n     </ion-button>\n     <ion-title>{{data.title}}</ion-title>\n      \n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card *ngIf=\"data != null\">\n    <ion-slides pager [options]=\"slideOptions\"  >\n      <ion-slide >\n        <img src=\"{{data.img[0]}}\" *ngIf=\"data.img[0] != null\" alt=\"Image\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"{{data.img[1]}}\" *ngIf=\"data.img[1] != null\" alt=\"Image\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"{{data.img[2]}}\" *ngIf=\"data.img[2] != null\" alt=\"Image\">\n      </ion-slide>\n    </ion-slides>\n    \n    <ion-chip class=\"chip5\">\n      <ion-label >Categorie: {{data.category}}</ion-label>\n    </ion-chip>\n   <ion-chip class=\"chip4\">\n     <ion-label >{{data.description}}</ion-label>\n   </ion-chip>\n   <ion-chip class=\"chip3\">\n    <ion-label>Etat du produit: {{data.state}}</ion-label>\n  </ion-chip>\n\n  <ion-chip class=\"chip2\">\n    <ion-label>ville: {{data.city}}</ion-label>\n  </ion-chip>\n  <ion-chip class=\"chip1\">\n    <ion-label>prix: {{data.price | currency}}</ion-label>\n  </ion-chip>\n  <ion-card-content>\n    <ion-card-title>\n\n  </ion-card-title>\n  <h2>{{data.price}}</h2>\n   <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eligendi? Accusantium, doloribus? Laboriosam iure quisquam, quia, ut a eveniet exercitationem blanditiis tempora consectetur molestias saepe! Dolorem, ipsam? Unde, obcaecati voluptates?</p>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-grid >\n    <ion-buttons padding class=\"btncenter\">\n    <ion-row padding >   \n    <ion-col >\n      <ion-button class=\"findercolor\">\n        <ion-icon ion-button class=\"starcolor\" name=\"cart\" >&nbsp; \n        </ion-icon>&nbsp; \n           Ajouter un produit dans votre panier\n      </ion-button> \n    </ion-col>\n    \n  </ion-row>\n  \n  </ion-buttons>\n  </ion-grid>\n    \n  \n  \n  </ion-footer>");

/***/ }),

/***/ "E+t5":
/*!***************************************************************!*\
  !*** ./src/app/detail-market/detail-market-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailMarketPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMarketPageRoutingModule", function() { return DetailMarketPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_market_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-market.page */ "/GLM");




const routes = [
    {
        path: '',
        component: _detail_market_page__WEBPACK_IMPORTED_MODULE_3__["DetailMarketPage"]
    }
];
let DetailMarketPageRoutingModule = class DetailMarketPageRoutingModule {
};
DetailMarketPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailMarketPageRoutingModule);



/***/ }),

/***/ "MYPj":
/*!*******************************************************!*\
  !*** ./src/app/detail-market/detail-market.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".findercolor {\n  --background:#9651DA;\n  color: white;\n}\n\n.findercolor1 {\n  --background-color:#9651DA;\n  color: white;\n}\n\n.starcolor {\n  color: yellow;\n}\n\n.chip1 {\n  background-color: #7904ee54;\n  color: #5c0380;\n}\n\n.chip2 {\n  background-color: #4d0ae98f;\n  color: #2102aa;\n}\n\n.chip3 {\n  background-color: rgba(218, 67, 29, 0.418);\n  color: #d12109;\n}\n\n.chip4 {\n  background-color: #f8a407;\n  color: #da1414;\n}\n\n.chip5 {\n  background-color: #63a5f0;\n  color: #0521c0;\n}\n\n.btncenter {\n  display: flex;\n  justify-content: center;\n}\n\n.starcolor {\n  color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbC1tYXJrZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsb0JBQUE7RUFDQyxZQUFBO0FBRFQ7O0FBR1M7RUFFRywwQkFBQTtFQUNDLFlBQUE7QUFEYjs7QUFHSztFQUNHLGFBQUE7QUFBUjs7QUFJQTtFQUVJLDJCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUlBO0VBRUksMkJBQUE7RUFDQSxjQUFBO0FBRko7O0FBSUE7RUFFSSwwQ0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFJQTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBRUkseUJBQUE7RUFDQSxjQUFBO0FBSEo7O0FBS0E7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7QUFGRDs7QUFLQTtFQUNJLGFBQUE7QUFGSiIsImZpbGUiOiJkZXRhaWwtbWFya2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZmluZGVyY29sb3J7XHJcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZmluZGVyKTtcclxuICAgICAgICAtLWJhY2tncm91bmQ6Izk2NTFEQTtcclxuICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmZpbmRlcmNvbG9yMXtcclxuICAgICAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZmluZGVyKTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiM5NjUxREE7XHJcbiAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAuc3RhcmNvbG9ye1xyXG4gICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgIFxyXG4gICAgICAgfVxyXG5cclxuLmNoaXAxe1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTA0ZWU1NDtcclxuICAgIGNvbG9yOiByZ2IoOTIsIDMsIDEyOCk7XHJcbn1cclxuLmNoaXAye1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IzRkMGFlOThmO1xyXG4gICAgY29sb3I6IHJnYigzMywgMiwgMTcwKTtcclxufVxyXG4uY2hpcDN7XHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIxOCwgNjcsIDI5LCAwLjQxOCk7XHJcbiAgICBjb2xvcjogICNkMTIxMDk7XHJcbn1cclxuLmNoaXA0e1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y4YTQwNztcclxuICAgIGNvbG9yOiByZ2IoMjE4LCAyMCwgMjApO1xyXG59XHJcblxyXG4uY2hpcDV7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjNhNWYwO1xyXG4gICAgY29sb3I6IHJnYig1LCAzMywgMTkyKTtcclxufVxyXG4uYnRuY2VudGVye1xyXG4gZGlzcGxheTpmbGV4O1xyXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcbi5zdGFyY29sb3J7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG5cclxuICAgfSJdfQ== */");

/***/ }),

/***/ "pRgk":
/*!*******************************************************!*\
  !*** ./src/app/detail-market/detail-market.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailMarketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMarketPageModule", function() { return DetailMarketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_market_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-market-routing.module */ "E+t5");
/* harmony import */ var _detail_market_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-market.page */ "/GLM");







let DetailMarketPageModule = class DetailMarketPageModule {
};
DetailMarketPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_market_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailMarketPageRoutingModule"]
        ],
        declarations: [_detail_market_page__WEBPACK_IMPORTED_MODULE_6__["DetailMarketPage"]]
    })
], DetailMarketPageModule);



/***/ })

}]);
//# sourceMappingURL=detail-market-detail-market-module.js.map