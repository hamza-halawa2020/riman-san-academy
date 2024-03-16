import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { WhatsAppComponent } from './whats-app/whats-app.component';
import { PageHeadersComponent } from './page-headers/page-headers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SubNavbarComponent,
    BackToTopComponent,
    WhatsAppComponent,
    PageHeadersComponent,
  ],
  imports: [CommonModule, RouterModule, CarouselModule.forRoot()],
  exports: [
    NavbarComponent,
    FooterComponent,
    SubNavbarComponent,
    BackToTopComponent,
    WhatsAppComponent,
    PageHeadersComponent,
  ],
})
export class SharedModule {}
