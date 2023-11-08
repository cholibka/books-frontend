import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../books-list/books-list.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from '../authors-list/authors-list.component';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  book!: Book;
  bookId: number = -1;
  isLoaded = false;
  selected = -1;
  authors: Author[] = [];

  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    year: new FormControl(0, Validators.required),
    pages: new FormControl(0, Validators.required),
    author: new FormControl(-1, Validators.required),
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.bookId = +params.get('id')! || -1;
    });

    this.http
      .get('https://localhost:7127/api/author')
      .subscribe((data) => (this.authors = data as Author[]));

    this.http
      .get(`https://localhost:7127/api/book/${this.bookId}`)
      .subscribe((data) => {
        this.book = data as Book;
        let pom = this.book.authorName.split(' ');

        this.authors.map((el) => {
          if (el.name === pom[0] && el.surname === pom[1])
            this.selected = el.id;
        });

        this.bookForm.setValue({
          title: this.book.title,
          description: this.book.description,
          year: this.book.releaseYear,
          pages: this.book.numberOfPages,
          author: this.selected,
        });
        this.isLoaded = true;
      });
  }

  onSubmit() {
    const params = new HttpParams()
      .set('id', this.bookId)
      .set('title', this.bookForm.value.title!)
      .set('description', this.bookForm.value.description!)
      .set('year', this.bookForm.value.year!)
      .set('pages', this.bookForm.value.pages!)
      .set('authorId', this.bookForm.value.author!);

    this.http
      .put(`https://localhost:7127/api/book/${this.bookId}`, null, {
        params,
      })
      .subscribe({
        next: (data) => {
          this.router.navigate(['/books']);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
