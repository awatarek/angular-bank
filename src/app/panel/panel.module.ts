import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelNavbarComponent } from './components/panel-navbar/panel-navbar.component';
import { RouterModule } from '@angular/router';
import { PanelRouter } from './panel-routing.router';
import { PanelDashboardComponent } from './components/panel-dashboard/panel-dashboard.component';



@NgModule({
  declarations: [
    PanelComponent,
    PanelNavbarComponent,
    PanelDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PanelRouter)
  ]
})
export class PanelModule { }
