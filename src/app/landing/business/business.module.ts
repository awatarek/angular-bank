import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { SharedLandingModule } from '../shared-landing/shared-landing.module';
import { RouterModule } from '@angular/router';
import { BusinessRouter } from './business-routing.router';
import { BusinessLandingComponent } from './components/business-landing/business-landing.component';
import { BusinessCheckingComponent } from './components/business-checking/business-checking.component';
import { BusinessLoansComponent } from './components/business-loans/business-loans.component';
import { BusinessLeasingComponent } from './components/business-leasing/business-leasing.component';
import { BusinessBookkeepingComponent } from './components/business-bookkeeping/business-bookkeeping.component';



@NgModule({
  declarations: [
    BusinessComponent,
    BusinessLandingComponent,
    BusinessCheckingComponent,
    BusinessLoansComponent,
    BusinessLeasingComponent,
    BusinessBookkeepingComponent
  ],
  imports: [
    CommonModule,
    SharedLandingModule,
    RouterModule.forChild(BusinessRouter)
  ]
})
export class BusinessModule { }
