import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AuthorsModule } from './authors/authors.module';

import { appRoutes } from './app.routes'; 

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    AuthorsModule
  ],
  bootstrap: []
})
export class AppModule {}
