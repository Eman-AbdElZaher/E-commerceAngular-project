import { TestBed } from '@angular/core/testing';

import { ProductCRUDOperationService } from './product-crud-operation.service';

describe('ProductCRUDOperationService', () => {
  let service: ProductCRUDOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCRUDOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
