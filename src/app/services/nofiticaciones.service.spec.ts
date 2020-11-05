import { TestBed } from '@angular/core/testing';

import { NofiticacionesService } from './nofiticaciones.service';

describe('NofiticacionesService', () => {
  let service: NofiticacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NofiticacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
