(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/internal-users/internal-users.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/internal-users/internal-users.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid reg-container\">\r\n    <div class=\"row\">\r\n        <div *ngIf=\"display == 'registration'\" class=\"col-lg-8 offset-lg-2 formbox\">\r\n            <div class=\"form-header\">\r\n                <img routerLink=\"/\" src=\"assets/img/users/coa.png\" class=\"rounded-circle user-img box-shadow\"\r\n                     width=\"80\">\r\n                <h3>PRICE CHECKER MDA STAFF REGISTRATION</h3>\r\n            </div>\r\n            <div widget class=\"card border-0\">\r\n                <div class=\"card-block widget-body\">\r\n                    <form class=\"form\" [formGroup]=\"internalUserForm\" (ngSubmit)=\"onSubmit(internalUserForm)\"\r\n                          novalidate>\r\n                        <input type=\"text\" formControlName=\"frontend_url\" hidden>\r\n                        <h5 class=\"mb-0 mt-3\"><b>Basic Information</b></h5>\r\n                        <hr>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>First Name<sup class=\"asterisk\">*</sup></label>\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"first_name\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['first_name'].valid && internalUserForm.controls['first_name'].touched\">\r\n                                        First Name is\r\n                                        required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Last Name<sup class=\"asterisk\">*</sup></label>\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"last_name\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['last_name'].valid && internalUserForm.controls['last_name'].touched\">\r\n                                        Last Name is\r\n                                        required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--<div class=\"col-md-6\">-->\r\n                            <!--<div class=\"form-group\">-->\r\n                            <!--<label>Middle Name</label>-->\r\n                            <!--<input class=\"form-control\" type=\"text\" formControlName=\"last_name\">-->\r\n                            <!--</div>-->\r\n                            <!--</div>-->\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Email<sup class=\"asterisk\">*</sup></label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <app-small-loader *ngIf=\"ereqLoading\"></app-small-loader>\r\n                                        <i class=\"fa text-success fa-check\" *ngIf=\"emailIsTaken == 'not taken'\"></i>\r\n                                        <i class=\"fa text-danger fa-close\" *ngIf=\"emailIsTaken == 'taken'\"></i>\r\n                                        <input class=\"form-control\" type=\"email\" #email formControlName=\"email\"\r\n                                               (blur)=\"checkEmail(email.value)\">\r\n                                    </div>\r\n                                    <div *ngIf=\"emailIsTaken == 'taken'\"><p class=\"text-warning\" *ngIf=\"emailMessage\">\r\n                                        {{emailMessage}}</p>\r\n                                    </div>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['email'].valid && internalUserForm.controls['email'].touched\">\r\n                                        Please enter a valid email\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Phone Number<sup class=\"asterisk\">*</sup></label>\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"phone\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['phone'].valid && internalUserForm.controls['phone'].touched\">\r\n                                        Phone number must be a minimum of 8 numbers\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Username<sup class=\"asterisk\">*</sup></label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <app-small-loader *ngIf=\"ureqLoading\"></app-small-loader>\r\n                                        <i class=\"fa text-success fa-check\" *ngIf=\"usernamelIsTaken == 'not taken'\"></i>\r\n                                        <i class=\"fa text-danger fa-close\" *ngIf=\"usernamelIsTaken == 'taken'\"></i>\r\n                                        <input class=\"form-control\" type=\"text\" #username formControlName=\"username\"\r\n                                               (blur)=\"checkUsername(username.value)\">\r\n                                    </div>\r\n                                    <div *ngIf=\"usernamelIsTaken == 'taken'\">\r\n                                        <p class=\"text-warning\" *ngIf=\"usernameMessage\">{{usernameMessage}}</p>\r\n                                    </div>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['username'].valid && internalUserForm.controls['username'].touched\">\r\n                                        Username is\r\n                                        required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Password<sup class=\"asterisk\">*</sup></label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <i class=\"fa fa-eye\" (click)=\"showPassword(input)\"></i>\r\n                                        <input #input type=\"password\" class=\"form-control\" formControlName=\"password\"/>\r\n                                    </div>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['password'].valid && internalUserForm.controls['password'].touched\">\r\n                                        Password must be a minimum of 8 characters\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--<div class=\"col-md-6\">-->\r\n                            <!--<div class=\"form-group\">-->\r\n                            <!--<label>Confirm Password<sup class=\"asterisk\">*</sup></label>-->\r\n                            <!--<div class=\"inner-addon right-addon\">-->\r\n                            <!--<i class=\"fa fa-eye\" (click)=\"showPassword(confirmed)\"></i>-->\r\n                            <!--<input #confirmed type=\"password\" class=\"form-control\"-->\r\n                            <!--formControlName=\"password_confirmation\"/>-->\r\n                            <!--</div>-->\r\n                            <!--<div class=\"custom-alert\"-->\r\n                            <!--*ngIf=\"!internalUserForm.controls['password_confirmation'].valid && internalUserForm.controls['password_confirmation'].touched\">-->\r\n                            <!--Please retype your password-->\r\n                            <!--</div>-->\r\n                            <!--</div>-->\r\n                            <!--</div>-->\r\n                        </div>\r\n                        <br>\r\n\r\n                        <h5><b>Work Information</b></h5>\r\n                        <hr>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Select Institution<sup class=\"asterisk\">*</sup></label>\r\n                                    <select class=\"form-control custom-select\" formControlName=\"institution_id\"\r\n                                            #institution_box (change)=\"changeParastatals(institution_box.value)\">\r\n                                        <option value=\"\" selected>{{loadingData ? 'Loading list of institutions...' : 'Select Institution'}}</option>\r\n                                        <option *ngFor=\"let institution of institutions\" value=\"{{institution.id}}\">\r\n                                            {{institution.name}}\r\n                                        </option>\r\n                                    </select>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['institution_id'].valid && internalUserForm.controls['institution_id'].touched\">\r\n                                        Please select an institution\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Select MDA<sup class=\"asterisk\">*</sup></label>\r\n                                    <select #mdabox  formControlName=\"parastatal_id\" class=\"form-control custom-select\"\r\n                                             (change)=\"updateParastatalCode(mdabox.value)\">\r\n                                        <option value=\"\" selected>{{loadingData ? 'Loading list of institutions...' : 'Select an MDA'}}</option>\r\n                                        <option *ngFor=\"let parastatal of parastatals\" [value]=\"parastatal.id\">\r\n                                            {{parastatal.name}}\r\n                                        </option>\r\n                                    </select>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['parastatal_id'].valid && internalUserForm.controls['parastatal_id'].touched\">\r\n                                        please select an mda\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>MDA Code<sup class=\"asterisk\">*</sup></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedParastatalCode\"\r\n                                    [ngModelOptions]=\"{standalone: true}\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['parastatal_code'].valid && internalUserForm.controls['parastatal_code'].touched\">\r\n                                        please enter your mda code\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Grade<sup class=\"asterisk\">*</sup></label>\r\n                                    <select class=\"form-control custom-select\" formControlName=\"grade_id\">\r\n                                        <option value=\"\">{{loadingData ? 'Loading grades, please wait...' : 'Select Grade'}}</option>\r\n                                        <option *ngFor=\"let grade of grades\" value=\"{{grade.id}}\">{{grade.level}}</option>\r\n                                    </select>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['grade_id'].valid && internalUserForm.controls['grade_id'].touched\">\r\n                                        Please select a grade\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Job Title<sup class=\"asterisk\">*</sup></label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"job_title\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['job_title'].valid && internalUserForm.controls['job_title'].touched\">\r\n                                        Please provide your job title\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Year of Employment<sup class=\"asterisk\">*</sup></label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"employed_date\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!internalUserForm.controls['employed_date'].valid && internalUserForm.controls['employed_date'].touched\">\r\n                                        Please provide your employment data\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <button [disabled]=\"!internalUserForm.valid || loading || loadingData\" class=\"btn btn-block submit-btn mt-3\">\r\n                            <span *ngIf=\"loading\">\r\n                                <app-small-loader></app-small-loader>\r\n                            </span>{{loading ? '' : 'REGISTER ACCOUNT'}}\r\n                        </button>\r\n                        <br>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"display == 'successful'\" class=\"success-container col-lg-8 offset-lg-2\">\r\n            <div class=\"image-div box-shadow\">\r\n                <img src=\"assets/img/users/coa.png\" class=\"img-responsive\">\r\n            </div>\r\n            <h3>Your account has been successfully registered</h3>\r\n            <!--<h4>Just one more thing, we have sent an activation link to your company email. Please click the link in the email to activate your account.</h4>-->\r\n\r\n            <button routerLink=\"/\" class=\"btn\">Go to Login Page</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/vendors/vendor-signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/vendors/vendor-signup.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid reg-container\">\r\n    <div class=\"row\">\r\n        <div *ngIf=\"display == 'registration'\" class=\"col-lg-8 offset-lg-2 formbox box-shadow\">\r\n            <div class=\"form-header\">\r\n                <img routerLink=\"/\" src=\"assets/img/users/coa.png\" class=\"rounded-circle user-img box-shadow\"\r\n                     width=\"80\">\r\n                <h3>PRICE CHECKER VENDOR REGISTRATION</h3>\r\n            </div>\r\n\r\n            <div class=\"my-5\" *ngIf=\"!hasConfirmedRCNumber && !justContinue\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <h5 class=\"mb-3 font-weight-bold text-center\">Welcome, enter your Company Registration\r\n                            Number</h5>\r\n                        <div class=\"col-lg-6 offset-md-3\">\r\n                            <div class=\"inner-addon right-addon\">\r\n                                <app-small-loader *ngIf=\"loadingFromApi\"></app-small-loader>\r\n                                <input class=\"form-control text-center text-uppercase\" type=\"text\"\r\n                                       #prc_number>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"mt-3 text-center\">\r\n                            <div>\r\n                                <button [disabled]=\"loadingFromApi\" (click)=\"hitBppApi(prc_number.value)\"\r\n                                        class=\"btn submit-btn\" style=\"width: 250px;\">\r\n                                    {{loadingFromApi ? 'Validating, please wait...' : 'Validate Registration Number'}}</button>\r\n                                <div class=\"text-center\">\r\n                                    <small class=\"text-danger font-weight-bold\" *ngIf=\"apiError\"\r\n                                           [innerHTML]=\"apiError\"></small>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\" m-2\">Or</div>\r\n                            <div>\r\n                                <span (click)=\"(loadingFromApi || (justContinue = true))\" [ngClass]=\"loadingFromApi ? 'm-2' : 'm-2 fake-link'\">Click here if your company is not registered with BPP</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"hasConfirmedRCNumber || justContinue\" widget class=\"card border-0\">\r\n                <div class=\"card-block widget-body\">\r\n                    <form class=\"form\" [formGroup]=\"vendorForm\" (ngSubmit)=\"onSubmit(vendorForm)\">\r\n                        <h5 class=\"mb-0 mt-3\">\r\n                            <strong>Company Information</strong>\r\n                            <hr>\r\n                        </h5>\r\n                        <div class=\"form-group\">\r\n                            <input class=\"form-control\" type=\"text\" formControlName=\"frontend_url\" hidden>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Company Name\r\n                                <sup class=\"asterisk\">*</sup>\r\n                            </label>\r\n                            <input [readonly]=\"hasConfirmedRCNumber\" class=\"form-control\" type=\"text\"\r\n                                   formControlName=\"business_name\">\r\n                            <div class=\"custom-alert\"\r\n                                 *ngIf=\"!vendorForm.controls['business_name'].valid && vendorForm.controls['business_name'].touched\">\r\n                                Company name is required\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Company Registration Number\r\n                                        <sup class=\"asterisk\">*</sup>\r\n                                        <!--<i class=\"fa fa-info-circle\" placement=\"bottom\"-->\r\n                                        <!--[ngbTooltip]=\"'This should be your company CAC registration number'\"></i>-->\r\n                                    </label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <app-small-loader *ngIf=\"rcreqLoading\"></app-small-loader>\r\n                                        <i class=\"fa text-success fa-check\" *ngIf=\"rclIsTaken == 'not taken'\"></i>\r\n                                        <i class=\"fa text-danger fa-close\" *ngIf=\"rclIsTaken == 'taken'\"></i>\r\n                                        <input [readonly]=\"hasConfirmedRCNumber\" class=\"form-control text-uppercase\"\r\n                                               type=\"text\"\r\n                                               formControlName=\"rc_number\" #rc_number\r\n                                               (blur)=\"checkRCNumber(rc_number.value)\">\r\n                                    </div>\r\n                                    <div *ngIf=\"rclIsTaken == 'taken'\">\r\n                                        <p class=\"text-warning\" *ngIf=\"rcMessage\">{{rcMessage}}</p>\r\n                                    </div>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['rc_number'].valid && vendorForm.controls['rc_number'].touched\">\r\n                                        RC number is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Tax Identification Number\r\n                                        <sup class=\"asterisk\">*</sup>\r\n                                        <!--<i class=\"fa fa-info-circle\"-->\r\n                                        <!--placement=\"bottom\" [ngbTooltip]=\"'This should be your Company tax number. Format should be xxxxxxxx-xxxx'\"></i>-->\r\n                                    </label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <app-small-loader *ngIf=\"treqLoading\"></app-small-loader>\r\n                                        <i class=\"fa text-success fa-check\" *ngIf=\"taxlIsTaken == 'not taken'\"></i>\r\n                                        <i class=\"fa text-danger fa-close\" *ngIf=\"taxlIsTaken == 'taken'\"></i>\r\n                                        <input [readonly]=\"hasConfirmedRCNumber\"\r\n                                               class=\"form-control text-uppercase tax_id\" type=\"text\"\r\n                                               formControlName=\"tax_identification_number\" #tax_id\r\n                                               (blur)=\"checkTaxID(tax_id.value)\">\r\n                                        <div *ngIf=\"taxlIsTaken == 'taken'\">\r\n                                            <p class=\"text-warning\" *ngIf=\"taxMessage\">{{taxMessage}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['tax_identification_number'].valid && vendorForm.controls['tax_identification_number'].touched && !hasConfirmedRCNumber\">\r\n                                        Tax identification number is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Company Email\r\n                                        <sup class=\"asterisk\">*</sup>\r\n                                    </label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <app-small-loader *ngIf=\"ereqLoading\"></app-small-loader>\r\n                                        <i class=\"fa text-success fa-check\" *ngIf=\"emailIsTaken == 'not taken'\"></i>\r\n                                        <i class=\"fa text-danger fa-close\" *ngIf=\"emailIsTaken == 'taken'\"></i>\r\n                                        <input class=\"form-control\" type=\"email\" #email formControlName=\"email\"\r\n                                               (blur)=\"checkEmail(email.value)\">\r\n                                    </div>\r\n                                    <div *ngIf=\"emailIsTaken == 'taken'\"><p class=\"text-warning\" *ngIf=\"emailMessage\">\r\n                                        {{emailMessage}}</p>\r\n                                    </div>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['email'].valid && vendorForm.controls['email'].touched\">\r\n                                        Please enter a valid email\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Company Website</label>\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"website\">\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Business Description\r\n                                <sup class=\"asterisk\">*</sup>\r\n                            </label>\r\n                            <textarea type=\"text\" rows=\"6\" class=\"form-control\"\r\n                                      formControlName=\"business_description\"></textarea>\r\n                            <div class=\"custom-alert\"\r\n                                 *ngIf=\"!vendorForm.controls['business_description'].valid && vendorForm.controls['business_description'].touched\">\r\n                                Business Description is required\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <h5>\r\n                            <b>Basic Information</b>\r\n                            <!--<i class=\"fa fa-info-circle\" placement=\"bottom\"-->\r\n                            <!--[ngbTooltip]=\"'This is the personal information of your company representative'\"></i>-->\r\n                        </h5>\r\n                        <hr>\r\n                        <br>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>First Name\r\n                                        <sup class=\"asterisk\">*</sup>\r\n                                    </label>\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"first_name\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['first_name'].valid && vendorForm.controls['first_name'].touched\">\r\n                                        First Name is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Last Name\r\n                                        <sup class=\"asterisk\">*</sup>\r\n                                    </label>\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"last_name\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['last_name'].valid && vendorForm.controls['last_name'].touched\">\r\n                                        Last name is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Email</label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <input class=\"form-control\" type=\"email\" formControlName=\"email1\">\r\n                                    </div>\r\n\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['email1'].valid && vendorForm.controls['email1'].touched\">\r\n                                        Please enter a valid email\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Phone Number\r\n                                        <sup class=\"asterisk\">*</sup>\r\n                                    </label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <app-small-loader *ngIf=\"preqLoading\"></app-small-loader>\r\n                                        <i class=\"fa text-success fa-check\" *ngIf=\"phoneIsTaken == 'not taken'\"></i>\r\n                                        <i class=\"fa text-danger fa-close\" *ngIf=\"phoneIsTaken == 'taken'\"></i>\r\n                                        <input class=\"form-control\" type=\"text\" #phone formControlName=\"phone\"\r\n                                               (blur)=\"checkPhone(phone.value)\">\r\n                                    </div>\r\n                                    <div *ngIf=\"phoneIsTaken == 'taken'\">\r\n                                        <p class=\"text-warning\" *ngIf=\"phoneMessage\">{{phoneMessage}}</p>\r\n                                    </div>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['phone'].valid && vendorForm.controls['phone'].touched\">\r\n                                        Phone number must be a minimum of 8 numbers\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Username<sup class=\"asterisk\">*</sup>\r\n                                    </label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <app-small-loader *ngIf=\"ureqLoading\"></app-small-loader>\r\n                                        <i class=\"fa text-success fa-check\" *ngIf=\"usernamelIsTaken == 'not taken'\"></i>\r\n                                        <i class=\"fa text-danger fa-close\" *ngIf=\"usernamelIsTaken == 'taken'\"></i>\r\n                                        <input class=\"form-control\" type=\"text\" #username formControlName=\"username\"\r\n                                               (blur)=\"checkUsername(username.value)\">\r\n                                    </div>\r\n                                    <div *ngIf=\"usernamelIsTaken == 'taken'\">\r\n                                        <p class=\"text-warning\" *ngIf=\"usernameMessage\">{{usernameMessage}}</p>\r\n                                    </div>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['username'].valid && vendorForm.controls['username'].touched\">\r\n                                        Username is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Password\r\n                                        <sup class=\"asterisk\">*</sup>\r\n                                    </label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <i class=\"fa fa-eye\" (click)=\"showPassword(input)\"></i>\r\n                                        <input #input type=\"password\" class=\"form-control\" formControlName=\"password\"/>\r\n                                    </div>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['password'].valid && vendorForm.controls['password'].touched\">\r\n                                        Password must be a minimum of 8 characters\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <h5 class=\"mt-3\">\r\n                            <strong>Business Address</strong>\r\n                        </h5>\r\n                        <hr>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Address Line 1\r\n                                        <sup class=\"asterisk\">*</sup>\r\n                                    </label>\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"address_line_1\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['address_line_1'].valid && vendorForm.controls['address_line_1'].touched\">\r\n                                        Address is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Address Line 2</label>\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"address_line_2\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label>State\r\n                                        <sup class=\"asterisk\">*</sup>\r\n                                    </label>\r\n                                    <select class=\"form-control custom-select\" formControlName=\"state_id\" #statesbox\r\n                                            (change)=\"changeCities(statesbox.value)\">\r\n                                        <option value=\"\" selected>Select a state</option>\r\n                                        <option *ngFor=\"let state of states\" value=\"{{state.id}}\">{{state.name}}\r\n                                        </option>\r\n                                    </select>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!vendorForm.controls['state_id'].valid && vendorForm.controls['state_id'].touched\">\r\n                                        State is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label>City\r\n                                        <sup class=\"asterisk\">*</sup>\r\n                                    </label>\r\n                                    <select class=\"form-control custom-select\" formControlName=\"city_id\">\r\n                                        <option value=\"0\" selected>City</option>\r\n                                        <option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label>P.O BOX Number</label>\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"pobox_number\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div *ngIf=\"errorMessage\" class=\"alert alert-danger error-box\" [innerHTML]=\"errorMessage\"></div>\r\n\r\n                        <button [disabled]=\"loading\" class=\"btn btn-block submit-btn mb-2\">\r\n                            <span *ngIf=\"loading\">\r\n                                <app-small-loader></app-small-loader>\r\n                            </span> {{loading ? '' : 'REGISTER ACCOUNT'}}\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"display == 'successful'\" class=\"success-container col-lg-8 offset-lg-2\">\r\n            <div class=\"image-div box-shadow\">\r\n                <img src=\"assets/img/users/coa.png\" class=\"img-responsive\">\r\n            </div>\r\n            <h3>Your account has been successfully registered</h3>\r\n            <!--<h4>Just one more thing, we have sent an activation link to your company email. Please click the link in the email to activate your account.</h4>-->\r\n\r\n            <button routerLink=\"/\" class=\"btn\">Go to Login Page</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/register/internal-users/internal-users.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/register/internal-users/internal-users.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg-container {\n  background: #0DB28B;\n  min-height: 100%;\n  padding: 40px;\n}\n.reg-container .formbox {\n  background: white;\n  padding: 20px;\n}\n.reg-container .formbox .form-header {\n  text-align: center;\n  align-content: center;\n}\n.reg-container .formbox .form-header h3, .reg-container .formbox .form-header img {\n  margin-bottom: 10px;\n}\n.asterisk {\n  color: red;\n  font-size: 12px;\n  font-weight: bolder;\n}\n.inner-addon .fa {\n  position: absolute;\n  padding: 10px;\n  cursor: pointer;\n}\n.inner-addon svg {\n  position: absolute;\n  padding: 3px;\n  cursor: pointer;\n  margin-top: 5px !important;\n}\nsvg path,\nsvg rect {\n  fill: #0DB28B;\n}\n.right-addon svg {\n  right: 20px;\n}\n.right-addon .fa {\n  right: 15px;\n}\n.right-addon input {\n  padding-right: 30px;\n}\n.submit-btn {\n  padding: 15px 20px;\n  font-weight: bolder;\n  background: #0DB28B;\n  border-color: #0DB28B;\n  color: white;\n}\n.error-box {\n  padding: 10px;\n}\n.error-box ul {\n  list-style-type: none;\n}\n.success-container {\n  padding-top: 10%;\n  text-align: center;\n  color: whitesmoke;\n}\n.success-container .image-div {\n  background: white;\n  width: 150px;\n  padding: 18px 10px 10px;\n  display: block;\n  border-radius: 50%;\n  height: 150px;\n  margin: 0 auto;\n}\n.success-container .img-responsive {\n  width: 100%;\n}\n.success-container h3 {\n  font-weight: bolder;\n  font-size: 32px;\n  line-height: 1.5;\n  line-spacing: 1px;\n}\n.success-container h4 {\n  line-height: 1.5;\n  line-spacing: 1px;\n  padding-bottom: 20px;\n}\n.success-container button {\n  padding: 15px 20px;\n  background: #E26A60;\n  color: white;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvaW50ZXJuYWwtdXNlcnMvQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcSWxvciB0ZWNobm9sb2dpZXMgbHRkXFxpbG9yLXBjLXdlYi9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxpbnRlcm5hbC11c2Vyc1xcaW50ZXJuYWwtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL2ludGVybmFsLXVzZXJzL2ludGVybmFsLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBSmM7RUFLZCxnQkFBQTtFQUNBLGFBQUE7QUNGRjtBRElFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FDRko7QURJSTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNGTjtBRElNO0VBQ0UsbUJBQUE7QUNGUjtBRFFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ0xGO0FEUUE7O0VBRUUsYUFBQTtBQ0xGO0FEU0E7RUFDRSxXQUFBO0FDTkY7QURTQTtFQUNFLFdBQUE7QUNORjtBRFNBO0VBQ0UsbUJBQUE7QUNORjtBRFNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQS9EYztFQWdFZCxxQkFoRWM7RUFpRWQsWUFBQTtBQ05GO0FEU0E7RUFDRSxhQUFBO0FDTkY7QURRRTtFQUNFLHFCQUFBO0FDTko7QURVQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1BGO0FEUUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDTko7QURRRTtFQUNFLFdBQUE7QUNOSjtBRFNFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNSSjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9pbnRlcm5hbC11c2Vycy9pbnRlcm5hbC11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWdyZWVuOiAjMERCMjhCO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjNjg5Mzg2O1xyXG4kYXBwbGUtZ3JlZW46ICNFMEU0REY7XHJcbi5yZWctY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1ncmVlbjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcblxyXG4gIC5mb3JtYm94IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAuZm9ybS1oZWFkZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIGgzLCBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hc3RlcmlzayB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmlubmVyLWFkZG9uIC5mYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW5uZXItYWRkb24gc3ZnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuc3ZnIHBhdGgsXHJcbnN2ZyByZWN0IHtcclxuICBmaWxsOiAjMERCMjhCO1xyXG59XHJcblxyXG5cclxuLnJpZ2h0LWFkZG9uIHN2ZyB7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1hZGRvbiAuZmEge1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ucmlnaHQtYWRkb24gaW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1ncmVlbjtcclxuICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVycm9yLWJveCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnN1Y2Nlc3MtY29udGFpbmVye1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIC5pbWFnZS1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDE4cHggMTBweCAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5pbWctcmVzcG9uc2l2ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaDN7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGxpbmUtc3BhY2luZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgaDR7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbGluZS1zcGFjaW5nOiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UyNkE2MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCIucmVnLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG4ucmVnLWNvbnRhaW5lciAuZm9ybWJveCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnJlZy1jb250YWluZXIgLmZvcm1ib3ggLmZvcm0taGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4ucmVnLWNvbnRhaW5lciAuZm9ybWJveCAuZm9ybS1oZWFkZXIgaDMsIC5yZWctY29udGFpbmVyIC5mb3JtYm94IC5mb3JtLWhlYWRlciBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXN0ZXJpc2sge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5pbm5lci1hZGRvbiAuZmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlubmVyLWFkZG9uIHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG5zdmcgcGF0aCxcbnN2ZyByZWN0IHtcbiAgZmlsbDogIzBEQjI4Qjtcbn1cblxuLnJpZ2h0LWFkZG9uIHN2ZyB7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4ucmlnaHQtYWRkb24gLmZhIHtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5yaWdodC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xuICBib3JkZXItY29sb3I6ICMwREIyOEI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVycm9yLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZXJyb3ItYm94IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uc3VjY2Vzcy1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLnN1Y2Nlc3MtY29udGFpbmVyIC5pbWFnZS1kaXYge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxOHB4IDEwcHggMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uc3VjY2Vzcy1jb250YWluZXIgLmltZy1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3VjY2Vzcy1jb250YWluZXIgaDMge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxpbmUtc3BhY2luZzogMXB4O1xufVxuLnN1Y2Nlc3MtY29udGFpbmVyIGg0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGluZS1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnN1Y2Nlc3MtY29udGFpbmVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZDogI0UyNkE2MDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/register/internal-users/internal-users.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/register/internal-users/internal-users.component.ts ***!
  \***************************************************************************/
/*! exports provided: InternalUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalUsersComponent", function() { return InternalUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_vendor_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/vendor-data.service */ "./src/app/services/vendor-data.service.ts");
/* harmony import */ var _services_grade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/grade.service */ "./src/app/services/grade.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");









var InternalUsersComponent = /** @class */ (function () {
    function InternalUsersComponent(router, userDataService, vendorDataService, gradeService, _Location, formBuilder) {
        this.router = router;
        this.userDataService = userDataService;
        this.vendorDataService = vendorDataService;
        this.gradeService = gradeService;
        this._Location = _Location;
        this.formBuilder = formBuilder;
        this.frontendUrl = 'http://' + window.location.hostname + '/activate';
        this.loading = false;
        this.institutions = [];
        this.parastatals = [];
        this.grades = [];
        this.selectedParastatal = false;
        this.selectedParastatalCode = '';
        this.display = 'registration';
        this.loadingData = false;
    }
    InternalUsersComponent.prototype.ngOnInit = function () {
        this.url = _app_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].url;
        this.buildForm();
        this.getRegistrationData();
    };
    InternalUsersComponent.prototype.buildForm = function () {
        this.internalUserForm = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
            institution_id: ['Institution', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            grade_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            parastatal_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            parastatal_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            job_title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            employed_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            frontend_url: [this.frontendUrl]
        });
    };
    InternalUsersComponent.prototype.getRegistrationData = function () {
        var _this = this;
        this.loadingData = true;
        this.userDataService.getMDARegistrationData().subscribe(function (data) {
            _this.institutions = data.institutions;
            _this.grades = data.grades;
            _this.loadingData = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].handleError(err, _this.router);
            _this.loadingData = true;
        });
    };
    InternalUsersComponent.prototype.changeParastatals = function (value) {
        this.parastatals = [];
        if (value) {
            for (var x = 0; x < this.institutions.length; x++) {
                if (this.institutions[x].id.toString() === value.toString()) {
                    this.parastatals = this.institutions[x].parastatals;
                    break;
                }
            }
        }
    };
    InternalUsersComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.loading = true;
        //   console.log(value);
        if (value) {
            this.userDataService.addUser(value)
                .subscribe(function (internalUser) {
                if (internalUser) {
                    _this.display = 'successful';
                }
                else {
                    _this.loading = false;
                }
            }, function (err) {
                _this.loading = false;
                _app_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].handleError(err, _this.router, true);
            });
        }
    };
    InternalUsersComponent.prototype.checkEmail = function (email) {
        var _this = this;
        email = email.trim();
        if (!email) {
            return;
        }
        this.ereqLoading = true;
        var field = 'email';
        this.vendorDataService.IfExists(field, email)
            .subscribe(function (status) {
            _this.emailIsTaken = status;
            _this.ereqLoading = false;
            _this.emailMessage = 'This email is already exists';
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].handleError(err, _this.router);
        });
    };
    InternalUsersComponent.prototype.checkUsername = function (username) {
        var _this = this;
        this.ureqLoading = true;
        username = username.trim();
        if (!username) {
            return;
        }
        var field = 'username';
        this.vendorDataService.IfExists(field, username).subscribe(function (status) {
            _this.usernamelIsTaken = status;
            _this.ureqLoading = false;
            _this.usernameMessage = 'This username already exists';
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].handleError(err, _this.router);
        });
    };
    InternalUsersComponent.prototype.showPassword = function (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    };
    InternalUsersComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    InternalUsersComponent.prototype.updateParastatalCode = function (id) {
        var institution = this.internalUserForm.get('institution_id').value;
        alert(institution);
        var institiondRec = this.institutions.find(function (e) { return e.id === institution; });
        if (institiondRec) {
            this.selectedParastatal = institiondRec.parastatals.find(function (ee) { return ee.id === id; });
        }
        this.internalUserForm.patchValue({
            parastatal_code: this.selectedParastatal ? this.selectedParastatal.code : '',
        });
        this.selectedParastatalCode = this.selectedParastatal ? this.selectedParastatal.code : '';
    };
    InternalUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-internal',
            template: __webpack_require__(/*! raw-loader!./internal-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/internal-users/internal-users.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./internal-users.component.scss */ "./src/app/pages/register/internal-users/internal-users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"],
            _services_vendor_data_service__WEBPACK_IMPORTED_MODULE_6__["VendorDataService"],
            _services_grade_service__WEBPACK_IMPORTED_MODULE_7__["GradeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], InternalUsersComponent);
    return InternalUsersComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: routes, RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _vendors_vendor_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendors/vendor-signup.component */ "./src/app/pages/register/vendors/vendor-signup.component.ts");
/* harmony import */ var _internal_users_internal_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal-users/internal-users.component */ "./src/app/pages/register/internal-users/internal-users.component.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");









var routes = [
    { path: '', redirectTo: 'vendor', pathMatch: 'full' },
    { path: 'mda-staff', component: _internal_users_internal_users_component__WEBPACK_IMPORTED_MODULE_6__["InternalUsersComponent"] },
    { path: 'vendor', component: _vendors_vendor_signup_component__WEBPACK_IMPORTED_MODULE_5__["VendorSignUpComponent"] }
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_7__["CustomErrorModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _vendors_vendor_signup_component__WEBPACK_IMPORTED_MODULE_5__["VendorSignUpComponent"],
                _internal_users_internal_users_component__WEBPACK_IMPORTED_MODULE_6__["InternalUsersComponent"]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/pages/register/vendors/vendor-signup.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/register/vendors/vendor-signup.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg-container {\n  background: #0DB28B;\n  min-height: calc(100vh) !important;\n  padding: 40px;\n}\n.reg-container .formbox {\n  background: white;\n  padding: 20px;\n}\n.reg-container .formbox .form-header {\n  text-align: center;\n  align-content: center;\n}\n.reg-container .formbox .form-header h3, .reg-container .formbox .form-header img {\n  margin-bottom: 10px;\n}\n.inner-addon .fa {\n  position: absolute;\n  padding: 10px;\n  cursor: pointer;\n}\n.inner-addon svg {\n  position: absolute;\n  padding: 3px;\n  margin-top: 5px !important;\n  cursor: pointer;\n}\nsvg path,\nsvg rect {\n  fill: #0DB28B;\n}\n.right-addon svg {\n  right: 20px;\n}\n.right-addon .fa {\n  right: 15px;\n}\n.right-addon input {\n  padding-right: 30px;\n}\n.error-box {\n  padding: 10px;\n}\n.error-box ul {\n  list-style-type: none;\n}\n.action-box {\n  border-radius: 3px;\n  border: 2px dashed #ECEEEF;\n  padding: 10px;\n  align-items: center;\n}\n.action-box button {\n  cursor: pointer;\n}\n.action-box h3 {\n  color: #333333;\n  text-align: left;\n}\n.fake-link {\n  cursor: pointer;\n}\n.fake-link:hover {\n  color: #0DB28B;\n  text-decoration: underline !important;\n}\n.success-container {\n  padding-top: 10%;\n  text-align: center;\n  color: whitesmoke;\n}\n.success-container .image-div {\n  background: white;\n  width: 150px;\n  padding: 18px 10px 10px;\n  display: block;\n  border-radius: 50%;\n  height: 150px;\n  margin: 0 auto;\n}\n.success-container .img-responsive {\n  width: 100%;\n}\n.success-container h3 {\n  font-weight: bolder;\n  font-size: 32px;\n  line-height: 1.5;\n  line-spacing: 1px;\n}\n.success-container h4 {\n  line-height: 1.5;\n  line-spacing: 1px;\n  padding-bottom: 20px;\n}\n.success-container button {\n  padding: 15px 20px;\n  background: #E26A60;\n  color: white;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvdmVuZG9ycy9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXFByb2plY3RzXFxJbG9yIHRlY2hub2xvZ2llcyBsdGRcXGlsb3ItcGMtd2ViL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHZlbmRvcnNcXHZlbmRvci1zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3ZlbmRvcnMvdmVuZG9yLXNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQUpjO0VBS2Qsa0NBQUE7RUFDQSxhQUFBO0FDRkY7QURJRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQ0ZKO0FESUk7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDRk47QURJTTtFQUNFLG1CQUFBO0FDRlI7QURRQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNMRjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDTEY7QURRQTs7RUFFRSxhQUFBO0FDTEY7QURRQTtFQUNFLFdBQUE7QUNMRjtBRFFBO0VBQ0UsV0FBQTtBQ0xGO0FEUUE7RUFDRSxtQkFBQTtBQ0xGO0FEUUE7RUFDRSxhQUFBO0FDTEY7QURPRTtFQUNFLHFCQUFBO0FDTEo7QURTQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNORjtBRFFFO0VBQ0UsZUFBQTtBQ05KO0FEU0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRFdBO0VBQ0UsZUFBQTtBQ1JGO0FEVUU7RUFDRSxjQUFBO0VBQ0EscUNBQUE7QUNSSjtBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVEY7QURVRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNSSjtBRFVFO0VBQ0UsV0FBQTtBQ1JKO0FEV0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDVEo7QURZRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1ZKO0FEWUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3ZlbmRvcnMvdmVuZG9yLXNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWdyZWVuOiAjMERCMjhCO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjNjg5Mzg2O1xyXG4kYXBwbGUtZ3JlZW46ICNFMEU0REY7XHJcbi5yZWctY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1ncmVlbjtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoKSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcblxyXG4gIC5mb3JtYm94IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAuZm9ybS1oZWFkZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIGgzLCBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbm5lci1hZGRvbiAuZmEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmlubmVyLWFkZG9uIHN2ZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnN2ZyBwYXRoLFxyXG5zdmcgcmVjdCB7XHJcbiAgZmlsbDogIzBEQjI4QjtcclxufVxyXG5cclxuLnJpZ2h0LWFkZG9uIHN2ZyB7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1hZGRvbiAuZmEge1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ucmlnaHQtYWRkb24gaW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5lcnJvci1ib3gge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYm94IHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNFQ0VFRUY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFrZS1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwREIyOEI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnN1Y2Nlc3MtY29udGFpbmVye1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIC5pbWFnZS1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDE4cHggMTBweCAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5pbWctcmVzcG9uc2l2ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaDN7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGxpbmUtc3BhY2luZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgaDR7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbGluZS1zcGFjaW5nOiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UyNkE2MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIiwiLnJlZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0MHB4O1xufVxuLnJlZy1jb250YWluZXIgLmZvcm1ib3gge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5yZWctY29udGFpbmVyIC5mb3JtYm94IC5mb3JtLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLnJlZy1jb250YWluZXIgLmZvcm1ib3ggLmZvcm0taGVhZGVyIGgzLCAucmVnLWNvbnRhaW5lciAuZm9ybWJveCAuZm9ybS1oZWFkZXIgaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmlubmVyLWFkZG9uIC5mYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5uZXItYWRkb24gc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnN2ZyBwYXRoLFxuc3ZnIHJlY3Qge1xuICBmaWxsOiAjMERCMjhCO1xufVxuXG4ucmlnaHQtYWRkb24gc3ZnIHtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5yaWdodC1hZGRvbiAuZmEge1xuICByaWdodDogMTVweDtcbn1cblxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmVycm9yLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZXJyb3ItYm94IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uYWN0aW9uLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNFQ0VFRUY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWN0aW9uLWJveCBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWN0aW9uLWJveCBoMyB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZmFrZS1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZha2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMERCMjhCO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4uc3VjY2Vzcy1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLnN1Y2Nlc3MtY29udGFpbmVyIC5pbWFnZS1kaXYge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxOHB4IDEwcHggMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uc3VjY2Vzcy1jb250YWluZXIgLmltZy1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3VjY2Vzcy1jb250YWluZXIgaDMge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxpbmUtc3BhY2luZzogMXB4O1xufVxuLnN1Y2Nlc3MtY29udGFpbmVyIGg0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGluZS1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnN1Y2Nlc3MtY29udGFpbmVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZDogI0UyNkE2MDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/register/vendors/vendor-signup.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/register/vendors/vendor-signup.component.ts ***!
  \*******************************************************************/
/*! exports provided: VendorSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorSignUpComponent", function() { return VendorSignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_vendor_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/vendor-data.service */ "./src/app/services/vendor-data.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var VendorSignUpComponent = /** @class */ (function () {
    function VendorSignUpComponent(router, formBuilder, vendorDataService, _Location) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.vendorDataService = vendorDataService;
        this._Location = _Location;
        this.frontendUrl = 'http://' + window.location.hostname + '/activate';
        this.states = [];
        this.cities = [];
        this.loading = false;
        this.hasConfirmedRCNumber = false;
        this.justContinue = false;
        this.apiError = '';
        this.loadingFromApi = false;
        this.display = 'registration';
    }
    VendorSignUpComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getStates();
    };
    VendorSignUpComponent.prototype.buildForm = function () {
        this.vendorForm = this.formBuilder.group({
            business_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rc_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tax_identification_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            business_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middle_name: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            email1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            website: [''],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
            password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address_line_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address_line_2: [''],
            pobox_number: [''],
            frontend_url: [this.frontendUrl]
        });
    };
    VendorSignUpComponent.prototype.getStates = function () {
        var _this = this;
        this.vendorDataService.getStates()
            .subscribe(function (states) {
            _this.states = states;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router);
        });
    };
    VendorSignUpComponent.prototype.hitBppApi = function (rcNumber) {
        var _this = this;
        this.apiError = '';
        this.errorMessage = '';
        if (rcNumber) {
            this.loadingFromApi = true;
            this.vendorDataService.fetchVendorDataFromBPPApi(rcNumber).subscribe(function (response) {
                _this.loadingFromApi = false;
                if (response.length) {
                    var data = response[0];
                    _this.vendorForm.patchValue({
                        business_name: data.companyName,
                        address_line_1: data.headOfficeAddressStreet,
                        pobox_number: data.headOfficeAddressPobox,
                        tax_identification_number: data.tinNumber,
                        rc_number: data.rcNumber,
                        email: data.companyContactEmail || data.companyContactAlternativeEmail,
                        email1: data.companyContactAlternativeEmail,
                        website: data.website,
                        phone: data.companyContactPhone1 || data.companyContactPhone2
                    });
                    _this.hasConfirmedRCNumber = true;
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        title: 'Sorry!',
                        html: 'It seemed like your company is not BPP compliant.<br>Do you want to continue?',
                        type: 'question',
                        confirmButtonText: 'Continue',
                        showConfirmButton: true,
                        showCancelButton: true,
                        cancelButtonText: 'Cancel'
                    }).then(function (goOn) {
                        if (goOn.value) {
                            _this.justContinue = true;
                        }
                    });
                }
            }, function (err) {
                _this.apiError = _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router);
                _this.loadingFromApi = false;
            });
        }
        else {
            this.apiError = 'Please provide your RC Number';
        }
    };
    VendorSignUpComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.loading = true;
        if (value) {
            this.vendorDataService.addVendor(value).subscribe(function (vendor) {
                if (vendor) {
                    _this.display = 'successful';
                }
                else {
                    _this.loading = false;
                }
            }, function (err) {
                _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router, true);
                _this.loading = false;
            });
        }
    };
    VendorSignUpComponent.prototype.checkEmail = function (email) {
        var _this = this;
        email = email.trim();
        if (!email)
            return;
        this.emailMessage = '';
        this.ereqLoading = true;
        var field = 'email';
        this.vendorDataService.IfExists(field, email).subscribe(function (status) {
            _this.emailIsTaken = status;
            _this.ereqLoading = false;
            _this.emailMessage = 'This email already exists';
        }, function (err) {
            _this.emailMessage = _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router);
        });
    };
    VendorSignUpComponent.prototype.checkUsername = function (username) {
        var _this = this;
        username = username.trim();
        if (!username)
            return;
        this.usernameMessage = '';
        this.ureqLoading = true;
        var field = 'username';
        this.vendorDataService.IfExists(field, username).subscribe(function (status) {
            _this.usernamelIsTaken = status;
            _this.ureqLoading = false;
            _this.usernameMessage = 'This username already exists';
        }, function (err) {
            _this.usernameMessage = _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router);
        });
    };
    VendorSignUpComponent.prototype.checkPhone = function (phone) {
        var _this = this;
        this.phoneMessage = '';
        if (phone === undefined || phone.toString().trim() === '') {
            return;
        }
        this.preqLoading = true;
        var field = 'phone';
        this.vendorDataService.IfExists(field, phone).subscribe(function (status) {
            _this.phoneIsTaken = status;
            _this.preqLoading = false;
            _this.phoneMessage = 'This phone number already exists';
        }, function (err) {
            _this.phoneMessage = _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router);
        });
    };
    VendorSignUpComponent.prototype.checkRCNumber = function (rc_number) {
        var _this = this;
        this.rcMessage = '';
        if (rc_number === undefined || rc_number.toString().trim() === '') {
            return;
        }
        this.rcreqLoading = true;
        var field = 'rc_number';
        this.vendorDataService.IfExists(field, rc_number)
            .subscribe(function (status) {
            _this.rclIsTaken = status;
            _this.rcreqLoading = false;
            _this.rcMessage = 'This RC Number already exists';
        }, function (err) {
            _this.rcMessage = _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router);
        });
    };
    VendorSignUpComponent.prototype.checkTaxID = function (tax_id) {
        var _this = this;
        tax_id = tax_id.trim();
        this.taxMessage = '';
        if (tax_id === undefined || tax_id.length < 12) {
            return;
        }
        this.treqLoading = true;
        var field = 'tax_identification_number';
        this.vendorDataService.IfExists(field, tax_id).subscribe(function (status) {
            _this.taxlIsTaken = status;
            _this.treqLoading = false;
            _this.taxMessage = 'This tax identification number already exists';
        }, function (err) {
            _this.taxMessage = _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, _this.router);
        });
    };
    VendorSignUpComponent.prototype.showPassword = function (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    };
    VendorSignUpComponent.prototype.changeCities = function (v) {
        var _this = this;
        this.cities = [];
        this.vendorForm.patchValue({ 'city_id': '' });
        if (!v) {
            return;
        }
        this.states.forEach(function (state) {
            if (state.id.toString() === v.toString()) {
                _this.cities = state.cities;
            }
        });
    };
    VendorSignUpComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    VendorSignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-signup',
            template: __webpack_require__(/*! raw-loader!./vendor-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/vendors/vendor-signup.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./vendor-signup.component.scss */ "./src/app/pages/register/vendors/vendor-signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_vendor_data_service__WEBPACK_IMPORTED_MODULE_5__["VendorDataService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], VendorSignUpComponent);
    return VendorSignUpComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-register-register-module-es5.js.map