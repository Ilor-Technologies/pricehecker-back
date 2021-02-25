(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-survey-main-survey-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/survey/survey.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/survey/survey.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"loading == true\"></app-loader>\r\n<div class=\"container-fluid\" *ngIf=\"!loading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <form [formGroup]=\"searchForm\" (submit)=\"submitSearch()\" class=\"form\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"row box-shadow bg-white\">\r\n                        <div class=\"col-md-7 my-2\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0  mr-1 rounded-0 search-icon\">\r\n                                    <i class=\"fa fa-search\"></i></div>\r\n                                <input type=\"text\" formControlName=\"searchField\"\r\n                                       placeholder=\"Search survey by name or description\"\r\n                                       class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5 my-2\">\r\n                            <div class=\"input-group\">\r\n                                <input type=\"date\" formControlName=\"fromDate\" class=\"form-control mr-1\"\r\n                                       placeholder=\"From date\"\r\n                                       name=\"from\" #from formControlName=\"fromDate\">\r\n                                <input class=\"form-control mr-1\" type=\"date\" placeholder=\"To date\"\r\n                                       name=\"to\" #to formControlName=\"toDate\">\r\n                                <button type=\"submit\" [disabled]=\"searching\" class=\"btn btn-success btn-sm\">\r\n                                    <i class=\"fa fa-search\"></i> Search Result\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-danger mb-2\" [innerHTML]=\"errorMessage\"></div>\r\n            <div class=\"table-responsive bg-white box-shadow\">\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><input type=\"checkbox\" name=\"all\" [checked]=\"isAllChecked()\" (change)=\"checkAll($event)\">\r\n                        </th>\r\n                        <th>Title</th>\r\n                        <th class=\"w-25\">Description</th>\r\n                        <th>Reviewed By</th>\r\n                        <th>Approved By</th>\r\n                        <th>Created At</th>\r\n                        <th>\r\n                            <button *ngIf=\"hasSomeItemsChecked\" [hidden]=\"loading||deleting\" (click)=\"deleteSelected()\"\r\n                                    class=\"btn btn-danger btn-sm text-center\">\r\n                                <i class=\"fa fa-trash\"></i> Delete Selected\r\n                            </button>\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let survey of surveyReports\">\r\n                        <td class=\"align-middle text-truncate\">\r\n                            <input type=\"checkbox\" (change)=\"updateSelectionChanged()\"\r\n                                   value=\"{{survey.id}}\" [(ngModel)]=\"survey.selected\"></td>\r\n                        <td class=\"align-middle text-truncate\"> {{survey.title}}</td>\r\n                        <td class=\"align-middle text text-truncate\"><span>{{survey.description}}</span></td>\r\n                        <td class=\"align-middle text-truncate\">{{survey.reviewed_by}}<span\r\n                                *ngIf=\"!survey.reviewed_by\"> Pending Review</span></td>\r\n                        <td class=\"align-middle text-truncate\">{{survey.approved_by}}<span\r\n                                *ngIf=\"!survey.approved_by\"> Pending Approval</span></td>\r\n                        <td class=\"align-middle text-truncate\">{{survey.created_at}}</td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"btn-group\" role=\"group\">\r\n                                <!-- <a routerLink=\"/app/edit-survey/{{survey.id}}\" placement=\"top\" [ngbTooltip]=\"'edit survey'\" class=\"btn btn-secondary btn-sm\" ><i class=\"fa fa-pencil\"></i>&nbsp;Edit Report</a>&nbsp; -->\r\n                                <a routerLink=\"/app/survey/view/{{survey.id}}\" class=\"btn btn-secondary btn-sm\"><i\r\n                                        class=\"fa fa-eye\"></i>&nbsp;View Report</a>&nbsp;\r\n                                <button [disabled]=\"processingDelete\" (click)=\"deleteSurvey(survey.id)\"\r\n                                        class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash\"></i>&nbsp;Delete Report\r\n                                </button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(surveyReports == null || surveyReports.length < 1) && !searching\">\r\n                        <td colspan=\"8\" class=\"text-center\">Sorry, no result to show...</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"searching\">\r\n                        <td colspan=\"8\" class=\"text-center\">\r\n                            <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                                 enable-background=\"new 0 0 40 40\" height=\"40px\" id=\"loader-1\" version=\"1.1\"\r\n                                 viewBox=\"0 0 40 40\" width=\"40px\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\r\n  <path d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n        fill=\"#000\" opacity=\"0.2\"></path>\r\n                                <path d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\" fill=\"#000\" transform=\"rotate(0.00000178639 21.8896 21.8896)\">\r\n    <animateTransform attributeName=\"transform\" attributeType=\"xml\" dur=\"0.5s\" from=\"0 20 20\" repeatCount=\"indefinite\"\r\n                      to=\"360 20 20\" type=\"rotate\"></animateTransform>\r\n    </path>\r\n  </svg>\r\n                            <br>\r\n                            Loading, please wait...\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"col-md-12 text-center text-success pb-5 mt-3\"*ngIf=\"last_page > 1 || 1\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"row text-center\">\r\n            <div style=\"display: inline-block; width: 470px;\">\r\n                <div class=\"input-group\">\r\n                    <button type=\"button\" class=\"btn btn-danger mr-2\" tabindex=\"-1\"\r\n                            (click)=\"searchResult(prev_page_url, '')\"\r\n                            [disabled]=\"prev_page_url === null\"><i\r\n                            class=\"fa fa-chevron-left \"></i> &nbsp;Previous\r\n                    </button>\r\n                    <span class=\"btn\">Page {{current_page}} of {{last_page}}</span>\r\n                    <select id=\"per-page-select\" (change)=\"submitSearch()\" class=\"form-control mr-2\">\r\n                        <option value=\"10\">Per Page</option>\r\n                        <option value=\"15\">15</option>\r\n                        <option value=\"25\">25</option>\r\n                        <option value=\"50\">50</option>\r\n                        <option value=\"100\">100</option>\r\n                    </select>\r\n                    <button type=\"button\" [disabled]=\"next_page_url === null\" class=\"btn btn-success\"\r\n                            (click)=\"searchResult(next_page_url, '')\">Next&nbsp;\r\n                        <i class=\"fa fa-chevron-right \"></i> &nbsp;&nbsp;\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/survey/view-survey/view-survey.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/survey/view-survey/view-survey.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"loading\"></app-loader>\r\n<div id=\"printSection\" class=\"container-fluid\" *ngIf=\"!loading && report != null\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mb-4\" style=\"padding: 30px\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 mb-3 hide-on-print\">\r\n                    <button (click)=\"print()\" class=\"btn ml-2 btn-success pull-right\">\r\n                        <i class=\"fa fa-print\"></i> Print\r\n                    </button>\r\n                    <!--<button (click)=\"downloadcsv(report.id)\" class=\"btn btn-success \">-->\r\n                        <!--<i class=\"fa fa-file-excel-o\"></i> Export CSV-->\r\n                    <!--</button>-->\r\n                    <a *ngIf=\"showRequestApproval\" class=\"btn btn-success pull-right\" routerLink=\"/app/add-approval-request/{{report.module?.id}}\">\r\n                        <i class=\"fa fa-forward\"></i> Request Approval\r\n                    </a>\r\n                    <button *ngIf=\"showApproval\" class=\"btn btn-success pull-right\" (click)=\"approveSurvey(report.id)\"><i\r\n                            class=\"fa fa-check\"></i>&nbsp;Approve\r\n                    </button>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <h5>Market Survey Report</h5>\r\n                    <table class=\"table table-bordered\">\r\n                        <tr>\r\n                            <th class=\"table-col-first\">Title</th>\r\n                            <td class=\"text-left\">{{report.title}}</td>\r\n                            <th class=\"table-col-first\">Status</th>\r\n                            <td class=\"text-left {{report.approved_by ?'text-success' : 'text-warning'}}\">{{report.approved_by ? 'Approved': 'Pending Approval'}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th class=\"table-col-first\">Description</th>\r\n                            <td colspan=\"3\" class=\"text-left\">{{report.description}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th class=\"table-col-first\">Created At</th>\r\n                            <td class=\"text-left\">{{report.time_created}}</td>\r\n                            <th class=\"table-col-first\">Created By</th>\r\n                            <td class=\"text-left\">{{report.creator ? report.creator.full_name : ''}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th class=\"table-col-first\">Reviewed By</th>\r\n                            <td class=\"text-left\">{{report.reviewer ? report.reviewer.full_name : ''}}</td>\r\n                            <th class=\"table-col-first\">Approved By</th>\r\n                            <td class=\"text-left\">{{report.approver ? report.approver.full_name : ''}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row bg-white\">\r\n        <div class=\"col-12 pad-right-on-print\">\r\n            <div *ngFor=\"let r of report.structure_\" class=\"mt-1 px-5 py-2\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3 col-sm-12 media-img\">\r\n                        <img class=\"img-responsive mb-3\" *ngFor=\"let picture of r.item.pictures| slice:0:1\"\r\n                             [src]=\"picture.path\" width=\"200\"\r\n                             alt=\"{{r.item.detail.name + '\\'s image'}}\">\r\n                    </div>\r\n                    <div class=\"col-md-9 border-0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-5 col-sm-12\">\r\n                                <h5 class=\"mt-0\">\r\n                                    <a [routerLink]=\"['/app/vendors/goods/view/' + r.item.id]\">{{r.item.detail?.name}}</a>\r\n                                    <br>\r\n                                    <small class=\"text-muted\"><strong>{{(r.item.detail && r.item.detail.category) ? r.item.detail.category.name : ''}}</strong></small>\r\n                                </h5>\r\n                                <h6>\r\n                                    <a [routerLink]=\"['/app/vendors/view/' + r.item.vendor.id]\">{{r.item.vendor?.business_name}}</a>\r\n                                </h6>\r\n                                <h3>{{r.item.price_formatted}} <sup>\r\n                                    <span style=\"font-size: 11px;\" class=\"text-warning font-weight-bold\"> {{r.mark_up}}% mark-up</span></sup></h3>\r\n                                <div class=\"mb-3\">\r\n                                    <h6>Product Details</h6>\r\n                                    <div class=\"text-preview\">{{r.item.full_description}}</div>\r\n                                </div>\r\n                                <span *ngIf=\"r.others.length\" style=\"cursor: pointer\" (click)=\"showDetail(r)\" class=\"text-success hide-on-print font-weight-bold mt-2 mb-3\">\r\n                                            Other {{r.others.length != 1 ? 'vendors' : 'vendor'}} ({{r.others.length}}) with similar product here</span>\r\n                            </div>\r\n                            <div class=\"col-md-7 mt-sm-2 col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div *ngIf=\"r.item.properties != null && r.item.properties.length\"\r\n                                         class=\"col-md-6\">\r\n                                        <h6 class=\"pt-xs-5\">Properties</h6>\r\n                                        <table class=\"table\">\r\n                                            <tr class=\"pl-0\" *ngFor=\"let gd of r.item.properties\">\r\n                                                <td width=\"width-20\" class=\"pl-0\">{{gd.name}}</td>\r\n                                                <td class=\"\">{{gd.value}}</td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <h6 class=\"pt-xs-5\">Warehouse info</h6>\r\n                                        <table class=\"table\">\r\n                                            <tr class=\"\">\r\n                                                <td class=\"width-30\">Name</td>\r\n                                                <td>{{r.item?.warehouse?.name}}</td>\r\n                                            </tr>\r\n                                            <tr class=\"\" *ngIf=\"r.item?.warehouse?.address\">\r\n                                                <td class=\"width-30\">Address:</td>\r\n                                                <td class=\"\">{{r.item?.warehouse?.address?.address_line_1}} <br>{{r.item?.warehouse?.address?.address_line_2}}\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr class=\"\" *ngIf=\"r.item.warehouse?.address\">\r\n                                                <td class=\"width-30\">State/City:</td>\r\n                                                <td class=\"\">{{r.item.warehouse?.address?.state?.name}}/{{r.item?.warehouse?.address?.city?.name}}</td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row hide-on-print\">\r\n        <div class=\"col-lg-10 col-md-12 offset-lg-1\">\r\n            <div class=\"card-block pt-3\">\r\n                <div class=\"card\">\r\n                    <div class=\"log-box-header\">\r\n                        <h4>Comments ({{report.comments.length}})\r\n                            <button data-target=\"#lg-modal\" data-toggle=\"modal\" class=\"btn btn-success pull-right\">\r\n                                <i class=\"fa fa-comment\"></i> &nbsp;Add Comment\r\n                            </button>\r\n                        </h4>\r\n                        <hr>\r\n                    </div>\r\n                    <div class=\"log-box\">\r\n                        <div *ngIf=\"report.comments.length\">\r\n                            <div class=\"card-notification\" *ngFor=\"let comment of report.comments; let i=index\">\r\n                                <div class=\"card-noti-conatin\">\r\n                                    <small class=\"text-success font-weight-bold\">{{comment.commentor ? comment.commentor.full_name : 'Anonymous'}} at\r\n                                        {{comment.time_created}}\r\n                                    </small>\r\n                                    <div style=\"font-size: 14px;\" class=\"mb-3\" [innerHTML]=\"comment.body\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"!report.comments.length\">\r\n                            <div class=\"card-notification\">\r\n                                <div class=\"card-noti-conatin\">\r\n                                    <div style=\"font-size: 14px;\" class=\"text-center text-danger font-weight-bold\">No comment\r\n                                        yet.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<button style=\"display: none;\" id=\"showInfoBut\" data-toggle=\"modal\" data-target=\"#infoModal\"></button>\r\n<div class=\"modal fade hide-on-print\" id=\"infoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\">\r\n    <div class=\"modal-dialog modal-lg\" style=\"min-width: 90%; width: 90%;max-width: 90%;\" role=\"document\">\r\n        <div class=\"modal-content\" *ngIf=\"surveyStructure != null\">\r\n            <!--<div class=\"modal-header state modal-success\">-->\r\n            <!--<h4 class=\"modal-title\" id=\"l\">Current Survey List</h4>-->\r\n            <!--<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">-->\r\n            <!--<span aria-hidden=\"true\" class=\"fa fa-times\"></span></button>-->\r\n            <!--</div>-->\r\n            <div class=\"modal-body\">\r\n                <div *ngFor=\"let r of surveyStructure.others\" class=\"mt-1 px-5 py-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3 col-sm-12 media-img\">\r\n                            <img class=\"img-responsive mb-3\" *ngFor=\"let picture of r.pictures| slice:0:1\"\r\n                                 src=\"{{picture.path}}\" width=\"200\"\r\n                                 alt=\"{{r.name+ '\\'s image'}}\">\r\n                        </div>\r\n                        <div class=\"col-md-9 border-0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-5 col-sm-12 media-body\">\r\n                                    <h5 class=\"mt-0\">\r\n                                        <a href=\"\"\r\n                                           [routerLink]=\"['/app/vendors/goods/view/' + r.id]\">{{r.name}}</a>\r\n                                        <br>\r\n                                        <small class=\"text-muted\"><strong>{{r.category}}</strong></small>\r\n                                    </h5>\r\n                                    <h6>\r\n                                        <a [routerLink]=\"['/app/public/vendor', r.vendor.user_id]\">{{r.vendor.business_name}}</a>\r\n                                    </h6>\r\n                                    <h3>{{r.price_formatted}}</h3>\r\n                                    <div class=\"mb-3\">\r\n                                        <h6>Product Details</h6>\r\n                                        <div>{{r.full_description}}</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-7 mt-sm-2 col-sm-12 media-body\">\r\n                                    <div class=\"row\">\r\n                                        <div *ngIf=\"r.properties != null && r.properties.length\"\r\n                                             class=\"col-md-6\">\r\n                                            <h6 class=\"pt-xs-5\">Properties</h6>\r\n                                            <table class=\"table\">\r\n                                                <tr class=\"pl-0\" *ngFor=\"let gd of r.properties\">\r\n                                                    <td width=\"width-20\" class=\"pl-0\">{{gd.name}}</td>\r\n                                                    <td class=\"\">{{gd.value}}</td>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <h6 class=\"pt-xs-5\">Warehouse info</h6>\r\n                                            <table class=\"table\">\r\n                                                <tr class=\"\">\r\n                                                    <td class=\"width-30\">Name</td>\r\n                                                    <td>{{r.warehouse?.name}}</td>\r\n                                                </tr>\r\n                                                <tr class=\"\" *ngIf=\"r.warehouse.address\">\r\n                                                    <td class=\"width-30\">Address:</td>\r\n                                                    <td class=\"\">{{r.warehouse.address?.address_line_1}} <br>{{r.warehouse.address?.address_line_2}}\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr class=\"\" *ngIf=\"r.warehouse.address\">\r\n                                                    <td class=\"width-30\">State/City:</td>\r\n                                                    <td class=\"\">{{r.warehouse.address?.state?.name}}/{{r.warehouse.address?.city?.name}}</td>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade hide-on-print\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\"\r\n     style=\"display: none;\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <form class=\"modal-content\" [formGroup]=\"NewCommentForm\" (submit)=\"onSubmit(NewCommentForm)\">\r\n            <div class=\"modal-header state modal-success\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Create Comment</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label>Your Comment <sup>*</sup></label>\r\n                    <textarea class=\"form-control\" formControlName=\"comment\" rows=\"5\"></textarea>\r\n                    <div class=\"custom-alert\"\r\n                         *ngIf=\"!NewCommentForm.controls['comment'].valid && NewCommentForm.controls['comment'].touched\">\r\n                        Input a Comment\r\n                    </div>\r\n                    <input type=\"hidden\" formControlName=\"model_id\" value=\"model_id\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"hidden\" data-dismiss=\"modal\" aria-label=\"Close\" id=\"close-button\"></button>\r\n                <button type=\"submit\" class=\"btn btn-success pull-right submit-btn\"\r\n                        [disabled]=\"!NewCommentForm.valid || savingComment\"><i class=\"fa fa-comment\"></i>&nbsp\r\n                    <span *ngIf=\"savingComment\"><app-small-loader></app-small-loader></span>{{savingComment ? '' : 'Submit Comment'}}\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<app-resource-not-found *ngIf=\"!loading && !report\" [message]=\"errorMessage\"></app-resource-not-found>\r\n"

/***/ }),

/***/ "./src/app/pages/survey/main-survey.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/survey/main-survey.module.ts ***!
  \****************************************************/
/*! exports provided: routes, MainSurveyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSurveyModule", function() { return MainSurveyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");
/* harmony import */ var _view_survey_view_survey_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-survey/view-survey.component */ "./src/app/pages/survey/view-survey/view-survey.component.ts");
/* harmony import */ var _survey_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./survey.component */ "./src/app/pages/survey/survey.component.ts");










var routes = [
    { path: 'view/:id', component: _view_survey_view_survey_component__WEBPACK_IMPORTED_MODULE_8__["ViewSurveyComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _survey_component__WEBPACK_IMPORTED_MODULE_9__["SurveyComponent"] }
];
var MainSurveyModule = /** @class */ (function () {
    function MainSurveyModule() {
    }
    MainSurveyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_view_survey_view_survey_component__WEBPACK_IMPORTED_MODULE_8__["ViewSurveyComponent"], _survey_component__WEBPACK_IMPORTED_MODULE_9__["SurveyComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_6__["CustomErrorModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_7__["LoaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], MainSurveyModule);
    return MainSurveyModule;
}());



/***/ }),

/***/ "./src/app/pages/survey/survey.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/survey/survey.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td.text {\n  max-width: 177px;\n}\n.table td.text span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VydmV5L0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFxzdXJ2ZXlcXHN1cnZleS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VydmV5L3N1cnZleS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VydmV5L3N1cnZleS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZC50ZXh0IHtcclxuICBtYXgtd2lkdGg6IDE3N3B4O1xyXG4gIHNwYW4ge1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59IiwiLnRhYmxlIHRkLnRleHQge1xuICBtYXgtd2lkdGg6IDE3N3B4O1xufVxuLnRhYmxlIHRkLnRleHQgc3BhbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/survey/survey.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/survey/survey.component.ts ***!
  \**************************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_market_survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/market-survey.service */ "./src/app/services/market-survey.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(userDataService, surveyService, route, router, authService, formBuilder) {
        this.userDataService = userDataService;
        this.surveyService = surveyService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.surveyReports = [];
        this.me = {};
        this.role = localStorage.getItem('userRole');
        this.toggle = false;
        this.placeHolderMessage = '';
        this.model = {};
        this.searching = false;
        this.hasSomeItemsChecked = false;
        this.processingDelete = false;
    }
    SurveyComponent.prototype.ngOnInit = function () {
        this.searchForm = this.formBuilder.group({
            searchField: [''],
            fromDate: [''],
            toDate: [''],
        });
        this.getLoggedInUser();
        this.submitSearch();
    };
    SurveyComponent.prototype.submitSearch = function () {
        var searchText = this.searchForm.get('searchField').value;
        var fromDate = this.searchForm.get('fromDate').value;
        var toDate = this.searchForm.get('toDate').value;
        var param = '';
        if (searchText) {
            param += 'search=' + searchText;
        }
        if (fromDate) {
            if (param) {
                param += '&';
            }
            param += 'from=' + this.getTextFromDate(fromDate);
        }
        if (toDate) {
            if (param) {
                param += '&';
            }
            param += 'to=' + this.getTextFromDate(fromDate);
        }
        var perPage = $('#per-page-select').val();
        if (parseInt(perPage, 10)) {
            if (param) {
                param += '&';
            }
            param += 'per_page=' + perPage;
        }
        if (param) {
            param = '?' + param;
        }
        this.searchResult('', param);
    };
    SurveyComponent.prototype.searchResult = function (url, params) {
        var _this = this;
        this.searching = true;
        this.errorMessage = '';
        this.lastUrl = url;
        this.lastParam = params;
        this.surveyReports = [];
        this.surveyService.searchSurvey(url, params).subscribe(function (data) {
            var arr = ((typeof data.data) !== 'undefined' && data.data.length > 0);
            if (arr) {
                data.data.forEach(function (d) { return d.selected = false; });
            }
            _this.surveyReports = data.data;
            _this.current_page = data.current_page;
            _this.from = data.from;
            _this.last_page = data.last_page;
            _this.next_page_url = data.next_page_url;
            _this.path = data.path;
            _this.prev_page_url = data.prev_page_url;
            _this.per_page = data.per_page;
            _this.to = data.to;
            _this.total = data.total;
            _this.searching = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].handleError(err, _this.router);
            _this.searching = false;
        });
    };
    SurveyComponent.prototype.getLoggedInUser = function () {
        this.me = _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].getAuthenticatedUser() || {};
        this.current_id = this.me.i;
    };
    SurveyComponent.prototype.deleteReportSelected = function () {
    };
    SurveyComponent.prototype.deleteSurvey = function (id) {
        var _this = this;
        this.processingDelete = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure?',
            text: 'Do you really want to discard this survey report?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(function (willDelete) {
            if (willDelete.value) {
                _this.surveyService.deleteSurvey(id).subscribe(function (status) {
                    var index = -1, count = 0;
                    _this.surveyReports.forEach(function (r) {
                        if (r.id.toString() === id.toString()) {
                            index = count;
                        }
                        count++;
                    });
                    if (index > -1) {
                        _this.surveyReports.splice(index, 1);
                    }
                    _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].succeeded('Survey report has been deleted!', 'Deleted!');
                    _this.processingDelete = false;
                }, function (err) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].handleError(err, _this.router, true);
                    _this.processingDelete = false;
                });
            }
            else {
                _this.processingDelete = false;
            }
        });
    };
    SurveyComponent.prototype.checkAll = function (ev) {
        this.surveyReports.forEach(function (x) { return x.selected = ev.target.checked; });
    };
    SurveyComponent.prototype.isAllChecked = function () {
        return this.surveyReports.every(function (_) { return _.selected; });
    };
    SurveyComponent.prototype.getTextFromDate = function (date) {
        if (typeof date === 'object') {
            return date.year + '-' + date.month + '-' + date.day;
        }
        return date.toString();
    };
    SurveyComponent.prototype.updateSelectionChanged = function () {
        var hasSomeItemsChecked = 0;
        this.surveyReports.forEach(function (x) {
            if (x.selected) {
                hasSomeItemsChecked++;
            }
        });
        this.hasSomeItemsChecked = hasSomeItemsChecked > 1;
    };
    SurveyComponent.prototype.deleteSelected = function () {
    };
    SurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey',
            template: __webpack_require__(/*! raw-loader!./survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/survey/survey.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./survey.component.scss */ "./src/app/pages/survey/survey.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"],
            _services_market_survey_service__WEBPACK_IMPORTED_MODULE_6__["MarketSurveyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/pages/survey/view-survey/view-survey.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/survey/view-survey/view-survey.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name-badge {\n  background: #0DB28B;\n  text-align: center;\n  color: white;\n  padding: 20px;\n  max-height: 40px;\n  width: 20px;\n  border-radius: 20px;\n}\n.name-badge h3 {\n  font-size: 20px;\n}\n.table td.text {\n  max-width: 300px;\n}\n.table td.text span {\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: 100%;\n}\n.table td.text2 {\n  max-width: 100px;\n}\n.table td.text2 span {\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: 100%;\n}\n.survey-item-container {\n  max-height: calc(100vh - 600px);\n}\n.survey-item-container > div {\n  margin-bottom: 10px;\n  background-color: #eee;\n}\n.log-box-header {\n  padding: 20px 20px 0;\n}\n.log-box {\n  height: 500px;\n  overflow-y: auto;\n  padding: 20px 20px 0;\n}\ntr td {\n  vertical-align: top !important;\n}\n.table-col-first {\n  width: 180px;\n}\n.text-preview {\n  max-height: 100px;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VydmV5L3ZpZXctc3VydmV5L0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFxzdXJ2ZXlcXHZpZXctc3VydmV5XFx2aWV3LXN1cnZleS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VydmV5L3ZpZXctc3VydmV5L3ZpZXctc3VydmV5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtBQ0VKO0FERUE7RUFDRSxnQkFBQTtBQ0NGO0FEQUU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNFSjtBREVBO0VBQ0UsZ0JBQUE7QUNDRjtBREFFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRUo7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7QUNDRjtBREVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREVBO0VBQ0UsOEJBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtBQ0NGO0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdXJ2ZXkvdmlldy1zdXJ2ZXkvdmlldy1zdXJ2ZXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZS1iYWRnZSB7XHJcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LWhlaWdodDogNDBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZSB0ZC50ZXh0IHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIHNwYW4ge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlIHRkLnRleHQyIHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIHNwYW4ge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnN1cnZleS1pdGVtLWNvbnRhaW5lciB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDYwMHB4KTtcclxufVxyXG5cclxuLnN1cnZleS1pdGVtLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4ubG9nLWJveC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwO1xyXG59XHJcblxyXG4ubG9nLWJveCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwO1xyXG59XHJcblxyXG50ciB0ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtY29sLWZpcnN0IHtcclxuICB3aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbi50ZXh0LXByZXZpZXcge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuIiwiLm5hbWUtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubmFtZS1iYWRnZSBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRhYmxlIHRkLnRleHQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuLnRhYmxlIHRkLnRleHQgc3BhbiB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUgdGQudGV4dDIge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuLnRhYmxlIHRkLnRleHQyIHNwYW4ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnN1cnZleS1pdGVtLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MDBweCk7XG59XG5cbi5zdXJ2ZXktaXRlbS1jb250YWluZXIgPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4ubG9nLWJveC1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcbn1cblxuLmxvZy1ib3gge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcbn1cblxudHIgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1jb2wtZmlyc3Qge1xuICB3aWR0aDogMTgwcHg7XG59XG5cbi50ZXh0LXByZXZpZXcge1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/survey/view-survey/view-survey.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/survey/view-survey/view-survey.component.ts ***!
  \*******************************************************************/
/*! exports provided: ViewSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSurveyComponent", function() { return ViewSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var _services_market_survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/market-survey.service */ "./src/app/services/market-survey.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);











var ViewSurveyComponent = /** @class */ (function () {
    function ViewSurveyComponent(userDataService, formBuilder, oldSurveyService, route, router, surveyService, authService) {
        this.userDataService = userDataService;
        this.formBuilder = formBuilder;
        this.oldSurveyService = oldSurveyService;
        this.route = route;
        this.router = router;
        this.surveyService = surveyService;
        this.authService = authService;
        this.report = null;
        this.errorMessage = '';
        this.loading = false;
        this.savingComment = false;
        this.survey = [];
        this.successMessage = '';
        this.show = false;
        this.showRequestApproval = false;
        this.showApproval = false;
        this.surveyStructure = null;
    }
    ViewSurveyComponent.prototype.ngOnInit = function () {
        this.buildForm();
        var id = this.route.snapshot.params['id'];
        this.getReport(id);
    };
    ViewSurveyComponent.prototype.can = function (permission) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"].can(permission);
    };
    Object.defineProperty(ViewSurveyComponent.prototype, "permissions", {
        get: function () {
            return _data__WEBPACK_IMPORTED_MODULE_9__["AppData"].permissions;
        },
        enumerable: true,
        configurable: true
    });
    ViewSurveyComponent.prototype.getReport = function (id) {
        var _this = this;
        this.loading = true;
        this.surveyService.getSurveyByID(id).subscribe(function (report) {
            _this.report = report;
            _this.report.structure_ = JSON.parse(_this.report.structure);
            console.log(_this.report.structure_);
            if (_this.report.comments !== undefined) {
                _this.report.comments.forEach(function (comment) {
                    var commentNameBadge = comment.commentor ? comment.commentor.full_name : 'AN';
                    var initials = commentNameBadge.match(/\b\w/g) || [];
                    comment.commentInitials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
                });
            }
            else {
                _this.report.comments = [];
            }
            _this.NewCommentForm.patchValue({
                model_id: _this.report.id
            });
            _this.loading = false;
            if (_this.report) {
                _this.showApproval = !_this.report.approved_by && _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"].can(_this.permissions.approve_survey_report);
                _this.showRequestApproval = !_this.report.approved_by && !_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"].can(_this.permissions.approve_survey_report) && _this.report.request_approval;
                _this.url = _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].url;
            }
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router);
            _this.loading = false;
        });
    };
    ViewSurveyComponent.prototype.buildForm = function () {
        this.NewCommentForm = this.formBuilder.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            model_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ViewSurveyComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        document.getElementById('close-button').click();
        this.savingComment = true;
        this.errorMessage = '';
        this.successMessage = '';
        this.oldSurveyService.addComment(value).subscribe(function (resp) {
            if (resp) {
                _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].succeeded('You have just added a new comment!');
                _this.report.comments.push({
                    commentor: { first_name: (_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].getAuthenticatedUser() || {}).n },
                    body: value.comment,
                    created_at: new Date().toUTCString()
                });
                _this.NewCommentForm.patchValue({ comment: '' });
            }
            else {
                _this.errorMessage = resp.statusText;
            }
            _this.savingComment = false;
        }, function (err) {
            _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router, true);
            _this.savingComment = false;
        });
    };
    ViewSurveyComponent.prototype.approveSurvey = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Confirmation',
            text: 'Do you want to approve this report?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(function (willUpdate) {
            if (willUpdate.value) {
                _this.surveyService.approveSurvey(id).subscribe(function (updated) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].succeeded('Report has been Approved!', 'Approved!');
                    window.setTimeout(function () {
                        window.location.reload();
                    }, 2000);
                }, function (err) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router, true);
                });
            }
        });
    };
    ViewSurveyComponent.prototype.print = function () {
        var element = document.getElementById('printSection').innerHTML;
        console.log(element);
        _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].processPrint(element);
    };
    ViewSurveyComponent.prototype.showDetail = function (r) {
        this.surveyStructure = r;
        document.getElementById('showInfoBut').click();
    };
    ViewSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-survey',
            template: __webpack_require__(/*! raw-loader!./view-survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/survey/view-survey/view-survey.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./view-survey.component.scss */ "./src/app/pages/survey/view-survey/view-survey.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_survey_service__WEBPACK_IMPORTED_MODULE_6__["SurveyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_market_survey_service__WEBPACK_IMPORTED_MODULE_7__["MarketSurveyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ViewSurveyComponent);
    return ViewSurveyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-survey-main-survey-module-es5.js.map