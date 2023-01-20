import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss', './landing-navbar-mobile.component.scss']
})
export class LandingNavbarComponent {
  public individual: boolean = true;

  constructor(private router: Router) {

  }

  public isTopRouterActive(router: string): string{
    let url = this.router.url.split("/")[1];

    this.isIndividual();

    if(router == "individual" && url == ""){
      return "active-link";
    }else if(url == router){
      return "active-link";
    }
    return "";
  }

  public isLowerRouterActive(router: string): string{
    let url = this.router.url;
    if(url == router){
      return "active-link";
    }
    return "";
  }

  public isIndividual(){
    if(this.router.url == "" || this.router.url.split("/")[1] == "individual"){
      this.individual = true;
    } else {
      this.individual = false;
    }
  }

}
