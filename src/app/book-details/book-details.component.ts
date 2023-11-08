import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../books-list/books-list.component';
import { MatDialog } from '@angular/material/dialog';
import { BookDeleteModalComponent } from '../book-delete-modal/book-delete-modal.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  bookId: number = -1;
  book!: Book;
  color: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    public dialog: MatDialog,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.bookId = +params.get('id')! || -1;
    });
    this.color = `rgb(${this.getRandomNumber()}, ${this.getRandomNumber()}, ${this.getRandomNumber()})`;

    this.http
      .get(`https://localhost:7127/api/book/${this.bookId}`)
      .subscribe((data) => (this.book = data as Book));
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
            console.log('Delete successful');
            this.router.navigate(['/books']);
          });
      }
    });
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 255);
  }
}
