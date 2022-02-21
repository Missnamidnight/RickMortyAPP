import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';

const charaterList:any = [{name: 'Rick Sanchez', gender: "Male"},
{name: 'Morty Smith', gender: "Male"},
{name: 'Abadango Cluster Princess', gender: "Female"}];

describe('CharacterService', () => {
  let service: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CharacterService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(CharacterService);
  });
  beforeEach(() => {
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach( () => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getCharacters devuelve los personajes y hace el método get', () => {
    service.obtenerPersonajes().subscribe( (resp: any[]) =>{
        expect(resp).toEqual(charaterList);
    });

    const req = httpMock.expectOne('https://rickandmortyapi.com/api/character');
    expect(req.request.method).toBe('GET');
    req.flush(charaterList);
  });

});