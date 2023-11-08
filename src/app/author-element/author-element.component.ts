import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Author } from '../authors-list/authors-list.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthorDeleteModalComponent } from '../author-delete-modal/author-delete-modal.component';

@Component({
  selector: 'app-author-element',
  templateUrl: './author-element.component.html',
  styleUrls: ['./author-element.component.scss'],
})
export class AuthorElementComponent implements OnInit {
  authorId: number = -1;
  author!: Author;
  books: string[] = [];
  isLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    public dialog: MatDialog,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.authorId = +params.get('id')! || -1;
    });

    this.http
      .get(`https://localhost:7127/api/author/${this.authorId}`)
      .subscribe((data) => {
        this.isLoaded = true;
        let pom = data as Author;
        pom.booksTitle = pom.booksTitle.toString();
        this.author = pom;
        this.books = this.author.booksTitle.split(',');
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AuthorDeleteModalComponent, {
      data: this.author,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.http
          .delete(`https://localhost:7127/api/author/${this.author.id}`)
          .subscribe(() => {
            console.log('Delete successful');
            this.router.navigate(['/authors']);
          });
      }
    });
  }

  edit() {
    this.router.navigate(['/author/edit/', this.authorId]);
  }
}
