import { Component } from '@angular/core';
import { CarouselService } from '../services/carousel/carousel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  carousels: any;
  error: string = '';
  apiImage = `${environment.imgUrl}images/carousels/`;


  constructor(private carouselcarousel: CarouselService) {}

  ngOnInit() {
    this.loadcarousels();
  }


  loadcarousels() {
    this.carouselcarousel.getAll().subscribe(
      (res: any) => {
        this.carousels = Object.values(res)[0];
      },
      () => {
        this.error = 'Error loading carousels. Please try again later.';
      }
    );
  }







}
