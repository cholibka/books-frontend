import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Author } from '../authors-list/authors-list.component';

@Component({
  selector: 'app-author-delete-modal',
  templateUrl: './author-delete-modal.component.html',
  styleUrls: ['./author-delete-modal.component.scss'],
})
export class AuthorDeleteModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public author: Author) {}
}
