import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorElementComponent } from './author-element/author-element.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAddComponent } from './book-add/book-add.component';
import { AuthorAddComponent } from './author-add/author-add.component';

const routes: Routes = [
  { path: 'books', component: BooksListComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'author/:id', component: AuthorElementComponent },
  { path: 'add/author', component: AuthorAddComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'add/book', component: BookAddComponent },
  { path: '**', component: BooksListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
