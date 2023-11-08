import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  books: Book[] = [];
  maxLength: number = 120;

  ngOnInit(): void {
    this.httpClient.get('https://localhost:7127/api/book').subscribe((data) => {
      this.books = data as Book[];
      this.books.map((el) => {
        el.description =
          el.description.length > this.maxLength
            ? el.description.substring(0, this.maxLength) + '...'
            : el.description;
      });
    });
  }

  addNewBook() {}
}

export interface Book {
  id: number;
  title: string;
  description: string;
  releaseYear: number;
  numberOfPages: number;
  authorName: string;
}
