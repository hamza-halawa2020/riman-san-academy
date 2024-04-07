import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccreditedCertificatesComponent } from './accredited-certificates/accredited-certificates.component';
import { SharedModule } from '../shared/shared.module';
import { MemberShipComponent } from './member-ship/member-ship.component';



@NgModule({
  declarations: [
    AccreditedCertificatesComponent,
    MemberShipComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CertificatesModule { }
