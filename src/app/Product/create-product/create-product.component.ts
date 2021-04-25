import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Colors, Product } from 'src/app/Product/services/Api_product';
import { ProductCRUDOperationService } from 'src/app/Product/services/product-crud-operation.service';
import {checkQuantity} from 'src/app/Product/Custom Validation/Quantityvalidation';
import {checkPrice} from 'src/app/Product/Custom Validation/Pricevalidation';
import {checkImg} from 'src/app/Product/Custom Validation/imgvalidators';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(private ProductService:ProductCRUDOperationService,private fb:FormBuilder) { }
color=Colors;//["Red","Green","Yellow","Black","White","Blue"];
createproduct=this.fb.group({ 
  Name :['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
  Quantity:['',Validators.required],
  Price:['',Validators.required],
  Img:['',Validators.required],
  Color:['',Validators.required] ,
  CategoryId:['',Validators.required]
},{validators:[checkPrice]})

get Name(){
return this.createproduct.get('Name');
}
get Quantity(){
  return this.createproduct.get('Quantity');
  }
get Price(){
    return this.createproduct.get('Price');
    }
get Img(){
      return this.createproduct.get('Img');
}

 count :number=-1;
 res:string="no";
create()
{console.log(this.count);
  this.count=this.ProductService.getAll().length;
  let  pro= new Product(
    this.count+1,this.Name.value,this.Quantity.value,this.Price.value,this.Img.value,
    this.createproduct.get('Color').value,this.createproduct.get('CategoryId').value);
  pro.ID=this.count;
 this.res= this.ProductService.Create(pro);

 console.log("product created data :"+this.res);
this. p=pro;

}
 p:Product;
  ngOnInit(): void {
  }
  
category=[
  {id:1,name:"category one"},
  {id:2,name:"category two"},
  {id:3,name:"category three"}
]
}
