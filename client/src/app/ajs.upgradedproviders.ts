export function locationServiceFactory(i: any) {
  return i.get('$location');
}

export const locationServiceProvider = {
  provide: '$location',
  useFactory: locationServiceFactory,
  deps: ['$injector']
};

export function productServiceFactory(i: any) {
  return i.get('productService');
}

export const productServiceProvider = {
  provide: 'productService',
  useFactory: productServiceFactory,
  deps: ['$injector']
};

export function addressServiceFactory(i: any) {
  return i.get('addressService');
}

export const addressServiceProvider = {
  provide: 'addressService',
  useFactory: addressServiceFactory,
  deps: ['$injector']
};
