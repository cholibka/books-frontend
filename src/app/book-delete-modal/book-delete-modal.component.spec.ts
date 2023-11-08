import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeleteModalComponent } from './book-delete-modal.component';

describe('BookDeleteModalComponent', () => {
  let component: BookDeleteModalComponent;
  let fixture: ComponentFixture<BookDeleteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDeleteModalComponent]
    });
    fixture = TestBed.createComponent(BookDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
