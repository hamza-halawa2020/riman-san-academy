import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AchievemntService } from '../services/achievemnt.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent {
  pageTitle: string = 'Achievements';

  formSubmitted: boolean = false;
  error: string = '';
  achievements: any;

  constructor(
    private router: Router,
    private achievemntService: AchievemntService
  ) {}

  ngOnInit() {
    this.loadachievemnts();
  }

  submitForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });

  get description(): FormControl {
    return this.submitForm.get('description') as FormControl;
  }

  Submitted() {
    if (this.submitForm.valid) {
      this.formSubmitted = true;
      this.addachievemnt();
    } else {
      this.error = 'Form is invalid. Please fill all the required fields.';
    }
  }

  addachievemnt() {
    this.achievemntService.add(this.submitForm.value).subscribe(
      (res: any) => {
        this.loadachievemnts();
        this.submitForm.reset();
        this.error = 'achievemnt added successfully.';
      },
      () => {
        this.error = 'Error adding achievemnt. Please try again later.';
      }
    );
  }

  loadachievemnts() {
    this.achievemntService.getAll().subscribe(
      (res: any) => {
        this.achievements = Object.values(res)[0];
      },
      () => {
        this.error = 'Error loading achievemnts. Please try again later.';
      }
    );
  }

  deleteachievemnt(id: string) {
    this.achievemntService.delete(id).subscribe(
      () => {
        this.error = 'achievemnt item deleted successfully.';
        this.loadachievemnts();
      },
      () => {
        this.error = 'Error deleting achievemnt item. Please try again later.';
      }
    );
  }
}
