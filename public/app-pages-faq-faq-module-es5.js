(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-faq-faq-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/faq/add-faq/add-faq.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/faq/add-faq/add-faq.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-6  offset-lg-3 form-holder\">\r\n        <div class=\"card box-shadow border-0\">\r\n            <div class=\"card-block pt-3\">\r\n                <h3>Add New Faq\r\n                    <button routerLink=\"/app/faqs\" class=\"btn btn-success pull-right\"><i class=\"fa fa-caret-left\"></i>\r\n                        back to faqs\r\n                    </button>\r\n                </h3>\r\n                <hr>\r\n                <form class=\"form\" [formGroup]=\"NewFaqForm\" (ngSubmit)=\"onSubmit(NewFaqForm)\" novalidate>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Question<sup class=\"asterisk\">*</sup></label>\r\n                                <textarea class=\"form-control\" rows=\"3\" formControlName=\"question\"></textarea>\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!NewFaqForm.controls['question'].valid && NewFaqForm.controls['question'].touched\">\r\n                                    Question is Required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Answer<sup class=\"asterisk\">*</sup></label>\r\n                                <textarea class=\"form-control\" rows=\"7\" formControlName=\"answer\"></textarea>\r\n                                <div class=\"custom-alert\"\r\n                                     *ngIf=\"!NewFaqForm.controls['answer'].valid && NewFaqForm.controls['answer'].touched\">\r\n                                    Answer is Required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <button [disabled]=\"!NewFaqForm.valid || loading\"\r\n                            class=\"btn btn-block btn-success submit-btn\">\r\n                        <span *ngIf=\"loading\"><app-small-loader></app-small-loader></span>\r\n                        {{loading ? '' : 'Add New FAQ'}}\r\n                    </button>\r\n                    <br>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/faq/edit-faq/edit-faq.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/faq/edit-faq/edit-faq.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"pageLoading\"></app-loader>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"!pageLoading && faq\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <a class=\"btn btn-success offset-lg-10\" routerLink=\"/app/faqs\"> <i\r\n                    class=\"fa fa-chevron-left \"></i> Faqs list</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4 profile-info box-shadow offset-lg-1\">\r\n            <h3>FAQ INFORMATION</h3>\r\n            <div class=\"card\">\r\n                <div class=\"card-block pt-3\">\r\n                    <br>\r\n                    <div class=\"\">\r\n                        <div class=\"media-body ml-12\">\r\n\r\n                            <div class=\"row\">\r\n                                <h6 class=\"col-4 text-black pr-0\">Question:</h6>\r\n                                <h6 class=\"col-8 pl-2\">{{faq.question}} </h6>\r\n                                <h6 class=\"col-4 text-black pr-0\">Answer:</h6>\r\n                                <h6 class=\"col-8 pl-2\">{{faq.answer}}</h6>\r\n                                <br>\r\n                                <br><br>\r\n\r\n\r\n                                <div class=\"col-md-10 offset-md-1 action-box\">\r\n\r\n                                    <button [disabled]=\"deleteMessageEnabled\" class=\"btn btn btn-danger\" (click)=\"onDelete($event)\">Delete FAQ</button>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 box-shadow form-holder\">\r\n            <div class=\"card border-0\">\r\n                <div class=\"card-block pt-3\">\r\n                    <h3>{{faq.question}}</h3>\r\n                    <hr>\r\n                    <form class=\"form\" [formGroup]=\"faqForm\" (ngSubmit)=\"onSubmit(faqForm)\" novalidate>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Question<sup class=\"asterisk\">*</sup></label>\r\n                                    <textarea [(ngModel)]=\"faq.question\" class=\"form-control\" rows=\"3\"\r\n                                              formControlName=\"question\"></textarea>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!faqForm.controls['question'].valid && faqForm.controls['answer'].touched\">\r\n                                        The Question is Required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Answer<sup class=\"asterisk\">*</sup></label>\r\n                                    <textarea [(ngModel)]=\"faq.answer\" height=\"200px\" class=\"form-control\" rows=\"7\"\r\n                                              formControlName=\"answer\"></textarea>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!faqForm.controls['answer'].valid && faqForm.controls['answer'].touched\">\r\n                                        Answer is Required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n\r\n                        <button [disabled]=\"loading\" class=\"btn btn-block submit-btn\">\r\n                            <app-small-loader *ngIf=\"loading\"></app-small-loader>\r\n                            {{loading ? '' : 'Update FAQ'}}\r\n                        </button>\r\n                        <br>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>\r\n<app-resource-not-found [willShow]=\"!pageLoading && !faq\" [message]=\"errorMessage\">\r\n</app-resource-not-found>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/faq/faq.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/faq/faq.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"loading == true\"></app-loader>\r\n<div class=\"container-fluid\" *ngIf=\"loading == false\">\r\n    <h4 class=\"text-center\">Frequently Asked Question</h4>\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 offset-md-2 px-1\">\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group box-shadow\">\r\n                    <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\"><i\r\n                            class=\"fa fa-search\"></i></div>\r\n                    <input #filterField (keyup)=\"loadData(filterField.value)\" type=\"text\" placeholder=\"Search Faqs\"\r\n                           class=\"form-control border-0\">\r\n                    <a *ngIf=\"can(permissions.add_faq) || can(permissions.add_faqs)\" class=\"btn btn-success\" routerLink=\"/app/faqs/create\">\r\n                        <i class=\"fa fa-plus\"></i> Create New FAQ </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n        <h5 *ngIf=\"placeHolderMessage\" class=\"col-md-12 pt-2 pb-2 text-success text-center\">{{placeHolderMessage}}</h5>\r\n        <h5 *ngIf=\"errorMessage\" class=\"col-md-12 pt-2 pb-2 text-danger text-center\">{{errorMessage}}</h5>\r\n        <div class=\"col-lg-10 offset-lg-1 px-1\">\r\n            <div class=\"card border-0 box-shadow rounded-2\" *ngFor=\"let faq of faqs\">\r\n                <div class=\"card-header border-0 rounded-0 text-muted\">\r\n                    <h4 class=\" col-8 text-primary p-0\"><i class=\"fa fa-check-circle\"></i>&nbsp;{{faq.question}}</h4>\r\n                    <div class=\"widget-controls\">\r\n                        <a *ngIf=\"can(permissions.edit_faq) || can(permissions.edit_faqs)\" routerLink=\"/app/faqs/edit/{{faq.id}}\"\r\n                           class=\"btn btn-success text-white border-0\"><i class=\"fa fa-pencil\"></i></a>\r\n                        <a *ngIf=\"can(permissions.delete_faq) || can(permissions.delete_faqs)\" (click)=\"deleteFaq(faq.id)\"\r\n                           class=\"btn btn-danger text-white border-0\"><i class=\"fa fa-trash\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <h6 class=\"text-justify px-3\" style=\"line-height: 1.5; color: #000;\">{{faq.answer}}</h6>\r\n                <br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/faq/add-faq/add-faq.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/faq/add-faq/add-faq.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9hZGQtZmFxL2FkZC1mYXEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/faq/add-faq/add-faq.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/faq/add-faq/add-faq.component.ts ***!
  \********************************************************/
/*! exports provided: AddFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFaqComponent", function() { return AddFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_faq_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/faq.service */ "./src/app/services/faq.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");






var AddFaqComponent = /** @class */ (function () {
    function AddFaqComponent(formBuilder, router, route, faqService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.faqService = faqService;
        this.faqs = [];
        this.selected = [];
    }
    AddFaqComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AddFaqComponent.prototype.buildForm = function () {
        this.NewFaqForm = this.formBuilder.group({
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    };
    AddFaqComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.loading = true;
        if (value) {
            this.faqService.addFaq(value).subscribe(function (faqs) {
                if (faqs) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].succeeded('Faq created successfully');
                    _this.NewFaqForm.reset();
                }
                _this.loading = false;
            }, function (err) {
                _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, _this.router, true);
                _this.loading = false;
            });
        }
    };
    AddFaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add-faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/faq/add-faq/add-faq.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [_services_faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"]],
            styles: [__webpack_require__(/*! ./add-faq.component.scss */ "./src/app/pages/faq/add-faq/add-faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"]])
    ], AddFaqComponent);
    return AddFaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/edit-faq/edit-faq.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/faq/edit-faq/edit-faq.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-info {\n  background: #0DB28B;\n}\n.profile-info h3 {\n  color: white;\n  text-align: center;\n  margin-top: 20px;\n}\n.profile-info .card {\n  margin-top: 20px;\n  height: 80%;\n}\n.profile-info .card .media .media-body h6 {\n  font-size: 16px;\n}\n.profile-info .action-box {\n  border-radius: 3px;\n  border: 2px dashed #ECEEEF;\n  padding: 10px;\n  align-items: center;\n}\n.profile-info .action-box button {\n  cursor: pointer;\n}\n.profile-info .action-box h3 {\n  color: #333333;\n  text-align: left;\n}\n.profile-info .form-holder {\n  background: white !important;\n}\n.submit-btn {\n  padding: 15px 20px;\n  background: #0DB28B;\n  color: white;\n  font-weight: bolder;\n}\n.asterisk {\n  font-size: 12px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFxL2VkaXQtZmFxL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFxmYXFcXGVkaXQtZmFxXFxlZGl0LWZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmFxL2VkaXQtZmFxL2VkaXQtZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjtBREFJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFTjtBREFJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDRU47QURDUTtFQUNFLGVBQUE7QUNDVjtBRElJO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0FDRlI7QURLTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0hSO0FET0k7RUFDRSw0QkFBQTtBQ0xOO0FEUUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTEo7QURPRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYXEvZWRpdC1mYXEvZWRpdC1mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICMwREIyOEI7XHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICBcclxuICAgICAgLm1lZGlhIHtcclxuICAgICAgICAubWVkaWEtYm9keSBoNiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWN0aW9uLWJveHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBib3JkZXI6IDJweCBkYXNoZWQgI0VDRUVFRjtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgICAgYnV0dG9ue1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGgze1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5mb3JtLWhvbGRlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdWJtaXQtYnRue1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBEQjI4QjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIC5hc3Rlcmlza3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gICIsIi5wcm9maWxlLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xufVxuLnByb2ZpbGUtaW5mbyBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnByb2ZpbGUtaW5mbyAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogODAlO1xufVxuLnByb2ZpbGUtaW5mbyAuY2FyZCAubWVkaWEgLm1lZGlhLWJvZHkgaDYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucHJvZmlsZS1pbmZvIC5hY3Rpb24tYm94IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgI0VDRUVFRjtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9maWxlLWluZm8gLmFjdGlvbi1ib3ggYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2ZpbGUtaW5mbyAuYWN0aW9uLWJveCBoMyB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnByb2ZpbGUtaW5mbyAuZm9ybS1ob2xkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uYXN0ZXJpc2sge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/faq/edit-faq/edit-faq.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/faq/edit-faq/edit-faq.component.ts ***!
  \**********************************************************/
/*! exports provided: EditFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFaqComponent", function() { return EditFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_faq_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/faq.service */ "./src/app/services/faq.service.ts");






var EditFaqComponent = /** @class */ (function () {
    function EditFaqComponent(formBuilder, router, route, faqService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.faqService = faqService;
        this.faq = null;
        this.faqs = [];
    }
    EditFaqComponent.prototype.ngOnInit = function () {
        this.buildForm();
        var id = this.route.snapshot.params['id'];
        this.getFaq(id);
    };
    EditFaqComponent.prototype.buildForm = function () {
        this.faqForm = this.formBuilder.group({
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
        });
    };
    EditFaqComponent.prototype.getFaq = function (id) {
        var _this = this;
        this.pageLoading = true;
        this.faqService.getFaqByID(id).subscribe(function (faq) {
            _this.pageLoading = false;
            _this.faq = faq;
            _this.faqForm.patchValue({
                question: _this.faq.question,
                answer: _this.faq.answer,
            });
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router);
            _this.pageLoading = false;
        });
    };
    EditFaqComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        value.id = this.faq.id;
        this.loading = true;
        if (value.id) {
            this.faqService.updateFaq(value).subscribe(function (faq) {
                _this.loading = false;
                if (_this.faq) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].succeeded('FAQ Has been Updated!');
                    window.setTimeout(function () {
                        location.reload();
                    }, 2000);
                }
            }, function (err) {
                _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router, true);
                _this.loading = false;
            });
        }
    };
    EditFaqComponent.prototype.onDelete = function (event) {
        var _this = this;
        event.preventDefault();
        _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].confirm({ message: 'Do you want to delete this record?', confirmText: 'Delete' }, function (willDelete) {
            if (willDelete.value) {
                _this.deleteMessageEnabled = true;
                _this.faqService.deleteFaq(_this.faq.id).subscribe(function (status) {
                    if (status) {
                        _this.router.navigate(['/app/faqs']);
                    }
                    else {
                        _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].error('Unable to delete Faq');
                    }
                    _this.deleteMessageEnabled = false;
                }, function (err) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router, true);
                    _this.deleteMessageEnabled = false;
                });
            }
        });
    };
    EditFaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit-faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/faq/edit-faq/edit-faq.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./edit-faq.component.scss */ "./src/app/pages/faq/edit-faq/edit-faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_faq_service__WEBPACK_IMPORTED_MODULE_5__["FaqService"]])
    ], EditFaqComponent);
    return EditFaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/faq/faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_faq_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/faq.service */ "./src/app/services/faq.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data */ "./src/app/data.ts");









var FAQComponent = /** @class */ (function () {
    function FAQComponent(faqService, route, _Location, router) {
        this.faqService = faqService;
        this.route = route;
        this._Location = _Location;
        this.router = router;
        this.faqs = [];
        this.toggle = false;
        this.placeHolderMessage = '';
        this.role = localStorage.getItem('userRole');
    }
    FAQComponent.prototype.can = function (permission) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"].can(permission);
    };
    Object.defineProperty(FAQComponent.prototype, "permissions", {
        get: function () {
            return _data__WEBPACK_IMPORTED_MODULE_8__["AppData"].permissions;
        },
        enumerable: true,
        configurable: true
    });
    FAQComponent.prototype.ngOnInit = function () {
        this.getFaqs();
    };
    FAQComponent.prototype.loadData = function (search) {
        var _this = this;
        this.loading = false;
        this.placeHolderMessage = 'Searching........... Please Wait';
        this.faqService.getAllFaqs(search).subscribe(function (faqs) {
            _this.faqs = faqs;
            if (!faqs.length) {
                _this.placeHolderMessage = 'No FAQ On The System Yet!';
            }
            else {
                _this.placeHolderMessage = '';
            }
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, _this.router);
            _this.loading = false;
        });
    };
    FAQComponent.prototype.getFaqs = function () {
        var _this = this;
        this.loading = true;
        this.faqService.getFaqs().subscribe(function (faqs) {
            _this.faqs = faqs;
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, _this.router);
            _this.loading = false;
        });
    };
    FAQComponent.prototype.deleteFaq = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(function (willDelete) {
            if (willDelete.value) {
                _this.faqService.deleteFaq(id).subscribe(function (status) {
                    if (status) {
                        _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].succeeded('Faq has been deleted!');
                        window.setTimeout(function () {
                            location.reload();
                        }, 2000);
                    }
                    else {
                        _this.errorMessage = 'Unable to delete Faq';
                    }
                }, function (err) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, _this.router, true);
                });
            }
        });
    };
    FAQComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/faq/faq.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/pages/faq/faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FAQComponent);
    return FAQComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/*! exports provided: routes, FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_faq_add_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-faq/add-faq.component */ "./src/app/pages/faq/add-faq/add-faq.component.ts");
/* harmony import */ var _edit_faq_edit_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-faq/edit-faq.component */ "./src/app/pages/faq/edit-faq/edit-faq.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");











var routes = [
    { path: 'create', component: _add_faq_add_faq_component__WEBPACK_IMPORTED_MODULE_3__["AddFaqComponent"] },
    { path: 'edit/:id', component: _edit_faq_edit_faq_component__WEBPACK_IMPORTED_MODULE_4__["EditFaqComponent"] },
    { path: '', redirectTo: '/app/faqs/list', pathMatch: 'full' },
    { path: 'list', component: _faq_component__WEBPACK_IMPORTED_MODULE_8__["FAQComponent"] },
];
var FaqModule = /** @class */ (function () {
    function FaqModule() {
    }
    FaqModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_faq_add_faq_component__WEBPACK_IMPORTED_MODULE_3__["AddFaqComponent"], _edit_faq_edit_faq_component__WEBPACK_IMPORTED_MODULE_4__["EditFaqComponent"], _faq_component__WEBPACK_IMPORTED_MODULE_8__["FAQComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"],
                _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_10__["CustomErrorModule"]
            ]
        })
    ], FaqModule);
    return FaqModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-faq-faq-module-es5.js.map