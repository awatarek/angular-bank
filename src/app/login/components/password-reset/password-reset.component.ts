import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'bank-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
  public isError: boolean = false;

  public formPass: FormGroup = new FormGroup({
    mail: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
  });

  constructor(private router: Router, private authService: AuthService) { }

  public async passwordRecovery(){
    await this.authService.passwordReset(this.formPass.value.mail);
  }

  public navigateTo(url: string){
    this.router.navigate([url])
  }


  public isControllValid(controlName: string, validaorName: string): boolean{
    let form: FormGroup = null;
    form = this.formPass;

    let controller = form.get(controlName);
    if(controller.getError(validaorName) && controller.touched){
      return true;
    } else {
      return false;
    }
  }
}
