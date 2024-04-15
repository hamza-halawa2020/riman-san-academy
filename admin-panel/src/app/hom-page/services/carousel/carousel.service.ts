import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}
  add(data: any) {
    return this.http.post(`${this.apiUrl}carousels`, data);
  }

  getAll() {
    return this.http.get(`${this.apiUrl}carousels`);
  }

  delete(id: any) {
    const url = `${this.apiUrl}carousels/${id}`;
    return this.http.delete(url);
  }
}
