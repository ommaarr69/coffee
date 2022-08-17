import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserData } from '../user-data';
import { UserDataSignup } from '../user-data-signup';



@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private _HttpClient: HttpClient, private _Router: Router) {
        if (localStorage.getItem('userToken') != null) {
            this.encodedData();
        }
    }

    userData = new BehaviorSubject(null);

    encodedData() { 

        let decoded = JSON.stringify(localStorage.getItem('userToken'));
        this.userData.next(jwtDecode(decoded));
        console.log(this.userData.getValue());

    }
    register(formUserData: object): Observable<UserDataSignup> {
        return this._HttpClient.post<UserDataSignup>(`${environment.baseUrl}signup`, formUserData)
    }
    login(data: object): Observable<UserData> {
        return this._HttpClient.post<UserData>(`${environment.baseUrl}signin`, data)
    }
    logout() {
        localStorage.clear();
        this.userData.next(null);
        this._Router.navigate(['/Login']);
    }

}
