import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { RouterModule } from '@angular/router';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    LandingNavbarComponent,
    LandingFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    ButtonModule,
  ],
  exports: [
    LandingFooterComponent,
    LandingNavbarComponent
  ]
})
export class SharedLandingModule { }
