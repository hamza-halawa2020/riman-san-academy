import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}contacts`);
  }

  delete(id: any) {
    const url = `${this.apiUrl}contacts/${id}`;
    return this.http.delete(url);
  }
}
