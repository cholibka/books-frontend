import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorElementComponent } from './author-element/author-element.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAddComponent } from './book-add/book-add.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';

const routes: Routes = [
  { path: 'books', component: BooksListComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'author/details/:id', component: AuthorElementComponent },
  { path: 'author/edit/:id', component: AuthorEditComponent },
  { path: 'author/add', component: AuthorAddComponent },
  { path: 'book/details/:id', component: BookDetailsComponent },
  { path: 'book/edit/:id', component: BookEditComponent },
  { path: 'book/add', component: BookAddComponent },
  { path: '**', component: BooksListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
