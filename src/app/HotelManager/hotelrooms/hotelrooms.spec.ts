import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotelrooms } from './hotelrooms';

describe('Hotelrooms', () => {
  let component: Hotelrooms;
  let fixture: ComponentFixture<Hotelrooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hotelrooms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hotelrooms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
