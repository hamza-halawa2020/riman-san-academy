import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from 'src/app/sign/services/sign.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private authService: SignService, private router: Router) {}
  isLoggedIn(): boolean {
    return !!this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
