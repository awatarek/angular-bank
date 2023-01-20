import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LandingNavbarComponent,
    LandingFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LandingFooterComponent,
    LandingNavbarComponent
  ]
})
export class SharedLandingModule { }
