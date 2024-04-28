import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignService } from '../services/sign.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  pageTitle: string = 'Register';
  formSubmitted: boolean = false;
  error: any;
  constructor(private router: Router, private auth: SignService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    phone: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    profile_img: new FormControl('', [Validators.required]),
  });

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get phone(): FormControl {
    return this.loginForm.get('phone') as FormControl;
  }
  get name(): FormControl {
    return this.loginForm.get('name') as FormControl;
  }

  get profile_img(): FormControl {
    return this.loginForm.get('profile_img') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  loginSubmitted() {
    if (this.loginForm.valid) {
      this.formSubmitted = true;
      this.auth.register(this.loginForm.value).subscribe(
        (res: any) => {
          this.error = 'success login';
          this.loginForm.reset();
          this.router.navigate(['']);
        },
        () => {
          this.error = "can't login";
        }
      );
    } else {
      this.error = 'Form is invalid. Please fill all the required fields.';
    }
  }
}
