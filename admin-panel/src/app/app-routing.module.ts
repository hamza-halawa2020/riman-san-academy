import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { register } from 'swiper/element/bundle';
import { HomeComponent } from './hom-page/home/home.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { ServicesComponent } from './services/services/services.component';
import { AchievementsComponent } from './achievements/achievements/achievements.component';
import { AccreditedCertificatesComponent } from './certificates/accredited-certificates/accredited-certificates.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { ContactComponent } from './contact/contact/contact.component';
import { LoginComponent } from './sign/login/login.component';
import { MemberShipComponent } from './certificates/member-ship/member-ship.component';
import { AuthGuard } from './guards/auth.guard';
import { unauthGuard } from './guards/un-auth.guard';
import { CarouselComponent } from './hom-page/carousel/carousel.component';

register();

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'carousels',
    component: CarouselComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cousreDDDDD',
    component: CourseDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'services',
    component: ServicesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'achievements',
    component: AchievementsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'accredited-certificates',
    component: AccreditedCertificatesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'member-ship',
    component: MemberShipComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contact-us',
    component: ContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [unauthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
