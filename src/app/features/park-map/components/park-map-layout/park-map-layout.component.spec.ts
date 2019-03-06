import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkMapLayoutComponent } from './park-map-layout.component';

describe('ParkMapLayoutComponent', () => {
  let component: ParkMapLayoutComponent;
  let fixture: ComponentFixture<ParkMapLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkMapLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkMapLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
