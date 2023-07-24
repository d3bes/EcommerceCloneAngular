import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Iproduct } from 'src/app/Models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit  {

  ProductShow:Iproduct[] = [];
  // ProductShow:Iproduct={} as Iproduct

// @Input() Product:Iproduct ={} as Iproduct
constructor(private _ProductService:ProductService){}

ngOnInit(): void {
  this.getAll()

}
getAll(){
  this._ProductService.getAllProduct().subscribe({
    next:(data)=>{

  this.ProductShow=data
    },error:(err)=>{
      console.log(err);
    }

  })
}



customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },

  },
  nav: true
}

}


