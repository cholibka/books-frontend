import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookElementComponent } from './book-element.component';

describe('BookElementComponent', () => {
  let component: BookElementComponent;
  let fixture: ComponentFixture<BookElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookElementComponent]
    });
    fixture = TestBed.createComponent(BookElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
