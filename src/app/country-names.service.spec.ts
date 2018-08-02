import { TestBed, inject } from '@angular/core/testing';

import { CountryNamesService } from './country-names.service';

describe('CountryNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryNamesService]
    });
  });

  it('Service is there', inject([CountryNamesService], (service: CountryNamesService) => {
    expect(service).toBeTruthy();
  }));
  it('function get Country is there', inject([CountryNamesService], (service: CountryNamesService) => {
    expect(service.getCountry).toBeTruthy();
  }));
});
