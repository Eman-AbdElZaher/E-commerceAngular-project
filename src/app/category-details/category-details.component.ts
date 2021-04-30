import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from '../Product/services/Api_product';
import { ProductCRUDOperationService } from '../Product/services/product-crud-operation.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  catrgoryID:number;
  ProdutList:IProduct[]=[];
  errormsg: any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,
    private productservice:ProductCRUDOperationService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.catrgoryID=parseInt(params.get('id'));
    })
    this.productservice.getAll().subscribe(
      (products)=>{
        this.ProdutList=products.filter(prod => prod.categoryID === this.catrgoryID)
      },error=>{
        this.errormsg=error;
        console.log(this.errormsg);
      })
  }
  goToProductDtails(Id:Number){
    this.router.navigate(["/ProductDetails",Id]);
  }
}
