import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = environment.backEndUrl;


  constructor(private http: HttpClient) {}


  setOrder(order: any) {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }



  getOrders() {
    return this.http.get(`${this.apiUrl}/orders`);
  }

  getOrderById(orderId: number) {
    return this.http.get(`${this.apiUrl}/orders/${orderId}`);
  }

  deleteOrder(orderId: number) {
    const url = `${this.apiUrl}/orders/${orderId}`;
    return this.http.delete(url);
  }


}
