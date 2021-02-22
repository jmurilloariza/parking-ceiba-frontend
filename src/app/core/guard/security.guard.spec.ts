import { TestBed, inject } from '@angular/core/testing';

import { SecurityGuard } from './security.guard';

describe('SecurityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityGuard]
    });
  });

  it('should ...', inject([SecurityGuard], (guard: SecurityGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('Debería el Guard permitir el acceso', inject([SecurityGuard], (guard: SecurityGuard) => {
    expect(guard.canActivate()).toBeTruthy();
  }));

});
