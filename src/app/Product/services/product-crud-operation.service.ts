import { Injectable } from '@angular/core';
import {Product} from './Api_product'
@Injectable({
  providedIn: 'root'
})
export class ProductCRUDOperationService {

  constructor() { }
 products=new Array();
Create( pro:Product)
{
 // var temp:Product(pro.Name,pro.Quantity,pro.Price,pro.Img,pro.Color)
this.products.push(pro);
return "sucess";
}
getAll()
{
  return this.products;
}
getDetails(id:number)
{
 let all= this.products

let e;
for(e of all)
{
if(e.id==id)
{return e;}
}
return null;
}

Update(pro:Product)
{
 let temp= this.getDetails(pro.ID);
 if(temp!=null)
 {
   temp.Name=pro.Name;
   temp.Quantity= pro.Quantity;
   temp.Price= pro.Price;
   temp.Img= pro.Img;
   temp.Color=pro.Color
  let res= this.products.findIndex(p=>p.ID==pro.ID);
  if(res!=-1)
  {
    this.products[res]=temp;
  }
 }
}
Delete(id:number)
{
  let res= this.products.findIndex(p=>p.ID==id);
  if(res!=-1)
  {
    for(let i=res;i<this.products.length-1;i++)
    {
         this.products[res]=this.products[res+1];
    }
    return "Sucessfully Deleted";
  }
  else{
    return "Element not found";
  }
}
}
