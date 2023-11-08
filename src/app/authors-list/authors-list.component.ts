import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}

  authors: Author[] = [];
  displayedColumns: string[] = ['id', 'name', 'surname', 'books', 'details'];
  maxLength = 2;

  ngOnInit(): void {
    this.httpClient
      .get('https://localhost:7127/api/author')
      .subscribe((data) => {
        let pom = data as Author[];
        pom.map((el) => {
          el.booksTitle = el.booksTitle.toString();
        });
        this.authors = data as Author[];
        this.authors.map((el) => {
          if (el.booksTitle !== null) {
            el.booksTitle =
              el.booksTitle.split(',').length > this.maxLength
                ? `${el.booksTitle
                    .split(',')
                    .slice(0, this.maxLength)
                    .toString()} and more...`
                : el.booksTitle.replace(',', ', ');
          }
          el.booksTitle = el.booksTitle.replace(',', ', ');
        });
      });
  }

  viewAuthorDetails(author: Author) {
    let route = '/author/details/';
    this.router.navigate([route, author.id]);
  }
}

export interface Author {
  id: number;
  name: string;
  surname: string;
  booksTitle: string;
}
