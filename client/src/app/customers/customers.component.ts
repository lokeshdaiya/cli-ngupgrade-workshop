import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.interface';
import { CustomerService } from './customer.service';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  title = 'Customers';
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }
}
