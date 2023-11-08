import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from '../authors-list/authors-list.component';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss'],
})
export class BookAddComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    pages: new FormControl('', Validators.required),
    author: new FormControl<Author | null>(null, Validators.required),
  });

  authors: Author[] = [];
  selected = -1;

  ngOnInit(): void {
    this.http
      .get('https://localhost:7127/api/author')
      .subscribe((data) => (this.authors = data as Author[]));
  }

  onSubmit() {
    const params = new HttpParams()
      .set('title', this.bookForm.value.title!)
      .set('description', this.bookForm.value.description!)
      .set('year', this.bookForm.value.year!)
      .set('pages', this.bookForm.value.pages!)
      .set('authorId', this.selected);

    console.log(params);

    this.http
      .post('https://localhost:7127/api/book', null, {
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
