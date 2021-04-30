import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from '../SharedClasses/IProduct';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  catrgoryID:number;
  ProdutList:IProduct[]=[];
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.catrgoryID=parseInt(params.get('id'));
    })
  }
  goToProductDtails(Id:Number){
    this.router.navigate(["/ProductDetails",Id]);
  }

}
