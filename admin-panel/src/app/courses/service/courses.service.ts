import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}
  add(data: any) {
    return this.http.post(`${this.apiUrl}courses`, data);
  }

  getAll() {
    return this.http.get(`${this.apiUrl}courses`);
  }

  delete(id: any) {
    const url = `${this.apiUrl}courses/${id}`;
    return this.http.delete(url);
  }

  addVideo(data: any) {
    return this.http.post(`${this.apiUrl}videos`, data);
  }

  getAllVideo() {
    return this.http.get(`${this.apiUrl}videos`);
  }

  deleteVideo(id: any) {
    const url = `${this.apiUrl}videos/${id}`;
    return this.http.delete(url);
  }
}
