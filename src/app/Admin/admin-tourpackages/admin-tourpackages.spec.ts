import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTourpackages } from './admin-tourpackages';

describe('AdminTourpackages', () => {
  let component: AdminTourpackages;
  let fixture: ComponentFixture<AdminTourpackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTourpackages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTourpackages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
