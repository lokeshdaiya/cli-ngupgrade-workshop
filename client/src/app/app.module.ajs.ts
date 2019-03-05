import * as angular from 'angular';
import 'angular-route';

import 'jquery';
import 'lodash';

import {
  downgradeComponent,
  downgradeInjectable
} from '@angular/upgrade/static';

import hashPrefixConfig from './config.hashprefix';
import routeProviderConfig from './config.routes';
import { HomeComponent } from './home/home.component';
import navigationComponent from './navigation/navigation';
import { CustomersComponent } from './customers/customers.component';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import discountComponent from './customerDetail/discount';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './createOrder/create-order.component';
import orderDetailComponent from './orderDetail/orderDetail';
import productsComponent from './products/products';
import productDetailComponent from './productDetail/productDetail';
import { CustomerService } from './customers/customer.service';
import AddressService from './shared/addressService';
import { OrderService } from './orders/order.service';
import ProductService from './products/productService';

const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .directive('home', downgradeComponent({
    component: HomeComponent
  }) as angular.IDirectiveFactory)
  .component('navigation', navigationComponent)
  .directive('customers', downgradeComponent({
    component: CustomersComponent
  }) as angular.IDirectiveFactory)
  .directive('customersTable', downgradeComponent({
    component: CustomersTableComponent
  }) as angular.IDirectiveFactory)
  .directive('customerDetail', downgradeComponent({
    component: CustomerDetailComponent
  }) as angular.IDirectiveFactory)
  .component('discount', discountComponent)
  .directive('orders', downgradeComponent({
    component: OrdersComponent
  }) as angular.IDirectiveFactory)
  .directive('createOrder', downgradeComponent({
    component: CreateOrderComponent
  }) as angular.IDirectiveFactory)
  .component('orderDetail', orderDetailComponent)
  .component('products', productsComponent)
  .component('productDetail', productDetailComponent)
  .factory('customerService', downgradeInjectable(CustomerService))
  .service('addressService', AddressService)
  .factory('orderService', downgradeInjectable(OrderService))
  .service('productService', ProductService);

export default MODULE_NAME;
