import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  pageTitle: string = 'Contact Us';
  formSubmitted: boolean = false;
  error: string = '';
  contacts: any;

  constructor(private router: Router, private contactService: ContactService) {}

  ngOnInit() {}

  submitForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  get name(): FormControl {
    return this.submitForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.submitForm.get('email') as FormControl;
  }
  get phone(): FormControl {
    return this.submitForm.get('phone') as FormControl;
  }
  get message(): FormControl {
    return this.submitForm.get('message') as FormControl;
  }

  Submitted() {
    if (this.submitForm.valid) {
      this.formSubmitted = true;
      this.addcontact();
    } else {
      this.error = 'Form is invalid. Please fill all the required fields.';
    }
  }

  addcontact() {
    this.contactService.add(this.submitForm.value).subscribe(
      (res: any) => {
        this.submitForm.reset();
        this.error = 'contact added successfully.';
      },
      () => {
        this.error = 'Error adding contact. Please try again later.';
      }
    );
  }
}
