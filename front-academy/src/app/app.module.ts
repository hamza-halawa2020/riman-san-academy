import { AchievementsModule } from './achievements/achievements.module';
import { ServicesModule } from './services/services.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgToastModule } from 'ng-angular-popup';
import { SharedModule } from './shared/shared.module';
import { HomPageModule } from './hom-page/hom-page.module';
import { AboutModule } from './about/about.module';
import { CoursesModule } from './courses/courses.module';
import { CertificatesModule } from './certificates/certificates.module';
import { ContactModule } from './contact/contact.module';
import { SignModule } from './sign/sign.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenAuthInterceptor } from './interceptor/token-auth.interceptor';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    NgToastModule,
    SharedModule,
    HomPageModule,
    AboutModule,
    CoursesModule,
    ServicesModule,
    AchievementsModule,
    CertificatesModule,
    ContactModule,
    ServicesModule,
    SignModule,
    AchievementsModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthInterceptor,
      multi: true,
    },
    [DatePipe],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
