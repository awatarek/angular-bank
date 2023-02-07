import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class CookieGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  
  async canActivate(): Promise<boolean> {
    let hasCookie = document.cookie.split(";").filter(x => {return x.replace(" ","").startsWith("login")});

    if (!hasCookie && await !this.auth.cookieValidator()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}