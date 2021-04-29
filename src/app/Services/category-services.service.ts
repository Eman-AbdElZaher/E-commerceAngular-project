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

getDetails(id:number)
{
 let all= this.Categories

let e;
for(e of all)
{
if(e.id==id)
{return e;}
}
return null;
}

// UpdateCategory(val:any)
// {
//  // var temp:Product(pro.Name,pro.Quantity,pro.Price,pro.Img,pro.Color)
//  return this.http.put<any>(this.ApiUrl+'/Categories',val);
// }

UpdateCategory(id:ICategory):Observable<any>{

  return this.http.put<ICategory>(`http://localhost:36197/api/Categories`,id);

} 
}