import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  courseId: any;
  course: any;
  imageUrl = `${environment.imgUrl}images/courses/`;


  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.getCourseDetails();
  }

  getCourseDetails() {
    this.route.params.subscribe((params) => {
      this.courseId = +params['id'];
      this.coursesService.getById(this.courseId).subscribe((data) => {
        this.course = Object.values(data)[0];
      });
    });
  }
}
