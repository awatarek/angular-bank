import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any; 

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public section = 0;

  public form: FormGroup = new FormGroup({
    login: new FormControl(""),
    password: new FormControl(""),
    mail: new FormControl("")
  });

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('animated-background', ParticlesConfig, function() {});
  }

  public login(){
    this.router.navigate(["/panel"]);
  }

  public register(){
    this.router.navigate(["/panel"]);
  }

  public passwordRecovery(){
    
  }

}
