import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelTourPackagesInfo } from './sel-tour-packages-info';

describe('SelTourPackagesInfo', () => {
  let component: SelTourPackagesInfo;
  let fixture: ComponentFixture<SelTourPackagesInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelTourPackagesInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelTourPackagesInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
