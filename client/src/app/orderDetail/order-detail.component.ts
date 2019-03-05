// Don't forget to import lodash
import * as _ from 'lodash';
import { ProductService } from '../products/product.service';
import { CustomerService } from '../customers/customer.service';
import { OnInit, Input, Component } from '@angular/core';
import { Order } from '../orders/order.interface';
import { Customer } from '../customers/customer.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit {
  title = 'Order Detail';
  @Input() order: Order;
  customer: Customer;
  dataLoaded = false;

  constructor(
    private productService: ProductService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    const orderDetailData = [
      this.productService.getProducts(),
      this.customerService.getCustomer(this.order.customerId)
    ];
    forkJoin(orderDetailData).subscribe((data: any) => {
      const products = data[0];
      this.customer = data[1];
      this.order.items.forEach(item => {
        const product = _.find(products, p => {
          return p.id === item.productId;
        });
        item.productName = product.name;
        item.itemPrice = item.quantity * product.price;
        this.dataLoaded = true;
      });
    });
  }
}
