import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualComponent } from './individual.component';
import { RouterModule } from '@angular/router';
import { IndividualRouter } from './individual-routing.router';
import { SharedLandingModule } from '../shared-landing/shared-landing.module';



@NgModule({
  declarations: [
    IndividualComponent
  ],
  imports: [
    CommonModule,
    SharedLandingModule,
    RouterModule.forChild(IndividualRouter)
  ]
})
export class IndividualModule { }
