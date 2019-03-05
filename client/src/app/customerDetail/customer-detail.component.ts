import * as moment from 'moment';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Customer } from '../customers/customer.interface';
import { OrderService } from '../orders/order.service';
import { AddressService } from '../shared/address.service';
import { Order } from '../orders/order.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer;
  title = 'Customer Detail';
  address: string;
  orders: Observable<Order[]>;
  constructor(
    private addressService: AddressService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.address = this.addressService.getFullAddress(this.customer);
    this.orders = this.orderService.getOrdersByCustomer(this.customer.id).pipe(
      map(orders => {
        return orders.map(order => {
          order.orderDate = moment(
            order.orderDate,
            'YYYY-MM-DDTHH:mm:ss.SSSSZ'
          ).format('MM/DD/YYYY');
          return order;
        });
      })
    );
  }

  updateDiscount($event) {
    this.customer.discount = $event.discount;
  }
}
