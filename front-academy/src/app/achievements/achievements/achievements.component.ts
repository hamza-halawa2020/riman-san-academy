import { Component } from '@angular/core';
import { AchievementsService } from '../services/achievements.service';
import { CarouselService } from 'src/app/hom-page/services/carousel/carousel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent {
  pageTitle: string = 'Achievements';
  achievementContent: any;
  carousels: any;
  apiImage = `${environment.imgUrl}images/carousels/`;
  constructor(
    private achievementService: AchievementsService,
    private CarouselService: CarouselService
  ) {}
  ngOnInit(): void {
    this.loadachievementContent();
    this.loadcarousel();
  }

  loadachievementContent(): void {
    this.achievementService.getAll().subscribe(
      (data: any) => {
        this.achievementContent = Object.values(data)[0];
      },
      (error: any) => {
        console.error('Error fetching achievement content:', error);
      }
    );
  }
  loadcarousel(): void {
    this.CarouselService.randomShow().subscribe(
      (data: any) => {
        this.carousels = Object.values(data)[0];
        console.log(this.carousels);
      },
      (error: any) => {
        console.error('Error fetching about content:', error);
      }
    );
  }
}
