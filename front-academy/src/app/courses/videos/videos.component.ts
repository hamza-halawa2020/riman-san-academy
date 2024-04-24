import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent {
  course: any;
  videos: any;
  courseId: any;
  error: string = '';
  selectedVideo: any;

  videoUrl: any;
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {
    this.videoUrl = `${environment.imgUrl}videos/courses/`;
  }

  ngOnInit(): void {
    this.getCourseDetails();
    this.loadvideos();
  }

  selectVideo(video: any) {
    this.selectedVideo = video;
  }

  loadvideos() {
    this.route.params.subscribe((params) => {
      this.courseId = +params['id'];
      this.coursesService
        .showVideosByCourseID(this.courseId)
        .subscribe((res: any) => {
          this.videos = Object.values(res)[0];
          if (this.videos.length > 0) {
            this.selectedVideo = this.videos[0];
          }
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
