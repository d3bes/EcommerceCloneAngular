import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-producd-detailes',
  templateUrl: './producd-detailes.component.html',
  styleUrls: ['./producd-detailes.component.css']
})
export class ProducdDetailesComponent {
  prdId: string = "";
  product: Iproduct | undefined = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsevice: ProductService
  ) {}

  ngOnInit(): void {
    this.prdId = this.activatedRoute.snapshot.paramMap.get('productID')
      ?String(this.activatedRoute.snapshot.paramMap.get('productID'))
      : "";

       console.log('Product ID:', this.prdId);

    this.productsevice.getById(this.prdId).subscribe({
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
