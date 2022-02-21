import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { PersonajesComponent } from 'src/app/components/personajes/personajes.component';
import { CharacterService } from 'src/app/services/character.service';

describe('AppComponent', () => {
  let component: PersonajesComponent;
  let fixture: ComponentFixture<PersonajesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule,
        AppModule             
    ],
      declarations: [ 
        PersonajesComponent
       ],
       providers: [  
       
           {
            provide: CharacterService,
            useValue: CharacterService
          }     
       ],
       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PersonajesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit('obtiene la lista de personajes', () => {
    const service = fixture.debugElement.injector.get(CharacterService);
    const charactersList: any[]=[];
    const spy1 = spyOn(service, 'obtenerPersonajes').and.returnValue(of(charactersList));
    component.getCharacters();
    expect(spy1).toHaveBeenCalled();
    expect(component.characters.length).toBe(0);
  });
});
