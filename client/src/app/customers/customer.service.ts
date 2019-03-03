import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.http.get('/api/customers');
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
