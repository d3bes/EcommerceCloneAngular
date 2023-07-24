import { Component } from '@angular/core';
import { ProductCategoryDetailsDTO } from 'src/app/Models/product-category-details-dto';
import { CatogriesService } from 'src/app/Services/catogries.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  catogries: ProductCategoryDetailsDTO[] = [];
  constructor(private catogriesService: CatogriesService) { }

  ngOnInit():void {
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
}
