import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}
  add(data: any) {
    return this.http.post(`${this.apiUrl}services`, data);
  }

  getAll() {
    return this.http.get(`${this.apiUrl}services`);
  }

  delete(id: any) {
    const url = `${this.apiUrl}services/${id}`;
    return this.http.delete(url);
  }
}
