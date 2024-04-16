import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates/certificates.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accredited-certificates',
  templateUrl: './accredited-certificates.component.html',
  styleUrls: ['./accredited-certificates.component.css'],
})
export class AccreditedCertificatesComponent implements OnInit {
  pageTitle: string = 'certificates';
  certificates: any;
  apiImage = `${environment.imgUrl}images/certificates/`;
  serialNumber: any;
  formSubmitted: boolean = false;
  error: string = '';

  constructor(
    private certificateservice: CertificatesService,
    private sanitizer: DomSanitizer
  ) {}

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {}

  submitForm = new FormGroup({
    serialNumber: new FormControl('', [Validators.required]),
  });

  loadCertificateBySerial(id: string): void {
    this.certificateservice.showBySerialNumber(id).subscribe(
      (res) => {
        this.certificates = Object.values(res)[0];
        // console.log(this.certificates);
      },
      () => {
        this.error = 'Not Found';
      }
    );
  }

  Submitted(): void {
    if (this.submitForm.valid) {
      this.serialNumber = this.submitForm.get('serialNumber')!.value;
      this.loadCertificateBySerial(this.serialNumber);
    } else {
      this.error = 'Invalid form';
    }
  }







  
}
