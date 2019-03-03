import { Component, Input } from '@angular/core';
import { Customer } from './customer.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'customers-table',
  templateUrl: './customers-table.component.html'
})
export class CustomersTableComponent {
  @Input() customers: Observable<Customer[]>;
  constructor() {}
}
