import { Routes } from '@angular/router';
import { CookieGuardService } from '../shared/guards/cookie.guard';
import { HasAccountGuardService } from '../shared/guards/hasAccount.guard';
import { PanelDashboardComponent } from './components/panel-dashboard/panel-dashboard.component';
import { PanelNewAccountComponent } from './components/panel-new-account/panel-new-account.component';
import { PanelComponent } from './panel.component';

export let PanelRouter: Routes = [
    {path: '', canActivate: [CookieGuardService, HasAccountGuardService], component: PanelComponent, children: [
        {path: "", component: PanelDashboardComponent},
    ]},
    {path: "new-account", canActivate: [CookieGuardService], component: PanelNewAccountComponent}
];
