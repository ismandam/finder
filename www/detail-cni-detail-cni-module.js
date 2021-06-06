(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-cni-detail-cni-module"],{

/***/ "1E0b":
/*!*********************************************************!*\
  !*** ./src/app/detail-cni/detail-cni-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailCniPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCniPageRoutingModule", function() { return DetailCniPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_cni_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-cni.page */ "wJat");




const routes = [
    {
        path: '',
        component: _detail_cni_page__WEBPACK_IMPORTED_MODULE_3__["DetailCniPage"]
    }
];
let DetailCniPageRoutingModule = class DetailCniPageRoutingModule {
};
DetailCniPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailCniPageRoutingModule);



/***/ }),

/***/ "45Eb":
/*!*************************************************!*\
  !*** ./src/app/detail-cni/detail-cni.module.ts ***!
  \*************************************************/
/*! exports provided: DetailCniPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCniPageModule", function() { return DetailCniPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_cni_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-cni-routing.module */ "1E0b");
/* harmony import */ var _detail_cni_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-cni.page */ "wJat");







let DetailCniPageModule = class DetailCniPageModule {
};
DetailCniPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_cni_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailCniPageRoutingModule"]
        ],
        declarations: [_detail_cni_page__WEBPACK_IMPORTED_MODULE_6__["DetailCniPage"]]
    })
], DetailCniPageModule);



/***/ }),

/***/ "9ySb":
/*!*************************************************!*\
  !*** ./src/app/detail-cni/detail-cni.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".findercolor {\n  --background:#9651DA;\n  color: white;\n}\n\n.starcolor {\n  color: yellow;\n}\n\nion-card {\n  --background: white;\n}\n\n#menubtn {\n  --background: rgba(var(--ion-color-primary), #9651DA);\n}\n\n.textright {\n  margin-left: 20px;\n}\n\n.left {\n  float: left;\n  align-self: center;\n}\n\n.button-right {\n  float: right;\n}\n\n.button-left {\n  float: left;\n  align-self: center;\n}\n\n.text {\n  position: center;\n  justify-content: center;\n  background-color: #00000000;\n  color: #80000065;\n}\n\n.text1 {\n  justify-content: center;\n}\n\n.col {\n  border: 2px solid #d6cbe0;\n  border-radius: 10px;\n  background-color: #c8dedf;\n}\n\n.linecolor {\n  background-color: yellow;\n}\n\n.app-icon {\n  background-image: url(/assets/image/share0.svg);\n  height: 150px;\n  width: 150px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  margin: 30px auto;\n}\n\n.btncenter {\n  display: flex;\n  justify-content: center;\n}\n\n.chip1 {\n  background-color: #7904ee54;\n  color: #5c0380;\n}\n\n.chip2 {\n  background-color: #f8a407;\n  color: #da1414;\n}\n\n.chip3 {\n  background-color: rgba(218, 67, 29, 0.418);\n  color: #d12109;\n}\n\n.contn {\n  background-color: #7904ee54;\n  color: #5c0380;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbC1jbmkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQyxZQUFBO0FBQUw7O0FBRUs7RUFDQyxhQUFBO0FBQ047O0FBR0E7RUFFSSxtQkFBQTtBQURKOztBQU1FO0VBQ0UscURBQUE7QUFISjs7QUFNRTtFQUdDLGlCQUFBO0FBTEg7O0FBUUU7RUFDRSxXQUFBO0VBRUEsa0JBQUE7QUFOSjs7QUFRRTtFQUVFLFlBQUE7QUFOSjs7QUFRRTtFQUNFLFdBQUE7RUFFQSxrQkFBQTtBQU5KOztBQVFFO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUVBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFRRTtFQUVFLHVCQUFBO0FBTko7O0FBU0U7RUFDRSx5QkFBQTtFQUNFLG1CQUFBO0VBRUQseUJBQUE7QUFQTDs7QUFTTTtFQUNBLHdCQUFBO0FBTk47O0FBU007RUFDRSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFFQSwyQkFBQTtFQUNBLHdCQUFBO0VBRUEsaUJBQUE7QUFSUjs7QUFXTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQVJSOztBQVlPO0VBRUMsMkJBQUE7RUFDQSxjQUFBO0FBVlI7O0FBWUk7RUFFRSx5QkFBQTtFQUNBLGNBQUE7QUFWTjs7QUFZSTtFQUVJLDBDQUFBO0VBQ0EsY0FBQTtBQVZSOztBQVlJO0VBRUUsMkJBQUE7RUFDRSxjQUFBO0FBVlIiLCJmaWxlIjoiZGV0YWlsLWNuaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmluZGVyY29sb3J7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1maW5kZXIpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM5NjUxREE7XHJcbiAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgfVxyXG4gICAgIC5zdGFyY29sb3J7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDApO1xyXG4gXHJcbiAgICAgfVxyXG5cclxuaW9uLWNhcmR7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBcclxuICB9XHJcbiAgICBcclxuICBcclxuICAjbWVudWJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLCAjOTY1MURBKTtcclxuICAgIFxyXG4gIH1cclxuICAudGV4dHJpZ2h0e1xyXG4gIC8vIGZsb2F0OiByaWdodDtcclxuICAvLyBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAvLyBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICAuYnV0dG9uLXJpZ2h0e1xyXG5cclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gIH1cclxuICAuYnV0dG9uLWxlZnR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgLy8gcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICAudGV4dHtcclxuICAgIHBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNzkyMmNmMjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwMDAwMDAwO1xyXG4gICAgY29sb3I6ICM4MDAwMDA2NTtcclxuICB9XHJcbiAgLnRleHQxe1xyXG4gICAvLyBwb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICAuY29se1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAgI2Q2Y2JlMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAvLyBtYXJnaW46NXB4IDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDAsIDIyMiwgMjIzKTtcclxuICAgICAgfVxyXG4gICAgICAubGluZWNvbG9ye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIC5hcHAtaWNvbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZS9zaGFyZTAuc3ZnKTtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgLy8gYm9yZGVyLXJhZGl1czogMzIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzNhNmQ3ZTtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0bmNlbnRlcntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICBcclxuICAgICAgIH1cclxuXHJcbiAgICAgICAuY2hpcDF7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTA0ZWU1NDtcclxuICAgICAgICBjb2xvcjogcmdiKDkyLCAzLCAxMjgpO1xyXG4gICAgfVxyXG4gICAgLmNoaXAye1xyXG4gICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2Y4YTQwNztcclxuICAgICAgY29sb3I6IHJnYigyMTgsIDIwLCAyMCk7XHJcbiAgICB9XHJcbiAgICAuY2hpcDN7XHJcbiAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjE4LCA2NywgMjksIDAuNDE4KTtcclxuICAgICAgICBjb2xvcjogICNkMTIxMDk7XHJcbiAgICB9XHJcbiAgICAuY29udG57XHJcbiAgICAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5MDRlZTU0O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoOTIsIDMsIDEyOCk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "L9l0":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-cni/detail-cni.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  \n  <ion-toolbar class=\"findercolor\" >\n    <ion-buttons id=\"menubtn\" slot=\"start\">\n      <ion-back-button id=\"menubtn\" class=\"starcolor\" ></ion-back-button>\n     \n    </ion-buttons>\n      <ion-title>Detail</ion-title>\n    \n      \n      <ion-button  slot=\"end\" class=\"findercolor\" (click)=\"partage()\">\n         \n      <ion-icon slot=\"start\"  name=\"share1\"></ion-icon>&nbsp;\n       Partage  \n     </ion-button>\n  \n  </ion-toolbar>\n</ion-header>\n<ion-content >\n    <!--espace pub-->\n   <ion-card class=\"contn\">\n    <ion-slides pager [options]=\"slideOptions\"  >\n      <ion-slide >\n         <h3>publicité 1 </h3>\n      </ion-slide>\n      <ion-slide>\n        <h3>publicité 2 </h3>\n      </ion-slide>\n      <ion-slide>\n        <h3>publicité 3 </h3>\n      </ion-slide>\n    </ion-slides>\n   </ion-card>\n   <!-- fin espace pub-->\n   <ion-card *ngIf=\"data != null\">\n       <img src=\"{{data.urlimage}}\" *ngIf=\"data.urlimage != null\" alt=\"Image\">\n      <ion-card-content >\n            <ion-card-title>\n                  <p>\n                    <b>\n                    Nom: {{data.nom_prenom}}\n                    </b>\n                    \n                  </p>\n                  <p>\n                  Numero CNI: {{data.num_cni}}\n                  </p>\n            \n            </ion-card-title>\n        \n                <!--  -->\n            <hr class=\"linecolor\">\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                      <ion-chip *ngIf=\"ischecked\" class=\"chip3\">\n                        <ion-label>merci</ion-label>\n\n                      </ion-chip>\n                      <ion-chip *ngIf=\"!ischecked\" class=\"chip1\">\n                        <ion-label>Est ce bien vous?</ion-label>\n\n                      </ion-chip>  \n                        <!--check -->\n                      <ion-grid>\n                          <!--ion checkers  -->\n                        <ion-row>\n                          <ion-col>\n                            \n                            <ion-checkbox color=\"primary\" class=\"left\"  [(ngModel)]=\"ischecked\" (ionChange)=\"testcheck()\">\n                                \n                            </ion-checkbox>  \n                            <ion-label>cochez ici!</ion-label>            \n                          </ion-col>\n                        </ion-row>\n                  \n                      </ion-grid>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n                <!--  -->\n          <hr class=\"linecolor\">\n          \n          <ion-grid >\n              <ion-row>\n                    <ion-chip class=\"chip2\">\n                      <ion-label> Termes et conditions! </ion-label>\n\n                    </ion-chip>\n              </ion-row>\n            </ion-grid>\n            <!--  -->\n        \n\n        <hr class=\"linecolor\">\n            <br>\n            <ion-label  class=\"text\">\n            <p >\n              Nos agents se mobilisent dans toute la ville pour retrouver pour vous vos pièces d\\'identité.\n              Nous géo localisons les endroits ou vous pourrez retrouver votre CNI.L'application FINDER vous offre un puissant moteur de recherche\n              vous permettant de trouver votre CNI enregistré dans notre base de donnée.\n              Le renseignement vous permettant de retrouver votre CNI est précédé d'un payement de 500 frcfa via le transfert mobile.\n              Avant de prendre l\\'initiative d\\'aller refaire votre CNI, nous invitons au préalable d\\'effectuer une recherche dans notre application,\n              cela pourrait vous évité dépenser 5000 fr et plus pour une nouvelle CNI.\n              nous vous prions de partager notre application pour permettre au autres de retrouver leurs CNI,\\n\n                  Merci.\n            </p>\n          </ion-label>\n          <hr class=\"line_color\">\n                \n\n          <!-- <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-input  class=\"col\" type=\"text\" placeholder=\"laissez nous un msg svp\">\n\n\n                </ion-input>\n                  <ion-button   class=\"findercolor\" (click)=\"sendmsg()\">\n                  \n                  <ion-icon slot=\"start\" class=\"starcolor\" icon=\"send\"></ion-icon>&nbsp;\n                  Send msg\n                  </ion-button>\n                \n                </ion-col>\n            </ion-row>\n            </ion-grid>-->     \n            \n\n          <ion-grid >\n            <ion-chip class=\"chip3\">\n              <ion-label class=\"text1\">\n               Laissez nous un message de validation de votre identité\n              </ion-label>\n            </ion-chip>\n                <ion-buttons padding class=\"btncenter\">\n                    <ion-row padding  >   \n                    <ion-col >\n                      <ion-button class=\"findercolor\" (click)=\"sendmsg()\">\n                        <ion-icon ion-button class=\"starcolor\" name=\"send\">&nbsp; \n                        </ion-icon>&nbsp; \n                          Laissez nous un msg\n                      </ion-button> \n                    </ion-col>\n                    \n                  </ion-row>\n              \n                </ion-buttons>\n          </ion-grid>\n      </ion-card-content>\n\n       <!-- <hr class=\"col\"> -->\n   </ion-card>\n \n \n</ion-content>\n\n<ion-footer  >\n\n</ion-footer>");

/***/ }),

/***/ "wJat":
/*!***********************************************!*\
  !*** ./src/app/detail-cni/detail-cni.page.ts ***!
  \***********************************************/
/*! exports provided: DetailCniPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCniPage", function() { return DetailCniPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_cni_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-cni.page.html */ "L9l0");
/* harmony import */ var _detail_cni_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-cni.page.scss */ "9ySb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





//import { SMS } from '@ionic-native/sms/ngx';
let DetailCniPage = class DetailCniPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.check = [
            { ischecked: true },
            { ischecked: false }
        ];
        this.slideOptions = {
            initialSlide: 0,
            slidesPerview: 1,
            autoplay: true,
            loop: true
        };
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.data;
            }
        });
        this.check = [
        // {ischecked, val:'vraie'},  
        ];
        if (this.ischecked) {
            console.log(" vraie");
        }
        else if (!this.ischecked) {
            console.log(" faux");
        }
    }
    ngOnInit() {
        if (this.ischecked) {
            console.log(" vraie");
        }
        else if (!this.ischecked) {
            console.log(" faux");
        }
    }
    testcheck() {
        if (this.ischecked) {
            console.log(" vraie");
        }
        else
            console.log(" faux");
    }
    sendmsg() {
        // this.sms.send('655391094', 'bonjour ismael');
    }
    readpicture() {
    }
};
DetailCniPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
DetailCniPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-cni',
        template: _raw_loader_detail_cni_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_cni_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailCniPage);



/***/ })

}]);
//# sourceMappingURL=detail-cni-detail-cni-module.js.map