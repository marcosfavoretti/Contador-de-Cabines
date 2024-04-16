import { TestBed } from '@angular/core/testing';

import { GetCouterService } from './get-couter.service';

describe('GetCouterService', () => {
  let service: GetCouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
