import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalizacionesService } from 'src/app/services/localizaciones.service';

import { LocalizacionesComponent } from './localizaciones.component';

describe('LocalizacionesComponent', () => {
  let component: LocalizacionesComponent;
  let fixture: ComponentFixture<LocalizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalizacionesComponent ],
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule              
    ],
    providers: [
      LocalizacionesService
    ]
    })
   
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
