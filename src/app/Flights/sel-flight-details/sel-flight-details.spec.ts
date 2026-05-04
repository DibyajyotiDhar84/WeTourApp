import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelFlightDetails } from './sel-flight-details';

describe('SelFlightDetails', () => {
  let component: SelFlightDetails;
  let fixture: ComponentFixture<SelFlightDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelFlightDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelFlightDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
