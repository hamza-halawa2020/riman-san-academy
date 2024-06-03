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
  videos: any;
  imageUrl = `${environment.imgUrl}images/courses/`;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.getCourseDetails();
    this.loadvideos();
  }

  loadvideos() {
    this.route.params.subscribe((params) => {
      this.courseId = +params['id'];
      this.coursesService
        .showVideosByCourseID(this.courseId)
        .subscribe((res: any) => {
          this.videos = Object.values(res)[0];
          console.log(this.videos);
        });
    }),
      () => {
        this.error = 'Error loading videos. Please try again later.';
      };
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
