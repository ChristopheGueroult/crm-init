import { TestBed, inject } from '@angular/core/testing';

import { TableauxService } from './tableaux.service';

describe('TableauxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableauxService]
    });
  });

  it('should be created', inject([TableauxService], (service: TableauxService) => {
    expect(service).toBeTruthy();
  }));
});
