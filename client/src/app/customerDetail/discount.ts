import {
  Directive,
  Input,
  Output,
  ElementRef,
  Injector,
  EventEmitter
} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

const template = require('./discount.html');

export const discountComponent = {
  template,
  bindings: {
    customerDiscount: '<',
    update: '&'
  },
  controller: discountComponentController
};

function discountComponentController() {
  const vm = this;

  vm.editDiscount = false;

  vm.editDiscountType = () => {
    vm.editDiscount = true;
  };

  vm.updateDiscountType = () => {
    vm.update({ discount: vm.selectedDiscount });
    vm.editDiscount = false;
  };

  vm.discounts = [
    {
      discountId: 1,
      discountPercent: 10,
      discountName: 'Employee'
    },
    {
      discountId: 2,
      discountPercent: 5,
      discountName: 'Friends & Family'
    },
    {
      discountId: 3,
      discountPercent: 20,
      discountName: 'Famous Drummer'
    }
  ];
}

@Directive({
  selector: 'discount'
})
export class DiscountDirective extends UpgradeComponent {
  @Input() customerDiscount: {};
  @Output() update: EventEmitter<{}>;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('discount', elementRef, injector);
  }
}
