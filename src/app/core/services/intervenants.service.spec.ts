import { TestBed, inject } from '@angular/core/testing';

import { IntervenantsService } from './intervenants.service';

describe('IntervenantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervenantsService]
    });
  });

  it('should be created', inject([IntervenantsService], (service: IntervenantsService) => {
    expect(service).toBeTruthy();
  }));
});
