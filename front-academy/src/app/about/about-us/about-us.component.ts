import { Component } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-abouut-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  pageTitle: string = 'About Us';
  aboutContent: any;
  constructor(private aboutService: AboutService) {}
  ngOnInit(): void {
    this.loadAboutContent();
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
}
