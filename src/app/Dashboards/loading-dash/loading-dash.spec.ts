import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDash } from './loading-dash';

describe('LoadingDash', () => {
  let component: LoadingDash;
  let fixture: ComponentFixture<LoadingDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
