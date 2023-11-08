import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Author } from '../authors-list/authors-list.component';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss'],
})
export class AuthorEditComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  author!: Author;
  authorId: number = -1;
  isLoaded = false;

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.authorId = +params.get('id')! || -1;
    });

    this.http
      .get(`https://localhost:7127/api/author/${this.authorId}`)
      .subscribe((data) => {
        this.author = data as Author;
        this.userForm.setValue({
          name: this.author.name,
          surname: this.author.surname,
        });
        this.isLoaded = true;
      });
  }

  onSubmit() {
    const params = new HttpParams()
      .set('id', this.author.id)
      .set('name', this.userForm.value.name!)
      .set('surname', this.userForm.value.surname!);

    this.http
      .put(`https://localhost:7127/api/author/${this.authorId}`, null, {
        params,
      })
      .subscribe({
        next: (data) => {
          this.router.navigate(['/authors']);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
