import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  imageFile: any;

  constructor(private auth: SignService) {}

  registerForm = new FormGroup({
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
    return this.registerForm.get('email') as FormControl;
  }
  get phone(): FormControl {
    return this.registerForm.get('phone') as FormControl;
  }
  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  get profile_img(): FormControl {
    return this.registerForm.get('profile_img') as FormControl;
  }
  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  registerSubmitted() {
    if (this.registerForm.valid) {
      this.formSubmitted = true;
      const formData = new FormData();
      formData.append('email', this.registerForm.value.email as string);
      formData.append('phone', this.registerForm.value.phone as string);
      formData.append('name', this.registerForm.value.name as string);
      formData.append('password', this.registerForm.value.password as string);
      formData.append('profile_img', this.imageFile as string);
      this.auth.register(formData).subscribe(
        (res: any) => {
          this.error = 'success';
          this.registerForm.reset();
        },
        () => {
          this.error = "can't";
        }
      );
    } else {
      this.error = 'Form is invalid. Please fill all the required fields.';
    }
  }

  saveImageToDataBase(event: any) {
    this.imageFile = event.target.files[0];
    // console.log(this.imageFile);
  }
}
