import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'bank-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss']
})
export class AccountLoginComponent {
  public isError: boolean = false;
  public formLogin: FormGroup = new FormGroup({
    username: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)])),
    password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)]))
  });

  constructor(private router: Router, private authService: AuthService) { }

  public async login(){
    this.formLogin.markAllAsTouched();
    if(!this.formLogin.invalid){
      let result = await this.authService.login(this.formLogin.value.username, this.formLogin.value.password);
      result ? this.router.navigate(["/panel"]) : this.isError = true;
    }
  }

  public isControllValid( controlName: string, validaorName: string): boolean{
    let controller = this.formLogin.get(controlName);
    if(controller.getError(validaorName) && controller.touched){
      return true;
    } else {
      return false;
    }
  }

  public navigateTo(url: string){
    this.router.navigate([url])
  }
}
