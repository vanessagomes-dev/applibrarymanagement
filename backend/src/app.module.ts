/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { Author } from './authors/author.entity';
import { Book } from './books/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'library.sqlite',
      entities: [Author, Book],
      synchronize: true,
    }),
    AuthorsModule,
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
