import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpRequest,
} from '@angular/common/http';
import { Observable, Subject, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = environment.backEndUrl;

  uploadProgress: Subject<any> = new Subject<any>();

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

  // addVideo(data: any) {
  //   return this.http.post(`${this.apiUrl}videos`, data);
  // }

  addVideo(formData: FormData): Observable<any> {
    const uploadReq = new HttpRequest(
      'POST',
      `${this.apiUrl}videos`,
      formData,
      {
        reportProgress: true,
      }
    );

    return this.http.request(uploadReq).pipe(
      map((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          const progress = Math.round((100 * event.loaded) / event.total!);
          this.uploadProgress.next(progress);
        } else if (event.type === HttpEventType.Response) {
        }
      })
    );
  }

  showVideosByCourseID(course_id: any) {
    return this.http.get(`${this.apiUrl}courses/videos/${course_id}`);
  }

  deleteVideo(id: any) {
    const url = `${this.apiUrl}videos/${id}`;
    return this.http.delete(url);
  }
}
