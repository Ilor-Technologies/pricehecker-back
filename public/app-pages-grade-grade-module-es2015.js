(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-grade-grade-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/grade/add-grade/add-grade.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/grade/add-grade/add-grade.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-6  offset-lg-3 form-holder\">\n        <div class=\"card box-shadow border-0\">\n            <div class=\"card-block pt-3\">\n                <h3>Add New Grade\n                    <button routerLink=\"/app/grades\" class=\"btn btn-success pull-right\"><i class=\"fa fa-caret-left\"></i>\n                        All grades\n                    </button>\n                </h3>\n                <hr>\n                <form class=\"form\" [formGroup]=\"NewGradeForm\" (ngSubmit)=\"onSubmit(NewGradeForm)\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label>Level<sup class=\"asterisk\">*</sup></label>\n                                <input formControlName=\"level\" class=\"form-control\">\n                                <div class=\"custom-alert\"\n                                     *ngIf=\"!NewGradeForm.controls['level'].valid && NewGradeForm.controls['level'].touched\">\n                                    Level is Required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label>Description<sup class=\"asterisk\">*</sup></label>\n                                <textarea class=\"form-control\" rows=\"7\" formControlName=\"description\"></textarea>\n                                <div class=\"custom-alert\"\n                                     *ngIf=\"!NewGradeForm.controls['description'].valid && NewGradeForm.controls['description'].touched\">\n                                    Description is Required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <br>\n                    <button [disabled]=\"!NewGradeForm.valid || loading\"\n                            class=\"btn btn-block btn-success submit-btn\">\n                      <app-small-loader *ngIf=\"loading\"></app-small-loader>\n                      {{loading ? '' : 'Add New Grade'}}\n                    </button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/grade/edit-grade/edit-grade.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/grade/edit-grade/edit-grade.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"pageLoading == true\"></app-loader>\n\n<div class=\"container-fluid\" *ngIf=\"!pageLoading && grade\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <a class=\"btn btn-success offset-lg-10\" routerLink=\"/app/grades\"> <i\n                    class=\"fa fa-chevron-left \"></i> Go Back to All Grades</a>\n        </div>\n    </div>\n</div>\n<br>\n<div class=\"row\" *ngIf=\"!pageLoading && grade\">\n    <div class=\"col-lg-4 profile-info box-shadow offset-lg-1\">\n        <h3>GRADE INFORMATION\n\n        </h3>\n        <div class=\"card\">\n            <div class=\"card-block pt-3\">\n\n                <br>\n                <div class=\"\">\n                    <div class=\"media-body ml-12\">\n\n                        <div class=\"row\">\n                            <h6 class=\"col-4 text-black pr-0\">Level:</h6>\n                            <h6 class=\"col-8 pl-2\">{{grade.level}} </h6>\n                            <h6 class=\"col-4 text-black pr-0\">Description:</h6>\n                            <h6 class=\"col-8 pl-2\">{{grade.description}}</h6>\n                            <br>\n                            <br><br>\n                            <div class=\"col-md-10 offset-md-1 action-box\">\n                                <button class=\"btn btn btn-danger\" (click)=\"onDelete($event)\">Delete Grade</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6 box-shadow form-holder\">\n        <div class=\"card border-0\">\n            <div class=\"card-block pt-3\">\n                <h3>Edit Grade</h3>\n                <hr>\n                <form class=\"form\" [formGroup]=\"gradeForm\" (ngSubmit)=\"onSubmit(gradeForm)\" novalidate>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label>Level<sup class=\"asterisk\">*</sup></label>\n                                <input formControlName=\"level\" type=\"text\" [(ngModel)]=\"grade.level\" class=\"form-control\">\n                                <div class=\"custom-alert\"\n                                     *ngIf=\"!gradeForm.controls['level'].valid && gradeForm.controls['level'].touched\">\n                                    The Grade Level is Required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label>Description<sup class=\"asterisk\">*</sup></label>\n                                <textarea [(ngModel)]=\"grade.description\" height=\"200px\" class=\"form-control\" rows=\"7\"\n                                          formControlName=\"description\"></textarea>\n                                <div class=\"custom-alert\"\n                                     *ngIf=\"!gradeForm.controls['description'].valid && gradeForm.controls['description'].touched\">\n                                    Description is Required\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <br>\n\n                    <button class=\"btn btn-block submit-btn\" [disabled]=\"loading\">\n                      <app-small-loader *ngIf=\"loading\"></app-small-loader>\n                      {{loading ? '' : 'Update Grade'}}\n                    </button>\n                    <br><br>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"!pageLoading && !grade\">\n    <app-resource-not-found [message]=\"errorMessage\"></app-resource-not-found>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/grade/grade.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/grade/grade.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"row\">\n        <div class=\"col-md-10 offset-md-1\">\n            <div class=\"form-group\">\n                <div class=\"input-group box-shadow\">\n                    <a class=\"btn btn-success mr-2\" routerLink=\"/app/grades/create\">\n                        <i class=\"fa fa-plus\"></i> Add New Grade </a>\n                    <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\"><i\n                            class=\"fa fa-search\"></i></div>\n                    <input #filterField type=\"text\" placeholder=\"Search Grades\"\n                           class=\"form-control border-0\">\n                    <button class=\"btn btn-success\" (click)=\"getGrade(filterField.value)\">\n                        Search </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <br>\n    <div class=\"row\">\n\n        <div class=\"col-12\">\n            <!-- <h5 *ngIf=\"placeHolderMessage\" class=\"col-md-12 pt-2 pb-2 text-success\">{{placeHolderMessage}}</h5>\n            <h5 *ngIf=\"errorMessage\" class=\"col-md-12 pt-2 pb-2 text-danger\">{{errorMessage}}</h5> -->\n\n            <div class=\"table-responsive bg-white box-shadow\">\n                <table class=\"table table-hover\">\n\n                    <thead>\n                    <tr>\n                        <!-- <th><input displayType=\"checkbox\" name=\"all\" [checked]=\"isAllChecked()\" (change)=\"checkAll($event)\" [(ngModel)]=\"checked\"/></th> -->\n                        <th><input type=\"checkbox\"></th>\n                        <th>Level</th>\n                        <th>Description</th>\n                        <th>Created At</th>\n                        <th>Updated At</th>\n                        <th></th>\n                    </tr>\n                    </thead>\n\n                    <tr *ngFor=\"let grade of grades\">\n                        <td><input type=\"checkbox\"></td>\n                        <td>{{grade.level}}</td>\n                        <td>{{grade.description}}</td>\n                        <td>{{grade.created_at}}</td>\n                        <td>{{grade.updated_at}}</td>\n                        <td class=\"align-middle\">\n                            <div class=\"btn-group\" role=\"group\">\n                                <a routerLink=\"/app/grades/edit/{{grade.id}}\"\n                                   class=\"btn btn-success btn-sm mr-2\"><i class=\"fa fa-pencil\"></i>&nbsp;Edit</a>\n                                <a (click)=\"deleteGrade(grade.id)\" class=\"btn btn-danger btn-sm text-center\"> <i\n                                        class=\"fa fa-trash\"></i>&nbsp;Delete</a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr *ngIf=\"(grades == null || grades.length < 1) && !loading\">\n                        <td colspan=\"6\" class=\"text-center\">Sorry, no result found...</td>\n                    </tr>\n                    <tr *ngIf=\"loading\">\n                        <td colspan=\"6\" class=\"text-center\">\n                          <app-item-loader></app-item-loader><br>\n                            Loading, please wait...</td>\n                    </tr>\n\n                </table>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/grade/add-grade/add-grade.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/grade/add-grade/add-grade.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyYWRlL2FkZC1ncmFkZS9hZGQtZ3JhZGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/grade/add-grade/add-grade.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/grade/add-grade/add-grade.component.ts ***!
  \**************************************************************/
/*! exports provided: AddGradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGradeComponent", function() { return AddGradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_grade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/grade.service */ "./src/app/services/grade.service.ts");






let AddGradeComponent = class AddGradeComponent {
    constructor(formBuilder, router, route, gradesService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.gradesService = gradesService;
        this.grades = [];
        this.selected = [];
        this.errorMessage = '';
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.NewGradeForm = this.formBuilder.group({
            level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        // this.addDetails();
    }
    onSubmit({ value, valid }) {
        this.loading = true;
        if (value) {
            // console.log(value)
            this.gradesService.addGrade(value)
                .subscribe((grades) => {
                if (grades) {
                    this.NewGradeForm.reset();
                    _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].succeeded('Grade created successfully');
                }
                this.loading = false;
            }, (err) => {
                _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, this.router, true);
                this.loading = false;
            });
        }
    }
};
AddGradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-grade',
        template: __webpack_require__(/*! raw-loader!./add-grade.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/grade/add-grade/add-grade.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]],
        styles: [__webpack_require__(/*! ./add-grade.component.scss */ "./src/app/pages/grade/add-grade/add-grade.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]])
], AddGradeComponent);



/***/ }),

/***/ "./src/app/pages/grade/edit-grade/edit-grade.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/grade/edit-grade/edit-grade.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-info {\n  background: #0DB28B;\n}\n.profile-info h3 {\n  color: white;\n  text-align: center;\n  margin-top: 20px;\n}\n.profile-info .card {\n  margin-top: 20px;\n  height: 80%;\n}\n.profile-info .card .media .media-body h6 {\n  font-size: 16px;\n}\n.profile-info .action-box {\n  border-radius: 3px;\n  border: 2px dashed #ECEEEF;\n  padding: 10px;\n  align-items: center;\n}\n.profile-info .action-box button {\n  cursor: pointer;\n}\n.profile-info .action-box h3 {\n  color: #333333;\n  text-align: left;\n}\n.profile-info .form-holder {\n  background: white !important;\n}\n.submit-btn {\n  padding: 15px 20px;\n  background: #0DB28B;\n  color: white;\n  font-weight: bolder;\n}\n.asterisk {\n  font-size: 12px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JhZGUvZWRpdC1ncmFkZS9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXFByb2plY3RzXFxJbG9yIHRlY2hub2xvZ2llcyBsdGRcXGlsb3ItcGMtd2ViL3NyY1xcYXBwXFxwYWdlc1xcZ3JhZGVcXGVkaXQtZ3JhZGVcXGVkaXQtZ3JhZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dyYWRlL2VkaXQtZ3JhZGUvZWRpdC1ncmFkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7QURBSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRU47QURBSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0VOO0FEQ1E7RUFDRSxlQUFBO0FDQ1Y7QURJSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNGTjtBRElNO0VBQ0UsZUFBQTtBQ0ZSO0FES007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRE9JO0VBQ0UsNEJBQUE7QUNMTjtBRFFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0xKO0FET0U7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JhZGUvZWRpdC1ncmFkZS9lZGl0LWdyYWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW5mbyB7XG4gICAgYmFja2dyb3VuZDogIzBEQjI4QjtcbiAgICBoMyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgaGVpZ2h0OiA4MCU7XG4gIFxuICAgICAgLm1lZGlhIHtcbiAgICAgICAgLm1lZGlhLWJvZHkgaDYge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmFjdGlvbi1ib3h7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXI6IDJweCBkYXNoZWQgI0VDRUVFRjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICAgIGJ1dHRvbntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICB9XG4gIFxuICAgICAgaDN7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmZvcm0taG9sZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5zdWJtaXQtYnRue1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG4gIC5hc3Rlcmlza3tcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICAiLCIucHJvZmlsZS1pbmZvIHtcbiAgYmFja2dyb3VuZDogIzBEQjI4Qjtcbn1cbi5wcm9maWxlLWluZm8gaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wcm9maWxlLWluZm8gLmNhcmQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDgwJTtcbn1cbi5wcm9maWxlLWluZm8gLmNhcmQgLm1lZGlhIC5tZWRpYS1ib2R5IGg2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnByb2ZpbGUtaW5mbyAuYWN0aW9uLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNFQ0VFRUY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbmZvIC5hY3Rpb24tYm94IGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9maWxlLWluZm8gLmFjdGlvbi1ib3ggaDMge1xuICBjb2xvcjogIzMzMzMzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wcm9maWxlLWluZm8gLmZvcm0taG9sZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmFzdGVyaXNrIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/grade/edit-grade/edit-grade.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/grade/edit-grade/edit-grade.component.ts ***!
  \****************************************************************/
/*! exports provided: EditGradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGradeComponent", function() { return EditGradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_grade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/grade.service */ "./src/app/services/grade.service.ts");






let EditGradeComponent = class EditGradeComponent {
    constructor(formBuilder, router, route, gradesService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.gradesService = gradesService;
        this.grade = null;
        this.grades = [];
    }
    ngOnInit() {
        this.buildForm();
        const id = this.route.snapshot.params['id'];
        this.getGrade(id);
    }
    buildForm() {
        this.gradeForm = this.formBuilder.group({
            level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
        });
    }
    getGrade(id) {
        this.pageLoading = true;
        this.gradesService.getGradeByID(id)
            .subscribe((grade) => {
            this.grade = grade;
            this.gradeForm.patchValue({
                level: grade.level,
                description: grade.description
            });
            this.pageLoading = false;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, this.router);
            this.pageLoading = false;
        });
    }
    onSubmit({ value, valid }) {
        value.id = this.grade.id;
        this.loading = true;
        this.errorMessage = '';
        this.onSuccess = '';
        if (value.id) {
            this.gradesService.updateGrade(value)
                .subscribe((grade) => {
                if (grade) {
                    this.grade = value;
                    _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].succeeded('Grade successfully updated');
                }
                this.loading = false;
            }, (err) => {
                _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, this.router, true);
                this.loading = false;
            });
        }
    }
    onDelete(event) {
        event.preventDefault();
        _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].confirm({
            message: 'Do you want to delete this grade?', confirmText: 'Delete'
        }, (willDelete) => {
            if (willDelete.value) {
                this.gradesService.deleteGrade(this.grade.id)
                    .subscribe((status) => {
                    if (status) {
                        this.router.navigate(['/app/grades']);
                    }
                    else {
                        _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].error('Unable to delete grade');
                    }
                }, (err) => {
                    _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, this.router, true);
                });
            }
        });
    }
};
EditGradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-grade',
        template: __webpack_require__(/*! raw-loader!./edit-grade.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/grade/edit-grade/edit-grade.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]],
        styles: [__webpack_require__(/*! ./edit-grade.component.scss */ "./src/app/pages/grade/edit-grade/edit-grade.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_grade_service__WEBPACK_IMPORTED_MODULE_5__["GradeService"]])
], EditGradeComponent);



/***/ }),

/***/ "./src/app/pages/grade/grade.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/grade/grade.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyYWRlL2dyYWRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/grade/grade.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/grade/grade.component.ts ***!
  \************************************************/
/*! exports provided: GradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeComponent", function() { return GradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_grade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/grade.service */ "./src/app/services/grade.service.ts");





let GradeComponent = class GradeComponent {
    constructor(gradesService, route, router) {
        this.gradesService = gradesService;
        this.route = route;
        this.router = router;
        this.grades = [];
        // Documents: any;
        this.toggle = false;
        this.placeHolderMessage = '';
    }
    ngOnInit() {
        this.getGrade('');
    }
    getGrade(search) {
        this.loading = true;
        this.grades = [];
        this.gradesService.getGrades(search).subscribe((grades) => {
            this.grades = grades.grades || [];
            this.loading = false;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].handleError(err, this.router);
            this.loading = false;
        });
    }
    deleteGrade(id) {
        _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].confirm({
            message: 'Do tou want to delete the selected grade?',
            confirmText: 'Delete'
        }, (willDelete) => {
            if (willDelete.value) {
                this.gradesService.deleteGrade(id).subscribe((status) => {
                    if (status) {
                        _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].succeeded('Grade  has been deleted!', 'Successful');
                        // todo: remove item, instead of reloading
                        window.setTimeout(function () {
                            location.reload();
                        }, 2000);
                    }
                    else {
                        _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].error('Unable to delete the selected grade');
                    }
                }, (err) => {
                    _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].handleError(err, this.router, true);
                });
            }
        });
    }
};
GradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grade',
        template: __webpack_require__(/*! raw-loader!./grade.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/grade/grade.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_services_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"]],
        styles: [__webpack_require__(/*! ./grade.component.scss */ "./src/app/pages/grade/grade.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_grade_service__WEBPACK_IMPORTED_MODULE_4__["GradeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], GradeComponent);



/***/ }),

/***/ "./src/app/pages/grade/grade.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/grade/grade.module.ts ***!
  \*********************************************/
/*! exports provided: routes, GradeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeModule", function() { return GradeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _edit_grade_edit_grade_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-grade/edit-grade.component */ "./src/app/pages/grade/edit-grade/edit-grade.component.ts");
/* harmony import */ var _grade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grade.component */ "./src/app/pages/grade/grade.component.ts");
/* harmony import */ var _add_grade_add_grade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-grade/add-grade.component */ "./src/app/pages/grade/add-grade/add-grade.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");











const routes = [
    { path: 'create', component: _add_grade_add_grade_component__WEBPACK_IMPORTED_MODULE_5__["AddGradeComponent"] },
    { path: 'edit/:id', component: _edit_grade_edit_grade_component__WEBPACK_IMPORTED_MODULE_3__["EditGradeComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _grade_component__WEBPACK_IMPORTED_MODULE_4__["GradeComponent"] }
];
let GradeModule = class GradeModule {
};
GradeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_grade_add_grade_component__WEBPACK_IMPORTED_MODULE_5__["AddGradeComponent"], _edit_grade_edit_grade_component__WEBPACK_IMPORTED_MODULE_3__["EditGradeComponent"], _grade_component__WEBPACK_IMPORTED_MODULE_4__["GradeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_9__["CustomErrorModule"],
            _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__["LoaderModule"],
        ]
    })
], GradeModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-grade-grade-module-es2015.js.map