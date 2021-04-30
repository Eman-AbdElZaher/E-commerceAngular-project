import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { parse } from 'node:path';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ICategory } from 'src/app/Services/API_Category';
import {IProduct, Product} from './Api_product'
@Injectable({
  providedIn: 'root'
})
export class ProductCRUDOperationService {

  constructor(private  http:HttpClient) { }
  url="http://localhost:36197/api/";

  returnAllCategory():Observable<ICategory[]>
  {
    return this.http.get<ICategory[]>(this.url+"Categories").pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
 products=new Array();


CreatePro(product:Product): Observable<any> {
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(product);
  console.log(body)
  return this.http.post('http://localhost:36197/api/Products', body,{'headers':headers})
}

getAll():Observable<IProduct[]>
{//http://localhost:32348/api/Products
  return this.http.get<IProduct[]>("http://localhost:36197/api/Products").pipe(catchError((err)=>
  {
    return throwError(err.message ||"Internal Server error contact site adminstarator");
  }));
}
getDetails(id:number):Observable<IProduct>
{console.log("url:"+"http://localhost:36197​/api​/Products​/"+id);
console.log("res"+this.http.get<IProduct>("http://localhost:36197​/api​/Products​/"+id));

  return this.http.get<IProduct>("http://localhost:36197/api/Products/"+id).pipe(catchError((err)=>
  {
    return throwError(err.message ||"Internal Server error contact site adminstarator");
  }));
}

Update(pro:Product)
{
 console.log(pro);
 // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
 const headers = { 'content-type': 'application/json'}   
 //const body =JSON.stringify(pro);
  return  this.http.put<IProduct>("http://localhost:36197/api/Products/"+pro.id,pro,{'headers':headers})
       
   
}
Delete(id:number)
{
 return  this.http.delete("http://localhost:36197/api/Products/"+id)//.pipe(catchError((err)=>
//   {
//     return throwError(err.message ||"Internal Server error contact site adminstarator");
//   }));
        // .subscribe({
        //     next: data => {
        //         return 'Delete successful';
        //     },
        //     error: error => { 
        //       console.error('There was an error!', error);
        //         return error.message;
               
        //     }
        // });
}
 }
