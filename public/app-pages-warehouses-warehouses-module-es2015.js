(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-warehouses-warehouses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/warehouses/create-warehouse/create-warehouse.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/warehouses/create-warehouse/create-warehouse.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 offset-lg-3\">\r\n    <div class=\"card border-0 box-shadow rounded-2\">\r\n        <div class=\"\">\r\n            <h3>Add A Warehouse\r\n                <button routerLink=\"/app/warehouses\" class=\"btn btn-success pull-right\"><i class=\"fa fa-list\"></i>\r\n                    Warehouse List\r\n                </button>\r\n            </h3>\r\n            <hr>\r\n        </div>\r\n\r\n        <form class=\"form pb-3\" [formGroup]=\"newForm\" (submit)=\"onSubmit()\" novalidate>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Warehouse Name<sup class=\"asterisk\">*</sup></label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Address Line 1<sup class=\"asterisk\">*</sup></label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"address_line_1\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Address Line 2</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"address_line_2\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>State<sup class=\"asterisk\">*</sup></label>\r\n                        <select class=\"form-control\" formControlName=\"state_id\" #statesbox\r\n                                (change)=\"changeCities(statesbox.value)\">\r\n                            <option value=\"\" selected>Select a state</option>\r\n                            <option *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>City<sup class=\"asterisk\">*</sup></label>\r\n                        <select class=\"form-control\" formControlName=\"city_id\">\r\n                            <option value=\"0\" selected>City</option>\r\n                            <option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>P.O Box</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pobox_number\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <button [disabled]=\"!newForm.valid || loading\" class=\"btn btn-success btn-block submit-btn\">\r\n                <span *ngIf=\"loading\">\r\n                    <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                         xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                         width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                         xml:space=\"preserve\">\r\n      <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                    <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\"\r\n                          dur=\"0.5s\" repeatCount=\"indefinite\"\r\n        />\r\n      </path>\r\n    </svg>\r\n                </span>\r\n                {{loading ? '' : 'Add New Record'}}\r\n            </button>\r\n\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/warehouses/edit-warehouse/edit-warehouse.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/warehouses/edit-warehouse/edit-warehouse.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pageLoading == true\" class=\"full-height\">\r\n    <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         enable-background=\"new 0 0 40 40\"\r\n         height=\"40px\" id=\"loader-1\" version=\"1.1\" viewBox=\"0 0 40 40\" width=\"40px\" x=\"0px\"\r\n         xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\r\n  <path d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n        fill=\"#000\" opacity=\"0.2\"></path>\r\n        <path d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\" fill=\"#000\" transform=\"rotate(0.00000178639 21.8896 21.8896)\">\r\n    <animateTransform attributeName=\"transform\" attributeType=\"xml\" dur=\"0.5s\" from=\"0 20 20\" repeatCount=\"indefinite\"\r\n                      to=\"360 20 20\" type=\"rotate\"></animateTransform>\r\n    </path>\r\n  </svg>\r\n</div>\r\n<div class=\"container\" *ngIf=\"!pageLoading && warehouse\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 offset-lg-3 box-shadow form-holder\">\r\n            <div class=\"card border-0 \">\r\n                <div class=\"card-block pt-3 \">\r\n                    <h3>{{warehouse.name}}\r\n                        <button routerLink=\"/app/dashboard\" class=\"btn btn-success pull-right\"><i\r\n                                class=\"fa fa-caret-left\"></i> back to dashboard\r\n                        </button>\r\n                    </h3>\r\n                    <hr>\r\n                    <form class=\"form\" [formGroup]=\"updateWarehouseForm\" (submit)=\"onSubmit(updateWarehouseForm)\"\r\n                          novalidate>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Warehouse Name<sup class=\"asterisk\">*</sup></label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Address Line 1<sup class=\"asterisk\">*</sup></label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"address_line_1\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Address Line 2</label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"address_line_2\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label>State<sup class=\"asterisk\">*</sup></label>\r\n                                    <select class=\"form-control\" formControlName=\"state_id\" #statesbox\r\n                                            (change)=\"changeCities(statesbox.value)\">\r\n                                        <option value=\"\" selected>Select a state</option>\r\n                                        <option *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label>City<sup class=\"asterisk\">*</sup></label>\r\n                                    <select class=\"form-control\" formControlName=\"city_id\">\r\n                                        <option value=\"\" selected>Select a City</option>\r\n                                        <option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label>P.O Box</label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"pobox_number\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <button [disabled]=\"loading\" class=\"btn btn-block submit-btn mt-3\">\r\n                          <app-small-loader *ngIf=\"loading\"></app-small-loader>\r\n                            {{loading ? '' : 'Update Warehouse Information'}}\r\n                        </button>\r\n                        <br>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!pageLoading && !warehouse\" class=\"full-height\">\r\n    <div class=\"text-danger text-center\"\r\n         [innerHTML]=\"errorMessage || 'Sorry, unable to fetch the requested user record.'\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/warehouses/warehouse-list/warehouse-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/warehouses/warehouse-list/warehouse-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <h4 class=\"my-2\">Warehouses</h4>\r\n            <form class=\"form-group\" [formGroup]=\"searchForm\" (submit)=\"submitSearch()\">\r\n                <div class=\"input-group box-shadow\">\r\n                    <a class=\"btn btn-success mr-2\" *ngIf=\"isVendor\" routerLink=\"/app/warehouses/create\">\r\n                        <i class=\"fa fa-plus\"></i> Add new warehouse </a>\r\n\r\n                    <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                    </div>\r\n                    <input type=\"text\" formControlName=\"searchField\" placeholder=\"Search warehouse by name...\"\r\n                           class=\"form-control border-0 mr-2\">\r\n\r\n                    <div *ngIf=\"!isVendor\"\r\n                         class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\">\r\n                        Vendor\r\n                    </div>\r\n                    <select class=\"form-control mr-2\" title=\"Select a vendor\" #vendor *ngIf=\"!isVendor\"\r\n                            formControlName=\"vendor_id\">\r\n                        <option value=\"\">Select vendor</option>\r\n                        <option *ngFor=\"let vendor of vendors\" value=\"{{vendor.id}}\">{{vendor.business_name}}</option>\r\n                    </select>\r\n                    <button class=\"btn btn-success\"><i class=\"fa fa-search\"></i> Search</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 mt-3\">\r\n            <div class=\"table-responsive bg-white box-shadow\">\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                    <tr>\r\n                    <th class=\"text-truncate\">SN</th>\r\n                    <th class=\"text-truncate\">Name</th>\r\n                    <th class=\"text-truncate\">Address</th>\r\n                    <th class=\"text-truncate\">State</th>\r\n                    <th class=\"text-truncate\">City</th>\r\n                    <th class=\"text-truncate\">Date Created</th>\r\n                    <th *ngIf=\"isVendor || can(permissions.delete_warehouses)\" class=\"text-truncate\">Actions</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let warehouse of warehouses; let i = index\">\r\n                        <td>{{(i + 1)}}</td>\r\n                        <td>{{warehouse.name}}</td>\r\n                        <td>{{warehouse.address ? warehouse.address.address_line_1 : ''}} <br>\r\n                            {{warehouse.address ? warehouse.address.address_line_2 : ''}}\r\n                        </td>\r\n                        <td>{{warehouse.address && warehouse.address.state ? warehouse.address.state.name : ''}}</td>\r\n                        <td>{{warehouse.address && warehouse.address.city ? warehouse.address.city.name : ''}}</td>\r\n                        <td class=\"text-left\">{{warehouse.time_created}}</td>\r\n                        <td *ngIf=\"isVendor || can(permissions.delete_warehouses)\">\r\n                            <div class=\"btn-group\" role=\"group\">\r\n                                <a routerLink=\"/app/warehouses/edit/{{warehouse.id}}\"\r\n                                   class=\"btn btn-success text-white btn-primary btn-sm\"><i class=\"fa fa-pencil\"></i> Edit</a>\r\n                                <button (click)=\"deleteWarehouse(warehouse, i)\"\r\n                                        class=\"btn btn-danger text-white btn-sm\"><i class=\"fa fa-trash\"></i> Delete\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"!searching && (!warehouses?.length) && !errorMessage  && isVendor\">\r\n                        <td colspan=\"8\" class=\"text-center\"> You haven't added any warehouses. Use the\r\n                            <span class=\"text-danger\">Add Warehouse </span> above to get started <i\r\n                                    class=\"fa fa-exclamation-triangle red\" aria-hidden=\"true\"></i>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(!warehouses?.length) && !searching && !isVendor && !errorMessage\">\r\n                        <td colspan=\"8\" class=\"text-center\">Sorry, no result to show...</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"searching && !errorMessage\">\r\n                        <td colspan=\"8\" class=\"text-center\">\r\n                            <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                                 enable-background=\"new 0 0 40 40\" height=\"40px\" id=\"loader-1\" version=\"1.1\"\r\n                                 viewBox=\"0 0 40 40\" width=\"40px\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\r\n  <path d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n        fill=\"#000\" opacity=\"0.2\"></path>\r\n                                <path d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\" fill=\"#000\" transform=\"rotate(0.00000178639 21.8896 21.8896)\">\r\n    <animateTransform attributeName=\"transform\" attributeType=\"xml\" dur=\"0.5s\" from=\"0 20 20\" repeatCount=\"indefinite\"\r\n                      to=\"360 20 20\" type=\"rotate\"></animateTransform>\r\n    </path>\r\n  </svg>\r\n                            <br>\r\n                            Fetching result, please wait...</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"errorMessage\">\r\n                        <td colspan=\"7\" class=\"text-center\" [innerHTML]=\"errorMessage\"></td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"mapbox-wrapper\">\r\n                <div class=\"bg-white box-shadow mapbox\" *ngIf=\"warehouses && warehouses.length\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\">\r\n                        <agm-marker *ngFor=\"let wh of locations\" [latitude]=\"wh.longitude\"\r\n                                    [longitude]=\"wh.latitude\" [markerDraggable]=\"true\" [label]=\"wh.description\">\r\n                        </agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/warehouses/create-warehouse/create-warehouse.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/warehouses/create-warehouse/create-warehouse.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2FyZWhvdXNlcy9jcmVhdGUtd2FyZWhvdXNlL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFx3YXJlaG91c2VzXFxjcmVhdGUtd2FyZWhvdXNlXFxjcmVhdGUtd2FyZWhvdXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy93YXJlaG91c2VzL2NyZWF0ZS13YXJlaG91c2UvY3JlYXRlLXdhcmVob3VzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhcmVob3VzZXMvY3JlYXRlLXdhcmVob3VzZS9jcmVhdGUtd2FyZWhvdXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iLCIuY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/warehouses/create-warehouse/create-warehouse.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/warehouses/create-warehouse/create-warehouse.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateWarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWarehouseComponent", function() { return CreateWarehouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_vendor_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/vendor-data.service */ "./src/app/services/vendor-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CreateWarehouseComponent = class CreateWarehouseComponent {
    constructor(vendorDataService, router, formBuilder) {
        this.vendorDataService = vendorDataService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.states = [];
        this.cities = [];
        this.errorMessage = '';
    }
    ngOnInit() {
        this.buildForm();
        this.getStates();
    }
    buildForm() {
        this.newForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            address_line_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            city_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            state_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            address_line_2: [''],
            pobox_number: ['']
        });
    }
    onSubmit() {
        this.loading = true;
        this.errorMessage = '';
        this.vendorDataService.addWarehouse(this.newForm.value).subscribe((resp) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].succeeded(resp.message);
            this.newForm.reset();
            this.loading = false;
        }, (err) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router, true);
            this.loading = false;
        });
    }
    getStates() {
        this.vendorDataService.getStates().subscribe((states) => {
            this.states = states;
        }, (err) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router, true);
        });
    }
    changeCities(v) {
        this.cities = [];
        this.newForm.patchValue({ 'city_id': '' });
        if (!v) {
            return;
        }
        this.states.forEach((state) => {
            if (state.id.toString() === v.toString()) {
                this.cities = state.cities;
            }
        });
    }
};
CreateWarehouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-warehouse',
        template: __webpack_require__(/*! raw-loader!./create-warehouse.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/warehouses/create-warehouse/create-warehouse.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./create-warehouse.component.scss */ "./src/app/pages/warehouses/create-warehouse/create-warehouse.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_vendor_data_service__WEBPACK_IMPORTED_MODULE_4__["VendorDataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], CreateWarehouseComponent);



/***/ }),

/***/ "./src/app/pages/warehouses/edit-warehouse/edit-warehouse.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/warehouses/edit-warehouse/edit-warehouse.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhcmVob3VzZXMvZWRpdC13YXJlaG91c2UvZWRpdC13YXJlaG91c2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/warehouses/edit-warehouse/edit-warehouse.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/warehouses/edit-warehouse/edit-warehouse.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditWarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWarehouseComponent", function() { return EditWarehouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_vendor_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/vendor-data.service */ "./src/app/services/vendor-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");






let EditWarehouseComponent = class EditWarehouseComponent {
    constructor(vendorDataService, router, route, formBuilder) {
        this.vendorDataService = vendorDataService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.states = [];
        this.cities = [];
        this.errorMessage = '';
        this.warehouse = null;
    }
    ngOnInit() {
        const warehouse_id = this.route.snapshot.params['id'];
        this.getStates();
        this.getWarehouse(warehouse_id);
        this.buildForm();
    }
    buildForm() {
        this.updateWarehouseForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address_line_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address_line_2: [''],
            pobox_number: [''],
            state_id: [''],
            city_id: [''],
        });
    }
    getWarehouse(warehouse_id) {
        this.pageLoading = true;
        this.vendorDataService.getWarehouseByID(warehouse_id).subscribe((warehouse) => {
            this.pageLoading = false;
            if (!warehouse) {
                return;
            }
            this.warehouse = warehouse;
            if (warehouse.address.state_id) {
                this.states.forEach((state) => {
                    if (state.id.toString() === warehouse.address.state_id.toString()) {
                        this.cities = state.cities;
                    }
                });
            }
            this.updateWarehouseForm.patchValue({
                name: this.warehouse.name,
                address_line_1: this.warehouse.address ? this.warehouse.address.address_line_1 : '',
                address_line_2: this.warehouse.address ? this.warehouse.address.address_line_2 : '',
                pobox_number: this.warehouse.address ? this.warehouse.address.pobox_number : '',
                state_id: this.warehouse.address ? this.warehouse.address.state_id : '',
                city_id: this.warehouse.address ? this.warehouse.address.city_id : ''
            });
            this.pageLoading = false;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, this.router);
            this.pageLoading = false;
        });
    }
    onSubmit({ value, valid }) {
        value.id = this.warehouse.id;
        this.loading = true;
        if (value.id) {
            this.vendorDataService.updateWarehouse(value).subscribe((warehouse) => {
                if (warehouse) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].succeeded('Warehouse information successfully updated');
                }
                this.loading = false;
            }, (err) => {
                _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, this.router, true);
                this.loading = false;
            });
        }
    }
    getStates() {
        this.vendorDataService.getStates().subscribe((states) => {
            this.states = states;
        }, (err) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, this.router, true);
        });
    }
    changeCities(v) {
        this.cities = [];
        this.updateWarehouseForm.patchValue({ 'city_id': '' });
        if (!v) {
            return;
        }
        this.states.forEach((state) => {
            if (state.id.toString() === v.toString()) {
                this.cities = state.cities;
            }
        });
    }
};
EditWarehouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-warehouse',
        template: __webpack_require__(/*! raw-loader!./edit-warehouse.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/warehouses/edit-warehouse/edit-warehouse.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./edit-warehouse.component.scss */ "./src/app/pages/warehouses/edit-warehouse/edit-warehouse.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_vendor_data_service__WEBPACK_IMPORTED_MODULE_2__["VendorDataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], EditWarehouseComponent);



/***/ }),

/***/ "./src/app/pages/warehouses/warehouse-list/warehouse-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/warehouses/warehouse-list/warehouse-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-icon {\n  background: #0DB28B;\n  color: white;\n}\n\n.mapbox-wrapper {\n  margin-bottom: 20px;\n}\n\n.mapbox {\n  height: 400px;\n}\n\n.mapbox h2 {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2FyZWhvdXNlcy93YXJlaG91c2UtbGlzdC9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXFByb2plY3RzXFxJbG9yIHRlY2hub2xvZ2llcyBsdGRcXGlsb3ItcGMtd2ViL3NyY1xcYXBwXFxwYWdlc1xcd2FyZWhvdXNlc1xcd2FyZWhvdXNlLWxpc3RcXHdhcmVob3VzZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy93YXJlaG91c2VzL3dhcmVob3VzZS1saXN0L3dhcmVob3VzZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBREFFO0VBQ0UsYUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2FyZWhvdXNlcy93YXJlaG91c2UtbGlzdC93YXJlaG91c2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtaWNvbntcclxuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWFwYm94LXdyYXBwZXJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuLm1hcGJveCB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgaDJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi5zZWFyY2gtaWNvbiB7XG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hcGJveC13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1hcGJveCB7XG4gIGhlaWdodDogNDAwcHg7XG59XG4ubWFwYm94IGgyIHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/warehouses/warehouse-list/warehouse-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/warehouses/warehouse-list/warehouse-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WarehouseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseListComponent", function() { return WarehouseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_vendor_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/vendor-data.service */ "./src/app/services/vendor-data.service.ts");
/* harmony import */ var _services_vendor_goods_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/vendor-goods.service */ "./src/app/services/vendor-goods.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");











// import {} from '@types/googlemaps';
let WarehouseListComponent = class WarehouseListComponent {
    constructor(formBuilder, vendorDataService, goodsService, router, mapsApiLoader) {
        this.formBuilder = formBuilder;
        this.vendorDataService = vendorDataService;
        this.goodsService = goodsService;
        this.router = router;
        this.mapsApiLoader = mapsApiLoader;
        this.warehouses = [];
        this.searching = false;
        this.errorMessage = 'Search for a warehouse';
        this.lat = 9.442054;
        this.lng = 9.0262185;
        this.zoom = 7;
        this.canAddWarehouse = false;
        this.vendors = [];
        this.oid = localStorage.getItem('oid');
        this.locations = [];
        this.canAddWarehouse = this.can(this.permissions.add_warehouses);
    }
    get permissions() {
        return _data__WEBPACK_IMPORTED_MODULE_8__["AppData"].permissions;
    }
    can(permission) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"].can(permission);
    }
    get isVendor() {
        return (_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].getAuthenticatedUser() || {}).r === _data__WEBPACK_IMPORTED_MODULE_8__["AppData"].roles.vendor;
    }
    ngOnInit() {
        const config = {
            searchField: [''],
            vendor_id: ''
        };
        if (this.isVendor) {
            config.vendor_id = this.oid;
        }
        this.searchForm = this.formBuilder.group(config);
        if (!this.isVendor) {
            this.errorMessage = 'Select a vendor to show list of warehouses.';
            this.loadVendors();
        }
        else {
            this.submitSearch();
        }
    }
    loadVendors() {
        this.goodsService.getVendors().subscribe((vendors) => {
            this.vendors = vendors;
            if (this.vendors.length < 1) {
                this.errorMessage = 'No vendor available on this platform yet';
            }
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router);
        });
    }
    // getGeocode(city: string, state: string): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         const address = city + ' ' + state + ', Nigeria';
    //         let defaultLocation: ILocation;
    //         this.mapsApiLoader.load().then(() => {
    //             const geoCoder = new google.maps.Geocoder();
    //             geoCoder.geocode({'address': address}, function (results, status) {
    //                 if (status === google.maps.GeocoderStatus.OK) {
    //                     const latLng: any = results[0].geometry.location;
    //                     defaultLocation = {
    //                         latitude: latLng.lat(),
    //                         longitude: latLng.lng()
    //                     };
    //                     resolve(defaultLocation);
    //                 } else {
    //                     defaultLocation = {
    //                         latitude: 9.442054,
    //                         longitude: 9.0262185
    //                     };
    //                     reject(defaultLocation);
    //                 }
    //             });
    //         })
    //     });
    // }
    getWarehouses(params) {
        this.searching = true;
        this.errorMessage = '';
        this.vendorDataService.getWarehousesWithParam(params).subscribe((warehouses) => {
            this.locations = [];
            if (warehouses) {
                this.warehouses = warehouses;
                // warehouses.forEach((data) => {
                // if (data.address && data.address.city && data.address.state) {
                // this.getGeocode(data.address.state, data.address.city).then((res) => {
                //     const d = {
                //         longitude: res.longitude,
                //         latitude: res.latitude,
                //         description: data.address.city + ', ' + data.address.state + ' state'
                //     };
                //     this.locations.push(d);
                // }, (err) => {
                // });
                // }
                // });
            }
            else {
                this.warehouses = [];
            }
            if (this.warehouses.length) {
                this.errorMessage = '';
            }
            else {
                this.errorMessage = 'No result to show';
            }
            this.searching = false;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router);
            this.searching = false;
        });
    }
    submitSearch() {
        const searchText = this.searchForm.get('searchField').value;
        this.warehouses = [];
        let param = '';
        if (searchText) {
            param += 'search=' + searchText;
        }
        if (!this.isVendor) {
            const vendor = this.searchForm.get('vendor_id').value;
            if (!vendor) {
                this.errorMessage = 'Select a vendor to search for warehouse';
                return;
            }
            if (param) {
                param += '&';
            }
            param += 'vendor=' + vendor;
        }
        if (param) {
            param = '?' + param;
        }
        this.getWarehouses(param);
    }
    deleteWarehouse(warehouse, i) {
        this.errorMessage = '';
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Confirm delete',
            text: 'Do you want to delete this warehouse?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(willDelete => {
            if (willDelete.value) {
                this.vendorDataService.deleteWarehouse(warehouse.id).subscribe((response) => {
                    this.warehouses.splice(i, 1);
                    _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].succeeded('Warehouse record deleted successfully');
                }, (err) => {
                    _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router, true);
                });
            }
        });
    }
};
WarehouseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-warehouse-list',
        template: __webpack_require__(/*! raw-loader!./warehouse-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/warehouses/warehouse-list/warehouse-list.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./warehouse-list.component.scss */ "./src/app/pages/warehouses/warehouse-list/warehouse-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_vendor_data_service__WEBPACK_IMPORTED_MODULE_5__["VendorDataService"],
        _services_vendor_goods_service__WEBPACK_IMPORTED_MODULE_6__["VendorGoodsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["MapsAPILoader"]])
], WarehouseListComponent);



/***/ }),

/***/ "./src/app/pages/warehouses/warehouses.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/warehouses/warehouses.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, WarehousesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesModule", function() { return WarehousesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _warehouse_list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse-list/warehouse-list.component */ "./src/app/pages/warehouses/warehouse-list/warehouse-list.component.ts");
/* harmony import */ var _create_warehouse_create_warehouse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-warehouse/create-warehouse.component */ "./src/app/pages/warehouses/create-warehouse/create-warehouse.component.ts");
/* harmony import */ var _edit_warehouse_edit_warehouse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-warehouse/edit-warehouse.component */ "./src/app/pages/warehouses/edit-warehouse/edit-warehouse.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");












const routes = [
    { path: 'create', component: _create_warehouse_create_warehouse_component__WEBPACK_IMPORTED_MODULE_4__["CreateWarehouseComponent"] },
    { path: 'edit/:id', component: _edit_warehouse_edit_warehouse_component__WEBPACK_IMPORTED_MODULE_5__["EditWarehouseComponent"] },
    { path: '', redirectTo: '/app/warehouses/list', pathMatch: 'full' },
    { path: 'list', component: _warehouse_list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_3__["WarehouseListComponent"] },
];
let WarehousesModule = class WarehousesModule {
};
WarehousesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_warehouse_list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_3__["WarehouseListComponent"], _create_warehouse_create_warehouse_component__WEBPACK_IMPORTED_MODULE_4__["CreateWarehouseComponent"], _edit_warehouse_edit_warehouse_component__WEBPACK_IMPORTED_MODULE_5__["EditWarehouseComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_10__["CustomErrorModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_11__["LoaderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyApVJI8RrUJg7UsWeja6ZSq7v3g-n-fWTQ'
            })
        ]
    })
], WarehousesModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-warehouses-warehouses-module-es2015.js.map