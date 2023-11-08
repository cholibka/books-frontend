import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../books-list/books-list.component';

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
    private http: HttpClient
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

  getRandomNumber() {
    return Math.floor(Math.random() * 255);
  }
}
