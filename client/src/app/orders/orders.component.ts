import * as _ from 'lodash';
import { Component, OnInit, Inject } from '@angular/core';
import { OrderService } from './order.service';
import { CustomerService } from '../customers/customer.service';
import { Order } from './order.interface';
import { Customer } from '../customers/customer.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  title = 'Orders';
  orders: Order[];
  filteredOrders: Order[];
  customers: Customer[];

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    @Inject('$location') private $location
  ) {}

  ngOnInit() {
    const ordersData = [
      this.orderService.getOrders(),
      this.customerService.getCustomers()
    ];
    forkJoin(ordersData).subscribe((data: any) => {
      this.orders = data[0];
      this.customers = data[1];
      this.orders.forEach(order => {
        const customer = _.find(this.customers, c => {
          return order.customerId === c.id;
        });
        order.customerName = customer.fullName;
      });
      this.filteredOrders = this.orders;
    });
  }

  goToCreateOrder() {
    this.$location.path('/orders/create');
  }

  filterOrders(search: string) {
    this.filteredOrders = this.orders.filter(o =>
      Object.keys(o).some(k => {
        if (typeof o[k] === 'string') {
          return o[k].toLowerCase().includes(search.toLowerCase());
        }
      })
    );
  }
}
