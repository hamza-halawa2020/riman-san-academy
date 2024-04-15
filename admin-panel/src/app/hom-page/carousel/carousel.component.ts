import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CarouselService } from '../services/carousel/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  formSubmitted: boolean = false;
  error: string = '';
  carousels: any;
  apiImage = `${environment.imgUrl}images/carousels/`;

  imageFile: any;

  constructor(private carouselcarousel: CarouselService) {}

  ngOnInit() {
    this.loadcarousels();
  }

  submitForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    sub_title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  get title(): FormControl {
    return this.submitForm.get('title') as FormControl;
  }

  get image(): FormControl {
    return this.submitForm.get('image') as FormControl;
  }

  get sub_title(): FormControl {
    return this.submitForm.get('sub_title') as FormControl;
  }

  Submitted() {
    if (this.submitForm.valid) {
      this.formSubmitted = true;
      const formData = new FormData();
      formData.append('title', this.submitForm.value.title as string);
      formData.append('sub_title', this.submitForm.value.sub_title as string);

      formData.append('image', this.imageFile as string);

      this.addcarousel(formData);
    } else {
      this.error = 'Form is invalid. Please fill all the required fields.';
    }
  }

  saveImageToDataBase(event: any) {
    this.imageFile = event.target.files[0];
    // console.log(this.imageFile);
  }

  addcarousel(formData: FormData) {
    this.carouselcarousel.add(formData).subscribe(
      (res: any) => {
        this.loadcarousels();
        this.submitForm.reset();
        this.error = 'carousel added successfully.';
      },
      () => {
        this.error = 'Error adding carousel. Please try again later.';
      }
    );
  }

  loadcarousels() {
    this.carouselcarousel.getAll().subscribe(
      (res: any) => {
        this.carousels = Object.values(res)[0];
      },
      () => {
        this.error = 'Error loading carousels. Please try again later.';
      }
    );
  }

  deletecarousel(id: string) {
    this.carouselcarousel.delete(id).subscribe(
      () => {
        this.error = 'carousel item deleted successfully.';
        this.loadcarousels();
      },
      () => {
        this.error = 'Error deleting carousel item. Please try again later.';
      }
    );
  }
}
