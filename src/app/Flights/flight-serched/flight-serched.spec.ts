import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSerched } from './flight-serched';

describe('FlightSerched', () => {
  let component: FlightSerched;
  let fixture: ComponentFixture<FlightSerched>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightSerched]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSerched);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
