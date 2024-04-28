import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignService {
  private apiUrl = environment.backEndUrl;
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}
  login(data: any) {
    return this.http.post(`${this.apiUrl}admin-login`, data);
  }

  setTokenInCookie(token: string) {
    this.cookieService.set('admin-token', token);
  }
  getTokenFromCookie(): any {
    return this.cookieService.get('admin-token');
  }
  isLoggedIn() {
    return this.getTokenFromCookie();
  }

  logout() {
    this.cookieService.delete('admin-token');
    this.router.navigate(['/login']);
  }
}
