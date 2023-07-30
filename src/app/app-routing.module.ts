import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducdDetailesComponent } from './Component/producd-detailes/producd-detailes.component';
import { HomeComponent } from './Component/home/home.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { UserProfileComponent } from './Component/profile/user-profile/user-profile.component';
import { AddressComponent } from './Component/profile/address/address.component';
import { PaymentComponent } from './Component/profile/payment/payment.component';
import { OrdersComponent } from './Component/profile/orders/orders.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent,title: 'Home'},
  { path: 'prd/:productID', component:ProducdDetailesComponent },
  { path: 'profilesettings', component:ProfileComponent, title: 'Profilesettings'},
  {path: 'profile', component:UserProfileComponent, title: 'Profile'},
  {path: 'addresses', component:AddressComponent, title: 'Addresses'},
  { path: 'payment', component:PaymentComponent, title: 'Payment'},
  {path: 'userorders', component:OrdersComponent, title: 'orders'},
  {path: 'signIn', component:SignUpComponent, title:'auth'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
