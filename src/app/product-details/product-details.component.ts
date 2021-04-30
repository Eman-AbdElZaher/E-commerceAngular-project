import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from '../Product/services/Api_product';
import { ProductCRUDOperationService } from '../Product/services/product-crud-operation.service';
import { CategoryServicesService } from '../Services/category-services.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productID:number;
  product:IProduct;
  categoryId:number;
  categoryName:string;
  errorMsg: any;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,
    private ProductService:ProductCRUDOperationService,
    private catservice:CategoryServicesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.productID=parseInt(params.get('id'));
    })
    this.ProductService.getDetails(this.productID).subscribe(
      p=>{
        this.product=p;
        this.categoryId=p.categoryID
        console.log(this.product)//for test
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      })
     this.catservice.getDetails(this.categoryId).subscribe(
       cat=>
       {
          this.categoryName=cat.name;
       },
       errorResponse=>
       {
        this.errorMsg=errorResponse;
       })
  }
}
