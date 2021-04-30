export interface IProduct{
    ID:number;
    Name:string,
    Price:number,
    Quantity:number,
    Desc:string,
    Image:string,
    Color:string,
    CategoryId?:number;
}