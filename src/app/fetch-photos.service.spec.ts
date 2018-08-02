import { TestBed, inject } from '@angular/core/testing';

import { FetchPhotosService } from './fetch-photos.service';

describe('FetchPhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchPhotosService]
    });
  });

  it('should be created', inject([FetchPhotosService], (service: FetchPhotosService) => {
    expect(service).toBeTruthy();
  }));
});
