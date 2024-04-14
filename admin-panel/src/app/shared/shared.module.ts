import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, BackToTopComponent],
  imports: [CommonModule, RouterModule, CarouselModule.forRoot()],
  exports: [NavbarComponent, FooterComponent, BackToTopComponent],
})
export class SharedModule {}
