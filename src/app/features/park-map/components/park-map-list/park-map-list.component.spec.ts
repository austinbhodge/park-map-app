import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkMapListComponent } from './park-map-list.component';

describe('ParkMapListComponent', () => {
  let component: ParkMapListComponent;
  let fixture: ComponentFixture<ParkMapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkMapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
