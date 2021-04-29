import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { HomeComponent } from './homePage/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
 import{AddCategoryComponent} from './Category/add-category/add-category.component';
 import{UpdateCategoryComponent} from './Category/update-category/update-category.component';
 import{GetAllCategoryComponent} from './Category/get-all-category/get-all-category.component';
 

const routes: Routes = [
  // {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {
    path:'Cate',
    component:AddCategoryComponent
  },
  {
    path:'Catee',
    component:UpdateCategoryComponent
  },
  {
    path:'Categories/:id',
    component:CategoryDetailsComponent
  },
  {
    path:'Cat',
    component:GetAllCategoryComponent
  },
  {
    path:'ProductDetails/:id',
    component:ProductDetailsComponent
  },
 
  {path:"**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }