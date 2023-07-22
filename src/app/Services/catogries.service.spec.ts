import { TestBed } from '@angular/core/testing';

import { CatogriesService } from './catogries.service';

describe('CatogriesService', () => {
  let service: CatogriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatogriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
