import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Author } from '../authors-list/authors-list.component';

@Component({
  selector: 'app-author-element',
  templateUrl: './author-element.component.html',
  styleUrls: ['./author-element.component.scss'],
})
export class AuthorElementComponent implements OnInit {
  authorId: number = -1;
  author!: Author;
  books: string[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.authorId = +params.get('id')! || -1;
    });

    this.http
      .get(`https://localhost:7127/api/author/${this.authorId}`)
      .subscribe((data) => {
        let pom = data as Author;
        pom.booksTitle = pom.booksTitle.toString();
        this.author = pom;
        this.books = this.author.booksTitle.split(',');
        console.log(this.books);
        console.log(this.author);
      });
  }
}
