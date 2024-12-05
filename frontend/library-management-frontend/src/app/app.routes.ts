import { Routes } from '@angular/router';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { BookListComponent } from './components/book-list/book-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
]