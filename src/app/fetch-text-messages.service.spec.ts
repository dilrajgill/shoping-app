import { TestBed, inject } from '@angular/core/testing';

import { FetchTextMessagesService } from './fetch-text-messages.service';

describe('FetchTextMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchTextMessagesService]
    });
  });

  it('should be created', inject([FetchTextMessagesService], (service: FetchTextMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
