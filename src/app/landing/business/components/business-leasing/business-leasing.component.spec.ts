import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLeasingComponent } from './business-leasing.component';

describe('BusinessLeasingComponent', () => {
  let component: BusinessLeasingComponent;
  let fixture: ComponentFixture<BusinessLeasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessLeasingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessLeasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
