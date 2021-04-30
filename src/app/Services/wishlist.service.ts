import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>
{
   return this.http.get('http://localhost:36197/api/Wishlists');
}
AddToCart(productId:number):Observable<any>{

  return this.http.post('http://localhost:36197/api/Wishlists',productId)
}

}
