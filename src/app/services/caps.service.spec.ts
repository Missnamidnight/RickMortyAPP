import { TestBed } from '@angular/core/testing';

import { CapsService } from './caps.service';

describe('CapsService', () => {
  let service: CapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
