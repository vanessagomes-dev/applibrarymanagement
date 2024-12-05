/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { Author } from './authors/author.entity';
import { Book } from './books/book.entity';
import { HttpClientModule } from '@angular/common/http';

@Module({
  imports:[ [BrowserModule, AppRoutingModule, HttpClientModule]
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'library.sqlite',
      entities: [Author, Book],
      synchronize: true,
     
    }),
    AuthorsModule,
    BooksModule,
  ],
  declarations: [AppComponent],
  controllers: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
