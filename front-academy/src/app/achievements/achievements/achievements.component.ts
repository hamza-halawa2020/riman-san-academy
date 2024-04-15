import { Component } from '@angular/core';
import { AchievementsService } from '../services/achievements.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent {
  pageTitle: string = 'Achievements';
  achievementContent: any;
  constructor(private achievementService: AchievementsService) {}
  ngOnInit(): void {
    this.loadachievementContent();
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
}
