import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(`${this.apiUrl}abouts`);
  }

  randomShow() {
    return this.http.get(`${this.apiUrl}randomShowAbout`);
  }
}
