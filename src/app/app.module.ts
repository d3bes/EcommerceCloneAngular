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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrandsService } from './Services/brands.service';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { OrdersComponent } from './Component/profile/orders/orders.component';
import { UserProfileComponent } from './Component/profile/user-profile/user-profile.component';
import { WhishListComponent } from './Component/profile/whish-list/whish-list.component';
import { AddressComponent } from './Component/profile/address/address.component';
import { ImgeNavComponent } from './imge-nav/imge-nav.component';
import { PaymentComponent } from './Component/profile/payment/payment.component'; 
import { InterceptorService } from './Services/interceptor.service';
import { Interceptor } from './Services/interceptor';


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
    SignUpComponent,
    ProfileComponent,
    OrdersComponent,
    UserProfileComponent,
    WhishListComponent,
    AddressComponent,
    PaymentComponent,
    ImgeNavComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi : true
  },
  BrandsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
