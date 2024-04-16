import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SignService } from '../sign/services/sign.service';

@Injectable({
  providedIn: 'root',
})
export class unauthGuard implements CanActivate {
  constructor(private auth: SignService, private router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
