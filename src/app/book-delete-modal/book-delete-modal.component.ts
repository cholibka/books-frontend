import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../books-list/books-list.component';

@Component({
  selector: 'app-book-delete-modal',
  templateUrl: './book-delete-modal.component.html',
  styleUrls: ['./book-delete-modal.component.scss'],
})
export class BookDeleteModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public book: Book) {}
}
