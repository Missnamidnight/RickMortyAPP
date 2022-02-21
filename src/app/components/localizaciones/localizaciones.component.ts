import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalizacionesService } from 'src/app/services/localizaciones.service';

@Component({
  selector: 'app-localizaciones',
  templateUrl: './localizaciones.component.html',
  styleUrls: ['./localizaciones.component.scss']
})
export class LocalizacionesComponent implements OnInit {

  formFiltrar:FormGroup = new FormGroup({
    form: new FormControl('')
  });

  busqueda: any;
  buscarlocalizaciones: any = {name: '', type: ''};
  localizaciones: any[] = [];

  constructor(private localizacionesServ: LocalizacionesService) { 
    
  }

  ngOnInit(): void {
    this.getListadoLocalizaciones();

  }

  fitrarLocalizaciones(){
    this.localizacionesServ.obtenerLocalizaciones().subscribe({
      next: (r) => {
        this.busqueda = r.results.filter( (loc: { name: any; type: any; }) => 
        loc.name === this.buscarlocalizaciones.name || loc.type === this.buscarlocalizaciones.type);
        console.log(this.busqueda);
      },
    });
  }

  getListadoLocalizaciones(): void {
    this.localizacionesServ.obtenerLocalizaciones().subscribe({
      next: (r) => this.busqueda = r.results
    });
    
    this.localizacionesServ.obtenerLocalizaciones().subscribe({
      next: (r) => {
        const localizaciones: any = r.results.map((tipo: any) => {    
          return tipo.type;
        });
                localizaciones.forEach( (elemento: any) => {
          if (!this.localizaciones.includes(elemento)) {
            this.localizaciones.push(elemento);
          }
        })   
      }
    });
  }

}
