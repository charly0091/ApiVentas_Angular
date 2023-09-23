import { TestBed } from '@angular/core/testing';

import { UtilidadService } from './utilidad.service';

describe('UtilidadService', () => {
  let service: UtilidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
