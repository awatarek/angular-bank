import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class NeedLoginGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  
  async canActivate(): Promise<boolean> {
    let hasCookie = document.cookie.split(";").filter(x => {return x.replace(" ","").startsWith("login")});

    if (hasCookie.length > 0 && await this.auth.cookieValidator()) {
      this.router.navigate(['panel']);
      return false;
    }

    return true;
  }
}