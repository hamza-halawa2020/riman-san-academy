import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../service/courses.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  formSubmitted: boolean = false;
  error: string = '';
  courses: any;
  apiImage = `${environment.imgUrl}images/courses/`;

  imageFile: any;

  constructor(private courseService: CoursesService) {}

  ngOnInit() {
    this.loadcourses();
  }

  submitForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  get title(): FormControl {
    return this.submitForm.get('title') as FormControl;
  }

  get price(): FormControl {
    return this.submitForm.get('price') as FormControl;
  }

  get img(): FormControl {
    return this.submitForm.get('img') as FormControl;
  }

  get description(): FormControl {
    return this.submitForm.get('description') as FormControl;
  }

  Submitted() {
    if (this.submitForm.valid) {
      this.formSubmitted = true;
      const formData = new FormData();
      formData.append('title', this.submitForm.value.title as string);
      formData.append('price', this.submitForm.value.price as string);
      formData.append(
        'description',
        this.submitForm.value.description as string
      );

      formData.append('img', this.imageFile as string);

      this.addcourse(formData);
    } else {
      this.error = 'Form is invalid. Please fill all the required fields.';
    }
  }

  saveImageToDataBase(event: any) {
    this.imageFile = event.target.files[0];
  }

  addcourse(formData: FormData) {
    this.courseService.add(formData).subscribe(
      (res: any) => {
        this.loadcourses();
        this.submitForm.reset();
        this.error = 'course added successfully.';
      },
      () => {
        this.error = 'Error adding course. Please try again later.';
      }
    );
  }

  loadcourses() {
    this.courseService.getAll().subscribe(
      (res: any) => {
        this.courses = Object.values(res)[0];
      },
      () => {
        this.error = 'Error loading courses. Please try again later.';
      }
    );
  }

  deletecourse(id: string) {
    this.courseService.delete(id).subscribe(
      () => {
        this.error = 'course item deleted successfully.';
        this.loadcourses();
      },
      () => {
        this.error = 'Error deleting course item. Please try again later.';
      }
    );
  }
}
