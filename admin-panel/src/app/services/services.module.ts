import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class ServicesModule {}
