import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { register } from 'swiper/element/bundle';
import { HomeComponent } from './hom-page/home/home.component';
import { AbouutUsComponent } from './about/abouut-us/abouut-us.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { ServicesComponent } from './services/services/services.component';
import { AchievementsComponent } from './achievements/achievements/achievements.component';
import { AccreditedCertificatesComponent } from './certificates/accredited-certificates/accredited-certificates.component';
import { RegisterComponent } from './contact/register/register.component';

register();

const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AbouutUsComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
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
    path: 'register',
    component: RegisterComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
