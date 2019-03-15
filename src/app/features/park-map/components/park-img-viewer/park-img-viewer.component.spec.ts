import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkImgViewerComponent } from './park-img-viewer.component';

describe('ParkImgViewerComponent', () => {
  let component: ParkImgViewerComponent;
  let fixture: ComponentFixture<ParkImgViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkImgViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkImgViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
