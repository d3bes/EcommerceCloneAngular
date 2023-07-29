import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducdDetailesComponent } from './Component/producd-detailes/producd-detailes.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeComponent } from './Component/home/home.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent,title: 'Home'},
  { path: 'prd/:productID', component:ProducdDetailesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
