import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import moduleName from './app.module.ajs';
import { HomeComponent } from './home/home.component';
import { CustomerService } from './customers/customer.service';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomersComponent } from './customers/customers.component';
import { OrderService } from './orders/order.service';
import {
  locationServiceProvider,
  productServiceProvider
} from './ajs.upgradedproviders';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './createOrder/create-order.component';

@NgModule({
  declarations: [
    HomeComponent,
    CustomersComponent,
    CustomersTableComponent,
    OrdersComponent,
    CreateOrderComponent
  ],
  entryComponents: [
    HomeComponent,
    CustomersComponent,
    CustomersTableComponent,
    OrdersComponent,
    CreateOrderComponent
  ],
  imports: [BrowserModule, UpgradeModule, HttpClientModule],
  providers: [
    CustomerService,
    OrderService,
    locationServiceProvider,
    productServiceProvider
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
