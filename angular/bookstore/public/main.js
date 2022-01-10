(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Authorlist/authorlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/Authorlist/authorlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"wow fadeInUp\">\n        <div class=\"module block-featured-author module-block\">\n            <div class=\"module-heading\">\n                <h2 class=\"module-title\">Featured Authors</h2>\n            </div>\n            <div class=\"module-body\" id=\"featured-author\">\n                <div class=\"row\">\n                    <div class=\"authors\">\n                        <div class=\"col-md-3\" *ngFor=\"let author of authors\">\n                            <div class=\"item item-author-block author\" style=\"text-align: center\">\n                                <a routerLink=\"/search\">\n                                    <div class=\"author-dp\">\n                                        <img alt=\"\" src={{author.imageUrl}}>\n                                    </div>\n                                </a>\n                                <div class=\"author-details\">\n                                    <h3 class=\"author-name\">\n                                        <a routerLink=\"/search\">\n                                            {{author.title}}\n                                        </a>\n                                    </h3>\n                                    <!--<blockquote class=\"author-testimonial\">{{author.testimonial}}</blockquote>-->\n                                    <a routerLink=\"/search\" class=\"btn btn-primary btn-view-books\">\n                                        View books\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Authorlist/authorlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Authorlist/authorlist.component.ts ***!
  \****************************************************/
/*! exports provided: AuthorlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorlistComponent", function() { return AuthorlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book.service */ "./src/app/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorlistComponent = /** @class */ (function () {
    function AuthorlistComponent(bookService) {
        this.bookService = bookService;
    }
    AuthorlistComponent.prototype.ngOnInit = function () {
        this.getAuthors();
    };
    AuthorlistComponent.prototype.getAuthors = function () {
        var _this = this;
        this.bookService.getAuthors()
            .subscribe(function (authors) {
            _this.authors = Object.values(authors);
            _this.authors = _this.authors.slice(0, Math.min(4, _this.authors.length));
        });
    };
    AuthorlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authorlist',
            template: __webpack_require__(/*! ./authorlist.component.html */ "./src/app/Authorlist/authorlist.component.html")
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], AuthorlistComponent);
    return AuthorlistComponent;
}());



/***/ }),

/***/ "./src/app/Bookcarousel/bookcarousel.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Bookcarousel/bookcarousel.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"wow fadeInUp\">\n        <div class=\"module block-new-books module-block\">\n            <div class=\"module-heading\">\n                <h2 class=\"module-title\">New Books</h2>\n                <p class=\"module-subtitle\">Do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n            </div>\n\n            <div class=\"module-body\">\n                <div class=\"books\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\" *ngFor=\"let book of books\">\n                            <app-book [book]=\"book\" [width]=\"255\" [height]=\"261\"></app-book>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Bookcarousel/bookcarousel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Bookcarousel/bookcarousel.component.ts ***!
  \********************************************************/
/*! exports provided: BookcarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookcarouselComponent", function() { return BookcarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book.service */ "./src/app/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookcarouselComponent = /** @class */ (function () {
    function BookcarouselComponent(bookService) {
        this.bookService = bookService;
    }
    BookcarouselComponent.prototype.ngOnInit = function () {
        if (!this.books) {
            this.getBooks();
        }
    };
    BookcarouselComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) {
            _this.books = Object.values(books);
            _this.books = _this.books.slice(0, Math.min(4, _this.books.length));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookcarouselComponent.prototype, "books", void 0);
    BookcarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookcarousel',
            template: __webpack_require__(/*! ./bookcarousel.component.html */ "./src/app/Bookcarousel/bookcarousel.component.html")
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], BookcarouselComponent);
    return BookcarouselComponent;
}());



/***/ }),

/***/ "./src/app/Bookdetail/book-detail.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Bookdetail/book-detail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"book\" class=\"book-detail page\">\n    <div class=\"container\">\n        <div class=\"primary-block clearfix\">\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"book-cover book detail-book-cover\">\n                        <img class=\"img-responsive\" alt=\"\" src={{book.imageUrl}} width=\"258\" height=\"351\">\n                        <div class=\"fade\"></div>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-8\">\n                    <div class=\"book-detail-header\">\n                        <h2 class=\"book-title\">{{book.title}}</h2>\n                        <p class=\"book-author\">By <span class=\"book-author-name\">{{book.authorTitle}}</span></p>\n                    </div>\n\n                    <div class=\"book-detail-body\">\n\n                        <div class=\"detail-cart-button row clearfix\">\n                            <div class=\"pull-right col-md-6 col-sm-7 col-xs-12\">\n                                <div class=\"row product-actions\">\n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"clearfix\"></div>\n\n                        <div class=\"product-description\">\n                            <h3>Quick Overview</h3>\n                            <p>{{book.description}}</p>\n\n\n                            <h3>Tags</h3>\n                            <h4 *ngFor=\"let tag of book.tags\" style=\"display:inline-block\">\n                                <span class=\"label label-default\">\n                                    <a routerLink=\"/search\" [queryParams]=\"{tag: tag}\" style=\"color:white\">{{tag}}</a>\n                                </span>\n                            </h4>\n\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"tab-holder clearfix\">\n                <div class=\"book-additional-details\">\n                    <!-- Nav tabs -->\n                    <ul class=\"nav nav-tabs book-detail-tab\">\n                        <li class=\"active\" role=\"presentation\"><a href=\"#more\" data-toggle=\"tab\">More About This Book</a></li>\n                        <li role=\"presentation\"><a href=\"#download\" data-toggle=\"tab\">Download</a></li>\n                    </ul>\n\n                    <!-- Tab panes -->\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane active\" id=\"more\" role=\"tabpanel\">\n                            <p>{{book.summary}}</p>\n                        </div>\n\n                        <div class=\"tab-pane\" id=\"download\" role=\"tabpanel\">\n                            <h3>Download</h3>\n                            <p>Download this book</p>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- recommendations -->\n    <app-bookcarousel [books]=\"book.recommendations\"></app-bookcarousel>\n</div>\n"

/***/ }),

/***/ "./src/app/Bookdetail/book-detail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Bookdetail/book-detail.component.ts ***!
  \*****************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book.service */ "./src/app/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(route, bookService, location) {
        this.route = route;
        this.bookService = bookService;
        this.location = location;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getBook();
    };
    BookDetailComponent.prototype.getBook = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.bookService.getBook(id)
            .subscribe(function (book) { return _this.book = book; });
    };
    BookDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/Bookdetail/book-detail.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/Bookitem/bookitem.component.html":
/*!**************************************************!*\
  !*** ./src/app/Bookitem/bookitem.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"book\" style=\"text-align: center\">\n    <div class=\"book-cover\">\n        <div class=\"book-inner\">\n            <img alt=\"\" src={{book.imageUrl}} width=\"255\" height=\"261\">\n            <div class=\"fade\"></div>\n        </div>\n    </div>\n    <div class=\"book-details\">\n        <h3 class=\"book-title\">\n            <a routerLink=\"/book/{{book._doc}}\">{{book.title}}</a>\n        </h3>\n        <p class=\"book-author\">{{book.authorTitle}}</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Bookitem/bookitem.component.ts":
/*!************************************************!*\
  !*** ./src/app/Bookitem/bookitem.component.ts ***!
  \************************************************/
/*! exports provided: BookItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookItemComponent", function() { return BookItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book */ "./src/app/book.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookItemComponent = /** @class */ (function () {
    function BookItemComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookItemComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookItemComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _book__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], BookItemComponent.prototype, "book", void 0);
    BookItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./bookitem.component.html */ "./src/app/Bookitem/bookitem.component.html")
        })
    ], BookItemComponent);
    return BookItemComponent;
}());

;


/***/ }),

/***/ "./src/app/Header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/Header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n\n    <!-- top navbar -->\n    <nav class=\"navbar navbar-top-bar navbar-static-top\">\n        <div class=\"container\">\n            <ul class=\"navbar-nav nav\">\n                <li><a href=\"index.html\">Home</a></li>\n                <li class=\"disabled\"><a href=\"index.html\">About Us</a></li>\n            </ul>\n            <ul class=\"navbar-nav nav navbar-right\">\n                <li class=\"disabled\"><a href=\"#\">Login</a></li>\n                <li>\n                    <form class=\"navbar-form\" method=\"get\" action=\"search.html\">\n                        <div class=\"form-group\">\n                            <input #searchBox id=\"search-box\" (keyup.enter)=\"search(searchBox.value)\" type=\"text\" class=\"form-control\" placeholder=\"Search\"/>\n\n                        </div>\n\n                        <button [routerLink]=\"['./search']\" (click)=\"search(searchBox.value)\">Search</button>\n                    </form>\n\n                </li>\n            </ul>\n        </div>\n    </nav>\n\n    <!-- main navigation -->\n    <div class=\"yamm navbar navbar-default navbar-default-book animate-dropdown\" role=\"navigation\">\n        <div class=\"container\">\n            <div class=\"header-mast\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#KYbook-navbar\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n\n                    <a class=\"navbar-brand\" href=\"index.html\">\n                        <img class=\"logo\" src=\"images/book-flat.png\">\n                        <span class=\"title\">Quick Start Books</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</header>\n"

/***/ }),

/***/ "./src/app/Header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/Header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.search = function (term) {
        this.router.navigate(['/search'], {
            queryParams: {
                text: term
            }
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Header/header.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Herobook/herobook.component.html":
/*!**************************************************!*\
  !*** ./src/app/Herobook/herobook.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\n    <div class=\"container\">\n        <div class=\"content caption\">\n            <div class=\"row\">\n                <div class=\"col-sm-5 col-sm-push-7\">\n                    <div class=\"book-in-shelf\">\n                        <div class=\"book-shelf\">\n                            <div class=\"book-cover slider-book-cover\">\n                                <img class=\"img-responsive\" alt=\"\" src={{book.imageUrl}} width=\"258\" height=\"351\">\n                                <div class=\"fade\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-7 col-sm-pull-5\">\n                    <div class=\"clearfix slider-caption\">\n                        <div class=\"slider-caption-heading\">\n                            <h1 class=\"slider-caption-title fadeInDown-1\">{{book.title}}</h1>\n                            <p class=\"slider-caption-subtitle fadeInDown-2 hidden-xs\">{{book.description}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Herobook/herobook.component.ts":
/*!************************************************!*\
  !*** ./src/app/Herobook/herobook.component.ts ***!
  \************************************************/
/*! exports provided: HeroBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroBookComponent", function() { return HeroBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book */ "./src/app/book.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroBookComponent = /** @class */ (function () {
    function HeroBookComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _book__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], HeroBookComponent.prototype, "book", void 0);
    HeroBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-herobook',
            template: __webpack_require__(/*! ./herobook.component.html */ "./src/app/Herobook/herobook.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeroBookComponent);
    return HeroBookComponent;
}());



/***/ }),

/***/ "./src/app/Main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/Main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"home page\">\n\n        <div class=\"slider\">\n            <div id=\"hero\">\n                <div id=\"owl-main\" class=\"owl-carousel1 owl-theme\">\n                    <app-herobook *ngIf=\"books[0]\" [book]=\"books[0]\"></app-herobook>\n                </div>\n\n            </div>\n        </div>\n\n        <app-bookcarousel></app-bookcarousel>\n\n        <!-- featured authors -->\n        <div class=\"featured-item-block\">\n            <app-authorlist></app-authorlist>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/Main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book.service */ "./src/app/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(bookService) {
        this.bookService = bookService;
        this.books = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    MainComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = Object.values(books); });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/Main/main.component.html")
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/Search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/Search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"category page\">\n    <div class=\"container\">\n        <div class=\"page-header category-page-header\">\n            <h2 class=\"page-title\">Search</h2>\n            <p class=\"page-subtitle\">Find the books you're looking for</p>\n        </div>\n\n        <div class=\"page-body\">\n            <div class=\"row\">\n                <!-- ========================================= CONTENT ========================================= -->\n                <div class=\"col-sm-8 col-sm-push-4\">\n                    <div class=\"category-toolbar\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3 col-sm-4\">\n                                <ul id=\"myTab\" class=\"nav nav-tabs grid-list-view-buttons\" role=\"tablist\">\n                                    <li role=\"presentation\" class=\"active\"><a href=\"#grid\" class=\"btn navbar-btn\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-th active\"></span></a></li>\n                                    <li role=\"presentation\"><a href=\"#list\" class=\"btn navbar-btn\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-th-list\"></span></a></li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane active wow fadeInUp\" id=\"grid\" role=\"tabpanel\">\n                            <div class=\"category-books books grid-view\">\n                                <div class=\"row\">\n\n                                    <div class=\"col-md-4 col-sm-6\" *ngFor=\"let book of results\">\n                                        <app-book [book]=\"book\" [width]=\"258\" [height]=\"351\"></app-book>                                        \n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-pane wow fadeInUp featured-book-holder\" id=\"list\" role=\"tabpanel\">\n\n                            <div class=\"featured-book\" *ngFor=\"let book of results\">\n                                <div class=\"books clearfix\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-5\">\n                                            <div class=\"book\">\n                                                <div class=\"hot-ribbon\"><div class=\"hot-ribbon-content\">hot</div></div>\n                                                <div class=\"book-cover\">\n                                                    <img class=\"img-responsive\" alt=\"\" width=\"193\" height=\"261\" src={{book.imageUrl}}>\n                                                    <div class=\"fade\"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-8 col-sm-7\">\n                                            <div class=\"book-details book-details-list-view\">\n                                                <h3>\n                                                    <a routerLink=\"/book/{{book._doc}}\" class=\"book-title\">{{book.title}}</a>\n                                                </h3>\n                                                <p class=\"book-author\">{{book.authorTitle}}</p>\n                                            </div>\n\n                                            <div class=\"featured-book-content\">\n                                                <p class=\"hidden-sm hidden-md\">{{book.description}}</p>\n\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <ul class=\"pagination book-pagination\">\n                        <li class=\"active\"><a>1</a></li>\n                        <li><a>2</a></li>\n                        <li><a>3</a></li>\n                        <li><a>4</a></li>\n                        <li><a>5</a></li>\n                    </ul>\n                </div>\n\n                <!-- ========================================= CONTENT :END ========================================= -->\n\n\n                <!-- sidebar -->\n                <div class=\"col-sm-4 col-sm-pull-8\">\n                    <aside class=\"sidebar\">\n                        <section class=\"module\">\n                            <header class=\"module-header\">\n                                <h4 class=\"module-book-category-title\">Book Category</h4>\n                            </header>\n\n                            <div class=\"module-body category-module-body\">\n                                <ul class=\"list-unstyled category-list\">\n\n                                    <li *ngFor=\"let tag of tags\">\n                                        <a routerLink=\"/search\" [queryParams]=\"{tag: tag.tag}\">{{tag.title}}</a>\n                                    </li>\n\n                                </ul>\n                            </div>\n                        </section>\n                    </aside>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/Search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../book.service */ "./src/app/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(bookService, route) {
        this.bookService = bookService;
        this.route = route;
    }
    SearchComponent.prototype.getTags = function () {
        var _this = this;
        this.bookService.getTags().subscribe(function (tags) {
            _this.tags = Object.values(tags);
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTags();
        this.route.queryParams.subscribe(function (params) {
            var text = params["text"];
            var tag = params["tag"];
            if (tag) {
                _this.bookService.getTagResults(tag)
                    .subscribe(function (results) {
                    _this.results = Object.values(results);
                });
            }
            else if (text) {
                _this.bookService.getSearchResults(text)
                    .subscribe(function (results) {
                    _this.results = Object.values(results);
                });
            }
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/Search/search.component.html")
        }),
        __metadata("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main/main.component */ "./src/app/Main/main.component.ts");
/* harmony import */ var _Bookdetail_book_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bookdetail/book-detail.component */ "./src/app/Bookdetail/book-detail.component.ts");
/* harmony import */ var _Search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search/search.component */ "./src/app/Search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _Main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'book/:id', component: _Bookdetail_book_detail_component__WEBPACK_IMPORTED_MODULE_3__["BookDetailComponent"] },
    { path: 'search', component: _Search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuaDEge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XG4gIGNvbG9yOiAjNjA3RDhCO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbn1cbm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n    <app-header></app-header>\n\n    <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Sample Angular Books Application';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Main/main.component */ "./src/app/Main/main.component.ts");
/* harmony import */ var _Herobook_herobook_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Herobook/herobook.component */ "./src/app/Herobook/herobook.component.ts");
/* harmony import */ var _Header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header/header.component */ "./src/app/Header/header.component.ts");
/* harmony import */ var _Bookdetail_book_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Bookdetail/book-detail.component */ "./src/app/Bookdetail/book-detail.component.ts");
/* harmony import */ var _Search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Search/search.component */ "./src/app/Search/search.component.ts");
/* harmony import */ var _Authorlist_authorlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Authorlist/authorlist.component */ "./src/app/Authorlist/authorlist.component.ts");
/* harmony import */ var _Bookcarousel_bookcarousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Bookcarousel/bookcarousel.component */ "./src/app/Bookcarousel/bookcarousel.component.ts");
/* harmony import */ var _Bookitem_bookitem_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Bookitem/bookitem.component */ "./src/app/Bookitem/bookitem.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _Bookdetail_book_detail_component__WEBPACK_IMPORTED_MODULE_9__["BookDetailComponent"],
                _Header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _Main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _Herobook_herobook_component__WEBPACK_IMPORTED_MODULE_7__["HeroBookComponent"],
                _Authorlist_authorlist_component__WEBPACK_IMPORTED_MODULE_11__["AuthorlistComponent"],
                _Bookcarousel_bookcarousel_component__WEBPACK_IMPORTED_MODULE_12__["BookcarouselComponent"],
                _Search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _Bookitem_bookitem_component__WEBPACK_IMPORTED_MODULE_13__["BookItemComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book.service.ts":
/*!*********************************!*\
  !*** ./src/app/book.service.ts ***!
  \*********************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.authorsUrl = 'api/authors';
        this.booksUrl = 'api/books';
        this.searchUrl = 'api/search';
        this.tagsUrl = 'api/tags';
    }
    BookService.prototype.getBook = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getBook id=" + id)));
    };
    BookService.prototype.getAuthors = function () {
        return this.http.get(this.authorsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAuthors', [])));
    };
    BookService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getBooks', [])));
    };
    BookService.prototype.getTags = function () {
        return this.http.get(this.tagsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTags', [])));
    };
    BookService.prototype.getSearchResults = function (text) {
        return this.http.get(this.searchUrl, { params: {
                text: text
            } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getSearchResults', [])));
    };
    BookService.prototype.getTagResults = function (tag) {
        return this.http.get(this.booksUrl, { params: {
                tag: tag
            } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTagResults', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    BookService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    BookService.prototype.log = function (message) {
        console.log("message", message);
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/book.ts":
/*!*************************!*\
  !*** ./src/app/book.ts ***!
  \*************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(name, id, title, authorTitle, description, summary, tags, recommendations) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.authorTitle = authorTitle;
        this.description = description;
        this.summary = summary;
        this.tags = tags;
        this.recommendations = recommendations;
    }
    return Book;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
