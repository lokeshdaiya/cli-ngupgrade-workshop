import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products/product.interface';

@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  title = 'Product Detail';
  constructor() {}

  ngOnInit() {}
}
