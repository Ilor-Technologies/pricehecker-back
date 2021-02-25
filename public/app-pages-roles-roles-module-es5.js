(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-roles-roles-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/roles/create-role/create-role.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/roles/create-role/create-role.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 offset-md-3 form-holder\">\r\n    <div class=\"card box-shadow border-0\">\r\n      <div class=\"card-block pt-3\">\r\n        <h3>Add New Role</h3>\r\n\r\n\r\n        <form class=\"form\" [formGroup]=\"NewRoleForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <hr>\r\n              <div class=\"form-group\">\r\n                <label>Role Name<sup class=\"asterisk\">*</sup></label>\r\n                <input formControlName=\"name\" type=\"text\" class=\"form-control\">\r\n                <div class=\"custom-alert\"\r\n                     *ngIf=\"!NewRoleForm.controls['name'].valid && NewRoleForm.controls['name'].touched\">\r\n                  Role Name is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label>Select Permissions</label>\r\n                <input placeholder=\"Enter permission name to filter\" [ngModelOptions]=\"{standalone: true}\"\r\n                       [(ngModel)]=\"permissionFilter\" type=\"text\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div *ngFor=\"let permission of filteredPermissions;\" class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <input class=\"styled-checkbox\" [checked]=\"rolePermission.indexOf(permission) > -1\"\r\n                       type=\"checkbox\" name=\"permission[]\"\r\n                       value=\"{{permission}}\" [id]=\"permission\"\r\n                       (change)=\"onChange(permission, $event.target.checked)\">\r\n                <label class=\"cp text-capitalize\"\r\n                       [for]=\"permission\">{{removeUnderScore(permission.replace('_', ' '))}}</label>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"!permissions.length && !loadingPermissions\" class=\"col-12\">\r\n              No permissions to show\r\n            </div>\r\n\r\n            <div *ngIf=\"loadingPermissions\" class=\"col-12 mt-3 text-center\">\r\n                            <span><svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                                 enable-background=\"new 0 0 40 40\"\r\n                                 height=\"40px\" id=\"loader-1\" version=\"1.1\" viewBox=\"0 0 40 40\" width=\"40px\" x=\"0px\"\r\n                                 xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\r\n  <path d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n        fill=\"#000\" opacity=\"0.2\"></path>\r\n                                        <path d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\" fill=\"#000\" transform=\"rotate(0.00000178639 21.8896 21.8896)\">\r\n    <animateTransform attributeName=\"transform\" attributeType=\"xml\" dur=\"0.5s\" from=\"0 20 20\" repeatCount=\"indefinite\"\r\n                      to=\"360 20 20\" type=\"rotate\"></animateTransform>\r\n    </path>\r\n  </svg></span>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <button [disabled]=\"!NewRoleForm.valid || loading\"\r\n                  class=\"btn btn-block btn-success submit-btn\">\r\n                        <span *ngIf=\"loading\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                                 width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                                 xml:space=\"preserve\">\r\n      <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                            <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\"\r\n                          dur=\"0.5s\" repeatCount=\"indefinite\"\r\n        />\r\n      </path>\r\n    </svg></span>\r\n            {{loading ? '' : 'Create new role'}}\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/roles/edit-role/edit-role.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/roles/edit-role/edit-role.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"pageLoading == true\"></app-loader>\r\n<div class=\"row\" *ngIf=\"!pageLoading && role\">\r\n  <div class=\"col-lg-6  offset-md-3 form-holder\">\r\n    <div class=\"card box-shadow border-0\">\r\n      <div class=\"card-block pt-3\">\r\n        <h3>Edit Role</h3>\r\n        <form class=\"form\" [formGroup]=\"roleForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <hr>\r\n              <div class=\"form-group\">\r\n                <label>Role Name<sup class=\"asterisk\">*</sup></label>\r\n\r\n                <input formControlName=\"name\" type=\"text\" class=\"form-control\">\r\n                <div class=\"custom-alert\"\r\n                     *ngIf=\"!roleForm.controls['name'].valid && roleForm.controls['name'].touched\">\r\n                  Role Name is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label>Select Permissions</label>\r\n                <input placeholder=\"Enter permission name to filter\" [ngModelOptions]=\"{standalone: true}\"\r\n                       [(ngModel)]=\"permissionFilter\" type=\"text\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <!--<div class=\"row mb-3\">-->\r\n          <!--<div class=\"col-md-12\">-->\r\n          <!--<input class=\"form-control\" (keyup)=\"filterPermissions($event.target.value)\" placeholder=\"Filter permissions\">-->\r\n          <!--</div>-->\r\n          <!--</div>-->\r\n          <div class=\"row\">\r\n            <div *ngFor=\"let permission of filteredPermissionList; let i = index\" class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <input class=\"styled-checkbox\" [checked]=\"rolePermission.includes(permission)\"\r\n                       type=\"checkbox\" name=\"permission[]\"\r\n                       value=\"{{permission}}\" [id]=\"permission\"\r\n                       (change)=\"onChange(permission, $event.target.checked)\">\r\n                <label class=\"cp text-capitalize\"\r\n                       [for]=\"(permission)\">{{removeUnderScore(permission.replace('_', ' '))}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <button [disabled]=\"!roleForm.valid || loading\" class=\"btn btn-block submit-btn\">\r\n                        <span *ngIf=\"loading\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                                 width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                                 xml:space=\"preserve\">\r\n      <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                            <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\"\r\n                          dur=\"0.5s\" repeatCount=\"indefinite\"\r\n        />\r\n      </path>\r\n    </svg></span>{{loading ? '' : 'Update Role'}}\r\n          </button>\r\n          <br>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-resource-not-found [willShow]=\"!pageLoading && !role\" [message]=\"errorMessage\"></app-resource-not-found>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/roles/roles-list/roles-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/roles/roles-list/roles-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group box-shadow\">\r\n                <a class=\"btn btn-success mr-2\" routerLink=\"/app/roles/create\">\r\n                    <i class=\"fa fa-plus\"></i> Create New Role </a>\r\n                <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\"><i\r\n                        class=\"fa fa-search\"></i></div>\r\n                <input type=\"text\" #filterField\r\n                       placeholder=\"Search role by name...\" class=\"form-control border-0\">\r\n                <button class=\"btn btn-success\" [disabled]=\"loading\" (click)=\"getRoles(filterField.value)\"><i class=\"fa fa-search\"></i> Search</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-10 offset-md-1\">\r\n                <div class=\"table-responsive bg-white box-shadow\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>\r\n                                <input type=\"checkbox\" name=\"all\" [checked]=\"isAllChecked()\" (change)=\"checkAll($event)\"/>\r\n                            </th>\r\n                            <th>Name</th>\r\n                            <th>Permissions</th>\r\n                            <th>Last Updated</th>\r\n                            <th>\r\n                                <!--<button (click)=\"deleteRoleSelected()\" class=\"btn btn-danger btn-sm text-center\">-->\r\n                                    <!--<i class=\"fa fa-trash\"></i>&nbsp; Delete Selected-->\r\n                                <!--</button>-->\r\n                            </th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngIf=\"(!roles || !roles.length) && !loading && !errorMessage\">\r\n                            <td colspan=\"11\" class=\"text-center\">No role found...</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"errorMessage\">\r\n                            <td colspan=\"11\" class=\"text-danger text-center\">{{errorMessage}}</td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let role of roles; let i = index;\">\r\n                            <td class=\"align-middle text-truncate\">\r\n                                <input type=\"checkbox\" name=\"role[]\"\r\n                                       value=\"{{role.id}}\"\r\n                                       [(ngModel)]=\"role.selected\"/></td>\r\n                            <td class=\"align-middle text-truncate\">{{role.name}}</td>\r\n                            <td>\r\n                                <span *ngFor=\"let permission of role.permissions; let i = index;\">\r\n                                    <span *ngIf=\"i < 10;\" class=\"badge badge-gray mr-1\">{{permission.display_name}}</span>\r\n                                </span>\r\n                                <span *ngIf=\"role.permissions.length > 10;\" class=\"badge badge-gray mr-1\">+ {{(role.permissions.length - 10)}} more</span>\r\n                            </td>\r\n                            <td class=\"align-middle text-truncate\">{{role.time_updated}}</td>\r\n                            <td class=\"align-middle\">\r\n                                <div class=\"btn-group\" role=\"group\">\r\n                                    <a *ngIf=\"can(permissions.edit_roles)\" routerLink=\"/app/roles/edit/{{role.name}}\"  class=\"btn btn-secondary btn-sm\"><i\r\n                                            class=\"fa fa-pencil\"></i> &nbsp;Manage</a>\r\n                                    <button *ngIf=\"can(permissions.delete_roles)\" (click)=\"deleteRole(role, i)\"\r\n                                       class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash\"></i>&nbsp;Delete</button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"loading\">\r\n                            <td colspan=\"15\">\r\n                                <div class=\"text-center\">\r\n                                    <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                                         enable-background=\"new 0 0 40 40\"\r\n                                         height=\"40px\" id=\"loader-1\" version=\"1.1\" viewBox=\"0 0 40 40\" width=\"40px\" x=\"0px\"\r\n                                         xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\r\n  <path d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n        fill=\"#000\" opacity=\"0.2\"></path>\r\n                                        <path d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\" fill=\"#000\" transform=\"rotate(0.00000178639 21.8896 21.8896)\">\r\n    <animateTransform attributeName=\"transform\" attributeType=\"xml\" dur=\"0.5s\" from=\"0 20 20\" repeatCount=\"indefinite\"\r\n                      to=\"360 20 20\" type=\"rotate\"></animateTransform>\r\n    </path>\r\n  </svg>\r\n                                    <br>Loading, please wait...\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/roles/create-role/create-role.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/roles/create-role/create-role.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGVzL2NyZWF0ZS1yb2xlL2NyZWF0ZS1yb2xlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/roles/create-role/create-role.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/roles/create-role/create-role.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoleComponent", function() { return CreateRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CreateRoleComponent = /** @class */ (function () {
    function CreateRoleComponent(formBuilder, rolesService, router) {
        this.formBuilder = formBuilder;
        this.rolesService = rolesService;
        this.router = router;
        this.errorMessage = '';
        this.permissionFilter = '';
        this.loading = false;
        this.loadingPermissions = false;
        this.permissions = [];
        this.rolePermission = [];
    }
    CreateRoleComponent.prototype.ngOnInit = function () {
        this.getPermissions();
        this.buildForm();
    };
    CreateRoleComponent.prototype.buildForm = function () {
        this.NewRoleForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)])],
        });
    };
    CreateRoleComponent.prototype.onChange = function (permission, isChecked) {
        var index = this.rolePermission.indexOf(permission);
        if (index > -1) {
            this.rolePermission.splice(index);
        }
        if (isChecked) {
            this.rolePermission.push(permission);
        }
    };
    CreateRoleComponent.prototype.onSubmit = function () {
        var _this = this;
        var v = {
            name: this.NewRoleForm.get('name').value,
            permissions: this.rolePermission
        };
        this.loading = true;
        if (v.name) {
            this.rolesService.insertRole(v).subscribe(function (role) {
                if (role) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Updated', 'New role created successfully', 'success');
                    _this.router.navigate(['/app/roles']);
                }
                _this.loading = false;
            }, function (err) {
                _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router);
                _this.loading = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error', _this.errorMessage, 'error');
            });
        }
    };
    CreateRoleComponent.prototype.removeUnderScore = function (name) {
        while (name.indexOf('_') > -1) {
            name = name.replace('_', ' ');
        }
        return name;
    };
    Object.defineProperty(CreateRoleComponent.prototype, "filteredPermissions", {
        get: function () {
            var _this = this;
            return this.permissions.filter(function (permission) { return permission.toLowerCase().indexOf(_this.permissionFilter.toLowerCase()) > -1; });
        },
        enumerable: true,
        configurable: true
    });
    CreateRoleComponent.prototype.getPermissions = function () {
        var _this = this;
        this.loadingPermissions = true;
        this.rolesService.getPermissions().subscribe(function (permissions) {
            _this.permissions = permissions;
            _this.loadingPermissions = false;
        }, function (err) {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router, true);
            _this.loadingPermissions = false;
        });
    };
    CreateRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-role',
            template: __webpack_require__(/*! raw-loader!./create-role.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/roles/create-role/create-role.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./create-role.component.scss */ "./src/app/pages/roles/create-role/create-role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_roles_service__WEBPACK_IMPORTED_MODULE_5__["RolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CreateRoleComponent);
    return CreateRoleComponent;
}());



/***/ }),

/***/ "./src/app/pages/roles/edit-role/edit-role.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/roles/edit-role/edit-role.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGVzL2VkaXQtcm9sZS9lZGl0LXJvbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/roles/edit-role/edit-role.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/roles/edit-role/edit-role.component.ts ***!
  \**************************************************************/
/*! exports provided: EditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoleComponent", function() { return EditRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/roles.service */ "./src/app/services/roles.service.ts");







var EditRoleComponent = /** @class */ (function () {
    function EditRoleComponent(router, route, rolesService, formBuilder) {
        this.router = router;
        this.route = route;
        this.rolesService = rolesService;
        this.formBuilder = formBuilder;
        this.permissionFilter = '';
        this.role = false;
        this.loading = false;
        this.pageLoading = false;
    }
    EditRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        var name = this.route.snapshot.params['name'];
        this.original_name = name;
        this.getRolesDetail(name);
    };
    EditRoleComponent.prototype.removeUnderScore = function (name) {
        while (name.indexOf('_') > -1) {
            name = name.replace('_', ' ');
        }
        return name;
    };
    Object.defineProperty(EditRoleComponent.prototype, "filteredPermissionList", {
        get: function () {
            var _this = this;
            return this.allPermissions.filter(function (permission) { return permission.toLowerCase().indexOf(_this.permissionFilter.toLowerCase()) > -1; });
        },
        enumerable: true,
        configurable: true
    });
    EditRoleComponent.prototype.getRolesDetail = function (name) {
        var _this = this;
        this.pageLoading = true;
        this.rolesService.getRole(name).subscribe(function (result) {
            _this.role = result.role;
            _this.rolePermission = result.permissions;
            _this.allPermissions = result.all_permissions;
            _this.pageLoading = false;
            _this.roleForm.patchValue({
                name: _this.role.name
            });
        }, function (err) {
            _this.pageLoading = false;
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].handleError(err, _this.router);
        });
    };
    EditRoleComponent.prototype.buildForm = function () {
        this.roleForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    EditRoleComponent.prototype.onChange = function (permission, isChecked) {
        var index = this.rolePermission.indexOf(permission);
        if (index > -1) {
            this.rolePermission.splice(index);
        }
        if (isChecked) {
            this.rolePermission.push(permission);
        }
    };
    EditRoleComponent.prototype.onSubmit = function () {
        var _this = this;
        var v = {
            name: this.roleForm.get('name').value,
            permissions: this.rolePermission
        };
        this.loading = true;
        if (v.name) {
            this.rolesService.updateRole(this.original_name, v).subscribe(function (role) {
                if (role) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Updated', 'Role\'s record successfully updated', 'success');
                    _this.router.navigate(['/app/roles']);
                }
                _this.loading = false;
            }, function (err) {
                _app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].handleError(err, _this.router, true);
                _this.loading = false;
            });
        }
    };
    EditRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-role',
            template: __webpack_require__(/*! raw-loader!./edit-role.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/roles/edit-role/edit-role.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./edit-role.component.scss */ "./src/app/pages/roles/edit-role/edit-role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditRoleComponent);
    return EditRoleComponent;
}());



/***/ }),

/***/ "./src/app/pages/roles/roles-list/roles-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/roles/roles-list/roles-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGVzL3JvbGVzLWxpc3Qvcm9sZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/roles/roles-list/roles-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/roles/roles-list/roles-list.component.ts ***!
  \****************************************************************/
/*! exports provided: RolesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesListComponent", function() { return RolesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");








var RolesListComponent = /** @class */ (function () {
    function RolesListComponent(rolesService, route, router) {
        this.rolesService = rolesService;
        this.route = route;
        this.router = router;
        this.roles = [];
        this.errorMessage = '';
    }
    RolesListComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    RolesListComponent.prototype.getRoles = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        this.loading = true;
        this.roles = [];
        this.rolesService.getRoles(value).subscribe(function (roles) {
            _this.roles = roles;
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router);
            _this.loading = false;
        });
    };
    RolesListComponent.prototype.deleteRoleSelected = function () {
    };
    RolesListComponent.prototype.can = function (permission) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].can(permission);
    };
    Object.defineProperty(RolesListComponent.prototype, "permissions", {
        get: function () {
            return _data__WEBPACK_IMPORTED_MODULE_7__["AppData"].permissions;
        },
        enumerable: true,
        configurable: true
    });
    RolesListComponent.prototype.deleteRole = function (role, i) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: 'Do you really want to delete this role?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(function (willDelete) {
            if (willDelete.value) {
                _this.rolesService.deleteRole(role.name).subscribe(function (status) {
                    if (status) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Role has been deleted!', 'success');
                        _this.roles.splice(i, 1);
                    }
                }, function (err) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router, true);
                });
            }
        });
    };
    RolesListComponent.prototype.checkAll = function (ev) {
        if (this.roles) {
            this.roles.forEach(function (x) { return x.selected = ev.target.checked; });
        }
    };
    RolesListComponent.prototype.isAllChecked = function () {
        if (this.roles) {
            return this.roles.every(function (_) { return _.selected; });
        }
        return false;
    };
    RolesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roles-list',
            template: __webpack_require__(/*! raw-loader!./roles-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/roles/roles-list/roles-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./roles-list.component.scss */ "./src/app/pages/roles/roles-list/roles-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RolesListComponent);
    return RolesListComponent;
}());



/***/ }),

/***/ "./src/app/pages/roles/roles.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/roles/roles.module.ts ***!
  \*********************************************/
/*! exports provided: routes, RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles-list/roles-list.component */ "./src/app/pages/roles/roles-list/roles-list.component.ts");
/* harmony import */ var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-role/create-role.component */ "./src/app/pages/roles/create-role/create-role.component.ts");
/* harmony import */ var _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-role/edit-role.component */ "./src/app/pages/roles/edit-role/edit-role.component.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");











var routes = [
    { path: 'create', component: _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_7__["CreateRoleComponent"] },
    { path: 'edit/:name', component: _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_8__["EditRoleComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_6__["RolesListComponent"] }
];
var RolesModule = /** @class */ (function () {
    function RolesModule() {
    }
    RolesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_6__["RolesListComponent"],
                _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_7__["CreateRoleComponent"],
                _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_8__["EditRoleComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_9__["CustomErrorModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__["LoaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], RolesModule);
    return RolesModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-roles-roles-module-es5.js.map