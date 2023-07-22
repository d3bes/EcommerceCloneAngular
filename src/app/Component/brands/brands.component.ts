import { Component, OnInit } from '@angular/core';
import { ProductBrandDTO } from 'src/app/Models/product-brand-dto';
import { BrandsService } from 'src/app/Services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: ProductBrandDTO[] = [];

  constructor(private productBrandService: BrandsService) { }

  ngOnInit():void {
    this.productBrandService.getAllBrands().subscribe({
      next: (data: ProductBrandDTO[]) => {
        this.brands = data;
        console.log(this.brands);
      },
      error: (error: any) => {
        console.error('Error fetching brands:', error);
      },
      complete: () => {
        console.log('Fetching brands completed.');
      }
    });
  }
}
