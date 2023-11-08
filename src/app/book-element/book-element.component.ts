import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Book } from '../books-list/books-list.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BookDeleteModalComponent } from '../book-delete-modal/book-delete-modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-element',
  templateUrl: './book-element.component.html',
  styleUrls: ['./book-element.component.scss'],
})
export class BookElementComponent implements OnInit {
  @Input() book!: Book;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}
  color: string = '';
  ngOnInit(): void {
    this.color = `rgb(${this.getRandomNumber()}, ${this.getRandomNumber()}, ${this.getRandomNumber()})`;
  }

  openDialog() {
    const dialogRef = this.dialog.open(BookDeleteModalComponent, {
      data: this.book,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.http
          .delete(`https://localhost:7127/api/book/${this.book.id}`)
          .subscribe(() => {
            this.cdr.detectChanges();
            console.log('Delete successful');
          });
      }
    });
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 255);
  }

  viewBookDetails(book: Book) {
    console.log(book);
    let route = '/book/details/';
    this.router.navigate([route, book.id]);
  }

  edit() {
    this.router.navigate(['/book/edit/', this.book.id]);
  }
}
