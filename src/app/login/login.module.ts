import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRouter } from './login-routing.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from "primeng/inputtext"
import { AuthService } from '../shared/service/auth.service';
import { NeedLoginGuardService } from '../shared/guards/needLogin.guard';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';
import { AccountLoginComponent } from './components/account-login/account-login.component';
import { PasswordResetLinkComponent } from './components/password-reset-link/password-reset-link.component';


@NgModule({
  declarations: [
    LoginComponent,
    PasswordResetComponent,
    AccountRegisterComponent,
    AccountLoginComponent,
    PasswordResetLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRouter),
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers:
  [
    AuthService,
    NeedLoginGuardService
  ]
})
export class LoginModule { }
