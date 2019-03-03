import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.interface';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/api/customers');
  }

  getCustomer(id): Promise<any> {
    return this.http
      .get(`/api/customers/${id}`)
      .toPromise()
      .then(response => response);
  }

  postCustomer(customer): Promise<any> {
    return this.http
      .post('/api/customers', customer)
      .toPromise()
      .then(data => data);
  }
}
