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
import { PanelNewAccountComponent } from './components/panel-new-account/panel-new-account.component';
import { AccountsService } from '../shared/service/accounts.service';
import { HasAccountGuardService } from '../shared/guards/hasAccount.guard';



@NgModule({
  declarations: [
    PanelComponent,
    PanelNavbarComponent,
    PanelDashboardComponent,
    PanelNewAccountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PanelRouter),
  ],
  providers: [
    CookieGuardService,
    AuthService,
    AccountsService,
    HasAccountGuardService
  ]
})
export class PanelModule { }
