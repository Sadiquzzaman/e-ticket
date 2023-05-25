import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  images = [
    './../../../../../../assets/royal-1.jpg',
    './../../../../../../assets/royal-2.jpg',
    './../../../../../../assets/royal-3.jpg',
    './../../../../../../assets/royal-4.jpg',
  ];

  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: './../../../../../../assets/royal-1.jpg',
    };
    this.slides[1] = {
      src: './../../../../../../assets/royal-2.jpg',
    };
    this.slides[2] = {
      src: './../../../../../../assets/royal-.jpg',
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
