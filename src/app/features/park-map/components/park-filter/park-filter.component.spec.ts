import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkFilterComponent } from './park-filter.component';

describe('ParkFilterComponent', () => {
  let component: ParkFilterComponent;
  let fixture: ComponentFixture<ParkFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
