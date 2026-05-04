import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByHotels } from './near-by-hotels';

describe('NearByHotels', () => {
  let component: NearByHotels;
  let fixture: ComponentFixture<NearByHotels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearByHotels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearByHotels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
