import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AccountsService {
    constructor(private router: Router, private http: HttpClient) {}
    private url = "http://localhost:8080/"

    public async hasAccount(): Promise<boolean>{
        const response$ = this.http.get<number>(this.url+"hasAccount", {withCredentials: true});
        let response = await lastValueFrom(response$).catch(err => {return false});
        return response == 200; 
    }
}