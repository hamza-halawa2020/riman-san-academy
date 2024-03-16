import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccreditedCertificatesComponent } from './accredited-certificates/accredited-certificates.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AccreditedCertificatesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CertificatesModule { }
