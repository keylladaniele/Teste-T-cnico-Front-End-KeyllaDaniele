import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    'https://i.ibb.co/gZvyX46/banner-1.jpg',
    'https://i.ibb.co/k6W0B5G/banner-2.jpg',
    'https://i.ibb.co/L5nH3Mq/banner-3.jpg'
  ];
  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
