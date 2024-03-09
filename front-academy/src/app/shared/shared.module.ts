import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { WhatsAppComponent } from './whats-app/whats-app.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SubNavbarComponent,
    BackToTopComponent,
    WhatsAppComponent,
    
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports:[
    
    NavbarComponent,
    FooterComponent,
    SubNavbarComponent,
    BackToTopComponent,
    WhatsAppComponent
    
  ]
})
export class SharedModule { }
