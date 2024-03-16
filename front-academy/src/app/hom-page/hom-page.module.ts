import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutAcademyComponent } from './about-academy/about-academy.component';
import { AvilableCoursesComponent } from './avilable-courses/avilable-courses.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { BestServiceComponent } from './best-service/best-service.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    AboutAcademyComponent,
    AvilableCoursesComponent,
    ChooseUsComponent,
    BestServiceComponent,
  ],
  imports: [CommonModule,RouterModule, CarouselModule.forRoot()],
})
export class HomPageModule {}
