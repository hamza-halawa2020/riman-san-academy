import { Component } from '@angular/core';
import { AboutService } from 'src/app/about/services/about.service';
import { environment } from 'src/environments/environment';
import { CarouselService } from '../services/carousel/carousel.service';

@Component({
  selector: 'app-about-academy',
  templateUrl: './about-academy.component.html',
  styleUrls: ['./about-academy.component.css'],
})
export class AboutAcademyComponent {
  aboutContent: any;
  carousels: any;
  apiImage = `${environment.imgUrl}images/carousels/`;
  constructor(
    private aboutService: AboutService,
    private CarouselService: CarouselService
  ) {}
  ngOnInit(): void {
    this.loadAboutContent();
    this.loadcarousel();
  }

  loadAboutContent(): void {
    this.aboutService.randomShow().subscribe(
      (data: any) => {
        this.aboutContent = Object.values(data)[0];
      },
      (error: any) => {
        console.error('Error fetching about content:', error);
      }
    );
  }
  loadcarousel(): void {
    this.CarouselService.randomShow().subscribe(
      (data: any) => {
        this.carousels = Object.values(data)[0];
      },
      (error: any) => {
        console.error('Error fetching about content:', error);
      }
    );
  }
}
