import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Colors, IProduct, Product } from 'src/app/Product/services/Api_product';
import { ProductCRUDOperationService } from 'src/app/Product/services/product-crud-operation.service';
import {checkQuantity} from 'src/app/Product/Custom Validation/Quantityvalidation';
import {checkPrice} from 'src/app/Product/Custom Validation/Pricevalidation';
import {checkImg} from 'src/app/Product/Custom Validation/imgvalidators';
import { ICategory } from 'src/app/Services/API_Category';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  errorMsg: any;

  constructor(private ProductService:ProductCRUDOperationService,private fb:FormBuilder) { }
colors=Colors;//["Red","Green","Yellow","Black","White","Blue"]
createproduct=this.fb.group({ 
  name :['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  quantity:['',Validators.required],
  price:['',Validators.required],
  image:['',Validators.required],
  color:['',Validators.required] ,
  categoryID:['',Validators.required]
})

get name(){
return this.createproduct.get('name');
}
get quantity(){
  return this.createproduct.get('quantity');
  }
get price(){
    return this.createproduct.get('price');
    }
get image(){
      return this.createproduct.get('image');
}
get color(){
  return this.createproduct.get("color")
}
get categoryID(){
  return this.createproduct.get("categoryID")
}

 res:string="no";
 p:IProduct
create()
{
this.p={
  id:0,
  name:this.name.value,
  description:"good",
  rate:0,
  quantity:this.quantity.value,
  price:this.price.value,
  image:this.image.value,
  color:this.createproduct.get("color").value,
  categoryID:this.createproduct.get("categoryID").value
 };
this.ProductService.CreatePro(this.p).subscribe(
  pro=>{
    this.p=pro;
    console.log("res:"+this.p)//for test
  },
  errorResponse=>
  {
   this.errorMsg=errorResponse;
  }
  );
    
}

category:ICategory[]=[];
  ngOnInit(): void {
    this.ProductService.returnAllCategory().subscribe(
      Cat=>{
        this.category=Cat;
        console.log(this.category.length)//for test
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
      )
  }
  }

  



