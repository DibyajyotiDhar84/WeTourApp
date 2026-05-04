import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelGuestList } from './hotel-guest-list';

describe('HotelGuestList', () => {
  let component: HotelGuestList;
  let fixture: ComponentFixture<HotelGuestList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelGuestList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelGuestList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
