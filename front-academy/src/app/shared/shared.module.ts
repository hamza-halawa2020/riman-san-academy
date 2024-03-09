import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SubNavbarComponent,
    
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports:[
    
    NavbarComponent,
    FooterComponent,
    SubNavbarComponent,
    
  ]
})
export class SharedModule { }
