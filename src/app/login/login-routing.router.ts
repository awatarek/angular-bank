import { Routes } from '@angular/router';
import { NeedLoginGuardService } from '../shared/guards/needLogin.guard';
import { AccountLoginComponent } from './components/account-login/account-login.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';
import { PasswordResetLinkComponent } from './components/password-reset-link/password-reset-link.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { LoginComponent } from './login.component';

export let LoginRouter: Routes = [
    {path: '', canActivate: [NeedLoginGuardService], component: LoginComponent, children:
        [
            {path: 'password-reset-link/:ruid', component: PasswordResetLinkComponent},
            {path: 'password-reset', component: PasswordResetComponent},
            {path: 'register', component: AccountRegisterComponent},
            {path: '', component: AccountLoginComponent}
        ]
    },
];
