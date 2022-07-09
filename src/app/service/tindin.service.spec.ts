import { TestBed } from '@angular/core/testing';

import { TindinService } from './tindin.service';

describe('TindinService', () => {
  let service: TindinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TindinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
