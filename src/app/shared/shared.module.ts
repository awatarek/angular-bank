import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { CookieGuardService } from './guards/cookie.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NeedLoginGuardService } from './guards/needLogin.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    CookieGuardService,
    NeedLoginGuardService
  ]
})
export class SharedModule { }
