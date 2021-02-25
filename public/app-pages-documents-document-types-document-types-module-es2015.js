(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-documents-document-types-document-types-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-types/add-document-type/add-document-type.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documents/document-types/add-document-type/add-document-type.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-6  offset-lg-3 form-holder\">\r\n        <div class=\"card box-shadow border-0\">\r\n            <div class=\"card-block pt-3\">\r\n                <h3>Add New Document Type\r\n                    <button routerLink=\"/app/document-types\" class=\"btn btn-success pull-right\"><i\r\n                            class=\"fa fa-caret-left\"></i> Document Types\r\n                    </button>\r\n                </h3>\r\n                <hr>\r\n                <form class=\"form\" [formGroup]=\"NewTypeForm\" (ngSubmit)=\"onSubmit(NewTypeForm)\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Name<sup class=\"asterisk\">*</sup></label>\r\n                                <input formControlName=\"name\" type=\"text\" class=\"form-control\">\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!NewTypeForm.controls['name'].valid && NewTypeForm.controls['name'].touched\">\r\n                                    Name is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description<sup class=\"asterisk\">*</sup></label>\r\n                                <input formControlName=\"description\" type=\"text\" class=\"form-control\">\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!NewTypeForm.controls['description'].valid && NewTypeForm.controls['description'].touched\">\r\n                                    Description is\r\n                                    required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <!-- <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                          <label>Mime Type<sup class=\"asterisk\">*</sup></label>\r\n                          <input formControlName=\"mime_type\" displayType=\"text\" class=\"form-control\">\r\n                          <div class=\"custom-alert\"\r\n                               *ngIf=\"!NewFormatForm.controls['mime_type'].valid && NewFormatForm.controls['mime_type'].touched\">\r\n                            Extension is\r\n                            required\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div> -->\r\n                    <button [disabled]=\"!NewTypeForm.valid || loading\"\r\n                            class=\"btn btn-success pull-right submit-btn my-3\">\r\n                        <app-small-loader *ngIf=\"loading\"></app-small-loader>{{loading ? '' : 'Add Document Type'}}\r\n                    </button>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-types/document-types.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documents/document-types/document-types.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"loading == true\"></app-loader>\r\n<div class=\"container-fluid\" *ngIf=\"loading == false\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10 offset-md-1\">\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group box-shadow\">\r\n                    <a class=\"btn btn-success mr-2\" routerLink=\"/app/document-types/create\">\r\n                        <i class=\"fa fa-plus\"></i> Create Document Type </a>\r\n                    <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\"><i\r\n                            class=\"fa fa-search\"></i></div>\r\n                    <input #filterField type=\"text\"\r\n                           placeholder=\"Search Document Types\"\r\n                           class=\"form-control border-0\">\r\n                    <a class=\"btn btn-success\" (click)=\"getDocTypes(filterField.value)\"\r\n                       routerLink=\"/app/document-types/create\">\r\n                        Search</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <br>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-12\">\r\n            <!-- <h5 *ngIf=\"placeHolderMessage\" class=\"col-md-12 pt-2 pb-2 text-success\">{{placeHolderMessage}}</h5>\r\n            <h5 *ngIf=\"errorMessage\" class=\"col-md-12 pt-2 pb-2 text-danger\">{{errorMessage}}</h5> -->\r\n\r\n            <div class=\"table-responsive bg-white box-shadow\">\r\n                <table class=\"table table-hover\">\r\n\r\n                    <thead>\r\n                    <tr>\r\n                        <!-- <th><input displayType=\"checkbox\" name=\"all\" [checked]=\"isAllChecked()\" (change)=\"checkAll($event)\" [(ngModel)]=\"checked\"/></th> -->\r\n                        <th><input [checked]=\"isAllChecked\" (change)=\"checkAll()\" type=\"checkbox\"></th>\r\n                        <th>Name</th>\r\n                        <th>Description</th>\r\n                        <th>Created At</th>\r\n                        <th>Updated At</th>\r\n                        <th></th>\r\n                    </tr>\r\n                    </thead>\r\n\r\n                    <tr *ngFor=\"let doctype of doc_types\">\r\n                        <td><input [checked]=\"doctype.selected\" type=\"checkbox\"></td>\r\n                        <td>{{doctype.name}}</td>\r\n                        <td>{{doctype.description}}</td>\r\n                        <td>{{doctype.created_at}}</td>\r\n                        <td>{{doctype.updated_at}}</td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"btn-group\" role=\"group\">\r\n\r\n                                <a routerLink=\"/app/document-types/edit/{{doctype.id}}\" class=\"btn btn-secondary btn-sm\"><i\r\n                                        class=\"fa fa-tasks\"></i>&nbsp;Edit</a>\r\n                                <button (click)=\"deleteDocType(doctype.id)\" class=\"btn btn-danger btn-sm text-center\"><i\r\n                                        class=\"fa fa-trash\"></i>&nbsp;Delete\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n\r\n                </table>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-types/edit-document-type/edit-document-type.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documents/document-types/edit-document-type/edit-document-type.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"pageLoading\"></app-loader>\r\n<div class=\"container-fluid\" *ngIf=\"!pageLoading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <a class=\"btn btn-success offset-lg-10\" routerLink=\"/app/document-types\"> <i\r\n                    class=\"fa fa-chevron-left \"></i> Document Types </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<div class=\"row\" *ngIf=\"!pageLoading\">\r\n    <div class=\"col-lg-4 profile-info box-shadow offset-lg-1\">\r\n        <h3>DOCUMENT TYPE INFORMATION\r\n\r\n        </h3>\r\n        <div class=\"card\">\r\n            <div class=\"card-block pt-3\">\r\n\r\n                <br>\r\n                <div class=\"\">\r\n                    <div class=\"media-body ml-12\">\r\n\r\n                        <div class=\"row\">\r\n                            <h6 class=\"col-4 text-black pr-0\">Name:</h6>\r\n                            <h6 class=\"col-8 pl-2\">{{doc_type.name}} </h6>\r\n                            <h6 class=\"col-4 text-black pr-0\">Description:</h6>\r\n                            <h6 class=\"col-8 pl-2\">{{doc_type.description}}</h6>\r\n\r\n                            <div class=\"col-md-10 offset-md-1 action-box mt-3\">\r\n\r\n                                <button class=\"btn btn btn-danger\" (click)=\"onDelete($event)\">Delete Record</button>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 box-shadow form-holder\">\r\n        <div class=\"card border-0\">\r\n            <div class=\"card-block pt-3\">\r\n                <h3>{{doc_type.name}}</h3>\r\n                <hr>\r\n                <form class=\"form\" [formGroup]=\"TypeForm\" (ngSubmit)=\"onSubmit(TypeForm)\" novalidate>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Name<sup class=\"asterisk\">*</sup></label>\r\n                                <input type=\"text\" value=\"{{doc_type.name}}\" class=\"form-control\"\r\n                                       formControlName=\"name\">\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!TypeForm.controls['name'].valid && TypeForm.controls['name'].touched\">\r\n                                    The Name is Required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description<sup class=\"asterisk\">*</sup></label>\r\n                                <input type=\"text\" value=\"{{doc_type.description}}\" class=\"form-control\"\r\n                                       formControlName=\"description\">\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!TypeForm.controls['description'].valid && TypeForm.controls['description'].touched\">\r\n                                    The Description is Required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                          <label>Mime Type<sup class=\"asterisk\">*</sup></label>\r\n                          <input displayType=\"text\" value=\"{{doc_format.mime_type}}\"  class=\"form-control\"  formControlName=\"mime_type\">\r\n                          <div class=\"custom-alert\"\r\n                               *ngIf=\"!FormatForm.controls['mime_type'].valid && FormatForm.controls['mime_type'].touched\">\r\n                          The Mime Type is Required</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n           -->\r\n                    <button [disabled]=\"loading\" class=\"btn btn-block submit-btn my-3\">\r\n                        <app-small-loader *ngIf=\"loading\"></app-small-loader>{{loading ? '' : 'Update Document Type'}}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/documents/document-types/add-document-type/add-document-type.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/documents/document-types/add-document-type/add-document-type.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50cy9kb2N1bWVudC10eXBlcy9hZGQtZG9jdW1lbnQtdHlwZS9hZGQtZG9jdW1lbnQtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/documents/document-types/add-document-type/add-document-type.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/documents/document-types/add-document-type/add-document-type.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddDocumentTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDocumentTypeComponent", function() { return AddDocumentTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_document_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/document-types.service */ "./src/app/services/document-types.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app.constants */ "./src/app/app.constants.ts");






let AddDocumentTypeComponent = class AddDocumentTypeComponent {
    constructor(formBuilder, router, route, documentTypeService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.documentTypeService = documentTypeService;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.NewTypeForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            allowed: [0],
        });
    }
    onSubmit({ value, valid }) {
        if (value) {
            this.loading = true;
            this.documentTypeService.addDocType(value).subscribe((document_type) => {
                if (document_type) {
                    this.router.navigate(['/app/document-types']);
                }
                this.loading = false;
            }, (err) => {
                _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, this.router, true);
                this.loading = false;
            });
        }
    }
};
AddDocumentTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-document-type',
        template: __webpack_require__(/*! raw-loader!./add-document-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-types/add-document-type/add-document-type.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./add-document-type.component.scss */ "./src/app/pages/documents/document-types/add-document-type/add-document-type.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_document_types_service__WEBPACK_IMPORTED_MODULE_4__["DocumentTypeService"]])
], AddDocumentTypeComponent);



/***/ }),

/***/ "./src/app/pages/documents/document-types/document-types.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/documents/document-types/document-types.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50cy9kb2N1bWVudC10eXBlcy9kb2N1bWVudC10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/documents/document-types/document-types.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/documents/document-types/document-types.component.ts ***!
  \****************************************************************************/
/*! exports provided: DocumentTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentTypesComponent", function() { return DocumentTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_document_types_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/document-types.service */ "./src/app/services/document-types.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let DocumentTypesComponent = class DocumentTypesComponent {
    constructor(documentTypeService, route, _Location, router) {
        this.documentTypeService = documentTypeService;
        this.route = route;
        this._Location = _Location;
        this.router = router;
        this.doc_types = [];
        this.toggle = false;
    }
    ngOnInit() {
        this.getDocTypes('');
    }
    checkAll(ev) {
        this.doc_types.forEach(x => x.selected = ev.target.checked);
    }
    get isAllChecked() {
        return this.doc_types.every(_ => _.selected);
    }
    get hasSomeChecked() {
        return this.doc_types.find(e => e.selected);
    }
    getDocTypes(filter) {
        this.loading = true;
        this.doc_types = [];
        this.documentTypeService.getDocumentTypes(filter).subscribe((doc_types) => {
            this.doc_types = doc_types;
            this.loading = false;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, this.router);
            this.loading = false;
        });
    }
    deleteDocType(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Confirm delete',
            text: 'Do you want to delete the selected record?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(willDelete => {
            if (willDelete.value) {
                this.documentTypeService.deleteDocumentType(id).subscribe((status) => {
                    if (status) {
                        _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].succeeded('Document Type has been deleted!');
                        window.setTimeout(function () {
                            location.reload();
                        }, 2000);
                    }
                    else {
                        _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].error('Unable to delete Document Type');
                    }
                }, (err) => {
                    _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, this.router, true);
                });
            }
        });
    }
};
DocumentTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-types',
        template: __webpack_require__(/*! raw-loader!./document-types.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-types/document-types.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./document-types.component.scss */ "./src/app/pages/documents/document-types/document-types.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_document_types_service__WEBPACK_IMPORTED_MODULE_5__["DocumentTypeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DocumentTypesComponent);



/***/ }),

/***/ "./src/app/pages/documents/document-types/document-types.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/documents/document-types/document-types.module.ts ***!
  \*************************************************************************/
/*! exports provided: routes, DocumentTypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentTypesModule", function() { return DocumentTypesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _document_types_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./document-types.component */ "./src/app/pages/documents/document-types/document-types.component.ts");
/* harmony import */ var _add_document_type_add_document_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-document-type/add-document-type.component */ "./src/app/pages/documents/document-types/add-document-type/add-document-type.component.ts");
/* harmony import */ var _edit_document_type_edit_document_type_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-document-type/edit-document-type.component */ "./src/app/pages/documents/document-types/edit-document-type/edit-document-type.component.ts");










const routes = [
    { path: '', component: _document_types_component__WEBPACK_IMPORTED_MODULE_7__["DocumentTypesComponent"] },
    { path: 'create', component: _add_document_type_add_document_type_component__WEBPACK_IMPORTED_MODULE_8__["AddDocumentTypeComponent"] },
    { path: 'edit/:id', component: _edit_document_type_edit_document_type_component__WEBPACK_IMPORTED_MODULE_9__["EditDocumentTypeComponent"] },
];
let DocumentTypesModule = class DocumentTypesModule {
};
DocumentTypesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _document_types_component__WEBPACK_IMPORTED_MODULE_7__["DocumentTypesComponent"], _add_document_type_add_document_type_component__WEBPACK_IMPORTED_MODULE_8__["AddDocumentTypeComponent"], _edit_document_type_edit_document_type_component__WEBPACK_IMPORTED_MODULE_9__["EditDocumentTypeComponent"]
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
], DocumentTypesModule);



/***/ }),

/***/ "./src/app/pages/documents/document-types/edit-document-type/edit-document-type.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/documents/document-types/edit-document-type/edit-document-type.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50cy9kb2N1bWVudC10eXBlcy9lZGl0LWRvY3VtZW50LXR5cGUvZWRpdC1kb2N1bWVudC10eXBlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/documents/document-types/edit-document-type/edit-document-type.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/documents/document-types/edit-document-type/edit-document-type.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EditDocumentTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDocumentTypeComponent", function() { return EditDocumentTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_document_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/document-types.service */ "./src/app/services/document-types.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app.constants */ "./src/app/app.constants.ts");






let EditDocumentTypeComponent = class EditDocumentTypeComponent {
    constructor(formBuilder, router, route, documentTypeService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.documentTypeService = documentTypeService;
        this.doc_type = {
            name: '',
            description: '',
        };
        this.doc_types = [];
    }
    ngOnInit() {
        this.buildForm();
        const id = this.route.snapshot.params['id'];
        this.getDocumentType(id);
    }
    buildForm() {
        this.TypeForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
        });
    }
    getDocumentType(id) {
        this.pageLoading = true;
        this.documentTypeService.getDocumentTypeByID(id).subscribe((doc_type) => {
            this.doc_type = doc_type;
            this.TypeForm.patchValue({
                name: this.doc_type.name,
                description: this.doc_type.description,
            });
            this.pageLoading = false;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, this.router, true);
            this.pageLoading = false;
        });
    }
    onSubmit({ value, valid }) {
        value.id = this.doc_type.id;
        this.loading = true;
        if (value.id) {
            this.documentTypeService.updateDocumentType(value)
                .subscribe((doc_type) => {
                if (this.doc_type) {
                    this.onSuccess = 'Document Type successfully updated';
                }
            }, (err) => {
                this.errorMessage = err.Staus;
            }, () => {
                this.loading = false;
            });
        }
    }
    onDelete(event) {
        event.preventDefault();
        this.documentTypeService.deleteDocumentType(this.doc_type.id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/app/document-types']);
            }
            else {
                _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].error('Unable to delete Document Type');
            }
        }, (err) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, this.router, true);
        });
    }
};
EditDocumentTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-document-type',
        template: __webpack_require__(/*! raw-loader!./edit-document-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documents/document-types/edit-document-type/edit-document-type.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./edit-document-type.component.scss */ "./src/app/pages/documents/document-types/edit-document-type/edit-document-type.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_document_types_service__WEBPACK_IMPORTED_MODULE_4__["DocumentTypeService"]])
], EditDocumentTypeComponent);



/***/ })

}]);
//# sourceMappingURL=app-pages-documents-document-types-document-types-module-es2015.js.map