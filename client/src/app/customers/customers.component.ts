import { Component } from '@angular/core';
import { Customer } from './customer.interface';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent {
  customers: Observable<Customer[]> = this.customerService.getCustomers();
  title = 'Customers';
  constructor(private customerService: CustomerService) {}
}
