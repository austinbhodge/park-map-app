import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkListCardComponent } from './park-list-card.component';

describe('ParkListCardComponent', () => {
  let component: ParkListCardComponent;
  let fixture: ComponentFixture<ParkListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
