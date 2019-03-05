import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`/api/products/${id}`);
  }

  postProduct(product): Observable<Product> {
    return this.http.post<Product>('/api/products', product);
  }
}
