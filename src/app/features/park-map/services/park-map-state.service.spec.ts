import { TestBed } from '@angular/core/testing';

import { ParkMapStateService } from './park-map-state.service';

describe('ParkMapStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkMapStateService = TestBed.get(ParkMapStateService);
    expect(service).toBeTruthy();
  });
});
