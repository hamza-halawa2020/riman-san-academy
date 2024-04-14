import { Component } from '@angular/core';
import { AboutService } from 'src/app/about/services/about.service';

@Component({
  selector: 'app-about-academy',
  templateUrl: './about-academy.component.html',
  styleUrls: ['./about-academy.component.css'],
})
export class AboutAcademyComponent {
  aboutContent: any;
  constructor(private aboutService: AboutService) {}
  ngOnInit(): void {
    this.loadAboutContent();
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
}
