/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';



@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'library.sqlite',
      entities: [],
      synchronize: true,
     
    }),
    AuthorsModule,
    BooksModule,
  ],
 
  controllers: [],
  providers: [],
  
})
export class AppModule {}
