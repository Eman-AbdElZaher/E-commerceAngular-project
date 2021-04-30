import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Category, ICategory} from './API_Category';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {
   ApiUrl="http://localhost:36197/api"

  constructor(private http:HttpClient) { }

Categories=new Array();
// CreateCategory(val:ICategory):Observable<ICategory>
// {
//  // var temp:Product(pro.Name,pro.Quantity,pro.Price,pro.Img,pro.Color)
//  return this.http.post<ICategory>(this.ApiUrl+'/Categories',val); 
// } 
CreateCategory(cat:Category): Observable<ICategory> {

  const headers = {'content-type': 'application/json'}  

  const body=JSON.stringify(cat);

  console.log(body)

  return this.http.post<ICategory>('http://localhost:36197/api/Categories', body,{'headers':headers})

}
DeleteCategory(id:any):Observable<any>
{
  // const headers = {'content-type': 'application/json'}  

  // const body=JSON.stringify(id);

  // console.log(body)
 // var temp:Product(pro.Name,pro.Quantity,pro.Price,pro.Img,pro.Color)
 return this.http.delete(`http://localhost:36197/api/Categories/${id}`);
}
getAll():Observable<ICategory[]>
{
   return this.http.get<ICategory[]>('http://localhost:36197/api/Categories');
}

getDetails(id:number):Observable<ICategory>
{console.log("url:"+"http://localhost:36197​/api​/Categories/"+id);
console.log("res"+this.http.get<ICategory>("http://localhost:36197​/api​/Categories​/"+id));

  return this.http.get<ICategory>("http://localhost:36197/api/Categories/"+id);
}

// UpdateCategory(val:any)
// {
//  // var temp:Product(pro.Name,pro.Quantity,pro.Price,pro.Img,pro.Color)
//  return this.http.put<any>(this.ApiUrl+'/Categories',val);
// }
// Update(pro:Product)
// {
//  console.log(pro);
//  // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
//  const headers = { 'content-type': 'application/json'}   
//  //const body =JSON.stringify(pro);
//   return  this.http.put<IProduct>("http://localhost:36197/api/Products/"+pro.id,pro,{'headers':headers})
       
   
// }.UpdateCategory

UpdateCategory(cat:Category){
  console.log(cat.id);
  
  return this.http.put<Category>("http://localhost:36197/api/Categories/"+cat.id,cat)
} 
} 