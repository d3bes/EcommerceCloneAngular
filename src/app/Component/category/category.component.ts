import { Component } from '@angular/core';
import { ProductCategoryDTO } from 'src/app/Models/product-category-dto';
import { CatogriesService } from 'src/app/Services/catogries.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  catogries: ProductCategoryDTO[] = [];

  constructor(private catogriesService: CatogriesService) { }

  ngOnInit():void {
    this.catogriesService.getAllCatogries().subscribe({
      next: (data: ProductCategoryDTO[]) => {
        this.catogries = data;
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
}
