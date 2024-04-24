import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = environment.backEndUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}courses`);
  }
  getById(id: any) {
    return this.http.get(`${this.apiUrl}courses/${id}`);
  }

  showVideosByCourseID(course_id: any) {
    return this.http.get(`${this.apiUrl}courses/videos/${course_id}`);
  }
}
