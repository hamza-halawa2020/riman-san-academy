import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SubNavbarComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports:[
    
    NavbarComponent,
    FooterComponent,
    SubNavbarComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
