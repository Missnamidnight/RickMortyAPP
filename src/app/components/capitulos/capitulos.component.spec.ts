import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CapitulosComponent } from './capitulos.component';
import { CapsService } from 'src/app/services/caps.service';
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';

describe('CapitulosComponent', () => {
  let component: CapitulosComponent;
  let fixture: ComponentFixture<CapitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule /*no realiza una petición HTTP real*/              
    ],
      declarations: [ CapitulosComponent ],
      providers: [  //Servicios que utiliza nuestro componente
        CapsService      
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] //Para evitar ciertos errores 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
