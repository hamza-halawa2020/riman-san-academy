import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { CardCourseComponent } from './card-course/card-course.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CardCourseComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoursesModule { }
