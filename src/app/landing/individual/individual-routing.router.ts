import { Routes } from '@angular/router';
import { IndividualCheckingComponent } from './components/individual-checking';
import { IndividualInvestingComponent } from './components/individual-investing';
import { IndividualLandingComponent } from './components/individual-landing';
import { IndividualLoansComponent } from './components/individual-loans';
import { IndividualSavingsComponent } from './components/individual-savings';

import { IndividualComponent } from './individual.component'; 

export let IndividualRouter: Routes = [
    {path: '', component: IndividualComponent, children: [
        {path: "checking", component: IndividualCheckingComponent},
        {path: "savings", component: IndividualSavingsComponent},
        {path: "loans", component: IndividualLoansComponent},
        {path: "investing", component: IndividualInvestingComponent},
        {path: "", component: IndividualLandingComponent}
    ]},
];
