export interface ICategory
{
    ID : number,
  	Name : string,  
   	Image : string
   
}
export class Category implements  ICategory 
{
   ID : number;
   Name : string;
   Image : string;
  constructor (id:number,name:string,image:string)
  {
    this.ID=id;
    this.Name=name;
    this.Image=image;  
  }
}
 