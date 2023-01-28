import { Routes } from '@angular/router';
import { PanelDashboardComponent } from './components/panel-dashboard/panel-dashboard.component';
import { PanelComponent } from './panel.component';

export let PanelRouter: Routes = [
    {path: '', component: PanelComponent, children: [
        {path: "", component: PanelDashboardComponent}
    ]},
];
