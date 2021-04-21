import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { BannerComponent } from './Layout/banner/banner.component';
import { HomeComponent } from './homePage/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      FooterComponent,
      BannerComponent,
      HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
