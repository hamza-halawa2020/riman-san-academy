import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { register } from 'swiper/element/bundle';
import { HomeComponent } from './hom-page/home/home.component';
import { AbouutUsComponent } from './about/abouut-us/abouut-us.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
