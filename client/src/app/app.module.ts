import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import moduleName from './app.module.ajs';
import { HomeComponent } from './home/home.component';
import { CustomerService } from './customers/customer.service';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomersComponent } from './customers/customers.component';
import { OrderService } from './orders/order.service';
import {
  locationServiceProvider,
  productServiceProvider,
  addressServiceProvider
} from './ajs.upgradedproviders';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './createOrder/create-order.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import { DiscountDirective } from './customerDetail/discount';

@NgModule({
  declarations: [
    HomeComponent,
    CustomersComponent,
    CustomersTableComponent,
    OrdersComponent,
    CreateOrderComponent,
    CustomerDetailComponent,
    DiscountDirective
  ],
  entryComponents: [
    HomeComponent,
    CustomersComponent,
    CustomersTableComponent,
    OrdersComponent,
    CreateOrderComponent,
    CustomerDetailComponent
  ],
  imports: [BrowserModule, UpgradeModule, HttpClientModule, FormsModule],
  providers: [
    CustomerService,
    OrderService,
    locationServiceProvider,
    productServiceProvider,
    addressServiceProvider
  ],
  bootstrap: []
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [moduleName], {
      strictDi: true
    });
  }
}
