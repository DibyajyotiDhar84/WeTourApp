import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSearched } from './hotel-searched';

describe('HotelSearched', () => {
  let component: HotelSearched;
  let fixture: ComponentFixture<HotelSearched>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelSearched]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelSearched);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
