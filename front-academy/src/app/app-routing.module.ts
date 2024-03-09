import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { register } from 'swiper/element/bundle';
import { HomeComponent } from './hom-page/home/home.component';

register();

const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
