import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CoursesService } from '../service/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  formSubmitted: boolean = false;
  error: string = '';
  videos: any;
  apiVideo = `${environment.imgUrl}videos/videos/`;
  courseId: any;
  videoFile: any;

  constructor(private videoService: CoursesService) {}

  ngOnInit() {
    this.loadvideos();
  }

  submitForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    video: new FormControl('', [Validators.required]),
  });

  get title(): FormControl {
    return this.submitForm.get('title') as FormControl;
  }
  get video(): FormControl {
    return this.submitForm.get('video') as FormControl;
  }

  Submitted() {
    if (this.submitForm.valid) {
      this.formSubmitted = true;
      const formData = new FormData();
      formData.append('title', this.submitForm.value.title as string);
      formData.append('course_id', this.videos.course_id);
      console.log('course_id', this.videos.course_id);

      formData.append('video', this.videoFile as string);

      this.addvideo(formData);
    } else {
      this.error = 'Form is invalid. Please fill all the required fields.';
    }
  }

  saveVideoToDataBase(event: any) {
    this.videoFile = event.target.files[0];
  }

  addvideo(formData: FormData) {
    this.videoService.addVideo(formData).subscribe(
      (res: any) => {
        this.loadvideos();
        this.submitForm.reset();
        this.error = 'video added successfully.';
      },
      () => {
        this.error = 'Error adding video. Please try again later.';
      }
    );
  }

  loadvideos() {
    this.videoService.showVideosByCourseID(this.courseId).subscribe(
      (res: any) => {
        this.videos = Object.values(res)[0];
      },
      () => {
        this.error = 'Error loading videos. Please try again later.';
      }
    );
  }

  deletevideo(id: string) {
    this.videoService.deleteVideo(id).subscribe(
      () => {
        this.error = 'video item deleted successfully.';
        this.loadvideos();
      },
      () => {
        this.error = 'Error deleting video item. Please try again later.';
      }
    );
  }
}
