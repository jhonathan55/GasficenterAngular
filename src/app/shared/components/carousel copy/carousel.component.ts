import { Component } from '@angular/core';

@Component({
  selector: 'app-carouselb',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponentB {
  currentSlide = 0;
  images = [
    {
      url: 'assets/images/banner/4.jpg',
      caption: 'Caption 1',
    },
    {
      url: 'assets/images/banner/2.jpg',
      caption: 'Caption 2',
    },
    {
      url: 'assets/images/banner/3.jpg',
      caption: 'Caption 2',
    },
    // ... más imágenes
  ];

  next() {
    if (this.currentSlide < this.images.length - 1) {
      this.currentSlide++;
    }
  }

  previous() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}
