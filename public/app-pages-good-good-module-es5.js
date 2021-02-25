(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-good-good-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/good/create-goods/create-goods.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/good/create-goods/create-goods.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-6  offset-lg-3 form-holder\">\r\n        <div class=\"card box-shadow border-0\">\r\n            <div class=\"card-block p-4\">\r\n                <h3 class=\"mt-4\">Create New Goods\r\n                    <button routerLink=\"/app/goods/list\" class=\"btn btn-success pull-right\"><i\r\n                            class=\"fa fa-arrow-left\"></i>\r\n                        Goods List\r\n                    </button>\r\n                </h3>\r\n                <hr>\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <form class=\"form\" [formGroup]=\"newForm\" (ngSubmit)=\"onSubmit()\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"x1\">Product Name</label>\r\n                                            <input id=\"x1\" class=\"form-control\" formControlName=\"name\"\r\n                                                   type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Product Category</label>\r\n                                            <select #cCategory class=\"form-control\" formControlName=\"category_id\"\r\n                                                    (change)=\"showProperties(cCategory.value)\">\r\n                                                <option value=\"\">Select a category...</option>\r\n                                                <option *ngFor=\"let cat of categories\"\r\n                                                        value=\"{{cat.id}}\">{{cat.name}}</option>\r\n                                            </select>\r\n                                            <div *ngIf=\"propertyVal\" [innerHTML]=\"propertyVal\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Short description</label>\r\n                                            <textarea rows=\"3\" class=\"form-control\" formControlName=\"short_description\">\r\n                                            </textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n\r\n                            <form id=\"propertyForm\">\r\n                                <div style=\"margin-bottom: -20px\" class=\"mt-5\">\r\n                                    <label class=\"font-20\">Properties</label>\r\n                                    <button type=\"button\" (click)=\"addNewProperty()\"\r\n                                            class=\"btn btn-sm btn-success pull-right\">Add Property\r\n                                    </button>\r\n                                </div>\r\n                                <hr>\r\n                                <div *ngIf=\"properties !== null && properties.length > 0\"\r\n                                     class=\"form-group inner-dynamic-container\">\r\n                                    <div *ngFor=\"let prop of properties\" class=\"input-group box-shadow\">\r\n                                        <input [(ngModel)]=\"prop.name\" placeholder=\"Property name\"\r\n                                               [ngModelOptions]=\"{standalone: true}\" value=\"{{prop.name}}\"\r\n                                               class=\"form-control\">\r\n                                        <input placeholder=\"Enter values here for drop-down\" [(ngModel)]=\"prop.type\"\r\n                                               [ngModelOptions]=\"{standalone: true}\"\r\n                                               class=\"form-control mx-2\" [value]=\"prop.type\">\r\n                                        <button (click)=\"removeProperty(prop)\" type=\"submit\"\r\n                                                class=\"btn btn-danger btn-sm px-3\">\r\n                                            <span class=\"fa fa-trash\"></span>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"!(properties !== null && properties.length > 0)\"\r\n                                     class=\"form-group text-center inner-dynamic-container\">\r\n                                    No property added yet...\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <button [disabled]=\"!newForm.valid || saving\" (click)=\"onSubmit()\"\r\n                            class=\"btn submit-btn btn-block\">\r\n                        <span *ngIf=\"!saving\" class=\"fa fa-plus mr-2\"></span>\r\n                        <span *ngIf=\"saving\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                                 width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                                 xml:space=\"preserve\">\r\n      <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                            <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\"\r\n                          dur=\"0.5s\" repeatCount=\"indefinite\"\r\n        />\r\n      </path>\r\n    </svg></span>\r\n                        {{saving ? '' : 'Add Good Record'}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/good/edit-goods/edit-goods.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/good/edit-goods/edit-goods.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"loading\"></app-loader>\r\n<div *ngIf=\"!loading && good\" class=\"row\">\r\n    <div class=\"col-lg-6  offset-lg-3 form-holder\">\r\n        <div class=\"card box-shadow border-0 p-3\">\r\n            <div class=\"card-block p-3\">\r\n                <h3>Edit Goods Detail\r\n                    <button routerLink=\"/app/goods\" class=\"btn btn-success pull-right\"><i\r\n                            class=\"fa fa-arrow-left\"></i>\r\n                        Goods List\r\n                    </button>\r\n                </h3>\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <form class=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"x1\">Product Name</label>\r\n                                        <input id=\"x1\" class=\"form-control\" formControlName=\"name\"\r\n                                               type=\"text\" value=\"{{(good !== null ? good.name : '')}}\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Product Category</label>\r\n                                        <select class=\"form-control\" formControlName=\"category_id\">\r\n                                            <option value=\"\">Select a category...</option>\r\n                                            <option *ngFor=\"let cat of categories\" value=\"{{cat.id}}\"\r\n                                                    [selected]=\"(good != null && cat.id == good.category_id)\">\r\n                                                {{cat.name}}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Short description</label>\r\n                                        <textarea rows=\"3\" class=\"form-control\" formControlName=\"short_description\">\r\n                                            {{good !== null ? good.short_description : ''}}</textarea>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n\r\n                        <form id=\"propertyForm\">\r\n                            <div style=\"margin-bottom: -20px\" class=\"mt-5\">\r\n                                <label class=\"font-20\">Properties</label>\r\n                                <button type=\"button\" (click)=\"addNewProperty()\"\r\n                                        class=\"btn btn-sm btn-success pull-right\">Add Property\r\n                                </button>\r\n                            </div>\r\n                            <hr>\r\n                            <div *ngIf=\"properties !== null && properties.length > 0\"\r\n                                 class=\"form-group inner-dynamic-container\">\r\n                                <div *ngFor=\"let prop of properties\" class=\"input-group box-shadow\">\r\n                                    <input [(ngModel)]=\"prop.name\" placeholder=\"Property name\"\r\n                                           [ngModelOptions]=\"{standalone: true}\"\r\n                                           value=\"{{prop.name}}\" class=\"form-control\">\r\n                                    <input placeholder=\"Enter values here for drop-down\" [(ngModel)]=\"prop.type\"\r\n                                           [ngModelOptions]=\"{standalone: true}\"\r\n                                           class=\"form-control mx-2\" [value]=\"prop.type\">\r\n                                    <button (click)=\"removeProperty(prop)\" type=\"submit\"\r\n                                            class=\"btn btn-danger btn-sm px-3\">\r\n                                        <span class=\"fa fa-trash\"></span>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"!(properties !== null && properties.length > 0)\"\r\n                                 class=\"form-group text-center inner-dynamic-container\">\r\n                                No property added yet...\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"alert alert-danger\" *ngIf=\"errorMessage\" [innerHTML]=\"errorMessage\"></div>\r\n                <button [disabled]=\"!editForm.valid || saving || updating\" (click)=\"onSubmit()\"\r\n                        class=\"btn btn-success pull-right submit-btn\">\r\n                    <span *ngIf=\"saving\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                         xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                         width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                         xml:space=\"preserve\">\r\n             <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n               s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n               c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                        <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n               C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n               <animateTransform attributeType=\"xml\"\r\n                                 attributeName=\"transform\"\r\n                                 type=\"rotate\"\r\n                                 from=\"0 20 20\"\r\n                                 to=\"360 20 20\"\r\n                                 dur=\"0.5s\"\r\n                                 repeatCount=\"indefinite\"/>\r\n               </path>\r\n             </svg></span>\r\n                    {{saving ? '' : 'Update Goods Record'}}\r\n                </button>\r\n\r\n                <button (click)=\"onApprove()\" [disabled]=\"!editForm.valid || updating || saving\"\r\n                        *ngIf=\"!good.approval_status\"\r\n                        class=\"btn btn-warning submit-btn\">\r\n                    <span *ngIf=\"updating\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                         xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                         width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                         xml:space=\"preserve\">\r\n             <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n               s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n               c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                        <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n               C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n               <animateTransform attributeType=\"xml\"\r\n                                 attributeName=\"transform\"\r\n                                 type=\"rotate\"\r\n                                 from=\"0 20 20\"\r\n                                 to=\"360 20 20\"\r\n                                 dur=\"0.5s\"\r\n                                 repeatCount=\"indefinite\"/>\r\n               </path>\r\n             </svg></span>{{updating ? '': 'Approve'}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-resource-not-found [willShow]=\"!loading && !good\" [message]=\"errorMessage\"></app-resource-not-found>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/good/goods-list/goods-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/good/goods-list/goods-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <form [formGroup]=\"searchForm\" (submit)=\"submitSearch()\" class=\"form\">\r\n        <div class=\"form-group\">\r\n          <div class=\"row bg-white\">\r\n            <div class=\"col-md-12 my-2\">\r\n              <div class=\"input-group box-shadow\">\r\n                <a *ngIf=\"can(permissions.add_goods)\" class=\"btn btn-success mr-2\" routerLink=\"/app/goods/create\">\r\n                  <i class=\"fa fa-plus\"></i> Add New Good </a>\r\n                <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"toggle('grid')\">\r\n                  <span class=\"fa fa-th\"></span>\r\n                </button>\r\n                <button type=\"button\" (click)=\"toggle('list')\" class=\"btn btn-success pull-right\">\r\n                  <span class=\"fa fa-list\"></span>\r\n                </button>\r\n                <input type=\"text\" formControlName=\"searchField\"\r\n                       placeholder=\"Search goods by name or description\"\r\n                       class=\"form-control\">\r\n                <select class=\"form-control ml-2\" formControlName=\"category\">\r\n                  <option value=\"\">Select a category</option>\r\n                  <option *ngFor=\"let category of categories\"\r\n                          value=\"{{category.id}}\">{{category.name}}</option>\r\n                </select>\r\n                <button type=\"submit\" [disabled]=\"processing\" class=\"btn btn-success btn-sm\">\r\n                  <i class=\"fa fa-search\"></i> Search Result\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 offset-lg-3\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 my-2\">\r\n                  <div class=\"input-group box-shadow\">\r\n                                        <span\r\n                                          class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                    <input type=\"date\" formControlName=\"fromDate\" class=\"form-control mr-1\"\r\n                           placeholder=\"From date\"\r\n                           name=\"from\">\r\n                    <span class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\">\r\n                                            <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                    <input class=\"form-control mr-1\" formControlName=\"toDate\" type=\"date\"\r\n                           placeholder=\"To date\"\r\n                           name=\"to\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"displayType == 'list'\">\r\n    <div class=\"col-12\">\r\n      <div class=\"table-responsive bg-white box-shadow\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>\r\n              <input type=\"checkbox\" class=\"styled-checkbox\" name=\"all\" id=\"all\" [checked]=\"isAllChecked()\"\r\n                     (change)=\"checkAll($event)\"/>\r\n              <label class=\"cp\" for=\"all\"></label>\r\n            </th>\r\n            <th>Name</th>\r\n            <th>Category</th>\r\n            <th>Short Description</th>\r\n            <th>Approval Status</th>\r\n            <th>Created By</th>\r\n            <th>Date Created</th>\r\n            <th>\r\n\r\n            </th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <!-- <tr *ngIf=\"!goods.length\"><td colspan=\"11\">No Good found...</td></tr> -->\r\n\r\n          <tr *ngFor=\"let good of goods\">\r\n\r\n            <td class=\"align-middle text-truncate\">\r\n              <input type=\"checkbox\" name=\"good[]\" value=\"{{good.id}}\" [id]=\"'good' + good.id\"\r\n                     [(ngModel)]=\"good.selected\"/>\r\n              <label class=\"cp\" [for]=\"'good' + good.id\"></label>\r\n            </td>\r\n            <td class=\"align-middle text-truncate\">{{good.name}}</td>\r\n            <td class=\"align-middle text-truncate\"><span>{{good.category.name}}</span></td>\r\n            <td class=\"align-middle text text-truncate\">{{good.short_description}}</td>\r\n            <td class=\"align-middle text text-truncate\">{{(good.approval_status ? 'Approved' : 'Pending')}}\r\n            </td>\r\n            <td class=\"align-middle text-truncate\">\r\n              {{(good.creator ? (good.creator.username ? good.creator.username : good.creator.username) : '')}}\r\n            </td>\r\n            <td class=\"align-middle text-truncate\">{{good.time_created}}</td>\r\n            <td class=\"align-middle\">\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <a *ngIf=\"can(permissions.edit_goods)\" [hidden]=\"processing\"\r\n                   routerLink=\"/app/goods/edit/{{good.id}}\"\r\n                   class=\"btn btn-secondary btn-sm\"><i\r\n                  class=\"fa fa-tasks\"></i>&nbsp;Edit</a>\r\n                <a *ngIf=\"can(permissions.delete_goods)\" (click)=\"deleteGood(good)\"\r\n                   class=\"btn btn-danger btn-sm text-center\">\r\n                  <i class=\"fa fa-trash\"></i>&nbsp;Delete</a></div>\r\n            </td>\r\n\r\n          </tr>\r\n\r\n          <tr *ngIf=\"(goods == null || goods.length < 1) && !searching && !errorMessage\">\r\n            <td colspan=\"8\" class=\"text-center\">Sorry, no result to show...</td>\r\n          </tr>\r\n          <tr *ngIf=\"errorMessage\">\r\n            <td colspan=\"8\" class=\"text-center text-danger\" [innerHTML]=\"errorMessage\"></td>\r\n          </tr>\r\n          <tr *ngIf=\"searching\">\r\n            <td colspan=\"11\" class=\"text-center\">\r\n              <app-item-loader></app-item-loader>\r\n              <br>\r\n              Loading, please wait...\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"displayType == 'grid'\" class=\"row\">\r\n    <div *ngFor=\"let good of goods\" class=\"col-xl-4 col-lg-6 mb-4\">\r\n      <div class=\"flip\">\r\n        <div class=\"content\">\r\n          <div class=\"front\">\r\n            <div class=\"card border-0 box-shadow rounded-2\">\r\n              <div class=\"card-header border-0 rounded-0 text-muted\">\r\n                <h5 class=\"mb-0 text-success\">\r\n                  <i class=\"fa fa-cart\"></i> {{good.name}}\r\n                </h5>\r\n                <div class=\"widget-controls\">\r\n                  <!-- <a routerLink=\"/app/add-picture/{{good.id}}\" placement=\"top\" [ngbTooltip]=\"'add picture'\" class=\"btn btn-primary btn-sm\" ><i class=\"fa fa-upload\"></i></a>  -->\r\n                  <a routerLink=\"/app/goods/edit/{{good.id}}\" [hidden]=\"processing\"\r\n                     class=\"btn btn-secondary btn-sm text-white px-2\"><i\r\n                    class=\"fa fa-pencil text-white\"></i></a>\r\n                  <a (click)=\"deleteGood(good)\" [hidden]=\"processing\"\r\n                     class=\"btn btn-danger btn-sm text-center text-white px-2\"> <i\r\n                    class=\"fa fa-trash text-white\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-block\" style=\"overflow: hidden; padding-top: 0; margin-top: 0\">\r\n                <div class=\"media\">\r\n                  <div class=\"media-body\" style=\"margin-top: -15px; padding-bottom: 10px\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-4 text-gray p-0\">Category:</div>\r\n                      <div class=\"col-8  p-0 pl-1\">{{good.category?.name}}</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-4 text-gray p-0\">Short Description:</div>\r\n                      <div class=\"col-8 p-0 pl-1\">{{good.short_description}}</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-4 text-gray p-0\">Approval status:</div>\r\n                      <div class=\"col-8 p-0 pl-1\">{{(good.approval_status ? 'Approved' :\r\n                          'Pending')}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-4 text-gray p-0\">Created By:</div>\r\n                      <div class=\"col-8 p-0 pl-1\">\r\n                        {{(good.creator ? (good.creator.username ?\r\n                          good.creator.username :\r\n                          good.creator.username) : '')}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"text-center text-danger\" [innerHTML]=\"errorMessage\"></div>\r\n  </div>\r\n</div>\r\n<br>\r\n\r\n<div class=\"col-md-12 text-center text-success pb-5\" *ngIf=\"last_page > 1 || 1\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"row text-center\">\r\n      <div style=\"display: inline-block; width: 470px;\">\r\n        <div class=\"input-group\">\r\n          <button *ngIf=\"hasSomeItemsChecked\" [hidden]=\"processing\" (click)=\"deleteSelectedGoods()\"\r\n                  class=\"btn btn-danger text-center\">\r\n            <i class=\"fa fa-trash\"></i> Delete Selected\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger mr-2\" tabindex=\"-1\"\r\n                  (click)=\"searchGoods(prev_page_url, '')\"\r\n                  [disabled]=\"prev_page_url === null\"><i\r\n            class=\"fa fa-chevron-left \"></i> &nbsp;Previous\r\n          </button>\r\n          <span class=\"btn\">Page {{current_page}} of {{last_page}}</span>\r\n          <select #perpage id=\"per-page-select\" (change)=\"submitSearch(perpage.value)\" class=\"form-control mr-2\">\r\n            <option value=\"10\">Per Page</option>\r\n            <option value=\"15\">15</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n          </select>\r\n          <button type=\"button\" [disabled]=\"next_page_url === null\" class=\"btn btn-success\"\r\n                  (click)=\"searchGoods(next_page_url, '')\">Next&nbsp;\r\n            <i class=\"fa fa-chevron-right \"></i> &nbsp;&nbsp;\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/good/create-goods/create-goods.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/good/create-goods/create-goods.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step .step-content {\n  background: #b9b9b9;\n  height: 40px;\n  font-size: 1.5rem;\n}\n.step .step-content .step-name {\n  font-size: 14px;\n}\n.step .step-content.confirmed {\n  background-color: #4BAE4F !important;\n}\n.confirmed-content .fa-check {\n  font-size: 120px;\n}\n.confirmed-content .fa-print {\n  font-size: 24px;\n}\n.m-img-upload-btn {\n  position: absolute;\n  padding: 0;\n  width: calc(100% - 30px);\n  height: 38px;\n  opacity: 0;\n}\n.images-container {\n  width: 100%;\n  top: 15px;\n  border: 2px dashed #ccc;\n  background: #f1f1f1;\n  min-height: 293px;\n  padding: 10px;\n  display: block;\n}\n.images-container .m-image-wrapper {\n  position: relative;\n  display: inline-block;\n  margin: 10px;\n  width: 120px;\n  height: 120px;\n}\n.images-container .m-image-wrapper .m-delete-img {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  border: 2px solid #fff;\n  color: #fff;\n  padding: 3px 5px;\n  border-radius: 50%;\n  visibility: hidden;\n  cursor: pointer;\n}\n.images-container .m-image-wrapper:hover .m-delete-img {\n  visibility: visible;\n}\n.images-container .m-image-wrapper img {\n  width: 120px;\n  height: 120px;\n}\n.image-wrapper {\n  position: relative;\n}\n.image-wrapper .delete-img {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  border: 2px solid #fff;\n  color: #fff;\n  padding: 3px 5px;\n  border-radius: 50%;\n  visibility: hidden;\n  cursor: pointer;\n}\n.image-wrapper:hover .delete-img {\n  visibility: visible;\n}\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  width: 100%;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  padding: 12px 16px;\n  z-index: 1;\n  cursor: pointer;\n}\n.dropdown-content .icon-check {\n  display: none;\n}\n.dropdown-content .icon-check.selected {\n  display: inline-block;\n}\n.selected-good-container {\n  box-shadow: 0px 8px 16px 0px rgba(249, 249, 249, 0.2);\n  padding: 12px 16px;\n  cursor: pointer;\n  background-color: #f9f9f9;\n  margin-bottom: 20px;\n}\n.close-button {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.m-dropdown {\n  min-height: 90px;\n}\n.m-dropdown-content:hover {\n  background-color: #1a8b7f;\n  color: #fff;\n}\n.m-dropdown:hover .dropdown-content {\n  display: block;\n}\n.inner-addon .fa {\n  position: absolute;\n  padding: 10px;\n  cursor: pointer;\n}\n.inner-addon svg {\n  position: absolute;\n  cursor: pointer;\n}\nsvg path,\nsvg rect {\n  fill: #0DB28B;\n}\n.right-addon svg {\n  right: 10px;\n  top: 30px;\n}\n.right-addon .fa {\n  right: 15px;\n}\n.right-addon input {\n  padding-right: 30px;\n}\n.inner-dynamic-container {\n  padding: 10px;\n  background: #ededed;\n}\n.inner-dynamic-container .btn {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.inner-dynamic-container .fa {\n  font-size: 17px;\n}\n.inner-dynamic-container .input-group {\n  margin-bottom: 10px;\n}\n.inner-dynamic-container .input-group:last-child {\n  margin-bottom: 0;\n}\n.font-20 {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZC9jcmVhdGUtZ29vZHMvQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcSWxvciB0ZWNobm9sb2dpZXMgbHRkXFxpbG9yLXBjLXdlYi9zcmNcXGFwcFxccGFnZXNcXGdvb2RcXGNyZWF0ZS1nb29kc1xcY3JlYXRlLWdvb2RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9nb29kL2NyZWF0ZS1nb29kcy9jcmVhdGUtZ29vZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FKO0FEQ0k7RUFDRSxlQUFBO0FDQ047QURDSTtFQUNFLG9DQUFBO0FDQ047QURLRTtFQUNFLGdCQUFBO0FDRko7QURJRTtFQUNFLGVBQUE7QUNGSjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0hGO0FES0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDRkY7QURHRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNESjtBREVJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBTjtBREVJO0VBQ0UsbUJBQUE7QUNBTjtBREVJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBTjtBREtBO0VBQ0Usa0JBQUE7QUNGRjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNESjtBREdFO0VBQ0UsbUJBQUE7QUNESjtBREtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRkY7QURJRTtFQUNFLGFBQUE7QUNGSjtBRElFO0VBQ0UscUJBQUE7QUNGSjtBRE1BO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNIRjtBRE1BO0VBQ0UsZ0JBQUE7QUNIRjtBRE1BO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDSEY7QURNQTtFQUNFLGNBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0hGO0FES0E7RUFDRSxrQkFBQTtFQUVBLGVBQUE7QUNIRjtBREtBOztFQUVFLGFBQUE7QUNGRjtBRE1BO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUNIRjtBRE1BO0VBQ0UsV0FBQTtBQ0hGO0FES0E7RUFDRSxtQkFBQTtBQ0ZGO0FES0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNGRjtBRElFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDRko7QURLRTtFQUNFLGVBQUE7QUNISjtBRE1FO0VBQ0UsbUJBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNMSjtBRFNBO0VBQ0UsZUFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ29vZC9jcmVhdGUtZ29vZHMvY3JlYXRlLWdvb2RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXB7XHJcbiAgLnN0ZXAtY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6ICNiOWI5Yjk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIC5zdGVwLW5hbWV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgICYuY29uZmlybWVke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEJBRTRGICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29uZmlybWVkLWNvbnRlbnR7XHJcbiAgLmZhLWNoZWNre1xyXG4gICAgZm9udC1zaXplOiAxMjBweDtcclxuICB9XHJcbiAgLmZhLXByaW50e1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm0taW1nLXVwbG9hZC1idG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIGhlaWdodDogMzhweDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5pbWFnZXMtY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMTVweDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgbWluLWhlaWdodDogMjkzcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAubS1pbWFnZS13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIC5tLWRlbGV0ZS1pbWd7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICY6aG92ZXIgLm0tZGVsZXRlLWltZ3tcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5kZWxldGUtaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICY6aG92ZXIgLmRlbGV0ZS1pbWd7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAuaWNvbi1jaGVjayB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaWNvbi1jaGVjay5zZWxlY3RlZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0ZWQtZ29vZC1jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjIpO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ubS1kcm9wZG93biB7XHJcbiAgbWluLWhlaWdodDogOTBweDtcclxufVxyXG5cclxuLm0tZHJvcGRvd24tY29udGVudDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhOGI3ZjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm0tZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW5uZXItYWRkb24gLmZhe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5uZXItYWRkb24gc3Zne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvL3BhZGRpbmc6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuc3ZnIHBhdGgsXHJcbnN2ZyByZWN0IHtcclxuICBmaWxsOiAjMERCMjhCO1xyXG59XHJcblxyXG5cclxuLnJpZ2h0LWFkZG9uIHN2ZyB7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtYWRkb24gLmZhIHtcclxuICByaWdodDogMTVweDtcclxufVxyXG4ucmlnaHQtYWRkb24gaW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5pbm5lci1keW5hbWljLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xyXG5cclxuICAuYnRuIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuZmEge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtZ3JvdXA6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZvbnQtMjAge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iLCIuc3RlcCAuc3RlcC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2I5YjliOTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5zdGVwIC5zdGVwLWNvbnRlbnQgLnN0ZXAtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zdGVwIC5zdGVwLWNvbnRlbnQuY29uZmlybWVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCQUU0RiAhaW1wb3J0YW50O1xufVxuXG4uY29uZmlybWVkLWNvbnRlbnQgLmZhLWNoZWNrIHtcbiAgZm9udC1zaXplOiAxMjBweDtcbn1cbi5jb25maXJtZWQtY29udGVudCAuZmEtcHJpbnQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5tLWltZy11cGxvYWQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGhlaWdodDogMzhweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmltYWdlcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAxNXB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgbWluLWhlaWdodDogMjkzcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmltYWdlcy1jb250YWluZXIgLm0taW1hZ2Utd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cbi5pbWFnZXMtY29udGFpbmVyIC5tLWltYWdlLXdyYXBwZXIgLm0tZGVsZXRlLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbWFnZXMtY29udGFpbmVyIC5tLWltYWdlLXdyYXBwZXI6aG92ZXIgLm0tZGVsZXRlLWltZyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uaW1hZ2VzLWNvbnRhaW5lciAubS1pbWFnZS13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLmltYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW1hZ2Utd3JhcHBlciAuZGVsZXRlLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbWFnZS13cmFwcGVyOmhvdmVyIC5kZWxldGUtaW1nIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHJvcGRvd24tY29udGVudCAuaWNvbi1jaGVjayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHJvcGRvd24tY29udGVudCAuaWNvbi1jaGVjay5zZWxlY3RlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlbGVjdGVkLWdvb2QtY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuMik7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNXB4O1xufVxuXG4ubS1kcm9wZG93biB7XG4gIG1pbi1oZWlnaHQ6IDkwcHg7XG59XG5cbi5tLWRyb3Bkb3duLWNvbnRlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE4YjdmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm0tZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlubmVyLWFkZG9uIC5mYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5uZXItYWRkb24gc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnN2ZyBwYXRoLFxuc3ZnIHJlY3Qge1xuICBmaWxsOiAjMERCMjhCO1xufVxuXG4ucmlnaHQtYWRkb24gc3ZnIHtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMzBweDtcbn1cblxuLnJpZ2h0LWFkZG9uIC5mYSB7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG4ucmlnaHQtYWRkb24gaW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4uaW5uZXItZHluYW1pYy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuLmlubmVyLWR5bmFtaWMtY29udGFpbmVyIC5idG4ge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmZhIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLmlubmVyLWR5bmFtaWMtY29udGFpbmVyIC5pbnB1dC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmlucHV0LWdyb3VwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZm9udC0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/good/create-goods/create-goods.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/good/create-goods/create-goods.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGoodsComponent", function() { return CreateGoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_goods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/goods.service */ "./src/app/services/goods.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









var CreateGoodsComponent = /** @class */ (function () {
    function CreateGoodsComponent(formBuilder, router, route, goodsService, changeDetectorRef, elem, http, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.goodsService = goodsService;
        this.changeDetectorRef = changeDetectorRef;
        this.elem = elem;
        this.http = http;
        this.authService = authService;
        this.savingNewGoods = false;
        this.categories = [];
        this.properties = [];
        this.propertyVal = '';
    }
    CreateGoodsComponent.prototype.ngOnInit = function () {
        this.timer = null;
        this.saving = false;
        this.buildForm();
        this.getCategories();
    };
    CreateGoodsComponent.prototype.buildForm = function () {
        this.newForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            category_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            short_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    };
    CreateGoodsComponent.prototype.prepareSave = function () {
        var input = this.newForm.value;
        input.properties = JSON.stringify({ data: this.properties });
        return input;
    };
    CreateGoodsComponent.prototype.getCategories = function () {
        var _this = this;
        this.goodsService.getGoodsCategory().subscribe(function (categories) {
            _this.categories = categories;
        }, function (err) {
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].handleError(err, _this.router, true);
        });
    };
    CreateGoodsComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.prepareSave();
        this.saving = true;
        this.errorMessage = '';
        this.goodsService.addNewGood(formModel).subscribe(function (res) {
            _this.newForm.reset();
            _this.properties = [];
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Successful!', res.message, 'success');
            _this.saving = false;
        }, function (error) {
            _app_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].handleError(error, _this.router, true);
            _this.saving = false;
        });
    };
    CreateGoodsComponent.prototype.addNewProperty = function () {
        this.properties.push({ name: '', type: '' });
    };
    CreateGoodsComponent.prototype.removeProperty = function (property) {
        this.properties.splice(this.properties.indexOf(property), 1);
    };
    CreateGoodsComponent.prototype.showProperties = function (cCategory) {
        var list = [];
        if (cCategory) {
            this.categories.forEach(function (category) {
                if (category.id.toString() === cCategory.toString()) {
                    category.properties_template.forEach(function (t) {
                        list.push(t.name);
                    });
                }
            });
        }
        if (list.length === 0) {
            this.propertyVal = '';
        }
        else {
            this.propertyVal = '<small class="mt-2">Properties: <strong>' + list.join(', ') + '</strong></small>';
        }
    };
    CreateGoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-goods',
            template: __webpack_require__(/*! raw-loader!./create-goods.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/good/create-goods/create-goods.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./create-goods.component.scss */ "./src/app/pages/good/create-goods/create-goods.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_goods_service__WEBPACK_IMPORTED_MODULE_4__["GoodsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], CreateGoodsComponent);
    return CreateGoodsComponent;
}());



/***/ }),

/***/ "./src/app/pages/good/edit-goods/edit-goods.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/good/edit-goods/edit-goods.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-info {\n  background: #0DB28B;\n}\n.profile-info h3 {\n  color: white;\n  text-align: center;\n  margin-top: 20px;\n}\n.profile-info .card {\n  margin-top: 20px;\n  height: 80%;\n}\n.profile-info .card .media .media-body h6 {\n  font-size: 16px;\n}\n.profile-info .action-box {\n  border-radius: 3px;\n  border: 2px dashed #ECEEEF;\n  padding: 10px;\n  align-items: center;\n}\n.profile-info .action-box button {\n  cursor: pointer;\n}\n.profile-info .action-box h3 {\n  color: #333333;\n  text-align: left;\n}\n.profile-info .form-holder {\n  background: white !important;\n}\n.submit-btn {\n  padding: 15px 20px;\n  background: #0DB28B;\n  color: white;\n  font-weight: bolder;\n  min-width: 200px !important;\n}\n.asterisk {\n  font-size: 12px;\n  color: red;\n}\n.inner-dynamic-container {\n  padding: 10px;\n  background: #ededed;\n}\n.inner-dynamic-container .btn {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.inner-dynamic-container .fa {\n  font-size: 17px;\n}\n.inner-dynamic-container .input-group {\n  margin-bottom: 10px;\n}\n.inner-dynamic-container .input-group:last-child {\n  margin-bottom: 0;\n}\n.font-20 {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZC9lZGl0LWdvb2RzL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFxnb29kXFxlZGl0LWdvb2RzXFxlZGl0LWdvb2RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9nb29kL2VkaXQtZ29vZHMvZWRpdC1nb29kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER007RUFDRSxlQUFBO0FDRFI7QURNRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE1JO0VBQ0UsZUFBQTtBQ0pOO0FET0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNMTjtBRFNFO0VBQ0UsNEJBQUE7QUNQSjtBRFdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FDUkY7QURXQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDUkY7QURXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1JGO0FEVUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdFO0VBQ0UsZUFBQTtBQ1RKO0FEWUU7RUFDRSxtQkFBQTtBQ1ZKO0FEYUU7RUFDRSxnQkFBQTtBQ1hKO0FEZUE7RUFDRSxlQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nb29kL2VkaXQtZ29vZHMvZWRpdC1nb29kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWluZm8ge1xyXG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XHJcblxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcblxyXG4gICAgLm1lZGlhIHtcclxuICAgICAgLm1lZGlhLWJvZHkgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1ib3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNFQ0VFRUY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0taG9sZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWluLXdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXN0ZXJpc2sge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5uZXItZHluYW1pYy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuXHJcbiAgLmJ0biB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5mb250LTIwIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIiwiLnByb2ZpbGUtaW5mbyB7XG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XG59XG4ucHJvZmlsZS1pbmZvIGgzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucHJvZmlsZS1pbmZvIC5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA4MCU7XG59XG4ucHJvZmlsZS1pbmZvIC5jYXJkIC5tZWRpYSAubWVkaWEtYm9keSBoNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wcm9maWxlLWluZm8gLmFjdGlvbi1ib3gge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjRUNFRUVGO1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2ZpbGUtaW5mbyAuYWN0aW9uLWJveCBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvZmlsZS1pbmZvIC5hY3Rpb24tYm94IGgzIHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucHJvZmlsZS1pbmZvIC5mb3JtLWhvbGRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1pbi13aWR0aDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLmFzdGVyaXNrIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5uZXItZHluYW1pYy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuLmlubmVyLWR5bmFtaWMtY29udGFpbmVyIC5idG4ge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmZhIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLmlubmVyLWR5bmFtaWMtY29udGFpbmVyIC5pbnB1dC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmlucHV0LWdyb3VwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZm9udC0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/good/edit-goods/edit-goods.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/good/edit-goods/edit-goods.component.ts ***!
  \***************************************************************/
/*! exports provided: EditGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGoodsComponent", function() { return EditGoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_goods_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/goods.service */ "./src/app/services/goods.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var EditGoodsComponent = /** @class */ (function () {
    function EditGoodsComponent(formBuilder, router, route, changeDetectorRef, elem, http, authService, goodsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.changeDetectorRef = changeDetectorRef;
        this.elem = elem;
        this.http = http;
        this.authService = authService;
        this.goodsService = goodsService;
        this.loading = false;
        this.updating = false;
        this.categories = [];
        this.good = null;
        this.properties = [];
    }
    EditGoodsComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.timer = null;
        this.saving = false;
        this.buildForm();
        this.getCategories();
        this.fetchDetail(id);
    };
    EditGoodsComponent.prototype.buildForm = function () {
        this.editForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            category_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            short_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    };
    EditGoodsComponent.prototype.fetchDetail = function (id) {
        var _this = this;
        this.loading = true;
        this.goodsService.getGoodsDetail(id).subscribe(function (good) {
            _this.good = good;
            _this.editForm.get('name').setValue(_this.good.name);
            _this.editForm.get('category_id').setValue(_this.good.category_id);
            _this.editForm.get('short_description').setValue(_this.good.short_description);
            _this.properties = [];
            if (_this.good.properties_template) {
                _this.good.properties_template.forEach(function (property) {
                    _this.properties.push({ name: property.name, type: property.values.join(',') });
                });
            }
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router);
        });
    };
    EditGoodsComponent.prototype.prepareSave = function () {
        var input = this.editForm.value;
        input.properties = JSON.stringify({ data: this.properties });
        return input;
    };
    EditGoodsComponent.prototype.getCategories = function () {
        var _this = this;
        this.goodsService.getGoodsCategory().subscribe(function (categories) {
            return _this.categories = categories;
        });
    };
    EditGoodsComponent.prototype.addNewProperty = function () {
        this.properties.push({ name: '', type: '' });
    };
    EditGoodsComponent.prototype.removeProperty = function (property) {
        this.properties.splice(this.properties.indexOf(property), 1);
    };
    EditGoodsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.good == null) {
            return;
        }
        var formModel = this.prepareSave();
        this.saving = true;
        this.errorMessage = '';
        this.goodsService.updateGoods(formModel, this.good.id).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Successful!', res.message, 'success');
            _this.saving = false;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router);
            _this.saving = false;
        });
    };
    EditGoodsComponent.prototype.onApprove = function () {
        var _this = this;
        if (this.good == null || this.good.approval_status) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Confirm delete',
            text: 'Do you want to approve this goods item?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Continue',
            showConfirmButton: true
        }).then(function (willDelete) {
            if (willDelete.value) {
                _this.updating = true;
                _this.errorMessage = '';
                _this.goodsService.approveGoods(_this.good.id).subscribe(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Successful!', res.message, 'success');
                    _this.good = res.data;
                    _this.updating = false;
                }, function (err) {
                    _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router);
                    _this.updating = false;
                });
            }
        });
    };
    EditGoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-goods',
            template: __webpack_require__(/*! raw-loader!./edit-goods.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/good/edit-goods/edit-goods.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./edit-goods.component.scss */ "./src/app/pages/good/edit-goods/edit-goods.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_goods_service__WEBPACK_IMPORTED_MODULE_5__["GoodsService"]])
    ], EditGoodsComponent);
    return EditGoodsComponent;
}());



/***/ }),

/***/ "./src/app/pages/good/good.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/good/good.module.ts ***!
  \*******************************************/
/*! exports provided: routes, GoodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodModule", function() { return GoodModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goods-list/goods-list.component */ "./src/app/pages/good/goods-list/goods-list.component.ts");
/* harmony import */ var _create_goods_create_goods_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-goods/create-goods.component */ "./src/app/pages/good/create-goods/create-goods.component.ts");
/* harmony import */ var _edit_goods_edit_goods_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-goods/edit-goods.component */ "./src/app/pages/good/edit-goods/edit-goods.component.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");











var routes = [
    { path: 'create', component: _create_goods_create_goods_component__WEBPACK_IMPORTED_MODULE_7__["CreateGoodsComponent"] },
    { path: 'edit/:id', component: _edit_goods_edit_goods_component__WEBPACK_IMPORTED_MODULE_8__["EditGoodsComponent"] },
    { path: '', redirectTo: '/app/goods/list', pathMatch: 'full' },
    { path: 'list', component: _goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_6__["GoodsListComponent"] },
];
var GoodModule = /** @class */ (function () {
    function GoodModule() {
    }
    GoodModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_6__["GoodsListComponent"], _create_goods_create_goods_component__WEBPACK_IMPORTED_MODULE_7__["CreateGoodsComponent"], _edit_goods_edit_goods_component__WEBPACK_IMPORTED_MODULE_8__["EditGoodsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_9__["CustomErrorModule"],
                _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__["LoaderModule"]
            ]
        })
    ], GoodModule);
    return GoodModule;
}());



/***/ }),

/***/ "./src/app/pages/good/goods-list/goods-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/good/goods-list/goods-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  border: 1px solid #ddd;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded border */\n  padding: 5px;\n  /* Some padding */\n  width: 100px;\n  /* Set a small width */\n}\n\n/* Add a hover effect (blue shadow) */\n\nimg:hover {\n  box-shadow: #0DB28B;\n}\n\n.search-icon {\n  background: #0DB28B;\n  color: white;\n}\n\n.fab {\n  background: #0DB28B;\n  position: absolute;\n  top: 20px;\n  right: 10px;\n  z-index: 99;\n  padding: 20px;\n}\n\n.table td.text {\n  max-width: 200px;\n}\n\n.table td.text span {\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.spinner {\n  visibility: hidden;\n  position: absolute;\n  margin-left: 50%;\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZC9nb29kcy1saXN0L0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFxnb29kXFxnb29kcy1saXN0XFxnb29kcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9nb29kL2dvb2RzLWxpc3QvZ29vZHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQXdCLGdCQUFBO0VBQ3hCLGtCQUFBO0VBQW9CLG1CQUFBO0VBQ3BCLFlBQUE7RUFBYyxpQkFBQTtFQUNkLFlBQUE7RUFBYyxzQkFBQTtBQ0toQjs7QURGQSxxQ0FBQTs7QUFDQTtFQUNFLG1CQUFBO0FDS0Y7O0FERkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNLRjs7QURGQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDS0Y7O0FERkE7RUFDRSxnQkFBQTtBQ0tGOztBREhFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDS0o7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nb29kL2dvb2RzLWxpc3QvZ29vZHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogR3JheSBib3JkZXIgKi9cclxuICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgYm9yZGVyICovXHJcbiAgcGFkZGluZzogNXB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICB3aWR0aDogMTAwcHg7IC8qIFNldCBhIHNtYWxsIHdpZHRoICovXHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCAoYmx1ZSBzaGFkb3cpICovXHJcbmltZzpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogIzBEQjI4QjtcclxufVxyXG5cclxuLnNlYXJjaC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhYiB7XHJcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0ZC50ZXh0IHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG5cclxuICBzcGFuIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogNTAlXHJcbn1cclxuIiwiaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgLyogR3JheSBib3JkZXIgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvKiBSb3VuZGVkIGJvcmRlciAqL1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIFNvbWUgcGFkZGluZyAqL1xuICB3aWR0aDogMTAwcHg7XG4gIC8qIFNldCBhIHNtYWxsIHdpZHRoICovXG59XG5cbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCAoYmx1ZSBzaGFkb3cpICovXG5pbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAjMERCMjhCO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYWIge1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGFibGUgdGQudGV4dCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG4udGFibGUgdGQudGV4dCBzcGFuIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zcGlubmVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/good/goods-list/goods-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/good/goods-list/goods-list.component.ts ***!
  \***************************************************************/
/*! exports provided: GoodsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsListComponent", function() { return GoodsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_goods_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/goods.service */ "./src/app/services/goods.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");










// declare var $: any;
var GoodsListComponent = /** @class */ (function () {
    function GoodsListComponent(formBuilder, goodsService, route, router, http, authService) {
        this.formBuilder = formBuilder;
        this.goodsService = goodsService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.displayType = 'list';
        this.goods = [];
        this.categories = [];
        this.processing = false;
    }
    GoodsListComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.loadCategories();
        this.submitSearch();
    };
    GoodsListComponent.prototype.submitSearch = function (perpage) {
        if (perpage === void 0) { perpage = 10; }
        var searchText = this.searchForm.get('searchField').value;
        var fromDate = this.searchForm.get('fromDate').value;
        var toDate = this.searchForm.get('toDate').value;
        var category = this.searchForm.get('category').value;
        var param = '';
        if (searchText) {
            param += 'search=' + searchText;
        }
        if (fromDate) {
            if (param) {
                param += '&';
            }
            param += 'from_date=' + this.getTextFromDate(fromDate);
        }
        if (toDate) {
            if (param) {
                param += '&';
            }
            param += 'to_date=' + this.getTextFromDate(fromDate);
        }
        if (category) {
            if (param) {
                param += '&';
            }
            param += 'category=' + category;
        }
        var perPage = perpage;
        if (perpage) {
            if (param) {
                param += '&';
            }
            param += 'per_page=' + perPage;
        }
        if (param) {
            param = '?' + param;
        }
        this.searchGoods('', param);
    };
    GoodsListComponent.prototype.searchGoods = function (url, params) {
        var _this = this;
        this.searching = true;
        this.errorMessage = '';
        this.goods = [];
        this.last_page = -1;
        this.goodsService.searchGoods(url, params).subscribe(function (data) {
            var arr = ((typeof data.data) !== 'undefined' && data.data.length > 0);
            if (arr) {
                data.data.forEach(function (d) { return d.selected = false; });
            }
            _this.goods = data.data;
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
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router);
            _this.searching = false;
        });
    };
    GoodsListComponent.prototype.buildForm = function () {
        this.searchForm = this.formBuilder.group({
            searchField: [''],
            fromDate: [''],
            toDate: [''],
            category: ['']
        });
    };
    GoodsListComponent.prototype.can = function (permission) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].can(permission);
    };
    Object.defineProperty(GoodsListComponent.prototype, "permissions", {
        get: function () {
            return _data__WEBPACK_IMPORTED_MODULE_9__["AppData"].permissions;
        },
        enumerable: true,
        configurable: true
    });
    GoodsListComponent.prototype.deleteGood = function (good) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Confirm delete',
            text: 'Do you want to delete ' + good.name + '?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(function (willDelete) {
            if (willDelete.value) {
                _this.goodsService.deleteGood(good.id).subscribe(function (response) {
                    _this.goods.splice(_this.goods.indexOf(good), 1);
                }, function (err) {
                    _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router);
                });
            }
        });
    };
    Object.defineProperty(GoodsListComponent.prototype, "hasSomeItemsChecked", {
        get: function () {
            return this.goods.filter(function (x) { return x.selected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    GoodsListComponent.prototype.checkAll = function (ev) {
        this.goods.forEach(function (x) { return x.selected = ev.target.checked; });
    };
    GoodsListComponent.prototype.isAllChecked = function () {
        return this.goods.every(function (_) { return _.selected; });
    };
    GoodsListComponent.prototype.toggle = function (type) {
        this.displayType = type;
    };
    GoodsListComponent.prototype.deleteSelectedGoods = function () {
        var _this = this;
        this.selectedGoods = this.goods.filter(function (_) { return _.selected; });
        if (this.selectedGoods == null || this.selectedGoods.length < 1) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Confirm delete',
            text: 'Do you want to delete the selected goods items (' + this.selectedGoods.length + ') ?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(function (willDelete) {
            var e_1, _a;
            if (willDelete.value) {
                var selectedItemIds = [];
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.selectedGoods), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        selectedItemIds.push(item.id);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.errorMessage = '';
                _this.processing = true;
                _this.goodsService.deleteGoods(selectedItemIds).subscribe(function (data) {
                    var e_2, _a;
                    try {
                        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.selectedGoods), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var item = _c.value;
                            _this.selectedGoods.splice(_this.selectedGoods.indexOf(item), 1);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    _this.processing = false;
                }, function (err) {
                    _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router);
                    _this.processing = false;
                });
            }
        });
    };
    GoodsListComponent.prototype.getTextFromDate = function (date) {
        if (typeof date === 'object') {
            return date.year + '-' + date.month + '-' + date.day;
        }
        return date.toString();
    };
    GoodsListComponent.prototype.loadCategories = function () {
        var _this = this;
        this.goodsService.getGoodsCategory().subscribe(function (categories) {
            _this.categories = categories;
        }, function (err) {
            _this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, _this.router);
        });
    };
    GoodsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goods-list',
            template: __webpack_require__(/*! raw-loader!./goods-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/good/goods-list/goods-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./goods-list.component.scss */ "./src/app/pages/good/goods-list/goods-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _services_goods_service__WEBPACK_IMPORTED_MODULE_8__["GoodsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], GoodsListComponent);
    return GoodsListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-good-good-module-es5.js.map