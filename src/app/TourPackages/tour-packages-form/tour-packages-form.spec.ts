import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPackagesForm } from './tour-packages-form';

describe('TourPackagesForm', () => {
  let component: TourPackagesForm;
  let fixture: ComponentFixture<TourPackagesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPackagesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPackagesForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
