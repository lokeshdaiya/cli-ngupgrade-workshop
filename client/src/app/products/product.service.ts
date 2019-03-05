import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get('/api/products')
      .toPromise()
      .then(response => response);
  }

  getProduct(id) {
    return this.http
      .get(`/api/products/${id}`)
      .toPromise()
      .then(response => response);
  }

  postProduct(product) {
    return this.http
      .post('/api/products', product)
      .toPromise()
      .then(data => {
        return data;
      });
  }
}
