import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingandreviewpopupComponent } from './ratingandreviewpopup.component';

describe('RatingandreviewpopupComponent', () => {
  let component: RatingandreviewpopupComponent;
  let fixture: ComponentFixture<RatingandreviewpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingandreviewpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingandreviewpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
