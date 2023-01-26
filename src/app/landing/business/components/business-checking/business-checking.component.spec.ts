import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCheckingComponent } from './business-checking.component';

describe('BusinessCheckingComponent', () => {
  let component: BusinessCheckingComponent;
  let fixture: ComponentFixture<BusinessCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCheckingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
