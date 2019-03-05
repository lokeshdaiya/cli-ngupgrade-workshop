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

  getOrder(id): Observable<Order> {
    return this.http.get<Order>(`/api/orders/${id}`);
  }

  getOrdersByCustomer(customerId): Observable<Order[]> {
    return this.http.get<Order[]>(`/api/customers/${customerId}/orders`);
  }

  postOrder(order): Observable<Order> {
    return this.http.post<Order>('/api/orders', order);
  }
}
