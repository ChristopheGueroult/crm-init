import { TestBed, inject } from '@angular/core/testing';

import { PrestationsService } from './prestations.service';

describe('PrestationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrestationsService]
    });
  });

  it('should be created', inject([PrestationsService], (service: PrestationsService) => {
    expect(service).toBeTruthy();
  }));
});
