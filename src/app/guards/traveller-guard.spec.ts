import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { travellerGuard } from './traveller-guard';

describe('travellerGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => travellerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
