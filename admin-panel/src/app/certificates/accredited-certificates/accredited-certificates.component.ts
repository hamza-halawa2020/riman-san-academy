import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CertificatesService } from '../services/certificates/certificates.service';

@Component({
  selector: 'app-accredited-certificates',
  templateUrl: './accredited-certificates.component.html',
  styleUrls: ['./accredited-certificates.component.css'],
})
export class AccreditedCertificatesComponent {
  formSubmitted: boolean = false;
  error: string = '';
  certificates: any;
  apiImage = `${environment.imgUrl}images/certificates/`;

  imageFile: any;

  constructor(private certificatecertificate: CertificatesService) {}

  ngOnInit() {
    this.loadcertificates();
  }

  submitForm = new FormGroup({
    serial_number: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  get serial_number(): FormControl {
    return this.submitForm.get('serial_number') as FormControl;
  }

  get image(): FormControl {
    return this.submitForm.get('image') as FormControl;
  }

  Submitted() {
    if (this.submitForm.valid) {
      this.formSubmitted = true;

      const formData = new FormData();
      formData.append(
        'serial_number',
        this.submitForm.value.serial_number as string
      );

      formData.append('image', this.imageFile as string);

      this.addcertificate(formData);
    } else {
      this.error = 'Form is invalid. Please fill all the required fields.';
    }
  }

  saveImageToDataBase(event: any) {
    this.imageFile = event.target.files[0];
  }

  addcertificate(formData: FormData) {
    this.certificatecertificate.add(formData).subscribe(
      (res: any) => {
        this.loadcertificates();
        this.submitForm.reset();
        this.error = 'certificate added successfully.';
      },
      () => {
        this.error = 'Error adding certificate. Please try again later.';
      }
    );
  }

  loadcertificates() {
    this.certificatecertificate.getAll().subscribe(
      (res: any) => {
        this.certificates = Object.values(res)[0];
      },
      () => {
        this.error = 'Error loading certificates. Please try again later.';
      }
    );
  }

  deletecertificate(id: string) {
    this.certificatecertificate.delete(id).subscribe(
      () => {
        this.error = 'certificate item deleted successfully.';
        this.loadcertificates();
      },
      () => {
        this.error = 'Error deleting certificate item. Please try again later.';
      }
    );
  }
}
