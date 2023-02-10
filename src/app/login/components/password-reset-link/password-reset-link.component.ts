import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'bank-password-reset-link',
  templateUrl: './password-reset-link.component.html',
  styleUrls: ['./password-reset-link.component.scss']
})
export class PasswordResetLinkComponent {
  public isError: boolean = false;
  public succes: boolean = false;

  public formPass: FormGroup = new FormGroup({
    password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
  });

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  public navigateTo(url: string){
    this.router.navigate([url])
  }

  public async passwordRecovery(){
    this.succes = false;
    this.isError = false;

    let ruid;
    this.route.paramMap.subscribe(val => ruid = val.get("ruid"));
    let result = await this.authService.passwordResetConfirm(ruid ,this.formPass.value.password);
    
    this.succes = result;
    this.isError = !result;
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
