import { Component, Input } from '@angular/core';
import { Customer } from './customer.interface';

@Component({
  selector: 'customers-table',
  templateUrl: './customers-table.component.html'
})
export class CustomersTableComponent {
  @Input() customers: Customer[];
  constructor() {}
}
