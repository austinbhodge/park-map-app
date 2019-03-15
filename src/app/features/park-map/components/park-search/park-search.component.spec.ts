import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkSearchComponent } from './park-search.component';

describe('ParkSearchComponent', () => {
  let component: ParkSearchComponent;
  let fixture: ComponentFixture<ParkSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
