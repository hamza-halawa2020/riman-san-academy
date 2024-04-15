import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../angular-service/service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  formSubmitted: boolean = false;
  error: string = '';
  services: any;
  apiImage = `${environment.imgUrl}images/services/`;

  imageFile: any;

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.loadservices();
  }

  submitForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  get title(): FormControl {
    return this.submitForm.get('title') as FormControl;
  }

  get image(): FormControl {
    return this.submitForm.get('image') as FormControl;
  }

  get description(): FormControl {
    return this.submitForm.get('description') as FormControl;
  }

  Submitted() {
    if (this.submitForm.valid) {
      this.formSubmitted = true;
      const formData = new FormData();
      formData.append('title', this.submitForm.value.title as string);
      formData.append(
        'description',
        this.submitForm.value.description as string
      );

      formData.append('image', this.imageFile as string);

      this.addservice(formData);
    } else {
      this.error = 'Form is invalid. Please fill all the required fields.';
    }
  }

  saveImageToDataBase(event: any) {
    this.imageFile = event.target.files[0];
    // console.log(this.imageFile);
  }

  addservice(formData: FormData) {
    this.serviceService.add(formData).subscribe(
      (res: any) => {
        this.loadservices();
        this.submitForm.reset();
        this.error = 'Service added successfully.';
      },
      () => {
        this.error = 'Error adding service. Please try again later.';
      }
    );
  }

  loadservices() {
    this.serviceService.getAll().subscribe(
      (res: any) => {
        this.services = Object.values(res)[0];
      },
      () => {
        this.error = 'Error loading services. Please try again later.';
      }
    );
  }

  deleteservice(id: string) {
    this.serviceService.delete(id).subscribe(
      () => {
        this.error = 'Service item deleted successfully.';
        this.loadservices();
      },
      () => {
        this.error = 'Error deleting service item. Please try again later.';
      }
    );
  }
}
