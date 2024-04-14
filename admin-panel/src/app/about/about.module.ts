import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class AboutModule {}
