import { Component, OnInit } from '@angular/core';
import { Colors, IProduct, Product } from 'src/app/Product/services/Api_product';
import { ProductCRUDOperationService } from '../services/product-crud-operation.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  ProductList:IProduct[];
  constructor(private ProductService:ProductCRUDOperationService) {this.ProductList= []; }

  errorMsg: any; 
   
  print()
  {
    this.ProductList.forEach(p => {
    
    });
  }
  ngOnInit(): void {
    this.ProductService.getAll().subscribe(
      (pros)=>{
        this.ProductList=pros;
        console.log(this.ProductList.length);
        this.ProductList.forEach(p => {
        console.log(p);
      });
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
      )
     
  }

}

  
 