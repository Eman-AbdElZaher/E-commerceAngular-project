import { Component, OnInit } from '@angular/core';
import { Colors, Product } from 'src/app/Product/services/Api_product';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }
  products=[
    new Product(1,"pro one",3,200,"img:string",Colors[0],1),
    new Product(2,"pro two",5,400,"img:string",Colors[1],0),
    new Product(3,"pro three",7,300,"img:string",Colors[2],2),
    new Product(4,"pro four",8,260,"img:string",Colors[3],1),
    new Product(5,"pro five",2,20,"img:string",Colors[4],2)
  ]
  ngOnInit(): void {
  }

}
