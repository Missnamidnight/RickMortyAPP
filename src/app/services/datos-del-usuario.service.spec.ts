import { TestBed } from '@angular/core/testing';

import { DatosDelUsuarioService } from './datos-del-usuario.service';

describe('DatosDelUsuarioService', () => {
  let service: DatosDelUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosDelUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
