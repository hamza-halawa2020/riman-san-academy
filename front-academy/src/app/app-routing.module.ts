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
import { RegisterComponent } from './sign/register/register.component';
import { MemberShipComponent } from './certificates/member-ship/member-ship.component';

register();

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'course/:id',
    component: CourseDetailsComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'achievements',
    component: AchievementsComponent,
  },
  {
    path: 'accredited-certificates',
    component: AccreditedCertificatesComponent,
  },
  {
    path: 'member-ship',
    component: MemberShipComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
