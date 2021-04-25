import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CreateProductComponent } from './Product/create-product/create-product.component';
import { UpdateComponent } from './Product/update/update.component';
import { DetailsComponent } from './Product/details/details.component';
import { DeleteComponent } from './Product/delete/delete.component';
import { IndexComponent } from './Product/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
        CreateProductComponent,
        UpdateComponent,
        DetailsComponent,
        DeleteComponent,
        IndexComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
