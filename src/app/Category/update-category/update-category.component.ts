
import { Component, OnInit } from '@angular/core';
import {Category, ICategory} from 'src/app/Services/API_Category';
import {CategoryServicesService} from 'src/app/Services/category-services.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  constructor(private service:CategoryServicesService,private ffb:FormBuilder,private activatedRoute:ActivatedRoute) { }
  errorMsg: any;
   id:number;
  CategoryForm=this.ffb.group(
    {
      id:[''],
    name:['',[Validators.required,Validators.minLength(4)]],
    image:['',Validators.required]
    }
    );
    get ID(){
      return this.CategoryForm.get('id');
      }
    get Name()
    {
      return this.CategoryForm.get('name');
    }
    get ImageCat(){
      return this.CategoryForm.get('image');
}
Cat:ICategory
categor:ICategory[];
updateCat()
{ 
  let c:ICategory={id:this.q,name:this.Name.value,image:this.ImageCat.value,
    }
  console.log("res:"+c)


 this.service.UpdateCategory(c).subscribe(
      cat=>{
        
        console.log("res:"+cat)
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
      );
        
}

//  updateCats(){this.Cat={
//   id:0,
//   name:this.Name.value,
//   image:this.ImageCat.value
// }
//    console.log(this.Cat);
//    this.service.UpdateCategory(this.Cat).subscribe(pro=>{
  
//     this.Cat=pro;

//     console.log("res:"+this.Cat)

//   },

//   errorResponse=>
//   {

//    this.errorMsg=errorResponse;

//   }

//   ); 
    
  
      
//  }
setdata(cat :ICategory)
{
  this.CategoryForm.patchValue({
     id:this.id,
     name :cat.name,
     Image:cat.image
  })
}
 q:number
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>

    {

      this.q=parseInt(params.get('id'));

    })
  }
  

}
