import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.scss'],
})
export class AuthorAddComponent {
  constructor(private http: HttpClient, private router: Router) {}

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
  });

  onSubmit() {
    const params = new HttpParams()
      .set('name', this.userForm.value.name!)
      .set('surname', this.userForm.value.surname!);

    this.http
      .post('https://localhost:7127/api/author', null, {
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
