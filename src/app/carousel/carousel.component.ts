import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items = ['https://www.govype.com/gb/en/media/catalog/product/cache/0c2031d9a0ac4b3746564fe0abbd90b7/v/y/vype-epen3-product-images-650x650---vproblack-_1.png',
    'https://www.govype.com/gb/en/media/catalog/product/cache/0c2031d9a0ac4b3746564fe0abbd90b7/v/y/vype-epen3-product-images-650x650---vprored-_1.png',
    'https://www.govype.com/gb/en/media/catalog/product/cache/0c2031d9a0ac4b3746564fe0abbd90b7/v/y/vype-epen3-product-images-650x650---vpro-gold-_1.png',
    'https://www.govype.com/gb/en/media/catalog/product/cache/0c2031d9a0ac4b3746564fe0abbd90b7/v/y/vype-epen3-product-images-650x650---vproblue-_1.png',
    'https://www.govype.com/gb/en/media/catalog/product/cache/0c2031d9a0ac4b3746564fe0abbd90b7/v/y/vype-epen3-product-images-650x650---vprosilver-_1.png'];

  constructor() { }

  ngOnInit() {
  }

}
