(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dimensions_dimensions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dimensions/dimensions.component */ "./src/app/dimensions/dimensions.component.ts");
/* harmony import */ var _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/layouts.component */ "./src/app/layouts/layouts.component.ts");
/* harmony import */ var _colours_colours_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colours/colours.component */ "./src/app/colours/colours.component.ts");
/* harmony import */ var _trims_trims_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trims/trims.component */ "./src/app/trims/trims.component.ts");







var routes = [
    { path: 'dimensions', component: _dimensions_dimensions_component__WEBPACK_IMPORTED_MODULE_3__["DimensionsComponent"] },
    { path: 'layouts', component: _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_4__["LayoutsComponent"] },
    { path: 'colours', component: _colours_colours_component__WEBPACK_IMPORTED_MODULE_5__["ColoursComponent"] },
    { path: 'trims', component: _trims_trims_component__WEBPACK_IMPORTED_MODULE_6__["TrimsComponent"] },
    { path: '', redirectTo: '/dimensions', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<body>\r\n<div>\r\n  <app-header></app-header>\r\n  <app-navbar></app-navbar>\r\n  <app-billboard-main></app-billboard-main>\r\n  <app-details></app-details>\r\n  <app-interior-billboard></app-interior-billboard>\r\n  <app-versa-text></app-versa-text>\r\n  <app-billboard-bottom></app-billboard-bottom>\r\n  <app-footer></app-footer>\r\n  <app-contact-form></app-contact-form>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'versa-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _billboard_main_billboard_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./billboard-main/billboard-main.component */ "./src/app/billboard-main/billboard-main.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dimensions_dimensions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dimensions/dimensions.component */ "./src/app/dimensions/dimensions.component.ts");
/* harmony import */ var _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/layouts.component */ "./src/app/layouts/layouts.component.ts");
/* harmony import */ var _colours_colours_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./colours/colours.component */ "./src/app/colours/colours.component.ts");
/* harmony import */ var _trims_trims_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trims/trims.component */ "./src/app/trims/trims.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _interior_billboard_interior_billboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interior-billboard/interior-billboard.component */ "./src/app/interior-billboard/interior-billboard.component.ts");
/* harmony import */ var _versa_text_versa_text_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./versa-text/versa-text.component */ "./src/app/versa-text/versa-text.component.ts");
/* harmony import */ var _billboard_bottom_billboard_bottom_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./billboard-bottom/billboard-bottom.component */ "./src/app/billboard-bottom/billboard-bottom.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _offers_button_offers_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./offers-button/offers-button.component */ "./src/app/offers-button/offers-button.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _billboard_main_billboard_main_component__WEBPACK_IMPORTED_MODULE_6__["BillboardMainComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _dimensions_dimensions_component__WEBPACK_IMPORTED_MODULE_10__["DimensionsComponent"],
                _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_11__["LayoutsComponent"],
                _colours_colours_component__WEBPACK_IMPORTED_MODULE_12__["ColoursComponent"],
                _trims_trims_component__WEBPACK_IMPORTED_MODULE_13__["TrimsComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_14__["DetailsComponent"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_15__["HighlightDirective"],
                _interior_billboard_interior_billboard_component__WEBPACK_IMPORTED_MODULE_16__["InteriorBillboardComponent"],
                _versa_text_versa_text_component__WEBPACK_IMPORTED_MODULE_17__["VersaTextComponent"],
                _billboard_bottom_billboard_bottom_component__WEBPACK_IMPORTED_MODULE_18__["BillboardBottomComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_20__["ContactFormComponent"],
                _offers_button_offers_button_component__WEBPACK_IMPORTED_MODULE_21__["OffersButtonComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/billboard-bottom/billboard-bottom.component.html":
/*!******************************************************************!*\
  !*** ./src/app/billboard-bottom/billboard-bottom.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"billboard billboard--bottom\">\r\n  <div class=\"callout\">\r\n    <div class=\"callout__text\">\r\n      <p class=\"callout__text-head\">Keeping you going</p>\r\n      <p class=\"callout__text-body\">At Bristol Street Versa our priority is to offer so much more than just the sale of a Wheelchair Accessible Vehicle (WAV). We recognise that the lives of the majority of our customers aren't always plain sailing - and that's why we are committed to step in to make sure we are #KeepingYouGoing.</p>\r\n      <app-offers-button [text]=\"text\" [width]=\"width\" [height]=\"height\"></app-offers-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/billboard-bottom/billboard-bottom.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/billboard-bottom/billboard-bottom.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\ndiv {\n  color: black;\n  font-family: \"Roboto\"; }\n.billboard {\n  background-image: url(\"/assets/images/Billboard_Keeping_You_Going.jpg\");\n  left: 0; }\n.callout {\n  display: block;\n  padding-bottom: 9vh; }\n@media only screen and (min-width: 1000px) {\n  .billboard {\n    position: relative;\n    left: 0;\n    width: 100vw;\n    height: 74vh;\n    background-size: cover; }\n  .callout {\n    width: 28vw;\n    background-color: rgba(255, 255, 255, 0.8);\n    color: black;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-40vw, -50%);\n            transform: translate(-40vw, -50%); } }\n@media only screen and (max-width: 1000px) {\n  .callout {\n    background-color: rgba(255, 255, 255, 0.8);\n    color: black;\n    width: 100vw;\n    margin-left: 0;\n    position: relative; }\n  .billboard {\n    width: 100vw;\n    height: 50vh; } }\np {\n  margin: 15px; }\n.callout__text {\n  padding-left: 2vw;\n  padding-right: 2vw;\n  margin-top: 2vw; }\n.callout__text-head {\n  font-size: 200%;\n  font-weight: bold; }\n.callout__text-body {\n  font-size: 90%;\n  font-weight: lighter; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGJvYXJkLWJvdHRvbS9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnNhLWFwcC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9iaWxsYm9hcmQtYm90dG9tL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcYXBwXFxiaWxsYm9hcmQtYm90dG9tXFxiaWxsYm9hcmQtYm90dG9tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUF3QjtBQUt4QiwwQkFBMEI7QUFLMUIsNEJBQTRCO0FBVTVCLDhCQUE4QjtBQUk5QixnQkFBZ0I7QUFTaEIsZ0NBQWdDO0FDL0JoQztFQUNFLGFBQVc7RUFDWCxzQkFBcUIsRUFDdEI7QUFFRztFQUNFLHdFQUF1RTtFQUN2RSxRQUFNLEVBQ1A7QUFFRDtFQUNJLGVBQWE7RUFDYixvQkFBbUIsRUFDcEI7QUFFSDtFQUNFO0lBQ0UsbUJBQWtCO0lBQ2xCLFFBQU07SUFDTixhQUFXO0lBQ1gsYUFBVztJQUNYLHVCQUFzQixFQUN2QjtFQUVEO0lBQ0UsWURkVztJQ2VYLDJDRGIwQztJQ2MxQyxhRGJhO0lDY2IsbUJBQWtCO0lBQ2xCLFNEZFM7SUNlVCxVRGRVO0lDZVYsMENBQTJDO1lBQTNDLGtDQUEyQyxFQUM1QyxFQUFBO0FBR0g7RUFDRTtJQUNFLDJDRHhCMEM7SUN5QjFDLGFEeEJhO0lDeUJiLGFEcEJrQjtJQ3FCbEIsZUFBYTtJQUNiLG1CQUFrQixFQUNuQjtFQUVEO0lBQ0UsYUFBVztJQUNYLGFBQVcsRUFDWixFQUFBO0FBR0g7RUFDRSxhQUFZLEVBQ2I7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDaEI7QUFFRDtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRSxlQUFjO0VBQ2QscUJBQW9CLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYmlsbGJvYXJkLWJvdHRvbS9iaWxsYm9hcmQtYm90dG9tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypXaWRlIFNpdGUgRGltZW5zaW9ucyovXHJcbiRuYXJyb3ctd2lkdGg6IDgwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG5cclxuLypOYXJyb3cgU2l0ZSBEaW1lbnNpb25zKi9cclxuJG5hcnJvdy13aWR0aC1waG9uZTogOTB2dztcclxuJG5hcnJvdy1tYXJnaW4tbGVmdC1waG9uZTogNXZ3O1xyXG4kbmFycm93LW1hcmdpbi1yaWdodC1waG9uZTogNXZ3O1xyXG5cclxuLyogV2lkZSBDYWxsb3V0IERpbWVuc2lvbnMqL1xyXG4kY2FsbG91dC14OiAtNDB2dztcclxuJGNhbGxvdXQteTogLTUwJTtcclxuJGNhbGxvdXQtd2lkdGg6Mjh2dztcclxuJGNhbGxvdXQtaGVpZ2h0OjI1dnc7XHJcbiRjYWxsb3V0LWJhY2tncm91bmQtY29sb3I6IGhzbGEoMzYwLDEwMCUsMTAwJSwuODApO1xyXG4kY2FsbG91dC1jb2xvcjogYmxhY2s7XHJcbiRjYWxsb3V0LXRvcDogNTAlO1xyXG4kY2FsbG91dC1sZWZ0OiA1MCU7XHJcblxyXG4vKiBOYXJyb3cgQ2FsbG91dCBEaW1lbnNpb25zKi9cclxuJGNhbGxvdXQtd2lkdGgtcGhvbmU6MTAwdnc7XHJcbiRjYWxsb3V0LWhlaWdodC1waG9uZToyNXZ3O1xyXG5cclxuLypTaXRlIENvbG91cnMqL1xyXG4kbGlnaHQtYmx1ZTogIzAxN0VEQjtcclxuJGxpZ2h0LWdyZXk6ICNFRkVGRUY7XHJcbiRkYXJrLWJsdWU6ICMwMDNFNzg7XHJcbiRncmVlbjogIzE0QTY1QjtcclxuJGRhcmstZ3JleTogIzQzNDU0RDtcclxuJG1pZC1ncmV5OiAjQTZBOUFBO1xyXG4kbWlkLWRhcmstZ3JleTogIzVGNjI1RjtcclxuXHJcbi8qc2NyZWVuIGJyZWFrcyBmb3IgcmVzcG9uc2l2ZSovXHJcbiRwaG9uZTogMTAwMHB4O1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmRpdntcclxuICBjb2xvcjpibGFjaztcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxufVxyXG5cclxuICAgIC5iaWxsYm9hcmR7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL0JpbGxib2FyZF9LZWVwaW5nX1lvdV9Hb2luZy5qcGdcIik7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsbG91dHtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA5dmg7XHJcbiAgICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRwaG9uZSkge1xyXG4gICAgICAuYmlsbGJvYXJke1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgd2lkdGg6MTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0Ojc0dmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhbGxvdXR7XHJcbiAgICAgICAgd2lkdGg6JGNhbGxvdXQtd2lkdGg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbGxvdXQtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJGNhbGxvdXQtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogJGNhbGxvdXQtdG9wO1xyXG4gICAgICAgIGxlZnQ6ICRjYWxsb3V0LWxlZnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJGNhbGxvdXQteCwkY2FsbG91dC15KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHBob25lKSB7XHJcbiAgICAgIC5jYWxsb3V0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYWxsb3V0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRjYWxsb3V0LWNvbG9yO1xyXG4gICAgICAgIHdpZHRoOiRjYWxsb3V0LXdpZHRoLXBob25lO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmlsbGJvYXJke1xyXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDo1MHZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxsb3V0X190ZXh0e1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcclxuICAgICAgcGFkZGluZy1yaWdodDogMnZ3O1xyXG4gICAgICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGxvdXRfX3RleHQtaGVhZHtcclxuICAgICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsbG91dF9fdGV4dC1ib2R5e1xyXG4gICAgICBmb250LXNpemU6IDkwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/billboard-bottom/billboard-bottom.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/billboard-bottom/billboard-bottom.component.ts ***!
  \****************************************************************/
/*! exports provided: BillboardBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillboardBottomComponent", function() { return BillboardBottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BillboardBottomComponent = /** @class */ (function () {
    function BillboardBottomComponent() {
        this.text = "More Information";
        this.width = "22vw";
        this.height = "8vh";
    }
    BillboardBottomComponent.prototype.ngOnInit = function () {
    };
    BillboardBottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billboard-bottom',
            template: __webpack_require__(/*! ./billboard-bottom.component.html */ "./src/app/billboard-bottom/billboard-bottom.component.html"),
            styles: [__webpack_require__(/*! ./billboard-bottom.component.scss */ "./src/app/billboard-bottom/billboard-bottom.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BillboardBottomComponent);
    return BillboardBottomComponent;
}());



/***/ }),

/***/ "./src/app/billboard-main/billboard-main.component.html":
/*!**************************************************************!*\
  !*** ./src/app/billboard-main/billboard-main.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"billboard billboard--main\">\r\n  <div class=\"callout\">\r\n    <div class=\"callout__text\">\r\n      <p class=\"callout__text-head\">Versa Connect</p>\r\n      <p class=\"callout__text-body\">\"The Ford Tourneo Connect is a relaxing and comfortable place to be. Great to drive, great to sit in, it boasts premium finishes, high quality materials and fuel efficiency without compromising everyday practicality.\"</p>\r\n      <app-offers-button [text]=\"text\" [width]=\"width\" [height]=\"height\"></app-offers-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/billboard-main/billboard-main.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/billboard-main/billboard-main.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\ndiv {\n  color: black;\n  font-family: \"Roboto\"; }\n.billboard {\n  left: 0;\n  width: 100vw;\n  height: 74vh;\n  background-size: cover;\n  position: relative;\n  background-image: url(\"Billboard_Main.jpg\"); }\n.callout {\n  display: block;\n  padding-bottom: 9vh; }\n@media only screen and (min-width: 1000px) {\n  .callout {\n    width: 28vw;\n    background-color: rgba(255, 255, 255, 0.8);\n    color: black;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-40vw, -50%);\n            transform: translate(-40vw, -50%); } }\n@media only screen and (max-width: 1000px) {\n  .callout {\n    background-color: rgba(255, 255, 255, 0.8);\n    color: black;\n    width: 100vw;\n    margin-left: 0;\n    position: relative; }\n  .billboard {\n    width: 100vw;\n    height: 50vh; } }\np {\n  margin: 15px; }\n.callout__text {\n  padding-left: 2vw;\n  padding-right: 2vw;\n  margin-top: 2vw; }\n.callout__text-head {\n  font-size: 200%;\n  font-weight: bold; }\n.callout__text-body {\n  font-size: 100%;\n  font-weight: lighter; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGJvYXJkLW1haW4vQzpcXFVzZXJzXFxSb2JlcnRcXERvY3VtZW50c1xcR2l0SHViXFx2ZXJzYS1hcHAvc3JjXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYmlsbGJvYXJkLW1haW4vQzpcXFVzZXJzXFxSb2JlcnRcXERvY3VtZW50c1xcR2l0SHViXFx2ZXJzYS1hcHAvc3JjXFxhcHBcXGJpbGxib2FyZC1tYWluXFxiaWxsYm9hcmQtbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFLeEIsMEJBQTBCO0FBSzFCLDRCQUE0QjtBQVU1Qiw4QkFBOEI7QUFJOUIsZ0JBQWdCO0FBU2hCLGdDQUFnQztBQy9CaEM7RUFDRSxhQUFXO0VBQ1gsc0JBQXFCLEVBQ3RCO0FBRUc7RUFDRSxRQUFNO0VBQ04sYUFBVztFQUNYLGFBQVc7RUFDWCx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLDRDQUEyQyxFQUM1QztBQUVEO0VBQ0ksZUFBYTtFQUNiLG9CQUFtQixFQUNwQjtBQUVIO0VBQ0U7SUFDRSxZRFZXO0lDV1gsMkNEVDBDO0lDVTFDLGFEVGE7SUNVYixtQkFBa0I7SUFDbEIsU0RWUztJQ1dULFVEVlU7SUNXViwwQ0FBMkM7WUFBM0Msa0NBQTJDLEVBQzVDLEVBQUE7QUFHSDtFQUNFO0lBQ0UsMkNEcEIwQztJQ3FCMUMsYURwQmE7SUNxQmIsYURoQmtCO0lDaUJsQixlQUFhO0lBQ2IsbUJBQWtCLEVBQ25CO0VBRUQ7SUFDRSxhQUFXO0lBQ1gsYUFBVyxFQUNaLEVBQUE7QUFJSDtFQUNFLGFBQVksRUFDYjtBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNoQjtBQUVEO0VBQ0UsZ0JBQWU7RUFDZixrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLGdCQUFlO0VBQ2YscUJBQW9CLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYmlsbGJvYXJkLW1haW4vYmlsbGJvYXJkLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKldpZGUgU2l0ZSBEaW1lbnNpb25zKi9cclxuJG5hcnJvdy13aWR0aDogODB2dztcclxuJG5hcnJvdy1tYXJnaW4tbGVmdDogMTB2dztcclxuJG5hcnJvdy1tYXJnaW4tcmlnaHQ6IDEwdnc7XHJcblxyXG4vKk5hcnJvdyBTaXRlIERpbWVuc2lvbnMqL1xyXG4kbmFycm93LXdpZHRoLXBob25lOiA5MHZ3O1xyXG4kbmFycm93LW1hcmdpbi1sZWZ0LXBob25lOiA1dnc7XHJcbiRuYXJyb3ctbWFyZ2luLXJpZ2h0LXBob25lOiA1dnc7XHJcblxyXG4vKiBXaWRlIENhbGxvdXQgRGltZW5zaW9ucyovXHJcbiRjYWxsb3V0LXg6IC00MHZ3O1xyXG4kY2FsbG91dC15OiAtNTAlO1xyXG4kY2FsbG91dC13aWR0aDoyOHZ3O1xyXG4kY2FsbG91dC1oZWlnaHQ6MjV2dztcclxuJGNhbGxvdXQtYmFja2dyb3VuZC1jb2xvcjogaHNsYSgzNjAsMTAwJSwxMDAlLC44MCk7XHJcbiRjYWxsb3V0LWNvbG9yOiBibGFjaztcclxuJGNhbGxvdXQtdG9wOiA1MCU7XHJcbiRjYWxsb3V0LWxlZnQ6IDUwJTtcclxuXHJcbi8qIE5hcnJvdyBDYWxsb3V0IERpbWVuc2lvbnMqL1xyXG4kY2FsbG91dC13aWR0aC1waG9uZToxMDB2dztcclxuJGNhbGxvdXQtaGVpZ2h0LXBob25lOjI1dnc7XHJcblxyXG4vKlNpdGUgQ29sb3VycyovXHJcbiRsaWdodC1ibHVlOiAjMDE3RURCO1xyXG4kbGlnaHQtZ3JleTogI0VGRUZFRjtcclxuJGRhcmstYmx1ZTogIzAwM0U3ODtcclxuJGdyZWVuOiAjMTRBNjVCO1xyXG4kZGFyay1ncmV5OiAjNDM0NTREO1xyXG4kbWlkLWdyZXk6ICNBNkE5QUE7XHJcbiRtaWQtZGFyay1ncmV5OiAjNUY2MjVGO1xyXG5cclxuLypzY3JlZW4gYnJlYWtzIGZvciByZXNwb25zaXZlKi9cclxuJHBob25lOiAxMDAwcHg7XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuZGl2e1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG59XHJcblxyXG4gICAgLmJpbGxib2FyZHtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICB3aWR0aDoxMDB2dztcclxuICAgICAgaGVpZ2h0Ojc0dmg7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiQmlsbGJvYXJkX01haW4uanBnXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxsb3V0e1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDl2aDtcclxuICAgICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHBob25lKSB7XHJcbiAgICAgIC5jYWxsb3V0e1xyXG4gICAgICAgIHdpZHRoOiRjYWxsb3V0LXdpZHRoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYWxsb3V0LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRjYWxsb3V0LWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6ICRjYWxsb3V0LXRvcDtcclxuICAgICAgICBsZWZ0OiAkY2FsbG91dC1sZWZ0O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRjYWxsb3V0LXgsJGNhbGxvdXQteSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwaG9uZSkge1xyXG4gICAgICAuY2FsbG91dHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FsbG91dC1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkY2FsbG91dC1jb2xvcjtcclxuICAgICAgICB3aWR0aDokY2FsbG91dC13aWR0aC1waG9uZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDowO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJpbGxib2FyZHtcclxuICAgICAgICB3aWR0aDoxMDB2dztcclxuICAgICAgICBoZWlnaHQ6NTB2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwe1xyXG4gICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGxvdXRfX3RleHR7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMnZ3O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAydnc7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJ2dztcclxuICAgIH1cclxuXHJcbiAgICAuY2FsbG91dF9fdGV4dC1oZWFke1xyXG4gICAgICBmb250LXNpemU6IDIwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxsb3V0X190ZXh0LWJvZHl7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/billboard-main/billboard-main.component.ts":
/*!************************************************************!*\
  !*** ./src/app/billboard-main/billboard-main.component.ts ***!
  \************************************************************/
/*! exports provided: BillboardMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillboardMainComponent", function() { return BillboardMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BillboardMainComponent = /** @class */ (function () {
    function BillboardMainComponent() {
        this.text = "Make An Enquiry";
        this.width = "22vw";
        this.height = "8vh";
    }
    BillboardMainComponent.prototype.ngOnInit = function () {
    };
    BillboardMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billboard-main',
            template: __webpack_require__(/*! ./billboard-main.component.html */ "./src/app/billboard-main/billboard-main.component.html"),
            styles: [__webpack_require__(/*! ./billboard-main.component.scss */ "./src/app/billboard-main/billboard-main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BillboardMainComponent);
    return BillboardMainComponent;
}());



/***/ }),

/***/ "./src/app/colours/colours.component.html":
/*!************************************************!*\
  !*** ./src/app/colours/colours.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"wrapper\">\r\n   <img src=\"{{imageSrc}}\" class=\"colours__car\">\r\n   <div fxLayout=\"row\" fxFill class=\"swatches\">\r\n     <div *ngFor=\"let colours of colours\">\r\n       <nav class=\"swatch\" [ngStyle]=\"{background: colours.hexColor}\" (click)=\"onClick(colours)\"></nav>\r\n     </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxFill class=\"types\">\r\n      <div class=\"types__nonmetallic\">Non metallic</div>\r\n      <div class=\"types__metallic\">Metallic</div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/colours/colours.component.scss":
/*!************************************************!*\
  !*** ./src/app/colours/colours.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\n.swatches {\n  width: 60vw;\n  margin-left: 15vw; }\n.types {\n  width: 60vw;\n  margin-left: 15vw; }\n.swatch {\n  width: 4vw;\n  height: 4vw;\n  margin-right: 2vw;\n  border-radius: 50%;\n  border-color: #FFFFFF;\n  border-width: thick;\n  border-style: solid;\n  -webkit-border-radius: 50%;\n  -webkit-border-color: #FFFFFF;\n  -webkit-border-width: thick;\n  -webkit-border-style: solid;\n  text-align: center;\n  line-height: 3.5vw;\n  color: #FFFFFF;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23); }\n.swatch:hover {\n    cursor: pointer; }\n.colours__car {\n  width: 80vw; }\n.types__nonmetallic {\n  text-align: center;\n  padding-top: 1vh;\n  border-bottom: solid 1px black;\n  padding-right: 0vw;\n  height: 6vh;\n  line-height: 4vh;\n  font-size: 90%;\n  width: 16vw; }\n.types__metallic {\n  text-align: center;\n  padding-top: 1vh;\n  border-bottom: solid 1px black;\n  padding-right: 0vw;\n  height: 6vh;\n  line-height: 4vh;\n  font-size: 90%;\n  width: 34vw;\n  margin-left: 2vw;\n  color: #A6A9AA;\n  border-color: #A6A9AA; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3Vycy9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnNhLWFwcC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb2xvdXJzL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcYXBwXFxjb2xvdXJzXFxjb2xvdXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUF3QjtBQUt4QiwwQkFBMEI7QUFLMUIsNEJBQTRCO0FBVTVCLDhCQUE4QjtBQUk5QixnQkFBZ0I7QUFTaEIsZ0NBQWdDO0FDaEJoQztFQUpFLFlBQVc7RUFDWCxrQkFBaUIsRUFLbEI7QUFFRDtFQVJFLFlBQVc7RUFDWCxrQkFBaUIsRUFTbEI7QUFFRDtFQUNFLFdBQVM7RUFDVCxZQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQiwyQkFBMEI7RUFDMUIsOEJBQTZCO0VBQzdCLDRCQUEyQjtFQUMzQiw0QkFBMkI7RUFDM0IsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsMEVBQW1FLEVBR3BFO0FBbEJEO0lBaUJVLGdCQUFlLEVBQUc7QUFHNUI7RUFDRSxZQUFXLEVBQ1o7QUFFRDtFQTlDRSxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLCtCQUE4QjtFQUM5QixtQkFBa0I7RUFDbEIsWUFBVTtFQUNWLGlCQUFnQjtFQUNoQixlQUFjO0VBMENkLFlBQVcsRUFDWjtBQUVEO0VBbkRFLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixZQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGVBQWM7RUErQ2QsWUFBVTtFQUNWLGlCQUFlO0VBQ2YsZUQ1QmdCO0VDNkJoQixzQkQ3QmdCLEVDOEJqQiIsImZpbGUiOiJzcmMvYXBwL2NvbG91cnMvY29sb3Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qV2lkZSBTaXRlIERpbWVuc2lvbnMqL1xyXG4kbmFycm93LXdpZHRoOiA4MHZ3O1xyXG4kbmFycm93LW1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4kbmFycm93LW1hcmdpbi1yaWdodDogMTB2dztcclxuXHJcbi8qTmFycm93IFNpdGUgRGltZW5zaW9ucyovXHJcbiRuYXJyb3ctd2lkdGgtcGhvbmU6IDkwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLWxlZnQtcGhvbmU6IDV2dztcclxuJG5hcnJvdy1tYXJnaW4tcmlnaHQtcGhvbmU6IDV2dztcclxuXHJcbi8qIFdpZGUgQ2FsbG91dCBEaW1lbnNpb25zKi9cclxuJGNhbGxvdXQteDogLTQwdnc7XHJcbiRjYWxsb3V0LXk6IC01MCU7XHJcbiRjYWxsb3V0LXdpZHRoOjI4dnc7XHJcbiRjYWxsb3V0LWhlaWdodDoyNXZ3O1xyXG4kY2FsbG91dC1iYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDM2MCwxMDAlLDEwMCUsLjgwKTtcclxuJGNhbGxvdXQtY29sb3I6IGJsYWNrO1xyXG4kY2FsbG91dC10b3A6IDUwJTtcclxuJGNhbGxvdXQtbGVmdDogNTAlO1xyXG5cclxuLyogTmFycm93IENhbGxvdXQgRGltZW5zaW9ucyovXHJcbiRjYWxsb3V0LXdpZHRoLXBob25lOjEwMHZ3O1xyXG4kY2FsbG91dC1oZWlnaHQtcGhvbmU6MjV2dztcclxuXHJcbi8qU2l0ZSBDb2xvdXJzKi9cclxuJGxpZ2h0LWJsdWU6ICMwMTdFREI7XHJcbiRsaWdodC1ncmV5OiAjRUZFRkVGO1xyXG4kZGFyay1ibHVlOiAjMDAzRTc4O1xyXG4kZ3JlZW46ICMxNEE2NUI7XHJcbiRkYXJrLWdyZXk6ICM0MzQ1NEQ7XHJcbiRtaWQtZ3JleTogI0E2QTlBQTtcclxuJG1pZC1kYXJrLWdyZXk6ICM1RjYyNUY7XHJcblxyXG4vKnNjcmVlbiBicmVha3MgZm9yIHJlc3BvbnNpdmUqL1xyXG4kcGhvbmU6IDEwMDBweDtcclxuIiwiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gc3dhdGNoX190eXBle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXZoO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcclxuICBwYWRkaW5nLXJpZ2h0OiAwdnc7XHJcbiAgaGVpZ2h0OjZ2aDtcclxuICBsaW5lLWhlaWdodDogNHZoO1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG59XHJcblxyXG5AbWl4aW4gZGltZW5zaW9uc3tcclxuICB3aWR0aDogNjB2dztcclxuICBtYXJnaW4tbGVmdDogMTV2dztcclxufVxyXG5cclxuLnN3YXRjaGVze1xyXG4gIEBpbmNsdWRlIGRpbWVuc2lvbnM7XHJcbn1cclxuXHJcbi50eXBlc3tcclxuICBAaW5jbHVkZSBkaW1lbnNpb25zO1xyXG59XHJcblxyXG4uc3dhdGNoe1xyXG4gIHdpZHRoOjR2dztcclxuICBoZWlnaHQ6NHZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMnZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGljaztcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG4gIC13ZWJraXQtYm9yZGVyLXdpZHRoOiB0aGljaztcclxuICAtd2Via2l0LWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjV2dztcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgM3B4IDNweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG5cclxuICAmOmhvdmVye2N1cnNvcjogcG9pbnRlcjt9XHJcbn1cclxuXHJcbi5jb2xvdXJzX19jYXJ7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbn1cclxuXHJcbi50eXBlc19fbm9ubWV0YWxsaWN7XHJcbiAgQGluY2x1ZGUgc3dhdGNoX190eXBlO1xyXG4gIHdpZHRoOiAxNnZ3O1xyXG59XHJcblxyXG4udHlwZXNfX21ldGFsbGlje1xyXG4gIEBpbmNsdWRlIHN3YXRjaF9fdHlwZTtcclxuICB3aWR0aDozNHZ3O1xyXG4gIG1hcmdpbi1sZWZ0OjJ2dztcclxuICBjb2xvcjogJG1pZC1ncmV5O1xyXG4gIGJvcmRlci1jb2xvcjogJG1pZC1ncmV5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/colours/colours.component.ts":
/*!**********************************************!*\
  !*** ./src/app/colours/colours.component.ts ***!
  \**********************************************/
/*! exports provided: ColoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoursComponent", function() { return ColoursComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swatches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../swatches */ "./src/app/swatches.ts");



var ColoursComponent = /** @class */ (function () {
    function ColoursComponent() {
        this.colours = _swatches__WEBPACK_IMPORTED_MODULE_2__["COLOURS"];
        this.imageSrc = this.colours[0].imgURL;
    }
    ColoursComponent.prototype.ngOnInit = function () {
    };
    ColoursComponent.prototype.onClick = function (imageNameObject) {
        this.imageSrc = imageNameObject.imgURL;
    };
    ColoursComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colours',
            template: __webpack_require__(/*! ./colours.component.html */ "./src/app/colours/colours.component.html"),
            styles: [__webpack_require__(/*! ./colours.component.scss */ "./src/app/colours/colours.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColoursComponent);
    return ColoursComponent;
}());



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"contact\">\r\n    <h2 class=\"contact__header\">Interested in this vehicle?</h2>\r\n    <p class=\"contact__text\">Are you interested in the Ford Tourneo? Simply fill in the form below and we will be in touch.\r\n    </p>\r\n    <div class=\"contact__form\">\r\n      <input type=\"text\" class=\"contact__form__text\" placeholder=\"Name\">\r\n      <input type=\"text\" class=\"contact__form__text\" placeholder=\"Number\">\r\n      <input type=\"submit\" class=\"contact__form__button\" value=\"Go\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\n.wrapper {\n  background-color: #EFEFEF;\n  padding-bottom: 12vh;\n  position: relative;\n  height: 25vh; }\n.contact__header {\n  font-size: 130%; }\n.contact__text {\n  font-size: 80%; }\n.contact {\n  padding-left: 1vw;\n  padding-right: 1vw;\n  width: 28vw;\n  height: 20vh;\n  background-color: white;\n  color: black;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(65%, -40%);\n          transform: translate(65%, -40%); }\n.contact__form__text {\n  border-radius: 5px;\n  border: none;\n  height: 4vh;\n  font-size: 80%;\n  background-color: #EFEFEF;\n  padding-left: 1vw;\n  width: 11vw;\n  margin-right: 0.5vw; }\n.contact__form__button {\n  border-radius: 5px;\n  border: none;\n  height: 4vh;\n  font-size: 80%;\n  color: white;\n  background-color: #017EDB; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1mb3JtL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QtZm9ybS9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnNhLWFwcC9zcmNcXGFwcFxcY29udGFjdC1mb3JtXFxjb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCO0FBS3hCLDBCQUEwQjtBQUsxQiw0QkFBNEI7QUFVNUIsOEJBQThCO0FBSTlCLGdCQUFnQjtBQVNoQixnQ0FBZ0M7QUN4QmhDO0VBQ0UsMEJEZ0JrQjtFQ2ZsQixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGFBQVksRUFDYjtBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7QUFFRDtFQUNFLGVBQWMsRUFDZjtBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLG1CQUFpQjtFQUNqQixZQUFVO0VBQ1YsYUFBVztFQUNYLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFNBQVE7RUFBRSxVQUFTO0VBQ25CLHdDQUE4QjtVQUE5QixnQ0FBOEIsRUFDakM7QUFFRDtFQWpDRSxtQkFBa0I7RUFDbEIsYUFBVztFQUNYLFlBQVc7RUFDWCxlQUFjO0VBZ0NkLDBCRFprQjtFQ2FsQixrQkFBZ0I7RUFDaEIsWUFBVTtFQUNWLG9CQUFtQixFQUNwQjtBQUVEO0VBekNFLG1CQUFrQjtFQUNsQixhQUFXO0VBQ1gsWUFBVztFQUNYLGVBQWM7RUF3Q2QsYUFBWTtFQUNaLDBCRHRCa0IsRUN1Qm5CIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qV2lkZSBTaXRlIERpbWVuc2lvbnMqL1xyXG4kbmFycm93LXdpZHRoOiA4MHZ3O1xyXG4kbmFycm93LW1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4kbmFycm93LW1hcmdpbi1yaWdodDogMTB2dztcclxuXHJcbi8qTmFycm93IFNpdGUgRGltZW5zaW9ucyovXHJcbiRuYXJyb3ctd2lkdGgtcGhvbmU6IDkwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLWxlZnQtcGhvbmU6IDV2dztcclxuJG5hcnJvdy1tYXJnaW4tcmlnaHQtcGhvbmU6IDV2dztcclxuXHJcbi8qIFdpZGUgQ2FsbG91dCBEaW1lbnNpb25zKi9cclxuJGNhbGxvdXQteDogLTQwdnc7XHJcbiRjYWxsb3V0LXk6IC01MCU7XHJcbiRjYWxsb3V0LXdpZHRoOjI4dnc7XHJcbiRjYWxsb3V0LWhlaWdodDoyNXZ3O1xyXG4kY2FsbG91dC1iYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDM2MCwxMDAlLDEwMCUsLjgwKTtcclxuJGNhbGxvdXQtY29sb3I6IGJsYWNrO1xyXG4kY2FsbG91dC10b3A6IDUwJTtcclxuJGNhbGxvdXQtbGVmdDogNTAlO1xyXG5cclxuLyogTmFycm93IENhbGxvdXQgRGltZW5zaW9ucyovXHJcbiRjYWxsb3V0LXdpZHRoLXBob25lOjEwMHZ3O1xyXG4kY2FsbG91dC1oZWlnaHQtcGhvbmU6MjV2dztcclxuXHJcbi8qU2l0ZSBDb2xvdXJzKi9cclxuJGxpZ2h0LWJsdWU6ICMwMTdFREI7XHJcbiRsaWdodC1ncmV5OiAjRUZFRkVGO1xyXG4kZGFyay1ibHVlOiAjMDAzRTc4O1xyXG4kZ3JlZW46ICMxNEE2NUI7XHJcbiRkYXJrLWdyZXk6ICM0MzQ1NEQ7XHJcbiRtaWQtZ3JleTogI0E2QTlBQTtcclxuJG1pZC1kYXJrLWdyZXk6ICM1RjYyNUY7XHJcblxyXG4vKnNjcmVlbiBicmVha3MgZm9yIHJlc3BvbnNpdmUqL1xyXG4kcGhvbmU6IDEwMDBweDtcclxuIiwiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gZm9ybV9fYm9yZGVye1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBoZWlnaHQ6IDR2aDtcclxuICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLndyYXBwZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgcGFkZGluZy1ib3R0b206IDEydmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjV2aDtcclxufVxyXG5cclxuLmNvbnRhY3RfX2hlYWRlcntcclxuICBmb250LXNpemU6IDEzMCU7XHJcbn1cclxuXHJcbi5jb250YWN0X190ZXh0e1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4uY29udGFjdHtcclxuICAgIHBhZGRpbmctbGVmdDogMXZ3O1xyXG4gICAgcGFkZGluZy1yaWdodDoxdnc7XHJcbiAgICB3aWR0aDoyOHZ3O1xyXG4gICAgaGVpZ2h0OjIwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlOyBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2NSUsLTQwJSk7XHJcbn1cclxuXHJcbi5jb250YWN0X19mb3JtX190ZXh0e1xyXG4gIEBpbmNsdWRlIGZvcm1fX2JvcmRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuICBwYWRkaW5nLWxlZnQ6MXZ3O1xyXG4gIHdpZHRoOjExdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcclxufVxyXG5cclxuLmNvbnRhY3RfX2Zvcm1fX2J1dHRvbntcclxuICBAaW5jbHVkZSBmb3JtX19ib3JkZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ibHVlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.scss */ "./src/app/contact-form/contact-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"detail\" fxLayout=\"row\" fxFill>\r\n      <nav routerLink=\"/dimensions\" fxFlex=\"25\" routerLinkActive=\"detail__dimensions--active\" class=\"detail__dimensions\">\r\n          Dimensions\r\n      </nav>\r\n      <nav routerLink=\"/layouts\" fxFlex=\"25\" routerLinkActive=\"detail__layouts--active\" class=\"detail__layouts\">\r\n          Vehicle Layouts\r\n      </nav>\r\n      <nav routerLink=\"/colours\" fxFlex=\"25\" routerLinkActive=\"detail__colours--active\" class=\"detail__colours\">\r\n          Colour\r\n      </nav>\r\n      <nav routerLink=\"/trims\" fxFlex=\"25\" routerLinkActive=\"detail__trims--active\" class=\"detail__trims\">\r\n          Interior Trim\r\n      </nav>\r\n    </div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-offers-button [text]=\"text\" [width]=\"width\" [height]=height [margintop]=margintop></app-offers-button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\n.wrapper {\n  width: 80vw;\n  margin-left: 10vw;\n  color: black;\n  font-family: \"Roboto\";\n  font-size: 100%; }\n.detail__dimensions {\n  margin-top: 5vh;\n  padding-bottom: 5vh;\n  text-align: center;\n  height: 5vh;\n  line-height: 5vh;\n  border: solid 1px #003E78;\n  color: #003E78;\n  margin-bottom: 2vh; }\n.detail__dimensions:hover {\n    cursor: pointer; }\n.detail__trims {\n  margin-top: 5vh;\n  padding-bottom: 5vh;\n  text-align: center;\n  height: 5vh;\n  line-height: 5vh;\n  border: solid 1px #003E78;\n  color: #003E78;\n  margin-bottom: 2vh; }\n.detail__trims:hover {\n    cursor: pointer; }\n.detail__colours {\n  margin-top: 5vh;\n  padding-bottom: 5vh;\n  text-align: center;\n  height: 5vh;\n  line-height: 5vh;\n  border: solid 1px #003E78;\n  color: #003E78;\n  margin-bottom: 2vh; }\n.detail__colours:hover {\n    cursor: pointer; }\n.detail__layouts {\n  margin-top: 5vh;\n  padding-bottom: 5vh;\n  text-align: center;\n  height: 5vh;\n  line-height: 5vh;\n  border: solid 1px #003E78;\n  color: #003E78;\n  margin-bottom: 2vh; }\n.detail__layouts:hover {\n    cursor: pointer; }\n.detail__dimensions--active {\n  background-color: #003E78;\n  color: white;\n  outline: none; }\n.detail__layouts--active {\n  background-color: #003E78;\n  color: white;\n  outline: none; }\n.detail__colours--active {\n  background-color: #003E78;\n  color: white;\n  outline: none; }\n.detail__trims--active {\n  background-color: #003E78;\n  color: white;\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnNhLWFwcC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9kZXRhaWxzL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcYXBwXFxkZXRhaWxzXFxkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUF3QjtBQUt4QiwwQkFBMEI7QUFLMUIsNEJBQTRCO0FBVTVCLDhCQUE4QjtBQUk5QixnQkFBZ0I7QUFTaEIsZ0NBQWdDO0FDWmhDO0VBQ0UsWURyQmlCO0VDc0JqQixrQkRyQnVCO0VDc0J2QixhQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLGdCQUFlLEVBQ2hCO0FBR0Q7RUEzQkUsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLFlBQVU7RUFDVixpQkFBZ0I7RUFDaEIsMEJEbUJpQjtFQ2xCakIsZURrQmlCO0VDakJqQixtQkFBa0IsRUFzQm5CO0FBcEJDO0lBQVEsZ0JBQWUsRUFBRztBQXNCNUI7RUEvQkUsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLFlBQVU7RUFDVixpQkFBZ0I7RUFDaEIsMEJEbUJpQjtFQ2xCakIsZURrQmlCO0VDakJqQixtQkFBa0IsRUEwQm5CO0FBeEJDO0lBQVEsZ0JBQWUsRUFBRztBQTBCNUI7RUFuQ0UsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLFlBQVU7RUFDVixpQkFBZ0I7RUFDaEIsMEJEbUJpQjtFQ2xCakIsZURrQmlCO0VDakJqQixtQkFBa0IsRUE4Qm5CO0FBNUJDO0lBQVEsZ0JBQWUsRUFBRztBQThCNUI7RUF2Q0UsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLFlBQVU7RUFDVixpQkFBZ0I7RUFDaEIsMEJEbUJpQjtFQ2xCakIsZURrQmlCO0VDakJqQixtQkFBa0IsRUFrQ25CO0FBaENDO0lBQVEsZ0JBQWUsRUFBRztBQWtDNUI7RUE5QkUsMEJEV2lCO0VDVmpCLGFBQVc7RUFDWCxjQUFhLEVBOEJkO0FBRUQ7RUFsQ0UsMEJEV2lCO0VDVmpCLGFBQVc7RUFDWCxjQUFhLEVBa0NkO0FBRUQ7RUF0Q0UsMEJEV2lCO0VDVmpCLGFBQVc7RUFDWCxjQUFhLEVBc0NkO0FBRUQ7RUExQ0UsMEJEV2lCO0VDVmpCLGFBQVc7RUFDWCxjQUFhLEVBMENkIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypXaWRlIFNpdGUgRGltZW5zaW9ucyovXHJcbiRuYXJyb3ctd2lkdGg6IDgwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG5cclxuLypOYXJyb3cgU2l0ZSBEaW1lbnNpb25zKi9cclxuJG5hcnJvdy13aWR0aC1waG9uZTogOTB2dztcclxuJG5hcnJvdy1tYXJnaW4tbGVmdC1waG9uZTogNXZ3O1xyXG4kbmFycm93LW1hcmdpbi1yaWdodC1waG9uZTogNXZ3O1xyXG5cclxuLyogV2lkZSBDYWxsb3V0IERpbWVuc2lvbnMqL1xyXG4kY2FsbG91dC14OiAtNDB2dztcclxuJGNhbGxvdXQteTogLTUwJTtcclxuJGNhbGxvdXQtd2lkdGg6Mjh2dztcclxuJGNhbGxvdXQtaGVpZ2h0OjI1dnc7XHJcbiRjYWxsb3V0LWJhY2tncm91bmQtY29sb3I6IGhzbGEoMzYwLDEwMCUsMTAwJSwuODApO1xyXG4kY2FsbG91dC1jb2xvcjogYmxhY2s7XHJcbiRjYWxsb3V0LXRvcDogNTAlO1xyXG4kY2FsbG91dC1sZWZ0OiA1MCU7XHJcblxyXG4vKiBOYXJyb3cgQ2FsbG91dCBEaW1lbnNpb25zKi9cclxuJGNhbGxvdXQtd2lkdGgtcGhvbmU6MTAwdnc7XHJcbiRjYWxsb3V0LWhlaWdodC1waG9uZToyNXZ3O1xyXG5cclxuLypTaXRlIENvbG91cnMqL1xyXG4kbGlnaHQtYmx1ZTogIzAxN0VEQjtcclxuJGxpZ2h0LWdyZXk6ICNFRkVGRUY7XHJcbiRkYXJrLWJsdWU6ICMwMDNFNzg7XHJcbiRncmVlbjogIzE0QTY1QjtcclxuJGRhcmstZ3JleTogIzQzNDU0RDtcclxuJG1pZC1ncmV5OiAjQTZBOUFBO1xyXG4kbWlkLWRhcmstZ3JleTogIzVGNjI1RjtcclxuXHJcbi8qc2NyZWVuIGJyZWFrcyBmb3IgcmVzcG9uc2l2ZSovXHJcbiRwaG9uZTogMTAwMHB4O1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbkBtaXhpbiBkZXRhaWxib3JkZXJze1xyXG4gIG1hcmdpbi10b3A6IDV2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6NXZoO1xyXG4gIGxpbmUtaGVpZ2h0OiA1dmg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggJGRhcmstYmx1ZTtcclxuICBjb2xvcjogJGRhcmstYmx1ZTtcclxuICBtYXJnaW4tYm90dG9tOiAydmg7XHJcblxyXG4gICY6aG92ZXJ7Y3Vyc29yOiBwb2ludGVyO31cclxufVxyXG5cclxuQG1peGluIGFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDokbmFycm93LXdpZHRoO1xyXG4gIG1hcmdpbi1sZWZ0OiAkbmFycm93LW1hcmdpbi1sZWZ0O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuXHJcbi5kZXRhaWxfX2RpbWVuc2lvbnN7XHJcbiAgQGluY2x1ZGUgZGV0YWlsYm9yZGVycztcclxufVxyXG5cclxuLmRldGFpbF9fdHJpbXN7XHJcbiAgQGluY2x1ZGUgZGV0YWlsYm9yZGVycztcclxufVxyXG5cclxuLmRldGFpbF9fY29sb3Vyc3tcclxuICBAaW5jbHVkZSBkZXRhaWxib3JkZXJzO1xyXG59XHJcblxyXG4uZGV0YWlsX19sYXlvdXRze1xyXG4gIEBpbmNsdWRlIGRldGFpbGJvcmRlcnM7XHJcbn1cclxuXHJcbi5kZXRhaWxfX2RpbWVuc2lvbnMtLWFjdGl2ZSB7XHJcbiAgQGluY2x1ZGUgYWN0aXZlO1xyXG59XHJcblxyXG4uZGV0YWlsX19sYXlvdXRzLS1hY3RpdmUge1xyXG4gIEBpbmNsdWRlIGFjdGl2ZTtcclxufVxyXG5cclxuLmRldGFpbF9fY29sb3Vycy0tYWN0aXZlIHtcclxuICBAaW5jbHVkZSBhY3RpdmU7XHJcbn1cclxuXHJcbi5kZXRhaWxfX3RyaW1zLS1hY3RpdmUge1xyXG4gIEBpbmNsdWRlIGFjdGl2ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
        this.text = "View Our Versa Connect Offers";
        this.width = "20vw";
        this.height = "6vh";
        this.margintop = "2vh";
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/dimensions/dimensions.component.html":
/*!******************************************************!*\
  !*** ./src/app/dimensions/dimensions.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dimensions\" fxLayout=\"row\" fxFill>\r\n  <div class=\"dimensions__table\" fxFlex=\"50\">\r\n    <table class=\"dimensions__table__data\">\r\n      <tr class=\"data__header\">\r\n        <td></td>\r\n        <td>Short</td>\r\n        <td>Long</td>\r\n      </tr>\r\n      <tr class=\"data__rows\">\r\n        <td class=\"data__rows--header\">Entry Height</td>\r\n        <td class=\"data__rows--data\">1,373mm</td>\r\n        <td>1,373mm</td>\r\n      </tr>\r\n      <tr class=\"data__rows\">\r\n        <td class=\"data__rows--header\">Ramp Height</td>\r\n        <td class=\"data__rows--data\">1,010mm</td>\r\n        <td>1,010mm</td>\r\n      </tr>\r\n      <tr class=\"data__rows\">\r\n        <td class=\"data__rows--header\" >Ramp Width</td>\r\n        <td class=\"data__rows--data\">755mm</td>\r\n        <td>755mm</td>\r\n      </tr>\r\n      <tr class=\"data__rows\">\r\n        <td class=\"data__rows--header\" >Channel Length</td>\r\n        <td class=\"data__rows--data\">1,580mm</td>\r\n        <td>1,580mm</td>\r\n      </tr>\r\n      <tr class=\"data__rows\">\r\n        <td class=\"data__rows--header\">External Height</td>\r\n        <td class=\"data__rows--data\">1,852mm</td>\r\n        <td>1,845mm</td>\r\n      </tr>\r\n      <tr class=\"data__rows\">\r\n        <td class=\"data__rows--header\">External Length</td>\r\n        <td class=\"data__rows--data\">4,418mm</td>\r\n        <td>4,818mm</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"dimensions__image\" fxFlex=\"30\">\r\n    <img src=\"assets/images/Versa_Dimensions.jpg\" class=\"dimensions__image--size\">\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/dimensions/dimensions.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dimensions/dimensions.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\n.data__rows {\n  border: solid 2px #A6A9AA; }\n.dimensions__table__data {\n  table-layout: fixed;\n  width: 98%; }\ntd {\n  padding: 1vw; }\n.dimensions__image--size {\n  width: 170%;\n  padding-top: 3vh; }\n.data__header {\n  font-weight: bold; }\n.data__rows--header {\n  background-color: #EFEFEF;\n  border-right: solid 2px #A6A9AA; }\n.data__rows--data {\n  border-right: solid 2px #A6A9AA; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGltZW5zaW9ucy9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnNhLWFwcC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9kaW1lbnNpb25zL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcYXBwXFxkaW1lbnNpb25zXFxkaW1lbnNpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUF3QjtBQUt4QiwwQkFBMEI7QUFLMUIsNEJBQTRCO0FBVTVCLDhCQUE4QjtBQUk5QixnQkFBZ0I7QUFTaEIsZ0NBQWdDO0FDM0JoQztFQUNFLDBCRHVCZ0IsRUN0QmpCO0FBRUQ7RUFDRSxvQkFBa0I7RUFDbEIsV0FBUyxFQUNWO0FBRUQ7RUFDSSxhQUFXLEVBQ2Q7QUFFRDtFQUNFLFlBQVU7RUFDVixpQkFBZ0IsRUFDakI7QUFFRDtFQXJCRSxrQkFBaUIsRUF1QmxCO0FBRUQ7RUFDRSwwQkRIa0I7RUNJbEIsZ0NEQWdCLEVDQ2pCO0FBRUE7RUFDRSxnQ0RKZSxFQ0toQiIsImZpbGUiOiJzcmMvYXBwL2RpbWVuc2lvbnMvZGltZW5zaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qV2lkZSBTaXRlIERpbWVuc2lvbnMqL1xyXG4kbmFycm93LXdpZHRoOiA4MHZ3O1xyXG4kbmFycm93LW1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4kbmFycm93LW1hcmdpbi1yaWdodDogMTB2dztcclxuXHJcbi8qTmFycm93IFNpdGUgRGltZW5zaW9ucyovXHJcbiRuYXJyb3ctd2lkdGgtcGhvbmU6IDkwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLWxlZnQtcGhvbmU6IDV2dztcclxuJG5hcnJvdy1tYXJnaW4tcmlnaHQtcGhvbmU6IDV2dztcclxuXHJcbi8qIFdpZGUgQ2FsbG91dCBEaW1lbnNpb25zKi9cclxuJGNhbGxvdXQteDogLTQwdnc7XHJcbiRjYWxsb3V0LXk6IC01MCU7XHJcbiRjYWxsb3V0LXdpZHRoOjI4dnc7XHJcbiRjYWxsb3V0LWhlaWdodDoyNXZ3O1xyXG4kY2FsbG91dC1iYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDM2MCwxMDAlLDEwMCUsLjgwKTtcclxuJGNhbGxvdXQtY29sb3I6IGJsYWNrO1xyXG4kY2FsbG91dC10b3A6IDUwJTtcclxuJGNhbGxvdXQtbGVmdDogNTAlO1xyXG5cclxuLyogTmFycm93IENhbGxvdXQgRGltZW5zaW9ucyovXHJcbiRjYWxsb3V0LXdpZHRoLXBob25lOjEwMHZ3O1xyXG4kY2FsbG91dC1oZWlnaHQtcGhvbmU6MjV2dztcclxuXHJcbi8qU2l0ZSBDb2xvdXJzKi9cclxuJGxpZ2h0LWJsdWU6ICMwMTdFREI7XHJcbiRsaWdodC1ncmV5OiAjRUZFRkVGO1xyXG4kZGFyay1ibHVlOiAjMDAzRTc4O1xyXG4kZ3JlZW46ICMxNEE2NUI7XHJcbiRkYXJrLWdyZXk6ICM0MzQ1NEQ7XHJcbiRtaWQtZ3JleTogI0E2QTlBQTtcclxuJG1pZC1kYXJrLWdyZXk6ICM1RjYyNUY7XHJcblxyXG4vKnNjcmVlbiBicmVha3MgZm9yIHJlc3BvbnNpdmUqL1xyXG4kcGhvbmU6IDEwMDBweDtcclxuIiwiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gaGVhZGVye1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGF0YV9fcm93c3tcclxuICBib3JkZXI6c29saWQgMnB4ICRtaWQtZ3JleTtcclxufVxyXG5cclxuLmRpbWVuc2lvbnNfX3RhYmxlX19kYXRhe1xyXG4gIHRhYmxlLWxheW91dDpmaXhlZDtcclxuICB3aWR0aDo5OCU7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHBhZGRpbmc6MXZ3O1xyXG59XHJcblxyXG4uZGltZW5zaW9uc19faW1hZ2UtLXNpemV7XHJcbiAgd2lkdGg6MTcwJTtcclxuICBwYWRkaW5nLXRvcDogM3ZoO1xyXG59XHJcblxyXG4uZGF0YV9faGVhZGVye1xyXG4gIEBpbmNsdWRlIGhlYWRlcjtcclxufVxyXG5cclxuLmRhdGFfX3Jvd3MtLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAkbWlkLWdyZXk7XHJcbn1cclxuXHJcbiAuZGF0YV9fcm93cy0tZGF0YXtcclxuICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggJG1pZC1ncmV5O1xyXG4gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dimensions/dimensions.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dimensions/dimensions.component.ts ***!
  \****************************************************/
/*! exports provided: DimensionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionsComponent", function() { return DimensionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DimensionsComponent = /** @class */ (function () {
    function DimensionsComponent() {
    }
    DimensionsComponent.prototype.ngOnInit = function () {
    };
    DimensionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dimensions',
            template: __webpack_require__(/*! ./dimensions.component.html */ "./src/app/dimensions/dimensions.component.html"),
            styles: [__webpack_require__(/*! ./dimensions.component.scss */ "./src/app/dimensions/dimensions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DimensionsComponent);
    return DimensionsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"footer\" fxLayout=\"row\" fxFill>\r\n    <div class=\"footer__left\" fxLayout=\"column\" fxFlex=\"30vw\">\r\n      <div class=\"footer__left__logo\">\r\n        <img class=\"footer__logo--size\" src=\"assets/images/Vertu_Logo.png\">\r\n      </div>\r\n      <div class=\"footer__left__text\">\r\n        <p>If you're looking for a new or used Wheelchair Accessible Vehicle (WAV), Then Bristol Street Versa is the best place to start.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer__right\" fxLayout=\"column\">\r\n      <div class=\"footer__right__row1\" fxLayout=\"row\">\r\n        <div class=\"home\" fxFlex=\"15vw\"><a href=\"#\">Home</a></div>\r\n        <div class=\"newused\" fxFlex=\"15vw\"><a href=\"#\">Nearly New & Used</a></div>\r\n        <div class=\"terms\" fxFlex=\"15vw\"><a href=\"#\">Terms</a></div>\r\n      </div>\r\n      <div class=\"footer__right__row2\" fxLayout=\"row\">\r\n        <div class=\"new\" fxFlex=\"15vw\"><a href=\"#\">New Vehicles</a></div>\r\n        <div class=\"aftercare\" fxFlex=\"15vw\"><a href=\"#\">Aftercare</a></div>\r\n        <div class=\"blog\" fxFlex=\"15vw\"><a href=\"#\">Blog</a></div>\r\n      </div>\r\n      <div class=\"footer__right__row3\" fxLayout=\"row\">\r\n        <div class=\"motability\" fxFlex=\"15vw\"><a href=\"#\">Motability</a></div>\r\n        <div class=\"contact\" fxFlex=\"15vw\"><a href=\"#\">Contact Us</a></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer__bottom\">\r\n    <p>Registered office for all group companies: Vertu Motors plc, Show Accessibility Options |Vertu House, Fifth Avenue Business Park, Team Valley, Show Accessibility Options |Gateshead, Tyne & Wear, Show Accessibility Options |NE11 0XA\r\n    </p>\r\n  </div>\r\n<div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\n.wrapper {\n  background-color: #43454D;\n  color: white;\n  font-family: \"Roboto\";\n  padding-top: 6vh;\n  padding-bottom: 3vh; }\n.footer__left {\n  margin-left: 10vw; }\n.footer__left__text {\n  font-size: 80%;\n  color: #A6A9AA; }\n.footer__right {\n  padding-left: 15vw; }\n.footer__right a {\n  color: white; }\n.footer__logo--size {\n  width: 16vw;\n  -webkit-filter: grayscale(100%) brightness(1000%);\n          filter: grayscale(100%) brightness(1000%); }\n.footer__right__row2 {\n  padding-top: 1vh;\n  padding-bottom: 1vh; }\n.footer__bottom {\n  padding-top: 3vh;\n  margin-left: 10vw;\n  margin-right: 10vw;\n  font-size: 70%;\n  color: #5F625F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnNhLWFwcC9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCO0FBS3hCLDBCQUEwQjtBQUsxQiw0QkFBNEI7QUFVNUIsOEJBQThCO0FBSTlCLGdCQUFnQjtBQVNoQixnQ0FBZ0M7QUMvQmhDO0VBQ0UsMEJEMEJpQjtFQ3pCakIsYUFBVztFQUNYLHNCQUFxQjtFQUNyQixpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCO0FBRUQ7RUFDRSxrQkRUdUIsRUNVeEI7QUFFRDtFQUNFLGVBQWM7RUFDZCxlRGNnQixFQ2JqQjtBQUVEO0VBQ0UsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7QUFFRDtFQUNFLFlBQVU7RUFDVixrREFBeUM7VUFBekMsMENBQXlDLEVBQzFDO0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCO0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsa0JEcEN1QjtFQ3FDdkIsbUJEcEN3QjtFQ3FDeEIsZUFBYztFQUNkLGVEVnFCLEVDV3RCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qV2lkZSBTaXRlIERpbWVuc2lvbnMqL1xyXG4kbmFycm93LXdpZHRoOiA4MHZ3O1xyXG4kbmFycm93LW1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4kbmFycm93LW1hcmdpbi1yaWdodDogMTB2dztcclxuXHJcbi8qTmFycm93IFNpdGUgRGltZW5zaW9ucyovXHJcbiRuYXJyb3ctd2lkdGgtcGhvbmU6IDkwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLWxlZnQtcGhvbmU6IDV2dztcclxuJG5hcnJvdy1tYXJnaW4tcmlnaHQtcGhvbmU6IDV2dztcclxuXHJcbi8qIFdpZGUgQ2FsbG91dCBEaW1lbnNpb25zKi9cclxuJGNhbGxvdXQteDogLTQwdnc7XHJcbiRjYWxsb3V0LXk6IC01MCU7XHJcbiRjYWxsb3V0LXdpZHRoOjI4dnc7XHJcbiRjYWxsb3V0LWhlaWdodDoyNXZ3O1xyXG4kY2FsbG91dC1iYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDM2MCwxMDAlLDEwMCUsLjgwKTtcclxuJGNhbGxvdXQtY29sb3I6IGJsYWNrO1xyXG4kY2FsbG91dC10b3A6IDUwJTtcclxuJGNhbGxvdXQtbGVmdDogNTAlO1xyXG5cclxuLyogTmFycm93IENhbGxvdXQgRGltZW5zaW9ucyovXHJcbiRjYWxsb3V0LXdpZHRoLXBob25lOjEwMHZ3O1xyXG4kY2FsbG91dC1oZWlnaHQtcGhvbmU6MjV2dztcclxuXHJcbi8qU2l0ZSBDb2xvdXJzKi9cclxuJGxpZ2h0LWJsdWU6ICMwMTdFREI7XHJcbiRsaWdodC1ncmV5OiAjRUZFRkVGO1xyXG4kZGFyay1ibHVlOiAjMDAzRTc4O1xyXG4kZ3JlZW46ICMxNEE2NUI7XHJcbiRkYXJrLWdyZXk6ICM0MzQ1NEQ7XHJcbiRtaWQtZ3JleTogI0E2QTlBQTtcclxuJG1pZC1kYXJrLWdyZXk6ICM1RjYyNUY7XHJcblxyXG4vKnNjcmVlbiBicmVha3MgZm9yIHJlc3BvbnNpdmUqL1xyXG4kcGhvbmU6IDEwMDBweDtcclxuIiwiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ud3JhcHBlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gIHBhZGRpbmctdG9wOiA2dmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDN2aDtcclxufVxyXG5cclxuLmZvb3Rlcl9fbGVmdHtcclxuICBtYXJnaW4tbGVmdDogJG5hcnJvdy1tYXJnaW4tbGVmdDtcclxufVxyXG5cclxuLmZvb3Rlcl9fbGVmdF9fdGV4dHtcclxuICBmb250LXNpemU6IDgwJTtcclxuICBjb2xvcjogJG1pZC1ncmV5O1xyXG59XHJcblxyXG4uZm9vdGVyX19yaWdodHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1dnc7XHJcbn1cclxuLmZvb3Rlcl9fcmlnaHQgYXtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXJfX2xvZ28tLXNpemUge1xyXG4gIHdpZHRoOjE2dnc7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygxMDAwJSk7XHJcbn1cclxuXHJcbi5mb290ZXJfX3JpZ2h0X19yb3cye1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcclxufVxyXG5cclxuLmZvb3Rlcl9fYm90dG9te1xyXG4gIHBhZGRpbmctdG9wOiAzdmg7XHJcbiAgbWFyZ2luLWxlZnQ6ICRuYXJyb3ctbWFyZ2luLWxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkbmFycm93LW1hcmdpbi1yaWdodDtcclxuICBmb250LXNpemU6IDcwJTtcclxuICBjb2xvcjogJG1pZC1kYXJrLWdyZXk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" fxLayout=\"row\" fxFill>\r\n  <div class=\"header__logo\" fxFlex=\"24\">\r\n    <img class=\"header__logo--size\" src=\"assets/images/Vertu_Logo.png\">\r\n  </div>\r\n\r\n  <div class=\"header__right\" fxLayout=\"column\">\r\n    <div class=\"header__top\">\r\n      <div class=\"header\" fxLayout=\"row\" fxFill>\r\n        <div class=\"top__contrast\" fxFlex=\"44\">\r\n          Contrast&nbsp;<span class=\"boxedicon contrast--high\">A</span> <span class=\"boxedicon\">A</span>\r\n        </div>\r\n        <div class=\"top__fontsize\" fxFlex=\"12\">\r\n          Font Size<span class=\"boxedicon\">A-</span><span class=\"boxedicon\">A</span><span class=\"boxedicon\">A+</span>\r\n        </div>\r\n        <div class=\"top__download\" fxFlex=\"18\">\r\n          <a href=\"#\">Download a Brochure</a>\r\n        </div>\r\n        <div class=\"top__blog\" fxFlex=\"4\">\r\n          Blog\r\n        </div>\r\n        <div class=\"top__contact\" fxFlex=\"20\">\r\n          <fa-icon [icon]=\"faPhone\" flip=\"horizontal\"></fa-icon>\r\n          &nbsp;Contact us on 0300 042 5909&nbsp;\r\n          <fa-icon [icon]=\"faInfoCircle\"></fa-icon>\r\n        </div>\r\n      </div>\r\n      <div class=\"header__bottom\">\r\n        <div class=\"header\" fxLayout=\"row\" fxFill>\r\n          <div class=\"bottom__newvehicles\" fxFlex=\"25\">\r\n            <a href=\"#\">New Vehicles</a>\r\n          </div>\r\n          <div class=\"bottom__usedvehicles\" fxFlex=\"25\">\r\n            <a href=\"#\">Nearly New/Used Vehicles</a>\r\n          </div>\r\n          <div class=\"bottom__motability\" fxFlex=\"25\">\r\n            <a href=\"#\">Motability</a>\r\n          </div>\r\n          <div class=\"bottom__aftercare\" fxFlex=\"25\">\r\n            <a href=\"#\">Aftercare</a>\r\n          </div>\r\n          <div class=\"bottom__contactus\" fxFlex=\"25\">\r\n            <a href=\"#\">Contact Us</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\ndiv {\n  color: black;\n  font-family: \"Roboto\"; }\n.header__logo {\n  height: 14vh;\n  padding-top: 1vh;\n  padding-left: 3vw; }\n.header__top {\n  height: 5vh;\n  line-height: 5vh;\n  text-align: center;\n  font-size: 70%; }\n.header__bottom {\n  height: 9vh;\n  line-height: 9vh;\n  width: 77vw;\n  font-size: 120%; }\n.header__bottom a {\n  color: black; }\n.header__logo--size {\n  width: 20vw; }\n.top__contact {\n  background-color: #14A65B;\n  color: white;\n  padding-left: 1vw; }\n.top__contrast {\n  text-align: right;\n  padding-right: 1vw; }\n.top__download a {\n  color: black; }\n.top__fontsize {\n  text-align: right; }\n.top__blog {\n  text-align: center; }\n.boxedicon {\n  border: solid 1px #A6A9AA;\n  margin-left: 2px;\n  padding-left: 3px;\n  padding-right: 3px;\n  color: #003E78; }\n.contrast--high {\n  background-color: #000000;\n  color: yellow; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnNhLWFwcC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCO0FBS3hCLDBCQUEwQjtBQUsxQiw0QkFBNEI7QUFVNUIsOEJBQThCO0FBSTlCLGdCQUFnQjtBQVNoQixnQ0FBZ0M7QUMvQmhDO0VBQ0UsYUFBVztFQUNYLHNCQUFxQixFQUN0QjtBQU1EO0VBQ0UsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLFlBQVU7RUFDVixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDZjtBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixZQUFVO0VBQ1YsZ0JBQWUsRUFDaEI7QUFFRDtFQUNFLGFBQVksRUFDYjtBQUVEO0VBQ0UsWUFBVSxFQUNYO0FBRUQ7RUFDRSwwQkRaYTtFQ2FiLGFBQVc7RUFDWCxrQkFBZ0IsRUFDakI7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDbkI7QUFFRDtFQUNFLGFBQVksRUFDYjtBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixlQUFhLEVBQ2Q7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixjQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypXaWRlIFNpdGUgRGltZW5zaW9ucyovXHJcbiRuYXJyb3ctd2lkdGg6IDgwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG5cclxuLypOYXJyb3cgU2l0ZSBEaW1lbnNpb25zKi9cclxuJG5hcnJvdy13aWR0aC1waG9uZTogOTB2dztcclxuJG5hcnJvdy1tYXJnaW4tbGVmdC1waG9uZTogNXZ3O1xyXG4kbmFycm93LW1hcmdpbi1yaWdodC1waG9uZTogNXZ3O1xyXG5cclxuLyogV2lkZSBDYWxsb3V0IERpbWVuc2lvbnMqL1xyXG4kY2FsbG91dC14OiAtNDB2dztcclxuJGNhbGxvdXQteTogLTUwJTtcclxuJGNhbGxvdXQtd2lkdGg6Mjh2dztcclxuJGNhbGxvdXQtaGVpZ2h0OjI1dnc7XHJcbiRjYWxsb3V0LWJhY2tncm91bmQtY29sb3I6IGhzbGEoMzYwLDEwMCUsMTAwJSwuODApO1xyXG4kY2FsbG91dC1jb2xvcjogYmxhY2s7XHJcbiRjYWxsb3V0LXRvcDogNTAlO1xyXG4kY2FsbG91dC1sZWZ0OiA1MCU7XHJcblxyXG4vKiBOYXJyb3cgQ2FsbG91dCBEaW1lbnNpb25zKi9cclxuJGNhbGxvdXQtd2lkdGgtcGhvbmU6MTAwdnc7XHJcbiRjYWxsb3V0LWhlaWdodC1waG9uZToyNXZ3O1xyXG5cclxuLypTaXRlIENvbG91cnMqL1xyXG4kbGlnaHQtYmx1ZTogIzAxN0VEQjtcclxuJGxpZ2h0LWdyZXk6ICNFRkVGRUY7XHJcbiRkYXJrLWJsdWU6ICMwMDNFNzg7XHJcbiRncmVlbjogIzE0QTY1QjtcclxuJGRhcmstZ3JleTogIzQzNDU0RDtcclxuJG1pZC1ncmV5OiAjQTZBOUFBO1xyXG4kbWlkLWRhcmstZ3JleTogIzVGNjI1RjtcclxuXHJcbi8qc2NyZWVuIGJyZWFrcyBmb3IgcmVzcG9uc2l2ZSovXHJcbiRwaG9uZTogMTAwMHB4O1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmRpdntcclxuICBjb2xvcjpibGFjaztcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxufVxyXG5cclxuLmhlYWRlcntcclxuXHJcbn1cclxuXHJcbi5oZWFkZXJfX2xvZ297XHJcbiAgaGVpZ2h0OiAxNHZoO1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RvcHtcclxuICBoZWlnaHQ6NXZoO1xyXG4gIGxpbmUtaGVpZ2h0OiA1dmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNzAlO1xyXG59XHJcblxyXG4uaGVhZGVyX19ib3R0b217XHJcbiAgaGVpZ2h0OiA5dmg7XHJcbiAgbGluZS1oZWlnaHQ6IDl2aDtcclxuICB3aWR0aDo3N3Z3O1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG5cclxuLmhlYWRlcl9fYm90dG9tIGF7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaGVhZGVyX19sb2dvLS1zaXplIHtcclxuICB3aWR0aDoyMHZ3O1xyXG59XHJcblxyXG4udG9wX19jb250YWN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6MXZ3O1xyXG59XHJcblxyXG4udG9wX19jb250cmFzdHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxdnc7XHJcbn1cclxuXHJcbi50b3BfX2Rvd25sb2FkIGF7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udG9wX19mb250c2l6ZXtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRvcF9fYmxvZ3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3hlZGljb257XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0E2QTlBQTtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICBjb2xvcjojMDAzRTc4O1xyXG59XHJcblxyXG4uY29udHJhc3QtLWhpZ2h7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjp5ZWxsb3c7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPhone"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        this.el = el;
    }
    HighlightDirective.prototype.onClick = function () {
        this.highlight(null, '#003E78');
        this.highlight('#003E78', 'white');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight(null, '#003E78');
    };
    HighlightDirective.prototype.highlight = function (bgcolor, fgcolor) {
        this.el.nativeElement.style.backgroundColor = bgcolor;
        this.el.nativeElement.style.color = fgcolor;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlightDirective.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHighlight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/interior-billboard/interior-billboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/interior-billboard/interior-billboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"billboard billboard--main\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/interior-billboard/interior-billboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/interior-billboard/interior-billboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".billboard {\n  margin-top: 10vh;\n  left: 0;\n  width: 99vw;\n  height: 100vh;\n  background-size: cover;\n  position: relative;\n  background-image: url(\"/assets/images/interior-billboard.png\"); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJpb3ItYmlsbGJvYXJkL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcYXBwXFxpbnRlcmlvci1iaWxsYm9hcmRcXGludGVyaW9yLWJpbGxib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFnQjtFQUNoQixRQUFNO0VBQ04sWUFBVTtFQUNWLGNBQVk7RUFDWix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLCtEQUE4RCxFQUMvRCIsImZpbGUiOiJzcmMvYXBwL2ludGVyaW9yLWJpbGxib2FyZC9pbnRlcmlvci1iaWxsYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlsbGJvYXJke1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOjk5dnc7XHJcbiAgaGVpZ2h0OjEwMHZoO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2ludGVyaW9yLWJpbGxib2FyZC5wbmdcIik7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/interior-billboard/interior-billboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/interior-billboard/interior-billboard.component.ts ***!
  \********************************************************************/
/*! exports provided: InteriorBillboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteriorBillboardComponent", function() { return InteriorBillboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InteriorBillboardComponent = /** @class */ (function () {
    function InteriorBillboardComponent() {
    }
    InteriorBillboardComponent.prototype.ngOnInit = function () {
    };
    InteriorBillboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interior-billboard',
            template: __webpack_require__(/*! ./interior-billboard.component.html */ "./src/app/interior-billboard/interior-billboard.component.html"),
            styles: [__webpack_require__(/*! ./interior-billboard.component.scss */ "./src/app/interior-billboard/interior-billboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InteriorBillboardComponent);
    return InteriorBillboardComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layouts.component.html":
/*!************************************************!*\
  !*** ./src/app/layouts/layouts.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layouts\">\n  <div class=\"layouts_swb\">\n    <p class=\"layouts__swb__description\">Short (based on Ford Tourneo Connect)</p>\n    <img class=\"layouts__swb__image\" src=\"assets/images/Versa_Layout_SWB.jpg\">\n  </div>\n  <br/>\n  <div class=\"layouts_lwb\">\n    <p class=\"layous__lwb__descirption\">Long (based on Ford Tourneo Grand Connect)</p>\n    <img class=\"layouts__lwb__image\" src=\"assets/images/Versa_Layout_LWB.jpg\">\n  </div>\n  <div class=\"layouts__footnote\">\n    <p class=\"layouts__footnote____description\">* Wheelchair user can sit a little further forward (not as forward as Row 2 seats)</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/layouts.component.scss":
/*!************************************************!*\
  !*** ./src/app/layouts/layouts.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layouts {\n  color: black;\n  font-family: \"Roboto\";\n  font-size: 150%; }\n\n.layouts__lwb__image {\n  width: 80vw; }\n\n.layouts__swb__image {\n  width: 40vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnNhLWFwcC9zcmNcXGFwcFxcbGF5b3V0c1xcbGF5b3V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVc7RUFDWCxzQkFBcUI7RUFDckIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxZQUFVLEVBQ1g7O0FBRUQ7RUFDRSxZQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2xheW91dHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0c3tcclxuICBjb2xvcjpibGFjaztcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbi5sYXlvdXRzX19sd2JfX2ltYWdle1xyXG4gIHdpZHRoOjgwdnc7XHJcbn1cclxuXHJcbi5sYXlvdXRzX19zd2JfX2ltYWdle1xyXG4gIHdpZHRoOjQwdnc7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layouts/layouts.component.ts":
/*!**********************************************!*\
  !*** ./src/app/layouts/layouts.component.ts ***!
  \**********************************************/
/*! exports provided: LayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsComponent", function() { return LayoutsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutsComponent = /** @class */ (function () {
    function LayoutsComponent() {
    }
    LayoutsComponent.prototype.ngOnInit = function () {
    };
    LayoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layouts',
            template: __webpack_require__(/*! ./layouts.component.html */ "./src/app/layouts/layouts.component.html"),
            styles: [__webpack_require__(/*! ./layouts.component.scss */ "./src/app/layouts/layouts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutsComponent);
    return LayoutsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxFill>\r\n  <nav class=\"navbar navbar-expand-lg navbar--left\" fxFlex=\"20\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        Versa Connect\r\n      </a>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n      </div>\r\n  </nav>\r\n\r\n  <nav class=\"navbar navbar-expand-lg navbar--right\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Overview</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Offers</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Models</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Factory Fit Options</a>\r\n        </li>\r\n      </ul>\r\n\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  font-family: \"Roboto\";\n  color: white;\n  background-color: #003E78;\n  height: 9vh;\n  line-height: 9vh;\n  padding-left: 2vw;\n  width: 100vw; }\n\n.navbar--right li {\n  padding-right: 2vw; }\n\nnav a {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFxQjtFQUNyQixhQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLFlBQVU7RUFDVixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGFBQVcsRUFDWjs7QUFHRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGFBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM0U3ODtcclxuICBoZWlnaHQ6OXZoO1xyXG4gIGxpbmUtaGVpZ2h0OiA5dmg7XHJcbiAgcGFkZGluZy1sZWZ0OiAydnc7XHJcbiAgd2lkdGg6MTAwdnc7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyLS1yaWdodCBsaXtcclxuICBwYWRkaW5nLXJpZ2h0OiAydnc7XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/offers-button/offers-button.component.html":
/*!************************************************************!*\
  !*** ./src/app/offers-button/offers-button.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"lightbluebutton--body\">View Our Versa Connect Offers</div><br/>-->\r\n<nav class=\"lightbluebutton--body\" [ngStyle]=\"{ 'width': buttonWidth, 'height': buttonHeight, 'line-height': buttonHeight, 'margin-top': marginTop}\">{{buttonText}}</nav><br/>\r\n"

/***/ }),

/***/ "./src/app/offers-button/offers-button.component.scss":
/*!************************************************************!*\
  !*** ./src/app/offers-button/offers-button.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\n.lightbluebutton--body {\n  background-color: #017EDB;\n  text-align: center;\n  color: white;\n  border-radius: 5px;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%); }\n@media only screen and (min-width: 1000px) {\n  .lightbluebutton--body {\n    line-height: 6vh; } }\n@media only screen and (max-width: 1000px) {\n  .lightbluebutton--body {\n    width: 80vw !important;\n    height: 6vh !important;\n    line-height: 6vh !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXJzLWJ1dHRvbi9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnNhLWFwcC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9vZmZlcnMtYnV0dG9uL0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcYXBwXFxvZmZlcnMtYnV0dG9uXFxvZmZlcnMtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUF3QjtBQUt4QiwwQkFBMEI7QUFLMUIsNEJBQTRCO0FBVTVCLDhCQUE4QjtBQUk5QixnQkFBZ0I7QUFTaEIsZ0NBQWdDO0FDekJoQztFQUxFLDBCRHNCa0I7RUNyQmxCLG1CQUFrQjtFQUNsQixhQUFZO0VBS1osbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsbUNBQTBCO1VBQTFCLDJCQUEwQixFQUMzQjtBQUVEO0VBQ0U7SUFDRSxpQkFBZ0IsRUFDakIsRUFBQTtBQUdIO0VBQ0U7SUFDRSx1QkFBc0I7SUFDdEIsdUJBQXNCO0lBQ3RCLDRCQUEyQixFQUM1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvb2ZmZXJzLWJ1dHRvbi9vZmZlcnMtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypXaWRlIFNpdGUgRGltZW5zaW9ucyovXHJcbiRuYXJyb3ctd2lkdGg6IDgwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG5cclxuLypOYXJyb3cgU2l0ZSBEaW1lbnNpb25zKi9cclxuJG5hcnJvdy13aWR0aC1waG9uZTogOTB2dztcclxuJG5hcnJvdy1tYXJnaW4tbGVmdC1waG9uZTogNXZ3O1xyXG4kbmFycm93LW1hcmdpbi1yaWdodC1waG9uZTogNXZ3O1xyXG5cclxuLyogV2lkZSBDYWxsb3V0IERpbWVuc2lvbnMqL1xyXG4kY2FsbG91dC14OiAtNDB2dztcclxuJGNhbGxvdXQteTogLTUwJTtcclxuJGNhbGxvdXQtd2lkdGg6Mjh2dztcclxuJGNhbGxvdXQtaGVpZ2h0OjI1dnc7XHJcbiRjYWxsb3V0LWJhY2tncm91bmQtY29sb3I6IGhzbGEoMzYwLDEwMCUsMTAwJSwuODApO1xyXG4kY2FsbG91dC1jb2xvcjogYmxhY2s7XHJcbiRjYWxsb3V0LXRvcDogNTAlO1xyXG4kY2FsbG91dC1sZWZ0OiA1MCU7XHJcblxyXG4vKiBOYXJyb3cgQ2FsbG91dCBEaW1lbnNpb25zKi9cclxuJGNhbGxvdXQtd2lkdGgtcGhvbmU6MTAwdnc7XHJcbiRjYWxsb3V0LWhlaWdodC1waG9uZToyNXZ3O1xyXG5cclxuLypTaXRlIENvbG91cnMqL1xyXG4kbGlnaHQtYmx1ZTogIzAxN0VEQjtcclxuJGxpZ2h0LWdyZXk6ICNFRkVGRUY7XHJcbiRkYXJrLWJsdWU6ICMwMDNFNzg7XHJcbiRncmVlbjogIzE0QTY1QjtcclxuJGRhcmstZ3JleTogIzQzNDU0RDtcclxuJG1pZC1ncmV5OiAjQTZBOUFBO1xyXG4kbWlkLWRhcmstZ3JleTogIzVGNjI1RjtcclxuXHJcbi8qc2NyZWVuIGJyZWFrcyBmb3IgcmVzcG9uc2l2ZSovXHJcbiRwaG9uZTogMTAwMHB4O1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbkBtaXhpbiBsaWdodGJsdWVidXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpZ2h0Ymx1ZWJ1dHRvbi0tYm9keXtcclxuICBAaW5jbHVkZSBsaWdodGJsdWVidXR0b247XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHBob25lKSB7XHJcbiAgLmxpZ2h0Ymx1ZWJ1dHRvbi0tYm9keXtcclxuICAgIGxpbmUtaGVpZ2h0OiA2dmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwaG9uZSkge1xyXG4gIC5saWdodGJsdWVidXR0b24tLWJvZHl7XHJcbiAgICB3aWR0aDogODB2dyAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2dmggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2dmggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/offers-button/offers-button.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/offers-button/offers-button.component.ts ***!
  \**********************************************************/
/*! exports provided: OffersButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersButtonComponent", function() { return OffersButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OffersButtonComponent = /** @class */ (function () {
    function OffersButtonComponent() {
    }
    OffersButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('text'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OffersButtonComponent.prototype, "buttonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('width'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OffersButtonComponent.prototype, "buttonWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OffersButtonComponent.prototype, "buttonHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('margintop'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OffersButtonComponent.prototype, "marginTop", void 0);
    OffersButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers-button',
            template: __webpack_require__(/*! ./offers-button.component.html */ "./src/app/offers-button/offers-button.component.html"),
            styles: [__webpack_require__(/*! ./offers-button.component.scss */ "./src/app/offers-button/offers-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OffersButtonComponent);
    return OffersButtonComponent;
}());



/***/ }),

/***/ "./src/app/swatches.ts":
/*!*****************************!*\
  !*** ./src/app/swatches.ts ***!
  \*****************************/
/*! exports provided: COLOURS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOURS", function() { return COLOURS; });
var COLOURS = [
    { id: 1, name: 'Frozen White', hexColor: '#E8E7E3', imgURL: '../assets/images/Versa_FrozenWhite.png' },
    { id: 2, name: 'Red', hexColor: '#BA1F1F', imgURL: '../assets/images/Versa_Red.png' },
    { id: 3, name: 'Blazer Blue', hexColor: '#141731', imgURL: '../assets/images/Versa_BlazerBlue.png' },
    { id: 4, name: 'Moondust Silver', hexColor: '#A6A9AA', imgURL: '../assets/images/Versa_Silver.png' },
    { id: 5, name: 'Guard', hexColor: '#898A80', imgURL: '../assets/images/Versa_Guard.png' },
    { id: 6, name: 'Solar', hexColor: '#CCC65D', imgURL: '../assets/images/Versa_Solar.png' },
    { id: 7, name: 'Deep Impact Blue', hexColor: '#1D2F82', imgURL: '../assets/images/Versa_DeepImpactBlue.png' },
    { id: 8, name: 'Shadow Black', hexColor: '#181A1A', imgURL: '../assets/images/Versa_Black.png' },
    { id: 9, name: 'Magnetic', hexColor: '#5F625F', imgURL: '../assets/images/Versa_Magnetic.png' }
];


/***/ }),

/***/ "./src/app/trims/trims.component.html":
/*!********************************************!*\
  !*** ./src/app/trims/trims.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"layouts\" fxLayout=\"column\" fxFill>\r\n    <div class=\"layouts__main\" fxFlex=\"80\">\r\n      <img class=\"layouts__main__top\" src=\"/assets/images/Versa_Interior_1.jpg\">\r\n    </div>\r\n    <div class=\"layouts__detail\" fxLayout=\"row\" fxLayoutGap=\"3.5vw\">\r\n      <div class=\"layouts__main\" fxFlex=\"30\">\r\n        <img class=\"layouts__detail__left\" src=\"/assets/images/Versa_Interior_Seat_Biege.jpg\">\r\n      </div>\r\n      <div class=\"layouts__main\" fxFlex=\"30\">\r\n        <img class=\"layouts__detail__mid\" src=\"/assets/images/Versa_Interior_Seat_Grey.jpg\">\r\n      </div>\r\n      <div class=\"layouts__main\" fxFlex=\"30\">\r\n        <img class=\"layouts__detail__right\" src=\"/assets/images/Versa_Interior_Seat_Black.jpg\">\r\n      </div>\r\n    </div>\r\n    <div class=\"layouts__detail_text\" fxLayout=\"row\" fxLayoutGap=\"3.5vw\">\r\n      <div class=\"layouts__main\" fxFlex=\"30\">\r\n        <div class=\"layouts__detail__text__left--bold\">\r\n          Titanium\r\n        </div>\r\n        <div class=\"layouts__detail__text__left\" fxLayout=\"row\">\r\n          <div class=\"layouts__main\" fxFlex=\"95\">\r\n            Insert: Chicane in Medium Stone<br/>\r\n            Bolster: Malt in Medium Stone\r\n          </div>\r\n          <div class=\"layouts__main\" fxFlex=\"5\">\r\n            <label class=\"container\">\r\n              <input type=\"checkbox\">\r\n              <span class=\"checkmark\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"layouts__main\" fxFlex=\"30\">\r\n        <div class=\"layouts__detail__text__mid--bold\">\r\n          Zetec\r\n        </div>\r\n        <div class=\"layouts__detail__text__mid\" fxLayout=\"row\">\r\n          <div class=\"layouts__main\" fxFlex=\"95\">\r\n            Insert: Route in Charcoal Black<br/>\r\n            Bolster: Max in Charcoal Black\r\n          </div>\r\n          <div class=\"layouts__main\" fxFlex=\"5\">\r\n            <label class=\"container\">\r\n              <input type=\"checkbox\">\r\n              <span class=\"checkmark\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"layouts__main\" fxFlex=\"30\">\r\n        <div class=\"layouts__detail__text__right--bold\">\r\n          Titanium\r\n        </div>\r\n        <div class=\"layouts__detail__text__mid\" fxLayout=\"row\">\r\n          <div class=\"layouts__main\" fxFlex=\"95\">\r\n            Insert: Chicane in Charcoal Black<br/>\r\n            Bolster: Malt in Charcoal Black\r\n          </div>\r\n          <div class=\"layouts__main\" fxFlex=\"5\">\r\n            <label class=\"container\">\r\n              <input type=\"checkbox\" checked=\"checked\">\r\n              <span class=\"checkmark\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trims/trims.component.scss":
/*!********************************************!*\
  !*** ./src/app/trims/trims.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\n.layouts__main__top {\n  width: 80vw;\n  height: 50vh;\n  -o-object-position: 50% 30%;\n     object-position: 50% 30%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.layouts__detail__left {\n  margin-top: 2vh;\n  width: 25vw; }\n.layouts__detail__mid {\n  margin-top: 2vh;\n  width: 25vw; }\n.layouts__detail__right {\n  margin-top: 2vh;\n  width: 25vw; }\n.layouts__detail__text__left--bold {\n  margin-top: 2vh;\n  width: 25vw;\n  font-weight: bold; }\n.layouts__detail__text__mid--bold {\n  margin-top: 2vh;\n  width: 25vw;\n  font-weight: bold; }\n.layouts__detail__text__right--bold {\n  margin-top: 2vh;\n  width: 25vw;\n  font-weight: bold; }\n.container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n/* Create a custom checkbox */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #fff;\n  border: solid 1px #A6A9AA; }\n/* On mouse-over, add a grey background color */\n.container:hover input ~ .checkmark {\n  background-color: #ccc; }\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n  background-color: #A6A9AA; }\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block; }\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n.detail__checkbox {\n  text-align: right;\n  vertical-align: top; }\n.detail__text {\n  background-color: red;\n  width: 30vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpbXMvQzpcXFVzZXJzXFxSb2JlcnRcXERvY3VtZW50c1xcR2l0SHViXFx2ZXJzYS1hcHAvc3JjXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdHJpbXMvQzpcXFVzZXJzXFxSb2JlcnRcXERvY3VtZW50c1xcR2l0SHViXFx2ZXJzYS1hcHAvc3JjXFxhcHBcXHRyaW1zXFx0cmltcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFLeEIsMEJBQTBCO0FBSzFCLDRCQUE0QjtBQVU1Qiw4QkFBOEI7QUFJOUIsZ0JBQWdCO0FBU2hCLGdDQUFnQztBQ3pCaEM7RUFDRSxZQUFVO0VBQ1YsYUFBVztFQUNYLDRCQUF3QjtLQUF4Qix5QkFBd0I7RUFDeEIscUJBQWlCO0tBQWpCLGtCQUFpQixFQUNsQjtBQUVEO0VBWkUsZ0JBQWU7RUFDZixZQUFXLEVBYVo7QUFFRDtFQWhCRSxnQkFBZTtFQUNmLFlBQVcsRUFpQlo7QUFFRDtFQXBCRSxnQkFBZTtFQUNmLFlBQVcsRUFxQlo7QUFFRDtFQXhCRSxnQkFBZTtFQUNmLFlBQVc7RUF5Qlgsa0JBQWlCLEVBQ2xCO0FBRUQ7RUE3QkUsZ0JBQWU7RUFDZixZQUFXO0VBOEJYLGtCQUFpQixFQUNsQjtBQUVEO0VBbENFLGdCQUFlO0VBQ2YsWUFBVztFQW1DWCxrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsMEJBQXlCO0VBQ3pCLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGdCQUFlO0VBQ2YsVUFBUztFQUNULFNBQVEsRUFDVDtBQUVELDhCQUE4QjtBQUM5QjtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLGFBQVk7RUFDWixZQUFXO0VBQ1gsdUJBQXNCO0VBQ3RCLDBCRHpDZ0IsRUMwQ2pCO0FBRUQsZ0RBQWdEO0FBQ2hEO0VBQ0UsdUJBQXNCLEVBQ3ZCO0FBRUQseURBQXlEO0FBQ3pEO0VBQ0UsMEJEbkRnQixFQ29EakI7QUFFRCw4REFBOEQ7QUFDOUQ7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDtBQUVELHFDQUFxQztBQUNyQztFQUNFLGVBQWMsRUFDZjtBQUVELG1DQUFtQztBQUNuQztFQUNFLFVBQVM7RUFDVCxTQUFRO0VBQ1IsV0FBVTtFQUNWLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLGlDQUFnQztFQUVoQyx5QkFBd0IsRUFDekI7QUFFRDtFQUNFLGtCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixZQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC90cmltcy90cmltcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qV2lkZSBTaXRlIERpbWVuc2lvbnMqL1xyXG4kbmFycm93LXdpZHRoOiA4MHZ3O1xyXG4kbmFycm93LW1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4kbmFycm93LW1hcmdpbi1yaWdodDogMTB2dztcclxuXHJcbi8qTmFycm93IFNpdGUgRGltZW5zaW9ucyovXHJcbiRuYXJyb3ctd2lkdGgtcGhvbmU6IDkwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLWxlZnQtcGhvbmU6IDV2dztcclxuJG5hcnJvdy1tYXJnaW4tcmlnaHQtcGhvbmU6IDV2dztcclxuXHJcbi8qIFdpZGUgQ2FsbG91dCBEaW1lbnNpb25zKi9cclxuJGNhbGxvdXQteDogLTQwdnc7XHJcbiRjYWxsb3V0LXk6IC01MCU7XHJcbiRjYWxsb3V0LXdpZHRoOjI4dnc7XHJcbiRjYWxsb3V0LWhlaWdodDoyNXZ3O1xyXG4kY2FsbG91dC1iYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDM2MCwxMDAlLDEwMCUsLjgwKTtcclxuJGNhbGxvdXQtY29sb3I6IGJsYWNrO1xyXG4kY2FsbG91dC10b3A6IDUwJTtcclxuJGNhbGxvdXQtbGVmdDogNTAlO1xyXG5cclxuLyogTmFycm93IENhbGxvdXQgRGltZW5zaW9ucyovXHJcbiRjYWxsb3V0LXdpZHRoLXBob25lOjEwMHZ3O1xyXG4kY2FsbG91dC1oZWlnaHQtcGhvbmU6MjV2dztcclxuXHJcbi8qU2l0ZSBDb2xvdXJzKi9cclxuJGxpZ2h0LWJsdWU6ICMwMTdFREI7XHJcbiRsaWdodC1ncmV5OiAjRUZFRkVGO1xyXG4kZGFyay1ibHVlOiAjMDAzRTc4O1xyXG4kZ3JlZW46ICMxNEE2NUI7XHJcbiRkYXJrLWdyZXk6ICM0MzQ1NEQ7XHJcbiRtaWQtZ3JleTogI0E2QTlBQTtcclxuJG1pZC1kYXJrLWdyZXk6ICM1RjYyNUY7XHJcblxyXG4vKnNjcmVlbiBicmVha3MgZm9yIHJlc3BvbnNpdmUqL1xyXG4kcGhvbmU6IDEwMDBweDtcclxuIiwiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gZGV0YWlse1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICB3aWR0aDogMjV2dztcclxufVxyXG5cclxuXHJcbi5sYXlvdXRzX19tYWluX190b3B7XHJcbiAgd2lkdGg6ODB2dztcclxuICBoZWlnaHQ6NTB2aDtcclxuICBvYmplY3QtcG9zaXRpb246IDUwJSAzMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5sYXlvdXRzX19kZXRhaWxfX2xlZnR7XHJcbiAgQGluY2x1ZGUgZGV0YWlsO1xyXG59XHJcblxyXG4ubGF5b3V0c19fZGV0YWlsX19taWR7XHJcbiAgQGluY2x1ZGUgZGV0YWlsO1xyXG59XHJcblxyXG4ubGF5b3V0c19fZGV0YWlsX19yaWdodHtcclxuICBAaW5jbHVkZSBkZXRhaWw7XHJcbn1cclxuXHJcbi5sYXlvdXRzX19kZXRhaWxfX3RleHRfX2xlZnQtLWJvbGR7XHJcbiAgQGluY2x1ZGUgZGV0YWlsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubGF5b3V0c19fZGV0YWlsX190ZXh0X19taWQtLWJvbGR7XHJcbiAgQGluY2x1ZGUgZGV0YWlsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubGF5b3V0c19fZGV0YWlsX190ZXh0X19yaWdodC0tYm9sZHtcclxuICBAaW5jbHVkZSBkZXRhaWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggJG1pZC1ncmV5O1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWlkLWdyZXk7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbi5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cclxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXHJcbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgbGVmdDogOXB4O1xyXG4gIHRvcDogNXB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLmRldGFpbF9fY2hlY2tib3gge1xyXG4gIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmRldGFpbF9fdGV4dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgd2lkdGg6MzB2dztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/trims/trims.component.ts":
/*!******************************************!*\
  !*** ./src/app/trims/trims.component.ts ***!
  \******************************************/
/*! exports provided: TrimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimsComponent", function() { return TrimsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrimsComponent = /** @class */ (function () {
    function TrimsComponent() {
    }
    TrimsComponent.prototype.ngOnInit = function () {
    };
    TrimsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trims',
            template: __webpack_require__(/*! ./trims.component.html */ "./src/app/trims/trims.component.html"),
            styles: [__webpack_require__(/*! ./trims.component.scss */ "./src/app/trims/trims.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrimsComponent);
    return TrimsComponent;
}());



/***/ }),

/***/ "./src/app/versa-text/versa-text.component.html":
/*!******************************************************!*\
  !*** ./src/app/versa-text/versa-text.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"wrapper--small\">\r\n    <div class=\"versa-text__info\">\r\n      <p>The Versa Connect takes these attributes and focuses on extending them seamlessly into the wheelchair accessible aspects of our vehicle. It is our aim to produce a conversion that is both practical and stylish, with an attention to detail that provides the same high quality look and feel throughout the vehicle.</p>\r\n      <p> The Versa Connect is available in two wheelbases. The Short Versa Connect can accomodate the wheelchair user and up to 3 seated passengers (including the driver) or up to 5 seated passengers without the wheelchair. The Long Versa Connect can accomodate the wheelchair and up to 5 seated passengers (including the driver) or up to 7 seated passengers without the wheelchair.</p>\r\n      <p>Twin sliding doors allow for ease of passenger access with a lightweight manual ramp to the rear for wheelchair access. As an optional extra, the ramp can have the added ability, using a simple lever, to fold flat into the vehicle so that when the whieelchair user is not travelling, a huge ab easily accessible boot space is created making the Versa Connect even more practical.</p>\r\n    </div>\r\n    <app-offers-button [text]=\"text\" [width]=\"width\" [height]=height [margintop]=margintop></app-offers-button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/versa-text/versa-text.component.scss":
/*!******************************************************!*\
  !*** ./src/app/versa-text/versa-text.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Wide Site Dimensions*/\n/*Narrow Site Dimensions*/\n/* Wide Callout Dimensions*/\n/* Narrow Callout Dimensions*/\n/*Site Colours*/\n/*screen breaks for responsive*/\n.wrapper {\n  background-color: #EFEFEF;\n  padding-bottom: 12vh; }\n.wrapper--small {\n  width: 80vw;\n  margin-left: 10vw;\n  padding-top: 6vh;\n  color: black;\n  font-family: \"Roboto\";\n  font-size: 100%; }\n@media only screen and (max-width: 1000px) {\n  .wrapper--small {\n    width: 90vw;\n    margin-left: 5vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyc2EtdGV4dC9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxHaXRIdWJcXHZlcnNhLWFwcC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC92ZXJzYS10ZXh0L0M6XFxVc2Vyc1xcUm9iZXJ0XFxEb2N1bWVudHNcXEdpdEh1YlxcdmVyc2EtYXBwL3NyY1xcYXBwXFx2ZXJzYS10ZXh0XFx2ZXJzYS10ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdCQUF3QjtBQUt4QiwwQkFBMEI7QUFLMUIsNEJBQTRCO0FBVTVCLDhCQUE4QjtBQUk5QixnQkFBZ0I7QUFTaEIsZ0NBQWdDO0FDL0JoQztFQUNFLDBCRHVCa0I7RUN0QmxCLHFCQUFvQixFQUNyQjtBQUVEO0VBQ0UsWURQaUI7RUNRakIsa0JEUHVCO0VDUXZCLGlCQUFpQjtFQUNqQixhQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLGdCQUFlLEVBQ2hCO0FBRUQ7RUFDRTtJQUNFLFlEWnFCO0lDYXJCLGlCRFowQixFQ2EzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmVyc2EtdGV4dC92ZXJzYS10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypXaWRlIFNpdGUgRGltZW5zaW9ucyovXHJcbiRuYXJyb3ctd2lkdGg6IDgwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiRuYXJyb3ctbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG5cclxuLypOYXJyb3cgU2l0ZSBEaW1lbnNpb25zKi9cclxuJG5hcnJvdy13aWR0aC1waG9uZTogOTB2dztcclxuJG5hcnJvdy1tYXJnaW4tbGVmdC1waG9uZTogNXZ3O1xyXG4kbmFycm93LW1hcmdpbi1yaWdodC1waG9uZTogNXZ3O1xyXG5cclxuLyogV2lkZSBDYWxsb3V0IERpbWVuc2lvbnMqL1xyXG4kY2FsbG91dC14OiAtNDB2dztcclxuJGNhbGxvdXQteTogLTUwJTtcclxuJGNhbGxvdXQtd2lkdGg6Mjh2dztcclxuJGNhbGxvdXQtaGVpZ2h0OjI1dnc7XHJcbiRjYWxsb3V0LWJhY2tncm91bmQtY29sb3I6IGhzbGEoMzYwLDEwMCUsMTAwJSwuODApO1xyXG4kY2FsbG91dC1jb2xvcjogYmxhY2s7XHJcbiRjYWxsb3V0LXRvcDogNTAlO1xyXG4kY2FsbG91dC1sZWZ0OiA1MCU7XHJcblxyXG4vKiBOYXJyb3cgQ2FsbG91dCBEaW1lbnNpb25zKi9cclxuJGNhbGxvdXQtd2lkdGgtcGhvbmU6MTAwdnc7XHJcbiRjYWxsb3V0LWhlaWdodC1waG9uZToyNXZ3O1xyXG5cclxuLypTaXRlIENvbG91cnMqL1xyXG4kbGlnaHQtYmx1ZTogIzAxN0VEQjtcclxuJGxpZ2h0LWdyZXk6ICNFRkVGRUY7XHJcbiRkYXJrLWJsdWU6ICMwMDNFNzg7XHJcbiRncmVlbjogIzE0QTY1QjtcclxuJGRhcmstZ3JleTogIzQzNDU0RDtcclxuJG1pZC1ncmV5OiAjQTZBOUFBO1xyXG4kbWlkLWRhcmstZ3JleTogIzVGNjI1RjtcclxuXHJcbi8qc2NyZWVuIGJyZWFrcyBmb3IgcmVzcG9uc2l2ZSovXHJcbiRwaG9uZTogMTAwMHB4O1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi53cmFwcGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnZoO1xyXG59XHJcblxyXG4ud3JhcHBlci0tc21hbGwge1xyXG4gIHdpZHRoOiRuYXJyb3ctd2lkdGg7XHJcbiAgbWFyZ2luLWxlZnQ6ICRuYXJyb3ctbWFyZ2luLWxlZnQ7XHJcbiAgcGFkZGluZy10b3A6ICA2dmg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwaG9uZSkge1xyXG4gIC53cmFwcGVyLS1zbWFsbHtcclxuICAgIHdpZHRoOiAkbmFycm93LXdpZHRoLXBob25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRuYXJyb3ctbWFyZ2luLWxlZnQtcGhvbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/versa-text/versa-text.component.ts":
/*!****************************************************!*\
  !*** ./src/app/versa-text/versa-text.component.ts ***!
  \****************************************************/
/*! exports provided: VersaTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersaTextComponent", function() { return VersaTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VersaTextComponent = /** @class */ (function () {
    function VersaTextComponent() {
        this.text = "View Our Versa Connect Offers";
        this.width = "20vw";
        this.height = "6vh";
        this.margintop = "2vh";
    }
    VersaTextComponent.prototype.ngOnInit = function () {
    };
    VersaTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-versa-text',
            template: __webpack_require__(/*! ./versa-text.component.html */ "./src/app/versa-text/versa-text.component.html"),
            styles: [__webpack_require__(/*! ./versa-text.component.scss */ "./src/app/versa-text/versa-text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VersaTextComponent);
    return VersaTextComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Robert\Documents\GitHub\versa-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map