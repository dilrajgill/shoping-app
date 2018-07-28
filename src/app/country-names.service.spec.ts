import { TestBed, inject } from '@angular/core/testing';

import { CountryNamesService } from './country-names.service';

describe('CountryNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryNamesService]
    });
  });

  it('should be created', inject([CountryNamesService], (service: CountryNamesService) => {
    expect(service).toBeTruthy();
  }));
});
