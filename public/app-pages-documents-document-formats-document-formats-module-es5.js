(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-documents-document-formats-document-formats-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-formats/add-document-format/add-document-format.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documents/document-formats/add-document-format/add-document-format.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-6  offset-lg-3 form-holder\">\r\n        <div class=\"card box-shadow border-0\">\r\n            <div class=\"card-block pt-3\">\r\n                <h3>Add New Document Format\r\n                    <button routerLink=\"/app/document-formats\" class=\"btn btn-success pull-right\"><i\r\n                            class=\"fa fa-caret-left\"></i> Document Formats\r\n                    </button>\r\n                </h3>\r\n                <hr>\r\n                <form class=\"form\" [formGroup]=\"NewFormatForm\" (ngSubmit)=\"onSubmit(NewFormatForm)\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Extension<sup class=\"asterisk\">*</sup></label>\r\n                                <input formControlName=\"extension\" type=\"text\" class=\"form-control\">\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!NewFormatForm.controls['extension'].valid && NewFormatForm.controls['extension'].touched\">\r\n                                    Extension is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description<sup class=\"asterisk\">*</sup></label>\r\n                                <input formControlName=\"description\" type=\"text\" class=\"form-control\">\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!NewFormatForm.controls['description'].valid && NewFormatForm.controls['description'].touched\">\r\n                                    Description is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Mime Type<sup class=\"asterisk\">*</sup></label>\r\n                                <input formControlName=\"mime_type\" type=\"text\" class=\"form-control\">\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!NewFormatForm.controls['mime_type'].valid && NewFormatForm.controls['mime_type'].touched\">\r\n                                    Mime Type is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Allowed <sup class=\"asterisk\">*</sup></label>\r\n                                <select class=\"form-control\" formControlName=\"allowed\">\r\n                                    <option value=\"1\" selected>Allowed</option>\r\n                                    <option value=\"0\">Not Allowed</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <button [disabled]=\"!NewFormatForm.valid || loading\"\r\n                            class=\"btn btn-success pull-right submit-btn mb-3 mt-3\">\r\n                        <app-small-loader *ngIf=\"loading\"></app-small-loader>{{loading ? '' : 'Add Document Format'}}\r\n                    </button>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-formats/document-formats.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documents/document-formats/document-formats.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10 offset-md-1\">\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group box-shadow\">\r\n                    <button *ngIf=\"!isVendor\" [disabled]=\"loading\" class=\"btn btn-success mr-2\" routerLink=\"/app/document-formats/create\">\r\n                        <i class=\"fa fa-plus\"></i> Create Document Format </button>\r\n                    <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\"><i\r\n                            class=\"fa fa-search\"></i></div>\r\n                    <input #filterField type=\"text\"\r\n                           placeholder=\"Search Document Formats\"\r\n                           class=\"form-control border-0\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-success\" (click)=\"getDocFormats(filterField.value)\">\r\n                        Search </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <br>\r\n    <div>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-12\">\r\n\r\n\r\n                <div class=\"table-responsive bg-white box-shadow\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                        <tr>\r\n                             <th><input type=\"checkbox\"  [checked]=\"isAllChecked\" (change)=\"checkAll($event)\"/></th>\r\n                            <!--<th>Allow</th>-->\r\n                            <th>Extension</th>\r\n                            <th>Description</th>\r\n                            <th>Allowed</th>\r\n                            <th>Created At</th>\r\n                            <th>Updated At</th>\r\n\r\n                            <th>\r\n                                <!--<button (click)=\"allowSelection()\" [disabled]=\"loading\" *ngIf=\"!isVendor && hasSomeChecked\"-->\r\n                                        <!--class=\"btn btn-success btn-sm\"><i class=\"fa fa-check\"></i>&nbsp;Allow for selection-->\r\n                                <!--</button>-->\r\n                            </th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tr *ngIf=\"fetching\">\r\n                            <td class=\"text-center\" colspan=\"10\">\r\n                                <app-item-loader></app-item-loader>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr *ngFor=\"let docFormat of doc_formats\">\r\n\r\n                            <td class=\"align-middle text-truncate\">\r\n                                <input type=\"checkbox\" [checked]=\"docFormat.selected\">\r\n                            </td>\r\n\r\n                            <td>{{docFormat.extension}}</td>\r\n                            <td>{{docFormat.description}}</td>\r\n                            <td class=\"align-middle text-truncate\">\r\n                                <span *ngIf=\"!docFormat.allowed\"\r\n                                      class=\"badge badge-danger\">\r\n                                    <i class=\"fa fa-times\"></i> not allowed</span>\r\n                                <span *ngIf=\"docFormat.allowed\" class=\"badge badge-success\"><i\r\n                                    class=\"fa fa-check-circle\"></i> allowed</span></td>\r\n                            <td>{{docFormat.created_at}}</td>\r\n                            <td>{{docFormat.updated_at}}</td>\r\n                            <td class=\"align-middle\">\r\n                                <div class=\"btn-group\" role=\"group\">\r\n\r\n                                    <button [disabled]=\"loading\" routerLink=\"/app/document-formats/edit/{{docFormat.id}}\"\r\n                                       class=\"btn btn-secondary btn-sm\"><i\r\n                                            class=\"fa fa-tasks\"></i>&nbsp;Edit</button>\r\n                                    <button [disabled]=\"loading\" routerLink=\"/app/document-formats/view/{{docFormat.id}}\"\r\n                                       class=\"btn btn-success btn-sm\"><i\r\n                                            class=\"fa fa-eye\"></i>&nbsp;View</button>\r\n                                    &nbsp;&nbsp;&nbsp;\r\n                                    <button (click)=\"deleteDocFormat(docFormat.id)\" [disabled]=\"loading\"\r\n                                       class=\"btn btn-danger btn-sm text-center\"> <i class=\"fa fa-trash\"></i>&nbsp;Delete</button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-formats/edit-document-format/edit-document-format.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documents/document-formats/edit-document-format/edit-document-format.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"pageLoading == true\"></app-loader>\r\n<div class=\"container-fluid\" *ngIf=\"!pageLoading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <a class=\"btn btn-success offset-lg-10\" routerLink=\"/app/document-formats\"> <i\r\n                    class=\"fa fa-chevron-left \"></i> Document Formats </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mt-3\" *ngIf=\"pageLoading == false\">\r\n    <div class=\"col-lg-4 profile-info box-shadow offset-lg-1\">\r\n        <h3>DOCUMENT FORMAT INFORMATION</h3>\r\n        <div class=\"card\">\r\n            <div class=\"card-block pt-3\">\r\n                <div class=\"\">\r\n                    <div class=\"media-body ml-12\">\r\n                        <div class=\"row\">\r\n                            <h6 class=\"col-4 text-black pr-0\">Extension:</h6>\r\n                            <h6 class=\"col-8 pl-2\">{{doc_format.extension}} </h6>\r\n                            <h6 class=\"col-4 text-black pr-0\">Description:</h6>\r\n                            <h6 class=\"col-8 pl-2\">{{doc_format.description}}</h6>\r\n                            <h6 class=\"col-4 text-black pr-0\">Mime Type:</h6>\r\n                            <h6 class=\"col-8 pl-2\">{{doc_format.mime_type}}</h6>\r\n\r\n                            <div class=\"col-md-10 offset-md-1 action-box mt-3\">\r\n                                <button class=\"btn btn btn-danger\" (click)=\"onDelete($event)\">Delete Document Format\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 box-shadow form-holder\">\r\n        <div class=\"card border-0\">\r\n            <div class=\"card-block pt-3\">\r\n                <h3>{{doc_format.extension}}</h3>\r\n                <hr>\r\n                <form class=\"form\" [formGroup]=\"FormatForm\" (ngSubmit)=\"onSubmit(FormatForm)\" novalidate>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Extension<sup class=\"asterisk\">*</sup></label>\r\n                                <input type=\"text\" value=\"{{doc_format.extension}}\" class=\"form-control\"\r\n                                       formControlName=\"extension\">\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!FormatForm.controls['extension'].valid && FormatForm.controls['extension'].touched\">\r\n                                    The Extension is Required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description<sup class=\"asterisk\">*</sup></label>\r\n                                <input type=\"text\" value=\"{{doc_format.description}}\" class=\"form-control\"\r\n                                       formControlName=\"extension\">\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!FormatForm.controls['description'].valid && FormatForm.controls['description'].touched\">\r\n                                    The Description is Required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Mime Type<sup class=\"asterisk\">*</sup></label>\r\n                                <input type=\"text\" value=\"{{doc_format.mime_type}}\" class=\"form-control\"\r\n                                       formControlName=\"mime_type\">\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!FormatForm.controls['mime_type'].valid && FormatForm.controls['mime_type'].touched\">\r\n                                    The Mime Type is Required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <button class=\"btn btn-block submit-btn my-3\">\r\n                        <app-small-loader *ngIf=\"loading\"></app-small-loader>{{loading ? '' : 'Update Document Format'}}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-formats/view-document-format/view-document-format.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documents/document-formats/view-document-format/view-document-format.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-6  offset-lg-3 form-holder\">\r\n        <div class=\"card box-shadow border-0\">\r\n            <div class=\"card-block pt-3\">\r\n                <h3> {{doc_format.extension}}\r\n                    <button routerLink=\"/app/document-formats\" class=\"btn btn-success pull-right\"><i\r\n                            class=\"fa fa-caret-left\"></i> Document Formats\r\n                    </button>\r\n                </h3>\r\n                <hr>\r\n\r\n\r\n                <p class=\"text-left text-dark\">Extension: &nbsp;{{doc_format.extension}}</p>\r\n\r\n                <p class=\"text-left text-dark\">Mime Type: &nbsp;{{doc_format.mime_type}}</p>\r\n                <p class=\"text-left text-dark\">Description: &nbsp;{{doc_format.description}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/documents/document-formats/add-document-format/add-document-format.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/documents/document-formats/add-document-format/add-document-format.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50cy9kb2N1bWVudC1mb3JtYXRzL2FkZC1kb2N1bWVudC1mb3JtYXQvYWRkLWRvY3VtZW50LWZvcm1hdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/documents/document-formats/add-document-format/add-document-format.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/documents/document-formats/add-document-format/add-document-format.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddDocumentFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDocumentFormatComponent", function() { return AddDocumentFormatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_document_formats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/document-formats.service */ "./src/app/services/document-formats.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app.constants */ "./src/app/app.constants.ts");






var AddDocumentFormatComponent = /** @class */ (function () {
    function AddDocumentFormatComponent(formBuilder, router, route, documentFormatService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.documentFormatService = documentFormatService;
    }
    AddDocumentFormatComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AddDocumentFormatComponent.prototype.buildForm = function () {
        this.NewFormatForm = this.formBuilder.group({
            extension: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            mime_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            allowed: [0],
        });
    };
    AddDocumentFormatComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (value) {
            this.loading = true;
            this.documentFormatService.addDocFormat(value).subscribe(function (document_format) {
                if (document_format) {
                    _this.router.navigate(['/app/document-formats']);
                }
                _this.loading = false;
            }, function (err) {
                _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, _this.router, true);
                _this.loading = false;
            });
        }
    };
    AddDocumentFormatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-document-format',
            template: __webpack_require__(/*! raw-loader!./add-document-format.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-formats/add-document-format/add-document-format.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./add-document-format.component.scss */ "./src/app/pages/documents/document-formats/add-document-format/add-document-format.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_document_formats_service__WEBPACK_IMPORTED_MODULE_4__["DocumentFormatService"]])
    ], AddDocumentFormatComponent);
    return AddDocumentFormatComponent;
}());



/***/ }),

/***/ "./src/app/pages/documents/document-formats/document-formats.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/documents/document-formats/document-formats.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50cy9kb2N1bWVudC1mb3JtYXRzL2RvY3VtZW50LWZvcm1hdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/documents/document-formats/document-formats.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/documents/document-formats/document-formats.component.ts ***!
  \********************************************************************************/
/*! exports provided: DocumentFormatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFormatsComponent", function() { return DocumentFormatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_document_formats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/document-formats.service */ "./src/app/services/document-formats.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");









var DocumentFormatsComponent = /** @class */ (function () {
    function DocumentFormatsComponent(documentFormatService, route, _Location, router, formBuilder) {
        this.documentFormatService = documentFormatService;
        this.route = route;
        this._Location = _Location;
        this.router = router;
        this.formBuilder = formBuilder;
        this.doc_formats = [];
        this.allowdoc_formats = [];
        this.toggle = false;
        this.loading = true;
        this.fetching = true;
    }
    DocumentFormatsComponent.prototype.ngOnInit = function () {
        this.getDocFormats();
        this.AllowFormatSelected();
        this.getAllowedDocFormats();
    };
    Object.defineProperty(DocumentFormatsComponent.prototype, "isVendor", {
        get: function () {
            return (_app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].getAuthenticatedUser() || {}).r === _data__WEBPACK_IMPORTED_MODULE_8__["AppData"].roles.vendor;
        },
        enumerable: true,
        configurable: true
    });
    DocumentFormatsComponent.prototype.getDocFormats = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        this.fetching = true;
        this.doc_formats = [];
        this.documentFormatService.getDocumentFormats(filter).subscribe(function (doc_formats) {
            _this.doc_formats = doc_formats;
            _this.fetching = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router);
            _this.fetching = false;
        });
    };
    DocumentFormatsComponent.prototype.getAllowedDocFormats = function () {
        var _this = this;
        this.loading = true;
        this.documentFormatService.getAllowedDocumentFormats().subscribe(function (allowdoc_formats) {
            _this.allowdoc_formats = allowdoc_formats;
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router);
            _this.loading = false;
        });
    };
    DocumentFormatsComponent.prototype.AllowFormatSelected = function () {
        this.NewAllowForm = this.formBuilder.group({
            allowed: this.formBuilder.array([]),
        });
    };
    DocumentFormatsComponent.prototype.onChange = function (doc_format, isChecked) {
        var allowFormArray = this.NewAllowForm.controls.allowed;
        if (isChecked) {
            allowFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](doc_format));
        }
        else {
            var index = allowFormArray.controls.findIndex(function (x) { return x.value === doc_format; });
            allowFormArray.removeAt(index);
        }
    };
    DocumentFormatsComponent.prototype.allowSelection = function () {
        // const selected = this.doc_formats.filter(e => e.selected);
        // this.loading = true;
        // this.documentFormatService.allowDocFormat(selected).subscribe((doc_formats: DocumentsFormat) => {
        //         if (doc_formats) {
        //             Constants.succeeded('Format Has Been Allowed!');
        //             this.getDocFormats();
        //         }
        //         this.loading = false;
        //     }, (err) => {
        //         Constants.handleError(err, this.router, true);
        //     }
        // )
    };
    DocumentFormatsComponent.prototype.checkAll = function (ev) {
        this.doc_formats.forEach(function (x) { return x.selected = ev.target.checked; });
    };
    Object.defineProperty(DocumentFormatsComponent.prototype, "isAllChecked", {
        get: function () {
            return this.doc_formats.every(function (_) { return _.selected; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentFormatsComponent.prototype, "hasSomeChecked", {
        get: function () {
            return this.doc_formats.find(function (e) { return e.selected; });
        },
        enumerable: true,
        configurable: true
    });
    DocumentFormatsComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (value) {
            this.loading = true;
            this.documentFormatService.allowDocFormat(value).subscribe(function (doc_formats) {
                if (doc_formats) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].succeeded('Format Has Been Allowed!');
                    _this.getDocFormats();
                }
                _this.loading = false;
            }, function (err) {
                _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router, true);
            });
        }
    };
    DocumentFormatsComponent.prototype.deleteDocFormat = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Confirm delete',
            text: 'Do you want to delete the selected record?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(function (willDelete) {
            if (willDelete.value) {
                _this.loading = true;
                _this.documentFormatService.deleteDocumentFormat(id).subscribe(function (status) {
                    if (status) {
                        _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].succeeded('Document Format has been deleted!');
                        _this.getDocFormats();
                    }
                    _this.loading = false;
                }, function (err) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router, true);
                    _this.loading = false;
                });
            }
        });
    };
    DocumentFormatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document-formats',
            template: __webpack_require__(/*! raw-loader!./document-formats.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-formats/document-formats.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./document-formats.component.scss */ "./src/app/pages/documents/document-formats/document-formats.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_document_formats_service__WEBPACK_IMPORTED_MODULE_5__["DocumentFormatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DocumentFormatsComponent);
    return DocumentFormatsComponent;
}());



/***/ }),

/***/ "./src/app/pages/documents/document-formats/document-formats.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/documents/document-formats/document-formats.module.ts ***!
  \*****************************************************************************/
/*! exports provided: routes, DocumentFormatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFormatsModule", function() { return DocumentFormatsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _document_formats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./document-formats.component */ "./src/app/pages/documents/document-formats/document-formats.component.ts");
/* harmony import */ var _add_document_format_add_document_format_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-document-format/add-document-format.component */ "./src/app/pages/documents/document-formats/add-document-format/add-document-format.component.ts");
/* harmony import */ var _edit_document_format_edit_document_format_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-document-format/edit-document-format.component */ "./src/app/pages/documents/document-formats/edit-document-format/edit-document-format.component.ts");
/* harmony import */ var _view_document_format_view_document_format_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-document-format/view-document-format.component */ "./src/app/pages/documents/document-formats/view-document-format/view-document-format.component.ts");











var routes = [
    { path: '', component: _document_formats_component__WEBPACK_IMPORTED_MODULE_7__["DocumentFormatsComponent"] },
    { path: 'create', component: _add_document_format_add_document_format_component__WEBPACK_IMPORTED_MODULE_8__["AddDocumentFormatComponent"] },
    { path: 'edit/:id', component: _edit_document_format_edit_document_format_component__WEBPACK_IMPORTED_MODULE_9__["EditDocumentFormatComponent"] },
    { path: 'view/:id', component: _view_document_format_view_document_format_component__WEBPACK_IMPORTED_MODULE_10__["ViewDocumentFormatComponent"] },
];
var DocumentFormatsModule = /** @class */ (function () {
    function DocumentFormatsModule() {
    }
    DocumentFormatsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _document_formats_component__WEBPACK_IMPORTED_MODULE_7__["DocumentFormatsComponent"], _add_document_format_add_document_format_component__WEBPACK_IMPORTED_MODULE_8__["AddDocumentFormatComponent"], _edit_document_format_edit_document_format_component__WEBPACK_IMPORTED_MODULE_9__["EditDocumentFormatComponent"], _view_document_format_view_document_format_component__WEBPACK_IMPORTED_MODULE_10__["ViewDocumentFormatComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_6__["CustomErrorModule"]
            ]
        })
    ], DocumentFormatsModule);
    return DocumentFormatsModule;
}());



/***/ }),

/***/ "./src/app/pages/documents/document-formats/edit-document-format/edit-document-format.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/documents/document-formats/edit-document-format/edit-document-format.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-info {\n  background: #0DB28B;\n}\n.profile-info h3 {\n  color: white;\n  text-align: center;\n  margin-top: 20px;\n}\n.profile-info .card {\n  margin-top: 20px;\n  height: 80%;\n}\n.profile-info .card .media .media-body h6 {\n  font-size: 16px;\n}\n.profile-info .action-box {\n  border-radius: 3px;\n  border: 2px dashed #ECEEEF;\n  padding: 10px;\n  align-items: center;\n}\n.profile-info .action-box button {\n  cursor: pointer;\n}\n.profile-info .action-box h3 {\n  color: #333333;\n  text-align: left;\n}\n.profile-info .form-holder {\n  background: white !important;\n}\n.submit-btn {\n  padding: 15px 20px;\n  background: #0DB28B;\n  color: white;\n  font-weight: bolder;\n}\n.asterisk {\n  font-size: 12px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRzL2RvY3VtZW50LWZvcm1hdHMvZWRpdC1kb2N1bWVudC1mb3JtYXQvQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcSWxvciB0ZWNobm9sb2dpZXMgbHRkXFxpbG9yLXBjLXdlYi9zcmNcXGFwcFxccGFnZXNcXGRvY3VtZW50c1xcZG9jdW1lbnQtZm9ybWF0c1xcZWRpdC1kb2N1bWVudC1mb3JtYXRcXGVkaXQtZG9jdW1lbnQtZm9ybWF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kb2N1bWVudHMvZG9jdW1lbnQtZm9ybWF0cy9lZGl0LWRvY3VtZW50LWZvcm1hdC9lZGl0LWRvY3VtZW50LWZvcm1hdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0FDQUo7QURDSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ047QURDSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NOO0FERVE7RUFDRSxlQUFBO0FDQVY7QURLSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNITjtBREtNO0VBQ0UsZUFBQTtBQ0hSO0FETU07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRFFJO0VBQ0UsNEJBQUE7QUNOTjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05KO0FEUUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdW1lbnRzL2RvY3VtZW50LWZvcm1hdHMvZWRpdC1kb2N1bWVudC1mb3JtYXQvZWRpdC1kb2N1bWVudC1mb3JtYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb2ZpbGUtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xyXG4gICAgaDMge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgXHJcbiAgICAgIC5tZWRpYSB7XHJcbiAgICAgICAgLm1lZGlhLWJvZHkgaDYge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFjdGlvbi1ib3h7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNFQ0VFRUY7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgIGJ1dHRvbntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBoM3tcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9ybS1ob2xkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc3VibWl0LWJ0bntcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwREIyOEI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuICAuYXN0ZXJpc2t7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICAiLCIucHJvZmlsZS1pbmZvIHtcbiAgYmFja2dyb3VuZDogIzBEQjI4Qjtcbn1cbi5wcm9maWxlLWluZm8gaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wcm9maWxlLWluZm8gLmNhcmQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDgwJTtcbn1cbi5wcm9maWxlLWluZm8gLmNhcmQgLm1lZGlhIC5tZWRpYS1ib2R5IGg2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnByb2ZpbGUtaW5mbyAuYWN0aW9uLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNFQ0VFRUY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbmZvIC5hY3Rpb24tYm94IGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9maWxlLWluZm8gLmFjdGlvbi1ib3ggaDMge1xuICBjb2xvcjogIzMzMzMzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wcm9maWxlLWluZm8gLmZvcm0taG9sZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmFzdGVyaXNrIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/documents/document-formats/edit-document-format/edit-document-format.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/documents/document-formats/edit-document-format/edit-document-format.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EditDocumentFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDocumentFormatComponent", function() { return EditDocumentFormatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_document_formats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/document-formats.service */ "./src/app/services/document-formats.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app.constants */ "./src/app/app.constants.ts");






var EditDocumentFormatComponent = /** @class */ (function () {
    function EditDocumentFormatComponent(formBuilder, router, route, documentformatService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.documentformatService = documentformatService;
        this.doc_format = {
            extension: '',
            mime_type: '',
            description: '',
            allowed: 0,
            selected: null,
        };
        this.doc_formats = [];
    }
    EditDocumentFormatComponent.prototype.ngOnInit = function () {
        this.buildForm();
        var id = this.route.snapshot.params['id'];
        this.getDocumentFormat(id);
    };
    EditDocumentFormatComponent.prototype.buildForm = function () {
        this.FormatForm = this.formBuilder.group({
            extension: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            mime_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            allowed: [0],
        });
    };
    EditDocumentFormatComponent.prototype.getDocumentFormat = function (id) {
        var _this = this;
        this.pageLoading = true;
        this.documentformatService.getDocumentFormatByID(id).subscribe(function (doc_format) {
            _this.doc_format = doc_format;
            _this.FormatForm.patchValue({
                extension: _this.doc_format.extension,
                description: _this.doc_format.description,
                mime_type: _this.doc_format.mime_type,
                allowed: _this.doc_format.allowed
            });
            _this.pageLoading = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, _this.router, true);
            _this.pageLoading = false;
        });
    };
    EditDocumentFormatComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        value.id = this.doc_format.id;
        if (value.id) {
            this.loading = true;
            this.documentformatService.updateDocumentFormat(value).subscribe(function (doc_format) {
                if (_this.doc_format) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].succeeded('Document Format successfully updated');
                }
                _this.loading = false;
            }, function (err) {
                _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, _this.router, true);
                _this.loading = false;
            });
        }
    };
    EditDocumentFormatComponent.prototype.onDelete = function (event) {
        var _this = this;
        event.preventDefault();
        this.documentformatService.deleteDocumentFormat(this.doc_format.id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/app/document-formats']);
            }
            else {
                _this.errorMessage = 'Unable to delete Document Format';
            }
        }, function (err) {
            _this.errorMessage = err.Staus;
        });
    };
    EditDocumentFormatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-document-format',
            template: __webpack_require__(/*! raw-loader!./edit-document-format.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-formats/edit-document-format/edit-document-format.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./edit-document-format.component.scss */ "./src/app/pages/documents/document-formats/edit-document-format/edit-document-format.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_document_formats_service__WEBPACK_IMPORTED_MODULE_4__["DocumentFormatService"]])
    ], EditDocumentFormatComponent);
    return EditDocumentFormatComponent;
}());



/***/ }),

/***/ "./src/app/pages/documents/document-formats/view-document-format/view-document-format.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/documents/document-formats/view-document-format/view-document-format.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50cy9kb2N1bWVudC1mb3JtYXRzL3ZpZXctZG9jdW1lbnQtZm9ybWF0L3ZpZXctZG9jdW1lbnQtZm9ybWF0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/documents/document-formats/view-document-format/view-document-format.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/documents/document-formats/view-document-format/view-document-format.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ViewDocumentFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDocumentFormatComponent", function() { return ViewDocumentFormatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_document_formats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/document-formats.service */ "./src/app/services/document-formats.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data */ "./src/app/data.ts");







var ViewDocumentFormatComponent = /** @class */ (function () {
    function ViewDocumentFormatComponent(documentFormatService, route, router, _location) {
        this.documentFormatService = documentFormatService;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.doc_format = {
            mime_type: '',
            description: '',
            extension: '',
            allowed: 0
        };
    }
    ViewDocumentFormatComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        // const id2 = this.good.id;
        this.getDocumentFormat(id);
        this.url = _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].url;
    };
    Object.defineProperty(ViewDocumentFormatComponent.prototype, "isVendor", {
        get: function () {
            return (_app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].getAuthenticatedUser() || {}).r === _data__WEBPACK_IMPORTED_MODULE_6__["AppData"].roles.vendor;
        },
        enumerable: true,
        configurable: true
    });
    ViewDocumentFormatComponent.prototype.backClicked = function () {
        this._location.back();
    };
    ViewDocumentFormatComponent.prototype.getDocumentFormat = function (id) {
        var _this = this;
        this.loading = true;
        this.documentFormatService.getDocumentFormatByID(id)
            .subscribe(function (doc_format) {
            _this.doc_format = doc_format;
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, _this.router);
            _this.loading = false;
        });
    };
    ViewDocumentFormatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-document-format',
            template: __webpack_require__(/*! raw-loader!./view-document-format.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-formats/view-document-format/view-document-format.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./view-document-format.component.scss */ "./src/app/pages/documents/document-formats/view-document-format/view-document-format.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_document_formats_service__WEBPACK_IMPORTED_MODULE_4__["DocumentFormatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ViewDocumentFormatComponent);
    return ViewDocumentFormatComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-documents-document-formats-document-formats-module-es5.js.map