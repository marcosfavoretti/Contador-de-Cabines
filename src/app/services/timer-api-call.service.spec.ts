import { TestBed } from '@angular/core/testing';

import { TimerApiCallService } from './timer-api-call.service';

describe('TimerApiCallService', () => {
  let service: TimerApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
