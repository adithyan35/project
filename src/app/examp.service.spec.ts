import { TestBed } from '@angular/core/testing';

import { ExampService } from './examp.service';

describe('ExampService', () => {
  let service: ExampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
