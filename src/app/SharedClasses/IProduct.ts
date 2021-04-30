export interface IProduct{
    id:number;
    name:string,
    price:number,
    quantity:number,
    desc:string,
    image:string,
    color:string,
    categoryId?:number;
}