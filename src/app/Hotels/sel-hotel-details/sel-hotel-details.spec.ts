import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelHotelDetails } from './sel-hotel-details';

describe('SelHotelDetails', () => {
  let component: SelHotelDetails;
  let fixture: ComponentFixture<SelHotelDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelHotelDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelHotelDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
