import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { CookieGuardService } from './guards/cookie.guard';
import { NeedLoginGuardService } from './guards/needLogin.guard';
import { HasAccountGuardService } from './guards/hasAccount.guard';
import { AccountsService } from './service/accounts.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    CookieGuardService,
    NeedLoginGuardService,
    HasAccountGuardService,
    AccountsService
  ]
})
export class SharedModule { }
