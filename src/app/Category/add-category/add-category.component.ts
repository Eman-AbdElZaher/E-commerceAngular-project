import { Component, OnInit } from '@angular/core';
import {Category, ICategory} from 'src/app/Services/API_Category';
import {CategoryServicesService} from 'src/app/Services/category-services.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { $ } from 'protractor';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

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
img:File;
errorMsg:string
Cat:ICategory
categor:ICategory[];
 createCat(){this.Cat={
  id:0,
  name:this.Name.value,
  image:this.ImageCat.value
}
   console.log(this.Cat);
   this.service.CreateCategory(this.Cat).subscribe(pro=>{
  
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
    this.img=null;
  }
  handelfile(event:any)
  {
    if(event.target.files !==null && event.target.files > 0){
    this.img=event.target.files[0];
    // const reader=new FileReader();
    // reader.onload=function(e){
    //   $("#image").attr('src',e.target.result)
    // }
    // reader.readAsDataURL(this.img);
    }
    else
    {
      this.img=null;
      console.log('nada');
    }
  }
  // handelfile(event)
  // {
   
  //    console.log(event);
  // }


}
