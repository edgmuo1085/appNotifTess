import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Autoplay, Swiper, Virtual } from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay, Virtual]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  progress: number = 0.33333;

  constructor() {}

  ngOnInit() {}

  slideNext() {
    this.progress = this.progress + 0.33333;
    this.swiper.swiperRef.slideNext(100);
  }

  slidePrev() {
    this.progress = this.progress - 0.33333;
    this.swiper.swiperRef.slidePrev(100);
  }
}
