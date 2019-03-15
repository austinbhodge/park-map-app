import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';


import { ClientLocationService } from './client-location.service';

describe('ClientLocationService', () => {
  let service: ClientLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ClientLocationService
      ]
    });

    service = TestBed.get(ClientLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
