import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Colors, IProduct, Product } from 'src/app/Product/services/Api_product';
import { ProductCRUDOperationService } from 'src/app/Product/services/product-crud-operation.service';
import {checkQuantity} from 'src/app/Product/Custom Validation/Quantityvalidation';
import {checkPrice} from 'src/app/Product/Custom Validation/Pricevalidation';
import {checkImg} from 'src/app/Product/Custom Validation/imgvalidators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICategory } from 'src/app/Services/API_Category';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private ProductService:ProductCRUDOperationService,private fb:FormBuilder){}

 errorMsg: any;
 id:number;
updateproduct=this.fb.group({ 
  id:[''],
  name :['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
  quantity:['',Validators.required],
  price:['',Validators.required],
  image:['',Validators.required],
  color:['',Validators.required] ,
  categoryID:['',Validators.required],
  rate:[''],
  description:['']
})
 
color=Colors;
category:ICategory[]=[];
res:string="no";


get ID(){
  return this.updateproduct.get('id');
  }
get Name(){
return this.updateproduct.get('name');
}
get Quantity(){
  return this.updateproduct.get('quantity');
  }
get Price(){
    return this.updateproduct.get('price');
    }
get Img(){
      return this.updateproduct.get('image');
}


update()
{ 
  let p:IProduct={id:this.id, name:this.Name.value,quantity :this.Quantity.value,
    price :this.Price.value,
    image :this.Img.value,
    color:this.updateproduct.get("color").value,
    categoryID:this.updateproduct.get("categoryID").value,description:"string",
    rate:444}
  console.log("res:"+p)


this. ProductService.Update(p).subscribe(
      pro=>{
        //p=pro;
        console.log("res:"+pro)
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
      );
        
}

setdata(pro :IProduct)
{
  this. updateproduct.patchValue({
    id:this.id,
    name :pro.name,
    quantity:pro.quantity,
    price:pro.price,
    image:pro.id,
    color:pro.color ,
    categoryID:pro.categoryID,
    rate:pro.rate,
    description:pro.description
  })
}

  ngOnInit(): void {

  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
   {
    this.id=parseInt(params.get('id'));

    console.log("id:"+ this.id)
      this.ProductService.getDetails(this.id).subscribe(
       p=>{
         this.setdata(p);
         console.log("in "+p);
       },
       errorResponse=>
       {
        this.errorMsg=errorResponse;
       }
       )
    
    })

    this.ProductService.returnAllCategory().subscribe(
  Cat=>{
    this.category=Cat;
    console.log(this.category.length)
  },
  errorResponse=>
  {
   this.errorMsg=errorResponse;
  }
  )
  }
  
 

}
