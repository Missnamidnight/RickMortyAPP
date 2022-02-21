import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatosDelUsuarioService } from 'src/app/services/datos-del-usuario.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  datosUsuario: any;

  constructor(private translate:TranslateService,private userService:DatosDelUsuarioService) {
  
   }

  ngOnInit(): void {
    this.mostrarUsuarioInicio();
  }
  // Se cambia el idioma a Español
  changeLanguageToSpanish(): void {
    this.translate.use('es');
    console.log('Idioma cambiado al Español' + this.translate.instant('header.Personajes'));
  }

  // Se cambia el idioma a Inglés
  changeLanguageToEnglish(): void {
    this.translate.use('en');
    console.log('Idioma cambiado al Inglés'+ this.translate.instant('header.Personajes'));
  }
  mostrarUsuarioInicio(){
    this.userService.obtenerUsuario().subscribe({
      next: (r) => {
        this.datosUsuario = r;
        console.log(this.datosUsuario)
      },
    });
  }
}
