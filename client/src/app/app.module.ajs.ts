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
import { NavigationComponent } from './navigation/navigation.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import { DiscountComponent } from './customerDetail/discount.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './createOrder/create-order.component';
import orderDetailComponent from './orderDetail/orderDetail';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './productDetail/product-detail.component';
import { CustomerService } from './customers/customer.service';
import { AddressService } from './shared/address.service';
import { OrderService } from './orders/order.service';
import { ProductService } from './products/product.service';

const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .directive('home', downgradeComponent({
    component: HomeComponent
  }) as angular.IDirectiveFactory)
  .directive('navigation', downgradeComponent({
    component: NavigationComponent
  }) as angular.IDirectiveFactory)
  .directive('customers', downgradeComponent({
    component: CustomersComponent
  }) as angular.IDirectiveFactory)
  .directive('customersTable', downgradeComponent({
    component: CustomersTableComponent
  }) as angular.IDirectiveFactory)
  .directive('customerDetail', downgradeComponent({
    component: CustomerDetailComponent
  }) as angular.IDirectiveFactory)
  .directive('discount', downgradeComponent({
    component: DiscountComponent
  }) as angular.IDirectiveFactory)
  .directive('orders', downgradeComponent({
    component: OrdersComponent
  }) as angular.IDirectiveFactory)
  .directive('createOrder', downgradeComponent({
    component: CreateOrderComponent
  }) as angular.IDirectiveFactory)
  .component('orderDetail', orderDetailComponent)
  .directive('products', downgradeComponent({
    component: ProductsComponent
  }) as angular.IDirectiveFactory)
  .directive('productDetail', downgradeComponent({
    component: ProductDetailComponent
  }) as angular.IDirectiveFactory)
  .factory('customerService', downgradeInjectable(CustomerService))
  .factory('addressService', downgradeInjectable(AddressService))
  .factory('orderService', downgradeInjectable(OrderService))
  .factory('productService', downgradeInjectable(ProductService));

export default MODULE_NAME;
