import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private router: Router, private http: HttpClient) {}
    private url = "http://localhost:8080/"

    public async login(username: string, password: string): Promise<boolean>{
        const response$ = this.http.post<number>(this.url+"login",{username:username,password: password}, {withCredentials: true});
        let response = await lastValueFrom(response$).catch(err => {return false});
        return response == 200; 
    }

    public async cookieValidator(): Promise<boolean>{
        const response$ = this.http.get<boolean>(this.url+"login/cookie", {withCredentials: true});
        return await lastValueFrom(response$);
    }

    public async register(username: string, password: string, mail: string){
        const response$ = this.http.post<number>(this.url+"registration", {username: username, password: password, mail: mail});
        return await lastValueFrom(response$);
    }

    public async passwordReset(mail: any): Promise<boolean> {
        const response$ = this.http.post<number>(this.url+"passwordReset", {mail: mail});
        let response = await lastValueFrom(response$);
        return response == 200;
      }
}