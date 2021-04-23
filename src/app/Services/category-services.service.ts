import { Injectable } from '@angular/core';
import {Category} from './API_Category'
@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {

  constructor() { }

Categories=new Array();
Create(cat:Category)
{
 // var temp:Product(pro.Name,pro.Quantity,pro.Price,pro.Img,pro.Color)
this.Categories.push(cat);
return "sucess";
}
getAll()
{
  return this.Categories;
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

Update(cat:Category)
{
 let temp= this.getDetails(cat.ID);
 if(temp!=null)
 {
   temp.Name=cat.Name;
   temp.Image=cat.Image;
  let res= this.Categories.findIndex(c=>c.ID==c.ID);
  if(res!=-1)
  {
    this.Categories[res]=temp;
  }
 }
}
Delete(id:number)
{
  let res= this.Categories.findIndex(c=>c.ID==id);
  if(res!=-1)
  {
    for(let i=res;i<this.Categories.length-1;i++)
    {
         this.Categories[res]=this.Categories[res+1];
    }
    return "Sucessfully Deleted";
  }
  else{
    return "Element not found";
  }
}
 
}