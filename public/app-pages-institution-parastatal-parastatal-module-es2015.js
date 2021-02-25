(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-institution-parastatal-parastatal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/institution/parastatal/create-parastatal/create-parastatal.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/institution/parastatal/create-parastatal/create-parastatal.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" (ngSubmit)=\"onSubmit(NewParastatalForm.value)\" [formGroup]=\"NewParastatalForm\" novalidate>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <label> Parastatal Name <span class=\"pc-required\">* </span> </label>\r\n            <input type=\"text\" class=\"form-control validation-field\" placeholder=\"Parastatal Name\"\r\n                   formControlName=\"name\">\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label> Parastatal Contact EMail <span class=\"pc-required\">* </span> </label>\r\n                <input type=\"email\" formControlName=\"email\" class=\"form-control validation-field\"\r\n                       placeholder=\"Parastatal contact email\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label> Parastatal Contact Phone <span class=\"pc-required\">* </span> </label>\r\n                <input type=\"text\" class=\"form-control validation-field\"\r\n                       placeholder=\"Parastatal contact phone number\" formControlName=\"phone\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control validation-field\"\r\n                       placeholder=\"Parent Instutition ID\" formControlName=\"institution_id\" hidden>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n                <label> Address Line 1 <span class=\"pc-required\">* </span> </label>\r\n                <textarea formControlName=\"address_line_1\" class=\"form-control validation-field\"\r\n                          placeholder=\"Address Line 1\"> </textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n                <label> Address Line 2 </label>\r\n                <textarea formControlName=\"address_line_2\" class=\"form-control validation-field\"\r\n                          placeholder=\"Address Line 2\"> </textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <label> State <span class=\"pc-required\">* </span> </label>\r\n            <select class=\"form-control custom-select\" formControlName=\"state_id\" #stateBox\r\n                    (change)=\"changeCities(stateBox.value)\">\r\n                <option value=\"\" selected>Select a state</option>\r\n                <option *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <label> City <span class=\"pc-required\">* </span> </label>\r\n            <select class=\"form-control custom-select\" formControlName=\"city_id\">\r\n                <option value=\"0\" selected>City</option>\r\n                <option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n            <label> P.O Box Number <span class=\"pc-required\"></span> </label>\r\n            <input type=\"text\" formControlName=\"pobox_number\" name=\"pobox_number\" class=\"form-control\"\r\n                   placeholder=\"P.O Box Number\">\r\n        </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <button type=\"submit\" *ngIf=\"!loading\" class=\"btn btn-success submit-btn btn-block\">\r\n        <span *ngIf=\"loading\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                                 width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                                 xml:space=\"preserve\">\r\n      <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                            <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\"\r\n                          dur=\"0.5s\" repeatCount=\"indefinite\"\r\n        />\r\n      </path>\r\n    </svg></span>\r\n        {{loading ? '' : 'CREATE NEW PARASTATAL'}}\r\n    </button>\r\n    <br>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/institution/parastatal/minsitry-parastatal/minsitry-parastatal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/institution/parastatal/minsitry-parastatal/minsitry-parastatal.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pageLoading == true\" class=\"full-height\">\r\n    <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         enable-background=\"new 0 0 40 40\"\r\n         height=\"40px\" id=\"loader-1\" version=\"1.1\" viewBox=\"0 0 40 40\" width=\"40px\" x=\"0px\"\r\n         xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\r\n  <path d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n        fill=\"#000\" opacity=\"0.2\"></path>\r\n        <path d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\" fill=\"#000\" transform=\"rotate(0.00000178639 21.8896 21.8896)\">\r\n    <animateTransform attributeName=\"transform\" attributeType=\"xml\" dur=\"0.5s\" from=\"0 20 20\" repeatCount=\"indefinite\"\r\n                      to=\"360 20 20\" type=\"rotate\"></animateTransform>\r\n    </path>\r\n  </svg>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"!pageLoading\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"col-md-12 box-shadow bg-white pt-3\">\r\n            <div class=\"inst-info\">\r\n                <a class=\"btn btn-success\" routerLink=\"/app/ministries\"> <i\r\n                        class=\"fa fa-chevron-left \"></i> back to all institutions</a>\r\n                <hr>\r\n\r\n                <h4><b>Institution Name:</b> {{ministry.name}}</h4>\r\n                <br>\r\n                <h4><b>Institution Code:</b> {{ministry.code}}</h4>\r\n                <br>\r\n                <!--<h4><b>Institution Address:</b> {{ministry.address.address_line_1}}, {{ministry.address.address_line_2}}. {{ministry.address.city}}, {{ministry.address.state}}</h4>-->\r\n                <!--<br>-->\r\n\r\n                <button class=\"btn btn-primary\" [routerLink]=\"['/app/ministries/edit', ministry.id]\">Edit Institution\r\n                </button>\r\n\r\n                <!--<button routerLink=\"/app/create-parastatals\" class=\"btn btn-dark\">Add Parastatals</button>-->\r\n                <button class=\"btn btn-dark\" id=\"toggleCreateParastatal\" data-toggle=\"modal\" data-target=\"#lg-modal\">Add Parastatals</button>\r\n                <br><br>\r\n\r\n\r\n                <h5><b>Parastatals</b></h5>\r\n                <br>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>SN</th>\r\n                            <th>Parastatal Name</th>\r\n                            <th>Parastatal Code</th>\r\n                            <th>Actions</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let parasatal of ministry.parastatals; let i = index\">\r\n                            <td>{{(i + 1)}}</td>\r\n                            <td>{{parasatal.name}}</td>\r\n                            <td>{{parasatal.code}}</td>\r\n                            <td>\r\n                                <div class=\"btn-group\">\r\n                                    <button (click)=\"editParastatal(parasatal, i)\"  class=\"btn btn-secondary btn-sm\">\r\n                                        <i class=\"fa fa-pencil\"></i> Edit\r\n                                    </button>\r\n\r\n                                    <button class=\"btn btn-danger btn-sm\" (click)=\"deleteParastatal(parasatal.id, i)\">\r\n                                        <i class=\"fa fa-trash\"></i> Delete\r\n                                    </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-success\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">CREATE NEW PARASTATAL</h4>\r\n                <button type=\"button\" class=\"close toggle-modal\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                        aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <app-create-parastatal [institution_id]=\"institution_id\"></app-create-parastatal>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"edit-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-success\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label-1\">UPDATE PARASTATAL</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                        aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <app-create-parastatal *ngIf=\"selectedForEdit\" [institution_id]=\"institution_id\" [editData]=\"selectedForEdit\"></app-create-parastatal>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!pageLoading && !ministry\" class=\"full-height\">\r\n    <div class=\"text-danger text-center\"\r\n         [innerHTML]=\"errorMessage || 'Sorry, unable to fetch the requested ministry.'\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/institution/parastatal/create-parastatal/create-parastatal.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/institution/parastatal/create-parastatal/create-parastatal.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0aW9uL3BhcmFzdGF0YWwvY3JlYXRlLXBhcmFzdGF0YWwvY3JlYXRlLXBhcmFzdGF0YWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/institution/parastatal/create-parastatal/create-parastatal.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/institution/parastatal/create-parastatal/create-parastatal.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CreateParastatalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateParastatalComponent", function() { return CreateParastatalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_ministry_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ministry-management.service */ "./src/app/services/ministry-management.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CreateParastatalComponent = class CreateParastatalComponent {
    constructor(formBuilder, ministryManagementService, router) {
        this.formBuilder = formBuilder;
        this.ministryManagementService = ministryManagementService;
        this.router = router;
        this.cities = [];
        this.editData = false;
        this.editMode = false;
        if (this.editData) {
            this.editMode = true;
        }
    }
    ngOnInit() {
        this.buildForm();
        this.getStates();
    }
    buildForm() {
        this.NewParastatalForm = this.formBuilder.group({
            name: [this.editData ? this.editData.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            email: [this.editData ? this.editData.email : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            phone: [this.editData ? this.editData.phone : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])],
            institution_id: [this.institution_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state_id: [(this.editData && this.editData.address) ? this.editData.address.state_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city_id: [(this.editData && this.editData.address) ? this.editData.address.city_id : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            address_line_1: [(this.editData && this.editData.address) ? this.editData.address.address_line_1 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address_line_2: [(this.editData && this.editData.address) ? this.editData.address.address_line_2 : ''],
            pobox_number: [(this.editData && this.editData.address) ? this.editData.address.pobox_number : ''],
        });
    }
    changeCities(value) {
        this.cities = [];
        if (value) {
            for (let x = 0; x < this.states.length; x++) {
                if (this.states[x].id.toString() === value.toString()) {
                    this.cities = this.states[x].cities;
                    break;
                }
            }
        }
    }
    getStates() {
        this.ministryManagementService.getStates().subscribe((states) => {
            this.states = states;
        });
    }
    onSubmit(value) {
        this.loading = true;
        let subscriber = this.ministryManagementService.addParastatal(value);
        if (this.editMode) {
            subscriber = this.ministryManagementService.updateParastatal(this.editData.id, value);
        }
        subscriber.subscribe((parastatal) => {
            if (parastatal) {
                document.getElementById('toggleCreateParastatal').click();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Created!', 'New parastatal created successfully!', 'success');
            }
            this.loading = false;
        }, (err) => {
            this.loading = false;
            _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, this.router, true);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CreateParastatalComponent.prototype, "institution_id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CreateParastatalComponent.prototype, "editData", void 0);
CreateParastatalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-parastatal',
        template: __webpack_require__(/*! raw-loader!./create-parastatal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/institution/parastatal/create-parastatal/create-parastatal.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./create-parastatal.component.scss */ "./src/app/pages/institution/parastatal/create-parastatal/create-parastatal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_ministry_management_service__WEBPACK_IMPORTED_MODULE_3__["MinistryManagementService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], CreateParastatalComponent);



/***/ }),

/***/ "./src/app/pages/institution/parastatal/minsitry-parastatal/minsitry-parastatal.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/institution/parastatal/minsitry-parastatal/minsitry-parastatal.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0aW9uL3BhcmFzdGF0YWwvbWluc2l0cnktcGFyYXN0YXRhbC9taW5zaXRyeS1wYXJhc3RhdGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/institution/parastatal/minsitry-parastatal/minsitry-parastatal.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/institution/parastatal/minsitry-parastatal/minsitry-parastatal.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MinsitryParastatalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinsitryParastatalComponent", function() { return MinsitryParastatalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_ministry_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/ministry-management.service */ "./src/app/services/ministry-management.service.ts");






let MinsitryParastatalComponent = class MinsitryParastatalComponent {
    constructor(ministryManagementService, route, router) {
        this.ministryManagementService = ministryManagementService;
        this.route = route;
        this.router = router;
        this.errorMessage = '';
        this.selectedForEdit = false;
        this.ministry = {
            name: '',
            code: '',
            email: '',
            phone: '',
            address: {
                address_line_1: '',
                address_line_2: '',
                state: '',
                city: ''
            },
            pobox_number: '',
            created_by: '',
            updated_by: '',
            created_at: '',
            updated_at: '',
        };
        this.showUpdate = false;
    }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.getMinistryById(id);
        this.institution_id = id;
    }
    getMinistryById(id) {
        this.pageLoading = true;
        this.errorMessage = '';
        this.ministryManagementService.getMinistryByID(id).subscribe((ministry) => {
            this.ministry = ministry;
            this.pageLoading = false;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].handleError(err, this.router);
            this.pageLoading = false;
        });
    }
    editParastatal(parastatal) {
    }
    deleteParastatal(id, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Confirmation',
            text: 'Do you want to delete this parastatal?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(willDelete => {
            if (willDelete.value) {
                this.ministryManagementService.deleteParastatal(id).subscribe(deleted => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Institution has been deleted!', 'success');
                    this.ministry.parastatals.splice(i, 1);
                }, (err) => {
                    _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].handleError(err, this.router, true);
                });
            }
        });
    }
};
MinsitryParastatalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-minsitry-parastatal',
        template: __webpack_require__(/*! raw-loader!./minsitry-parastatal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/institution/parastatal/minsitry-parastatal/minsitry-parastatal.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./minsitry-parastatal.component.scss */ "./src/app/pages/institution/parastatal/minsitry-parastatal/minsitry-parastatal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ministry_management_service__WEBPACK_IMPORTED_MODULE_5__["MinistryManagementService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], MinsitryParastatalComponent);



/***/ }),

/***/ "./src/app/pages/institution/parastatal/parastatal.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/institution/parastatal/parastatal.module.ts ***!
  \*******************************************************************/
/*! exports provided: routes, ParastatalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParastatalModule", function() { return ParastatalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _minsitry_parastatal_minsitry_parastatal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minsitry-parastatal/minsitry-parastatal.component */ "./src/app/pages/institution/parastatal/minsitry-parastatal/minsitry-parastatal.component.ts");
/* harmony import */ var _create_parastatal_create_parastatal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-parastatal/create-parastatal.component */ "./src/app/pages/institution/parastatal/create-parastatal/create-parastatal.component.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");










const routes = [
    { path: ':id', component: _minsitry_parastatal_minsitry_parastatal_component__WEBPACK_IMPORTED_MODULE_6__["MinsitryParastatalComponent"] },
];
let ParastatalModule = class ParastatalModule {
};
ParastatalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_minsitry_parastatal_minsitry_parastatal_component__WEBPACK_IMPORTED_MODULE_6__["MinsitryParastatalComponent"], _create_parastatal_create_parastatal_component__WEBPACK_IMPORTED_MODULE_7__["CreateParastatalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_8__["CustomErrorModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], ParastatalModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-institution-parastatal-parastatal-module-es2015.js.map