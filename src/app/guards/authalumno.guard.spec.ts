import { TestBed } from '@angular/core/testing';

import { AuthalumnoGuard } from './authalumno.guard';

describe('AuthalumnoGuard', () => {
  let guard: AuthalumnoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthalumnoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
