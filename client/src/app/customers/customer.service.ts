import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http
      .get('/api/customers')
      .toPromise()
      .then(response => response);
  }

  getCustomer(id) {
    return this.http
      .get(`/api/customers/${id}`)
      .toPromise()
      .then(response => response);
  }

  postCustomer(customer) {
    return this.http
      .post('/api/customers', customer)
      .toPromise()
      .then(data => data);
  }
}
