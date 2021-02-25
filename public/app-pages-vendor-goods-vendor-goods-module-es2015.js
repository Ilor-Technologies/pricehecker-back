(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-vendor-goods-vendor-goods-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor-goods/create-vendor-goods/create-vendor-goods.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor-goods/create-vendor-goods/create-vendor-goods.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-6  offset-lg-3 form-holder\">\r\n        <div class=\"card box-shadow border-0\">\r\n            <div *ngIf=\"displayType == 'primary'\" class=\"card-block pt-3\">\r\n                <h3>Add New Product\r\n                    <button routerLink=\"/app/vendors/goods\" class=\"btn btn-success pull-right\"><i\r\n                            class=\"fa fa-arrow-left\"></i>\r\n                        Show List of Goods\r\n                    </button>\r\n                </h3>\r\n                <hr>\r\n                <form class=\"form\" [formGroup]=\"newForm\" (ngSubmit)=\"onSubmit(newForm)\">\r\n                    <div *ngIf=\"canAddVendorsGoods\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group dropdown m-dropdown\">\r\n                                    <label>Product Name<sup class=\"asterisk\">*</sup></label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <span *ngIf=\"searching\"><svg version=\"1.1\" id=\"loader-1\"\r\n                                             xmlns=\"http://www.w3.org/2000/svg\"\r\n                                             xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                                             width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\"\r\n                                             enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\r\n      <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                                            <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\"\r\n                          dur=\"0.5s\" repeatCount=\"indefinite\"/>\r\n      </path>\r\n                                            Searching...\r\n                                    </svg></span>\r\n                                        <input (keyup)=\"getSearchResult()\" (change)=\"getSearchResult()\"\r\n                                               placeholder=\"Enter Product Name\" type=\"text\"\r\n                                               class=\"form-control\" id=\"search-field\" formControlName=\"searchField\">\r\n                                        <div *ngIf=\"newForm.get('searchField').valid && (!allGoods || !allGoods.length)\"\r\n                                             class=\"py-2\">\r\n                                            <label>\r\n                                                Can find your product?\r\n                                                <a class=\"custom-active-link text-success\" (click)=\"changeDisplay('secondary')\">\r\n                                                    Click here</a> to create record.\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div id=\"dropdown-menu-container\" class=\"dropdown-content\">\r\n                                        <div class=\"drop-down-container\" *ngFor=\"let allGood of allGoods\"\r\n                                             [ngClass]=\"(selectedGood != null && selectedGood.id == allGood.id) ? 'selected': ''\"\r\n                                             (click)=\"selectionChanged(allGood)\">\r\n                                            <!--<span [ngClass]=\"(selectedAllGood != null && selectedAllGood.id == allGood.id) ? 'selected': ''\"-->\r\n                                            <!--class=\"fa fa-check icon-check\"></span>-->\r\n                                            <h5>{{allGood.name}} in <strong\r\n                                                    title=\"Category\">{{allGood.category.name}}</strong></h5>\r\n                                            <div>{{allGood.short_description}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"allGoods == null || allGoods.length == 0\" class=\"dropdown-content\">\r\n                                        <div>\r\n                                            <div>Enter part of name of products to search</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"selectedGood\" class=\"col-md-12\">\r\n                                <div class=\"col-md-12 selected-good-container\">\r\n                                    <label style=\"color: #1a8b7f;\">Selected Product</label>\r\n                                    <h5>{{selectedGood.name}} in\r\n                                        <strong title=\"Category\" class=\"text-success\">{{selectedGood.category.name}}</strong>\r\n                                    </h5>\r\n                                    <div>{{selectedGood.short_description}}</div>\r\n                                    <i class=\"fa fa-times close-button\" (click)=\"deselectSelectedGood()\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"selectedGood == null || !selectedGood\" class=\"col-md-12\">\r\n                                <div class=\"alert alert-warning\">No goods/product selected yet, enter name or secription\r\n                                    of the goods and select matching from list.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label *ngIf=\"!isVendor\">Select Vendor<sup class=\"asterisk\">*</sup></label>\r\n                                    <select class=\"form-control\" *ngIf=\"!isVendor\" formControlName=\"vendor_id\"\r\n                                            (change)=\"getWarehouse()\">\r\n                                        <option value=\"\" *ngIf=\"!isVendor\">Select Vendor</option>\r\n                                        <option *ngFor=\"let vendor of vendors\"\r\n                                                [value]=\"vendor.id\">\r\n                                            {{vendor.business_name}}\r\n                                        </option>\r\n                                    </select>\r\n\r\n                                    <input style=\"display: none\" readonly class=\"form-control\"\r\n                                           formControlName=\"all_good_id\">\r\n                                    <label *ngIf=\"loadingWarehouse\" class=\"text-info\">Loading warehouses...please wait</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Select Location<sup class=\"asterisk\">*</sup></label>\r\n                                    <select class=\"form-control\" formControlName=\"warehouse_id\">\r\n                                        <option selected>Select Location</option>\r\n                                        <option *ngFor=\"let warehouse of warehouses\"\r\n                                                [value]=\"warehouse.id\">\r\n                                            {{warehouse.name}}\r\n                                        </option>\r\n                                    </select>\r\n                                    <label *ngIf=\"isVendor && (!warehouses || warehouses.length == 0)\">\r\n                                        No warehouse added yet,\r\n                                        <a class=\"custom-active-link text-success\"\r\n                                           routerLink=\"/app/warehouses/create\">click here</a> to create warehouse.\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Price<sup class=\"asterisk\">*</sup></label>\r\n                                    <input type=\"number\" class=\"form-control\" formControlName=\"price\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!newForm.get('price').valid && newForm.get('price').touched\">\r\n                                        Price is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>SKU</label>\r\n                                    <input type=\"text\" class=\"form-control text-uppercase\" formControlName=\"sku\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"propertyForm\">\r\n                            <div *ngIf=\"properties && properties.length > 0\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\" *ngFor=\"let property of properties\">\r\n                                        <div class=\"form-group\" (onCreate)=\"addProperty(property)\">\r\n                                            <label class=\"text-capitalize\">{{property.name}}</label>\r\n                                            <select *ngIf=\"property.type == 'select'\" name=\"{{property.name}}\"\r\n                                                    [(ngModel)]=\"property.value\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                    class=\"form-control\">\r\n                                                <option *ngFor=\"let val of property.values\"\r\n                                                        [selected]=\"(property.value == val)\"\r\n                                                        [value]=\"val\">{{val}}</option>\r\n                                            </select>\r\n                                            <input *ngIf=\"property.type != 'select'\" type=\"text\"\r\n                                                   name=\"{{property.name}}\"\r\n                                                   [(ngModel)]=\"property.value\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                   class=\"form-control\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Full Description<sup class=\"asterisk\">*</sup></label>\r\n                                    <textarea class=\"form-control\" rows=\"7\"\r\n                                              formControlName=\"full_description\"></textarea>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!newForm.get('full_description').valid && newForm.get('full_description').touched\">\r\n                                        A Full Description of The Product is Required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"control-label col-md-12 p-0\">Good's Images</label>\r\n                                    <div>\r\n                                        <img *ngFor=\"let picture of pictures; let i = index;\" class=\"img-thumbnail img-preview mr-2 mb-2\" [src]=\"picture.path\">\r\n                                    </div>\r\n                                </div>\r\n                                <div><small class=\"text-danger\"><strong>Note:</strong> File to upload must not exceed 2 MB</small></div>\r\n                                <app-upload [id]=\"uploadId\" (uploadFinished)=\"uploadFinished($event)\" [fileType]=\"'image'\"></app-upload>\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <button type=\"button\" (click)=\"triggerUpload(uploadId)\" class=\"btn btn-primary\">{{pictures.length ? 'Upload More Images' : 'Upload Primary Image'}}</button>\r\n                        <button [disabled]=\"saving\" class=\"btn pull-right submit-btn\" style=\"min-width: 200px !important;\">\r\n                            <span *ngIf=\"saving\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                                 width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                                 xml:space=\"preserve\">\r\n             <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n               s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n               c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                                <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n               C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n               <animateTransform attributeType=\"xml\"\r\n                                 attributeName=\"transform\"\r\n                                 type=\"rotate\"\r\n                                 from=\"0 20 20\"\r\n                                 to=\"360 20 20\"\r\n                                 dur=\"0.5s\"\r\n                                 repeatCount=\"indefinite\"/>\r\n               </path>\r\n             </svg></span>\r\n                            {{saving ? '' : 'Save Good\\'s Record'}}\r\n                        </button>\r\n                        <!--<button type=\"button\" data-target=\"#batchModal\"-->\r\n                        <!--data-toggle=\"modal\"-->\r\n                        <!--class=\"btn btn-success pull-right submit-btn\">Add Goods in Batch-->\r\n                        <!--</button>-->\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div *ngIf=\"displayType == 'secondary'\" class=\"card-block pt-3\">\r\n                <h3>Create Goods Record\r\n                    <button (click)=\"changeDisplay('primary')\" class=\"btn btn-success pull-right\"><i\r\n                            class=\"fa fa-arrow-left\"></i>\r\n                        Back to enlist product\r\n                    </button>\r\n                </h3>\r\n                <hr>\r\n                <form [formGroup]=\"newGoodsForm\" (submit)=\"createNewGoodRecord()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"x1\">Product Name</label>\r\n                                <input id=\"x1\" class=\"form-control\" formControlName=\"name\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Goods Category</label>\r\n                                <select #cCategory class=\"form-control\" formControlName=\"category_id\"\r\n                                        (change)=\"showProperties(cCategory.value)\">\r\n                                    <option value=\"\">Select a category...</option>\r\n                                    <option *ngFor=\"let cat of categories\" class=\"text-capitalize\" value=\"{{cat.id}}\">\r\n                                        {{cat.name}}\r\n                                    </option>\r\n                                </select>\r\n                                <div *ngIf=\"propertyVal\" [innerHTML]=\"propertyVal\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Short description</label>\r\n                                <textarea rows=\"3\" class=\"form-control\" formControlName=\"short_description\">\r\n                                            </textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div id=\"propertyTemplateForm\">\r\n                        <div style=\"margin-bottom: -12px\" class=\"mt-5\">\r\n                            <label class=\"font-20\">Properties</label>\r\n                            <button type=\"button\" (click)=\"addNewProperty()\" class=\"btn btn-sm btn-success pull-right\">\r\n                                Add Property\r\n                            </button>\r\n                        </div>\r\n                        <hr>\r\n                        <div *ngIf=\"newProperties !== null && newProperties.length > 0\"\r\n                             class=\"form-group inner-dynamic-container\">\r\n                            <div *ngFor=\"let prop of newProperties\" class=\"input-group box-shadow\">\r\n                                <input [(ngModel)]=\"prop.name\" placeholder=\"Property name\"\r\n                                       [ngModelOptions]=\"{standalone: true}\" value=\"{{prop.name}}\" class=\"form-control\">\r\n                                <input placeholder=\"Enter values here for drop-down\" [(ngModel)]=\"prop.type\"\r\n                                       [ngModelOptions]=\"{standalone: true}\"\r\n                                       class=\"form-control mx-2\" [value]=\"prop.type\">\r\n                                <button (click)=\"removeProperty(prop)\" type=\"submit\" class=\"btn btn-danger btn-sm px-3\">\r\n                                    <span class=\"fa fa-trash\"></span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"!(newProperties !== null && newProperties.length > 0)\"\r\n                             class=\"form-group text-center inner-dynamic-container\">\r\n                            No property added yet...\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-block submit-btn\" [disabled]=\"!newGoodsForm.valid || savingNewGoods\">\r\n                        <span *ngIf=\"savingNewGoods\"><svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                             xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                             width=\"24px\" height=\"24px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\"\r\n                             xml:space=\"preserve\">\r\n             <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n               s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n               c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n                            <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n               C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n               <animateTransform attributeType=\"xml\"\r\n                                 attributeName=\"transform\"\r\n                                 type=\"rotate\"\r\n                                 from=\"0 20 20\"\r\n                                 to=\"360 20 20\"\r\n                                 dur=\"0.5s\"\r\n                                 repeatCount=\"indefinite\"/>\r\n               </path>\r\n             </svg></span>\r\n                        {{savingNewGoods ? '' : 'Create Goods Record'}}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--<div class=\"modal fade\" id=\"batchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\">-->\r\n    <!--<div class=\"modal-dialog\" role=\"document\">-->\r\n        <!--<div class=\"modal-content\">-->\r\n            <!--<div class=\"modal-header\">-->\r\n                <!--<h4 class=\"modal-title\" id=\"l\">Batch Upload</h4>-->\r\n                <!--<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">-->\r\n                    <!--<span aria-hidden=\"true\" class=\"fa fa-times\"></span></button>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"modal-body\">-->\r\n                <!--<div class=\"alert alert-success\"><strong>Note: </strong>Upload XlsForm containing details of all your-->\r\n                    <!--goods, if you're not sure what xlsform is, <a href=\"http://xlsform.org/en\" class=\"btn-link\">click-->\r\n                        <!--here to learn more</a>.<br>-->\r\n                    <!--<a class=\"\">Click here to see sample data</a></div>-->\r\n                <!--<input type=\"file\">-->\r\n            <!--</div>-->\r\n            <!--<div class=\"modal-footer\">-->\r\n                <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">-->\r\n                    <!--Cancel-->\r\n                <!--</button>-->\r\n                <!--<button type=\"button\" class=\"btn btn-success\">-->\r\n                    <!--Upload-->\r\n                <!--</button>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor-goods/edit-vendor-goods/edit-vendor-goods.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor-goods/edit-vendor-goods/edit-vendor-goods.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"pageLoading\"></app-loader>\r\n<div class=\"row\" *ngIf=\"!pageLoading && selectedGood\">\r\n    <div class=\"col-lg-6 box-shadow form-holder offset-lg-3\" style=\"background: #fff;\">\r\n        <div *ngIf=\"displayType == 'primary' && selectedVendorGood\" class=\"card border-0\">\r\n            <div class=\"card-block pt-3\">\r\n                <h3>Edit Product Detail</h3>\r\n                <hr>\r\n                <form class=\"form\" [formGroup]=\"editForm\" (submit)=\"onSubmit(editForm)\">\r\n                    <div *ngIf=\"canAddVendorsGoods\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group dropdown m-dropdown\">\r\n                                    <label>Search Product</label>\r\n                                    <div class=\"inner-addon right-addon\">\r\n                                        <app-small-loader *ngIf=\"searching\"></app-small-loader>\r\n                                        <input (keyup)=\"getSearchResult()\" (change)=\"getSearchResult()\"\r\n                                               placeholder=\"Enter Product Name\" type=\"text\"\r\n                                               class=\"form-control\" id=\"search-field\" formControlName=\"searchField\">\r\n                                        <div *ngIf=\"editForm.controls['searchField'].valid && (allGoods === undefined || allGoods == null)\"\r\n                                             class=\"py-2\">\r\n                                            <label>Can find your product? <a class=\"custom-active-link text-success\"\r\n                                                                             (click)=\"changeDisplay('secondary')\">Click\r\n                                                here</a> to create record.\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div id=\"dropdown-menu-container\" class=\"dropdown-content\">\r\n                                        <div class=\"drop-down-container\" *ngFor=\"let allGood of allGoods\"\r\n                                             [ngClass]=\"(selectedAllGood != null && selectedAllGood.id == allGood.id) ? 'selected': ''\"\r\n                                             (click)=\"selectionChanged(allGood)\">\r\n                                            <!--<span [ngClass]=\"(selectedAllGood != null && selectedAllGood.id == allGood.id) ? 'selected': ''\"-->\r\n                                            <!--class=\"fa fa-check icon-check\"></span>-->\r\n                                            <h5>{{allGood.name}} in <strong\r\n                                                    title=\"Category\">{{allGood.category.name}}</strong></h5>\r\n                                            <div>{{allGood.short_description}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"allGoods == null || allGoods.length == 0\" class=\"dropdown-content\">\r\n                                        <div>\r\n                                            <div>Enter part of name of products to search</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"selectedAllGood\" class=\"col-md-12\">\r\n                                <div class=\"col-md-12 selected-good-container\">\r\n                                    <label style=\"color: #1a8b7f;\">Selected Product</label>\r\n                                    <h5>{{selectedAllGood.name}} in <strong title=\"Category\"\r\n                                                                            class=\"text-success\">{{selectedAllGood.category.name}}</strong>\r\n                                    </h5>\r\n                                    <div>{{selectedAllGood.short_description}}</div>\r\n                                    <i class=\"fa fa-times close-button\" (click)=\"deselectSelectedGood()\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <input style=\"display: none\" readonly class=\"form-control\"\r\n                                   formControlName=\"all_good_id\">\r\n                            <div *ngIf=\"selectedAllGood == null || !selectedAllGood\" class=\"col-md-12\">\r\n                                <div class=\"alert alert-warning\">No goods/product selected yet, enter name or description\r\n                                    of the goods and select matching from list.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Select Location<sup class=\"asterisk\">*</sup></label>\r\n                                    <select class=\"form-control\" formControlName=\"warehouse_id\">\r\n                                        <option selected>Select Location</option>\r\n                                        <option *ngFor=\"let warehouse of warehouses\"\r\n                                                [value]=\"warehouse.id\">\r\n                                            {{warehouse.name}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>SKU</label>\r\n                                    <input type=\"text\" class=\"form-control text-uppercase\" formControlName=\"sku\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Price<sup class=\"asterisk\">*</sup></label>\r\n                                    <input type=\"number\" class=\"form-control\" formControlName=\"price\">\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!editForm.controls['price'].valid && editForm.controls['price'].touched\">\r\n                                        Price is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"propertyForm\">\r\n                            <div *ngIf=\"properties && properties.length > 0\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\" *ngFor=\"let property of properties\">\r\n                                        <div class=\"form-group\" (onCreate)=\"addProperty(property)\">\r\n                                            <label class=\"text-capitalize\">{{property.name}}</label>\r\n                                            <select *ngIf=\"property.type == 'select'\" name=\"{{property.name}}\"\r\n                                                    [(ngModel)]=\"property.value\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                    class=\"form-control\">\r\n                                                <option *ngFor=\"let val of property.values\">{{val}}</option>\r\n                                            </select>\r\n                                            <input *ngIf=\"property.type != 'select'\" type=\"text\"\r\n                                                   name=\"{{property.name}}\"\r\n                                                   [(ngModel)]=\"property.value\" [ngModelOptions]=\"{standalone: true}\"\r\n                                                   class=\"form-control\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Full Description<sup class=\"asterisk\">*</sup></label>\r\n                                    <textarea class=\"form-control\" rows=\"7\"\r\n                                              formControlName=\"full_description\"></textarea>\r\n                                    <div class=\"custom-alert\"\r\n                                         *ngIf=\"!editForm.controls['full_description'].valid && editForm.controls['full_description'].touched\">\r\n                                        A Full Description of The Product is Required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <label>Images</label><br>\r\n                            <small class=\"font-weight-bold text-info text-center\">Info: Click on any of the picture to\r\n                                delete\r\n                            </small>\r\n                            <div class=\"p-0\">\r\n                                <img *ngFor=\"let picture of pictures; let i = index;\"\r\n                                     (click)=\"deleteImage(picture, i)\" [src]=\"picture.path\"\r\n                                     class=\"img-thumbnail img-preview mr-2 mb-2\" width=\"100px\"\r\n                                     height=\"100px\" title=\"Click to delete me\">\r\n                            </div>\r\n                            <div><small class=\"text-danger\"><strong>Note:</strong> File to upload must not exceed 2 MB</small></div>\r\n                            <app-upload [id]=\"uploadId\" (uploadFinished)=\"uploadFinished($event)\" [fileType]=\"'image'\"></app-upload>\r\n                        </div>\r\n                        <br>\r\n                        <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-warning\" (click)=\"triggerUpload(uploadId)\">\r\n                            Upload Images\r\n                        </button>\r\n                        <button [disabled]=\"saving\" type=\"button\" class=\"btn btn-danger pull-right ml-3\"\r\n                                (click)=\"deleteGood()\">Delete\r\n                            Record\r\n                        </button>\r\n                        <button [disabled]=\"!editForm.valid || saving\" class=\"btn btn-success pull-right\">\r\n                            <app-small-loader *ngIf=\"saving\"></app-small-loader>\r\n                            {{(saving ? '' : 'Update Record')}}\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"displayType == 'secondary'\" class=\"card border-0\">\r\n            <div class=\"card-block pt-3\">\r\n                <h3>Create Goods Record\r\n                    <button (click)=\"changeDisplay('primary')\" class=\"btn btn-success pull-right\"><i\r\n                            class=\"fa fa-arrow-left\"></i>\r\n                        Back to edit record\r\n                    </button>\r\n                </h3>\r\n                <hr>\r\n                <form [formGroup]=\"newGoodsForm\" (submit)=\"createNewGoodRecord()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"x1\">Good's Name</label>\r\n                                <input id=\"x1\" class=\"form-control\" formControlName=\"name\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Product Category</label>\r\n                                <select #cCategory class=\"form-control\" formControlName=\"category_id\"\r\n                                        (change)=\"showProperties(cCategory.value)\">\r\n                                    <option value=\"\">Select a category...</option>\r\n                                    <option *ngFor=\"let cat of categories\" class=\"text-capitalize\" value=\"{{cat.id}}\">\r\n                                        {{cat.name}}\r\n                                    </option>\r\n                                </select>\r\n                                <div *ngIf=\"propertyVal\" [innerHTML]=\"propertyVal\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Short description</label>\r\n                                <textarea rows=\"3\" class=\"form-control\" formControlName=\"short_description\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"propertyTemplateForm\">\r\n                        <div style=\"margin-bottom: -12px\" class=\"mt-5\">\r\n                            <label class=\"font-20\">Properties</label>\r\n                            <button type=\"button\" (click)=\"addNewProperty()\" class=\"btn btn-sm btn-success pull-right\">\r\n                                Add Property\r\n                            </button>\r\n                        </div>\r\n                        <hr>\r\n                        <div *ngIf=\"newProperties !== null && newProperties.length > 0\"\r\n                             class=\"form-group inner-dynamic-container\">\r\n                            <div *ngFor=\"let prop of newProperties\" class=\"input-group box-shadow\">\r\n                                <input [(ngModel)]=\"prop.name\" placeholder=\"Property name\"\r\n                                       [ngModelOptions]=\"{standalone: true}\" value=\"{{prop.name}}\" class=\"form-control\">\r\n                                <input placeholder=\"Enter values here for drop-down\" [(ngModel)]=\"prop.type\"\r\n                                       [ngModelOptions]=\"{standalone: true}\"\r\n                                       class=\"form-control mx-2\" [value]=\"prop.type\">\r\n                                <button (click)=\"removeProperty(prop)\" type=\"submit\" class=\"btn btn-danger btn-sm px-3\">\r\n                                    <span class=\"fa fa-trash\"></span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"!(newProperties !== null && newProperties.length > 0)\"\r\n                             class=\"form-group text-center inner-dynamic-container\">\r\n                            No property added yet...\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"errorMessage\" [innerHTML]=\"errorMessage\"></div>\r\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!newGoodsForm.valid || savingNewGoods\">\r\n                        <app-small-loader *ngIf=\"savingNewGoods\"></app-small-loader>\r\n                        {{savingNewGoods ? '' : 'Create Goods Record'}}\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"col-12 mt-3\">\r\n            <h5 class=\"font-weight-bold\">Quick actions</h5>\r\n            <ul class=\"quick-links\">\r\n                <li class=\"ml-3\"><a class=\"\" routerLink=\"/app/vendors/goods\">See list of goods</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-resource-not-found *ngIf=\"!pageLoading && !selectedGood\"></app-resource-not-found>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor-goods/vendor-goods-list/vendor-goods-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor-goods/vendor-goods-list/vendor-goods-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h4 class=\"my-2 mb-3\">Goods List</h4>\r\n      <form [formGroup]=\"searchForm\" (submit)=\"submitSearch()\" class=\"form\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group box-shadow\">\r\n            <a *ngIf=\"isVendor || (!isVendor && can(permissions.add_goods))\"\r\n               class=\"btn btn-success\" routerLink=\"/app/vendors/goods/create\">\r\n              <i class=\"fa fa-plus\"></i>&nbsp; Add New Good </a>\r\n            <a *ngIf=\"isVendor || (!isVendor && can(permissions.add_goods))\"\r\n               class=\"btn btn-success mr-2\" data-target=\"#batchUploadModal\" data-toggle=\"modal\">\r\n              <i class=\"fa fa-list-ul\"></i>&nbsp; Batch Upload</a>\r\n            <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\">\r\n              <i class=\"fa fa-search\"></i>\r\n            </div>\r\n            <input type=\"text\" formControlName=\"searchField\"\r\n                   placeholder=\"Search goods by name or description\"\r\n                   class=\"form-control border-0\">\r\n            <!--<div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0\"-->\r\n            <!--*ngIf=\"!isVendor\">Vendor-->\r\n            <!--</div>-->\r\n            <select *ngIf=\"!isVendor\"\r\n                    class=\"form-control\" formControlName=\"vendor\">\r\n              <option value=\"\">Select a vendor</option>\r\n              <option *ngFor=\"let vendor of vendors\" value=\"{{vendor.id}}\">{{vendor.business_name}}\r\n              </option>\r\n            </select>\r\n            <button type=\"submit\" [disabled]=\"processing\" class=\"btn btn-success\" *ngIf=\"!loading\">\r\n              <i class=\"fa fa-search\"></i> Search\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group p-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2\">\r\n              <div class=\"input-group box-shadow\">\r\n                <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\">\r\n                  Category\r\n                </div>\r\n                <select class=\"form-control mr-1\" formControlName=\"category\">\r\n                  <option value=\"\">Select a category</option>\r\n                  <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.name}}\r\n                  </option>\r\n                </select>\r\n                <span class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\">\r\n                                    <i class=\"fa fa-calendar\"></i>\r\n                                </span>\r\n                <input type=\"date\" formControlName=\"fromDate\" class=\"form-control mr-1\" placeholder=\"From date\"\r\n                       name=\"from\">\r\n                <span class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0 search-icon\">\r\n                                    <i class=\"fa fa-calendar\"></i>\r\n                                </span>\r\n                <input class=\"form-control mr-1\" type=\"date\" placeholder=\"To date\"\r\n                       name=\"to\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <app-batch-upload></app-batch-upload>\r\n  <div class=\"row\" *ngIf=\"displayType == 'list'\">\r\n    <div class=\"col-12\">\r\n      <div class=\"table-responsive bg-white box-shadow\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>\r\n              <input type=\"checkbox\" name=\"all\"  id=\"all\" class=\"styled-checkbox\" [checked]=\"isAllChecked()\"\r\n                     (change)=\"checkAll($event)\"/>\r\n              <label class=\"cp\" for=\"all\"></label>\r\n            </th>\r\n            <th>SKU</th>\r\n            <th>Image</th>\r\n            <th>Brand/Name</th>\r\n            <th>Category</th>\r\n            <th>Price</th>\r\n            <th *ngIf=\"!isVendor\">Vendor</th>\r\n            <th>Description</th>\r\n            <th>WareHouse</th>\r\n            <th>Date Created</th>\r\n            <th></th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <!-- <tr *ngIf=\"!goods.length\"><td colspan=\"11\">No Good found...</td></tr> -->\r\n\r\n          <tr *ngFor=\"let good of goods; let i = index\">\r\n\r\n            <td class=\"align-middle text-truncate\">\r\n              <input [id]=\"'good-' + good.id\" type=\"checkbox\" name=\"good[]\" class=\"styled-checkbox\" value=\"{{good.id}}\"\r\n                     [(ngModel)]=\"good.selected\"/>\r\n              <label [for]=\"'good-' + good.id\" class=\"cp\" for=\"all\"></label>\r\n            </td>\r\n            <td class=\"align-middle text-truncate text-uppercase\">{{good.sku}}</td>\r\n\r\n            <td class=\"align-middle text-truncate\">\r\n              <div *ngIf=\"good.pictures && good.pictures.length\">\r\n                <img *ngIf=\"good.pictures.length\" class=\"d-flex mr-3 img-thumbnail\"\r\n                     [src]=\"good.pictures[0].path\" width=\"50\" style=\"width: 50px; height: auto;\"\r\n                     height=\"50\" alt=\"Good image\">\r\n              </div>\r\n            </td>\r\n            <td class=\"align-middle text-truncate\">{{good.detail?.name}}</td>\r\n            <td class=\"align-middle text-truncate\"><span>{{good.detail?.category?.name}}</span></td>\r\n            <td class=\"align-middle text-truncate\">{{good.price_formatted}}</td>\r\n            <td *ngIf=\"!isVendor\" class=\"align-middle text-truncate\">{{good.vendor?.business_name}}\r\n            </td>\r\n            <td class=\"align-middle text text-truncate\">{{good.detail?.short_description ? good.detail?.short_description : good.full_description}}</td>\r\n            <td class=\"align-middle text-truncate\">{{good.warehouse?.name}}</td>\r\n            <td class=\"align-middle text-truncate\">{{good.created_at}}</td>\r\n            <td class=\"align-middle\">\r\n              <div class=\"btn-group\" role=\"group\">\r\n                <a *ngIf=\"isVendor || can(permissions.edit_goods) \"\r\n                   routerLink=\"/app/vendors/goods/edit/{{good.id}}\"\r\n                   class=\"btn btn-secondary btn-sm\"><i\r\n                  class=\"fa fa-tasks\"></i>&nbsp;Manage</a>\r\n                <a routerLink=\"/app/vendors/goods/view/{{good.id}}\"\r\n                   class=\"btn btn-success btn-sm\"><i class=\"fa fa-eye\"></i>&nbsp;View</a>\r\n                &nbsp;&nbsp;&nbsp;\r\n                <button type=\"button\" [disabled]=\"processing\" *ngIf=\"isVendor || can(permissions.delete_goods)\"\r\n                        (click)=\"deleteSingleGood(good, i)\" class=\"btn btn-danger btn-sm text-center\"><i\r\n                  class=\"fa fa-trash\"></i>&nbsp;Delete\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngIf=\"(goods == null || goods.length < 1) && !searching && !errorMessage\">\r\n            <td colspan=\"11\" class=\"text-center\">Sorry, no result to show...</td>\r\n          </tr>\r\n          <tr *ngIf=\"errorMessage\">\r\n            <td colspan=\"11\" class=\"text-center\" [innerHTML]=\"errorMessage\"></td>\r\n          </tr>\r\n          <tr *ngIf=\"searching\">\r\n            <td colspan=\"11\" class=\"text-center\">\r\n              <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                   enable-background=\"new 0 0 40 40\" height=\"40px\" id=\"loader-1\" version=\"1.1\"\r\n                   viewBox=\"0 0 40 40\" width=\"40px\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\r\n  <path d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"\r\n        fill=\"#000\" opacity=\"0.2\"></path>\r\n                <path d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n    C22.32,8.481,24.301,9.057,26.013,10.047z\" fill=\"#000\" transform=\"rotate(0.00000178639 21.8896 21.8896)\">\r\n    <animateTransform attributeName=\"transform\" attributeType=\"xml\" dur=\"0.5s\" from=\"0 20 20\" repeatCount=\"indefinite\"\r\n                      to=\"360 20 20\" type=\"rotate\"></animateTransform>\r\n    </path>\r\n  </svg>\r\n              <br>\r\n              Loading, please wait...\r\n            </td>\r\n          </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<div class=\"modal fade\" id=\"lg-modal\" tabindex=\"-1\" rolePermission=\"dialog\" aria-labelledby=\"modal-large-label\"-->\r\n  <!--style=\"display: none;\">-->\r\n  <!--<div class=\"modal-dialog modal-lg\" rolePermission=\"document\">-->\r\n  <!--<div class=\"modal-content\">-->\r\n  <!--<div class=\"modal-header state modal-success\">-->\r\n  <!--<h4 class=\"modal-title\" id=\"modal-large-label\">Upload Goods In Batch</h4>-->\r\n  <!--<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span-->\r\n  <!--aria-hidden=\"true\">×</span></button>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"modal-body\">-->\r\n  <!--<b> Add Your Product in Batch using xls or csv format</b>-->\r\n  <!--<br>-->\r\n\r\n  <!--<input type=\"file\" id=\"pictures\" (change)=\"onFileChange($event)\" #fileInput>-->\r\n\r\n  <!--<br>-->\r\n  <!--<br>-->\r\n  <!--<hr>-->\r\n  <!--<b> Add Your Product Images in Zip File</b>-->\r\n\r\n  <!--<br>-->\r\n\r\n  <!--<input type=\"file\" id=\"zip\" (change)=\"onFileChange($event)\" #fileInput>-->\r\n  <!--<hr>-->\r\n  <!--<div class=\"col-12 text-danger\">-->\r\n  <!--<label>Must Not exceed 2mb<sup class=\"asterisk\">*</sup></label> <br>-->\r\n  <!--<label>Categories inputted must have been listed on the system<sup-->\r\n  <!--class=\"asterisk\">*</sup></label>-->\r\n  <!--<label>WareHouses inputted must have been created on the system by you<sup-->\r\n  <!--class=\"asterisk\">*</sup></label>-->\r\n\r\n  <!--<br>-->\r\n  <!--<a class=\"btn btn-success\" (click)=\"getBatchGood()\">Download Sample</a>-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"modal-footer\">-->\r\n  <!--<button type=\"button\" class=\"btn btn-success\" (click)=\"onSubmit()\">Upload</button>-->\r\n  <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n  <div *ngIf=\"displayType == 'grid'\" class=\"row\">\r\n    <div *ngFor=\"let good of goods; let i = index\" class=\"col-xl-4 col-lg-6 mb-4\">\r\n      <div class=\"flip\">\r\n        <div class=\"content\">\r\n          <div class=\"front\">\r\n            <div class=\"card border-0 box-shadow rounded-2\">\r\n              <div class=\"card-header border-0 rounded-0 text-muted\">\r\n                <h5 class=\"mb-0 text-success\">\r\n                  <i class=\"fa fa-cart\"></i> {{good.detail.name}}\r\n                </h5>\r\n                <div class=\"widget-controls\">\r\n                  <!-- <a routerLink=\"/app/add-picture/{{good.id}}\" placement=\"top\" [ngbTooltip]=\"'add picture'\" class=\"btn btn-primary btn-sm\" ><i class=\"fa fa-upload\"></i></a>  -->\r\n                  <a *ngIf=\"isVendor || can(permissions.edit_goods) \"\r\n                     routerLink=\"/app/vendors/goods/edit/{{good.id}}\" class=\"btn btn-secondary btn-sm\"><i\r\n                    class=\"fa fa-pencil text-white\"></i></a>\r\n                  <a routerLink=\"/app/vendors/goods/view/{{good.id}}\" class=\"btn btn-success btn-sm\"><i\r\n                    class=\"fa fa-eye text-white\"></i></a>\r\n\r\n                  <a (click)=\"deleteSingleGood(good, i)\" *ngIf=\"isVendor || can(permissions.delete_goods) \"\r\n                     class=\"btn btn-danger btn-sm text-center text-white\"> <i class=\"fa fa-trash\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-block pt-3\">\r\n                <div class=\"media\">\r\n                                    <span *ngFor=\"let pictures of good.pictures\">\r\n                                        <img class=\"d-flex mr-3\"\r\n                                             [src]=\"pictures.path\"\r\n                                             width=\"70\"\r\n                                             alt=\"Good image\"></span>\r\n                  <div class=\"media-body ml-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-4 text-gray pr-0\">SKU:</div>\r\n                      <div class=\"col-8 pl-2\">{{good.sku}}</div>\r\n                      <div class=\"col-4 text-gray pr-0\">Categories:</div>\r\n                      <div class=\"col-8 pl-2\">\r\n                        <span>{{good.detail && good.detail.category ? good.detail.category.name : ''}}</span>\r\n                      </div>\r\n                      <div class=\"col-4 text-gray pr-0\">Price:</div>\r\n                      <div class=\"col-8 pl-2\">{{good.price | currency:'NGN':'symbol':'4.2-2'}}\r\n                      </div>\r\n                      <div class=\"col-4 text-gray\">Short Description:</div>\r\n                      <div class=\"col-8 pl-2\"><span>{{good.detail ? good.detail.short_description : ''}}</span></div>\r\n                      <div class=\"col-4 text-gray pr-0\" *ngIf=\"!isVendor\">Vendor:</div>\r\n                      <div class=\"col-8 pl-2 fs-12 pt-2p\" *ngIf=\"!isVendor\">\r\n                        {{good.vendor ? good.vendor.business_name : ''}}\r\n                      </div>\r\n                      <div class=\"col-4 text-gray pr-0\">WareHouse:</div>\r\n                      <div class=\"col-8 pl-2 fs-12 pt-2p\">{{good.warehouse ? good.warehouse.name : ''}}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n\r\n  <div class=\"text-center text-success\"*ngIf=\"last_page > 1 || 1\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"row text-center\">\r\n        <div style=\"display: inline-block; width: 470px;\">\r\n          <div class=\"input-group\">\r\n            <button *ngIf=\"hasSomeItemsChecked && (isVendor || can(permissions.delete_goods))\"\r\n                    [hidden]=\"processing\" (click)=\"deleteSelectedGoods()\"\r\n                    class=\"btn btn-danger text-center mr-2\">\r\n              <i class=\"fa fa-trash\"></i> Delete Selected\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" tabindex=\"-1\"\r\n                    (click)=\"searchGoods(prev_page_url, '')\"\r\n                    [disabled]=\"prev_page_url === null\"><i\r\n              class=\"fa fa-chevron-left \"></i> &nbsp;Previous\r\n            </button>\r\n            <span class=\"btn\">Page {{current_page}} of {{last_page}}</span>\r\n            <select id=\"per-page-select\" (change)=\"submitSearch()\" class=\"form-control mr-2\">\r\n              <option value=\"10\">Per Page</option>\r\n              <option value=\"15\">15</option>\r\n              <option value=\"25\">25</option>\r\n              <option value=\"50\">50</option>\r\n              <option value=\"100\">100</option>\r\n            </select>\r\n            <button type=\"button\" [disabled]=\"next_page_url === null\" class=\"btn btn-success\"\r\n                    (click)=\"searchGoods(next_page_url, '')\">Next&nbsp;\r\n              <i class=\"fa fa-chevron-right \"></i> &nbsp;&nbsp;\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor-goods/view-vendor-goods/view-vendor-goods.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor-goods/view-vendor-goods/view-vendor-goods.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader *ngIf=\"loading\"></app-loader>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"loading == false && good\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <button class=\"btn btn-success\" (click)=\"backClicked()\"><i\r\n                    class=\"fa fa-chevron-left \"></i> Go Back\r\n            </button>\r\n            <button *ngIf=\"!isVendor && currentMarketSurvey.structure_ && currentMarketSurvey.structure_.length\"\r\n                    class=\"btn btn-success pull-right\" data-toggle=\"modal\"\r\n                    data-target=\"#lg-modal\"><i class=\"fa fa-cart-plus \"></i> View Survey List\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>\r\n\r\n<div class=\"modal fade\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\"\r\n     style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-success\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Current Survey List</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <app-view-surveylist (updateInSurvey)=\"updateInSurvey($event)\"></app-view-surveylist>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid pb-5\" *ngIf=\"!loading && good\">\r\n    <div class=\"col-md-12 bg-white box-shadow pb-4\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 p-4\">\r\n                <div class=\"row\" *ngIf=\"pictures != null && pictures.length\">\r\n                    <div class=\"col-3\">\r\n                        <ul class=\"list-unstyled\">\r\n                            <li class=\"media\" *ngFor=\"let picture of pictures\">\r\n                                <img class=\"img-responsive thumbnail mb-2\"\r\n                                     (click)=\"carousel(picture.path)\"\r\n                                     [src]=\"picture.path\"\r\n                                     style=\"width: 80px;\" alt=\"Good's image\">\r\n                                <hr>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col-9\">\r\n                        <div *ngIf=\"pictures && pictures.length\">\r\n                            <img class=\"img-responsive imgwrapper bigSource\"\r\n                                 [src]=\"pictures[0].path\"\r\n                                 width=\"780\" height=\"auto\" style=\"height: auto;\"\r\n                                 alt=\"Goods image\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"p-4 pt-5 col-md-8\">\r\n                <h4 class=\"text-primary text-uppercase\" style=\"padding: 15px\">{{good.detail.name}}</h4>\r\n                <div class=\"col-md-12 m_desc text-left text-dark\">\r\n                    <div class=\"font-weight-bold\">{{good.vendor.business_name}}</div>\r\n                    <small class=\"text-muted\">{{good.vendor.phone}} &nbsp;|&nbsp; {{good.vendor.email}}</small>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <h6 class=\"text-dark font-weight-bold\">Basic Properties</h6>\r\n                            <table class=\"table table-bordered text-dark\">\r\n                                <tr class=\"\">\r\n                                    <th class=\"width-30\">Price</th>\r\n                                    <td class=\"\">{{good.price_formatted}}</td>\r\n                                </tr>\r\n                                <tr class=\"border-0\">\r\n                                    <th class=\"width-30\">Category</th>\r\n                                    <td class=\"\">{{good.detail.category.name}},\r\n                                        {{good.detail.category.parent_category}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr class=\"border-0\" *ngFor=\"let property of (good.properties || [])\">\r\n                                    <th class=\"width-30\">{{property.name}}</th>\r\n                                    <td class=\"\">{{property.value}}</td>\r\n                                </tr>\r\n                                <tr class=\"border-0\">\r\n                                    <th class=\"width-30\">Description</th>\r\n                                    <td class=\"\">{{good.detail.short_description}}</td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"col-md-6\" *ngIf=\"good.warehouse\">\r\n                            <h6 class=\"text-dark font-weight-bold\">Warehouse information</h6>\r\n                            <table class=\"table table-bordered text-dark\">\r\n                                <tr class=\"\">\r\n                                    <th class=\"width-30\">Name</th>\r\n                                    <td>{{good.warehouse.name}}</td>\r\n                                </tr>\r\n                                <tr class=\"\" *ngIf=\"good.warehouse.address\">\r\n                                    <th class=\"width-30\">Address:</th>\r\n                                    <td class=\"\">{{good.warehouse.address.address_line_1}}\r\n                                        <br>{{good.warehouse.address.address_line_2}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr class=\"\" *ngIf=\"good.warehouse.address\">\r\n                                    <th class=\"width-30\">State/City:</th>\r\n                                    <td class=\"\">{{good.warehouse.address.state?.name}}/{{good.warehouse.address.city?.name}}</td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"mt-3 col-md-12\">\r\n                    <h6 class=\"text-dark font-weight-bold\">Full Description</h6>\r\n                    <div style=\"text-align:justify\" class=\"text-dark\">\r\n                        {{good.full_description}}\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"!isVendor\" class=\"markup-container d-none d-sm-inline-block\">\r\n                    <form [formGroup]=\"markUpForm\" class=\"input-group\">\r\n                        <input *ngIf=\"!hasExactProductInSurvey\" class=\"form-control mr-3\" placeholder=\"Mark Up (%)\"\r\n                               type=\"number\" style=\"width: 130px;\" formControlName=\"markUpField\">\r\n                        <button *ngIf=\"!hasExactProductInSurvey && !hasItemInSurvey\" type=\"button\"\r\n                                class=\"btn btn-success btn-md\" (click)=\"addToSurvey()\"><i\r\n                                class=\"fa fa-plus\"></i>&nbsp; Add To Survey\r\n                        </button>\r\n                        <button *ngIf=\"hasExactProductInSurvey\" type=\"button\" class=\"btn btn-danger btn-md\"\r\n                                (click)=\"removeFromSurvey()\"><i\r\n                                class=\"fa fa-minus\"></i>&nbsp; Remove From Survey\r\n                        </button>\r\n                        <button *ngIf=\"!hasExactProductInSurvey && hasItemInSurvey\" type=\"button\"\r\n                                class=\"btn btn-dark btn-md\" (click)=\"replaceInSurvey()\"><i\r\n                                class=\"fa fa-minus\"></i>&nbsp; Replace Item in Survey\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12 d-sm-none bg-white box-shadow p-5\">\r\n        <div class=\"row\">\r\n            <div *ngIf=\"!isVendor\">\r\n                <form [formGroup]=\"markUpForm\" class=\"input-group add-to-survey-container\">\r\n                    <input *ngIf=\"!hasExactProductInSurvey\" class=\"form-control mr-3\" placeholder=\"Mark Up (%)\"\r\n                           type=\"number\" style=\"width: 130px;\" formControlName=\"markUpField\">\r\n                    <button *ngIf=\"!hasExactProductInSurvey && !hasItemInSurvey\" type=\"button\"\r\n                            class=\"btn btn-success btn-md btn-sm\" (click)=\"addToSurvey()\"><i\r\n                            class=\"fa fa-plus\"></i>&nbsp; Add To Survey\r\n                    </button>\r\n                    <button *ngIf=\"hasExactProductInSurvey \" type=\"button\"\r\n                            class=\"btn btn-danger btn-md btn-sm extra-small-btn\"\r\n                            (click)=\"removeFromSurvey()\"><i\r\n                            class=\"fa fa-minus\"></i>&nbsp; Remove From Survey\r\n                    </button>\r\n                    <button *ngIf=\"!hasExactProductInSurvey && hasItemInSurvey\" type=\"button\"\r\n                            class=\"btn btn-dark btn-md btn-sm extra-small-btn\" (click)=\"replaceInSurvey()\"><i\r\n                            class=\"fa fa-minus\"></i>&nbsp; Replace Item in Survey\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!isVendor && multi !== undefined && multi.length\">\r\n        <div class=\"col-xl-12 mb-4\">\r\n            <div widget class=\"card border-0 box-shadow\">\r\n                <div class=\"card-header transparent border-0 text-muted\">\r\n                    <h5 class=\"mb-0\">Price Trend</h5>\r\n                    <div class=\"widget-controls c-widget-controls\">\r\n                        <span class=\"btn search-icon\"><i class=\"fa fa-calendar\"></i></span>\r\n                        <input [formControl]=\"fromDate\" #from type=\"date\"\r\n                                                                class=\"form-control\"\r\n                                                                style=\"width: 150px; display: inline-block;\">\r\n                        <span class=\"btn search-icon\"><i class=\"fa fa-calendar\"></i></span>\r\n                        <input [formControl]=\"toDate\" type=\"date\" #to class=\"form-control\"\r\n                                                            style=\"width: 150px; display: inline-block;\">\r\n                        <button class=\"btn btn-success\" [disabled]=\"searchingTrend\"\r\n                                (click)=\"searchTrend(from.value, to.value)\"><i class=\"fa fa-search\"></i> Search\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-block widget-body\">\r\n                    <div class=\"w-100 h-300p\">\r\n                        <ngx-charts-line-chart\r\n                                [scheme]=\"colorScheme\"\r\n                                [results]=\"multi\"\r\n                                [gradient]=\"gradient\"\r\n                                [xAxis]=\"showXAxis\"\r\n                                [yAxis]=\"showYAxis\"\r\n                                [legend]=\"showLegend\"\r\n                                [showXAxisLabel]=\"showXAxisLabel\"\r\n                                [showYAxisLabel]=\"showYAxisLabel\"\r\n                                [xAxisLabel]=\"xAxisLabel\"\r\n                                [yAxisLabel]=\"yAxisLabel\"\r\n                                [xAxisTickFormatting]=\"customXAxisFormat\"\r\n                                [yAxisTickFormatting]=\"customYAxisFormat\"\r\n                                [timeline]=\"true\"\r\n                                [autoScale]=\"autoScale\">\r\n                        </ngx-charts-line-chart>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-resource-not-found [willShow]=\"!loading && !good\"></app-resource-not-found>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/batch-upload/batch-upload.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/batch-upload/batch-upload.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"batchUploadModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\">\n  <div class=\"modal-dialog modal-lg\" style=\"border-radius: 0 !important;\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div>\n          <h4 class=\"d-inline-block\">Batch Upload</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n            aria-hidden=\"true\">×</span></button>\n        </div>\n\n        <div class=\"p-3 mt-3\" style=\"background: #ededed\">\n          <label>Select what to upload</label><br>\n          <div class=\"d-inline-block mr-5\">\n            <input [(ngModel)]=\"selectedType\" checked type=\"radio\" name=\"all\" value=\"goods\" id=\"goods\"\n                   class=\"styled-checkbox\"/>\n            <label class=\"cp\" for=\"goods\">New Goods Data</label>\n          </div>\n          <div class=\"d-inline-block\">\n            <input type=\"radio\" name=\"all\" [(ngModel)]=\"selectedType\" value=\"price\" id=\"price\" class=\"styled-checkbox\"/>\n            <label class=\"cp\" for=\"price\">Goods Prices</label>\n          </div>\n          <div class=\"form-control mt-3\">\n            <label>Selected File </label>\n            <div>{{fileName ? fileName : 'No file selected'}} <i *ngIf=\"uploading.status\">(uploading...{{progress}}\n              %)</i></div>\n            <input id=\"file-select\" type=\"file\" (change)=\"processFile($event)\" style=\"display: none !important;\">\n          </div>\n          <div *ngIf=\"selectedType === 'price'\" class=\" mt-2\">\n            <label *ngIf=\"!loadingGoods.status && !loadingGoods.error\">Select one or more goods</label><br>\n            <div class=\"row\" style=\"max-height: calc(100vh - 300px); overflow-y: auto !important;\">\n              <div class=\"col-lg-4 col-md-6 mb-2\" *ngFor=\"let good of goods\">\n                <input type=\"checkbox\" [(ngModel)]=\"good.selected\"\n                       value=\"goods\" [id]=\"'goods-chk-' + good.id\"\n                       class=\"styled-checkbox\"/>\n                <label class=\"cp\" [for]=\"'goods-chk-' + good.id\">{{good.detail ? good.detail.name : 'NA'}}</label>\n              </div>\n            </div>\n            <div *ngIf=\"loadingGoods.status\" class=\"text-center\">\n              <app-small-loader [message]=\"'loading goods...'\"></app-small-loader>\n            </div>\n            <div *ngIf=\"loadingGoods.error\" class=\"text-center\">\n              <div [innerHTML]=\"loadingGoods.error\"></div>\n              <a href=\"javascript::void(0)\" (click)=\"loadGoods()\">Click to retry</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer d-block\">\n        <button type=\"button\" [disabled]=\"uploading.status\" class=\"btn btn-warning\"\n                (click)=\"triggerUpload()\">Choose{{fileName ? ' Another' : ' A'}} File\n        </button>\n        <button [disabled]=\"uploading.status || uploading.downloading\" type=\"button\" class=\"btn btn-outline-success\" (click)=\"downloadSample()\">{{uploading.downloading ? 'Downloading' : 'Download'}} sample</button>\n        <button type=\"button\" class=\"btn btn-default pull-right\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" [disabled]=\"!selectedFile || uploading.status || uploading.downloading\"\n                (click)=\"doUpload()\" class=\"btn btn-success pull-right\">Upload\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/vendor-goods/create-vendor-goods/create-vendor-goods.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/vendor-goods/create-vendor-goods/create-vendor-goods.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step .step-content {\n  background: #b9b9b9;\n  height: 40px;\n  font-size: 1.5rem;\n}\n.step .step-content .step-name {\n  font-size: 14px;\n}\n.step .step-content.confirmed {\n  background-color: #4BAE4F !important;\n}\n.confirmed-content .fa-check {\n  font-size: 120px;\n}\n.confirmed-content .fa-print {\n  font-size: 24px;\n}\n.m-img-upload-btn {\n  position: absolute;\n  padding: 0;\n  width: calc(100% - 30px);\n  height: 38px;\n  opacity: 0;\n}\n.images-container {\n  width: 100%;\n  top: 15px;\n  border: 2px dashed #ccc;\n  background: #f1f1f1;\n  min-height: 293px;\n  padding: 10px;\n  display: block;\n}\n.images-container .m-image-wrapper {\n  position: relative;\n  display: inline-block;\n  margin: 10px;\n  width: 120px;\n  height: 120px;\n}\n.images-container .m-image-wrapper .m-delete-img {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  border: 2px solid #fff;\n  color: #fff;\n  padding: 3px 5px;\n  border-radius: 50%;\n  visibility: hidden;\n  cursor: pointer;\n}\n.images-container .m-image-wrapper:hover .m-delete-img {\n  visibility: visible;\n}\n.images-container .m-image-wrapper img {\n  width: 120px;\n  height: 120px;\n}\n.image-wrapper {\n  position: relative;\n}\n.image-wrapper .delete-img {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  border: 2px solid #fff;\n  color: #fff;\n  padding: 3px 5px;\n  border-radius: 50%;\n  visibility: hidden;\n  cursor: pointer;\n}\n.image-wrapper:hover .delete-img {\n  visibility: visible;\n}\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  width: 100%;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  cursor: pointer;\n}\n.dropdown-content .icon-check {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 18px;\n}\n.dropdown-content .icon-check.selected {\n  display: inline-block;\n}\n.custom-active-link:hover {\n  cursor: pointer;\n  text-decoration: underline !important;\n  color: #00C189;\n}\n.dropdown-content {\n  max-height: calc(100vh - 350px);\n  overflow-y: auto;\n}\n.dropdown-content > div {\n  padding: 12px 16px;\n}\n.drop-down-container.selected {\n  background-color: #00C189;\n  color: #fff;\n}\n.selected-good-container {\n  box-shadow: 0px 8px 16px 0px rgba(249, 249, 249, 0.2);\n  padding: 12px 16px;\n  cursor: pointer;\n  background-color: #f9f9f9;\n  margin-bottom: 20px;\n}\n.close-button {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.m-dropdown {\n  min-height: 90px;\n}\n.drop-down-container:hover {\n  background-color: #1a8b7f;\n  color: #fff;\n}\n.drop-down-container + .drop-down-container {\n  margin-top: 10px;\n}\n.m-dropdown:hover .dropdown-content, .dropdown-content.showing {\n  display: block;\n}\n.inner-addon .fa {\n  position: absolute;\n  padding: 10px;\n  cursor: pointer;\n}\n.inner-addon svg {\n  position: absolute;\n  cursor: pointer;\n}\nsvg path,\nsvg rect {\n  fill: #0DB28B;\n}\n.right-addon svg {\n  right: 10px;\n  top: 30px;\n  margin-top: 0 !important;\n}\n.right-addon .fa {\n  right: 15px;\n}\n.right-addon input {\n  padding-right: 30px;\n}\n.inner-dynamic-container {\n  padding: 10px;\n  background: #ededed;\n}\n.inner-dynamic-container .btn {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.inner-dynamic-container .fa {\n  font-size: 17px;\n}\n.inner-dynamic-container .input-group {\n  margin-bottom: 10px;\n}\n.inner-dynamic-container .input-group:last-child {\n  margin-bottom: 0;\n}\n.img-preview {\n  width: 100px !important;\n  height: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVuZG9yLWdvb2RzL2NyZWF0ZS12ZW5kb3ItZ29vZHMvQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcSWxvciB0ZWNobm9sb2dpZXMgbHRkXFxpbG9yLXBjLXdlYi9zcmNcXGFwcFxccGFnZXNcXHZlbmRvci1nb29kc1xcY3JlYXRlLXZlbmRvci1nb29kc1xcY3JlYXRlLXZlbmRvci1nb29kcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmVuZG9yLWdvb2RzL2NyZWF0ZS12ZW5kb3ItZ29vZHMvY3JlYXRlLXZlbmRvci1nb29kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUo7QURDSTtFQUNFLGVBQUE7QUNDTjtBRENJO0VBQ0Usb0NBQUE7QUNDTjtBREtFO0VBQ0UsZ0JBQUE7QUNGSjtBRElFO0VBQ0UsZUFBQTtBQ0ZKO0FETUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSEY7QURLQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNGRjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0RKO0FERUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FOO0FERUk7RUFDRSxtQkFBQTtBQ0FOO0FERUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0FOO0FES0E7RUFDRSxrQkFBQTtBQ0ZGO0FER0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0U7RUFDRSxtQkFBQTtBQ0RKO0FES0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRkY7QURJRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsTUFBQTtFQUFRLGVBQUE7QUNDMUM7QURBSTtFQUNFLHFCQUFBO0FDRU47QURHQTtFQUNFLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtBQ0FGO0FER0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNBRjtBREdBO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7QUNBRjtBREdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0FDQUY7QURHQTtFQUNFLGNBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0FGO0FERUE7RUFDRSxrQkFBQTtFQUVBLGVBQUE7QUNBRjtBREVBOztFQUVFLGFBQUE7QUNDRjtBREdBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0FDQUY7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0UsZUFBQTtBQ0FKO0FER0U7RUFDRSxtQkFBQTtBQ0RKO0FESUU7RUFDRSxnQkFBQTtBQ0ZKO0FETUE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZW5kb3ItZ29vZHMvY3JlYXRlLXZlbmRvci1nb29kcy9jcmVhdGUtdmVuZG9yLWdvb2RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXB7XHJcbiAgLnN0ZXAtY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6ICNiOWI5Yjk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIC5zdGVwLW5hbWV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgICYuY29uZmlybWVke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEJBRTRGICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29uZmlybWVkLWNvbnRlbnR7XHJcbiAgLmZhLWNoZWNre1xyXG4gICAgZm9udC1zaXplOiAxMjBweDtcclxuICB9XHJcbiAgLmZhLXByaW50e1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm0taW1nLXVwbG9hZC1idG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIGhlaWdodDogMzhweDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5pbWFnZXMtY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMTVweDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgbWluLWhlaWdodDogMjkzcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAubS1pbWFnZS13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIC5tLWRlbGV0ZS1pbWd7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICY6aG92ZXIgLm0tZGVsZXRlLWltZ3tcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5kZWxldGUtaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICY6aG92ZXIgLmRlbGV0ZS1pbWd7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIC5pY29uLWNoZWNrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwOyB0b3A6IDA7IGZvbnQtc2l6ZTogMThweDtcclxuICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWFjdGl2ZS1saW5rOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzAwQzE4OTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNTBweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgPiBkaXYge1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxufVxyXG5cclxuLmRyb3AtZG93bi1jb250YWluZXIuc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEMxODk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1nb29kLWNvbnRhaW5lciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuMik7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTVweDtcclxuICB0b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5tLWRyb3Bkb3duIHtcclxuICBtaW4taGVpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG4uZHJvcC1kb3duLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhOGI3ZjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmRyb3AtZG93bi1jb250YWluZXIgKyAuZHJvcC1kb3duLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm0tZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQsIC5kcm9wZG93bi1jb250ZW50LnNob3dpbmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW5uZXItYWRkb24gLmZhe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5uZXItYWRkb24gc3Zne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvL3BhZGRpbmc6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuc3ZnIHBhdGgsXHJcbnN2ZyByZWN0IHtcclxuICBmaWxsOiAjMERCMjhCO1xyXG59XHJcblxyXG5cclxuLnJpZ2h0LWFkZG9uIHN2ZyB7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJpZ2h0LWFkZG9uIC5mYSB7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaW5uZXItZHluYW1pYy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuXHJcbiAgLmJ0biB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5pbWctcHJldmlldyB7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuIiwiLnN0ZXAgLnN0ZXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNiOWI5Yjk7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uc3RlcCAuc3RlcC1jb250ZW50IC5zdGVwLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc3RlcCAuc3RlcC1jb250ZW50LmNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QkFFNEYgIWltcG9ydGFudDtcbn1cblxuLmNvbmZpcm1lZC1jb250ZW50IC5mYS1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMTIwcHg7XG59XG4uY29uZmlybWVkLWNvbnRlbnQgLmZhLXByaW50IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubS1pbWctdXBsb2FkLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBoZWlnaHQ6IDM4cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbWFnZXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMTVweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIG1pbi1oZWlnaHQ6IDI5M3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pbWFnZXMtY29udGFpbmVyIC5tLWltYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG4uaW1hZ2VzLWNvbnRhaW5lciAubS1pbWFnZS13cmFwcGVyIC5tLWRlbGV0ZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1hZ2VzLWNvbnRhaW5lciAubS1pbWFnZS13cmFwcGVyOmhvdmVyIC5tLWRlbGV0ZS1pbWcge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmltYWdlcy1jb250YWluZXIgLm0taW1hZ2Utd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmltYWdlLXdyYXBwZXIgLmRlbGV0ZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1hZ2Utd3JhcHBlcjpob3ZlciAuZGVsZXRlLWltZyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kcm9wZG93bi1jb250ZW50IC5pY29uLWNoZWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZHJvcGRvd24tY29udGVudCAuaWNvbi1jaGVjay5zZWxlY3RlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmN1c3RvbS1hY3RpdmUtbGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMEMxODk7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgPiBkaXYge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG59XG5cbi5kcm9wLWRvd24tY29udGFpbmVyLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQzE4OTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWxlY3RlZC1nb29kLWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjIpO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbn1cblxuLm0tZHJvcGRvd24ge1xuICBtaW4taGVpZ2h0OiA5MHB4O1xufVxuXG4uZHJvcC1kb3duLWNvbnRhaW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYThiN2Y7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZHJvcC1kb3duLWNvbnRhaW5lciArIC5kcm9wLWRvd24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm0tZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQsIC5kcm9wZG93bi1jb250ZW50LnNob3dpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlubmVyLWFkZG9uIC5mYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5uZXItYWRkb24gc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnN2ZyBwYXRoLFxuc3ZnIHJlY3Qge1xuICBmaWxsOiAjMERCMjhCO1xufVxuXG4ucmlnaHQtYWRkb24gc3ZnIHtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMzBweDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ucmlnaHQtYWRkb24gLmZhIHtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5yaWdodC1hZGRvbiBpbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5pbm5lci1keW5hbWljLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmJ0biB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5pbm5lci1keW5hbWljLWNvbnRhaW5lciAuZmEge1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbm5lci1keW5hbWljLWNvbnRhaW5lciAuaW5wdXQtZ3JvdXA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pbWctcHJldmlldyB7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/vendor-goods/create-vendor-goods/create-vendor-goods.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/vendor-goods/create-vendor-goods/create-vendor-goods.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreateVendorGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVendorGoodsComponent", function() { return CreateVendorGoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_vendor_goods_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/vendor-goods.service */ "./src/app/services/vendor-goods.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/upload.service */ "./src/app/services/upload.service.ts");










let CreateVendorGoodsComponent = class CreateVendorGoodsComponent {
    constructor(formBuilder, router, route, goodsService, changeDetectorRef, elem, http, uploadService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.goodsService = goodsService;
        this.changeDetectorRef = changeDetectorRef;
        this.elem = elem;
        this.http = http;
        this.uploadService = uploadService;
        this.warehouses = [];
        this.allGoods = [];
        this.selected = [];
        this.pictures = [];
        this.pictureIds = [];
        this.file = '';
        this.savingNewGoods = false;
        this.details = [];
        this.newProperties = [];
        this.properties = [];
        this.categories = [];
        this.displayType = 'primary';
        this.vendors = [];
        this.propertyVal = '';
        this.canAddVendorsGoods = false;
        this.uploadResponse = { status: '', message: '', filePath: '' };
        this.uploadId = '';
        this.canAddVendorsGoods = this.isVendor || this.can(this.permissions.add_goods);
        this.uploadId = 'create-vendor-goods-' + _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].grabRandomID();
    }
    get isVendor() {
        return _data__WEBPACK_IMPORTED_MODULE_8__["AppData"].roles.vendor === (_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].getAuthenticatedUser() || {}).r;
    }
    get permissions() {
        return _data__WEBPACK_IMPORTED_MODULE_8__["AppData"].permissions;
    }
    can(permission) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].can(permission);
    }
    uploadFinished(event) {
        this.pictures.push(event);
        this.pictureIds.push(event.id);
    }
    triggerUpload(id) {
        if (id === this.uploadId)
            this.uploadService.upload(id);
    }
    ngOnInit() {
        this.timer = null;
        this.saving = false;
        this.searching = false;
        this.loadingWarehouse = false;
        this.buildForm();
        this.getCategories();
        this.getWarehouse();
        if (this.isVendor) {
            this.updateVId();
        }
        else {
            this.loadVendors();
        }
    }
    buildForm() {
        const d = {
            all_good_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            searchField: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            full_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)])],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)])],
            sku: [''],
            warehouse_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        };
        if (!this.isVendor) {
            d.vendor_id = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])];
        }
        this.newForm = this.formBuilder.group(d);
        this.newGoodsForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            category_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            short_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    loadVendors() {
        this.goodsService.getVendors().subscribe((vendors) => {
            this.vendors = vendors;
        }, (err) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router, true);
        });
    }
    selectionChanged(goodsDetail) {
        this.selectedGood = goodsDetail;
        if (this.selectedGood == null) {
            this.clearAdditionalFields();
        }
        else {
            this.newForm.patchValue({ all_good_id: this.selectedGood.id });
            this.properties = goodsDetail.properties_template;
        }
    }
    clearAdditionalFields() {
        this.selectedGood = null;
        this.newForm.patchValue({ all_good_id: '' });
        this.properties = [];
    }
    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.newForm.get('picture').setValue(file);
        }
    }
    getSearchResult() {
        if (this.timer != null) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.searching = true;
            this.errorMessage = '';
            this.goodsService.getIAllGoods(this.newForm.get('searchField').value).subscribe((returnedGoods) => {
                this.allGoods = returnedGoods;
                this.searching = false;
            }, (error) => {
                this.searching = false;
                this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router);
            });
        }, 400);
    }
    getWarehouse() {
        this.loadingWarehouse = true;
        let subscriber;
        if (this.isVendor) {
            subscriber = this.goodsService.getWarehouse();
        }
        else {
            const vendor = this.newForm.get('vendor_id').value;
            if (!vendor && !this.isVendor) {
                this.warehouses = [];
                return;
            }
            subscriber = this.goodsService.getWarehouseFor(vendor);
        }
        subscriber.subscribe((warehouses) => {
            this.warehouses = warehouses;
            this.loadingWarehouse = false;
        }, (error) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router, true);
            this.loadingWarehouse = false;
        });
    }
    getCategories() {
        this.goodsService.getGoodsCategory().subscribe((categories) => this.categories = categories, (error) => _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router));
    }
    deselectSelectedGood() {
        this.clearAdditionalFields();
    }
    onSubmit(form) {
        const formData = form.value;
        formData.pictures = this.pictureIds;
        formData.properties = JSON.stringify({ data: this.properties });
        this.errorMessage = '';
        this.saving = true;
        this.goodsService.addNewVendorGood(_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + 'goods', formData).subscribe((res) => {
            this.newForm.reset();
            this.properties = [];
            if (this.isVendor) {
                this.updateVId();
            }
            // this.fileInput.nativeElement.value = '';
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].succeeded(res.message);
            this.saving = false;
            this.pictures = [];
            this.pictureIds = [];
        }, (error) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router, true);
            this.saving = false;
        });
    }
    prepareToSaveNewGood() {
        const input = this.newGoodsForm.value;
        input.properties = JSON.stringify({ data: this.newProperties });
        return input;
    }
    createNewGoodRecord() {
        if (this.saving) {
            return;
        }
        const formModel = this.prepareToSaveNewGood();
        this.savingNewGoods = true;
        this.errorMessage = '';
        this.goodsService.addNewAllGood(formModel).subscribe((res) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].succeeded(res.message);
            this.newGoodsForm.reset();
            this.newProperties = [];
            // this.newGoodsForm.reset();
            // this.newProperties = [];
            this.savingNewGoods = false;
        }, (error) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router);
            this.savingNewGoods = false;
        });
    }
    addNewProperty() {
        this.newProperties.push({ name: '', type: '' });
    }
    removeProperty(property) {
        this.newProperties.splice(this.newProperties.indexOf(property), 1);
    }
    changeDisplay(type) {
        this.displayType = type;
    }
    addProperty(property) {
        this.properties.push(property);
    }
    showProperties(cCategory) {
        const list = [];
        if (cCategory) {
            this.categories.forEach(category => {
                if (category.id.toString() === cCategory.toString()) {
                    category.properties_template.forEach(t => {
                        list.push(t.name);
                    });
                }
            });
        }
        let val = '';
        if (list.length > 0) {
            val = '<small class="mt-2">Properties: <strong>' + list.join(', ') + '</strong></small>';
        }
        this.propertyVal = val;
    }
    updateVId() {
        const vendorId = (_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].getAuthenticatedUser() || {}).v;
        this.newForm.patchValue({ vendor_id: vendorId });
    }
};
CreateVendorGoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-vendor-goods',
        template: __webpack_require__(/*! raw-loader!./create-vendor-goods.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor-goods/create-vendor-goods/create-vendor-goods.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./create-vendor-goods.component.scss */ "./src/app/pages/vendor-goods/create-vendor-goods/create-vendor-goods.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _services_vendor_goods_service__WEBPACK_IMPORTED_MODULE_6__["VendorGoodsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _services_upload_service__WEBPACK_IMPORTED_MODULE_9__["UploadService"]])
], CreateVendorGoodsComponent);



/***/ }),

/***/ "./src/app/pages/vendor-goods/edit-vendor-goods/edit-vendor-goods.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vendor-goods/edit-vendor-goods/edit-vendor-goods.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-info {\n  background: #0DB28B;\n}\n.profile-info h3 {\n  color: white;\n  text-align: center;\n  margin-top: 20px;\n}\n.profile-info .card {\n  margin-top: 20px;\n  height: 80%;\n}\n.profile-info .card .media .media-body h6 {\n  font-size: 16px;\n}\n.profile-info .action-box {\n  border-radius: 3px;\n  border: 2px dashed #ECEEEF;\n  padding: 10px;\n  align-items: center;\n}\n.profile-info .action-box button {\n  cursor: pointer;\n}\n.profile-info .action-box h3 {\n  color: #333333;\n  text-align: left;\n}\n.profile-info .form-holder {\n  background: white !important;\n}\n.submit-btn {\n  padding: 15px 20px;\n  background: #0DB28B;\n  color: white;\n  font-weight: bolder;\n}\n.asterisk {\n  font-size: 12px;\n  color: red;\n}\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  width: 100%;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  cursor: pointer;\n}\n.dropdown-content .icon-check {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 18px;\n}\n.dropdown-content .icon-check.selected {\n  display: inline-block;\n}\n.custom-active-link:hover {\n  cursor: pointer;\n  text-decoration: underline !important;\n  color: #00C189;\n}\n.dropdown-content {\n  max-height: calc(100vh - 350px);\n  overflow-y: auto;\n}\n.dropdown-content > div {\n  padding: 12px 16px;\n}\n.drop-down-container.selected {\n  background-color: #00C189;\n  color: #fff;\n}\n.selected-good-container {\n  box-shadow: 0px 8px 16px 0px rgba(249, 249, 249, 0.2);\n  padding: 12px 16px;\n  cursor: pointer;\n  background-color: #fff;\n  margin-bottom: 20px;\n  border: 2px solid #00C189;\n}\n.close-button {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.m-dropdown {\n  min-height: 90px;\n}\n.drop-down-container:hover {\n  background-color: #1a8b7f;\n  color: #fff;\n}\n.drop-down-container + .drop-down-container {\n  margin-top: 10px;\n}\n.m-dropdown:hover .dropdown-content, .dropdown-content.showing {\n  display: block;\n}\n.inner-addon .fa {\n  position: absolute;\n  padding: 10px;\n  cursor: pointer;\n}\n.inner-addon svg {\n  position: absolute;\n  cursor: pointer;\n}\nsvg path,\nsvg rect {\n  fill: #0DB28B;\n}\n.right-addon svg {\n  right: 10px;\n  top: 30px;\n}\n.right-addon .fa {\n  right: 15px;\n}\n.right-addon input {\n  padding-right: 30px;\n}\n.inner-dynamic-container {\n  padding: 10px;\n  background: #ededed;\n}\n.inner-dynamic-container .btn {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.inner-dynamic-container .fa {\n  font-size: 17px;\n}\n.inner-dynamic-container .input-group {\n  margin-bottom: 10px;\n}\n.inner-dynamic-container .input-group:last-child {\n  margin-bottom: 0;\n}\n.quick-links li {\n  color: #0DB28B;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVuZG9yLWdvb2RzL2VkaXQtdmVuZG9yLWdvb2RzL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFx2ZW5kb3ItZ29vZHNcXGVkaXQtdmVuZG9yLWdvb2RzXFxlZGl0LXZlbmRvci1nb29kcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmVuZG9yLWdvb2RzL2VkaXQtdmVuZG9yLWdvb2RzL2VkaXQtdmVuZG9yLWdvb2RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREFFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDRUo7QURDTTtFQUNFLGVBQUE7QUNDUjtBRElFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FESUk7RUFDRSxlQUFBO0FDRk47QURLSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0hOO0FET0U7RUFDRSw0QkFBQTtBQ0xKO0FEU0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTkY7QURTQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDTkY7QURTQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNORjtBRFFFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FDTko7QURPSTtFQUNFLHFCQUFBO0FDTE47QURVQTtFQUNFLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUNQRjtBRFVBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSxrQkFBQTtBQ1BGO0FEVUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNQRjtBRFVBO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNQRjtBRFVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ1BGO0FEVUE7RUFDRSxnQkFBQTtBQ1BGO0FEVUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNQRjtBRFVBO0VBQ0UsZ0JBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtBQ1BGO0FEVUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGtCQUFBO0VBRUEsZUFBQTtBQ1JGO0FEV0E7O0VBRUUsYUFBQTtBQ1JGO0FEV0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtBQ1JGO0FEV0E7RUFDRSxXQUFBO0FDUkY7QURXQTtFQUNFLG1CQUFBO0FDUkY7QURXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1JGO0FEVUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdFO0VBQ0UsZUFBQTtBQ1RKO0FEWUU7RUFDRSxtQkFBQTtBQ1ZKO0FEYUU7RUFDRSxnQkFBQTtBQ1hKO0FEZUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmVuZG9yLWdvb2RzL2VkaXQtdmVuZG9yLWdvb2RzL2VkaXQtdmVuZG9yLWdvb2RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcclxuICBoMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcblxyXG4gICAgLm1lZGlhIHtcclxuICAgICAgLm1lZGlhLWJvZHkgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1ib3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNFQ0VFRUY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0taG9sZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5hc3RlcmlzayB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAuaWNvbi1jaGVjayB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmN1c3RvbS1hY3RpdmUtbGluazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMEMxODk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzUwcHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50ID4gZGl2IHtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbn1cclxuXHJcbi5kcm9wLWRvd24tY29udGFpbmVyLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBDMTg5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtZ29vZC1jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjIpO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMEMxODk7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTVweDtcclxuICB0b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5tLWRyb3Bkb3duIHtcclxuICBtaW4taGVpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG4uZHJvcC1kb3duLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhOGI3ZjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmRyb3AtZG93bi1jb250YWluZXIgKyAuZHJvcC1kb3duLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm0tZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQsIC5kcm9wZG93bi1jb250ZW50LnNob3dpbmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW5uZXItYWRkb24gLmZhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbm5lci1hZGRvbiBzdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvL3BhZGRpbmc6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnN2ZyBwYXRoLFxyXG5zdmcgcmVjdCB7XHJcbiAgZmlsbDogIzBEQjI4QjtcclxufVxyXG5cclxuLnJpZ2h0LWFkZG9uIHN2ZyB7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtYWRkb24gLmZhIHtcclxuICByaWdodDogMTVweDtcclxufVxyXG5cclxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaW5uZXItZHluYW1pYy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuXHJcbiAgLmJ0biB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5xdWljay1saW5rcyBsaSB7XHJcbiAgY29sb3I6ICMwREIyOEI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi5wcm9maWxlLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xufVxuLnByb2ZpbGUtaW5mbyBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnByb2ZpbGUtaW5mbyAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogODAlO1xufVxuLnByb2ZpbGUtaW5mbyAuY2FyZCAubWVkaWEgLm1lZGlhLWJvZHkgaDYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucHJvZmlsZS1pbmZvIC5hY3Rpb24tYm94IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgI0VDRUVFRjtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9maWxlLWluZm8gLmFjdGlvbi1ib3ggYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2ZpbGUtaW5mbyAuYWN0aW9uLWJveCBoMyB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnByb2ZpbGUtaW5mbyAuZm9ybS1ob2xkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uYXN0ZXJpc2sge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kcm9wZG93bi1jb250ZW50IC5pY29uLWNoZWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZHJvcGRvd24tY29udGVudCAuaWNvbi1jaGVjay5zZWxlY3RlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmN1c3RvbS1hY3RpdmUtbGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMEMxODk7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgPiBkaXYge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG59XG5cbi5kcm9wLWRvd24tY29udGFpbmVyLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQzE4OTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWxlY3RlZC1nb29kLWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjIpO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwQzE4OTtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbn1cblxuLm0tZHJvcGRvd24ge1xuICBtaW4taGVpZ2h0OiA5MHB4O1xufVxuXG4uZHJvcC1kb3duLWNvbnRhaW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYThiN2Y7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZHJvcC1kb3duLWNvbnRhaW5lciArIC5kcm9wLWRvd24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm0tZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQsIC5kcm9wZG93bi1jb250ZW50LnNob3dpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlubmVyLWFkZG9uIC5mYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5uZXItYWRkb24gc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnN2ZyBwYXRoLFxuc3ZnIHJlY3Qge1xuICBmaWxsOiAjMERCMjhCO1xufVxuXG4ucmlnaHQtYWRkb24gc3ZnIHtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMzBweDtcbn1cblxuLnJpZ2h0LWFkZG9uIC5mYSB7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG4ucmlnaHQtYWRkb24gaW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4uaW5uZXItZHluYW1pYy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuLmlubmVyLWR5bmFtaWMtY29udGFpbmVyIC5idG4ge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmZhIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLmlubmVyLWR5bmFtaWMtY29udGFpbmVyIC5pbnB1dC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaW5uZXItZHluYW1pYy1jb250YWluZXIgLmlucHV0LWdyb3VwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucXVpY2stbGlua3MgbGkge1xuICBjb2xvcjogIzBEQjI4QjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/vendor-goods/edit-vendor-goods/edit-vendor-goods.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/vendor-goods/edit-vendor-goods/edit-vendor-goods.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditVendorGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVendorGoodsComponent", function() { return EditVendorGoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_vendor_goods_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/vendor-goods.service */ "./src/app/services/vendor-goods.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);











let EditVendorGoodsComponent = class EditVendorGoodsComponent {
    constructor(formBuilder, router, route, goodsService, http, authService, uploadService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.goodsService = goodsService;
        this.http = http;
        this.authService = authService;
        this.uploadService = uploadService;
        this.warehouses = [];
        this.allGoods = [];
        this.savingNewGoods = false;
        this.selectedVendorGood = null;
        this.originalVendorGood = null;
        this.selectedGood = null;
        this.selectedAllGood = null;
        this.selectedProperties = [];
        this.properties = [];
        this.pictures = [];
        this.pictureIds = [];
        this.newProperties = [];
        this.categories = [];
        this.displayType = 'primary';
        this.canAddVendorsGoods = false;
        this.propertyVal = '';
        this.uploadId = '';
        this.canAddVendorsGoods = this.isVendor || this.can(this.permissions.edit_goods);
        this.uploadId = 'edit-vendor-goods-' + _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].grabRandomID();
    }
    ngOnInit() {
        this.url = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url;
        this.goodId = this.route.snapshot.params['id'];
        this.buildForm();
        this.getDetailsForSelectedVendorGood();
    }
    get isVendor() {
        return _data__WEBPACK_IMPORTED_MODULE_9__["AppData"].roles.vendor === (_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].getAuthenticatedUser() || {}).r;
    }
    get permissions() {
        return _data__WEBPACK_IMPORTED_MODULE_9__["AppData"].permissions;
    }
    can(permission) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"].can(permission);
    }
    uploadFinished(event) {
        this.pictures.push(event);
        this.pictureIds.push(event.id);
    }
    triggerUpload(id) {
        if (id === this.uploadId)
            this.uploadService.upload(id);
    }
    getWarehouse() {
        this.goodsService.getWarehouseFor(this.selectedVendorGood.vendor_id).subscribe((warehouses) => {
            this.warehouses = warehouses;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router);
        });
    }
    selectionChanged(goodsDetail) {
        this.selectedAllGood = goodsDetail;
        if (this.selectedAllGood == null) {
            this.clearAdditionalFields();
        }
        else {
            this.editForm.patchValue({ all_good_id: this.selectedAllGood.id });
            this.properties = goodsDetail.properties_template;
        }
    }
    clearAdditionalFields() {
        this.selectedAllGood = null;
        this.editForm.patchValue({ all_good_id: '' });
        this.properties = [];
    }
    buildForm() {
        this.editForm = this.formBuilder.group({
            all_good_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            searchField: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            full_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)])],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)])],
            sku: [''],
            warehouse_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
        this.newGoodsForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            category_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            short_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    getDetailsForSelectedVendorGood() {
        this.pageLoading = true;
        this.goodsService.getGoodDetailByID(this.goodId, false).subscribe((good) => {
            console.log(good);
            this.updateNewGoodsDetail(good);
            this.getWarehouse();
            this.pageLoading = false;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router, true);
            this.pageLoading = false;
        });
    }
    updateNewGoodsDetail(good) {
        this.originalVendorGood = good;
        this.selectedGood = good;
        this.selectedVendorGood = good;
        this.properties = [];
        this.selectedProperties = [];
        this.selectedAllGood = this.originalVendorGood.detail;
        this.pictureIds = [];
        this.pictures = this.selectedGood.pictures || [];
        this.pictures.forEach(pix => this.pictureIds.push(pix.id));
        this.editForm.patchValue({
            all_good_id: this.selectedAllGood.id,
            searchField: this.selectedAllGood.name,
            full_description: this.originalVendorGood.full_description,
            price: this.originalVendorGood.price,
            sku: this.originalVendorGood.sku,
            warehouse_id: this.originalVendorGood.warehouse_id
        });
        let hasProperties = false;
        if (this.selectedGood.properties !== undefined && this.selectedGood.properties && this.selectedGood.properties.length) {
            hasProperties = true;
        }
        if (this.selectedAllGood.properties_template && this.selectedAllGood.properties_template.length) {
            this.selectedAllGood.properties_template.forEach((property) => {
                const d = {
                    name: property.name,
                    value: '',
                    type: property.type
                };
                const d2 = {
                    name: property.name,
                    value: '',
                    type: property.type
                };
                if (hasProperties) {
                    this.selectedGood.properties.forEach((prop) => {
                        if (property.name.toString() === prop.name.toString()) {
                            d.value = prop.value;
                            d2.value = prop.value;
                        }
                    });
                }
                this.properties.push(d);
                this.selectedProperties.push(d2);
            });
        }
    }
    getSearchResult() {
        if (this.timer != null) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.searching = true;
            this.errorMessage = '';
            this.goodsService.getIAllGoods(this.editForm.get('searchField').value).subscribe((returnedGoods) => {
                this.allGoods = returnedGoods;
                this.searching = false;
            }, (error) => {
                this.searching = false;
                this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router);
            });
        }, 400);
    }
    getCategories() {
        this.goodsService.getGoodsCategory().subscribe((categories) => this.categories = categories, (error) => _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router));
    }
    deselectSelectedGood() {
        this.clearAdditionalFields();
    }
    onSubmit(form) {
        const formData = form.value;
        formData.pictures = this.pictureIds;
        formData.properties = JSON.stringify({ data: this.properties });
        this.saving = true;
        this.errorMessage = '';
        const url = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + 'goods/' + this.goodId;
        this.goodsService.updateGood(url, formData).subscribe((res) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].succeeded(res.message);
            this.saving = false;
            this.updateNewGoodsDetail(res.data);
        }, (error) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router);
            this.saving = false;
        });
    }
    prepareToSaveNewGood() {
        const input = this.newGoodsForm.value;
        input.properties = JSON.stringify({ data: this.newProperties });
        return input;
    }
    createNewGoodRecord() {
        if (this.saving) {
            return;
        }
        const formModel = this.prepareToSaveNewGood();
        this.savingNewGoods = true;
        this.errorMessage = '';
        this.goodsService.addNewAllGood(formModel).subscribe((res) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].succeeded(res.message);
            this.newGoodsForm.reset();
            this.newProperties = [];
            // this.newGoodsForm.reset();
            // this.newProperties = [];
            this.savingNewGoods = false;
        }, (error) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router, true);
            this.savingNewGoods = false;
        });
    }
    addNewProperty() {
        this.newProperties.push({ name: '', type: '' });
    }
    removeProperty(property) {
        this.newProperties.splice(this.newProperties.indexOf(property), 1);
    }
    changeDisplay(type) {
        this.displayType = type;
    }
    addProperty(property) {
        this.properties.push(property);
    }
    onDelete(event) {
        event.preventDefault();
        this.goodsService.deleteGood(this.originalVendorGood.id).subscribe((status) => {
            if (status) {
                _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].succeeded('Goods has been deleted!');
                setTimeout(() => {
                    this.router.navigate(['app/goods']);
                }, 1500);
            }
            else {
                this.errorMessage = 'Unable to delete Product';
            }
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router);
        });
    }
    deleteGood() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Confirm action',
            text: 'Do you want to delete this record?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then((willDelete) => {
            if (willDelete.value) {
                this.goodsService.deleteGood(this.originalVendorGood.id).subscribe(deleted => {
                    _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].succeeded('Goods has been deleted!');
                    setTimeout(() => {
                        this.router.navigate(['/app/vendors/goods']);
                    }, 1500);
                }, (err) => {
                    _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router, true);
                });
            }
        });
    }
    showProperties(cCategory) {
        const list = [];
        if (cCategory) {
            this.categories.forEach(category => {
                if (category.id.toString() === cCategory.toString()) {
                    category.properties_template.forEach(t => {
                        list.push(t.name);
                    });
                }
            });
        }
        let val = '';
        if (list.length > 0) {
            val = '<small class="mt-2">Properties: <strong>' + list.join(', ') + '</strong></small>';
        }
        this.propertyVal = val;
    }
    deleteImage(image, index) {
        this.errorMessage = '';
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Confirmation',
            text: 'Do you want to remove the selected goods picture?<br>Note: Changes will be effected after the update button is clicked.',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(willDelete => {
            if (willDelete.value) {
                this.pictures.splice(index, 1);
                this.pictureIds.splice(index, 1);
            }
        });
    }
};
EditVendorGoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-vendor-goods',
        template: __webpack_require__(/*! raw-loader!./edit-vendor-goods.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor-goods/edit-vendor-goods/edit-vendor-goods.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./edit-vendor-goods.component.scss */ "./src/app/pages/vendor-goods/edit-vendor-goods/edit-vendor-goods.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_vendor_goods_service__WEBPACK_IMPORTED_MODULE_7__["VendorGoodsService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"]])
], EditVendorGoodsComponent);



/***/ }),

/***/ "./src/app/pages/vendor-goods/vendor-goods-list/vendor-goods-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vendor-goods/vendor-goods-list/vendor-goods-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  border: 1px solid #ddd;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded border */\n  padding: 5px;\n  /* Some padding */\n  width: 100px;\n  /* Set a small width */\n}\n\n/* Add a hover effect (blue shadow) */\n\nimg:hover {\n  box-shadow: #0DB28B;\n}\n\n.search-icon {\n  background: #0DB28B;\n  color: white;\n}\n\n.fab {\n  background: #0DB28B;\n  position: absolute;\n  top: 20px;\n  right: 10px;\n  z-index: 99;\n  padding: 20px;\n}\n\n.table td.text {\n  max-width: 200px;\n}\n\n.table td.text span {\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.spinner {\n  visibility: hidden;\n  position: absolute;\n  margin-left: 50%;\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVuZG9yLWdvb2RzL3ZlbmRvci1nb29kcy1saXN0L0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFx2ZW5kb3ItZ29vZHNcXHZlbmRvci1nb29kcy1saXN0XFx2ZW5kb3ItZ29vZHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmVuZG9yLWdvb2RzL3ZlbmRvci1nb29kcy1saXN0L3ZlbmRvci1nb29kcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFBd0IsZ0JBQUE7RUFDeEIsa0JBQUE7RUFBb0IsbUJBQUE7RUFDcEIsWUFBQTtFQUFjLGlCQUFBO0VBQ2QsWUFBQTtFQUFjLHNCQUFBO0FDS2hCOztBREZBLHFDQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNLRjs7QURGQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREZBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNLRjs7QURGQTtFQUNFLGdCQUFBO0FDS0Y7O0FESEU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNLSjs7QUREQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci1nb29kcy92ZW5kb3ItZ29vZHMtbGlzdC92ZW5kb3ItZ29vZHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogR3JheSBib3JkZXIgKi9cclxuICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgYm9yZGVyICovXHJcbiAgcGFkZGluZzogNXB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICB3aWR0aDogMTAwcHg7IC8qIFNldCBhIHNtYWxsIHdpZHRoICovXHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCAoYmx1ZSBzaGFkb3cpICovXHJcbmltZzpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogIzBEQjI4QjtcclxufVxyXG5cclxuLnNlYXJjaC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhYiB7XHJcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0ZC50ZXh0IHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG5cclxuICBzcGFuIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogNTAlXHJcbn1cclxuIiwiaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgLyogR3JheSBib3JkZXIgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvKiBSb3VuZGVkIGJvcmRlciAqL1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIFNvbWUgcGFkZGluZyAqL1xuICB3aWR0aDogMTAwcHg7XG4gIC8qIFNldCBhIHNtYWxsIHdpZHRoICovXG59XG5cbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCAoYmx1ZSBzaGFkb3cpICovXG5pbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAjMERCMjhCO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYWIge1xuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGFibGUgdGQudGV4dCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG4udGFibGUgdGQudGV4dCBzcGFuIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zcGlubmVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/vendor-goods/vendor-goods-list/vendor-goods-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/vendor-goods/vendor-goods-list/vendor-goods-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VendorGoodsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorGoodsListComponent", function() { return VendorGoodsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_vendor_goods_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/vendor-goods.service */ "./src/app/services/vendor-goods.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");










let VendorGoodsListComponent = class VendorGoodsListComponent {
    constructor(formBuilder, goodsService, route, router, elem, http, authService) {
        this.formBuilder = formBuilder;
        this.goodsService = goodsService;
        this.route = route;
        this.router = router;
        this.elem = elem;
        this.http = http;
        this.authService = authService;
        this.vendors = [];
        this.goods = [];
        this.categories = [];
        this.displayType = 'list';
        this.url = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url;
        this.selectedGoods = [];
        this.hasSomeItemsChecked = false;
        this.searching = false;
        this.loading = false;
        this.deleting = false;
        this.canViewVendorGoods = false;
    }
    get processing() {
        return this.searching || this.deleting || this.loading;
    }
    get isVendor() {
        return (_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].getAuthenticatedUser() || {}).r === _data__WEBPACK_IMPORTED_MODULE_9__["AppData"].roles.vendor;
    }
    get permissions() {
        return _data__WEBPACK_IMPORTED_MODULE_9__["AppData"].permissions;
    }
    can(permission) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"].can(permission);
    }
    ngOnInit() {
        this.buildForm();
        if (!this.isVendor) {
            this.loadVendors();
        }
        this.loadCategories();
        this.submitSearch();
    }
    loadCategories() {
        this.goodsService.getGoodsCategory().subscribe((categories) => {
            this.categories = categories;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router);
        });
    }
    loadVendors() {
        this.goodsService.getVendors().subscribe((vendors) => {
            this.vendors = vendors;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router);
        });
    }
    submitSearch() {
        const searchText = this.searchForm.get('searchField').value;
        const fromDate = this.searchForm.get('fromDate').value;
        const toDate = this.searchForm.get('toDate').value;
        const category = this.searchForm.get('category').value;
        let vendor = '';
        if (!this.isVendor) {
            vendor = this.searchForm.get('vendor').value;
        }
        let param = '';
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
        if (!this.isVendor && vendor) {
            if (param) {
                param += '&';
            }
            param += 'vendor=' + vendor;
        }
        if (category) {
            if (param) {
                param += '&';
            }
            param += 'category=' + category;
        }
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
        this.searchGoods('', param);
    }
    searchGoods(url, params) {
        this.searching = true;
        this.errorMessage = '';
        this.goods = [];
        this.goodsService.searchGoods(url, params).subscribe((data) => {
            const arr = ((typeof data.data) !== 'undefined' && data.data.length > 0);
            if (arr) {
                data.data.forEach(d => d.selected = false);
            }
            this.goods = data.data;
            this.current_page = data.current_page;
            this.from = data.from;
            this.last_page = data.last_page;
            this.next_page_url = data.next_page_url;
            this.path = data.path;
            this.prev_page_url = data.prev_page_url;
            this.per_page = data.per_page;
            this.to = data.to;
            this.total = data.total;
            this.searching = false;
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router);
            this.searching = false;
        });
    }
    buildForm() {
        this.searchForm = this.formBuilder.group({
            searchField: [''],
            fromDate: [''],
            toDate: [''],
            vendor: [''],
            category: ['']
        });
    }
    deleteSingleGood(good, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Confirm delete',
            text: 'Do you want to delete this goods item?',
            type: 'question',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete',
            showConfirmButton: true
        }).then(willDelete => {
            if (willDelete.value) {
                this.deleting = true;
                this.goodsService.deleteGood(good.id).subscribe((response) => {
                    this.goods.splice(this.goods.indexOf(good), 1);
                    this.deleting = false;
                }, (err) => {
                    _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router, true);
                    this.deleting = false;
                });
            }
        });
    }
    updateSelectionChanged() {
        let hasSomeItemsChecked = 0;
        this.goods.forEach(x => {
            if (x.selected) {
                hasSomeItemsChecked++;
            }
        });
        this.hasSomeItemsChecked = hasSomeItemsChecked > 1;
    }
    checkAll(ev) {
        this.goods.forEach(x => x.selected = ev.target.checked);
        this.updateSelectionChanged();
    }
    isAllChecked() {
        return this.goods.every(_ => _.selected);
    }
    toggle(type) {
        this.displayType = type;
    }
    deleteSelectedGoods() {
        this.selectedGoods = this.goods.filter(_ => _.selected);
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
        }).then(willDelete => {
            if (willDelete.value) {
                const selectedItemIds = [];
                for (const item of this.selectedGoods) {
                    selectedItemIds.push(item.id);
                }
                this.errorMessage = '';
                this.deleting = true;
                this.goodsService.deleteGoods(selectedItemIds).subscribe(data => {
                    for (const item of this.selectedGoods) {
                        this.selectedGoods.splice(this.selectedGoods.indexOf(item), 1);
                    }
                    this.deleting = false;
                }, (err) => {
                    this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router);
                    this.deleting = false;
                });
            }
        });
    }
    getTextFromDate(date) {
        if (typeof date === 'object') {
            return date.year + '-' + date.month + '-' + date.day;
        }
        return date.toString();
    }
    getBatchGood() {
        const options = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].getAuthHeaderOption();
        const url = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + 'goods/import-sample/excel';
        return this.http.get(url, options);
    }
};
VendorGoodsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-goods-list',
        template: __webpack_require__(/*! raw-loader!./vendor-goods-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor-goods/vendor-goods-list/vendor-goods-list.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./vendor-goods-list.component.scss */ "./src/app/pages/vendor-goods/vendor-goods-list/vendor-goods-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _services_vendor_goods_service__WEBPACK_IMPORTED_MODULE_8__["VendorGoodsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], VendorGoodsListComponent);



/***/ }),

/***/ "./src/app/pages/vendor-goods/vendor-goods.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/vendor-goods/vendor-goods.module.ts ***!
  \***********************************************************/
/*! exports provided: routes, VendorGoodsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorGoodsModule", function() { return VendorGoodsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _vendor_goods_list_vendor_goods_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor-goods-list/vendor-goods-list.component */ "./src/app/pages/vendor-goods/vendor-goods-list/vendor-goods-list.component.ts");
/* harmony import */ var _create_vendor_goods_create_vendor_goods_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-vendor-goods/create-vendor-goods.component */ "./src/app/pages/vendor-goods/create-vendor-goods/create-vendor-goods.component.ts");
/* harmony import */ var _edit_vendor_goods_edit_vendor_goods_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-vendor-goods/edit-vendor-goods.component */ "./src/app/pages/vendor-goods/edit-vendor-goods/edit-vendor-goods.component.ts");
/* harmony import */ var _view_vendor_goods_view_vendor_goods_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-vendor-goods/view-vendor-goods.component */ "./src/app/pages/vendor-goods/view-vendor-goods/view-vendor-goods.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_upload_upload_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/upload/upload.module */ "./src/app/shared/upload/upload.module.ts");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/loader/loader.module */ "./src/app/shared/loader/loader.module.ts");
/* harmony import */ var _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _shared_survey_survey_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/survey/survey.module */ "./src/app/shared/survey/survey.module.ts");
/* harmony import */ var _shared_batch_upload_batch_upload_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/batch-upload/batch-upload.module */ "./src/app/shared/batch-upload/batch-upload.module.ts");
















const routes = [
    { path: 'create', component: _create_vendor_goods_create_vendor_goods_component__WEBPACK_IMPORTED_MODULE_4__["CreateVendorGoodsComponent"] },
    { path: 'edit/:id', component: _edit_vendor_goods_edit_vendor_goods_component__WEBPACK_IMPORTED_MODULE_5__["EditVendorGoodsComponent"] },
    { path: 'view/:id', component: _view_vendor_goods_view_vendor_goods_component__WEBPACK_IMPORTED_MODULE_6__["ViewVendorGoodsComponent"] },
    { path: '', redirectTo: '/app/vendors/goods/list', pathMatch: 'full' },
    { path: 'list', component: _vendor_goods_list_vendor_goods_list_component__WEBPACK_IMPORTED_MODULE_3__["VendorGoodsListComponent"] },
];
let VendorGoodsModule = class VendorGoodsModule {
};
VendorGoodsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _vendor_goods_list_vendor_goods_list_component__WEBPACK_IMPORTED_MODULE_3__["VendorGoodsListComponent"],
            _create_vendor_goods_create_vendor_goods_component__WEBPACK_IMPORTED_MODULE_4__["CreateVendorGoodsComponent"],
            _edit_vendor_goods_edit_vendor_goods_component__WEBPACK_IMPORTED_MODULE_5__["EditVendorGoodsComponent"],
            _view_vendor_goods_view_vendor_goods_component__WEBPACK_IMPORTED_MODULE_6__["ViewVendorGoodsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _shared_custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_12__["CustomErrorModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_11__["LoaderModule"],
            _shared_upload_upload_module__WEBPACK_IMPORTED_MODULE_10__["UploadModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_13__["NgxChartsModule"],
            _shared_survey_survey_module__WEBPACK_IMPORTED_MODULE_14__["SurveyModule"], _shared_batch_upload_batch_upload_module__WEBPACK_IMPORTED_MODULE_15__["BatchUploadModule"]
        ]
    })
], VendorGoodsModule);



/***/ }),

/***/ "./src/app/pages/vendor-goods/view-vendor-goods/view-vendor-goods.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vendor-goods/view-vendor-goods/view-vendor-goods.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m_desc {\n  color: #008800;\n  font-size: 1em;\n  line-height: 1.8em;\n  font-weight: 500;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.imgwrapper {\n  width: 100%;\n}\n\n.imgwrapper img {\n  max-width: 780px;\n}\n\n.etalage_zoom_area div {\n  width: 350px !important;\n  height: 350px !important;\n}\n\n.center {\n  width: 150px;\n  margin: 40px auto;\n}\n\n.checked {\n  color: orange;\n}\n\n.carousel {\n  overflow: hidden;\n  width: 100%;\n}\n\n.slides {\n  list-style: none;\n  position: relative;\n  width: 300%;\n  /* Number of panes * 100% */\n  overflow: hidden;\n  /* Clear floats */\n  /* Slide effect Animations*/\n  -webkit-animation: carousel 30s infinite;\n  animation: carousel 30s infinite;\n}\n\n.slides > li {\n  position: relative;\n  float: left;\n  width: 20%;\n  /* 100 / number of panes */\n}\n\n.carousel img {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.carousel h2 {\n  margin-bottom: 0;\n  font-size: 1em;\n  padding: 1.5em 0.5em 1.5em 0.5em;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  text-align: center;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  text-transform: uppercase;\n}\n\n@-webkit-keyframes carousel {\n  0% {\n    left: -5%;\n  }\n  11% {\n    left: -5%;\n  }\n  12.5% {\n    left: -105%;\n  }\n  23.5% {\n    left: -105%;\n  }\n  25% {\n    left: -205%;\n  }\n  36% {\n    left: -205%;\n  }\n  37.5% {\n    left: -305%;\n  }\n  48.5% {\n    left: -305%;\n  }\n  50% {\n    left: -405%;\n  }\n  61% {\n    left: -405%;\n  }\n  62.5% {\n    left: -305%;\n  }\n  73.5% {\n    left: -305%;\n  }\n  75% {\n    left: -205%;\n  }\n  86% {\n    left: -205%;\n  }\n  87.5% {\n    left: -105%;\n  }\n  98.5% {\n    left: -105%;\n  }\n  100% {\n    left: -5%;\n  }\n}\n\n@keyframes carousel {\n  0% {\n    left: -5%;\n  }\n  11% {\n    left: -5%;\n  }\n  12.5% {\n    left: -105%;\n  }\n  23.5% {\n    left: -105%;\n  }\n  25% {\n    left: -205%;\n  }\n  36% {\n    left: -205%;\n  }\n  37.5% {\n    left: -305%;\n  }\n  48.5% {\n    left: -305%;\n  }\n  50% {\n    left: -405%;\n  }\n  61% {\n    left: -405%;\n  }\n  62.5% {\n    left: -305%;\n  }\n  73.5% {\n    left: -305%;\n  }\n  75% {\n    left: -205%;\n  }\n  86% {\n    left: -205%;\n  }\n  87.5% {\n    left: -105%;\n  }\n  98.5% {\n    left: -105%;\n  }\n  100% {\n    left: -5%;\n  }\n}\n\n.chart {\n  height: 50%;\n  width: 50%;\n}\n\n.profile-info {\n  background: #0DB28B;\n}\n\n.profile-info h3 {\n  color: white;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.profile-info .card {\n  margin-top: 20px;\n  height: 80%;\n}\n\n.profile-info .card .media .media-body h6 {\n  font-size: 16px;\n}\n\n.profile-info .action-box {\n  border-radius: 3px;\n  border: 2px dashed #ECEEEF;\n  padding: 10px;\n  align-items: center;\n}\n\n.profile-info .action-box button {\n  cursor: pointer;\n}\n\n.profile-info .action-box h3 {\n  color: #333333;\n  text-align: left;\n}\n\n.profile-info .form-holder {\n  background: white !important;\n}\n\n.submit-btn {\n  padding: 15px 20px;\n  background: #0DB28B;\n  color: white;\n  font-weight: bolder;\n}\n\n.asterisk {\n  font-size: 12px;\n  color: red;\n}\n\n.bg-white {\n  color: #fff;\n}\n\n.tmodal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.tmodal-dialog {\n  position: fixed;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n}\n\n.tmodal-content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border: 2px solid #0DB28B;\n  border-radius: 0;\n  box-shadow: none;\n}\n\n.tmodal-header {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 50px;\n  padding: 10px;\n  background: #0DB28B;\n  border: 0;\n}\n\n.tmodal-title {\n  font-weight: 300;\n  font-size: 2em;\n  color: #fff;\n  line-height: 30px;\n}\n\n.tmodal-body {\n  position: absolute;\n  top: 50px;\n  bottom: 60px;\n  width: 100%;\n  font-weight: 300;\n  overflow: auto;\n}\n\n.tmodal-footer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 60px;\n  padding: 10px;\n  background: #f1f3f5;\n}\n\nth {\n  color: #000;\n  font-weight: bold;\n}\n\ntd {\n  text-align: left !important;\n}\n\n.width-30 {\n  width: 150px;\n}\n\n.markup-container {\n  position: absolute;\n  right: 30px;\n  top: 40px;\n}\n\n@media (max-width: 575px) {\n  .markup-container {\n    position: relative;\n  }\n}\n\n.input-group input {\n  border-width: 1px !important;\n}\n\n.c-widget-controls .btn {\n  margin-top: -5px !important;\n}\n\n.c-widget-controls .btn, .c-widget-controls input {\n  border-radius: 0 !important;\n}\n\n.extra-small-btn {\n  font-size: 11px !important;\n  padding: 3px 7px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVuZG9yLWdvb2RzL3ZpZXctdmVuZG9yLWdvb2RzL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcUHJvamVjdHNcXElsb3IgdGVjaG5vbG9naWVzIGx0ZFxcaWxvci1wYy13ZWIvc3JjXFxhcHBcXHBhZ2VzXFx2ZW5kb3ItZ29vZHNcXHZpZXctdmVuZG9yLWdvb2RzXFx2aWV3LXZlbmRvci1nb29kcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmVuZG9yLWdvb2RzL3ZpZXctdmVuZG9yLWdvb2RzL3ZpZXctdmVuZG9yLWdvb2RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQWEsMkJBQUE7RUFDYixnQkFBQTtFQUFrQixpQkFBQTtFQUNsQiwyQkFBQTtFQUVBLHdDQUFBO0VBQ0EsZ0NBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFBWSwwQkFBQTtBQ0dkOztBREFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQ0dGOztBREFBO0VBQ0U7SUFDRSxTQUFBO0VDR0Y7RUREQTtJQUNFLFNBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0VEREE7SUFDRSxXQUFBO0VDR0Y7RUREQTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0VEREE7SUFDRSxXQUFBO0VDR0Y7RUREQTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0VEREE7SUFDRSxXQUFBO0VDR0Y7RUREQTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0VEREE7SUFDRSxXQUFBO0VDR0Y7RUREQTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0VEREE7SUFDRSxXQUFBO0VDR0Y7RUREQTtJQUNFLFNBQUE7RUNHRjtBQUNGOztBRHREQTtFQUNFO0lBQ0UsU0FBQTtFQ0dGO0VEREE7SUFDRSxTQUFBO0VDR0Y7RUREQTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0VEREE7SUFDRSxXQUFBO0VDR0Y7RUREQTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0VEREE7SUFDRSxXQUFBO0VDR0Y7RUREQTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0VEREE7SUFDRSxXQUFBO0VDR0Y7RUREQTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0VEREE7SUFDRSxXQUFBO0VDR0Y7RUREQTtJQUNFLFdBQUE7RUNHRjtFRERBO0lBQ0UsV0FBQTtFQ0dGO0VEREE7SUFDRSxTQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUVFLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENNO0VBQ0UsZUFBQTtBQ0NSOztBRElFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBRElJO0VBQ0UsZUFBQTtBQ0ZOOztBREtJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDSE47O0FET0U7RUFDRSw0QkFBQTtBQ0xKOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUNORjs7QURTQTtFQUNFLFdBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNORjs7QURTQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDTkY7O0FEU0E7RUFDRSwyQkFBQTtBQ05GOztBRFNBO0VBQ0UsWUFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ05GOztBRFNBO0VBQ0U7SUFDRSxrQkFBQTtFQ05GO0FBQ0Y7O0FEVUU7RUFDRSw0QkFBQTtBQ1JKOztBRGFFO0VBQ0UsMkJBQUE7QUNWSjs7QURhRTtFQUNFLDJCQUFBO0FDWEo7O0FEZUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZW5kb3ItZ29vZHMvdmlldy12ZW5kb3ItZ29vZHMvdmlldy12ZW5kb3ItZ29vZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubV9kZXNjIHtcclxuICBjb2xvcjogIzAwODgwMDtcclxuICBmb250LXNpemU6IDEuMGVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5pbWd3cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltZ3dyYXBwZXIgaW1nIHtcclxuICBtYXgtd2lkdGg6IDc4MHB4O1xyXG59XHJcblxyXG4uZXRhbGFnZV96b29tX2FyZWEgZGl2IHtcclxuICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuXHJcbn1cclxuXHJcbi5jaGVja2VkIHtcclxuICBjb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZXMge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMDAlOyAvKiBOdW1iZXIgb2YgcGFuZXMgKiAxMDAlICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogQ2xlYXIgZmxvYXRzICovXHJcbiAgLyogU2xpZGUgZWZmZWN0IEFuaW1hdGlvbnMqL1xyXG4gIC1tb3otYW5pbWF0aW9uOiBjYXJvdXNlbCAzMHMgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGNhcm91c2VsIDMwcyBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGNhcm91c2VsIDMwcyBpbmZpbml0ZTtcclxufVxyXG5cclxuLnNsaWRlcyA+IGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTsgLyogMTAwIC8gbnVtYmVyIG9mIHBhbmVzICovXHJcbn1cclxuXHJcbi5jYXJvdXNlbCBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcm91c2VsIGgyIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmc6IDEuNWVtIDAuNWVtIDEuNWVtIDAuNWVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcm91c2VsIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtNSU7XHJcbiAgfVxyXG4gIDExJSB7XHJcbiAgICBsZWZ0OiAtNSU7XHJcbiAgfVxyXG4gIDEyLjUlIHtcclxuICAgIGxlZnQ6IC0xMDUlO1xyXG4gIH1cclxuICAyMy41JSB7XHJcbiAgICBsZWZ0OiAtMTA1JTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGxlZnQ6IC0yMDUlO1xyXG4gIH1cclxuICAzNiUge1xyXG4gICAgbGVmdDogLTIwNSU7XHJcbiAgfVxyXG4gIDM3LjUlIHtcclxuICAgIGxlZnQ6IC0zMDUlO1xyXG4gIH1cclxuICA0OC41JSB7XHJcbiAgICBsZWZ0OiAtMzA1JTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGxlZnQ6IC00MDUlO1xyXG4gIH1cclxuICA2MSUge1xyXG4gICAgbGVmdDogLTQwNSU7XHJcbiAgfVxyXG4gIDYyLjUlIHtcclxuICAgIGxlZnQ6IC0zMDUlO1xyXG4gIH1cclxuICA3My41JSB7XHJcbiAgICBsZWZ0OiAtMzA1JTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIGxlZnQ6IC0yMDUlO1xyXG4gIH1cclxuICA4NiUge1xyXG4gICAgbGVmdDogLTIwNSU7XHJcbiAgfVxyXG4gIDg3LjUlIHtcclxuICAgIGxlZnQ6IC0xMDUlO1xyXG4gIH1cclxuICA5OC41JSB7XHJcbiAgICBsZWZ0OiAtMTA1JTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBsZWZ0OiAtNSU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhcnQge1xyXG5cclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiAjMERCMjhCO1xyXG4gIGgzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuXHJcbiAgICAubWVkaWEge1xyXG4gICAgICAubWVkaWEtYm9keSBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI0VDRUVFRjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ob2xkZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmFzdGVyaXNrIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJnLXdoaXRlIHtcclxuICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4udG1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50bW9kYWwtZGlhbG9nIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udG1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzBEQjI4QjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi50bW9kYWwtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi50bW9kYWwtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi50bW9kYWwtYm9keSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTBweDtcclxuICBib3R0b206IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRtb2RhbC1mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjFmM2Y1O1xyXG59XHJcblxyXG50aCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0zMCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ubWFya3VwLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIHRvcDogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLm1hcmt1cC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmMtd2lkZ2V0LWNvbnRyb2xzIHtcclxuICAuYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5idG4sIGlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5leHRyYS1zbWFsbC1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDNweCA3cHggIWltcG9ydGFudDtcclxufVxyXG4iLCIubV9kZXNjIHtcbiAgY29sb3I6ICMwMDg4MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaW1nd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nd3JhcHBlciBpbWcge1xuICBtYXgtd2lkdGg6IDc4MHB4O1xufVxuXG4uZXRhbGFnZV96b29tX2FyZWEgZGl2IHtcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzUwcHggIWltcG9ydGFudDtcbn1cblxuLmNlbnRlciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG59XG5cbi5jaGVja2VkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmNhcm91c2VsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGlkZXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDAlO1xuICAvKiBOdW1iZXIgb2YgcGFuZXMgKiAxMDAlICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIENsZWFyIGZsb2F0cyAqL1xuICAvKiBTbGlkZSBlZmZlY3QgQW5pbWF0aW9ucyovXG4gIC1tb3otYW5pbWF0aW9uOiBjYXJvdXNlbCAzMHMgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjYXJvdXNlbCAzMHMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogY2Fyb3VzZWwgMzBzIGluZmluaXRlO1xufVxuXG4uc2xpZGVzID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAlO1xuICAvKiAxMDAgLyBudW1iZXIgb2YgcGFuZXMgKi9cbn1cblxuLmNhcm91c2VsIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2Fyb3VzZWwgaDIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMS41ZW0gMC41ZW0gMS41ZW0gMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQGtleWZyYW1lcyBjYXJvdXNlbCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtNSU7XG4gIH1cbiAgMTElIHtcbiAgICBsZWZ0OiAtNSU7XG4gIH1cbiAgMTIuNSUge1xuICAgIGxlZnQ6IC0xMDUlO1xuICB9XG4gIDIzLjUlIHtcbiAgICBsZWZ0OiAtMTA1JTtcbiAgfVxuICAyNSUge1xuICAgIGxlZnQ6IC0yMDUlO1xuICB9XG4gIDM2JSB7XG4gICAgbGVmdDogLTIwNSU7XG4gIH1cbiAgMzcuNSUge1xuICAgIGxlZnQ6IC0zMDUlO1xuICB9XG4gIDQ4LjUlIHtcbiAgICBsZWZ0OiAtMzA1JTtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IC00MDUlO1xuICB9XG4gIDYxJSB7XG4gICAgbGVmdDogLTQwNSU7XG4gIH1cbiAgNjIuNSUge1xuICAgIGxlZnQ6IC0zMDUlO1xuICB9XG4gIDczLjUlIHtcbiAgICBsZWZ0OiAtMzA1JTtcbiAgfVxuICA3NSUge1xuICAgIGxlZnQ6IC0yMDUlO1xuICB9XG4gIDg2JSB7XG4gICAgbGVmdDogLTIwNSU7XG4gIH1cbiAgODcuNSUge1xuICAgIGxlZnQ6IC0xMDUlO1xuICB9XG4gIDk4LjUlIHtcbiAgICBsZWZ0OiAtMTA1JTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtNSU7XG4gIH1cbn1cbi5jaGFydCB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNTAlO1xufVxuXG4ucHJvZmlsZS1pbmZvIHtcbiAgYmFja2dyb3VuZDogIzBEQjI4Qjtcbn1cbi5wcm9maWxlLWluZm8gaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wcm9maWxlLWluZm8gLmNhcmQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDgwJTtcbn1cbi5wcm9maWxlLWluZm8gLmNhcmQgLm1lZGlhIC5tZWRpYS1ib2R5IGg2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnByb2ZpbGUtaW5mbyAuYWN0aW9uLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNFQ0VFRUY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbmZvIC5hY3Rpb24tYm94IGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9maWxlLWluZm8gLmFjdGlvbi1ib3ggaDMge1xuICBjb2xvcjogIzMzMzMzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wcm9maWxlLWluZm8gLmZvcm0taG9sZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwREIyOEI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmFzdGVyaXNrIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4uYmctd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRtb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udG1vZGFsLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udG1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzBEQjI4QjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnRtb2RhbC1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzBEQjI4QjtcbiAgYm9yZGVyOiAwO1xufVxuXG4udG1vZGFsLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLnRtb2RhbC1ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGJvdHRvbTogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udG1vZGFsLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmM2Y1O1xufVxuXG50aCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi53aWR0aC0zMCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLm1hcmt1cC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB0b3A6IDQwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAubWFya3VwLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG4uaW5wdXQtZ3JvdXAgaW5wdXQge1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xufVxuXG4uYy13aWRnZXQtY29udHJvbHMgLmJ0biB7XG4gIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbn1cbi5jLXdpZGdldC1jb250cm9scyAuYnRuLCAuYy13aWRnZXQtY29udHJvbHMgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5leHRyYS1zbWFsbC1idG4ge1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDdweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/vendor-goods/view-vendor-goods/view-vendor-goods.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/vendor-goods/view-vendor-goods/view-vendor-goods.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewVendorGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVendorGoodsComponent", function() { return ViewVendorGoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _services_vendor_goods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/vendor-goods.service */ "./src/app/services/vendor-goods.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_market_survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/market-survey.service */ "./src/app/services/market-survey.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data */ "./src/app/data.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");









let ViewVendorGoodsComponent = class ViewVendorGoodsComponent {
    constructor(goodsService, route, router, formBuilder, surveyService) {
        this.goodsService = goodsService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.surveyService = surveyService;
        this.multi = false;
        this.good = null;
        this.pictures = [];
        this.survey = [];
        // properties concerned with survey
        this.hasItemInSurvey = false;
        this.hasExactProductInSurvey = false;
        this.fromDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.toDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.view = [1000, 750];
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = true;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Date/Time';
        this.showYAxisLabel = true;
        this.autoScale = false;
        this.yAxisLabel = 'Price (N)';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.searchingTrend = false;
    }
    get isVendor() {
        return (_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].getAuthenticatedUser() || {}).r === _data__WEBPACK_IMPORTED_MODULE_7__["AppData"].roles.vendor;
    }
    get permissions() {
        return _data__WEBPACK_IMPORTED_MODULE_7__["AppData"].permissions;
    }
    can(permission) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"].can(permission);
    }
    ngOnInit() {
        this.markUpForm = this.formBuilder.group({
            markUpField: ['5']
        });
        const id = this.route.snapshot.params['id'];
        this.goodId = id;
        this.url = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url;
        this.getGood(id);
    }
    backClicked() {
        this.router.navigate(['/app/vendors/goods']);
    }
    get currentMarketSurvey() {
        return this.surveyService.getCurrentLocalSurvey();
    }
    getGood(id) {
        this.loading = true;
        this.goodsService.getGoodDetailByID(id, true).subscribe((good) => {
            this.good = good.good;
            this.loading = false;
            this.pictures = [];
            if (this.good.pictures && this.good.pictures.length) {
                this.pictures = this.good.pictures;
            }
            if (good.hasOwnProperty('trend')) {
                this.multi = good.trend;
            }
            this.updateGoodsSurveyOption();
        }, (err) => {
            this.errorMessage = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router);
            this.loading = false;
        });
    }
    removeFromSurvey() {
        this.surveyService.removeFromCurrentSurvey(this.good);
        this.updateGoodsSurveyOption();
    }
    replaceInSurvey() {
        this.addToSurvey();
    }
    addToSurvey() {
        let markup = this.markUpForm.get('markUpField').value;
        markup = parseInt(markup, 10);
        if (isNaN(markup)) {
            return;
        }
        this.surveyService.addToCurrentSurvey(this.good, markup);
        this.updateGoodsSurveyOption();
    }
    carousel(pictures) {
        document.querySelector('.bigSource').setAttribute('src', pictures);
    }
    updateGoodsSurveyOption() {
        this.hasExactProductInSurvey = this.surveyService.hasProductInCurrentSurvey(this.good.id);
        this.hasItemInSurvey = this.hasExactProductInSurvey || this.surveyService.hasItemInCurrentSurvey(this.good.all_good_id);
    }
    updateInSurvey(event) {
        this.updateGoodsSurveyOption();
    }
    customXAxisFormat(val) {
        const date = new Date((val * 1000));
        const iso = date.toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2})/);
        return (iso[1] + ' ' + iso[2]);
    }
    customYAxisFormat(val) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        return (formatter.format(val).split('NGN'))[1];
    }
    searchTrend(from, to) {
        this.searchingTrend = true;
        this.multi = [];
        this.goodsService.searchTrend(this.goodId, from, to).subscribe((good) => {
            this.searchingTrend = false;
            if (good.hasOwnProperty('trend')) {
                this.multi = good.trend;
            }
        }, (err) => {
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(err, this.router, true);
            this.searchingTrend = false;
        });
    }
};
ViewVendorGoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-vendor-goods',
        template: __webpack_require__(/*! raw-loader!./view-vendor-goods.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor-goods/view-vendor-goods/view-vendor-goods.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./view-vendor-goods.component.scss */ "./src/app/pages/vendor-goods/view-vendor-goods/view-vendor-goods.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_vendor_goods_service__WEBPACK_IMPORTED_MODULE_3__["VendorGoodsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_market_survey_service__WEBPACK_IMPORTED_MODULE_6__["MarketSurveyService"]])
], ViewVendorGoodsComponent);



/***/ }),

/***/ "./src/app/shared/batch-upload/batch-upload.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/batch-upload/batch-upload.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYXRjaC11cGxvYWQvYmF0Y2gtdXBsb2FkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/batch-upload/batch-upload.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/batch-upload/batch-upload.component.ts ***!
  \***************************************************************/
/*! exports provided: BatchUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchUploadComponent", function() { return BatchUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);






let BatchUploadComponent = class BatchUploadComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.fileName = '';
        this.uploading = { status: false, downloading: false };
        this.loadingGoods = { status: false, error: '' };
        this.selectedFile = null;
        this.selectedType = 'goods';
        this.fileUrl = null;
        this.goods = [];
    }
    ngOnInit() {
        this.loadGoods();
    }
    processFile(event) {
        const oldEvent = event;
        const files = event.target.files;
        this.fileName = '';
        this.selectedFile = null;
        if (files.length === 0) {
            return;
        }
        const fileToUpload = files[0];
        this.fileName = fileToUpload.name;
        this.selectedFile = fileToUpload;
    }
    triggerUpload() {
        document.getElementById('file-select').click();
    }
    loadGoods() {
        this.loadingGoods.status = true;
        this.loadingGoods.error = '';
        this.goods = [];
        this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + 'goods/batch-upload/prices', _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].getAuthHeaderOption()).subscribe((response) => {
            this.goods = response;
            this.loadingGoods.status = false;
        }, (error) => {
            this.loadingGoods.status = false;
            this.loadingGoods.error = _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router, false);
        });
    }
    downloadSample() {
        this.uploading.downloading = true;
        this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + 'goods/batch-upload/sample', {
            type: this.selectedType
        }, {
            headers: _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].getUploadHeader(),
            responseType: 'blob'
        }).subscribe((response) => {
            const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob);
            this.uploading.downloading = false;
        }, (error) => {
            this.uploading.downloading = false;
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router, true);
        });
    }
    doUpload() {
        const fileToUpload = this.selectedFile;
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        formData.append('type', this.selectedType);
        if (this.selectedType === 'price') {
            formData.append('goods', this.selectedGoods.join(','));
        }
        this.uploading.status = true;
        this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + 'goods/batch-upload', formData, { reportProgress: true, observe: 'events', headers: _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].getUploadHeader() }).subscribe((evt) => {
            if (evt.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                this.progress = Math.round(100 * evt.loaded / evt.total);
            }
            else if (evt.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response) {
                const response = evt.body;
                console.log(evt);
                _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].succeeded(response.message, 'Upload successful');
                this.uploading.status = false;
            }
        }, (error) => {
            this.uploading.status = false;
            _app_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].handleError(error, this.router, true);
        });
    }
    get selectedGoods() {
        const data = [];
        this.goods.filter(e => e.selected).forEach(e => data.push(e.id));
        return data;
    }
};
BatchUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-batch-upload',
        template: __webpack_require__(/*! raw-loader!./batch-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/batch-upload/batch-upload.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./batch-upload.component.scss */ "./src/app/shared/batch-upload/batch-upload.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], BatchUploadComponent);



/***/ }),

/***/ "./src/app/shared/batch-upload/batch-upload.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/batch-upload/batch-upload.module.ts ***!
  \************************************************************/
/*! exports provided: BatchUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchUploadModule", function() { return BatchUploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _batch_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batch-upload.component */ "./src/app/shared/batch-upload/batch-upload.component.ts");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.module */ "./src/app/shared/loader/loader.module.ts");
/* harmony import */ var _custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-error/custom-error.module */ "./src/app/shared/custom-error/custom-error.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let BatchUploadModule = class BatchUploadModule {
};
BatchUploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_batch_upload_component__WEBPACK_IMPORTED_MODULE_3__["BatchUploadComponent"]],
        exports: [_batch_upload_component__WEBPACK_IMPORTED_MODULE_3__["BatchUploadComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
            _custom_error_custom_error_module__WEBPACK_IMPORTED_MODULE_5__["CustomErrorModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]
    })
], BatchUploadModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-vendor-goods-vendor-goods-module-es2015.js.map