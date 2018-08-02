import { TestBed, inject } from '@angular/core/testing';

import { AlwaysAuthGuard } from './always-auth-gaurd.service';

describe('AlwaysAuthGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlwaysAuthGuard]
    });
  });

  it('should be created', inject([AlwaysAuthGuard], (service: AlwaysAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
