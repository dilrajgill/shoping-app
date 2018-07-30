import { TestBed, inject } from '@angular/core/testing';

import { GeoApiService } from './geo-api.service';

describe('GeoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoApiService]
    });
  });

  it('should be created', inject([GeoApiService], (service: GeoApiService) => {
    expect(service).toBeTruthy();
  }));
});
