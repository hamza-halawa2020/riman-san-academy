import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AchievemntService {
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}
  add(data: any) {
    return this.http.post(`${this.apiUrl}achievements`, data);
  }

  getAll() {
    return this.http.get(`${this.apiUrl}achievements`);
  }

  delete(id: any) {
    const url = `${this.apiUrl}achievements/${id}`;
    return this.http.delete(url);
  }
}
