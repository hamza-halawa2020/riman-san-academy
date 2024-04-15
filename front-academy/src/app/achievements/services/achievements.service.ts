import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AchievementsService {
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(`${this.apiUrl}achievements`);
  }
}
