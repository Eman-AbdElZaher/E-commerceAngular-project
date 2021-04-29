export interface ICategory
{
    id : number,
  	name : string,  
   	image : string
   
}
export class Category implements  ICategory 
{
   id : number;
   name : string;
   image: string;
  constructor (id:number,name:string,image:string)
  {
    this.id=id;
    this.name=name;
    this.image=image;  
  }
}
 