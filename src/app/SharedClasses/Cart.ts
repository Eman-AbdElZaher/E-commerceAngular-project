export class Cartproduct{
        constructor(public quantity:number,public productId:number){

    }
}
export class Cart{
    constructor(
        public userId:string,
        public cartList:Cartproduct[]
    ){

    }
}