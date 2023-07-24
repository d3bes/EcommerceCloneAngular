import { Component } from '@angular/core';
import { ProductCategoryDetailsDTO } from 'src/app/Models/product-category-details-dto';
import { CatogriesService } from 'src/app/Services/catogries.service';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-min',
  templateUrl: './slider-min.component.html',
  styleUrls: ['./slider-min.component.css']
})
export class SliderMinComponent {
  catogries: ProductCategoryDetailsDTO[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private catogriesService: CatogriesService) { }

  ngOnInit():void {
    this.catogriesService.getAllCatogries().subscribe({
      next: (data: ProductCategoryDetailsDTO[]) => {
        this.catogries = data.filter((category) => category.imgUrl !== "");
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
