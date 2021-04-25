import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/Product/services/Api_product';
import { ProductCRUDOperationService } from 'src/app/Product/services/product-crud-operation.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private ProductService:ProductCRUDOperationService) { }
  pro :Product;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
   {this.pro=new Product(1,"k",4,200,"1.ico","red",2);
    // this.pro=this.ProductService.getDetails( parseInt(params.get('id')));
   })
  }
 res:any;
 Deletepro()
  {console.log();
   
   
   this.res= this.ProductService.Delete(this.pro.ID);
   console.log(this.res);
  }
}

