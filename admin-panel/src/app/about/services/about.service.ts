import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}
  add(data: any) {
    return this.http.post(`${this.apiUrl}abouts`, data);
  }

  getAll() {
    return this.http.get(`${this.apiUrl}abouts`);
  }

  delete(id: any) {
    const url = `${this.apiUrl}abouts/${id}`;
    return this.http.delete(url);
  }
}
