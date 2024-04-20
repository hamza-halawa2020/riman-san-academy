import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css'],
})
export class CardCourseComponent {
  courseContent: any;
  imageUrl = `${environment.imgUrl}images/courses/`;

  constructor(
    private courseService: CoursesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loadcourseContent();
  }

  loadcourseContent(): void {
    this.courseService.getAll().subscribe(
      (data: any) => {
        this.courseContent = Object.values(data)[0];
      },
      (error: any) => {
        console.error('Error fetching service content:', error);
      }
    );
  }
}
