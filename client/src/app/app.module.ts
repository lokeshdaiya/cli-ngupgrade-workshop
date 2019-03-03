import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import moduleName from './app.module.ajs';
import { HomeComponent } from './home/home.component';
import { CustomerService } from './customers/customer.service';

@NgModule({
  declarations: [HomeComponent],
  entryComponents: [HomeComponent],
  imports: [BrowserModule, UpgradeModule, HttpClientModule],
  providers: [CustomerService],
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
