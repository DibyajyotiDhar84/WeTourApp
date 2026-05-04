import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPackageManDashboard } from './tour-package-man-dashboard';

describe('TourPackageManDashboard', () => {
  let component: TourPackageManDashboard;
  let fixture: ComponentFixture<TourPackageManDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPackageManDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPackageManDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
