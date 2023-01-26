import { Routes } from '@angular/router';
import { BusinessComponent } from './business.component';
import { BusinessBookkeepingComponent } from './components/business-bookkeeping/business-bookkeeping.component';
import { BusinessCheckingComponent } from './components/business-checking/business-checking.component';
import { BusinessLandingComponent } from './components/business-landing/business-landing.component';
import { BusinessLeasingComponent } from './components/business-leasing/business-leasing.component';
import { BusinessLoansComponent } from './components/business-loans/business-loans.component';

export let BusinessRouter: Routes = [
    {path: '', component: BusinessComponent, children: [
        {path: "checking", component: BusinessCheckingComponent},
        {path: "loans", component: BusinessLoansComponent},
        {path: "leasing", component: BusinessLeasingComponent},
        {path: "bookkeeping", component: BusinessBookkeepingComponent},
        {path: '', component: BusinessLandingComponent}

    ]},
];
