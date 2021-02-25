(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-institution-institution-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/institution/create-ministry/create-ministry.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/institution/create-ministry/create-ministry.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 offset-lg-3\">\r\n    <div class=\"card border-0 box-shadow rounded-2\">\r\n        <div class=\"card-block pt-3\">\r\n            <h3>Create A New Institution</h3>\r\n            <hr>\r\n            <form class=\"form\" (ngSubmit)=\"onSubmit(NewMinistryForm.value)\" [formGroup]=\"NewMinistryForm\" novalidate>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label> Institution Name <span class=\"pc-required\">* </span> </label>\r\n                            <input formControlName=\"name\" class=\"form-control validation-field\" type=\"text\"\r\n                                   placeholder=\"Ministry Name\">\r\n\r\n                            <small class=\"text-danger\" *ngIf=\"NewMinistryForm.get('name').touched\">\r\n                                <span *ngIf=\"NewMinistryForm.get('name').hasError('required')\">Ministry Name is required</span>\r\n\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label> Institution Contact E-mail <span class=\"pc-required\">* </span> </label>\r\n\r\n                            <input type=\"email\" formControlName=\"email\" class=\"form-control validation-field\"\r\n                                   placeholder=\"Institution contact e-mail\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label> Phone <span class=\"pc-required\">* </span> </label>\r\n                            <input type=\"text\" formControlName=\"phone\" class=\"form-control validation-field\"\r\n                                   placeholder=\"Institution contact phone number\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label> Address Line 1 <span class=\"pc-required\">* </span> </label>\r\n                            <textarea formControlName=\"address_line_1\" class=\"form-control validation-field\"\r\n                                      placeholder=\"Address Line1\"> </textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label> Address Line 2 </label>\r\n                            <textarea formControlName=\"address_line_2\" class=\"form-control validation-field\"\r\n                                      placeholder=\"Address Line2\"> </textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label> State <span class=\"pc-required\">* </span> </label>\r\n                        <select class=\"form-control custom-select\" formControlName=\"state_id\" #stateBox\r\n                                (change)=\"changeCities(stateBox.value)\">\r\n                            <option value=\"\" selected>Select a state</option>\r\n                            <option *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <label> City <span class=\"pc-required\">* </span> </label>\r\n                        <select class=\"form-control custom-select\" formControlName=\"city_id\">\r\n                            <option value=\"0\" selected>City</option>\r\n                            <option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <label> P.O Box Number <span class=\"pc-required\">* </span> </label>\r\n                        <input type=\"text\" formControlName=\"pobox_number\" name=\"pobox_number\" class=\"form-control\"\r\n                               placeholder=\"P.O Box Number\">\r\n                    </div>\r\n                </div>\r\n                <br>\r\n\r\n                <button type=\"submit\" [disabled]=\"!NewMinistryForm.valid || loading\" class=\"btn submit-btn btn-block\">\r\n                    <span *ngIf=\"loading\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                                 width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                                 xml:space=\"preserve\">\r\n      <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                            <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\"\r\n                          dur=\"0.5s\" repeatCount=\"indefinite\"\r\n        />\r\n      </path>\r\n    </svg></span>\r\n                    {{loading ? '' : 'CREATE NEW INSTITUTION'}}\r\n                </button>\r\n                <br>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/institution/edit-ministry/edit-ministry.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/institution/edit-ministry/edit-ministry.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pageLoading == true\" class=\"full-height\">\r\n    <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         enable-background=\"new 0 0 40 40\"\r\n         height=\"40px\" id=\"loader-1\" version=\"1.1\" viewBox=\"0 0 40 40\" width=\"40px\" x=\"0px\"\r\n         xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\r\n  <path d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n        fill=\"#000\" opacity=\"0.2\"></path>\r\n        <path d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\" fill=\"#000\" transform=\"rotate(0.00000178639 21.8896 21.8896)\">\r\n    <animateTransform attributeName=\"transform\" attributeType=\"xml\" dur=\"0.5s\" from=\"0 20 20\" repeatCount=\"indefinite\"\r\n                      to=\"360 20 20\" type=\"rotate\"></animateTransform>\r\n    </path>\r\n  </svg>\r\n</div>\r\n\r\n<div class=\"col-md-6 offset-md-3\" *ngIf=\"!pageLoading\">\r\n    <div class=\"card border-0 box-shadow rounded-2\">\r\n        <div class=\"card-block pt-3\">\r\n            <h3>Update {{ministry.name}}</h3>\r\n            <hr>\r\n            <br>\r\n            <form class=\"form\" (ngSubmit)=\"onSubmit(UpdateMinistryForm.value)\" [formGroup]=\"UpdateMinistryForm\"\r\n                  novalidate>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label> Institution Name <span class=\"pc-required\">* </span> </label>\r\n                            <input formControlName=\"name\" class=\"form-control validation-field\" type=\"text\"\r\n                                   placeholder=\"Ministry Name\">\r\n\r\n                            <small class=\"text-danger\" *ngIf=\"UpdateMinistryForm.get('name').touched\">\r\n                                <span *ngIf=\"UpdateMinistryForm.get('name').hasError('required')\">Institution Name is required</span>\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label> Institution Contact E-mail <span class=\"pc-required\">* </span> </label>\r\n\r\n                            <input type=\"email\" formControlName=\"email\" class=\"form-control validation-field\"\r\n                                   placeholder=\"Institution contact e-mail\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label> Phone <span class=\"pc-required\">* </span> </label>\r\n                            <input type=\"text\" formControlName=\"phone\" class=\"form-control validation-field\"\r\n                                   placeholder=\"Institution contact phone number\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label> Address Line 1 <span class=\"pc-required\">* </span> </label>\r\n                            <textarea formControlName=\"address_line_1\" class=\"form-control validation-field\"\r\n                                      placeholder=\"Address Line 1\"> </textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label> Address Line 2 </label>\r\n                            <textarea formControlName=\"address_line_2\" class=\"form-control validation-field\"\r\n                                      placeholder=\"Address Line 2\"> </textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label> State<span class=\"pc-required\">* </span> </label>\r\n                            <select class=\"form-control custom-select\" formControlName=\"state_id\" #stateBox\r\n                                    (change)=\"changeCities(stateBox.value)\">\r\n                                <option value=\"0\">Select a state</option>\r\n                                <option *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label> City <span class=\"pc-required\">* </span> </label>\r\n                            <select class=\"form-control custom-select\" formControlName=\"city_id\">\r\n                                <option value=\"0\" selected>Select a city</option>\r\n                                <option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label> P.O Box Number <span class=\"pc-required\"></span> </label>\r\n                            <input type=\"text\" formControlName=\"pobox_number\" name=\"pobox_number\" class=\"form-control\"\r\n                                   placeholder=\"P.O Box number\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br><br>\r\n\r\n                <button type=\"submit\" [disabled]=\"loading || UpdateMinistryForm.valid\" class=\"btn submit-btn btn-block\">\r\n                <span *ngIf=\"loading\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                                 width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                                 xml:space=\"preserve\">\r\n      <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                            <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\"\r\n                          dur=\"0.5s\" repeatCount=\"indefinite\"\r\n        />\r\n      </path>\r\n    </svg></span>\r\n                    {{loading ? '' : 'UPDATE INSTITUTION'}}\r\n                </button>\r\n                <br>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!pageLoading && !ministry\" class=\"full-height\">\r\n    <div class=\"text-danger text-center\"\r\n         [innerHTML]=\"errorMessage || 'Sorry, unable to fetch the requested ministry.'\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/institution/ministry-list/ministry-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/institution/ministry-list/ministry-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group box-shadow\">\r\n                    <a class=\"btn btn-success mr-2\" routerLink=\"/app/ministries/create\">\r\n                        <i class=\"fa fa-plus\"></i> Create New Institution </a>\r\n                  <a class=\"btn btn-success mr-2\" routerLink=\"/app/ministries/create\">\r\n                    <i class=\"fa fa-download\"></i> Download Codes </a>\r\n                    <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"queryString\" [ngModelOptions]=\"{standalone: true}\"\r\n                           placeholder=\"Search institution by name or code\" class=\"form-control border-0\">\r\n                    <button (click)=\"getMinistries()\" class=\"btn btn-success\">\r\n                        <i class=\"fa fa-search\"></i>&nbsp; Search\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <!--<h5 *ngIf=\"!ministries.length\" style=\"text-align:center\"> There are no institutions yet on price checker. Use <span-->\r\n            <!--style=\"color:red\">Create New Institution </span> above to get started <i-->\r\n            <!--class=\"fa fa-exclamation-triangle red\" aria-hidden=\"true\"></i></h5>-->\r\n            <div class=\"table-responsive bg-white box-shadow\">\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>ID</th>\r\n                        <th>Institution</th>\r\n                        <th>Institution Code</th>\r\n                        <th>Actions</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngIf=\"(!ministries || !ministries.length) && !loading && !errorMessage\">\r\n                        <td colspan=\"11\" class=\"text-center\">No role found...</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"errorMessage\">\r\n                        <td colspan=\"11\" class=\"text-danger text-center\">{{errorMessage}}</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let ministry of ministries; let i = index;\">\r\n                        <td class=\"align-middle text-truncate\">{{i + 1}}</td>\r\n                        <td class=\"align-middle text-truncate\">Federal {{ministry.name}}</td>\r\n                        <td class=\"align-middle text-truncate\">{{ministry.code}}</td>\r\n\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"btn-group\" role=\"group\">\r\n                                <!--<a [routerLink]=\"['/app/ministry', ministry.id]\" placement=\"top\" [ngbTooltip]=\"'Edit ministry'\" class=\"btn btn-secondary btn-sm\">\r\n                                  <i class=\"fa fa-eye\"></i> View Parastatals</a>\r\n                                -->\r\n                                <button *ngIf=\"can(permissions.edit_institutions +'|' + permissions.edit_institutions)\"\r\n                                        class=\"btn btn-success btn-sm\"  [routerLink]=\"['/app/ministries/edit/' + ministry.id]\">\r\n                                    <i class=\"fa fa-pencil \"></i> Edit\r\n                                </button>\r\n                                <button [routerLink]=\"['/app/ministries/parastatals/' + ministry.id]\"\r\n                                        class=\"btn btn-secondary btn-sm\">\r\n                                    <i class=\"fa fa-eye\"></i> Parastatals\r\n                                </button>\r\n                                <button *ngIf=\"can(permissions.delete_institutions +'|' + permissions.delete_institution)\"\r\n                                        class=\"btn btn-danger btn-sm\" (click)=\"deleteMinistry(ministry.id, i)\">\r\n                                    <i class=\"fa fa-trash \"></i> Delete\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"loading\">\r\n                        <td colspan=\"15\">\r\n                            <div class=\"text-center\">\r\n                              <app-small-loader message=\"Loading, please wait...\"></app-small-loader>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/institution/create-ministry/create-ministry.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/institution/create-ministry/create-ministry.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0aW9uL2NyZWF0ZS1taW5pc3RyeS9jcmVhdGUtbWluaXN0cnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/institution/create-ministry/create-ministry.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/institution/create-ministry/create-ministry.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateMinistryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMinistryComponent", function() { return CreateMinistryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_ministry_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ministry-management.service */ "./src/app/services/ministry-management.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");







var CreateMinistryComponent = /** @class */ (function () {
    function CreateMinistryComponent(formBuilder, ministryManagementService, router) {
        this.formBuilder = formBuilder;
        this.ministryManagementService = ministryManagementService;
        this.router = router;
        this.cities = [];
    }
    CreateMinistryComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getStates();
    };
    CreateMinistryComponent.prototype.buildForm = function () {
        this.NewMinistryForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])],
            state_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            address_line_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address_line_2: [''],
            pobox_number: [''],
        });
    };
    CreateMinistryComponent.prototype.getStates = function () {
        var _this = this;
        this.ministryManagementService.getStates().subscribe(function (states) {
            _this.states = states;
        });
    };
    CreateMinistryComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.loading = true;
        this.ministryManagementService.addMinistry(value).subscribe(function (ministry) {
            if (ministry) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Created!', 'You have just added a new parastatal!', 'success');
                _this.router.navigate(['/app/ministries']);
            }
            else {
                _this.loading = false;
            }
        }, function (err) {
            _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router, true);
            _this.loading = false;
        });
    };
    CreateMinistryComponent.prototype.changeCities = function (value) {
        this.cities = [];
        if (value) {
            for (var x = 0; x < this.states.length; x++) {
                if (this.states[x].id.toString() === value.toString()) {
                    this.cities = this.states[x].cities;
                    break;
                }
            }
        }
    };
    CreateMinistryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-ministry',
            template: __webpack_require__(/*! raw-loader!./create-ministry.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/institution/create-ministry/create-ministry.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./create-ministry.component.scss */ "./src/app/pages/institution/create-ministry/create-ministry.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_ministry_management_service__WEBPACK_IMPORTED_MODULE_3__["MinistryManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CreateMinistryComponent);
    return CreateMinistryComponent;
}());



/***/ }),

/***/ "./src/app/pages/institution/edit-ministry/edit-ministry.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/institution/edit-ministry/edit-ministry.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0aW9uL2VkaXQtbWluaXN0cnkvZWRpdC1taW5pc3RyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/institution/edit-ministry/edit-ministry.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/institution/edit-ministry/edit-ministry.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditMinistryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMinistryComponent", function() { return EditMinistryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_ministry_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/ministry-management.service */ "./src/app/services/ministry-management.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var EditMinistryComponent = /** @class */ (function () {
    function EditMinistryComponent(formBuilder, route, router, ministryManagementService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.ministryManagementService = ministryManagementService;
        this.states = [];
        this.cities = [];
        this.ministry = {
            name: '',
            code: '',
            email: '',
            phone: '',
            address: {
                address_line_1: '',
                address_line_2: '',
                state_id: 0,
                city_id: 0,
                state: '',
                city: '',
                pobox_number: ''
            }
        };
    }
    EditMinistryComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.getMinistryById(id);
        this.getStates();
        this.buildForm();
    };
    EditMinistryComponent.prototype.buildForm = function () {
        this.UpdateMinistryForm = this.formBuilder.group({
            name: [this.ministry.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)])],
            code: [this.ministry.code, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)])],
            email: [this.ministry.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])],
            phone: [this.ministry.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            state_id: [this.ministry.address ? this.ministry.address.state_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city_id: [this.ministry.address ? this.ministry.address.city_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            address_line_1: [this.ministry.address ? this.ministry.address.address_line_1 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address_line_2: [this.ministry.address ? this.ministry.address.address_line_2 : ''],
            pobox_number: [this.ministry.address ? this.ministry.address.pobox_number : ''],
        });
    };
    EditMinistryComponent.prototype.getStates = function () {
        var _this = this;
        this.ministryManagementService.getStates()
            .subscribe(function (states) {
            _this.states = states;
        }, function (err) {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router, true);
        });
    };
    EditMinistryComponent.prototype.getMinistryById = function (id) {
        var _this = this;
        this.pageLoading = true;
        this.ministryManagementService.getMinistryByID(id, 'states').subscribe(function (data) {
            _this.ministry = data.data;
            _this.states = data.states;
            _this.pageLoading = false;
            if (_this.ministry.address) {
                _this.changeCities(_this.ministry.address.state_id);
            }
            _this.UpdateMinistryForm.patchValue({
                name: _this.ministry.name,
                code: _this.ministry.code,
                email: _this.ministry.email,
                phone: _this.ministry.phone,
                state_id: _this.ministry.address ? _this.ministry.address.state_id : '',
                city_id: _this.ministry.address ? _this.ministry.address.city_id : '',
                state: _this.ministry.address ? _this.ministry.address.state : '',
                city: _this.ministry.address ? _this.ministry.address.city : '',
                address_line_1: _this.ministry.address ? _this.ministry.address.address_line_1 : '',
                address_line_2: _this.ministry.address ? _this.ministry.address.address_line_2 : '',
                pobox_number: _this.ministry.address ? _this.ministry.address.pobox_number : ''
            });
        }, function (err) {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router, true);
            _this.pageLoading = false;
        });
    };
    EditMinistryComponent.prototype.changeCities = function (value) {
        this.cities = [];
        if (value) {
            for (var x = 0; x < this.states.length; x++) {
                if (this.states[x].id.toString() === value.toString()) {
                    this.cities = this.states[x].cities;
                    break;
                }
            }
        }
    };
    EditMinistryComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value.id = this.ministry.id;
        var id = this.route.snapshot.params['id'];
        this.loading = true;
        if (value.id) {
            this.ministryManagementService.updateMinistry(value).subscribe(function (ministry) {
                if (ministry) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Update!', 'Institution Information Updated', 'success');
                }
                _this.loading = false;
            }, function (err) {
                _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router, true);
                _this.loading = false;
            });
        }
    };
    EditMinistryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-ministry',
            template: __webpack_require__(/*! raw-loader!./edit-ministry.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/institution/edit-ministry/edit-ministry.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./edit-ministry.component.scss */ "./src/app/pages/institution/edit-ministry/edit-ministry.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_ministry_management_service__WEBPACK_IMPORTED_MODULE_5__["MinistryManagementService"]])
    ], EditMinistryComponent);
    return EditMinistryComponent;
}());



/***/ }),

/***/ "./src/app/pages/institution/institution.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/institution/institution.module.ts ***!
  \*********************************************************/
/*! exports provided: routes, InstitutionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionModule", function() { return InstitutionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ministry_list_ministry_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ministry-list/ministry-list.component */ "./src/app/pages/institution/ministry-list/ministry-list.component.ts");
/* harmony import */ var _create_ministry_create_ministry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-ministry/create-ministry.component */ "./src/app/pages/institution/create-ministry/create-ministry.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_ministry_edit_ministry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-ministry/edit-ministry.component */ "./src/app/pages/institution/edit-ministry/edit-ministry.component.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");











var routes = [
    { path: 'create', component: _create_ministry_create_ministry_component__WEBPACK_IMPORTED_MODULE_4__["CreateMinistryComponent"] },
    { path: 'edit/:id', component: _edit_ministry_edit_ministry_component__WEBPACK_IMPORTED_MODULE_8__["EditMinistryComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _ministry_list_ministry_list_component__WEBPACK_IMPORTED_MODULE_3__["MinistryListComponent"] },
    { path: 'parastatals',
        loadChildren: function () { return __webpack_require__.e(/*! import() | app-pages-institution-parastatal-parastatal-module */ "app-pages-institution-parastatal-parastatal-module").then(__webpack_require__.bind(null, /*! app/pages/institution/parastatal/parastatal.module */ "./src/app/pages/institution/parastatal/parastatal.module.ts")).then(function (m) { return m.ParastatalModule; }); },
        data: { breadcrumb: 'Institution/Parastatal' }
    }
];
var InstitutionModule = /** @class */ (function () {
    function InstitutionModule() {
    }
    InstitutionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ministry_list_ministry_list_component__WEBPACK_IMPORTED_MODULE_3__["MinistryListComponent"], _create_ministry_create_ministry_component__WEBPACK_IMPORTED_MODULE_4__["CreateMinistryComponent"], _edit_ministry_edit_ministry_component__WEBPACK_IMPORTED_MODULE_8__["EditMinistryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_9__["CustomErrorModule"],
                _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__["LoaderModule"],
            ]
        })
    ], InstitutionModule);
    return InstitutionModule;
}());



/***/ }),

/***/ "./src/app/pages/institution/ministry-list/ministry-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/institution/ministry-list/ministry-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-icon {\n  background: #0DB28B;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRpb24vbWluaXN0cnktbGlzdC9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXFByb2plY3RzXFxJbG9yIHRlY2hub2xvZ2llcyBsdGRcXGlsb3ItcGMtd2ViL3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRpb25cXG1pbmlzdHJ5LWxpc3RcXG1pbmlzdHJ5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0aW9uL21pbmlzdHJ5LWxpc3QvbWluaXN0cnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRpb24vbWluaXN0cnktbGlzdC9taW5pc3RyeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1pY29ue1xyXG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIi5zZWFyY2gtaWNvbiB7XG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/institution/ministry-list/ministry-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/institution/ministry-list/ministry-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: MinistryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinistryListComponent", function() { return MinistryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_ministry_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ministry-management.service */ "./src/app/services/ministry-management.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");








var MinistryListComponent = /** @class */ (function () {
    function MinistryListComponent(ministryManagementService, router) {
        this.ministryManagementService = ministryManagementService;
        this.router = router;
        this.errorMessage = '';
        this.searchableList = ['name', 'code'];
    }
    MinistryListComponent.prototype.ngOnInit = function () {
        this.getMinistries();
    };
    MinistryListComponent.prototype.getMinistries = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = '';
        this.ministries = [];
        this.ministryManagementService.getMinistries(this.queryString).subscribe(function (ministries) {
            _this.ministries = ministries;
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].handleError(err, _this.router);
            _this.loading = false;
        });
    };
    MinistryListComponent.prototype.deleteMinistry = function (id, index) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this record?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(function (willDelete) {
            if (willDelete.value) {
                _this.ministryManagementService.deleteMinistry(id).subscribe(function (deleted) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Institution has been deleted!', 'success');
                    _this.ministries.splice(index, 1);
                }, function (err) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].handleError(err, _this.router, true);
                });
            }
        });
    };
    MinistryListComponent.prototype.can = function (permission) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].can(permission);
    };
    Object.defineProperty(MinistryListComponent.prototype, "permissions", {
        get: function () {
            return _data__WEBPACK_IMPORTED_MODULE_7__["AppData"].permissions;
        },
        enumerable: true,
        configurable: true
    });
    MinistryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ministry-list',
            template: __webpack_require__(/*! raw-loader!./ministry-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/institution/ministry-list/ministry-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./ministry-list.component.scss */ "./src/app/pages/institution/ministry-list/ministry-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ministry_management_service__WEBPACK_IMPORTED_MODULE_4__["MinistryManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MinistryListComponent);
    return MinistryListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-institution-institution-module-es5.js.map