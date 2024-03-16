import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ServicesModule { }
