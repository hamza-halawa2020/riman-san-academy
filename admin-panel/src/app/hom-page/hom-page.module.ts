import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class HomPageModule {}
