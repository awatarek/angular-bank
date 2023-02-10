import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AccountsService } from "../service/accounts.service";

@Injectable()
export class HasAccountGuardService implements CanActivate {
  constructor(private account: AccountsService, private router: Router) {}
  
  async canActivate(): Promise<boolean> {
    let hasCookie = document.cookie.split(";").filter(x => {return x.replace(" ","").startsWith("login")});
    if (!(await this.account.hasAccount())) {
      this.router.navigate(['/panel/new-account']);
      return false;
    } else {
      return true;
    }

    
  }
}