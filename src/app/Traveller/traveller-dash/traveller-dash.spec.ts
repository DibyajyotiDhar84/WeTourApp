import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerDash } from './traveller-dash';

describe('TravellerDash', () => {
  let component: TravellerDash;
  let fixture: ComponentFixture<TravellerDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravellerDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellerDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
