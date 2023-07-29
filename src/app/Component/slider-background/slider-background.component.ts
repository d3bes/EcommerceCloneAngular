import { Component } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-background',
  templateUrl: './slider-background.component.html',
  styleUrls: ['./slider-background.component.css']
})
export class SliderBackgroundComponent {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  }

}
