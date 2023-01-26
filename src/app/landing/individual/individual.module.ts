import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualComponent } from './individual.component';
import { RouterModule } from '@angular/router';
import { IndividualRouter } from './individual-routing.router';
import { SharedLandingModule } from '../shared-landing/shared-landing.module';
import { IndividualLandingComponent } from './components/individual-landing/individual-landing.component';
import { IndividualCheckingComponent } from './components/individual-checking/individual-checking.component';
import { IndividualSavingsComponent } from './components/individual-savings/individual-savings.component';
import { IndividualLoansComponent } from './components/individual-loans/individual-loans.component';
import { IndividualInvestingComponent } from './components/individual-investing/individual-investing.component';


@NgModule({
  declarations: [
    IndividualComponent,
    IndividualLandingComponent,
    IndividualCheckingComponent,
    IndividualSavingsComponent,
    IndividualLoansComponent,
    IndividualInvestingComponent,
  ],
  imports: [
    CommonModule,
    SharedLandingModule,
    RouterModule.forChild(IndividualRouter)
  ]
})
export class IndividualModule { }
