import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import {UpdateCategoryComponent} from './Category/update-category/update-category.component';
import {GetAllCategoryComponent} from './Category/get-all-category/get-all-category.component';
import{CategoryServicesService} from './Services/category-services.service';
import { CreateProductComponent } from './Product/create-product/create-product.component';
import { UpdateComponent } from './Product/update/update.component';
import { DetailsComponent } from './Product/details/details.component';
import { DeleteComponent } from './Product/delete/delete.component';
import { IndexComponent } from './Product/index/index.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { BannerComponent } from './Layout/banner/banner.component';
import { HomeComponent } from './homePage/home/home.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
        CreateProductComponent,
        UpdateComponent,
        DetailsComponent,
        DeleteComponent,
        IndexComponent,
      HeaderComponent,
      FooterComponent,
      BannerComponent,
      HomeComponent,
      CategoryDetailsComponent,
      ProductDetailsComponent,
      NotFoundComponent,
      AddCategoryComponent,
      UpdateCategoryComponent,
      GetAllCategoryComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
