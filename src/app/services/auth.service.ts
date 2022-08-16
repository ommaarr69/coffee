import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';



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
    register(formUserData: object): Observable<any> {
        return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup`, formUserData)
    }
    login(data: object): Observable<any> {
        return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin`, data)
    }
    logout() {
        localStorage.removeItem('userToken');
        this.userData.next(null);
        this._Router.navigate(['/Login'])
    }

}
