import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../SharedClasses/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>
{
   return this.http.get('http://localhost:36197/api/CartProducts');
}
AddToCart(productId:number):Observable<any>{

  return this.http.post('http://localhost:36197/api/CartProducts',productId)
}
  
}
