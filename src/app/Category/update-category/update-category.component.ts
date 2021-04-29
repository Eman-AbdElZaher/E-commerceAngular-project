
import { Component, OnInit } from '@angular/core';
import {Category, ICategory} from 'src/app/Services/API_Category';
import {CategoryServicesService} from 'src/app/Services/category-services.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  constructor(private service:CategoryServicesService,private ffb:FormBuilder) { }
  CategoryForm=this.ffb.group(
    {
    Name:['',[Validators.required,Validators.minLength(4)]],
    Image:['',Validators.required]
    }
    );
    get Name()
    {
      return this.CategoryForm.get('Name');
    }
    get ImageCat(){
      return this.CategoryForm.get('Image');
}
errorMsg:string
Cat:ICategory
categor:ICategory[];
 updateCat(){this.Cat={
  id:0,
  name:this.Name.value,
  image:this.ImageCat.value
}
   console.log(this.Cat);
   this.service.UpdateCategory(this.Cat).subscribe(pro=>{
  
    this.Cat=pro;

    console.log("res:"+this.Cat)

  },

  errorResponse=>
  {

   this.errorMsg=errorResponse;

  }

  ); 
    
  
      
 }
 
  ngOnInit(): void {
  }
  

}
