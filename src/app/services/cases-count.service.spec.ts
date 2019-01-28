import { TestBed } from '@angular/core/testing';

import { CasesCountService } from './cases-count.service';

describe('CasesCountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasesCountService = TestBed.get(CasesCountService);
    expect(service).toBeTruthy();
  });
});
