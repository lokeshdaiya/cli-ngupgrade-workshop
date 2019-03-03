import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.interface';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/orders');
  }

  getOrder(id): Promise<Order> {
    return this.http
      .get<Order>(`/api/orders/${id}`)
      .toPromise()
      .then(response => response);
  }

  getOrdersByCustomer(customerId): Promise<Order[]> {
    return this.http
      .get<Order[]>(`/api/customers/${customerId}/orders`)
      .toPromise()
      .then(response => response);
  }

  postOrder(order): Promise<Order> {
    return this.http
      .post<Order>('/api/orders', order)
      .toPromise()
      .then(response => response);
  }
}
