import { Component, OnInit } from '@angular/core';
import {Category, ICategory} from 'src/app/Services/API_Category';
import {CategoryServicesService} from 'src/app/Services/category-services.service';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-get-all-category',
  templateUrl: './get-all-category.component.html',
  styleUrls: ['./get-all-category.component.scss']
})
export class GetAllCategoryComponent implements OnInit {
 
  constructor( private service:CategoryServicesService,private route: ActivatedRoute) { }
  categoryList:ICategory[]
  ngOnInit(): void {
    this.refreshcatlist()
  }
  refreshcatlist()
  {
    this.service.getAll().subscribe(data=>{
      this.categoryList=data

  })
  }
  // item:ICategory
  deleteCat(item)
  {
    if(confirm('Are you sure'))
    {
      this.service.DeleteCategory(item.id).subscribe(data=>{alert(data.toString())
        alert('success');
        this.refreshcatlist();
      });  
     
    }
  }
  
  // Cat:Category = {
  //   ID:3,
  //   Name:'',
  //   Image:''
  // };
  // deleteCat(): void {
  //   this.service.DeleteCategory(this.Cat.ID)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.refreshcatlist();
        
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

}
