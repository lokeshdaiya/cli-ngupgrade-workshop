import { Component, Inject, OnInit } from '@angular/core';
import { OrderService } from '../orders/order.service';
import { CustomerService } from '../customers/customer.service';
import { forkJoin } from 'rxjs';
import { Customer } from '../customers/customer.interface';

@Component({
  selector: 'create-order',
  templateUrl: './create-order.component.html'
})
export class CreateOrderComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    @Inject('$location') private $location,
    @Inject('productService') private productService
  ) {}
  title = 'Create Order';
  products: any;
  customers: Customer[];

  newOrder = {
    customerId: null,
    items: [
      {
        productId: null,
        quantity: null
      },
      {
        productId: null,
        quantity: null
      }
    ]
  };

  ngOnInit() {
    const createOrderData = [
      this.productService.getProducts(),
      this.customerService.getCustomers().toPromise()
    ];
    forkJoin(createOrderData).subscribe(data => {
      this.products = data[0];
      this.customers = data[1];
    });
  }

  postOrder() {
    this.newOrder.items = this.newOrder.items.filter(x => x.productId !== null);

    return this.orderService.postOrder(this.newOrder).then(() => {
      this.$location.path('/orders');
    });
  }
}
