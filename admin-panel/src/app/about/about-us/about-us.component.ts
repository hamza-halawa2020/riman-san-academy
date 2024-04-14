import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  formSubmitted: boolean = false;
  error: string = '';
  abouts: any;

  constructor(private router: Router, private aboutService: AboutService) {}

  ngOnInit() {
    this.loadAbouts();
  }

  submitForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  get title(): FormControl {
    return this.submitForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.submitForm.get('description') as FormControl;
  }

  Submitted() {
    if (this.submitForm.valid) {
      this.formSubmitted = true;
      this.addAbout();
    } else {
      this.error = 'Form is invalid. Please fill all the required fields.';
    }
  }

  addAbout() {
    this.aboutService.add(this.submitForm.value).subscribe(
      (res: any) => {
        this.loadAbouts();
        this.submitForm.reset();
        this.error = 'About added successfully.';
      },
      () => {
        this.error = 'Error adding about. Please try again later.';
      }
    );
  }

  loadAbouts() {
    this.aboutService.getAll().subscribe(
      (res: any) => {
        this.abouts = Object.values(res)[0];
      },
      () => {
        this.error = 'Error loading abouts. Please try again later.';
      }
    );
  }

  deleteAbout(id: string) {
    this.aboutService.delete(id).subscribe(
      () => {
        this.error = 'About item deleted successfully.';
        this.loadAbouts();
      },
      () => {
        this.error = 'Error deleting about item. Please try again later.';
      }
    );
  }
}
