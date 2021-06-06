(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-folder-module"],{

/***/ "1uNo":
/*!*************************************!*\
  !*** ./src/app/home/folder.page.ts ***!
  \*************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./folder.page.html */ "Ntv+");
/* harmony import */ var _folder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder.page.scss */ "bCDw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../myservice.service */ "qy13");







let FolderPage = class FolderPage {
    constructor(activatedRoute, router, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.service = service;
        this.allInfos = [];
        this.items = [];
        this.toggled = false;
        this.toggled = false;
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        this.getInfos(this.allInfos);
    }
    toggle() {
        this.toggled = !this.toggled;
    }
    toggleSearch() {
        this.toggled = this.toggled ? false : true;
    }
    homelistener(data) {
        let navigationExtras = {
            state: {
                data: data
            }
        };
        this.router.navigate(['detail-cni'], navigationExtras);
    }
    getInfos(event) {
        this.service.getAllInfo().subscribe(infos => {
            this.allInfos = infos;
            if (event) {
                setTimeout(() => { event.target.complete(); }, 200);
            }
            console.log(" toutes les infos de ton API :" + this.allInfos);
        }, error => {
            console.log(error);
            if (event) {
                setTimeout(() => { event.target.complete(); }, 200);
            }
        });
    }
    addcni() {
        this.router.navigate(['add-cni']);
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_5__["MyserviceService"] }
];
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-folder',
        template: _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_folder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FolderPage);



/***/ }),

/***/ "4gIm":
/*!***************************************!*\
  !*** ./src/app/home/folder.module.ts ***!
  \***************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "egrp");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "1uNo");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })
], FolderPageModule);



/***/ }),

/***/ "Ntv+":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/folder.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"findercolor\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"starcolor\" ></ion-menu-button>\n    </ion-buttons>\n   <ion-searchbar\n   *ngIf=\"toggled\"\n   showCancelbutton=\"true\"\n   animated=\"true\"\n   (ionCancel)=\"toggleSearch()\"\n  animated [(ngModel)]=\"searchTerm\"\n   >\n   </ion-searchbar>\n   <ion-icon class=\"search\" ion-button slot=\"end\" *ngIf=\"!toggled\" (click)=\"toggle()\" name=\"search\" >\n\n   </ion-icon>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\"(ionRefresh)=\"getInfos($event)\">\n    <ion-refresher-content\n    pullingIcon=\"chevron-down-circle-outline\"\n    refreshingSpinner=\"crescent\"\n    refreshingText=\"refreshing\">\n     \n    </ion-refresher-content>\n  </ion-refresher>\n \n  \n  <ion-list  >&nbsp;\n   <ion-item  *ngFor=\"let info of allInfos|filter:searchTerm\" type=\"ion-button\" (click)=\"homelistener(info)\" >\n    <ion-thumbnail slot=\"start\">\n      <img src=\"{{info.urlimage}}\" *ngIf=\"info.urlimage != null\" alt=\"Image\">\n     </ion-thumbnail>\n     <ion-label>\n       <p>\n       <b>Nom: {{info.nom_prenom}}</b>\n       </p>\n       <p>\n        Numero CNI: {{info.num_cni}}\n       </p>\n       <p>\n         Date CNI: {{info.date_cni}}\n        </p>\n      \n     </ion-label>\n   </ion-item>\n\n  </ion-list>\n  \n\n</ion-content>\n<ion-footer class=\"ion-no-border\" >\n  <ion-grid >\n    <ion-buttons padding class=\"btncenter\">\n    <ion-row padding  >   \n    <ion-col >\n      <ion-button class=\"findercolor\" (click)=\"addcni()\">\n        <ion-icon ion-button class=\"starcolor\" name=\"camera\">&nbsp; \n        </ion-icon>&nbsp; \n           Ajoutez un objet trouvé\n      </ion-button> \n    </ion-col>\n    \n  </ion-row>\n  \n  </ion-buttons>\n </ion-grid>\n  </ion-footer>");

/***/ }),

/***/ "bCDw":
/*!***************************************!*\
  !*** ./src/app/home/folder.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: white;\n}\n\n.findercolor {\n  --background:#9651DA;\n  color: white;\n}\n\n.search {\n  padding-inline-end: 10px;\n  align-self: center;\n  color: white;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.btncenter {\n  display: flex;\n  justify-content: center;\n}\n\n.starcolor {\n  color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFFQyxvQkFBQTtFQUNDLFlBQUE7QUFBRjs7QUFFRTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQztFQUNJLGFBQUE7QUFFTCIsImZpbGUiOiJmb2xkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6d2hpdGU7XG4gIFxufVxuLmZpbmRlcmNvbG9ye1xuIFxuIC0tYmFja2dyb3VuZDojOTY1MURBO1xuICBjb2xvcjp3aGl0ZTtcbiAgfVxuICAuc2VhcmNoe1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIH1cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJ0bmNlbnRlcntcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiBcbiB9XG4gLnN0YXJjb2xvcntcbiAgICAgY29sb3I6IHllbGxvdztcbiBcbiAgICB9Il19 */");

/***/ }),

/***/ "egrp":
/*!***********************************************!*\
  !*** ./src/app/home/folder-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "1uNo");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=home-folder-module.js.map