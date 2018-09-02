import { TestBed, inject } from '@angular/core/testing';

import { ApporteursService } from './apporteurs.service';

describe('ApporteursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApporteursService]
    });
  });

  it('should be created', inject([ApporteursService], (service: ApporteursService) => {
    expect(service).toBeTruthy();
  }));
});
