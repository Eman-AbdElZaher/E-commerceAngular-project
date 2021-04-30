export interface IProduct
{
    id : number,
  	name : string,
   	quantity : number,
    price : number,
    image : string
    color:string,
    categoryID:number,
    description:string,
    rate:number
    
}
export class Product implements IProduct
{
  
  id : number;
  name : string;
   quantity : number;
  price : number;
  image : string;
  color:string;
  categoryID:number;
  description:string;
  rate:number;
  constructor (id:number,name:string,q:number,price:number,img:string,c:string, CategoryId:number)
  {
    this.id=id;
    this.name=name;
    this.quantity=q;
    this.price=price;
    this.image=img;
    this.color=c;
    this.categoryID=CategoryId;
   
  }
}
 var Colors =["Red","Green","Yellow","Black","White","Blue"]
 export {
    Colors
    }