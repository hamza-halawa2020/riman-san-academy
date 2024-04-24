import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { CardCourseComponent } from './card-course/card-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CardCourseComponent,
    CourseDetailsComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class CoursesModule { }
