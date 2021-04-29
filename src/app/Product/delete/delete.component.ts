import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct, Product } from 'src/app/Product/services/Api_product';
import { ProductCRUDOperationService } from 'src/app/Product/services/product-crud-operation.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  errorMsg: any;

  constructor(private activatedRoute:ActivatedRoute,private ProductService:ProductCRUDOperationService) {}

   
 
  pro :IProduct;
  id:number;
  Deletepro()
  { console.log("detlete")
    this.ProductService.Delete(this.id).subscribe(
      p=>{
       
        console.log("detlete:"+p)//for test
        return "ok";
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
       return errorResponse
      }
    )
   }

   ngOnInit(): void {
   
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.ProductService.getDetails(parseInt(params.get('id'))).subscribe(
       p=>{
        console.log(p)//for test
         this.pro=p;
         this.id=parseInt(params.get('id'));
         console.log(this.id+"id:"+p.id)//for test
         console.log(this.pro)//for test
       },
       errorResponse=>
       {
        this.errorMsg=errorResponse;
       }
       )
     
    })
   }
 
  }


