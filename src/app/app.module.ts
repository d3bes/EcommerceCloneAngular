import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrandsComponent } from './Component/brands/brands.component';
import { CategoryComponent } from './Component/category/category.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ProducdDetailesComponent } from './Component/producd-detailes/producd-detailes.component';
import { ProductComponent } from './Component/product/product.component';
import { SliderBackgroundComponent } from './Component/slider-background/slider-background.component';
import { SliderMinComponent } from './Component/slider-min/slider-min.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandsService } from './Services/brands.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    ProducdDetailesComponent,
    BrandsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
 HttpClientModule,
 CarouselModule,
 BrowserAnimationsModule,
 FormsModule

  ],
  providers: [BrandsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
