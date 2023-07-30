import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductCategoryDTO } from 'src/app/Models/product-category-dto';
import { CatogriesService } from 'src/app/Services/catogries.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  catId: number = 0;
  product: Iproduct | undefined = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsevice: ProductService
  ) {}

  ngOnInit(): void {
    this.catId = this.activatedRoute.snapshot.paramMap.get('categoryID')
      ?Number(this.activatedRoute.snapshot.paramMap.get('categoryID'))
      : 0;

       console.log('Product ID:', this.catId);

    this.productsevice.getProductsByCategoryID(this.catId).subscribe({
      next: (data) => {
        this.product = data;
        console.log('Product:', this.product);
      },
      error: (error) => {
        console.log('Error:', error);
      }
    });
  }
 
}
