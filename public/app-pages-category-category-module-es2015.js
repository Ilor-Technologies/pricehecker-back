(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-category-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/category/categories-list/categories-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/category/categories-list/categories-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <form class=\"form-group\" [formGroup]=\"searchForm\" (submit)=\"submitSearch()\">\r\n                <div class=\"input-group box-shadow\">\r\n                    <a routerLink=\"/app/goods-categories/create\"\r\n                            class=\"btn mr-3 btn-success\"><i\r\n                            class=\"fa fa-plus\"></i> &nbsp;Create Category\r\n                    </a>\r\n                    <!--<div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\"><i-->\r\n                    <!--class=\"fa fa-search\"></i></div>-->\r\n                    <input #filterField formControlName=\"searchField\" type=\"text\" placeholder=\"Filter goods category...\"\r\n                           class=\"form-control border-0\">\r\n\r\n                    <button type=\"submit\" class=\"btn btn-success\" title=\"Click to search\">\r\n                        <i class=\"fa fa-search\"></i> Search\r\n                    </button>\r\n\r\n                </div>\r\n            </form>\r\n            <div class=\"bg-white box-shadow\">\r\n                <h5 class=\"col-md-12 mb-2 mt-2 pt-3 pb-2\">Goods Category List</h5>\r\n                <div class=\"table-responsive bg-white box-shadow\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"text-truncate\">\r\n                                <input type=\"checkbox\" id=\"all\" class=\"styled-checkbox\" (click)=\"toggleAll($event.target.checked)\">\r\n                                <label class=\"cp\" for=\"all\"></label>\r\n                            </th>\r\n                            <th class=\"text-truncate\">Name</th>\r\n                            <th class=\"text-truncate\">Description</th>\r\n                            <!--<th class=\"text-truncate\">Meta Keywords</th>-->\r\n                            <!--<th class=\"text-truncate\">Meta description</th>-->\r\n                            <th class=\"text-truncate\">Parent</th>\r\n                            <!--<th class=\"text-truncate\">Created By</th>-->\r\n                            <th class=\"text-truncate\">Updated By</th>\r\n                            <!--<th class=\"text-truncate\">Created At</th>-->\r\n                            <th class=\"text-truncate\">Last Modified</th>\r\n                            <th class=\"text-truncate\">Action</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let item of data\">\r\n                            <td><input class=\"select-box styled-checkbox\" [id]=\"'cat_' + item.id\" (click)=\"toggleSelect($event.target, item)\"\r\n                                       type=\"checkbox\"><label [for]=\"'cat_' + item.id\" class=\"cp\"></label></td>\r\n                            <td>{{item.name}}</td>\r\n                            <td>{{item.description}}</td>\r\n                            <!--<td>{{item.meta_keyword}}</td>-->\r\n                            <!--<td>{{item.meta_description}}</td>-->\r\n                            <td>{{item.parent ? item.parent.name : ''}}</td>\r\n                            <td>\r\n                                <a *ngIf=\"item.updater\" routerLink=\"/app/users/profile/{{item.updater.username}}\">{{item.updater.username}}</a>\r\n                            </td>\r\n                            <td>{{item.time_updated}}</td>\r\n                            <td>\r\n                                <div class=\"btn-group\" role=\"group\">\r\n                                    <a routerLink=\"/app/goods-categories/edit/{{item.id}}\" class=\"btn btn-secondary btn-success btn-sm\"><i\r\n                                            class=\"fa fa-pencil\"></i> Edit</a>\r\n                                    <button (click)='showDeleteSingleModal(item.id)'\r\n                                            class=\"btn btn-secondary btn-danger btn-sm\"><i class=\"fa fa-trash\"></i>\r\n                                        Delete\r\n                                    </button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"(data == null || data.length < 1) && !searching && !errorMessage\">\r\n                            <td colspan=\"11\" class=\"text-center\">Sorry, no result to show...</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"errorMessage\">\r\n                            <td colspan=\"11\" class=\"text-center\" [innerHTML]=\"errorMessage\"></td>\r\n                        </tr>\r\n                        <tr *ngIf=\"searching\">\r\n                            <td colspan=\"11\" class=\"text-center\">\r\n                                <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                                     enable-background=\"new 0 0 40 40\" height=\"40px\" id=\"loader-1\" version=\"1.1\"\r\n                                     viewBox=\"0 0 40 40\" width=\"40px\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                     y=\"0px\">\r\n  <path d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n        fill=\"#000\" opacity=\"0.2\"></path>\r\n                                    <path d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\" fill=\"#000\" transform=\"rotate(0.00000178639 21.8896 21.8896)\">\r\n    <animateTransform attributeName=\"transform\" attributeType=\"xml\" dur=\"0.5s\" from=\"0 20 20\" repeatCount=\"indefinite\"\r\n                      to=\"360 20 20\" type=\"rotate\"></animateTransform>\r\n    </path>\r\n  </svg>\r\n                                <br>Loading, please wait...\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"col-md-12 py-4\"*ngIf=\"last_page > 1 || 1\">\r\n                    <div class=\"pl-3\">\r\n                        <div class=\"row text-center\">\r\n                            <div style=\"display: inline-block; width: 470px;\">\r\n                                <div class=\"input-group\">\r\n                                    <button *ngIf=\"(dataSelection.length) > 1\" (click)=\"handleDelete()\"\r\n                                            class=\"btn btn-danger mr-2\"><i class=\"fa fa-trash\"></i> Delete Selection\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-danger mr-2\" tabindex=\"-1\"\r\n                                            (click)=\"searchGoodsCategory(prev_page_url, '')\"\r\n                                            [disabled]=\"prev_page_url === null\"><i\r\n                                            class=\"fa fa-chevron-left \"></i> &nbsp;Previous\r\n                                    </button>\r\n                                    <span class=\"btn\">{{totalItem}} Result &nbsp;|&nbsp; Page {{current_page}}\r\n                                        of {{last_page}}</span>\r\n                                    <select id=\"per-page-select\" (change)=\"submitSearch()\" class=\"form-control mr-2\"\r\n                                            style=\"width: 200px;\">\r\n                                        <option value=\"10\">Per Page</option>\r\n                                        <option value=\"15\">15</option>\r\n                                        <option value=\"25\">25</option>\r\n                                        <option value=\"50\">50</option>\r\n                                        <option value=\"100\">100</option>\r\n                                    </select>\r\n                                    <button type=\"button\" [disabled]=\"next_page_url === null\" class=\"btn btn-success\"\r\n                                            (click)=\"searchGoodsCategory(next_page_url, '')\">Next&nbsp;\r\n                                        <i class=\"fa fa-chevron-right \"></i> &nbsp;&nbsp;\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/category/create-category/create-category.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/category/create-category/create-category.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-6  offset-lg-3 form-holder\">\r\n        <div class=\"card box-shadow border-0\">\r\n            <div class=\"card-block pt-3\">\r\n                <h4>Add New Goods Category</h4>\r\n                <hr>\r\n                <form>\r\n                    <form class=\"form\" [formGroup]=\"form\" (submit)=\"onSubmit(form)\">\r\n                        <div class=\"form-group\">\r\n                            <label>Category name</label>\r\n                            <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"input-1\" placeholder=\"\"\r\n                                   required>\r\n                            <div class=\"custom-alert\"\r\n                                 *ngIf=\"!form.get('name').valid && form.get('name').touched\">\r\n                                Category Name is required\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\" *ngIf=\"(form.get('name').value || '').toString().trim() !== ''\">\r\n                            <label>Parent Category</label>\r\n                            <select formControlName=\"parent_id\" class=\"form-control\" id=\"input-5\">\r\n                                <option value=\"\">Select a category</option>\r\n                                <option *ngFor=\"let category of categories\" value=\"{{category.id}}\"\r\n                                        title=\"{{category.description}}\">{{category.name}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Category description</label>\r\n                            <textarea class=\"form-control\" formControlName=\"description\" required id=\"input-2\"\r\n                                      placeholder=\"\"></textarea>\r\n                            <div class=\"custom-alert\"\r\n                                 *ngIf=\"!form.get('description').valid && form.get('description').touched\">\r\n                                Category description is required\r\n                            </div>\r\n                        </div>\r\n                        <!--<div class=\"form-group\">-->\r\n                            <!--<label>Meta keywords</label>-->\r\n                            <!--<input type=\"text\" formControlName=\"meta_keyword\" class=\"form-control\" id=\"input-3\"-->\r\n                                   <!--placeholder=\"\">-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"form-group\">-->\r\n                            <!--<label>Meta description</label>-->\r\n                            <!--<textarea type=\"text\" formControlName=\"meta_description\" class=\"form-control\" id=\"input-4\"-->\r\n                                      <!--placeholder=\"\"></textarea>-->\r\n                        <!--</div>-->\r\n                    </form>\r\n\r\n                    <form id=\"propertyForm\">\r\n                        <div style=\"margin-bottom: -20px\" class=\"mt-5\">\r\n                            <label class=\"font-20\">Properties</label>\r\n                            <button type=\"button\" (click)=\"addNewProperty()\" class=\"btn btn-sm btn-success pull-right\">\r\n                                Add Property\r\n                            </button>\r\n                        </div>\r\n                        <hr>\r\n                        <div *ngIf=\"properties !== null && properties.length > 0\"\r\n                             class=\"form-group inner-dynamic-container\">\r\n                            <div *ngFor=\"let prop of properties\" class=\"input-group box-shadow\">\r\n                                <input [(ngModel)]=\"prop.name\" placeholder=\"Property name\"\r\n                                       [ngModelOptions]=\"{standalone: true}\" value=\"{{prop.name}}\" class=\"form-control\">\r\n                                <input placeholder=\"Enter values here for drop-down\" [(ngModel)]=\"prop.value\"\r\n                                       [ngModelOptions]=\"{standalone: true}\"\r\n                                       class=\"form-control mx-2\" [value]=\"prop.type\">\r\n                                <button (click)=\"removeProperty(prop)\" type=\"submit\" class=\"btn btn-danger btn-sm px-3\">\r\n                                    <span class=\"fa fa-trash\"></span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"!(properties !== null && properties.length > 0)\"\r\n                             class=\"form-group text-center inner-dynamic-container\">\r\n                            No property added yet...\r\n                        </div>\r\n                    </form>\r\n                    <hr>\r\n                    <button (click)=\"onSubmit(form)\" type=\"submit\" [disabled]=\"!form.valid || loading\"\r\n                            class=\"btn btn-success btn-block submit-btn\">\r\n                        <span *ngIf=\"loading\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                             xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                             width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                             xml:space=\"preserve\">\r\n      <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                            <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\"\r\n                          dur=\"0.5s\" repeatCount=\"indefinite\"\r\n        />\r\n      </path>\r\n    </svg></span>\r\n                        {{loading ? '' : 'ADD NEW GOODS CATEGORY'}}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/category/edit-category/edit-category.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/category/edit-category/edit-category.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pageLoading\" class=\"full-height\">\r\n    <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n         enable-background=\"new 0 0 40 40\"\r\n         height=\"40px\" id=\"loader-1\" version=\"1.1\" viewBox=\"0 0 40 40\" width=\"40px\" x=\"0px\"\r\n         xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\r\n  <path d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n        fill=\"#000\" opacity=\"0.2\"></path>\r\n        <path d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\" fill=\"#000\" transform=\"rotate(0.00000178639 21.8896 21.8896)\">\r\n    <animateTransform attributeName=\"transform\" attributeType=\"xml\" dur=\"0.5s\" from=\"0 20 20\" repeatCount=\"indefinite\"\r\n                      to=\"360 20 20\" type=\"rotate\"></animateTransform>\r\n    </path>\r\n  </svg>\r\n</div>\r\n<div *ngIf=\"!pageLoading && categoryData\" class=\"row\">\r\n    <div class=\"col-lg-6  offset-lg-3 form-holder\">\r\n        <div class=\"card box-shadow border-0\">\r\n            <div class=\"card-block pt-3\">\r\n                <h4>Edit Goods Category Details</h4>\r\n                <hr>\r\n                <div>\r\n                    <form class=\"form\" [formGroup]=\"form\" (submit)=\"onSubmit(form)\">\r\n                        <div class=\"form-group\">\r\n                            <label>Category name</label>\r\n                            <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"input-1\" placeholder=\"\"\r\n                                   required>\r\n                            <div class=\"custom-alert\"\r\n                                 *ngIf=\"!form.get('name').valid && form.get('name').touched\">\r\n                                Category Name is required\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Parent Category</label>\r\n                            <select formControlName=\"parent_id\" class=\"form-control\" id=\"input-5\">\r\n                                <option></option>\r\n                                <option *ngFor=\"let category of data\" value=\"{{category.id}}\"\r\n                                        selected=\"{{categoryData.parent_id == category.id ? 'selected': ''}}\"\r\n                                        title=\"{{category.description}}\">{{category.name}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Category description</label>\r\n                            <textarea class=\"form-control\" formControlName=\"description\" required id=\"input-2\"\r\n                                      placeholder=\"\"></textarea>\r\n                            <div class=\"custom-alert\"\r\n                                 *ngIf=\"!form.get('description').valid && form.get('description').touched\">\r\n                                Category description is required\r\n                            </div>\r\n                        </div>\r\n                        <!--<div class=\"form-group\">-->\r\n                            <!--<label>Meta keywords</label>-->\r\n                            <!--<input type=\"text\" formControlName=\"meta_keyword\" class=\"form-control\" id=\"input-3\"-->\r\n                                   <!--placeholder=\"\" value=\"categoryData.meta_keyword\">-->\r\n                        <!--</div>-->\r\n                        <!--<div class=\"form-group\">-->\r\n                            <!--<label>Meta description</label>-->\r\n                            <!--<textarea type=\"text\" formControlName=\"meta_description\" class=\"form-control\" id=\"input-4\"-->\r\n                                      <!--placeholder=\"\"></textarea>-->\r\n                        <!--</div>-->\r\n                    </form>\r\n                    <form id=\"propertyForm\">\r\n                        <div style=\"margin-bottom: -20px\" class=\"mt-5\">\r\n                            <label class=\"font-20\">Properties</label>\r\n                            <button type=\"button\" (click)=\"addNewProperty()\" class=\"btn btn-sm btn-success pull-right\">\r\n                                Add Property\r\n                            </button>\r\n                        </div>\r\n                        <hr>\r\n                        <div *ngIf=\"properties !== null && properties.length > 0\"\r\n                             class=\"form-group inner-dynamic-container\">\r\n                            <div *ngFor=\"let prop of properties\" class=\"input-group box-shadow\">\r\n                                <input [(ngModel)]=\"prop.name\" placeholder=\"Property name\"\r\n                                       [ngModelOptions]=\"{standalone: true}\" value=\"{{prop.name}}\" class=\"form-control\">\r\n                                <input placeholder=\"Enter values here for drop-down\" [(ngModel)]=\"prop.type\"\r\n                                       [ngModelOptions]=\"{standalone: true}\"\r\n                                       class=\"form-control mx-2\" [value]=\"prop.type\">\r\n                                <button (click)=\"removeProperty(prop)\" type=\"submit\" class=\"btn btn-danger btn-sm px-3\">\r\n                                    <span class=\"fa fa-trash\"></span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"!(properties !== null && properties.length > 0)\"\r\n                             class=\"form-group text-center inner-dynamic-container\">\r\n                            No property added yet...\r\n                        </div>\r\n                    </form>\r\n                    <button [disabled]=\"loading || !form.valid\" type=\"button\" (click)=\"onSubmit(form)\"\r\n                            class=\"btn submit-btn btn-block mt-2 mb-3\">\r\n                      <app-small-loader *ngIf=\"loading\" [isWhite]=\"true\"></app-small-loader>\r\n                        {{loading ? '': 'UPDATE GOODS CATEGORY DETAILS'}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!pageLoading && !categoryData\" class=\"full-height\">\r\n    <div class=\"text-danger text-center\"\r\n         [innerHTML]=\"errorMessage || 'Sorry, unable to fetch the requested data.'\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/category/categories-list/categories-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/category/categories-list/categories-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: flex;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: rgba(0, 0, 0, 0.3);\n  /* Black w/ opacity */\n  align-items: center;\n}\n\n/* Modal Content */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 2px solid #888;\n  width: auto;\n  text-align: center;\n}\n\n/* The Close Button */\n\n.close {\n  color: #aaaaaa;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nth[ng2-st-checkbox-select-all] input {\n  display: none;\n}\n\n.btn.flat-edge {\n  border-radius: 0;\n  padding: 5px 15px;\n}\n\n.table {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcmllcy1saXN0L0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFxjYXRlZ29yeVxcY2F0ZWdvcmllcy1saXN0XFxjYXRlZ29yaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3JpZXMtbGlzdC9jYXRlZ29yaWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osa0JBQUE7RUFBb0Isd0JBQUE7RUFDcEIsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIsb0NBQUE7RUFBc0MscUJBQUE7RUFDdEMsbUJBQUE7QUNTRjs7QUROQSxrQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRE5BLHFCQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNTRjs7QUROQTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDU0Y7O0FETkE7RUFDRSxhQUFBO0FDU0Y7O0FETkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDU0Y7O0FETkE7RUFDRSxzQkFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcmllcy1saXN0L2NhdGVnb3JpZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XHJcbiAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiAjYWFhYWFhO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudGhbbmcyLXN0LWNoZWNrYm94LXNlbGVjdC1hbGxdIGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYnRuLmZsYXQtZWRnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xuICB6LWluZGV4OiAxO1xuICAvKiBTaXQgb24gdG9wICovXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBNb2RhbCBDb250ZW50ICovXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzg4ODtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50aFtuZzItc3QtY2hlY2tib3gtc2VsZWN0LWFsbF0gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnRuLmZsYXQtZWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/category/categories-list/categories-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/category/categories-list/categories-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function() { return CategoriesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_goods_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/goods-category.service */ "./src/app/services/goods-category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let CategoriesListComponent = class CategoriesListComponent {
    constructor(service, router, formBuilder) {
        this.service = service;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dataSelection = [];
        this.data = [];
        this.errorMessage = '';
        this.showDeleteModal = false;
        this.placeHolderMessage = 'Loading, please wait...';
        this.searching = false;
        this.categories = [];
    }
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            searchField: [''],
        });
        this.submitSearch();
    }
    submitSearch() {
        const searchText = this.searchForm.get('searchField').value;
        // const fromDate = this.searchForm.get('fromDate').value;
        // const toDate = this.searchForm.get('toDate').value;
        // const category = this.searchForm.get('category').value;
        let param = '';
        if (searchText) {
            param += 'search=' + searchText;
        }
        // if (fromDate) {
        //     if (param) {
        //         param += '&';
        //     }
        //     param += 'from_date=' + this.getTextFromDate(fromDate);
        // }
        //
        // if (toDate) {
        //     if (param) {
        //         param += '&';
        //     }
        //     param += 'to_date=' + this.getTextFromDate(fromDate);
        // }
        // if (category) {
        //     if (param) {
        //         param += '&';
        //     }
        //     param += 'category=' + category;
        // }
        const perPage = $('#per-page-select').val();
        if (parseInt(perPage, 10)) {
            if (param) {
                param += '&';
            }
            param += 'per_page=' + perPage;
        }
        if (param) {
            param = '?' + param;
        }
        this.searchGoodsCategory('', param);
    }
    searchGoodsCategory(url, params) {
        this.searching = true;
        this.data = [];
        this.last_page = -1;
        this.service.getAllGoodsCategory(url, params).subscribe((data) => {
            this.data = data.data;
            this.current_page = data.current_page;
            this.from = data.from;
            this.last_page = data.last_page;
            this.next_page_url = data.next_page_url;
            this.path = data.path;
            this.prev_page_url = data.prev_page_url;
            this.per_page = data.per_page;
            this.to = data.to;
            this.total = data.total;
            this.totalItem = this.data.length;
            this.searching = false;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, this.router);
            this.searching = false;
        });
    }
    handleDelete() {
        const text = 'Do you want to delete ' + (this.dataSelection.length === 1 ? 'the selected category' : 'the categories selected');
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: text,
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(willDelete => {
            if (willDelete.value) {
                this.doDelete();
            }
        });
    }
    showDeleteSingleModal(id) {
        // deselect all boxes
        this.toggleAll(false);
        this.dataSelection = [id];
        this.handleDelete();
    }
    doDelete() {
        this.placeHolderMessage = 'Request is being processed, please wait...';
        const parems = [];
        // if(this.currentSingleSelection )
        if (this.dataSelection.length === 1) {
            this.service.deleteCategory(this.dataSelection[0]).subscribe((data) => {
                if (data) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].succeeded('The category was deleted successfully!').then(response => {
                        this.submitSearch();
                    });
                }
            }, (err) => _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, this.router, true));
        }
        else if (this.dataSelection.length) {
            for (let x = 0; x < this.dataSelection.length; x++) {
                parems.push(this.dataSelection[x].id);
            }
            this.service.deleteCategories(parems).subscribe((data) => {
                if (data) {
                    _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].succeeded('The selected categories were deleted successfully!').then(response => {
                        this.submitSearch();
                    });
                }
            }, (err) => {
                _app_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].handleError(err, this.router, true);
            });
        }
    }
    toggleSelect(target, item) {
        if (target.checked) {
            if (this.dataSelection.indexOf(item.id) < 0) {
                this.dataSelection.push(item.id);
            }
        }
        else {
            this.dataSelection.splice(this.dataSelection.indexOf(item.id), 1);
        }
    }
    toggleAll(value) {
        const d = $('.select-box').prop('checked', !value);
        if (value) {
            this.dataSelection = [];
        }
        d.click();
    }
};
CategoriesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-list',
        template: __webpack_require__(/*! raw-loader!./categories-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/category/categories-list/categories-list.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./categories-list.component.scss */ "./src/app/pages/category/categories-list/categories-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_goods_category_service__WEBPACK_IMPORTED_MODULE_3__["GoodsCategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], CategoriesListComponent);



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: routes, CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-category/create-category.component */ "./src/app/pages/category/create-category/create-category.component.ts");
/* harmony import */ var _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories-list/categories-list.component */ "./src/app/pages/category/categories-list/categories-list.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/pages/category/edit-category/edit-category.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");











const routes = [
    { path: 'create', component: _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_3__["CreateCategoryComponent"] },
    { path: 'edit/:id', component: _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_5__["EditCategoryComponent"] },
    { path: '', redirectTo: '/app/goods-categories/list', pathMatch: 'full' },
    { path: 'list', component: _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesListComponent"] },
];
let CategoryModule = class CategoryModule {
};
CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_3__["CreateCategoryComponent"], _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesListComponent"], _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_5__["EditCategoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_10__["CustomErrorModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]
    })
], CategoryModule);



/***/ }),

/***/ "./src/app/pages/category/create-category/create-category.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/category/create-category/create-category.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-new {\n  padding-top: 10px;\n  color: #0DB28B;\n  font-weight: bolder;\n}\n.add-new:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.det-box {\n  padding-bottom: 10px;\n}\n.inner-dynamic-container {\n  padding: 10px;\n  background: #ededed;\n}\n.inner-dynamic-container .btn {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.inner-dynamic-container .fa {\n  font-size: 17px;\n}\n.inner-dynamic-container .input-group {\n  margin-bottom: 10px;\n}\n.inner-dynamic-container .input-group:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY3JlYXRlLWNhdGVnb3J5L0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFxjYXRlZ29yeVxcY3JlYXRlLWNhdGVnb3J5XFxjcmVhdGUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NyZWF0ZS1jYXRlZ29yeS9jcmVhdGUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUNDSjtBREdBO0VBQ0Usb0JBQUE7QUNBRjtBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDREY7QURHRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0FDRko7QURLRTtFQUNFLG1CQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jcmVhdGUtY2F0ZWdvcnkvY3JlYXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1uZXcge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiAjMERCMjhCO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZGV0LWJveCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uaW5uZXItZHluYW1pYy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuXHJcbiAgLmJ0biB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIiwiLmFkZC1uZXcge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgY29sb3I6ICMwREIyOEI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uYWRkLW5ldzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5kZXQtYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5pbm5lci1keW5hbWljLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmJ0biB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5pbm5lci1keW5hbWljLWNvbnRhaW5lciAuZmEge1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbm5lci1keW5hbWljLWNvbnRhaW5lciAuaW5wdXQtZ3JvdXA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/category/create-category/create-category.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/category/create-category/create-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function() { return CreateCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_goods_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/goods-category.service */ "./src/app/services/goods-category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_goods_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/goods.service */ "./src/app/services/goods.service.ts");








let CreateCategoryComponent = class CreateCategoryComponent {
    constructor(service, formBuilder, router, goodsService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.goodsService = goodsService;
        this.errorMessage = '';
        this.successMessage = '';
        this.data = [];
        this.categories = [];
        this.properties = [];
    }
    ngOnInit() {
        this.buildForm();
        this.loadCategories();
    }
    loadCategories() {
        this.goodsService.getGoodsCategory().subscribe((categories) => {
            this.categories = categories;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router);
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            meta_keyword: [''],
            meta_description: [''],
            parent_id: [''],
            details: this.formBuilder.array([])
        });
    }
    onSubmit({ value, valid }) {
        this.loading = true;
        this.errorMessage = '';
        this.successMessage = '';
        value.properties = JSON.stringify({ data: this.properties });
        //  console.log(value);
        this.service.addNew(value).subscribe((resp) => {
            this.loading = false;
            if (resp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Successful!', 'New goods category created successfully!', 'success');
                this.properties = [];
                this.form.reset();
            }
        }, err => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router, true);
            this.loading = false;
        });
    }
    addNewProperty() {
        this.properties.push({ name: '', type: '' });
    }
    removeProperty(property) {
        this.properties.splice(this.properties.indexOf(property), 1);
    }
};
CreateCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-category',
        template: __webpack_require__(/*! raw-loader!./create-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/category/create-category/create-category.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./create-category.component.scss */ "./src/app/pages/category/create-category/create-category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_goods_category_service__WEBPACK_IMPORTED_MODULE_5__["GoodsCategoryService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_goods_service__WEBPACK_IMPORTED_MODULE_7__["GoodsService"]])
], CreateCategoryComponent);



/***/ }),

/***/ "./src/app/pages/category/edit-category/edit-category.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/category/edit-category/edit-category.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner-dynamic-container {\n  padding: 10px;\n  background: #ededed;\n}\n.inner-dynamic-container .btn {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.inner-dynamic-container .fa {\n  font-size: 17px;\n}\n.inner-dynamic-container .input-group {\n  margin-bottom: 10px;\n}\n.inner-dynamic-container .input-group:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXFByb2plY3RzXFxJbG9yIHRlY2hub2xvZ2llcyBsdGRcXGlsb3ItcGMtd2ViL3NyY1xcYXBwXFxwYWdlc1xcY2F0ZWdvcnlcXGVkaXQtY2F0ZWdvcnlcXGVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0UsZUFBQTtBQ0FKO0FER0U7RUFDRSxtQkFBQTtBQ0RKO0FESUU7RUFDRSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS9lZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyLWR5bmFtaWMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcblxyXG4gIC5idG4ge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5mYSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1ncm91cDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5pbm5lci1keW5hbWljLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmJ0biB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5pbm5lci1keW5hbWljLWNvbnRhaW5lciAuZmEge1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbm5lci1keW5hbWljLWNvbnRhaW5lciAuaW5wdXQtZ3JvdXA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/category/edit-category/edit-category.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/category/edit-category/edit-category.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_goods_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/goods-category.service */ "./src/app/services/goods-category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");







let EditCategoryComponent = class EditCategoryComponent {
    constructor(service, formBuilder, router, route) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.errorMessage = '';
        this.successMessage = '';
        this.data = [];
        this.categoryData = null;
        this.properties = [];
        this.loading = false;
        this.pageLoading = false;
        this.currentId = this.route.snapshot.params.id;
    }
    ngOnInit() {
        this.buildForm();
        this.loadData();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            meta_keyword: [''],
            meta_description: [''],
            parent_id: ['']
        });
    }
    loadData() {
        this.pageLoading = true;
        this.service.getGoodsCategory(this.currentId).subscribe((data) => {
            this.pageLoading = false;
            if (!data) {
                return;
            }
            console.log(data);
            this.categoryData = data.category;
            this.data = data.others;
            this.form.patchValue({
                name: this.categoryData.name,
                description: this.categoryData.description,
                meta_description: this.categoryData.meta_description,
                meta_keyword: this.categoryData.meta_keyword,
                parent_id: this.categoryData.parent_id,
            });
            this.properties = [];
            if (this.categoryData.properties_template) {
                this.categoryData.properties_template.forEach(property => {
                    this.properties.push({ name: property.name, type: property.values.join(',') });
                });
            }
        }, err => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, this.router);
            this.pageLoading = false;
        });
    }
    onSubmit({ value, valid }) {
        this.loading = true;
        this.errorMessage = '';
        this.successMessage = '';
        value.properties = JSON.stringify({ data: this.properties });
        this.service.updateCategory(this.currentId, value).subscribe((resp) => {
            if (resp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Updated!', 'Goods category updated successfully!', 'success');
                this.router.navigate(['/app/goods-categories']);
            }
            this.loading = false;
        }, err => {
            _app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].handleError(err, this.router, true);
            this.loading = false;
        });
    }
    addNewProperty() {
        this.properties.push({ name: '', type: '' });
    }
    removeProperty(property) {
        this.properties.splice(this.properties.indexOf(property), 1);
    }
};
EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-category',
        template: __webpack_require__(/*! raw-loader!./edit-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/category/edit-category/edit-category.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./edit-category.component.scss */ "./src/app/pages/category/edit-category/edit-category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_goods_category_service__WEBPACK_IMPORTED_MODULE_4__["GoodsCategoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], EditCategoryComponent);



/***/ })

}]);
//# sourceMappingURL=app-pages-category-category-module-es2015.js.map