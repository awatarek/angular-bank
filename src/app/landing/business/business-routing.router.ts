import { Routes } from '@angular/router';
import { BusinessComponent } from './business.component';

export let BusinessRouter: Routes = [
    {path: '', component: BusinessComponent, children: [
    ]},
];
