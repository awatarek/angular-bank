import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'bank-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss']
})
export class AccountRegisterComponent {
  public registerSuccess: boolean = false;
  public isError: boolean = false;
  public formReg: FormGroup = new FormGroup({
    username: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)])),
    password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)])),
    mail: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)]))
  });

  constructor(private router: Router, private authService: AuthService) { }

  public async register(){
    this.formReg.markAllAsTouched();
    if(!this.formReg.invalid){
      let result = await this.authService.register(this.formReg.value.username, this.formReg.value.password, this.formReg.value.mail);
      result == 200 ? this.registerSuccess = true : this.isError = true;
    }
  }

  
  public navigateTo(url: string){
    this.router.navigate([url])
  }

  
  public isControllValid(controlName: string, validaorName: string): boolean{
    let form: FormGroup = null;
    form = this.formReg;

    let controller = form.get(controlName);
    if(controller.getError(validaorName) && controller.touched){
      return true;
    } else {
      return false;
    }
  }

}
