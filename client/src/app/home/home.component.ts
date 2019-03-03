import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title: string;
  constructor() {
    this.title = 'Awesome, Inc. Internal Ordering System';
  }
}
