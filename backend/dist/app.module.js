"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const authors_module_1 = require("./authors/authors.module");
const books_module_1 = require("./books/books.module");
const author_entity_1 = require("./authors/author.entity");
const book_entity_1 = require("./books/book.entity");
const http_1 = require("@angular/common/http");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [[BrowserModule, AppRoutingModule, http_1.HttpClientModule],
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'library.sqlite',
                entities: [author_entity_1.Author, book_entity_1.Book],
                synchronize: true,
            }),
            authors_module_1.AuthorsModule,
            books_module_1.BooksModule,
        ],
        declarations: [AppComponent],
        controllers: [],
        providers: [],
        bootstrap: [AppComponent],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map