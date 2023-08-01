import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductBrandDTO } from 'src/app/Models/product-brand-dto';
import { BrandsService } from 'src/app/Services/brands.service';
import { CatogriesService } from 'src/app/Services/catogries.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  productbrand: Iproduct[] | undefined = undefined;
  brdId:number=0;
  urlImage:string ="http://localhost:5195/files/images/";

  constructor( private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsevice: ProductService,
    private catogriesService:CatogriesService
  ) {}
  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const brandId = Number(params.get('brandID'));
      if (!isNaN(brandId)) {
        this.brdId = brandId;
        this.loadProductsbrand();
      } else {
        // Handle invalid category ID
      }
    });
  }


  private loadProductsbrand(): void {
    this.productsevice.getAllProduct().subscribe({
      next: (data:Iproduct[]) => { 
        this.productbrand = data.filter((brand) => brand.brandId === this.brdId ); 

        
      },
      error: (error) => {
        console.log('Error:', error);
      },
    });
  }
  prdDetails(prdId:string){
    this.router.navigate(['prd',prdId]);
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
