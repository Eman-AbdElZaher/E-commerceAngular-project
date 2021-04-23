import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { HomeComponent } from './homePage/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {
    path:'Categories/:id',
    component:CategoryDetailsComponent
  },
  {path:"**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }