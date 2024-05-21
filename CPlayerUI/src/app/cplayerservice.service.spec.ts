import { TestBed } from '@angular/core/testing';

import { CplayerserviceService } from './cplayerservice.service';

describe('CplayerserviceService', () => {
  let service: CplayerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CplayerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
