import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SliderBackgroundComponent } from './slider-background/slider-background.component';
import { SliderMinComponent } from './slider-min/slider-min.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ProducdDetailesComponent } from './producd-detailes/producd-detailes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    SliderBackgroundComponent,
    SliderMinComponent,
    FooterComponent,
    CategoryComponent,
    ProducdDetailesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
