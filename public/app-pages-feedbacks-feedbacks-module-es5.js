(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-feedbacks-feedbacks-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/feedbacks/feedback-list/feedback-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/feedbacks/feedback-list/feedback-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- <h4 class=\"text-center\">Notifications</h4> -->\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <div class=\"form-group\">\n        <div class=\"input-group box-shadow\">\n          <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\"><i\n            class=\"fa fa-search\"></i></div>\n          <input #filterField type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search Feedback list\"\n                 class=\"form-control border-0\">\n          <!-- <a  *ngIf=\"rolePermission !== 'super_admin'\" class=\"btn btn-success\" routerLink=\"/app/save-notification\">\n            <i class=\"fa fa-bell\"></i>&nbsp;Save Notification </a> -->\n          <button class=\"btn btn-success\" (click)=\"submitSearch()\">Search</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"table-responsive bg-white box-shadow\">\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th><input type=\"checkbox\"></th>\n            <th>Full Name</th>\n            <th>Email</th>\n            <th>Phone</th>\n            <th>Content</th>\n            <th>Status</th>\n            <th>Created At</th>\n            <th>Updated At</th>\n            <th></th>\n          </tr>\n          </thead>\n          <tr *ngFor=\"let feedback of feedbacks\">\n            <td><input type=\"checkbox\"></td>\n            <td>{{feedback.first_name}} {{feedback.last_name}}</td>\n            <td>{{feedback.email}}</td>\n            <td>{{feedback.phone}}</td>\n            <td>{{feedback.preview}}</td>\n            <td>{{feedback.status}}</td>\n            <td>{{feedback.created_at}}</td>\n            <td>{{feedback.updated_at}}</td>\n            <td class=\"align-middle\">\n              <div class=\"btn-group\" role=\"group\">\n\n                <a routerLink=\"/app/feedbacks/view/{{feedback.id}}\" class=\"btn btn-success btn-sm\"><i\n                  class=\"fa fa-reply\"></i>&nbsp;Respond</a>\n                &nbsp;&nbsp;&nbsp;\n                <a (click)=\"deleteFeedback(feedback)\" class=\"btn btn-danger btn-sm text-center\"> <i\n                  class=\"fa fa-trash\"></i>&nbsp;Delete</a>\n              </div>\n            </td>\n          </tr>\n          <tr *ngIf=\"(feedbacks == null || feedbacks.length < 1) && !loading\">\n            <td colspan=\"11\" class=\"text-center\">Sorry, no result to show...</td>\n          </tr>\n          <tr *ngIf=\"loading\">\n            <td colspan=\"11\" class=\"text-center\">\n              <app-item-loader></app-item-loader>\n            </td>\n          </tr>\n        </table>\n\n      </div>\n    </div>\n\n\n    <div class=\"col-md-12 text-center text-success\"*ngIf=\"last_page > 1 || 1\">\n      <div class=\"col-lg-12\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 mt-3\">\n            <div style=\"display: inline-block; width: 470px;\">\n              <div class=\"input-group\">\n                <button type=\"button\" class=\"btn btn-danger mr-2\" tabindex=\"-1\"\n                        (click)=\"getFeedback(prev_page_url, '')\"\n                        [disabled]=\"prev_page_url === null\"><i\n                  class=\"fa fa-chevron-left \"></i> &nbsp;Previous\n                </button>\n                <span class=\"btn\">Page {{current_page}} of {{last_page}}</span>\n                <button type=\"button\" [disabled]=\"next_page_url === null\" class=\"btn btn-success\"\n                        (click)=\"getFeedback(next_page_url, '')\">Next&nbsp;\n                  <i class=\"fa fa-chevron-right \"></i> &nbsp;&nbsp;\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/feedbacks/view-feedback/view-feedback.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/feedbacks/view-feedback/view-feedback.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"pageLoading == true\"></app-loader>\n\n<div class=\"container-fluid\" *ngIf=\"!pageLoading && feedback\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <a class=\"btn btn-success offset-lg-10\" routerLink=\"/app/feedbacks\"> <i\n        class=\"fa fa-chevron-left \"></i> Go Back to Feedback </a>\n    </div>\n  </div>\n</div>\n<br>\n<div class=\"row\" *ngIf=\"!pageLoading && feedback\">\n  <div class=\"col-lg-4 profile-info box-shadow offset-lg-1\">\n    <h3>FEEDBACK INFORMATION\n\n    </h3>\n    <div class=\"card\">\n      <div class=\"card-block pt-3\">\n\n        <br>\n        <div class=\"\">\n          <div class=\"media-body ml-12\">\n\n            <div class=\"row\">\n              <h6 class=\"col-4 text-black pr-0\">Sender:</h6>\n              <h6 class=\"col-8 pl-2\">{{feedback.first_name}} {{feedback.last_name}}</h6>\n              <h6 class=\"col-4 text-black pr-0\">Email:</h6>\n              <h6 class=\"col-8 pl-2\">{{feedback.email}}</h6>\n\n              <h6 class=\"col-4 text-black pr-0\">Phone:</h6>\n              <h6 class=\"col-8 pl-2\">{{feedback.phone}}</h6>\n              <h6 class=\"col-4 text-black pr-0\">Content:</h6>\n              <h6 class=\"col-8 pl-2\">{{feedback.content}}</h6>\n              <h6 class=\"col-4 text-black pr-0\">Status:</h6>\n              <h6 class=\"col-8 pl-2\"><b>{{feedback.status}}</b></h6>\n              <br>\n              <br><br>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 box-shadow form-holder\">\n    <div class=\"card border-0 mb-3\">\n      <div class=\"card-block pt-3\">\n        <h3>Respond To Feedback</h3>\n        <hr>\n        <form class=\"form\" [formGroup]=\"NewResponseForm\" (ngSubmit)=\"onSubmit(NewResponseForm)\" novalidate>\n\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Content<sup class=\"asterisk\">*</sup></label>\n                <textarea height=\"200px\" class=\"form-control\" rows=\"7\"\n                          formControlName=\"content\"></textarea>\n                <div class=\"custom-alert\"\n                     *ngIf=\"!NewResponseForm.controls['content'].valid && NewResponseForm.controls['content'].touched\">\n                  Content is Required\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <br>\n\n          <button [disabled]=\"loading\" class=\"btn btn-block submit-btn\">\n            <app-small-loader *ngIf=\"loading\"></app-small-loader>\n            {{loading ? '' : 'Send Response'}}\n          </button>\n          <br><br>\n        </form>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n\n<br>\n<br>\n<div class=\"container-fluid\" *ngIf=\"feedback?.responses?.length != null\">\n  <div class=\"col-10 offset-1\">\n    <div class=\"card border-0 box-shadow\"\n         *ngFor=\"let response of feedback.responses| slice:0:15; let i=index\">\n\n      <div class=\"card-block pt-3\">\n        <ul class=\"list-unstyled\">\n          <li class=\"media\">\n            <div class=\"col-xs-1 name-badge bg-default\"><h3>{{response.commentInitials}}</h3>\n            </div>\n            <div class=\"col-11 media-body\">\n              <h4 class=\"media-heading text-success\">\n                <b>{{response.responder?.first_name || 'Anonymous' }}&nbsp;{{response.responder?.last_name}}</b>\n              </h4>\n              <p class=\"media-heading text-justify text-primary\"><i\n                class=\"fa fa-clock-o\"></i>&nbsp;{{response.time_created}}\n              </p>\n              <p [innerHTML]=\"response.content\"></p>\n            </div>\n            <hr>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!pageLoading && errorMessage\">\n  <app-resource-not-found [message]=\"errorMessage\"></app-resource-not-found>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/feedbacks/feedback-list/feedback-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/feedbacks/feedback-list/feedback-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWRiYWNrcy9mZWVkYmFjay1saXN0L2ZlZWRiYWNrLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/feedbacks/feedback-list/feedback-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/feedbacks/feedback-list/feedback-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeedbackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackListComponent", function() { return FeedbackListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_feedbacks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/feedbacks.service */ "./src/app/services/feedbacks.service.ts");






var FeedbackListComponent = /** @class */ (function () {
    function FeedbackListComponent(feedbacksService, route, _Location, router) {
        this.feedbacksService = feedbacksService;
        this.route = route;
        this._Location = _Location;
        this.router = router;
        this.feedbacks = [];
        this.searchText = '';
        this.toggle = false;
    }
    FeedbackListComponent.prototype.ngOnInit = function () {
        this.submitSearch();
    };
    FeedbackListComponent.prototype.submitSearch = function ($perPage) {
        if ($perPage === void 0) { $perPage = 15; }
        this.loading = true;
        this.feedbacks = [];
        this.last_page = -1;
        this.getFeedback('', this.searchText);
    };
    FeedbackListComponent.prototype.getFeedback = function (url, params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        this.feedbacksService.getPageFeedbacks(url, params).subscribe(function (data) {
            _this.feedbacks = data.data;
            _this.current_page = data.current_page;
            _this.from = data.from;
            _this.last_page = data.last_page;
            _this.next_page_url = data.next_page_url;
            _this.path = data.path;
            _this.prev_page_url = data.prev_page_url;
            _this.per_page = data.per_page;
            _this.to = data.to;
            _this.total = data.total;
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router);
            _this.loading = false;
        });
    };
    FeedbackListComponent.prototype.deleteFeedback = function (feedback) {
        var _this = this;
        _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].confirm({
            message: 'Are you sure you want to delete this feedback?',
            confirmText: 'Yes delete!'
        }, function (willDelete) {
            if (willDelete.value) {
                _this.feedbacksService.deleteFeedback(feedback.id).subscribe(function (status) {
                    if (status) {
                        _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].succeeded('Feedback has been deleted!', 'Successful');
                        _this.feedbacks.splice(_this.feedbacks.indexOf(feedback), 1);
                    }
                    else {
                        _this.errorMessage = 'Unable to delete Feedback';
                    }
                }, function (err) {
                    _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router);
                    _this.loading = false;
                });
            }
        });
    };
    FeedbackListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback-list',
            template: __webpack_require__(/*! raw-loader!./feedback-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/feedbacks/feedback-list/feedback-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./feedback-list.component.scss */ "./src/app/pages/feedbacks/feedback-list/feedback-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feedbacks_service__WEBPACK_IMPORTED_MODULE_5__["FeedbacksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FeedbackListComponent);
    return FeedbackListComponent;
}());



/***/ }),

/***/ "./src/app/pages/feedbacks/feedbacks.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/feedbacks/feedbacks.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, FeedbacksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbacksModule", function() { return FeedbacksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback-list/feedback-list.component */ "./src/app/pages/feedbacks/feedback-list/feedback-list.component.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _view_feedback_view_feedback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-feedback/view-feedback.component */ "./src/app/pages/feedbacks/view-feedback/view-feedback.component.ts");










var routes = [
    { path: '', redirectTo: '/app/feedbacks/list', pathMatch: 'full' },
    { path: 'list', component: _feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackListComponent"] },
    { path: 'view/:id', component: _view_feedback_view_feedback_component__WEBPACK_IMPORTED_MODULE_9__["ViewFeedbackComponent"] },
];
var FeedbacksModule = /** @class */ (function () {
    function FeedbacksModule() {
    }
    FeedbacksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_8__["CustomErrorModule"],
                _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
            ],
            declarations: [_feedback_list_feedback_list_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackListComponent"], _view_feedback_view_feedback_component__WEBPACK_IMPORTED_MODULE_9__["ViewFeedbackComponent"]]
        })
    ], FeedbacksModule);
    return FeedbacksModule;
}());



/***/ }),

/***/ "./src/app/pages/feedbacks/view-feedback/view-feedback.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/feedbacks/view-feedback/view-feedback.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-info {\n  background: #0DB28B;\n}\n.profile-info h3 {\n  color: white;\n  text-align: center;\n  margin-top: 20px;\n}\n.profile-info .card {\n  margin-top: 20px;\n  height: 80%;\n}\n.profile-info .card .media .media-body h6 {\n  font-size: 16px;\n}\n.profile-info .action-box {\n  border-radius: 3px;\n  border: 2px dashed #ECEEEF;\n  padding: 10px;\n  align-items: center;\n}\n.profile-info .action-box button {\n  cursor: pointer;\n}\n.profile-info .action-box h3 {\n  color: #333333;\n  text-align: left;\n}\n.profile-info .form-holder {\n  background: white !important;\n}\n.submit-btn {\n  padding: 15px 20px;\n  background: #0DB28B;\n  color: white;\n  font-weight: bolder;\n}\n.asterisk {\n  font-size: 12px;\n  color: red;\n}\n.name-badge {\n  background: #0DB28B;\n  text-align: center;\n  color: white;\n  padding: 18px 15px;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n.name-badge h3 {\n  font-size: 40px;\n  line-height: 40px !important;\n}\n.table td.text {\n  max-width: 300px;\n}\n.table td.text span {\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: 100%;\n}\n.table td.text2 {\n  max-width: 100px;\n}\n.table td.text2 span {\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZGJhY2tzL3ZpZXctZmVlZGJhY2svQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcSWxvciB0ZWNobm9sb2dpZXMgbHRkXFxpbG9yLXBjLXdlYi9zcmNcXGFwcFxccGFnZXNcXGZlZWRiYWNrc1xcdmlldy1mZWVkYmFja1xcdmlldy1mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmVlZGJhY2tzL3ZpZXctZmVlZGJhY2svdmlldy1mZWVkYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7QURBSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRU47QURBSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0VOO0FEQ1E7RUFDRSxlQUFBO0FDQ1Y7QURJSTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNGTjtBRElNO0VBQ0UsZUFBQTtBQ0ZSO0FES007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRE9JO0VBQ0UsNEJBQUE7QUNMTjtBRFFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0xKO0FET0U7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0pKO0FET0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pKO0FES0k7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUNITjtBRE9FO0VBQ0UsZ0JBQUE7QUNKSjtBREtJO0VBQ0UscUJBQUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDSFI7QURPRTtFQUNFLGdCQUFBO0FDSko7QURLSTtFQUNFLHFCQUFBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVlZGJhY2tzL3ZpZXctZmVlZGJhY2svdmlldy1mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWluZm8ge1xuICAgIGJhY2tncm91bmQ6ICMwREIyOEI7XG4gICAgaDMge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgLmNhcmQge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGhlaWdodDogODAlO1xuXG4gICAgICAubWVkaWEge1xuICAgICAgICAubWVkaWEtYm9keSBoNiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbi1ib3h7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXI6IDJweCBkYXNoZWQgI0VDRUVFRjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBidXR0b257XG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgfVxuXG4gICAgICBoM3tcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvcm0taG9sZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5zdWJtaXQtYnRue1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG4gIC5hc3Rlcmlza3tcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5uYW1lLWJhZGdle1xuICAgIGJhY2tncm91bmQ6ICMwREIyOEI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxOHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBoM3tcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLnRhYmxlIHRkLnRleHQge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgc3BhbiB7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAudGFibGUgdGQudGV4dDIge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgc3BhbiB7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiIsIi5wcm9maWxlLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xufVxuLnByb2ZpbGUtaW5mbyBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnByb2ZpbGUtaW5mbyAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogODAlO1xufVxuLnByb2ZpbGUtaW5mbyAuY2FyZCAubWVkaWEgLm1lZGlhLWJvZHkgaDYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucHJvZmlsZS1pbmZvIC5hY3Rpb24tYm94IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgI0VDRUVFRjtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9maWxlLWluZm8gLmFjdGlvbi1ib3ggYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2ZpbGUtaW5mbyAuYWN0aW9uLWJveCBoMyB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnByb2ZpbGUtaW5mbyAuZm9ybS1ob2xkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uYXN0ZXJpc2sge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5uYW1lLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLm5hbWUtYmFkZ2UgaDMge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZSB0ZC50ZXh0IHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbi50YWJsZSB0ZC50ZXh0IHNwYW4ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnRhYmxlIHRkLnRleHQyIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cbi50YWJsZSB0ZC50ZXh0MiBzcGFuIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/feedbacks/view-feedback/view-feedback.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/feedbacks/view-feedback/view-feedback.component.ts ***!
  \**************************************************************************/
/*! exports provided: ViewFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFeedbackComponent", function() { return ViewFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_feedbacks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/feedbacks.service */ "./src/app/services/feedbacks.service.ts");







var ViewFeedbackComponent = /** @class */ (function () {
    function ViewFeedbackComponent(feedbacksService, formBuilder, route, router, _location) {
        this.feedbacksService = feedbacksService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.feedback = null;
        this.responses = [];
        this.feedbacks = [];
    }
    ViewFeedbackComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.getFeedback(id);
        this.buildForm();
    };
    ViewFeedbackComponent.prototype.backClicked = function () {
        this._location.back();
    };
    ViewFeedbackComponent.prototype.getFeedback = function (id) {
        var _this = this;
        this.pageLoading = true;
        this.feedbacksService.getFeedbackDetail(id)
            .subscribe(function (feedback) {
            _this.feedback = feedback;
            // console.log(feedback)
            for (var j = 0; j < _this.feedback.responses.length; j++) {
                _this.commentNameBadge = _this.feedback.responses[j].responder ? _this.feedback.responses[j].responder.full_name : 'Anonymous';
                var initials = _this.commentNameBadge.match(/\b\w/g) || [];
                _this.commentInitials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
                _this.feedback.responses[j].commentInitials = _this.commentInitials;
            }
            _this.NewResponseForm.patchValue({
                feedback_id: _this.feedback.id,
            });
            _this.pageLoading = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router);
            _this.pageLoading = false;
        });
    };
    ViewFeedbackComponent.prototype.buildForm = function () {
        this.NewResponseForm = this.formBuilder.group({
            feedback_id: [''],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
    };
    ViewFeedbackComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.loading = true;
        if (value) {
            // console.log(value)
            this.feedbacksService.createResponse(value)
                .subscribe(function (responses) {
                if (responses) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].succeeded('You have successfully responded', 'Responded!');
                    window.setTimeout(function () {
                        location.reload();
                    }, 2000);
                }
                else {
                    _this.loading = false;
                }
            }, function (err) {
                _this.loading = false;
                _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router, true);
            });
        }
    };
    ViewFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-feedback',
            template: __webpack_require__(/*! raw-loader!./view-feedback.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/feedbacks/view-feedback/view-feedback.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [_services_feedbacks_service__WEBPACK_IMPORTED_MODULE_6__["FeedbacksService"]],
            styles: [__webpack_require__(/*! ./view-feedback.component.scss */ "./src/app/pages/feedbacks/view-feedback/view-feedback.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feedbacks_service__WEBPACK_IMPORTED_MODULE_6__["FeedbacksService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ViewFeedbackComponent);
    return ViewFeedbackComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-feedbacks-feedbacks-module-es5.js.map