import * as moment from 'moment';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Customer } from '../customers/customer.interface';
import { OrderService } from '../orders/order.service';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer;
  title = 'Customer Detail';
  address: string;
  orders: any[];
  constructor(
    @Inject('addressService') private addressService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.address = this.addressService.getFullAddress(this.customer);
    return this.orderService
      .getOrdersByCustomer(this.customer.id)
      .then(data => {
        this.orders = data;
        this.orders.forEach(order => {
          order.orderDate = moment(
            order.orderDate,
            'YYYY-MM-DDTHH:mm:ss.SSSSZ'
          ).format('MM/DD/YYYY');
        });
      });
  }

  updateDiscount(discount) {
    this.customer.discount = discount;
  }
}
