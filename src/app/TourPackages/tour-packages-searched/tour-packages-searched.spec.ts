import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPackagesSearched } from './tour-packages-searched';

describe('TourPackagesSearched', () => {
  let component: TourPackagesSearched;
  let fixture: ComponentFixture<TourPackagesSearched>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPackagesSearched]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPackagesSearched);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
