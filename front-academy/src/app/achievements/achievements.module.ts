import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsComponent } from './achievements/achievements.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AchievementsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AchievementsModule { }
