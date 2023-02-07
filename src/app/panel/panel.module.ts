import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelNavbarComponent } from './components/panel-navbar/panel-navbar.component';
import { RouterModule } from '@angular/router';
import { PanelRouter } from './panel-routing.router';
import { PanelDashboardComponent } from './components/panel-dashboard/panel-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CookieGuardService } from '../shared/guards/cookie.guard';
import { AuthService } from '../shared/service/auth.service';



@NgModule({
  declarations: [
    PanelComponent,
    PanelNavbarComponent,
    PanelDashboardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PanelRouter),
  ],
  providers: [
    CookieGuardService,
    AuthService
  ]
})
export class PanelModule { }
