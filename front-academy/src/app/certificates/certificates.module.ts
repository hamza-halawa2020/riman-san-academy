import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccreditedCertificatesComponent } from './accredited-certificates/accredited-certificates.component';
import { SharedModule } from '../shared/shared.module';
import { MemberShipComponent } from './member-ship/member-ship.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [AccreditedCertificatesComponent, MemberShipComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
  ],
})
export class CertificatesModule {}
