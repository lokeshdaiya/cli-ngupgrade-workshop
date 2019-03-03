import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule } from '@angular/core';

import moduleName from './app.module.ajs';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  entryComponents: [HomeComponent],
  imports: [BrowserModule, UpgradeModule],
  providers: [],
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
