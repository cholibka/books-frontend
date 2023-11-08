import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorElementComponent } from './author-element.component';

describe('AuthorElementComponent', () => {
  let component: AuthorElementComponent;
  let fixture: ComponentFixture<AuthorElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorElementComponent]
    });
    fixture = TestBed.createComponent(AuthorElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
