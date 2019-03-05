import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { Product } from './product.interface';

@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  title = 'Products';
  products: Observable<Product[]> = this.productService.getProducts();

  constructor(private productService: ProductService) {}
}
