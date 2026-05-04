import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { packageManagerGuard } from './package-manager-guard';

describe('packageManagerGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => packageManagerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
