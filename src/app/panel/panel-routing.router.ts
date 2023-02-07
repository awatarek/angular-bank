import { Routes } from '@angular/router';
import { CookieGuardService } from '../shared/guards/cookie.guard';
import { PanelDashboardComponent } from './components/panel-dashboard/panel-dashboard.component';
import { PanelComponent } from './panel.component';

export let PanelRouter: Routes = [
    {path: '', canActivate: [CookieGuardService], component: PanelComponent, children: [
        {path: "", component: PanelDashboardComponent}
    ]},
];
