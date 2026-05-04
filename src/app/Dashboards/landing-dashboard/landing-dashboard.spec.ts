import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDashboard } from './landing-dashboard';

describe('LandingDashboard', () => {
  let component: LandingDashboard;
  let fixture: ComponentFixture<LandingDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
