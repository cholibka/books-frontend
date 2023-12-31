import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BooksListComponent } from './books-list/books-list.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { BookElementComponent } from './book-element/book-element.component';
import { AuthorElementComponent } from './author-element/author-element.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BookDeleteModalComponent } from './book-delete-modal/book-delete-modal.component';
import { AuthorDeleteModalComponent } from './author-delete-modal/author-delete-modal.component';
import { BookAddComponent } from './book-add/book-add.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { BookEditComponent } from './book-edit/book-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    AuthorsListComponent,
    BookElementComponent,
    AuthorElementComponent,
    BookDetailsComponent,
    BookDeleteModalComponent,
    AuthorDeleteModalComponent,
    BookAddComponent,
    AuthorAddComponent,
    AuthorEditComponent,
    BookEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
