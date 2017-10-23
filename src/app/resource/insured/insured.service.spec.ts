import { TestBed, inject } from '@angular/core/testing';

import { InsuredService } from './insured.service';

describe('InsuredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsuredService]
    });
  });

  it('should be created', inject([InsuredService], (service: InsuredService) => {
    expect(service).toBeTruthy();
  }));
});
