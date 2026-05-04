import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accessServiceGuard } from './access-service-guard';

describe('accessServiceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessServiceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
