import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstcomComponent } from './firstcom/firstcom.component';

import { ProductComponent } from './Components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,

    FirstcomComponent,

    ProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
