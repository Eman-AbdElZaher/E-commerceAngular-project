export interface IProduct
{
    ID : number,
  	Name : string,
   	Quantity : number,
    Price : number,
   	Img : string
    Color:string,
    CategoryId:number
    
}
export class Product implements IProduct
{
  ID : number;
  Name : string;
   Quantity : number;
  Price : number;
   Img : string;
   Color:string;
   CategoryId:number
  constructor (id:number,name:string,q:number,price:number,img:string,c:string, CategoryId:number)
  {
    this.ID=id;
    this.Name=name;
    this.Quantity=q;
    this.Price=price;
    this.Img=img;
    this.Color=c;
    this.CategoryId=CategoryId;
   
  }
}
 var Colors =["Red","Green","Yellow","Black","White","Blue"]
 export {
    Colors
    }