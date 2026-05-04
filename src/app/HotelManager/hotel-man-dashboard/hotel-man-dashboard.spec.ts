import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelManDashboard } from './hotel-man-dashboard';

describe('HotelManDashboard', () => {
  let component: HotelManDashboard;
  let fixture: ComponentFixture<HotelManDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelManDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelManDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
