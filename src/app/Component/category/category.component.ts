import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductCategoryDTO } from 'src/app/Models/product-category-dto';
import { ProductService } from 'src/app/Services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CatogriesService } from 'src/app/Services/catogries.service';
import { ProducdDetailesComponent } from '../producd-detailes/producd-detailes.component';
import { ProductCategoryDetailsDTO } from 'src/app/Models/product-category-details-dto';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
 catId: number = 0;
  products: Iproduct[] | undefined = undefined;
  catogries: any[] = [];  

  constructor( private router: Router, 
    private activatedRoute: ActivatedRoute,
    private productsevice: ProductService,
    private catogriesService:CatogriesService
  ) {}
  urlImage:string ="http://localhost:5195/files/images/";

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      const categoryId = Number(params.get('categoryID'));
      if (!isNaN(categoryId)) {
        this.catId = categoryId;
        this.loadProducts();
      } else {
        // Handle invalid category ID
      }
    });
   /*  this.catId = this.activatedRoute.snapshot.paramMap.get('categoryID')
    ?Number(this.activatedRoute.snapshot.paramMap.get('categoryID'))
    : 0;

     console.log('category ID:', this.catId);

  this.productsevice.getProductsByCategoryID(this.catId).subscribe({
    next: (data) => {
      this.products = data;
      console.log('Product:', this.products);
    },
    error: (error) => {
      console.log('Error:', error);
    }
  }); */
  this.catogriesService.getAllCatogries().subscribe({
    next: (data: ProductCategoryDetailsDTO[]) => {
      this.catogries = data.filter((category) => category.parentCategoryId === null);
      console.log(this.catogries);
    },
    error: (error: any) => {
      console.error('Error fetching brands:', error);
    },
    complete: () => {
      console.log('Fetching brands completed.');
    }
  });
  }
 
  
  private loadProducts(): void {
    this.productsevice.getProductsByCategoryID(this.catId).subscribe({
      next: (data) => {
        this.products = data;
        console.log('Product:', this.products);
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
