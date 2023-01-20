import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { SharedLandingModule } from '../shared-landing/shared-landing.module';
import { RouterModule } from '@angular/router';
import { BusinessRouter } from './business-routing.router';



@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    CommonModule,
    SharedLandingModule,
    RouterModule.forChild(BusinessRouter)
  ]
})
export class BusinessModule { }
