import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignService {
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.apiUrl}login`, data);
  }
  register(data: any) {
    return this.http.post(`${this.apiUrl}register`, data);
  }
}
