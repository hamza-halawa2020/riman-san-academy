import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}
  add(data: any) {
    return this.http.post(`${this.apiUrl}certificates`, data);
  }

  getAll() {
    return this.http.get(`${this.apiUrl}certificates`);
  }

  delete(id: any) {
    const url = `${this.apiUrl}certificates/${id}`;
    return this.http.delete(url);
  }
}
