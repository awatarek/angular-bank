import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBookkeepingComponent } from './business-bookkeeping.component';

describe('BusinessBookkeepingComponent', () => {
  let component: BusinessBookkeepingComponent;
  let fixture: ComponentFixture<BusinessBookkeepingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessBookkeepingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessBookkeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
