(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-system-logs-system-logs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/system-logs/system-logs.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/system-logs/system-logs.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"col-lg-8 offset-lg-2\">\r\n        <form (ngSubmit)=\"doSearch()\" #f=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group box-shadow\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                   name=\"from\" [(ngModel)]=\"model.from\" #from\r\n                                   [ngModelOptions]=\"{standalone: true}\">\r\n                            <span class=\"btn input-group-addon search-icon\">\r\n                                <i class=\"fa fa-calendar\"></i>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group box-shadow\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                   name=\"to\" [(ngModel)]=\"model.to\" #to\r\n                                   [ngModelOptions]=\"{standalone: true}\">\r\n                            <span class=\"btn input-group-addon search-icon\">\r\n                                <i class=\"fa fa-calendar\"></i>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"loading\">SEARCH</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n\r\n    </div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <!--&lt;!&ndash; <h5 *ngIf=\"placeHolderMessage\" class=\"col-md-12 pt-2 pb-2 text-success\">{{placeHolderMessage}}</h5>-->\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-danger pt-2 pb-2\">{{errorMessage}}</div>\r\n            <div class=\"table-responsive bg-white box-shadow\">\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>\r\n                            <input type=\"checkbox\" name=\"all\" [checked]=\"isAllChecked()\" (change)=\"checkAll($event)\"\r\n                                   [(ngModel)]=\"checked\"/></th>\r\n                        <th>Title</th>\r\n                        <th>Description</th>\r\n                        <th>Date</th>\r\n                        <th>\r\n                            <button *ngIf=\"checked\" (click)=\"deleteLogSelected()\" class=\"btn btn-danger btn-sm text-center\"><i\r\n                                    class=\"fa fa-trash\"></i>&nbsp; Delete Logs\r\n                            </button>\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let log of logs; let i = index\">\r\n                        <td class=\"align-middle text-truncate\">\r\n                            <input type=\"checkbox\" name=\"log[]\"\r\n                                   value=\" {{log.id}}\" [(ngModel)]=\"log.selected\"/>\r\n                        </td>\r\n                        <td class=\"align-middle text-truncate text-dark\">\r\n                            <span class=\"badge badge-{{log.event_enum.name}} mr-2\">{{log.event_enum.name}}</span>\r\n                            {{log.event}}\r\n                        </td>\r\n                        <td class=\"align-middle text-truncate text-dark\">{{log.information}}</td>\r\n                        <td class=\"align-middle text-truncate text-dark\">{{log.created_at}}</td>\r\n                        <td class=\"align-middle\">\r\n                            <a (click)=\"deleteLog(log.id, i)\"\r\n                               class=\"btn btn-danger btn-sm text-center\"> <i\r\n                                    class=\"fa fa-trash\"></i> Delete</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(logs == null || logs.length < 1) && !loading\">\r\n                        <td colspan=\"5\" class=\"text-center\">Sorry, no result to show...</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"loading\">\r\n                        <td colspan=\"5\" class=\"text-center\">\r\n                            <app-small-loader></app-small-loader>\r\n                            <br>\r\n                            Loading, please wait...\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <br>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 text-center text-success\"*ngIf=\"last_page > 1 || 1\">\r\n            <div class=\"col-lg-12 pb-3\">\r\n                <div class=\"row text-center\">\r\n                    <div style=\"display: inline-block; width: 470px;\">\r\n                        <div class=\"input-group\">\r\n                            <button type=\"button\" class=\"btn btn-danger mr-2\" tabindex=\"-1\"\r\n                                    (click)=\"loadData(prev_page_url)\"\r\n                                    [disabled]=\"prev_page_url === null\"><i\r\n                                    class=\"fa fa-chevron-left \"></i> &nbsp;Previous\r\n                            </button>\r\n                            <span class=\"btn\">Page {{current_page}} of {{last_page}}</span>\r\n                            <!--<select id=\"per-page-select\" (change)=\"submitSearch()\" class=\"form-control mr-2\">-->\r\n                            <!--<option value=\"10\">Per Page</option>-->\r\n                            <!--<option value=\"15\">15</option>-->\r\n                            <!--<option value=\"25\">25</option>-->\r\n                            <!--<option value=\"50\">50</option>-->\r\n                            <!--<option value=\"100\">100</option>-->\r\n                            <!--</select>-->\r\n                            <button type=\"button\" [disabled]=\"next_page_url === null\" class=\"btn btn-success\"\r\n                                    (click)=\"loadData(next_page_url)\">Next&nbsp;\r\n                                <i class=\"fa fa-chevron-right \"></i> &nbsp;&nbsp;\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/system-logs/system-logs.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/system-logs/system-logs.component.ts ***!
  \************************************************************/
/*! exports provided: SystemLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemLogsComponent", function() { return SystemLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_system_logs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/system-logs.service */ "./src/app/services/system-logs.service.ts");







var SystemLogsComponent = /** @class */ (function () {
    function SystemLogsComponent(systemLogsService, _Location, route, router) {
        this.systemLogsService = systemLogsService;
        this._Location = _Location;
        this.route = route;
        this.router = router;
        this.logs = [];
        this.loading = false;
        this.model = {};
        this.checked = false;
        this.errorMessage = '';
    }
    SystemLogsComponent.prototype.ngOnInit = function () {
        this.doSearch();
    };
    SystemLogsComponent.prototype.doSearch = function () {
        this.loading = true;
        var params = [];
        if (this.model.hasOwnProperty('from')) {
            var fromDate = this.model.from.year + '-' + this.model.from.month + '-' + this.model.from.day;
            params.push('from=' + fromDate);
        }
        if (this.model.hasOwnProperty('to')) {
            var toDate = this.model.to.year + '-' + this.model.to.month + '-' + this.model.to.day;
            params.push('to=' + toDate);
        }
        this.loadData('', params.join('&'));
    };
    SystemLogsComponent.prototype.loadData = function (url, params) {
        var _this = this;
        this.logs = [];
        this.last_page = -1;
        this.loading = true;
        this.errorMessage = '';
        this.systemLogsService.searchLogs(url, params).subscribe(function (data) {
            _this.logs = data.data;
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
    SystemLogsComponent.prototype.deleteLogSelected = function () {
        var _this = this;
        // swal('Are You Sure  You want delete these?', 'You won\'t be able to revert this!', 'warning', 'dangerMode: true');
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Delete selected items?',
            text: 'You won\'t be able to revert this!',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(function (willDelete) {
            if (willDelete.value) {
                _this.selectedLog = _this.logs.filter(function (_) { return _.selected; });
                _this.selectedLog.forEach(function (log) {
                    _this.systemLogsService.RemoveLog(log.id).subscribe(function (data) {
                        if (data !== -1) {
                        }
                    });
                });
                // swal('Deleted!', 'Log(s) has been deleted!', 'success');
                _this.router.navigate(['/app/system-logs']);
            }
        });
    };
    SystemLogsComponent.prototype.deleteLog = function (id, i) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(function (willDelete) {
            if (willDelete.value) {
                _this.systemLogsService.deleteLog(id).subscribe(function (status) {
                    if (status) {
                        _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].succeeded('Log has been deleted!');
                        window.setTimeout(function () {
                            location.reload();
                        }, 2000);
                    }
                    else {
                        _this.errorMessage = 'Unable to delete Log';
                    }
                    _this.loading = false;
                }, function (err) {
                    _this.loading = false;
                    _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].handleError(err, _this.router);
                });
            }
        });
    };
    SystemLogsComponent.prototype.checkAll = function (ev) {
        this.logs.forEach(function (x) { return x.selected = ev.target.checked; });
    };
    SystemLogsComponent.prototype.isAllChecked = function () {
        if (this.logs === null || !this.logs || this.logs.length < 1) {
            return false;
        }
        return this.logs.every(function (_) { return _.selected; });
    };
    SystemLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system-logs',
            template: __webpack_require__(/*! raw-loader!./system-logs.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/system-logs/system-logs.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_system_logs_service__WEBPACK_IMPORTED_MODULE_6__["SystemLogsService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SystemLogsComponent);
    return SystemLogsComponent;
}());



/***/ }),

/***/ "./src/app/pages/system-logs/system-logs.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/system-logs/system-logs.module.ts ***!
  \*********************************************************/
/*! exports provided: routes, SystemLogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemLogsModule", function() { return SystemLogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _system_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system-logs.component */ "./src/app/pages/system-logs/system-logs.component.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");








// import { LoaderComponent } from 'app/shared/components/loader/loader.component';
// import { ViewLogComponent } from './view-log/view-log.component';
var routes = [
    { path: '', component: _system_logs_component__WEBPACK_IMPORTED_MODULE_5__["SystemLogsComponent"], pathMatch: 'full' }
];
var SystemLogsModule = /** @class */ (function () {
    function SystemLogsModule() {
    }
    SystemLogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
                _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_7__["CustomErrorModule"]
            ],
            declarations: [
                _system_logs_component__WEBPACK_IMPORTED_MODULE_5__["SystemLogsComponent"],
            ],
        })
    ], SystemLogsModule);
    return SystemLogsModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-system-logs-system-logs-module-es5.js.map