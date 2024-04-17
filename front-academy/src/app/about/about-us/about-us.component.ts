import { Component } from '@angular/core';
import { AboutService } from '../services/about.service';
import { CarouselService } from 'src/app/hom-page/services/carousel/carousel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-abouut-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  pageTitle: string = 'About Us';
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
    this.aboutService.getAll().subscribe(
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
