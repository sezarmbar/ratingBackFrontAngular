import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRatingPageComponent } from './admin-rating-page.component';

describe('AdminRatingPageComponent', () => {
  let component: AdminRatingPageComponent;
  let fixture: ComponentFixture<AdminRatingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRatingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
