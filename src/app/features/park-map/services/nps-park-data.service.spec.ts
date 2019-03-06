import { TestBed } from '@angular/core/testing';

import { NpsParkDataService } from './nps-park-data.service';

describe('NpsParkDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NpsParkDataService = TestBed.get(NpsParkDataService);
    expect(service).toBeTruthy();
  });
});
