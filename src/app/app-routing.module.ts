import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
