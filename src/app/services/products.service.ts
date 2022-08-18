import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Products } from '../Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient: HttpClient) {

  }
  getProducts(): Observable<Products> {
    return this._HttpClient.get<Products>(environment.baseUrlProducts, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('userToken') } });
  }

}
