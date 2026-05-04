import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelHotelInfo } from './sel-hotel-info';

describe('SelHotelInfo', () => {
  let component: SelHotelInfo;
  let fixture: ComponentFixture<SelHotelInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelHotelInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelHotelInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
