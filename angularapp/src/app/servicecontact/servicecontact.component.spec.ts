import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecontactComponent } from './servicecontact.component';

describe('ServicecontactComponent', () => {
  let component: ServicecontactComponent;
  let fixture: ComponentFixture<ServicecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
