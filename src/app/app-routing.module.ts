import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CreateProductComponent } from './Product/create-product/create-product.component';
import { DeleteComponent } from './Product/delete/delete.component';
import { DetailsComponent } from './Product/details/details.component';
import { IndexComponent } from './Product/index/index.component';
import { UpdateComponent } from './Product/update/update.component';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'create',component:CreateProductComponent},
  {path:'details',component:DetailsComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'delete',component:DeleteComponent},
  {path:'delete/:id',component:DeleteComponent},
  {path:'update',component:UpdateComponent},
  {path:'update/:id',component:UpdateComponent}
=======
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { HomeComponent } from './homePage/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {
    path:'Categories/:id',
    component:CategoryDetailsComponent
  },
  {
    path:'ProductDetails/:id',
    component:ProductDetailsComponent
  },
  {path:"**",component: NotFoundComponent}
>>>>>>> fde2013d19986bb5e92bf066d24dd010756e46ec
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }