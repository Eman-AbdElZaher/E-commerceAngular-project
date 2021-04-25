import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Colors, Product } from 'src/app/Product/services/Api_product';
import { ProductCRUDOperationService } from 'src/app/Product/services/product-crud-operation.service';
import {checkQuantity} from 'src/app/Product/Custom Validation/Quantityvalidation';
import {checkPrice} from 'src/app/Product/Custom Validation/Pricevalidation';
import {checkImg} from 'src/app/Product/Custom Validation/imgvalidators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private ProductService:ProductCRUDOperationService,private fb:FormBuilder) {
    
     
this. updateproduct.patchValue({
  Name :"product one",
  Quantity:20,
  Price:200,
  Img:"a.jpg",
  Color:this.color[3] ,//black
  CategoryId:this.category[2].id//3
})
  }
color=Colors;
updateproduct=this.fb.group({ 
  Name :['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
  Quantity:['',Validators.required],
  Price:['',Validators.required],
  Img:['',Validators.required],
  Color:['',Validators.required] ,
  CategoryId:['',Validators.required]
},{validators:[checkQuantity,checkPrice,checkImg]})
get Name(){
return this.updateproduct.get('Name');
}
get Quantity(){
  return this.updateproduct.get('Quantity');
  }
get Price(){
    return this.updateproduct.get('Price');
    }
get Img(){
      return this.updateproduct.get('Img');
}

 count :number=-1;
 res:string="no";


update()
{console.log(this.count);
  this.count+=1;
  let  pro= new Product(0,"kkk",4,88,"lll","lko",1);
  pro.ID=this.count;
 this.res= this.ProductService.Create(pro);
 console.log(this.res);
}

  ngOnInit(): void {
  }
  
category=[
  {id:1,name:"category one"},
  {id:2,name:"category two"},
  {id:3,name:"category three"}
]
}
