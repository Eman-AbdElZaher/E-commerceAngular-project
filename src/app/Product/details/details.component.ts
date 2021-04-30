import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct, Product } from 'src/app/Product/services/Api_product';
import { ProductCRUDOperationService } from 'src/app/Product/services/product-crud-operation.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  errorMsg: any;

  constructor(private activatedRoute:ActivatedRoute,private ProductService:ProductCRUDOperationService) { }
 pro:IProduct
  
id:number 


  ngOnInit(): void {
    
    
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
   {
   this.id=parseInt(params.get('id'));

   console.log( this.id)//for test
     this.ProductService.getDetails(this.id).subscribe(
      p=>{
        this.pro=p;
        console.log("in "+p);//for test
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
