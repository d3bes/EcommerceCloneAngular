import { TestBed } from '@angular/core/testing';

import { ProductDetailesService } from './product-detailes.service';

describe('ProductDetailesService', () => {
  let service: ProductDetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
