import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRouter } from './login-routing.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from "primeng/inputtext"


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRouter),
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class LoginModule { }
