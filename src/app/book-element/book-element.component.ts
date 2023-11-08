import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../books-list/books-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-element',
  templateUrl: './book-element.component.html',
  styleUrls: ['./book-element.component.scss'],
})
export class BookElementComponent implements OnInit {
  @Input() book!: Book;

  constructor(private router: Router) {}
  color: string = '';
  ngOnInit(): void {
    this.color = `rgb(${this.getRandomNumber()}, ${this.getRandomNumber()}, ${this.getRandomNumber()})`;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 255);
  }

  viewBookDetails(book: Book) {
    console.log(book);
    let route = '/book/';
    this.router.navigate([route, book.id]);
  }
}
